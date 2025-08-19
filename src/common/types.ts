import { SectionId } from './enums';

export interface NavigationItem {
  id: SectionId;
  labelKey: string;
  href: string;
}
