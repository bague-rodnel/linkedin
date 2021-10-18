import React from "react";
import EventIcon from "@mui/icons-material/Event";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const CommunityPanel = () => {
  return (
    <div className="community-panel card">
      <section className="community-panel__group recent">
        <div className="community-panel__group-header flex--row--middle">
          <h2 className="heading">Recent</h2>
          <div className="header-toggle dark--hover">
            <KeyboardArrowUpIcon />
          </div>
        </div>
        <div className="community-panel__group-item  dark--hover flex--row--middle">
          <EventIcon className="icon text--dark" />
          Masterclass Event...
        </div>
      </section>

      <section className="community-panel__group groups">
        <div className="community-panel__group-header">
          <h2 className="heading">Groups</h2>
        </div>
      </section>

      <section className="community-panel__group events">
        <div className="community-panel__group-header flex--row--middle">
          <h2 className="heading">Recent</h2>
          <div className="header-toggle dark--hover">
            <KeyboardArrowUpIcon />
          </div>
        </div>
        <div className="community-panel__group-item dark--hover flex--row--middle">
          <EventIcon className="icon text--dark" />
          Masterclass Event...
        </div>
      </section>

      <style jsx>{`
        .community-panel {
          position: sticky;
          top: 72px;
        }
        .community-panel section {
          padding-left: 0;
          padding-right: 0;
        }

        .community-panel__group-header,
        .community-panel__group-item {
          padding-left: 12px;
          padding-right: 12px;
        }

        .community-panel__group-header {
          justify-content: space-between;
        }

        .community-panel__group-header .header-toggle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
        }

        .community-panel__group-header .header-toggle:hover {
          opacity: 1;
        }

        .community-panel__group-header .heading:hover {
          text-decoration: underline;
        }

        .community-panel__group-item {
          padding-top: 2px;
          padding-bottom: 2px;
          margin-bottom: 16px;
        }

        .community-panel__group-item:hover {
          color: var(--black);
        }

        .community-panel__group-item .icon {
          display: inline-block;
          margin-right: 8px;
        }

        .community-panel__group-header .heading {
          color: var(--blue);
        }
      `}</style>
    </div>
  );
};

export default CommunityPanel;
