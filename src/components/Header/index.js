import React from "react";
import HeaderOption from "./HeaderOption";

import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <LinkedInIcon />
        </div>
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={TextsmsIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQFwAhd-3oZTIA/profile-displayphoto-shrink_800_800/0/1625237308256?e=1639612800&v=beta&t=C7jGuo1YGAixGxslxx1e9fVJT2XnE9kKpD5AkxHap58"
          title="Me"
        />
      </div>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 999;

          background: white;
          height: 52px;
          border-bottom: 0.1px solid lightgray;

          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }

        .header__left {
          display: flex;
          align-items: center;
        }

        .header__logo {
          height: 40px;
          width: 40px;
          margin-right: 4px;
        }

        .header__logo svg {
          width: 100%;
          height: 100%;
          fill: var(--blue);
        }

        .header__search {
          padding: 10px;
          display: flex;
          align-items: center;
          border-radius: 5px;
          height: 30px;
          color: gray;
          background: #eef3f8;
        }

        .header__search input {
          outline: none;
          border: none;
          background: none;
          padding-left: 8px;
        }

        .header__right {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default Header;
