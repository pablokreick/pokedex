import React from "react";
import "./pokemonCard.css";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
	return (
		<Link to={`/pokemon/${pokemon.id}`}>
			<div className={`card card--${pokemon.types[0]}`}>
				<img className="card__image" src={pokemon.image} alt={pokemon.name} />
				<h1 className="card__title">{pokemon.name}</h1>
			</div>
		</Link>
	);
};

export default PokemonCard;
