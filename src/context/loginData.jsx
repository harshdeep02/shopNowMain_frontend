import { createContext, useState } from "react";

export const loginDataContext = createContext('')

export function GetDetails({children}){
    const [userData, setUserData] = useState('harsh')

    return <loginDataContext.Provider value={[userData, setUserData]}>{children}</loginDataContext.Provider>
}
