import React from 'react';

const BookingRow = ({booking, handleDelete, handleBookingConfirm}) => {
    const  {_id, customerName, email, service, price, date, img, status} = booking
    
    return (
        <tr>
        <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className=" rounded w-12 h-12">
                {
                    img && <img src={img} alt="Avatar Tailwind CSS Component" />
                }
              </div>
            </div>
          </div>
        </td>
        <td>
         {customerName}
        </td>
        <td>{email}</td>
        <td>{price}</td>
        <th>
          { status === "confirm" ? <span className='text-black bg-yellow-200 p-2 rounded-md font-medium'>confirmed</span> :
            <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">confirm</button>
          }
        </th>
      </tr>
    );
};

export default BookingRow;