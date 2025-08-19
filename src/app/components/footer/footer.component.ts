import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { PrimeIcons } from 'primeng/api';

import { ScrollService } from 'services/scroll.service';
import { COMPANY_CONSTANTS } from '@common/constants';
import { SectionId } from '@common/enums';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [NgOptimizedImage, TranslatePipe],
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    readonly PrimeIcons = PrimeIcons;
    protected readonly SectionId = SectionId;
    protected readonly constants = COMPANY_CONSTANTS;

    protected _scrollService = inject(ScrollService);
}
