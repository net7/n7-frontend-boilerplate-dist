import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../common/services/configuration.service';
export declare class MrMenuService {
    private http;
    private configuration;
    private dynamicPaths;
    constructor(http: HttpClient, configuration: ConfigurationService);
    load(path: any): Promise<any>;
    private _handleResponse;
    isDynamicPath: (path: string) => boolean;
}
