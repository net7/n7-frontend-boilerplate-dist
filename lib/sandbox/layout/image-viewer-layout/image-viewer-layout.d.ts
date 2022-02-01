import { OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import * as i0 from "@angular/core";
export declare class SbImageViewerLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private configuration;
    private communication;
    constructor(configuration: ConfigurationService, communication: CommunicationService);
    initPayload(): {
        configuration: ConfigurationService;
        communication: CommunicationService;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SbImageViewerLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SbImageViewerLayoutComponent, "sb-image-viewer-layout", never, {}, {}, never, never>;
}
