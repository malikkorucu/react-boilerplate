import { FC, Suspense, useEffect } from "react";
import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { getExactPath } from "../../utils/getExactPath";
import { OtherPage } from "../Other/other-page";

export const Dashboard: FC<any> = () => {
  const { path } = useRouteMatch();

  useEffect(() => {
    console.log("dasboard page", path);
  }, [path]);

  return (
    <Switch>
      <Route
        exact
        path="/dashboard"
        component={() => (
          <div>
            <Link to="/dashboard/other">OTHER</Link>{" "}
          </div>
        )}
      />
      <Route
        path={`${path}/other`}
        component={(props: any) => OtherPage({ ...props, exact: path })}
      />
    </Switch>
  );
};
