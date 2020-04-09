/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/helpers.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7O01BRXhCLFNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRTtBQUVqQyxlQUFlOzs7Ozs7SUFDYixpQkFBaUIsQ0FBQyxHQUFXLEVBQUUsS0FBYztRQUMzQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzs7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUcsQ0FBQzs7Ozs7SUFDRCxPQUFPLENBQUMsR0FBVztRQUNqQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUNELE9BQU8sQ0FBQyxHQUFXO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLEVBQUUsQ0FBQztTQUNYOztjQUNLLFNBQVMsR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7O2NBQ3ZELFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFO1FBQ3JELE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRTtZQUMzQixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUNELFdBQVc7UUFDVCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBQ0Qsa0JBQWtCLENBQUMsR0FBRztRQUNwQixJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0MsOENBQThDO1lBQzlDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtTQUNsRjtRQUNELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtJQUM1RSxDQUFDOzs7OztJQUNELG9CQUFvQixDQUFDLEdBQUc7UUFDdEIsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUI7SUFDeEYsQ0FBQztDQUVGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5JztcblxuY29uc3QgZG9tUGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByZXR0aWZ5U25ha2VDYXNlKGtleTogc3RyaW5nLCBsYWJlbD86IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuICAgIHJldHVybiAoa2V5IHx8ICcnKS5zcGxpdCgnXycpLm1hcCgod29yZCwgaW5kZXgpID0+IChpbmRleCA9PT0gMCA/IHRoaXMudWNGaXJzdCh3b3JkKSA6IHdvcmQpKS5qb2luKCcgJyk7XG4gIH0sXG4gIHVjRmlyc3Qoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9LFxuICBzbHVnaWZ5KHN0cjogc3RyaW5nKSB7XG4gICAgaWYgKCFzdHIpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgcGFyc2VkRG9jID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdHIsICd0ZXh0L2h0bWwnKTtcbiAgICBjb25zdCBwYXJzZWRTdHJpbmcgPSBwYXJzZWREb2MuYm9keS50ZXh0Q29udGVudCB8fCAnJztcbiAgICByZXR1cm4gc2x1Z2lmeShwYXJzZWRTdHJpbmcsIHtcbiAgICAgIHJlbW92ZTogL1sqK34uKCknXCIhOkAsXS9nLFxuICAgICAgbG93ZXI6IHRydWVcbiAgICB9KTtcbiAgfSxcbiAgYnJvd3NlcklzSUUoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oTVNJRXxUcmlkZW50KS8pO1xuICB9LFxuICBlc2NhcGVEb3VibGVRdW90ZXMoc3RyKSB7XG4gICAgaWYgKHN0ci5zZWFyY2goL1xcXFw/KFwiKShbXFx3XFxzXSspXFxcXD8oXCIpL2cpID49IDApIHtcbiAgICAgIC8vIG1hdGNoIHBpZWNlIG9mIHN0cmluZyBiZXR3ZWVuIGRvdWJsZSBxdW90ZXNcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxcXD8oXCIpKFtcXHdcXHNdKylcXFxcPyhcIikvZywgJ1xcXFwkMSQyXFxcXCQzJyk7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcXFwoW1xcc1xcU10pfChcIikvZywgJ1xcXFxcXFxcXFxcXCQxJDInKTsgLy8gdGhhbmtzIEBzbGV2aXRoYW4hXG4gIH0sXG4gIHVuZXNjYXBlRG91YmxlUXVvdGVzKHN0cikge1xuICAgIHJldHVybiAoc3RyICYmIHN0ciAhPT0gJycpID8gc3RyLnJlcGxhY2UoL1xcXFwqKFwiKS9nLCAnJDEnKSA6IHN0cjsgLy8gdGhhbmtzIEBzbGV2aXRoYW4hXG4gIH0sXG5cbn07XG4iXX0=