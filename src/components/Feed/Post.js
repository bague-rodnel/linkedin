import React, { useEffect, useRef, forwardRef } from "react";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import PostOption from "./PostOption";

const Post = forwardRef(
  ({ avatar, heading, subheading, message, photos }, ref) => {
    return (
      <div ref={ref} className="post card">
        <section className="post__header flex--row--middle">
          <img className="post__avatar" src={avatar} />
          <div>
            <p className="post__heading">{heading}</p>
            <p className="post__subheading">{subheading}</p>
          </div>
        </section>

        <section className="post__content">
          <p className="post__message">{message}</p>
          {photos &&
            photos.map((photo, index) => <img src={photo} key={index} />)}
        </section>

        <section className="post__interactions flex--row--middle">
          <div className="post__reactions  flex--row--middle">
            <ThumbUpIcon
              className="reaction__icon"
              style={{ color: "var(--blue)" }}
            />
            <FavoriteIcon
              className="reaction__icon"
              style={{ color: "var(--red)" }}
            />
            <span className="">{(71546).toLocaleString()}</span>
          </div>
          <span>&middot;</span>
          <div className="post__comments">{817} comments</div>
        </section>

        <hr />

        <section className="post__buttons flex--row--middle">
          <PostOption Icon={ThumbUpOffAltIcon} text="Like" />
          <PostOption Icon={CommentOutlinedIcon} text="Comment" />
          <PostOption Icon={ScreenShareOutlinedIcon} text="Share" />
          <PostOption Icon={SendOutlinedIcon} text="Send" />
        </section>

        <style jsx>{`
          .post {
            padding-bottom: 0;
          }
          .post__header {
            gap: 12px;
          }

          .post__avatar {
            border-radius: 50%;
            height: 48px;
            width: 48px;
          }

          .post__heading,
          .post__message {
            color: var(--black);
          }

          .post__heading {
            font-size: 14px;
            font-weight: 500;
          }

          .post__content {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          .post__message {
            padding: 16px 12px;
            overflow-wrap: anywhere;
          }

          .post__interactions,
          .post__reactions {
            gap: 4px;
          }

          .post__interactions {
            margin-top: 6px;
            margin-bottom: 6px;
          }
          .post hr {
            border: 1px solid rgba(0, 0, 0, 0.05);
            margin-left: 12px;
            margin-right: 12px;
          }

          .reaction__icon {
            height: 16px;
            width: 16px;
          }

          :is(.post__reactions, .post__comments):hover {
            text-decoration: underline;
            color: var(--blue);
          }

          .post__buttons > * {
            flex: 1;

            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    );
  }
);

export default Post;
