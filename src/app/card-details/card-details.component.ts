import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
  card_id: string;
  card: Card;
  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.card_id = this.route.snapshot.paramMap.get('id');

    this.cardService.getCard(this.card_id).subscribe((data) => {
      console.log('Card: ', data);
      this.card = data;
    });
  }
}
