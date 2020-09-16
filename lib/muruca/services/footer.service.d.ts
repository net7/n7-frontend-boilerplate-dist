import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../common/services/configuration.service';
export declare class MrFooterService {
    private http;
    private configuration;
    constructor(http: HttpClient, configuration: ConfigurationService);
    load(): Promise<any>;
    private _handleResponse;
}
