import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = '';
  fuerza: number = 0;
  destreza: number = 0;
  inteligencia: number = 0;
  constitucion: number = 0;

  nombre2: string = '';
  fuerza2: number = 0;
  destreza2: number = 0;
  inteligencia2: number = 0;
  constitucion2: number = 0;

  generateInfo(): void {
    let nombres: string[] = ["Nuria", "María", "Carlos", "Ana", "Pedro", "Laura", "Miguel", "Sofía", "Luis", "Elena"];
    let number = this.generarAleatorio(nombres.length);

    this.nombre = nombres[number];
    this.fuerza = this.generarAleatorio();
    this.destreza = this.generarAleatorio();
    this.inteligencia = this.generarAleatorio();
    this.constitucion = this.generarAleatorio();
    
  }

  generarAleatorio(mayor?: number): number {
    return Math.floor(Math.random() * ((mayor || 20)));
  }

  guardarInfo(): void {
    this.nombre2 = this.nombre;
    this.fuerza2 = this.fuerza;
    this.destreza2 = this.destreza;
    this.inteligencia2 = this.inteligencia;
    this.constitucion2 = this.constitucion;
  }

}
