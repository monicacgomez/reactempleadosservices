import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import EmpleadosComponent from './EmpleadosComponent'
import EmpleadosOficioComponent from './EmpleadosOficioComponent'

export default class Router extends Component {
    render() {
        function EmpleadosOficioElement() {
            let { oficio } = useParams();
            return (<EmpleadosOficioComponent oficio={oficio} />)
        }

        return (
            <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/empleados" element={<EmpleadosComponent />} />
                    <Route path="/empleadosoficio/:oficio" element={<EmpleadosOficioElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}