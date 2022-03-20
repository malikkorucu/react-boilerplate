import { Switch, Route, useRouteMatch } from "react-router-dom";
import { NestedRoutes } from "../../router/NestedRoutes";
import { Login } from "./auth-pages/auth.login";
import { Register } from "./auth-pages/auth.register";
import "./auth.style.scss";

const children = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];

export const AuthPage = () => {
  const { path } = useRouteMatch(); //auth

  return <NestedRoutes exact={path} children={children} />;
};
