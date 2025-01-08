import React from "react";
import { Stars } from "./componenets/Stars";

function App() {

  const films = [
    {id:1, rating:1},
    {id:2, rating:0},
    {id:3, rating:6},
    {id:4, rating:'super'},
    {id:5, rating:5},
    {id:6, rating:3}
  ]

  return (
    <Stars films={films}/>
  );
}

export default App;
