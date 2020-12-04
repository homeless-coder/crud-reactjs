import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: "90vh",
  },
  form: {
    backgroundColor: "#232626",
    height: "20vh",
    borderRadius: "15px",
    border: "1px solid #393a3b",
    paddingLeft: "13px",
    paddingRight: "13px",
  },
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={5}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            className={classes.form}
          >
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;