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
    /**
     * @param {?} value
     * @return {?}
     */
    metadataIsEmpty(value) {
        return (!value
            || value === 'null');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQzs7TUFFeEIsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFO0FBRWpDLGVBQWU7Ozs7OztJQUNiLGlCQUFpQixDQUFDLEdBQVcsRUFBRSxLQUFjO1FBQzNDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxRyxDQUFDOzs7OztJQUNELE9BQU8sQ0FBQyxHQUFXO1FBQ2pCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBQ0QsT0FBTyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sRUFBRSxDQUFDO1NBQ1g7O2NBQ0ssU0FBUyxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQzs7Y0FDdkQsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUU7UUFDckQsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQzNCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBQ0QsV0FBVztRQUNULE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFDRCxrQkFBa0IsQ0FBQyxHQUFHO1FBQ3BCLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3Qyw4Q0FBOEM7WUFDOUMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMscUJBQXFCO1NBQ2xGO1FBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMscUJBQXFCO0lBQzVFLENBQUM7Ozs7O0lBQ0Qsb0JBQW9CLENBQUMsR0FBRztRQUN0QixPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQjtJQUN4RixDQUFDOzs7OztJQUNELGVBQWUsQ0FBQyxLQUFLO1FBQ25CLE9BQU8sQ0FDTCxDQUFDLEtBQUs7ZUFDSCxLQUFLLEtBQUssTUFBTSxDQUNwQixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5JztcblxuY29uc3QgZG9tUGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByZXR0aWZ5U25ha2VDYXNlKGtleTogc3RyaW5nLCBsYWJlbD86IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuICAgIHJldHVybiAoa2V5IHx8ICcnKS5zcGxpdCgnXycpLm1hcCgod29yZCwgaW5kZXgpID0+IChpbmRleCA9PT0gMCA/IHRoaXMudWNGaXJzdCh3b3JkKSA6IHdvcmQpKS5qb2luKCcgJyk7XG4gIH0sXG4gIHVjRmlyc3Qoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9LFxuICBzbHVnaWZ5KHN0cjogc3RyaW5nKSB7XG4gICAgaWYgKCFzdHIpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgcGFyc2VkRG9jID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdHIsICd0ZXh0L2h0bWwnKTtcbiAgICBjb25zdCBwYXJzZWRTdHJpbmcgPSBwYXJzZWREb2MuYm9keS50ZXh0Q29udGVudCB8fCAnJztcbiAgICByZXR1cm4gc2x1Z2lmeShwYXJzZWRTdHJpbmcsIHtcbiAgICAgIHJlbW92ZTogL1sqK34uKCknXCIhOkAsXS9nLFxuICAgICAgbG93ZXI6IHRydWVcbiAgICB9KTtcbiAgfSxcbiAgYnJvd3NlcklzSUUoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oTVNJRXxUcmlkZW50KS8pO1xuICB9LFxuICBlc2NhcGVEb3VibGVRdW90ZXMoc3RyKSB7XG4gICAgaWYgKHN0ci5zZWFyY2goL1xcXFw/KFwiKShbXFx3XFxzXSspXFxcXD8oXCIpL2cpID49IDApIHtcbiAgICAgIC8vIG1hdGNoIHBpZWNlIG9mIHN0cmluZyBiZXR3ZWVuIGRvdWJsZSBxdW90ZXNcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxcXD8oXCIpKFtcXHdcXHNdKylcXFxcPyhcIikvZywgJ1xcXFwkMSQyXFxcXCQzJyk7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcXFwoW1xcc1xcU10pfChcIikvZywgJ1xcXFxcXFxcXFxcXCQxJDInKTsgLy8gdGhhbmtzIEBzbGV2aXRoYW4hXG4gIH0sXG4gIHVuZXNjYXBlRG91YmxlUXVvdGVzKHN0cikge1xuICAgIHJldHVybiAoc3RyICYmIHN0ciAhPT0gJycpID8gc3RyLnJlcGxhY2UoL1xcXFwqKFwiKS9nLCAnJDEnKSA6IHN0cjsgLy8gdGhhbmtzIEBzbGV2aXRoYW4hXG4gIH0sXG4gIG1ldGFkYXRhSXNFbXB0eSh2YWx1ZSkge1xuICAgIHJldHVybiAoXG4gICAgICAhdmFsdWVcbiAgICAgIHx8IHZhbHVlID09PSAnbnVsbCdcbiAgICApO1xuICB9XG59O1xuIl19