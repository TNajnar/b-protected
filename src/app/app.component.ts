import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/our-services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from "./components/banner/banner.component";
import { FooterComponent } from './components/footer/footer.component';
import { PricingComponent } from "./components/pricing/pricing.component";

@Component({
    selector: 'app-root',
    imports: [
    RouterOutlet,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    PricingComponent
],
    templateUrl: './app.component.html',
})
export class AppComponent {}
