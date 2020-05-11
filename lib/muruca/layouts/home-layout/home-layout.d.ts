import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
export declare class MrHomeLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private activatedRoute;
    private configuration;
    private communication;
    private configId;
    constructor(layoutsConfiguration: LayoutsConfigurationService, activatedRoute: ActivatedRoute, configuration: ConfigurationService, communication: CommunicationService);
    protected initPayload(): {
        configId: string;
        configuration: ConfigurationService;
        communication: CommunicationService;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadWidgets(): void;
}
