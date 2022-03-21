import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import {
  Avatar,
  ButtonBase,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import * as authRedux from "../../../redux/auth/auth.redux";
import { useDispatch } from "react-redux";

const items = [
  {
    id: 1,
    label: "My Profile",
    path: "/profile",
  },
  {
    id: 2,
    label: "Settings",
    path: "/settings",
  },
  {
    id: 3,
    label: "Others",
    path: "/others",
  },
];

export default function PopoverButton() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authRedux.actions.logout());
  };

  return (
    <ButtonBase>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            {/* <Button variant="contained">Open Popover</Button> */}
            <Avatar
              {...bindTrigger(popupState)}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 40, height: 40 }}
            />
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Typography sx={{ p: 2, borderRadius: 20, minWidth: 200 }}>
                <List>
                  {items.map((item: any, index: any) => (
                    <ListItemButton
                      key={index}
                      sx={{
                        borderRadius: 3,
                        height: 37,
                      }}
                    >
                      <div
                        className="w-100"
                        style={{
                          fontSize: 12,
                        }}
                      >
                        {item.label}
                      </div>
                    </ListItemButton>
                  ))}
                </List>
                <Divider />
                <ListItemButton
                  onClick={logout}
                  className="mt-2"
                  sx={{
                    borderRadius: 3,
                    height: 37,
                  }}
                >
                  <div
                    className="w-100"
                    style={{
                      fontSize: 12,
                    }}
                  >
                    Logout
                  </div>
                </ListItemButton>
              </Typography>
            </Popover>
          </div>
        )}
      </PopupState>
    </ButtonBase>
  );
}
