import { BASE_URL } from "./base_url";
import { getMoreInfo } from "./getMoreInfo";

export const getPokemons = ({ page, limit }) => {
	const url = `${BASE_URL}?limit=${limit}&offset=${(page - 1) * limit}`;
	return fetch(url)
		.then((response) => response.json())
		.then((response) => {
			return Promise.all(response.results.map(({ url }) => getMoreInfo(url)));
		});
};
