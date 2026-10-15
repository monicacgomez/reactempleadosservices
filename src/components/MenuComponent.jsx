import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ServiceEmpleados from '../services/ServiceEmpleados';

export default class MenuComponent extends Component {
service = new ServiceEmpleados();

    state = {
        oficios: []
    }
loadOficios = ( ) => {
this.service.getOficios().then(result => {
            this.setState ({
                oficios: result
        })
    })
    }
        
    componentDidMount = () => {
        this.loadOficios();
    }
render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" 
                        to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/empleados">Empleados</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Oficios
                    </a>
                    <ul className="dropdown-menu">
                        {
                            this.state.oficios.map((oficio, index) => {
                                return (<li key={index}>
                                    <NavLink className="dropdown-item"
                                    to={"/empleadosoficio/" + oficio } 
                                    >
                                       {oficio}
                                    </NavLink>
                                </li>)
                            })
                        }
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        )
    }
}