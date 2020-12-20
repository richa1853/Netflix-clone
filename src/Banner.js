import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import "./Banner.css";

function Banner() {
    const[movie,setMovie]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
                );
    return request;
}
fetchData();
},[]);
console.log(movie);
function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"...":str;
}
    return (
        <header className="banner"// want some background image for the banner
          style={{
              backgroundSize: "cover",
              backgroundImage:`url(
                  "https://image.tmdb.org/t/p/original/${movie?.backdrop_path} "
              )`,// base url for any pic.. saying go and get that path so trending now and top-rated img we want to see on back
                // question mark is for if the movie is ever undefined  it won't freak out and crash
              backgroundPosition: "center center",
          }}
        >
            <div className="banner__contents" >
                <h1>
                    {movie?.title|| movie?.name||movie?.original_name}{/*little ors take care of ur edges means  */}
                </h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">
            {truncate(movie?.overview,150)}
            </h1>
            </div>
            <div className="banner--fadeBottom"/>
            </header>
    );
}
export default Banner
