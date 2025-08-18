import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-pricing',
    standalone: true,
    imports: [CommonModule, ButtonModule, CardModule],
    templateUrl: './pricing.component.html'
})
export class PricingComponent { }
