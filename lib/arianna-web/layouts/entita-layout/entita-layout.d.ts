import { OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { CommunicationService } from '../../../common/services/communication.service';
import * as i0 from "@angular/core";
export declare class AwEntitaLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private router;
    private route;
    private configuration;
    private layoutsConfiguration;
    private communication;
    private mainState;
    private titleService;
    constructor(router: Router, route: ActivatedRoute, configuration: ConfigurationService, layoutsConfiguration: LayoutsConfigurationService, communication: CommunicationService, mainState: MainStateService, titleService: Title);
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
    static ɵfac: i0.ɵɵFactoryDeclaration<AwEntitaLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AwEntitaLayoutComponent, "aw-entita-layout", never, {}, {}, never, never>;
}
