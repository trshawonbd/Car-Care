import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceContext } from '../../../../../App';
import './ServiceDetails.css'


const ServiceDetails = () => {
    const para = useParams();
    const { id } = para;
    console.log(id)
    const [services, setServices] = useContext(ServiceContext);
    console.log(services)

    const service = services.find((service) => service.id == id);
    const { name, price, description, process, img } = service;



    return (
        <div className="card mb-3 container" >
  <div className="row g-0">
    <div className="col-md-4 d-flex align-items-center">
      <img src={img} className="img-fluid" alt="..."/>
      
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title service-name">{name}</h5>
        <hr />
        <h5 className="card-text">Price: {price}</h5>
        <hr />
        <p className="card-text "><span className='description'>Description:</span>  <hr /> {description}</p>
        <hr />
        <p className="card-text"><span className='procedure'>Procedures:</span> <hr /> {process}</p>
        <hr />
      </div>
      <button className='book-btn'>Book Now</button>

    </div>
  </div>
</div>
    );
};

export default ServiceDetails;