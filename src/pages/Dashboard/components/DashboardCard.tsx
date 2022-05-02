import { Paper } from "@mui/material";

export const DashboardCard = () => {
  return (
    <Paper className="d-flex align-items-center justify-content-between px-4 py-4">
      <div>
        <h6>Total Active Users</h6>
        <span>
          <img src="/svg/increase.svg" alt="" />
          <span className="MuiTypography-root MuiTypography-subtitle2">
            +2.6%
          </span>
          <h3>18,765</h3>
        </span>
      </div>
      <span>
        <img src="/svg/chart.svg" alt="" />
      </span>
    </Paper>
  );
};
