import React, { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '../App';

const useServices = () => {
    const {services, setServices} = useContext(ServiceContext);
    useEffect(() =>{
        fetch(process.env.PUBLIC_URL + "/services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    }
        
        ,[setServices])

        return {services, setServices};
};

export default useServices;