import { MenuItem, Link } from '@material-ui/core';
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

const PagesList = () => {
	return PagesData.map(({ label, href }) => {
		return (
			<Link
				{...{
					key: label,
					color: 'inherit',
					to: href,
					component: RouterLink,
					style: { textDecoration: 'none' },
				}}
			>
				<MenuItem>{label}</MenuItem>
			</Link>
		);
	});
};

export default PagesList;