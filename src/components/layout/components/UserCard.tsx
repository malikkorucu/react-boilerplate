import { Avatar, ButtonBase } from "@mui/material";
import clsx from "clsx";
import { FC } from "react";
import "../side.scss";
import { useHistory } from "react-router-dom";

type Props = {
  open: boolean;
};

export const UserCard: FC<Props> = (props) => {
  const { open } = props;
  const history = useHistory();

  return (
    <ButtonBase
      onClick={() => {
        history.push("/account");
      }}
      sx={{ width: "100%", borderRadius: 4 }}
    >
      <div
        className={clsx("d-flex align-items-center w-100", {
          "user-card open": open,
          "justify-content-center": !open,
        })}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg"
          sx={{ width: open ? 50 : 40, height: open ? 50 : 40 }}
        />
        {open && (
          <div
            className="user-card-info d-flex flex-column align-items-start"
            style={{ paddingLeft: 15 }}
          >
            <h6>Malik KORUCU</h6>
            <span>admin</span>
          </div>
        )}
      </div>
    </ButtonBase>
  );
};
