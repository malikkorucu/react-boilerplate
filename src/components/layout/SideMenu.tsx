import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { SvgIcon } from "@mui/material";
import CollapseListItem from "./CollapseListItem";
import clsx from "clsx";
import { useHistory } from "react-router-dom";

import "./side.scss";
import { Link } from "react-router-dom";

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
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

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: "white",
  boxShadow: "none",
  borderBottom: "1px solid #dedede",
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

export default function SideMenu(props: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{}} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <img width={40} src="/logo.svg" alt="" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            border: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              border: "none",
            }}
          >
            <img width={40} src="/logo.svg" alt="" />
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
        </DrawerHeader>
        <div className="content-drawer" style={{ paddingTop: 20 }}>
          {props.drawerItems.map((provider: any, index: any) => (
            <div key={index}>
              {open && (
                <h5
                  key={index}
                  style={{ paddingLeft: 15, paddingRight: 15, margin: 0 }}
                >
                  {provider.name}
                </h5>
              )}
              <List
                sx={{ paddingLeft: open ? 2 : 1, paddingRight: open ? 2 : 1 }}
              >
                {provider.children.map((item: any, index: any) =>
                  item.children.length > 0 ? (
                    <CollapseListItem key={index} open={open} item={item} />
                  ) : (
                    <ListItemButton
                      key={index}
                      className={clsx({
                        active: history.location.pathname === item.path,
                      })}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        mb: 1,
                        borderRadius: 2,
                      }}
                      onClick={() => {
                        console.log();
                        history.push(item.path);
                      }}
                    >
                      <ListItemIcon
                        className={clsx({
                          active: history.location.pathname === item.path,
                        })}
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "17px",
                        }}
                      >
                        <SvgIcon
                          component={item.icon}
                          fontSize="inherit"
                          style={{ fontSize: 20 }}
                        />
                        {/* <img width="13" src="/logo.svg" alt="" />{" "} */}
                      </ListItemIcon>
                      {open && (
                        <span
                          style={{
                            fontSize: 14,
                          }}
                        >
                          {item.label}
                        </span>
                      )}
                    </ListItemButton>
                  )
                )}
              </List>

              {/* <Divider /> */}
            </div>
          ))}
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {props.children}
      </Box>
    </Box>
  );
}
