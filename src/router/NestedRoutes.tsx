import { Switch, Route, Redirect } from "react-router-dom";

export const NestedRoutes = (props: any) => {
  const { exact, children } = props;
  return (
    <Switch>
      {/* <Route exact path={exact} /> */}
      {children.map((item: any, index: any) => (
        <Route
          key={index}
          path={exact + item.path}
          component={item.component}
        />
      ))}
      <Redirect exact from={exact} to="/auth/login" />
    </Switch>
  );
};
