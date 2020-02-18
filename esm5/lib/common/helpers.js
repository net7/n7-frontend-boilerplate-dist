/**
 * @fileoverview added by tsickle
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
        if (label) {
            return label;
        }
        return (key || '').split('_').map((/**
         * @param {?} word
         * @param {?} index
         * @return {?}
         */
        function (word, index) { return index === 0 ? _this.ucFirst(word) : word; })).join(' ');
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
        return str.replace(/\\([\s\S])|(")/g, "\\$1$2"); // thanks @slevithan!
    },
    unescapeDoubleQuotes: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        if (str && str != "")
            str = str.replace(/\\(")/g, "$1"); // thanks @slevithan!
        return str;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDOztJQUVsQixTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUU7QUFFakMsZUFBZTtJQUNiLGlCQUFpQjs7Ozs7SUFBakIsVUFBa0IsR0FBVyxFQUFFLEtBQWM7UUFBN0MsaUJBS0M7UUFKQyxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7OztRQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUssSUFBSyxPQUFBLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBdkMsQ0FBdUMsRUFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBQ0QsT0FBTzs7OztJQUFQLFVBQVEsR0FBVztRQUNqQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsT0FBTzs7OztJQUFQLFVBQVEsR0FBVztRQUNqQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUM7U0FDWDs7WUFDSyxTQUFTLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDOztZQUN2RCxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRTtRQUNyRCxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsV0FBVzs7OztRQUNULE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELGtCQUFrQjs7OztjQUFDLEdBQUc7UUFDcEIsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMscUJBQXFCO0lBQ3ZFLENBQUM7SUFDRCxvQkFBb0I7Ozs7Y0FBQyxHQUFHO1FBQ3RCLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFO1lBQ2xCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtRQUV6RCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FFRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNsdWcgZnJvbSAnc2x1Zyc7XG5cbmNvbnN0IGRvbVBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmV0dGlmeVNuYWtlQ2FzZShrZXk6IHN0cmluZywgbGFiZWw/OiBzdHJpbmcpIHtcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIChrZXkgfHwgJycpLnNwbGl0KCdfJykubWFwKCh3b3JkLCBpbmRleCkgPT4gaW5kZXggPT09IDAgPyB0aGlzLnVjRmlyc3Qod29yZCkgOiB3b3JkKS5qb2luKCcgJyk7XG4gIH0sXG4gIHVjRmlyc3Qoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9LFxuICBzbHVnaWZ5KHN0cjogc3RyaW5nKSB7XG4gICAgaWYgKCFzdHIpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgcGFyc2VkRG9jID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdHIsICd0ZXh0L2h0bWwnKTtcbiAgICBjb25zdCBwYXJzZWRTdHJpbmcgPSBwYXJzZWREb2MuYm9keS50ZXh0Q29udGVudCB8fCAnJztcbiAgICByZXR1cm4gc2x1ZyhwYXJzZWRTdHJpbmcsIHsgbG93ZXI6IHRydWUgfSk7XG4gIH0sXG4gIGJyb3dzZXJJc0lFKCkge1xuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKE1TSUV8VHJpZGVudCkvKTtcbiAgfSxcbiAgZXNjYXBlRG91YmxlUXVvdGVzKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxcXChbXFxzXFxTXSl8KFwiKS9nLFwiXFxcXCQxJDJcIik7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxuICB9LFxuICB1bmVzY2FwZURvdWJsZVF1b3RlcyhzdHIpIHtcbiAgICBpZiAoc3RyICYmIHN0ciAhPSBcIlwiKVxuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL1xcXFwoXCIpL2csXCIkMVwiKTsgLy8gdGhhbmtzIEBzbGV2aXRoYW4hXG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbn07XG4iXX0=