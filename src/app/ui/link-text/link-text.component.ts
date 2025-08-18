import { Component, ElementRef, inject, Input, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { Tooltip } from 'primeng/tooltip';

@Component({
    selector: 'ui-link-text',
    imports: [NgClass, Tooltip],
    template: `
        <a
            class="inline-block truncate cursor-pointer align-bottom hover:text-blue-500 hover:underline text-primary-gray"
            [ngClass]="maxWidth"
            [href]="href"
            [pTooltip]="showTooltip() ? tooltip : undefined"
            [target]="target"
        >
            <ng-content />
        </a>
    `,
    standalone: true,
})
export class LinkTextComponent {
    showTooltip = signal<boolean>(false);

    @Input({ required: true }) href: string = '';
    @Input({ required: false }) tooltip?: string = '';
    @Input({ required: false }) target?: string = '_blank';
    @Input({ required: false }) maxWidth?: string = '';

    private _element = inject(ElementRef);

    ngAfterViewInit(): void {
        const anchorElement = this._element.nativeElement.querySelector('a');

        if (anchorElement) {
            this.showTooltip.set(anchorElement.offsetWidth < anchorElement.scrollWidth);
        }
    }
}
