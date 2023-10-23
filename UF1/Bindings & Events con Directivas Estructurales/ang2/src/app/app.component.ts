import { Component } from '@angular/core';

interface PokemonStats {
  name: string;
  attack: number;
  speed: number;
  defense: number;
  health: number;
  editable?: boolean;
  showDetails?: boolean; // Nueva propiedad para mostrar/ocultar detalles
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  serverPokemons: PokemonStats[] = [];
  pokemonInfo: string = '';

  constructor() {
    // Ejemplo de respuesta de un servidor en formato JSON
    const serverJson = `[
      {"name": "Charizard", "attack": 84, "speed": 100, "defense": 78, "health": 78, "editable": false, "showDetails": false },
      {"name": "Pikachu", "attack": 55, "speed": 90, "defense": 40, "health": 35, "editable": false, "showDetails": false },
      {"name": "Blastoise", "attack": 83, "speed": 78, "defense": 100, "health": 79, "editable": false, "showDetails": false },
      {"name": "Gengar", "attack": 65, "speed": 110, "defense": 60, "health": 60, "editable": false, "showDetails": false },
      {"name": "Mewtwo", "attack": 110, "speed": 130, "defense": 90, "health": 106, "editable": false, "showDetails": false }
    ]`;

    // Parseamos la información y la convertimos directamente en un array de "PokemonStats"
    this.serverPokemons = JSON.parse(serverJson);
  }

  public toggleEditable(pokemon: PokemonStats): void {
    pokemon.editable = !pokemon.editable;
    this.mostrarInformacionPokemon(pokemon);
  }

  public toggleDetails(pokemon: PokemonStats): void {
    pokemon.showDetails = !pokemon.showDetails;
  }

  public guardarCambios(pokemon: PokemonStats, form: any): void {
    if (form.valid) {
      pokemon.editable = !pokemon.editable;
      this.mostrarInformacionPokemon(pokemon);
    }
  }

  public mostrarInformacionPokemon(pokemon: PokemonStats): void {
    this.pokemonInfo = JSON.stringify(pokemon);
  }
}
