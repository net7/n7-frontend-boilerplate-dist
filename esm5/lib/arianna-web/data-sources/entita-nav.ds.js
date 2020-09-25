import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwEntitaNavDS = /** @class */ (function (_super) {
    __extends(AwEntitaNavDS, _super);
    function AwEntitaNavDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwEntitaNavDS.prototype.transform = function (param) {
        if (!param) {
            return null;
        }
        var data = param.data, selected = param.selected;
        var navigation = { items: [], payload: 'entita-nav' };
        var _a = this.options, hasMetadataFields = _a.hasMetadataFields, labels = _a.labels;
        /* navigation.items.push({
          text: 'OVERVIEW',
          anchor: { href: `${param.basePath}/overview` },
          classes: selected === 'overview' ? 'is-selected overview-tab' : 'overview-tab',
        });
        if (hasMetadataFields) {
          navigation.items.push({
            text: 'INFORMAZIONI',
            anchor: { href: `${param.basePath}/informazioni` },
            classes: selected === 'informazioni' ? 'is-selected' : '',
          });
        } */
        navigation.items.push({
            text: 'INFORMAZIONI',
            anchor: { href: param.basePath + "/informazioni" },
            classes: selected === 'informazioni' ? 'is-selected' : '',
        });
        if (data.relatedItems) {
            navigation.items.push({
                text: 'OGGETTI COLLEGATI',
                anchor: {
                    href: param.basePath + "/oggetti-collegati",
                    queryParams: {
                        page: 1,
                    },
                },
                classes: selected === 'oggetti-collegati' ? 'is-selected' : '',
            });
        }
        if (data.relatedEntities) {
            navigation.items.push({
                text: 'ENTITÀ COLLEGATE',
                anchor: { href: param.basePath + "/entita-collegate" },
                classes: selected === 'entita-collegate' ? 'is-selected' : '',
            });
        }
        if (data.relatedLa) {
            navigation.items.push({
                text: labels['aggregazioni-logiche-collegate'],
                anchor: { href: param.basePath + "/fondi-collegati" },
                classes: selected === 'fondi-collegati' ? 'is-selected' : '',
            });
        }
        if (data.extraTab) {
            navigation.items.push({
                text: 'MAXXI',
                anchor: { href: param.basePath + "/maxxi" },
                classes: selected === 'maxxi' ? 'is-selected' : '',
            });
        }
        if (data.wikiTab) {
            navigation.items.push({
                text: 'WIKIPEDIA',
                anchor: { href: param.basePath + "/wiki" },
                classes: selected === 'wiki' ? 'is-selected' : '',
            });
        }
        // one tab control
        if (navigation.items.length === 2 && !hasMetadataFields) {
            navigation.items.shift();
        }
        return navigation;
    };
    return AwEntitaNavDS;
}(DataSource));
export { AwEntitaNavDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQW1DLGlDQUFVO0lBQTdDOztJQTBFQSxDQUFDO0lBekVXLGlDQUFTLEdBQW5CLFVBQW9CLEtBQUs7UUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDTyxJQUFBLGlCQUFJLEVBQUUseUJBQVEsQ0FBVztRQUNqQyxJQUFNLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDO1FBQ2xELElBQUEsaUJBQTRDLEVBQTFDLHdDQUFpQixFQUFFLGtCQUF1QixDQUFDO1FBRW5EOzs7Ozs7Ozs7OztZQVdJO1FBQ0osVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSSxFQUFFLGNBQWM7WUFDcEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFLLEtBQUssQ0FBQyxRQUFRLGtCQUFlLEVBQUU7WUFDbEQsT0FBTyxFQUFFLFFBQVEsS0FBSyxjQUFjLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUMxRCxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUssS0FBSyxDQUFDLFFBQVEsdUJBQW9CO29CQUMzQyxXQUFXLEVBQUU7d0JBQ1gsSUFBSSxFQUFFLENBQUM7cUJBQ1I7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFLFFBQVEsS0FBSyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQy9ELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUssS0FBSyxDQUFDLFFBQVEsc0JBQW1CLEVBQUU7Z0JBQ3RELE9BQU8sRUFBRSxRQUFRLEtBQUssa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUM5RCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDOUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFLLEtBQUssQ0FBQyxRQUFRLHFCQUFrQixFQUFFO2dCQUNyRCxPQUFPLEVBQUUsUUFBUSxLQUFLLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDN0QsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxPQUFPO2dCQUNiLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBSyxLQUFLLENBQUMsUUFBUSxXQUFRLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbkQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxXQUFXO2dCQUNqQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUssS0FBSyxDQUFDLFFBQVEsVUFBTyxFQUFFO2dCQUMxQyxPQUFPLEVBQUUsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ2xELENBQUMsQ0FBQztTQUNKO1FBRUQsa0JBQWtCO1FBQ2xCLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDdkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUExRUQsQ0FBbUMsVUFBVSxHQTBFNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFOYXZEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHBhcmFtKTogYW55IHtcbiAgICBpZiAoIXBhcmFtKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgeyBkYXRhLCBzZWxlY3RlZCB9ID0gcGFyYW07XG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IHsgaXRlbXM6IFtdLCBwYXlsb2FkOiAnZW50aXRhLW5hdicgfTtcbiAgICBjb25zdCB7IGhhc01ldGFkYXRhRmllbGRzLCBsYWJlbHMgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIC8qIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICB0ZXh0OiAnT1ZFUlZJRVcnLFxuICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9vdmVydmlld2AgfSxcbiAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnb3ZlcnZpZXcnID8gJ2lzLXNlbGVjdGVkIG92ZXJ2aWV3LXRhYicgOiAnb3ZlcnZpZXctdGFiJyxcbiAgICB9KTtcbiAgICBpZiAoaGFzTWV0YWRhdGFGaWVsZHMpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdJTkZPUk1BWklPTkknLFxuICAgICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L2luZm9ybWF6aW9uaWAgfSxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdpbmZvcm1hemlvbmknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxuICAgICAgfSk7XG4gICAgfSAqL1xuICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICB0ZXh0OiAnSU5GT1JNQVpJT05JJyxcbiAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vaW5mb3JtYXppb25pYCB9LFxuICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdpbmZvcm1hemlvbmknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxuICAgIH0pO1xuICAgIGlmIChkYXRhLnJlbGF0ZWRJdGVtcykge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ09HR0VUVEkgQ09MTEVHQVRJJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L29nZ2V0dGktY29sbGVnYXRpYCxcbiAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ29nZ2V0dGktY29sbGVnYXRpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5yZWxhdGVkRW50aXRpZXMpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdFTlRJVMOAIENPTExFR0FURScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vZW50aXRhLWNvbGxlZ2F0ZWAgfSxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdlbnRpdGEtY29sbGVnYXRlJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5yZWxhdGVkTGEpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6IGxhYmVsc1snYWdncmVnYXppb25pLWxvZ2ljaGUtY29sbGVnYXRlJ10sXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vZm9uZGktY29sbGVnYXRpYCB9LFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ2ZvbmRpLWNvbGxlZ2F0aScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuZXh0cmFUYWIpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdNQVhYSScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vbWF4eGlgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnbWF4eGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLndpa2lUYWIpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdXSUtJUEVESUEnLFxuICAgICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L3dpa2lgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnd2lraScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBvbmUgdGFiIGNvbnRyb2xcbiAgICBpZiAobmF2aWdhdGlvbi5pdGVtcy5sZW5ndGggPT09IDIgJiYgIWhhc01ldGFkYXRhRmllbGRzKSB7XG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hdmlnYXRpb247XG4gIH1cbn1cbiJdfQ==