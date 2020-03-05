/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/helpers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import slug from 'slug';
/** @type {?} */
var domParser = new DOMParser();
export default {
    prettifySnakeCase: /**
     * @param {?} key
     * @param {?=} label
     * @return {?}
     */
    function (key, label) {
        var _this = this;
        if (typeof label === 'string') {
            return label;
        }
        return (key || '').split('_').map((/**
         * @param {?} word
         * @param {?} index
         * @return {?}
         */
        function (word, index) { return (index === 0 ? _this.ucFirst(word) : word); })).join(' ');
    },
    ucFirst: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    slugify: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        if (!str) {
            return '';
        }
        /** @type {?} */
        var parsedDoc = domParser.parseFromString(str, 'text/html');
        /** @type {?} */
        var parsedString = parsedDoc.body.textContent || '';
        return slug(parsedString, { lower: true });
    },
    browserIsIE: /**
     * @return {?}
     */
    function () {
        return window.navigator.userAgent.match(/(MSIE|Trident)/);
    },
    escapeDoubleQuotes: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        if (str.search(/\\?(")([\w\s]+)\\?(")/g) >= 0) {
            // match piece of string between double quotes
            return str.replace(/\\?(")([\w\s]+)\\?(")/g, '\\$1$2\\$3'); // thanks @slevithan!
        }
        return str.replace(/\\([\s\S])|(")/g, '\\\\\\$1$2'); // thanks @slevithan!
    },
    unescapeDoubleQuotes: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return (str && str !== '') ? str.replace(/\\*(")/g, '$1') : str; // thanks @slevithan!
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQzs7SUFFbEIsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFO0FBRWpDLGVBQWU7SUFDYixpQkFBaUI7Ozs7O0lBQWpCLFVBQWtCLEdBQVcsRUFBRSxLQUFjO1FBQTdDLGlCQUtDO1FBSkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Ozs7O1FBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSyxJQUFLLE9BQUEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBekMsQ0FBeUMsRUFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBQ0QsT0FBTzs7OztJQUFQLFVBQVEsR0FBVztRQUNqQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsT0FBTzs7OztJQUFQLFVBQVEsR0FBVztRQUNqQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUM7U0FDWDs7WUFDSyxTQUFTLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDOztZQUN2RCxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRTtRQUNyRCxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsV0FBVzs7OztRQUNULE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELGtCQUFrQjs7OztjQUFDLEdBQUc7UUFDcEIsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdDLDhDQUE4QztZQUM5QyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7U0FDbEY7UUFDRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7SUFDNUUsQ0FBQztJQUNELG9CQUFvQjs7OztjQUFDLEdBQUc7UUFDdEIsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUI7SUFDeEYsQ0FBQztDQUVGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2x1ZyBmcm9tICdzbHVnJztcclxuXHJcbmNvbnN0IGRvbVBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcmV0dGlmeVNuYWtlQ2FzZShrZXk6IHN0cmluZywgbGFiZWw/OiBzdHJpbmcpIHtcclxuICAgIGlmICh0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiBsYWJlbDtcclxuICAgIH1cclxuICAgIHJldHVybiAoa2V5IHx8ICcnKS5zcGxpdCgnXycpLm1hcCgod29yZCwgaW5kZXgpID0+IChpbmRleCA9PT0gMCA/IHRoaXMudWNGaXJzdCh3b3JkKSA6IHdvcmQpKS5qb2luKCcgJyk7XHJcbiAgfSxcclxuICB1Y0ZpcnN0KHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG4gIH0sXHJcbiAgc2x1Z2lmeShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGFyc2VkRG9jID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdHIsICd0ZXh0L2h0bWwnKTtcclxuICAgIGNvbnN0IHBhcnNlZFN0cmluZyA9IHBhcnNlZERvYy5ib2R5LnRleHRDb250ZW50IHx8ICcnO1xyXG4gICAgcmV0dXJuIHNsdWcocGFyc2VkU3RyaW5nLCB7IGxvd2VyOiB0cnVlIH0pO1xyXG4gIH0sXHJcbiAgYnJvd3NlcklzSUUoKSB7XHJcbiAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhNU0lFfFRyaWRlbnQpLyk7XHJcbiAgfSxcclxuICBlc2NhcGVEb3VibGVRdW90ZXMoc3RyKSB7XHJcbiAgICBpZiAoc3RyLnNlYXJjaCgvXFxcXD8oXCIpKFtcXHdcXHNdKylcXFxcPyhcIikvZykgPj0gMCkge1xyXG4gICAgICAvLyBtYXRjaCBwaWVjZSBvZiBzdHJpbmcgYmV0d2VlbiBkb3VibGUgcXVvdGVzXHJcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxcXD8oXCIpKFtcXHdcXHNdKylcXFxcPyhcIikvZywgJ1xcXFwkMSQyXFxcXCQzJyk7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFxcKFtcXHNcXFNdKXwoXCIpL2csICdcXFxcXFxcXFxcXFwkMSQyJyk7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxyXG4gIH0sXHJcbiAgdW5lc2NhcGVEb3VibGVRdW90ZXMoc3RyKSB7XHJcbiAgICByZXR1cm4gKHN0ciAmJiBzdHIgIT09ICcnKSA/IHN0ci5yZXBsYWNlKC9cXFxcKihcIikvZywgJyQxJykgOiBzdHI7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxyXG4gIH0sXHJcblxyXG59O1xyXG4iXX0=