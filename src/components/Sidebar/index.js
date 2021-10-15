import React from "react";

const Sidebar = ({ children }) => {
  return (
    <div className="sidebar">
      {children}

      <style jsx>{`
        .sidebar {
          position: sticky;
          top: 90px;
          flex: 0.2;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
