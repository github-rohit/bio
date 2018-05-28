webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n<footer class=\"footer-padding\">\n  <div class=\"container text-center\">\n    <p>&copy; 2016 Rohit Kumar Gautam.</p>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_1_index_1_component__ = __webpack_require__("../../../../../src/app/index-1/index-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_2_index_2_component__ = __webpack_require__("../../../../../src/app/index-2/index-2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_7__index_1_index_1_component__["a" /* Index1Component */],
                __WEBPACK_IMPORTED_MODULE_8__index_2_index_2_component__["a" /* Index2Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([{
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_6__index_index_component__["a" /* IndexComponent */]
                    }, {
                        path: 'index',
                        component: __WEBPACK_IMPORTED_MODULE_6__index_index_component__["a" /* IndexComponent */]
                    }, {
                        path: 'indexv1',
                        component: __WEBPACK_IMPORTED_MODULE_7__index_1_index_1_component__["a" /* Index1Component */]
                    }, {
                        path: 'indexv2',
                        component: __WEBPACK_IMPORTED_MODULE_8__index_2_index_2_component__["a" /* Index2Component */]
                    }])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/index-1/index-1.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"show\">\n  <span class=\"versionlink\">\n    <a href=\"/\">Version 1</a>\n  </span>\n  <div class=\"container\">\n    <div class=\"row main-section\">\n      <div class=\"col-md-9 col-sm-8\">\n        <h1 class=\"name\">{{ data.short_name }}</h1>\n        <h2 class=\"title\">{{ data.title }}</h2>\n        <p class=\"small-summary\" [innerHTML]=\"data.summary.description\"></p>\n\n      </div>\n      <div class=\"col-md-3 col-sm-4 main-section-right\">\n        <p class=\"mobile-hide\">Noida 201301 (U.P)</p>\n        <p>\n          <a href=\"//github-rohit.github.io/bio/\">nirmalrohit.com</a>\n        </p>\n        <p>\n          <a href=\"//linkedin.com/in/nirmalrohit\">\n            <i class=\"fa fa-linkedin\"></i> /nirmalrohit</a>\n        </p>\n        <p>\n          <a href=\"//twitter.com/nirmalrohit\">\n            <i class=\"fa fa-twitter\"></i> @nirmalrohit</a>\n        </p>\n      </div>\n    </div>\n    <div class=\"row mobile-show\">\n      <div class=\"col-md-12\">\n        <section>\n          <h2 class=\"section-heading\">{{ data.summary.heading }}</h2>\n          <ul>\n            <li *ngFor=\"let point of data.summary.points\" [innerHtml]=\"point\"></li>\n          </ul>\n        </section>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 col-md-push-9 col-sm-4 col-sm-push-8\">\n          <section>\n            <h2 class=\"section-heading\">{{ data.worksample.label }}</h2>\n            <ng-container *ngFor=\"let item of data.worksample.description\">\n              <h3 class=\"section-sub-heading\">{{item.short_heading || item.heading}}</h3>\n              <ng-container *ngFor=\"let project of item.project\">\n                <p>\n                  <a [href]=\"project.url\">{{ project.label }}</a>\n                </p>\n              </ng-container>\n            </ng-container>\n          </section>\n        <section>\n          <h2 class=\"section-heading\">{{ data.skills.label }}</h2>\n          <ng-container *ngFor=\"let item of data.skills.description\">\n            <h3 class=\"section-sub-heading margin-top\">{{ item.label }}</h3>\n            <ul class=\"mobile-ul\">\n              <li *ngFor=\"let skill of item.skills\">{{ skill.short_name }}</li>\n            </ul>\n          </ng-container>\n        </section>\n        <section class=\"mobile-hide\">\n            <h2 class=\"section-heading\">{{ data.education.label }}</h2>\n            <ng-container *ngFor=\"let item of data.education.description\">\n            <h3 class=\"section-sub-heading\">\n              <strong>{{ item.company }}</strong>\n            </h3>\n            <div>\n              <i>{{ item.role }}</i>\n            </div>\n            <p class=\"small text-muted\">{{ item.from }} <ng-container *ngIf=\"item.to\" >- {{ item.to }}</ng-container></p>\n            <p>{{ item.description }}, {{ item.location }}</p>\n          </ng-container>\n          </section>\n      </div>\n      <div class=\"col-md-9 col-md-pull-3 col-sm-8 col-sm-pull-4\">\n        <section class=\"mobile-hide\">\n          <h2 class=\"section-heading\">{{ data.summary.heading }}</h2>\n          <ul>\n              <li *ngFor=\"let point of data.summary.points\" [innerHtml]=\"point\"></li>\n          </ul>\n        </section>\n        <section>\n          <h2 class=\"section-heading\">{{ data.experience.label }}</h2>\n          <ng-container *ngFor=\"let item of data.experience.description\">\n              <h3 class=\"section-sub-heading margin-top\">\n                  <strong>{{ item.company }}</strong>, {{ item.location }} -\n                  <i>{{ item.role }}</i>\n                </h3>\n                <p class=\"small text-muted\">{{ item.from }} - {{ item.to }}</p>\n                <p [innerHTML]=\"item.description\"></p>\n                <ul>\n                    <li *ngFor=\"let point of item.points\" [innerHTML]=\"point\"></li>\n                </ul>\n          </ng-container>\n        </section>\n        <section class=\"mobile-show\">\n            <h2 class=\"section-heading\">{{ data.education.label }}</h2>\n            <ng-container *ngFor=\"let item of data.education.description\">\n            <h3 class=\"section-sub-heading margin-top\">\n              <strong>{{ item.company }}</strong>\n            </h3>\n            <div>\n              <i>{{ item.role }}</i>\n            </div>\n            <p class=\"small text-muted\">{{ item.from }} <ng-container *ngIf=\"item.to\" >- {{ item.to }}</ng-container></p>\n            <p>{{ item.description }}, {{ item.location }}</p>\n          </ng-container>\n          </section>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/index-1/index-1.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  color: #3f3f3f;\n  font: 14px/1.7 'Merriweather', serif;\n  font-weight: 300;\n  background: #FFF; }\n\na:hover {\n  text-decoration: none; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n  line-height: 1.7; }\n\nh1.name {\n  font-family: 'Merriweather', serif;\n  color: #000;\n  margin-top: 0;\n  margin-bottom: 0;\n  line-height: 1; }\n\nh2.title {\n  color: #666;\n  font-size: 18px;\n  font-weight: 300;\n  margin-top: 0;\n  margin-bottom: 10px; }\n\n.small-summary {\n  color: #000;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n  margin-bottom: 0; }\n\n.main-section-right p {\n  margin-bottom: 5px; }\n\nsection {\n  margin-top: 48px; }\n\n.main-section {\n  padding-top: 32px; }\n\nh2.section-heading {\n  text-transform: uppercase;\n  font-size: 14px;\n  color: #2079c7; }\n\nh2.section-heading + .margin-top {\n  margin-top: auto; }\n\nh3.section-sub-heading {\n  font-family: 'Merriweather', serif;\n  font-size: 16px;\n  font-weight: 300;\n  color: #000;\n  margin-bottom: 5px; }\n\n.margin-top {\n  margin-top: 32px; }\n\nul {\n  padding-left: 20px;\n  list-style-type: lower-greek; }\n\nul li {\n  margin-bottom: 10px; }\n\n.footer-padding {\n  padding: 32px; }\n\n.mobile-show {\n  display: none !important; }\n\n.versionlink {\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.1);\n  position: absolute;\n  right: 0;\n  top: 10px;\n  color: #FFF;\n  font-size: 12px;\n  text-decoration: none;\n  z-index: 101; }\n\n.versionlink a {\n  padding: 2px 12px;\n  display: inline-block;\n  color: #000;\n  font-size: 12px;\n  text-decoration: none; }\n\n.versionlink a:hover,\n.versionlink a:active,\n.versionlink a:focus {\n  background: rgba(0, 0, 0, 0.2);\n  color: #FFF;\n  text-decoration: none; }\n\nb, strong {\n  font-weight: 700; }\n\n@media (min-width: 768px) {\n  .container {\n    width: 100%;\n    max-width: 960px; } }\n\n@media (min-width: 1200px) {\n  .container {\n    width: 960px; } }\n\n@media (max-width: 768px) {\n  .mobile-hide {\n    display: none !important; }\n  .mobile-show {\n    display: block !important; }\n  .main-section-right p {\n    margin: 0;\n    display: inline-block;\n    margin-right: 10px; }\n  .mobile-ul {\n    padding: 0; }\n  .mobile-ul li {\n    display: inline-block;\n    margin-right: 5px;\n    margin-bottom: 2px; }\n  .main-section-right p:not(:last-child):after,\n  .mobile-ul li:not(:last-child):after {\n    content: \",\"; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index-1/index-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Index1Component = /** @class */ (function () {
    function Index1Component(dataService) {
        this.dataService = dataService;
        this.show = false;
        this.data = {};
    }
    Index1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (res) {
            _this.data = res;
            _this.show = true;
        });
    };
    Index1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index-1',
            template: __webpack_require__("../../../../../src/app/index-1/index-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/index-1/index-1.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], Index1Component);
    return Index1Component;
}());



