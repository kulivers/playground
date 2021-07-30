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
  },
});

export const GridTesting = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "lightcoral", height: "1000px" }}>
      <Container disableGutters style={{ border: "1px solid" }}>
        some container disable gutters
        <Box
          color="primary.main"
          bgcolor={"secondary.main"}
          px={2}
          textAlign={""}
        >
          some boxasdsada
        </Box>
      </Container>
      <br />
      <Container maxWidthXl>
        fixed container
        <Box
          color="primary.main"
          bgcolor={"secondary.main"}
          px={theme.spacing(5)}
        >
          some boxasdsada
        </Box>
      </Container>
    </div>
  );
};
