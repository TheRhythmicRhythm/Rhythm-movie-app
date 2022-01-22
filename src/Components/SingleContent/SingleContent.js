import { img_300, unavailable } from "../../config/config";
import './singleContent.css';
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function truncate(str, n){
  return str?.length > n ? str.substr(0, n-1) + '...':str;
}

const darkTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(206, 43, 92)',
    },
    
  },

})

const singleContent = ({
    id,
    poster,
    title,
    overview,
    date,
    media_type,
    vote_average,
}) => {
    return (

        <div className='media'>
          <ThemeProvider theme={darkTheme}>
            <Badge 
            style={{ display:'flex', zIndex: 10 }}
               badgeContent={vote_average}
             color={vote_average> 6 ? 'primary' : 'secondary'}
              />
              </ThemeProvider>
          <div className="media1">
            
           <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      
      <div className="details">
        <h2 className="title">{title} </h2>
        <p className="type"> {date}</p>
        <p className="subtitle">Summary</p>

        <p className="overview">{truncate(overview, 200)}</p>
      </div>
      
        </div>
        </div>
    )
}

export default singleContent
