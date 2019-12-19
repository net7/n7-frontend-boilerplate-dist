/**
 * @fileoverview added by tsickle
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
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsZUFBZTtJQUNiLGlCQUFpQjs7Ozs7SUFBakIsVUFBa0IsR0FBVyxFQUFFLEtBQWM7UUFBN0MsaUJBS0M7UUFKQyxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7OztRQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUssSUFBSyxPQUFBLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBdkMsQ0FBdUMsRUFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBQ0QsT0FBTzs7OztJQUFQLFVBQVEsR0FBVztRQUNqQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgcHJldHRpZnlTbmFrZUNhc2Uoa2V5OiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nKSB7XG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuICAgIHJldHVybiAoa2V5IHx8ICcnKS5zcGxpdCgnXycpLm1hcCgod29yZCwgaW5kZXgpID0+IGluZGV4ID09PSAwID8gdGhpcy51Y0ZpcnN0KHdvcmQpIDogd29yZCkuam9pbignICcpO1xuICB9LFxuICB1Y0ZpcnN0KHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgfVxufTtcbiJdfQ==