import { Component, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { CardModule } from 'primeng/card';
import { TranslatePipe } from "@ngx-translate/core";

const TRANSLATION_NS = "APP._OurServices" as const;

enum TabVariant {
    CrisisManagement = "CRISIS_MANAGEMENT",
    SoftTargetProtection = "SOFT_TARGET_PROTECTION",
    FireProtection = "FIRE_PROTECTION",
}

interface Tab {
    content: string;
    bulletPoints: string[];
    id: number;
    title: string;
    variant: TabVariant;
}

type TabTitle = Omit<Tab, 'content' | 'bulletPoints'>;

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [TranslatePipe, TabsModule, CardModule, ButtonModule],
    templateUrl: './services.component.html'
})
export class ServicesComponent {
    readonly ETabVariant = TabVariant;
    protected readonly _title!: string;

    protected _activeTab = signal<TabVariant>(TabVariant.CrisisManagement);
    protected _tabs = signal<Tab[]>([]);

    protected readonly tabTitles = computed<TabTitle[]>(() => {
        return this._tabs().map(tab => ({
            id: tab.id,
            title: tab.title,
            variant: tab.variant
        }));
    });

    protected readonly activeTabContent = computed<string>(() => {
        const activeTab = this._getActiveTab();

        return activeTab?.content || '';
    });

    protected readonly activeTabBulletPoints = computed<string[]>(() => {
        const activeTab = this._getActiveTab();

        return activeTab?.bulletPoints || [];
    });

    constructor() {
        this._title = `${TRANSLATION_NS}.Title`;

        this._tabs.set([
            {
                id: 1,
                title: `${TRANSLATION_NS}._CrisisManagement.Title`,
                variant: TabVariant.CrisisManagement,
                content: `${TRANSLATION_NS}._CrisisManagement.Description`,
                bulletPoints: [
                    `${TRANSLATION_NS}._CrisisManagement.BulletPoint1`,
                    `${TRANSLATION_NS}._CrisisManagement.BulletPoint2`,
                    `${TRANSLATION_NS}._CrisisManagement.BulletPoint3`,
                    `${TRANSLATION_NS}._CrisisManagement.BulletPoint4`,
                    `${TRANSLATION_NS}._CrisisManagement.BulletPoint5`,
                    `${TRANSLATION_NS}._CrisisManagement.BulletPoint6`,
                    `${TRANSLATION_NS}._CrisisManagement.BulletPoint7`,
                ]
            },
            {
                id: 2,
                title: `${TRANSLATION_NS}._SoftTargetProtection.Title`,
                variant: TabVariant.SoftTargetProtection,
                content: `${TRANSLATION_NS}._SoftTargetProtection.Description`,
                bulletPoints: [
                    `${TRANSLATION_NS}._SoftTargetProtection.BulletPoint1`,
                    `${TRANSLATION_NS}._SoftTargetProtection.BulletPoint2`,
                    `${TRANSLATION_NS}._SoftTargetProtection.BulletPoint3`,
                    `${TRANSLATION_NS}._SoftTargetProtection.BulletPoint4`,
                    `${TRANSLATION_NS}._SoftTargetProtection.BulletPoint5`,
                    `${TRANSLATION_NS}._SoftTargetProtection.BulletPoint6`,
                    `${TRANSLATION_NS}._SoftTargetProtection.BulletPoint7`,
                ]
            },
            {
                id: 3,
                title: `${TRANSLATION_NS}._FireProtection.Title`,
                variant: TabVariant.FireProtection,
                content: `${TRANSLATION_NS}._FireProtection.Description`,
                bulletPoints: [
                    `${TRANSLATION_NS}._FireProtection.BulletPoint1`,
                    `${TRANSLATION_NS}._FireProtection.BulletPoint2`,
                    `${TRANSLATION_NS}._FireProtection.BulletPoint3`,
                    `${TRANSLATION_NS}._FireProtection.BulletPoint4`,
                    `${TRANSLATION_NS}._FireProtection.BulletPoint5`,
                    `${TRANSLATION_NS}._FireProtection.BulletPoint6`,
                    `${TRANSLATION_NS}._FireProtection.BulletPoint7`,
                    `${TRANSLATION_NS}._FireProtection.BulletPoint8`,
                ]
            },
        ]);
    }

    protected _onTabClick(variant: TabVariant): void {
        this._activeTab.set(variant);
    }

    private _getActiveTab(): Tab | undefined {
        return this._tabs().find(tab => tab.variant === this._activeTab());
    }
}
