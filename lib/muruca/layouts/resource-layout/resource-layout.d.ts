import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrLayoutStateService } from '../../services/layout-state.service';
import { MrResourceModalService } from '../../services/resource-modal.service';
import * as i0 from "@angular/core";
export declare class MrResourceLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private activatedRoute;
    private configuration;
    private communication;
    private mainState;
    private route;
    private router;
    layoutState: MrLayoutStateService;
    modalService: MrResourceModalService;
    private configId;
    constructor(layoutsConfiguration: LayoutsConfigurationService, activatedRoute: ActivatedRoute, configuration: ConfigurationService, communication: CommunicationService, mainState: MainStateService, route: ActivatedRoute, router: Router, layoutState: MrLayoutStateService, modalService: MrResourceModalService);
    protected initPayload(): {
        configId: string;
        configuration: ConfigurationService;
        communication: CommunicationService;
        mainState: MainStateService;
        layoutState: MrLayoutStateService;
        modalService: MrResourceModalService;
        options: any;
        route: ActivatedRoute;
        router: Router;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadWidgets(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrResourceLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrResourceLayoutComponent, "mr-resource-layout", never, {}, {}, never, never>;
}
