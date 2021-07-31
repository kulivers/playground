import {
  Box,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles({
  root: { margin: "auto", backgroundColor: "lightpink" },
  wrapper: { display: "flex", border: "1px solid blue" },
  div: { border: "1px solid red" },
});

export const FlexGrowShrinkBasis = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Container disableGutters>
        <Typography
          align={"center"}
          variant={"h3"}
          component={"h2"}
          gutterBottom
        >
          Theory
        </Typography>
        <Box mb={3} display="flex" justifyContent="flex-start">
          <Paper elevation={4}>
            1Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </Paper>
          <Paper elevation={5}>
            2Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </Paper>
          <Paper elevation={5}>
            3Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </Paper>
        </Box>
      </Container>
      <div className={styles.wrapper}>
        <div className={styles.div}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </div>
        <div className={styles.div}>
          g established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          read
        </div>
        <div className={styles.div}>
          ve suffered alteration in some form, by injected humour, or randomised
          words which don't look even slightly believable. If you are going to
          use a passage of Lorem Ipsum, you need to be sure there isn't anything{" "}
        </div>
      </div>
    </div>
  );
};
