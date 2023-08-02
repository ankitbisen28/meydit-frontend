import { Button, Grid } from "@mui/material";
import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import { Category } from "../components/Category";
import { Banner } from "../components/Banner";

export const Home = () => {
  const { logout } = useContext(UserContext);

  return (
    <>
      <Grid container spacing={2} marginTop={9}>
        <Grid item xs={4} sx={{backgroundColor: 'red'}}>
          <Category />
        </Grid>
        <Grid item xs={8} sx={{backgroundColor: 'lightgreen'}}>
          <Banner />
        </Grid>
      </Grid>
      <Button color="error" onClick={logout}>Logout</Button>
    </>
  );
};
