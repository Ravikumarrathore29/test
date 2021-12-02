import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles({
  root: {
    marginTop: "76px",
    marginLeft: "228px",
    maxWidth:"85%"
  }

});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        title="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          CardMedia Example
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          The CardMedia component sets a background image to cover available
          space.
        </Typography>
      </CardContent>
    </Card>
  );
}
