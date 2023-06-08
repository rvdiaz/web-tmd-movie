export const data={
    defaultMovieId:157336
}

export const getDefaultUrl=(id)=>{
    /* const url=process.env.REACT_APP_BASEURLAPI+`search/movie?query=${query}&api_key=${process.env.REACT_APP_APIKEY}`; */
    const url=process.env.REACT_APP_BASEURLAPI+`movie/${id}?&api_key=${process.env.REACT_APP_APIKEY}`;
    return url;
}