import { Component } from '@angular/core';

interface Usuario {
  nome: string;
  finalizado: boolean;
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  usuarios: Usuario[] = [];
  newUsuario: string = '';

  
      addUsuario() {
        const novoUsuario: Usuario = { nome: this.newUsuario, finalizado: false };
        this.usuarios.push(novoUsuario);
        this.newUsuario = '';
      }
    
  
  updateUsuario(index: number) {
    if (index >= 0 && index < this.usuarios.length) {
      this.usuarios[index].finalizado = true;
    }
  }
  
  deleteUsuario(index:number){
    this.usuarios.splice(index, 1);
  }
}
