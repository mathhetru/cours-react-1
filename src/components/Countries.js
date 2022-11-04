import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    // Pour la variable contenant la data de notre bdd, nous pouvons lui donner le nom que l'on veut. Tel que "const [hello, setHello] = useState([]) ... Axios.get(blabla).then((res) => setHello(res.hello));"

    // Le useEffect se joue lorsque le composant est monté 
    useEffect(() => {
        axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => setData(res.data))
    }, [])

    return (
        <div className='countries'>
            <h1>COUNTRIES</h1>
            <ul>
                {data.map((country, index) => (
                // <li key={index}> {country.translations.fra.common} </li>
                    <Card key={index} country={country}/>
                ))}
            </ul>
        </div>
    );
};

export default Countries;