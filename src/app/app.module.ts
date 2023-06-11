import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PackagesComponent } from './packages/packages.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {DataService} from "./services/data.service";
import{ReactiveFormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import{Routes,RouterModule} from "@angular/router";
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'packages',component:PackagesComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:HomeComponent}]
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CarouselComponent,
    PackagesComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    RouterOutlet,


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
