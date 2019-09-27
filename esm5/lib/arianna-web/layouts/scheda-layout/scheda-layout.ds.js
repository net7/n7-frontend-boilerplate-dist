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
            function (error) { return console.log(error); }),
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
                function (error) { return console.log(error); }),
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
        console.log(this.sidebarCollapsed);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSXJEO0lBQTBDLGdEQUFnQjtJQUExRDs7SUEwTEEsQ0FBQztJQXpLQzs7O01BR0U7Ozs7Ozs7SUFDRixxQ0FBTTs7Ozs7O0lBQU4sVUFBTyxFQUF5RTtZQUF4RSxnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsa0JBQU0sRUFBRSxvQkFBTyxFQUFFLDhCQUFZLEVBQUUsZ0NBQWE7UUFDNUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELDRDQUFhOzs7O0lBQWIsVUFBZSxFQUFFO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUMsT0FBTzs7OztZQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQTtZQUN0QyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1NBQ3ZCLENBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7O0lBRUQsK0NB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LENBQUE7YUFDSDtRQUNELENBQUMsRUFBQyxDQUFBO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELDhDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFSCwyQkFBQztBQUFELENBQUMsQUExTEQsQ0FBMEMsZ0JBQWdCLEdBMEx6RDs7Ozs7Ozs7O0lBckxDLDZDQUEyQjs7Ozs7SUFDM0IsNkNBQTZCOzs7OztJQUM3Qix5Q0FBeUI7Ozs7O0lBQ3pCLHNDQUFzQjs7Ozs7SUFDdEIsNENBQTRCOztJQUU1Qix1Q0FBb0I7O0lBQ3BCLHlDQUF5Qjs7SUFDekIsNkNBQThCOztJQUM5Qiw0Q0FBeUI7O0lBQ3pCLG9DQUFpQjs7SUFDakIsZ0RBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEl0ZW1QcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgQXdQYXRyaW1vbmlvTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgLyoqXG4gICogSWYgeW91IGFyZSBub3QgdXNpbmcgdGhlc2UgdmFyaWFibGVzIChmcm9tIHlvdXItbGF5b3V0LnRzKSwgXG4gICogcmVtb3ZlIHRoZW0gZnJvbSBoZXJlIHRvby5cbiAgKi9cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgaGFzQnJlYWRjcnVtYjogYm9vbGVhbjtcbiAgcHVibGljIGNvbnRlbnRQYXJ0czogYW55O1xuICBwdWJsaWMgdHJlZTogYW55O1xuICBwdWJsaWMgc2lkZWJhckNvbGxhcHNlZDogYm9vbGVhbjtcbiAgLyoqXG4gICogSWYgeW91IGFyZSBub3QgdXNpbmcgdGhlc2UgdmFyaWFibGVzIChmcm9tIHlvdXItbGF5b3V0LnRzKSwgXG4gICogcmVtb3ZlIHRoZW0gZnJvbSBvbkluaXQoKSBwYXJhbWV0ZXJzIGFuZCBpbnNpZGUgdGhlIGZ1bmN0aW9uLlxuICAqL1xuICBvbkluaXQoe2NvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24gfSkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zOyBcbiAgICB0aGlzLnNpZGViYXJDb2xsYXBzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdldE5hdmlnYXRpb24oIGlkICkge1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldFRyZWUnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSxcbiAgICAgIHBhcmFtczogeyB0cmVlSWQ6IGlkIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlTmF2aWdhdGlvbiggZGF0YSApIHtcbiAgICBsZXQgdHJlZU9iaiA9IHtcbiAgICAgIGl0ZW1zOiBbXVxuICAgIH07XG5cbiAgICBkYXRhWydicmFuY2hlcyddLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgdHJlZU9ialsnaXRlbXMnXS5wdXNoKCB0aGlzLnBhcnNlVHJlZShpdGVtLCBmYWxzZSwgW10pICk7XG4gICAgfSlcblxuICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICBpY29uTGVmdDogJ243LWljb24tdHJlZS1pY29uJyxcbiAgICAgIHRleHQ6ICBkYXRhWydsYWJlbCddLFxuICAgICAgaWNvblJpZ2h0OiAnbjctaWNvbi1hbmdsZS1sZWZ0JyxcbiAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXG4gICAgICBwYXlsb2FkOiAnaGVhZGVyJ1xuICAgIH07XG5cbiAgICB0aGlzLm9uZSgnYXctdHJlZScpLnVwZGF0ZSh0cmVlT2JqKTtcbiAgICB0aGlzLm9uZSgnYXctc2lkZWJhci1oZWFkZXInKS51cGRhdGUoaGVhZGVyKTtcbiAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWJyZWFkY3J1bWJzJykudXBkYXRlKG51bGwpO1xuICB9XG5cbiAgbG9hZEl0ZW0oaWQpe1xuICAgIGlmKGlkKSB7XG4gICAgICByZXR1cm4gIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0SXRlbURldGFpbHMnLCB7XG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuICAgICAgICBwYXJhbXM6IHsgaXRlbUlkOiBpZCB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiBUT0RPOiB2YWxvcmkgc3RhdGljaSwgZGEgcHJlbmRlcmUgZGEgY29uZmlnICovXG4gICAgICB0aGlzLnBhZ2VUaXRsZSA9ICdDb2xsZXppb25lIGRcXCdBcnRlJztcbiAgICAgIHRoaXMuaGFzQnJlYWRjcnVtYiA9IGZhbHNlO1xuICAgICAgdGhpcy5jb250ZW50UGFydHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICB0aXRsZTogJ0NvbGxlemlvbmUgZFxcJ0FydGUnLFxuICAgICAgICAgIGNvbnRlbnQ6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTW9yYmkgZ3JhdmlkYSBzYWdpdHRpcyBwdWx2aW5hci4gRXRpYW0gaWFjdWxpcyBtYXhpbXVzIG1ldHVzLCBpZCB0aW5jaWR1bnQgbGliZXJvIGF1Y3RvciBldC4gUHJvaW4gdGVtcHVzIHR1cnBpcyB2ZWwgZXJhdCB1bHRyaWNlcywgaWQgdmVzdGlidWx1bSBhbnRlIGN1cnN1cy4gVmVzdGlidWx1bSBsb2JvcnRpcywgYW50ZSBhdCBlbGVpZmVuZCBjb25zZXF1YXQsIG1hc3NhIGxpYmVybyBiaWJlbmR1bSBqdXN0bywgaWQgZmVybWVudHVtIG1hZ25hIG9kaW8gYWMgbnVsbGEuIENyYXMgYWxpcXVldCBzY2VsZXJpc3F1ZSBtYWxlc3VhZGEuIE1hdXJpcyBjb25ndWUgZmVybWVudHVtIHRyaXN0aXF1ZS4gTnVsbGEgaW1wZXJkaWV0IGFjY3Vtc2FuIGR1aSwgdHJpc3RpcXVlIGxvYm9ydGlzIG1ldHVzIGVsZWlmZW5kIG5vbi4gRG9uZWMgcXVpcyBvZGlvIG1hc3NhLiBDcmFzIHNpdCBhbWV0IHNlbSBldSB0dXJwaXMgbW9sZXN0aWUgYmxhbmRpdCB2aXRhZSBzZWQgbmliaC4gUGVsbGVudGVzcXVlIG9ybmFyZSBlbmltIG5pc2wsIGV0IGVmZmljaXR1ciBhbnRlIGVsZW1lbnR1bSBhLiBVdCBuZWMgZXggZmluaWJ1cywgY29uZ3VlIGxpYmVybyBmZXVnaWF0LCBhbGlxdWFtIGFudGUuIENyYXMgc2VtIG5lcXVlLCBwZWxsZW50ZXNxdWUgZWdldCBtaSBhdCwgYXVjdG9yIHZ1bHB1dGF0ZSB0ZWxsdXMuIFNlZCBhbGlxdWFtIG1pIGEgdG9ydG9yIHVsdHJpY2llcyBpbnRlcmR1bS4gRXRpYW0gdGluY2lkdW50IG51bmMgY29tbW9kbyBudWxsYSBwb3J0dGl0b3Igc2VtcGVyLiBFdGlhbSBwb3J0YSBsYWNpbmlhIGxpYmVybyBhIG1hdHRpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgdGl0bGU6ICdDZW50cm8gQXJjaGl2aScsXG4gICAgICAgICAgY29udGVudDogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNb3JiaSBncmF2aWRhIHNhZ2l0dGlzIHB1bHZpbmFyLiBFdGlhbSBpYWN1bGlzIG1heGltdXMgbWV0dXMsIGlkIHRpbmNpZHVudCBsaWJlcm8gYXVjdG9yIGV0LiBQcm9pbiB0ZW1wdXMgdHVycGlzIHZlbCBlcmF0IHVsdHJpY2VzLCBpZCB2ZXN0aWJ1bHVtIGFudGUgY3Vyc3VzLiBWZXN0aWJ1bHVtIGxvYm9ydGlzLCBhbnRlIGF0IGVsZWlmZW5kIGNvbnNlcXVhdCwgbWFzc2EgbGliZXJvIGJpYmVuZHVtIGp1c3RvLCBpZCBmZXJtZW50dW0gbWFnbmEgb2RpbyBhYyBudWxsYS4gQ3JhcyBhbGlxdWV0IHNjZWxlcmlzcXVlIG1hbGVzdWFkYS4gTWF1cmlzIGNvbmd1ZSBmZXJtZW50dW0gdHJpc3RpcXVlLiBOdWxsYSBpbXBlcmRpZXQgYWNjdW1zYW4gZHVpLCB0cmlzdGlxdWUgbG9ib3J0aXMgbWV0dXMgZWxlaWZlbmQgbm9uLiBEb25lYyBxdWlzIG9kaW8gbWFzc2EuIENyYXMgc2l0IGFtZXQgc2VtIGV1IHR1cnBpcyBtb2xlc3RpZSBibGFuZGl0IHZpdGFlIHNlZCBuaWJoLiBQZWxsZW50ZXNxdWUgb3JuYXJlIGVuaW0gbmlzbCwgZXQgZWZmaWNpdHVyIGFudGUgZWxlbWVudHVtIGEuIFV0IG5lYyBleCBmaW5pYnVzLCBjb25ndWUgbGliZXJvIGZldWdpYXQsIGFsaXF1YW0gYW50ZS4gQ3JhcyBzZW0gbmVxdWUsIHBlbGxlbnRlc3F1ZSBlZ2V0IG1pIGF0LCBhdWN0b3IgdnVscHV0YXRlIHRlbGx1cy4gU2VkIGFsaXF1YW0gbWkgYSB0b3J0b3IgdWx0cmljaWVzIGludGVyZHVtLiBFdGlhbSB0aW5jaWR1bnQgbnVuYyBjb21tb2RvIG51bGxhIHBvcnR0aXRvciBzZW1wZXIuIEV0aWFtIHBvcnRhIGxhY2luaWEgbGliZXJvIGEgbWF0dGlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cblxuICBsb2FkQ29udGVudChyZXNwb25zZSkge1xuICAgIHRoaXMuaGFzQnJlYWRjcnVtYiA9IHRydWU7XG4gICAgICBpZihyZXNwb25zZSl7XG4gICAgICAgIHRoaXMuY29udGVudFBhcnRzID0gW107XG4gICAgICAgIGlmKCByZXNwb25zZS5pbWFnZSApIHtcbiAgICAgICAgICB0aGlzLmNvbnRlbnRQYXJ0cy5wdXNoKHsgICAgXG4gICAgICAgICAgICBpbWFnZTogcmVzcG9uc2UuaW1hZ2UsICAgICAgIFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJ1xuICAgICAgICAgIH0pOyAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGVudFBhcnRzLnB1c2goeyAgICAgICAgICBcbiAgICAgICAgICB0aXRsZTogcmVzcG9uc2UudGl0bGUsXG4gICAgICAgICAgY29udGVudDogcmVzcG9uc2UudGV4dCxcbiAgICAgICAgICB0eXBlOiAndGV4dCdcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgYnJlYWRjcnVtYnMgPSB7XG4gICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHJlc3BvbnNlLmZpZWxkcyl7XG4gICAgICAgICAgcmVzcG9uc2UuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50UGFydHMucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UudGV4dCxcbiAgICAgICAgICAgICAgdHlwZTogJ21ldGFHcm91cCcsXG4gICAgICAgICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXNwb25zZS5icmVhZGNydW1icy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGJyZWFkY3J1bWJzLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IGVsZW1lbnQubGFiZWwsXG4gICAgICAgICAgICBwYXlsb2FkOiBlbGVtZW50LmxpbmtcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1icmVhZGNydW1icycpLnVwZGF0ZShicmVhZGNydW1icyk7XG4gICAgICB9ICAgXG4gIH1cblxuICBwcml2YXRlIHBhcnNlVHJlZShkYXRhLCB0b2dnbGUsIHBhcmVudHMpIHtcbiAgICB2YXIgY3VyclBhcmVudHMgPSBbLi4ucGFyZW50c107XG4gICAgbGV0IHRyZWVJdGVtID0ge307XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgga2V5ID0+IHtcbiAgICAgIGlmKCB0b2dnbGUgKXtcbiAgICAgICAgdHJlZUl0ZW1bJ3RvZ2dsZSddID0ge1xuICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIHNvdXJjZTogXCJ0b2dnbGVcIixcbiAgICAgICAgICAgICAgaWQ6IGRhdGFbJ2lkJ10sXG4gICAgICAgICAgICAgIHBhcmVudHM6IGN1cnJQYXJlbnRzLFxuICAgICAgICAgICAgfSAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9IFxuICAgIFxuICAgIGlmKCBrZXkgIT0gXCJicmFuY2hlc1wiICkge1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSBcImxhYmVsXCI6IHRyZWVJdGVtWyd0ZXh0J10gPSBkYXRhW2tleV07IGJyZWFrO1xuICAgICAgICBjYXNlIFwiaWNvblwiIDogIFxuICAgICAgICAgICAgaWYgKHRvZ2dsZSkgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRyZWVJdGVtWyd0b2dnbGUnXVsnaWNvbiddID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgfSAgICAgICAgICAgICBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaWRcIiA6ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgdHJlZUl0ZW1bJ19tZXRhJ10gPSAgZGF0YVtrZXldOyAgICAgICBcbiAgICAgICAgICAgIHRyZWVJdGVtWydwYXlsb2FkJ10gPSB7XG4gICAgICAgICAgICAgIHNvdXJjZTogXCJtZW51SXRlbVwiLFxuICAgICAgICAgICAgICBpZDogZGF0YVsnaWQnXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0IDogIGRhdGFba2V5XTsgYnJlYWs7XG4gICAgICB9XG4gICAgICB0cmVlSXRlbVsnY2xhc3NlcyddID0gJ2lzLWNvbGxhcHNlZCc7XG4gICAgfVxuICAgIGVsc2UgaWYoIGRhdGFbJ2JyYW5jaGVzJ10gIT0gbnVsbCApIHtcbiAgICAgIGN1cnJQYXJlbnRzLnB1c2goZGF0YVsnaWQnXSk7XG5cbiAgICAgIC8qSGFuZGxlIGNhc2VzIHdpdGggbWVudSBpdGVtIHdpdGggY2hpbGRyZW4gYnV0IHdpdGhvdXQgdG9nZ2xlKi9cbiAgICAgIGlmKCAhdG9nZ2xlICkge1xuICAgICAgICB0cmVlSXRlbVsncGF5bG9hZCddWydzb3VyY2UnXSA9IFwiVG9nZ2xlTWVudUl0ZW1cIjtcbiAgICAgICAgdHJlZUl0ZW1bJ3BheWxvYWQnXVsncGFyZW50cyddID0gY3VyclBhcmVudHM7XG4gICAgICB9XG5cbiAgICAgIHRyZWVJdGVtWydpdGVtcyddID0gW107ICAgICAgICAgIFxuICAgICAgZGF0YVtrZXldLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICB0cmVlSXRlbVsnaXRlbXMnXS5wdXNoKCB0aGlzLnBhcnNlVHJlZShpdGVtLCB0cnVlLCBjdXJyUGFyZW50cykgKTtcbiAgICAgIH0pICAgXG4gICAgfSAgICAgICAgXG4gICAgfSlcbiAgICByZXR1cm4gdHJlZUl0ZW07XG4gIH1cblxuICBjb2xsYXBzZVNpZGViYXIoKSB7XG4gICAgdGhpcy5zaWRlYmFyQ29sbGFwc2VkID0gIXRoaXMuc2lkZWJhckNvbGxhcHNlZDtcbiAgICBjb25zb2xlLmxvZyggdGhpcy5zaWRlYmFyQ29sbGFwc2VkKTtcbiAgfVxuXG59Il19