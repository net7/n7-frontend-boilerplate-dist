import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { CommunicationService } from '../../../common/services/communication.service';
import { MrLayoutStateService } from '../../services/layout-state.service';
export declare class MrPostsLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private router;
    private activatedRoute;
    private mainState;
    private configuration;
    private communication;
    layoutState: MrLayoutStateService;
    private configId;
    constructor(router: Router, activatedRoute: ActivatedRoute, mainState: MainStateService, configuration: ConfigurationService, communication: CommunicationService, layoutState: MrLayoutStateService, layoutsConfiguration: LayoutsConfigurationService);
    protected initPayload(): {
        configId: string;
        configuration: ConfigurationService;
        communication: CommunicationService;
        mainState: MainStateService;
        router: Router;
        activatedRoute: ActivatedRoute;
        layoutState: MrLayoutStateService;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
