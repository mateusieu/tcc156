import { Routes } from '@angular/router';
import { SectionSolicitacoesComponent } from './app/sections/section-solicitacoes/section-solicitacoes.component';

export const appRoutes: Routes = [
    {path: 'solicitacoes', component: SectionSolicitacoesComponent},

    {path: '', redirectTo: '/solicitacoes', pathMatch: 'full'},

];