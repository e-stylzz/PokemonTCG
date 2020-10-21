import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CardService } from '../card.service';
import { Card } from '../models/card';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
  pokemon: Pokemon;
  card_id: string;
  cards: Card[];
  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    let name = this.route.snapshot.paramMap.get('name');
    this.pokemonService.getCharacter(name).subscribe((pokemon) => {
      this.pokemon = pokemon;
      console.log('Pokemon Data:', this.pokemon);
      this.cleanName(name).subscribe((cleaned_name) => {
        console.log('cleaned name: ', cleaned_name);
        this.cardService.getCards(cleaned_name).subscribe((data) => {
          console.log('All Cards: ', data);
          this.cards = data;
        });
      });
    });
  }

  cleanName(name: string) {
    let split = name.split('-');
    let final_name = split[0];
    return of(final_name);
  }
}
