import React, { FC } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { MainLayout } from "../components/layout/Main";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { AuthPage } from "../pages/Auth/auth.page";
import { PublicRoutes } from "./PublicRoutes";
import { shallowEqual, useSelector } from "react-redux";

export type RootState = ReturnType<any>;

const Routes: FC = () => {
  const isAuthorized = useSelector<RootState>(({auth}) => auth.accessToken, shallowEqual)

  return (
    <>
      <Switch>
        {!isAuthorized ? (
          /*Render auth page when user at `/auth` and not authorized.*/
          <PublicRoutes />
        ) : (
          /*Otherwise redirect to root page (`/`)*/
          <Redirect from="/auth" to="/" />
        )}

        <Route path="/error" component={ErrorPage} />

        {!isAuthorized ? (
          /*Redirect to `/auth` when user is not authorized*/
          <Redirect to="/auth/login" />
        ) : (
          <MainLayout>
            <PrivateRoutes />
          </MainLayout>
        )}
      </Switch>
    </>
  );
};

export { Routes };
