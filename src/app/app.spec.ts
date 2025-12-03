// --- IMPORTAÇÕES OBRIGATÓRIAS PARA CORRIGIR O ERRO DE ZONE.JS ---
import 'zone.js';
import 'zone.js/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { AppComponent } from './app';

// Inicializa o ambiente de testes manualmente
// (Isso é necessário porque o arquivo de configuração padrão src/test.ts parece estar ausente)
try {
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
} catch {
  // Se já estiver inicializado, ignora o erro para não quebrar
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Ateliê Edu@rtes' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Verifica se a variável title está correta
    expect(app.title).toEqual('Ateliê Edu@rtes');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Verifica se o título H1 da página contém o texto esperado
    expect(compiled.querySelector('h1')?.textContent).toContain('Harmonia em cada traço');
  });
});