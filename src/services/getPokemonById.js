import { BASE_URL } from "./base_url";

export const getPokemonById = (id) => {
	const url = `${BASE_URL}/${id}`;
	return fetch(url)
		.then((res) => res.json())
		.then((res) => {
			const { name, weight, height, stats, types: typesData, id } = res;
			const image = res.sprites.other.dream_world.front_default;
			const statistics = stats.map(({ base_stat, stat: { name } }) => {
				return { base_stat, name };
			});
			const types = typesData.map(({ type }) => type.name);

			return { name, weight, height, image, statistics, types, id };
		});
};
