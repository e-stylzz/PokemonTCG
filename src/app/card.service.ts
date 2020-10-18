import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  public getCards(): Observable<any> {
    return this.http.get('./assets/Ancient_Origins.json');
  }

  public getCard(id: string): Observable<any> {
    console.log('ID: ', id);
    const cards: any = require('./data/Ancient_Origins.json');
    console.log('cards from service: ', cards);
    //let cards: [] = this.http.get('./assets/Ancient_Origins.json');
    let card = cards.find((card) => card.id === id);
    console.log('card from service: ', card);
    return of(card);
  }
}
