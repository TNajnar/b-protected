import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PrimeIcons } from 'primeng/api';

import { COMPANY_CONSTANTS } from '@common/constants';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [TranslatePipe],
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    readonly PrimeIcons = PrimeIcons;
    protected readonly constants = COMPANY_CONSTANTS;

    scrollToTop() {
        const homeElement = document.getElementById('home');

        if (homeElement) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
