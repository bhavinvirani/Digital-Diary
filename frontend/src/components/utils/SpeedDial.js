import React, { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import BookIcon from "@mui/icons-material/Book";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DescriptionIcon from "@mui/icons-material/Description";
import TagModal from "../Modals/TagModal";
import NoteModal from "../Modals/NoteModal";
import NoteBookModal from "../Modals/NoteBookModal";
import { useNavigate } from "react-router-dom";

export default function OpenIconSpeedDial() {
  const navigate = useNavigate();

  const [openTag, setTagOpen] = useState(false);
  const [openNote, setNoteOpen] = useState(false);
  const [openNoteBook, setNoteBookOpen] = useState(false);

  const openTagHandler = () => {
    setTagOpen(!openTag);
  };
  const openNoteHandler = () => {
    setNoteOpen(!openNote);
  };
  const openNoteBookHandler = () => {
    setNoteBookOpen(!openNoteBook);
  };

  return (
    <>
      <SpeedDial
        ariaLabel="Create Something"
        sx={{ position: "absolute", bottom: 16, left: 8 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        direction="up"
        onClick={() => {navigate("/playground")}}
      >
        <SpeedDialAction
          key="New Tag"
          icon={<LocalOfferIcon />}
          tooltipTitle="New Tag"
          onClick={openTagHandler}
        />
        <SpeedDialAction
          key="New Note"
          icon={<DescriptionIcon />}
          tooltipTitle="New Note"
          onClick={openNoteHandler}
        />
        <SpeedDialAction
          key="New NoteBook"
          icon={<BookIcon />}
          tooltipTitle="New NoteBook"
          onClick={openNoteBookHandler}
        />
      </SpeedDial>
      <TagModal openTagHandler={openTagHandler} openTag={openTag}/>
      <NoteModal openNoteHandler={openNoteHandler} openNote={openNote}/>
      <NoteBookModal openNoteBookHandler={openNoteBookHandler} openNoteBook={openNoteBook}/>
    </>
  );
}
