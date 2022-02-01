import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<AwCollectionLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AwCollectionLayoutComponent, "n7-collection-layout", never, {}, {}, never, never>;
}
