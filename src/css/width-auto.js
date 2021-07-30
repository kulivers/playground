import React, { Component, useEffect } from "react";
import "./width-auto.css";
import { Link, BrowserRouter, Route, withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

const WidthAuto = ({ match, ...props }) => {
  console.log("url", match.url);
  console.log("path", match.path);
  return (
    <div>
      <>
        <Link to={`${match.url}/width-100`}> width 100%</Link>
        <Link to={`${match.url}/width-auto`}> width-auto</Link>
      </>

      <Route
        path={`${match.url}/width-100`}
        render={(p) => {
          return (
            <div style={{ border: "2px red solid" }}>
              <div className="width-100">
                div with width:100%; U CAN SCROOL --->
              </div>
            </div>
          );
        }}
      />

      <Route
        path={`${match.url}/width-auto`}
        render={(p) => (
          <div style={{ border: "2px red solid" }}>
            <div className="width-auto">div with width:auto; NO SCROLL</div>
          </div>
        )}
      />
    </div>
  );
};
export default withRouter(WidthAuto);
