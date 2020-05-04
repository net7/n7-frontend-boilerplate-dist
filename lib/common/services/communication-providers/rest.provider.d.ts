import { HttpClient } from '@angular/common/http';
import { CommunicationProvider } from './communication-provider.interface';
export declare class RestProvider implements CommunicationProvider {
    private http;
    constructor(http: HttpClient);
    request$(providerConfig: any, requestId: any, options?: any): any;
}
