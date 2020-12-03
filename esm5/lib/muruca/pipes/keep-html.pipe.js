import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var EscapeHtmlPipe = /** @class */ (function () {
    function EscapeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    EscapeHtmlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    EscapeHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    EscapeHtmlPipe = __decorate([
        Pipe({ name: 'keepHtml', pure: false }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], EscapeHtmlPipe);
    return EscapeHtmlPipe;
}());
export { EscapeHtmlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VlcC1odG1sLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3BpcGVzL2tlZXAtaHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHekQ7SUFDRSx3QkFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUMzQyxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLE9BQU87UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBTDhCLFlBQVk7O0lBRGhDLGNBQWM7UUFEMUIsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7eUNBRVAsWUFBWTtPQURoQyxjQUFjLENBTzFCO0lBQUQscUJBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHsgbmFtZTogJ2tlZXBIdG1sJywgcHVyZTogZmFsc2UgfSlcbmV4cG9ydCBjbGFzcyBFc2NhcGVIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gIH1cblxuICB0cmFuc2Zvcm0oY29udGVudCkge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChjb250ZW50KTtcbiAgfVxufVxuIl19