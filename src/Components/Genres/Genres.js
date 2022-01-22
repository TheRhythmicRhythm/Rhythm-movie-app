import Chip from '@mui/material/Chip';
import axios from "axios";
import { useEffect } from "react"

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
  }) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
    
      const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };

    const fetchGenres = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/genre/${type}/list?api_key=c37e36d31e617b41057d65444227343d&language=en-US`
        );
        setGenres(data.genres);
      };
     

      useEffect(() => {
        fetchGenres();
    
        return () => {
          setGenres({}); // unmounting
        };
        // eslint-disable-next-line
      }, []);
    return (
        <div className="chipper" style={{ padding: "6px 0" }}>
        {selectedGenres.map((genre) => (
          <Chip
          sx={{
            color: '#fff',
            bgcolor: 'rgb(206, 43, 92)',
          }}  
            label={genre.name}
            key={genre.id}
            color="primary"
            size="small" 
            clickable
            onDelete={() => handleRemove(genre)}
            
          />
        ))}
        {genres.map((genre) => (
          <Chip
          sx={{
            color: 'rgb(206, 43, 92)',
            bgcolor: '#242525',
            borderColor: 'rgb(206, 43, 92)',
            border: 1 ,
            '&:hover': {
              color: '#fff',
              backgroundColor: 'rgb(206, 43, 92)',
              borderColor: 'rgb(206, 43, 92)',
            },
            
           
          }}
            style={{ margin: 2 }}
            label={genre.name}
            key={genre.id}
            size="small"
            clickable
            onClick={() => handleAdd(genre)}
           
          />
        ))}
      </div>
    )
}

export default Genres
