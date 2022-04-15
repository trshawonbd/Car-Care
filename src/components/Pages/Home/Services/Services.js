import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ServiceContext } from '../../../../App';
import useServices from '../../../../hooks/useServices';
import Service from './Service/Service';
import './Services.css'

const Services = (props) => {
    const {services, setServices} = useServices({});


/*     console.log(props)
    const {services, setServices} = useServices({});
    const {addToCart} = props;
    console.log(addToCart) */
 /*    const [cart, setCart] = ([]) */

/*     const addToCart = (service) =>{
        const newCart = [...cart, service];
        setCart(newCart);
        
    } */
    return (
        <div className='container'>
            <h2 className='my-4'>Our Services</h2>
            <div className='row g-4 justify-content-center'>
            

                {
                    services.map((service) => <Service
                        key={service.id}
                        service={service}                       
                    ></Service>
                    )
                }
            </div>
        </div>
    
    );
};

export default Services;