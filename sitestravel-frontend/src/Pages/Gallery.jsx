import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";

function Gallery() {
  return (
    <div>
      <h3>Our services in pictures</h3>
      <h1>GALLERY</h1>
      <p>Navigate through our rich pictures</p>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="public/images/galery/giraffe.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Giraffe
          </Typography>
        </CardContent>
        
      </Card>
    </div>
  );
}

export default Gallery;
