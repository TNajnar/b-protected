import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe } from '@ngx-translate/core';

import { ScrollService } from 'services/scroll.service';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { SectionId } from '@common/enums';
import { NAVIGATION_ITEMS } from '@common/constants';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports: [NgOptimizedImage, NgClass, ButtonModule, TranslatePipe, HamburgerMenuComponent, LanguageSelectorComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    protected readonly NAVIGATION_ITEMS = NAVIGATION_ITEMS;
    protected readonly SectionId = SectionId;

    protected _scrollService = inject(ScrollService);
}
