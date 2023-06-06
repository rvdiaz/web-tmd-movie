import { useContext, useEffect } from "react";
import { ErrorContext } from "../../context/ErrorContext";
import { LoadingContext } from "../../context/LoadingContext";
import { MovieContext } from "../../context/MovieContext";

export const useFetch=(url)=>{
    const {handlerChange}=useContext(MovieContext);
    const {setloading}=useContext(LoadingContext);
    const {seterror}=useContext(ErrorContext);
    useEffect(() => {
        const fetchData=async()=>{
            try {
                const response=await fetch(url);
                const data=await response.json();
                if(data){

                    handlerChange(data.results[0]);
                    setloading(false);
                }
            } catch (error) {
                seterror({
                    isError:true,
                    msg:error
                });
            }
           
        }
        fetchData();
    }, [url])
}