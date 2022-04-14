import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useServices from '../../../../hooks/useServices';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useServices({});

    return (
        <div>
            <h2>Services:{services.length}</h2>
            <div className='row g-4'>
                
                    {
                        services.map((service) => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
    );
};

export default Services;