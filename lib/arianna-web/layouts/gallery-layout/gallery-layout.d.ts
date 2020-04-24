import { OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout } from "../../../common/models/abstract-layout";
import { ConfigurationService, LayoutsConfigurationService, MainStateService, SearchService, CommunicationService } from '../../../common/services';
import { ActivatedRoute } from '@angular/router';
export declare class AwGalleryLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private configuration;
    private layoutsConfiguration;
    private mainState;
    private communication;
    private search;
    private route;
    constructor(configuration: ConfigurationService, layoutsConfiguration: LayoutsConfigurationService, mainState: MainStateService, communication: CommunicationService, search: SearchService, route: ActivatedRoute);
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
