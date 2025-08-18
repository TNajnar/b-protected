import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TranslateModule } from '@ngx-translate/core';

import { SectionId } from '@common/enums';

@Component({
    selector: 'app-pricing',
    standalone: true,
    imports: [ButtonModule, CardModule, TranslateModule],
    templateUrl: './pricing.component.html'
})
export class PricingComponent {
    readonly SectionId = SectionId;
}
