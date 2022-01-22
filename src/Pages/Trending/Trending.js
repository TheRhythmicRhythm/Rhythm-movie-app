import Row from '../../Components/Row/Row';
import Row2 from '../../Components/Row/Row2';
import Row3 from '../../Components/Row/Row3'
import Banner from '../../Components/Banner/Banner';
// import Header from '../../Components/Header/Header';
// import requests from '../../requests';

import './Trending.css';

function Trending(){

   

    return (
        <div>
     <Banner />
    <div className="main">
    <h1 className='section_heading'>Trending</h1> 
     <Row />
     <h1 className='section_heading'>Top Rated</h1>
     <Row2 />
     <h1 className='section_heading'>New Releases</h1>  
     <Row3 />
    </div>
        </div>
    )
}

export default Trending;
