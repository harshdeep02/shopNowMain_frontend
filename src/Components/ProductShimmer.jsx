import React from "react";
import "./ProductShimmer.css";

export const ProductShimmer = () => {
  return (
    <div className="productContainer productShimmer">
      <div className="productImgSec">
        <div className="productImg"></div>
      </div>
      <div className="productBodySec">
        <div className="productTitle">
          <div></div>
        </div>
        <div className="productPrice"> </div>
        <div className="productDesc"></div>
        <div className="productSize"></div>
        <div className="productStock"></div>
      </div>
    </div>
  );
};
