import { OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { MrSearchService } from '../../services/search.service';
import * as i0 from "@angular/core";
export declare class MrSearchFacetsLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    searchService: MrSearchService;
    constructor();
    protected initPayload(): {
        searchService: MrSearchService;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadWidgets(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrSearchFacetsLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrSearchFacetsLayoutComponent, "mr-search-facets-layout", never, { "searchService": "searchService"; }, {}, never, never>;
}
