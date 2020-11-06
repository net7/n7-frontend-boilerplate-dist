import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { MrInputTextDS } from '../../data-sources/form/input-text.ds';
import { MrInputEventHandler, MrChangedParams } from '../../interfaces/form.interface';
export declare class MrInputTextEH extends EventHandler implements MrInputEventHandler {
    changed$: Subject<MrChangedParams>;
    dataSource: MrInputTextDS;
    listen(): void;
}
