import Image from "next/image";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import myAppIcon from "../../public/icons/undraw_my_app_re_gxtj.svg";
import "../styles/globals.css";
import { Button } from "@mui/material";
import RightMostGrid from "./RightMostGrid";

const Login = () => {
  return (
    <>
      <Grid container spacing={1.5} justifyContent="center">
        <Image src={myAppIcon} alt="Sign up" height={250} />
        <Grid item xs={12}>
          <p>Please login your account</p>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="username"
            label="Username"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            variant="outlined"
          />
        </Grid>
        <RightMostGrid>
          <Button variant="contained">Login</Button>
        </RightMostGrid>
      </Grid>
    </>
  );
};

export default Login;
