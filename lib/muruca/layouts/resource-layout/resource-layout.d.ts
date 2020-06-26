import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
export declare class MrResourceLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private activatedRoute;
    private configuration;
    private communication;
    private mainState;
    private route;
    private configId;
    constructor(layoutsConfiguration: LayoutsConfigurationService, activatedRoute: ActivatedRoute, configuration: ConfigurationService, communication: CommunicationService, mainState: MainStateService, route: ActivatedRoute);
    protected initPayload(): {
        configId: string;
        configuration: ConfigurationService;
        communication: CommunicationService;
        mainState: MainStateService;
        options: any;
        route: ActivatedRoute;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadWidgets(): void;
}
