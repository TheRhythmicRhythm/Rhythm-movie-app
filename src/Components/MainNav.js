import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(206, 43, 92)',
    },
    text: {
      primary: '#fff',
    },
  },

})


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    if (value === 0) {
      navigate("/");

    } else if (value === 1) {
      navigate("/movies");

    } else if (value === 2) {
      navigate("/series");

    }
    else if (value === 3) {
      navigate("/search");
      
    }
  }, [value, navigate]);

  return (
    <Box sx={{ width: '100%',
               position: "fixed",
               bottom: 0,
               zIndex: 200,
               color: 'rgb(206, 43, 92)',
              }}>
                <ThemeProvider theme={darkTheme}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
         <BottomNavigationAction
        label="Trending"  
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        label="Movies"  
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        label="Tv Series"
        icon={<TvIcon />}
      />
       <BottomNavigationAction
        label="Search"
        icon={<SearchIcon />}
      />
     
   
      </BottomNavigation>
      </ThemeProvider>
    </Box>
  );
}
