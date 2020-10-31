import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSolicitacoesComponent } from './section-solicitacoes.component';

describe('SectionSolicitacoesComponent', () => {
  let component: SectionSolicitacoesComponent;
  let fixture: ComponentFixture<SectionSolicitacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSolicitacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
