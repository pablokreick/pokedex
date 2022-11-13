import React from "react";
import Button from "../Button/Button";
import "./pokemonThumbnail.css";

const PokemonThumbnail = ({ pokemon, handleFavorites }) => {
	const handleClick = () => {
		handleFavorites(pokemon);
	};

	return (
		<tr>
			<td>#{pokemon.id}</td>
			<td>
				<img
					className="img__thumbnail"
					src={pokemon.image}
					alt={pokemon.name}
				/>
			</td>
			<td>{pokemon.name}</td>
			<td>
				<Button type="screen" handleClick={handleClick}>
					Remove
				</Button>
			</td>
			<td>
				<Button to={`/pokemon/${pokemon.id}`} type="screen">
					details
				</Button>
			</td>
		</tr>
	);
};

export default PokemonThumbnail;
