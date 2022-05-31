import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{
  path: 'restaurants',
  loadChildren: async () => await import('../restaurants/restaurants.module').then((m) => m.RestaurantsModule),
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
