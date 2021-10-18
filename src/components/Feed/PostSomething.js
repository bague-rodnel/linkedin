import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import PostOption from "./PostOption";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const PostSomething = ({ sendPost }) => {
  const [input, setInput] = useState("");

  const user = useSelector(selectUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    sendPost(input);
    setInput("");
  };

  return (
    <div className="post-something card">
      <section className="post-something__header">
        <img className="post-something__avatar" src={user.photoURL} />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Start a post"
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <button hidden type="submit">
            send
          </button>
        </form>
      </section>

      <div className="post-something__options">
        <PostOption Icon={ImageIcon} color="skyblue" text="Photo" />
        <PostOption Icon={YouTubeIcon} color="green" text="Video" />
        <PostOption Icon={EventIcon} color="orange" text="Event" />
        <PostOption Icon={ArticleIcon} color="pink" text="Write article" />
      </div>

      <style jsx>{`
        .post-something {
          padding-bottom: 0;
        }
        .post-something__header {
          display: flex;
          gap: 12px;
        }
        .post-something__header form {
          flex: 1;
          display: flex;
        }
        .post-something__avatar {
          height: 50px;
          width: 50px;
          border-radius: 50%;
        }
        .post-something__header input {
          flex: 1;
          outline: none;
          padding: 0 16px;
          border: 1px solid gray;
          border-radius: 25px;
          line-height: 50px;
        }
        .post-something__header input:hover {
          background: lightgray;
        }
        .post-something__options {
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </div>
  );
};

export default PostSomething;
