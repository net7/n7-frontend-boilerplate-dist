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
        if (data.relatedLa) {
            navigation.items.push({
                text: labels['aggregazioni-logiche-collegate'],
                anchor: { href: param.basePath + "/fondi-collegati" },
                classes: selected === 'fondi-collegati' ? 'is-selected' : '',
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQW1DLGlDQUFVO0lBQTdDOztJQTBFQSxDQUFDO0lBekVXLGlDQUFTLEdBQW5CLFVBQW9CLEtBQUs7UUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDTyxJQUFBLGlCQUFJLEVBQUUseUJBQVEsQ0FBVztRQUNqQyxJQUFNLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDO1FBQ2xELElBQUEsaUJBQTRDLEVBQTFDLHdDQUFpQixFQUFFLGtCQUF1QixDQUFDO1FBRW5EOzs7Ozs7Ozs7OztZQVdJO1FBQ0osVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSSxFQUFFLGNBQWM7WUFDcEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFLLEtBQUssQ0FBQyxRQUFRLGtCQUFlLEVBQUU7WUFDbEQsT0FBTyxFQUFFLFFBQVEsS0FBSyxjQUFjLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUMxRCxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxNQUFNLENBQUMsZ0NBQWdDLENBQUM7Z0JBQzlDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBSyxLQUFLLENBQUMsUUFBUSxxQkFBa0IsRUFBRTtnQkFDckQsT0FBTyxFQUFFLFFBQVEsS0FBSyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQzdELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFLLEtBQUssQ0FBQyxRQUFRLHVCQUFvQjtvQkFDM0MsV0FBVyxFQUFFO3dCQUNYLElBQUksRUFBRSxDQUFDO3FCQUNSO2lCQUNGO2dCQUNELE9BQU8sRUFBRSxRQUFRLEtBQUssbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUMvRCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFLLEtBQUssQ0FBQyxRQUFRLHNCQUFtQixFQUFFO2dCQUN0RCxPQUFPLEVBQUUsUUFBUSxLQUFLLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDOUQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxPQUFPO2dCQUNiLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBSyxLQUFLLENBQUMsUUFBUSxXQUFRLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbkQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxXQUFXO2dCQUNqQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUssS0FBSyxDQUFDLFFBQVEsVUFBTyxFQUFFO2dCQUMxQyxPQUFPLEVBQUUsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ2xELENBQUMsQ0FBQztTQUNKO1FBRUQsa0JBQWtCO1FBQ2xCLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDdkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUExRUQsQ0FBbUMsVUFBVSxHQTBFNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTmF2RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHBhcmFtKTogYW55IHtcclxuICAgIGlmICghcGFyYW0pIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IGRhdGEsIHNlbGVjdGVkIH0gPSBwYXJhbTtcclxuICAgIGNvbnN0IG5hdmlnYXRpb24gPSB7IGl0ZW1zOiBbXSwgcGF5bG9hZDogJ2VudGl0YS1uYXYnIH07XHJcbiAgICBjb25zdCB7IGhhc01ldGFkYXRhRmllbGRzLCBsYWJlbHMgfSA9IHRoaXMub3B0aW9ucztcclxuXHJcbiAgICAvKiBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xyXG4gICAgICB0ZXh0OiAnT1ZFUlZJRVcnLFxyXG4gICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L292ZXJ2aWV3YCB9LFxyXG4gICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ292ZXJ2aWV3JyA/ICdpcy1zZWxlY3RlZCBvdmVydmlldy10YWInIDogJ292ZXJ2aWV3LXRhYicsXHJcbiAgICB9KTtcclxuICAgIGlmIChoYXNNZXRhZGF0YUZpZWxkcykge1xyXG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xyXG4gICAgICAgIHRleHQ6ICdJTkZPUk1BWklPTkknLFxyXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vaW5mb3JtYXppb25pYCB9LFxyXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnaW5mb3JtYXppb25pJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcclxuICAgICAgfSk7XHJcbiAgICB9ICovXHJcbiAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xyXG4gICAgICB0ZXh0OiAnSU5GT1JNQVpJT05JJyxcclxuICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9pbmZvcm1hemlvbmlgIH0sXHJcbiAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnaW5mb3JtYXppb25pJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcclxuICAgIH0pO1xyXG4gICAgaWYgKGRhdGEucmVsYXRlZExhKSB7XHJcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgdGV4dDogbGFiZWxzWydhZ2dyZWdhemlvbmktbG9naWNoZS1jb2xsZWdhdGUnXSxcclxuICAgICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L2ZvbmRpLWNvbGxlZ2F0aWAgfSxcclxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ2ZvbmRpLWNvbGxlZ2F0aScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEucmVsYXRlZEl0ZW1zKSB7XHJcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgdGV4dDogJ09HR0VUVEkgQ09MTEVHQVRJJyxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9vZ2dldHRpLWNvbGxlZ2F0aWAsXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnb2dnZXR0aS1jb2xsZWdhdGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhLnJlbGF0ZWRFbnRpdGllcykge1xyXG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xyXG4gICAgICAgIHRleHQ6ICdFTlRJVMOAIENPTExFR0FURScsXHJcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9lbnRpdGEtY29sbGVnYXRlYCB9LFxyXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnZW50aXRhLWNvbGxlZ2F0ZScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEuZXh0cmFUYWIpIHtcclxuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcclxuICAgICAgICB0ZXh0OiAnTUFYWEknLFxyXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vbWF4eGlgIH0sXHJcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdtYXh4aScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEud2lraVRhYikge1xyXG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xyXG4gICAgICAgIHRleHQ6ICdXSUtJUEVESUEnLFxyXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vd2lraWAgfSxcclxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ3dpa2knID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbmUgdGFiIGNvbnRyb2xcclxuICAgIGlmIChuYXZpZ2F0aW9uLml0ZW1zLmxlbmd0aCA9PT0gMiAmJiAhaGFzTWV0YWRhdGFGaWVsZHMpIHtcclxuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5zaGlmdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuYXZpZ2F0aW9uO1xyXG4gIH1cclxufVxyXG4iXX0=