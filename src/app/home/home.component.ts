import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: [Card];
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getCards().subscribe((data) => {
      console.log('Cards: ', data);
      data.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      this.cards = data;
    });
  }
}