/***/ }),

/***/ "../../../../../src/app/index-2/index-2.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  index-2 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/index-2/index-2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index-2/index-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Index2Component = /** @class */ (function () {
    function Index2Component() {
    }
    Index2Component.prototype.ngOnInit = function () {
    };
    Index2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index-2',
            template: __webpack_require__("../../../../../src/app/index-2/index-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/index-2/index-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Index2Component);
    return Index2Component;
}());



/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"show\">\n<section id=\"rs-hero\" class=\"hero clearfix\" [ngStyle]=\"{'minHeight' : minHeight}\">\n  <span class=\"versionlink\"><a href=\"/indexv1\">Version 2</a></span>\n  <div>\n    <h1>Hi i am {{ data.short_name }}</h1>\n    <h4>{{ data.title }}</h4>\n  </div>\n</section>\n<header id=\"rs-header\" class=\"header-fix\" *ngIf=\"data.title\">\n  <nav class=\"navbar\">\n    <ul>\n      <li class=\"ui-menu-color02\"><a (click)=\"goToSection('#summary')\" href=\"javascript:void(0)\"><i class=\"fa fa-file-text\"></i><span>{{ data.summary.heading }}</span></a></li>\n      <li class=\"ui-menu-color05\"><a (click)=\"goToSection('#skills')\" href=\"javascript:void(0)\"><i class=\"fa fa-magic\"></i><span>{{ data.skills.label }}</span></a></li>\n      <li class=\"ui-menu-color03\"><a (click)=\"goToSection('#worksample')\" href=\"javascript:void(0)\"><i class=\"fa fa-cubes\"></i><span>{{ data.worksample.label }}</span></a></li>\n      <li class=\"ui-menu-color04\"><a (click)=\"goToSection('#experience')\" href=\"javascript:void(0)\"><i class=\"fa fa-briefcase\"></i><span>{{ data.experience.label }}</span></a></li>\n      <li class=\"ui-menu-color01\"><a (click)=\"goToSection('#education')\" href=\"javascript:void(0)\"><i class=\"fa fa-graduation-cap\"></i><span>{{ data.education.label }}</span></a></li>\n    </ul>\n  </nav>\n</header>\n<section *ngIf=\"data.summary\" id=\"summary\" data-min-height class=\"section-color ui-menu-color02\" [ngStyle]=\"{'minHeight' : minHeight}\">\n  <div class=\"container\">\n    <h2 class=\"section-h2\">{{ data.summary.heading }}</h2>\n    <p class=\"font-montserrat-bold\" [innerHTML]=\"data.summary.description\"></p>\n    <ul>\n      <li *ngFor=\"let point of data.summary.points\" [innerHtml]=\"point\"></li>\n    </ul>\n  </div>\n</section>\n<section *ngIf=\"data.skills\" id=\"skills\" data-min-height class=\"section-color ui-menu-color05\" [ngStyle]=\"{'minHeight' : minHeight}\">\n  <div class=\"container\">\n    <h2 class=\"section-h2\"><span class=\"icon-circle\"><i class=\"fa fa-magic\"></i></span> {{ data.skills.label }}</h2>\n    <div class=\"time-line\">\n      <div class=\"time\" *ngFor=\"let item of data.skills.description\">\n        <p><strong>{{ item.label }}</strong></p>\n        <ul class=\"tech\">\n          <li class=\"item\" *ngFor=\"let skill of item.skills\"><span>{{ skill.name }}</span><br>{{ skill.short_name }}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<section *ngIf=\"data.worksample\" id=\"worksample\" data-min-height class=\"section-color ui-menu-color03\" [ngStyle]=\"{'minHeight' : minHeight}\">\n  <div class=\"container\">\n  <h2 class=\"section-h2\"><span class=\"icon-circle\"><i class=\"fa  fa-cubes\"></i></span> {{ data.worksample.label }}</h2>\n  <div class=\"time-line work-sample\">\n    <div class=\"time\" *ngFor=\"let item of data.worksample.description\">\n      <p><strong>{{ item.heading }}</strong></p>\n      <ng-container *ngFor=\"let project of item.project\">\n        <p><a [href]=\"project.url\"><span class=\"fa-stack\">\n        <i class=\"fa fa-circle fa-stack-2x\"></i>\n        <i class=\"fa {{ project.icon }} fa-stack-1x fa-inverse\"></i>\n      </span> <span class=\"txt\" style=\"word-wrap: break-word\">{{ project.label }}</span></a></p>\n      </ng-container>\n    </div>\n  </div>\n  </div>\n</section>\n<section *ngIf=\"data.experience\" id=\"experience\" data-min-height class=\"section-color ui-menu-color04 \" [ngStyle]=\"{'minHeight' : minHeight}\">\n  <div class=\"container\">\n    <h2 class=\"section-h2\"><span class=\"icon-circle\"><i class=\"fa fa-briefcase\"></i></span>{{ data.experience.label }}</h2>\n    <div class=\"time-line\">\n      <div class=\"time\" *ngFor=\"let item of data.experience.description\">\n        <p class=\"date\">{{ item.from }} - {{ item.to }} <strong>{{ item.company }}</strong>,\t{{ item.location }}</p>\n        <h4 class=\"role\"><strong>Role:</strong> {{ item.role }}</h4>\n        <p [innerHTML]=\"item.description\"></p>\n        <ul>\n          <li *ngFor=\"let point of item.points\" [innerHTML]=\"point\"></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<section *ngIf=\"data.education\" id=\"education\" data-min-height class=\"section-color ui-menu-color01\" [ngStyle]=\"{'minHeight' : minHeight}\">\n  <div class=\"container\">\n    <h2 class=\"section-h2\"><span class=\"icon-circle\"><i class=\"fa fa-graduation-cap\"></i></span>{{ data.education.label }}</h2>\n    <div class=\"time-line\">\n      <div class=\"time\" *ngFor=\"let item of data.education.description\">\n        <p>{{ item.from }} <ng-container *ngIf=\"item.to\" >- {{ item.to }}</ng-container><strong> {{ item.company }}</strong></p>\n        <h4 class=\"role\" *ngIf=\"item.role\">{{ item.role }}</h4>\n        <p>{{ item.description }}<br> {{ item.location }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/index/index.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = /** @class */ (function () {
    function IndexComponent(dataService) {
        this.dataService = dataService;
        this.show = false;
        this.data = {};
        this.minHeight = (window.innerHeight - 64) + 'px';
    }
    IndexComponent.prototype.goToSection = function (id) {
        var section = document.querySelector(id);
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': section.offsetTop
        });
    };
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (res) {
            _this.data = res;
            _this.show = true;
        });
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_data_service__["a" /* DataService */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = 'https://about-my-bio.firebaseio.com/bio.json';
    }
    DataService.prototype.getData = function () {
        return this.http.get(this.url);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map