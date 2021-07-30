import React from "react";
import { Route, withRouter } from "react-router-dom";
import WidthAuto from "../css";
import { GridTesting } from "../MaterialUI";
import DinamicComponentName from "../React";

export const cssPlaygrounds = [
  {
    text: "width-100-auto-difference",
    link: "/width-100-auto-difference",
    component: WidthAuto,
  },
];

export const materialUIPlaygrounds = [
  {
    text: "grid",
    link: "/grid",
    component: GridTesting,
  },
];
export const reactPlaygrounds = [
  {
    text: "Dinamic Component Name",
    link: "/DinamicComponentName",
    component: DinamicComponentName,
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
