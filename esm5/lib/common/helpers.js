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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDOztJQUVsQixTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUU7QUFFakMsZUFBZTtJQUNiLGlCQUFpQjs7Ozs7SUFBakIsVUFBa0IsR0FBVyxFQUFFLEtBQWM7UUFBN0MsaUJBS0M7UUFKQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzs7Ozs7UUFBQyxVQUFDLElBQUksRUFBRSxLQUFLLElBQUssT0FBQSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUF6QyxDQUF5QyxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFDRCxPQUFPOzs7O0lBQVAsVUFBUSxHQUFXO1FBQ2pCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxPQUFPOzs7O0lBQVAsVUFBUSxHQUFXO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLEVBQUUsQ0FBQztTQUNYOztZQUNLLFNBQVMsR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7O1lBQ3ZELFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFO1FBQ3JELE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxXQUFXOzs7O1FBQ1QsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0Qsa0JBQWtCOzs7O2NBQUMsR0FBRztRQUNwQixJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0MsOENBQThDO1lBQzlDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtTQUNsRjtRQUNELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtJQUM1RSxDQUFDO0lBQ0Qsb0JBQW9COzs7O2NBQUMsR0FBRztRQUN0QixPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQjtJQUN4RixDQUFDO0NBRUYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzbHVnIGZyb20gJ3NsdWcnO1xuXG5jb25zdCBkb21QYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJldHRpZnlTbmFrZUNhc2Uoa2V5OiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIChrZXkgfHwgJycpLnNwbGl0KCdfJykubWFwKCh3b3JkLCBpbmRleCkgPT4gKGluZGV4ID09PSAwID8gdGhpcy51Y0ZpcnN0KHdvcmQpIDogd29yZCkpLmpvaW4oJyAnKTtcbiAgfSxcbiAgdWNGaXJzdChzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gIH0sXG4gIHNsdWdpZnkoc3RyOiBzdHJpbmcpIHtcbiAgICBpZiAoIXN0cikge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBwYXJzZWREb2MgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0ciwgJ3RleHQvaHRtbCcpO1xuICAgIGNvbnN0IHBhcnNlZFN0cmluZyA9IHBhcnNlZERvYy5ib2R5LnRleHRDb250ZW50IHx8ICcnO1xuICAgIHJldHVybiBzbHVnKHBhcnNlZFN0cmluZywgeyBsb3dlcjogdHJ1ZSB9KTtcbiAgfSxcbiAgYnJvd3NlcklzSUUoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oTVNJRXxUcmlkZW50KS8pO1xuICB9LFxuICBlc2NhcGVEb3VibGVRdW90ZXMoc3RyKSB7XG4gICAgaWYgKHN0ci5zZWFyY2goL1xcXFw/KFwiKShbXFx3XFxzXSspXFxcXD8oXCIpL2cpID49IDApIHtcbiAgICAgIC8vIG1hdGNoIHBpZWNlIG9mIHN0cmluZyBiZXR3ZWVuIGRvdWJsZSBxdW90ZXNcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxcXD8oXCIpKFtcXHdcXHNdKylcXFxcPyhcIikvZywgJ1xcXFwkMSQyXFxcXCQzJyk7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcXFwoW1xcc1xcU10pfChcIikvZywgJ1xcXFxcXFxcXFxcXCQxJDInKTsgLy8gdGhhbmtzIEBzbGV2aXRoYW4hXG4gIH0sXG4gIHVuZXNjYXBlRG91YmxlUXVvdGVzKHN0cikge1xuICAgIHJldHVybiAoc3RyICYmIHN0ciAhPT0gJycpID8gc3RyLnJlcGxhY2UoL1xcXFwqKFwiKS9nLCAnJDEnKSA6IHN0cjsgLy8gdGhhbmtzIEBzbGV2aXRoYW4hXG4gIH0sXG5cbn07XG4iXX0=