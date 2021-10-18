import React from "react";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

const IdentityModule = () => {
  const user = useSelector(selectUser);

  return (
    <div className="identityModule card">
      <section>
        <div className="cover-photo">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5616AQGo5TIqpkNrFg/profile-displaybackgroundimage-shrink_200_800/0/1628420270096?e=1639612800&v=beta&t=6lnPCvfywj25VMOiDrNOFau6dXu2fEdNODQTC8o45Qo"
            alt=""
          />
        </div>
        <a href="#">
          <div className="identity">
            <img className="identity__avatar" src={user.photoURL} />
            <p className="identity__name text--dark">{user.displayName}</p>
            <p className="identity__headline">Full Stack Web Developer</p>
          </div>
        </a>
      </section>

      <section className="stats">
        <a href="#">
          <div className="stat__group dark--hover">
            <div className="stat__label">Who views your profile</div>
            <div className="stat__value">48</div>
          </div>
        </a>
        <a href="#">
          <div className="stat__group dark--hover">
            <div className="stat__label">
              <div>
                Connections
                <br />
                <span className="text--bold text--dark">Grow your network</span>
              </div>
            </div>
            <div className="stat__value">500+</div>
          </div>
        </a>
      </section>

      <section className="dark--hover">
        Access exclusive tools & insights
        <div className="flex--row--middle">
          <MilitaryTechIcon style={{ color: "gold" }} />
          <span className="text--dark text--bold">Try Premium for free</span>
        </div>
      </section>

      <section className="my-items dark--hover">
        <div className="flex--row--middle">
          <div className="icon text--bold text--dark">
            <BookmarkIcon />
          </div>
          <div className="text--bold text--dark">My Items</div>
        </div>
      </section>

      <style jsx>{`
        .identityModule {
          padding-top: 0;
          padding-bottom: 0;
        }

        .identityModule section {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .identityModule section {
          padding-top: 16px;
          padding-bottom: 16px;
        }

        .identityModule section:first-child {
          border-top: none;
        }

        .identity {
          position: relative;

          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cover-photo {
          background: black;
          margin: -16px -12px 0;
          overflow: hidden;
        }

        .identity__avatar {
          position: absolute;
          transform: translateY(-50%);
          width: 64px;
          height: 64px;
          border: 2px solid white;
          border-radius: 50%;
        }

        .identity__name {
          margin-top: 48px;
          font-size: 16px;
          font-weight: 600;
        }

        .identity__headline {
          color: gray;
        }

        .stats {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }

        .stat__group {
          padding-left: 12px;
          padding-right: 12px;
          display: flex;
        }

        .stat__label,
        .stat__value {
          flex: auto;
        }

        .stat__value {
          text-align: right;
          color: var(--blue);
        }

        .my-items .icon {
          margin-right: 8px;
        }
      `}</style>
    </div>
  );
};

export default IdentityModule;
