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

    const handlerChange=(newMovie)=>{
        setmovieData({
            ...newMovie,
            poster_path:'https://image.tmdb.org/t/p/original'+newMovie.poster_path
        })
    }

    return (
        <MovieContext.Provider value={{movieData,handlerChange}}>
            {props.children}
        </MovieContext.Provider>
    )
}