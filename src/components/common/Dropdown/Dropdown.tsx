import React, { FC } from "react";
import { CardMembershipRounded, ExpandMore } from "@mui/icons-material";
import "./dropdown.style.scss";

type Props = {
  items?: Array<any>;
};

export const Dropdown: FC<Props> = (props) => {
  const { items } = props;

  return (
    <span className="drop-down">
      <span className="btn-content">
        <CardMembershipRounded />
        <span className="title">Button Title</span>
        <ExpandMore />
      </span>

      <div className="dropdown-content">
        <ul>
          {items?.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </div>
    </span>
  );
};
