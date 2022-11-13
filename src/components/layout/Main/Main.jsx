import React from "react";
import "./main.css";
import classNames from "classnames";

const Main = ({ type, children }) => {
	const styles = classNames("main", {
		"main--block": type === "block",
		"main--dark": type === "dark",
	});

	return <main className={styles}>{children}</main>;
};

export default Main;
