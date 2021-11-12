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
        if (this._loaded || !this.data)
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
        ViewChild('root', { read: ElementRef }),
        __metadata("design:type", ElementRef)
    ], ReadMoreComponent.prototype, "root", void 0);
    ReadMoreComponent = __decorate([
        Component({
            selector: 'mr-read-more',
            template: "<div #root class=\"mr-read-more\"\r\n    [ngClass]=\"{\r\n        'is-collapsed': !!(hasReadmore && collapsed),\r\n        'is-expanded': !!(hasReadmore && !collapsed)\r\n    }\">\r\n        <div class=\"mr-read-more__content\"\r\n        [ngStyle]=\"{\r\n            height: hasReadmore ? wrapperHeight + 'px' : false\r\n        }\">\r\n            <!-- Child component -->\r\n            <ng-content class=\"content\"></ng-content>\r\n        </div>\r\n        <div *ngIf=\"hasReadmore\" class=\"mr-read-more__btn\" (click)=\"handleToggle()\">\r\n            <span class=\"n7-icon-{{ collapsed ? 'plus' : 'minus' }}\"></span>\r\n            <span class=\"mr-read-more__btn-text\">{{ collapsed ? data.labels.more : data.labels.less }}</span>\r\n        </div>\r\n</div>\r\n"
        })
    ], ReadMoreComponent);
    return ReadMoreComponent;
}());
export { ReadMoreComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9jb21wb25lbnRzL3JlYWQtbW9yZS9yZWFkLW1vcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLGNBQWM7QUFDZCw2QkFBNkI7O0FBRTdCLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFvQixTQUFTLEVBQUUsVUFBVSxFQUMxRCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFVdkMsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBTXpCO0lBQUE7UUFNRSxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBTXBCLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFxQ2xCLENBQUM7SUFuQ0M7OztPQUdHO0lBQ0gsOENBQWtCLEdBQWxCO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBNkIsQ0FBQyxZQUFZLENBQUM7WUFDcEUsSUFBQSxjQUE4QixFQUE1QixrQkFBTSxFQUFFLG9CQUFvQixDQUFDO1lBRXJDLG1CQUFtQjtZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQzlCLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsRUFBRTtnQkFDaEQsVUFBVSxDQUFDO29CQUNULEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsK0NBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUztZQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFqRFE7UUFBUixLQUFLLEVBQUU7O21EQUFvQjtJQUdhO1FBQXhDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7a0NBQU8sVUFBVTttREFBQztJQUovQyxpQkFBaUI7UUFKN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsa3hCQUErQjtTQUNoQyxDQUFDO09BQ1csaUJBQWlCLENBbUQ3QjtJQUFELHdCQUFDO0NBQUEsQUFuREQsSUFtREM7U0FuRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUmVhZE1vcmUudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgVmlld0NoaWxkLCBFbGVtZW50UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgUmVhZE1vcmVEYXRhID0ge1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIGxhYmVsczoge1xyXG4gICAgbW9yZTogc3RyaW5nO1xyXG4gICAgbGVzczogc3RyaW5nO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBIRUlHSFRfTUFSR0lOID0gNTA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yLXJlYWQtbW9yZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JlYWQtbW9yZS5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlYWRNb3JlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XHJcbiAgQElucHV0KCkgZGF0YTogUmVhZE1vcmVEYXRhO1xyXG5cclxuICAvLyBSb290IGRpdlxyXG4gIEBWaWV3Q2hpbGQoJ3Jvb3QnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgcm9vdDogRWxlbWVudFJlZjtcclxuXHJcbiAgY29sbGFwc2VkID0gdHJ1ZTtcclxuXHJcbiAgaGFzUmVhZG1vcmUgPSBmYWxzZTtcclxuXHJcbiAgd3JhcHBlckhlaWdodDogbnVtYmVyO1xyXG5cclxuICBjbGllbnRIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgX2xvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIHZpZXcgaXMgdGFsbGVyIHRoYW4gdGhlIGdpdmVuIGhlaWdodCBsaW1pdCxcclxuICAgKiBpZiBpdCBpcywgcmVuZGVyIHRoZSBcIlJlYWQtbW9yZVwiIGJ1dHRvbi5cclxuICAgKi9cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbG9hZGVkIHx8ICF0aGlzLmRhdGEpIHJldHVybjtcclxuICAgIGlmICh0aGlzLnJvb3QgJiYgdGhpcy5yb290Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gMCkge1xyXG4gICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNsaWVudEhlaWdodCA9ICh0aGlzLnJvb3QubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xpZW50SGVpZ2h0O1xyXG4gICAgICBjb25zdCB7IGhlaWdodCwgbGFiZWxzIH0gPSB0aGlzLmRhdGE7XHJcblxyXG4gICAgICAvLyB0cmFuc2xhdGUgbGFiZWxzXHJcbiAgICAgIE9iamVjdC5rZXlzKGxhYmVscykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmxhYmVsc1trZXldID0gX3QobGFiZWxzW2tleV0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNsaWVudEhlaWdodCA+IChoZWlnaHQgKyBIRUlHSFRfTUFSR0lOKSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYXNSZWFkbW9yZSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVdyYXBwZXJIZWlnaHQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlVG9nZ2xlKCkge1xyXG4gICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XHJcbiAgICB0aGlzLnVwZGF0ZVdyYXBwZXJIZWlnaHQoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVdyYXBwZXJIZWlnaHQoKSB7XHJcbiAgICB0aGlzLndyYXBwZXJIZWlnaHQgPSB0aGlzLmNvbGxhcHNlZFxyXG4gICAgICA/IHRoaXMuZGF0YS5oZWlnaHRcclxuICAgICAgOiB0aGlzLmNsaWVudEhlaWdodDtcclxuICB9XHJcbn1cclxuIl19