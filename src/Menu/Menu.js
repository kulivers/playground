import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import React from "react";
import CssColumn from "./CssColumn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "lightblue",
    marginTop: 0,
  },
  column: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRight: "2px solid red",
  },
  paper: {
    textAlign: "center",
    fontStyle: "unset",
    backgroundColor: "transparent",
    padding: theme.spacing(1),
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Menu() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item className={classes.column}>
        <CssColumn />
      </Grid>
      <Grid item className={classes.column}>
        empty
      </Grid>
      <Grid item className={classes.column}>
        empty
      </Grid>
    </Grid>
  );
}

export default Menu;
