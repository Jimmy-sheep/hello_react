import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GetOthersApi1 from '../axios/others/GetOthersApi1';
import GetOthersApi2 from '../axios/others/GetOthersApi2';
import GetOthersApi3 from '../axios/others/GetOthersApi3';
import GetOthersApi4 from '../axios/others/GetOthersApi4';
import GetOthersApi5 from '../axios/others/GetOthersApi5';

const useStyles = makeStyles((theme) => ({
	OthersPictureStyle: {
		paddingTop: '10px',
	},
}));

const BodyOthersPage = () => {
	const { OthersPictureStyle } = useStyles();

	return (
		<div className={OthersPictureStyle}>
			<GetOthersApi1 />
			<GetOthersApi2 />
			<GetOthersApi3 />
			<GetOthersApi4 />
			<GetOthersApi5 />
		</div>
	);
}

export default BodyOthersPage;