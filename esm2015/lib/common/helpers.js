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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDOztNQUVsQixTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUU7QUFFakMsZUFBZTs7Ozs7O0lBQ2IsaUJBQWlCLENBQUMsR0FBVyxFQUFFLEtBQWM7UUFDM0MsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Ozs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFHLENBQUM7Ozs7O0lBQ0QsT0FBTyxDQUFDLEdBQVc7UUFDakIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFDRCxPQUFPLENBQUMsR0FBVztRQUNqQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUM7U0FDWDs7Y0FDSyxTQUFTLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDOztjQUN2RCxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRTtRQUNyRCxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ0QsV0FBVztRQUNULE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFDRCxrQkFBa0IsQ0FBQyxHQUFHO1FBQ3BCLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3Qyw4Q0FBOEM7WUFDOUMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMscUJBQXFCO1NBQ2xGO1FBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMscUJBQXFCO0lBQzVFLENBQUM7Ozs7O0lBQ0Qsb0JBQW9CLENBQUMsR0FBRztRQUN0QixPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQjtJQUN4RixDQUFDO0NBRUYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzbHVnIGZyb20gJ3NsdWcnO1xuXG5jb25zdCBkb21QYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJldHRpZnlTbmFrZUNhc2Uoa2V5OiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIChrZXkgfHwgJycpLnNwbGl0KCdfJykubWFwKCh3b3JkLCBpbmRleCkgPT4gKGluZGV4ID09PSAwID8gdGhpcy51Y0ZpcnN0KHdvcmQpIDogd29yZCkpLmpvaW4oJyAnKTtcbiAgfSxcbiAgdWNGaXJzdChzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gIH0sXG4gIHNsdWdpZnkoc3RyOiBzdHJpbmcpIHtcbiAgICBpZiAoIXN0cikge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBwYXJzZWREb2MgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0ciwgJ3RleHQvaHRtbCcpO1xuICAgIGNvbnN0IHBhcnNlZFN0cmluZyA9IHBhcnNlZERvYy5ib2R5LnRleHRDb250ZW50IHx8ICcnO1xuICAgIHJldHVybiBzbHVnKHBhcnNlZFN0cmluZywgeyBsb3dlcjogdHJ1ZSB9KTtcbiAgfSxcbiAgYnJvd3NlcklzSUUoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oTVNJRXxUcmlkZW50KS8pO1xuICB9LFxuICBlc2NhcGVEb3VibGVRdW90ZXMoc3RyKSB7XG4gICAgaWYgKHN0ci5zZWFyY2goL1xcXFw/KFwiKShbXFx3XFxzXSspXFxcXD8oXCIpL2cpID49IDApIHtcbiAgICAgIC8vIG1hdGNoIHBpZWNlIG9mIHN0cmluZyBiZXR3ZWVuIGRvdWJsZSBxdW90ZXNcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxcXD8oXCIpKFtcXHdcXHNdKylcXFxcPyhcIikvZywgJ1xcXFwkMSQyXFxcXCQzJyk7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcXFwoW1xcc1xcU10pfChcIikvZywgJ1xcXFxcXFxcXFxcXCQxJDInKTsgLy8gdGhhbmtzIEBzbGV2aXRoYW4hXG4gIH0sXG4gIHVuZXNjYXBlRG91YmxlUXVvdGVzKHN0cikge1xuICAgIHJldHVybiAoc3RyICYmIHN0ciAhPT0gJycpID8gc3RyLnJlcGxhY2UoL1xcXFwqKFwiKS9nLCAnJDEnKSA6IHN0cjsgLy8gdGhhbmtzIEBzbGV2aXRoYW4hXG4gIH0sXG5cbn07XG4iXX0=