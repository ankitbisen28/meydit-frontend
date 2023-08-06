import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Stack, Avatar } from "@mui/material";
import Ankit from "../assets/Images/Ankit.jpg";

export const NavBar2 = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between", height: "70px" }}>
        <Stack direction="row" gap="40px" alignItems="center">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Home
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/about"
          >
            About
          </Link>
        </Stack>
        <Stack direction="row" alignItems="flex-end">
          <Avatar alt="Ankit Bisen" src={Ankit} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
