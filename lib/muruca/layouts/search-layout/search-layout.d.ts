import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { CommunicationService } from '../../../common/services/communication.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MrSearchService } from '../../services/search.service';
export declare class MrSearchLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private router;
    private activatedRoute;
    private communication;
    private configuration;
    private searchService;
    private configId;
    hostEmit$: Subject<any>;
    guestEmit$: Subject<any>;
    constructor(layoutsConfiguration: LayoutsConfigurationService, router: Router, activatedRoute: ActivatedRoute, communication: CommunicationService, configuration: ConfigurationService, searchService: MrSearchService);
    protected initPayload(): {
        configId: string;
        configuration: ConfigurationService;
        router: Router;
        activatedRoute: ActivatedRoute;
        communication: CommunicationService;
        searchService: MrSearchService;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
