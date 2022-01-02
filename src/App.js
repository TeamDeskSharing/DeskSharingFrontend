import './App.css';
/* import { FormattedMessage } from 'react-intl'
 *//* import { useContext } from "react";
import { Context } from "./components/Wrapper" */
/* import Navbar from "./components/navbar/Navbar"
 */
import Navbar2 from "./components/navbar/Navbar2"
import Slider from "./components/slideshow/Slider"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Footer from './components/footer/Footer'
//import ParticleTest from './components/testcomponents/ParticleTest'

import Typed from 'react-typed'
import login from './components/pages/Login.js'
import products from './components/pages/Products.js'
import home from './components/pages/Home.js';
import Services from './components/pages/Services.js'
//import styles from './components/css/styles.css'
function App() {
  //const context = useContext(Context)

  return (

    <div className="mainDiv"
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: "#101522"
      }}
      
      >

      <Router>

        <Navbar2/>

          <Switch>

             <Route exact path="/" render={() => (
                            <Redirect to="/home" exact component={login} />
                        )} />

         {/*     <Route exact path='/services'>
                  <Services></Services>
               </Route> */}

  

               <Route exact path='/services' exact component={Services} />

              <Route exact path='/login' exact component={login} />
              <Route exact path='/products' exact component={products} />
              <Route exact path='/home' exact component={home} />

   {/*            <Route exact path='/start' exact component={0} />
              <Route exact path='/about' exact component={0} /> */}
          </Switch>



      </Router>

{/* 
      <h1 style={{color:'red'}}>
        <FormattedMessage
          id="app.content"
        >
        </FormattedMessage>
      </h1>

<p style = {{color:'red'}}>     
 <FormattedMessage
        id="app.channel.plug"
        values={{ channelName: "DESKSHARING" }}
      >

  </FormattedMessage></p>
 */}


   {/*    <Home></Home>
 */}




{/*       <div
        style={{
          height: '50px',
          width: '100%',
          backgroundColor: "#101522",
          position: 'relative'
        }}>



      </div> */}

<div style={
  
  
  





  
  {marginTop:'50vh'     
      
    }}>

    </div>

<h1 style={{ color: 'red' }}>
      <Typed className="typed-text"
          strings={["Are you ready to take a table?", "Choose your office!"
          ]}
          typeSpeed={30}
          backSpeed={8}
        ></Typed>
      </h1>


            <Slider></Slider>


           <Router>

        <Footer />
      </Router>
    </div>
  );
}


export default App;


