import Typograghy from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import GridList from "@material-ui/core/GridList";
import TableContainer from "@material-ui/core/TableContainer";

import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { createTheme, makeStyles } from "@material-ui/core/styles";

const theme = createTheme();

const useStyles = makeStyles({
  root: {
    color: (props) => props.color,
    backgroundColor: "lightcoral",
    height: "1000px",
  },
  fixedContainer: { border: "1px solid red" },
  unfixedContainer: { border: "1px solid" },
});

export const FixedContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ border: "3px orange solid", width: "1000px" }}>
        just a simple div with width = 1000px
      </div>
      <br />
      <div style={{ border: "1px blue solid", width: "auto" }}>
        just a simple div with width = auto(defauult)
      </div>
      <br />
      <Container className={classes.unfixedContainer}>
        unfixed container
        <Box color="white" bgcolor={"secondary.main"}>
          some box
        </Box>
      </Container>
      <Container className={classes.unfixedContainer} maxWidth={"md"}>
        unfixed container with maxWidth={"md"}
        <Box color="white" bgcolor={"secondary.main"}>
          some box
        </Box>
      </Container>

      <br />

      <Container fixed className={classes.fixedContainer}>
        fixed container
        <Box color="white" bgcolor={"secondary.main"}>
          some box
        </Box>
      </Container>
    </div>
  );
};
