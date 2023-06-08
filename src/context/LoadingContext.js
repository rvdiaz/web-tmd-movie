import { createContext, useState } from "react";

export const LoadingContext=createContext({
    loading:false
})

export const LoadingContextProvider=(props)=>{
    const [loading, setloading] = useState(true);

    return (
        <LoadingContext.Provider value={{loading,setloading}}>
            {props.children}
        </LoadingContext.Provider>
    )
}