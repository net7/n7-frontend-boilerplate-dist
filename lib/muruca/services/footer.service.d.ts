import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../common/services/configuration.service';
import * as i0 from "@angular/core";
export declare class MrFooterService {
    private http;
    private configuration;
    constructor(http: HttpClient, configuration: ConfigurationService);
    load(): Promise<any>;
    private _handleResponse;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrFooterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MrFooterService>;
}
