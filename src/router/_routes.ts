import { Dashboard } from "../pages/Dashboard/dashboard.page";
import { OtherPage } from "../pages/Other/other-page";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { AuthPage } from "../pages/Auth/auth.page";

export const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    children: [
      {
        path: "/other",
        component: OtherPage,
      },
      {
        path: "/statistics",
        component: ErrorPage,
      },
    ],
  },
  {
    name: "Settings",
    path: "/settings",
    component: AuthPage,
  },
];
