import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var DvExampleLayoutDS = /** @class */ (function (_super) {
    __extends(DvExampleLayoutDS, _super);
    function DvExampleLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Items = [
            {
                text: 'Last week',
                payload: 'Last week',
            },
            {
                text: 'Last month',
                payload: 'Last month',
            },
            {
                text: 'Last year',
                payload: 'Last year',
            },
            {
                text: 'Select Date',
                // this payload key is use for visualise the datepicker.
                payload: 'ByDate',
            },
        ];
        _this.datepickerOptions = {
            dateFormat: 'Y-m-d',
            mode: 'range',
        };
        _this.datePickerExternalData = {
            select: {
                id: 'dv-select',
                label: 'Last week',
                items: _this.Items,
            },
            datepicker: {
                id: 'datepicker',
                libOptions: _this.datepickerOptions,
            },
        };
        return _this;
    }
    DvExampleLayoutDS.prototype.onInit = function () {
        this.one('dv-datepicker-wrapper').update(this.datePickerExternalData);
    };
    return DvExampleLayoutDS;
}(LayoutDataSource));
export { DvExampleLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVyRDtJQUF1QyxxQ0FBZ0I7SUFBdkQ7UUFBQSxxRUF5Q0M7UUF4Q1csV0FBSyxHQUFHO1lBQ2Q7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE9BQU8sRUFBRSxXQUFXO2FBQ3JCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLE9BQU8sRUFBRSxZQUFZO2FBQ3RCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE9BQU8sRUFBRSxXQUFXO2FBQ3JCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLHdEQUF3RDtnQkFDeEQsT0FBTyxFQUFFLFFBQVE7YUFDbEI7U0FDRixDQUFDO1FBRU0sdUJBQWlCLEdBQUc7WUFDMUIsVUFBVSxFQUFFLE9BQU87WUFDbkIsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO1FBRU0sNEJBQXNCLEdBQUc7WUFDL0IsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxXQUFXO2dCQUNmLEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUsS0FBSSxDQUFDLEtBQUs7YUFDbEI7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsRUFBRSxFQUFFLFlBQVk7Z0JBQ2hCLFVBQVUsRUFBRSxLQUFJLENBQUMsaUJBQWlCO2FBQ25DO1NBQ0YsQ0FBQTs7SUFLTCxDQUFDO0lBSEcsa0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXpDRCxDQUF1QyxnQkFBZ0IsR0F5Q3REIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEdkV4YW1wbGVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gICAgcHJpdmF0ZSBJdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdMYXN0IHdlZWsnLFxyXG4gICAgICAgIHBheWxvYWQ6ICdMYXN0IHdlZWsnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ0xhc3QgbW9udGgnLFxyXG4gICAgICAgIHBheWxvYWQ6ICdMYXN0IG1vbnRoJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdMYXN0IHllYXInLFxyXG4gICAgICAgIHBheWxvYWQ6ICdMYXN0IHllYXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1NlbGVjdCBEYXRlJyxcclxuICAgICAgICAvLyB0aGlzIHBheWxvYWQga2V5IGlzIHVzZSBmb3IgdmlzdWFsaXNlIHRoZSBkYXRlcGlja2VyLlxyXG4gICAgICAgIHBheWxvYWQ6ICdCeURhdGUnLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGVwaWNrZXJPcHRpb25zID0ge1xyXG4gICAgICBkYXRlRm9ybWF0OiAnWS1tLWQnLFxyXG4gICAgICBtb2RlOiAncmFuZ2UnLFxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGVQaWNrZXJFeHRlcm5hbERhdGEgPSB7XHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIGlkOiAnZHYtc2VsZWN0JyxcclxuICAgICAgICBsYWJlbDogJ0xhc3Qgd2VlaycsXHJcbiAgICAgICAgaXRlbXM6IHRoaXMuSXRlbXMsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGVwaWNrZXI6IHtcclxuICAgICAgICBpZDogJ2RhdGVwaWNrZXInLFxyXG4gICAgICAgIGxpYk9wdGlvbnM6IHRoaXMuZGF0ZXBpY2tlck9wdGlvbnMsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcblxyXG4gICAgb25Jbml0KCkge1xyXG4gICAgICB0aGlzLm9uZSgnZHYtZGF0ZXBpY2tlci13cmFwcGVyJykudXBkYXRlKHRoaXMuZGF0ZVBpY2tlckV4dGVybmFsRGF0YSk7XHJcbiAgICB9XHJcbn1cclxuIl19