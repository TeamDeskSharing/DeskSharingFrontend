import testfloor from '../../../assets/images/floorplans/Grundrisstest.png'


import React, { Component } from 'react';
import ApiService from '../../../APIService';
import ShowBlockedBookings from './ShowBlockedBookings';
class DonkeyKong extends Component {
    

    constructor(props) {
        super(props)
        const current = new Date();
        //const date = `${current.getFullYear}-${current.getMonth()+1}-${current.getDate}`;
        const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
        this.state = {
           
         

            timestart:date+"T00:00"+"",
            timeend:date+"T00:00"+"",
            status:"",
            employee:{id:""},
            workplace:{id:""},
           

        }

        this.changeDeskId = this.changeDeskId.bind(this);
        this.changeStarttime = this.changeStarttime.bind(this);
        this.changeEndtime = this.changeEndtime.bind(this);

        this.submitHandler = this.submitHandler.bind(this);

 
        console.log(date)


    }

    componentDidMount(){

        const tokenLS = localStorage.getItem('token');
        const username =  localStorage.getItem('username');

        return fetch(`http://localhost:8080/api/v1/employee/findEmployeeByUsername/${username}`, {
            'method': 'GET',
            headers: {

                'Content-Type': 'Authorization',
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenLS}`

            },
            // body:JSON.stringify(body)

        }).then(resp => resp.json())
            .then(resp =>  this.setState({employee:{id:resp.id}})   
            )
            .then(resp => console.log(resp));
    
      
            
            

    

    }

   



    
    


    changeStarttime = (e) =>{
        this.setState({timestart:e.target.value})
    }
    changeEndtime = (e) => {



        this.setState({timeend: e.target.value})

    }

    changeDeskId = (e)=>{
        this.setState({workplace:{id:e.target.value}})   
    }

    getWorkingPlace = (e) => {
        this.setState({workplace:{id:'1'}})   
    }

    getWorkingPlace2 = (e) => {
        this.setState({workplace:{id:'2'}})   
    }
    getWorkingPlace3= (e) => {
        this.setState({workplace:{id:'3'}})   
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
        ApiService.sendBookingRequest(this.state)
        
    }

    render() {
        const current = new Date();
    
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

       {/* INPUT FIELDS */}

       <div className="container">
       <div>
                                            <p>Folgende Plätze sind im Büro Donkey Kong geblockt:</p>
                                            <p>  <ShowBlockedBookings></ShowBlockedBookings></p>
                                          
                                        </div>
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                

                                <div className="card-body">
       
                                    <form>

                                        <div className="form-group">
                                            <label> Buchung für Platz: </label>
                                            <input type="text" placeholder="Platz im Plan wählen" name="id" className="form-control"
                                                value={this.state.workplace.id} onChange={this.changeDeskId} readonly="false"/>
    
                                        </div>
                                        <div className="form-group">
                                            <label> Startzeit: </label>
                                            <input placeholder="Startzeit" name="starttime" className="form-control"
                                                value={this.state.timestart} onChange={this.changeStarttime} />
                                        </div>
                                        <div className="form-group">
                                            <label> Endzeit: </label>
                                            <input placeholder="Endzeit" name="endtime" className="form-control"
                                            
                                                value={this.state.timeend} onChange={this.changeEndtime} />
       

                                        </div>
    
                                        <button className="btn btn-success" onClick={this.submitHandler}>Buchungsanfrage senden</button>


                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Abbrechen</button>
    
                                    </form>
    
                                </div>
                            </div>
                        </div>
    
                    </div>
{/*                     <DatePicker>
                            {console.log(this.props)}

                </DatePicker>               
     */}
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