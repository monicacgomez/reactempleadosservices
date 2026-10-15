import React, { Component } from 'react'
import ServiceEmpleados from '../services/ServiceEmpleados'

export default class HomeComponent extends Component {

    service = new ServiceEmpleados();

    state = {
        empleados: []
    }

    loadEmpleados = () => {
        this.service.getEmpleados().then(result => {
            this.setState({
                empleados: result
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados();
    }

    render() {
        return (
            <div>
                <h1>Empleados</h1>
                <table className="table table-warning">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                            <th>Departamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.empleados.map((empleado, index) => {
                            return (
                                <tr key={index}>
                                    <td>{empleado.idEmpleado}</td>
                                    <td>{empleado.apellido}</td>
                                    <td>{empleado.oficio}</td>
                                    <td>{empleado.salario}</td>
                                    <td>{empleado.departamento}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
