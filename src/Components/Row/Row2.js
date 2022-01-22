import axios from 'axios';
import { useState, useEffect } from 'react';
import '../../Components/SingleContent/SingleContent2';
import SingleContent2 from '../../Components/SingleContent/SingleContent2';

const Row2 = () => {
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `
            https://api.themoviedb.org/3/discover/movie?api_key=c37e36d31e617b41057d65444227343d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
          );
          
          setContent(data.results);
    }

    useEffect(() => {
       fetchTrending()
    }, [])

    return (
        <div>
             <div className="_trending">
                 {
                     content && content.map((c) => 
                     <SingleContent2
                     key={c.id}
                     id={c.id}
                     poster={c.poster_path}
                     overview={c.overview}
                     title={c.title || c.name}
                     date={c.first_air_date || c.release_date}
                     media_type="movie"
                     vote_average={c.vote_average}
                   />
                         )}
             </div>
        </div>
    )
}

export default Row2
