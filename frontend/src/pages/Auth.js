import { AppBar, Container, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import GoogleButton from "react-google-button";

const Auth = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      navigate("/home");
    }
  }, [navigate]);
  return (
    <>
      <Container
        sx={{
          backgroundColor: "lightGray",
          height: "120vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        maxWidth="100%"
      >
        <Box
          sx={{
            backgroundColor: "lightGray",
            paddingTop: 4,
            height: "100vh",
            width: "100%",
            maxWidth: "50%",
          }}
        >
          <Box
            sx={{
              minWidth: 500,
              display: "flex",
              justifyContent: "center",
              backgroundColor: "skyBlue",
              marginBottom: 2,
              borderRadius: 4,
              width: "100%",
            }}
          >
            <Typography sx={{ padding: 2, fontSize: 32 }}>
              One Step away from Your Diary
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "white",
              marginBottom: 4,
              borderRadius: 4,
              borderWidth: 1,
              width: "100%",
            }}
          >
            <Box>
              <AppBar
                position="static"
                style={{
                  backgroundColor: "skyBlue",
                  color: "black",
                  border: "1px solid gray",
                  borderRadius: "6px",
                }}
              >
                <Tabs value={value} onChange={handleChange} variant="fullWidth">
                  <Tab label="Login" />
                  <Tab label="SignUp" />
                </Tabs>
              </AppBar>
              {value === 0 && <Login />}
              {value === 1 && <Signup />}
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>OR</span>
              <GoogleButton
                style={{
                  width: "100%",
                  outline: "none",
                  borderRadius: 4,
                  padding: 4,
                  margin: 14,
                  maxWidth: 600,
                }}
                // onClick={signInWithGoogle}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Auth;
