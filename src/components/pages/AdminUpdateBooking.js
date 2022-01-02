import React, { Component } from 'react';

export class AdminUpdateBooking extends Component {
    constructor(props) {
        super(props)


        this.state = {
            id:this.props.match.params.id, /* wichtig um zu mounten */
            vorname: '',
            quantity: '',
            amount: ''
        }
        this.changeItem = this.changeItem.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.changeAmount = this.changeAmount.bind(this);

        this.updateSales = this.updateSales.bind(this);
    }






/*     updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    } */
    
    changeItem = (e) => {
        this.setState({ item: e.target.value })
    }


    changeQuantity = (e) => {
        this.setState({ quantity: e.target.value })
    }
    changeAmount = (e) => {
        this.setState({ amount: e.target.value })
    }

    componentDidMount(){
        SalesService.getSalesById(this.state.id).then((res)=>{
            let sales = res.data;
            this.setState({item: sales.item, quantity: sales.quantity, amount: sales.amount})
        })

    }

    updateSales = (e) => {
        e.preventDefault();
        let salesposition = { item: this.state.item, quantity: this.state.quantity, amount: this.state.amount };
        console.log('salesposition => ' + JSON.stringify(salesposition));
        console.log('id => ' + JSON.stringify(this.state.id));


        SalesService.updateSales(salesposition, this.state.id).then( res => {
            this.props.history.push('/sales');
        });
        window.location.reload(false);

    }

    cancel() {
        this.props.history.push('/sales');
    }


    render() {
        return (
            <div>

            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            /* this.getTitle() */
                        }
                        <div className="card-body">

                            <form>
                                
                                <div className="form-group">
                                    <h1>Update Sales</h1>
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

                                <button className="btn btn-success" onClick={this.updateSales}>Update</button>

                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
        )
    }
}

export default AdminUpdateBooking