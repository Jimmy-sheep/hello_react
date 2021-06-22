import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GetAnimalApi1 from '../axios/animal/GetAnimalApi1';
import GetAnimalApi2 from '../axios/animal/GetAnimalApi2';
import GetAnimalApi3 from '../axios/animal/GetAnimalApi3';
import GetAnimalApi4 from '../axios/animal/GetAnimalApi4';
import GetAnimalApi5 from '../axios/animal/GetAnimalApi5';

const useStyles = makeStyles((theme) => ({
	AnimalPictureStyle: {
		paddingTop: '10px',
	},
}));

const BodyAnimalPage = () => {
	const { AnimalPictureStyle } = useStyles();

	return (
		<div className={AnimalPictureStyle}>
			<GetAnimalApi1 />
			<GetAnimalApi2 />
			<GetAnimalApi3 />
			<GetAnimalApi4 />
			<GetAnimalApi5 />
		</div>
	);
}

export default BodyAnimalPage;