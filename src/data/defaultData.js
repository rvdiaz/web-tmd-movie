export const data={
    defaultMovieId:157336,
    footerLinks:[
        {
            title:'Designed & developed by Stephen Kempin',
            link:'https://www.stephenkempin.co.uk/'
        },
        {
            title:'View original code',
            link:'https://github.com/SKempin/reactjs-tmdb-app'
        },
        {
            title:'Rebuilded by Roberto Valdes',
            link:'https://robevaldes.com/'
        },
        {
            title:'View recreated code',
            link:'https://github.com/rvdiaz/web-tmd-movie'
        }
    ]
}

export const getDefaultUrl=(id)=>{
    /* const url=process.env.REACT_APP_BASEURLAPI+`search/movie?query=${query}&api_key=${process.env.REACT_APP_APIKEY}`; */
    const url=process.env.REACT_APP_BASEURLAPI+`movie/${id}?&api_key=${process.env.REACT_APP_APIKEY}`;
    return url;
}

