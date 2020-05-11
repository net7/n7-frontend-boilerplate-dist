import { OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
export declare class MrStaticLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private communication;
    constructor(communication: CommunicationService, layoutsConfiguration: LayoutsConfigurationService);
    protected initPayload(): {
        communication: CommunicationService;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
