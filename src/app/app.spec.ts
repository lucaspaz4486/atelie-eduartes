import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app'; // Corrigido de 'App' para 'AppComponent'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Corrigido aqui também
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Ateliê Luz da Alma' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Certifique-se que o título aqui bate com o que está no app.ts
    expect(app.title).toEqual('Ateliê Luz da Alma');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Verifica se existe um h1 (que está na sua Hero Section)
    expect(compiled.querySelector('h1')?.textContent).toContain('Harmonia em cada traço');
  });
});