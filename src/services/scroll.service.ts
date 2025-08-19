import { Injectable } from "@angular/core";

import { SectionId } from "@common/enums";

@Injectable({
    providedIn: "root",
})
export class ScrollService {
    private readonly HEADER_OFFSET = 80;

    public scrollToElement(elementId: SectionId | string): void {
        const element = document.getElementById(elementId);

        if (element) {
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - this.HEADER_OFFSET;

            window.scrollTo({
                top: Math.max(0, offsetPosition), // Ensure we don't scroll above 0
                behavior: "smooth"
            });
        }
    }
}
