import { Button, Typography } from "@mui/material";
import React from "react";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const singOut = useSignOut();
  const navigate = useNavigate();
  
  const logout = () => {
      singOut();
      navigate("/login");
  }
  return (
    <>
      <Typography variant="h5">Home</Typography>
      <Button onClick={logout}>Logout</Button>
    </>
  );
};
