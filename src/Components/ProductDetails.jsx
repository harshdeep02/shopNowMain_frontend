import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { ProductDetailNavbar } from "./ProductDetailNavbar";
import { Slider } from "./Slider";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useFetchById from "./hooks/FetchById";
import star from "./images/star.png";
import { ProductShimmer } from "./ProductShimmer";
import { Footer } from "./Footer";
import spinner from "./images/spinner2.gif";
import Popup from "./Popup";


export const ProductDetails = () => {
  const { state } = useLocation();
  const { category } = useParams();
  // console.log(category);
  const [data, loading] = useFetchById(state || category);
  const [fetchData, setFetchData] = useState(null);
  // const [loading, setloading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    if(data){
      setFetchData(data);
      // setloading(false);
    }
  }, [data]);
  // console.log(fetchData)
  // console.log(state)


  const prams = useParams()

  const handleCart = async()=>{
    if(localStorage.getItem('userData')){
      const {token} = JSON.parse(localStorage.getItem('userData'))
      // console.log(token);

      const response = await fetch(`http://127.0.0.1:5000/category/${prams.category}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authToken": token
        },
        body: JSON.stringify({productId: prams.category})
      });
      const json = await response.json() 
      // console.log(json);
      setIsOpen(true)
      setMessage("Item has been added sucessfully")
     
      setTimeout(()=>{
        setIsOpen(false)
      }, 1000)
    }

    else{
      // console.log("not found");
      navigate('/login')
    }
  }


  const handleClick = () => {
    history.back();
  };
  return (
    <>
      <div className="flipartContainer">
        <ProductDetailNavbar />
        {/* <button className="backButton" onClick={handleClick}>Back</button> */}
        {loading ? (
          // <div className="spinner"><img src={spinner} alt="" /></div>
          <ProductShimmer />
        ) :
         Object.keys(fetchData).length > 0 ? (
          // console.log(data.images.toString(""))
          <div className="productContainerMain">
            <div className="productContainer">
              <div className="productImgSec">
                <div className="productImg">
                  <img src={data?.images[0]} alt="" />
                </div>
              </div>
              <div className="productBodySec">
                <div className="productTitle">
                  <h4>{data.title}</h4>
                </div>
                <div className="productRating">
                  <p>
                    {data.rating} <img src={star} alt="star--v1" />
                  </p>
                </div>
                <div className="productPrice">
                  <h2>₹ {Math.round(data.price * 83.5194)}</h2>{" "}
                  <p className="productDiscount">
                    {data.discountPercentage}% off
                  </p>
                </div>
                <div className="productDesc">
                  <div>{data.description}</div>
                </div>
                <div className="productSize">
                  <p>
                    Size: {data.dimensions.width} × {data.dimensions.height} ×{" "}
                    {data.dimensions.depth}
                  </p>
                </div>
                <div className="productStock">
                  <h5>{data.stock} Left</h5>
                </div>

                <div className="productButtons">
                  <div className="productCart" onClick={handleCart}>
                    <svg
                      className="NwyjNT"
                      width="16"
                      height="16"
                      viewBox="0 0 16 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className=""
                        d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                        fill="#fff"
                      ></path>
                    </svg>{" "}
                    <span> Add to cart</span>
                  </div>
                  <Link to="/cart">
                  <div className="productBuy" onClick={handleCart}>Buy Now</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="productButtons productButtons2">
                  <div className="productCart" onClick={handleCart}>
                    <svg
                      className="NwyjNT"
                      width="16"
                      height="16"
                      viewBox="0 0 16 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className=""
                        d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                        fill="#fff"
                      ></path>
                    </svg>{" "}
                    <span> Add to cart</span>
                  </div>
                  <div className="productBuy" onClick={handleCart}>Buy Now</div>
                </div>

            <div className="reviewRatingMain">
              <div className="reviewRating">Ratings & Reviews</div>
              <div className="productMainRating">
                <p>
                  {" "}
                  <span>{data.rating}</span> <img src={star} alt="star" />
                </p>
              </div>
              <div className="allRating">
                {data.reviews.map((review, i) => {
                  return (
                    <div className="custumerReviewMain" key={i}>
                      <p className="custumerRating">
                        {review.rating} <img src={star} alt="star" />
                      </p>
                      <p className="custumerComment">{review.comment}</p>
                      <span className="custumerName">
                        {review.reviewerName}
                      </span>{" "}
                      <span className="reviewDate">{review.date}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          ""
        )
        // <ImageSlider img={data.images}/
        }
        {!loading && isOpen?<Popup isOpen={isOpen} message={message}/>:""}
        {!loading && <Footer />}
      </div>
    </>
  );
};
