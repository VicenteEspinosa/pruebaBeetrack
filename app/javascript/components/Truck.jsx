import React, { useState, useEffect } from 'react'
import style from './Truck.module.css';

const Truck = ({license, lat, long}) => {
    let cssProperties = {
        '--lat': lat,
        '--long': long
    }
    return(
        
        <div className={style.container} style={cssProperties}>
            <div className={style.truck}>
                <p>License: {license}</p>
                <p>Lat: {lat}</p>
                <p>Long: {long}</p>
            </div>
        </div>
    )
}

export default Truck