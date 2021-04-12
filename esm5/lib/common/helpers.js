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
    escapeQuotes: function (str) {
        if (typeof str !== 'string') {
            return '';
        }
        return str
            .replace(/"/g, '\\\\\\"')
            .replace(/'/g, '\\\\\'');
    },
    unescapeQuotes: function (str) {
        if (typeof str !== 'string') {
            return '';
        }
        return str
            .replace(/\\\\\\"/g, '"')
            .replace(/\\\\'/g, '\'');
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
    },
    striptags: function (str) {
        if (typeof str !== 'string') {
            return '';
        }
        return str.replace(/(<([^>]+)>)/gi, '');
    },
    isElementInViewport: function (el) {
        if (!el) {
            throw Error('There is no element');
        }
        var rect = el.getBoundingClientRect();
        return rect.bottom > 0
            && rect.right > 0
            && rect.left < (window.innerWidth || document.documentElement.clientWidth)
            && rect.top < (window.innerHeight || document.documentElement.clientHeight);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0QsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBRTlCLElBQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFFbEMsZUFBZTtJQUNiLGlCQUFpQixFQUFqQixVQUFrQixHQUFXLEVBQUUsS0FBYztRQUE3QyxpQkFLQztRQUpDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSyxJQUFLLE9BQUEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBQ0QsT0FBTyxFQUFQLFVBQVEsR0FBVztRQUNqQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsT0FBTyxFQUFQLFVBQVEsR0FBVztRQUNqQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlELElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUNwRCxzQkFBc0I7UUFDdEIsWUFBWSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRTtZQUMzQixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFdBQVc7UUFDVCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRCxZQUFZLFlBQUMsR0FBRztRQUNkLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLEdBQUc7YUFDUCxPQUFPLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQzthQUN4QixPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxjQUFjLFlBQUMsR0FBRztRQUNoQixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxHQUFHO2FBQ1AsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUM7YUFDeEIsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsa0JBQWtCLFlBQUMsR0FBRztRQUNwQixJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0MsOENBQThDO1lBQzlDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtTQUNsRjtRQUNELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtJQUM1RSxDQUFDO0lBQ0Qsb0JBQW9CLFlBQUMsR0FBRztRQUN0QixPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQjtJQUN4RixDQUFDO0lBQ0QsU0FBUyxZQUFDLEdBQUc7UUFDWCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsbUJBQW1CLEVBQW5CLFVBQW9CLEVBQWU7UUFDakMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLE1BQU0sS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDcEM7UUFDRCxJQUFNLElBQUksR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUV4QyxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztlQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztlQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO2VBQ3ZFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEYsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXHJcbmltcG9ydCBzbHVnaWZ5IGZyb20gJ3NsdWdpZnknO1xyXG5cclxuY29uc3QgZG9tUGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByZXR0aWZ5U25ha2VDYXNlKGtleTogc3RyaW5nLCBsYWJlbD86IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChrZXkgfHwgJycpLnNwbGl0KCdfJykubWFwKCh3b3JkLCBpbmRleCkgPT4gKGluZGV4ID09PSAwID8gdGhpcy51Y0ZpcnN0KHdvcmQpIDogd29yZCkpLmpvaW4oJyAnKTtcclxuICB9LFxyXG4gIHVjRmlyc3Qoc3RyOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XHJcbiAgfSxcclxuICBzbHVnaWZ5KHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJzZWREb2MgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0ciwgJ3RleHQvaHRtbCcpO1xyXG4gICAgbGV0IHBhcnNlZFN0cmluZyA9IHBhcnNlZERvYy5ib2R5LnRleHRDb250ZW50IHx8ICcnO1xyXG4gICAgLy8gY3VzdG9tIHJlcGxhY2VtZW50c1xyXG4gICAgcGFyc2VkU3RyaW5nID0gcGFyc2VkU3RyaW5nLnJlcGxhY2UoL1xcLy9nLCAnLScpO1xyXG4gICAgcmV0dXJuIHNsdWdpZnkocGFyc2VkU3RyaW5nLCB7XHJcbiAgICAgIHJlbW92ZTogL1sqK34uKCknXCIhOkAsXS9nLFxyXG4gICAgICBsb3dlcjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBicm93c2VySXNJRSgpIHtcclxuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKE1TSUV8VHJpZGVudCkvKTtcclxuICB9LFxyXG4gIGVzY2FwZVF1b3RlcyhzdHIpIHtcclxuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyXHJcbiAgICAgIC5yZXBsYWNlKC9cIi9nLCAnXFxcXFxcXFxcXFxcXCInKVxyXG4gICAgICAucmVwbGFjZSgvJy9nLCAnXFxcXFxcXFxcXCcnKTtcclxuICB9LFxyXG4gIHVuZXNjYXBlUXVvdGVzKHN0cikge1xyXG4gICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJcclxuICAgICAgLnJlcGxhY2UoL1xcXFxcXFxcXFxcXFwiL2csICdcIicpXHJcbiAgICAgIC5yZXBsYWNlKC9cXFxcXFxcXCcvZywgJ1xcJycpO1xyXG4gIH0sXHJcbiAgZXNjYXBlRG91YmxlUXVvdGVzKHN0cikge1xyXG4gICAgaWYgKHN0ci5zZWFyY2goL1xcXFw/KFwiKShbXFx3XFxzXSspXFxcXD8oXCIpL2cpID49IDApIHtcclxuICAgICAgLy8gbWF0Y2ggcGllY2Ugb2Ygc3RyaW5nIGJldHdlZW4gZG91YmxlIHF1b3Rlc1xyXG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcXFw/KFwiKShbXFx3XFxzXSspXFxcXD8oXCIpL2csICdcXFxcJDEkMlxcXFwkMycpOyAvLyB0aGFua3MgQHNsZXZpdGhhbiFcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxcXChbXFxzXFxTXSl8KFwiKS9nLCAnXFxcXFxcXFxcXFxcJDEkMicpOyAvLyB0aGFua3MgQHNsZXZpdGhhbiFcclxuICB9LFxyXG4gIHVuZXNjYXBlRG91YmxlUXVvdGVzKHN0cikge1xyXG4gICAgcmV0dXJuIChzdHIgJiYgc3RyICE9PSAnJykgPyBzdHIucmVwbGFjZSgvXFxcXCooXCIpL2csICckMScpIDogc3RyOyAvLyB0aGFua3MgQHNsZXZpdGhhbiFcclxuICB9LFxyXG4gIHN0cmlwdGFncyhzdHIpIHtcclxuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyk7XHJcbiAgfSxcclxuICBpc0VsZW1lbnRJblZpZXdwb3J0KGVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICB0aHJvdyBFcnJvcignVGhlcmUgaXMgbm8gZWxlbWVudCcpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIHJldHVybiByZWN0LmJvdHRvbSA+IDBcclxuICAgICAgICAmJiByZWN0LnJpZ2h0ID4gMFxyXG4gICAgICAgICYmIHJlY3QubGVmdCA8ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXHJcbiAgICAgICAgJiYgcmVjdC50b3AgPCAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xyXG4gIH0sXHJcbn07XHJcbiJdfQ==