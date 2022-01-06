import testfloor from '../../../assets/images/floorplans/Grundrisstest.png'


import React, { Component } from 'react';
import ApiService from '../../../APIService';
import TimePicker from 'react-time-picker';
import axios from 'axios';



class DonkeyKong extends Component {
    

    constructor(props) {
        super(props)


        this.state = {
            id:"5",
            workplace:"",
            timestart:"",
            timeend:"",
   /*          item: '',
            quantity: '',
            amount: '',
            value:'',
            onChange:'' */

        }

        this.changeDeskId = this.changeDeskId.bind(this);
        this.changeStarttime = this.changeStarttime.bind(this);
        this.changeEndtime = this.changeEndtime.bind(this);

        this.submitHandler = this.submitHandler.bind(this);
    }

    changeDeskId =(e) =>{
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


  /*   changeItem = (e) => {
        this.setState({ item: e.target.value })
    }


    changeQuantity = (e) => {
        this.setState({ quantity: e.target.value })
    }
    changeAmount = (e) => {
        this.setState({ amount: e.target.value })
    }

    saveSales = (e) => {
        e.preventDefault();
        let salesposition = { item: this.state.item, quantity: this.state.quantity, amount: this.state.amount };
        console.log('salesposition => ' + JSON.stringify(salesposition));


        ApiService.insertArticle(salesposition).then(res=>{
            this.props.history.push('/sales');
        })
        window.location.reload(false);


    }

   */


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
        
    }

    render() {

    
        return (
            
            <div>
            <h1>Hi Donkey</h1>
           
  
       
    
    
           <div style={{textAlign:'center',
                       display: 'flex',
                       justifyContent: 'center',
                       alignItems: 'center',
        }}>
    
           <img src={testfloor} alt="this is a floorplan" width="750" height="560" align='middle' usemap="#floormap"/>
            <map name="floormap">
    
    
            <area shape="circle" coords="90,460,30" alt="Platz1"   onClick={this.getWorkingPlace}></area>
            <area shape="circle" coords="230,460,30" alt="Platz2"  onClick={this.getWorkingPlace2}></area>
            <area shape="circle" coords="410,460,30" alt="Platz3"  onClick={this.getWorkingPlace3}></area>
    
    
            </map>
       {/*      <button onClick={sendBookingRequest}>getStudentTest</button> */}

       {/* INPUT FIELDS */}

       <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                {
                                    
                                }
                                <div className="card-body">
    
                                    <form>
                                        <div>
                                            <p>Folgende Plätze sind im Büro Donkey Kong verfügbar:</p>
                                        </div>
                                        <div className="form-group">
                                            <label> Buchung für Platz: </label>
                                            <input type="text" placeholder="Platznummer" name="id" className="form-control"
                                                value={this.state.workplace} onChange={this.changeDeskId} />
    
                                        </div>
                                        <div className="form-group">
                                            <label> Startzeit: </label>
                                            <input placeholder="Startzeit" name="starttime" className="form-control"
                                                value={this.state.timestart} onChange={this.changeStarttime} />
                                                {/* <TimePicker onChange={this.state.onChange} value={this.state.onChange}></TimePicker> */}
                                        </div>
                                        <div className="form-group">
                                            <label> Endzeit: </label>
                                            <input placeholder="Endzeit" name="endtime" className="form-control"
                                                value={this.state.timeend} onChange={this.changeEndtime} />
                                                                                             {/*    <TimePicker onChange={this.state.onChange} value={this.state.onChange}></TimePicker> */}

                                        </div>
    
                                        <button className="btn btn-success" onClick={this.submitHandler}>Buchungsanfrage senden</button>
    
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Abbrechen</button>
    
                                    </form>
    
                                </div>
                            </div>
                        </div>
    
                    </div>
    
           </div>
           <br></br>
       
    
        </div>
        );
    }
}

export default DonkeyKong;

/* import React from 'react';



function DonkeyKong(props) {
    




    function sendBookingRequest() //--> parameter 

    {

        return fetch(`http://127.0.0.1:8080/api/v1/EMPLOYEE`,{
            'method':'POST',
            headers:{

                'Content-Type':'Authorization',
                'Accept': 'application/json',
                'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbm5hc21pdGgiLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9TVFVERU5UIn1dLCJpYXQiOjE2NDA2MTkxNjgsImV4cCI6MTY0MTQyMzYwMH0.HUxAI7TfHzsLT058lQi-icEhN07IPhJac86sQ5QK6y_0xqeCuh2R_1fho9Un7_DASABZ3jX2uwAgVgr-kVaxkQ'

            },
           // body:JSON.stringify(body)

        }).then (resp => resp.json())
        .then(resp => console.log(resp));


    }



    return (
        <div>
        <h1>Hi Donkey</h1>
       

   


       <div style={{textAlign:'center'}}>

       <img src={testfloor} alt="this is a floorplan" width="750" height="560" align='middle' usemap="#floormap"/>
        <map name="floormap">


        <area shape="circle" coords="90,460,30" alt="Platz1" href="DK1" onClick={sendBookingRequest}></area>
        <area shape="circle" coords="230,460,30" alt="Platz2" href="DK2"></area>
        <area shape="circle" coords="410,460,30" alt="Platz2" href="DK3"></area>


        </map>
        <button onClick={sendBookingRequest}>getStudentTest</button>

       </div>
       <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                
                            }
                            <div className="card-body">

                                <form>
                                    <div className="form-group">
                                        <label> Item: </label>
                                        <input type="text" placeholder="Item" name="item" className="form-control"
                                            value={this.state.item} onChange={this.changeItem} />

                                    </div>
                                    <div className="form-group">
                                        <label> Quantity: </label>
                                        <input placeholder="Quantity" name="quantity" className="form-control"
                                            value={this.state.quantity} onChange={this.changeQuantity} />
                                    </div>
                                    <div className="form-group">
                                        <label> Amount: </label>
                                        <input placeholder="Amount" name="amount" className="form-control"
                                            value={this.state.amount} onChange={this.changeAmount} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveSales}>Save</button>

                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                                </form>

                            </div>
                        </div>
                    </div>

                </div>

    </div>
    );
}

export default DonkeyKong;


 */