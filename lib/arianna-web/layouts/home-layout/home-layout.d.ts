import { OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { CommunicationService } from '../../../common/services';
export declare class AwHomeLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private router;
    private configuration;
    private communication;
    private mainState;
    constructor(layoutsConfiguration: LayoutsConfigurationService, router: Router, configuration: ConfigurationService, communication: CommunicationService, mainState: MainStateService);
    protected initPayload(): {
        configuration: ConfigurationService;
        mainState: MainStateService;
        router: Router;
        communication: CommunicationService;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
