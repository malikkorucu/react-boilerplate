import { Box, Tab, Tabs } from "@mui/material";
import { FC } from "react";

export const TabHeader: FC<any> = ({
  value,
  handleChange,
  items,
  a11yProps,
}) => {
  return (
    <Box sx={{ borderColor: "divider" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="tabs"
        selectionFollowsFocus={false}
      >
        {items.map((item: any, index: any) => (
          <Tab
            iconPosition="start"
            icon={item.icon}
            label={item.label}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
    </Box>
  );
};
