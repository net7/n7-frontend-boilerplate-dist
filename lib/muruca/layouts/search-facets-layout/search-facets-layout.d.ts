import { OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { SearchFacetsConfig } from './search-facets-config';
export declare class MrSearchFacetsLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    data: SearchFacetsConfig;
    constructor();
    protected initPayload(): {
        data: SearchFacetsConfig;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadWidgets(): void;
}
