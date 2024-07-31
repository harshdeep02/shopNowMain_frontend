import React from 'react'
import { Link } from 'react-router-dom'
import star from './images/star.png'

export const Cards = ({id,category, title, price, img, rating, discription, brand, avalability}) => {
// console.log(id);
  return (
    <div className="cardOuterMain">
      <div className="cardInnerMain">
        <div className="cardMain categoryCard">
          <div className="cardImgOuter">
            <div className="cardImginner">
              <div className="CardImgMain">
                <Link to={`/${category}/${id}`} state={id}><img src={img} alt="" /></Link>
              </div>
            </div>
          </div>
          <Link to={`/${category}/${id}`} state={id}>
          <div className="cardBodyOuter">
            <div className="cardBodyInner">
              <h3 className="cardDiscription">{discription}</h3>
              <div className="cardBody">
                <div className="cardBodyLeft">
                  <div className="cardBodyLeftInner">
                  <div className="productRating"><p>4.77 <img src={star} alt="star--v1"/></p></div>
                    <div className='rating_brand'><span className="brand"> {title}</span></div>
                    <h2 className="price">₹ {Math.round(price * 83.5194)}</h2>
                    <div className="avalability">{avalability}</div>
                  </div>
                </div>
                <div className="cardBodyRight"></div>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
    
  )
}
