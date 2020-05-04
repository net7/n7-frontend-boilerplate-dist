import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommunicationProvider } from './communication-provider.interface';
export declare class ApolloProvider implements CommunicationProvider {
    private http;
    constructor(http: HttpClient);
    request$(providerConfig: any, requestId: string, options: any): Observable<any>;
    private makeParamsStr;
}
