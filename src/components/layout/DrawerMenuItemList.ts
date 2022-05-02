import { Dashboard } from "../../pages/Dashboard/dashboard.page";
import {
  HomeRounded,
  Person,
  ProductionQuantityLimitsRounded,
} from "@mui/icons-material";
import ProductMain from "../../pages/Product/product.main";
import { Test } from "../../pages/Test";

export const DrawerMenuRoutes = [
  // GENERAL
  {
    name: "General",
    children: [
      {
        path: "/dashboard",
        name: "Home",
        label: "Ana Sayfa",
        icon: HomeRounded,
        component: Dashboard,
        children: [],
      },

    ],
  },

  //PRODUCT
  {
    name: "Product",
    children: [
      {
        name: "Product",
        label: "Product",
        icon: ProductionQuantityLimitsRounded,
        path: "/product",
        component: ProductMain,
        children: [
          {
            path: "/product/product-management",
            name: "Home",
            label: "Products",
            icon: HomeRounded,
            component: Dashboard,
            children: [],
          },
          {
            path: "/product/product-categories",
            name: "Home",
            label: "Categories",
            icon: HomeRounded,
            component: Dashboard,
            children: [],
          },
          {
            path: "/product/test",
            name: "Test",
            label: "Test",
            component: Test,
            children: [],
          },
        ],
      },
    ]
  },
  //USER
  {
    name: "User",
    children: [
      {
        name: "UserList",
        label: "User List",
        icon: Person,
        path: "/user",
        component: ProductMain,
        children: [
          {
            path: "/user/user-management",
            name: "UserList",
            label: "User List",
            children: [],
          }
        ],
      },
    ],
  },
];
