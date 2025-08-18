import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-tienda',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './tienda.html',
    styleUrls: ['./tienda.css']
})
export class Tienda {
    title = 'Tienda Sostenible';
    isMenuOpen = false;

    categorias = [
        { nombre: 'Todo', activa: true },
        { nombre: 'Hogar', activa: false },
        { nombre: 'Tecnología', activa: false },
        { nombre: 'Moda', activa: false },
        { nombre: 'Alimentación', activa: false }
    ];

    productos = [
        {
            id: 1,
            nombre: 'Botella de Agua Reutilizable',
            precio: 29.99,
            imagen: '🍶',
            categoria: 'Hogar',
            descripcion: 'Botella de acero inoxidable libre de BPA, mantiene la temperatura por 24 horas.',
            certificaciones: ['Libre de BPA', 'Reciclable'],
            descuento: 15,
            disponible: true
        },
        {
            id: 2,
            nombre: 'Panel Solar Portátil',
            precio: 199.99,
            imagen: '☀️',
            categoria: 'Tecnología',
            descripcion: 'Cargador solar plegable de 20W, perfecto para dispositivos móviles.',
            certificaciones: ['Energía Renovable', 'Resistente al agua'],
            descuento: 0,
            disponible: true
        },
        {
            id: 3,
            nombre: 'Camiseta Orgánica',
            precio: 39.99,
            imagen: '👕',
            categoria: 'Moda',
            descripcion: 'Camiseta 100% algodón orgánico, comercio justo y tintes naturales.',
            certificaciones: ['Algodón Orgánico', 'Comercio Justo'],
            descuento: 20,
            disponible: true
        },
        {
            id: 4,
            nombre: 'Semillas Orgánicas Kit',
            precio: 24.99,
            imagen: '🌱',
            categoria: 'Alimentación',
            descripcion: 'Kit de 10 variedades de semillas orgánicas para huerto casero.',
            certificaciones: ['Orgánico Certificado', 'No GMO'],
            descuento: 0,
            disponible: false
        },
        {
            id: 5,
            nombre: 'Lámpara LED Solar',
            precio: 79.99,
            imagen: '💡',
            categoria: 'Hogar',
            descripcion: 'Lámpara de mesa con panel solar integrado y batería de larga duración.',
            certificaciones: ['Bajo Consumo', 'Energía Solar'],
            descuento: 10,
            disponible: true
        },
        {
            id: 6,
            nombre: 'Smartphone Reacondicionado',
            precio: 299.99,
            imagen: '📱',
            categoria: 'Tecnología',
            descripcion: 'Teléfono inteligente reacondicionado con garantía de 1 año.',
            certificaciones: ['Reacondicionado', 'Garantía 1 año'],
            descuento: 25,
            disponible: true
        }
    ];

    constructor() { }

    seleccionarCategoria(categoria: any) {
        this.categorias.forEach(cat => cat.activa = false);
        categoria.activa = true;
    }

    get productosFiltrados() {
        const categoriaActiva = this.categorias.find(cat => cat.activa);
        if (categoriaActiva?.nombre === 'Todo') {
            return this.productos;
        }
        return this.productos.filter(producto => producto.categoria === categoriaActiva?.nombre);
    }

    calcularPrecioConDescuento(precio: number, descuento: number): number {
        return precio * (1 - descuento / 100);
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
