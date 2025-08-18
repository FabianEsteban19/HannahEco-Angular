import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-nosotros',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './nosotros.html',
    styleUrls: ['./nosotros.css']
})
export class Nosotros {
    title = 'Sobre Nosotros';
    isMenuOpen = false;

    mision = 'Crear tecnologías innovadoras que permitan a las personas y empresas tomar decisiones más sostenibles y generar un impacto positivo en el planeta.';

    vision = 'Ser la plataforma líder en soluciones tecnológicas para la sostenibilidad, donde cada acción digital contribuya a un futuro más verde.';

    equipo = [
        {
            nombre: 'Ana García',
            puesto: 'CEO & Fundadora',
            descripcion: 'Ingeniera ambiental con 15 años de experiencia en sostenibilidad corporativa.',
            imagen: '👩‍💼',
            linkedin: '#'
        },
        {
            nombre: 'Carlos Mendoza',
            puesto: 'CTO',
            descripcion: 'Desarrollador full-stack especializado en tecnologías verdes y aplicaciones escalables.',
            imagen: '👨‍💻',
            linkedin: '#'
        },
        {
            nombre: 'Sofia López',
            puesto: 'Head of Design',
            descripcion: 'Diseñadora UX/UI con pasión por crear experiencias digitales que inspiren el cambio.',
            imagen: '👩‍🎨',
            linkedin: '#'
        },
        {
            nombre: 'Miguel Torres',
            puesto: 'Científico de Datos',
            descripcion: 'Especialista en análisis de datos ambientales y machine learning para sostenibilidad.',
            imagen: '👨‍🔬',
            linkedin: '#'
        }
    ];

    valores = [
        {
            titulo: 'Sostenibilidad',
            descripcion: 'Cada decisión que tomamos considera su impacto ambiental a largo plazo.',
            icono: '🌍'
        },
        {
            titulo: 'Innovación',
            descripcion: 'Desarrollamos soluciones creativas para los desafíos ambientales más complejos.',
            icono: '💡'
        },
        {
            titulo: 'Transparencia',
            descripcion: 'Mantenemos comunicación abierta y honesta en todas nuestras operaciones.',
            icono: '🔍'
        },
        {
            titulo: 'Colaboración',
            descripcion: 'Creemos que el cambio positivo se logra trabajando juntos hacia objetivos comunes.',
            icono: '🤝'
        }
    ];

    constructor() { }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
