import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Material from '@primeuix/themes/material';

import { routes } from './app.routes';

const MyPreset = definePreset(Material, {
    semantic: {
        primary: {
            button: "#003f71",
            buttonHover: "#002b52"
        }
    }
});

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(),

        // Translations
        provideTranslateService({
            loader: provideTranslateHttpLoader({ prefix: './i18n/', suffix: '.json' }),
            fallbackLang: 'cs'
        }),

        // Styles
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: MyPreset,
                options: {
                    darkModeSelector: false || 'none'
                },
            }
        })
    ],
};

