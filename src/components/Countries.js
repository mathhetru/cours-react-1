import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    // data = reponse de l'api, setData permet de "modifier" data
    // useState : l'état de l'api
    // Pour la variable contenant la data de notre bdd, nous pouvons lui donner le nom que l'on veut. Tel que :
    const [hello, setHello] = useState("Hello les potos"); // exemple
    const [rangeValue, setRangeValue] = useState(36);
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [selectedRadio, setSelectedRadio] = useState("");

    // Le useEffect se joue lorsque le composant est monté car sinon le axios.get sur l'API se rejoue à l'infini
    useEffect(() => {
        axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => setData(res.data))
    }, [])

    return (
        <div className='countries'>
            <ul className="radio-container">
                <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.valueAsNumber)}/>
                {radios.map((continent) => 
                <li>
                    <input type="radio" id={continent} name="continentRadio" checked={continent === selectedRadio} onChange={(e) => setSelectedRadio(e.target.id)}/>
                    <label htmlFor={continent}>{continent}</label>
                </li>
                )}
            </ul>
            {selectedRadio && (
                <button onClick={() => setSelectedRadio("")}>Annuler la recherche</button>
            )}
            {/* <h1>COUNTRIES</h1>
            <div>{hello}</div> */}
            <ul>
                {
                data
                    .filter((country) => country.continents[0].includes(selectedRadio))
                    .sort((a, b) => b.population - a.population)
                    .slice(0, rangeValue)
                    .map((country, index) => (
                    // la méthode "map" crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant. ICI nous créons une card pour chaque pays en lui ajoutant un index
                    // <li key={index}> {country.translations.fra.common} </li>
                    // lors d'une data avec beaucoup d'informations, la "key" est obligatoire. Ici nous avons mis un index (donc 0, 1, 2, 3 etc)
                    <Card key={index} nation={country}/>))
                }
            </ul>
        </div>
    );
};

export default Countries;