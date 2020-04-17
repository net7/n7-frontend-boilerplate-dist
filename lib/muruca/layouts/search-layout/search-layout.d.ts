import { OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { SearchService } from '../../../common/services/search.service';
export declare class MrSearchLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private search;
    constructor(layoutsConfiguration: LayoutsConfigurationService, search: SearchService);
    protected initPayload(): {
        search: SearchService;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
