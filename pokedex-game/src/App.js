import React from 'react';
import PokemonCard from './components/PokemonCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <PokemonCard
        id={4}
        name='Charmander'
        type='fire'
        exp={62}
      />
    </div>
  );
}

export default App;
