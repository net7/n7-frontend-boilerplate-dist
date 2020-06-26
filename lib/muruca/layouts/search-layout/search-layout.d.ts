import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { CommunicationService } from '../../../common/services/communication.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrSearchService } from '../../services/search.service';
import { MrLayoutStateService } from '../../services/layout-state.service';
export declare class MrSearchLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private router;
    private activatedRoute;
    private communication;
    private configuration;
    private searchService;
    layoutState: MrLayoutStateService;
    private mainState;
    private configId;
    constructor(layoutsConfiguration: LayoutsConfigurationService, router: Router, activatedRoute: ActivatedRoute, communication: CommunicationService, configuration: ConfigurationService, searchService: MrSearchService, layoutState: MrLayoutStateService, mainState: MainStateService);
    protected initPayload(): {
        configId: string;
        configuration: ConfigurationService;
        mainState: MainStateService;
        router: Router;
        activatedRoute: ActivatedRoute;
        communication: CommunicationService;
        searchService: MrSearchService;
        layoutState: MrLayoutStateService;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
