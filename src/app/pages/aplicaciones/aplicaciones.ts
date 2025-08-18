import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-aplicaciones',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './aplicaciones.html',
    styleUrls: ['./aplicaciones.css']
})
export class Aplicaciones {
    title = 'Nuestras Aplicaciones';
    isMenuOpen = false;

    aplicaciones = [
        {
            "nombre": "Fluxor",
            "descripcion": "Plataforma de automatización con inteligencia artificial que ahorra tiempo y optimiza procesos, ofreciendo soluciones personalizadas según el sector de la empresa y adaptando cada experiencia a sus necesidades.",
            "icono": "🤖    ",
            "caracteristicas": [
                "Automatización inteligente de tareas repetitivas",
                "Ahorro de tiempo en procesos operativos",
                "Experiencia personalizada para cada usuario",
                "Adaptación a sectores específicos de negocio",
                "Integración con múltiples herramientas empresariales"
            ],
            "disponible": true
        }
        ,
        {
            "nombre": "Nido Pro",
            "descripcion": "Intranet integral para la gestión de un nido con enfoque Montessori. Permite administrar docentes, registrar notas académicas, y evaluar el bienestar emocional de cada niño para un desarrollo saludable.",
            "icono": "🏫",
            "caracteristicas": [
                "Gestión de docentes",
                "Registro y seguimiento de notas",
                "Método Montessori digital",
                "Monitoreo de emociones y salud mental infantil",
                "Comunicación con padres",
                "Reportes de progreso académico y emocional"
            ],
            "disponible": true
        },
        {
            nombre: 'GreenCommerce',
            descripcion: 'Marketplace exclusivo para productos sostenibles y empresas comprometidas con el medio ambiente.',
            icono: '🛒',
            caracteristicas: ['Productos verificados', 'Certificaciones eco', 'Envío sostenible'],
            disponible: false
        },
        {
            nombre: 'EcoEducation',
            descripcion: 'Plataforma educativa con cursos, talleres y recursos para aprender sobre sostenibilidad.',
            icono: '📚',
            caracteristicas: ['Cursos interactivos', 'Certificaciones', 'Comunidad global'],
            disponible: false
        },
    ];

    constructor() { }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
