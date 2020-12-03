import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrLayoutStateService } from '../../services/layout-state.service';
export declare class MrTimelineLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private route;
    private configuration;
    private communication;
    private mainState;
    layoutState: MrLayoutStateService;
    private configId;
    constructor(layoutsConfiguration: LayoutsConfigurationService, route: ActivatedRoute, configuration: ConfigurationService, communication: CommunicationService, mainState: MainStateService, layoutState: MrLayoutStateService);
    protected initPayload(): {
        configId: string;
        mainState: MainStateService;
        configuration: ConfigurationService;
        communication: CommunicationService;
        layoutState: MrLayoutStateService;
        route: ActivatedRoute;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
