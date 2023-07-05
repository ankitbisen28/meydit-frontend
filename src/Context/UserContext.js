import React, { createContext, useState } from "react";
import { useSignOut } from "react-auth-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const singOut = useSignOut();
  const navigate = useNavigate();
  const signIn = useSignIn();

  const login = async () => {
    try {
      const response = await axios.post("/api/login", { email, password });
      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: response.data.email },
      });
      navigate("/");
      setLoginUser(true);
    } catch (error) {
      alert("please enter right details");
      console.error(error);
    }
  };

  const register = async () => {
    try {
      const response = await axios.post("/api/register", { email, password });
      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: response.data.email },
      });
      // Redirect user to HomePage
      navigate("/userDetail");
      setLoginUser(true);
    } catch (error) {
      alert("please enter right details");
      console.error(error);
    }
  };

  const logout = () => {
    singOut();
    setLoginUser(false);
    navigate("/login");
  };

  const value = {
    logout,
    loginUser,
    setLoginUser,
    login,
    setEmail,
    setPassword,
    email,
    password,
    confirmPassword,
    setConfirmPassword,
    register,
  };

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};

export default UserContext;
