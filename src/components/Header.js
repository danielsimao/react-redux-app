import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="logoHeaderDiv">
      <img src={require("../image/header.jpg")} alt={"header"} />
    </div>
  );
};

export default Header;
