import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Map from './Map'
import Trucks from './Trucks'
import InputForm from './InputForm'
import style from '../../assets/stylesheets/InputForm.module.css';


const App = () => {

    const [trucks, setTrucks] = useState([])

    useEffect(()=> {
        axios.get('/api/v1/trucks.json')
        .then( resp=> {
            setTrucks(resp.data.data)
        })
        .catch( resp => console.log(resp) )
    }, [trucks.length])


    return (
    <div>
        <Map/>
        <Trucks trucks={trucks}/>
        <InputForm/>
    </div>
)}

export default App