import { Route, Routes } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav/Nav";
import Homepage from "./pages/Homepage";
import PlayGround from "./pages/PlayGround";
import Auth from "./pages/Auth";
import Alert from "./util/Alert";
import { DDState } from "./context/DDProvider";
import { Box } from "@material-ui/core";
import DashBoard from "./pages/DashBoard";
import Notes from "./pages/Notes";
import NoteBooks from "./pages/NoteBooks";

function App() {
  const { user } = DDState();

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} exact />
        <Route path="/home" element={<Homepage />} exact />
        <Route path="/playground" element={<PlayGround />} exact />
        <Route path="/dashboaard" element={<DashBoard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notebooks" element={<NoteBooks />} />
      </Routes>
      <Alert />
    </>
  );
}

export default App;
