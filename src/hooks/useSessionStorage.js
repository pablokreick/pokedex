import { useState } from "react";

const useSessionStorage = (key, initial) => {
	const [value, setValue] = useState(() => {
		return JSON.parse(window.sessionStorage.getItem(key)) || initial;
	});

	const setNewValue = (newValue) => {
		setValue(newValue);
		window.sessionStorage.setItem(key, JSON.stringify(newValue));
	};

	return [value, setNewValue];
};

export default useSessionStorage;
