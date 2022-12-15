import React from 'react';

const Card = ({ nation }) => { // (OU sans {}, on écrit : const Card = (props) => { console.log(props.nation);) // PROPS Ici on récupère la data "nation" depuis "countries" car Countries est parent de Card
    // console.log(nation)
    return (
        <li className='card'>
            <img src={nation.flags.svg} alt={"drapeau " + nation.translations.fra.common} />
            <div className="infos">
                <h2>{nation.translations.fra.common}</h2>
                <h4>{nation.capital}</h4>
                <p>Pop. {nation.population.toLocaleString()}</p>
            </div>
        </li>
    );
};

export default Card;