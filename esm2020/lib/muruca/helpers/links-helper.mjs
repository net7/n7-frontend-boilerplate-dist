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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MtaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2hlbHBlcnMvbGlua3MtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxXQUFtQixFQUFFLEVBQUU7SUFDakQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDdkMsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixlQUFlO0lBQ2IsY0FBYyxDQUFDLElBQVk7UUFDekIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkYsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsYUFBYSxDQUFDLElBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELGNBQWMsQ0FBQyxJQUFZO1FBQ3pCLE9BQU8sdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXh0cmFjdFF1ZXJ5UGFyYW1zID0gKHF1ZXJ5UGFyYW1zOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcGFyYW1zID0ge307XG4gIHF1ZXJ5UGFyYW1zLnNwbGl0KCcmJykuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBwYXJhbS5zcGxpdCgnPScpO1xuICAgIHBhcmFtc1trZXldID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcGFyYW1zO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRRdWVyeVBhcmFtcyhocmVmOiBzdHJpbmcpIHtcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGhyZWYuc3BsaXQoJz8nKVsxXSA/IGV4dHJhY3RRdWVyeVBhcmFtcyhocmVmLnNwbGl0KCc/JylbMV0pIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5pc0V4dGVybmFsTGluayhocmVmKSA/IG51bGwgOiBxdWVyeVBhcmFtcztcbiAgfSxcbiAgZ2V0Um91dGVyTGluayhocmVmOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5pc0V4dGVybmFsTGluayhocmVmKSA/IGhyZWYgOiBocmVmLnNwbGl0KCc/JylbMF07XG4gIH0sXG4gIGlzRXh0ZXJuYWxMaW5rKGhyZWY6IHN0cmluZykge1xuICAgIHJldHVybiAvXmh0dHAoPzpzKT86XFwvezJ9XFxTKyQvLnRlc3QoaHJlZik7XG4gIH1cbn07XG4iXX0=