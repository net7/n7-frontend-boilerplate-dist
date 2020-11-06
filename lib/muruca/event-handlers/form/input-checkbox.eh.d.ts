import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { MrInputCheckboxDS } from '../../data-sources/form/input-checkbox.ds';
import { MrInputEventHandler, MrChangedParams } from '../../interfaces/form.interface';
export declare class MrInputCheckboxEH extends EventHandler implements MrInputEventHandler {
    changed$: Subject<MrChangedParams>;
    dataSource: MrInputCheckboxDS;
    listen(): void;
}
