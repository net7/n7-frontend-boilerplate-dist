import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
let EscapeHtmlPipe = class EscapeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
};
EscapeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
EscapeHtmlPipe = __decorate([
    Pipe({ name: 'keepHtml', pure: false }),
    __metadata("design:paramtypes", [DomSanitizer])
], EscapeHtmlPipe);
export { EscapeHtmlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VlcC1odG1sLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3BpcGVzL2tlZXAtaHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHekQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUN6QixZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzNDLENBQUM7SUFFRCxTQUFTLENBQUMsT0FBTztRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6RCxDQUFDO0NBQ0YsQ0FBQTs7WUFOZ0MsWUFBWTs7QUFEaEMsY0FBYztJQUQxQixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztxQ0FFUCxZQUFZO0dBRGhDLGNBQWMsQ0FPMUI7U0FQWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2tlZXBIdG1sJywgcHVyZTogZmFsc2UgfSlcclxuZXhwb3J0IGNsYXNzIEVzY2FwZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKGNvbnRlbnQpIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChjb250ZW50KTtcclxuICB9XHJcbn1cclxuIl19