

import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const service = useLoaderData()
    console.log(service)
    return (
        <div className=" bg-base-200 mx-auto pt-8">

   <div>
   <div className="mx-auto mt-9 card w-full md:max-w-screen-lg  shadow-2xl bg-base-100">
      <div className="card-body grid md:grid-cols-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="email" className="input input-bordered" />
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
          <input type="text" name="email" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
        </div>
      </div>
        <div className="form-control p-7">
          <input className="btn btn-primary btn-block" type="submit" value="Submit" />
        </div>
    </div>
   </div>
</div>
    );
};

export default Checkout;