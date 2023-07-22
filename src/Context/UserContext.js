import React, { createContext, useState, useEffect } from "react";
import { useSignOut } from "react-auth-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import { useAuthHeader } from "react-auth-kit";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userDetails, setuserDetails] = useState({});
  const singOut = useSignOut();
  const navigate = useNavigate();
  const signIn = useSignIn();

  // auth header from react-auth-kit
  const authHeader = useAuthHeader();

  const headers = {
    "Content-Type": "application/json",
    Authorization: authHeader(),
  };

  const fetchUserDetails = async () => {
    try {
      if (authHeader()) {
        const response = await axios.get("/api/user/profiles", {
          headers: headers,
        });
        setuserDetails(response.data);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
    // eslint-disable-next-line
  }, [authHeader()]);

  const login = async () => {
    try {
      const response = await axios.post("/api/login", { email, password });
      // user get login with the help of react aut kit.
      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: response.data.email },
      });
      navigate("/");
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
    } catch (error) {
      alert("please enter right details");
      console.error(error);
    }
  };

  const logout = () => {
    singOut();
    navigate("/login");
  };

  const value = {
    logout,
    login,
    setEmail,
    setPassword,
    email,
    password,
    confirmPassword,
    setConfirmPassword,
    register,
    headers,
    userDetails,
    authHeader,
  };

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};

export default UserContext;
