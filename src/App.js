import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Romance,Action,Orginals,Comedy,Horror,Trending} from "./urls";
import Banner from "./Components/Banner/Banner";
import './App.css'
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <RowPost url={Orginals} title='Neflix Orginals'/>
        <RowPost url={Trending} title='Trending Movies'isSmall/>
        <RowPost url={Horror} title='Horror Movies' isSmall/>
        <RowPost url={Romance} title='Romance Movies' isSmall/>  
        <RowPost url={Action} title='Action Movies' isSmall/>
        <RowPost url={Comedy} title='Comedy Movies' isSmall/>
    </div>
    
  );
}

export default App;
