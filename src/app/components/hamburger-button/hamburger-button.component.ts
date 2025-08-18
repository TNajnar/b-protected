import { Component, input, output } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
    selector: 'app-hamburger-button',
    imports: [],
    templateUrl: './hamburger-button.component.html',
    styleUrl: './hamburger-button.component.css'
})
export class HamburgerButtonComponent {
    readonly PrimeIcons = PrimeIcons;

    isOpen = input.required<boolean>();
    ariaLabel = input<string>('Toggle navigation menu');

    readonly toggle = output<void>();

    protected _onToggle(): void {
        this.toggle.emit();
    }
}
