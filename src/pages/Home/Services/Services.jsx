import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='text-center font-medium space-y-3 w-2/3 mx-auto'>
            <h3>Services</h3>
            <h2 className='text-5xl font-bold'>Our services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae facilis aliquam veritatis voluptas nam porro perferendis nulla, consequatur sunt fuga totam voluptate repellat expedita nisi a, itaque debitis unde, vero reiciendis? Eaque, molestiae! Deleniti, accusamus.</p>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 justify-center'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
                </div>

        </div>
    );
};

export default Services;