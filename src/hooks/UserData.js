import { useState } from "react";

export function useGetUserData(data){
    const [loginData, setLoginData] = useState(data)
// const [userData, setUserData] = useState("")
return [loginData, setLoginData]
}