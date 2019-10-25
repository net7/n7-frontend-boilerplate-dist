import { OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService, LayoutsConfigurationService, MainStateService, SearchService, CommunicationService } from '../../../common/services';
export declare class AwSearchLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private configuration;
    private layoutsConfiguration;
    private mainState;
    private communication;
    private search;
    constructor(configuration: ConfigurationService, layoutsConfiguration: LayoutsConfigurationService, mainState: MainStateService, communication: CommunicationService, search: SearchService);
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
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
