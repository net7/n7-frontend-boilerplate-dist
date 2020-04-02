import { OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
export declare class MrHomeLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    constructor(layoutsConfiguration: LayoutsConfigurationService);
    protected initPayload(): {
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
