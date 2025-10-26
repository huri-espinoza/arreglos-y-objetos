import propiedadesVenta from './propiedades_venta.js';
import propiedadesAlquiler from './propiedades_alquiler.js';
import propiedades from './propiedades_template.js';

const ventas = propiedadesVenta.slice(0, -2);
const alquileres = propiedadesAlquiler.slice(0, -2);

const containerVenta = document.getElementById("soloPropiedadesVenta");
propiedades(containerVenta, ventas);

const containerAlquiler = document.getElementById("soloPropiedadesAlquiler");
propiedades(containerAlquiler, alquileres);