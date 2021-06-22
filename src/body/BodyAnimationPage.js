import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GetAnimationApi1 from '../axios/animation/GetAnimationApi1';
import GetAnimationApi2 from '../axios/animation/GetAnimationApi2';
import GetAnimationApi3 from '../axios/animation/GetAnimationApi3';
import GetAnimationApi4 from '../axios/animation/GetAnimationApi4';
import GetAnimationApi5 from '../axios/animation/GetAnimationApi5';

const useStyles = makeStyles((theme) => ({
	AnimationPictureStyle: {
		paddingTop: '10px',
	},
}));

const BodyAnimationPage = () => {
	const { AnimationPictureStyle } = useStyles();

	return (
		<div className={AnimationPictureStyle}>
			<GetAnimationApi1 />
			<GetAnimationApi2 />
			<GetAnimationApi3 />
			<GetAnimationApi4 />
			<GetAnimationApi5 />
		</div>
	);
}

export default BodyAnimationPage;