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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbW9kZWxzL2NhcmQtbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTNDLElBQU0sY0FBYyxHQUFHO0lBQ3JCLElBQUksRUFBRSxVQUFVO0lBQ2hCLEtBQUssRUFBRSxXQUFXO0lBQ2xCLE1BQU0sRUFBRSxZQUFZO0lBQ3BCLEdBQUcsRUFBRSxTQUFTO0lBQ2QsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGdCQUFnQixFQUFFLGVBQWU7SUFDakMsaUJBQWlCLEVBQUUsZUFBZTtJQUNsQyxnQkFBZ0IsRUFBRSxlQUFlO0lBQ2pDLHNCQUFzQixFQUFFLGVBQWU7SUFDdkMsa0JBQWtCLEVBQUUsZUFBZTtDQUNwQyxDQUFDO0FBRUY7SUFHRSxvQkFDVSxNQUFXLEVBQ1gsTUFFUDtRQUhPLFdBQU0sR0FBTixNQUFNLENBQUs7UUFDWCxXQUFNLEdBQU4sTUFBTSxDQUViO1FBTksscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBUS9CLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSw2QkFBUSxHQUFmO1FBQ1UsSUFBQSx5QkFBSyxDQUFpQjtRQUM5QixJQUFNLGdCQUFnQixHQUFHLEVBQTJCLENBQUM7UUFDckQsbUJBQW1CO1FBQ25CLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzNCLElBQUEsa0NBQU8sQ0FBb0I7WUFDbkMsSUFB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SCxpQkFBQztBQUFELENBQUMsQUEzRUQsSUEyRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkRGF0YSwgQ2FyZERhdGFXaXRoV2lkZ2V0cyB9IGZyb20gJy4uL3R5cGVzL2NhcmQudHlwZXMnO1xuaW1wb3J0IHtcbiAgVGV4dEl0ZW1EUyxcbiAgRGF0YVdpZGdldEl0ZW1EUyxcbiAgQXBleENoYXJ0SXRlbURTLFxuICBUYWJsZUl0ZW1EUyxcbiAgSW5uZXJUaXRsZUl0ZW1EUyxcbiAgU2VsZWN0SXRlbURTLFxuICBNYXBJdGVtRFMsXG59IGZyb20gJy4uL2RhdGEtc291cmNlcyc7XG5pbXBvcnQgeyBDYXJkRUggfSBmcm9tICcuLi9ldmVudC1oYW5kbGVycyc7XG5cbmNvbnN0IERBVEFTT1VSQ0VfTUFQID0ge1xuICB0ZXh0OiBUZXh0SXRlbURTLFxuICB0YWJsZTogVGFibGVJdGVtRFMsXG4gIHNlbGVjdDogU2VsZWN0SXRlbURTLFxuICBtYXA6IE1hcEl0ZW1EUyxcbiAgJ2lubmVyLXRpdGxlJzogSW5uZXJUaXRsZUl0ZW1EUyxcbiAgJ2RhdGEtd2lkZ2V0JzogRGF0YVdpZGdldEl0ZW1EUyxcbiAgJ2FwZXgtYmFyLWNoYXJ0JzogQXBleENoYXJ0SXRlbURTLFxuICAnYXBleC1saW5lLWNoYXJ0JzogQXBleENoYXJ0SXRlbURTLFxuICAnYXBleC1waWUtY2hhcnQnOiBBcGV4Q2hhcnRJdGVtRFMsXG4gICdhcGV4LXJhZGlhbGJhci1jaGFydCc6IEFwZXhDaGFydEl0ZW1EUyxcbiAgJ2FwZXgtcmFkYXItY2hhcnQnOiBBcGV4Q2hhcnRJdGVtRFMsXG59O1xuXG5leHBvcnQgY2xhc3MgQ2FyZExvYWRlciB7XG4gIHByaXZhdGUgaXRlbXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbGF5b3V0OiBhbnksXG4gICAgcHJpdmF0ZSBjb25maWc6IHtcbiAgICAgIGNhcmRzOiBDYXJkRGF0YVtdO1xuICAgIH1cbiAgKSB7XG4gICAgdGhpcy5hZGRMYXlvdXRXaWRnZXRzKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2FyZHMoKTogQ2FyZERhdGFXaXRoV2lkZ2V0c1tdIHtcbiAgICBjb25zdCB7IGNhcmRzIH0gPSB0aGlzLmNvbmZpZztcbiAgICBjb25zdCBjYXJkc1dpdGhXaWRnZXRzID0gW10gYXMgQ2FyZERhdGFXaXRoV2lkZ2V0c1tdO1xuICAgIC8vIGluaXRpYWxpemUgaXRlbXNcbiAgICBpZiAoY2FyZHMgJiYgIXRoaXMuaXRlbXNJbml0aWFsaXplZCkge1xuICAgICAgY29uc3QgeyB3aWRnZXRzIH0gPSB0aGlzLmxheW91dC5sYjtcbiAgICAgIHRoaXMuaXRlbXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICBjYXJkcy5mb3JFYWNoKCh7IGhlYWRlciwgY29udGVudCwgZm9vdGVyIH0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmRXaWRnZXRzID0ge307XG4gICAgICAgIGNvbnN0IGNhcmRTZWN0aW9ucyA9IGNvbnRlbnQuc2VjdGlvbnNcbiAgICAgICAgICAuY29uY2F0KGhlYWRlcj8uc2VjdGlvbnMgfHwgW10pXG4gICAgICAgICAgLmNvbmNhdChmb290ZXI/LnNlY3Rpb25zIHx8IFtdKTtcblxuICAgICAgICBjYXJkU2VjdGlvbnMuZm9yRWFjaCgoeyBpdGVtcyB9KSA9PiB7XG4gICAgICAgICAgaXRlbXMuZm9yRWFjaCgoeyBpZCwgdHlwZTogaXRlbVR5cGUsIGluaXRpYWxEYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZHMgfSA9IHdpZGdldHNbaWRdO1xuICAgICAgICAgICAgY29uc3QgeyBlaCB9ID0gd2lkZ2V0c1tpZF07XG4gICAgICAgICAgICBkcy5pZCA9IGlkO1xuICAgICAgICAgICAgZHMudHlwZSA9IGl0ZW1UeXBlO1xuICAgICAgICAgICAgY29uc3QgZW1pdCA9ICh0eXBlOiBzdHJpbmcsIHBheWxvYWQ/OiBhbnkpID0+IGVoLmVtaXRJbm5lcih0eXBlLCBwYXlsb2FkKTtcbiAgICAgICAgICAgIGNhcmRXaWRnZXRzW2lkXSA9IHsgZHMsIGVtaXQgfTtcbiAgICAgICAgICAgIC8vIHdpdGggaW5pdGlhbERhdGFcbiAgICAgICAgICAgIGlmIChpbml0aWFsRGF0YSkge1xuICAgICAgICAgICAgICBkcy51cGRhdGUoaW5pdGlhbERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgd2lkZ2V0cyB0byBjYXJkXG4gICAgICAgIGNhcmRzV2l0aFdpZGdldHNbaW5kZXhdID0ge1xuICAgICAgICAgIC4uLmNhcmRzW2luZGV4XSxcbiAgICAgICAgICB3aWRnZXRzOiBjYXJkV2lkZ2V0c1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhcmRzV2l0aFdpZGdldHM7XG4gIH1cblxuICBwcml2YXRlIGFkZExheW91dFdpZGdldHMoKSB7XG4gICAgY29uc3QgeyBjYXJkcyB9ID0gdGhpcy5jb25maWc7XG4gICAgaWYgKGNhcmRzKSB7XG4gICAgICB0aGlzLmxheW91dC53aWRnZXRzID0gdGhpcy5sYXlvdXQud2lkZ2V0cyB8fCBbXTtcbiAgICAgIGNhcmRzLmZvckVhY2goKHsgaGVhZGVyLCBjb250ZW50LCBmb290ZXIgfSkgPT4ge1xuICAgICAgICBjb25zdCBjYXJkU2VjdGlvbnMgPSBjb250ZW50LnNlY3Rpb25zXG4gICAgICAgICAgLmNvbmNhdChoZWFkZXI/LnNlY3Rpb25zIHx8IFtdKVxuICAgICAgICAgIC5jb25jYXQoZm9vdGVyPy5zZWN0aW9ucyB8fCBbXSk7XG5cbiAgICAgICAgY2FyZFNlY3Rpb25zLmZvckVhY2goKHsgaXRlbXMgfSkgPT4ge1xuICAgICAgICAgIGl0ZW1zLmZvckVhY2goKHtcbiAgICAgICAgICAgIGlkLCB0eXBlLCBvcHRpb25zXG4gICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sYXlvdXQud2lkZ2V0cy5wdXNoKHtcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgIGRhdGFTb3VyY2U6IERBVEFTT1VSQ0VfTUFQW3R5cGVdLFxuICAgICAgICAgICAgICBldmVudEhhbmRsZXI6IENhcmRFSFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=