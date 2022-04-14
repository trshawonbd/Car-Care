import React, { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '../App';

const useServices = () => {
    const [services, setServices] = useContext(ServiceContext);
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }
        
        ,[setServices])

        return [services, setServices];
};

export default useServices;