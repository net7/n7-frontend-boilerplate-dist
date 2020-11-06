//---------------------------
// ReadMore.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { _t } from '@n7-frontend/core';
var HEIGHT_MARGIN = 50;
var ReadMoreComponent = /** @class */ (function () {
    function ReadMoreComponent() {
        this.collapsed = true;
        this.hasReadmore = false;
        this._loaded = false;
    }
    /**
     * Determine if the view is taller than the given height limit,
     * if it is, render the "Read-more" button.
     */
    ReadMoreComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this._loaded)
            return;
        if (this.root && this.root.nativeElement.clientHeight > 0) {
            this._loaded = true;
            this.clientHeight = this.root.nativeElement.clientHeight;
            var _a = this.data, height = _a.height, labels_1 = _a.labels;
            // translate labels
            Object.keys(labels_1).forEach(function (key) {
                _this.data.labels[key] = _t(labels_1[key]);
            });
            if (this.clientHeight > (height + HEIGHT_MARGIN)) {
                setTimeout(function () {
                    _this.hasReadmore = true;
                    _this.updateWrapperHeight();
                });
            }
        }
    };
    ReadMoreComponent.prototype.handleToggle = function () {
        this.collapsed = !this.collapsed;
        this.updateWrapperHeight();
    };
    ReadMoreComponent.prototype.updateWrapperHeight = function () {
        this.wrapperHeight = this.collapsed
            ? this.data.height
            : this.clientHeight;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ReadMoreComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ReadMoreComponent.prototype, "emit", void 0);
    __decorate([
        ViewChild('root', { read: ElementRef }),
        __metadata("design:type", ElementRef)
    ], ReadMoreComponent.prototype, "root", void 0);
    ReadMoreComponent = __decorate([
        Component({
            selector: 'mr-read-more',
            template: "<div #root *ngIf=\"data\" class=\"mr-read-more\"\n    [ngClass]=\"{\n        'is-collapsed': !!(hasReadmore && collapsed),\n        'is-expanded': !!(hasReadmore && !collapsed)\n    }\">\n        <div class=\"mr-read-more__content\"\n        [ngStyle]=\"{\n            height: hasReadmore ? wrapperHeight + 'px' : false\n        }\">\n            <!-- Child component -->\n            <ng-content class=\"content\"></ng-content>\n        </div>\n        <div *ngIf=\"hasReadmore\" class=\"mr-read-more__btn\" (click)=\"handleToggle()\">\n            <span class=\"n7-icon-{{ collapsed ? 'plus' : 'minus' }}\"></span>\n            <span class=\"mr-read-more__btn-text\">{{ collapsed ? data.labels.more : data.labels.less }}</span>\n        </div>\n</div>\n"
        })
    ], ReadMoreComponent);
    return ReadMoreComponent;
}());
export { ReadMoreComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9jb21wb25lbnRzL3JlYWQtbW9yZS9yZWFkLW1vcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLGNBQWM7QUFDZCw2QkFBNkI7O0FBRTdCLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFvQixTQUFTLEVBQUUsVUFBVSxFQUMxRCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBTXpCO0lBQUE7UUFRRSxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBTXBCLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFxQ2xCLENBQUM7SUFuQ0M7OztPQUdHO0lBQ0gsOENBQWtCLEdBQWxCO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUE2QixDQUFDLFlBQVksQ0FBQztZQUNwRSxJQUFBLGNBQThCLEVBQTVCLGtCQUFNLEVBQUUsb0JBQW9CLENBQUM7WUFFckMsbUJBQW1CO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDOUIsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxFQUFFO2dCQUNoRCxVQUFVLENBQUM7b0JBQ1QsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUM3QixDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCwrQ0FBbUIsR0FBbkI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTO1lBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQW5EUTtRQUFSLEtBQUssRUFBRTs7bURBQVc7SUFFVjtRQUFSLEtBQUssRUFBRTs7bURBQVc7SUFHc0I7UUFBeEMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztrQ0FBTyxVQUFVO21EQUFDO0lBTi9DLGlCQUFpQjtRQUo3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QiwrdkJBQStCO1NBQ2hDLENBQUM7T0FDVyxpQkFBaUIsQ0FxRDdCO0lBQUQsd0JBQUM7Q0FBQSxBQXJERCxJQXFEQztTQXJEWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUmVhZE1vcmUudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIEFmdGVyVmlld0NoZWNrZWQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5jb25zdCBIRUlHSFRfTUFSR0lOID0gNTA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLXJlYWQtbW9yZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWFkLW1vcmUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlYWRNb3JlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgLy8gUm9vdCBkaXZcbiAgQFZpZXdDaGlsZCgncm9vdCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSByb290OiBFbGVtZW50UmVmO1xuXG4gIGNvbGxhcHNlZCA9IHRydWU7XG5cbiAgaGFzUmVhZG1vcmUgPSBmYWxzZTtcblxuICB3cmFwcGVySGVpZ2h0OiBudW1iZXI7XG5cbiAgY2xpZW50SGVpZ2h0OiBudW1iZXI7XG5cbiAgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIHZpZXcgaXMgdGFsbGVyIHRoYW4gdGhlIGdpdmVuIGhlaWdodCBsaW1pdCxcbiAgICogaWYgaXQgaXMsIHJlbmRlciB0aGUgXCJSZWFkLW1vcmVcIiBidXR0b24uXG4gICAqL1xuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnJvb3QgJiYgdGhpcy5yb290Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gMCkge1xuICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gKHRoaXMucm9vdC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCB7IGhlaWdodCwgbGFiZWxzIH0gPSB0aGlzLmRhdGE7XG5cbiAgICAgIC8vIHRyYW5zbGF0ZSBsYWJlbHNcbiAgICAgIE9iamVjdC5rZXlzKGxhYmVscykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YS5sYWJlbHNba2V5XSA9IF90KGxhYmVsc1trZXldKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jbGllbnRIZWlnaHQgPiAoaGVpZ2h0ICsgSEVJR0hUX01BUkdJTikpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oYXNSZWFkbW9yZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy51cGRhdGVXcmFwcGVySGVpZ2h0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSgpIHtcbiAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgICB0aGlzLnVwZGF0ZVdyYXBwZXJIZWlnaHQoKTtcbiAgfVxuXG4gIHVwZGF0ZVdyYXBwZXJIZWlnaHQoKSB7XG4gICAgdGhpcy53cmFwcGVySGVpZ2h0ID0gdGhpcy5jb2xsYXBzZWRcbiAgICAgID8gdGhpcy5kYXRhLmhlaWdodFxuICAgICAgOiB0aGlzLmNsaWVudEhlaWdodDtcbiAgfVxufVxuIl19