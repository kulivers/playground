import React, { useEffect, useState } from "react";
import CodeHighlighter from "../CodeHighlighter";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { codeText } from "./code-text";

const SomeComponent = () => {
  return <div>some component</div>;
};
const SomeComponent2 = () => {
  return <div>some component2</div>;
};

const components = {
  fst: {
    component: SomeComponent,
    link: "/someComponent",
  },
  scd: {
    component: SomeComponent2,
    link: "/someComponent2",
  },
};

const DinamicNameExample = (props) => {
  const [name, setName] = useState("fst");
  const DinamicComponent = components[name].component; //!!important

  useEffect(() => {
    const interval = setInterval(() => {
      setName((name) => {
        return name === "fst" ? "scd" : "fst";
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box display={"flex"} justifyContent={"space-between"} mx={2}>
      <Box>
        name: {name}
        <DinamicComponent />
      </Box>
      <Box>
        <Container>
          <CodeHighlighter codeString={codeText} />
        </Container>
      </Box>
    </Box>
  );
};
export default DinamicNameExample;
