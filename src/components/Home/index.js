import React from 'react';
import covidIcon from '../../images/covid.svg';
import '../../css/home.css';
import { Button } from '@material-ui/core';
import useStyles from './styles';

export default function Home() {
	const classes = useStyles();

	return (
		<section className="home-page">
			<img className="rotate covid" src={covidIcon} alt="covid" />
			<h1 className="home-title">Control de Pandemias</h1>
			<p className="home-stitle">
				Bienvenido al sistema de contact tracing para encontrar contagios de COVID-19 manteniendo la privacidad de los usuarios.
      </p>
			<Button className={classes.ownersButton} href="/misEstablecimientos" variant="contained" color="primary">
				Ingresar como dueño de establecimiento
			</Button>
			<Button className={classes.adminsButton} href="/reglas" color="default">
				Ingresar como administrador
      </Button>
		</section>
	)
}