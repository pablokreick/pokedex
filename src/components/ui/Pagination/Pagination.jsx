import React from "react";
import Button from "../Button/Button";
import "./pagination.css";

const Pagination = ({ previousPage, nextPage }) => {
	return (
		<div className="pagination">
			<Button handleClick={previousPage}>Previous</Button>
			<Button handleClick={nextPage}>Next</Button>
		</div>
	);
};

export default Pagination;
