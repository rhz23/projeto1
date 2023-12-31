import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteudoComponent } from './componentes/conteudo/conteudo.component';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { Componente2Component } from './componentes/componente2/componente2.component';
import { Componente3Component } from './componentes/componente3/componente3.component';
import { RotacustomComponent } from './componentes/rotacustom/rotacustom.component';


// no vetor Routes, se definine as rotas para as quais cada link ira levar
//não esquecer da importação acima

const routes: Routes = [
  { path: '', component: ConteudoComponent },
  { path: 'link1', component: Componente1Component },
  { path: 'link2', component: Componente2Component},
  { path: 'link3', component: Componente3Component},
  { path: 'custom/:id', component: RotacustomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
