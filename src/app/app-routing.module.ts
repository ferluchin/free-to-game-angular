import { DetailsComponent } from './components/details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilterGamesComponent } from './components/filter-games/filter-games.component';

const routes: Routes = [
  {
    path: 'games/filter',
    component: FilterGamesComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'search/:game-search',
  //   component: HomeComponent,
  // },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
