import React from "react";
import { Star } from "./Star";

export function Stars ({films}) {

    const filmsList = films.filter(film => {
        if(!Number(film.rating) || film.rating < 1 || film.rating > 5) {
            return false;
        }
        return true;
    })

    return (
        <ul className="card-body-stars">
            {filmsList.map(film => {
                return(
                    <li className="box" key={film.id}>
                        <div>название фильма: {film.id}</div>
                        <div className="star"><Star count={film.rating}/></div>
                    </li> 
                )
            })}
        </ul>
    )
}