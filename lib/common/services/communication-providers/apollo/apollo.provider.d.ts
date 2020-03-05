import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigurationService } from '../../configuration.service';
import { CommunicationProvider } from '../communication-provider.interface';
export declare class ApolloProvider implements CommunicationProvider {
    private config;
    private http;
    private providerConfig;
    constructor(config: ConfigurationService, http: HttpClient);
    request$(requestId: any, options: any): Observable<any>;
    private makeParamsStr;
}
