import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Map from './Map'
import Trucks from './Trucks'
import InputForm from './InputForm'

const App = () => {

    const [trucks, setTrucks] = useState([])
    const [Changed_trucks, setChangedTrucks] = useState(-1)

    var updateTrucks = () => {
        setChangedTrucks(Changed_trucks + 1)
    }

    useEffect(()=> {
        axios.get('/api/v1/trucks.json')
        .then( resp=> {
            setTrucks(resp.data.data)
            console.log("Busco trucks")
        })
        .catch( resp => console.log(resp) )
    }, [Changed_trucks])


    return (
    <div>
        <Map/>
        <Trucks trucks={trucks}/>
        <InputForm updateTrucks={updateTrucks}/>
    </div>
)}

export default App