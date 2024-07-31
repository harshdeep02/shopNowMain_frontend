import React, { useEffect, useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import useFetchById from './hooks/FetchById';

export const Slider = ({img}) => {
  const [sliderImages, setSliderImages] = useState([])
  
  useEffect(()=>{
      const imgData = img?.map((image)=>{
        image = {url:image}
         return image
      })
      setSliderImages((prevValue)=> ({...prevValue, imgData}))
      console.log(sliderImages);
    }, [img])
  return (
    <div>
    <h3> Creating the image slider using the react-simple-image-slider </h3>
    <SimpleImageSlider
      width={500}
      height={250}
      images={sliderImages}
      showNavs={true}
    />
  </div>
  )
}
