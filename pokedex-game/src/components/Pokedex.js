import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import '../assets/Pokedex.css';

class Pokedex extends Component {
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className='Pokegame-winner'>Winning Team</h1>
        } else {
            title = <h1 className='Pokegame-loser'>Losing Team</h1>
        }
        return (
            <div className='Pokedex'>
                {title}
                <h4>Total Exp: {this.props.exp}</h4>
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map((p) => (
                        <PokemonCard id={p.id} name={p.name} type={p.type} exp={p.exp} />
                    ))}
                </div>


            </div>
        )
    }
}

export default Pokedex;
