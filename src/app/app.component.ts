import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TranslatePipe, ButtonModule],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'APP.Title';
}
