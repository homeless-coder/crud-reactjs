
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "#f1f2f2",
    width: "35%",
    borderRadius: 6,
  },
  label: {
    color: "#B8B8B8",
    fontSize: "1.2em",
  },
}));

const Input = ({ value, onChange, label, id }) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        error={false}
        value={value}
        id={id}
        className={classes.input}
        variant="outlined"
        onChange={(e) => onChange(e)}
      />
      <Typography className={classes.label}>{label}</Typography>
    </>
  );
};

export default Input;