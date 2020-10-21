import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import PokemonData from './data/Pokemon_Data.json';
import { Pokemon } from './models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  public getCharacters(): Observable<Pokemon[]> {
    return of(PokemonData);
  }

  public getCharacter(name): Observable<Pokemon> {
    let pokemon = PokemonData.find((pokemon) => pokemon.name === name);
    return of(pokemon);
  }
}
