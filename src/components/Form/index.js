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
      backgroundColor: "#4e4f50",
    },
  },
}));

const Form = ({ name, surname, setName, setSurname, db, setDB, id, setId, prefix, setPrefix }) => {
  const classes = useStyles();

  const insert = () => {
    let obj = {};
    obj.name = name;
    obj.surname = surname;
    obj.id = db.length;

    setDB([...db, obj]);
  };

  const validateCreate = () => (!name || !surname ? true : false);

  const select = (id) => {
    let [result] = db.filter((person) => person.id == id);
    console.log(result.id);
    setName(result.name);
    setSurname(result.surname);
    setId(id);
  };

  const del = () => {
    setDB(db.filter((person) => person.id !== id));
    setName("");
    setSurname("");
    setId("");
  };

  const update = () => {
    let newArray = [...db];
    let obj = {};
    obj.name = name;
    obj.surname = surname;
    obj.id = id;
    newArray[id] = obj;
    setDB(newArray);
  };

  const handleOnFilter = (value) => {
    let regex = new RegExp(value, 'i');
    return db.filter(q => (regex.test(q.name)) || (regex.test(q.surname)))
  }

  const renderRow = () =>
    handleOnFilter(prefix).map((person, id) => (
      <ListItem
        button
        onClick={() => select(person.id)}
        className={classes.listItem}
        key={id}
      >
        <ListItemText primary={`${person.surname}, ${person.name}`} />
      </ListItem>
    ));

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
                  onChange={(e) => setPrefix(e.target.value)}
                  label="Filter prefix:"
                />
              </Grid>
              <Grid item xs={6}>
                <FixedSizeList
                  height={150}
                  width={"100%"}
                  itemSize={46}
                  itemCount={1}
                >
                  {renderRow}
                </FixedSizeList>{" "}
              </Grid>
              <Grid item xs={6}>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  label="Name:"
                />
                <Input
                  id="surname"
                  value={surname}
                  onChange={(e) => {
                    setSurname(e.target.value);
                  }}
                  label="Surname:"
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  style={validateCreate() ? { color: "white" } : null}
                  onClick={() => insert()}
                  disabled={validateCreate()}
                >
                  Create
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => update()}>
                  Update
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => del()}>
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
