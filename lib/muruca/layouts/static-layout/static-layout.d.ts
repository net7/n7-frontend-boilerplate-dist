import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
export declare class MrStaticLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private communication;
    private configuration;
    private mainState;
    private route;
    constructor(communication: CommunicationService, configuration: ConfigurationService, mainState: MainStateService, route: ActivatedRoute, layoutsConfiguration: LayoutsConfigurationService);
    protected initPayload(): {
        communication: CommunicationService;
        configuration: ConfigurationService;
        mainState: MainStateService;
        route: ActivatedRoute;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
