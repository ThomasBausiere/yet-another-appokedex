import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokeService } from '../../utils/services/poke-service';
import { Searchbar } from "../searchbar/searchbar";
import { Details } from "../details/details";
import { PokeList } from "../poke-list/poke-list";

@Component({
  selector: 'app-pokedex',
  imports: [Searchbar, Details, PokeList],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css'
})
export class Pokedex implements OnInit, OnDestroy{
constructor(private pokeservice: PokeService ){}
pokemon!: any;
pokedex!: any[]
receiveData:number = 1;
// receiveDataFromSearch:number =1;
  ngOnInit():void{
    this.pokeservice.getAll().subscribe({
      next:pokeData=>{
      this.pokedex = pokeData.results;
        
      },
      
      error: err=>console.log(err)      
    })
  }

 handleData(data:number):void{this.receiveData = data}
//  handleDataSearch(data:number):void{this.receiveDataFromSearch = data}
  

ngOnDestroy(): void {}
}
