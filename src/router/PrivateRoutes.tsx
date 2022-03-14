import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/dashboard.page";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { OtherPage } from "../pages/Other/other-page";
import { routes } from "./_routes";

export function PrivateRoutes() {
  //    const ProfilePage = lazy(() => import('../modules/profile/ProfilePage')) => lazy load in react router dom

  return (
    <Suspense fallback={<div>fallback component will be come here</div>}>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/statistics" component={() => <div>istatisikler</div>} />

        <Redirect exact={true} from="/" to="/dashboard" />
        <Redirect to="error/404" />
      </Switch>
    </Suspense>
  );
}
