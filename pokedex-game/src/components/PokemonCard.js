import React from 'react';
import '../assets/PokemonCard.css'

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class PokemonCard extends React.Component {
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`;
        return (
            <div className='PokemonCard'>
                <h1>I choose you!!</h1>
                <p>Name: {this.props.name} </p>
                <img src={imgSrc} alt={this.props.name} />
                <div>Type: {this.props.type}</div>
                <div>Exp: {this.props.exp}</div>
            </div>
        )
    }
}

export default PokemonCard;