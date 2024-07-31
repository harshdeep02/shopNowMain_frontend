import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderCategory = ({category, img, cardText}) => {

  return (
    <>
        <Link to={`/${category}`} state={category}>
            <div className="cardMain">
                <div className="categoryImg">
                    <img src={img} alt="" />
                </div>
                <div className='cardText'>{cardText}</div>
            </div>
        </Link>
    </>
  )
}
