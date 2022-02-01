import { OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalStatus, MrResourceModalService } from '../../services/resource-modal.service';
import * as i0 from "@angular/core";
export declare class MrResourceModalComponent implements OnInit, OnDestroy {
    private router;
    private modalService;
    private destroy$;
    status: ModalStatus;
    config: any;
    widgets: {
        [id: string]: {
            ds: any;
        };
    };
    errorTitle: string;
    errorDescription: string;
    constructor(router: Router, modalService: MrResourceModalService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClose(target?: {
        className: string;
    }): void;
    private loadWidgets;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrResourceModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrResourceModalComponent, "mr-resource-modal", never, {}, {}, never, never>;
}
