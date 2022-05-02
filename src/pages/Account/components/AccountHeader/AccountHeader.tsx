import { Favorite, Person } from "@mui/icons-material";
import { Avatar, Box, Tab, Tabs } from "@mui/material";
import { TabMove } from "../../../../components/common/Tabs/Tabs";
import { Followers } from "./tab-pages/Followers";
import { Profile } from "./tab-pages/Profile";
import "./account-header.style.scss";
import React, { FC } from "react";
import clsx from "clsx";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const AccountHeader: FC<any> = ({ value, setValue, tabItems }) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="account-header">
      <div className="img">
        <img
          src="https://minimal-assets-api.vercel.app/assets/images/covers/cover_2.jpg"
          alt=""
        />
      </div>
      <Box
        sx={{
          width: "100%",
          justifyContent: "flex-end",
          display: "flex",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          selectionFollowsFocus={false}
        >
          {tabItems.map((item: any, index: any) => (
            <Tab
              iconPosition="start"
              icon={item.icon}
              label={item.label}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      <div className={"user-card"}>
        <Avatar
          alt="Remy Sharp"
          src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg"
          sx={{ width: 124, height: 124 }}
        />

        <div
          className="user-card-info d-flex flex-column align-items-start"
          style={{ paddingLeft: 15 }}
        >
          <h3>Malik KORUCU</h3>
          <p>Software Developer</p>
        </div>
      </div>
    </div>
  );
};
