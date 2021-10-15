import React from "react";
import { Avatar } from "@mui/material";

const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <span className="headerOption__title">{title}</span>

      <style jsx>{`
        .headerOption {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 20px;
          color: gray;
          cursor: pointer;
        }

        .headerOption:hover {
          color: black;
        }

        .headerOption__icon {
          height: 24px;
          width: 24px;
        }
        .headerOption__title {
          font-size: 11px;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
};

export default HeaderOption;
