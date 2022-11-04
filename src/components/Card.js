import React from 'react';

const Card = ({ country }) => { // OU sans {} > const Card = (props) => { console.log(props.country);
    console.log(country)
    return (
        <li className='card'>
            <img src={country.flags.svg} alt={"drapeau " + country.translations.fra.common} />
            <div className="infos">
                <h2>{country.translations.fra.common}</h2>
            </div>
        </li>
    );
};

export default Card;