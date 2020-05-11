import { OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { SearchFacetsConfig } from './search-facets-config';
export declare class MrSearchFacetsLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    data: SearchFacetsConfig;
    guestEmit$: Subject<any>;
    hostEmit$: Subject<any>;
    constructor();
    protected initPayload(): {
        data: SearchFacetsConfig;
        guestEmit$: Subject<any>;
        hostEmit$: Subject<any>;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadWidgets(): void;
}
