import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {

    constructor(private elementRef: ElementRef) { }

    ngAfterViewInit() {
        this.setupMenuAnimations();
    }

    private setupMenuAnimations() {
        const dialog = this.elementRef.nativeElement.querySelector('#mobile-menu');
        const openButton = this.elementRef.nativeElement.querySelector('[commandfor="mobile-menu"][command="show-modal"]');
        const closeButton = this.elementRef.nativeElement.querySelector('[commandfor="mobile-menu"][command="close"]');
        const hamburgerIcon = this.elementRef.nativeElement.querySelector('.hamburger-icon');

        if (dialog && openButton && closeButton && hamburgerIcon) {
            // Manejar apertura del menú
            openButton.addEventListener('click', () => {
                this.animateHamburgerToX(hamburgerIcon);
                this.animateMenuOpen(dialog);
            });

            // Manejar cierre del menú
            closeButton.addEventListener('click', () => {
                this.animateXToHamburger(hamburgerIcon);
                this.animateMenuClose(dialog);
            });

            // Cerrar menú al hacer clic en el backdrop
            dialog.addEventListener('click', (e: Event) => {
                if (e.target === dialog) {
                    this.animateXToHamburger(hamburgerIcon);
                    this.animateMenuClose(dialog);
                }
            });

            // Cerrar menú con tecla Escape
            document.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.key === 'Escape' && dialog.open) {
                    this.animateXToHamburger(hamburgerIcon);
                    this.animateMenuClose(dialog);
                }
            });
        }
    }

    private animateHamburgerToX(hamburgerIcon: Element) {
        const lines = hamburgerIcon.querySelectorAll('path');

        if (lines.length >= 3) {
            // Transformar hamburguesa a X
            (lines[0] as SVGElement).style.transform = 'rotate(45deg) translate(5px, 5px)';
            (lines[1] as SVGElement).style.opacity = '0';
            (lines[2] as SVGElement).style.transform = 'rotate(-45deg) translate(7px, -6px)';
        }
    }

    private animateXToHamburger(hamburgerIcon: Element) {
        const lines = hamburgerIcon.querySelectorAll('path');

        if (lines.length >= 3) {
            // Revertir X a hamburguesa
            (lines[0] as SVGElement).style.transform = 'none';
            (lines[1] as SVGElement).style.opacity = '1';
            (lines[2] as SVGElement).style.transform = 'none';
        }
    }

    private animateMenuOpen(dialog: HTMLDialogElement) {
        // Agregar clase de entrada con retraso para suavidad
        const panel = dialog.querySelector('el-dialog-panel');
        if (panel) {
            panel.classList.add('animate-slide-in-right');
        }

        // Animar elementos del menú con retraso escalonado
        const menuItems = dialog.querySelectorAll('a[routerLink]');
        menuItems.forEach((item, index) => {
            (item as HTMLElement).style.animationDelay = `${(index + 2) * 0.1}s`;
            item.classList.add('animate-fade-in');
        });
    }

    private animateMenuClose(dialog: HTMLDialogElement) {
        // Limpiar animaciones al cerrar
        const panel = dialog.querySelector('el-dialog-panel');
        if (panel) {
            panel.classList.remove('animate-slide-in-right');
        }

        const menuItems = dialog.querySelectorAll('a[routerLink]');
        menuItems.forEach((item) => {
            item.classList.remove('animate-fade-in');
            (item as HTMLElement).style.animationDelay = '';
        });
    }
}
