import React from 'react';

//value being symbol X or O

const Square = ({ value, onClick }) => {
	const style = value ? `squares ${value}` : `squares`;

	return (
		<button className={style} onClick={onClick}>
			{value}
		</button>
	);
};

export default Square;
