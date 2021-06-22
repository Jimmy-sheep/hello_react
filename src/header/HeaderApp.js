import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, makeStyles, Button, IconButton, Drawer, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import HeaderDesktop from './HeaderDesktop';
// import HeaderMobile from './HeaderMobile';
import HomeButton from './HomeButton';
// import PagesButton from './PagesButton';
// import PagesList from './PagesList';


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
	header: {
		backgroundColor: '#454545',
		paddingRight: '40px',
		paddingLeft: '32px',
		'@media (max-width: 768px)': {
			paddingLeft: 0,
			paddingRight: 0,
		},
	},
	toolbar: {
		display: 'flex',
	},
	PagesButtonStyle: {
		fontFamily: "Work Sans, sans-serif",
		fontWeight: 600,
		color: '#FFFFFF',
		fontSize: '16px',
	},
	PagesListStyle: {
		backgroundColor: '#FFFFFF',
		width: '150px',
		padding: '20px 0px',
	},
	PagesListButtonStyle: {
		fontFamily: "Work Sans, sans-serif",
		fontWeight: 600,
		color: '#000000',
	},
}));

const HeaderApp = () => {
	const { header, toolbar, PagesButtonStyle, PagesListStyle, PagesListButtonStyle } = useStyles();

	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});

	const { mobileView, drawerOpen } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 768
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};

		setResponsiveness();

		window.addEventListener('resize', () => setResponsiveness());
		return () => {
			window.removeEventListener('resize', () => setResponsiveness());
		};
	}, []);

	const HeaderDesktop = () => {
		return (
			<Toolbar className={toolbar}>
				{HomeButton()}
				{PagesButton()}
			</Toolbar>
		);
	};

	const HeaderMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }));
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }));

		return (
			<Toolbar>
				<IconButton
					{...{
						edge: 'start',
						color: 'inherit',
						'aria-label': 'menu',
						'aria-haspopup': 'true',
						onClick: handleDrawerOpen,
					}}
				>
					<MenuIcon />
				</IconButton>
				<Drawer
					{...{
						anchor: 'left',
						open: drawerOpen,
						onClose: handleDrawerClose,
					}}
				>
					<div className={PagesListStyle}>{PagesList()}</div>
				</Drawer>
				<div>{HomeButton()}</div>
			</Toolbar>
		);
	};

	const PagesButton = () => {
		return PagesData.map(({ label, href }) => {
			return (
				<Button
					{...{
						key: label,
						color: "inherit",
						to: href,
						component: RouterLink,
						className: PagesButtonStyle,
					}}
				>
					{label}
				</Button>
			);
		});
	};

	const PagesList = () => {
		return PagesData.map(({ label, href }) => {
			return (
				<ListItem button
					{...{
						key: label,
						color: "inherit",
						to: href,
						component: RouterLink,
						className: PagesListButtonStyle,
					}}
				>
					<ListItemText>{label}</ListItemText>
				</ListItem>
			);
		});
	};

	return (
		<AppBar className={header}>
			{mobileView ? HeaderMobile() : HeaderDesktop()}
		</AppBar>
	);
};

export default HeaderApp;