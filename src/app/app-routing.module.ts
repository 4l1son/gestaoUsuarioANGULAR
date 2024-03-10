import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponentComponent
  },
  { path: 'cadastro', component: UsuarioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
