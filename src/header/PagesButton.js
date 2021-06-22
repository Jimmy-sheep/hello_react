import { makeStyles, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const PagesData = [
	{
		label: "HUMAN",
		href: '/human',
	},
	{
		label: "ANIMAL",
		href: '/animal',
	},
	{
		label: "ANIMATION",
		href: '/animation',
	},
	{
		label: "OTHERS",
		href: '/others',
	},
];

const useStyles = makeStyles(() => ({
	PagesButtonStyle: {
		fontFamily: "Work Sans, sans-serif",
		fontWeight: 600,
		color: '#FFFFFF',
		fontSize: '16px',
		marginLeft: '10px',
		marginRight: '10px',
	},
}));

const PagesButton = () => {
	const { PagesButtonStyle } = useStyles();
	return PagesData.map(({ label, href }) => {
		return (
			<Button
				{...{
					key: label,
					color: 'inherit',
					to: href,
					component: RouterLink,
					className: PagesButtonStyle
				}}
			>
				{label}
			</Button>
		);
	});
};

export default PagesButton;