import React from "react";
import { Wrapper } from "./styles";

const Sidebar = ({ children }) => {
  return (
    <Wrapper>
      <div className="sidebar">{children}</div>
    </Wrapper>
  );
};

export default Sidebar;
