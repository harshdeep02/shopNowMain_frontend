import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CartCard = ({title,id, img, category, stock, price, rating,}) => {

  const handleDelete = () => {
    // console.log("delete start");
    const { token } = JSON.parse(localStorage.getItem("userData"));

    const fetchData = async () => {
      const response = await fetch("https://shopnowmain-backend.onrender.com/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authToken: token,
        },
        body: JSON.stringify({ productId: id }),
      });
      const json = await response.json();
      if (json) {
        window.location.reload();
      }
    };

    fetchData();
  };

  return (
    <>
      <div className="cart-item">
        <div className="cartimg">
          <img src={img} alt="Product 1" />
        </div>
        <div className="cart-item-details">
          <h3>{title}</h3>
          <p>{category}</p>
          <p className="cartStock">{stock} Left</p>
        </div>
        <div className="cartItemPrice_DeleteBtn">
          <div className="cart-item-price">
            <p>₹ {Math.round(price * 83.5194)}</p>
          </div>
          <div className="deleteBtnMain">
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};
