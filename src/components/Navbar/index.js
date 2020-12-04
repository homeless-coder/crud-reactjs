import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Typography, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontWeight: "semibold",
  },
  appBar: {
    backgroundColor: "#232626",
    borderBottom: "1px solid #393a3b",
  },
}));

const Navbar = ({ title }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
