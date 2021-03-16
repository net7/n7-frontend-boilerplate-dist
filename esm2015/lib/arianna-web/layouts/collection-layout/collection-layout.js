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
        template: "<div class=\"collection-layout\"\n     *ngIf=\"lb.dataSource as dataSource\">\n    <n7-inner-title [data]=\"dataSource.innerTitleData\">\n    </n7-inner-title>\n\n    <section class=\"n7-grid-3\" *ngIf=\"dataSource.loadedCollections\">\n        <ng-container *ngFor=\"let item of dataSource.loadedCollections.value\">\n            <n7-item-preview [data]=\"item\">\n            </n7-item-preview>\n        </ng-container>\n    </section>\n    \n    <section>\n        <button class=\"n7-btn\" (click)=\"dataSource.loadMore()\">Vedi altri</button>\n    </section>\n</div>\n"
    }),
    __metadata("design:paramtypes", [CommunicationService])
], AwCollectionLayoutComponent);
export { AwCollectionLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QscURBQXFEO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSx5RkFBeUY7QUFDekYsa0ZBQWtGO0FBQ2xGLE9BQU8sRUFBRSx3QkFBd0IsSUFBSSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQU10RixJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUE0QixTQUFRLGNBQWM7SUFDN0QsWUFDVSxhQUFtQztRQUUzQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFGTixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7SUFHN0MsQ0FBQztJQUVTLFdBQVc7UUFDbkIsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUNGLENBQUE7O1lBbEIwQixvQkFBb0I7O0FBRmxDLDJCQUEyQjtJQUp2QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLHdrQkFBdUM7S0FDeEMsQ0FBQztxQ0FHeUIsb0JBQW9CO0dBRmxDLDJCQUEyQixDQW9CdkM7U0FwQlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuLy8gaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF3Q29sbGVjdGlvbkxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL2NvbGxlY3Rpb24tbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1jb2xsZWN0aW9uLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xsZWN0aW9uLWxheW91dC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBd0NvbGxlY3Rpb25MYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZVxuICApIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb25cbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==