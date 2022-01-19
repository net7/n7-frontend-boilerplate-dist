import { __assign } from "tslib";
import { TextItemDS, DataWidgetItemDS, ApexChartItemDS, TableItemDS, InnerTitleItemDS, SelectItemDS, MapItemDS, } from '../data-sources';
import { CardEH } from '../event-handlers';
var DATASOURCE_MAP = {
    text: TextItemDS,
    table: TableItemDS,
    select: SelectItemDS,
    map: MapItemDS,
    'inner-title': InnerTitleItemDS,
    'data-widget': DataWidgetItemDS,
    'apex-bar-chart': ApexChartItemDS,
    'apex-line-chart': ApexChartItemDS,
    'apex-pie-chart': ApexChartItemDS,
    'apex-radialbar-chart': ApexChartItemDS,
    'apex-radar-chart': ApexChartItemDS,
};
var CardLoader = /** @class */ (function () {
    function CardLoader(layout, config) {
        this.layout = layout;
        this.config = config;
        this.itemsInitialized = false;
        this.addLayoutWidgets();
    }
    CardLoader.prototype.getCards = function () {
        var cards = this.config.cards;
        var cardsWithWidgets = [];
        // initialize items
        if (cards && !this.itemsInitialized) {
            var widgets_1 = this.layout.lb.widgets;
            this.itemsInitialized = true;
            cards.forEach(function (_a, index) {
                var header = _a.header, content = _a.content, footer = _a.footer;
                var cardWidgets = {};
                var cardSections = content.sections
                    .concat((header === null || header === void 0 ? void 0 : header.sections) || [])
                    .concat((footer === null || footer === void 0 ? void 0 : footer.sections) || []);
                cardSections.forEach(function (_a) {
                    var items = _a.items;
                    items.forEach(function (_a) {
                        var id = _a.id, itemType = _a.type, initialData = _a.initialData;
                        var ds = widgets_1[id].ds;
                        var eh = widgets_1[id].eh;
                        ds.id = id;
                        ds.type = itemType;
                        var emit = function (type, payload) { return eh.emitInner(type, payload); };
                        cardWidgets[id] = { ds: ds, emit: emit };
                        // with initialData
                        if (initialData) {
                            ds.update(initialData);
                        }
                    });
                });
                // add widgets to card
                cardsWithWidgets[index] = __assign(__assign({}, cards[index]), { widgets: cardWidgets });
            });
        }
        return cardsWithWidgets;
    };
    CardLoader.prototype.addLayoutWidgets = function () {
        var _this = this;
        var cards = this.config.cards;
        if (cards) {
            this.layout.widgets = this.layout.widgets || [];
            cards.forEach(function (_a) {
                var header = _a.header, content = _a.content, footer = _a.footer;
                var cardSections = content.sections
                    .concat((header === null || header === void 0 ? void 0 : header.sections) || [])
                    .concat((footer === null || footer === void 0 ? void 0 : footer.sections) || []);
                cardSections.forEach(function (_a) {
                    var items = _a.items;
                    items.forEach(function (_a) {
                        var id = _a.id, type = _a.type, options = _a.options;
                        _this.layout.widgets.push({
                            id: id,
                            options: options,
                            dataSource: DATASOURCE_MAP[type],
                            eventHandler: CardEH
                        });
                    });
                });
            });
        }
    };
    return CardLoader;
}());
export { CardLoader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbW9kZWxzL2NhcmQtbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTNDLElBQU0sY0FBYyxHQUFHO0lBQ3JCLElBQUksRUFBRSxVQUFVO0lBQ2hCLEtBQUssRUFBRSxXQUFXO0lBQ2xCLE1BQU0sRUFBRSxZQUFZO0lBQ3BCLEdBQUcsRUFBRSxTQUFTO0lBQ2QsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGdCQUFnQixFQUFFLGVBQWU7SUFDakMsaUJBQWlCLEVBQUUsZUFBZTtJQUNsQyxnQkFBZ0IsRUFBRSxlQUFlO0lBQ2pDLHNCQUFzQixFQUFFLGVBQWU7SUFDdkMsa0JBQWtCLEVBQUUsZUFBZTtDQUNwQyxDQUFDO0FBRUY7SUFHRSxvQkFDVSxNQUFXLEVBQ1gsTUFFUDtRQUhPLFdBQU0sR0FBTixNQUFNLENBQUs7UUFDWCxXQUFNLEdBQU4sTUFBTSxDQUViO1FBTksscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBUS9CLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSw2QkFBUSxHQUFmO1FBQ1UsSUFBQSx5QkFBSyxDQUFpQjtRQUM5QixJQUFNLGdCQUFnQixHQUFHLEVBQTJCLENBQUM7UUFDckQsbUJBQW1CO1FBQ25CLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzNCLElBQUEsa0NBQU8sQ0FBb0I7WUFDbkMsSUFB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SCxpQkFBQztBQUFELENBQUMsQUEzRUQsSUEyRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkRGF0YSwgQ2FyZERhdGFXaXRoV2lkZ2V0cyB9IGZyb20gJy4uL3R5cGVzL2NhcmQudHlwZXMnO1xyXG5pbXBvcnQge1xyXG4gIFRleHRJdGVtRFMsXHJcbiAgRGF0YVdpZGdldEl0ZW1EUyxcclxuICBBcGV4Q2hhcnRJdGVtRFMsXHJcbiAgVGFibGVJdGVtRFMsXHJcbiAgSW5uZXJUaXRsZUl0ZW1EUyxcclxuICBTZWxlY3RJdGVtRFMsXHJcbiAgTWFwSXRlbURTLFxyXG59IGZyb20gJy4uL2RhdGEtc291cmNlcyc7XHJcbmltcG9ydCB7IENhcmRFSCB9IGZyb20gJy4uL2V2ZW50LWhhbmRsZXJzJztcclxuXHJcbmNvbnN0IERBVEFTT1VSQ0VfTUFQID0ge1xyXG4gIHRleHQ6IFRleHRJdGVtRFMsXHJcbiAgdGFibGU6IFRhYmxlSXRlbURTLFxyXG4gIHNlbGVjdDogU2VsZWN0SXRlbURTLFxyXG4gIG1hcDogTWFwSXRlbURTLFxyXG4gICdpbm5lci10aXRsZSc6IElubmVyVGl0bGVJdGVtRFMsXHJcbiAgJ2RhdGEtd2lkZ2V0JzogRGF0YVdpZGdldEl0ZW1EUyxcclxuICAnYXBleC1iYXItY2hhcnQnOiBBcGV4Q2hhcnRJdGVtRFMsXHJcbiAgJ2FwZXgtbGluZS1jaGFydCc6IEFwZXhDaGFydEl0ZW1EUyxcclxuICAnYXBleC1waWUtY2hhcnQnOiBBcGV4Q2hhcnRJdGVtRFMsXHJcbiAgJ2FwZXgtcmFkaWFsYmFyLWNoYXJ0JzogQXBleENoYXJ0SXRlbURTLFxyXG4gICdhcGV4LXJhZGFyLWNoYXJ0JzogQXBleENoYXJ0SXRlbURTLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIENhcmRMb2FkZXIge1xyXG4gIHByaXZhdGUgaXRlbXNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbGF5b3V0OiBhbnksXHJcbiAgICBwcml2YXRlIGNvbmZpZzoge1xyXG4gICAgICBjYXJkczogQ2FyZERhdGFbXTtcclxuICAgIH1cclxuICApIHtcclxuICAgIHRoaXMuYWRkTGF5b3V0V2lkZ2V0cygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENhcmRzKCk6IENhcmREYXRhV2l0aFdpZGdldHNbXSB7XHJcbiAgICBjb25zdCB7IGNhcmRzIH0gPSB0aGlzLmNvbmZpZztcclxuICAgIGNvbnN0IGNhcmRzV2l0aFdpZGdldHMgPSBbXSBhcyBDYXJkRGF0YVdpdGhXaWRnZXRzW107XHJcbiAgICAvLyBpbml0aWFsaXplIGl0ZW1zXHJcbiAgICBpZiAoY2FyZHMgJiYgIXRoaXMuaXRlbXNJbml0aWFsaXplZCkge1xyXG4gICAgICBjb25zdCB7IHdpZGdldHMgfSA9IHRoaXMubGF5b3V0LmxiO1xyXG4gICAgICB0aGlzLml0ZW1zSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICBjYXJkcy5mb3JFYWNoKCh7IGhlYWRlciwgY29udGVudCwgZm9vdGVyIH0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FyZFdpZGdldHMgPSB7fTtcclxuICAgICAgICBjb25zdCBjYXJkU2VjdGlvbnMgPSBjb250ZW50LnNlY3Rpb25zXHJcbiAgICAgICAgICAuY29uY2F0KGhlYWRlcj8uc2VjdGlvbnMgfHwgW10pXHJcbiAgICAgICAgICAuY29uY2F0KGZvb3Rlcj8uc2VjdGlvbnMgfHwgW10pO1xyXG5cclxuICAgICAgICBjYXJkU2VjdGlvbnMuZm9yRWFjaCgoeyBpdGVtcyB9KSA9PiB7XHJcbiAgICAgICAgICBpdGVtcy5mb3JFYWNoKCh7IGlkLCB0eXBlOiBpdGVtVHlwZSwgaW5pdGlhbERhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRzIH0gPSB3aWRnZXRzW2lkXTtcclxuICAgICAgICAgICAgY29uc3QgeyBlaCB9ID0gd2lkZ2V0c1tpZF07XHJcbiAgICAgICAgICAgIGRzLmlkID0gaWQ7XHJcbiAgICAgICAgICAgIGRzLnR5cGUgPSBpdGVtVHlwZTtcclxuICAgICAgICAgICAgY29uc3QgZW1pdCA9ICh0eXBlOiBzdHJpbmcsIHBheWxvYWQ/OiBhbnkpID0+IGVoLmVtaXRJbm5lcih0eXBlLCBwYXlsb2FkKTtcclxuICAgICAgICAgICAgY2FyZFdpZGdldHNbaWRdID0geyBkcywgZW1pdCB9O1xyXG4gICAgICAgICAgICAvLyB3aXRoIGluaXRpYWxEYXRhXHJcbiAgICAgICAgICAgIGlmIChpbml0aWFsRGF0YSkge1xyXG4gICAgICAgICAgICAgIGRzLnVwZGF0ZShpbml0aWFsRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBhZGQgd2lkZ2V0cyB0byBjYXJkXHJcbiAgICAgICAgY2FyZHNXaXRoV2lkZ2V0c1tpbmRleF0gPSB7XHJcbiAgICAgICAgICAuLi5jYXJkc1tpbmRleF0sXHJcbiAgICAgICAgICB3aWRnZXRzOiBjYXJkV2lkZ2V0c1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYXJkc1dpdGhXaWRnZXRzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRMYXlvdXRXaWRnZXRzKCkge1xyXG4gICAgY29uc3QgeyBjYXJkcyB9ID0gdGhpcy5jb25maWc7XHJcbiAgICBpZiAoY2FyZHMpIHtcclxuICAgICAgdGhpcy5sYXlvdXQud2lkZ2V0cyA9IHRoaXMubGF5b3V0LndpZGdldHMgfHwgW107XHJcbiAgICAgIGNhcmRzLmZvckVhY2goKHsgaGVhZGVyLCBjb250ZW50LCBmb290ZXIgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmRTZWN0aW9ucyA9IGNvbnRlbnQuc2VjdGlvbnNcclxuICAgICAgICAgIC5jb25jYXQoaGVhZGVyPy5zZWN0aW9ucyB8fCBbXSlcclxuICAgICAgICAgIC5jb25jYXQoZm9vdGVyPy5zZWN0aW9ucyB8fCBbXSk7XHJcblxyXG4gICAgICAgIGNhcmRTZWN0aW9ucy5mb3JFYWNoKCh7IGl0ZW1zIH0pID0+IHtcclxuICAgICAgICAgIGl0ZW1zLmZvckVhY2goKHtcclxuICAgICAgICAgICAgaWQsIHR5cGUsIG9wdGlvbnNcclxuICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQud2lkZ2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgICAgICAgIGRhdGFTb3VyY2U6IERBVEFTT1VSQ0VfTUFQW3R5cGVdLFxyXG4gICAgICAgICAgICAgIGV2ZW50SGFuZGxlcjogQ2FyZEVIXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=