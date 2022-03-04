import { Box } from "@mui/material";
import React from "react";
import Nav from "../components/Nav/Nav";
import { DDState } from "../context/DDProvider";
import { Heatmap } from "contribution-heatmap";

const DashBoard = () => {
  const { user } = DDState();

  return (
    <Box sx={{ ml: 9.5, mt: 8.4, p: 2 }}>
      {user && <Nav />}
      <Heatmap />
    </Box>
  );
};

export default DashBoard;
