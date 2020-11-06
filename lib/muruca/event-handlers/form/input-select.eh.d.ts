import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { MrInputSelectDS } from '../../data-sources/form/input-select.ds';
import { MrInputEventHandler, MrChangedParams } from '../../interfaces/form.interface';
export declare class MrInputSelectEH extends EventHandler implements MrInputEventHandler {
    changed$: Subject<MrChangedParams>;
    dataSource: MrInputSelectDS;
    listen(): void;
}
