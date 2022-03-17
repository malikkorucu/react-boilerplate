import { CircularProgress, ClickAwayListener } from "@mui/material";
import { Box } from "@mui/system";
import { FC, Suspense, useEffect, useState } from "react";
import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { Dropdown } from "../../components/common/Dropdown/Dropdown";
import { getExactPath } from "../../utils/getExactPath";
import { OtherPage } from "../Other/other-page";


export const Dashboard: FC<any> = () => {
  const [products, setProducts] = useState([]);
  const [place, setPlace] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeData, setPlaceData] = useState({}) as any;

  const items = [
    { id: 1, title: "Ana Sayfa" },
    { id: 2, title: "Hakkımızda" },
    { id: 3, title: "Nurbanu" },
  ];
  const items_2 = [
    { id: 1, title: "Ana Sayfa 2" },
    { id: 2, title: "Hakkımızda 2" },
    { id: 3, title: "Nurbanu 2" },
  ];

  return (
    <div>
      <Dropdown items={items} />
      <Dropdown items={items_2} />
    </div>
  );
};
