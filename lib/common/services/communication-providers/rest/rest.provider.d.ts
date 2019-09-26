import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../configuration.service';
import { ICommunicationProvider } from '../communication-provider.interface';
export declare class RestProvider implements ICommunicationProvider {
    private config;
    private http;
    private providerConfig;
    constructor(config: ConfigurationService, http: HttpClient);
    request$(requestId: any, options?: any): any;
}
