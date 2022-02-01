import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import * as i0 from "@angular/core";
export declare class MrAdvancedSearchLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private router;
    private activatedRoute;
    private mainState;
    private configuration;
    private configId;
    constructor(router: Router, activatedRoute: ActivatedRoute, mainState: MainStateService, configuration: ConfigurationService, layoutsConfiguration: LayoutsConfigurationService);
    protected initPayload(): {
        configId: string;
        configuration: ConfigurationService;
        mainState: MainStateService;
        router: Router;
        activatedRoute: ActivatedRoute;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrAdvancedSearchLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrAdvancedSearchLayoutComponent, "mr-advanced-search-layout", never, {}, {}, never, never>;
}
