export interface ICommunicationProvider {
    request$(requestId: string, options: any): any;
}
