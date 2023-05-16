import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    // const navigate = useNavigate()
    if(loading){
        return <div className='flex justify-center items-center'>
            <p className='text-3xl font-medium'>Loading</p>
        </div>
    }
    if(user?.email){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivetRoute;