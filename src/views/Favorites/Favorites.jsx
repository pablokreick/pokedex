import React from "react";
import { Navigate } from "react-router-dom";
import Main from "components/layout/Main/Main";
import Button from "components/ui/Button/Button";
import Pagination from "components/ui/Pagination/Pagination";
import PokemonThumbnail from "components/ui/PokemonThumbnail/PokemonThumbnail";
import { useFavoriteContext } from "contexts/FavoriteContext";
import { usePowerContext } from "contexts/PowerContext";
import noFavorites from "assets/img/no-favorites.png";
import "./favorites.css";

const Favorites = () => {
	const { favorites, handleFavorites, removeFavorites } = useFavoriteContext();
	const { isPower } = usePowerContext();

	if (!isPower) {
		return (
			<>
				<Main type="dark">
					<Navigate to="/" />
				</Main>
				<Pagination />
			</>
		);
	}

	return (
		<>
			<Main type="block">
				<h1 className="title">My Favorites</h1>
				{favorites.length === 0 ? (
					<div className="no-image-container">
						<img src={noFavorites} alt="empty pokeball" />
					</div>
				) : (
					<>
						<div className="right">
							<Button handleClick={removeFavorites} type="screen">
								delete all
							</Button>
						</div>
						<table className="favorite__table">
							<tbody>
								{favorites.map((pokemon) => (
									<PokemonThumbnail
										key={pokemon.id}
										pokemon={pokemon}
										handleFavorites={handleFavorites}
									/>
								))}
							</tbody>
						</table>
					</>
				)}
			</Main>
			<Pagination />
		</>
	);
};

export default Favorites;
