import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    imports: [ButtonModule, TranslatePipe],
})
export class BannerComponent {
    scrollToContact() {
        const contactElement = document.getElementById('contact');

        if (contactElement) {
            const elementPosition = contactElement.offsetTop;
            const offsetPosition = elementPosition - 100; // 100px offset for header

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    scrollToAbout() {
        const aboutElement = document.getElementById('about');

        if (aboutElement) {
            const elementPosition = aboutElement.offsetTop;
            const offsetPosition = elementPosition - 100; // 100px offset for header

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
}
