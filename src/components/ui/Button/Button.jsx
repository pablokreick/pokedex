import React from "react";
import "./button.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Button = ({
	handleClick,
	contain,
	shape,
	type,
	disabled,
	to,
	children,
}) => {
	const styles = classNames("button", {
		"button--shell": !type,
		"button--screen": type === "screen",
		"button--circle": shape === "circle",
		"button--image": contain === "image",
	});

	const element = React.createElement(
		to ? Link : "button",
		{
			className: styles,
			disabled: disabled || false,
			onClick: handleClick,
			to: to,
		},
		children,
	);

	return element;
};

export default Button;
