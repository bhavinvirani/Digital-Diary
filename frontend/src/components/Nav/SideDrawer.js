import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DeleteIcon from "@mui/icons-material/Delete";
import BookIcon from "@mui/icons-material/Book";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Collapse, ListItemButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SpeedDial from "../utils/SpeedDial";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ModeIcon from '@mui/icons-material/Mode';

const drawerWidth = 220;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideDrawer = ({ open, handleDrawerClose }) => {
  const [isListopen, setIsListopen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsListopen(!isListopen);
  };
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton
          onClick={() => {
            if (isListopen) {
              setIsListopen(false);
            }
            handleDrawerClose();
          }}
        >
          {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List dense>
        <Tooltip title="Start Writing" placement="right">
          <ListItemButton divider autoFocus onClick={() => navigate("/playground")}>
            <ListItemIcon>
              <ModeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </Tooltip>

        <Tooltip title="Home" placement="right">
          <ListItemButton onClick={() => navigate("/home")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </Tooltip>

        <Tooltip title="Dashboard" placement="right">
          <ListItemButton onClick={() => navigate("/dashboaard")}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </Tooltip>

        <Tooltip title="Shortcuts" placement="right">
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ShortcutIcon />
            </ListItemIcon>
            <ListItemText primary="Shortcuts" />
            {isListopen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </Tooltip>

        <Collapse in={isListopen} timeout="auto" unmountOnExit>
          <List dense component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorderIcon />
              </ListItemIcon>
              <ListItemText primary="Book1" />
            </ListItemButton>
          </List>
          <List dense component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorderIcon />
              </ListItemIcon>
              <ListItemText primary="Book2" />
            </ListItemButton>
          </List>
        </Collapse>

        
      </List>

      <Divider />

      

      <List>
        <Tooltip title="Notes" placement="right">
          <ListItemButton  onClick={() => navigate("/notes")}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Notes (4)" />
          </ListItemButton>
        </Tooltip>
        <Tooltip title="Notebooks" placement="right">
          <ListItemButton  onClick={() => navigate("/notebooks")}>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Notebooks (1)" />
          </ListItemButton>
        </Tooltip>

        <Tooltip title="Tags" placement="right">
          <ListItemButton >
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText primary="Tags" />
          </ListItemButton>
        </Tooltip>

        <Tooltip title="Trash" placement="right">
          <ListItem button >
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Trash (0)" />
          </ListItem>
        </Tooltip>

      </List>
      <SpeedDial />
    </Drawer>
  );
};

export default SideDrawer;
