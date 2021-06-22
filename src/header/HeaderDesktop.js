import { Toolbar, makeStyles } from '@material-ui/core';
import HomeButton from './HomeButton';
import PagesButton from './PagesButton';

const useStyles = makeStyles(() => ({
	toolbar: {
		display: 'flex',
	},
}));

const HeaderDesktop = () => {
	const { toolbar } = useStyles();

	return (
		<Toolbar className={toolbar}>
			{HomeButton()}
			{PagesButton()}
		</Toolbar>
	);
};

export default HeaderDesktop;