import React, {useState, useEffect} from 'react';
import axios from '../../axios';
import requests from '../../requests';
import './Banner.css'; 

function Banner() {
    // eslint-disable-next-line
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            )
            return request;
            
        }
        fetchData();
       
    }, [])
   

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + '...':str;
    }


    return (
        <header 
        className="Banner"
        style={{
            backgroundSize: 'cover',
            backgroundImage:  `url(
                'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: 'center center',    
        }}
        >
            


            <div className="Banner__contents">

          
            {/* {title} */}
            <h1 className='Banner__title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="Banner__buttons">
               
                <button className="banner__button">Play</button>
            </div>
            <h1 className="Banner__description">
                {truncate(movie?.overview, 150)}
            </h1>
            {/* {div 2 buttons} */}
            {/* {description} */}
            </div>
            <div className="banner__fadeButton">
                
            </div>
        </header>
    )
}

export default Banner
