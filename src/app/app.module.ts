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

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    HomeComponent,
    StatusSliderComponent,
    ToggleAnimationComponent,
    ToggleOpenCloseComponent,
    EnterLeaveListComponent,
    EnterLeaveListShowComponent
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
