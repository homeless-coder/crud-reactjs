import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    color: "#8a939e",
    fontSize: "1em"
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Typography variant="h6" className={classes.footer}>
      Luis Fernando Ponce Orellana &copy; 2020
    </Typography>
  );
};

export default Footer;