import testfloor from '../../../assets/images/floorplans/floorplan3.jpeg'


import React, { Component } from 'react';
import ApiService from '../../../APIService';
import ShowBlockedBookings from './ShowBlockedBookings';
class Bowser extends Component {


    constructor(props) {
        super(props)
        const current = new Date();
        const date = `${current.getFullYear()}-0${current.getMonth() + 1}-${current.getDate()}`;

        const name = `${localStorage.getItem('username')}`

        this.state = {


            username: name,
            timestart: date + "T00:00" + "",
            timeend: date + "T00:00" + "",
            status: "schwebend",
            employee: { id: "" },
            workplace: { id: "" },

            officeid:3,

            blockedbookings:[]


        }



        this.changeDeskId = this.changeDeskId.bind(this);
        this.changeStarttime = this.changeStarttime.bind(this);
        this.changeEndtime = this.changeEndtime.bind(this);

        this.submitHandler = this.submitHandler.bind(this);





    }

    componentDidMount() {


        ApiService.findEmployeeByUsername().then(resp => resp.json())
            .then(resp => this.setState({ employee: { id: resp.id } })
            )
           // .then(resp => console.log(resp));


        


    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        ApiService.sendBookingRequest(this.state)

    }



    changeStarttime = (e) => {
        this.setState({ timestart: e.target.value })
    }
    changeEndtime = (e) => {
        this.setState({ timeend: e.target.value })
    }

    changeDeskId = (e) => {
        this.setState({ workplace: { id: e.target.value } })
    }

    getWorkingPlace = (e) => {
        this.setState({ workplace: { id: '1' } })
    }

    getWorkingPlace2 = (e) => {
        this.setState({ workplace: { id: '2' } })
    }
    getWorkingPlace3 = (e) => {
        this.setState({ workplace: { id: '3' } })
    }

    getWorkingPlace4 = (e) => {
        this.setState({ workplace: { id: '4' } })
    }

    getWorkingPlace5 = (e) => {
        this.setState({ workplace: { id: '5' } })
    }
    getWorkingPlace6 = (e) => {
        this.setState({ workplace: { id: '6' } })
    }
    getWorkingPlace7 = (e) => {
        this.setState({ workplace: { id: '7' } })
    }





    cancel() {
        this.props.history.push('/services');
    }

    changeHandler = e => {
        this.setState({ [e.target.value]: e.target.value })
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
                <h1 style={{color:"white"}} >Willkommen im Büro Bowser</h1>





                <div style={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection:'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>



                    <img src={testfloor} alt="this is a floorplan" width="750" height="560" align='middle' usemap="#floormap" />
                    <map name="floormap">


                        <area shape="circle" coords="90,460,30" alt="Platz1" onClick={this.getWorkingPlace}></area>
                        <area shape="circle" coords="230,460,30" alt="Platz2" onClick={this.getWorkingPlace2}></area>
                        <area shape="circle" coords="410,460,30" alt="Platz3" onClick={this.getWorkingPlace3}></area>
                        <area shape="circle" coords="90,460,30" alt="Platz1" onClick={this.getWorkingPlace4}></area>
                        <area shape="circle" coords="230,460,30" alt="Platz2" onClick={this.getWorkingPlace5}></area>
                        <area shape="circle" coords="410,460,30" alt="Platz3" onClick={this.getWorkingPlace6}></area>
                        <area shape="circle" coords="90,460,30" alt="Platz1" onClick={this.getWorkingPlace7}></area>
           


                    </map>

                    {/* INPUT FIELDS */}

                    <div className="container">
                      
                    <div style={{ width: '1400px' }} className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">


                                <div className="card-body">

                                <div style={{ width: '500px' }}>
                                        <p>Folgende Plätze sind im Büro Bowser geblockt:</p>
                                        <p>  <ShowBlockedBookings value={3}></ShowBlockedBookings></p>

                                    </div>

                                    <form>

                                        <div className="form-group">
                                            <label> Buchung für Platz: </label>
                                            <input type="text" placeholder="Platz im Plan wählen" name="id" className="form-control"
                                                value={this.state.workplace.id} onChange={this.changeDeskId} readonly="false" />

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

                </div>
                <br></br>




            </div>
        );
    }
}

export default Bowser;
