import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { SearchService } from '../../../common/services/search.service';
import { CommunicationService } from '../../../common/services/communication.service';
export declare class AwSearchLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private configuration;
    private layoutsConfiguration;
    private mainState;
    private communication;
    private search;
    private route;
    constructor(configuration: ConfigurationService, layoutsConfiguration: LayoutsConfigurationService, mainState: MainStateService, communication: CommunicationService, search: SearchService, route: ActivatedRoute);
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     */
    protected initPayload(): {
        configuration: ConfigurationService;
        mainState: MainStateService;
        communication: CommunicationService;
        search: SearchService;
        route: ActivatedRoute;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
