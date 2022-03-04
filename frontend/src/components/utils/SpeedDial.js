import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import BookIcon from "@mui/icons-material/Book";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DescriptionIcon from "@mui/icons-material/Description";

export default function OpenIconSpeedDial() {
  const openTag = () => {
    console.log("tag");
  }
  const openNote = () => {
    console.log("Note");
  };
  const openNoteBook = () => {
    console.log("NoteBook");
  };

  return (
    <SpeedDial
      ariaLabel="Create Something"
      sx={{ position: "absolute", bottom: 16, left: 8 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      direction="up"
    >
      <SpeedDialAction
        key="New Tag"
        icon={<LocalOfferIcon />}
        tooltipTitle="New Tag"
        onClick={openTag}
      />
      <SpeedDialAction
        key="New Note"
        icon={<DescriptionIcon />}
        tooltipTitle="New Note"
        onClick={openNote}
      />
      <SpeedDialAction
        key="New NoteBook"
        icon={<BookIcon />}
        tooltipTitle="New NoteBook"
        onClick={openNoteBook}
      />
    </SpeedDial>
  );
}
