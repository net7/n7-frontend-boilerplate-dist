//---------------------------
// BubbleChartWrapper.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BubbleChartWrapperComponent {
    onClick(type, payload) {
        this.emit(type, payload);
    }
}
BubbleChartWrapperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: BubbleChartWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BubbleChartWrapperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: BubbleChartWrapperComponent, selector: "aw-bubble-chart-wrapper", inputs: { emit: "emit", container: "container", buttons: "buttons" }, ngImport: i0, template: "<div class=\"aw-bubble-chart-wrapper\">\n    <ng-content></ng-content>\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: BubbleChartWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'aw-bubble-chart-wrapper', template: "<div class=\"aw-bubble-chart-wrapper\">\n    <ng-content></ng-content>\n</div>" }]
        }], propDecorators: { emit: [{
                type: Input
            }], container: [{
                type: Input
            }], buttons: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LXdyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9jb21wb25lbnRzL2J1YmJsZS1jaGFydC13cmFwcGVyL2J1YmJsZS1jaGFydC13cmFwcGVyLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQtd3JhcHBlci9idWJibGUtY2hhcnQtd3JhcHBlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3Qix3QkFBd0I7QUFDeEIsNkJBQTZCO0FBRTdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU1qRCxNQUFNLE9BQU8sMkJBQTJCO0lBT3RDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDOzt3SEFUVSwyQkFBMkI7NEdBQTNCLDJCQUEyQixxSUNWeEMsZ0ZBRU07MkZEUU8sMkJBQTJCO2tCQUp2QyxTQUFTOytCQUNFLHlCQUF5Qjs4QkFJMUIsSUFBSTtzQkFBWixLQUFLO2dCQUVHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBRUcsT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJ1YmJsZUNoYXJ0V3JhcHBlci50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy1idWJibGUtY2hhcnQtd3JhcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idWJibGUtY2hhcnQtd3JhcHBlci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRXcmFwcGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGJ1dHRvbnM6IGFueTtcblxuICBvbkNsaWNrKHR5cGUsIHBheWxvYWQpIHtcbiAgICB0aGlzLmVtaXQodHlwZSwgcGF5bG9hZCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJhdy1idWJibGUtY2hhcnQtd3JhcHBlclwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PiJdfQ==