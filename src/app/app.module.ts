import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { FeaturesComponent } from './Pages/features/features.component';
import { PricingComponent } from './Pages/pricing/pricing.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { PreLoaderComponent } from './template/pre-loader/pre-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    BlogComponent,
    ContactComponent,
    PreLoaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
