import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
export declare class JsonConfigService {
    private http;
    private config;
    constructor(http: HttpClient, config: ConfigurationService);
    load(path: any, staticConfig?: any): Promise<any>;
    private _handleResponse;
}
