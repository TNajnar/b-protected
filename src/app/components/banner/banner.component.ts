import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe } from '@ngx-translate/core';

import { SectionId } from '@common/enums';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    imports: [NgOptimizedImage, ButtonModule, TranslatePipe],
})
export class BannerComponent {
    readonly SectionId = SectionId;

    protected _scrollTo(sectionId: SectionId): void {
        const targetElement = document.getElementById(sectionId as string);

        if (targetElement) {
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - 100; // 100px offset for header

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
}
