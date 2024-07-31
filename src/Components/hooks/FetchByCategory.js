import { useEffect, useState } from "react";

export default function useFetchByCategory(category){

  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if(typeof category === "string"){
        category = category.split(",")
      } 
      
        async function fetchData() {
          let data = await Promise.all(
            category.map(async (category) => {
              let res = await fetch(
                `https://dummyjson.com/products/category/${category}`
              );
              const { products } = await res.json();
              return products.map((productData) => ({
                ...productData,
                category: category,
              }));
            })
          );
          // console.log(data.flat());
          return data.flat();
        }
        let res = fetchData().then((value) => {
          setData(value);
          setLoading(false);
        });
      }, [category]);


      return [data, loading]
}