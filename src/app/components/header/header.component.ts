import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe } from '@ngx-translate/core';

import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { SectionId } from '@common/enums';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports: [ButtonModule, TranslatePipe, HamburgerMenuComponent, LanguageSelectorComponent],
})
export class HeaderComponent {
    protected readonly SectionId = SectionId;

    protected _scrollToContact(): void {
        const contactElement = document.getElementById(SectionId.CONTACT);

        if (contactElement) {
            const elementPosition = contactElement.offsetTop;
            const offsetPosition = elementPosition - 100; // 100px offset for header

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
}
