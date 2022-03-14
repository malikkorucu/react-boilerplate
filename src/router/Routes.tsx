import React, { FC } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { MainLayout } from "../components/layout/Main";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { AuthPage } from "../pages/Auth/auth-page";

export type RootState = ReturnType<any>;

const Routes: FC = () => {
  const isAuthorized = true;

  return (
    <>
      <Switch>
        {!isAuthorized ? (
          <Route>
            <AuthPage />
          </Route>
        ) : (
          <Redirect from="/auth" to="/" />
        )}

        <Route path="/error/404" component={ErrorPage} />

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
