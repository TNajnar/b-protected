import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { PrimeIcons } from 'primeng/api';

import { COMPANY_CONSTANTS } from '@common/constants';
import { LinkTextComponent } from "@app/ui/link-text/link-text.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [ButtonModule, InputTextModule, FormsModule, TranslatePipe, LinkTextComponent],
    templateUrl: './contact.component.html'
})
export class ContactComponent {
    readonly PrimeIcons = PrimeIcons;
    protected readonly constants = COMPANY_CONSTANTS;
}
