import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
import * as i0 from "@angular/core";
export declare class JsonConfigService {
    private http;
    private config;
    constructor(http: HttpClient, config: ConfigurationService);
    load(path: any): Promise<any>;
    private _handleResponse;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<JsonConfigService>;
}
