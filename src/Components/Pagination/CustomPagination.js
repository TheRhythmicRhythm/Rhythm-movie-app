import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
    // Scroll to top when page changes
    const handlePageChange = (page) => {
      setPage(page);
      window.scroll(0, 0);
    };

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
    return (
        <div
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <ThemeProvider theme={darkTheme}>
            <Pagination
           
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="primary"
          hideNextButton
          hidePrevButton
        /> 
        </ThemeProvider>
        </div>
    )
}

export default CustomPagination
