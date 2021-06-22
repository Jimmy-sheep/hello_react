import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import HomeHuman from './homeimage/HomeHuman.png';
import HomeAnimal from './homeimage/HomeAnimal.png';
import HomeAnimation from './homeimage/HomeAnimation.png';
import HomeOthers from './homeimage/HomeOthers.png';

const HomeImagesData = [
	{
		url: HomeHuman,
		label: 'HUMAN',
		href: '/human',
		width: '50%',
		height: '300px',
	},
	{
		url: HomeAnimal,
		label: 'ANIMAL',
		href: '/animal',
		width: '50%',
		height: '300px',
	},
	{
		url: HomeAnimation,
		label: 'ANIMATION',
		href: '/animation',
		width: '50%',
		height: '300px',
	},
	{
		url: HomeOthers,
		label: 'OTHERS',
		href: '/others',
		width: '50%',
		height: '300px',
	},
]

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		minWidth: '384px',
		width: '100%',
	},
	ImageStyle: {
		position: 'relative',
		height: 350,
		[theme.breakpoints.down('xs')]: {
			width: '100% !important',
			height: 350,
		},
		'&:hover, &$focusVisible': {
			zIndex: 1,
			'& $imageBackdrop': {
				opacity: 0,
			},
			'& $imageMarked': {
				opacity: 0,
			},
			'& $imageTitle': {
				border: '4px solid currentColor',
			},
		},
	},
	ImageButtonStyle: {
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white,
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	imageBackdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.3,
		transition: theme.transitions.create('opacity'),
	},
	imageTitle: {
		position: 'relative',
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
	},
}));

const ButtonBases = () => {
	const { root, ImageStyle, ImageButtonStyle, imageSrc, imageBackdrop, imageTitle } = useStyles();

	return (
		<div className={root}>
			{HomeImagesData.map((image,{ url, label, href, width, height }) => (
				<ButtonBase
					{...{
						key: label,
						color: "inherit",
						to: image.href,
						component: RouterLink,
						className: ImageStyle,
						style: { width: '50%' }
					}}
				>
					<div
						{...{
							className: imageSrc,
							style: { backgroundImage: `url(${image.url})` }
						}}
					/>
					<div className={imageBackdrop} />
					<div className={ImageButtonStyle}>
						<Typography
							variant="subtitle1"
							color="#000000"
							className={imageTitle}
						>
							{image.label}
						</Typography>
					</div>
				</ButtonBase>
			))}
		</div>
	);
}

export default ButtonBases;