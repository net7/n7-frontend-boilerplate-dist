import { OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout } from '../../models/abstract-layout';
import { LayoutsConfigurationService } from '../../services/layouts-configuration.service';
import * as i0 from "@angular/core";
export declare class Page404LayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    constructor(layoutsConfiguration: LayoutsConfigurationService);
    protected initPayload(): {
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Page404LayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Page404LayoutComponent, "n7-page404-layout", never, {}, {}, never, never>;
}
