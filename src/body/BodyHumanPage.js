import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GetHumanApi1 from '../axios/human/GetHumanApi1';
import GetHumanApi2 from '../axios/human/GetHumanApi2';
import GetHumanApi3 from '../axios/human/GetHumanApi3';
import GetHumanApi4 from '../axios/human/GetHumanApi4';
import GetHumanApi5 from '../axios/human/GetHumanApi5';

const useStyles = makeStyles((theme) => ({
	HumanPictureStyle: {
		paddingTop: '10px',
	},
}));

const BodyHumanPage = () => {
	const { HumanPictureStyle } = useStyles();

	return (
		<div className={HumanPictureStyle}>
			<GetHumanApi1 />
			<GetHumanApi2 />
			<GetHumanApi3 />
			<GetHumanApi4 />
			<GetHumanApi5 />
		</div>
	);
}

export default BodyHumanPage;