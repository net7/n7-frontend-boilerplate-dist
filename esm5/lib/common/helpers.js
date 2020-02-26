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
        if (str.search(/\\?(")([\w\s]+)\\?(")/g) >= 0) {
            //match piece of string between double quotes
            return str.replace(/\\?(")([\w\s]+)\\?(")/g, "\\$1$2\\$3"); // thanks @slevithan!
        }
        else {
            return str.replace(/\\([\s\S])|(")/g, "\\\\\\$1$2"); // thanks @slevithan!
        }
    },
    unescapeDoubleQuotes: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        if (str && str != "")
            str = str.replace(/\\*(")/g, "$1"); // thanks @slevithan!
        return str;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQzs7SUFFbEIsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFO0FBRWpDLGVBQWU7SUFDYixpQkFBaUI7Ozs7O0lBQWpCLFVBQWtCLEdBQVcsRUFBRSxLQUFjO1FBQTdDLGlCQUtDO1FBSkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Ozs7O1FBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSyxJQUFLLE9BQUEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUF2QyxDQUF1QyxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFDRCxPQUFPOzs7O0lBQVAsVUFBUSxHQUFXO1FBQ2pCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxPQUFPOzs7O0lBQVAsVUFBUSxHQUFXO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLEVBQUUsQ0FBQztTQUNYOztZQUNLLFNBQVMsR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7O1lBQ3ZELFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFO1FBQ3JELE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxXQUFXOzs7O1FBQ1QsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0Qsa0JBQWtCOzs7O2NBQUMsR0FBRztRQUNwQixJQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsNkNBQTZDO1lBQzdDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtTQUNqRjthQUFNO1lBQ0wsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMscUJBQXFCO1NBQzFFO0lBRUgsQ0FBQztJQUNELG9CQUFvQjs7OztjQUFDLEdBQUc7UUFDdEIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUU7WUFDbEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMscUJBQXFCO1FBRTFELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUVGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2x1ZyBmcm9tICdzbHVnJztcblxuY29uc3QgZG9tUGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByZXR0aWZ5U25ha2VDYXNlKGtleTogc3RyaW5nLCBsYWJlbD86IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuICAgIHJldHVybiAoa2V5IHx8ICcnKS5zcGxpdCgnXycpLm1hcCgod29yZCwgaW5kZXgpID0+IGluZGV4ID09PSAwID8gdGhpcy51Y0ZpcnN0KHdvcmQpIDogd29yZCkuam9pbignICcpO1xuICB9LFxuICB1Y0ZpcnN0KHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgfSxcbiAgc2x1Z2lmeShzdHI6IHN0cmluZykge1xuICAgIGlmICghc3RyKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IHBhcnNlZERvYyA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJyk7XG4gICAgY29uc3QgcGFyc2VkU3RyaW5nID0gcGFyc2VkRG9jLmJvZHkudGV4dENvbnRlbnQgfHwgJyc7XG4gICAgcmV0dXJuIHNsdWcocGFyc2VkU3RyaW5nLCB7IGxvd2VyOiB0cnVlIH0pO1xuICB9LFxuICBicm93c2VySXNJRSgpIHtcbiAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhNU0lFfFRyaWRlbnQpLyk7XG4gIH0sXG4gIGVzY2FwZURvdWJsZVF1b3RlcyhzdHIpIHtcbiAgICBpZiAoIHN0ci5zZWFyY2goL1xcXFw/KFwiKShbXFx3XFxzXSspXFxcXD8oXCIpL2cpID49IDAgKXtcbiAgICAgIC8vbWF0Y2ggcGllY2Ugb2Ygc3RyaW5nIGJldHdlZW4gZG91YmxlIHF1b3Rlc1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFxcPyhcIikoW1xcd1xcc10rKVxcXFw/KFwiKS9nLFwiXFxcXCQxJDJcXFxcJDNcIik7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcXFwoW1xcc1xcU10pfChcIikvZyxcIlxcXFxcXFxcXFxcXCQxJDJcIik7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxuICAgIH1cblxuICB9LFxuICB1bmVzY2FwZURvdWJsZVF1b3RlcyhzdHIpIHtcbiAgICBpZiAoc3RyICYmIHN0ciAhPSBcIlwiKVxuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL1xcXFwqKFwiKS9nLFwiJDFcIik7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG59O1xuIl19