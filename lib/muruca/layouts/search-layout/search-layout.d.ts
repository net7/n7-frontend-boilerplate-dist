import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
export declare class MrSearchLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private router;
    private activatedRoute;
    hostEmit$: Subject<any>;
    guestEmit$: Subject<any>;
    constructor(layoutsConfiguration: LayoutsConfigurationService, router: Router, activatedRoute: ActivatedRoute);
    protected initPayload(): {
        router: Router;
        activatedRoute: ActivatedRoute;
        hostEmit$: Subject<any>;
        guestEmit$: Subject<any>;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
