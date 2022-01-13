import React, { Component } from 'react';
import ApiService from '../../../APIService';
class BookingRequest extends Component {


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

            <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    {
                        
                    }
                    <div className="card-body">

                        <form>
                            <div>
                                <p>Folgende Plätze sind im Büro verfügbar:</p>
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

        );
    }
}

export default BookingRequest;