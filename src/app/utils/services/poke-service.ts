import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex } from '../types/pokedex.type';
import { PokemonDetails } from '../types/pokemon.type';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Pokedex> {
    return this.http.get<Pokedex>(this.baseUrl + '?limit=151');
  }
  getOne(id: number): Observable<PokemonDetails> {
    return this.http.get<any>(this.baseUrl+ `/${id}`);
  }
}
