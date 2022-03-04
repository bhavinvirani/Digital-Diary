import { Box } from "@mui/material";
import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import Write from "../components/Write/Write";
import { DDState } from "../context/DDProvider";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Chip, Divider, Tooltip } from "@material-ui/core";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";
import FormatPaintOutlinedIcon from "@mui/icons-material/FormatPaintOutlined";
import IconButton from "@mui/material/IconButton";
const style = {
  marginLeft: 1,
  width: "99%",
  height: "90vh",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 6,
  p: 1,
};

const PlayGround = () => {
  const { user } = DDState();
  const [name, setName] = useState();
  const [isFormate, setIsFormate] = useState(true);
  const [isPrompt, setIsPrompt] = useState(true);

  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  let day = days[today.getDay()];

  today = `${day}, ${mm}/${dd}/${yyyy} `;

  // const handleClick = () => {
    
  // }
  // const handleDelete = () => {

  // }

  return (
    <>
      {user && <Nav />}
      <Box sx={{ ml: 9.5, mt: 8.4, p: 1 }}>
        <Box sx={style}>
          <FormControl fullWidth sx={{ mb: 1 }} variant="standard">
            <InputLabel htmlFor="title" sx={{ fontSize: 24 }}>
              Title
            </InputLabel>
            <Input
              id="title"
              value={name}
              onChange={(e) => setName(e.target.value)}
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
            />
          </FormControl>
          <Box display="flex" justifyContent="space-between" paddingRight={4}>
            <Box>
              <IconButton>
                <CalendarTodayTwoToneIcon />
              </IconButton>{" "}
              {today}
            </Box>
            <Box>
              <Tooltip title="Prompts" placement="top">
                <IconButton>
                  <TipsAndUpdatesTwoToneIcon
                    onClick={() => setIsPrompt(!isPrompt)}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Text Formating" placement="top">
                <IconButton onClick={() => setIsFormate(!isFormate)}>
                  {isFormate ? (
                    <FormatPaintOutlinedIcon color="primary" />
                  ) : (
                    <FormatPaintOutlinedIcon />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Divider />

          <Box display="flex" paddingY={1} gap="6px">
            <Chip
              label="Clickable Deletable"
              color="primary"
              onDelete
            />
            <Chip
              label="Clickable Deletable"
              color="primary"
              onDelete
            />
            <Chip
              label="Clickable Deletable"
              color="primary"
              onDelete
            />
          </Box>

          <Divider />

          <Write
            isFormate={isFormate}
            isPrompt={isPrompt}
            setIsPrompt={setIsPrompt}
          />
        </Box>
      </Box>
    </>
  );
};

export default PlayGround;
