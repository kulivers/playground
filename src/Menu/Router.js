import { GridTesting } from "../MaterialUI";
import React from "react";
import { Route, withRouter } from "react-router-dom";
import WidthAuto from "../css";
import DinamicComponentName from "../React";

export const materialUIPlaygroundsArr = [
  {
    text: "grid",
    link: "/grid",
  },
  {
    text: "test",
    link: "/test",
  },
];
export const reactPlaygroundsArr = [
  {
    text: "Dinamic Component Name",
    link: "/DinamicComponentName",
  },
];

const Router = () => {
  return (
    <>
      <Route path="/css/width-100-auto-difference" component={WidthAuto} />
      <Route path="/material-ui/grid" component={GridTesting} />
      <Route
        path="/react/DinamicComponentName"
        component={DinamicComponentName}
      />
    </>
  );
};
export default withRouter(Router);
