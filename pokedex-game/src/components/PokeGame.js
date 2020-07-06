import React, { Component } from 'react';
import Pokedex from './Pokedex'

class Pokegame extends Component {
    static defaultProps = {
        pokemon : [
            { id: 6, name: 'Charizard', type: 'fire', exp: 162 },
            { id: 9, name: 'Blastoise', type: 'water', exp: 163 },
            { id: 3, name: 'Venasaur', type: 'grass', exp: 162 },
            { id: 149, name: 'Dragonite', type: 'dragon', exp: 170 },
            { id: 25, name: 'Pikachu', type: 'electric', exp: 180 },
            { id: 150, name: 'Mewtwo', type: 'normal', exp: 179 },
            { id: 94, name: 'Genger', type: 'ghost', exp: 165 },
            { id: 143, name: 'Snorlax', type: 'normal', exp: 165 }
        ]
    }
    render() {
        let handOne = [];
        let handTwo = [...this.props.pokemon ];
        while(handOne.length < handTwo.length){
            let randIdx = Math.floor(Math.random() * handTwo.length)
            let randPokemon = handTwo.splice(randIdx, 1)[0]
            handOne.push(randPokemon)
        }
        let exp1 = handOne.reduce((exp, pokemon) => exp + pokemon.exp, 0)
        let exp2 = handTwo.reduce((exp, pokemon) => exp + pokemon.exp, 0)
        return(
            <div>
                <Pokedex pokemon={handOne} exp={exp1} isWinner={exp1 > exp2}/>
                <Pokedex pokemon={handTwo} exp={exp2} isWinner={exp1 < exp2}/>
            </div>
        )
    }
}

export default Pokegame;