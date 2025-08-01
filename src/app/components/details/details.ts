import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PokeService } from '../../utils/services/poke-service';
import { PokemonDetails } from '../../utils/types/pokemon.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css'],
  standalone:true
})
export class Details implements OnChanges {

  @Input() receiveData!: number;

    pokemon!: PokemonDetails;

  constructor(private pokeService: PokeService) {}

  ngOnChanges(): void {
    this.pokeService.getOne(this.receiveData).subscribe({
      next:pokeData=>this.pokemon=pokeData,
      error: err=> console.error(err)    
        
    })
    
  }
}
