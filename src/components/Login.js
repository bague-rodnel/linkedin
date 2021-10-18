import React, { useState } from "react";

import { Button, FilledInput, FormControl, InputLabel } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please enter email and password");
    }

    auth.signInWithEmailAndPassword(email, password).then((credentials) => {
      dispatch(login(credentials.user));
    });
  };

  const registerToApp = () => {
    if (!email || !password) {
      return alert("Please enter email and password");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: userAuth.user.email,
          photoURL:
            "https://uploads-ssl.webflow.com/5cb8b10a48eebf8ee23d835b/5fa9a5aeb9e58ca6b693cc15_default-profile-picture1.jpg",
        });
        userAuth.user.updateEmail(email).then(() => {
          dispatch(login(userAuth.user));
        });
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  };

  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png"
        alt="logo"
      />
      <form onSubmit={loginToApp}>
        <FormControl variant="filled">
          <InputLabel htmlFor="login__email">Email or Phone</InputLabel>
          <FilledInput
            id="login__email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl variant="filled">
          <InputLabel htmlFor="login__password">Password</InputLabel>
          <FilledInput
            id="login__password"
            type={showPass ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <Button variant="text" onClick={() => setShowPass(!showPass)}>
                  {showPass ? "hide" : "show"}
                </Button>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button type="submit" variant="contained">
          Sign in
        </Button>
      </form>
      <p>
        New to LinkedIn?{" "}
        <button className="login__register" onClick={registerToApp} href="#">
          Join now
        </button>
      </p>
      <style jsx>{`
        .login {
          margin: 0 auto;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .login__logo {
          max-width: 140px;
        }
        .login form {
          width: 360px;
          padding: 20px;

          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .login__register {
          color: var(--blue) !important;
          outline: none;
          border: none;
        }
        .login__register:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Login;
