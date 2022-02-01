import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../common/services/configuration.service';
import * as i0 from "@angular/core";
export declare class MrTranslationsLoaderService {
    private http;
    private configuration;
    constructor(http: HttpClient, configuration: ConfigurationService);
    load(langCode: string): Promise<any>;
    private _handleResponse;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrTranslationsLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MrTranslationsLoaderService>;
}
