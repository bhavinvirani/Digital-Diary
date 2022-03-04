import { Box } from "@mui/material";
import React from "react";
import Nav from "../components/Nav/Nav";
import { DDState } from "../context/DDProvider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Homepage = () => {
  const { user } = DDState();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ ml: 9.5, mt: 8.4, p: 2 }}>
      <>
        {user && <Nav />}
        <Box sx={{ width: "100%", minHeight: "50%", backgroundColor: "lightGray" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Images" />
            <Tab value="two" label="Documents" />
            <Tab value="three" label="Audio" />
          </Tabs>
        </Box>
      </>
    </Box>
  );
};

export default Homepage;
