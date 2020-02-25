/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import slug from 'slug';
/** @type {?} */
const domParser = new DOMParser();
export default {
    /**
     * @param {?} key
     * @param {?=} label
     * @return {?}
     */
    prettifySnakeCase(key, label) {
        if (typeof label === 'string') {
            return label;
        }
        return (key || '').split('_').map((/**
         * @param {?} word
         * @param {?} index
         * @return {?}
         */
        (word, index) => index === 0 ? this.ucFirst(word) : word)).join(' ');
    },
    /**
     * @param {?} str
     * @return {?}
     */
    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    /**
     * @param {?} str
     * @return {?}
     */
    slugify(str) {
        if (!str) {
            return '';
        }
        /** @type {?} */
        const parsedDoc = domParser.parseFromString(str, 'text/html');
        /** @type {?} */
        const parsedString = parsedDoc.body.textContent || '';
        return slug(parsedString, { lower: true });
    },
    /**
     * @return {?}
     */
    browserIsIE() {
        return window.navigator.userAgent.match(/(MSIE|Trident)/);
    },
    /**
     * @param {?} str
     * @return {?}
     */
    escapeDoubleQuotes(str) {
        if (str.search(/\\?(")([\w\s]+)\\?(")/g) >= 0) {
            //match piece of string between double quotes
            return str.replace(/\\?(")([\w\s]+)\\?(")/g, "\\$1$2\\$3"); // thanks @slevithan!
        }
        else {
            return str.replace(/\\([\s\S])|(")/g, "\\\\\\$1$2"); // thanks @slevithan!
        }
    },
    /**
     * @param {?} str
     * @return {?}
     */
    unescapeDoubleQuotes(str) {
        if (str && str != "")
            str = str.replace(/\\*(")/g, "$1"); // thanks @slevithan!
        return str;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDOztNQUVsQixTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUU7QUFFakMsZUFBZTs7Ozs7O0lBQ2IsaUJBQWlCLENBQUMsR0FBVyxFQUFFLEtBQWM7UUFDM0MsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Ozs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEcsQ0FBQzs7Ozs7SUFDRCxPQUFPLENBQUMsR0FBVztRQUNqQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUNELE9BQU8sQ0FBQyxHQUFXO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLEVBQUUsQ0FBQztTQUNYOztjQUNLLFNBQVMsR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7O2NBQ3ZELFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFO1FBQ3JELE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxXQUFXO1FBQ1QsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUNELGtCQUFrQixDQUFDLEdBQUc7UUFDcEIsSUFBSyxHQUFHLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlDLDZDQUE2QztZQUM3QyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7U0FDakY7YUFBTTtZQUNMLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtTQUMxRTtJQUVILENBQUM7Ozs7O0lBQ0Qsb0JBQW9CLENBQUMsR0FBRztRQUN0QixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRTtZQUNsQixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7UUFFMUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBRUYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzbHVnIGZyb20gJ3NsdWcnO1xuXG5jb25zdCBkb21QYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJldHRpZnlTbmFrZUNhc2Uoa2V5OiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIChrZXkgfHwgJycpLnNwbGl0KCdfJykubWFwKCh3b3JkLCBpbmRleCkgPT4gaW5kZXggPT09IDAgPyB0aGlzLnVjRmlyc3Qod29yZCkgOiB3b3JkKS5qb2luKCcgJyk7XG4gIH0sXG4gIHVjRmlyc3Qoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9LFxuICBzbHVnaWZ5KHN0cjogc3RyaW5nKSB7XG4gICAgaWYgKCFzdHIpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgcGFyc2VkRG9jID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdHIsICd0ZXh0L2h0bWwnKTtcbiAgICBjb25zdCBwYXJzZWRTdHJpbmcgPSBwYXJzZWREb2MuYm9keS50ZXh0Q29udGVudCB8fCAnJztcbiAgICByZXR1cm4gc2x1ZyhwYXJzZWRTdHJpbmcsIHsgbG93ZXI6IHRydWUgfSk7XG4gIH0sXG4gIGJyb3dzZXJJc0lFKCkge1xuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKE1TSUV8VHJpZGVudCkvKTtcbiAgfSxcbiAgZXNjYXBlRG91YmxlUXVvdGVzKHN0cikge1xuICAgIGlmICggc3RyLnNlYXJjaCgvXFxcXD8oXCIpKFtcXHdcXHNdKylcXFxcPyhcIikvZykgPj0gMCApe1xuICAgICAgLy9tYXRjaCBwaWVjZSBvZiBzdHJpbmcgYmV0d2VlbiBkb3VibGUgcXVvdGVzXG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcXFw/KFwiKShbXFx3XFxzXSspXFxcXD8oXCIpL2csXCJcXFxcJDEkMlxcXFwkM1wiKTsgLy8gdGhhbmtzIEBzbGV2aXRoYW4hXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxcXChbXFxzXFxTXSl8KFwiKS9nLFwiXFxcXFxcXFxcXFxcJDEkMlwiKTsgLy8gdGhhbmtzIEBzbGV2aXRoYW4hXG4gICAgfVxuXG4gIH0sXG4gIHVuZXNjYXBlRG91YmxlUXVvdGVzKHN0cikge1xuICAgIGlmIChzdHIgJiYgc3RyICE9IFwiXCIpXG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFxcXCooXCIpL2csXCIkMVwiKTsgLy8gdGhhbmtzIEBzbGV2aXRoYW4hXG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbn07XG4iXX0=