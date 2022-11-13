import React from "react";
import { calculateProgress } from "utils/calculateProgress";
import "./pokemonProgress.css";

const PokemonProgress = ({ value }) => {
	return (
		<div className="progress-bar">
			<div
				className="progress-bar__quantity"
				style={{ width: `${calculateProgress(value)}%` }}
			></div>
		</div>
	);
};

export default PokemonProgress;
