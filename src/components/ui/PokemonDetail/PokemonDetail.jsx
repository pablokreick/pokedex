import React from "react";
import { CaretLeftFill } from "react-bootstrap-icons";
import { formatText } from "utils/formatText";
import Button from "../Button/Button";
import PokemonProgress from "../PokemonProgress/PokemonProgress";
import TypeBadge from "../TypeBadge/TypeBadge";
import "./pokemonDetail.css";

const PokemonDetail = ({ pokemon, handleBack }) => {
	return (
		<div className="detail">
			<div className="detail__image">
				<Button shape="circle" type="screen" handleClick={handleBack}>
					<CaretLeftFill color="#ffffff" size={32} />
				</Button>
				<img src={pokemon.image} alt={pokemon.name} />
			</div>
			<div className="detail__information">
				<h1 className="title">
					{pokemon.name} #{pokemon.id}
				</h1>
				<h2>Types</h2>
				<div className="types__container">
					{pokemon?.types?.map((type) => (
						<TypeBadge key={type} type={type} />
					))}
				</div>
				<div className="stats__container">
					<h2>Statistics</h2>
					{pokemon?.statistics?.map((stat) => (
						<div key={stat.name} className="stat">
							<p className="stat-name">
								{formatText(stat.name)} - {stat.base_stat}
							</p>
							<PokemonProgress value={stat.base_stat} />
						</div>
					))}
				</div>
				<div className="button--detail">
					<Button type="screen">Add to Favorites</Button>
				</div>
			</div>
		</div>
	);
};

export default PokemonDetail;
