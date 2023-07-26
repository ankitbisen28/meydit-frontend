import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import state from "../utils/State.json";
import UserContext from "../Context/UserContext";
import { StateList } from "../components/StateList";

export const UserDetail = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const { headers } = useContext(UserContext);

  const handleSave = async (event) => {
    event.preventDefault();
    const response = await axios.post("/api/user/profile/create", userData, {
      headers: headers,
    });
    navigate("/");
    console.log(response);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      mt={15}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography fontSize={30}>Please Fill Your Details</Typography>
      <Box display="flex" flexDirection="row">
        <TextField
          name="first_name"
          id="firstName"
          style={{ margin: "2rem 1rem 0 0" }}
          label="First Name"
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
        <TextField
          name="last_name"
          style={{ margin: "2rem 1rem 0 0" }}
          label="Last Name"
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
      </Box>
      <Box display="flex" flexDirection="row">
        <TextField
          name="phone"
          style={{ margin: "2rem 1rem 0 0" }}
          label="Phone"
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />

        <TextField
          name="address"
          style={{ margin: "2rem 1rem 0 0" }}
          label="Address"
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
      </Box>
      <Box display="flex" flexDirection="row">
        <StateList state={state} handleChange={handleChange}/>
        <TextField
          name="post_code"
          style={{ margin: "2rem 1rem 0 0" }}
          label="Zip Code"
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
      </Box>
      <Button
        size="large"
        style={{ margin: "2rem 1rem 0 0" }}
        variant="contained"
        onClick={handleSave}
      >
        Save
      </Button>
    </Box>
  );
};
