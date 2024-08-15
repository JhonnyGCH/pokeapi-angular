import { Component } from '@angular/core';
import { PokedexComponent } from '../pokedex/pokedex.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor( private pokedexComponent: PokedexComponent) {
  }
  searchPokemon(event : any) {
    console.log(event)
    this.pokedexComponent.searchPokemon(event)
  }
  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
