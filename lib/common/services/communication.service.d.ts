import { ConfigurationService } from './configuration.service';
import { ApolloProvider } from './communication-providers/apollo/apollo.provider';
import { RestProvider } from './communication-providers/rest/rest.provider';
import { Observable } from 'rxjs';
export declare class CommunicationService {
    private config;
    private apollo;
    private rest;
    private defaultProvider;
    private communicationConfig;
    constructor(config: ConfigurationService, apollo: ApolloProvider, rest: RestProvider);
    request$(requestId: any, options?: any, provider?: any): any;
    handleError(error: any, onError: any): Observable<any>;
}
