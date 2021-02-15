import React, {Component} from 'react';
import covidIcon from '../../images/covid.svg';
import '../../css/home.css';
import Button from '@material-ui/core/Button';

class Home extends Component {
    render(){
        return(
            <section className="home-page">
                <img className="rotate covid" src={covidIcon} alt="covid"/>
                <h1 className="home-title">Control de Pandemias</h1>
                <p className="home-stitle">
                    Bienvenido al sistema de contact tracing para encontrar contagios de COVID-19 manteniendo la privacidad de los usuarios.
                </p>
                <Button href="/nuevoEstablecimiento" color="primary">
                    Registrar nuevo establecimiento
                </Button>
                <Button href="/reglas" color="primary">
                    Administrar las reglas de contagio (administradores)
                </Button>
            </section>
        )
    }
}

export default Home;