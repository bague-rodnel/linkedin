import React from "react";
import { Avatar } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const IdentityModule = () => {
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
            <img
              className="identity__avatar"
              src="https://media-exp1.licdn.com/dms/image/C5603AQFwAhd-3oZTIA/profile-displayphoto-shrink_800_800/0/1625237308256?e=1639612800&v=beta&t=C7jGuo1YGAixGxslxx1e9fVJT2XnE9kKpD5AkxHap58"
            />
            <p className="identity__name text--dark">Rodnel Bague</p>
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

      <section>
        <div className="flex--row--middle">
          <span className="text--bold text--dark">
            <BookmarkIcon />
          </span>
          <span className="text--bold text--dark">My Items</span>
        </div>
      </section>

      <style jsx>{`
        .identityModule {
        }

        section {
          padding-top: 16px;
          padding-bottom: 16px;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        section:first-child {
          border: none;
        }

        section div {
          padding: 2px 0;
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

        .dark--hover:hover {
          background: #dadada;
        }
      `}</style>
    </div>
  );
};

export default IdentityModule;
