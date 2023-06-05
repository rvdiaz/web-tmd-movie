import { createContext, useState } from "react";

export const MovieContext=createContext({
    id:'',
    title:'',
    backGroundPhoto:'',
    mainPhoto:'',
    description:'',
    genre:'',
    releaseTime:'',
    runningTime:'',
    boxOffice:'',
    voteAverage:''
})

export const MovieContextprovider=(props)=>{
    const [movieData, setmovieData] = useState({
        title:'',
        backGroundPhoto:'',
        mainPhoto:'',
        description:'',
        genre:'',
        releaseTime:'',
        runningTime:'',
        boxOffice:'',
        voteAverage:''
    })
    return (
        <MovieContext.Provider value={{movieData,setmovieData}}>
            {props.children}
        </MovieContext.Provider>
    )
}