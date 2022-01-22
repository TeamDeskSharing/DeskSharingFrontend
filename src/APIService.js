
import axios from 'axios'
export default class ApiService {




    static loginUser(body) {
        return axios.post('http://127.0.0.1:8080/login', body)
            .then(resp => {
                // console.log(resp)
                localStorage.setItem("token", resp.data)
                /*              resp.json().then((result)=>{
                                 console.warn("result",result);
                                 localStorage.setItem('login', JSON.stringify({
                                     login:true,
                                     token:result.token
                                 })
                                 )
                             }) */
            })
            .then(localStorage.setItem("username", body.username))
            .catch(error => {
                console.log(error)
            })
    }






    static RegisterUser(body) {

        return fetch('http://127.0.0.1:8000/api/users/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body)

        }).then(resp => resp.json())

    }

    /* ADMIN BOOKING API CALLS */

    static declineBooking(id) {
        let tokenLS = localStorage.getItem('token')

        return fetch(`http://localhost:8080/api/v1/booking/e1/updateAbgelehnt/${id}`, {
            'method': 'PUT',
            headers: {

                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenLS}`
            },

        }).then(resp => console.log(resp.json()))



    }


    static leaveWorkspace(id) {
        let tokenLS = localStorage.getItem('token')

        return fetch(`http://localhost:8080/api/v1/booking/leaveWorkspace/${id}`, {
            'method': 'PUT',
            headers: {

                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenLS}`
            },

        }).then(resp => console.log(resp.json()))



    }



    static acceptBooking(id) {


        let tokenLS = localStorage.getItem('token')

        return fetch(`http://localhost:8080/api/v1/booking/updateAkzeptiert/${id}`, {
            'method': 'PUT',
            headers: {

                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenLS}`
            },

        }).then(resp => console.log(resp.json()))


    }

    static getAllRequest() {

        const url = "http://127.0.0.1:8080/api/v1/booking/getAllBookings";
        const tokenLS = localStorage.getItem('token')


        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenLS}`

            }

        })
            .then(res => res.json())

            .catch(err => console.log(err.message));
    }

    /* EMPLOYEE API CALLS */

    static getAllEmployees() {
        const urlphone = "http://127.0.0.1:8080/api/v1/booking/getCurrentPhoneNumberofEmployees"
        /* const token = localStorage.getItem('token') */
       // const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbXBsb3llZSIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJzdHVkZW50OndyaXRlIn0seyJhdXRob3JpdHkiOiJzdHVkZW50OnJlYWQifSx7ImF1dGhvcml0eSI6ImVtcGxveWVlOndyaXRlIn0seyJhdXRob3JpdHkiOiJjb3Vyc2U6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiZW1wbG95ZWU6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiY291cnNlOndyaXRlIn0seyJhdXRob3JpdHkiOiJST0xFX0VNUExPWUVFIn1dLCJpYXQiOjE2NDI4MDk0MDAsImV4cCI6MTY0MzY3MDAwMH0.XU2Rlq6EbdsccVm17wWRuDNZEafNC3n6g8f2SNzhPMzlgruIEL9ZZFIePtBNQvJRtvWaNbODe4N8VI1jjqBVvQ'
        return fetch(urlphone, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
               // 'Authorization': `Bearer ${token}`

            }

        })
            .then(res => res.json())
            .catch(err => console.log(err.message));
    }

    static getEmployeeByUsername(name){
        const url = `http://127.0.0.1:8080/api/v1/employee/findEmployeeByUsername/${name}`;
        const tokenLS = localStorage.getItem('token')


        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenLS}`

            }

        })
    }





    /* BOOKING REQUEST API CALLS */
    static sendBookingRequest(body) {
        let tokenLS = localStorage.getItem('token')


        return fetch(`http://127.0.0.1:8080/api/v1/booking/e1/saveBookingWithIDs/`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenLS}`


            },
            body: JSON.stringify(body)

        }).then(resp => resp.json()
            .then(resp => console.log(resp)))



    }

    static findEmployeeByUsername() {
        const tokenLS = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        console.log(username);

        return fetch(`http://localhost:8080/api/v1/employee/e1/findEmployeeByUsername/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenLS}`

            }

        })
    }



    static getBlockedBookingsByOffice(id) {
        const url = `http://localhost:8080/api/v1/booking/getCurrentTakenWorksplacesByOffice/${id}`;
        const token = localStorage.getItem('token')


        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }

        })

    }

    /* MY BOOKINGS */
    static getBookingsByUsername() {

        const token = localStorage.getItem('token')
        const username = localStorage.getItem("username")
        
        console.log(token)
        console.log(username)

        const url = `http://127.0.0.1:8080/api/v1/booking/e1/findBookingsByUsername/${username}`
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }

        })
    }



}