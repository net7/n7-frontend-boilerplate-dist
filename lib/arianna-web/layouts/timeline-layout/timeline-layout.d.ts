import { OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { CommunicationService } from '../../../common/services/communication.service';
export declare class AwTimelineLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private configuration;
    private layoutsConfiguration;
    private communication;
    private mainState;
    private titleService;
    constructor(configuration: ConfigurationService, layoutsConfiguration: LayoutsConfigurationService, communication: CommunicationService, mainState: MainStateService, titleService: Title);
    protected initPayload(): {
        configuration: ConfigurationService;
        mainState: MainStateService;
        titleService: Title;
        communication: CommunicationService;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
