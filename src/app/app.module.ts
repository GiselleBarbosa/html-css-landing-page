import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

/* Imports Menu Navbar */
import { MatMenuModule } from '@angular/material/menu';
import { MainGridComponent } from './main-grid/main-grid.component';


/* Imports main-grid */
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterComponent } from './footer/footer.component';

import {MatButtonModule} from '@angular/material/button';
import { MainTextoComponent } from './main-texto/main-texto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainGridComponent,
    FooterComponent,
    MainTextoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatFormFieldModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
