import React, { useEffect, useRef, useState } from "react";
import flipkarImg from "./images/flipkart2.png";
import { HeaderCategory } from "./HeaderCategory";
import { Link } from "react-router-dom";
import logout from './images/LogOut.png'

export const ProductDetailNavbar = () => {

  const scrollContainer = useRef(null)
  const[getUser, setUser] = useState('')

  if(localStorage.getItem('userData')){
    const {name}= JSON.parse(localStorage.getItem('userData'))
    useEffect(()=>{
      setUser(name)
    },[])
  }
  else{
    useEffect(()=>{
      setUser("")
    },[])
  }



 const leftScroll = (event)=>{
  if(scrollContainer.current){
    scrollContainer.current.scrollBy({
       left: -100, 
      behavior: 'smooth',
    })
  }
 }

 const rightScroll = ()=>{
  console.log(scrollContainer.current);
  if(scrollContainer.current){
  scrollContainer.current.scrollBy({
    left: 100, 
    behavior: 'smooth',
  })
  }
 }

 const handleLogOut = ()=>{
  localStorage.removeItem('userData')
  setUser('')
}

  return (
    <>
      <div className="header_main header_product productDetailNavbar">
        <div className="header">
          <div className="navLeft">
            <div className="empdiv"></div>
            <div className="logo">
              <a href="/">
                {/* <picture title="Flipkart" className="flipkartImg">
                  <img
                    src={flipkarImg}
                    width="160"
                    height="40"
                    title="Flipkart"
                  />
                </picture> */}
                 <div>Shop</div>
                 <div className="now">Now</div>
              </a>
            </div>
            <div className="formMain">
              <form>
                <div className="formFlex">
                  <button className="searchButton">
                    {/* <svg width="24" height="24" className="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 16L21 21" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
                  </button>
                </div>
                <div className="searchInput">
                  {/* <input type="text" name="search" id="search" placeholder="Search for Products"/> */}
                </div>
              </form>
            </div>
          </div>
          <div className="navRight">
            <div className="loginMain">
            {!getUser?
                <Link to='/login'>
                <div className="loginOuter">
                  <div className="loginInner">
                    <div>
                      <img
                        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                        alt="Login"
                        className="loginLogo"
                        width="24"
                        height="24"
                      />
                      <span>Login</span>
                    </div>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"
                      alt="Chevron"
                      className="dropDown"
                      width="12"
                      height="12"
                    ></img>
                  </div>
                </div>
                </Link>
                    
                :<button className="logOutMain" onClick={handleLogOut}>
                  <img src={logout} alt="logOut" />
                <div className="logOutText">{getUser}</div>
                </button>
                }
            </div>

            <Link to='/cart'>
            <div className="cartMain">
              <div className="cartOuter">
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                  alt="Cart"
                  className="cartImg"
                  width="24"
                  height="24"
                />
                <span className="cartText">Cart</span>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="category_headerMain header_categoy_product productDetailNavbarBottom">
        <div className="categoryHeader">
        <button onClick={leftScroll} className="leftScrollBtn">&lt;</button>
          <div className="categoryFlex" ref={scrollContainer}>
            <HeaderCategory cardText="Grocery" category={["groceries"]} />
            <HeaderCategory cardText="Mobiles" category={["smartphones"]} />
            <HeaderCategory
              cardText="Fashion"
              category={[
                "womens-bags",
                "womens-dresses",
                "womens-jewellery",
                "womens-shoes",
                "womens-watches",
              ]}
            />
            <HeaderCategory
              cardText="Electronics"
              category={[
                "laptops",
                "tablets",
                "smartphones",
                "mobile-accessories",
              ]}
            />
            <HeaderCategory cardText="Furniture" category={["furniture"]} />
            <HeaderCategory
              cardText="Appliances"
              category={[
                "home-decoration",
                "kitchen-accessories",
                "laptops",
                "tablets",
                "smartphones",
                "mobile-accessories",
              ]}
            />
            <HeaderCategory cardText="Beauty" category={["beauty"]} />
            <HeaderCategory cardText="Vehicle" category={["vehicle"]} />
            <HeaderCategory cardText="Fragrence" category={["fragrances"]} />
          </div>
          <button onClick={rightScroll} className="rightScrollBtn">&gt;</button>
        </div>
      </div>
    </>
  );
};
