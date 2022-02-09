import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class MrSearchPageDescriptionComponent {
    onClick(payload) {
        if (this.emit) {
            this.emit('click', payload);
        }
    }
}
MrSearchPageDescriptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrSearchPageDescriptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MrSearchPageDescriptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: MrSearchPageDescriptionComponent, selector: "mr-search-page-description", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"mr-search-page-description\">\r\n    <div class=\"mr-search-page-description__text\" [innerHTML]=\"data.text\"></div>\r\n    <a class=\"mr-search-page-description__link\" (click)=\"onClick(data.link.payload)\">{{ data.link.text }}</a>\r\n</div>", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrSearchPageDescriptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mr-search-page-description', template: "<div *ngIf=\"data\" class=\"mr-search-page-description\">\r\n    <div class=\"mr-search-page-description__text\" [innerHTML]=\"data.text\"></div>\r\n    <a class=\"mr-search-page-description__link\" (click)=\"onClick(data.link.payload)\">{{ data.link.text }}</a>\r\n</div>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvY29tcG9uZW50cy9zZWFyY2gtcGFnZS1kZXNjcmlwdGlvbi9zZWFyY2gtcGFnZS1kZXNjcmlwdGlvbi50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9jb21wb25lbnRzL3NlYXJjaC1wYWdlLWRlc2NyaXB0aW9uL3NlYXJjaC1wYWdlLWRlc2NyaXB0aW9uLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQWNqRCxNQUFNLE9BQU8sZ0NBQWdDO0lBSzNDLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs2SEFUVSxnQ0FBZ0M7aUhBQWhDLGdDQUFnQywwR0NkN0Msa1JBR007MkZEV08sZ0NBQWdDO2tCQUo1QyxTQUFTOytCQUNFLDRCQUE0Qjs4QkFJN0IsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCB0eXBlIFNlYXJjaFBhZ2VEZXNjcmlwdGlvbkRhdGEgPSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGxpbms6IHtcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIHBheWxvYWQ6IGFueTtcclxuICB9O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yLXNlYXJjaC1wYWdlLWRlc2NyaXB0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24uaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNclNlYXJjaFBhZ2VEZXNjcmlwdGlvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogU2VhcmNoUGFnZURlc2NyaXB0aW9uRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogKHR5cGU6IHN0cmluZywgcGF5bG9hZDogYW55KSA9PiB2b2lkO1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICh0aGlzLmVtaXQpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwiZGF0YVwiIGNsYXNzPVwibXItc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb25cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtci1zZWFyY2gtcGFnZS1kZXNjcmlwdGlvbl9fdGV4dFwiIFtpbm5lckhUTUxdPVwiZGF0YS50ZXh0XCI+PC9kaXY+XHJcbiAgICA8YSBjbGFzcz1cIm1yLXNlYXJjaC1wYWdlLWRlc2NyaXB0aW9uX19saW5rXCIgKGNsaWNrKT1cIm9uQ2xpY2soZGF0YS5saW5rLnBheWxvYWQpXCI+e3sgZGF0YS5saW5rLnRleHQgfX08L2E+XHJcbjwvZGl2PiJdfQ==