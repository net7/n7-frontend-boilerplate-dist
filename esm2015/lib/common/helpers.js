/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import slugify from 'slugify';
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
        (word, index) => (index === 0 ? this.ucFirst(word) : word))).join(' ');
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
        return slugify(parsedString, {
            remove: /[*+~.()'"!:@,]/g,
            lower: true
        });
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
            // match piece of string between double quotes
            return str.replace(/\\?(")([\w\s]+)\\?(")/g, '\\$1$2\\$3'); // thanks @slevithan!
        }
        return str.replace(/\\([\s\S])|(")/g, '\\\\\\$1$2'); // thanks @slevithan!
    },
    /**
     * @param {?} str
     * @return {?}
     */
    unescapeDoubleQuotes(str) {
        return (str && str !== '') ? str.replace(/\\*(")/g, '$1') : str; // thanks @slevithan!
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQzs7TUFFeEIsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFO0FBRWpDLGVBQWU7Ozs7OztJQUNiLGlCQUFpQixDQUFDLEdBQVcsRUFBRSxLQUFjO1FBQzNDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxRyxDQUFDOzs7OztJQUNELE9BQU8sQ0FBQyxHQUFXO1FBQ2pCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBQ0QsT0FBTyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sRUFBRSxDQUFDO1NBQ1g7O2NBQ0ssU0FBUyxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQzs7Y0FDdkQsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUU7UUFDckQsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQzNCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBQ0QsV0FBVztRQUNULE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFDRCxrQkFBa0IsQ0FBQyxHQUFHO1FBQ3BCLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3Qyw4Q0FBOEM7WUFDOUMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMscUJBQXFCO1NBQ2xGO1FBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMscUJBQXFCO0lBQzVFLENBQUM7Ozs7O0lBQ0Qsb0JBQW9CLENBQUMsR0FBRztRQUN0QixPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQjtJQUN4RixDQUFDO0NBRUYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBzbHVnaWZ5IGZyb20gJ3NsdWdpZnknO1xuXG5jb25zdCBkb21QYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJldHRpZnlTbmFrZUNhc2Uoa2V5OiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIChrZXkgfHwgJycpLnNwbGl0KCdfJykubWFwKCh3b3JkLCBpbmRleCkgPT4gKGluZGV4ID09PSAwID8gdGhpcy51Y0ZpcnN0KHdvcmQpIDogd29yZCkpLmpvaW4oJyAnKTtcbiAgfSxcbiAgdWNGaXJzdChzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gIH0sXG4gIHNsdWdpZnkoc3RyOiBzdHJpbmcpIHtcbiAgICBpZiAoIXN0cikge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBwYXJzZWREb2MgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0ciwgJ3RleHQvaHRtbCcpO1xuICAgIGNvbnN0IHBhcnNlZFN0cmluZyA9IHBhcnNlZERvYy5ib2R5LnRleHRDb250ZW50IHx8ICcnO1xuICAgIHJldHVybiBzbHVnaWZ5KHBhcnNlZFN0cmluZywge1xuICAgICAgcmVtb3ZlOiAvWyorfi4oKSdcIiE6QCxdL2csXG4gICAgICBsb3dlcjogdHJ1ZVxuICAgIH0pO1xuICB9LFxuICBicm93c2VySXNJRSgpIHtcbiAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhNU0lFfFRyaWRlbnQpLyk7XG4gIH0sXG4gIGVzY2FwZURvdWJsZVF1b3RlcyhzdHIpIHtcbiAgICBpZiAoc3RyLnNlYXJjaCgvXFxcXD8oXCIpKFtcXHdcXHNdKylcXFxcPyhcIikvZykgPj0gMCkge1xuICAgICAgLy8gbWF0Y2ggcGllY2Ugb2Ygc3RyaW5nIGJldHdlZW4gZG91YmxlIHF1b3Rlc1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFxcPyhcIikoW1xcd1xcc10rKVxcXFw/KFwiKS9nLCAnXFxcXCQxJDJcXFxcJDMnKTsgLy8gdGhhbmtzIEBzbGV2aXRoYW4hXG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxcXChbXFxzXFxTXSl8KFwiKS9nLCAnXFxcXFxcXFxcXFxcJDEkMicpOyAvLyB0aGFua3MgQHNsZXZpdGhhbiFcbiAgfSxcbiAgdW5lc2NhcGVEb3VibGVRdW90ZXMoc3RyKSB7XG4gICAgcmV0dXJuIChzdHIgJiYgc3RyICE9PSAnJykgPyBzdHIucmVwbGFjZSgvXFxcXCooXCIpL2csICckMScpIDogc3RyOyAvLyB0aGFua3MgQHNsZXZpdGhhbiFcbiAgfSxcblxufTtcbiJdfQ==