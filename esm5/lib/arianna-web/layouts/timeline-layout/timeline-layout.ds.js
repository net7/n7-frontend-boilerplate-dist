import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { isNull } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import helpers from '../../../common/helpers';
var AwTimelineLayoutDS = /** @class */ (function (_super) {
    __extends(AwTimelineLayoutDS, _super);
    function AwTimelineLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pageSize = 10;
        _this.state$ = new BehaviorSubject('EMPTY');
        _this.currentPage = 1;
        return _this;
    }
    AwTimelineLayoutDS.prototype.onInit = function (_a) {
        var _this = this;
        var configuration = _a.configuration, mainState = _a.mainState, options = _a.options, titleService = _a.titleService, communication = _a.communication;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.titleService = titleService;
        this.mainState.update('headTitle', 'Arianna4View - Timeline');
        // navigation update
        this.mainState.updateCustom('currentNav', 'timeline');
        this.communication.request$('getEventObjects', {
            params: {},
            onError: function (err) {
                console.warn(err);
            }
        }).subscribe(function (response) {
            var _a;
            _this.one('aw-timeline').updateOptions({
                configuration: (_a = _this.configuration.get('timeline-layout')) === null || _a === void 0 ? void 0 : _a.timeline
            });
            _this.one('aw-timeline').update(response);
        });
    };
    AwTimelineLayoutDS.prototype.onTimelineClick = function (_a) {
        var _this = this;
        var id = _a.id, label = _a.label, dateText = _a.dateText;
        if (isNull(id)) {
            this.currentId = null;
            this.clearResults();
        }
        else {
            // loading results
            this.state$.next('LOADING');
            this.communication.request$('getEntityRelatedItems', {
                params: {
                    selectedEntitiesIds: [id]
                }
            }).subscribe(function (_a) {
                var itemsPagination = _a.itemsPagination;
                // clear loading
                _this.state$.next('SUCCESS');
                _this.relatedItems = itemsPagination.items;
                _this.total = _this.relatedItems.length;
                var text = "<strong>" + _this.total + "</strong> Risultati collegati a<br><span class=\"aw-multimedia__results-title-big\">" + label + "</span>";
                if (_this.total === 1) {
                    text = "<strong>" + _this.total + "</strong> Risultato collegato a<br><span class=\"aw-multimedia__results-title-big\">" + label + "</span>";
                }
                var titleData = {
                    title: {
                        main: { text: text },
                        secondary: dateText ? {
                            text: dateText
                        } : null
                    },
                    actions: {
                        buttons: [{
                                anchor: {
                                    href: _this.configuration.get('paths').entitaBasePath + "/" + id + "/" + helpers.slugify(label),
                                },
                                text: 'Vedi Entità'
                            }]
                    }
                };
                _this.one('aw-scheda-inner-title').update(titleData);
                // update items
                _this.updateItems();
                // update pagination
                _this.updatePagination();
            });
        }
    };
    AwTimelineLayoutDS.prototype.clearResults = function () {
        if (!this.relatedItems) {
            return;
        }
        // reset
        this.state$.next('EMPTY');
        this.pageSize = 10;
        this.currentPage = 1;
        this.relatedItems = [];
        this.total = 0;
        this.one('aw-scheda-inner-title').update({
            title: {
                main: { text: '' }
            }
        });
        this.one('aw-linked-objects').update({ items: [] });
    };
    AwTimelineLayoutDS.prototype.onPaginationChange = function (_a) {
        var value = _a.value;
        this.pageSize = +value;
        this.updateItems();
        this.updatePagination();
    };
    AwTimelineLayoutDS.prototype.onPaginationClick = function (_a) {
        var page = _a.page;
        if (typeof page === 'number' && page !== this.currentPage) {
            this.currentPage = page;
            this.updateItems();
            this.updatePagination();
        }
    };
    AwTimelineLayoutDS.prototype.updateItems = function () {
        this.one('aw-linked-objects').updateOptions({
            context: 'map',
            config: this.configuration,
            page: this.currentPage,
            pagination: true,
            size: this.pageSize,
        });
        this.one('aw-linked-objects').update({ items: this.relatedItems });
    };
    AwTimelineLayoutDS.prototype.updatePagination = function () {
        this.one('n7-smart-pagination').updateOptions({
            mode: 'payload'
        });
        this.one('n7-smart-pagination').update({
            totalPages: Math.ceil(this.total / this.pageSize),
            currentPage: this.currentPage,
            pageLimit: 5,
            sizes: {
                label: 'Numero di risultati',
                list: [10, 25, 50],
                active: this.pageSize,
            },
        });
    };
    return AwTimelineLayoutDS;
}(LayoutDataSource));
export { AwTimelineLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvdGltZWxpbmUtbGF5b3V0L3RpbWVsaW5lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBSTlDO0lBQXdDLHNDQUFnQjtJQUF4RDtRQUFBLHFFQThKQztRQWpKUyxjQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWYsWUFBTSxHQUFpQyxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuRSxpQkFBVyxHQUFHLENBQUMsQ0FBQzs7SUE2STFCLENBQUM7SUFySUMsbUNBQU0sR0FBTixVQUFPLEVBRU47UUFGRCxpQkF3QkM7WUF2QkMsZ0NBQWEsRUFBRSx3QkFBUyxFQUFFLG9CQUFPLEVBQUUsOEJBQVksRUFBRSxnQ0FBYTtRQUU5RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUU5RCxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFO1lBQzdDLE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLENBQUM7U0FDRixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTs7WUFDcEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQ3BDLGFBQWEsUUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQywwQ0FBRSxRQUFRO2FBQ25FLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRDQUFlLEdBQWYsVUFBZ0IsRUFBdUI7UUFBdkMsaUJBK0NDO1lBL0NpQixVQUFFLEVBQUUsZ0JBQUssRUFBRSxzQkFBUTtRQUNuQyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLHVCQUF1QixFQUFFO2dCQUNuRCxNQUFNLEVBQUU7b0JBQ04sbUJBQW1CLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQzFCO2FBQ0YsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQW1CO29CQUFqQixvQ0FBZTtnQkFDN0IsZ0JBQWdCO2dCQUNoQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFNUIsS0FBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDO2dCQUMxQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO2dCQUN0QyxJQUFJLElBQUksR0FBRyxhQUFXLEtBQUksQ0FBQyxLQUFLLDRGQUFxRixLQUFLLFlBQVMsQ0FBQztnQkFDcEksSUFBSSxLQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtvQkFDcEIsSUFBSSxHQUFHLGFBQVcsS0FBSSxDQUFDLEtBQUssNEZBQXFGLEtBQUssWUFBUyxDQUFDO2lCQUNqSTtnQkFFRCxJQUFNLFNBQVMsR0FBbUI7b0JBQ2hDLEtBQUssRUFBRTt3QkFDTCxJQUFJLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRTt3QkFDZCxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQzs0QkFDcEIsSUFBSSxFQUFFLFFBQVE7eUJBQ2YsQ0FBQyxDQUFDLENBQUMsSUFBSTtxQkFDVDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsT0FBTyxFQUFFLENBQUM7Z0NBQ1IsTUFBTSxFQUFFO29DQUNOLElBQUksRUFBSyxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLFNBQUksRUFBRSxTQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFHO2lDQUMxRjtnQ0FDRCxJQUFJLEVBQUUsYUFBYTs2QkFDcEIsQ0FBQztxQkFDSDtpQkFDRixDQUFDO2dCQUNGLEtBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRXBELGVBQWU7Z0JBQ2YsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUVuQixvQkFBb0I7Z0JBQ3BCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU8seUNBQVksR0FBcEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixPQUFPO1NBQ1I7UUFDRCxRQUFRO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO2FBQ25CO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCwrQ0FBa0IsR0FBbEIsVUFBbUIsRUFBUztZQUFQLGdCQUFLO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4Q0FBaUIsR0FBakIsVUFBa0IsRUFBUTtZQUFOLGNBQUk7UUFDdEIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVPLHdDQUFXLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYTtZQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3BCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVPLDZDQUFnQixHQUF4QjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDNUMsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDakQsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFNBQVMsRUFBRSxDQUFDO1lBQ1osS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxxQkFBcUI7Z0JBQzVCLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDdEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBOUpELENBQXdDLGdCQUFnQixHQThKdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbm5lclRpdGxlRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbnR5cGUgTGF5b3V0U3RhdGUgPSAnTE9BRElORycgfCAnRU1QVFknIHwgJ1NVQ0NFU1MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3VGltZWxpbmVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xyXG5cclxuICBwdWJsaWMgb3B0aW9uczogYW55O1xyXG5cclxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xyXG5cclxuICBwcml2YXRlIHBhZ2VTaXplID0gMTA7XHJcblxyXG4gIHB1YmxpYyBzdGF0ZSQ6IEJlaGF2aW9yU3ViamVjdDxMYXlvdXRTdGF0ZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCdFTVBUWScpO1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnRQYWdlID0gMTtcclxuXHJcbiAgcHJpdmF0ZSByZWxhdGVkSXRlbXM6IGFueVtdO1xyXG5cclxuICBwdWJsaWMgdG90YWw6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50SWQ6IHN0cmluZztcclxuXHJcbiAgb25Jbml0KHtcclxuICAgIGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uLFxyXG4gIH0pIHtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBUaW1lbGluZScpO1xyXG5cclxuICAgIC8vIG5hdmlnYXRpb24gdXBkYXRlXHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAndGltZWxpbmUnKTtcclxuXHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEV2ZW50T2JqZWN0cycsIHtcclxuICAgICAgcGFyYW1zOiB7fSxcclxuICAgICAgb25FcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHRoaXMub25lKCdhdy10aW1lbGluZScpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3RpbWVsaW5lLWxheW91dCcpPy50aW1lbGluZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LXRpbWVsaW5lJykudXBkYXRlKHJlc3BvbnNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25UaW1lbGluZUNsaWNrKHsgaWQsIGxhYmVsLCBkYXRlVGV4dCB9KSB7XHJcbiAgICBpZiAoaXNOdWxsKGlkKSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XHJcbiAgICAgIHRoaXMuY2xlYXJSZXN1bHRzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBsb2FkaW5nIHJlc3VsdHNcclxuICAgICAgdGhpcy5zdGF0ZSQubmV4dCgnTE9BRElORycpO1xyXG4gICAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eVJlbGF0ZWRJdGVtcycsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHM6IFtpZF1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLnN1YnNjcmliZSgoeyBpdGVtc1BhZ2luYXRpb24gfSkgPT4ge1xyXG4gICAgICAgIC8vIGNsZWFyIGxvYWRpbmdcclxuICAgICAgICB0aGlzLnN0YXRlJC5uZXh0KCdTVUNDRVNTJyk7XHJcblxyXG4gICAgICAgIHRoaXMucmVsYXRlZEl0ZW1zID0gaXRlbXNQYWdpbmF0aW9uLml0ZW1zO1xyXG4gICAgICAgIHRoaXMudG90YWwgPSB0aGlzLnJlbGF0ZWRJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgbGV0IHRleHQgPSBgPHN0cm9uZz4ke3RoaXMudG90YWx9PC9zdHJvbmc+IFJpc3VsdGF0aSBjb2xsZWdhdGkgYTxicj48c3BhbiBjbGFzcz1cImF3LW11bHRpbWVkaWFfX3Jlc3VsdHMtdGl0bGUtYmlnXCI+JHtsYWJlbH08L3NwYW4+YDtcclxuICAgICAgICBpZiAodGhpcy50b3RhbCA9PT0gMSkge1xyXG4gICAgICAgICAgdGV4dCA9IGA8c3Ryb25nPiR7dGhpcy50b3RhbH08L3N0cm9uZz4gUmlzdWx0YXRvIGNvbGxlZ2F0byBhPGJyPjxzcGFuIGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0cy10aXRsZS1iaWdcIj4ke2xhYmVsfTwvc3Bhbj5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGVEYXRhOiBJbm5lclRpdGxlRGF0YSA9IHtcclxuICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgIG1haW46IHsgdGV4dCB9LFxyXG4gICAgICAgICAgICBzZWNvbmRhcnk6IGRhdGVUZXh0ID8ge1xyXG4gICAgICAgICAgICAgIHRleHQ6IGRhdGVUZXh0XHJcbiAgICAgICAgICAgIH0gOiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYWN0aW9uczoge1xyXG4gICAgICAgICAgICBidXR0b25zOiBbe1xyXG4gICAgICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICAgICAgaHJlZjogYCR7dGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aH0vJHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWAsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB0ZXh0OiAnVmVkaSBFbnRpdMOgJ1xyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbm5lci10aXRsZScpLnVwZGF0ZSh0aXRsZURhdGEpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgaXRlbXNcclxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBwYWdpbmF0aW9uXHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhclJlc3VsdHMoKSB7XHJcbiAgICBpZiAoIXRoaXMucmVsYXRlZEl0ZW1zKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHJlc2V0XHJcbiAgICB0aGlzLnN0YXRlJC5uZXh0KCdFTVBUWScpO1xyXG4gICAgdGhpcy5wYWdlU2l6ZSA9IDEwO1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICB0aGlzLnJlbGF0ZWRJdGVtcyA9IFtdO1xyXG4gICAgdGhpcy50b3RhbCA9IDA7XHJcbiAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBtYWluOiB7IHRleHQ6ICcnIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogW10gfSk7XHJcbiAgfVxyXG5cclxuICBvblBhZ2luYXRpb25DaGFuZ2UoeyB2YWx1ZSB9KSB7XHJcbiAgICB0aGlzLnBhZ2VTaXplID0gK3ZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVJdGVtcygpO1xyXG4gICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBvblBhZ2luYXRpb25DbGljayh7IHBhZ2UgfSkge1xyXG4gICAgaWYgKHR5cGVvZiBwYWdlID09PSAnbnVtYmVyJyAmJiBwYWdlICE9PSB0aGlzLmN1cnJlbnRQYWdlKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVJdGVtcygpIHtcclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBjb250ZXh0OiAnbWFwJyxcclxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLnJlbGF0ZWRJdGVtcyB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUGFnaW5hdGlvbigpIHtcclxuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIG1vZGU6ICdwYXlsb2FkJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh7XHJcbiAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0aGlzLnRvdGFsIC8gdGhpcy5wYWdlU2l6ZSksXHJcbiAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxyXG4gICAgICBwYWdlTGltaXQ6IDUsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgbGFiZWw6ICdOdW1lcm8gZGkgcmlzdWx0YXRpJyxcclxuICAgICAgICBsaXN0OiBbMTAsIDI1LCA1MF0sXHJcbiAgICAgICAgYWN0aXZlOiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==