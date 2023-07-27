// filename: app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Añade esta línea
import { GameService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'free-to-game-angular';

  nombreJuego: string = '';
  generoJuego: string = '';
  plataformaJuego: string = '';

  constructor(private gameService: GameService, public router: Router) {} // Añade 'public router: Router'

  ngOnInit() {
    this.gameService.gameFilters$.subscribe((filters) => {
      this.nombreJuego = filters.nombreJuego;
      this.generoJuego = filters.generoJuego;
      this.plataformaJuego = filters.plataformaJuego;
    });
  }
}
