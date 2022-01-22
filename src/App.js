 import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import SimpleBottomNavigation from './Components/MainNav';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <BrowserRouter>
     
    <div className="App">
      <Nav />
       
        <Routes>
        <Route path='/' element={<Trending/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/series' element={<Series/>} />
      
        </Routes>
       
    </div>
     
    <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
