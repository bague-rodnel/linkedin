import React from "react";
import HeaderOption from "./HeaderOption";

import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import { logout, selectUser } from "../../features/userSlice";

const Header = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      {user && (
        <>
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
              avatar={user.photoURL}
              title="Logout"
              onClick={logoutOfApp}
            />
          </div>
        </>
      )}

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
