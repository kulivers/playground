import { Container, Section, Bar } from "react-simple-resizer";

export const Resizer = () => (
  <Container style={{ height: "500px" }}>
    <Section style={{ background: "#d3d3d3" }} minSize={100} />
    <Bar size={10} style={{ background: "#888888", cursor: "col-resize" }} />
    <Section style={{ background: "#d3d3d3" }} minSize={100} />
  </Container>
);
