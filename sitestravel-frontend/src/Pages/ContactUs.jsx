import React from "react";
import {
  Typography,
  CardContent,
  TextField,
  TextareaAutosize,
  Button
} from "@mui/material";

function ContactUs() {
  return (
    <div>
      <h3>GET INTOUCH</h3>
      <h1>CONTACT INFO</h1>
      <p>Please do not hesitate to reach out</p>
      <CardContent variant="outlined">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Address
        </Typography>

        <Typography variant="body2">Kampala, Uganda</Typography>
      </CardContent>
      <CardContent variant="outlined">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Phone Number
        </Typography>
        <Typography variant="body2">+256 414 347 443 </Typography>
        <Typography variant="body2">+256 772 200 120</Typography>
      </CardContent>
      <CardContent variant="outlined">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Email Address
        </Typography>

        <Typography variant="body2">reservations@sitestravel-ug.com</Typography>
      </CardContent>

      <form action="">
        <TextField label="Full Name" variant="outlined" />
        <TextField label="Full Name" variant="outlined" />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Minimum 3 rows"
          style={{ width: 200 }}
        />
        <Button variant="contained">Close</Button>
        <Button variant="contained">Save</Button>
      </form>
    </div>
  );
}

export default ContactUs;
