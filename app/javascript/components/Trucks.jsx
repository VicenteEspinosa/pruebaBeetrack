import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Truck from './Truck'

const Trucks = () => {
    const [trucks, setTrucks] = useState([])

    useEffect(()=> {
        axios.get('/api/v1/trucks.json')
        .then( resp=> {
            setTrucks(resp.data.data) 
            console.log(resp.data.data)
        })
        .catch( resp => console.log(resp) )
    }, [trucks.lenght])

    return(
        <div>
            {trucks.map(truck=>(
               <Truck
               key={truck.attributes.license}
               license={truck.attributes.license}
               lat={truck.attributes.lat}
               long={truck.attributes.long}
               />
            ))}

            <div>Esto es trucks</div>
        </div>
    )
}

export default Trucks