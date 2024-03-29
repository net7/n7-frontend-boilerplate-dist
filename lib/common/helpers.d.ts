declare const _default: {
    prettifySnakeCase(key: string, label?: string): string;
    ucFirst(str: string): string;
    slugify(str: string): string;
    browserIsIE(): RegExpMatchArray;
    escapeQuotes(str: any): string;
    unescapeQuotes(str: any): string;
    escapeDoubleQuotes(str: any): any;
    unescapeDoubleQuotes(str: any): any;
    striptags(str: any): string;
    isElementInViewport(el: HTMLElement): boolean;
    /** Return true if an object is empty */
    isEmpty: (obj: any) => boolean;
};
export default _default;
