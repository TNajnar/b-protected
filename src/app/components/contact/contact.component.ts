import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

import { COMPANY_CONSTANTS } from '@common/constants';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [ButtonModule, InputTextModule, FormsModule, TranslatePipe],
    templateUrl: './contact.component.html'
})
export class ContactComponent {
    protected readonly CONSTANTS = COMPANY_CONSTANTS;
}
