import React, { useContext } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UserContext from "../Context/UserContext";

export const Profile = () => {
  const { userDetails, logout } = useContext(UserContext);

  
  const userProfile = userDetails.map((item) => item.userProfile);
  
  return (
    <Box
      width="100wh"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {userProfile.map((parent) => {
        return parent.map((item) => {
          return (
            <Grid container spacing={6} key={item.id}>
              <Grid
                item
                xs={6}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <AccountCircleIcon style={{ width: "7rem", height: "7rem" }} />
                <Typography fontSize={30}>{`${item.first_name} ${item.last_name}`}</Typography>
              </Grid>
              <Grid item xs={6} display="flex" flexDirection="column">
                {userDetails.map((user) => {
                  return (
                    <Typography key={user.email} fontSize={20}>Email : {user.email}</Typography>
                  );
                })}
                <Typography marginTop="2rem" fontSize={20}>
                  Phone : {item.phone}
                </Typography>
                <Typography marginTop="2rem" fontSize={20}>
                  Address : {item.address}
                </Typography>
                <Typography marginTop="2rem" fontSize={20}>
                  State : {item.state}
                </Typography>
                <Typography marginTop="2rem" fontSize={20}>
                  Post Code : {item.post_code}
                </Typography>
                <Button style={{marginTop: '2rem', width: "100px"}} variant="contained" onClick={logout}>
                  Logout
                </Button>
              </Grid>
            </Grid>
          );
        });
      })}
    </Box>
  );
};
