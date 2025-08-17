import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Home } from './home';

describe('Home', () => {
    let component: Home;
    let fixture: ComponentFixture<Home>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Home, RouterTestingModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(Home);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have correct title', () => {
        expect(component.title).toBe('HannahEco');
    });

    it('should have correct subtitle', () => {
        expect(component.subtitle).toBe('Tu plataforma eco-friendly');
    });

    it('should have three features', () => {
        expect(component.features.length).toBe(3);
    });

    it('should render title in template', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('HannahEco');
    });

    it('should render features in template', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const featureCards = compiled.querySelectorAll('.bg-white.rounded-lg.shadow-md');
        expect(featureCards.length).toBe(3);
    });
});
