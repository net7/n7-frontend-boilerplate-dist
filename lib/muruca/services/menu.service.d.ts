import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../common/services/configuration.service';
import * as i0 from "@angular/core";
export declare class MrMenuService {
    private http;
    private configuration;
    private dynamicPaths;
    constructor(http: HttpClient, configuration: ConfigurationService);
    load(): Promise<any>;
    private _handleResponse;
    isDynamicPath: (path: string) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrMenuService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MrMenuService>;
}
