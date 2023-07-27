// filename: filter-games.component.ts
import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/http.service';

@Component({
  selector: 'app-filter-games',
  templateUrl: './filter-games.component.html',
  styleUrls: ['./filter-games.component.scss'],
})
export class FilterGamesComponent implements OnInit {
  generos: string[] = [];
  plataformas: string[] = [];
  nombreJuego: string = '';
  generoJuego: string = '';
  plataformaJuego: string = '';

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getGames().subscribe((juegos) => {
      this.generos = Array.from(new Set(juegos.map((juego) => juego.genre)));
      this.plataformas = Array.from(
        new Set(juegos.map((juego) => juego.platform))
      );
    });
  }

  filtrarJuegos() {
    this.gameService.setGameFilters({
      nombreJuego: this.nombreJuego,
      generoJuego: this.generoJuego,
      plataformaJuego: this.plataformaJuego,
    });
  }
}
