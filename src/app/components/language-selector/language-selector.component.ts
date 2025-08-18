import { Component, inject, signal, computed, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

type LangKey = 'cs' | 'en';
interface Language {
    code: LangKey;
    name: string;
    flag: string;
}

const LANGUAGES = {
    'cs': {
        code: 'cs',
        name: 'Čeština',
        flag: '/svg/czech-flag.svg'
    },
    'en': {
        code: 'en',
        name: 'English',
        flag: '/svg/uk-flag.svg'
    },
} as const satisfies Record<LangKey, Language>;

@Component({
    selector: 'app-language-selector',
    imports: [Menu, ButtonModule],
    templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent {
    @ViewChild('menu') readonly menu!: Menu;

    protected _currentLang = signal<string>('cs');

    private translateService = inject(TranslateService);

    protected readonly _currentLanguage = computed<Language>(() => {
        return LANGUAGES[this._currentLang() as keyof typeof LANGUAGES] || LANGUAGES.cs;
    });

    protected readonly _menuItems = computed<MenuItem[]>(() => {
        return Object.values(LANGUAGES).map(lang => ({
            label: lang.name,
            command: () => this._switchLanguage(lang.code),
            data: { flag: lang.flag, code: lang.code }
        }));
    });

    constructor() {
        this._currentLang.set(this.translateService.getCurrentLang() || 'cs');
    }

    protected _toggleMenu(event: Event): void {
        this.menu.toggle(event);
    }

    private _switchLanguage(langCode: string): void {
        this._currentLang.set(langCode);
        this.translateService.use(langCode);
    }
}
