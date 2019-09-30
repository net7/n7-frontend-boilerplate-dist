/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var AwPatrimonioLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwPatrimonioLayoutDS, _super);
    function AwPatrimonioLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * If you are not using these variables (from your-layout.ts),
    * remove them from onInit() parameters and inside the function.
    */
    /**
     * If you are not using these variables (from your-layout.ts),
     * remove them from onInit() parameters and inside the function.
     * @param {?} __0
     * @return {?}
     */
    AwPatrimonioLayoutDS.prototype.onInit = /**
     * If you are not using these variables (from your-layout.ts),
     * remove them from onInit() parameters and inside the function.
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, options = _a.options, titleService = _a.titleService, communication = _a.communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.titleService = titleService;
        this.communication = communication;
        this.options = options;
        this.sidebarCollapsed = false;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwPatrimonioLayoutDS.prototype.getNavigation = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.communication.request$('getTree', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: { treeId: id }
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AwPatrimonioLayoutDS.prototype.updateNavigation = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var treeObj = {
            items: []
        };
        data['branches'].forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            treeObj['items'].push(_this.parseTree(item, false, []));
        }));
        /** @type {?} */
        var header = {
            iconLeft: 'n7-icon-tree-icon',
            text: data['label'],
            iconRight: 'n7-icon-angle-left',
            classes: 'is-expanded',
            payload: 'header'
        };
        this.one('aw-tree').update(treeObj);
        this.one('aw-sidebar-header').update(header);
        this.one('aw-scheda-breadcrumbs').update(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwPatrimonioLayoutDS.prototype.loadItem = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (id) {
            return this.communication.request$('getItemDetails', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return console.error(error); }),
                params: { itemId: id }
            });
        }
        else {
            /* TODO: valori statici, da prendere da config */
            this.pageTitle = 'Collezione d\'Arte';
            this.hasBreadcrumb = false;
            this.contentParts = [
                {
                    type: "text",
                    title: 'Collezione d\'Arte',
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sagittis pulvinar. Etiam iaculis maximus metus, id tincidunt libero auctor et. Proin tempus turpis vel erat ultrices, id vestibulum ante cursus. Vestibulum lobortis, ante at eleifend consequat, massa libero bibendum justo, id fermentum magna odio ac nulla. Cras aliquet scelerisque malesuada. Mauris congue fermentum tristique. Nulla imperdiet accumsan dui, tristique lobortis metus eleifend non. Donec quis odio massa. Cras sit amet sem eu turpis molestie blandit vitae sed nibh. Pellentesque ornare enim nisl, et efficitur ante elementum a. Ut nec ex finibus, congue libero feugiat, aliquam ante. Cras sem neque, pellentesque eget mi at, auctor vulputate tellus. Sed aliquam mi a tortor ultricies interdum. Etiam tincidunt nunc commodo nulla porttitor semper. Etiam porta lacinia libero a mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    type: "text",
                    title: 'Centro Archivi',
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sagittis pulvinar. Etiam iaculis maximus metus, id tincidunt libero auctor et. Proin tempus turpis vel erat ultrices, id vestibulum ante cursus. Vestibulum lobortis, ante at eleifend consequat, massa libero bibendum justo, id fermentum magna odio ac nulla. Cras aliquet scelerisque malesuada. Mauris congue fermentum tristique. Nulla imperdiet accumsan dui, tristique lobortis metus eleifend non. Donec quis odio massa. Cras sit amet sem eu turpis molestie blandit vitae sed nibh. Pellentesque ornare enim nisl, et efficitur ante elementum a. Ut nec ex finibus, congue libero feugiat, aliquam ante. Cras sem neque, pellentesque eget mi at, auctor vulputate tellus. Sed aliquam mi a tortor ultricies interdum. Etiam tincidunt nunc commodo nulla porttitor semper. Etiam porta lacinia libero a mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
            ];
        }
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwPatrimonioLayoutDS.prototype.loadContent = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        this.hasBreadcrumb = true;
        if (response) {
            this.contentParts = [];
            if (response.image) {
                this.contentParts.push({
                    image: response.image,
                    type: 'image'
                });
            }
            this.contentParts.push({
                title: response.title,
                content: response.text,
                type: 'text'
            });
            /** @type {?} */
            var breadcrumbs_1 = {
                items: []
            };
            if (response.fields) {
                response.fields.forEach((/**
                 * @param {?} field
                 * @return {?}
                 */
                function (field) {
                    _this.contentParts.push({
                        title: field.label,
                        content: response.text,
                        type: 'metaGroup',
                        fields: field.fields
                    });
                }));
            }
            response.breadcrumbs.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                breadcrumbs_1.items.push({
                    label: element.label,
                    payload: element.link
                });
            }));
            this.one('aw-scheda-breadcrumbs').update(breadcrumbs_1);
        }
    };
    /**
     * @private
     * @param {?} data
     * @param {?} toggle
     * @param {?} parents
     * @return {?}
     */
    AwPatrimonioLayoutDS.prototype.parseTree = /**
     * @private
     * @param {?} data
     * @param {?} toggle
     * @param {?} parents
     * @return {?}
     */
    function (data, toggle, parents) {
        var _this = this;
        /** @type {?} */
        var currParents = tslib_1.__spread(parents);
        /** @type {?} */
        var treeItem = {};
        Object.keys(data).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (toggle) {
                treeItem['toggle'] = {
                    icon: 'n7-icon-angle-right',
                    payload: {
                        source: "toggle",
                        id: data['id'],
                        parents: currParents,
                    }
                };
            }
            if (key != "branches") {
                switch (key) {
                    case "label":
                        treeItem['text'] = data[key];
                        break;
                    case "icon":
                        if (toggle) {
                            treeItem['toggle']['icon'] = data[key];
                        }
                        break;
                    case "id":
                        treeItem['_meta'] = data[key];
                        treeItem['payload'] = {
                            source: "menuItem",
                            id: data['id']
                        };
                        break;
                    default:
                        data[key];
                        break;
                }
                treeItem['classes'] = 'is-collapsed';
            }
            else if (data['branches'] != null) {
                currParents.push(data['id']);
                /*Handle cases with menu item with children but without toggle*/
                if (!toggle) {
                    treeItem['payload']['source'] = "ToggleMenuItem";
                    treeItem['payload']['parents'] = currParents;
                }
                treeItem['items'] = [];
                data[key].forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    treeItem['items'].push(_this.parseTree(item, true, currParents));
                }));
            }
        }));
        return treeItem;
    };
    /**
     * @return {?}
     */
    AwPatrimonioLayoutDS.prototype.collapseSidebar = /**
     * @return {?}
     */
    function () {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    };
    return AwPatrimonioLayoutDS;
}(LayoutDataSource));
export { AwPatrimonioLayoutDS };
if (false) {
    /**
     * If you are not using these variables (from your-layout.ts),
     * remove them from here too.
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @protected
     */
    AwPatrimonioLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @protected
     */
    AwPatrimonioLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @protected
     */
    AwPatrimonioLayoutDS.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    AwPatrimonioLayoutDS.prototype.titleService;
    /** @type {?} */
    AwPatrimonioLayoutDS.prototype.options;
    /** @type {?} */
    AwPatrimonioLayoutDS.prototype.pageTitle;
    /** @type {?} */
    AwPatrimonioLayoutDS.prototype.hasBreadcrumb;
    /** @type {?} */
    AwPatrimonioLayoutDS.prototype.contentParts;
    /** @type {?} */
    AwPatrimonioLayoutDS.prototype.tree;
    /** @type {?} */
    AwPatrimonioLayoutDS.prototype.sidebarCollapsed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSXJEO0lBQTBDLGdEQUFnQjtJQUExRDs7SUF5TEEsQ0FBQztJQXhLQzs7O01BR0U7Ozs7Ozs7SUFDRixxQ0FBTTs7Ozs7O0lBQU4sVUFBTyxFQUF5RTtZQUF4RSxnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsa0JBQU0sRUFBRSxvQkFBTyxFQUFFLDhCQUFZLEVBQUUsZ0NBQWE7UUFDNUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELDRDQUFhOzs7O0lBQWIsVUFBZSxFQUFFO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUMsT0FBTzs7OztZQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQTtZQUN4QyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1NBQ3ZCLENBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7O0lBRUQsK0NB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LENBQUE7YUFDSDtRQUNELENBQUMsRUFBQyxDQUFBO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELDhDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqRCxDQUFDO0lBRUgsMkJBQUM7QUFBRCxDQUFDLEFBekxELENBQTBDLGdCQUFnQixHQXlMekQ7Ozs7Ozs7OztJQXBMQyw2Q0FBMkI7Ozs7O0lBQzNCLDZDQUE2Qjs7Ozs7SUFDN0IseUNBQXlCOzs7OztJQUN6QixzQ0FBc0I7Ozs7O0lBQ3RCLDRDQUE0Qjs7SUFFNUIsdUNBQW9COztJQUNwQix5Q0FBeUI7O0lBQ3pCLDZDQUE4Qjs7SUFDOUIsNENBQXlCOztJQUN6QixvQ0FBaUI7O0lBQ2pCLGdEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJdGVtUHJldmlld0NvbXBvbmVudCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIEF3UGF0cmltb25pb0xheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIC8qKlxuICAqIElmIHlvdSBhcmUgbm90IHVzaW5nIHRoZXNlIHZhcmlhYmxlcyAoZnJvbSB5b3VyLWxheW91dC50cyksIFxuICAqIHJlbW92ZSB0aGVtIGZyb20gaGVyZSB0b28uXG4gICovXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XG4gIHByb3RlY3RlZCByb3V0ZXI6IGFueTtcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcbiAgcHVibGljIGhhc0JyZWFkY3J1bWI6IGJvb2xlYW47XG4gIHB1YmxpYyBjb250ZW50UGFydHM6IGFueTtcbiAgcHVibGljIHRyZWU6IGFueTtcbiAgcHVibGljIHNpZGViYXJDb2xsYXBzZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAqIElmIHlvdSBhcmUgbm90IHVzaW5nIHRoZXNlIHZhcmlhYmxlcyAoZnJvbSB5b3VyLWxheW91dC50cyksIFxuICAqIHJlbW92ZSB0aGVtIGZyb20gb25Jbml0KCkgcGFyYW1ldGVycyBhbmQgaW5zaWRlIHRoZSBmdW5jdGlvbi5cbiAgKi9cbiAgb25Jbml0KHtjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uIH0pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uczsgXG4gICAgdGhpcy5zaWRlYmFyQ29sbGFwc2VkID0gZmFsc2U7XG4gIH1cblxuICBnZXROYXZpZ2F0aW9uKCBpZCApIHtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRUcmVlJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczogeyB0cmVlSWQ6IGlkIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlTmF2aWdhdGlvbiggZGF0YSApIHtcbiAgICBsZXQgdHJlZU9iaiA9IHtcbiAgICAgIGl0ZW1zOiBbXVxuICAgIH07XG5cbiAgICBkYXRhWydicmFuY2hlcyddLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgdHJlZU9ialsnaXRlbXMnXS5wdXNoKCB0aGlzLnBhcnNlVHJlZShpdGVtLCBmYWxzZSwgW10pICk7XG4gICAgfSlcblxuICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICBpY29uTGVmdDogJ243LWljb24tdHJlZS1pY29uJyxcbiAgICAgIHRleHQ6ICBkYXRhWydsYWJlbCddLFxuICAgICAgaWNvblJpZ2h0OiAnbjctaWNvbi1hbmdsZS1sZWZ0JyxcbiAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXG4gICAgICBwYXlsb2FkOiAnaGVhZGVyJ1xuICAgIH07XG5cbiAgICB0aGlzLm9uZSgnYXctdHJlZScpLnVwZGF0ZSh0cmVlT2JqKTtcbiAgICB0aGlzLm9uZSgnYXctc2lkZWJhci1oZWFkZXInKS51cGRhdGUoaGVhZGVyKTtcbiAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWJyZWFkY3J1bWJzJykudXBkYXRlKG51bGwpO1xuICB9XG5cbiAgbG9hZEl0ZW0oaWQpe1xuICAgIGlmKGlkKSB7XG4gICAgICByZXR1cm4gIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0SXRlbURldGFpbHMnLCB7XG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgIHBhcmFtczogeyBpdGVtSWQ6IGlkIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIFRPRE86IHZhbG9yaSBzdGF0aWNpLCBkYSBwcmVuZGVyZSBkYSBjb25maWcgKi9cbiAgICAgIHRoaXMucGFnZVRpdGxlID0gJ0NvbGxlemlvbmUgZFxcJ0FydGUnO1xuICAgICAgdGhpcy5oYXNCcmVhZGNydW1iID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIHRpdGxlOiAnQ29sbGV6aW9uZSBkXFwnQXJ0ZScsXG4gICAgICAgICAgY29udGVudDogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNb3JiaSBncmF2aWRhIHNhZ2l0dGlzIHB1bHZpbmFyLiBFdGlhbSBpYWN1bGlzIG1heGltdXMgbWV0dXMsIGlkIHRpbmNpZHVudCBsaWJlcm8gYXVjdG9yIGV0LiBQcm9pbiB0ZW1wdXMgdHVycGlzIHZlbCBlcmF0IHVsdHJpY2VzLCBpZCB2ZXN0aWJ1bHVtIGFudGUgY3Vyc3VzLiBWZXN0aWJ1bHVtIGxvYm9ydGlzLCBhbnRlIGF0IGVsZWlmZW5kIGNvbnNlcXVhdCwgbWFzc2EgbGliZXJvIGJpYmVuZHVtIGp1c3RvLCBpZCBmZXJtZW50dW0gbWFnbmEgb2RpbyBhYyBudWxsYS4gQ3JhcyBhbGlxdWV0IHNjZWxlcmlzcXVlIG1hbGVzdWFkYS4gTWF1cmlzIGNvbmd1ZSBmZXJtZW50dW0gdHJpc3RpcXVlLiBOdWxsYSBpbXBlcmRpZXQgYWNjdW1zYW4gZHVpLCB0cmlzdGlxdWUgbG9ib3J0aXMgbWV0dXMgZWxlaWZlbmQgbm9uLiBEb25lYyBxdWlzIG9kaW8gbWFzc2EuIENyYXMgc2l0IGFtZXQgc2VtIGV1IHR1cnBpcyBtb2xlc3RpZSBibGFuZGl0IHZpdGFlIHNlZCBuaWJoLiBQZWxsZW50ZXNxdWUgb3JuYXJlIGVuaW0gbmlzbCwgZXQgZWZmaWNpdHVyIGFudGUgZWxlbWVudHVtIGEuIFV0IG5lYyBleCBmaW5pYnVzLCBjb25ndWUgbGliZXJvIGZldWdpYXQsIGFsaXF1YW0gYW50ZS4gQ3JhcyBzZW0gbmVxdWUsIHBlbGxlbnRlc3F1ZSBlZ2V0IG1pIGF0LCBhdWN0b3IgdnVscHV0YXRlIHRlbGx1cy4gU2VkIGFsaXF1YW0gbWkgYSB0b3J0b3IgdWx0cmljaWVzIGludGVyZHVtLiBFdGlhbSB0aW5jaWR1bnQgbnVuYyBjb21tb2RvIG51bGxhIHBvcnR0aXRvciBzZW1wZXIuIEV0aWFtIHBvcnRhIGxhY2luaWEgbGliZXJvIGEgbWF0dGlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICB0aXRsZTogJ0NlbnRybyBBcmNoaXZpJyxcbiAgICAgICAgICBjb250ZW50OiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1vcmJpIGdyYXZpZGEgc2FnaXR0aXMgcHVsdmluYXIuIEV0aWFtIGlhY3VsaXMgbWF4aW11cyBtZXR1cywgaWQgdGluY2lkdW50IGxpYmVybyBhdWN0b3IgZXQuIFByb2luIHRlbXB1cyB0dXJwaXMgdmVsIGVyYXQgdWx0cmljZXMsIGlkIHZlc3RpYnVsdW0gYW50ZSBjdXJzdXMuIFZlc3RpYnVsdW0gbG9ib3J0aXMsIGFudGUgYXQgZWxlaWZlbmQgY29uc2VxdWF0LCBtYXNzYSBsaWJlcm8gYmliZW5kdW0ganVzdG8sIGlkIGZlcm1lbnR1bSBtYWduYSBvZGlvIGFjIG51bGxhLiBDcmFzIGFsaXF1ZXQgc2NlbGVyaXNxdWUgbWFsZXN1YWRhLiBNYXVyaXMgY29uZ3VlIGZlcm1lbnR1bSB0cmlzdGlxdWUuIE51bGxhIGltcGVyZGlldCBhY2N1bXNhbiBkdWksIHRyaXN0aXF1ZSBsb2JvcnRpcyBtZXR1cyBlbGVpZmVuZCBub24uIERvbmVjIHF1aXMgb2RpbyBtYXNzYS4gQ3JhcyBzaXQgYW1ldCBzZW0gZXUgdHVycGlzIG1vbGVzdGllIGJsYW5kaXQgdml0YWUgc2VkIG5pYmguIFBlbGxlbnRlc3F1ZSBvcm5hcmUgZW5pbSBuaXNsLCBldCBlZmZpY2l0dXIgYW50ZSBlbGVtZW50dW0gYS4gVXQgbmVjIGV4IGZpbmlidXMsIGNvbmd1ZSBsaWJlcm8gZmV1Z2lhdCwgYWxpcXVhbSBhbnRlLiBDcmFzIHNlbSBuZXF1ZSwgcGVsbGVudGVzcXVlIGVnZXQgbWkgYXQsIGF1Y3RvciB2dWxwdXRhdGUgdGVsbHVzLiBTZWQgYWxpcXVhbSBtaSBhIHRvcnRvciB1bHRyaWNpZXMgaW50ZXJkdW0uIEV0aWFtIHRpbmNpZHVudCBudW5jIGNvbW1vZG8gbnVsbGEgcG9ydHRpdG9yIHNlbXBlci4gRXRpYW0gcG9ydGEgbGFjaW5pYSBsaWJlcm8gYSBtYXR0aXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXG4gIGxvYWRDb250ZW50KHJlc3BvbnNlKSB7XG4gICAgdGhpcy5oYXNCcmVhZGNydW1iID0gdHJ1ZTtcbiAgICAgIGlmKHJlc3BvbnNlKXtcbiAgICAgICAgdGhpcy5jb250ZW50UGFydHMgPSBbXTtcbiAgICAgICAgaWYoIHJlc3BvbnNlLmltYWdlICkge1xuICAgICAgICAgIHRoaXMuY29udGVudFBhcnRzLnB1c2goeyAgICBcbiAgICAgICAgICAgIGltYWdlOiByZXNwb25zZS5pbWFnZSwgICAgICAgXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnXG4gICAgICAgICAgfSk7ICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZW50UGFydHMucHVzaCh7ICAgICAgICAgIFxuICAgICAgICAgIHRpdGxlOiByZXNwb25zZS50aXRsZSxcbiAgICAgICAgICBjb250ZW50OiByZXNwb25zZS50ZXh0LFxuICAgICAgICAgIHR5cGU6ICd0ZXh0J1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGxldCBicmVhZGNydW1icyA9IHtcbiAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYocmVzcG9uc2UuZmllbGRzKXtcbiAgICAgICAgICByZXNwb25zZS5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRQYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS50ZXh0LFxuICAgICAgICAgICAgICB0eXBlOiAnbWV0YUdyb3VwJyxcbiAgICAgICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJlc3BvbnNlLmJyZWFkY3J1bWJzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogZWxlbWVudC5sYWJlbCxcbiAgICAgICAgICAgIHBheWxvYWQ6IGVsZW1lbnQubGlua1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWJyZWFkY3J1bWJzJykudXBkYXRlKGJyZWFkY3J1bWJzKTtcbiAgICAgIH0gICBcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VUcmVlKGRhdGEsIHRvZ2dsZSwgcGFyZW50cykge1xuICAgIHZhciBjdXJyUGFyZW50cyA9IFsuLi5wYXJlbnRzXTtcbiAgICBsZXQgdHJlZUl0ZW0gPSB7fTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKCBrZXkgPT4ge1xuICAgICAgaWYoIHRvZ2dsZSApe1xuICAgICAgICB0cmVlSXRlbVsndG9nZ2xlJ10gPSB7XG4gICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgc291cmNlOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgICBpZDogZGF0YVsnaWQnXSxcbiAgICAgICAgICAgICAgcGFyZW50czogY3VyclBhcmVudHMsXG4gICAgICAgICAgICB9ICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0gXG4gICAgXG4gICAgaWYoIGtleSAhPSBcImJyYW5jaGVzXCIgKSB7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlIFwibGFiZWxcIjogdHJlZUl0ZW1bJ3RleHQnXSA9IGRhdGFba2V5XTsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpY29uXCIgOiAgXG4gICAgICAgICAgICBpZiAodG9nZ2xlKSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHJlZUl0ZW1bJ3RvZ2dsZSddWydpY29uJ10gPSBkYXRhW2tleV07XG4gICAgICAgICAgICB9ICAgICAgICAgICAgIFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpZFwiIDogICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB0cmVlSXRlbVsnX21ldGEnXSA9ICBkYXRhW2tleV07ICAgICAgIFxuICAgICAgICAgICAgdHJlZUl0ZW1bJ3BheWxvYWQnXSA9IHtcbiAgICAgICAgICAgICAgc291cmNlOiBcIm1lbnVJdGVtXCIsXG4gICAgICAgICAgICAgIGlkOiBkYXRhWydpZCddXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQgOiAgZGF0YVtrZXldOyBicmVhaztcbiAgICAgIH1cbiAgICAgIHRyZWVJdGVtWydjbGFzc2VzJ10gPSAnaXMtY29sbGFwc2VkJztcbiAgICB9XG4gICAgZWxzZSBpZiggZGF0YVsnYnJhbmNoZXMnXSAhPSBudWxsICkge1xuICAgICAgY3VyclBhcmVudHMucHVzaChkYXRhWydpZCddKTtcblxuICAgICAgLypIYW5kbGUgY2FzZXMgd2l0aCBtZW51IGl0ZW0gd2l0aCBjaGlsZHJlbiBidXQgd2l0aG91dCB0b2dnbGUqL1xuICAgICAgaWYoICF0b2dnbGUgKSB7XG4gICAgICAgIHRyZWVJdGVtWydwYXlsb2FkJ11bJ3NvdXJjZSddID0gXCJUb2dnbGVNZW51SXRlbVwiO1xuICAgICAgICB0cmVlSXRlbVsncGF5bG9hZCddWydwYXJlbnRzJ10gPSBjdXJyUGFyZW50cztcbiAgICAgIH1cblxuICAgICAgdHJlZUl0ZW1bJ2l0ZW1zJ10gPSBbXTsgICAgICAgICAgXG4gICAgICBkYXRhW2tleV0uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgIHRyZWVJdGVtWydpdGVtcyddLnB1c2goIHRoaXMucGFyc2VUcmVlKGl0ZW0sIHRydWUsIGN1cnJQYXJlbnRzKSApO1xuICAgICAgfSkgICBcbiAgICB9ICAgICAgICBcbiAgICB9KVxuICAgIHJldHVybiB0cmVlSXRlbTtcbiAgfVxuXG4gIGNvbGxhcHNlU2lkZWJhcigpIHtcbiAgICB0aGlzLnNpZGViYXJDb2xsYXBzZWQgPSAhdGhpcy5zaWRlYmFyQ29sbGFwc2VkO1xuICB9XG5cbn0iXX0=