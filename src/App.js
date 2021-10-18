import React, { useState, useEffect } from "react";
import "./App.css";

import Feed from "./components/Feed";
import Post from "./components/Feed/Post";
import PostSomething from "./components/Feed/PostSomething";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CommunityPanel from "./components/Sidebar/CommunityPanel";
import IdentityModule from "./components/Sidebar/IdentityModule";
import Login from "./components/Login";

import { auth, db } from "./firebase.js";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import FlipMove from "react-flip-move";
import Widgets from "./components/Widgets";
import Recommendations from "./components/Widgets/Recommendations";
import Footer from "./components/Widgets/Footer";

function App() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (message) => {
    db.collection("posts").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      heading: user.email,
      subheading: "Web Developer",
      message: message,
      avatar: user.photoURL,
    });
  };
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app__body">
        {!user ? (
          <Login />
        ) : (
          <>
            <Sidebar>
              <IdentityModule />
              <CommunityPanel />
            </Sidebar>
            <Feed>
              <PostSomething sendPost={sendPost} />
              <FlipMove>
                {posts.length > 0 &&
                  posts.map((post) => <Post key={post.id} {...post.data} />)}
              </FlipMove>
              <Post
                heading="Elon Musk"
                subheading="CEO of Telsa Motors"
                message="I think therefore I am."
                avatar="https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2RmODZjM2RjZTg5ZDI2ZGQzZWI5NWU4YzI1MDBhMTIyLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D"
                photos={[
                  "https://ih1.redbubble.net/image.196327572.1228/st,small,845x845-pad,1000x1000,f8f8f8.u8.jpg",
                ]}
              />
            </Feed>
            <Widgets>
              <Recommendations />
              <Footer />
            </Widgets>
          </>
        )}
      </div>
      {/* ./App Body */}
    </div>
  );
}

export default App;
