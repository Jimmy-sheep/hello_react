import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	ImageStyle: {
		backgroundColor: '#454545',
		borderTop: '10px',
		borderTop: '10px',
		Width: '800px',
		'@media (max-width: 768px)': {
			paddingTop: 0,
			paddingBottom: 0,
			width: '100%',
			maxWidth:'800px'
		}
	},
}));

const GetAnimalApi1 = () => {
	const { ImageStyle } = useStyles();

	const { id } = useParams();
	const url = `https://protected-shelf-98731.herokuapp.com/api/tutorials/21`;
	const [product, setProduct] = useState(null);
	let content = null;
	useEffect(() => {
		axios.get(url)
			.then((response) => {
				setProduct(response.data)
			})
	}, [url])
	if (product) {
		content =
			<div>
				<div>{product.title}</div>
				<img src={product.picture} className={ImageStyle} />
				<div>{product.description}</div>
			</div>
	}
	return (<div>
		<div>
			{content}
		</div>
	</div>
	)
}

export default GetAnimalApi1;