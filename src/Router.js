import WidthAuto from "./css/width-auto/width-auto";
import { BrowserRouter, Link, Route, withRouter } from "react-router-dom";
import React from "react";

export const cssPlaygroundsArr = [
  {
    text: "width-100-auto-difference",
    link: "/width-100-auto-difference",
  },
  {
    text: "test",
    link: "/test",
  },
];

//maybe do components
// const CSSRoutes = () => {
//     return <>{cssPlaygroundsArr.map((obj, inx) => {
//     <Route path={`/css${obj.link}`} />;
//     })}</>;
// };

const Router = () => {
  return (
    <>
      <Route path="/css/width-100-auto-difference" component={WidthAuto} />
    </>
  );
};
export default withRouter(Router);
