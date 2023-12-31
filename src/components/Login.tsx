"use client";

import computerUIAnimation from "@/assets/computer-ui-animation.json";
import { useFirebaseContext } from "@/providers/firebaseProvider";
import { useUserContext } from "@/providers/userProvider";
import { FIREBASE_EVENTS } from "@/services/firebase/events";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Analytics, logEvent } from "firebase/analytics";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RightMostGrid from "./RightMostGrid";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Context User
  const { user, saveUser } = useUserContext();

  // Context Firebase
  const { firebaseAnalytics } = useFirebaseContext() as {
    firebaseAnalytics: Analytics;
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case "username":
        setUsername(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = () => {
    // Error Validations
    if (username.length === 0) return;
    if (password.length === 0) return;

    // Save Context
    saveUser({ name: username });
    logEvent(firebaseAnalytics, FIREBASE_EVENTS.LOGIN);

    // Proceed
    router.push("/account-list");
  };

  return (
    <div className="login" onKeyDown={handleKeyDown}>
      <Grid container spacing={1.5} justifyContent="center" direction="row">
        <Grid item xs={8}>
          <Lottie
            className="animation"
            style={{
              width: "100%",
              height: "auto",
            }}
            animationData={computerUIAnimation}
          />
          {/* <Image src={appLogo} alt="Sign up" className="mainImage" priority /> */}
        </Grid>
        <Grid item xs={12}>
          <p data-cy="login-subtitle">
            {user?.name
              ? `Welcome back ${user.name}`
              : `Please login your account`}
          </p>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            onChange={handleInput}
            id="username"
            label="Username"
            variant="outlined"
            inputProps={{ "data-cy": "login-username" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            onChange={handleInput}
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            inputProps={{ "data-cy": "login-password" }}
          />
        </Grid>
        <RightMostGrid>
          <Button
            variant="contained"
            onClick={handleLogin}
            data-cy="login-button"
          >
            Login
          </Button>
        </RightMostGrid>
      </Grid>
    </div>
  );
};

export default Login;
