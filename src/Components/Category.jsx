import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Cards } from "./Cards";
import spinner from "./images/spinner2.gif";
import useFetchByCategory from "./hooks/FetchByCategory";
import { ProductDetailNavbar } from "./ProductDetailNavbar";
import { AllProductShimmer } from "./AllProductShimmer";
import { Footer } from './Footer'


export const Category = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  const { category } = useParams();
  const { state } = useLocation();
  const [data, loading] = useFetchByCategory(state || category);

  const handleClick = () => {
    history.back();
  };
  return (
    <>
      <div className="flipartContainer">
        <ProductDetailNavbar />
        {/* <button className="backButton" onClick={handleClick}>Back</button> */}
        {loading ? (
          <div className="spinner"><img src={spinner} alt="" /></div>
          // data?.map((object, i) => {
          //   return <AllProductShimmer key={i} />;
          // })
        ) : (
          <div className="cardContainerMain">
            <div className="cardContainer">
              {data.map((data) => {
                // console.log(data);
                // {console.log(data.id)}
                return (
                  <Cards
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    price={data.price}
                    img={data.images[0]}
                    avalability={data.availabilityStatus}
                    brand={data.brand}
                    discription={data.description}
                    rating={data.rating}
                    category={data.category}
                  />
                );
              })}
            </div>
          </div>
        )}

        {loading ?"" : (<Footer/>)

        }
      </div>
    </>
  );
};
