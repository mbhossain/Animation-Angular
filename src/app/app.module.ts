import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { HomeComponent } from './components/home/home.component';
import { StatusSliderComponent } from './components/status-slider/status-slider.component';
import { ToggleAnimationComponent } from './components/toggle-animation/toggle-animation.component';
import { ToggleOpenCloseComponent } from './components/toggle-open-close/toggle-open-close.component';
import { EnterLeaveListComponent } from './components/enter-leave-list/enter-leave-list.component';
import { EnterLeaveListShowComponent } from './components/enter-leave-list-show/enter-leave-list-show.component';
import { AutoCalculationComponent } from './components/auto-calculation/auto-calculation.component';
import { AutoCalculationListComponent } from './components/auto-calculation-list/auto-calculation-list.component';
import { FilterComponent } from './components/filter/filter.component';
import { GroupComponent } from './components/group/group.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { InsertRemoveComponent } from './components/insert-remove/insert-remove.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    HomeComponent,
    StatusSliderComponent,
    ToggleAnimationComponent,
    ToggleOpenCloseComponent,
    EnterLeaveListComponent,
    EnterLeaveListShowComponent,
    AutoCalculationComponent,
    AutoCalculationListComponent,
    FilterComponent,
    GroupComponent,
    GroupListComponent,
    InsertRemoveComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
