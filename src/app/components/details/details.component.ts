// filename: details.component.ts

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/http.service';
import { Game } from 'src/app/models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  game: Game | undefined;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getGame();
  }

  getGame(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameService.getGameById(id).subscribe(
      (game) => (this.game = game),
      (error) => console.error(error)
    );
  }
  // getGame(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.gameService.getGameById(id).subscribe((game) => (this.game = game));
  // }

  goBack(): void {
    this.location.back();
  }
}
