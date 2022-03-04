import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import PlayGround from "./pages/PlayGround";
import Auth from "./pages/Auth";
import Alert from "./util/Alert";
import DashBoard from "./pages/DashBoard";
import Notes from "./pages/Notes";
import NoteBooks from "./pages/NoteBooks";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth />} exact />
          <Route path="/home" element={<Homepage />} exact />
          <Route path="/playground" element={<PlayGround />} exact />
          <Route path="/dashboaard" element={<DashBoard />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notebooks" element={<NoteBooks />} />
        </Routes>
        <Alert />
      </div>
    </>
  );
}

export default App;
