// home.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, BehaviorSubject } from 'rxjs';
import { HomeComponent } from './home.component';
import { GameService } from './../../services/http.service'; // Corrección aquí
import { Game } from './../../models';

import { HttpClientTestingModule } from '@angular/common/http/testing';

// Datos ficticios para los juegos
const dummyGames: Game[] = [
  {
    id: 1,
    title: 'Game 1',
    thumbnail: '',
    short_description: '',
    genre: '',
    platform: '',
    publisher: '',
    developer: '',
    release_date: '',
    freetogame_profile_url: '',
    game_url: '',
  },
  {
    id: 2,
    title: 'Game 2',
    thumbnail: '',
    short_description: '',
    genre: '',
    platform: '',
    publisher: '',
    developer: '',
    release_date: '',
    freetogame_profile_url: '',
    game_url: '',
  },
  // etc...
];

// Mock GameService
class MockGameService {
  gameFilters$ = new BehaviorSubject({
    nombreJuego: '',
    generoJuego: '',
    plataformaJuego: '',
  });
  getGames() {
    return of(dummyGames);
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let gameService: GameService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: GameService, useClass: MockGameService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    gameService = TestBed.inject(GameService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call GameService.getGames on init', () => {
    const spy = spyOn(gameService, 'getGames').and.callThrough();

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should filter games on init', () => {
    const spy = spyOn(component, 'filterGames');

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should change page and filter games when calling nextPage', () => {
    const spy = spyOn(component, 'filterGames');
    const initialPage = component.currentPage;

    component.nextPage();

    expect(component.currentPage).toBe(initialPage + 1);
    expect(spy).toHaveBeenCalled();
  });

  it('should change page and filter games when calling previousPage and current page is greater than 0', () => {
    component.currentPage = 1; // Asegurarse de que la página actual es mayor que 0
    const spy = spyOn(component, 'filterGames');
    const initialPage = component.currentPage;

    component.previousPage();

    expect(component.currentPage).toBe(initialPage - 1);
    expect(spy).toHaveBeenCalled();
  });

  it('should not change page when calling previousPage and current page is 0', () => {
    component.currentPage = 0; // Asegurarse de que la página actual es 0
    const spy = spyOn(component, 'filterGames');

    component.previousPage();

    expect(component.currentPage).toBe(0);
    expect(spy).not.toHaveBeenCalled();
  });
});
