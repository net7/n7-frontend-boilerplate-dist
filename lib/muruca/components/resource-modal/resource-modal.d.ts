import { OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalStatus, MrResourceModalService } from '../../services/resource-modal.service';
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
}
