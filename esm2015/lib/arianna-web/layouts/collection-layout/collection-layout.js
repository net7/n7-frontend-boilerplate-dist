import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
// import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../../common/models/abstract-layout';
// import { ConfigurationService } from '../../../common/services/configuration.service';
// import { MainStateService } from '../../../common/services/main-state.service';
import { AwCollectionLayoutConfig as config } from './collection-layout.config';
import { CommunicationService } from '../../../common/services/communication.service';
let AwCollectionLayoutComponent = class AwCollectionLayoutComponent extends AbstractLayout {
    constructor(communication) {
        super(config);
        this.communication = communication;
    }
    initPayload() {
        return {
            communication: this.communication
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
AwCollectionLayoutComponent.ctorParameters = () => [
    { type: CommunicationService }
];
AwCollectionLayoutComponent = __decorate([
    Component({
        selector: 'n7-collection-layout',
        template: "<div class=\"collection-layout\"\r\n     *ngIf=\"lb.dataSource as dataSource\">\r\n    <n7-inner-title [data]=\"dataSource.innerTitleData\">\r\n    </n7-inner-title>\r\n\r\n    <section class=\"n7-grid-3\" *ngIf=\"dataSource.loadedCollections\">\r\n        <ng-container *ngFor=\"let item of dataSource.loadedCollections.value\">\r\n            <n7-item-preview [data]=\"item\">\r\n            </n7-item-preview>\r\n        </ng-container>\r\n    </section>\r\n    \r\n    <section>\r\n        <button class=\"n7-btn\" (click)=\"dataSource.loadMore()\">Vedi altri</button>\r\n    </section>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [CommunicationService])
], AwCollectionLayoutComponent);
export { AwCollectionLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QscURBQXFEO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSx5RkFBeUY7QUFDekYsa0ZBQWtGO0FBQ2xGLE9BQU8sRUFBRSx3QkFBd0IsSUFBSSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQU10RixJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUE0QixTQUFRLGNBQWM7SUFDN0QsWUFDVSxhQUFtQztRQUUzQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFGTixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7SUFHN0MsQ0FBQztJQUVTLFdBQVc7UUFDbkIsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUNGLENBQUE7O1lBbEIwQixvQkFBb0I7O0FBRmxDLDJCQUEyQjtJQUp2QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLHdtQkFBdUM7S0FDeEMsQ0FBQztxQ0FHeUIsb0JBQW9CO0dBRmxDLDJCQUEyQixDQW9CdkM7U0FwQlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBpbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcclxuLy8gaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuLy8gaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBd0NvbGxlY3Rpb25MYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9jb2xsZWN0aW9uLWxheW91dC5jb25maWcnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1jb2xsZWN0aW9uLWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbGxlY3Rpb24tbGF5b3V0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBd0NvbGxlY3Rpb25MYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb25cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==