import { DataSource } from '@n7-frontend/core';
export class AwEntitaNavDS extends DataSource {
    transform(param) {
        if (!param) {
            return null;
        }
        const { data, selected } = param;
        const navigation = { items: [], payload: 'entita-nav' };
        const { hasMetadataFields, labels } = this.options;
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
            anchor: { href: `${param.basePath}/informazioni` },
            classes: selected === 'informazioni' ? 'is-selected' : '',
        });
        if (data.relatedLa) {
            navigation.items.push({
                text: labels['aggregazioni-logiche-collegate'],
                anchor: { href: `${param.basePath}/fondi-collegati` },
                classes: selected === 'fondi-collegati' ? 'is-selected' : '',
            });
        }
        if (data.relatedItems) {
            navigation.items.push({
                text: 'OGGETTI COLLEGATI',
                anchor: {
                    href: `${param.basePath}/oggetti-collegati`,
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
                anchor: { href: `${param.basePath}/entita-collegate` },
                classes: selected === 'entita-collegate' ? 'is-selected' : '',
            });
        }
        if (data.extraTab) {
            navigation.items.push({
                text: 'MAXXI',
                anchor: { href: `${param.basePath}/maxxi` },
                classes: selected === 'maxxi' ? 'is-selected' : '',
            });
        }
        if (data.wikiTab) {
            navigation.items.push({
                text: 'WIKIPEDIA',
                anchor: { href: `${param.basePath}/wiki` },
                classes: selected === 'wiki' ? 'is-selected' : '',
            });
        }
        // one tab control
        if (navigation.items.length === 2 && !hasMetadataFields) {
            navigation.items.shift();
        }
        return navigation;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9lbnRpdGEtbmF2LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sYUFBYyxTQUFRLFVBQVU7SUFDakMsU0FBUyxDQUFDLEtBQUs7UUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNqQyxNQUFNLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDO1FBQ3hELE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRW5EOzs7Ozs7Ozs7OztZQVdJO1FBQ0osVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSSxFQUFFLGNBQWM7WUFDcEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsZUFBZSxFQUFFO1lBQ2xELE9BQU8sRUFBRSxRQUFRLEtBQUssY0FBYyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDMUQsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsTUFBTSxDQUFDLGdDQUFnQyxDQUFDO2dCQUM5QyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxrQkFBa0IsRUFBRTtnQkFDckQsT0FBTyxFQUFFLFFBQVEsS0FBSyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQzdELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsb0JBQW9CO29CQUMzQyxXQUFXLEVBQUU7d0JBQ1gsSUFBSSxFQUFFLENBQUM7cUJBQ1I7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFLFFBQVEsS0FBSyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQy9ELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxtQkFBbUIsRUFBRTtnQkFDdEQsT0FBTyxFQUFFLFFBQVEsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQzlELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxRQUFRLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbkQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxXQUFXO2dCQUNqQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxPQUFPLEVBQUU7Z0JBQzFDLE9BQU8sRUFBRSxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbEQsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxrQkFBa0I7UUFDbEIsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN2RCxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFCO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0VudGl0YU5hdkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShwYXJhbSk6IGFueSB7XHJcbiAgICBpZiAoIXBhcmFtKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBkYXRhLCBzZWxlY3RlZCB9ID0gcGFyYW07XHJcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0geyBpdGVtczogW10sIHBheWxvYWQ6ICdlbnRpdGEtbmF2JyB9O1xyXG4gICAgY29uc3QgeyBoYXNNZXRhZGF0YUZpZWxkcywgbGFiZWxzIH0gPSB0aGlzLm9wdGlvbnM7XHJcblxyXG4gICAgLyogbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcclxuICAgICAgdGV4dDogJ09WRVJWSUVXJyxcclxuICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9vdmVydmlld2AgfSxcclxuICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdvdmVydmlldycgPyAnaXMtc2VsZWN0ZWQgb3ZlcnZpZXctdGFiJyA6ICdvdmVydmlldy10YWInLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoaGFzTWV0YWRhdGFGaWVsZHMpIHtcclxuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcclxuICAgICAgICB0ZXh0OiAnSU5GT1JNQVpJT05JJyxcclxuICAgICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L2luZm9ybWF6aW9uaWAgfSxcclxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ2luZm9ybWF6aW9uaScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXHJcbiAgICAgIH0pO1xyXG4gICAgfSAqL1xyXG4gICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcclxuICAgICAgdGV4dDogJ0lORk9STUFaSU9OSScsXHJcbiAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vaW5mb3JtYXppb25pYCB9LFxyXG4gICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ2luZm9ybWF6aW9uaScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXHJcbiAgICB9KTtcclxuICAgIGlmIChkYXRhLnJlbGF0ZWRMYSkge1xyXG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xyXG4gICAgICAgIHRleHQ6IGxhYmVsc1snYWdncmVnYXppb25pLWxvZ2ljaGUtY29sbGVnYXRlJ10sXHJcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9mb25kaS1jb2xsZWdhdGlgIH0sXHJcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdmb25kaS1jb2xsZWdhdGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhLnJlbGF0ZWRJdGVtcykge1xyXG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xyXG4gICAgICAgIHRleHQ6ICdPR0dFVFRJIENPTExFR0FUSScsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vb2dnZXR0aS1jb2xsZWdhdGlgLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ29nZ2V0dGktY29sbGVnYXRpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS5yZWxhdGVkRW50aXRpZXMpIHtcclxuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcclxuICAgICAgICB0ZXh0OiAnRU5USVTDgCBDT0xMRUdBVEUnLFxyXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vZW50aXRhLWNvbGxlZ2F0ZWAgfSxcclxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ2VudGl0YS1jb2xsZWdhdGUnID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhLmV4dHJhVGFiKSB7XHJcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgdGV4dDogJ01BWFhJJyxcclxuICAgICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L21heHhpYCB9LFxyXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnbWF4eGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhLndpa2lUYWIpIHtcclxuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcclxuICAgICAgICB0ZXh0OiAnV0lLSVBFRElBJyxcclxuICAgICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L3dpa2lgIH0sXHJcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICd3aWtpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb25lIHRhYiBjb250cm9sXHJcbiAgICBpZiAobmF2aWdhdGlvbi5pdGVtcy5sZW5ndGggPT09IDIgJiYgIWhhc01ldGFkYXRhRmllbGRzKSB7XHJcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMuc2hpZnQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmF2aWdhdGlvbjtcclxuICB9XHJcbn1cclxuIl19