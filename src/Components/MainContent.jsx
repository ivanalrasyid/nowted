import React from "react";
import "../assets/styles/MainContent.css";
import Button from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainContent = () => {
  return (
    <div className="container wrapper-content">
      <div className="row">
        <div className="col-12">
          <h3 className="primary-content">
            Boost your productivity with our streamlined note-taking solution
          </h3>
          <p className="paragraghContent">
            Effortlessly access your notes from any device with our convenient
            cloud-based solution.
          </p>
          <Button className="btnTryForFree">
            Try For Free
            <FontAwesomeIcon icon="fa-regular fa-arrow-right" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
