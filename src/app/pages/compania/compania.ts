import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-compania',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './compania.html',
    styleUrls: ['./compania.css']
})
export class Compania {
    title = 'Información Corporativa';
    isMenuOpen = false;

    estadisticas = [
        {
            numero: '50K+',
            descripcion: 'Usuarios activos',
            icono: '👥'
        },
        {
            numero: '1M+',
            descripcion: 'Toneladas CO2 reducidas',
            icono: '🌍'
        },
        {
            numero: '200+',
            descripcion: 'Empresas partner',
            icono: '🤝'
        },
        {
            numero: '15',
            descripcion: 'Países presentes',
            icono: '🗺️'
        }
    ];

    historia = [
        {
            ano: '2020',
            evento: 'Fundación de Hannah Ecosistema',
            descripcion: 'Inicio de la plataforma con el objetivo de democratizar la sostenibilidad.',
            icono: '🚀'
        },
        {
            ano: '2021',
            evento: 'Primera aplicación EcoTracker',
            descripcion: 'Lanzamiento de nuestra primera herramienta de seguimiento de huella de carbono.',
            icono: '📱'
        },
        {
            ano: '2022',
            evento: 'Expansión internacional',
            descripcion: 'Llegada a 10 países de Latinoamérica con más de 25,000 usuarios.',
            icono: '🌎'
        },
        {
            ano: '2023',
            evento: 'Marketplace sostenible',
            descripcion: 'Apertura de nuestra tienda online con productos certificados eco-friendly.',
            icono: '🛒'
        },
        {
            ano: '2024',
            evento: 'Reconocimientos internacionales',
            descripcion: 'Premio a la Innovación Verde y certificación B-Corp.',
            icono: '🏆'
        },
        {
            ano: '2025',
            evento: 'Futuro sostenible',
            descripcion: 'Expansión global y nuevas tecnologías de IA para sostenibilidad.',
            icono: '🔮'
        }
    ];

    certificaciones = [
        {
            nombre: 'B-Corp Certified',
            descripcion: 'Certificación que valida nuestro compromiso con el impacto social y ambiental.',
            imagen: '🏅'
        },
        {
            nombre: 'ISO 14001',
            descripcion: 'Sistema de gestión ambiental certificado internacionalmente.',
            imagen: '🌿'
        },
        {
            nombre: 'Carbon Neutral',
            descripcion: 'Operaciones 100% neutras en carbono desde 2023.',
            imagen: '⚖️'
        },
        {
            nombre: 'Green Tech Award',
            descripcion: 'Reconocimiento a la innovación tecnológica sostenible.',
            imagen: '🥇'
        }
    ];

    responsabilidad = [
        {
            area: 'Medio Ambiente',
            descripcion: 'Operaciones neutras en carbono y reducción del 45% de emisiones desde 2020.',
            icono: '🌱',
            acciones: ['Energía 100% renovable', 'Oficinas verdes', 'Compensación de carbono']
        },
        {
            area: 'Comunidad',
            descripcion: 'Programas educativos gratuitos en escuelas y comunidades vulnerables.',
            icono: '🏫',
            acciones: ['Talleres gratuitos', 'Becas tecnológicas', 'Voluntariado corporativo']
        },
        {
            area: 'Transparencia',
            descripcion: 'Reportes públicos anuales sobre nuestro impacto social y ambiental.',
            icono: '📊',
            acciones: ['Auditorías externas', 'Código abierto', 'Datos públicos']
        }
    ];

    constructor() { }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
