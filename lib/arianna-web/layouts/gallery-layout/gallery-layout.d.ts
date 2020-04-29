import { OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { CommunicationService } from '../../../common/services/communication.service';
import { SearchService } from '../../../common/services/search.service';
export declare class AwGalleryLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private router;
    private configuration;
    private titleService;
    private layoutsConfiguration;
    private mainState;
    private communication;
    private search;
    private route;
    constructor(router: Router, configuration: ConfigurationService, titleService: Title, layoutsConfiguration: LayoutsConfigurationService, mainState: MainStateService, communication: CommunicationService, search: SearchService, route: ActivatedRoute);
    protected initPayload(): {
        configuration: ConfigurationService;
        mainState: MainStateService;
        router: Router;
        route: ActivatedRoute;
        titleService: Title;
        communication: CommunicationService;
        options: any;
        search: SearchService;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
