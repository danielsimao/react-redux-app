import React from "react";
import "./Poster.css";

type PropType = {
  pic: String,
  name: String
};

const FrontBody = function({ pic, name }: PropType) {
  return (
    <li className="flex-item">
      <img src={require(`../image/${pic}.jpg`)} title={name} alt={name} />
      {/* <p color="white">{name}</p> */}
    </li>
  );
};

export default FrontBody;
