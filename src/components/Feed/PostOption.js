import React from "react";

const PostOption = ({ Icon, color, text }) => {
  return (
    <div className="post-option dark--hover flex--row--middle">
      {color ? <Icon style={{ color: color }} /> : <Icon />}
      {text}

      <style jsx>{`
        .post-option {
          gap: 10px;
          padding: 12px 8px !important;
          border-radius: 5px;
          margin: 4px 0;
        }
      `}</style>
    </div>
  );
};

export default PostOption;
