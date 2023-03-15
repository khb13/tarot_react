import React from "react";

const Dropdownjs = (props) => {
  return <article>{props.visibility && props.children}</article>;
};

export default Dropdownjs;
