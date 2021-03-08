import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { _t } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';
import { isEmpty } from 'lodash';
import { ModalStatus, MrResourceModalService } from '../../services/resource-modal.service';
import { MrCollectionDS, MrInnerTitleDS, MrItemPreviewDS, MrMetadataDS, } from '../../data-sources';
var DATASOURCE_MAP = {
    collection: MrCollectionDS,
    metadata: MrMetadataDS,
    preview: MrItemPreviewDS,
    title: MrInnerTitleDS,
};
var MrResourceModalComponent = /** @class */ (function () {
    function MrResourceModalComponent(router, modalService) {
        this.router = router;
        this.modalService = modalService;
        this.destroy$ = new Subject();
        this.status = 'IDLE';
        this.widgets = {};
        this.errorTitle = _t('global#layout_error_title');
        this.errorDescription = _t('global#layout_error_description');
    }
    MrResourceModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modalService.state$
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (_a) {
            var status = _a.status, config = _a.config, response = _a.response;
            _this.status = status;
            _this.config = config;
            if (status === 'SUCCESS') {
                _this.loadWidgets(config, response);
            }
        });
        // on router change close
        this.router.events.pipe(takeUntil(this.destroy$), filter(function () { return !isEmpty(_this.widgets); }), filter(function (event) { return event instanceof NavigationStart; })).subscribe(function () {
            _this.onClose();
        });
    };
    MrResourceModalComponent.prototype.ngOnDestroy = function () {
        // reset
        this.onClose();
        this.destroy$.next();
    };
    MrResourceModalComponent.prototype.onClose = function (target) {
        if (target && target.className !== 'mr-resource-modal__overlay') {
            return;
        }
        this.widgets = {};
        this.modalService.close();
    };
    MrResourceModalComponent.prototype.loadWidgets = function (config, response) {
        var _this = this;
        var _a = config.sections, top = _a.top, content = _a.content;
        var sections = top.concat(content);
        if (sections) {
            sections.forEach(function (_a) {
                var id = _a.id, type = _a.type, options = _a.options;
                var data = response.sections[id];
                _this.widgets[id] = {
                    ds: new DATASOURCE_MAP[type]()
                };
                // update options
                if (options) {
                    _this.widgets[id].ds.options = options;
                }
                // update data
                if (data) {
                    _this.widgets[id].ds.update(data);
                }
            });
        }
    };
    MrResourceModalComponent.ctorParameters = function () { return [
        { type: Router },
        { type: MrResourceModalService }
    ]; };
    MrResourceModalComponent = __decorate([
        Component({
            selector: 'mr-resource-modal',
            template: "<div *ngIf=\"status !== 'IDLE'\" class=\"mr-modal mr-resource-modal\" [ngClass]=\"{\r\n        'is-loading': status === 'LOADING',\r\n        'is-error': status === 'ERROR'\r\n      }\">\r\n    <div class=\"mr-modal__overlay\" (click)=\"onClose($event.target)\">\r\n        <div class=\"mr-modal__window mr-resource-modal__window\">\r\n            <ng-container [ngSwitch]=\"status\">\r\n\r\n                <!-- Loading -->\r\n                <ng-container *ngSwitchCase=\"'LOADING'\">\r\n                    <div class=\"mr-modal__loader\">\r\n                        <n7-loader></n7-loader>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- Error -->\r\n                <ng-container *ngSwitchCase=\"'ERROR'\">\r\n\r\n                    <div class=\"mr-modal__header mr-resource-modal__header\">\r\n                        <h2 class=\"mr-modal__header-title\">\r\n                            {{ errorTitle }}\r\n                        </h2>\r\n                        <div class=\"mr-modal__close\">\r\n                            <a class=\"mr-modal__close-link\" (click)=\"onClose()\"><span class=\"n7-icon-close\"></span></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mr-modal__content\">\r\n                        <p class=\"mr-modal__error-text\">{{ errorDescription }}</p>\r\n                    </div>\r\n\r\n                </ng-container>\r\n\r\n                <!-- Success -->\r\n                <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n                    \r\n                    <div class=\"mr-modal__header mr-resource-modal__header\">\r\n                        <ng-container *ngIf=\"config.sections as sections\">\r\n                            <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.top }\"></ng-container>\r\n                        </ng-container>\r\n                        <div class=\"mr-modal__close\">\r\n                            <a class=\"mr-modal__close-link\" (click)=\"onClose()\"><span class=\"n7-icon-close\"></span></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mr-modal__content mr-resource-modal__content\">\r\n                        <ng-container *ngIf=\"config.sections as sections\">\r\n                            <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.content }\"></ng-container>                            \r\n                        </ng-container>\r\n                    </div>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #blocks let-list>\r\n    <ng-container *ngFor=\"let section of list\">\r\n        <section *ngIf=\"widgets[section.id].ds && (widgets[section.id].ds.out$ | async)\"\r\n            class=\"{{ 'mr-resource__section mr-resource__' + section.type }}\">\r\n            <ng-container [ngSwitch]=\"section.type\">\r\n\r\n                <!-- INNER TITLE -->\r\n                <ng-container *ngSwitchCase=\"'title'\">\r\n                    <n7-inner-title [data]=\"widgets[section.id].ds.out$ | async\">\r\n                    </n7-inner-title>\r\n                </ng-container>\r\n\r\n                <!-- METADATA VIEWER -->\r\n                <ng-container *ngSwitchCase=\"'metadata'\">\r\n                    <div class=\"mr-resource-modal__metadata-content\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-resource-modal__section-title mr-resource__metadata-title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <mr-read-more [data]=\"section.readmore\">\r\n                            <n7-metadata-viewer [data]=\"widgets[section.id].ds.out$ | async\">\r\n                            </n7-metadata-viewer>\r\n                        </mr-read-more>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- COLLECTION -->\r\n                <ng-container *ngSwitchCase=\"'collection'\">\r\n                    <ng-container *ngIf=\"widgets[section.id].ds.out$ | async as collection$\">\r\n                        <div *ngIf=\"collection$.items?.length > 0\" class=\"mr-resource__collection-content\">\r\n                            <h3 *ngIf=\"section.title\" class=\"mr-resource-modal__section-title\">\r\n                                {{ section.title }}\r\n                            </h3>\r\n                            <div\r\n                                class=\"mr-resource__collection-grid {{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\r\n                                <n7-item-preview *ngFor=\"let item of collection$?.items\" [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <!-- ITEM PREVIEW -->\r\n                <ng-container *ngSwitchCase=\"'preview'\">\r\n                    <h3 *ngIf=\"section.title\" class=\"mr-resource-modal__section-title\">\r\n                        {{ section.title }}\r\n                    </h3>\r\n                    <n7-item-preview [data]=\"widgets[section.id].ds.out$ | async\">\r\n                    </n7-item-preview>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n        </section>\r\n    </ng-container>\r\n</ng-template>\r\n"
        }),
        __metadata("design:paramtypes", [Router,
            MrResourceModalService])
    ], MrResourceModalComponent);
    return MrResourceModalComponent;
}());
export { MrResourceModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2NvbXBvbmVudHMvcmVzb3VyY2UtbW9kYWwvcmVzb3VyY2UtbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTVGLE9BQU8sRUFDTCxjQUFjLEVBQ2QsY0FBYyxFQUNkLGVBQWUsRUFDZixZQUFZLEdBQ2IsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixJQUFNLGNBQWMsR0FBRztJQUNyQixVQUFVLEVBQUUsY0FBYztJQUMxQixRQUFRLEVBQUUsWUFBWTtJQUN0QixPQUFPLEVBQUUsZUFBZTtJQUN4QixLQUFLLEVBQUUsY0FBYztDQUN0QixDQUFDO0FBTUY7SUFpQkUsa0NBQ1UsTUFBYyxFQUNkLFlBQW9DO1FBRHBDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBd0I7UUFsQnRDLGFBQVEsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QyxXQUFNLEdBQWdCLE1BQU0sQ0FBQztRQUk3QixZQUFPLEdBSVYsRUFBRSxDQUFDO1FBRUEsZUFBVSxHQUFHLEVBQUUsQ0FBQywyQkFB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QW1Ca0IsTUFBTTtZQUNBLHNCQUFzQjtPQW5CbkMsd0JBQXdCLENBa0ZwQztJQUFELCtCQUFDO0NBQUEsQUFsRkQsSUFrRkM7U0FsRlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBNb2RhbFN0YXR1cywgTXJSZXNvdXJjZU1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Jlc291cmNlLW1vZGFsLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHtcclxuICBNckNvbGxlY3Rpb25EUyxcclxuICBNcklubmVyVGl0bGVEUyxcclxuICBNckl0ZW1QcmV2aWV3RFMsXHJcbiAgTXJNZXRhZGF0YURTLFxyXG59IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XHJcblxyXG5jb25zdCBEQVRBU09VUkNFX01BUCA9IHtcclxuICBjb2xsZWN0aW9uOiBNckNvbGxlY3Rpb25EUyxcclxuICBtZXRhZGF0YTogTXJNZXRhZGF0YURTLFxyXG4gIHByZXZpZXc6IE1ySXRlbVByZXZpZXdEUyxcclxuICB0aXRsZTogTXJJbm5lclRpdGxlRFMsXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yLXJlc291cmNlLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVzb3VyY2UtbW9kYWwuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNclJlc291cmNlTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHB1YmxpYyBzdGF0dXM6IE1vZGFsU3RhdHVzID0gJ0lETEUnO1xyXG5cclxuICBwdWJsaWMgY29uZmlnOiBhbnk7XHJcblxyXG4gIHB1YmxpYyB3aWRnZXRzOiB7XHJcbiAgICBbaWQ6IHN0cmluZ106IHtcclxuICAgICAgZHM6IGFueTtcclxuICAgIH07XHJcbiAgfSA9IHt9O1xyXG5cclxuICBwdWJsaWMgZXJyb3JUaXRsZSA9IF90KCdnbG9iYWwjbGF5b3V0X2Vycm9yX3RpdGxlJyk7XHJcblxyXG4gIHB1YmxpYyBlcnJvckRlc2NyaXB0aW9uID0gX3QoJ2dsb2JhbCNsYXlvdXRfZXJyb3JfZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1yUmVzb3VyY2VNb2RhbFNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnN0YXRlJFxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCh7IHN0YXR1cywgY29uZmlnLCByZXNwb25zZSB9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdTVUNDRVNTJykge1xyXG4gICAgICAgICAgdGhpcy5sb2FkV2lkZ2V0cyhjb25maWcsIHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIG9uIHJvdXRlciBjaGFuZ2UgY2xvc2VcclxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgIGZpbHRlcigoKSA9PiAhaXNFbXB0eSh0aGlzLndpZGdldHMpKSxcclxuICAgICAgZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpLFxyXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uQ2xvc2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyByZXNldFxyXG4gICAgdGhpcy5vbkNsb3NlKCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xvc2UodGFyZ2V0PzogeyBjbGFzc05hbWU6IHN0cmluZyB9KSB7XHJcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5jbGFzc05hbWUgIT09ICdtci1yZXNvdXJjZS1tb2RhbF9fb3ZlcmxheScpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy53aWRnZXRzID0ge307XHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkV2lkZ2V0cyhjb25maWcsIHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCB7IHRvcCwgY29udGVudCB9ID0gY29uZmlnLnNlY3Rpb25zO1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSB0b3AuY29uY2F0KGNvbnRlbnQpO1xyXG4gICAgaWYgKHNlY3Rpb25zKSB7XHJcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goKHsgaWQsIHR5cGUsIG9wdGlvbnMgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5zZWN0aW9uc1tpZF07XHJcbiAgICAgICAgdGhpcy53aWRnZXRzW2lkXSA9IHtcclxuICAgICAgICAgIGRzOiBuZXcgREFUQVNPVVJDRV9NQVBbdHlwZV0oKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBvcHRpb25zXHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgIHRoaXMud2lkZ2V0c1tpZF0uZHMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB1cGRhdGUgZGF0YVxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICB0aGlzLndpZGdldHNbaWRdLmRzLnVwZGF0ZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=