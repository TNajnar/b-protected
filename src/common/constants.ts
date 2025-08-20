import { NavigationItem } from './types';
import { SectionId } from './enums';

export const COMPANY_CONSTANTS = {
    ADDRESS: 'Růžičkova 3815/5, 669 02 Znojmo',
    PHONE: '+420 775 345 031',
    EMAIL: 'brauner@bprotected.cz',

    COMPANY_NAME: 'B-Protected Services s.r.o.',
    DIRECTOR: 'Mgr. et Mgr. Kryštof Brauner, MBA',
    ICO: '22125574',

    FACEBOOK_URL: 'https://www.facebook.com/profile.php?id=61573880346154',
    INSTAGRAM_URL: 'https://www.instagram.com/b_protected_services',

    AUTHOR_WEBSITE_URL: 'https://tomasnajnar.com',
} as const;


export const NAVIGATION_ITEMS = [
    {
        id: SectionId.HOME,
        labelKey: 'APP._Navigation.Home',
        href: '#' + SectionId.HOME
    },
    {
        id: SectionId.ABOUT,
        labelKey: 'APP._Navigation.About',
        href: '#' + SectionId.ABOUT
    },
    {
        id: SectionId.SERVICES,
        labelKey: 'APP._Navigation.Services',
        href: '#' + SectionId.SERVICES
    },
    {
        id: SectionId.PRICING,
        labelKey: 'APP._Navigation.Pricing',
        href: '#' + SectionId.PRICING
    },
    {
        id: SectionId.CONTACT,
        labelKey: 'APP._Navigation.Contact',
        href: '#' + SectionId.CONTACT
    },
] as const satisfies NavigationItem[];
