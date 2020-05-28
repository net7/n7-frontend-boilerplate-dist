/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import slugify from 'slugify';
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
        return slugify(parsedString, {
            remove: /[*+~.()'"!:@,]/g,
            lower: true
        });
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
    metadataIsEmpty: /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (!value
            || value === 'null');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQzs7SUFFeEIsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFO0FBRWpDLGVBQWU7SUFDYixpQkFBaUI7Ozs7O0lBQWpCLFVBQWtCLEdBQVcsRUFBRSxLQUFjO1FBQTdDLGlCQUtDO1FBSkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Ozs7O1FBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSyxJQUFLLE9BQUEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBekMsQ0FBeUMsRUFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBQ0QsT0FBTzs7OztJQUFQLFVBQVEsR0FBVztRQUNqQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsT0FBTzs7OztJQUFQLFVBQVEsR0FBVztRQUNqQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUM7U0FDWDs7WUFDSyxTQUFTLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDOztZQUN2RCxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRTtRQUNyRCxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDM0IsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxXQUFXOzs7O1FBQ1QsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0Qsa0JBQWtCOzs7O2NBQUMsR0FBRztRQUNwQixJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0MsOENBQThDO1lBQzlDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtTQUNsRjtRQUNELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtJQUM1RSxDQUFDO0lBQ0Qsb0JBQW9COzs7O2NBQUMsR0FBRztRQUN0QixPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQjtJQUN4RixDQUFDO0lBQ0QsZUFBZTs7OztjQUFDLEtBQUs7UUFDbkIsT0FBTyxDQUNMLENBQUMsS0FBSztlQUNILEtBQUssS0FBSyxNQUFNLENBQ3BCLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBzbHVnaWZ5IGZyb20gJ3NsdWdpZnknO1xuXG5jb25zdCBkb21QYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJldHRpZnlTbmFrZUNhc2Uoa2V5OiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIChrZXkgfHwgJycpLnNwbGl0KCdfJykubWFwKCh3b3JkLCBpbmRleCkgPT4gKGluZGV4ID09PSAwID8gdGhpcy51Y0ZpcnN0KHdvcmQpIDogd29yZCkpLmpvaW4oJyAnKTtcbiAgfSxcbiAgdWNGaXJzdChzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gIH0sXG4gIHNsdWdpZnkoc3RyOiBzdHJpbmcpIHtcbiAgICBpZiAoIXN0cikge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBwYXJzZWREb2MgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0ciwgJ3RleHQvaHRtbCcpO1xuICAgIGNvbnN0IHBhcnNlZFN0cmluZyA9IHBhcnNlZERvYy5ib2R5LnRleHRDb250ZW50IHx8ICcnO1xuICAgIHJldHVybiBzbHVnaWZ5KHBhcnNlZFN0cmluZywge1xuICAgICAgcmVtb3ZlOiAvWyorfi4oKSdcIiE6QCxdL2csXG4gICAgICBsb3dlcjogdHJ1ZVxuICAgIH0pO1xuICB9LFxuICBicm93c2VySXNJRSgpIHtcbiAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhNU0lFfFRyaWRlbnQpLyk7XG4gIH0sXG4gIGVzY2FwZURvdWJsZVF1b3RlcyhzdHIpIHtcbiAgICBpZiAoc3RyLnNlYXJjaCgvXFxcXD8oXCIpKFtcXHdcXHNdKylcXFxcPyhcIikvZykgPj0gMCkge1xuICAgICAgLy8gbWF0Y2ggcGllY2Ugb2Ygc3RyaW5nIGJldHdlZW4gZG91YmxlIHF1b3Rlc1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFxcPyhcIikoW1xcd1xcc10rKVxcXFw/KFwiKS9nLCAnXFxcXCQxJDJcXFxcJDMnKTsgLy8gdGhhbmtzIEBzbGV2aXRoYW4hXG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxcXChbXFxzXFxTXSl8KFwiKS9nLCAnXFxcXFxcXFxcXFxcJDEkMicpOyAvLyB0aGFua3MgQHNsZXZpdGhhbiFcbiAgfSxcbiAgdW5lc2NhcGVEb3VibGVRdW90ZXMoc3RyKSB7XG4gICAgcmV0dXJuIChzdHIgJiYgc3RyICE9PSAnJykgPyBzdHIucmVwbGFjZSgvXFxcXCooXCIpL2csICckMScpIDogc3RyOyAvLyB0aGFua3MgQHNsZXZpdGhhbiFcbiAgfSxcbiAgbWV0YWRhdGFJc0VtcHR5KHZhbHVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICF2YWx1ZVxuICAgICAgfHwgdmFsdWUgPT09ICdudWxsJ1xuICAgICk7XG4gIH1cbn07XG4iXX0=