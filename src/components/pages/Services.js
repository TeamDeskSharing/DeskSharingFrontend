import React from 'react';
/* import Typed from 'react-typed';
 */
import { BrowserRouter as Router, /* Route, Switch, Redirect  */} from 'react-router-dom'
import Cards from '../cards/Cards'

const Services = () => {


  return (

    
    
    <div
    
 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
        backgroundColor: "#101522",

      }}
    >

<Router>
  <Cards/>
</Router>

{/* 
<div style={{
          height: '50%',
          width: '50%',
         // marginTop:'140%',// für mobile
          marginTop:"10%",
          marginLeft: "25%",
          marginRight:"50%",
          backgroundColor: "#101522",
          position: "absolute",
          top: 0,
          left: 0
        }}>

          <Router><Cards></Cards></Router>
        </div>
 */}



    </div>

  );
};




export default Services;