

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData()
    const {price, service_id, title, _id,} = service;

    
    const handleCheckOut = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const date = form.date.value;
      const email = user?.email;
      const order = {
        customerName : name,
        email,
        service : title,
        date,
        service_id : _id,
        price
      }
      fetch(`http://localhost:5000/checkout`, {
        method : "POST",
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
    return (
        <div className=" bg-base-200 mx-auto pt-8">

   <div>
   <div className="mx-auto mt-9 card w-full md:max-w-screen-lg  shadow-2xl bg-base-100">
      <form onSubmit={handleCheckOut} className="card-body ">
        <div className="grid md:grid-cols-2 space-x-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={title} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email}  className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" defaultValue={`$ ${price}`} className="input input-bordered" />
        </div>
        </div>
        <div className="form-control p-7 w-full">
          <input className="btn btn-primary btn-block" type="submit" value="Submit" />
        </div>
      </form>
    </div>
   </div>
</div>
    );
};

export default Checkout;