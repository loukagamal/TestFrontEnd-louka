import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: async () => await import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'restaurants',
        loadChildren: async () => await import('../restaurants/restaurants.module').then((m) => m.RestaurantsModule),
      }
    
     
    ],
  },
  { path: '**', redirectTo: '/app/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
