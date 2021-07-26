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
    /** Return true if an object is empty */
    isEmpty: function (obj) { return (typeof obj === 'object'
        && Object.keys(obj).length === 0); }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0QsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBRTlCLElBQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFFbEMsZUFBZTtJQUNiLGlCQUFpQixFQUFqQixVQUFrQixHQUFXLEVBQUUsS0FBYztRQUE3QyxpQkFLQztRQUpDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSyxJQUFLLE9BQUEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBQ0QsT0FBTyxFQUFQLFVBQVEsR0FBVztRQUNqQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsT0FBTyxFQUFQLFVBQVEsR0FBVztRQUNqQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlELElBQUksWUFBWSxHQUFHLFNBQVMsQ0FB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bGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcclxuaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSc7XHJcblxyXG5jb25zdCBkb21QYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJldHRpZnlTbmFrZUNhc2Uoa2V5OiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIGxhYmVsID09PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGtleSB8fCAnJykuc3BsaXQoJ18nKS5tYXAoKHdvcmQsIGluZGV4KSA9PiAoaW5kZXggPT09IDAgPyB0aGlzLnVjRmlyc3Qod29yZCkgOiB3b3JkKSkuam9pbignICcpO1xyXG4gIH0sXHJcbiAgdWNGaXJzdChzdHI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcclxuICB9LFxyXG4gIHNsdWdpZnkoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGNvbnN0IHBhcnNlZERvYyA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJyk7XHJcbiAgICBsZXQgcGFyc2VkU3RyaW5nID0gcGFyc2VkRG9jLmJvZHkudGV4dENvbnRlbnQgfHwgJyc7XHJcbiAgICAvLyBjdXN0b20gcmVwbGFjZW1lbnRzXHJcbiAgICBwYXJzZWRTdHJpbmcgPSBwYXJzZWRTdHJpbmcucmVwbGFjZSgvXFwvL2csICctJyk7XHJcbiAgICByZXR1cm4gc2x1Z2lmeShwYXJzZWRTdHJpbmcsIHtcclxuICAgICAgcmVtb3ZlOiAvWyorfi4oKSdcIiE6QCxdL2csXHJcbiAgICAgIGxvd2VyOiB0cnVlXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGJyb3dzZXJJc0lFKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oTVNJRXxUcmlkZW50KS8pO1xyXG4gIH0sXHJcbiAgZXNjYXBlUXVvdGVzKHN0cikge1xyXG4gICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJcclxuICAgICAgLnJlcGxhY2UoL1wiL2csICdcXFxcXFxcXFxcXFxcIicpXHJcbiAgICAgIC5yZXBsYWNlKC8nL2csICdcXFxcXFxcXFxcJycpO1xyXG4gIH0sXHJcbiAgdW5lc2NhcGVRdW90ZXMoc3RyKSB7XHJcbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0clxyXG4gICAgICAucmVwbGFjZSgvXFxcXFxcXFxcXFxcXCIvZywgJ1wiJylcclxuICAgICAgLnJlcGxhY2UoL1xcXFxcXFxcJy9nLCAnXFwnJyk7XHJcbiAgfSxcclxuICBlc2NhcGVEb3VibGVRdW90ZXMoc3RyKSB7XHJcbiAgICBpZiAoc3RyLnNlYXJjaCgvXFxcXD8oXCIpKFtcXHdcXHNdKylcXFxcPyhcIikvZykgPj0gMCkge1xyXG4gICAgICAvLyBtYXRjaCBwaWVjZSBvZiBzdHJpbmcgYmV0d2VlbiBkb3VibGUgcXVvdGVzXHJcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxcXD8oXCIpKFtcXHdcXHNdKylcXFxcPyhcIikvZywgJ1xcXFwkMSQyXFxcXCQzJyk7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFxcKFtcXHNcXFNdKXwoXCIpL2csICdcXFxcXFxcXFxcXFwkMSQyJyk7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxyXG4gIH0sXHJcbiAgdW5lc2NhcGVEb3VibGVRdW90ZXMoc3RyKSB7XHJcbiAgICByZXR1cm4gKHN0ciAmJiBzdHIgIT09ICcnKSA/IHN0ci5yZXBsYWNlKC9cXFxcKihcIikvZywgJyQxJykgOiBzdHI7IC8vIHRoYW5rcyBAc2xldml0aGFuIVxyXG4gIH0sXHJcbiAgc3RyaXB0YWdzKHN0cikge1xyXG4gICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKTtcclxuICB9LFxyXG4gIGlzRWxlbWVudEluVmlld3BvcnQoZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVsKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdUaGVyZSBpcyBubyBlbGVtZW50Jyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgcmV0dXJuIHJlY3QuYm90dG9tID4gMFxyXG4gICAgICAmJiByZWN0LnJpZ2h0ID4gMFxyXG4gICAgICAmJiByZWN0LmxlZnQgPCAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxyXG4gICAgICAmJiByZWN0LnRvcCA8ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XHJcbiAgfSxcclxuICAvKiogUmV0dXJuIHRydWUgaWYgYW4gb2JqZWN0IGlzIGVtcHR5ICovXHJcbiAgaXNFbXB0eTogKG9iaikgPT4gKFxyXG4gICAgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcclxuICAgICAgJiYgT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDBcclxuICApXHJcbn07XHJcbiJdfQ==