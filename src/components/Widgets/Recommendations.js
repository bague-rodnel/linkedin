import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";

const Item = ({ avatar, heading, subheading }) => {
  return (
    <section className="recommendation">
      <img className="avatar" src={avatar} alt="" />
      <div className="info__column">
        <div className="heading">{heading}</div>
        <div className="subheading">{subheading}</div>
        <button className="flex--row--middle">
          <AddIcon />
          Follow
        </button>
      </div>
    </section>
  );
};

const Recommendations = () => {
  return (
    <div className="recommendations card">
      <section className="recommendations__header flex--row--middle">
        <h2 className="recommendations__heading">Add to your feed</h2>
        <InfoIcon />
      </section>
      <Item
        avatar="https://media-exp1.licdn.com/dms/image/C4E0BAQEF0x_q7m5JjQ/company-logo_100_100/0/1599932632971?e=1642636800&v=beta&t=-xhAZl9GWnCuNe5oQY38_ART5OOOPTXFUHwAFjkL8UE"
        heading="GeeksforGeeks"
        subheading="Company, Computer Software"
      />
      <Item
        avatar="https://media-exp1.licdn.com/dms/image/C4D03AQG9DQQdpMTueA/profile-displayphoto-shrink_100_100/0/1628871482680?e=1639612800&v=beta&t=F1a2V46tdAD-rynFGrFWWUiVg6yPQ6enE0keMKRdIro"
        heading="Ryan Roslansky"
        subheading="CEO at LinkedIn"
      />
      <Item
        avatar="https://media-exp1.licdn.com/dms/image/C4D03AQFxc9i7wRoJEQ/profile-displayphoto-shrink_100_100/0/1603532031865?e=1639612800&v=beta&t=UZfQzSbYJtmboBIMsiscOk4oSygUMPCWZI3uFy_y2Ig"
        heading="Ankur Warikoo"
        subheading="Founder nearbuy.com, Mentor, Angel Investor, Public Speaker"
      />
      <section className="recommendations__footer">
        <a href="#">View all recommendations</a>
      </section>
      <style jsx>{`
        .recommendations {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .recommendations__header {
          justify-content: space-between;
        }

        .recommendations__heading {
          font-size: 16px;
          color: var(--black);
        }

        .recommendation {
          display: flex;
          gap: 12px;
        }

        .recommendation .avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
        }

        .recommendation .info__column .heading {
          font-size: 14px;
          font-weight: 500;
          color: var(--black);
        }

        .recommendation button {
          color: gray;
          background: transparent;
          border: 1px solid gray;
          border-radius: 500px;
          padding: 4px 12px;
        }

        .recommendation button:hover {
          box-shadow: inset 0 0 0 2px gray;
          backgroundx: #f3f2ef;
        }

        .recommendations__footer a {
          color: gray;
          font-size: 14px;
          font-weight: 500;
        }

        .recommendations__footer a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Recommendations;
