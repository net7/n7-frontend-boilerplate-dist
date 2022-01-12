import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { CardLoader } from '../../models/card-loader';
export declare class DvCardExampleLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private configuration;
    private communication;
    private activatedRoute;
    private configId;
    private cardLoader;
    constructor(layoutsConfiguration: LayoutsConfigurationService, configuration: ConfigurationService, communication: CommunicationService, activatedRoute: ActivatedRoute);
    protected initPayload(): {
        configId: string;
        configuration: ConfigurationService;
        communication: CommunicationService;
        cardLoader: CardLoader;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
