import { Box } from "@mui/material";
import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import NotebooksView from "../components/Tables/NotebooksView";
import { DDState } from "../context/DDProvider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
const NoteBooks = () => {
  const { user } = DDState();
  const [date, setDate] = useState([null, null]);

  return (
    <>
      <Box sx={{ ml: 9.5, mt: 8.4, p: 2 }}>
        {user && <Nav />}
        <Box p={1} display="flex" justifyContent="space-between">
          <Typography variant="h4">Your All NoteBooks</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            calendars={2}
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
          </ LocalizationProvider>
        </Box>
        <NotebooksView />
      </Box>
    </>
  );
};

export default NoteBooks;
