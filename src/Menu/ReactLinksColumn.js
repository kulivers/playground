import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { materialUIPlaygroundsArr, reactPlaygroundsArr } from "./Router";

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
}));

const ReactLinksColumn = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.column} spacing={2}>
        <Typography variant={"h5"} align={"center"}>
          React
        </Typography>
        {reactPlaygroundsArr.map((item, index) => (
          <Grid item className={classes.item} key={index}>
            <Paper className={classes.paper}>
              <Link to={`/react${item.link}`}>{item.text}</Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default ReactLinksColumn;
