import { makeStyles, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	HomeButtonStyle: {
		fontFamily: "Work Sans, sans-serif",
		fontWeight: 700,
		color: '#FFFFFF',
		fontSize: '24px',
		marginLeft: '0px',
		marginRight: '10px',
	},
}));

const HomeButton = () => {
	const { HomeButtonStyle } = useStyles();
	return (
		<Button
			{...{
				key: "MEME PULL",
				color: 'inherit',
				to: '/',
				component: RouterLink,
				className: HomeButtonStyle
			}}
		>
			MEME PULL
		</Button>
	)
};

export default HomeButton;