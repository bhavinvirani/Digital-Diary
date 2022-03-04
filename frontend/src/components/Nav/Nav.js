import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// import Search from '@mui/icons-material/Search';
import {
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  MenuList,
  Tooltip,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TimelineIcon from "@mui/icons-material/Timeline";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SideDrawer from "./SideDrawer";
import { useNavigate } from "react-router-dom";
import { DDState } from "../../context/DDProvider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const drawerWidth = 220;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { user, setAlert } = DDState();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuList
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          m: 0.5,
          minWidth: { base: 120, md: 200 },
        }}
      >
        <Avatar
          alt={user.user.name}
          src={user.user.pic}
          sx={{ width: 166, height: 166, marginBottom: 1 }}
        />
        <Typography>{user.user.name}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            marginBottom: 0.6,
          }}
        >
          <Typography>
            <TimelineIcon sx={{ fontSize: 28 }} />
            {user.user.points}
          </Typography>
          <Typography>
            <WhatshotIcon sx={{ fontSize: 28, color: "orange" }} />
            {user.user.streaks} Days
          </Typography>
        </Box>
        <MenuItem
          sx={{ width: "100%" }}
          onClick={() => navigate("/dashboaard")}
        >
          Dashboard
        </MenuItem>
        <MenuItem sx={{ width: "100%" }}>Account Settings</MenuItem>
        <MenuItem
          sx={{ width: "100%" }}
          onClick={() => {
            localStorage.removeItem("userInfo");
            setAlert({
              open: true,
              message: "Successful Logout",
              type: "success",
            });
            navigate("/");
          }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );

  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Digital Diary
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Tooltip title="account of current user">
              <IconButton onClick={handleProfileMenuOpen} sx={{ p: 1 }}>
                <Avatar alt={user.user.name} src={user.user.pic} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/*side Drawer */}
      <SideDrawer open={open} handleDrawerClose={handleDrawerClose} />

      {renderMenu}
    </Box>
  );
}
