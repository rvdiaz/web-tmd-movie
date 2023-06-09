import numeral from "numeral";
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
            poster_path:'https://image.tmdb.org/t/p/original'+newMovie.poster_path,
            backdrop_path:'https://image.tmdb.org/t/p/original'+newMovie.backdrop_path,
            budget:numeral(newMovie.budget).format('($0,0)'),
            runtime:newMovie.runtime+' mins'
        })
    }

    return (
        <MovieContext.Provider value={{movieData,handlerChange}}>
            {props.children}
        </MovieContext.Provider>
    )
}