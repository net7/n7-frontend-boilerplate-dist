import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
var MrAdvancedSearchLayoutEH = /** @class */ (function (_super) {
    __extends(MrAdvancedSearchLayoutEH, _super);
    function MrAdvancedSearchLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroy$ = new Subject();
        return _this;
    }
    MrAdvancedSearchLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-advanced-search-layout.init':
                    _this.dataSource.onInit(payload);
                    _this.listenFormChanges();
                    break;
                case 'mr-advanced-search-layout.destroy':
                    _this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-form-wrapper-accordion.submit':
                    _this.dataSource.onSubmit(payload);
                    break;
                case 'mr-form-wrapper-accordion.reset':
                    _this.dataSource.onReset();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    };
    MrAdvancedSearchLayoutEH.prototype.listenFormChanges = function () {
        this.dataSource.form.changed$.subscribe(function (_a) {
            var id = _a.id, state = _a.state;
            // eslint-disable-next-line no-console
            console.log('changed$', { id: id, state: state });
        });
    };
    return MrAdvancedSearchLayoutEH;
}(EventHandler));
export { MrAdvancedSearchLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CO0lBQThDLDRDQUFZO0lBQTFEO1FBQUEscUVBNkNDO1FBMUNTLGNBQVEsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUEwQ2xELENBQUM7SUF4Q1EseUNBQU0sR0FBYjtRQUFBLGlCQWdDQztRQS9CQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLGdDQUFnQztvQkFDbkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUN6QixNQUFNO2dCQUVSLEtBQUssbUNBQW1DO29CQUN0QyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNyQixNQUFNO2dCQUVSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxrQ0FBa0M7b0JBQ3JDLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNsQyxNQUFNO2dCQUNSLEtBQUssaUNBQWlDO29CQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUMxQixNQUFNO2dCQUVSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG9EQUFpQixHQUF6QjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFhO2dCQUFYLFVBQUUsRUFBRSxnQkFBSztZQUNsRCxzQ0FBc0M7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLElBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBN0NELENBQThDLFlBQVksR0E2Q3pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1yQWR2YW5jZWRTZWFyY2hMYXlvdXREUyB9IGZyb20gJy4vYWR2YW5jZWQtc2VhcmNoLWxheW91dC5kcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJBZHZhbmNlZFNlYXJjaExheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBkYXRhU291cmNlOiBNckFkdmFuY2VkU2VhcmNoTGF5b3V0RFM7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtci1hZHZhbmNlZC1zZWFyY2gtbGF5b3V0LmluaXQnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMubGlzdGVuRm9ybUNoYW5nZXMoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdtci1hZHZhbmNlZC1zZWFyY2gtbGF5b3V0LmRlc3Ryb3knOlxyXG4gICAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24uc3VibWl0JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblN1Ym1pdChwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24ucmVzZXQnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uUmVzZXQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Gb3JtQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5mb3JtLmNoYW5nZWQkLnN1YnNjcmliZSgoeyBpZCwgc3RhdGUgfSkgPT4ge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICBjb25zb2xlLmxvZygnY2hhbmdlZCQnLCB7IGlkLCBzdGF0ZSB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=