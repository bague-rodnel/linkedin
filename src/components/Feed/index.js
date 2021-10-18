import React from "react";

const Feed = ({ children }) => {
  return (
    <div className="feed">
      {children}

      <style jsx>{`
        .feed {
          flex: 0.5;
        }
      `}</style>
    </div>
  );
};

export default Feed;
