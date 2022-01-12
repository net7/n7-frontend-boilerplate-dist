//---------------------------
// ReadMore.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { _t } from '@n7-frontend/core';
const HEIGHT_MARGIN = 50;
let ReadMoreComponent = class ReadMoreComponent {
    constructor() {
        this.collapsed = true;
        this.hasReadmore = false;
        this._loaded = false;
    }
    /**
     * Determine if the view is taller than the given height limit,
     * if it is, render the "Read-more" button.
     */
    ngAfterViewChecked() {
        if (this._loaded || !this.data)
            return;
        if (this.root && this.root.nativeElement.clientHeight > 0) {
            this._loaded = true;
            this.clientHeight = this.root.nativeElement.clientHeight;
            const { height, labels } = this.data;
            // translate labels
            Object.keys(labels).forEach((key) => {
                this.data.labels[key] = _t(labels[key]);
            });
            if (this.clientHeight > (height + HEIGHT_MARGIN)) {
                setTimeout(() => {
                    this.hasReadmore = true;
                    this.updateWrapperHeight();
                });
            }
        }
    }
    handleToggle() {
        this.collapsed = !this.collapsed;
        this.updateWrapperHeight();
    }
    updateWrapperHeight() {
        this.wrapperHeight = this.collapsed
            ? this.data.height
            : this.clientHeight;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ReadMoreComponent.prototype, "data", void 0);
__decorate([
    ViewChild('root', { read: ElementRef }),
    __metadata("design:type", ElementRef)
], ReadMoreComponent.prototype, "root", void 0);
ReadMoreComponent = __decorate([
    Component({
        selector: 'mr-read-more',
        template: "<div #root class=\"mr-read-more\"\n    [ngClass]=\"{\n        'is-collapsed': !!(hasReadmore && collapsed),\n        'is-expanded': !!(hasReadmore && !collapsed)\n    }\">\n        <div class=\"mr-read-more__content\"\n        [ngStyle]=\"{\n            height: hasReadmore ? wrapperHeight + 'px' : false\n        }\">\n            <!-- Child component -->\n            <ng-content class=\"content\"></ng-content>\n        </div>\n        <div *ngIf=\"hasReadmore\" class=\"mr-read-more__btn\" (click)=\"handleToggle()\">\n            <span class=\"n7-icon-{{ collapsed ? 'plus' : 'minus' }}\"></span>\n            <span class=\"mr-read-more__btn-text\">{{ collapsed ? data.labels.more : data.labels.less }}</span>\n        </div>\n</div>\n"
    })
], ReadMoreComponent);
export { ReadMoreComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9jb21wb25lbnRzL3JlYWQtbW9yZS9yZWFkLW1vcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLGNBQWM7QUFDZCw2QkFBNkI7O0FBRTdCLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFvQixTQUFTLEVBQUUsVUFBVSxFQUMxRCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFVdkMsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBTXpCLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBQTlCO1FBTUUsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQU1wQixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBcUNsQixDQUFDO0lBbkNDOzs7T0FHRztJQUNILGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQTZCLENBQUMsWUFBWSxDQUFDO1lBQzFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUVyQyxtQkFBbUI7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxFQUFFO2dCQUNoRCxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVM7WUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN4QixDQUFDO0NBQ0YsQ0FBQTtBQWxEVTtJQUFSLEtBQUssRUFBRTs7K0NBQW9CO0FBR2E7SUFBeEMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQzs4QkFBTyxVQUFVOytDQUFDO0FBSi9DLGlCQUFpQjtJQUo3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixndkJBQStCO0tBQ2hDLENBQUM7R0FDVyxpQkFBaUIsQ0FtRDdCO1NBbkRZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBSZWFkTW9yZS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgVmlld0NoaWxkLCBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFJlYWRNb3JlRGF0YSA9IHtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxhYmVsczoge1xuICAgIG1vcmU6IHN0cmluZztcbiAgICBsZXNzOiBzdHJpbmc7XG4gIH07XG59O1xuXG5jb25zdCBIRUlHSFRfTUFSR0lOID0gNTA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLXJlYWQtbW9yZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWFkLW1vcmUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlYWRNb3JlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IFJlYWRNb3JlRGF0YTtcblxuICAvLyBSb290IGRpdlxuICBAVmlld0NoaWxkKCdyb290JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHJvb3Q6IEVsZW1lbnRSZWY7XG5cbiAgY29sbGFwc2VkID0gdHJ1ZTtcblxuICBoYXNSZWFkbW9yZSA9IGZhbHNlO1xuXG4gIHdyYXBwZXJIZWlnaHQ6IG51bWJlcjtcblxuICBjbGllbnRIZWlnaHQ6IG51bWJlcjtcblxuICBfbG9hZGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgdmlldyBpcyB0YWxsZXIgdGhhbiB0aGUgZ2l2ZW4gaGVpZ2h0IGxpbWl0LFxuICAgKiBpZiBpdCBpcywgcmVuZGVyIHRoZSBcIlJlYWQtbW9yZVwiIGJ1dHRvbi5cbiAgICovXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9hZGVkIHx8ICF0aGlzLmRhdGEpIHJldHVybjtcbiAgICBpZiAodGhpcy5yb290ICYmIHRoaXMucm9vdC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCA+IDApIHtcbiAgICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmNsaWVudEhlaWdodCA9ICh0aGlzLnJvb3QubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3QgeyBoZWlnaHQsIGxhYmVscyB9ID0gdGhpcy5kYXRhO1xuXG4gICAgICAvLyB0cmFuc2xhdGUgbGFiZWxzXG4gICAgICBPYmplY3Qua2V5cyhsYWJlbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEubGFiZWxzW2tleV0gPSBfdChsYWJlbHNba2V5XSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuY2xpZW50SGVpZ2h0ID4gKGhlaWdodCArIEhFSUdIVF9NQVJHSU4pKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGFzUmVhZG1vcmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudXBkYXRlV3JhcHBlckhlaWdodCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVUb2dnbGUoKSB7XG4gICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XG4gICAgdGhpcy51cGRhdGVXcmFwcGVySGVpZ2h0KCk7XG4gIH1cblxuICB1cGRhdGVXcmFwcGVySGVpZ2h0KCkge1xuICAgIHRoaXMud3JhcHBlckhlaWdodCA9IHRoaXMuY29sbGFwc2VkXG4gICAgICA/IHRoaXMuZGF0YS5oZWlnaHRcbiAgICAgIDogdGhpcy5jbGllbnRIZWlnaHQ7XG4gIH1cbn1cbiJdfQ==