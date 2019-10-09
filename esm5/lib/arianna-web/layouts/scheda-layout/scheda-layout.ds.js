/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var AwSchedaLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwSchedaLayoutDS, _super);
    function AwSchedaLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allBubbles = null;
        _this.selectedBubbles = [];
        return _this;
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
    AwSchedaLayoutDS.prototype.onInit = /**
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
        this.bubbleChartSectionTitle = this.configuration.get('scheda-layout')['bubble-chart']['title'];
        this.similarItemsSectionTitle = this.configuration.get('scheda-layout')['related-items']['title'];
        this.metadataSectionTitle = this.configuration.get('scheda-layout')['metadata']['title'];
        this.hasSimilarItems = false;
        this.hasBubbles = false;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.getNavigation = /**
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
    AwSchedaLayoutDS.prototype.updateNavigation = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var header = {
            iconLeft: 'n7-icon-tree-icon',
            text: data['label'],
            iconRight: 'n7-icon-angle-left',
            classes: 'is-expanded',
            payload: 'header'
        };
        this.one('aw-sidebar-header').update(header);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.loadItem = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (id) {
            /** @type {?} */
            var maxSimilarItems = this.configuration.get('scheda-layout')['related-items']['max-related-items'];
            return this.communication.request$('getItemDetails', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return console.error(error); }),
                params: { itemId: id, maxSimilarItems: maxSimilarItems }
            });
        }
        else {
            /* TODO: valori statici, da prendere da config */
            this.pageTitle = 'Collezione d\'Arte';
            this.contentParts = [
                {
                    type: 'text',
                    title: 'Collezione d\'Arte',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sagittis pulvinar. Etiam iaculis maximus metus, id tincidunt libero auctor et. Proin tempus turpis vel erat ultrices, id vestibulum ante cursus. Vestibulum lobortis, ante at eleifend consequat, massa libero bibendum justo, id fermentum magna odio ac nulla. Cras aliquet scelerisque malesuada. Mauris congue fermentum tristique. Nulla imperdiet accumsan dui, tristique lobortis metus eleifend non. Donec quis odio massa. Cras sit amet sem eu turpis molestie blandit vitae sed nibh. Pellentesque ornare enim nisl, et efficitur ante elementum a. Ut nec ex finibus, congue libero feugiat, aliquam ante. Cras sem neque, pellentesque eget mi at, auctor vulputate tellus. Sed aliquam mi a tortor ultricies interdum. Etiam tincidunt nunc commodo nulla porttitor semper. Etiam porta lacinia libero a mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    type: 'text',
                    title: 'Centro Archivi',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sagittis pulvinar. Etiam iaculis maximus metus, id tincidunt libero auctor et. Proin tempus turpis vel erat ultrices, id vestibulum ante cursus. Vestibulum lobortis, ante at eleifend consequat, massa libero bibendum justo, id fermentum magna odio ac nulla. Cras aliquet scelerisque malesuada. Mauris congue fermentum tristique. Nulla imperdiet accumsan dui, tristique lobortis metus eleifend non. Donec quis odio massa. Cras sit amet sem eu turpis molestie blandit vitae sed nibh. Pellentesque ornare enim nisl, et efficitur ante elementum a. Ut nec ex finibus, congue libero feugiat, aliquam ante. Cras sem neque, pellentesque eget mi at, auctor vulputate tellus. Sed aliquam mi a tortor ultricies interdum. Etiam tincidunt nunc commodo nulla porttitor semper. Etiam porta lacinia libero a mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
            ];
        }
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.loadContent = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        if (response) {
            this.contentParts = [];
            /** @type {?} */
            var content = {};
            if (response.text) {
                content['content'] = response.text;
            }
            this.contentParts.push(content);
            if (response.image) {
                /** @type {?} */
                var images_1 = [{ type: 'image', url: response.image, buildPyramid: false }];
                if (!this.imageViewerIstance) {
                    this.one('aw-scheda-image').update({
                        viewerId: 'scheda-layout-viewer',
                        _setViewer: (/**
                         * @param {?} viewer
                         * @return {?}
                         */
                        function (viewer) {
                            _this.imageViewerIstance = viewer;
                            viewer.open(images_1);
                        }),
                    });
                }
                else {
                    this.imageViewerIstance.open(images_1);
                }
            }
            /** @type {?} */
            var titleObj = {
                icon: response.item.icon,
                title: {
                    main: {
                        text: response.title,
                        classes: 'bold',
                    }
                },
                tools: response.subTitle,
                actions: {}
            };
            this.one('aw-scheda-inner-title').update(titleObj);
            /*Metadata section*/
            /** @type {?} */
            var group_1 = { group: [] };
            if (response.fields) {
                this.hasMetadata = true;
                response.fields.forEach((/**
                 * @param {?} field
                 * @return {?}
                 */
                function (field) {
                    /** @type {?} */
                    var items = [];
                    field.fields.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        items.push({ label: item.key, value: item.value });
                    }));
                    group_1.group.push({
                        title: field.label,
                        items: items
                    });
                }));
            }
            this.one('aw-scheda-metadata').update(group_1);
            /*Breadcrumb section*/
            /** @type {?} */
            var breadcrumbs_1 = {
                items: []
            };
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
        /* Related Entities */
        if (response.connectedEntities) {
            this.hasBubbles = true;
            this.setAllBubblesFromApolloQuery(response);
        }
        else {
            this.hasBubbles = false;
            this.one('aw-scheda-bubble-chart').update(null);
        }
        /* Similar item */
        if (response.similarItems) {
            this.hasSimilarItems = true;
            this.one('aw-linked-objects').updateOptions({ context: 'scheda', configKeys: this.configuration.get("config-keys") });
            this.one('aw-linked-objects').update(response.similarItems);
        }
        else {
            this.hasSimilarItems = false;
            this.one('aw-linked-objects').update(null);
        }
    };
    /**
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.collapseSidebar = /**
     * @return {?}
     */
    function () {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    };
    /**
     * @param {?} response
     * @param {?=} reset
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.setAllBubblesFromApolloQuery = /**
     * @param {?} response
     * @param {?=} reset
     * @return {?}
     */
    function (response, reset) {
        if (!response || !response.connectedEntities) {
            return;
        }
        this.allBubbles = [];
        for (var i = 0; i < response.connectedEntities.length; i++) {
            /** @type {?} */
            var color = this.configuration.get('config-keys')[response.connectedEntities[i].entity.typeOfEntity.configKey] ? this.configuration.get('config-keys')[response.connectedEntities[i].entity.typeOfEntity.configKey]['color']['hex'] : "";
            this.allBubbles.push(tslib_1.__assign({ id: this.convertEntityIdToBubbleId(response.connectedEntities[i].entity.id) }, response.connectedEntities[i], { color: color }));
        }
        this.one('aw-scheda-bubble-chart').update({
            containerId: 'bubble-chart-container',
            width: window.innerWidth / 1.8,
            bubbles: this.allBubbles,
            reset: (reset ? reset : false)
        });
    };
    /**
     * @private
     * @param {?} entityId
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.convertEntityIdToBubbleId = /**
     * @private
     * @param {?} entityId
     * @return {?}
     */
    function (entityId) {
        if (!entityId)
            return null;
        return ('B_' + entityId.replace(/-/g, '_'));
    };
    return AwSchedaLayoutDS;
}(LayoutDataSource));
export { AwSchedaLayoutDS };
if (false) {
    /**
     * If you are not using these variables (from your-layout.ts),
     * remove them from here too.
     * @type {?}
     * @private
     */
    AwSchedaLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @protected
     */
    AwSchedaLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @protected
     */
    AwSchedaLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @protected
     */
    AwSchedaLayoutDS.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    AwSchedaLayoutDS.prototype.titleService;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutDS.prototype.allBubbles;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.selectedBubbles;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.options;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.pageTitle;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.hasBreadcrumb;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.contentParts;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.tree;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.sidebarCollapsed;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.bubbleChartSectionTitle;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.similarItemsSectionTitle;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.metadataSectionTitle;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.hasMetadata;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.hasBubbles;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.hasSimilarItems;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.imageViewerIstance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJEO0lBQXNDLDRDQUFnQjtJQUF0RDtRQUFBLHFFQXNOQztRQTVNUyxnQkFBVSxHQUFVLElBQUksQ0FBQztRQUMxQixxQkFBZSxHQUFVLEVBQUUsQ0FBQzs7SUEyTXJDLENBQUM7SUE1TEM7OztNQUdFOzs7Ozs7O0lBQ0YsaUNBQU07Ozs7OztJQUFOLFVBQU8sRUFBeUU7WUFBeEUsZ0NBQWEsRUFBRSx3QkFBUyxFQUFFLGtCQUFNLEVBQUUsb0JBQU8sRUFBRSw4QkFBWSxFQUFFLGdDQUFhO1FBQzVFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxP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dUM7O0lBQ3ZDLG9EQUF3Qzs7SUFDeEMsZ0RBQW9DOztJQUNwQyx1Q0FBNEI7O0lBQzVCLHNDQUEyQjs7SUFDM0IsMkNBQWdDOztJQUNoQyw4Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICAvKipcbiAgKiBJZiB5b3UgYXJlIG5vdCB1c2luZyB0aGVzZSB2YXJpYWJsZXMgKGZyb20geW91ci1sYXlvdXQudHMpLFxuICAqIHJlbW92ZSB0aGVtIGZyb20gaGVyZSB0b28uXG4gICovXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XG4gIHByb3RlY3RlZCByb3V0ZXI6IGFueTtcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xuICBwcml2YXRlIGFsbEJ1YmJsZXM6IGFueVtdID0gbnVsbDtcbiAgcHVibGljIHNlbGVjdGVkQnViYmxlczogYW55W10gPSBbXTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBoYXNCcmVhZGNydW1iOiBib29sZWFuO1xuICBwdWJsaWMgY29udGVudFBhcnRzOiBhbnk7XG4gIHB1YmxpYyB0cmVlOiBhbnk7XG4gIHB1YmxpYyBzaWRlYmFyQ29sbGFwc2VkOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlQ2hhcnRTZWN0aW9uVGl0bGU6IHN0cmluZztcbiAgcHVibGljIHNpbWlsYXJJdGVtc1NlY3Rpb25UaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgbWV0YWRhdGFTZWN0aW9uVGl0bGU6IHN0cmluZztcbiAgcHVibGljIGhhc01ldGFkYXRhOiBib29sZWFuO1xuICBwdWJsaWMgaGFzQnViYmxlczogYm9vbGVhbjtcbiAgcHVibGljIGhhc1NpbWlsYXJJdGVtczogYm9vbGVhbjtcbiAgcHVibGljIGltYWdlVmlld2VySXN0YW5jZTogYW55O1xuICAvKipcbiAgKiBJZiB5b3UgYXJlIG5vdCB1c2luZyB0aGVzZSB2YXJpYWJsZXMgKGZyb20geW91ci1sYXlvdXQudHMpLFxuICAqIHJlbW92ZSB0aGVtIGZyb20gb25Jbml0KCkgcGFyYW1ldGVycyBhbmQgaW5zaWRlIHRoZSBmdW5jdGlvbi5cbiAgKi9cbiAgb25Jbml0KHtjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uIH0pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnNpZGViYXJDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmJ1YmJsZUNoYXJ0U2VjdGlvblRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydidWJibGUtY2hhcnQnXVsndGl0bGUnXTtcbiAgICB0aGlzLnNpbWlsYXJJdGVtc1NlY3Rpb25UaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsncmVsYXRlZC1pdGVtcyddWyd0aXRsZSddO1xuICAgIHRoaXMubWV0YWRhdGFTZWN0aW9uVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ21ldGFkYXRhJ11bJ3RpdGxlJ107XG4gICAgdGhpcy5oYXNTaW1pbGFySXRlbXMgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0J1YmJsZXMgPSBmYWxzZTtcbiAgfVxuXG4gIGdldE5hdmlnYXRpb24oIGlkICkge1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldFRyZWUnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IHRyZWVJZDogaWQgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVOYXZpZ2F0aW9uKCBkYXRhICkge1xuICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICBpY29uTGVmdDogJ243LWljb24tdHJlZS1pY29uJyxcbiAgICAgIHRleHQ6ICBkYXRhWydsYWJlbCddLFxuICAgICAgaWNvblJpZ2h0OiAnbjctaWNvbi1hbmdsZS1sZWZ0JyxcbiAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXG4gICAgICBwYXlsb2FkOiAnaGVhZGVyJ1xuICAgIH07XG4gICAgdGhpcy5vbmUoJ2F3LXNpZGViYXItaGVhZGVyJykudXBkYXRlKGhlYWRlcik7XG4gIH1cblxuICBsb2FkSXRlbSggaWQgKSB7XG4gICAgaWYgKCBpZCApIHtcbiAgICAgIGNvbnN0IG1heFNpbWlsYXJJdGVtcyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsncmVsYXRlZC1pdGVtcyddWydtYXgtcmVsYXRlZC1pdGVtcyddO1xuICAgICAgcmV0dXJuICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEl0ZW1EZXRhaWxzJywge1xuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICBwYXJhbXM6IHsgaXRlbUlkOiBpZCwgbWF4U2ltaWxhckl0ZW1zIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIFRPRE86IHZhbG9yaSBzdGF0aWNpLCBkYSBwcmVuZGVyZSBkYSBjb25maWcgKi9cbiAgICAgIHRoaXMucGFnZVRpdGxlID0gJ0NvbGxlemlvbmUgZFxcJ0FydGUnO1xuICAgICAgdGhpcy5jb250ZW50UGFydHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgdGl0bGU6ICdDb2xsZXppb25lIGRcXCdBcnRlJyxcbiAgICAgICAgICBjb250ZW50OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTW9yYmkgZ3JhdmlkYSBzYWdpdHRpcyBwdWx2aW5hci4gRXRpYW0gaWFjdWxpcyBtYXhpbXVzIG1ldHVzLCBpZCB0aW5jaWR1bnQgbGliZXJvIGF1Y3RvciBldC4gUHJvaW4gdGVtcHVzIHR1cnBpcyB2ZWwgZXJhdCB1bHRyaWNlcywgaWQgdmVzdGlidWx1bSBhbnRlIGN1cnN1cy4gVmVzdGlidWx1bSBsb2JvcnRpcywgYW50ZSBhdCBlbGVpZmVuZCBjb25zZXF1YXQsIG1hc3NhIGxpYmVybyBiaWJlbmR1bSBqdXN0bywgaWQgZmVybWVudHVtIG1hZ25hIG9kaW8gYWMgbnVsbGEuIENyYXMgYWxpcXVldCBzY2VsZXJpc3F1ZSBtYWxlc3VhZGEuIE1hdXJpcyBjb25ndWUgZmVybWVudHVtIHRyaXN0aXF1ZS4gTnVsbGEgaW1wZXJkaWV0IGFjY3Vtc2FuIGR1aSwgdHJpc3RpcXVlIGxvYm9ydGlzIG1ldHVzIGVsZWlmZW5kIG5vbi4gRG9uZWMgcXVpcyBvZGlvIG1hc3NhLiBDcmFzIHNpdCBhbWV0IHNlbSBldSB0dXJwaXMgbW9sZXN0aWUgYmxhbmRpdCB2aXRhZSBzZWQgbmliaC4gUGVsbGVudGVzcXVlIG9ybmFyZSBlbmltIG5pc2wsIGV0IGVmZmljaXR1ciBhbnRlIGVsZW1lbnR1bSBhLiBVdCBuZWMgZXggZmluaWJ1cywgY29uZ3VlIGxpYmVybyBmZXVnaWF0LCBhbGlxdWFtIGFudGUuIENyYXMgc2VtIG5lcXVlLCBwZWxsZW50ZXNxdWUgZWdldCBtaSBhdCwgYXVjdG9yIHZ1bHB1dGF0ZSB0ZWxsdXMuIFNlZCBhbGlxdWFtIG1pIGEgdG9ydG9yIHVsdHJpY2llcyBpbnRlcmR1bS4gRXRpYW0gdGluY2lkdW50IG51bmMgY29tbW9kbyBudWxsYSBwb3J0dGl0b3Igc2VtcGVyLiBFdGlhbSBwb3J0YSBsYWNpbmlhIGxpYmVybyBhIG1hdHRpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgdGl0bGU6ICdDZW50cm8gQXJjaGl2aScsXG4gICAgICAgICAgY29udGVudDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1vcmJpIGdyYXZpZGEgc2FnaXR0aXMgcHVsdmluYXIuIEV0aWFtIGlhY3VsaXMgbWF4aW11cyBtZXR1cywgaWQgdGluY2lkdW50IGxpYmVybyBhdWN0b3IgZXQuIFByb2luIHRlbXB1cyB0dXJwaXMgdmVsIGVyYXQgdWx0cmljZXMsIGlkIHZlc3RpYnVsdW0gYW50ZSBjdXJzdXMuIFZlc3RpYnVsdW0gbG9ib3J0aXMsIGFudGUgYXQgZWxlaWZlbmQgY29uc2VxdWF0LCBtYXNzYSBsaWJlcm8gYmliZW5kdW0ganVzdG8sIGlkIGZlcm1lbnR1bSBtYWduYSBvZGlvIGFjIG51bGxhLiBDcmFzIGFsaXF1ZXQgc2NlbGVyaXNxdWUgbWFsZXN1YWRhLiBNYXVyaXMgY29uZ3VlIGZlcm1lbnR1bSB0cmlzdGlxdWUuIE51bGxhIGltcGVyZGlldCBhY2N1bXNhbiBkdWksIHRyaXN0aXF1ZSBsb2JvcnRpcyBtZXR1cyBlbGVpZmVuZCBub24uIERvbmVjIHF1aXMgb2RpbyBtYXNzYS4gQ3JhcyBzaXQgYW1ldCBzZW0gZXUgdHVycGlzIG1vbGVzdGllIGJsYW5kaXQgdml0YWUgc2VkIG5pYmguIFBlbGxlbnRlc3F1ZSBvcm5hcmUgZW5pbSBuaXNsLCBldCBlZmZpY2l0dXIgYW50ZSBlbGVtZW50dW0gYS4gVXQgbmVjIGV4IGZpbmlidXMsIGNvbmd1ZSBsaWJlcm8gZmV1Z2lhdCwgYWxpcXVhbSBhbnRlLiBDcmFzIHNlbSBuZXF1ZSwgcGVsbGVudGVzcXVlIGVnZXQgbWkgYXQsIGF1Y3RvciB2dWxwdXRhdGUgdGVsbHVzLiBTZWQgYWxpcXVhbSBtaSBhIHRvcnRvciB1bHRyaWNpZXMgaW50ZXJkdW0uIEV0aWFtIHRpbmNpZHVudCBudW5jIGNvbW1vZG8gbnVsbGEgcG9ydHRpdG9yIHNlbXBlci4gRXRpYW0gcG9ydGEgbGFjaW5pYSBsaWJlcm8gYSBtYXR0aXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzcG9uc2UpIHtcbiAgICAgIGlmKHJlc3BvbnNlKXtcbiAgICAgICAgdGhpcy5jb250ZW50UGFydHMgPSBbXTtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSB7fTtcblxuICAgICAgICBpZiAoIHJlc3BvbnNlLnRleHQgKXtcbiAgICAgICAgICBjb250ZW50Wydjb250ZW50J10gPSByZXNwb25zZS50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGVudFBhcnRzLnB1c2goY29udGVudCk7XG4gICAgICAgIGlmICggcmVzcG9uc2UuaW1hZ2UgKSB7XG4gICAgICAgICAgY29uc3QgaW1hZ2VzID0gIFt7dHlwZTogJ2ltYWdlJywgdXJsOiByZXNwb25zZS5pbWFnZSwgYnVpbGRQeXJhbWlkOiBmYWxzZX1dO1xuICAgICAgICAgIGlmKCAhdGhpcy5pbWFnZVZpZXdlcklzdGFuY2UgKSB7XG4gICAgICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWltYWdlJykudXBkYXRlKHtcbiAgICAgICAgICAgICAgdmlld2VySWQ6ICdzY2hlZGEtbGF5b3V0LXZpZXdlcicsXG4gICAgICAgICAgICAgIF9zZXRWaWV3ZXIgOiAodmlld2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVZpZXdlcklzdGFuY2UgPSB2aWV3ZXI7XG4gICAgICAgICAgICAgICAgdmlld2VyLm9wZW4oaW1hZ2VzKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlVmlld2VySXN0YW5jZS5vcGVuKGltYWdlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRpdGxlT2JqID0ge1xuICAgICAgICAgIGljb246IHJlc3BvbnNlLml0ZW0uaWNvbixcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgbWFpbjoge1xuICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS50aXRsZSxcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2JvbGQnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdG9vbHM6IHJlc3BvbnNlLnN1YlRpdGxlLFxuICAgICAgICAgIGFjdGlvbnM6IHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbm5lci10aXRsZScpLnVwZGF0ZSh0aXRsZU9iaik7XG5cbiAgICAgICAgLypNZXRhZGF0YSBzZWN0aW9uKi9cbiAgICAgICAgbGV0IGdyb3VwID0geyBncm91cDogW10gfTtcblxuICAgICAgICBpZiAoIHJlc3BvbnNlLmZpZWxkcyApe1xuICAgICAgICAgIHRoaXMuaGFzTWV0YWRhdGEgPSB0cnVlO1xuICAgICAgICAgIHJlc3BvbnNlLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IFtdO1xuICAgICAgICAgICAgZmllbGQuZmllbGRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgIGl0ZW1zLnB1c2goIHsgbGFiZWw6IGl0ZW0ua2V5LCB2YWx1ZTogaXRlbS52YWx1ZX0gKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdyb3VwLmdyb3VwLnB1c2goXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogZmllbGQubGFiZWwsXG4gICAgICAgICAgICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1tZXRhZGF0YScpLnVwZGF0ZShncm91cCk7XG5cbiAgICAgIC8qQnJlYWRjcnVtYiBzZWN0aW9uKi9cbiAgICAgICAgbGV0IGJyZWFkY3J1bWJzID0ge1xuICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlc3BvbnNlLmJyZWFkY3J1bWJzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogZWxlbWVudC5sYWJlbCxcbiAgICAgICAgICAgIHBheWxvYWQ6IGVsZW1lbnQubGlua1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWJyZWFkY3J1bWJzJykudXBkYXRlKGJyZWFkY3J1bWJzKTtcbiAgICAgIH1cblxuICAgICAgLyogUmVsYXRlZCBFbnRpdGllcyAqL1xuICAgICAgaWYgKCByZXNwb25zZS5jb25uZWN0ZWRFbnRpdGllcyApIHtcbiAgICAgICAgdGhpcy5oYXNCdWJibGVzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFzQnViYmxlcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWJ1YmJsZS1jaGFydCcpLnVwZGF0ZShudWxsKTtcbiAgICAgIH1cblxuICAgICAgLyogU2ltaWxhciBpdGVtICovXG4gICAgICBpZiAoIHJlc3BvbnNlLnNpbWlsYXJJdGVtcyApIHtcbiAgICAgICAgdGhpcy5oYXNTaW1pbGFySXRlbXMgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogJ3NjaGVkYScsIGNvbmZpZ0tleXM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKSB9KVxuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUocmVzcG9uc2Uuc2ltaWxhckl0ZW1zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZShudWxsKTtcbiAgICAgIH1cbiAgfVxuXG4gIGNvbGxhcHNlU2lkZWJhcigpIHtcbiAgICB0aGlzLnNpZGViYXJDb2xsYXBzZWQgPSAhdGhpcy5zaWRlYmFyQ29sbGFwc2VkO1xuICB9XG5cbiAgc2V0QWxsQnViYmxlc0Zyb21BcG9sbG9RdWVyeSggcmVzcG9uc2U6IGFueSwgcmVzZXQ/OiBib29sZWFuICl7XG4gICAgaWYgKCAhcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmNvbm5lY3RlZEVudGl0aWVzICkgeyByZXR1cm47IH1cbiAgICB0aGlzLmFsbEJ1YmJsZXMgPSBbXTtcblxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmNvbm5lY3RlZEVudGl0aWVzLmxlbmd0aDsgaSsrICl7XG5cbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKVtyZXNwb25zZS5jb25uZWN0ZWRFbnRpdGllc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmNvbmZpZ0tleV0gPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3Jlc3BvbnNlLmNvbm5lY3RlZEVudGl0aWVzW2ldLmVudGl0eS50eXBlT2ZFbnRpdHkuY29uZmlnS2V5XVsnY29sb3InXVsnaGV4J10gOiBcIlwiO1xuXG4gICAgICB0aGlzLmFsbEJ1YmJsZXMucHVzaChcbiAgICAgICAge1xuICAgICAgICAgIGlkOiB0aGlzLmNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoIHJlc3BvbnNlLmNvbm5lY3RlZEVudGl0aWVzW2ldLmVudGl0eS5pZCApLFxuICAgICAgICAgIC4uLnJlc3BvbnNlLmNvbm5lY3RlZEVudGl0aWVzW2ldLFxuICAgICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1idWJibGUtY2hhcnQnKS51cGRhdGUoe1xuICAgICAgY29udGFpbmVySWQ6ICdidWJibGUtY2hhcnQtY29udGFpbmVyJyxcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAvIDEuOCxcbiAgICAgIGJ1YmJsZXM6IHRoaXMuYWxsQnViYmxlcyxcbiAgICAgIHJlc2V0OiAoIHJlc2V0ID8gcmVzZXQgOiBmYWxzZSApXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoIGVudGl0eUlkOiBzdHJpbmcgKTogc3RyaW5nIHtcbiAgICBpZiggIWVudGl0eUlkICkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuICggJ0JfJyArIGVudGl0eUlkLnJlcGxhY2UoLy0vZywgJ18nKSApO1xuICB9XG5cblxufVxuIl19