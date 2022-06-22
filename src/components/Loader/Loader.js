import React from "react";
import Spinner from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function Loader() {
  return <Spinner type="Rings" color="#somecolor" height={80} width={80} />;
}

export default Loader;
