import { OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../models/abstract-layout';
import { ConfigurationService } from '../../services/configuration.service';
import { LayoutsConfigurationService } from '../../services/layouts-configuration.service';
import { MainStateService } from '../../services/main-state.service';
export declare class MainLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
    private router;
    private configuration;
    private layoutsConfiguration;
    private mainState;
    private titleService;
    constructor(router: Router, configuration: ConfigurationService, layoutsConfiguration: LayoutsConfigurationService, mainState: MainStateService, titleService: Title);
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
