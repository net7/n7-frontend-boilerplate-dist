import { OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import * as i0 from "@angular/core";
export declare class MrGlossaryLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    constructor(layoutsConfiguration: LayoutsConfigurationService);
    protected initPayload(): {
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrGlossaryLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrGlossaryLayoutComponent, "mr-glossary-layout", never, {}, {}, never, never>;
}
