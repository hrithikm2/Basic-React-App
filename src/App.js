import React from 'react';
import ghar from './LCO-logo-white.png';
import "./App.css";



const pichleKuchSaal = [
  2013,2014,2015,2016,2017,2018,2019,2020,2021
]; 


const yearObjects = pichleKuchSaal.map((year, id)=> ({"id": id,"year": year}))




function Header(props){
  
  return (
    <h1>
      Hello {props.name}
    </h1>
  );
}

function Header2(props){
  return (
    <h2>
      Hello {props.hindi} 
    </h2>
  );
}

function Header3(props){
  return(
    <h3>
      Saal hai {props.saal}
      </h3>
  );
}
function Header4(props){
  return(<div>
    <h4 style={{textAlign: "Left"}
  }>
    Iske pehle ke saal the:
  </h4>
  <ul style={{textAlign:"Left"}}>
  {yearObjects.map((year)=><li key={year.id}>
    {year.year}
    </li>)}
  </ul>
  </div>);
}

class App extends React.Component{
  
  render(){
    return(
      <div style={{textAlign:"center"}}>
        <Header name="Hrithik"/>
      <Header2 hindi="Duniya"/>
      <Header3 saal={new Date().getFullYear()}/>
      <Header4/>
      </div>
      
    );
  }
}
export default App;