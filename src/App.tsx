import React from 'react';
import { Stars } from './components/Stars';

function App() {
  const films = [
    { id: 1, rating: 1 },
    { id: 2, rating: 5 },
    { id: 3, rating: 3 },
    { id: 4, rating: 4 },
    { id: 5, rating: 2 },
  ];

  return (
    <div>
      {films.map((film) => (
        <div key={film.id}>
          <h3>Film {film.id}</h3>
          <Stars count={film.rating} />
        </div>
      ))}
    </div>
  );
}

export default App;
