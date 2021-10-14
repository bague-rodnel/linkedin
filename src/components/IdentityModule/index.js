import React from "react";
import { Avatar } from "@mui/material";
import { Wrapper } from "./styles";

const IdentityModule = () => {
  return (
    <Wrapper>
      <div className="identityModule">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5616AQGo5TIqpkNrFg/profile-displaybackgroundimage-shrink_200_800/0/1628420270096?e=1639612800&v=beta&t=6lnPCvfywj25VMOiDrNOFau6dXu2fEdNODQTC8o45Qo"
          alt=""
        />
        <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQFwAhd-3oZTIA/profile-displayphoto-shrink_800_800/0/1625237308256?e=1639612800&v=beta&t=C7jGuo1YGAixGxslxx1e9fVJT2XnE9kKpD5AkxHap58" />
        <span className>
          <a href="#">Rodnel Bague</a>
        </span>
        <p>Full Stack Web Developer</p>
      </div>
    </Wrapper>
  );
};

export default IdentityModule;
