import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { CircleRounded, Home } from "@mui/icons-material";
import { Icon, SvgIcon } from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";
import clsx from "clsx";

export default function CollapseListItem(props: any) {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const location = useLocation();

  const handleClick = () => {
    props.open && setOpen(!open);
  };

  useEffect(() => {
    !props.open && setOpen(false);
  }, [props.open]);

  return (
    <List
      style={{ paddingTop: 0, paddingBottom: 0, marginBottom: 0 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: props.open ? "initial" : "center",
            px: 2.5,
            mb: 1,
            borderRadius: 2,
          }}
          className={clsx({
            //TODO BURAYA PARENT ROOT CHILD ROOT KONTROLÜ YAPILACAK !!
            active:
              "/" + history.location.pathname.split("/")[1] == props.item.path,
          })}
          onClick={handleClick}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: props.open ? 3 : "auto",
              justifyContent: "center",
              fontSize: "17px",
            }}
            className={clsx({
              //TODO BURAYA PARENT ROOT CHILD ROOT KONTROLÜ YAPILACAK !!
              active:
                "/" + history.location.pathname.split("/")[1] ==
                props.item.path,
            })}
          >
            <SvgIcon
              component={props.item.icon}
              fontSize="inherit"
              style={{ fontSize: 20 }}
            />
            {/* <img width="13" src="/logo.svg" alt="" />{" "} */}
          </ListItemIcon>
          {props.open && (
            <ListItemText>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: ' "Poppins", sans-serif',
                }}
                className={clsx({
                  //TODO BURAYA PARENT ROOT CHILD ROOT KONTROLÜ YAPILACAK !!
                  active:
                    "/" + history.location.pathname.split("/")[1] ==
                    props.item.path,
                })}
              >
                {props.item.label}
              </span>
            </ListItemText>
          )}
          {props.open &&
            (open ? (
              <SvgIcon
                component={ExpandLess}
                fontSize="inherit"
                style={{ fontSize: 18, color: "gray" }}
              />
            ) : (
              <SvgIcon
                component={ExpandMore}
                fontSize="inherit"
                style={{ fontSize: 18, color: "gray" }}
              />
            ))}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          {props.item.children.map((i: any, index: any) => (
            <ListItemButton
              key={index}
              sx={{
                maxHeight: 39,
                justifyContent: props.open ? "initial" : "center",
                px: 3,
                mb: 2,
                borderRadius: 2,
              }}
              onClick={() => {
                history.push(i.path);
              }}
            >
              <ListItemIcon>
                <SvgIcon
                  component={CircleRounded}
                  fontSize="inherit"
                  style={{
                    fontSize: history.location.pathname === i.path ? 11 : 8,
                    transition: "0.4s"
                  }}
                  className={clsx({
                    "active-sub": history.location.pathname === i.path,
                  })}
                />
              </ListItemIcon>
              {props.open && (
                <ListItemText>
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: ' "Poppins", sans-serif',
                    }}
                    className={clsx({
                      "active-sub-text": history.location.pathname === i.path,
                    })}
                  >
                    {i.label}
                  </span>
                </ListItemText>
              )}
            </ListItemButton>
          ))}
        </Collapse>
      </>
    </List>
  );
}
