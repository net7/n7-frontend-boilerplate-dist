import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommunicationProvider } from './communication-provider.interface';
import { ConfigurationService } from '../configuration.service';
export declare class ApolloProvider implements CommunicationProvider {
    private http;
    private configuration;
    constructor(http: HttpClient, configuration: ConfigurationService);
    request$(providerConfig: any, requestId: string, options: any): Observable<any>;
    private makeParamsStr;
}
