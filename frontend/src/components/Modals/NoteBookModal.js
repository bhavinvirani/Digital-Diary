import { Backdrop, Box, Fade, Modal, Typography } from "@material-ui/core";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const NoteBookModal = ({ openNoteBookHandler, openNoteBook }) => {
  const [noteBookName, setNoteBookName] = useState("");

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openNoteBook}
        onClose={() => {
          setNoteBookName("");
          openNoteBookHandler();
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openNoteBook}>
          <Box sx={style}>
            <Typography variant="h6">Create New NoteBook</Typography>
            <Typography variant="subtitle2">
              Notebooks are useful for grouping notes around a common topic.
              They can be private or shared.
            </Typography>

            <TextField
              label="NoteBook Name"
              variant="standard"
              fullWidth
              value={noteBookName}
              onChange={(e) => setNoteBookName(e.target.value)}
            />
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                flexDirection: "row-reverse",
                marginTop: "14px",
              }}
            >
              {!noteBookName && (
                <Button variant="contained" disabled>
                  Create
                </Button>
              )}
              {noteBookName && <Button variant="contained">Create</Button>}
              <Button
                variant="outlined"
                onClick={() => {
                  setNoteBookName("");
                  openNoteBookHandler();
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default NoteBookModal;
