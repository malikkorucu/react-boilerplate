import { Dashboard } from "../../pages/Dashboard/dashboard.page";
import {
  EditAttributes,
  Equalizer,
  HomeRounded,
  ModeEditOutline,
  ProductionQuantityLimitsRounded,
} from "@mui/icons-material";
import ProductMain from "../../pages/Product/product.main";

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
            label: "İstatistikler",
            icon: HomeRounded,
            component: Dashboard,
            children: [],
          },
        ],
      },
    ],
  },
  // SETTINGS
  // {
  //   name: "Product",
  //   children: [
  //     {
  //       path: "/",
  //       name: "Settings",
  //       label: "Settings",
  //       icon: ModeEditOutline,
  //       component: Dashboard,
  //       children: [],
  //     },
  //     {
  //       path: "/",
  //       name: "Settings",
  //       label: "Settings",
  //       icon: ModeEditOutline,
  //       component: Dashboard,
  //       children: [
  //         {
  //           path: "/",
  //           name: "Settings",
  //           label: "Settings",
  //           icon: ModeEditOutline,
  //           component: Dashboard,
  //           children: [],
  //         },
  //       ],
  //     },
  //   ],
  // },
];
