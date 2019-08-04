import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        exact
        path="/:page"
        render={props => {
          console.log(props);
          return (
            <>
              <p>
                Jestem na <span>{props.match.params.page}</span>
              </p>
              <p>
                Jestem na <span>{props.match.url}</span>
              </p>
              <p>
                Jestem na <span>{props.match.path}</span>
              </p>
            </>
          );
        }}
      />
      <Route
        path="/:page/:idProduct"
        render={props => {
          console.log(props);
          return (
            <>
              <p>
                Jestem na <span>{props.match.params.idProduct}</span>
              </p>
              <p>
                Jestem na <span>{props.match.url}</span>
              </p>
              <p>
                Jestem na <span>{props.match.path}</span>
              </p>
            </>
          );
        }}
      />
    </div>
  );
};

export default Footer;
