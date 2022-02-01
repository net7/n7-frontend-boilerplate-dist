import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class EscapeHtmlPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(content: any): import("@angular/platform-browser").SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<EscapeHtmlPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<EscapeHtmlPipe, "keepHtml">;
}
