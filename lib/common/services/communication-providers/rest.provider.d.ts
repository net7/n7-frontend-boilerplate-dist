import { HttpClient } from '@angular/common/http';
import { CommunicationProvider } from './communication-provider.interface';
import * as i0 from "@angular/core";
export declare class RestProvider implements CommunicationProvider {
    private http;
    constructor(http: HttpClient);
    request$(providerConfig: any, requestId: any, options?: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestProvider, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RestProvider>;
}
