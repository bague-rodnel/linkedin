import React from "react";

const Widgets = ({ children }) => {
  return (
    <div className="widgets">
      {children}

      <style jsx>{`
        .widgets {
          flex: 0.3;
        }
      `}</style>
    </div>
  );
};

export default Widgets;
