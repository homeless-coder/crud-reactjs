import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
      flex: 1,
      display: "flex",
      flexDirection: "row"
,     justifyContent: "flex-start",
  },
  input: {
    backgroundColor: "#e0e0e0;",
    width: "100%",
    maxWidth: "215px",
    borderRadius: 6,
    margin: "10px 5px",
  },
  label: {
    display: "flex",
    width: "30%",
    minWidth: "80px",
    maxWidth: "110px",
    textAlign: "left",
    flexDirection: "column",
    justifyContent: "center",
    color: "#B8B8B8",
    fontSize: "1.2em",
    paddingRight: "5px"
  },
}));

const Input = ({ value, onChange, label, id }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Typography variant="h6" display="block"  className={classes.label}>{label}</Typography>
      <TextField
        error={false}
        value={value}
        id={id}
        className={classes.input}
        variant="outlined"
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;
