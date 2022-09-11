import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoCalculationComponent } from './components/auto-calculation/auto-calculation.component';
import { EnterLeaveListComponent } from './components/enter-leave-list/enter-leave-list.component';
import { FilterComponent } from './components/filter/filter.component';
import { GroupComponent } from './components/group/group.component';
import { HomeComponent } from './components/home/home.component';
import { InsertRemoveComponent } from './components/insert-remove/insert-remove.component';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { QueryComponent } from './components/query/query.component';
import { StatusSliderComponent } from './components/status-slider/status-slider.component';
import { ToggleAnimationComponent } from './components/toggle-animation/toggle-animation.component';

const routes: Routes = [
  { path: '', redirectTo: '/filter', pathMatch: 'full' },
  { path: 'open-close', component: OpenCloseComponent, data: { animation: 'openClosePage' } },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'status', component: StatusSliderComponent, data: { animation: 'statusPage' } },
  { path: 'toggle', component: ToggleAnimationComponent, data: { animation: 'togglePage' } },
  { path: 'enter-leave', component: EnterLeaveListComponent, data: { animation: 'enterLeavePage' } },
  { path: 'auto-calculation', component: AutoCalculationComponent, data: { animation: 'autoPage' } },
  { path: 'filter', component: FilterComponent, data: { animation: 'filterPage' } },
  { path: 'group', component: GroupComponent, data: { animation: 'heroGroupPage' } },
  { path: 'insert-remove', component: InsertRemoveComponent, data: { animation: 'insertRemovePage' } },
  { path: 'query', component: QueryComponent, data: { animation: 'queryingPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
