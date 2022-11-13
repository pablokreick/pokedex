import React, { useContext } from "react";
import useSessionStorage from "hooks/useSessionStorage";

const PowerContext = React.createContext(false);
const { Provider } = PowerContext;

export const usePowerContext = () => useContext(PowerContext);

const PowerProvider = ({ children }) => {
	const [isPower, setIsPower] = useSessionStorage("power", false);

	const handlePower = () => setIsPower(!isPower);

	return <Provider value={{ handlePower, isPower }}>{children}</Provider>;
};

export default PowerProvider;
