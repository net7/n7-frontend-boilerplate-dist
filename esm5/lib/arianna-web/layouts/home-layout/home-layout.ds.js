/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { fromEvent, interval } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';
var AwHomeLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeLayoutDS, _super);
    function AwHomeLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facetData = null;
        _this.facetInputs = {};
        // all the bubbles as they have been given by apollo
        // (the objects in the allBubbles are not the same bubble objects
        // present in the bubble chart)
        _this.allBubbles = null;
        // the bubbles currently selected (this are saved from the event handler's
        // and correspond exactly to the bubblechart's bubble objects)
        _this.selectedBubbles = [];
        _this.numOfItemsStr = null;
        // instance of the bubble chart (from which you can access all the various
        // bubble objects)
        _this._bubbleChart = null;
        // the maximum number of bubbles which can be selected at the same time
        _this.maxBubblesSelectable = 3;
        // entities have their own unique id, these ids are generic and are very flexible
        // bubbles (as the bubble chart's objects) have unique ids but do not allow certain
        // characters, so each bubble has its own id different from the id of the entity which
        // the bubble represents (given an bubble's id called bubbleId you can obtain the
        // respective entity's id with as: entityId = entityBubbleIdMap[bubbleId] )
        _this.entityBubbleIdMap = {};
        // widh of the window which is updated at each resize and it is used by the bubble
        // chart to check if the width of the window has changed during the last resize
        _this.lastWindowWidth = -1;
        _this.bubblePopup = null;
        _this.currentHoverEntity = null;
        _this.hasScrollBackground = false;
        return _this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onInit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var communication = _a.communication, mainState = _a.mainState, configuration = _a.configuration, tippy = _a.tippy;
        this.communication = communication;
        this.tippy = tippy;
        this.mainState = mainState;
        this.configuration = configuration;
        this.one('aw-hero').update(this.configuration.get('home-layout')['top-hero']);
        this.one('aw-home-hero-patrimonio').update(this.configuration.get('home-layout')['bottom-hero']);
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.facetData = [];
            response.entitiesData.forEach((/**
             * @param {?} ent
             * @return {?}
             */
            function (ent) {
                /** @type {?} */
                var teoConfigData = _this.configuration.get("config-keys")[ent.countData.type.configKey];
                if (teoConfigData)
                    _this.facetData.push(tslib_1.__assign({}, ent.countData, teoConfigData, { enabled: true }));
            }));
            _this.one('aw-home-facets-wrapper').update(_this.facetData);
            _this.setAllBubblesFromApolloQuery(response);
            _this.renderPreviewsFromApolloQuery(response);
        }));
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        this.lastWindowWidth = window.outerWidth;
        fromEvent(window, "resize").pipe(debounce((/**
         * @return {?}
         */
        function () { return interval(200); }))).
            subscribe((/**
         * @return {?}
         */
        function () {
            // only resets the bubbles if the window's width has changed
            // (if the resize only effects the window's hight then the bubble chart
            // doesn't get reset)
            if (_this.lastWindowWidth != window.outerWidth) {
                _this.lastWindowWidth = window.outerWidth;
                _this.updateBubblesAndItemPreviews(true);
            }
        }));
    };
    /**
     * @param {?} source
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleTooltipClick = /**
     * @param {?} source
     * @param {?} payload
     * @return {?}
     */
    function (source, payload) {
        switch (source) {
            case 'select':
                if (!payload)
                    return;
                /** @type {?} */
                var bubbleId_1 = this.convertEntityIdToBubbleId(payload.entityId);
                if (!bubbleId_1)
                    return;
                /** @type {?} */
                var bubble_1 = null;
                if (this._bubbleChart) {
                    this._bubbleChart.selectAll("g").each((/**
                     * @param {?} b
                     * @return {?}
                     */
                    function (b) {
                        if (b.id === bubbleId_1)
                            bubble_1 = b;
                    }));
                    if (bubble_1)
                        this.onBubbleSelected(bubble_1);
                }
                break;
            default:
                break;
        }
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleMouseEnter = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        var _this = this;
        if (!payload || !payload.bubble)
            return;
        /** @type {?} */
        var bubbleId = payload.bubble.id;
        /** @type {?} */
        var hoverEntityId = this.entityBubbleIdMap[payload.bubble.id];
        for (var i = 0; i < this.allBubbles.length; i++) {
            /** @type {?} */
            var bubble = this.allBubbles[i];
            if (bubble.entity.id === hoverEntityId) {
                this.currentHoverEntity = bubble.entity;
                this.currentHoverEntity.count = bubble.count;
                break;
            }
        }
        if (this.bubblePopup) {
            this.bubblePopup.hide();
            this.bubblePopup.destroy();
            this.bubblePopup = null;
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var template = document.getElementById("bubble-popup-menu");
            /** @type {?} */
            var templateClone = template.cloneNode(true);
            templateClone['style'].display = "inline-block";
            _this.bubblePopup = _this.tippy("#" + bubbleId, {
                content: templateClone,
                trigger: 'manual',
                interactive: true,
                arrow: true,
                theme: 'light-border no-padding',
                placement: 'top-middle',
                maxWidth: 500,
            })[0];
            setTimeout((/**
             * @return {?}
             */
            function () { if (_this.bubblePopup)
                _this.bubblePopup.show(); }), 800);
        }));
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwHomeLayoutDS.prototype.renderPreviewsFromApolloQuery = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (!response || !response.itemsPagination)
            return;
        /** @type {?} */
        var numOfItems = response.itemsPagination.totalCount;
        if (numOfItems > 0) {
            /** @type {?} */
            var numOfThousand = 0;
            while (numOfItems > 999) {
                numOfItems -= 1000;
                numOfThousand += 1;
            }
            /** @type {?} */
            var numOfItemsTmpStr = numOfItems + '';
            if (numOfItems < 10)
                numOfItemsTmpStr = '00' + numOfItems;
            else if (numOfItems < 100)
                numOfItemsTmpStr = '0' + numOfItems;
            if (numOfThousand > 0)
                this.numOfItemsStr = numOfThousand + '.' + numOfItemsTmpStr;
            else
                this.numOfItemsStr = numOfItems + '';
        }
        else {
            this.numOfItemsStr = null;
        }
        this.one('aw-home-item-preview-wrapper').update(response.itemsPagination.items);
        // scroll control
        this._scrollBackgroundControl();
    };
    /**
     * @param {?} bubble
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleSelected = /**
     * @param {?} bubble
     * @return {?}
     */
    function (bubble) {
        if (bubble) {
            if (!this.selectedBubbles.includes(bubble)) {
                if (this.selectedBubbles.length < this.maxBubblesSelectable) {
                    this.selectedBubbles.push(bubble);
                    this.updateBubblesAndItemPreviews();
                }
            }
        }
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleDeselected = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (payload && payload.bubble) {
            this.selectedBubbles = this.selectedBubbles.filter((/**
             * @param {?} b
             * @return {?}
             */
            function (b) { return b.id !== payload.bubble.id; }));
            if (payload.bubble.hasCloseIcon) {
                payload.bubble.hasCloseIcon = false;
                this.updateBubblesAndItemPreviews();
            }
        }
    };
    /**
     * updates the bubble chart and the item previews based on the currently
     * selected bubbles
     *
     * @param onlyBubbles specifies if only the bubble chart should be updated,
     *                    leaving the item previews as they are
     */
    /**
     * updates the bubble chart and the item previews based on the currently
     * selected bubbles
     *
     * @private
     * @param {?=} onlyBubbles specifies if only the bubble chart should be updated,
     *                    leaving the item previews as they are
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateBubblesAndItemPreviews = /**
     * updates the bubble chart and the item previews based on the currently
     * selected bubbles
     *
     * @private
     * @param {?=} onlyBubbles specifies if only the bubble chart should be updated,
     *                    leaving the item previews as they are
     * @return {?}
     */
    function (onlyBubbles) {
        var _this = this;
        /** @type {?} */
        var selectedEntitiesIds = [];
        if (this.entityBubbleIdMap)
            this.selectedBubbles.forEach((/**
             * @param {?} sB
             * @return {?}
             */
            function (sB) {
                /** @type {?} */
                var entityId = _this.entityBubbleIdMap[sB.id];
                if (entityId)
                    selectedEntitiesIds.push(entityId);
            }));
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: {
                selectedEntitiesIds: selectedEntitiesIds,
                itemsPagination: { offset: 0, limit: this.configuration.get('home-layout')['results-limit'] }
            },
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (!onlyBubbles) {
                _this.renderPreviewsFromApolloQuery(response);
                _this.renderItemTags();
            }
            _this.setAllBubblesFromApolloQuery(response, true);
        }));
    };
    /**
     * converts the id of an entity to the id of a bubble
     * ( // d3/svg does not allow Number as beginning of ID.
     *   // d3/svg does not allow '-' as part of ID. )
     * @param entityId id of the entity
     */
    /**
     * converts the id of an entity to the id of a bubble
     * ( // d3/svg does not allow Number as beginning of ID.
     *   // d3/svg does not allow '-' as part of ID. )
     * @private
     * @param {?} entityId id of the entity
     * @return {?}
     */
    AwHomeLayoutDS.prototype.convertEntityIdToBubbleId = /**
     * converts the id of an entity to the id of a bubble
     * ( // d3/svg does not allow Number as beginning of ID.
     *   // d3/svg does not allow '-' as part of ID. )
     * @private
     * @param {?} entityId id of the entity
     * @return {?}
     */
    function (entityId) {
        if (!entityId)
            return null;
        return ('B_' + entityId.replace(/-/g, '_'));
    };
    /**
     * sets the this.allBubbles variable based on the response apollo has given
     * for the globalFilterQuery
     *
     * @param response apollo's response
     * @param reset true if the bubble chart has to be reset/redrawn
     */
    /**
     * sets the this.allBubbles variable based on the response apollo has given
     * for the globalFilterQuery
     *
     * @param {?} response apollo's response
     * @param {?=} reset true if the bubble chart has to be reset/redrawn
     * @return {?}
     */
    AwHomeLayoutDS.prototype.setAllBubblesFromApolloQuery = /**
     * sets the this.allBubbles variable based on the response apollo has given
     * for the globalFilterQuery
     *
     * @param {?} response apollo's response
     * @param {?=} reset true if the bubble chart has to be reset/redrawn
     * @return {?}
     */
    function (response, reset) {
        var _this = this;
        if (!response || !response.entitiesData)
            return;
        this.allBubbles = [];
        for (var i = 0; i < response.entitiesData.length; i++) {
            /** @type {?} */
            var currentToE = response.entitiesData[i];
            for (var j = 0; j < currentToE.entitiesCountData.length; j++) {
                this.allBubbles.push(tslib_1.__assign({}, currentToE.entitiesCountData[j], { color: this.configuration.get("config-keys")[currentToE.countData.type.configKey]['color']['hex'] }));
            }
        }
        this.entityBubbleIdMap = {};
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            bubble.id = _this.convertEntityIdToBubbleId(bubble.entity.id);
            _this.entityBubbleIdMap[bubble.id] = bubble.entity.id;
            return bubble;
        }));
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            bubble.selected = false;
            for (var i = 0; i < _this.selectedBubbles.length; i++) {
                if (_this.selectedBubbles[i].id === bubble.id)
                    bubble.selected = true;
            }
        }));
        this.one('aw-home-bubble-chart').update({
            width: window.innerWidth / 1.8,
            bubbles: this.filterBubblesBasedOnFacetsEnabled(),
            reset: (reset ? reset : false),
            setBubbleChart: (/**
             * @param {?} bubbleCref
             * @return {?}
             */
            function (bubbleCref) { return _this._bubbleChart = bubbleCref; })
        });
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.filterBubblesBasedOnFacetsEnabled = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var result = this.allBubbles.filter((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            for (var i = 0; i < _this.facetData.length; i++) {
                if (bubble.entity.typeOfEntity.id === _this.facetData[i].type.id)
                    if (!_this.facetData[i].enabled) {
                        return false;
                    }
            }
            return true;
        }));
        return result;
    };
    /**
     * @param {?} change
     * @return {?}
     */
    AwHomeLayoutDS.prototype.handleFacetSearchChange = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        /** @type {?} */
        var payload = change.inputPayload;
        /** @type {?} */
        var value = change.value;
        // store the entered text in facetInputs
        this.facetInputs[payload] = value;
    };
    /**
     * @param {?} enter
     * @return {?}
     */
    AwHomeLayoutDS.prototype.handleFacetSearchEnter = /**
     * @param {?} enter
     * @return {?}
     */
    function (enter) {
        /** @type {?} */
        var payload = enter.inputPayload;
        // get the text entered in this input
        /** @type {?} */
        var value = this.facetInputs[payload];
    };
    /**
     * @param {?} facetId
     * @return {?}
     */
    AwHomeLayoutDS.prototype.handleFacetHeaderClick = /**
     * @param {?} facetId
     * @return {?}
     */
    function (facetId) {
        var _this = this;
        /** @type {?} */
        var updateBubbles = false;
        /** @type {?} */
        var enabledFacets = this.facetData.filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.enabled; })).length;
        this.facetData.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            if (f.type.id === facetId) {
                if (f.enabled) {
                    if (enabledFacets > 1) {
                        f.enabled = false;
                        updateBubbles = true;
                    }
                }
                else {
                    f.enabled = true;
                    updateBubbles = true;
                }
            }
        }));
        this.one('aw-home-facets-wrapper').update(this.facetData);
        if (updateBubbles) {
            /** @type {?} */
            var disableFacetsIds_1 = [];
            this.facetData.forEach((/**
             * @param {?} fD
             * @return {?}
             */
            function (fD) {
                if (!fD.enabled)
                    disableFacetsIds_1.push(fD.type.id);
            }));
            if (disableFacetsIds_1) {
                /** @type {?} */
                var filteredSelectedBubbles = this.selectedBubbles.filter((/**
                 * @param {?} bubble
                 * @return {?}
                 */
                function (bubble) {
                    /** @type {?} */
                    var typeOfEntity = "";
                    for (var i = 0; i < _this.allBubbles.length; i++) {
                        if (_this.allBubbles[i].id === bubble.id) {
                            typeOfEntity = _this.allBubbles[i].entity.typeOfEntity.id;
                            break;
                        }
                    }
                    if (disableFacetsIds_1.includes(typeOfEntity))
                        return false;
                    return true;
                }));
                if (filteredSelectedBubbles.length != this.selectedBubbles.length) {
                    this.selectedBubbles = filteredSelectedBubbles;
                }
                ;
            }
            this.allBubbles.forEach((/**
             * @param {?} bubble
             * @return {?}
             */
            function (bubble) {
                bubble.selected = false;
                for (var i = 0; i < _this.selectedBubbles.length; i++) {
                    if (_this.selectedBubbles[i].id === bubble.id)
                        bubble.selected = true;
                }
            }));
            this.one('aw-home-bubble-chart').update({
                width: window.innerWidth / 1.8,
                bubbles: this.filterBubblesBasedOnFacetsEnabled(),
                setBubbleChart: (/**
                 * @param {?} bubbleCref
                 * @return {?}
                 */
                function (bubbleCref) { return _this._bubbleChart = bubbleCref; }),
                reset: true
            });
        }
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.renderItemTags = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var tagsData = [];
        this.selectedBubbles.forEach((/**
         * @param {?} sBubble
         * @return {?}
         */
        function (sBubble) {
            /** @type {?} */
            var label = '';
            for (var i = 0; i < _this.allBubbles.length; i++) {
                if (_this.allBubbles[i].id === sBubble.id) {
                    label = _this.allBubbles[i].entity.label;
                    break;
                }
            }
            tagsData.push({ label: label, icon: "n7-icon-close", payload: sBubble.id, classes: "tag-" + _this.allBubbles[i].entity.typeOfEntity.id });
        }));
        this.one('aw-home-item-tags-wrapper').update(tagsData);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onTagClicked = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!payload)
            return;
        /** @type {?} */
        var bubbleId = payload;
        if (this._bubbleChart) {
            this._bubbleChart.selectAll("g").each((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                if (b.id === bubbleId)
                    b.hasCloseIcon = false;
            }));
        }
        this.selectedBubbles = this.selectedBubbles.filter((/**
         * @param {?} b
         * @return {?}
         */
        function (b) { return b.id !== payload; }));
        this.updateBubblesAndItemPreviews();
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._getSubnav = /**
     * @private
     * @return {?}
     */
    function () {
        return ['home', 'results', 'single'].map((/**
         * @param {?} page
         * @return {?}
         */
        function (page) { return ({
            text: page.toUpperCase(),
            payload: {
                source: 'navigate',
                handler: 'router',
                path: ["aw/" + page],
                id: page
            },
            _meta: { id: page }
        }); }));
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._getBreadcrumbs = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            items: [{
                    label: 'Arianna Web',
                    payload: {
                        source: 'navigate',
                        handler: 'router',
                        path: ["aw/home"]
                    }
                },
                {
                    label: 'Home Layout',
                    payload: {
                        source: 'navigate',
                        handler: 'router',
                        path: ["aw/home"]
                    }
                }]
        };
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._scrollBackgroundControl = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var el = document.getElementById('bubble-results-list');
        /** @type {?} */
        var source$ = fromEvent(document.getElementById('bubble-results-list'), 'scroll');
        // height control
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._setHasScrollBackground(el);
        }), 500);
        // scroll listen
        source$.pipe(debounceTime(50)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var target = _a.target;
            _this._setHasScrollBackground(target);
        }));
    };
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    AwHomeLayoutDS.prototype._setHasScrollBackground = /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
        this.hasScrollBackground = scrollHeight > (scrollTop + clientHeight);
    };
    return AwHomeLayoutDS;
}(LayoutDataSource));
export { AwHomeLayoutDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.tippy;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.facetData;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.facetInputs;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.allBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.selectedBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.numOfItemsStr;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype._bubbleChart;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.maxBubblesSelectable;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.entityBubbleIdMap;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.lastWindowWidth;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.bubblePopup;
    /** @type {?} */
    AwHomeLayoutDS.prototype.currentHoverEntity;
    /** @type {?} */
    AwHomeLayoutDS.prototype.hasScrollBackground;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQ7SUFBb0MsMENBQWdCO0lBQXBEO1FBQUEscUVBdWFDO1FBbGFTLGVBQVMsR0FBVSxJQUFJLENBQUM7UUFDeEIsaUJBQVcsR0FBUSxFQUFFLENBQUM7Ozs7UUFJdEIsZ0JBQVUsR0FBVSxJQUFJLENBQUM7OztRQUcxQixxQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixtQkFBYSxHQUFXLElBQUksQ0FBQzs7O1FBRzVCLGtCQUFZLEdBQVEsSUFBSSxDQUFDOztRQUV6QiwwQkFBb0IsR0FBVSxDQUFDLENBQUM7Ozs7OztRQU1oQyx1QkFBaUIsR0FBUSxFQUFFLENBQUM7OztRQUc1QixxQkFBZSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzdCLGlCQUFXLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLHdCQUFrQixHQUFRLElBQUksQ0FBQztRQUMvQix5QkFBbUIsR0FBWSxLQUFLLENBQUM7O0lBd1k5QyxDQUFDOzs7OztJQXRZQywrQkFBTTs7OztJQUFOLFVBQU8sRUFBa0Q7UUFBekQsaUJBMENDO1lBMUNRLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxnQ0FBYSxFQUFFLGdCQUFLO1FBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElB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QUdqQyx5Q0FBbUM7O0lBQ25DLHVDQUFvQzs7Ozs7SUFHcEMsc0NBQWlDOzs7OztJQUVqQyw4Q0FBd0M7Ozs7O0lBTXhDLDJDQUFvQzs7Ozs7SUFHcEMseUNBQXFDOzs7OztJQUNyQyxxQ0FBZ0M7O0lBQ2hDLDRDQUFzQzs7SUFDdEMsNkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcbiAgcHJpdmF0ZSBtYWluU3RhdGU6IGFueTtcbiAgcHJpdmF0ZSB0aXBweTogYW55O1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSBmYWNldERhdGE6IGFueVtdID0gbnVsbDtcbiAgcHJpdmF0ZSBmYWNldElucHV0czogYW55ID0ge307XG4gIC8vIGFsbCB0aGUgYnViYmxlcyBhcyB0aGV5IGhhdmUgYmVlbiBnaXZlbiBieSBhcG9sbG9cbiAgLy8gKHRoZSBvYmplY3RzIGluIHRoZSBhbGxCdWJibGVzIGFyZSBub3QgdGhlIHNhbWUgYnViYmxlIG9iamVjdHNcbiAgLy8gcHJlc2VudCBpbiB0aGUgYnViYmxlIGNoYXJ0KVxuICBwcml2YXRlIGFsbEJ1YmJsZXM6IGFueVtdID0gbnVsbDtcbiAgLy8gdGhlIGJ1YmJsZXMgY3VycmVudGx5IHNlbGVjdGVkICh0aGlzIGFyZSBzYXZlZCBmcm9tIHRoZSBldmVudCBoYW5kbGVyJ3NcbiAgLy8gYW5kIGNvcnJlc3BvbmQgZXhhY3RseSB0byB0aGUgYnViYmxlY2hhcnQncyBidWJibGUgb2JqZWN0cylcbiAgcHVibGljIHNlbGVjdGVkQnViYmxlczogYW55W10gPSBbXTtcbiAgcHVibGljIG51bU9mSXRlbXNTdHI6IHN0cmluZyA9IG51bGw7XG4gIC8vIGluc3RhbmNlIG9mIHRoZSBidWJibGUgY2hhcnQgKGZyb20gd2hpY2ggeW91IGNhbiBhY2Nlc3MgYWxsIHRoZSB2YXJpb3VzXG4gIC8vIGJ1YmJsZSBvYmplY3RzKVxuICBwcml2YXRlIF9idWJibGVDaGFydDogYW55ID0gbnVsbDtcbiAgLy8gdGhlIG1heGltdW0gbnVtYmVyIG9mIGJ1YmJsZXMgd2hpY2ggY2FuIGJlIHNlbGVjdGVkIGF0IHRoZSBzYW1lIHRpbWVcbiAgcHJpdmF0ZSBtYXhCdWJibGVzU2VsZWN0YWJsZTpudW1iZXIgPSAzO1xuICAvLyBlbnRpdGllcyBoYXZlIHRoZWlyIG93biB1bmlxdWUgaWQsIHRoZXNlIGlkcyBhcmUgZ2VuZXJpYyBhbmQgYXJlIHZlcnkgZmxleGlibGVcbiAgLy8gYnViYmxlcyAoYXMgdGhlIGJ1YmJsZSBjaGFydCdzIG9iamVjdHMpIGhhdmUgdW5pcXVlIGlkcyBidXQgZG8gbm90IGFsbG93IGNlcnRhaW5cbiAgLy8gY2hhcmFjdGVycywgc28gZWFjaCBidWJibGUgaGFzIGl0cyBvd24gaWQgZGlmZmVyZW50IGZyb20gdGhlIGlkIG9mIHRoZSBlbnRpdHkgd2hpY2hcbiAgLy8gdGhlIGJ1YmJsZSByZXByZXNlbnRzIChnaXZlbiBhbiBidWJibGUncyBpZCBjYWxsZWQgYnViYmxlSWQgeW91IGNhbiBvYnRhaW4gdGhlXG4gIC8vIHJlc3BlY3RpdmUgZW50aXR5J3MgaWQgd2l0aCBhczogZW50aXR5SWQgPSBlbnRpdHlCdWJibGVJZE1hcFtidWJibGVJZF0gKVxuICBwcml2YXRlIGVudGl0eUJ1YmJsZUlkTWFwOiBhbnkgPSB7fTtcbiAgLy8gd2lkaCBvZiB0aGUgd2luZG93IHdoaWNoIGlzIHVwZGF0ZWQgYXQgZWFjaCByZXNpemUgYW5kIGl0IGlzIHVzZWQgYnkgdGhlIGJ1YmJsZVxuICAvLyBjaGFydCB0byBjaGVjayBpZiB0aGUgd2lkdGggb2YgdGhlIHdpbmRvdyBoYXMgY2hhbmdlZCBkdXJpbmcgdGhlIGxhc3QgcmVzaXplXG4gIHByaXZhdGUgbGFzdFdpbmRvd1dpZHRoOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBidWJibGVQb3B1cDogYW55ID0gbnVsbDtcbiAgcHVibGljIGN1cnJlbnRIb3ZlckVudGl0eTogYW55ID0gbnVsbDtcbiAgcHVibGljIGhhc1Njcm9sbEJhY2tncm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBvbkluaXQoeyBjb21tdW5pY2F0aW9uLCBtYWluU3RhdGUsIGNvbmZpZ3VyYXRpb24sIHRpcHB5IH0pe1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy50aXBweSA9IHRpcHB5O1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG5cbiAgICB0aGlzLm9uZSgnYXctaGVybycpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWyd0b3AtaGVybyddKTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1oZXJvLXBhdHJpbW9uaW8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYm90dG9tLWhlcm8nXSk7XG5cbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5mYWNldERhdGEgPSBbXTtcbiAgICAgIHJlc3BvbnNlLmVudGl0aWVzRGF0YS5mb3JFYWNoKCAoZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlb0NvbmZpZ0RhdGEgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIilbZW50LmNvdW50RGF0YS50eXBlLmNvbmZpZ0tleV07XG4gICAgICAgIGlmKHRlb0NvbmZpZ0RhdGEpXG4gICAgICAgICAgdGhpcy5mYWNldERhdGEucHVzaCh7XG4gICAgICAgICAgICAuLi5lbnQuY291bnREYXRhLFxuICAgICAgICAgICAgLi4udGVvQ29uZmlnRGF0YSxcbiAgICAgICAgICAgIGVuYWJsZWQ6dHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgIH0gKTtcbiAgICAgIHRoaXMub25lKCdhdy1ob21lLWZhY2V0cy13cmFwcGVyJykudXBkYXRlKHRoaXMuZmFjZXREYXRhKTtcbiAgICAgIHRoaXMuc2V0QWxsQnViYmxlc0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSk7XG4gICAgICB0aGlzLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBzdHJlYW1zXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYSBXZWIgPiBIb21lJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYSBXZWI6IEhvbWUgTGF5b3V0Jyk7XG5cbiAgICB0aGlzLmxhc3RXaW5kb3dXaWR0aD13aW5kb3cub3V0ZXJXaWR0aDtcbiAgICBmcm9tRXZlbnQoIHdpbmRvdyAsIFwicmVzaXplXCIgKS5waXBlKGRlYm91bmNlKCgpID0+IGludGVydmFsKDIwMCkpKS5cbiAgICBzdWJzY3JpYmUoICgpID0+IHtcbiAgICAgIC8vIG9ubHkgcmVzZXRzIHRoZSBidWJibGVzIGlmIHRoZSB3aW5kb3cncyB3aWR0aCBoYXMgY2hhbmdlZFxuICAgICAgLy8gKGlmIHRoZSByZXNpemUgb25seSBlZmZlY3RzIHRoZSB3aW5kb3cncyBoaWdodCB0aGVuIHRoZSBidWJibGUgY2hhcnRcbiAgICAgIC8vIGRvZXNuJ3QgZ2V0IHJlc2V0KVxuICAgICAgaWYodGhpcy5sYXN0V2luZG93V2lkdGghPXdpbmRvdy5vdXRlcldpZHRoKXtcbiAgICAgICAgdGhpcy5sYXN0V2luZG93V2lkdGg9d2luZG93Lm91dGVyV2lkdGg7XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cyh0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uQnViYmxlVG9vbHRpcENsaWNrKHNvdXJjZTpzdHJpbmcsIHBheWxvYWQpe1xuICAgIHN3aXRjaChzb3VyY2Upe1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgaWYoIXBheWxvYWQpIHJldHVybjtcbiAgICAgICAgY29uc3QgYnViYmxlSWQgPSB0aGlzLmNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQocGF5bG9hZC5lbnRpdHlJZCk7XG4gICAgICAgIGlmKCFidWJibGVJZCkgcmV0dXJuO1xuICAgICAgICBsZXQgYnViYmxlID0gbnVsbDtcbiAgICAgICAgaWYodGhpcy5fYnViYmxlQ2hhcnQpe1xuICAgICAgICAgIHRoaXMuX2J1YmJsZUNoYXJ0LnNlbGVjdEFsbChgZ2ApLmVhY2goIGIgPT4ge1xuICAgICAgICAgICAgaWYoYi5pZD09PWJ1YmJsZUlkKSBidWJibGU9YjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZihidWJibGUpIHRoaXMub25CdWJibGVTZWxlY3RlZChidWJibGUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cblxuICBvbkJ1YmJsZU1vdXNlRW50ZXIocGF5bG9hZCl7XG4gICAgaWYoIXBheWxvYWQgfHwgIXBheWxvYWQuYnViYmxlKSByZXR1cm47XG4gICAgY29uc3QgYnViYmxlSWQgPSBwYXlsb2FkLmJ1YmJsZS5pZDtcbiAgICBsZXQgaG92ZXJFbnRpdHlJZCA9IHRoaXMuZW50aXR5QnViYmxlSWRNYXBbcGF5bG9hZC5idWJibGUuaWRdO1xuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5hbGxCdWJibGVzLmxlbmd0aDtpKyspe1xuICAgICAgbGV0IGJ1YmJsZSA9IHRoaXMuYWxsQnViYmxlc1tpXTtcbiAgICAgIGlmKGJ1YmJsZS5lbnRpdHkuaWQ9PT1ob3ZlckVudGl0eUlkKXtcbiAgICAgICAgdGhpcy5jdXJyZW50SG92ZXJFbnRpdHkgPSBidWJibGUuZW50aXR5O1xuICAgICAgICB0aGlzLmN1cnJlbnRIb3ZlckVudGl0eS5jb3VudCA9IGJ1YmJsZS5jb3VudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKHRoaXMuYnViYmxlUG9wdXApe1xuICAgICAgdGhpcy5idWJibGVQb3B1cC5oaWRlKCk7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAgPSBudWxsO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1YmJsZS1wb3B1cC1tZW51XCIpO1xuICAgICAgbGV0IHRlbXBsYXRlQ2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB0ZW1wbGF0ZUNsb25lWydzdHlsZSddLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgdGhpcy5idWJibGVQb3B1cCA9IHRoaXMudGlwcHkoYCMke2J1YmJsZUlkfWAsIHtcbiAgICAgICAgY29udGVudDogdGVtcGxhdGVDbG9uZSxcbiAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICBhcnJvdzogdHJ1ZSxcbiAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgICAgIHBsYWNlbWVudDogJ3RvcC1taWRkbGUnLFxuICAgICAgICBtYXhXaWR0aDogNTAwLFxuICAgICAgICAvL29uSGlkZGVuOiAoKSA9PiBjb25zb2xlLmxvZygnaGlkZGVuJyksXG4gICAgICB9KVswXTtcbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHsgaWYodGhpcy5idWJibGVQb3B1cCkgdGhpcy5idWJibGVQb3B1cC5zaG93KCkgfSAsIDgwMCApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2U6IGFueSl7XG4gICAgaWYoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pIHJldHVybjtcblxuICAgIGxldCBudW1PZkl0ZW1zID0gcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uLnRvdGFsQ291bnQ7XG4gICAgaWYobnVtT2ZJdGVtcz4wKXtcbiAgICAgIGxldCBudW1PZlRob3VzYW5kID0gMDtcbiAgICAgIHdoaWxlKG51bU9mSXRlbXM+OTk5KXtcbiAgICAgICAgbnVtT2ZJdGVtcy09MTAwMDtcbiAgICAgICAgbnVtT2ZUaG91c2FuZCArPSAxO1xuICAgICAgfVxuICAgICAgbGV0IG51bU9mSXRlbXNUbXBTdHIgPSBudW1PZkl0ZW1zICsgJyc7XG4gICAgICBpZihudW1PZkl0ZW1zPDEwKSBudW1PZkl0ZW1zVG1wU3RyID0gJzAwJytudW1PZkl0ZW1zO1xuICAgICAgZWxzZSBpZihudW1PZkl0ZW1zPDEwMCkgbnVtT2ZJdGVtc1RtcFN0ciA9ICcwJytudW1PZkl0ZW1zO1xuICAgICAgaWYobnVtT2ZUaG91c2FuZD4wKVxuICAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudW1PZlRob3VzYW5kKycuJytudW1PZkl0ZW1zVG1wU3RyO1xuICAgICAgZWxzZVxuICAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bU9mSXRlbXMrJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS1wcmV2aWV3LXdyYXBwZXInKS51cGRhdGUocmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uLml0ZW1zKTtcblxuICAgIC8vIHNjcm9sbCBjb250cm9sXG4gICAgdGhpcy5fc2Nyb2xsQmFja2dyb3VuZENvbnRyb2woKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkJ1YmJsZVNlbGVjdGVkKGJ1YmJsZSl7XG4gICAgaWYoYnViYmxlKXtcbiAgICAgIGlmKCF0aGlzLnNlbGVjdGVkQnViYmxlcy5pbmNsdWRlcyhidWJibGUpKXtcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoPHRoaXMubWF4QnViYmxlc1NlbGVjdGFibGUpe1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLnB1c2goYnViYmxlKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXNBbmRJdGVtUHJldmlld3MoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkJ1YmJsZURlc2VsZWN0ZWQocGF5bG9hZCl7XG4gICAgaWYocGF5bG9hZCAmJiBwYXlsb2FkLmJ1YmJsZSl7XG4gICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZpbHRlcihcbiAgICAgICAgKGIpID0+IGIuaWQhPT1wYXlsb2FkLmJ1YmJsZS5pZCApO1xuICAgICAgaWYocGF5bG9hZC5idWJibGUuaGFzQ2xvc2VJY29uKXtcbiAgICAgICAgcGF5bG9hZC5idWJibGUuaGFzQ2xvc2VJY29uPWZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXNBbmRJdGVtUHJldmlld3MoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlcyB0aGUgYnViYmxlIGNoYXJ0IGFuZCB0aGUgaXRlbSBwcmV2aWV3cyBiYXNlZCBvbiB0aGUgY3VycmVudGx5XG4gICAqIHNlbGVjdGVkIGJ1YmJsZXNcbiAgICpcbiAgICogQHBhcmFtIG9ubHlCdWJibGVzIHNwZWNpZmllcyBpZiBvbmx5IHRoZSBidWJibGUgY2hhcnQgc2hvdWxkIGJlIHVwZGF0ZWQsXG4gICAqICAgICAgICAgICAgICAgICAgICBsZWF2aW5nIHRoZSBpdGVtIHByZXZpZXdzIGFzIHRoZXkgYXJlXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZUJ1YmJsZXNBbmRJdGVtUHJldmlld3Mob25seUJ1YmJsZXM/OmJvb2xlYW4pe1xuICAgIGxldCBzZWxlY3RlZEVudGl0aWVzSWRzID0gW107XG4gICAgaWYodGhpcy5lbnRpdHlCdWJibGVJZE1hcClcbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKCAoc0IpID0+IHtcbiAgICAgIGxldCBlbnRpdHlJZCA9IHRoaXMuZW50aXR5QnViYmxlSWRNYXBbc0IuaWRdO1xuICAgICAgaWYoZW50aXR5SWQpXG4gICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHMucHVzaChlbnRpdHlJZCk7XG4gICAgfSk7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IFxuICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzLFxuICAgICAgICBpdGVtc1BhZ2luYXRpb246eyBvZmZzZXQ6MCwgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXSB9XG4gICAgICB9LFxuICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmKCFvbmx5QnViYmxlcyl7XG4gICAgICAgIHRoaXMucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UpO1xuICAgICAgICB0aGlzLnJlbmRlckl0ZW1UYWdzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldEFsbEJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UsdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogY29udmVydHMgdGhlIGlkIG9mIGFuIGVudGl0eSB0byB0aGUgaWQgb2YgYSBidWJibGVcbiAgICogKCAvLyBkMy9zdmcgZG9lcyBub3QgYWxsb3cgTnVtYmVyIGFzIGJlZ2lubmluZyBvZiBJRC5cbiAgICogICAvLyBkMy9zdmcgZG9lcyBub3QgYWxsb3cgJy0nIGFzIHBhcnQgb2YgSUQuIClcbiAgICogQHBhcmFtIGVudGl0eUlkIGlkIG9mIHRoZSBlbnRpdHlcbiAgICovXG4gIHByaXZhdGUgY29udmVydEVudGl0eUlkVG9CdWJibGVJZChlbnRpdHlJZDpzdHJpbmcpIDpzdHJpbmcge1xuICAgIGlmKCFlbnRpdHlJZCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuICggJ0JfJytlbnRpdHlJZC5yZXBsYWNlKC8tL2csJ18nKSApO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHMgdGhlIHRoaXMuYWxsQnViYmxlcyB2YXJpYWJsZSBiYXNlZCBvbiB0aGUgcmVzcG9uc2UgYXBvbGxvIGhhcyBnaXZlblxuICAgKiBmb3IgdGhlIGdsb2JhbEZpbHRlclF1ZXJ5XG4gICAqXG4gICAqIEBwYXJhbSByZXNwb25zZSBhcG9sbG8ncyByZXNwb25zZVxuICAgKiBAcGFyYW0gcmVzZXQgdHJ1ZSBpZiB0aGUgYnViYmxlIGNoYXJ0IGhhcyB0byBiZSByZXNldC9yZWRyYXduXG4gICAqL1xuICBzZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlOiBhbnkscmVzZXQ/OmJvb2xlYW4pe1xuICAgIGlmKCAhcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmVudGl0aWVzRGF0YSApIHJldHVybjtcbiAgICB0aGlzLmFsbEJ1YmJsZXMgPSBbXTtcbiAgICBmb3IodmFyIGk9MDtpPHJlc3BvbnNlLmVudGl0aWVzRGF0YS5sZW5ndGg7aSsrKXtcbiAgICAgIGxldCBjdXJyZW50VG9FID0gcmVzcG9uc2UuZW50aXRpZXNEYXRhW2ldO1xuICAgICAgZm9yKHZhciBqPTA7ajxjdXJyZW50VG9FLmVudGl0aWVzQ291bnREYXRhLmxlbmd0aDtqKyspe1xuICAgICAgICB0aGlzLmFsbEJ1YmJsZXMucHVzaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi5jdXJyZW50VG9FLmVudGl0aWVzQ291bnREYXRhW2pdLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKVtjdXJyZW50VG9FLmNvdW50RGF0YS50eXBlLmNvbmZpZ0tleV1bJ2NvbG9yJ11bJ2hleCddXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZW50aXR5QnViYmxlSWRNYXAgPSB7fTtcbiAgICB0aGlzLmFsbEJ1YmJsZXMuZm9yRWFjaCggKGJ1YmJsZSkgPT4ge1xuICAgICAgYnViYmxlLmlkID0gdGhpcy5jb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKGJ1YmJsZS5lbnRpdHkuaWQpO1xuICAgICAgdGhpcy5lbnRpdHlCdWJibGVJZE1hcFtidWJibGUuaWRdPWJ1YmJsZS5lbnRpdHkuaWQ7XG4gICAgICByZXR1cm4gYnViYmxlO1xuICAgIH0pO1xuICAgIHRoaXMuYWxsQnViYmxlcy5mb3JFYWNoKCAoYnViYmxlKSA9PiB7XG4gICAgICBidWJibGUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aDtpKyspe1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkQnViYmxlc1tpXS5pZD09PWJ1YmJsZS5pZCkgYnViYmxlLnNlbGVjdGVkPXRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtYnViYmxlLWNoYXJ0JykudXBkYXRlKHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aC8xLjgsXG4gICAgICBidWJibGVzOiB0aGlzLmZpbHRlckJ1YmJsZXNCYXNlZE9uRmFjZXRzRW5hYmxlZCgpLFxuICAgICAgcmVzZXQ6ICggcmVzZXQ/IHJlc2V0IDogZmFsc2UgKSxcbiAgICAgIHNldEJ1YmJsZUNoYXJ0OiAoYnViYmxlQ3JlZikgPT4gdGhpcy5fYnViYmxlQ2hhcnQgPSBidWJibGVDcmVmXG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJCdWJibGVzQmFzZWRPbkZhY2V0c0VuYWJsZWQoKXtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5hbGxCdWJibGVzLmZpbHRlcihcbiAgICAgIChidWJibGUpID0+IHtcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5mYWNldERhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgIGlmKCBidWJibGUuZW50aXR5LnR5cGVPZkVudGl0eS5pZCA9PT0gdGhpcy5mYWNldERhdGFbaV0udHlwZS5pZCApXG4gICAgICAgICAgICBpZiggIXRoaXMuZmFjZXREYXRhW2ldLmVuYWJsZWQgKXsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaGFuZGxlRmFjZXRTZWFyY2hDaGFuZ2UoY2hhbmdlKSB7XG4gICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGNoYW5nZS5pbnB1dFBheWxvYWQ7XG4gICAgdmFyIHZhbHVlOiBzdHJpbmcgPSBjaGFuZ2UudmFsdWU7XG4gICAgLy8gc3RvcmUgdGhlIGVudGVyZWQgdGV4dCBpbiBmYWNldElucHV0c1xuICAgIHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF0gPSB2YWx1ZTtcbiAgfVxuXG4gIGhhbmRsZUZhY2V0U2VhcmNoRW50ZXIoZW50ZXIpIHtcbiAgICB2YXIgcGF5bG9hZDogc3RyaW5nID0gZW50ZXIuaW5wdXRQYXlsb2FkO1xuICAgIC8vIGdldCB0aGUgdGV4dCBlbnRlcmVkIGluIHRoaXMgaW5wdXRcbiAgICB2YXIgdmFsdWU6IHN0cmluZyA9IHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF07XG4gIH1cblxuICBoYW5kbGVGYWNldEhlYWRlckNsaWNrKGZhY2V0SWQpe1xuICAgIGxldCB1cGRhdGVCdWJibGVzID0gZmFsc2U7XG4gICAgbGV0IGVuYWJsZWRGYWNldHMgPSB0aGlzLmZhY2V0RGF0YS5maWx0ZXIoIChmKSA9PiBmLmVuYWJsZWQgKS5sZW5ndGg7XG4gICAgdGhpcy5mYWNldERhdGEuZm9yRWFjaCggKGYpID0+IHtcbiAgICAgICAgaWYoZi50eXBlLmlkPT09ZmFjZXRJZCl7XG4gICAgICAgICAgaWYoZi5lbmFibGVkKXtcbiAgICAgICAgICAgIGlmKGVuYWJsZWRGYWNldHM+MSl7XG4gICAgICAgICAgICAgIGYuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB1cGRhdGVCdWJibGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZi5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHVwZGF0ZUJ1YmJsZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWZhY2V0cy13cmFwcGVyJykudXBkYXRlKHRoaXMuZmFjZXREYXRhKTtcbiAgICBpZih1cGRhdGVCdWJibGVzKXtcbiAgICAgIGxldCBkaXNhYmxlRmFjZXRzSWRzID0gW107XG4gICAgICB0aGlzLmZhY2V0RGF0YS5mb3JFYWNoKCAoZkQpID0+IHtcbiAgICAgICAgaWYoIWZELmVuYWJsZWQpIGRpc2FibGVGYWNldHNJZHMucHVzaChmRC50eXBlLmlkKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZihkaXNhYmxlRmFjZXRzSWRzKXtcbiAgICAgICAgbGV0IGZpbHRlcmVkU2VsZWN0ZWRCdWJibGVzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZmlsdGVyKCAoYnViYmxlKSA9PiB7XG4gICAgICAgICAgbGV0IHR5cGVPZkVudGl0eSA9IFwiXCI7XG4gICAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmFsbEJ1YmJsZXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZih0aGlzLmFsbEJ1YmJsZXNbaV0uaWQ9PT1idWJibGUuaWQpe1xuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHk9dGhpcy5hbGxCdWJibGVzW2ldLmVudGl0eS50eXBlT2ZFbnRpdHkuaWQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihkaXNhYmxlRmFjZXRzSWRzLmluY2x1ZGVzKHR5cGVPZkVudGl0eSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGZpbHRlcmVkU2VsZWN0ZWRCdWJibGVzLmxlbmd0aCE9dGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoKXtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcyA9IGZpbHRlcmVkU2VsZWN0ZWRCdWJibGVzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdGhpcy5hbGxCdWJibGVzLmZvckVhY2goIChidWJibGUpID0+IHtcbiAgICAgICAgYnViYmxlLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aDtpKyspe1xuICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRCdWJibGVzW2ldLmlkPT09YnViYmxlLmlkKSBidWJibGUuc2VsZWN0ZWQ9dHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uZSgnYXctaG9tZS1idWJibGUtY2hhcnQnKS51cGRhdGUoe1xuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgvMS44LFxuICAgICAgICBidWJibGVzOnRoaXMuZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCksXG4gICAgICAgIHNldEJ1YmJsZUNoYXJ0OiAoYnViYmxlQ3JlZikgPT4gdGhpcy5fYnViYmxlQ2hhcnQgPSBidWJibGVDcmVmLFxuICAgICAgICByZXNldDp0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJJdGVtVGFncygpe1xuICAgIGxldCB0YWdzRGF0YSA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goIChzQnViYmxlKSA9PiB7XG4gICAgICBsZXQgbGFiZWwgPSAnJztcbiAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5hbGxCdWJibGVzLmxlbmd0aDtpKyspe1xuICAgICAgICBpZih0aGlzLmFsbEJ1YmJsZXNbaV0uaWQ9PT1zQnViYmxlLmlkKXtcbiAgICAgICAgICBsYWJlbCA9IHRoaXMuYWxsQnViYmxlc1tpXS5lbnRpdHkubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRhZ3NEYXRhLnB1c2goe2xhYmVsLGljb246XCJuNy1pY29uLWNsb3NlXCIscGF5bG9hZDpzQnViYmxlLmlkLGNsYXNzZXM6XCJ0YWctXCIrdGhpcy5hbGxCdWJibGVzW2ldLmVudGl0eS50eXBlT2ZFbnRpdHkuaWR9KTtcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlcicpLnVwZGF0ZSh0YWdzRGF0YSk7XG4gIH1cblxuICBvblRhZ0NsaWNrZWQocGF5bG9hZCl7XG4gICAgaWYoIXBheWxvYWQpIHJldHVybjtcbiAgICBjb25zdCBidWJibGVJZD1wYXlsb2FkO1xuICAgIGlmKHRoaXMuX2J1YmJsZUNoYXJ0KXtcbiAgICAgIHRoaXMuX2J1YmJsZUNoYXJ0LnNlbGVjdEFsbChgZ2ApLmVhY2goIGIgPT4ge1xuICAgICAgICBpZihiLmlkPT09YnViYmxlSWQpIGIuaGFzQ2xvc2VJY29uID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5maWx0ZXIoIChiKSA9PiBiLmlkIT09cGF5bG9hZCApO1xuICAgIHRoaXMudXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U3VibmF2KCl7XG4gICAgcmV0dXJuIFsnaG9tZScsICdyZXN1bHRzJywgJ3NpbmdsZSddLm1hcChwYWdlID0+ICh7XG4gICAgICB0ZXh0OiBwYWdlLnRvVXBwZXJDYXNlKCksIFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBzb3VyY2U6ICduYXZpZ2F0ZScsXG4gICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICBwYXRoOiBbYGF3LyR7cGFnZX1gXSxcbiAgICAgICAgaWQ6IHBhZ2VcbiAgICAgIH0sXG4gICAgICBfbWV0YTogeyBpZDogcGFnZSB9XG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0QnJlYWRjcnVtYnMoKXtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGxhYmVsOiAnQXJpYW5uYSBXZWInLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgc291cmNlOiAnbmF2aWdhdGUnLFxuICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgIHBhdGg6IFtgYXcvaG9tZWBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnSG9tZSBMYXlvdXQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgc291cmNlOiAnbmF2aWdhdGUnLFxuICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgIHBhdGg6IFtgYXcvaG9tZWBdXG4gICAgICAgIH1cbiAgICAgIH1dIFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpe1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZS1yZXN1bHRzLWxpc3QnKSwgXG4gICAgICBzb3VyY2UkID0gZnJvbUV2ZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGUtcmVzdWx0cy1saXN0JyksICdzY3JvbGwnKTtcblxuICAgIC8vIGhlaWdodCBjb250cm9sXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKGVsKTtcbiAgICB9LCA1MDApO1xuXG4gICAgLy8gc2Nyb2xsIGxpc3RlblxuICAgIHNvdXJjZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MClcbiAgICApLnN1YnNjcmliZSgoeyB0YXJnZXQgfTogeyB0YXJnZXQ6IGFueSB9KSA9PiB7XG4gICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHsgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCB9KXtcbiAgICB0aGlzLmhhc1Njcm9sbEJhY2tncm91bmQgPSBzY3JvbGxIZWlnaHQgPiAoc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0KTtcbiAgfVxufSJdfQ==