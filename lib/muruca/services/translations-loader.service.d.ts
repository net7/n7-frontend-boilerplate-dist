import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../common/services/configuration.service';
export declare class MrTranslationsLoaderService {
    private http;
    private configuration;
    constructor(http: HttpClient, configuration: ConfigurationService);
    load(langCode: string): Promise<any>;
    private _handleResponse;
}
