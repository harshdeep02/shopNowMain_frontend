import React, { useRef, useState } from 'react'
import { HomeCard } from './HomeCard'
import useFetchByCategory from './hooks/FetchByCategory'
import spinner from './images/spinner2.gif'
import { Shimmer } from './Shimmer'

export const HomeCardList = ({category}) => {

    const [data, loading] = useFetchByCategory(category)
    const arr = [...Array(5)];  
    // const arr = new Array(5)

    const scrollContainer = useRef(null)


 const leftScroll = (event)=>{
  if(scrollContainer.current){
    scrollContainer.current.scrollBy({
       left: -320, 
      behavior: 'smooth',
    })
  }
 }

 const rightScroll = ()=>{
  console.log(scrollContainer.current);
  if(scrollContainer.current){
  scrollContainer.current.scrollBy({
    left: 320, 
    behavior: 'smooth',
  })
  }
 }



  return (
    <>
    {loading ?
        <div className="homeCardList">
            <div className="allCardsDiv">
        { arr.map((arry, i)=>{
        return(<Shimmer key={i}/>)
    })}
    </div>
    </div> :
    
    <div className="homeCardListMain">
        <div className="listCategoryText"><p className="categoryText">Best of {category}</p></div>
        <div className="homeCardList">
        <button onClick={leftScroll} className="leftScrollBtn">&lt;</button>
            <div className="allCardsDiv" ref={scrollContainer}>
                {data.map((value, i)=>{
                    if(i>=5) return
                    // console.log(value);

                    return(
                    <HomeCard key={value.id} id={value.id} img={value.images[0]} title={value.title} price={value.price} category={value.category}/>
                    )
                })}
            </div>
        <button onClick={rightScroll} className="rightScrollBtn">&gt;</button>
        </div>
        <div className="seeAll"><a href={`/${category}`}>Check all</a></div>
    </div>

    }
    </>
  )
}
