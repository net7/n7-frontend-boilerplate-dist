import { EventHandler } from '@n7-frontend/core';
import { AwSchedaPdfDS } from '../data-sources';
export declare class AwSchedaPdfEH extends EventHandler {
    dataSource: AwSchedaPdfDS;
    listen(): void;
}
