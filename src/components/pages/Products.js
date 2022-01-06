
import Typed from 'react-typed';


import React, { Component } from 'react';
import ApiService from '../../APIService';
/* Der Administrator kann nach erfolgreicher Buchungsanfrage jede
einzelne Buchungsanfrage bestätigen oder ablehnen. In beiden Fällen
wird an die für den Anfrager hinterlegte Mail-Adresse eine Bestätigungsoder Absage-Mail verschickt. */


/* 1. get all bookings 
    2. put/post booking?
    3. send email
    
    */
/* const Products = () => {


  return (

    
    
    <div
    
 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh'
      }}
    >


    
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Typed 
        className="typed-text"
        strings={[" Der Administrator kann nach erfolgreicher Buchungsanfrage jede einzelne Buchungsanfrage bestätigen oder ablehnen.",
       
      "In beiden Fällen wird an die für den Anfrager hinterlegte Mail-Adresse eine Bestätigungsoder Absage-Mail verschickt ", 
      "Lets go",
      ]}
        typeSpeed={30}
        backSpeed={8}
        ></Typed>

    </div>

  );
};




export default Products; */


class Products extends Component {



  componentDidMount() {

    const url = "http://127.0.0.1:8080/api/v1/booking/getAllBookings";
    const tokenLS = localStorage.getItem('token');


    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenLS}`

      }

    })
      .then(res => res.json())
      .then(res => this.setState({ bookings: res }))
      .catch(err => console.log(err.message));





  }

  constructor(props) {
    super(props)


    this.state = {
      /*           id:"",
                workplace:"",
                timestart:"",
                timeend:"", */

      bookings: []

    }

    /*       this.changeDeskId = this.changeDeskId.bind(this);
          this.changeStarttime = this.changeStarttime.bind(this);
          this.changeEndtime = this.changeEndtime.bind(this);
    
          this.submitHandler = this.submitHandler.bind(this); */
  }

  /*   changeDeskId =(e) =>{
        this.setState({workplace:e.target.value})
    }
    changeStarttime = (e) =>{
        this.setState({timestart:e.target.value})
    }
    changeEndtime = (e) => {
        this.setState({timeend:e.target.value})
    }
  
  
    getWorkingPlace = (e) => {
        this.setState({workplace:'DK1'})
    }
    getWorkingPlace2 = (e) => {
        this.setState({workplace:'DK2'})
    }
    getWorkingPlace3 = (e) => {
        this.setState({workplace:'DK3'})
    }
  
  
  
    cancel() {
        this.props.history.push('/services');
    }
  
    changeHandler = e => {
        this.setState({[e.target.value]: e.target.value})
    }
  
  
  
  
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
       //let token = localStorage.getItem('token');
        ApiService.sendBookingRequest(this.state)
        
    } */

  acceptBooking = (e) => {
    this.setState({ id: 5 })
    this.setState({ status: 'booked' })


    console.log(this.state.bookings[1])
    //get booking by id
    ApiService.sendBookingRequest(this.state.bookings[4])
  }

  render() {


    return (

      <div>
        <h1>Hi Admin</h1>


        {this.state.bookings.map(booking => <div>{booking.id}.{booking.workplace}.{booking.status}</div>)}
        <button className="btn btn-success" onClick={this.acceptBooking}>Bestätigen</button>






      </div>
    );
  }
}

export default Products;