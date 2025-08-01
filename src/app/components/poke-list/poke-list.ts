import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-poke-list',
  imports: [],
  templateUrl: './poke-list.html',
  styleUrls: ['./poke-list.css'],
  standalone:true
})
export class PokeList {
  @Input() pokedex!: any[];

  @Output() showEvent = new EventEmitter<number>();

  detailPokemon(index: number):void {
    this.showEvent.emit(index+1);
  }
}
