import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import Cards from './data/Card_Data.json';
import Pokemon from './data/Pokemon_Data.json';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  //_Cards : any[] = Cards;
  constructor(private http: HttpClient) {}

  public getCards(): Observable<any> {
    return this.http.get('./assets/Ancient_Origins.json');
  }

  public getCard(id: string): Observable<any> {
    let card = Cards.find((card) => card.name === id);

    let cards = Cards.filter((card) => card.name === id);
    console.log('cards from service: ', cards);
    return of(cards);
  }

  public getCharacters(): Observable<any> {
    return of(Pokemon);
  }
}
