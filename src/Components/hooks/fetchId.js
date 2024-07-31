import { useEffect, useState } from "react";

export default function useFetchById(id){    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    if(Array.isArray(id)){
        id.map((singleId)=>{
            console.log(singleId);
            useEffect(()=>{
                const fetchData = async()=>{
                    const res = await fetch(`https://dummyjson.com/products/${singleId}`)
                    const JsonData =  await res.json()
            
                        setData((prev)=>[...prev, JsonData])
                        setLoading(false);
                        // console.log(JsonData);
                    return JsonData
                }
        
                fetchData()
            },[])
        })

    }
    else{
        useEffect(()=>{
            const fetchData = async()=>{
                const res = await fetch(`https://dummyjson.com/products/${id}`)
                const JsonData =  await res.json()
        
                    setData(JsonData)
                    setLoading(false);
                    // console.log(JsonData);
                return JsonData
            }
    
            fetchData()
        },[])
    }

    
   return [data, loading]
}