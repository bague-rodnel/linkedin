import React from "react";
import { Avatar } from "@mui/material";
import { Wrapper } from "./styles.js";

const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <Wrapper>
      <div className="headerOption">
        {Icon && <Icon className="headerOption__icon" />}
        {avatar && <Avatar className="headerOption__icon" src={avatar} />}
        <span className="headerOption__title">{title}</span>
      </div>
    </Wrapper>
  );
};

export default HeaderOption;
