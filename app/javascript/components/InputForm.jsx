import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import style from '../../assets/stylesheets/InputForm.module.css';

const InputForm = (updateTrucks) => {

    const [postData, setPostData] = useState({"license": "", "lat": -1, "long": -1});


    const firstUpdate = useRef(true);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        if (postData["license"] !== "" && 0 <= postData["lat"] && postData["lat"]  <= 100 &&  0 <= postData["long"] && postData["long"] <= 100){
            axios.post('/api/v1/trucks', postData)
            .then(resp => {
                updateTrucks();
                console.log("AAA");
                console.log("AA");
            })
            .catch(resp => {})
        }
        else {
            alert("Debes ingresar una indentificacion de camion y usar coordenadas del 0 al 100")
        }
    }, [postData]);


    const [query_license, updateLicense] = useState("");
    const setQueryLicense = e => {
        updateLicense(e.target.value);
    };

    const [query_lat, updateLat] = useState("");
    const setQueryLat = e => {
        if (!isNaN(e.target.value)) {updateLat(e.target.value)}
    };

    const [query_long, updateLong] = useState("");
    const setQueryLong = e => {
        if (!isNaN(e.target.value)) {updateLong(e.target.value)}
    };

    const postTruck = e => {
        e.preventDefault();
        if (query_long != "" && query_lat != "")
        {
            setPostData(
                {
                    "license": query_license,
                    "lat": query_lat,
                    "long": query_long
                })
            }
        }

    // const postTruck = (e) => {
    //     e.preventDefault()

    //     axios.post('/api/v1/trucks', {truck})
    //     .then(resp => {
    //         debugger
    //     })
    //     .catch(resp => {})
    // }

    return(
        <div className={style.inputContainer}>
            <label className={style.label}>
                <p>Identificador</p>
                <input className={style.input} placeholder="Identificador" name="license" value={query_license} onChange={setQueryLicense}></input>
            </label>

            <label className={style.label}>
                <p>Latitud</p>
                <input className={style.input} placeholder="0.0 a 100.0" name="lat" value={query_lat} onChange={setQueryLat}></input>
            </label>

            <label className={style.label}>
                <p>Longitud</p>
                <input className={style.input} placeholder="0.0 a 100.0" name="long" value={query_long} onChange={setQueryLong}></input>
            </label>

            <label className={style.label}>
                <div className={style.buttonHolder}>
                    <button onClick={postTruck} className={style.button} type="submit">Enviar</button>
                </div>
            </label>
        </div>
    )
}

export default InputForm