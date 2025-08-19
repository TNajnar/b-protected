import { Component, signal, inject } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { PrimeIcons } from 'primeng/api';

import { ScrollService } from 'services/scroll.service';
import { HamburgerButtonComponent } from '../hamburger-button/hamburger-button.component';
import { NAVIGATION_ITEMS } from '@common/constants';

@Component({
    selector: 'app-hamburger-menu',
    imports: [NgOptimizedImage, NgClass, TranslatePipe, ButtonModule, HamburgerButtonComponent],
    templateUrl: './hamburger-menu.component.html',
    host: {
        class: 'block lg:hidden'
    },
})
export class HamburgerMenuComponent {
    readonly PrimeIcons = PrimeIcons;
    protected readonly NAVIGATION_ITEMS = NAVIGATION_ITEMS;

    protected _isMenuOpen = signal(false);

    private _scrollService = inject(ScrollService);

    protected _toggleMenu(): void {
        this._isMenuOpen.set(!this._isMenuOpen());

        if (!document?.body) {
            return;
        }

        document.documentElement.classList[this._isMenuOpen() ? 'add' : 'remove']('scroll-locked');
    }

    protected _closeMenu(): void {
        this._isMenuOpen.set(false);

        if (!document?.body) {
            return;
        }

        document.documentElement.classList.remove('scroll-locked');
    }

    protected _onScroll(sectionId: string): void {
        this._scrollService.scrollToElement(sectionId);
        this._closeMenu();
    }
}
