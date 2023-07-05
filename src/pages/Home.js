import { Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

export const Home = () => {

  const { logout } = useContext(UserContext);

  return (
    <>
      <Typography variant="h5" marginTop={9}>
        Home
      </Typography>
      <Button onClick={logout}>Logout</Button>
    </>
  );
};
