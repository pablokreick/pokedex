import React from "react";
import "./typeBadge.css";

const TypeBadge = ({ type }) => {
	return (
		<div className={`type-badge background--${type}`}>
			<img
				className="type-badge__image"
				src={`../../pokemonTypes/${type}.png`}
				alt={`Logo ${type}`}
			/>
			<span>{type}</span>
		</div>
	);
};

export default TypeBadge;
