import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Alert, Box } from "@mui/material";

import "./App.css";
import Nav from "./components/Nav/Nav";
import Homepage from "./pages/Homepage";
import styled from "@emotion/styled";
import Write from "./pages/Write";



function App() {
  return (
    <Router>
      <div className={App}>
        <Nav />
      </div>
      {/* <Alert /> */}
      <Box component="main" sx={{ml: 9.5, mt: 8.4, p: 3 }}>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/write" element={<Write />} exact />
          {/* <Route path="/home" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<Coinpage />} /> */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
