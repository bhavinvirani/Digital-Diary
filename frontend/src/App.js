import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav/Nav";
import Homepage from "./pages/Homepage";
import Write from "./pages/Write";
import Auth from "./pages/Auth";
import Alert from "./util/Alert";
import { DDState } from "./context/DDProvider";
import { Box } from "@material-ui/core";
import Note from "./pages/Note";

function App() {
  const { pathname } = useLocation();
  const { user } = DDState();


  return (
    <>
      {user && <Nav />}

      <Box sx={{ ml: 9.5, mt: 8.4, p: 3 }}>
      <Routes>
        <Route path="/" element={<Auth />} exact />
        <Route path="/home" element={<Homepage />} exact />
        <Route path="/write" element={<Write />} exact />
        <Route path="/bote/:id" element={<Note />} />
      </Routes>
      <Alert />
      </Box>
    </>
  );
}

export default App;
