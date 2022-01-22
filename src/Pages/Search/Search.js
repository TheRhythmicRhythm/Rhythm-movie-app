import TextField from '@mui/material/TextField';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import SingleContent from '../../Components/SingleContent/SingleContent';
import CustomPagination from '../../Components/Pagination/CustomPagination';

const Search = () => {
    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [content, setContent] = useState();
    const [numOfPages, setNumOfPages] = useState();
    

    const darkTheme = createTheme({
      palette: {
        primary: {
          main: 'rgb(206, 43, 92)',
        },
        text: {
          primary: '#fff',
          secondary: '#fff',
        },
      },
    })

    const fetchSearch = async () => {
        try {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=c37e36d31e617b41057d65444227343d&language=en-US&query=${searchText}&page=${page}&include_adult=false`
          );
          setContent(data.results);
          setNumOfPages(data.total_pages);
           console.log(data);
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
      }, [type, page]);
    return (
        
        <div 
        className="search"
        style={{
          margin: '10px'
        }}>
            <ThemeProvider theme={darkTheme}>
                <div style={{ display: 'flex', margin: '25px 15px' }}>
            <TextField 
               sx={{
               
                display: 'flex',
                
              }}  
            style={{ flex:1 }}
            id="filled-basic"
             label="Search" 
             variant="filled" 
             onChange={(e) => setSearchText(e.target.value)}/>
             <Button
              onClick={fetchSearch}
              variant="outlined"
              style={{ marginLeft:'20px' }}>
                  <SearchIcon />
            </Button>
             </div>
             
             <Tabs 
             value={type} 
             style={{ width: '100%', flex:1  }}
             indicatorColor="primary" 
             textColor='primary' 
             onChange={(event, newValue) => {
                 setType(newValue);
                 setPage(1)
             }}
             >

          <Tab label="Search Movies" style={{ width: '50%' }} />
          <Tab label="Search Series" style={{ width: '50%' }} />
          
        </Tabs>
            </ThemeProvider>
            <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              overview={c.overview}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
        </div>
        
    )
}

export default Search
