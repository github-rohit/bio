webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/images/banner_4.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner_4.2362109faa3d4d99aa4c.png";

/***/ }),

/***/ "../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/lib/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--8-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/lib/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--8-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Merriweather:300,300i,700|Open+Sans:400,500\");\nbody {\n  display: block;\n  color: #4E4E4E;\n  font: 16px/1.7 \"Roboto\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 1px;\n  -webkit-font-smoothing: antialiased;\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -ms-backface-visibility: hidden;\n  background: transparent;\n  font-weight: 300;\n  word-wrap: break-word; }\n/* Header */\n.header-fix {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 100; }\n.header {\n  margin-top: 15px;\n  margin-bottom: 45px; }\n.header h1.name {\n  font-size: 48px;\n  color: #FFF;\n  margin: 0;\n  text-transform: uppercase;\n  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5); }\n.header h3.designation {\n  color: #FFF;\n  font-weight: normal;\n  margin: 0;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); }\n.header .social .txt {\n  color: #FFF;\n  text-decoration: none; }\n.header .social a {\n  text-decoration: none; }\n/*BODY*/\n.page {\n  background: #FFF;\n  min-height: 700px;\n  padding: 0 60px; }\n/*Sections*/\n.section-margin {\n  margin: 45px 0; }\n.section-color {\n  color: #FFF;\n  padding-top: 60px;\n  padding-bottom: 60px; }\n.section-h2 {\n  margin: 0;\n  margin-bottom: 15px;\n  text-transform: uppercase; }\n.icon-circle {\n  border-radius: 100%;\n  height: 64px;\n  width: 64px;\n  background: rgba(0, 160, 159, 0.65);\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  padding-top: 16px;\n  margin-right: 15px; }\n.icon-circle .fa {\n  color: #FFF;\n  font-size: 32px; }\n.section-color .icon-circle {\n  background: rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(255, 255, 255, 0.3);\n          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(255, 255, 255, 0.3); }\n/*Time line*/\n.time-line {\n  margin-left: 32px;\n  padding-left: 47px;\n  position: relative; }\n.time-line:before {\n  content: '';\n  display: block;\n  position: absolute;\n  left: -1px;\n  top: 4px;\n  bottom: 0;\n  border-left: 1px solid #E5E5E4; }\n.time-line .time:before {\n  content: '';\n  display: block;\n  border-radius: 100%;\n  height: 16px;\n  width: 16px;\n  background: #E5E5E4;\n  margin-left: -56px;\n  position: absolute;\n  margin-top: 4px; }\n.time-line .date {\n  color: #666; }\n.time-line .role {\n  font-weight: lighter;\n  font-style: italic; }\n.time-line .time:not(:first-child) {\n  margin-top: 45px; }\n.section-color .time-line:before {\n  border-left-color: #FFF; }\n.section-color .time-line .time:before {\n  background: #FFF; }\n.section-color .time-line .date {\n  color: #DDD; }\n/*Tech*/\n.tech-label .label {\n  background: rgba(0, 160, 159, 0.65);\n  font-weight: normal; }\n.section-color .tech-label .label {\n  background: rgba(0, 0, 0, 0.2); }\n.tech {\n  margin: 0;\n  padding: 0; }\n.tech li {\n  text-align: center;\n  font-size: 12px;\n  font-weight: normal;\n  display: inline-block;\n  margin: 10px; }\n.tech li span {\n  display: inline-block;\n  border-radius: 100%;\n  height: 64px;\n  width: 64px;\n  background: rgba(0, 160, 159, 0.65);\n  margin-bottom: 10px;\n  color: #FFF;\n  line-height: 64px; }\n.section-color .tech li span {\n  background: rgba(0, 0, 0, 0.2); }\n.work-sample a {\n  text-decoration: none;\n  color: rgba(0, 160, 159, 0.65); }\n.section-color .work-sample a {\n  color: rgba(0, 0, 0, 0.2); }\n.section-color .work-sample a .txt {\n  color: #FFF; }\n/*Footer*/\nfooter {\n  padding: 15px; }\n.footer-padding {\n  padding-bottom: 64px; }\n/*STYLE TWO*/\n.hero {\n  height: 300px;\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/banner_4.png")) + ") center 0 no-repeat;\n  background-size: cover;\n  text-align: center;\n  color: #0a5490;\n  position: relative; }\n.hero div {\n  padding: 10px 15px;\n  width: 100%;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -60%);\n  transform: translate(-50%, -60%); }\n.hero h1 {\n  font-size: 64px;\n  text-shadow: 0 0 5px rgba(0, 0, 0, 0.1); }\n.hero h4 {\n  font-size: 40px;\n  text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n  font-weight: lighter; }\n/* Navigation */\n.ui-menu-color01 {\n  background-color: #AB5C57 !important; }\n.ui-menu-color02 {\n  background-color: #639E8C !important; }\n.ui-menu-color03 {\n  background-color: #EBAE55 !important; }\n.ui-menu-color04 {\n  background-color: #877696 !important; }\n.ui-menu-color05 {\n  background-color: #80795D !important; }\n.ui-menu-color06 {\n  background-color: #d9a81d !important; }\n.navbar {\n  border: 0;\n  margin: 0; }\n.navbar ul {\n  margin: 0;\n  padding: 0; }\n.navbar ul li {\n  display: block;\n  width: 20%;\n  float: left; }\n.navbar ul li a {\n  text-transform: uppercase;\n  display: block;\n  width: 100%;\n  padding: 19px 15px 18px;\n  text-align: center;\n  color: #FFF;\n  text-decoration: none;\n  -webkit-transition: all .5s ease-out;\n  transition: all .5s ease-out; }\n.navbar ul li:hover a {\n  background: rgba(0, 0, 0, 0.2); }\n.versionlink {\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.1);\n  position: absolute;\n  right: 0;\n  top: 10px;\n  color: #FFF;\n  font-size: 12px;\n  text-decoration: none;\n  z-index: 101; }\n.versionlink a {\n  padding: 2px 12px;\n  display: inline-block;\n  color: #FFF;\n  font-size: 12px;\n  text-decoration: none; }\n.versionlink a:hover,\n.versionlink a:active,\n.versionlink a:focus {\n  background: rgba(0, 0, 0, 0.2);\n  color: #FFF;\n  text-decoration: none; }\nb, strong {\n  font-weight: 500; }\n/*MEDIA*/\n@media (min-width: 768px) {\n  .navbar ul li a i {\n    display: none; } }\n@media (max-width: 767px) {\n  .navbar ul li a {\n    padding-top: 16px;\n    padding-bottom: 13px; }\n  .navbar ul li a span {\n    display: none; }\n  .navbar ul li a i {\n    font-size: 32px; } }\n@media (max-width: 500px) {\n  .header {\n    margin-bottom: 15px; }\n  .header .social {\n    margin-top: 15px; }\n  .header .col-xs-8,\n  .header .col-xs-4 {\n    width: 100%; }\n  .page {\n    padding-left: 15px;\n    padding-right: 15px; }\n  .hero h1 {\n    font-size: 48px; }\n  .hero h4 {\n    font-size: 24px; }\n  .icon-circle {\n    height: 48px;\n    width: 48px;\n    vertical-align: inherit;\n    padding-top: 8px; }\n  .icon-circle .fa {\n    font-size: 24px; }\n  .time-line {\n    margin-left: 24px;\n    padding-left: 39px; }\n  .time-line .time:before {\n    margin-left: -48px; } }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map