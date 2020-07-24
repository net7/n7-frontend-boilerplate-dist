import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import * as moment from 'moment';
var AwTimelineDS = /** @class */ (function (_super) {
    __extends(AwTimelineDS, _super);
    function AwTimelineDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _this.transform = function (data) { return ({
            containerID: 'timeline-component',
            libOptions: {
                height: '500px',
                locale: 'it_IT',
                cluster: {
                    // titleTemplate: '{count}',
                    // fitOnDoubleClick: true,
                    clusterCriteria: function (f, s) { return f.content.charAt(0) === s.content.charAt(0); }
                },
                showTooltips: false,
                tooltip: {
                    followMouse: false,
                    template: function (d, element) { return "<div class=\"tooltip\">" + element.title + "</div>"; }
                },
                template: function (d) {
                    var start = moment(d.start).format('DDMM') === '0101'
                        ? moment(d.start).format('YYYY') : moment(d.start).format('DD MMMM YYYY');
                    var end;
                    if (d.end) {
                        end = moment(d.end).format('DDMM') === '0101'
                            ? moment(d.end).format('YYYY') : moment(d.end).format('DD MMMM YYYY');
                    }
                    var endHTML = d.end ? "- " + end : '';
                    return ("<div class=\"dates\"><em>" + start + endHTML + "</em></div><div class=\"content\">" + d.content + "</div>");
                },
                width: '100%',
                minHeight: '350px',
                maxHeight: '800px',
                // zoomMax: 31557600000, // one year
                zoomFriction: 8
            },
            dataSet: [
                {
                    id: 1,
                    content: 'Mostra internazionale di edilizia ospedaliera, Roma (1935)',
                    start: '1935'
                },
                {
                    id: 2,
                    content: 'Mostra di edilizia ospedaliera, Fiuggi',
                    start: '1942'
                },
                {
                    id: 3,
                    content: 'I Congresso mondiale di sociologia',
                    start: '1951'
                },
                {
                    id: 4,
                    content: 'V Congresso mondiale di sociologia, Washington D.C. (1962)',
                    start: '1962',
                },
                {
                    id: 5,
                    content: 'Mostra di edilizia pubblica, Pisa',
                    start: '1967-06-16',
                    end: '1967-06-21'
                },
                {
                    id: 6,
                    content: 'Strategia della tensione',
                    start: '1975',
                    end: '1984'
                },
                {
                    id: 7,
                    content: 'XX Congresso mondiale di sociologia, Roma',
                    start: '1995'
                }
            ],
            _setInstance: function (timeline) { return timeline; }
        }); };
        return _this;
    }
    return AwTimelineDS;
}(DataSource));
export { AwTimelineDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3RpbWVsaW5lLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakM7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUEyRUM7UUExRUMsNkRBQTZEO1FBQ25ELGVBQVMsR0FBRyxVQUFDLElBQUksSUFBSyxPQUFBLENBQUM7WUFDL0IsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsT0FBTyxFQUFFO29CQUNQLDRCQUE0QjtvQkFDNUIsMEJBQTBCO29CQUMxQixlQUFlLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQTNDLENBQTJDO2lCQUN2RTtnQkFDRCxZQUFZLEVBQUUsS0FBSztnQkFDbkIsT0FBTyxFQUFFO29CQUNQLFdBQVcsRUFBRSxLQUFLO29CQUNsQixRQUFRLEVBQUUsVUFBQyxDQUFNLEVBQUUsT0FBMEIsSUFBSyxPQUFBLDRCQUF3QixPQUFPLENBQUMsS0FBSyxXQUFRLEVBQTdDLENBQTZDO2lCQUNoRztnQkFDRCxRQUFRLEVBQUUsVUFBQyxDQUFNO29CQUNmLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE1BQU07d0JBQ3JELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVFLElBQUksR0FBVyxDQUFDO29CQUNoQixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUU7d0JBQ1QsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE1BQU07NEJBQzNDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQ3pFO29CQUNELElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQUssR0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ3hDLE9BQU8sQ0FBQyw4QkFBMEIsS0FBSyxHQUFHLE9BQU8sMENBQW1DLENBQUMsQ0FBQyxPQUFPLFdBQVEsQ0FBQyxDQUFDO2dCQUN6RyxDQUFDO2dCQUNELEtBQUssRUFBRSxNQUFNO2dCQUNiLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsb0NBQW9DO2dCQUNwQyxZQUFZLEVBQUUsQ0FBQzthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxFQUFFLEVBQUUsQ0FBQztvQkFDTCxPQUFPLEVBQUUsNERBQTREO29CQUNyRSxLQUFLLEVBQUUsTUFBTTtpQkFDZDtnQkFDRDtvQkFDRSxFQUFFLEVBQUUsQ0FBQztvQkFDTCxPQUFPLEVBQUUsd0NBQXdDO29CQUNqRCxLQUFLLEVBQUUsTUFBTTtpQkFDZDtnQkFDRDtvQkFDRSxFQUFFLEVBQUUsQ0FBQztvQkFDTCxPQUFPLEVBQUUsb0NBQW9DO29CQUM3QyxLQUFLLEVBQUUsTUFBTTtpQkFDZDtnQkFDRDtvQkFDRSxFQUFFLEVBQUUsQ0FBQztvQkFDTCxPQUFPLEVBQUUsNERBQTREO29CQUNyRSxLQUFLLEVBQUUsTUFBTTtpQkFDZDtnQkFDRDtvQkFDRSxFQUFFLEVBQUUsQ0FBQztvQkFDTCxPQUFPLEVBQUUsbUNBQW1DO29CQUM1QyxLQUFLLEVBQUUsWUFBWTtvQkFDbkIsR0FBRyxFQUFFLFlBQVk7aUJBQ2xCO2dCQUNEO29CQUNFLEVBQUUsRUFBRSxDQUFDO29CQUNMLE9BQU8sRUFBRSwwQkFBMEI7b0JBQ25DLEtBQUssRUFBRSxNQUFNO29CQUNiLEdBQUcsRUFBRSxNQUFNO2lCQUNaO2dCQUNEO29CQUNFLEVBQUUsRUFBRSxDQUFDO29CQUNMLE9BQU8sRUFBRSwyQ0FBMkM7b0JBQ3BELEtBQUssRUFBRSxNQUFNO2lCQUNkO2FBQ0Y7WUFDRCxZQUFZLEVBQUUsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLEVBQVIsQ0FBUTtTQUNyQyxDQUFDLEVBeEU4QixDQXdFOUIsQ0FBQzs7SUFDTCxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBM0VELENBQWtDLFVBQVUsR0EyRTNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgY2xhc3MgQXdUaW1lbGluZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKSA9PiAoe1xuICAgIGNvbnRhaW5lcklEOiAndGltZWxpbmUtY29tcG9uZW50JyxcbiAgICBsaWJPcHRpb25zOiB7XG4gICAgICBoZWlnaHQ6ICc1MDBweCcsXG4gICAgICBsb2NhbGU6ICdpdF9JVCcsXG4gICAgICBjbHVzdGVyOiB7XG4gICAgICAgIC8vIHRpdGxlVGVtcGxhdGU6ICd7Y291bnR9JyxcbiAgICAgICAgLy8gZml0T25Eb3VibGVDbGljazogdHJ1ZSxcbiAgICAgICAgY2x1c3RlckNyaXRlcmlhOiAoZiwgcykgPT4gZi5jb250ZW50LmNoYXJBdCgwKSA9PT0gcy5jb250ZW50LmNoYXJBdCgwKVxuICAgICAgfSxcbiAgICAgIHNob3dUb29sdGlwczogZmFsc2UsXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIGZvbGxvd01vdXNlOiBmYWxzZSxcbiAgICAgICAgdGVtcGxhdGU6IChkOiBhbnksIGVsZW1lbnQ6IHsgdGl0bGU6IHN0cmluZyB9KSA9PiBgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj4ke2VsZW1lbnQudGl0bGV9PC9kaXY+YFxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAoZDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gbW9tZW50KGQuc3RhcnQpLmZvcm1hdCgnRERNTScpID09PSAnMDEwMSdcbiAgICAgICAgICA/IG1vbWVudChkLnN0YXJ0KS5mb3JtYXQoJ1lZWVknKSA6IG1vbWVudChkLnN0YXJ0KS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xuICAgICAgICBsZXQgZW5kOiBzdHJpbmc7XG4gICAgICAgIGlmIChkLmVuZCkge1xuICAgICAgICAgIGVuZCA9IG1vbWVudChkLmVuZCkuZm9ybWF0KCdERE1NJykgPT09ICcwMTAxJ1xuICAgICAgICAgICAgPyBtb21lbnQoZC5lbmQpLmZvcm1hdCgnWVlZWScpIDogbW9tZW50KGQuZW5kKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVuZEhUTUwgPSBkLmVuZCA/IGAtICR7ZW5kfWAgOiAnJztcbiAgICAgICAgcmV0dXJuIChgPGRpdiBjbGFzcz1cImRhdGVzXCI+PGVtPiR7c3RhcnR9JHtlbmRIVE1MfTwvZW0+PC9kaXY+PGRpdiBjbGFzcz1cImNvbnRlbnRcIj4ke2QuY29udGVudH08L2Rpdj5gKTtcbiAgICAgIH0sXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWluSGVpZ2h0OiAnMzUwcHgnLFxuICAgICAgbWF4SGVpZ2h0OiAnODAwcHgnLFxuICAgICAgLy8gem9vbU1heDogMzE1NTc2MDAwMDAsIC8vIG9uZSB5ZWFyXG4gICAgICB6b29tRnJpY3Rpb246IDhcbiAgICB9LFxuICAgIGRhdGFTZXQ6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGNvbnRlbnQ6ICdNb3N0cmEgaW50ZXJuYXppb25hbGUgZGkgZWRpbGl6aWEgb3NwZWRhbGllcmEsIFJvbWEgKDE5MzUpJyxcbiAgICAgICAgc3RhcnQ6ICcxOTM1J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGNvbnRlbnQ6ICdNb3N0cmEgZGkgZWRpbGl6aWEgb3NwZWRhbGllcmEsIEZpdWdnaScsXG4gICAgICAgIHN0YXJ0OiAnMTk0MidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBjb250ZW50OiAnSSBDb25ncmVzc28gbW9uZGlhbGUgZGkgc29jaW9sb2dpYScsXG4gICAgICAgIHN0YXJ0OiAnMTk1MSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBjb250ZW50OiAnViBDb25ncmVzc28gbW9uZGlhbGUgZGkgc29jaW9sb2dpYSwgV2FzaGluZ3RvbiBELkMuICgxOTYyKScsXG4gICAgICAgIHN0YXJ0OiAnMTk2MicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgY29udGVudDogJ01vc3RyYSBkaSBlZGlsaXppYSBwdWJibGljYSwgUGlzYScsXG4gICAgICAgIHN0YXJ0OiAnMTk2Ny0wNi0xNicsXG4gICAgICAgIGVuZDogJzE5NjctMDYtMjEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNixcbiAgICAgICAgY29udGVudDogJ1N0cmF0ZWdpYSBkZWxsYSB0ZW5zaW9uZScsXG4gICAgICAgIHN0YXJ0OiAnMTk3NScsXG4gICAgICAgIGVuZDogJzE5ODQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNyxcbiAgICAgICAgY29udGVudDogJ1hYIENvbmdyZXNzbyBtb25kaWFsZSBkaSBzb2Npb2xvZ2lhLCBSb21hJyxcbiAgICAgICAgc3RhcnQ6ICcxOTk1J1xuICAgICAgfVxuICAgIF0sXG4gICAgX3NldEluc3RhbmNlOiAodGltZWxpbmUpID0+IHRpbWVsaW5lXG4gIH0pO1xufVxuIl19