import React from "react";
import "../styles/Portfolios.css";

function Portfolios(props) {
  return (
    <div>
      <div className="row">
        <div className="column">
          Project Title: {props.caption}
          <br />
          <img alt={props.alt} src={props.image} />
        </div>
        <div className="column">
          Project Title: {props.caption}
          <br />
          <img alt={props.alt} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default Portfolios;
