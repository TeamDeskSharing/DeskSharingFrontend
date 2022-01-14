
import Navbar2 from "./components/navbar/Navbar2"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Slider from "./components/slideshow/Slider"

import Login from './components/pages/Login.js'
import products from './components/pages/Products.js'
import home from './components/pages/Home.js';
import Services from './components/pages/Services.js'
import EmployeeList from './components/pages/EmployeeList';
import AdminBooking from './components/pages/AdminBooking';
function App() {

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

        <Navbar2 />

        <Switch>

          <Route exact path="/" render={() => (
            <Redirect to="/home" exact component={Login} />
          )} />

          <Route exact path='/services' exact component={Services} />

          <Route exact path='/employeelist' exact component={EmployeeList}></Route>

          <Route exact path='/login' exact component={Login} />
          <Route exact path='/products' exact component={products} />
          <Route exact path='/home' exact component={home} />
          <Route exact path='/adminbooking' exact component={AdminBooking}></Route>

        </Switch>

      </Router>


      <div style={
        { marginBottom: '150vh' }}>
      </div>


      <Slider></Slider>

      <Router>

        <Footer />
      </Router>
    </div>
  );
}


export default App;


