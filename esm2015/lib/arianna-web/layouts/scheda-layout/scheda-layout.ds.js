/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
export class AwPatrimonioLayoutDS extends LayoutDataSource {
    /**
     * If you are not using these variables (from your-layout.ts),
     * remove them from onInit() parameters and inside the function.
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, options, titleService, communication }) {
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.titleService = titleService;
        this.communication = communication;
        this.options = options;
        this.sidebarCollapsed = false;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getNavigation(id) {
        return this.communication.request$('getTree', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
            params: { treeId: id }
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    updateNavigation(data) {
        /** @type {?} */
        let treeObj = {
            items: []
        };
        data['branches'].forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            treeObj['items'].push(this.parseTree(item, false, []));
        }));
        /** @type {?} */
        let header = {
            iconLeft: 'n7-icon-tree-icon',
            text: data['label'],
            iconRight: 'n7-icon-angle-left',
            classes: 'is-expanded',
            payload: 'header'
        };
        this.one('aw-tree').update(treeObj);
        this.one('aw-sidebar-header').update(header);
        this.one('aw-scheda-breadcrumbs').update(null);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    loadItem(id) {
        if (id) {
            return this.communication.request$('getItemDetails', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => console.error(error)),
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
    }
    /**
     * @param {?} response
     * @return {?}
     */
    loadContent(response) {
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
            let breadcrumbs = {
                items: []
            };
            if (response.fields) {
                response.fields.forEach((/**
                 * @param {?} field
                 * @return {?}
                 */
                field => {
                    this.contentParts.push({
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
            element => {
                breadcrumbs.items.push({
                    label: element.label,
                    payload: element.link
                });
            }));
            this.one('aw-scheda-breadcrumbs').update(breadcrumbs);
        }
    }
    /**
     * @private
     * @param {?} data
     * @param {?} toggle
     * @param {?} parents
     * @return {?}
     */
    parseTree(data, toggle, parents) {
        /** @type {?} */
        var currParents = [...parents];
        /** @type {?} */
        let treeItem = {};
        Object.keys(data).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
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
                item => {
                    treeItem['items'].push(this.parseTree(item, true, currParents));
                }));
            }
        }));
        return treeItem;
    }
    /**
     * @return {?}
     */
    collapseSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJckQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGdCQUFnQjs7Ozs7OztJQXFCeEQsTUFBTSxDQUFDLEVBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUU7UUFDOUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBRSxFQUFFO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUMsT0FBTzs7OztZQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3hDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7U0FDdkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBRSxJQUFJOztZQUNoQixPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsRUFB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QUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqRCxDQUFDO0NBRUY7Ozs7Ozs7O0lBcExDLDZDQUEyQjs7Ozs7SUFDM0IsNkNBQTZCOzs7OztJQUM3Qix5Q0FBeUI7Ozs7O0lBQ3pCLHNDQUFzQjs7Ozs7SUFDdEIsNENBQTRCOztJQUU1Qix1Q0FBb0I7O0lBQ3BCLHlDQUF5Qjs7SUFDekIsNkNBQThCOztJQUM5Qiw0Q0FBeUI7O0lBQ3pCLG9DQUFpQjs7SUFDakIsZ0RBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEl0ZW1QcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgQXdQYXRyaW1vbmlvTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgLyoqXG4gICogSWYgeW91IGFyZSBub3QgdXNpbmcgdGhlc2UgdmFyaWFibGVzIChmcm9tIHlvdXItbGF5b3V0LnRzKSwgXG4gICogcmVtb3ZlIHRoZW0gZnJvbSBoZXJlIHRvby5cbiAgKi9cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgaGFzQnJlYWRjcnVtYjogYm9vbGVhbjtcbiAgcHVibGljIGNvbnRlbnRQYXJ0czogYW55O1xuICBwdWJsaWMgdHJlZTogYW55O1xuICBwdWJsaWMgc2lkZWJhckNvbGxhcHNlZDogYm9vbGVhbjtcbiAgLyoqXG4gICogSWYgeW91IGFyZSBub3QgdXNpbmcgdGhlc2UgdmFyaWFibGVzIChmcm9tIHlvdXItbGF5b3V0LnRzKSwgXG4gICogcmVtb3ZlIHRoZW0gZnJvbSBvbkluaXQoKSBwYXJhbWV0ZXJzIGFuZCBpbnNpZGUgdGhlIGZ1bmN0aW9uLlxuICAqL1xuICBvbkluaXQoe2NvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24gfSkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zOyBcbiAgICB0aGlzLnNpZGViYXJDb2xsYXBzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdldE5hdmlnYXRpb24oIGlkICkge1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldFRyZWUnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IHRyZWVJZDogaWQgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVOYXZpZ2F0aW9uKCBkYXRhICkge1xuICAgIGxldCB0cmVlT2JqID0ge1xuICAgICAgaXRlbXM6IFtdXG4gICAgfTtcblxuICAgIGRhdGFbJ2JyYW5jaGVzJ10uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICB0cmVlT2JqWydpdGVtcyddLnB1c2goIHRoaXMucGFyc2VUcmVlKGl0ZW0sIGZhbHNlLCBbXSkgKTtcbiAgICB9KVxuXG4gICAgbGV0IGhlYWRlciA9IHtcbiAgICAgIGljb25MZWZ0OiAnbjctaWNvbi10cmVlLWljb24nLFxuICAgICAgdGV4dDogIGRhdGFbJ2xhYmVsJ10sXG4gICAgICBpY29uUmlnaHQ6ICduNy1pY29uLWFuZ2xlLWxlZnQnLFxuICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgIHBheWxvYWQ6ICdoZWFkZXInXG4gICAgfTtcblxuICAgIHRoaXMub25lKCdhdy10cmVlJykudXBkYXRlKHRyZWVPYmopO1xuICAgIHRoaXMub25lKCdhdy1zaWRlYmFyLWhlYWRlcicpLnVwZGF0ZShoZWFkZXIpO1xuICAgIHRoaXMub25lKCdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnKS51cGRhdGUobnVsbCk7XG4gIH1cblxuICBsb2FkSXRlbShpZCl7XG4gICAgaWYoaWQpIHtcbiAgICAgIHJldHVybiAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRJdGVtRGV0YWlscycsIHtcbiAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgcGFyYW1zOiB7IGl0ZW1JZDogaWQgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLyogVE9ETzogdmFsb3JpIHN0YXRpY2ksIGRhIHByZW5kZXJlIGRhIGNvbmZpZyAqL1xuICAgICAgdGhpcy5wYWdlVGl0bGUgPSAnQ29sbGV6aW9uZSBkXFwnQXJ0ZSc7XG4gICAgICB0aGlzLmhhc0JyZWFkY3J1bWIgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29udGVudFBhcnRzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgdGl0bGU6ICdDb2xsZXppb25lIGRcXCdBcnRlJyxcbiAgICAgICAgICBjb250ZW50OiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1vcmJpIGdyYXZpZGEgc2FnaXR0aXMgcHVsdmluYXIuIEV0aWFtIGlhY3VsaXMgbWF4aW11cyBtZXR1cywgaWQgdGluY2lkdW50IGxpYmVybyBhdWN0b3IgZXQuIFByb2luIHRlbXB1cyB0dXJwaXMgdmVsIGVyYXQgdWx0cmljZXMsIGlkIHZlc3RpYnVsdW0gYW50ZSBjdXJzdXMuIFZlc3RpYnVsdW0gbG9ib3J0aXMsIGFudGUgYXQgZWxlaWZlbmQgY29uc2VxdWF0LCBtYXNzYSBsaWJlcm8gYmliZW5kdW0ganVzdG8sIGlkIGZlcm1lbnR1bSBtYWduYSBvZGlvIGFjIG51bGxhLiBDcmFzIGFsaXF1ZXQgc2NlbGVyaXNxdWUgbWFsZXN1YWRhLiBNYXVyaXMgY29uZ3VlIGZlcm1lbnR1bSB0cmlzdGlxdWUuIE51bGxhIGltcGVyZGlldCBhY2N1bXNhbiBkdWksIHRyaXN0aXF1ZSBsb2JvcnRpcyBtZXR1cyBlbGVpZmVuZCBub24uIERvbmVjIHF1aXMgb2RpbyBtYXNzYS4gQ3JhcyBzaXQgYW1ldCBzZW0gZXUgdHVycGlzIG1vbGVzdGllIGJsYW5kaXQgdml0YWUgc2VkIG5pYmguIFBlbGxlbnRlc3F1ZSBvcm5hcmUgZW5pbSBuaXNsLCBldCBlZmZpY2l0dXIgYW50ZSBlbGVtZW50dW0gYS4gVXQgbmVjIGV4IGZpbmlidXMsIGNvbmd1ZSBsaWJlcm8gZmV1Z2lhdCwgYWxpcXVhbSBhbnRlLiBDcmFzIHNlbSBuZXF1ZSwgcGVsbGVudGVzcXVlIGVnZXQgbWkgYXQsIGF1Y3RvciB2dWxwdXRhdGUgdGVsbHVzLiBTZWQgYWxpcXVhbSBtaSBhIHRvcnRvciB1bHRyaWNpZXMgaW50ZXJkdW0uIEV0aWFtIHRpbmNpZHVudCBudW5jIGNvbW1vZG8gbnVsbGEgcG9ydHRpdG9yIHNlbXBlci4gRXRpYW0gcG9ydGEgbGFjaW5pYSBsaWJlcm8gYSBtYXR0aXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIHRpdGxlOiAnQ2VudHJvIEFyY2hpdmknLFxuICAgICAgICAgIGNvbnRlbnQ6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTW9yYmkgZ3JhdmlkYSBzYWdpdHRpcyBwdWx2aW5hci4gRXRpYW0gaWFjdWxpcyBtYXhpbXVzIG1ldHVzLCBpZCB0aW5jaWR1bnQgbGliZXJvIGF1Y3RvciBldC4gUHJvaW4gdGVtcHVzIHR1cnBpcyB2ZWwgZXJhdCB1bHRyaWNlcywgaWQgdmVzdGlidWx1bSBhbnRlIGN1cnN1cy4gVmVzdGlidWx1bSBsb2JvcnRpcywgYW50ZSBhdCBlbGVpZmVuZCBjb25zZXF1YXQsIG1hc3NhIGxpYmVybyBiaWJlbmR1bSBqdXN0bywgaWQgZmVybWVudHVtIG1hZ25hIG9kaW8gYWMgbnVsbGEuIENyYXMgYWxpcXVldCBzY2VsZXJpc3F1ZSBtYWxlc3VhZGEuIE1hdXJpcyBjb25ndWUgZmVybWVudHVtIHRyaXN0aXF1ZS4gTnVsbGEgaW1wZXJkaWV0IGFjY3Vtc2FuIGR1aSwgdHJpc3RpcXVlIGxvYm9ydGlzIG1ldHVzIGVsZWlmZW5kIG5vbi4gRG9uZWMgcXVpcyBvZGlvIG1hc3NhLiBDcmFzIHNpdCBhbWV0IHNlbSBldSB0dXJwaXMgbW9sZXN0aWUgYmxhbmRpdCB2aXRhZSBzZWQgbmliaC4gUGVsbGVudGVzcXVlIG9ybmFyZSBlbmltIG5pc2wsIGV0IGVmZmljaXR1ciBhbnRlIGVsZW1lbnR1bSBhLiBVdCBuZWMgZXggZmluaWJ1cywgY29uZ3VlIGxpYmVybyBmZXVnaWF0LCBhbGlxdWFtIGFudGUuIENyYXMgc2VtIG5lcXVlLCBwZWxsZW50ZXNxdWUgZWdldCBtaSBhdCwgYXVjdG9yIHZ1bHB1dGF0ZSB0ZWxsdXMuIFNlZCBhbGlxdWFtIG1pIGEgdG9ydG9yIHVsdHJpY2llcyBpbnRlcmR1bS4gRXRpYW0gdGluY2lkdW50IG51bmMgY29tbW9kbyBudWxsYSBwb3J0dGl0b3Igc2VtcGVyLiBFdGlhbSBwb3J0YSBsYWNpbmlhIGxpYmVybyBhIG1hdHRpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzcG9uc2UpIHtcbiAgICB0aGlzLmhhc0JyZWFkY3J1bWIgPSB0cnVlO1xuICAgICAgaWYocmVzcG9uc2Upe1xuICAgICAgICB0aGlzLmNvbnRlbnRQYXJ0cyA9IFtdO1xuICAgICAgICBpZiggcmVzcG9uc2UuaW1hZ2UgKSB7XG4gICAgICAgICAgdGhpcy5jb250ZW50UGFydHMucHVzaCh7ICAgIFxuICAgICAgICAgICAgaW1hZ2U6IHJlc3BvbnNlLmltYWdlLCAgICAgICBcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZSdcbiAgICAgICAgICB9KTsgICAgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRlbnRQYXJ0cy5wdXNoKHsgICAgICAgICAgXG4gICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlLFxuICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLnRleHQsXG4gICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgbGV0IGJyZWFkY3J1bWJzID0ge1xuICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihyZXNwb25zZS5maWVsZHMpe1xuICAgICAgICAgIHJlc3BvbnNlLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudFBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogZmllbGQubGFiZWwsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLnRleHQsXG4gICAgICAgICAgICAgIHR5cGU6ICdtZXRhR3JvdXAnLFxuICAgICAgICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmVzcG9uc2UuYnJlYWRjcnVtYnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBicmVhZGNydW1icy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBlbGVtZW50LmxhYmVsLFxuICAgICAgICAgICAgcGF5bG9hZDogZWxlbWVudC5saW5rXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnKS51cGRhdGUoYnJlYWRjcnVtYnMpO1xuICAgICAgfSAgIFxuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZVRyZWUoZGF0YSwgdG9nZ2xlLCBwYXJlbnRzKSB7XG4gICAgdmFyIGN1cnJQYXJlbnRzID0gWy4uLnBhcmVudHNdO1xuICAgIGxldCB0cmVlSXRlbSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goIGtleSA9PiB7XG4gICAgICBpZiggdG9nZ2xlICl7XG4gICAgICAgIHRyZWVJdGVtWyd0b2dnbGUnXSA9IHtcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICBzb3VyY2U6IFwidG9nZ2xlXCIsXG4gICAgICAgICAgICAgIGlkOiBkYXRhWydpZCddLFxuICAgICAgICAgICAgICBwYXJlbnRzOiBjdXJyUGFyZW50cyxcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSBcbiAgICBcbiAgICBpZigga2V5ICE9IFwiYnJhbmNoZXNcIiApIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgXCJsYWJlbFwiOiB0cmVlSXRlbVsndGV4dCddID0gZGF0YVtrZXldOyBicmVhaztcbiAgICAgICAgY2FzZSBcImljb25cIiA6ICBcbiAgICAgICAgICAgIGlmICh0b2dnbGUpIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0cmVlSXRlbVsndG9nZ2xlJ11bJ2ljb24nXSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImlkXCIgOiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHRyZWVJdGVtWydfbWV0YSddID0gIGRhdGFba2V5XTsgICAgICAgXG4gICAgICAgICAgICB0cmVlSXRlbVsncGF5bG9hZCddID0ge1xuICAgICAgICAgICAgICBzb3VyY2U6IFwibWVudUl0ZW1cIixcbiAgICAgICAgICAgICAgaWQ6IGRhdGFbJ2lkJ11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdCA6ICBkYXRhW2tleV07IGJyZWFrO1xuICAgICAgfVxuICAgICAgdHJlZUl0ZW1bJ2NsYXNzZXMnXSA9ICdpcy1jb2xsYXBzZWQnO1xuICAgIH1cbiAgICBlbHNlIGlmKCBkYXRhWydicmFuY2hlcyddICE9IG51bGwgKSB7XG4gICAgICBjdXJyUGFyZW50cy5wdXNoKGRhdGFbJ2lkJ10pO1xuXG4gICAgICAvKkhhbmRsZSBjYXNlcyB3aXRoIG1lbnUgaXRlbSB3aXRoIGNoaWxkcmVuIGJ1dCB3aXRob3V0IHRvZ2dsZSovXG4gICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgdHJlZUl0ZW1bJ3BheWxvYWQnXVsnc291cmNlJ10gPSBcIlRvZ2dsZU1lbnVJdGVtXCI7XG4gICAgICAgIHRyZWVJdGVtWydwYXlsb2FkJ11bJ3BhcmVudHMnXSA9IGN1cnJQYXJlbnRzO1xuICAgICAgfVxuXG4gICAgICB0cmVlSXRlbVsnaXRlbXMnXSA9IFtdOyAgICAgICAgICBcbiAgICAgIGRhdGFba2V5XS5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgdHJlZUl0ZW1bJ2l0ZW1zJ10ucHVzaCggdGhpcy5wYXJzZVRyZWUoaXRlbSwgdHJ1ZSwgY3VyclBhcmVudHMpICk7XG4gICAgICB9KSAgIFxuICAgIH0gICAgICAgIFxuICAgIH0pXG4gICAgcmV0dXJuIHRyZWVJdGVtO1xuICB9XG5cbiAgY29sbGFwc2VTaWRlYmFyKCkge1xuICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9ICF0aGlzLnNpZGViYXJDb2xsYXBzZWQ7XG4gIH1cblxufSJdfQ==