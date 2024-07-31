import React from 'react'
import { Link } from 'react-router-dom'

export const HomeCard = ({id, img, title, price, category}) => {
  return (
    <Link to={`/${category}/${id}/`} state={id}>
    <div className="homeCard">
        <div className="homeCardImg">
            <div className="cardImgMain">
                <img src={img} alt="" />
            </div>
        </div>
        <div className="homeCardBody">
            <div className="homeCardTitle">{title}</div>
            <div className="homeCardPrice">₹ {Math.round(price * 83.5194)}</div>
        </div>
    </div>
    </Link>
  )
}
