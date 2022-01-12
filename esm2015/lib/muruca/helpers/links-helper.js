const extractQueryParams = (queryParams) => {
    const params = {};
    queryParams.split('&').forEach((param) => {
        const [key, value] = param.split('=');
        params[key] = value;
    });
    return params;
};
const ɵ0 = extractQueryParams;
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MtaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9oZWxwZXJzL2xpbmtzLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLGtCQUFrQixHQUFHLENBQUMsV0FBbUIsRUFBRSxFQUFFO0lBQ2pELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3ZDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDOztBQUVGLGVBQWU7SUFDYixjQUFjLENBQUMsSUFBWTtRQUN6QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2RixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQ3hELENBQUM7SUFDRCxhQUFhLENBQUMsSUFBWTtRQUN4QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsY0FBYyxDQUFDLElBQVk7UUFDekIsT0FBTyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHRyYWN0UXVlcnlQYXJhbXMgPSAocXVlcnlQYXJhbXM6IHN0cmluZykgPT4ge1xuICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgcXVlcnlQYXJhbXMuc3BsaXQoJyYnKS5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHBhcmFtLnNwbGl0KCc9Jyk7XG4gICAgcGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiBwYXJhbXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFF1ZXJ5UGFyYW1zKGhyZWY6IHN0cmluZykge1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gaHJlZi5zcGxpdCgnPycpWzFdID8gZXh0cmFjdFF1ZXJ5UGFyYW1zKGhyZWYuc3BsaXQoJz8nKVsxXSkgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLmlzRXh0ZXJuYWxMaW5rKGhyZWYpID8gbnVsbCA6IHF1ZXJ5UGFyYW1zO1xuICB9LFxuICBnZXRSb3V0ZXJMaW5rKGhyZWY6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmlzRXh0ZXJuYWxMaW5rKGhyZWYpID8gaHJlZiA6IGhyZWYuc3BsaXQoJz8nKVswXTtcbiAgfSxcbiAgaXNFeHRlcm5hbExpbmsoaHJlZjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIC9eaHR0cCg/OnMpPzpcXC97Mn1cXFMrJC8udGVzdChocmVmKTtcbiAgfVxufTtcbiJdfQ==