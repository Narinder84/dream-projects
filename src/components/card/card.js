/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		width: '90vw',
		display: 'flex',
		marginBottom: '10px',
		background: 'rgba(73, 71, 71, 0.7)',
	},
	media: {
		marginTop: '0rem',
		marginRight: 10,
		width: 300,
		height: 200,
	},
	content: {
		width: '390%',
	},
	cardActions: {
		width: 100,
		paddingBottom: 20,
	},
	bt: {
		border: '5px, solid, black',
		color: 'var(--on-primary)',
		paddingLeft: '15rem',
		fontSize: '1.8rem',
		marginBottom: '3rem',
	},
	textBox: {
		height: '80%',
		textAlign: 'justify',
		opacity: 0.8,
		fontSize: '2rem',

		/* background: rgb(0 0 0 / 50%), */
		color: 'var(--on-primary)',

		padding: '30px',
	},
	heading: {
		paddingLeft: '3rem',
	},
});

export default function MediaCard({ content }) {
	console.log(content);
	const classes = useStyles();
	const IMG = (imgName) => {
		return require(`../../img/${imgName}`);
	};

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={IMG(content.path).default}
					title='Contemplative Reptile'
				/>
				<CardActions className={classes.cardActions}>
					<Button className={classes.bt}>Live</Button>
				</CardActions>
			</CardActionArea>
			<CardContent className={classes.content}>
				<Typography
					gutterBottom
					className={classes.heading}
					variant='h4'
					component='h2'>
					{content.appName}
				</Typography>
				<Typography variant='body2' className={classes.textBox} component='p'>
					{content.content}
					{content.projectList ? (
						<ul>
							{content.projectList.map((pro) => (
								<li>{pro}</li>
							))}
						</ul>
					) : null}
				</Typography>
			</CardContent>
		</Card>
	);
}
