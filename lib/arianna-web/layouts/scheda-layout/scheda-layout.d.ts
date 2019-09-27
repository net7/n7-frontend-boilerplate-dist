import { OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services';
import { CommunicationService } from '../../../common/services';
export declare class AwSchedaLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private router;
    private route;
    private configuration;
    private layoutsConfiguration;
    private mainState;
    private titleService;
    private communication;
    constructor(router: Router, route: ActivatedRoute, configuration: ConfigurationService, layoutsConfiguration: LayoutsConfigurationService, mainState: MainStateService, titleService: Title, communication: CommunicationService);
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     */
    protected initPayload(): {
        configuration: ConfigurationService;
        mainState: MainStateService;
        router: Router;
        route: ActivatedRoute;
        titleService: Title;
        communication: CommunicationService;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
