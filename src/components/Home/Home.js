import React, {Component} from 'react';
import covidIcon from '../../images/covid.svg';
import '../../css/home.css';

class Home extends Component {
    render(){
        return(
            <section className="home-page">
                <img className="rotate covid" src={covidIcon} alt="covid"/>
                <h1 className="home-title">Control de Pandemias</h1>
                <p className="home-stitle">
                    Bienvenido al sistema de contact tracing para encontrar contagios de COVID-19 manteniendo la privacidad de los usuarios.
                </p>
                <a id="LandingIngresarButton" href="/nuevoEstablecimiento">Registrar nuevo establecimiento</a> (acceso público)
                <a id="LandingIngresarButton" href="/reglas">Administrar las reglas de contagio</a> (acceso restringido a administradores)
            </section>
        )
    }
}

export default Home;