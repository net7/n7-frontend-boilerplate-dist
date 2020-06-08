import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
export declare class MrStaticLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private communication;
    private route;
    constructor(communication: CommunicationService, route: ActivatedRoute, layoutsConfiguration: LayoutsConfigurationService);
    protected initPayload(): {
        communication: CommunicationService;
        route: ActivatedRoute;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
