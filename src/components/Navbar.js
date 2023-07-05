import React from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  AppBar,
  Toolbar,
  useMediaQuery,
  Box,
  useTheme,
  Button,
} from "@mui/material";
import { DrawerComp } from "./DrawerComp";
import UserContext from "../Context/UserContext";
import { useContext } from "react";

export const Navbar = () => {

  const { loginUser, logout } = useContext(UserContext);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      color="secondary"
      sx={{
        justifyContent: "none",
      }}
      px="20px"
    >
      <Toolbar>
        <Link
          style={{
            fontSize: "1.5rem",
            fontFamily: "Ubuntu",
            color: "#fff",
            textDecoration: "none",
          }}
          to="/"
        >
          Meydit
        </Link>

        {isMatch ? (
          <Box marginLeft="auto">
            <DrawerComp />
          </Box>
        ) : (
          <Stack
            direction="row"
            marginLeft="auto"
            gap="40px"
            fontSize="20px"
            alignItems="flex-end"
          >
            {loginUser === true ? (
              <Stack
                direction="row"
                marginLeft="auto"
                gap="40px"
                alignItems="center"
              >
                <Link
                  to="/"
                  style={{
                    fontFamily: "Ubuntu",
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  Home
                </Link>
                <Link
                  style={{
                    fontFamily: "Ubuntu",
                    textDecoration: "none",
                    color: "#fff",
                  }}
                  to="/about"
                >
                  About
                </Link>
                <Link
                  style={{
                    fontFamily: "Ubuntu",
                    textDecoration: "none",
                    color: "#fff",
                  }}
                  to="/myprofile"
                >
                  Profile
                </Link>
                <Button
                  style={{
                    color: "#fff",
                  }}
                  onClick={logout}
                >
                  Logout
                </Button>
              </Stack>
            ) : (
              <Link
                style={{
                  fontFamily: "Ubuntu",
                  textDecoration: "none",
                  color: "#fff",
                }}
                to="/about"
              >
                About
              </Link>
            )}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};
