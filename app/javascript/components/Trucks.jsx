import React from 'react'
import Truck from './Truck'

const Trucks = ({trucks}) => {

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
        </div>
    )
}

export default Trucks