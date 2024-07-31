import React from "react";
import './AllProductShimmer.css'

export const AllProductShimmer = () => {
  return (
    <div className="cardOuterMain allProductShimmer">
      <div className="cardInnerMain">
        <div className="cardMain">
          <div className="cardImgOuter"></div>
          <div className="cardBodyOuter">
            <div className="cardBodyInner">
              <div className="cardDiscription"></div>
              <div className="cardBody">
                <div className="cardBodyLeft">
                  <div className="cardBodyLeftInner">
                    <div className="productRating"></div>
                    <div className="rating_brand"></div>
                    <div className="price"></div>
                    <div className="avalability"></div>
                  </div>
                </div>
                <div className="cardBodyRight"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
