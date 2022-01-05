import React from "react";
import {
  Typography,
  TextField,
  FormControlLabel,
  FormGroup,
  Button,
  Link,
  Checkbox
} from "@mui/material";

function LoginPage() {
  return (
    <div>
      <h1>GATE PASS TO YOUR ACCOUNT.</h1>
      <div>
        <form>
          <Typography>SIGN IN</Typography>
          <p>
            If you have not created an account yet, then please{" "}
            <Link>sign up</Link> first
          </p>
          <TextField
            label="Email Address"
            name=""
            value=""
            onChange=""
            variant="standard"
          />
          <TextField
            label="Password"
            name=""
            value=""
            onChange=""
            variant="standard"
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Forgot password"
            />
          </FormGroup>
          <Button variant="contained">Sign Up</Button>
        </form>
      </div>
      <div>
        In case you are using a public/shared computer we recommend that you
        logout to prevent any un-authorized access to your account
      </div>
    </div>
  );
}

export default LoginPage;
