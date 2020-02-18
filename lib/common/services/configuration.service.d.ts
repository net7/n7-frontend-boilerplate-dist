export declare class ConfigurationService {
    private config;
    private defaults;
    constructor(config: any);
    get: (key: any) => any;
    set: (key: any, value: any) => any;
}
