import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import { ApolloProvider } from './communication-providers/apollo.provider';
import { RestProvider } from './communication-providers/rest.provider';
import * as i0 from "@angular/core";
export declare class CommunicationService {
    private config;
    private apollo;
    private rest;
    private defaultProvider;
    private communicationConfig;
    constructor(config: ConfigurationService, apollo: ApolloProvider, rest: RestProvider);
    request$(requestId: any, options?: any, provider?: any): any;
    handleError(error: any, onError: any): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommunicationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CommunicationService>;
}
