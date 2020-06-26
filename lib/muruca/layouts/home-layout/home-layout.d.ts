import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
export declare class MrHomeLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private activatedRoute;
    private configuration;
    private communication;
    private mainState;
    private configId;
    constructor(layoutsConfiguration: LayoutsConfigurationService, activatedRoute: ActivatedRoute, configuration: ConfigurationService, communication: CommunicationService, mainState: MainStateService);
    protected initPayload(): {
        configId: string;
        mainState: MainStateService;
        configuration: ConfigurationService;
        communication: CommunicationService;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadWidgets(): void;
}
