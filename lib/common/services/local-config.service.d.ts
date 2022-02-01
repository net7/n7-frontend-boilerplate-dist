import { ConfigurationService } from './configuration.service';
import * as i0 from "@angular/core";
export declare class LocalConfigService {
    private config;
    constructor(config: ConfigurationService);
    load(config: any): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocalConfigService>;
}
