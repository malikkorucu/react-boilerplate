import { Dashboard } from "../../pages/Dashboard/dashboard.page";
import {
  EditAttributes,
  Equalizer,
  HomeRounded,
  ModeEditOutline,
} from "@mui/icons-material";

export const DrawerMenuRoutes = [
  // GENERAL
  {
    name: "General",
    children: [
      {
        path: "/dashboard",
        name: "Home",
        label: "Ana Sayfa",
        icon: HomeRounded,
        component: Dashboard,
        children: [],
      },
      {
        name: "Dashboard",
        label: "İstatistik",
        icon: Equalizer,
        path: "/statistics",
        component: Dashboard,
        children: [
          {
            path: "/statistics/step1",
            name: "Home",
            label: "İstatistikler",
            icon: HomeRounded,
            component: Dashboard,
            children: [],
          },
          {
            path: "/statistics/step2",
            name: "Home",
            label: "İstatistikler",
            icon: HomeRounded,
            component: Dashboard,
            children: [],
          },
        ],
      },
    ],
  },
  // SETTINGS
  {
    name: "Settings",
    children: [
      {
        path: "/",
        name: "Settings",
        label: "Settings",
        icon: ModeEditOutline,
        component: Dashboard,
        children: [],
      },
      {
        path: "/",
        name: "Settings",
        label: "Settings",
        icon: ModeEditOutline,
        component: Dashboard,
        children: [
          {
            path: "/",
            name: "Settings",
            label: "Settings",
            icon: ModeEditOutline,
            component: Dashboard,
            children: [],
          },
        ],
      },
    ],
  },
];
