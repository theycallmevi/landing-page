import React from "react";
//import pagenotfound image
import pagenotfoundImage from "../2420671.jpg";
//react router dom
const PageNotFound: React.FC = () => {
  return (
    <div className="pageNotFound">
      <h1>Oops..! 404 Page Not Found</h1>
      <p>Looks like you came to wrong page on our server</p>
      <img src={pagenotfoundImage} height="500" width="500" alt="not found" />
    </div>
  );
};

export default PageNotFound;
