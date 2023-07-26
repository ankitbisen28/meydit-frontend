import { Container, Typography, TextField, Box, Button } from "@mui/material";
import React, { useState, useContext } from "react";
import Cloths from "../utils/Cloths.json";
import { ClothList } from "../components/ClothList";
import { Input } from "@mui/material";
import axios from "axios";
import UserContext from "../Context/UserContext";
import state from "../utils/State.json";
import { StateList } from "../components/StateList";

export const PostJob = () => {
  const [postJob, setPostJob] = useState();

  const { headers } = useContext(UserContext);

  const handleChange = (e) => {
    setPostJob({ ...postJob, [e.target.name]: e.target.value });
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const response = await axios.post("/api/post/job", postJob, {
      headers: headers,
    });
    console.log(response);
    setPostJob("");
  };

  const cloth = Cloths.clothes;

  return (
    <Container>
      <Typography marginTop="6rem" textAlign="center" variant="h4">
        Post job
      </Typography>
      <Box display="flex" flexDirection="row" justifyContent="center">
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
        <TextField
          name="phone_num"
          style={{ margin: "2rem 1rem 0 0" }}
          label="Phone"
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <TextField
          name="address"
          style={{ margin: "2rem 1rem 0 0" }}
          label="Address"
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
        <ClothList cloth={cloth} handleChange={handleChange} />
        <TextField
          name="post_code"
          style={{ margin: "2rem 1rem 0 0" }}
          label="Zip Code"
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Input type="file" name="image" onChange={handleChange} />
        <TextField
          name="budget"
          style={{ margin: "2rem 1rem 0 1rem" }}
          label="Budget"
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
        <TextField
          name="post_description"
          style={{ margin: "2rem 1rem 0 0" }}
          label="Description"
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="center">
      <StateList state={state} handleChange={handleChange}/>
        <TextField
          name="email"
          style={{ margin: "2rem 1rem 0 0" }}
          label="email"
          type="email"
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
        <Button
          size="large"
          style={{ margin: "2rem 1rem 0 0" }}
          variant="contained"
          onClick={handleSave}
        >
          Post Job
        </Button>
      </Box>
    </Container>
  );
};
