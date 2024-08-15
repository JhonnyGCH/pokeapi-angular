import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PokemonsService } from '../../core/services/pokemon.service';
import { PokedexComponent } from '../pokedex/pokedex.component';

@Component({
  standalone: true,
  selector: 'app-boton-principal',
  templateUrl: './boton-principal.component.html',
  styleUrls: ['./boton-principal.component.css'],
  imports: [CommonModule, MatIconModule, MatButtonModule],
})
export class BotonPrincipalComponent {
  constructor(
    private pokemonService: PokemonsService,
    private pokedexComponent: PokedexComponent,
    private cdr: ChangeDetectorRef
  ) {}

  buttonsVisible = false;

  toggleButtons() {
    this.buttonsVisible = !this.buttonsVisible;
    this.cdr.detectChanges();
  }

  addMore() {
    this.pokedexComponent.loadPokemons();
  }

  favorite() {
    console.log('favorite');
    alert('Favorito no ha sido configurado por ahora');
  }
}
