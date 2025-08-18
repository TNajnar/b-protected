import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { PrimeIcons } from 'primeng/api';

import { HamburgerButtonComponent } from '../hamburger-button/hamburger-button.component';

@Component({
    selector: 'app-hamburger-menu',
    imports: [TranslatePipe, ButtonModule, HamburgerButtonComponent],
    templateUrl: './hamburger-menu.component.html',
    host: {
        class: 'block lg:hidden'
    }
})
export class HamburgerMenuComponent {
    readonly PrimeIcons = PrimeIcons;

    protected _isMenuOpen = signal(false);

    protected _toggleMenu(): void {
        this._isMenuOpen.set(!this._isMenuOpen());

        if (!document?.body) {
            return;
        };

        document.body.classList[this._isMenuOpen() ? 'add' : 'remove']('scroll-locked');
    }

    protected _closeMenu(): void {
        this._isMenuOpen.set(false);

        if (!document?.body) {
            return;
        };

        document.body.classList.remove('scroll-locked');
    }

    protected _scrollToSection(sectionId: string): void {
        const element = document.getElementById(sectionId);

        if (element) {
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - 100; // 100px offset for header

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        this._closeMenu();
    }

    protected _scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        this._closeMenu();
    }
}
