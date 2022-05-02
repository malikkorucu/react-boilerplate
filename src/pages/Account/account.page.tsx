import { Collections, Favorite, People, Person } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { TabPanel } from "../../components/common/Tabs/Tabs";
import { AccountHeader } from "./components/AccountHeader/AccountHeader";
import { Followers } from "./components/AccountHeader/tab-pages/Followers";
import { Profile } from "./components/AccountHeader/tab-pages/Profile";

const tabItems = [
  {
    label: "Profile",
    icon: <Person />,
    content: <Profile />,
  },
  {
    label: "Followers",
    icon: <Favorite />,
    content: <Followers />,
  },
  {
    label: "Friends",
    icon: <People />,
    content: <Followers />,
  },
  {
    label: "Gallery",
    icon: <Collections />,
    content: <Followers />,
  },
];

export const AccountPage = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <AccountHeader tabItems={tabItems} value={value} setValue={setValue} />
      {tabItems.map((item: any, index: any) => (
        <TabPanel value={value} index={index}>
          {item.content}
        </TabPanel>
      ))}
    </div>
  );
};
