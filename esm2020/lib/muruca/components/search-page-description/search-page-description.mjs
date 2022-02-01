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
MrSearchPageDescriptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrSearchPageDescriptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MrSearchPageDescriptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: MrSearchPageDescriptionComponent, selector: "mr-search-page-description", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"mr-search-page-description\">\n    <div class=\"mr-search-page-description__text\" [innerHTML]=\"data.text\"></div>\n    <a class=\"mr-search-page-description__link\" (click)=\"onClick(data.link.payload)\">{{ data.link.text }}</a>\n</div>", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrSearchPageDescriptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mr-search-page-description', template: "<div *ngIf=\"data\" class=\"mr-search-page-description\">\n    <div class=\"mr-search-page-description__text\" [innerHTML]=\"data.text\"></div>\n    <a class=\"mr-search-page-description__link\" (click)=\"onClick(data.link.payload)\">{{ data.link.text }}</a>\n</div>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvY29tcG9uZW50cy9zZWFyY2gtcGFnZS1kZXNjcmlwdGlvbi9zZWFyY2gtcGFnZS1kZXNjcmlwdGlvbi50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9jb21wb25lbnRzL3NlYXJjaC1wYWdlLWRlc2NyaXB0aW9uL3NlYXJjaC1wYWdlLWRlc2NyaXB0aW9uLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQWNqRCxNQUFNLE9BQU8sZ0NBQWdDO0lBSzNDLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs2SEFUVSxnQ0FBZ0M7aUhBQWhDLGdDQUFnQywwR0NkN0MsNFFBR007MkZEV08sZ0NBQWdDO2tCQUo1QyxTQUFTOytCQUNFLDRCQUE0Qjs4QkFJN0IsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgU2VhcmNoUGFnZURlc2NyaXB0aW9uRGF0YSA9IHtcbiAgdGV4dDogc3RyaW5nO1xuICBsaW5rOiB7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIHBheWxvYWQ6IGFueTtcbiAgfTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24uaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoUGFnZURlc2NyaXB0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogU2VhcmNoUGFnZURlc2NyaXB0aW9uRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiAodHlwZTogc3RyaW5nLCBwYXlsb2FkOiBhbnkpID0+IHZvaWQ7XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKHRoaXMuZW1pdCkge1xuICAgICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cImRhdGFcIiBjbGFzcz1cIm1yLXNlYXJjaC1wYWdlLWRlc2NyaXB0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1yLXNlYXJjaC1wYWdlLWRlc2NyaXB0aW9uX190ZXh0XCIgW2lubmVySFRNTF09XCJkYXRhLnRleHRcIj48L2Rpdj5cbiAgICA8YSBjbGFzcz1cIm1yLXNlYXJjaC1wYWdlLWRlc2NyaXB0aW9uX19saW5rXCIgKGNsaWNrKT1cIm9uQ2xpY2soZGF0YS5saW5rLnBheWxvYWQpXCI+e3sgZGF0YS5saW5rLnRleHQgfX08L2E+XG48L2Rpdj4iXX0=