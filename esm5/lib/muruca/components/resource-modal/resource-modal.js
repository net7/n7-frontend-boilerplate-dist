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
            template: "<div *ngIf=\"status !== 'IDLE'\" class=\"mr-resource mr-resource-modal mr-layout\" [ngClass]=\"{\n        'is-loading': status === 'LOADING',\n        'is-error': status === 'ERROR'\n      }\">\n    <div class=\"mr-resource-modal__overlay\" (click)=\"onClose($event.target)\">\n        <div class=\"mr-resource-modal__container\">\n            <!-- RESOURCE MODAL CLOSE BTN -->\n            <div class=\"mr-resource__close\">\n                <a (click)=\"onClose()\"><span class=\"n7-icon-close\"></span></a>\n            </div>\n        \n            <!-- RESOURCE MODAL CONTENT -->\n            <ng-container [ngSwitch]=\"status\">\n                <!-- loading -->\n                <ng-container *ngSwitchCase=\"'LOADING'\">\n                    <div class=\"mr-layout__loader\">\n                        <n7-loader></n7-loader>\n                    </div>\n                </ng-container>\n        \n                <!-- error -->\n                <ng-container *ngSwitchCase=\"'ERROR'\">\n                    <div class=\"mr-layout__error\">\n                        <h2>{{ errorTitle }}</h2>\n                        <p>{{ errorDescription }}</p>\n                    </div>\n                </ng-container>\n        \n                <!-- success -->\n                <ng-container *ngSwitchCase=\"'SUCCESS'\">\n                    <ng-container *ngIf=\"config.sections as sections\">\n                        <!-- Pass the list of blocks to render to the block template -->\n                        <div class=\"mr-resource__top\">\n                            <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.top }\"></ng-container>\n                        </div>\n                        <div class=\"mr-resource__content mr-side-margin\">\n                            <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.content }\"></ng-container>\n                        </div>\n                    </ng-container>\n                </ng-container>\n        \n            </ng-container>\n        </div>\n    </div>\n</div>\n\n<ng-template #blocks let-list>\n    <ng-container *ngFor=\"let section of list\">\n        <section *ngIf=\"widgets[section.id].ds && (widgets[section.id].ds.out$ | async)\"\n            class=\"{{ 'mr-resource__section mr-resource__' + section.type }}\">\n            <ng-container [ngSwitch]=\"section.type\">\n\n                <!-- INNER TITLE -->\n                <ng-container *ngSwitchCase=\"'title'\">\n                    <div class=\"mr-resource__title-content mr-side-margin\">\n                        <n7-inner-title [data]=\"widgets[section.id].ds.out$ | async\">\n                        </n7-inner-title>\n                    </div>\n                </ng-container>\n\n                <!-- METADATA VIEWER -->\n                <ng-container *ngSwitchCase=\"'metadata'\">\n                    <div class=\"mr-resource__metadata-content\">\n                        <h3 *ngIf=\"section.title\" class=\"mr-resource__section-title mr-resource__metadata-title\">\n                            {{ section.title }}\n                        </h3>\n                        <mr-read-more [data]=\"section.readmore\">\n                            <n7-metadata-viewer [data]=\"widgets[section.id].ds.out$ | async\">\n                            </n7-metadata-viewer>\n                        </mr-read-more>\n                    </div>\n                </ng-container>\n\n                <!-- COLLECTION -->\n                <ng-container *ngSwitchCase=\"'collection'\">\n                    <ng-container *ngIf=\"widgets[section.id].ds.out$ | async as collection$\">\n                        <div *ngIf=\"collection$.items?.length > 0\" class=\"mr-resource__collection-content\">\n                            <h3 *ngIf=\"section.title\" class=\"mr-resource__section-title\">\n                                {{ section.title }}\n                            </h3>\n                            <div\n                                class=\"mr-resource__collection-grid {{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\n                                <n7-item-preview *ngFor=\"let item of collection$?.items\" [data]=\"item\">\n                                </n7-item-preview>\n                            </div>\n                        </div>\n                    </ng-container>\n                </ng-container>\n\n                <!-- ITEM PREVIEW -->\n                <ng-container *ngSwitchCase=\"'preview'\">\n                    <h3 *ngIf=\"section.title\" class=\"mr-resource__section-title mr-resource__preview-title\">\n                        {{ section.title }}\n                    </h3>\n                    <n7-item-preview [data]=\"widgets[section.id].ds.out$ | async\">\n                    </n7-item-preview>\n                </ng-container>\n\n            </ng-container>\n        </section>\n    </ng-container>\n</ng-template>\n"
        }),
        __metadata("design:paramtypes", [Router,
            MrResourceModalService])
    ], MrResourceModalComponent);
    return MrResourceModalComponent;
}());
export { MrResourceModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2NvbXBvbmVudHMvcmVzb3VyY2UtbW9kYWwvcmVzb3VyY2UtbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTVGLE9BQU8sRUFDTCxjQUFjLEVBQ2QsY0FBYyxFQUNkLGVBQWUsRUFDZixZQUFZLEdBQ2IsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixJQUFNLGNBQWMsR0FBRztJQUNyQixVQUFVLEVBQUUsY0FBYztJQUMxQixRQUFRLEVBQUUsWUFBWTtJQUN0QixPQUFPLEVBQUUsZUFBZTtJQUN4QixLQUFLLEVBQUUsY0FBYztDQUN0QixDQUFDO0FBTUY7SUFpQkUsa0NBQ1UsTUFBYyxFQUNkLFlBQW9DO1FBRHBDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBd0I7UUFsQnRDLGFBQVEsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QyxXQUFNLEdBQWdCLE1BQU0sQ0FBQztRQUk3QixZQUFPLEdBSVYsRUFBRSxDQUFDO1FBRUEsZUFBVSxHQUFHLEVBQUUsQ0FBQywyQkFB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QW1Ca0IsTUFBTTtZQUNBLHNCQUFzQjtPQW5CbkMsd0JBQXdCLENBa0ZwQztJQUFELCtCQUFDO0NBQUEsQUFsRkQsSUFrRkM7U0FsRlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE1vZGFsU3RhdHVzLCBNclJlc291cmNlTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVzb3VyY2UtbW9kYWwuc2VydmljZSc7XG5cbmltcG9ydCB7XG4gIE1yQ29sbGVjdGlvbkRTLFxuICBNcklubmVyVGl0bGVEUyxcbiAgTXJJdGVtUHJldmlld0RTLFxuICBNck1ldGFkYXRhRFMsXG59IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XG5cbmNvbnN0IERBVEFTT1VSQ0VfTUFQID0ge1xuICBjb2xsZWN0aW9uOiBNckNvbGxlY3Rpb25EUyxcbiAgbWV0YWRhdGE6IE1yTWV0YWRhdGFEUyxcbiAgcHJldmlldzogTXJJdGVtUHJldmlld0RTLFxuICB0aXRsZTogTXJJbm5lclRpdGxlRFMsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1yZXNvdXJjZS1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNvdXJjZS1tb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwdWJsaWMgc3RhdHVzOiBNb2RhbFN0YXR1cyA9ICdJRExFJztcblxuICBwdWJsaWMgY29uZmlnOiBhbnk7XG5cbiAgcHVibGljIHdpZGdldHM6IHtcbiAgICBbaWQ6IHN0cmluZ106IHtcbiAgICAgIGRzOiBhbnk7XG4gICAgfTtcbiAgfSA9IHt9O1xuXG4gIHB1YmxpYyBlcnJvclRpdGxlID0gX3QoJ2dsb2JhbCNsYXlvdXRfZXJyb3JfdGl0bGUnKTtcblxuICBwdWJsaWMgZXJyb3JEZXNjcmlwdGlvbiA9IF90KCdnbG9iYWwjbGF5b3V0X2Vycm9yX2Rlc2NyaXB0aW9uJyk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTXJSZXNvdXJjZU1vZGFsU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnN0YXRlJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoeyBzdGF0dXMsIGNvbmZpZywgcmVzcG9uc2UgfSkgPT4ge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG5cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ1NVQ0NFU1MnKSB7XG4gICAgICAgICAgdGhpcy5sb2FkV2lkZ2V0cyhjb25maWcsIHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvLyBvbiByb3V0ZXIgY2hhbmdlIGNsb3NlXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICBmaWx0ZXIoKCkgPT4gIWlzRW1wdHkodGhpcy53aWRnZXRzKSksXG4gICAgICBmaWx0ZXIoKGV2ZW50KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyByZXNldFxuICAgIHRoaXMub25DbG9zZSgpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICB9XG5cbiAgb25DbG9zZSh0YXJnZXQ/OiB7IGNsYXNzTmFtZTogc3RyaW5nIH0pIHtcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5jbGFzc05hbWUgIT09ICdtci1yZXNvdXJjZS1tb2RhbF9fb3ZlcmxheScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy53aWRnZXRzID0ge307XG4gICAgdGhpcy5tb2RhbFNlcnZpY2UuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFdpZGdldHMoY29uZmlnLCByZXNwb25zZSkge1xuICAgIGNvbnN0IHsgdG9wLCBjb250ZW50IH0gPSBjb25maWcuc2VjdGlvbnM7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSB0b3AuY29uY2F0KGNvbnRlbnQpO1xuICAgIGlmIChzZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoeyBpZCwgdHlwZSwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5zZWN0aW9uc1tpZF07XG4gICAgICAgIHRoaXMud2lkZ2V0c1tpZF0gPSB7XG4gICAgICAgICAgZHM6IG5ldyBEQVRBU09VUkNFX01BUFt0eXBlXSgpXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gdXBkYXRlIG9wdGlvbnNcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICB0aGlzLndpZGdldHNbaWRdLmRzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIGRhdGFcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICB0aGlzLndpZGdldHNbaWRdLmRzLnVwZGF0ZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=