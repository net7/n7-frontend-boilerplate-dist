import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrResourceModalService } from '../../services/resource-modal.service';
import { MrLayoutStateService } from '../../services/layout-state.service';
import * as i0 from "@angular/core";
export declare class MrTimelineLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private route;
    private router;
    private location;
    private configuration;
    private communication;
    private mainState;
    layoutState: MrLayoutStateService;
    modalService: MrResourceModalService;
    private configId;
    constructor(layoutsConfiguration: LayoutsConfigurationService, route: ActivatedRoute, router: Router, location: Location, configuration: ConfigurationService, communication: CommunicationService, mainState: MainStateService, layoutState: MrLayoutStateService, modalService: MrResourceModalService);
    protected initPayload(): {
        configId: string;
        mainState: MainStateService;
        configuration: ConfigurationService;
        communication: CommunicationService;
        layoutState: MrLayoutStateService;
        modalService: MrResourceModalService;
        route: ActivatedRoute;
        router: Router;
        location: Location;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrTimelineLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrTimelineLayoutComponent, "mr-timeline-layout", never, {}, {}, never, never>;
}
