import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const {id, name, price, description, img, process } = service;
    const [showMore, setShowMore] = useState(false);
    const navigate = useNavigate();
    const handleDetails = (id) =>{
        navigate(`/service/${id}`)
        
    }


    return (
        <div className='col-sm-1 col-md-3 col-lg-3' >
            <Card className='card-service' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='service-name'>{name}</Card.Title>
                    <Card.Text>
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
                        <div className='d-flex justify-content-around buttons'>
                            <button onClick={() => handleDetails(id)} className='details-btn'>Details</button>
                            <button className='book-now-btn'>Book Now</button>
                        </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;