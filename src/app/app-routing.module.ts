import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  // display the HeroesComponent when the URL is something like localhost:4200/heroes.
  { path: 'heroes', component: HeroesComponent },
  //a path to the DashboardComponent.
  { path: 'dashboard', component: DashboardComponent },
  // To make the (root url of) app navigate to the dashboard automatically
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //detail view by id //The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
