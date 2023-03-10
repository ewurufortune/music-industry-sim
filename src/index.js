import React from "react";
import { createRoot } from 'react-dom/client';
import Release from "./components/App";
import TopRanker from './components/Chart';
import AllTimer from './components/AllTimeChart'
import Awards from './components/Awards.jsx'
import AllArtistes from './components/AllArtists.jsx'
import NewName from './components/NewArtist.jsx'
import Date from './components/Date'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<div className="parent">
 
 <div className="date">
 <Date />

    </div> 
    <div className="div1">
    <TopRanker />

    </div>
     <div className="div2">
     {/* <AllTimer/> */}

    </div>
     <div className="div2">
     {/* <Awards /> */}

    </div>
     <div className="div4">
     {/* <AllArtistes /> */}

    </div>
     <div className="div5">
     <p><i className="fa-brands fa-twitter fa-lg"></i>@FortuneEwuru</p>

    </div>
    <div className="div6">
    {/* <Release /> */}

    </div>
    {/* <div className="newname">
    <NewName /> 

    </div> */}



</div>);

