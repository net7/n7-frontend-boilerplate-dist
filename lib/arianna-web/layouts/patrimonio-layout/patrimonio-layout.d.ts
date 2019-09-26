import { OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services';
export declare class AwPatrimonioLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private router;
    private configuration;
    private layoutsConfiguration;
    private mainState;
    private titleService;
    constructor(router: Router, configuration: ConfigurationService, layoutsConfiguration: LayoutsConfigurationService, mainState: MainStateService, titleService: Title);
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     */
    protected initPayload(): {
        configuration: ConfigurationService;
        mainState: MainStateService;
        router: Router;
        titleService: Title;
        options: any;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
}
