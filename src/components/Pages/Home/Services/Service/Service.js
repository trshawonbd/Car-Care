import React, { useState } from 'react';
import {  Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {service} = props
    const {id, name, price, description, img} = service;
/*     const {addToCart} = props;
    console.log(addToCart) */
    const [showMore, setShowMore] = useState(false);
    
    const navigate = useNavigate();
    const handleDetails = (id) =>{
        navigate(`/service/${id}`)   
    }

    return (
        
                        
                <Card className='card-service' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='service-name'>{name}</Card.Title>
                    <Card.Text className='text'>
                        {showMore ? description : `${description.slice(0,300)}`
                        }
                            <button className='btn-read-more' onClick={()=> setShowMore(!showMore)}>
                            {showMore ? 'Read Less' : 'Read More'} 
                            </button>  
                    </Card.Text>
                    <hr />
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    <hr />
                        <div className='d-flex justify-content-around '>
                            <div className='buttons my'>
                            <button onClick={() => handleDetails(id)} className='details-btn'>Details</button>
                            <button   /* onClick={() => addToCart(service)} */  className='book-now-btn ms-3'>Book Now</button>

                            </div>

                        </div>
                </Card.Body>
            </Card>

        

       
    );
};

export default Service;