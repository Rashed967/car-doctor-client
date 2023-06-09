import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/checkout?email=${user.email}`
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers : {
                authorization : `bearer ${localStorage.getItem('car-access-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(!data.error){
                setBookings(data)
            }
           else{
            navigate('/')
           }
        })
    }, [url, navigate]);

    const handleDelete = id => {
        const proced = confirm('Are you sure?')
    if(proced){
        fetch(`http://localhost:5000/checkout/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert('deleted successfully')
                const remaning = bookings.filter(booking => booking._id !== id)
                setBookings(remaning)
            }

        })
    }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/checkout/${id}`, {
            method : "PATCH",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({status : 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                // update state 
                const remaning = bookings.filter(booking => booking._id !== id)
                const updated = bookings.find(booking => booking._id === id)
                updated.status = "confirm"
                const newBookings = [updated, ...remaning]
                setBookings(newBookings)
            }
        })
        
    }
    
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking => <BookingRow
        key={booking._id}
        booking={booking}
        handleDelete={handleDelete}
        handleBookingConfirm={handleBookingConfirm}
        ></BookingRow>)
      }



    </tbody>

    
  </table>
</div>
            
        </div>
    );
};

export default Bookings;