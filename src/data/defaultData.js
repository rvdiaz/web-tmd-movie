export const data={
    defaultMovie:'INTERSTELLAR'
}

export const getDefaultUrl=(query)=>{
    const url=process.env.REACT_APP_BASEURLAPI+`search/movie?query=${query}&api_key=${process.env.REACT_APP_APIKEY}`;
    return url;
}