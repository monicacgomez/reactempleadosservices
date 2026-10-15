import axios from 'axios'
import Global from '../Global'

export default class ServiceEmpleados {

    getEmpleados() {
        return new Promise(function(resolve) {
            let url = Global.urlApiEmpleados;
            let request = "api/Empleados";
            axios.get(url + request).then((response) => {
                console.log("Leyendo empleados");
                resolve(response.data);
            })
        })
    }

    getOficios() {
        return new Promise(function(resolve) {
            let url = Global.urlApiEmpleados;
            let request = "api/Empleados/oficios";
            axios.get(url + request).then((response) => {
                console.log("Leyendo oficios");
                resolve(response.data);
            })
        })
    }

    getEmpleadosOficio(oficio) {
        return new Promise(function(resolve) {
            let url = Global.urlApiEmpleados;
            let request = "api/Empleados/EmpleadosOficio/" + oficio;
            axios.get(url + request).then((response) => {
                console.log("Leyendo empleados por oficio");
                resolve(response.data);
            })
        })
    }
}
