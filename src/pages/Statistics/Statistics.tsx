import { Switch, Route, useRouteMatch } from "react-router-dom";
import { NestedRoutes } from "../../router/NestedRoutes";
import { Statistic1 } from "./pages/Statistic1";
import { Statistic2 } from "./pages/Statistic2";

const children = [
  {
    path: "/step1",
    component: Statistic1,
  },
  {
    path: "/step2",
    component: Statistic2,
  },
];

export const Statistics = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <NestedRoutes exact={path} childs={children} />
    </div>
  );
};
