import { Component, inject, OnInit, DOCUMENT } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/our-services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from "./components/banner/banner.component";
import { FooterComponent } from './components/footer/footer.component';
import { PricingComponent } from "./components/pricing/pricing.component";

const SEO = {
    title: 'APP._SEO.Title',
    description: 'APP._SEO.Description',
    keywords: 'APP._SEO.Keywords',
    locale: 'APP._SEO.Locale',
    language: 'APP._SEO.Language',
    htmlLang: 'APP._SEO.HtmlLang'
} as const;

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        AboutComponent,
        ServicesComponent,
        ContactComponent,
        HeaderComponent,
        BannerComponent,
        FooterComponent,
        PricingComponent
    ],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    private _titleService = inject(Title);
    private _metaService = inject(Meta);
    private _translateService = inject(TranslateService);
    private _document = inject(DOCUMENT);

    ngOnInit(): void {
        // Set default language first
        this._translateService.setFallbackLang('cs');

        // Use default language if no current language is set
        if (!this._translateService.getBrowserLang()) {
            this._translateService.use('cs');
        }

        // Wait for translation to be available, then setup SEO
        this._translateService.get('APP._SEO.Title').subscribe((translation) => {
            // Only setup SEO if translation is actually loaded (not just the key returned)
            if (translation !== 'APP._SEO.Title') {
                this._setupSEO();
            }
        });

        // Subscribe to language changes
        this._translateService.onLangChange.subscribe(() => {
            this._setupSEO();
        });
    }

    private _setupSEO(): void {
        const currentLang = this._translateService.currentLang || 'cs';

        // Update HTML lang attribute
        const htmlLang = this._translateService.instant(SEO.htmlLang);
        this._document.documentElement.lang = htmlLang;

        // Update title
        const title = this._translateService.instant(SEO.title);
        this._titleService.setTitle(title);

        // Update meta tags
        const description = this._translateService.instant(SEO.description);
        const keywords = this._translateService.instant(SEO.keywords);
        const language = this._translateService.instant(SEO.language);
        const locale = this._translateService.instant(SEO.locale);

        this._metaService.updateTag({ name: 'description', content: description });
        this._metaService.updateTag({ name: 'keywords', content: keywords });
        this._metaService.updateTag({ name: 'language', content: language });

        // Update Open Graph tags
        this._metaService.updateTag({ property: 'og:title', content: title });
        this._metaService.updateTag({ property: 'og:description', content: description });
        this._metaService.updateTag({ property: 'og:locale', content: locale });

        // Update Twitter tags
        this._metaService.updateTag({ property: 'twitter:title', content: title });
        this._metaService.updateTag({ property: 'twitter:description', content: description });

        // Update canonical URL with language parameter
        const canonicalUrl = `https://b-protected.cz/?lang=${currentLang}`;
        this._metaService.updateTag({ name: 'canonical', content: canonicalUrl });

        // Update alternate language links
        this._updateAlternateLanguageLinks(currentLang);
    }

    private _updateAlternateLanguageLinks(currentLang: string): void {
        // Remove existing alternate links
        const existingLinks = this._document.querySelectorAll('link[rel="alternate"][hreflang]');
        existingLinks.forEach(link => link.remove());

        // Add new alternate links
        const head = this._document.querySelector('head');
        if (head) {
            const csLink = this._document.createElement('link');
            csLink.rel = 'alternate';
            csLink.hreflang = 'cs';
            csLink.href = 'https://b-protected.cz/?lang=cs';
            head.appendChild(csLink);

            const enLink = this._document.createElement('link');
            enLink.rel = 'alternate';
            enLink.hreflang = 'en';
            enLink.href = 'https://b-protected.cz/?lang=en';
            head.appendChild(enLink);

            const xDefaultLink = this._document.createElement('link');
            xDefaultLink.rel = 'alternate';
            xDefaultLink.hreflang = 'x-default';
            xDefaultLink.href = 'https://b-protected.cz/?lang=cs';
            head.appendChild(xDefaultLink);
        }
    }
}
