/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/helpers.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQzs7TUFFbEIsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFO0FBRWpDLGVBQWU7Ozs7OztJQUNiLGlCQUFpQixDQUFDLEdBQVcsRUFBRSxLQUFjO1FBQzNDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7Ozs7O0lBQ0QsT0FBTyxDQUFDLEdBQVc7UUFDakIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFDRCxPQUFPLENBQUMsR0FBVztRQUNqQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUM7U0FDWDs7Y0FDSyxTQUFTLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDOztjQUN2RCxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRTtRQUNyRCxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ0QsV0FBVztRQUNULE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFDRCxrQkFBa0IsQ0FBQyxHQUFHO1FBQ3BCLElBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5Qyw2Q0FBNkM7WUFDN0MsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMscUJBQXFCO1NBQ2pGO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7U0FDMUU7SUFFSCxDQUFDOzs7OztJQUNELG9CQUFvQixDQUFDLEdBQUc7UUFDdEIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUU7WUFDbEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMscUJBQXFCO1FBRTFELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUVGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2x1ZyBmcm9tICdzbHVnJztcblxuY29uc3QgZG9tUGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByZXR0aWZ5U25ha2VDYXNlKGtleTogc3RyaW5nLCBsYWJlbD86IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuICAgIHJldHVybiAoa2V5IHx8ICcnKS5zcGxpdCgnXycpLm1hcCgod29yZCwgaW5kZXgpID0+IGluZGV4ID09PSAwID8gdGhpcy51Y0ZpcnN0KHdvcmQpIDogd29yZCkuam9pbignICcpO1xuICB9LFxuICB1Y0ZpcnN0KHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgfSxcbiAgc2x1Z2lmeShzdHI6IHN0cmluZykge1xuICAgIGlmICghc3RyKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IHBhcnNlZERvYyA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJyk7XG4gICAgY29uc3QgcGFyc2VkU3RyaW5nID0gcGFyc2VkRG9jLmJvZHkudGV4dENvbnRlbnQgfHwgJyc7XG4gICAgcmV0dXJuIHNsdWcocGFyc2VkU3RyaW5nLCB7IGxvd2VyOiB0cnVlIH0pO1xuICB9LFxuICBicm93c2VySXNJRSgpIHtcbiAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhNU0lFfFRyaWRlbnQpLyk7XG4gIH0sXG4gIGVzY2FwZURvdWJsZVF1b3RlcyhzdHIpIHtcbiAgICBpZiAoIHN0ci5zZWFyY2goL1xcXFw/KFwiKShbXFx3XFxzXSspXFxcXD8oXCIpL2cpID49IDAgKXtcbiAgICAgIC8vbWF0Y2ggcGllY2Ugb2Ygc3RyaW5nIGJldHdlZW4gZG91YmxlIHF1b3Rlc1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFxcPyhcIikoW1xcd1xcc10rKVxcXFw/KFwiKS9nLFwiXFxcXCQxJDJcXFxcJDNcIik7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcXFwoW1xcc1xcU10pfChcIikvZyxcIlxcXFxcXFxcXFxcXCQxJDJcIik7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxuICAgIH1cblxuICB9LFxuICB1bmVzY2FwZURvdWJsZVF1b3RlcyhzdHIpIHtcbiAgICBpZiAoc3RyICYmIHN0ciAhPSBcIlwiKVxuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL1xcXFwqKFwiKS9nLFwiJDFcIik7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG59O1xuIl19