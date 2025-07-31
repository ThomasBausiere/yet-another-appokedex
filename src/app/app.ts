import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Searchbar } from "./components/searchbar/searchbar";
import { Pokedex } from "./components/pokedex/pokedex";
import { Details } from "./components/details/details";

@Component({
  selector: 'app-root',
  imports: [ Pokedex ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pokemon-api');
}
