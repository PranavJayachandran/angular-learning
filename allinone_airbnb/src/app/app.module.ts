import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AreasComponent } from './areas/areas.component';
import { AreaComponent } from './area/area.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroStarSolid, heroHeartSolid } from '@ng-icons/heroicons/solid';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AreasComponent, AreaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ heroStarSolid, heroHeartSolid }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
