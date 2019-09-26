import { OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout } from '../../models/abstract-layout';
import { LayoutsConfigurationService } from '../../services/layouts-configuration.service';
export declare class Page404LayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    constructor(layoutsConfiguration: LayoutsConfigurationService);
    protected initPayload(): {
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
