import { createContext, useState } from "react";

export const ErrorContext=createContext({
    error:false
})

export const ErrorContextProvider=(props)=>{
    const [error, seterror] = useState(false);

    return (
        <ErrorContext.Provider value={{error,seterror}}>
            {props.children}
        </ErrorContext.Provider>
    )
}