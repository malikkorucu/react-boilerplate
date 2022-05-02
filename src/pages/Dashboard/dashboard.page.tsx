import { Paper } from "@mui/material";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Legend,
  Bar,
} from "recharts";
import { IUser } from "../../redux/auth/auth.interface";
import { RootState } from "../../setup/redux/RootReducer";
import { confirm } from "../../utils/confirm";
import { DashboardCard } from "./components/DashboardCard";

export const Dashboard: FC<any> = () => {
  const [products, setProducts] = useState([]);
  const [place, setPlace] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeData, setPlaceData] = useState({}) as any;

  const items = [
    { id: 1, title: "Yunus" },
    { id: 2, title: "Yunus" },
    { id: 3, title: "Yunus" },
    { id: 4, title: "Yunus" },
  ];

  const user = useSelector<RootState>(({ auth }) => auth.user) as IUser;

  const test = async () => {
    const res = await confirm("burası title", "burası body");
  };
  const data = [
    {
      name: "Page A",
      uv: 3000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 3000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 3000,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 3000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 3000,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="row">
      {/* <Dropdown items={items} />
      <MultipleSelectChip />
      <MultiSelectSearch />

      <CustomToolbarGrid /> */}
      <div className="row mb-5">
        <div className="col-md-4">
          <DashboardCard />
        </div>
        <div className="col-md-4">
          <DashboardCard />
        </div>
        <div className="col-md-4">
          <DashboardCard />
        </div>
      </div>
      <Paper>
        <LineChart width={500} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </Paper>

      <div className="col-md-6" style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="col-md-6" style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const styles = {
  input: {
    border: "1px solid #dedede",
    borderRadius: 10,
    padding: "5px 10px",
    outline: "none",
  },
};
