import React from 'react'
import { HomeCardList } from './HomeCardList'


export const Home = () => {
  return (
    <>
   <HomeCardList category={["womens-dresses"]}/>
   <HomeCardList category={["beauty"]}/>
   <HomeCardList category={["laptops"]}/>
   <HomeCardList category={["smartphones"]}/>
   <HomeCardList category={["womens-shoes"]}/>
   <HomeCardList category={["tablets"]}/>
   <HomeCardList category={["fragrances"]}/>
   <HomeCardList category={["groceries"]}/>
    </>
  )
}
