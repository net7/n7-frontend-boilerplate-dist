import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class RestProvider {
    constructor(http) {
        this.http = http;
    }
    request$(providerConfig, requestId, options = {}) {
        const { params, httpOptions, urlParams = '', } = options;
        let { method } = options;
        let point;
        // default method
        if (!method) {
            method = providerConfig.defaultMethod || 'GET';
        }
        if (providerConfig.config && providerConfig.config[requestId]) {
            point = providerConfig.config[requestId];
        }
        // config point control
        if (!point) {
            throw Error(`No config found for requestId "${requestId}"`);
        }
        if (method === 'POST' || method === 'PUT') {
            return this.http[method.toLowerCase()](providerConfig.baseUrl + point + urlParams, params, httpOptions);
        }
        if (method === 'GET' || method === 'DELETE') {
            return this.http[method.toLowerCase()](providerConfig.baseUrl + point + urlParams, httpOptions);
        }
        throw Error(`Rest method ${method} not supported`);
    }
}
RestProvider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: RestProvider, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
RestProvider.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: RestProvider, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: RestProvider, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9yZXN0LnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU8zQyxNQUFNLE9BQU8sWUFBWTtJQUN2QixZQUNVLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFDdkIsQ0FBQztJQUVKLFFBQVEsQ0FBQyxjQUFjLEVBQUUsU0FBUyxFQUFFLFVBQWUsRUFBRTtRQUNuRCxNQUFNLEVBQ0osTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEdBQUcsRUFBRSxHQUNwQyxHQUFHLE9BQU8sQ0FBQztRQUNaLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDekIsSUFBSSxLQUFLLENBQUM7UUFFVixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLE1BQU0sR0FBRyxjQUFjLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQztTQUFFO1FBRWhFLElBQUksY0FBYyxDQUFDLE1BQU0sSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdELEtBQUssR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixNQUFNLEtBQUssQ0FBQyxrQ0FBa0MsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FDcEMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQ2hFLENBQUM7U0FDSDtRQUFDLElBQUksTUFBTSxLQUFLLEtBQUssSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FDcEMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsU0FBUyxFQUFFLFdBQVcsQ0FDeEQsQ0FBQztTQUNIO1FBQ0QsTUFBTSxLQUFLLENBQUMsZUFBZSxNQUFNLGdCQUFnQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7eUdBakNVLFlBQVk7NkdBQVosWUFBWSxjQUZYLE1BQU07MkZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25Qcm92aWRlciB9IGZyb20gJy4vY29tbXVuaWNhdGlvbi1wcm92aWRlci5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlc3RQcm92aWRlciBpbXBsZW1lbnRzIENvbW11bmljYXRpb25Qcm92aWRlciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgKSB7fVxyXG5cclxuICByZXF1ZXN0JChwcm92aWRlckNvbmZpZywgcmVxdWVzdElkLCBvcHRpb25zOiBhbnkgPSB7fSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBwYXJhbXMsIGh0dHBPcHRpb25zLCB1cmxQYXJhbXMgPSAnJyxcclxuICAgIH0gPSBvcHRpb25zO1xyXG4gICAgbGV0IHsgbWV0aG9kIH0gPSBvcHRpb25zO1xyXG4gICAgbGV0IHBvaW50O1xyXG5cclxuICAgIC8vIGRlZmF1bHQgbWV0aG9kXHJcbiAgICBpZiAoIW1ldGhvZCkgeyBtZXRob2QgPSBwcm92aWRlckNvbmZpZy5kZWZhdWx0TWV0aG9kIHx8ICdHRVQnOyB9XHJcblxyXG4gICAgaWYgKHByb3ZpZGVyQ29uZmlnLmNvbmZpZyAmJiBwcm92aWRlckNvbmZpZy5jb25maWdbcmVxdWVzdElkXSkge1xyXG4gICAgICBwb2ludCA9IHByb3ZpZGVyQ29uZmlnLmNvbmZpZ1tyZXF1ZXN0SWRdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbmZpZyBwb2ludCBjb250cm9sXHJcbiAgICBpZiAoIXBvaW50KSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBObyBjb25maWcgZm91bmQgZm9yIHJlcXVlc3RJZCBcIiR7cmVxdWVzdElkfVwiYCk7XHJcbiAgICB9XHJcbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcgfHwgbWV0aG9kID09PSAnUFVUJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwW21ldGhvZC50b0xvd2VyQ2FzZSgpXShcclxuICAgICAgICBwcm92aWRlckNvbmZpZy5iYXNlVXJsICsgcG9pbnQgKyB1cmxQYXJhbXMsIHBhcmFtcywgaHR0cE9wdGlvbnMsXHJcbiAgICAgICk7XHJcbiAgICB9IGlmIChtZXRob2QgPT09ICdHRVQnIHx8IG1ldGhvZCA9PT0gJ0RFTEVURScpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cFttZXRob2QudG9Mb3dlckNhc2UoKV0oXHJcbiAgICAgICAgcHJvdmlkZXJDb25maWcuYmFzZVVybCArIHBvaW50ICsgdXJsUGFyYW1zLCBodHRwT3B0aW9ucyxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRocm93IEVycm9yKGBSZXN0IG1ldGhvZCAke21ldGhvZH0gbm90IHN1cHBvcnRlZGApO1xyXG4gIH1cclxufVxyXG4iXX0=