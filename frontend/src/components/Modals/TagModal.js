import { Backdrop, Box, Fade, Modal, Typography } from "@material-ui/core";
import React, {useState} from "react";
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


const TagModal = ({ openTagHandler, openTag }) => {
  const [tagName, setTagName] = useState("")

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openTag}
        onClose={() => {
          setTagName()
          openTagHandler()
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openTag}>
          <Box sx={style}>
            <Typography variant="h6">Create New Tag</Typography>
            <Typography fontSize="6px">
              Tags let you add keywords to notes, making them easier to find and
              browse.
            </Typography>

            <TextField
              width="100%"
              id="standard-basic"
              label="Tag Name"
              variant="standard"
              fullWidth
              value={tagName}
              onChange={(e) => setTagName(e.target.value)}

            />
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                flexDirection: "row-reverse",
                marginTop: "14px",
              }}
            >
              {!tagName && <Button variant="contained" disabled>Create</Button>}
              {tagName && <Button variant="contained" >Create</Button>}
              <Button variant="outlined" onClick={() => {
                setTagName()
                openTagHandler()
              }}>Cancel</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default TagModal;
