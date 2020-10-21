import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import Cards from './data/Card_Data.json';

import { Card } from './models/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  public getCards(name: string): Observable<Card[]> {
    console.log('Pokemon Name Searching: ', name);
    let cards = Cards.filter((card) => card.name === name);
    return of(cards);
  }

  public getCard(id: string): Observable<Card> {
    let card = Cards.find((card) => card.name === id);
    return of(card);
  }
}
