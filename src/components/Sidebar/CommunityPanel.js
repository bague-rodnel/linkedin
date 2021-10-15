import React from "react";
import EventIcon from "@mui/icons-material/Event";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const CommunityPanel = () => {
  return (
    <div className="community-panel card">
      <section className="community-panel__group recent">
        <div className="community-panel__group-header flex--row--middle">
          <h2 className="heading">Recent</h2>
          <KeyboardArrowUpIcon />
        </div>
        <div className="community-panel__group-item flex--row--middle">
          <span className="icon">
            <EventIcon />
          </span>
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
          <KeyboardArrowUpIcon />
        </div>
        <div className="community-panel__group-item flex--row--middle">
          <span className="icon">
            <EventIcon />
          </span>
          Masterclass Event...
        </div>
      </section>

      <style jsx>{`
        .community-panel__group-header {
          justify-content: space-between;
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
