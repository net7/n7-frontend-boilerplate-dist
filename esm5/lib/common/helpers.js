/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/helpers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return key.split('_').map((/**
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
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGVBQWU7SUFDYixpQkFBaUI7Ozs7O0lBQWpCLFVBQWtCLEdBQVcsRUFBRSxLQUFjO1FBQTdDLGlCQUtDO1FBSkMsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Ozs7O1FBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSyxJQUFLLE9BQUEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUF2QyxDQUF1QyxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDRCxPQUFPOzs7O0lBQVAsVUFBUSxHQUFXO1FBQ2pCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBwcmV0dGlmeVNuYWtlQ2FzZShrZXk6IHN0cmluZywgbGFiZWw/OiBzdHJpbmcpIHtcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIGtleS5zcGxpdCgnXycpLm1hcCgod29yZCwgaW5kZXgpID0+IGluZGV4ID09PSAwID8gdGhpcy51Y0ZpcnN0KHdvcmQpIDogd29yZCkuam9pbignICcpO1xuICB9LFxuICB1Y0ZpcnN0KHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgfVxufTtcbiJdfQ==