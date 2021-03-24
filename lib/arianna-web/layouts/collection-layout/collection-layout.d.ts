import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
export declare class AwCollectionLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private communication;
    private layoutsConfiguration;
    private configuration;
    private route;
    constructor(communication: CommunicationService, layoutsConfiguration: LayoutsConfigurationService, configuration: ConfigurationService, route: ActivatedRoute);
    protected initPayload(): {
        communication: CommunicationService;
        layoutsConfiguration: LayoutsConfigurationService;
        configuration: ConfigurationService;
        route: ActivatedRoute;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
