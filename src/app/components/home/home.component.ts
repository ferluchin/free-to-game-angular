// filename: home.component.ts

import { Component, OnInit } from '@angular/core';
import { Game } from './../../models';
import { GameService } from './../../services/http.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent implements OnInit {
  nombreJuego: string = '';
  generoJuego: string = '';
  plataformaJuego: string = '';

  public games: Array<Game> = [];
  public gamesFiltered: Array<Game> = [];

  public currentPage: number = 0;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => {
      this.games = games;
      this.filterGames();
    });


    this.gameService.gameFilters$.subscribe((filters) => {
      this.nombreJuego = filters.nombreJuego;
      this.generoJuego = filters.generoJuego;
      this.plataformaJuego = filters.plataformaJuego;
      this.filterGames();
    });
  }

  filterGames() {
    // Limita la lista de juegos a 15 y añade la paginación
    this.gamesFiltered = this.games
      .filter((juego) => {
        let cumpleFiltro = true;
        if (this.nombreJuego) {
          cumpleFiltro =
            cumpleFiltro &&
            juego.title.toLowerCase().includes(this.nombreJuego.toLowerCase());
        }
        if (this.generoJuego) {
          cumpleFiltro =
            cumpleFiltro &&
            juego.genre.toLowerCase() === this.generoJuego.toLowerCase();
        }
        if (this.plataformaJuego) {
          cumpleFiltro =
            cumpleFiltro &&
            juego.platform.toLowerCase() === this.plataformaJuego.toLowerCase();
        }
        return cumpleFiltro;
      })
      .slice(this.currentPage * 15, this.currentPage * 15 + 15); // Aquí se añade la paginación
  }

  //paginación
  nextPage() {
    this.currentPage++;
    this.filterGames();
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.filterGames();
    }
  }
}
