import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PokeService } from '../../utils/services/poke-service';
import { PokemonDetails } from '../../utils/types/pokemon.type';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
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
