import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe } from '@ngx-translate/core';

import { SectionId } from '@common/enums';
import { ScrollService } from 'services/scroll.service';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    imports: [NgOptimizedImage, ButtonModule, TranslatePipe],
})
export class BannerComponent {
    readonly SectionId = SectionId;

    protected _scrollService = inject(ScrollService);
}
