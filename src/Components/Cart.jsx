import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import logout from './images/LogOut.png'
import spinner from "./images/spinner2.gif";
import { CartCard } from "./CartCard";
import useFetchById from "./hooks/FetchById";
import Popup from "./Popup";


export const Cart = () => {
  const[getUser, setUser] = useState('')
  const[getProductId, setGetProductId] = useState('')
  let[loading, setLoading] = useState(true)
  const [notDataFound, setNotDataFound] = useState('')
  let navigate = useNavigate()
  
  let allProdId = null;
  if(getProductId.length>0){
    allProdId = getProductId?.map((id)=>id.product)
  }
  
  const [data, load] = useFetchById(allProdId);
  // console.log(data);

  if(localStorage.getItem('userData')){
    const {name, token}= JSON.parse(localStorage.getItem('userData'))

    useEffect(()=>{
      setUser(name)
      const getProducts= async()=>{
        const response = await fetch('https://shopnowmain-backend.onrender.com/cart',{
          method: "GET",
          headers:{
            "Content-Type": "application/json",
              "authToken": token
          }
        })
        const json = await response.json()
        // console.log(json);
        if(json.result.length<=0){
          // console.log("not found");
          allProdId = null;
          setGetProductId(json.result)
          setNotDataFound( "Not Any Item Found")
          setLoading(false)
        }
        else{
        setGetProductId(json.result)
        }
        // setLoading(false)
        return json
      }
      getProducts()

    },[])
  }
  else{
    useEffect(()=>{
      setUser("")
      // console.log("login please");
      navigate('/')
    },[])
  }

  const handleLogOut = ()=>{
    localStorage.removeItem('userData')
    setUser('')
    navigate('/')
  }


  useEffect(()=>{
    if(data.length>0){
      // console.log(data); 
    setLoading(false)
    }
  },[data])

const result =  data?.reduce((accumulator, card)=> accumulator + card.price,0)

  return (
    <>
    {localStorage.getItem('userData')?
      <div className="cartPageMain">
        <div className="cartPageHeader">
          <div className="header">
            <div className="navLeft">
              <div className="empdiv"></div>
              <div className="logo">
                <a href="/">
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
                {!getUser ? (
                  <Link to="/login">
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
                        {/* <img
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"
                          alt="Chevron"
                          className="dropDown"
                          width="12"
                          height="12"
                        ></img> */}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <button className="logOutMain" onClick={handleLogOut}>
                    <img src={logout} alt="logOut" />
                    <div className="logOutText">{getUser}</div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {loading? (
          <div className="spnr">
          <div className="spinner"><img src={spinner} alt="" /></div>
          </div>
        ) : (
        <div className="cart-page">
          <div className="cart-content">
            <div className={data.length? "cartLeft":"cartLeft dataNtFound"}>
            <div className= {data.length? "cart-items":"cart-items cartItemsDataNotFound"}>
              {data.length>0?(data?.map((card, i)=>{
                const productId = getProductId?.find(element => element.product == card.id);

              return  <CartCard key={i}  id={productId._id} category={card.category} title={card.title} img={card.images[0]} stock={card.stock} price={card.price} rating={card.rating}/>
              })):<div className="notFound">{notDataFound}</div>}
              </div>

              {data.length?
              <>
              <div className="placeOrderDiv">
                <button className="place-order-button">PLACE ORDER</button>
              <div className="mobileCartPriceMain"><span className="mobileCartTotal">Total:&nbsp;</span><div className="mobileCartPrice">{`₹${Math.round(result * 83.5194)}`}</div></div>
              </div>
              </>
              :""}
            </div>

            {data.length?
            <div className="price-details">
              <p>Price ({data.length})</p>
              <p>Discount: 25%</p>
              <p>Coupons for you: -₹299</p>
              <p>Delivery Charges: ₹0</p>
              <p className="cartTotal">{`Total Amount: ₹${Math.round(result * 83.5194)}`}</p>
              <p>You will save 25% on this order</p>
            </div>
              :""}
          </div>
        </div>
        )}
      </div>

      :useEffect(()=>{
        navigate('/login')
      })
    }
    </>
  );
};
