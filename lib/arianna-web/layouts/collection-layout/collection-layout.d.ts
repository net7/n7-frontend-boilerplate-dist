import { OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
export declare class AwCollectionLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private communication;
    constructor(communication: CommunicationService);
    protected initPayload(): {
        communication: CommunicationService;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
