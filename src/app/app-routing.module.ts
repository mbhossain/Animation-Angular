import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'open-close', component: OpenCloseComponent, data: { animation: 'openClosePage' } },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'status', component: StatusSliderComponent, data: { animation: 'statusPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
