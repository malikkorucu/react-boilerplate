import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/dashboard.page";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { OtherPage } from "../pages/Other/other-page";

export function PrivateRoutes() {
  const ProductMain = lazy(() => import("../pages/Product/product.main")); // prettier-ignore;

  return (
    <Suspense fallback={<div>fallback component will be come here</div>}>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/product" component={ProductMain} />
        <Redirect exact={true} from="/" to="/dashboard" />
        <Redirect to="error/404" />
      </Switch>
    </Suspense>
  );
}
