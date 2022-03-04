import { Button, FormControl, FormLabel, Input } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DDState } from "../../context/DDProvider";
import axios from "axios";

const Signup = () => {
  const { setAlert } = DDState();

  const navigate = useNavigate();

  const [pic, setPic] = useState();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const submitHandler = async () => {
    console.log(formData)
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmpassword
    ) {
      setAlert({
        open: true,
        message: "Plese fill all the Fields",
        type: "error",
      });

      return;
    }
    
    if (formData.password !== formData.confirmpassword) {
      setAlert({
        open: true,
        message: "Passwords Do Not Match",
        type: "error",
      });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "api/user/signup",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          pic,
        },
        config
      );
      // console.log(data);

      // setAlert({
      //   open: true,
      //   message: "Registration Successful",
      //   type: "success",
      // });
      localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/home");
    } catch (error) {
      setAlert({
        open: true,
        message: "Error Occured!",
        type: "error",
      });
    }
  };

  const postDetails = (pic) => {
    if (pic === undefined) {
      setAlert({
        open: true,
        message: "Please Select an Image!",
        type: "error",
      });
      return;
    }
    // console.log(pic);
    if (pic.type === "image/jpeg" || pic.type === "image/png") {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dresvpib4");
      fetch("https://api.cloudinary.com/v1_1/dresvpib4/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setAlert({
        open: true,
        message: "Please Select an Image!",
        type: "error",
      });
      return;
    }
  };

  return (
    <Stack spacing={2} padding={2} marginTop={2}>
      <FormControl id="first-name" isRequired>
        <FormLabel marginTop={2}>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
        />
      </FormControl>
      <FormControl id="signup_email" isRequired>
        <FormLabel >Email Address</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
        />
      </FormControl>

      <FormControl id="signup_password" isRequired>
        <FormLabel >Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
        />
      </FormControl>

      <FormControl id="confirmpassword" isRequired>
        <FormLabel >Confirm Password</FormLabel>
        <Input
          type= "password"
          placeholder="Confirm password"
          name="confirmpassword"
          value={formData.confirmpassword}
          onChange={handleOnChange}
        />
      </FormControl>

      <FormControl id="pic">
        <FormLabel >Upload your Picture</FormLabel>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        variant="contained"
        size="large"
        onClick={submitHandler}
        style={{ backgroundColor: "#00ADB5" }}
      >
        Sign Up
      </Button>
    </Stack>
  );
};

export default Signup;
