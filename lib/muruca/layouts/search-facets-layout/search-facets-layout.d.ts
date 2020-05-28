import { OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { MrSearchService } from '../../services/search.service';
export declare class MrSearchFacetsLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    searchService: MrSearchService;
    constructor();
    protected initPayload(): {
        searchService: MrSearchService;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadWidgets(): void;
}
