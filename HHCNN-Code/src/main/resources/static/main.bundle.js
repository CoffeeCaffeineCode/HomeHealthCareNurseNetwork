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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registrations_registration_registration_component__ = __webpack_require__("./src/app/registrations/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registrations_nurse_registration_nurse_registration_component__ = __webpack_require__("./src/app/registrations/nurse-registration/nurse-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registrations_facility_registration_facility_registration_component__ = __webpack_require__("./src/app/registrations/facility-registration/facility-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboards_facility_dashboard_facility_dashboard_component__ = __webpack_require__("./src/app/dashboards/facility-dashboard/facility-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboards_nurse_dashboard_nurse_dashboard_component__ = __webpack_require__("./src/app/dashboards/nurse-dashboard/nurse-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboards_nurse_profile_nurse_profile_component__ = __webpack_require__("./src/app/dashboards/nurse-profile/nurse-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboards_facility_profile_facility_profile_component__ = __webpack_require__("./src/app/dashboards/facility-profile/facility-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboards_nurse_assignment_log_nurse_assignment_log_component__ = __webpack_require__("./src/app/dashboards/nurse-assignment-log/nurse-assignment-log.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_3__registrations_registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'nurseRegistration', component: __WEBPACK_IMPORTED_MODULE_4__registrations_nurse_registration_nurse_registration_component__["a" /* NurseRegistrationComponent */] },
    { path: 'facilityRegistration', component: __WEBPACK_IMPORTED_MODULE_5__registrations_facility_registration_facility_registration_component__["a" /* FacilityRegistrationComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_6__user_user_component__["a" /* UserComponent */] },
    { path: 'facilityDashboard', component: __WEBPACK_IMPORTED_MODULE_7__dashboards_facility_dashboard_facility_dashboard_component__["a" /* FacilityDashboardComponent */] },
    { path: 'nurseDashboard', component: __WEBPACK_IMPORTED_MODULE_8__dashboards_nurse_dashboard_nurse_dashboard_component__["a" /* NurseDashboardComponent */] },
    { path: 'nurseProfile', component: __WEBPACK_IMPORTED_MODULE_9__dashboards_nurse_profile_nurse_profile_component__["a" /* NurseProfileComponent */] },
    { path: 'facilityProfile', component: __WEBPACK_IMPORTED_MODULE_10__dashboards_facility_profile_facility_profile_component__["a" /* FacilityProfileComponent */] },
    { path: 'nurseAssignmentLog', component: __WEBPACK_IMPORTED_MODULE_11__dashboards_nurse_assignment_log_nurse_assignment_log_component__["a" /* NurseAssignmentLogComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<!--\n  <app-home></app-home>\n-->\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registrations_registration_registration_component__ = __webpack_require__("./src/app/registrations/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__registrations_nurse_registration_nurse_registration_component__ = __webpack_require__("./src/app/registrations/nurse-registration/nurse-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__registrations_facility_registration_facility_registration_component__ = __webpack_require__("./src/app/registrations/facility-registration/facility-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboards_facility_dashboard_facility_dashboard_component__ = __webpack_require__("./src/app/dashboards/facility-dashboard/facility-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboards_nurse_dashboard_nurse_dashboard_component__ = __webpack_require__("./src/app/dashboards/nurse-dashboard/nurse-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboards_nurse_profile_nurse_profile_component__ = __webpack_require__("./src/app/dashboards/nurse-profile/nurse-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboards_facility_profile_facility_profile_component__ = __webpack_require__("./src/app/dashboards/facility-profile/facility-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboards_nurse_assignment_log_nurse_assignment_log_component__ = __webpack_require__("./src/app/dashboards/nurse-assignment-log/nurse-assignment-log.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__registrations_registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__registrations_nurse_registration_nurse_registration_component__["a" /* NurseRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__registrations_facility_registration_facility_registration_component__["a" /* FacilityRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboards_facility_dashboard_facility_dashboard_component__["a" /* FacilityDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dashboards_nurse_dashboard_nurse_dashboard_component__["a" /* NurseDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dashboards_nurse_profile_nurse_profile_component__["a" /* NurseProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboards_facility_profile_facility_profile_component__["a" /* FacilityProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__dashboards_nurse_assignment_log_nurse_assignment_log_component__["a" /* NurseAssignmentLogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboards/facility-dashboard/facility-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".sidebar {\r\n\r\n  height: 100vh;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboards/facility-dashboard/facility-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= \"row bg-light\">\n  <div class= \"col-2\">\n    <div class=\"collapse navbar-collapse navbar-dark bg-dark \" >\n      <ul class=\"navbar-nav navbar-sidenav sidebar\" id=\"exampleAccordion\">\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Dashboard\">\n          <a class=\"nav-link\" routerLink=\"/facilityDashboard\">\n            <i class=\"fa fa-fw fa-dashboard  fa-2x\"></i>\n            <span class=\"nav-link-text lead\">Dashboard</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Profile\">\n          <a class=\"nav-link\" routerLink=\"/facilityProfile\">\n            <i class=\"fa fa-fw fa-user-md fa-2x\"></i>\n            <span class=\"nav-link-text lead\">Profile</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Assignment Log\">\n          <a class=\"nav-link\" routerLink=\"/nurseAssignmentLog\">\n            <i class=\"fa fa-fw fa-th-list  fa-2x\"></i>\n            <span class=\"nav-link-text lead\">Assignment Log</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-9\">\n    <div class= \"row  mb-3 mt-3\">\n      <div  class=\"col-8\" >\n        <span></span>\n        <section class=\"card border-info \" style=\"height:50vh;\" >\n          <div class=\"card-header bg-info\"><h4><strong>Available Assignments</strong></h4></div>\n          <div class=\"card-body\">Content</div>\n        </section>\n        <section class=\"card border-success\">\n          <div class=\"card-header bg-success \"><h4><strong>Add an Assignment</strong></h4></div>\t\t\t  \t\t\t\t\t   \t \t\t\t\t\t  <div class=\"card-body \">\n          <form role=\"form\"  action=\"addAssignment\" method=\"post\">\n            <div class=\"form-group\">\n              <label for=\"assignmenttype\">Assignment Type:</label>\n              <select name=\"assignmenttype\" ng-model= \"assignmenttype\">\n                <option value=\"\"></option>\n                <option value=\"\"></option>\n                <option value=\"\"></option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"nursetype\">Nursing Degree Type:</label>\n              <select name=\"nursetype\" ng-model= \"nursetype\">\n                <option value=\"lpn/lvn\">LPN/LVN</option>\n                <option value=\"rn\">RN</option>\n                <option value=\"msn\">MSN</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"patientId\">Patient's Name:</label>\n              <select name=\"patientId\" ng-model= \"patientId\">\n                <option value=\"\"></option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"date\">Date:</label>\n              <input type=\"date\" pattern=\"MM-dd-yyyy\" class=\"form-control\" id=\"date\" name=\"date\"/>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"time\">Time:</label>\n              <input type=\"text\" class=\"form-control\" id=\"time\" name=\"time\"/>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary btn-xl col-12\"><strong>Add</strong></button>\n          </form>\n        </div>\n        </section>\n      </div>\n      <div class=\"col-4\">\n        <section class=\"card border-success\" >\n          <!--  style=\"height:50vh;\"-->\n          <div class=\"card-header bg-success \"><h4><strong>Add a Patient</strong></h4></div>\t\t\t  \t\t\t\t\t   \t \t\t\t\t\t  <div class=\"card-body \">\n          <form role=\"form\"  action=\"patientRegistration\" method=\"post\">\n            <div class=\"form-group\">\n              <label for=\"firstname\">FirstName:</label>\n              <input type=\"text\" class=\"form-control\" id=\"firstname\" name=\"firstname\"/>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"lastname\">LastName:</label>\n              <input type=\"text\" class=\"form-control\" id=\"lastname\" name=\"lastname\"/>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"dateofbirth\">DateOfBirth:</label>\n              <input type=\"date\" pattern=\"MM-dd-yyyy\" class=\"form-control\" id=\"dateofbirth\" name=\"dateofbirth\"/>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"gender\">Gender:</label> <br>\n              <div class=\"tab\">\n                <input type=\"radio\" name=\"gender\" value=\"male\" checked> Male<br>\n                <input type=\"radio\" name=\"gender\" value=\"female\"> Female<br>\n                <input type=\"radio\" name=\"gender\" value=\"other\"> Other<br><br>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"address_1\">address_1:</label>\n              <input type=\"text\" class=\"form-control\" id=\"address_1\" name=\"address_1\"/>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"address_2\">address_2:</label>\n              <input type=\"text\" class=\"form-control\" id=\"address_2\" name=\"address_2\"/>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"city\">city:</label>\n              <input type=\"text\" class=\"form-control\" id=\"city\" name=\"city\"/>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"state\">state:</label>\n              <input type=\"text\" class=\"form-control\" id=\"state\" name=\"state\"/>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"zipcode\">ZipCode:</label>\n              <input type=\"text\" class=\"form-control\" id=\"zipcode\" name=\"zipcode\"/>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"tel\">Phone Number:</label>\n              <input type=\"tel\" class=\"form-control\" id=\"tel\" name=\"tel\"/>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"preferredGender\">Preferred Gender:</label> <br>\n              <div class=\"tab\">\n                <input type=\"radio\" name=\"preferredGender\" value=\"male\" checked> Male<br>\n                <input type=\"radio\" name=\"preferredGender\" value=\"female\"> Female<br>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"preferrednurse\">Preferred Nurse:</label>\n              <select name=\"preferredNurseId\" ng-model= \"preferrednurse\">\n                <option value=\"\"></option>\n              </select>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary btn-xl col-12\"><strong>Add</strong></button>\n          </form>\n        </div>\n        </section>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboards/facility-dashboard/facility-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacilityDashboardComponent; });
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

var FacilityDashboardComponent = /** @class */ (function () {
    function FacilityDashboardComponent() {
    }
    FacilityDashboardComponent.prototype.ngOnInit = function () {
    };
    FacilityDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-facility-dashboard',
            template: __webpack_require__("./src/app/dashboards/facility-dashboard/facility-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboards/facility-dashboard/facility-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FacilityDashboardComponent);
    return FacilityDashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/facility-profile/facility-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboards/facility-profile/facility-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= \"row bg-light\">\n\n  <div class= \"col-2\">\n    <div class=\"collapse navbar-collapse navbar-dark bg-dark \" >\n      <ul class=\"navbar-nav navbar-sidenav sidebar\" id=\"exampleAccordion\">\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Dashboard\">\n          <a class=\"nav-link\" routerLink=\"/facilityDashboard\">\n            <i class=\"fa fa-fw fa-dashboard  fa-2x\"></i>\n            <span class=\"nav-link-text lead\">Dashboard</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Profile\">\n          <a class=\"nav-link\" routerLink=\"/facilityProfile\">\n            <i class=\"fa fa-fw fa-user-md fa-2x\"></i>\n            <span class=\"nav-link-text lead\">Profile</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Assignment Log\">\n          <a class=\"nav-link\" routerLink=\"/nurseAssignmentLog\">\n            <i class=\"fa fa-fw fa-th-list  fa-2x\"></i>\n            <span class=\"nav-link-text lead\">Assignment Log</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class= \"col-5 mt-2\">\n    <form role=\"form \"  ng-submit=\"\" method=\"\">\n      <div class=\"form-group\">\n        <label for=\"facilityname\">FacilityName:</label>\n        <input type=\"text\" class=\"form-control\" id=\"facilityname\" name=\"facilityname\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website\">Website:</label>\n        <input type=\"text\" class=\"form-control\" id=\"website\" name=\"website\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"firstName\">firstName:</label>\n        <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"lastName\">lastName:</label>\n        <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"tel\">tel:</label>\n        <input type=\"text\" class=\"form-control\" id=\"tel\" name=\"tel\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">email:</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"username\">Username:</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" required/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">password:</label>\n        <input type=\"text\" class=\"form-control\" id=\"password\" name=\"password\" required/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"address_1\">address_1:</label>\n        <input type=\"text\" class=\"form-control\" id=\"address_1\" name=\"address_1\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"address_2\">address_2:</label>\n        <input type=\"text\" class=\"form-control\" id=\"address_2\" name=\"address_2\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"city\">city:</label>\n        <input type=\"text\" class=\"form-control\" id=\"city\" name=\"city\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"state\">state:</label>\n        <input type=\"text\" class=\"form-control\" id=\"state\" name=\"state\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"zipcode\">zipcode:</label>\n        <input type=\"text\" class=\"form-control\" id=\"zipcode\" name=\"zipcode\"/>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary btn-xl col-12\"><strong>Save</strong></button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboards/facility-profile/facility-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacilityProfileComponent; });
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

var FacilityProfileComponent = /** @class */ (function () {
    function FacilityProfileComponent() {
    }
    FacilityProfileComponent.prototype.ngOnInit = function () {
    };
    FacilityProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-facility-profile',
            template: __webpack_require__("./src/app/dashboards/facility-profile/facility-profile.component.html"),
            styles: [__webpack_require__("./src/app/dashboards/facility-profile/facility-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FacilityProfileComponent);
    return FacilityProfileComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/nurse-assignment-log/nurse-assignment-log.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboards/nurse-assignment-log/nurse-assignment-log.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= \"row bg-light\">\n  <div class= \"col-2\">\n    <div class=\"collapse navbar-collapse navbar-dark bg-dark \" >\n      <ul class=\"navbar-nav navbar-sidenav sidebar\" id=\"exampleAccordion\">\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Dashboard\">\n          <a class=\"nav-link\" routerLink=\"/nurseDashboard\">\n            <i class=\"fa fa-fw fa-dashboard  fa-2x\"></i>\n            <span class=\"nav-link-text lead\">Dashboard</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Profile\">\n          <a class=\"nav-link\" routerLink=\"/nurseProfile\">\n            <i class=\"fa fa-fw fa-user-md fa-2x\"></i>\n            <span class=\"nav-link-text lead\">Profile</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Assignment Log\">\n          <a class=\"nav-link\" routerLink=\"/nurseAssignmentLog\">\n            <i class=\"fa fa-fw fa-th-list  fa-2x\"></i>\n            <span class=\"nav-link-text lead\">Assignment Log</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Available\">\n          <section class=\"card\" style=\"height:5vh;\">\n            <div class=\"card-header lead available-bg\" id=\"bgdiv\"><input type=\"checkbox\"  onchange=\"Show(this)\" ng-model=\"available\" name=\"available\" value=\"Available\">I'm Available</div>\n          </section>\n          <input type=\"checkbox\"  ng-disabled= \"!available\">TEST\n        </li>\n\n      </ul>\n    </div>\n\n  </div>\n  <div class=\"col-9\">\n    <section class=\"card border-secondary\" style=\"height:100vh;\">\n      <div class=\"card-header bg-secondary\"><h4><strong>Assignment Log</strong></h4></div>\n      <div class=\"card-body\">Content</div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboards/nurse-assignment-log/nurse-assignment-log.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NurseAssignmentLogComponent; });
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

var NurseAssignmentLogComponent = /** @class */ (function () {
    function NurseAssignmentLogComponent() {
    }
    NurseAssignmentLogComponent.prototype.ngOnInit = function () {
    };
    NurseAssignmentLogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nurse-assignment-log',
            template: __webpack_require__("./src/app/dashboards/nurse-assignment-log/nurse-assignment-log.component.html"),
            styles: [__webpack_require__("./src/app/dashboards/nurse-assignment-log/nurse-assignment-log.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NurseAssignmentLogComponent);
    return NurseAssignmentLogComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/nurse-dashboard/nurse-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboards/nurse-dashboard/nurse-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= \"row bg-light\"  ng-controller=\"nurseDashboard\">\n\n  <div class= \"col-2\">\n    <div class=\"collapse navbar-collapse navbar-dark bg-dark \" >\n      <ul class=\"navbar-nav navbar-sidenav sidebar\" id=\"exampleAccordion\">\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Dashboard\">\n          <a class=\"nav-link\" routerLink=\"/nurseDashboard\">\n            <i class=\"fa fa-fw fa-dashboard  fa-2x\"></i>\n            <span class=\"nav-link-text lead\">Dashboard</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Profile\">\n          <a class=\"nav-link\" routerLink=\"/nurseProfile\">\n            <i class=\"fa fa-fw fa-user-md fa-2x\"></i>\n            <span class=\"nav-link-text lead\">Profile</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Assignment Log\">\n          <a class=\"nav-link\" routerLink=\"/nurseAssignmentLog\">\n            <i class=\"fa fa-fw fa-th-list  fa-2x\"></i>\n            <span class=\"nav-link-text lead\">Assignment Log</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Available\">\n          <section class=\"card\" style=\"height:5vh;\">\n            <div class=\"card-header lead available-bg\" id=\"bgdiv\"><input type=\"checkbox\"  onchange=\"Show(this)\" ng-model=\"available\" name=\"available\" value=\"Available\">I'm Available</div>\n\n          </section>\n          <input type=\"checkbox\"  ng-disabled= \"!available\">TEST\n        </li>\n\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-9\">\n    <div class= \"row  mb-3 mt-3\">\n      <div  class=\"col-8\" >\n        <span></span>\n        <section class=\"card border-info \" style=\"height:100vh;\" >\n          <div class=\"card-header bg-info\"><h4><strong>Available Assignments</strong></h4></div>\n          <div class=\"card-body\">Content</div>\n        </section>\n      </div>\n      <div class=\"col-4\">\n        <section class=\"card border-success\" style=\"height:100vh;\">\n          <div class=\"card-header bg-success \"><h4><strong>Upcoming Assignments</strong></h4></div>\n          <div class=\"card-body \">Content</div>\n        </section>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboards/nurse-dashboard/nurse-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NurseDashboardComponent; });
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

var NurseDashboardComponent = /** @class */ (function () {
    function NurseDashboardComponent() {
    }
    NurseDashboardComponent.prototype.ngOnInit = function () {
    };
    NurseDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nurse-dashboard',
            template: __webpack_require__("./src/app/dashboards/nurse-dashboard/nurse-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboards/nurse-dashboard/nurse-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NurseDashboardComponent);
    return NurseDashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/nurse-profile/nurse-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboards/nurse-profile/nurse-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= \"row bg-light\">\n\n  <div class= \"col-2\">\n    <div class=\"collapse navbar-collapse navbar-dark bg-dark \" >\n      <ul class=\"navbar-nav navbar-sidenav sidebar\" id=\"exampleAccordion\">\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Dashboard\">\n          <a class=\"nav-link\" routerLink=\"/nurseDashboard\">\n            <i class=\"fa fa-fw fa-dashboard  fa-2x\"></i>\n            <span class=\"nav-link-text lead\">Dashboard</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Profile\">\n          <a class=\"nav-link\" routerLink=\"/nurseProfile\">\n            <i class=\"fa fa-fw fa-user-md fa-2x\"></i>\n            <span class=\"nav-link-text lead\">Profile</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Assignment Log\">\n          <a class=\"nav-link\" routerLink=\"/nurseAssignmentLog\">\n            <i class=\"fa fa-fw fa-th-list  fa-2x\"></i>\n            <span class=\"nav-link-text lead\">Assignment Log</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Available\">\n          <section class=\"card\" style=\"height:5vh;\">\n            <div class=\"card-header lead available-bg\" id=\"bgdiv\"><input type=\"checkbox\"  onchange=\"Show(this)\" ng-model=\"available\" name=\"available\" value=\"Available\">I'm Available</div>\n\n          </section>\n\n        </li>\n\n      </ul>\n    </div>\n  </div>\n  <div class= \"col-5 mt-2\">\n    <form role=\"form \"  ng-submit=\"nurseRegistration\" method=\"post\">\n      <div class=\"form-group\">\n        <label for=\"firstname\">FirstName:</label>\n        <input type=\"text\" class=\"form-control\" id=\"firstname\" name=\"firstname\" value =\"test\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lastname\">LastName:</label>\n        <input type=\"text\" class=\"form-control\" id=\"lastname\" name=\"lastname\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"dateofbirth\">DateOfBirth:</label>\n        <input type=\"date\" pattern=\"MM-dd-yyyy\" class=\"form-control\" id=\"dateofbirth\" name=\"dateofbirth\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"gender\">Gender:</label> <br>\n        <div class=\"tab\">\n          <input type=\"radio\" name=\"gender\" value=\"male\" checked> Male<br>\n          <input type=\"radio\" name=\"gender\" value=\"female\"> Female<br>\n          <input type=\"radio\" name=\"gender\" value=\"other\"> Other<br><br>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"zipcode\">ZipCode:</label>\n        <input type=\"text\" class=\"form-control\" id=\"zipcode\" name=\"zipcode\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"tel\">Phone Number:</label>\n        <input type=\"tel\" class=\"form-control\" id=\"tel\" name=\"tel\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"licensenumber\">License Number:</label>\n        <input type=\"text\" class=\"form-control\" id=\"licensenumber\" name=\"licensenumber\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"nursingdegreetype\">Nursing Degree Type:</label>\n        <select name=\"nursingdegreetype\" ng-model= \"nursingdegreetype\">\n          <option value=\"lpn/lvn\">LPN/LVN</option>\n          <option value=\"rn\">RN</option>\n          <option value=\"msn\">MSN</option>\n        </select>\n      </div>\n      <hr>\n      <div class=\"form-group\">\n        <label for=\"email\">Email:</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" required/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"username\">Username:</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password:</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" ng-model=\"controller.credentials.password\" required/>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboards/nurse-profile/nurse-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NurseProfileComponent; });
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

var NurseProfileComponent = /** @class */ (function () {
    function NurseProfileComponent() {
    }
    NurseProfileComponent.prototype.ngOnInit = function () {
    };
    NurseProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nurse-profile',
            template: __webpack_require__("./src/app/dashboards/nurse-profile/nurse-profile.component.html"),
            styles: [__webpack_require__("./src/app/dashboards/nurse-profile/nurse-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NurseProfileComponent);
    return NurseProfileComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" row bg-info\">\n  <div class=\" row justify-content-center \"  style=\"height:100vh; background-image:url('img/home-bg.jpeg'); background-size: cover; \">\n    <section class= \" lead col-4 align-self-center display-4 \">\n      <font size=\"25\" class=\"font-weight-bold text-grey mb-6\">Home Health Care Nurse Tracker </font>\n      <p>\n        Offers services to accelerate the process of substituting nurses in\n        home health care agencies.<span class=\"font-weight-bold\"><a routerLink=\"/registration\">Join Us Today!</a></span>\n      </p>\n    </section>\n    <div class=\"panel panel-info bg-light col-3 px-5 align-self-center justify-content-center offset-1\" style=\"opacity:0.8;\">\n      <form role=\"form\" action=\"login\" method=\"post\">\n        <div class=\"panel-heading\">\n          <div class=\"panel-title display-6\">Already a member? Login below.</div>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\" form-group\">\n            <div class=\"row justify-content-center\">\n              <span class=\"col-2 input-group-addon \"><i class=\"fa fa-fw fa-user-md  fa-1x\"></i></span>\n              <input type=\"text\"\tclass=\" col-9 form-control\" id=\"username\" name=\"username\" placeholder=\"Username\" autocomplete=\"on\" />\n            </div>\n          </div>\n          <div class=\"form-group \">\n            <div class=\"row justify-content-center\">\n              <span class=\"col-2 input-group-addon \"><i class=\"fa fa-fw fa-lock  fa-1x\"></i></span>\n              <input type=\"password\"\tclass=\"col-9  form-control\" id=\"password\" name=\"password\" placeholder=\"Password\" autocomplete=\"on\"/>\n            </div>\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-primary btn-lg col-12\">Sign in</button>\n\n          <div class=\"form-group\">\n            <font size=\"3\"><a routerLink=\"\">forgot password? </a></font>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"container mt-5\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"mx-auto mb-5 mb-lg-0 mb-lg-3\">\n          <h3>Fast</h3>\n          <p class=\"lead mb-0\">Speeds up the process of finding available nurses by notifying all nurses at once.</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\n          <div class=\"features-icons-icon d-flex\">\n            <i class=\"icon-layers m-auto text-primary\"></i>\n          </div>\n          <h3>Easy</h3>\n          <p class=\"lead mb-0\">Has a user friendly and simple user interface, which makes it easy to work with.</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"features-icons-item mx-auto mb-0 mb-lg-3\">\n          <div class=\"features-icons-icon d-flex\">\n            <i class=\"icon-check m-auto text-primary\"></i>\n          </div>\n          <h3>Cost Efficient</h3>\n          <p class=\"lead mb-0\">Reduces the cost from both time and money perspectives.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

/***/ "./src/app/registrations/facility-registration/facility-registration.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registrations/facility-registration/facility-registration.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\" bg-info padding row justify-content-center\" style=\"background-image:url('img/home-bg.jpeg'); background-size: cover;\">\n  <div class=\"panel  col-6\" style=\"opacity:0.9;\">\n    <h3 align=\"left\" class=\"mt-2\">Please fill out the form below:</h3>\n    <form  role=\"form\"  action=\"facilityRegistration\" method=\"post\">\n      <div class=\"  mt-5 mb-5 justify-content-center\" >\n        <div class=\"form-group\">\n          <label for=\"facilityname\">FacilityName:</label>\n          <input type=\"text\" class=\"form-control\" id=\"facilityname\" name=\"facilityname\"/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"website\">Website:</label>\n          <input type=\"text\" class=\"form-control\" id=\"website\" name=\"website\"/>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"firstName\">firstName:</label>\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\"/>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"lastName\">lastName:</label>\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\"/>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"tel\">tel:</label>\n          <input type=\"text\" class=\"form-control\" id=\"tel\" name=\"tel\"/>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"email\">email:</label>\n          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\"/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"username\">Username:</label>\n          <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" required/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">password:</label>\n          <input type=\"text\" class=\"form-control\" id=\"password\" name=\"password\" required/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"address_1\">address_1:</label>\n          <input type=\"text\" class=\"form-control\" id=\"address_1\" name=\"address_1\"/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"address_2\">address_2:</label>\n          <input type=\"text\" class=\"form-control\" id=\"address_2\" name=\"address_2\"/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"city\">city:</label>\n          <input type=\"text\" class=\"form-control\" id=\"city\" name=\"city\"/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"state\">state:</label>\n          <input type=\"text\" class=\"form-control\" id=\"state\" name=\"state\"/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"zipcode\">zipcode:</label>\n          <input type=\"text\" class=\"form-control\" id=\"zipcode\" name=\"zipcode\"/>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary btn-xl col-12\"><strong>Register</strong></button>\n        <!--  <a href=\"/facilityEmployeeInChargeRegistration\" class=\"btn btn-info\" role=\"button\">Skip</a> -->\n\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/registrations/facility-registration/facility-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacilityRegistrationComponent; });
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

var FacilityRegistrationComponent = /** @class */ (function () {
    function FacilityRegistrationComponent() {
    }
    FacilityRegistrationComponent.prototype.ngOnInit = function () {
    };
    FacilityRegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-facility-registration',
            template: __webpack_require__("./src/app/registrations/facility-registration/facility-registration.component.html"),
            styles: [__webpack_require__("./src/app/registrations/facility-registration/facility-registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FacilityRegistrationComponent);
    return FacilityRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/registrations/nurse-registration/nurse-registration.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registrations/nurse-registration/nurse-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" bg-info row justify-content-center\" style=\"background-image:url('img/home-bg.jpeg'); background-size: cover;\">\r\n  <div class=\"panel  col-6\" style=\"opacity:0.9;\">\r\n    <h3 align=\"left\" class=\"mt-2\">Please fill out the form below:</h3>\r\n    <form role=\"form\"  action=\"nurseRegistration\" method=\"post\">\r\n      <div class=\"  mt-5 mb-5 justify-content-center\" >\r\n        <div class=\"form-group\">\r\n          <label for=\"firstname\">FirstName:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"firstname\" name=\"firstname\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"lastname\">LastName:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"lastname\" name=\"lastname\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"dateofbirth\">DateOfBirth:</label>\r\n          <input type=\"date\" pattern=\"MM-dd-yyyy\" class=\"form-control\" id=\"dateofbirth\" name=\"dateofbirth\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"gender\">Gender:</label> <br>\r\n          <div class=\"tab\">\r\n            <input type=\"radio\" name=\"gender\" value=\"male\" checked> Male<br>\r\n            <input type=\"radio\" name=\"gender\" value=\"female\"> Female<br>\r\n            <input type=\"radio\" name=\"gender\" value=\"other\"> Other<br><br>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"zipcode\">ZipCode:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"zipcode\" name=\"zipcode\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"tel\">Phone Number:</label>\r\n          <input type=\"tel\" class=\"form-control\" id=\"tel\" name=\"tel\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"licensenumber\">License Number:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"licensenumber\" name=\"licensenumber\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"nursingdegreetype\">Nursing Degree Type:</label>\r\n          <select name=\"nursingdegreetype\" ng-model= \"nursingdegreetype\">\r\n            <option value=\"lpn/lvn\">LPN/LVN</option>\r\n            <option value=\"rn\">RN</option>\r\n            <option value=\"msn\">MSN</option>\r\n          </select>\r\n        </div>\r\n        <hr>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email:</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" required/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password:</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" ng-model=\"password\" required/>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary btn-xl col-12\"><strong>Register</strong></button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/registrations/nurse-registration/nurse-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NurseRegistrationComponent; });
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

var NurseRegistrationComponent = /** @class */ (function () {
    function NurseRegistrationComponent() {
    }
    NurseRegistrationComponent.prototype.ngOnInit = function () {
    };
    NurseRegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nurse-registration',
            template: __webpack_require__("./src/app/registrations/nurse-registration/nurse-registration.component.html"),
            styles: [__webpack_require__("./src/app/registrations/nurse-registration/nurse-registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NurseRegistrationComponent);
    return NurseRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/registrations/registration/registration.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registrations/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center \"  style=\"height:100vh; background-image:url('img/home-bg.jpeg'); background-size: cover;\">\n  <div class=\"panel panel-primary align-self-center \" style=\"height:40vh; width:40vw; opacity:0.8;\">\n    <div class=\"panel-heading display-4\"><strong>Registering a Nurse or a Facility?</strong></div>\n    <div class=\"panel-body display-4 lead \">\n      <form role=\"form\">\n        <div><input name=\"registrationType\" type=\"radio\" class=\" mt-5 mb-5 \" [(ngModel)]=\"registrationType\" value=\"/nurseRegistration\">Nurse</div>\n        <div><input name=\"registrationType\" type=\"radio\" class=\" mt-5 mb-5 \"  [(ngModel)]=\"registrationType\" value=\"/facilityRegistration\">Facility</div>\n        <div><a class=\"btn btn-primary btn-lg col-11 \" routerLink=\"{{registrationType}}\"><strong>Next</strong></a></div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/registrations/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
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

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
        this.registrationType = "";
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("./src/app/registrations/registration/registration.component.html"),
            styles: [__webpack_require__("./src/app/registrations/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding \">\n  Thank you for registration, your account has been confirmed.\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
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

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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