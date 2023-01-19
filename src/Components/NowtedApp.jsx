import React from "react";

import nowted from "../assets/images/nowted.png";
import "../assets/styles/NowtedApp.css";

const NowtedApp = () => {
  return (
    <div className="container wrapper-nowted">
      <div className="row">
        <div className="col-12">
          <img src={nowted} alt="Nowted" className="imgNowted" />
        </div>
      </div>
    </div>
  );
};

export default NowtedApp;
