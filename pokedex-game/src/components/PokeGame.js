import React, { Component } from 'react'

class Pokegame extends Component {
    static defaultProps = {
        pokemon : [
            { id: 4, name: 'Charmander', type: 'fire', exp: 62 },
            { id: 7, name: 'Squirtle', type: 'water', exp: 63 },
            { id: 11, name: 'Metapod', type: 'bug', exp: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', exp: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', exp: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', exp: 95 },
            { id: 94, name: 'Genger', type: 'ghost', exp: 225 },
            { id: 133, name: 'Eevee', type: 'normal', exp: 65 }
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
        return(
            <div>
                <h1>Pokegame</h1>
            </div>
        )
    }
}

export default Pokegame;