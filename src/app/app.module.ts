import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { FopComponent } from './fop/fop.component';
import { TariffsComponent } from './tariffs/tariffs.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstScreenComponent,
    CabinetComponent,
    AdvantagesComponent,
    FopComponent,
    TariffsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
