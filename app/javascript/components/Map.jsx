import React from 'react'
import style from './Map.module.css';

const Map = () => {
    return(
    <div>
        
        <img className={style.map} src={require('../../../public/mapa_santiago')} alt="Logo" />
    </div>
    )}

export default Map