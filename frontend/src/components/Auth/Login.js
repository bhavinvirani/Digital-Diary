import { Box, Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../config/validate";
import { DDState } from "../../context/DDProvider";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("test@test.com");
  const [pwd, setPwd] = useState("123");
  const { setAlert } = DDState();

  const handleSubmit = async () => {
    if (!email || !pwd) {
      setAlert({
        open: true,
        message: "Plese fill all the Fields",
        type: "error",
      });
      return;
    } else if (!validateEmail(email)) {
      setAlert({
        open: true,
        message: "Invalid Email",
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
        "api/user/login",
        {
          email: email,
          password: pwd,
        },
        config
      );
      // console.log(data);

      // await setAlert({
      //   open: true,
      //   message: "Registration Successful",
      //   type: "success",
      // });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/home");
    } catch (e) {
      console.log(e);
      setAlert({
        open: true,
        message: e.message,
        type: "error",
      });
      return;
    }
  };

  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TextField
        variant="outlined"
        label="Enter Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Enter Password"
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        fullWidth
      />

      <Button
        className="btn-grad"
        variant="contained"
        size="large"
        onClick={handleSubmit}
        style={{ backgroundColor: "#00ADB5" }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
