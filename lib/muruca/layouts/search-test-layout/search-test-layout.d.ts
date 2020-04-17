import { OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { SearchFacetsConfig } from '../search-facets-layout/search-facets-config';
export declare class MrSearchTestLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    searchConfig: SearchFacetsConfig;
    constructor();
    protected initPayload(): {};
    ngOnInit(): void;
    ngOnDestroy(): void;
}
