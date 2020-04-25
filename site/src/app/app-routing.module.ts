import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ContatoComponent } from './contato/contato.component';
import { PoliticaComponent } from './politica/politica.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'politica', component: PoliticaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
