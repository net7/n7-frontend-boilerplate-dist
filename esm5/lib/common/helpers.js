// eslint-disable-next-line import/no-extraneous-dependencies
import slugify from 'slugify';
var domParser = new DOMParser();
export default {
    prettifySnakeCase: function (key, label) {
        var _this = this;
        if (typeof label === 'string') {
            return label;
        }
        return (key || '').split('_').map(function (word, index) { return (index === 0 ? _this.ucFirst(word) : word); }).join(' ');
    },
    ucFirst: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    slugify: function (str) {
        if (!str) {
            return '';
        }
        var parsedDoc = domParser.parseFromString(str, 'text/html');
        var parsedString = parsedDoc.body.textContent || '';
        // custom replacements
        parsedString = parsedString.replace(/\//g, '-');
        return slugify(parsedString, {
            remove: /[*+~.()'"!:@,]/g,
            lower: true
        });
    },
    browserIsIE: function () {
        return window.navigator.userAgent.match(/(MSIE|Trident)/);
    },
    escapeDoubleQuotes: function (str) {
        if (str.search(/\\?(")([\w\s]+)\\?(")/g) >= 0) {
            // match piece of string between double quotes
            return str.replace(/\\?(")([\w\s]+)\\?(")/g, '\\$1$2\\$3'); // thanks @slevithan!
        }
        return str.replace(/\\([\s\S])|(")/g, '\\\\\\$1$2'); // thanks @slevithan!
    },
    unescapeDoubleQuotes: function (str) {
        return (str && str !== '') ? str.replace(/\\*(")/g, '$1') : str; // thanks @slevithan!
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0QsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBRTlCLElBQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFFbEMsZUFBZTtJQUNiLGlCQUFpQixFQUFqQixVQUFrQixHQUFXLEVBQUUsS0FBYztRQUE3QyxpQkFLQztRQUpDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSyxJQUFLLE9BQUEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBQ0QsT0FBTyxFQUFQLFVBQVEsR0FBVztRQUNqQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsT0FBTyxFQUFQLFVBQVEsR0FBVztRQUNqQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlELElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUNwRCxzQkFBc0I7UUFDdEIsWUFBWSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRTtZQUMzQixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFdBQVc7UUFDVCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRCxrQkFBa0IsWUFBQyxHQUFHO1FBQ3BCLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3Qyw4Q0FBOEM7WUFDOUMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMscUJBQXFCO1NBQ2xGO1FBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMscUJBQXFCO0lBQzVFLENBQUM7SUFDRCxvQkFBb0IsWUFBQyxHQUFHO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMscUJBQXFCO0lBQ3hGLENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSc7XG5cbmNvbnN0IGRvbVBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmV0dGlmeVNuYWtlQ2FzZShrZXk6IHN0cmluZywgbGFiZWw/OiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGxhYmVsID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cbiAgICByZXR1cm4gKGtleSB8fCAnJykuc3BsaXQoJ18nKS5tYXAoKHdvcmQsIGluZGV4KSA9PiAoaW5kZXggPT09IDAgPyB0aGlzLnVjRmlyc3Qod29yZCkgOiB3b3JkKSkuam9pbignICcpO1xuICB9LFxuICB1Y0ZpcnN0KHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgfSxcbiAgc2x1Z2lmeShzdHI6IHN0cmluZykge1xuICAgIGlmICghc3RyKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IHBhcnNlZERvYyA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJyk7XG4gICAgbGV0IHBhcnNlZFN0cmluZyA9IHBhcnNlZERvYy5ib2R5LnRleHRDb250ZW50IHx8ICcnO1xuICAgIC8vIGN1c3RvbSByZXBsYWNlbWVudHNcbiAgICBwYXJzZWRTdHJpbmcgPSBwYXJzZWRTdHJpbmcucmVwbGFjZSgvXFwvL2csICctJyk7XG4gICAgcmV0dXJuIHNsdWdpZnkocGFyc2VkU3RyaW5nLCB7XG4gICAgICByZW1vdmU6IC9bKit+LigpJ1wiITpALF0vZyxcbiAgICAgIGxvd2VyOiB0cnVlXG4gICAgfSk7XG4gIH0sXG4gIGJyb3dzZXJJc0lFKCkge1xuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKE1TSUV8VHJpZGVudCkvKTtcbiAgfSxcbiAgZXNjYXBlRG91YmxlUXVvdGVzKHN0cikge1xuICAgIGlmIChzdHIuc2VhcmNoKC9cXFxcPyhcIikoW1xcd1xcc10rKVxcXFw/KFwiKS9nKSA+PSAwKSB7XG4gICAgICAvLyBtYXRjaCBwaWVjZSBvZiBzdHJpbmcgYmV0d2VlbiBkb3VibGUgcXVvdGVzXG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcXFw/KFwiKShbXFx3XFxzXSspXFxcXD8oXCIpL2csICdcXFxcJDEkMlxcXFwkMycpOyAvLyB0aGFua3MgQHNsZXZpdGhhbiFcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFxcKFtcXHNcXFNdKXwoXCIpL2csICdcXFxcXFxcXFxcXFwkMSQyJyk7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxuICB9LFxuICB1bmVzY2FwZURvdWJsZVF1b3RlcyhzdHIpIHtcbiAgICByZXR1cm4gKHN0ciAmJiBzdHIgIT09ICcnKSA/IHN0ci5yZXBsYWNlKC9cXFxcKihcIikvZywgJyQxJykgOiBzdHI7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxuICB9XG59O1xuIl19