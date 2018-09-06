webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".mainDiv{\r\n  max-width: 1500px;\r\n  margin: auto;\r\n  padding-top: 2rem !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"jumbotron mainDiv\">\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__education_education_component__ = __webpack_require__("./src/app/education/education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__experience_experience_component__ = __webpack_require__("./src/app/experience/experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resume_resume_component__ = __webpack_require__("./src/app/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'Education', component: __WEBPACK_IMPORTED_MODULE_5__education_education_component__["a" /* EducationComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] },
    { path: 'Experience', component: __WEBPACK_IMPORTED_MODULE_6__experience_experience_component__["a" /* ExperienceComponent */] },
    { path: 'Resume', component: __WEBPACK_IMPORTED_MODULE_7__resume_resume_component__["a" /* ResumeComponent */] },
    { path: 'Contact', component: __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__education_education_component__["a" /* EducationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__experience_experience_component__["a" /* ExperienceComponent */],
                __WEBPACK_IMPORTED_MODULE_7__resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  Get In Touch\r\n</h3>\r\n<p>\r\n  In case of any inquiries, please send me an email with your name and message. I'll be sure to contact you as soon as possible.\r\n</p>\r\n<a href=\"mailto:jorgeomf@outlook.com\">jorgeomf@outlook.com</a>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/education/education.component.css":
/***/ (function(module, exports) {

module.exports = "p{\r\n  font-size: medium;\r\n}\r\n"

/***/ }),

/***/ "./src/app/education/education.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\r\n   <a href=\"http://ut.suagm.edu\">Universidad Del Turabo</a>\r\n</h2>\r\n<br/>\r\n<h3>\r\nAbout Turabo\r\n</h3>\r\n<p >\r\n The University of Turabo (UT), part of the Ana G. Mendez University System (SUAGM), is a professionally oriented institution that offers academic studies from technical certificates to doctorates degrees. Its academic offerings are organized in seven departments: Engineering, Science and Technology, Health Sciences, Education, Business and Administration, Social Sciences, and the International School of Design.\r\n</p>\r\n<p>\r\n  Universidad del Turabo is acredited for engineering which is one of the reasons\r\n  I chose to study here. The university is acredited by the Accreditation Board for Engineering and Technology\r\n (Engineering Accreditation Commission (EAC)) and these are the accreditated programs in Engineering:\r\n</p>\r\n<ul>\r\n\r\n</ul>\r\n <li>Bachelors in Mechanical Engineering (since 2003)</li>\r\n <li>Bachelors in Electrical Engineering (since 2007)</li>\r\n <li>Bachelors in Industrial Engineering (since 2007)</li>\r\n <li><b>Bachelors in Computer Engineering (since 2009)</b></li>\r\n <li>Bachelors in Civil Engineering (since 2015)</li>\r\n\r\n<br />\r\n<h3>\r\n  My Degree\r\n</h3>\r\n<p>\r\n  At universidad del Turabo I pursued a bachelors degree in Computer Engineering.\r\n  I specialized myself in software design with some electronic design, mainly digital.\r\n  I took courses in inovation and software engineering apart form the required courses.\r\n  In my time here I participated in various extra curricular activities such as\r\n  being part of some student Engineering organizations.Some of these include:\r\n</p>\r\n<ul>\r\n  <li>\r\n    IEE: Treasurer\r\n  </li>\r\n  <li>\r\n    ACM: Vice-President\r\n  </li>\r\n</ul>\r\n\r\n<p>\r\n  While at Universidad Del Turabo I also received a scholarship for the Honor association.\r\n  This association appart from providing me with the resources to pay for classes and books\r\n  also provided me with may workshops, oportunities to visit museums, and be able to participate\r\n  in activities to help the comunity.\r\n</p>\r\n<p>\r\nWhile studying here and shortly after graduating I was able to participate in various\r\n<a href=\"/Experience\">Internships</a> which helped me gain the experience I have today.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-education',
            template: __webpack_require__("./src/app/education/education.component.html"),
            styles: [__webpack_require__("./src/app/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md\">\r\n    <h2 id=\"job\">\r\n      Job Experience\r\n    </h2>\r\n  </div>\r\n</div>\r\n<br />\r\n<div class=\"row\">\r\n  <div class=\"col-md\">\r\n    <h4>\r\n      DXC Technology\r\n    </h4>\r\n    May/2017 - Present\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-2\">\r\n    <img src=\"/assets/img/DXC.png\" class=\"img-fluid\" />\r\n  </div>\r\n  <div class=\"col-md-10\">\r\n    My job is to work on custom applications, primarily asp .Net. I am tasked with developing applications\r\n    to fit the client needs, from web applications to mobile and desktop apps. Implementing databases such\r\n    as MySQL and oracle. I have also worked projects using Team foundation server and Git hosted in bitbucket\r\n    with integration with Jira\r\n  </div>\r\n</div>\r\n<br />\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md\">\r\n    <h4>\r\n      Infotech Aerospace\r\n    </h4>\r\n    June/2016 - July/2016\r\n  </div>\r\n</div>\r\n<br />\r\n<div class=\"row\">\r\n  <div class=\"col-md-2\">\r\n    <img src=\"/assets/img/infotech.png\" class=\"img-fluid\" />\r\n  </div>\r\n  <div class=\"col-md-10\">\r\n    My task was to test different systems and hardware to find flaws and fix them.\r\n     If a process needed to be improved, we would work on that as well. We\r\n     developed new processes or software to optimize work as well.\r\n  </div>\r\n</div>\r\n<br />\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md\">\r\n    <h2 id=\"intern\">\r\n      Internships\r\n    </h2>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md\">\r\n    <h4>\r\n      NASA Glenn Research Center (GRC)\r\n    </h4>\r\n    January/2017 - April/2017\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-2\">\r\n    <img src=\"/assets/img/Nasa-Logo.png\" class=\"img-fluid\" />\r\n  </div>\r\n  <div class=\"col-md-10\">\r\n    <p>\r\n      The main task for this internship was to develop a voting web application with angular JS for\r\n      human resources to nominate employees for awards and then rank and vote for the to win the award.\r\n      We designed a Mongo data base of users and awards. Another project we worked on in the same stack\r\n      was a travel tracking system for NASA which would log access request to accounts and compare that\r\n      to travel requests.\r\n    </p>\r\n  </div>\r\n  <br />\r\n  <div class=\"row\">\r\n    <div class=\"col-md\">\r\n      <h4>\r\n        NASA Glenn Research Center (GRC)\r\n      </h4>\r\n      August/2016 - December/2016\r\n    </div>\r\n  </div>\r\n  <br />\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n      <img src=\"/assets/img/Nasa-Logo.png\" class=\"img-fluid\" />\r\n    </div>\r\n    <div class=\"col-md-10\">\r\n      <p>\r\n        My task in this internship was to assist the software assurance team to perform software audits,\r\n        revise software assurance practices and develop software to aid software assurance engineer. In\r\n        the internship assisted the development for a plugin for the JIRA platform to track the software\r\n        assurance project.\r\n      </p>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md\">\r\n    <h4>\r\n      University of New Hampshire (UNH)\r\n    </h4>\r\n    June/2015 - July/2015\r\n  </div>\r\n</div>\r\n<br />\r\n<div class=\"row\">\r\n  <div class=\"col-md-2\">\r\n    <img src=\"/assets/img/UNH.png\" class=\"img-fluid imagePadding\" />\r\n  </div>\r\n  <div class=\"col-md-10\">\r\n    <p>\r\n      Our tasks as interns was to create scripts to analyze various types of data given to us. We would\r\n      develop scripts (mostly in python) to analyze, plot and manipulate the data in various formats such\r\n      as CDF, DAT and other formats. At the end of the internship I presented a poster with the results\r\n      of the analysis.\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-experience',
            template: __webpack_require__("./src/app/experience/experience.component.html"),
            styles: [__webpack_require__("./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row\">\r\n    <div  class=\"col-md\">\r\n      <h2>\r\n        Computer Engineer.\r\n      </h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" >\r\n    <div class=\"col-md-3\">\r\n       <img src=\"\\assets\\img\\Me.jpg\" class=\"rounded-circle img-fluid\" />\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n      <p>\r\n        Passionate developer looking to work with modern frameworks and tecnologies to be able\r\n        to expand my knowlege and gain experience. Fully bilingual (Spanish-English). Fast learner and excellent problem solver.\r\n        Experience in Software Engineering with projects that include application development\r\n        and full stack web development. I've worked with various databases such as Oracle, MySQL and MongoDb.\r\n        I have experience in working with different operating system and platforms namely Windows, Mac and Linux.\r\n      </p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.hero = 'Jorge';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>\r\n  Resume\r\n</h4>\r\n<p>\r\n  Coming soon to a website near you.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resume',
            template: __webpack_require__("./src/app/resume/resume.component.html"),
            styles: [__webpack_require__("./src/app/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map