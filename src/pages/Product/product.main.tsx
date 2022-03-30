import { Switch, Route, useRouteMatch } from "react-router-dom";
import { NestedRoutes } from "../../router/NestedRoutes";
import { ProductManagement } from "./pages/ProductManagement";

const children = [
  {
    path: "/product-management",
    component: ProductManagement,
  },
];

const ProductMain = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <NestedRoutes exact={path} children={children} />
    </div>
  );
};

export default ProductMain;