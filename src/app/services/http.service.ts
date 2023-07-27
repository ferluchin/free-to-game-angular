// filename: http.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from 'src/app/models';

interface GameFilters {
  nombreJuego: string;
  generoJuego: string;
  plataformaJuego: string;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private baseUrl = 'https://www.freetogame.com/api/games';

  private gameFilters = new BehaviorSubject<GameFilters>({
    nombreJuego: '',
    generoJuego: '',
    plataformaJuego: '',
  });

  gameFilters$ = this.gameFilters.asObservable();

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl);
  }

  // getGameById(id: number): Observable<Game> {
  //   return this.http.get<Game>(`${this.baseUrl}/game?id=${id}`);
  // }
  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`https://www.freetogame.com/api/game?id=${id}`);
  }

  setGameFilters(filters: GameFilters) {
    this.gameFilters.next(filters);
  }
}
