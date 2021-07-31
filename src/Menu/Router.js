import React from "react";
import { Route, withRouter } from "react-router-dom";
import { FlexGrowShrinkBasis, WidthAuto100 } from "../css";
import { FixedContainer } from "../MaterialUI";
import DinamicComponentName, { Resizer } from "../React";

export const cssPlaygrounds = [
  {
    text: "width-100-auto-difference",
    link: "/width-100-auto-difference",
    component: WidthAuto100,
  },
  {
    text: "flex grow+shrink+basis",
    link: "/flex-grow-shrink-basis",
    component: FlexGrowShrinkBasis,
  },
];

export const materialUIPlaygrounds = [
  {
    text: "Fixed container",
    link: "/fixedContainer",
    component: FixedContainer,
  },
];
export const reactPlaygrounds = [
  {
    text: "Dinamic Component Name",
    link: "/DinamicComponentName",
    component: DinamicComponentName,
  },
  {
    text: "Resizer",
    link: "/Resizer",
    component: Resizer,
  },
];

const Router = () => {
  return (
    <>
      {cssPlaygrounds.map((value, index) => {
        return <Route path={`/css${value.link}`} component={value.component} />;
      })}
      {materialUIPlaygrounds.map((value, index) => {
        return (
          <Route
            path={`/material-ui${value.link}`}
            component={value.component}
          />
        );
      })}

      {reactPlaygrounds.map((value, index) => {
        return (
          <Route path={`/react${value.link}`} component={value.component} />
        );
      })}
    </>
  );
};
export default withRouter(Router);
