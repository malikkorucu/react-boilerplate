import React, { FC } from "react";
import SideMenu from "./SideMenu";
import { DrawerMenuRoutes } from "./DrawerMenuItemList";

export const MainLayout: FC<any> = ({ children }) => {
  return (
    <div>
      <SideMenu drawerItems={DrawerMenuRoutes}>{children}</SideMenu>
    </div>
  );
};
