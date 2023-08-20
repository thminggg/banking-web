"use client";

import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import myAppIcon from "../../public/icons/undraw_my_app_re_gxtj.svg";
import "../styles/globals.css";
import RightMostGrid from "./RightMostGrid";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      login();
    }
  };

  const login = () => {
    // Error Validations
    if (username.length === 0) return;
    if (password.length === 0) return;

    // Proceed
    router.push("/account-list");
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <Grid container spacing={1.5} justifyContent="center">
        <Image src={myAppIcon} alt="Sign up" height={250} priority />
        <Grid item xs={12}>
          <p>Please login your account</p>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            onChange={handleInput}
            id="username"
            label="Username"
            variant="outlined"
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
          />
        </Grid>
        <RightMostGrid>
          <Button variant="contained" onClick={login}>
            Login
          </Button>
        </RightMostGrid>
      </Grid>
    </div>
  );
};

export default Login;