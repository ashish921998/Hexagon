import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3} xl={12}>
          <h1>Available in</h1>
          <Paper className={classes.paper}>Delhi</Paper>
          <Paper className={classes.paper}>Delhi</Paper>
          <Paper className={classes.paper}>Delhi</Paper>
          <Paper className={classes.paper}>Delhi</Paper>
          <Paper className={classes.paper}>Delhi</Paper>
          <Paper className={classes.paper}>Delhi</Paper>
          <Paper className={classes.paper}>Delhi</Paper>
          <Paper className={classes.paper}>Delhi</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
