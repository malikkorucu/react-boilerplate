import { Switch, Route } from "react-router-dom";

export const NestedRoutes = (props: any) => {
  const { exact, childs } = props;
  return (
    <Switch>
      {childs.map((item: any) => (
        <Route path={exact + item.path} component={item.component} />
      ))}
    </Switch>
  );
};
