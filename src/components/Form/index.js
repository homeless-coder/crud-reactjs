import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "../../components";
import { Box, Grid, Button, ListItem, ListItemText } from "@material-ui/core";
import { FixedSizeList } from "react-window";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: "90vh",
  },
  form: {
    backgroundColor: "#232626",
    height: "40vh",
    borderRadius: "15px",
    border: "1px solid #393a3b",
    paddingLeft: "30px",
    paddingRight: "15px",
  },
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
      backgroundColor: "#3a3b3c",
      color: "#b0b3b8",
      "&:hover, &:focus": {
        backgroundColor: "#4e4f50"
      }
  }
}));

const Form = () => {
  const classes = useStyles();

  const renderRow = (props) => {
    const { index, style } = props;

    return (
      <ListItem button className={classes.listItem} key={index}>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItem>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={5}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={classes.form}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Input
                  id="prefix"
                  value={null}
                  onChange={() => {}}
                  label="Filter prefix:"
                />
              </Grid>
              <Grid item xs={6}>
                <FixedSizeList
                  height={150}
                  width={"100%"}
                  itemSize={46}
                  itemCount={200}
                >
                  {renderRow}
                </FixedSizeList>{" "}
              </Grid>
              <Grid item xs={6}>
                <Input
                  id="name"
                  value={null}
                  onChange={() => {}}
                  label="Name:"
                />
                <Input
                  id="surname"
                  value={null}
                  onChange={() => {}}
                  label="Surname:"
                />
              </Grid>
              <Grid item>
                <Button variant="contained">Create</Button>
              </Grid>
              <Grid item>
                <Button variant="contained">Update</Button>
              </Grid>
              <Grid item>
                <Button variant="contained">Delete</Button>
              </Grid>
              <Grid item xs={3}>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
