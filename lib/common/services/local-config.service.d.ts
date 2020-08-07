import { ConfigurationService } from './configuration.service';
export declare class LocalConfigService {
    private config;
    constructor(config: ConfigurationService);
    load(config: any): Promise<any>;
}
