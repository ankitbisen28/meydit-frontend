import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const signIn = useSignIn();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/register", { email, password });

      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: response.data.email },
      });
      navigate("/");
      // Redirect user to dashboard
    } catch (error) {
      alert("please enter right details");
      console.error(error);
    }
  };

  return (
    <Box width="100%" height="100vh" display="flex" justifyContent="center">
      <Box
        width="300px"
        height="400px"
        sx={{
          border: "2px solid gray",
          marginTop: "5rem",
          borderRadius: "10px",
        }}
      >
        <Typography
          color="secondary"
          textAlign="center"
          fontWeight="bold"
          variant="h5"
          sx={{ marginTop: "2rem" }}
        >
          Register
        </Typography>
        <Box
          width="250px"
          height="300px"
          display="flex"
          flexDirection="column"
          alignContent="center"
          margin="auto"
        >
          <TextField
            sx={{ marginTop: "2rem" }}
            label="username"
            variant="outlined"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            sx={{ marginTop: "1rem" }}
            label="password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <TextField
            sx={{ marginTop: "1rem" }}
            label="confirm password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ marginTop: "1rem" }}
          >
            Make a Account
          </Button>
          <Button variant="text" onClick={() => navigate("/login")}>
            Alredy have a Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
