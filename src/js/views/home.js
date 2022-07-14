import React from "react";

import "../../styles/home.css";
import CardPersonajes from "../cards/CardPersonajes.jsx";
export const Home = () => {
    const characters=[{
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "created": "2022-07-12T17:37:15.048Z",
        "edited": "2022-07-12T17:37:15.048Z",
        "name": "Luke Skywalker",
        "homeworld": "https://www.swapi.tech/api/planets/1",
        "url": "https://www.swapi.tech/api/people/1"
    }]
    return(
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		{characters.map((item)=><CardPersonajes name={item.name}/>)}
	</div>)
};
