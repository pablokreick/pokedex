export const getMoreInfo = (url) => {
	return fetch(url)
		.then((response) => response.json())
		.then(({ id, name, types: typesData, sprites }) => {
			const image = sprites.other.dream_world.front_default;
			const types = typesData.map(({ type }) => type.name);
			return { id, name, image, types };
		});
};
