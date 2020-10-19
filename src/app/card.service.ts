import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import data from './data/Ancient_Origins.json';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  public getCards(): Observable<any> {
    return this.http.get('./assets/Ancient_Origins.json');
  }

  public getCard(id: string): Observable<any> {
    let card = data.find((card) => card.id === id);
    console.log('card from service: ', card);
    return of(card);
  }
}
