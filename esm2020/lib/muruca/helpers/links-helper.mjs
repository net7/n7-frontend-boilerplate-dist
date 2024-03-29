const extractQueryParams = (queryParams) => {
    const params = {};
    queryParams.split('&').forEach((param) => {
        const [key, value] = param.split('=');
        params[key] = value;
    });
    return params;
};
export default {
    getQueryParams(href) {
        const queryParams = href.split('?')[1] ? extractQueryParams(href.split('?')[1]) : null;
        return this.isExternalLink(href) ? null : queryParams;
    },
    getRouterLink(href) {
        return this.isExternalLink(href) ? href : href.split('?')[0];
    },
    isExternalLink(href) {
        return /^http(?:s)?:\/{2}\S+$/.test(href);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MtaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2hlbHBlcnMvbGlua3MtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxXQUFtQixFQUFFLEVBQUU7SUFDakQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDdkMsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixlQUFlO0lBQ2IsY0FBYyxDQUFDLElBQVk7UUFDekIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkYsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsYUFBYSxDQUFDLElBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELGNBQWMsQ0FBQyxJQUFZO1FBQ3pCLE9BQU8sdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXh0cmFjdFF1ZXJ5UGFyYW1zID0gKHF1ZXJ5UGFyYW1zOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBwYXJhbXMgPSB7fTtcclxuICBxdWVyeVBhcmFtcy5zcGxpdCgnJicpLmZvckVhY2goKHBhcmFtKSA9PiB7XHJcbiAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBwYXJhbS5zcGxpdCgnPScpO1xyXG4gICAgcGFyYW1zW2tleV0gPSB2YWx1ZTtcclxuICB9KTtcclxuICByZXR1cm4gcGFyYW1zO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldFF1ZXJ5UGFyYW1zKGhyZWY6IHN0cmluZykge1xyXG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSBocmVmLnNwbGl0KCc/JylbMV0gPyBleHRyYWN0UXVlcnlQYXJhbXMoaHJlZi5zcGxpdCgnPycpWzFdKSA6IG51bGw7XHJcbiAgICByZXR1cm4gdGhpcy5pc0V4dGVybmFsTGluayhocmVmKSA/IG51bGwgOiBxdWVyeVBhcmFtcztcclxuICB9LFxyXG4gIGdldFJvdXRlckxpbmsoaHJlZjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0V4dGVybmFsTGluayhocmVmKSA/IGhyZWYgOiBocmVmLnNwbGl0KCc/JylbMF07XHJcbiAgfSxcclxuICBpc0V4dGVybmFsTGluayhocmVmOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAvXmh0dHAoPzpzKT86XFwvezJ9XFxTKyQvLnRlc3QoaHJlZik7XHJcbiAgfVxyXG59O1xyXG4iXX0=