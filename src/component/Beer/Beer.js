import React from 'react';
import './Beer.css'
import Like from './Heart'

const Beer = (props) => {
    return (
        <li className='beerItself'>
            <h2>{props.beer.name}</h2>
            <p>{props.beer.tagline}</p>
            <p>{props.beer.first_brewed}</p>
            <div className='img-like'>
                <img alt='Beer' src={props.beer.image_url} className='beerImage'></img>
                <Like />
            </div>
        </li>
    )
}

export default Beer;