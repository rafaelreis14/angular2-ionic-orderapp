webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CustomerService = class CustomerService {
    constructor(http) {
        this.http = http;
    }
    getCustomers() {
        return this.http.get('assets/data-sample.json')
            .map(response => response.json().customer);
    }
    isNumeric(value) {
        return /^\d+$/.test(value);
    }
    getCustomerByName(nameCustomer) {
        return this.getCustomers()
            .map((cust) => cust.filter(c => c.name.toLowerCase().includes(nameCustomer.toLowerCase())));
    }
    getCustomerByCode(code) {
        return this.getCustomers()
            .map((cust) => cust.find(c => c.customerID == code));
    }
    getDefaultCustomer() {
        return this.getCustomerByCode('000001');
    }
};
CustomerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], CustomerService);

//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SigninPage = class SigninPage {
    constructor(navCtrl, navParams, auth, loadCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
    }
    onSubmit(f) {
        let load = this.handleLoading();
        load.present();
        this.auth.signin(f.value.email, f.value.password)
            .then(() => load.dismiss())
            .catch((error) => {
            load.dismiss();
            this.handleError(error.message);
        });
        console.log('entrou aqui no submit');
    }
    loginWithGoogle() {
        let load = this.handleLoading();
        load.present();
        this.auth.signinWhitgGoogle()
            .then(() => load.dismiss())
            .catch((error) => {
            load.dismiss();
            this.handleError(error.message);
        });
    }
    loginWithFacebook() {
        let load = this.handleLoading();
        load.present();
        this.auth.signinWithFacebook()
            .then(() => load.dismiss())
            .catch((error) => {
            load.dismiss();
            this.handleError(error.message);
        });
    }
    handleError(message) {
        const alert = this.alertCtrl.create({
            title: 'Erro ao logar.',
            message: message,
            buttons: ['Ok']
        });
        alert.present();
    }
    handleLoading() {
        return this.loadCtrl.create({
            content: "Aguarde..."
        });
    }
};
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\pages\signin\signin.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm">\n      <ion-list>\n        <ion-item>\n          <ion-label fixed >Email</ion-label>\n          <ion-input \n            type="email" \n            ngModel\n            required\n            name="email"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label fixed >Senha</ion-label>\n            <ion-input \n              type="password"\n              ngModel\n              required              \n              name="password"></ion-input>\n        </ion-item>\n        \n      </ion-list>\n      <button ion-button block (click)="onSubmit(f)" [disabled]="!f.valid">Logar</button>\n      <p text-center>\n          Ou\n      </p>\n      <button ion-button icon-start block color="facebook" (click)="loginWithFacebook()">\n          <ion-icon name="logo-facebook" icon-only ></ion-icon>\n          Login com Facebook\n       </button>\n      <button ion-button icon-start block color="google"  (click)="loginWithGoogle()">\n        <ion-icon name="logo-google"  ></ion-icon>\n        Login com Google</button>\n\n        \n        \n\n    </form>  \n</ion-content>\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\pages\signin\signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_order_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tab_order_detail_tab_order_detail__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let OrderPage = class OrderPage {
    constructor(navCtrl, navParams, orderServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderServ = orderServ;
        this.startDate = new Date();
        this.orders = [];
    }
    onNewOrder() {
        this.orderServ.newOrder();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tab_order_detail_tab_order_detail__["a" /* TabOrderDetailPage */], { mode: 'New' });
    }
};
OrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-order',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\pages\order\order.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>      \n    <ion-title>Meus Orçamentos</ion-title>\n    <ion-buttons end>\n        <!-- <button ion-button icon-only (click)="onNewOrder()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n         -->\n      </ion-buttons>\n  </ion-navbar>\n  <data-change [startDate]="startDate"></data-change>\n</ion-header>\n\n\n<ion-content padding>\n    <div text-center>\n        <img *ngIf="orders == null"  src="assets/images/nenhumResultado.jpg" >\n    </div>\n\n\n</ion-content>\n<ion-footer>\n    <ion-fab bottom right>\n        <button color="fabButton"ion-fab (click)="onNewOrder()"><ion-icon name="add"></ion-icon></button>        \n    </ion-fab>\n</ion-footer>\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\pages\order\order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__services_order_service__["a" /* OrderService */]])
], OrderPage);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.products = [];
    }
    getProducts() {
        return this.http.get('assets/data-sample.json')
            .map(response => response.json().product);
    }
    isNumeric(value) {
        return /^\d+$/.test(value);
    }
    getProduct(code) {
        if (this.isNumeric(code)) {
            return this.getProductByCode(code);
        }
        else {
            return this.getProductByDescription(code);
        }
    }
    getProductByDescription(code) {
        return this.getProducts()
            .map((prod) => prod.filter(p => p.description.toLowerCase().includes(code.toLowerCase())));
    }
    getProductByCode(code) {
        return this.getProducts()
            .map((prod) => prod.filter(p => p.code == code));
    }
};
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ProductService);

//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ 185:
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
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 228:
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
webpackEmptyAsyncContext.id = 228;

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let WalkthroughPage = class WalkthroughPage {
    constructor(nav) {
        this.nav = nav;
    }
    skipIntro() {
        this.lastSlide = true;
        this.slider.slideTo(this.slider.length());
    }
    onSlideChanged() {
        this.lastSlide = this.slider.isEnd();
    }
    goToLogin() {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
    }
    goToSignup() {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    }
    onExit(e) {
        console.log(e);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('slider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], WalkthroughPage.prototype, "slider", void 0);
WalkthroughPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-walkthrough',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\pages\walkthrough\walkthrough.html"*/'<ion-header class="walkthrough-header">\n    <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button class="skip-button" (click)="skipIntro()" [hidden]="lastSlide">Pular</button>\n        </ion-buttons>\n      </ion-toolbar>  \n    \n</ion-header>\n\n    <ion-content padding class="walkthrough-content">        \n        <ion-slides #slider (ionSlideDidChange)="onSlideChanged()" pager="true">\n          <ion-slide>\n            <ion-row>\n              <ion-col center width-64 no-padding>\n                \n                <img class=\'img\'src=\'assets/images/logo.png\'/>\n              </ion-col>\n            </ion-row>\n            <h2 class="main-title">Bem vindo!</h2>\n            <p class="intro-text">\n              Este é o novo App da <b>Todimo</b>\n            </p>\n          </ion-slide>         \n          <ion-slide class="slide-4">\n            <ion-row class="intro-image-row">\n              <ion-col center width-64 no-padding>\n                  <img class=\'img\' src=\'assets/images/logo.png\'/>\n              </ion-col>\n            </ion-row>\n            <h2 class="main-title">Quase lá!</h2>\n            <p class="intro-text">\n              Entre com sua conta.\n            </p>\n            <p class="intro-text">\n              Quase tudo pronto para usar!\n            </p>\n            <div>\n              <ion-row>\n                <ion-col width-50>\n                    <button ion-button color="button" block (click)="goToLogin()">Login</button>\n                  \n                </ion-col>\n                <ion-col width-50>\n                    <button ion-button color="button" block (click)="goToSignup()">Crie sua conta</button>\n                  \n                </ion-col>\n                \n              </ion-row>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </ion-content>      \n\n\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\pages\walkthrough\walkthrough.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], WalkthroughPage);

//# sourceMappingURL=walkthrough.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SignupPage = class SignupPage {
    constructor(navCtrl, navParams, auth, loadCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
    }
    onSubmit(f) {
        const load = this.loadCtrl.create({
            content: "Aguarde..."
        });
        load.present();
        this.auth.singup(f.value.email, f.value.password)
            .then(data => load.dismiss())
            .catch((error) => {
            load.dismiss();
            this.handleError(error.message);
        });
    }
    handleError(message) {
        const alert = this.alertCtrl.create({
            title: 'Erro ao criar conta',
            message: message,
            buttons: ['Ok']
        });
    }
};
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Criar Conta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form #f="ngForm"  >\n        <ion-list>\n          <ion-item>\n            <ion-label fixed >Email</ion-label>\n            <ion-input \n              type="email" \n              ngModel\n              required\n              name="email"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label fixed >Senha</ion-label>\n              <ion-input \n                type="password"\n                ngModel\n                required              \n                name="password"></ion-input>\n          </ion-item>\n          \n        </ion-list>\n        <button ion-button block (click)="onSubmit(f)" [disabled]="!f.valid">Criar conta</button>\n        <p text-center>\n            Ou\n        </p>\n        <button ion-button icon-start block color="facebook">\n            <ion-icon name="logo-facebook" icon-only ></ion-icon>\n            Criar conta com Facebook\n         </button>\n        <button ion-button icon-start block color="google">\n          <ion-icon name="logo-google"  ></ion-icon>\n          Criar conta com Google</button>\n  \n          \n          \n  \n      </form>  \n\n</ion-content>\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let SettingsPage = class SettingsPage {
    constructor(auth) {
        this.auth = auth;
    }
    onLogOut() {
        this.auth.logout();
    }
};
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\pages\settings\settings.html"*/'\n<ion-header>  \n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>      \n    <ion-title>Configurações</ion-title>\n  </ion-navbar>\n  \n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <button ion-button block outline color = "danger" (click)="onLogOut()">Sair</button>\n    \n  </div>\n \n</ion-content>\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PaymentType; });
var PaymentType;
(function (PaymentType) {
    PaymentType[PaymentType["Nenhum"] = 0] = "Nenhum";
    PaymentType[PaymentType["Dinheiro"] = 1] = "Dinheiro";
    PaymentType[PaymentType["Credito"] = 2] = "Credito";
    PaymentType[PaymentType["Debito"] = 3] = "Debito";
})(PaymentType || (PaymentType = {}));
class PaymentModel {
    constructor(type, value, instalment) {
        this.type = type;
        this.value = value;
        this.instalment = instalment;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PaymentModel;

//# sourceMappingURL=payment.model.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabOrderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_order_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_detail_payment_order_detail_payment__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_detail_customer_order_detail_customer__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_detail_itens_order_detail_itens__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_detail_order_detail__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let TabOrderDetailPage = class TabOrderDetailPage {
    constructor(order) {
        this.order = order;
        this.totalItens = 0;
        this.totalPayment = 0;
        this.orderDetail = __WEBPACK_IMPORTED_MODULE_5__order_detail_order_detail__["a" /* OrderDetailPage */];
        this.orderDetailItens = __WEBPACK_IMPORTED_MODULE_3__order_detail_itens_order_detail_itens__["a" /* OrderDetailItensPage */];
        this.orderDetailCustomer = __WEBPACK_IMPORTED_MODULE_2__order_detail_customer_order_detail_customer__["a" /* OrderDetailCustomerPage */];
        this.orderDetailPayment = __WEBPACK_IMPORTED_MODULE_1__order_detail_payment_order_detail_payment__["a" /* OrderDetailPaymentPage */];
        this.order.totalItens.subscribe((value) => {
            this.totalItens = value;
        });
        this.order.totalPayment.subscribe((value) => {
            this.totalPayment = value;
        });
    }
};
TabOrderDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-tab-order-detail',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\pages\tabs\tab-order-detail\tab-order-detail.html"*/'<ion-tabs>\n  \n  <ion-tab tabIcon="list" tabTitle="Itens" [root]="orderDetailItens" tabBadge="{{totalItens}}" tabBadgeStyle="danger"></ion-tab>\n  <ion-tab tabIcon="person-add" tabTitle="Cliente" [root]="orderDetailCustomer"></ion-tab>\n  <ion-tab tabIcon="md-cash" tabTitle="Pagamento" [root]="orderDetailPayment" tabBadge="{{totalPayment}}" tabBadgeStyle="danger"></ion-tab>  \n  <ion-tab tabIcon="cart" tabTitle="Finalizar" [root]="orderDetail"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\pages\tabs\tab-order-detail\tab-order-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_order_service__["a" /* OrderService */]])
], TabOrderDetailPage);

//# sourceMappingURL=tab-order-detail.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_order_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_payment_model__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let OrderDetailPaymentPage = class OrderDetailPaymentPage {
    constructor(orderServer) {
        this.orderServer = orderServer;
        this._type = __WEBPACK_IMPORTED_MODULE_2__models_payment_model__["b" /* PaymentType */];
        this.type = __WEBPACK_IMPORTED_MODULE_2__models_payment_model__["b" /* PaymentType */].Dinheiro;
        this.remainValue = 0;
        console.log('teste');
        this.orderServer.totalPayment.subscribe((total) => {
            console.log('teste1');
            this.remainValue = this.orderServer.getOrder().remainingValue;
        });
    }
    ionViewWillLoad() {
        this.type = __WEBPACK_IMPORTED_MODULE_2__models_payment_model__["b" /* PaymentType */].Dinheiro;
        this.remainValue = this.orderServer.getOrder().remainingValue;
    }
    addPayment(e) {
        this.orderServer.addPayment(this.type, e.value);
        e.value = '';
        this.order = this.orderServer.getOrder();
    }
    onChoosingType(type) {
        this.type = type;
    }
    removePayment(i) {
        this.orderServer.removePayment(i);
        this.order = this.orderServer.getOrder();
    }
};
OrderDetailPaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-order-detail-payment',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\pages\order-detail-payment\order-detail-payment.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pagamento</ion-title>\n  </ion-navbar>\n  <ion-item class="remain-header">         \n      <p>\n        Valor Remanescente:  \n      </p>\n      <ion-note item-end  >\n          <h2 color="danger">{{remainValue | currency:\'BRL\':true}}</h2>\n      </ion-note>\n      \n  </ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n   \n    <br>\n    <ion-list radio-group class="rgSelect">        \n          <ion-list-header>\n            Escolha a condição\n          </ion-list-header>\n        \n          <ion-item>\n            <ion-note item-start>\n              <ion-icon name="cash"></ion-icon>\n            </ion-note>            \n            <ion-label>Dinheiro</ion-label>\n            <ion-radio value="_type.Dinheiro" checked="true" (ionSelect)="onChoosingType(_type.Dinheiro)"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-note item-start>\n                <ion-icon name="card"></ion-icon>\n            </ion-note>            \n            <ion-label>Cartão de Crédito</ion-label>\n            <ion-radio value="_type.Credito" (ionSelect)="onChoosingType(_type.Credito)" ></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-note item-start>\n                  <ion-icon name="card"></ion-icon>\n                </ion-note>            \n            <ion-label>Cartao de Débito</ion-label>\n            <ion-radio value="_type.Debito" (ionSelect)="onChoosingType(_type.Debito)"></ion-radio>\n          </ion-item>\n    </ion-list>\n   \n          \n    <ion-item>\n      <ion-label stacked color="primary">Valor</ion-label>\n      <ion-input type="number" placeholder="Infome o valor da parcela." #inp></ion-input>          \n      <ion-note item-end>\n          <button class="button-add"ion-button icon-only color="button-alt" (click)="addPayment(inp)">\n              <ion-icon color="primary" name="add-circle"></ion-icon>\n          </button>          \n      </ion-note>\n      \n     </ion-item>\n     \n     \n     <ion-list-header *ngIf="(order?.payments.length > 0)">\n        Condições de Pagamento\n    </ion-list-header>\n     \n     <div *ngIf="!(order?.payments.length > 0)" text-center>\n      <img src="assets/images/noResult.jpg" >\n     </div>\n\n     <ion-list *ngFor="let payment of order?.payments; let i = index">\n\n       <ion-item-sliding>\n        <ion-item >\n        \n              <ion-note item-start>              \n                  <p>#{{i+1}}</p>  \n                  <ion-icon *ngIf="payment.type == _type.Dinheiro"  name="cash"></ion-icon>\n                  <ion-icon *ngIf="payment.type != _type.Dinheiro" name="card"></ion-icon>                              \n              </ion-note>  \n              <h2>{{_type[payment.type]}}</h2>\n              <ion-note item-end>\n                  <p>{{payment.value | currency:\'BRL\':true}}</p>\n              </ion-note> \n                    \n        </ion-item>\n        <ion-item-options  icon-start>\n            <button ion-button color="danger" (click)="removePayment(i)">\n                <ion-icon name="trash"></ion-icon>\n                Deletar\n            </button>                  \n        </ion-item-options>    \n      </ion-item-sliding> \n       \n     </ion-list>\n  \n    \n  \n</ion-content>\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\pages\order-detail-payment\order-detail-payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_order_service__["a" /* OrderService */]])
], OrderDetailPaymentPage);

//# sourceMappingURL=order-detail-payment.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_order_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let OrderDetailCustomerPage = class OrderDetailCustomerPage {
    constructor(orderService) {
        this.orderService = orderService;
    }
    ionViewWillEnter() {
        this.order = this.orderService.getOrder();
        console.log(this.order);
    }
    ngOnInit() {
        this.order = this.orderService.getOrder();
        console.log('oninit');
    }
    customerChanging(e) {
        this.orderService.setCostumer(e);
    }
};
OrderDetailCustomerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-order-detail-customer',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\pages\order-detail-customer\order-detail-customer.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Informações do Cliente</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <customer-input (onCustomerChange)="customerChanging($event)"></customer-input>\n  <ion-card> \n    <ion-card-header>\n      <h2>Endereço de Entrega</h2>\n    </ion-card-header>\n    <ion-card-content>\n        <ion-grid>\n            <ion-row> \n              <ion-col>\n                  <ion-item>  \n                    <ion-label floating>Endereço 1</ion-label>\n                    <ion-input [(ngModel)]="order?.deliveyAddress.address1" type="text" ></ion-input>        \n                  </ion-item>\n      \n              </ion-col>                 \n            </ion-row>\n            <ion-row> \n                <ion-col width-75>\n                    <ion-item>\n                      <ion-label floating>Endereço 2</ion-label>\n                      <ion-input [(ngModel)]="order?.deliveyAddress.address2" type="text" ></ion-input>        \n                    </ion-item>\n                </ion-col>\n                <ion-col width-25>\n                    <ion-item>\n                      <ion-label floating>Número</ion-label>\n                      <ion-input  [(ngModel)]="order?.deliveyAddress.number" type="text"></ion-input>        \n                    </ion-item>\n                </ion-col>          \n            </ion-row>\n            <ion-row> \n                <ion-col>\n                    <ion-item>  \n                      <ion-label floating>Referênecia</ion-label>\n                      <ion-input  [(ngModel)]="order?.deliveyAddress.reference" type="text"></ion-input>        \n                    </ion-item>\n                </ion-col>                 \n              </ion-row>\n              <ion-row> \n                  <ion-col width-75>\n                      <ion-item>  \n                        <ion-label floating>Cidade</ion-label>\n                        <ion-input  [(ngModel)]="order?.deliveyAddress.city" type="text" ></ion-input>                      \n                      </ion-item>\n                  </ion-col>\n      \n                  <ion-col width-25>\n                      <ion-item>\n                        <ion-label floating>Estado</ion-label>\n                        <ion-input [(ngModel)]="order?.deliveyAddress.state" type="text" ></ion-input>\n                      </ion-item>\n                  </ion-col>          \n              </ion-row>\n              <ion-row> \n                  <ion-col width-50>\n                      <ion-item>\n                        <ion-label floating>País</ion-label>\n                        <ion-input [(ngModel)]="order?.deliveyAddress.country" type="text" ></ion-input>        \n                      </ion-item>\n                  </ion-col>\n                  <ion-col width-50>\n                      <ion-item>\n                        <ion-label floating>CEP</ion-label>\n                        <ion-input  [(ngModel)]="order?.deliveyAddress.zipcode"type="text"></ion-input>        \n                      </ion-item>\n                  </ion-col>          \n              </ion-row>\n          </ion-grid>\n    </ion-card-content>\n    \n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\pages\order-detail-customer\order-detail-customer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_order_service__["a" /* OrderService */]])
], OrderDetailCustomerPage);

//# sourceMappingURL=order-detail-customer.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailItensPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_order_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_item_edit_item__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searches_product_search_product_search__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let OrderDetailItensPage = class OrderDetailItensPage {
    constructor(modalCtrl, orderServ, toastCrtl) {
        this.modalCtrl = modalCtrl;
        this.orderServ = orderServ;
        this.toastCrtl = toastCrtl;
        this.itens = [];
    }
    addItem() {
        const modalProduct = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__searches_product_search_product_search__["a" /* ProductSearchPage */]);
        modalProduct.present();
        modalProduct.onDidDismiss((prod) => {
            if (prod) {
                const modalItem = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__edit_item_edit_item__["a" /* EditItemPage */], { mode: 'Adicionar', product: prod });
                modalItem.present();
                modalItem.onDidDismiss((ret) => {
                    if (ret = 'Ok') {
                        this.itens = this.orderServ.getOrder().itens;
                    }
                });
            }
        });
    }
    setWhereToTake(item) {
        let totalItem = this.orderServ.getTotalOfItem(item.product.code);
        if (totalItem == 1) {
            let where = item.whereToTake == 'Loja' ? 'Deposito' : 'Loja';
            const toast = this.toastCrtl.create({
                message: 'Item marcado para ' + where,
                duration: 1500,
                position: 'bottom'
            });
            item.whereToTake = (where);
            toast.present();
        }
    }
    removeItem(index) {
        this.orderServ.removeItem(index);
        const toast = this.toastCrtl.create({
            message: 'Item removido com sucesso.',
            duration: 1500,
            position: 'bottom'
        });
        toast.present();
    }
    onChangeItem(item, index) {
        const modalItem = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__edit_item_edit_item__["a" /* EditItemPage */], { mode: 'Alterar', item: item, index: index });
        modalItem.present();
        modalItem.onDidDismiss((ret) => {
            if (ret = 'Ok') {
                this.itens = this.orderServ.getOrder().itens;
            }
        });
    }
};
OrderDetailItensPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-order-detail-itens',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\pages\order-detail-itens\order-detail-itens.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Itens do Orçamento</ion-title>\n    <ion-buttons right>\n        <!-- <button ion-button (click)="addItem()">\n            <ion-icon name="add"></ion-icon>\n        </button>          -->\n    </ion-buttons>   \n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content padding> \n    <div text-center>\n    <img *ngIf="itens.length == 0"  src="assets/images/noResult.jpg" >\n    </div>\n  <ion-list *ngFor="let item of itens let i = index" >\n    <ion-item-sliding >\n      <ion-item (click)="onChangeItem(item, i)">\n          \n         <ion-avatar item-start>\n            <img [src]="item.product.image">\n         </ion-avatar>\n          \n          <p>#{{item.itemId}}</p> \n          <h5>{{item.product.code}}</h5>\n          <p>{{item.product.description}}</p>\n          <p [class.item-where-deposit]="item.whereToTake == \'Loja\'" [class.item-where-local]="item.whereToTake != \'Loja\'">{{item.whereToTake}}</p>\n          \n          <ion-note item-end color="danger">\n            <h2 > {{item.total | currency:\'BRL\':true}} </h2>\n            <p >Qtd: {{item.quantity}}</p>\n          </ion-note>\n      </ion-item>\n\n   \n      <ion-item-options  icon-start>\n          <button ion-button color="danger" (click)="removeItem(i)">\n              <ion-icon name="trash"></ion-icon>\n              Deletar\n          </button>      \n        <button ion-button color="secondary" (click)="setWhereToTake(item)">\n            <ion-icon name="archive"></ion-icon>\n            Retirar\n        </button>        \n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-fab bottom right>\n      <button color="fabButton"ion-fab (click)="addItem()"><ion-icon name="add"></ion-icon></button>        \n  </ion-fab>\n</ion-footer>'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\pages\order-detail-itens\order-detail-itens.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_0__services_order_service__["a" /* OrderService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
], OrderDetailItensPage);

//# sourceMappingURL=order-detail-itens.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_order_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item_model__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let EditItemPage = class EditItemPage {
    constructor(viewCrtl, navParams, orderServ) {
        this.viewCrtl = viewCrtl;
        this.navParams = navParams;
        this.orderServ = orderServ;
    }
    ionViewDidLoad() {
    }
    ngOnInit() {
        this.mode = this.navParams.get('mode');
        if (this.mode == 'Adicionar') {
            this.product = this.navParams.get('product');
            this.item = new __WEBPACK_IMPORTED_MODULE_1__models_item_model__["a" /* ItemModel */](0, this.product, 1, 5, this.product.price, 'Loja');
        }
        else {
            this.item = this.navParams.get('item');
            this.index = this.navParams.get('index');
        }
    }
    onValueChanged(e) {
        this.item.quantity = e.newValue;
    }
    onAddItem() {
        if (this.mode == 'Adicionar') {
            this.orderServ.addItem(this.item);
        }
        else {
            this.orderServ.updateItem(this.item, this.index);
        }
        this.viewCrtl.dismiss('Ok');
    }
    onCancel() {
        this.viewCrtl.dismiss('Cancel');
    }
};
EditItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-edit-item',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\pages\edit-item\edit-item.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{mode}} Item</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding> \n\n\n<ion-card>            \n  <div>\n    <p>#{{item.product.code}}</p>  \n  </div>\n  <img  [src]="item.product.image">\n\n    <ion-card-content>\n        <ion-card-title color="descricao">\n          {{item.product.description}}\n        </ion-card-title>\n         \n        <p class="price"> {{item.product.price |  currency:\'BRL\':true }}<span *ngIf="item.product.salePrice > 0" >{{item.product.salePrice |  currency:\'BRL\':true}}</span></p>\n        \n    </ion-card-content>\n    <ion-item class="background">\n      <ion-note item-start>\n          Total do Produto: \n      </ion-note>\n        \n      <ion-note item-end color="danger">\n        <h2>{{item.total |  currency:\'BRL\':true}}</h2> \n      </ion-note>\n        \n    </ion-item>\n\n    <counter-input [newValue]="item.quantity" description="Quantidade" (valueChanged)="onValueChanged($event)"></counter-input>\n    \n  </ion-card>\n  <button ion-button round block (click)="onAddItem()">Confirmar</button>\n  <button ion-button round block color="button-alt" (click)="onCancel()">Cancelar</button>\n \n</ion-content>\n\n\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\pages\edit-item\edit-item.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__services_order_service__["a" /* OrderService */]])
], EditItemPage);

//# sourceMappingURL=edit-item.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_product_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ProductSearchPage = class ProductSearchPage {
    constructor(viewCtrl, productService, barcode) {
        this.viewCtrl = viewCtrl;
        this.productService = productService;
        this.barcode = barcode;
        this.products = [];
    }
    filterItems(event) {
        let val = event.target.value;
        this.productService.getProduct(val)
            .subscribe((data) => {
            if (data) {
                this.products = data;
                console.log(this.products);
            }
            else {
                console.log('this.products');
            }
        }, (error) => { console.log(error); });
    }
    onScanCode() {
        this.barcode.scan()
            .then((barcode) => {
            this.productService.getProduct(barcode.text)
                .subscribe((data) => {
                if (data) {
                    this.products = data;
                    console.log(this.products);
                }
                else {
                    console.log('this.products');
                }
            }, (error) => { console.log(error); });
        }, (error) => {
            console.log('error barcode scan');
        });
    }
    onChooseProduct(product) {
        this.viewCtrl.dismiss(product);
    }
    ionViewWillEnter() {
        this.productService.getProducts()
            .subscribe((data) => {
            this.products = data;
            console.log(this.products);
        });
    }
    onClose() {
        this.viewCtrl.dismiss();
    }
};
ProductSearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-product-search',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\pages\searches\product-search\product-search.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pesquisa de Produto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar placeholder="Filtro de Produto" (ionInput)="filterItems($event)"></ion-searchbar>\n    <button ion-button icon-start block color="button-alt"(click)="onScanCode()">     \n      <ion-icon name="qr-scanner"></ion-icon>\n      Escanear código\n    </button>\n    \n\n    <ion-list >\n      <ion-list-header>\n        Produtos\n      </ion-list-header>    \n         \n      <ion-item *ngFor="let prod of products" #item (click)="onChooseProduct(prod)">\n        <ion-avatar item-start>\n          <img [src]="prod.image">\n        </ion-avatar>\n        <h2>{{prod.code}}</h2>\n        <p>{{prod.description}}</p>\n        <ion-note item-end>\n          {{prod.price |  number:\'1.2-2\'}}\n        </ion-note>\n      </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer>\n  <button ion-button block outline color="danger" (click)="onClose()">Cancelar</button>\n  \n</ion-footer>\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\pages\searches\product-search\product-search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_0__services_product_service__["a" /* ProductService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], ProductSearchPage);

//# sourceMappingURL=product-search.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_order_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_order__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let OrderDetailPage = class OrderDetailPage {
    constructor(app, orderServ) {
        this.app = app;
        this.orderServ = orderServ;
        this.selectOptions = ['Interno', 'Pesquisa', 'Negociacao'];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.order = this.orderServ.getOrder();
    }
    popPage() {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_1__order_order__["a" /* OrderPage */]);
    }
};
OrderDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-order-detail',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\pages\order-detail\order-detail.html"*/'\n<ion-header>\n  \n  \n  <ion-navbar>\n      \n      <ion-buttons left>\n          <button ion-button (click)="popPage()">\n              <ion-icon name="undo"></ion-icon>\n          </button>         \n      </ion-buttons>\n   \n    <ion-title>Orçamento</ion-title>   \n    <ion-buttons right>\n        <button ion-button >\n            <ion-icon  name="more"></ion-icon>\n        </button>         \n    </ion-buttons>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="content">\n    <div class="table">\n        <div class="table-cell">\n            <hr />\n        </div>\n        <div class="table-cell">\n                <p class="order-header"> #1 - 01/01/2016 </p>\n        </div>\n        <div class="table-cell">\n            <hr />\n        </div>\n    </div>    \n    <ion-card class="card" padding>               \n        <ion-card-content>\n                <div text-center>\n                        <h1>#1</h1>\n                        <p>26 fev de 2017</p>                      \n                        <h1 class="total">{{order?.netTotal |currency:\'BRL\':true}}</h1>\n                </div>\n                <br>\n                    \n                    <ion-item>\n                        <ion-icon name="contacts" item-left large ></ion-icon>\n                        <h2 class="name">{{order?.seller?.name}}</h2>\n                        <p>{{order?.seller?.sellerId}}</p>\n                    </ion-item>\n                    <ion-item>                            \n                        <ion-icon name="contact" item-left large ></ion-icon>\n                        <h2 class="name">{{order?.customer?.name}}</h2>\n                        <p>{{order?.orderNumber}}</p>\n                    </ion-item>     \n                    <br> \n\n            <h3>RESUMO DO PEDIDO</h3>\n            <hr>\n            <h5 class="price">Total Bruto <span>{{order?.grossTotal |currency:\'BRL\':true}}</span></h5>\n            <h5 class="price">Total Líquido <span>{{order?.netTotal |currency:\'BRL\':true}}</span></h5>\n            <h5 class="price">Desconto <span>{{order?.discount |currency:\'BRL\':true}}</span></h5>\n            <h5 class="price">Desconto PROMO <span>{{order?.discountPROMO |currency:\'BRL\':true}}</span></h5>\n            <h5 class="price">Despesa <span>{{order?.transportExpense |currency:\'BRL\':true}}</span></h5>\n       \n\n            <ion-list>\n                <ion-item>\n                            <button ion-button icon-left clear item-right >\n                                    <ion-icon name="remove-circle"></ion-icon>\n                                        Descontos e Despesas\n                                </button>\n                </ion-item>\n                <ion-item class="select">\n                        <ion-label Floation >Uso Orçamento</ion-label>\n                        <ion-select >\n                          <ion-option *ngFor="let option of selectOptions" [value]="option" >{{option}}</ion-option>\n                        </ion-select>                 \n                </ion-item>\n              \n            </ion-list>    \n            <br>\n                \n            <button ion-button block color="button-alt" round>      \n                Finalizar Orçamento \n\n            </button>\n        \n        \n    </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\pages\order-detail\order-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_0__services_order_service__["a" /* OrderService */]])
], OrderDetailPage);

//# sourceMappingURL=order-detail.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let SalesPage = class SalesPage {
    constructor(navCtrl, navParams, productService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.salesProducts = [];
    }
    ngOnInit() {
        this.productService.getProducts()
            .subscribe((data) => {
            this.salesProducts = data;
        });
    }
    onClickOffer(prod) {
        prod.activated = !prod.activated;
    }
    onClickFavorite(prod) {
        prod.favorited = !prod.favorited;
    }
};
SalesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sales',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\pages\sales\sales.html"*/'<ion-header>\n\n  <ion-navbar>\n     \n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>      \n      <ion-title >\n        <div>        \n          <img src="./assets/images/logo.png" width="50%" style="display:inline-block" height="30px"/> \n        </div> \n      </ion-title>\n    \n  </ion-navbar>  \n</ion-header>\n\n\n<ion-content padding>\n  <div class="divslide">\n    <ion-slides autoplay="1000" loop="true" pager="true" class="slider" >\n      <ion-slide>\n        <img src="assets/images/img1.jpg"/>\n      </ion-slide>\n      <ion-slide class="slide"> \n        <img src="assets/images/img2.png"/>\n      </ion-slide>\n      <ion-slide class="slide">\n        <img src="assets/images/img3.jpg"/>\n      </ion-slide>\n    </ion-slides>      \n  </div>\n  <div>\n    <h3 class="big_head">\n    <span>OFERTAS</span> DO <span>DIA</span>\n    <h3 class="smalltext">As melhores ofertas todos os dias</h3> \n    </h3>\n  </div>        \n  <div>\n    <ion-list class="first_list">\n      <ion-item  *ngFor="let prod of salesProducts">\n        <div class="content">\n          <div class="like">\n            <ion-icon *ngIf="!prod.favorited"  name="heart-outline" (click)="onClickFavorite(prod)" ></ion-icon>\n            <ion-icon *ngIf="prod.favorited" name="heart" (click)="onClickFavorite(prod)" color="danger"></ion-icon> \n          </div>\n          <div class="img_fash">\n            <img src="{{prod.image}}"/>\n            <div class="offer">\n              <p>{{prod.discountPercent}}% OFF</p>\n            </div>\n          </div> \n          <div class="det_item">\n              <h3>{{prod.description}} </h3>\n              <p>Código do Produto: {{prod.code}}</p>\n              <p class="price">{{prod.price | currency:\'BRL\':true }}<span>{{ prod.salePrice | currency:\'BRL\':true }}</span></p>\n              <div align="center">\n                  <button text-center [disabled]="prod.activated" ion-button round color="button-alt" (click)="onClickOffer(prod)">\n                      {{!prod.activated ? \'Ativar Promoção\' : \'Expira em 10 dias\'}}\n                    </button>\n\n              </div>\n              \n          </div>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\pages\sales\sales.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]])
], SalesPage);

//# sourceMappingURL=sales.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_customer_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CustomerSearchPage = class CustomerSearchPage {
    constructor(viewCtrl, customerService) {
        this.viewCtrl = viewCtrl;
        this.customerService = customerService;
        this.customers = [];
    }
    onFilterCustomer(event) {
        let val = event.target.value;
        console.log(val);
        this.customerService.getCustomerByName(val)
            .subscribe((data) => {
            if (data) {
                this.customers = data;
                console.log(this.customers);
            }
            else {
            }
        }, (error) => { console.log(error); });
    }
    onChooseCustomer(customer) {
        this.viewCtrl.dismiss(customer);
    }
    ionViewWillEnter() {
        this.customerService.getCustomers()
            .subscribe((data) => {
            this.customers = data;
            console.log(this.customers);
        });
    }
    onClose() {
        this.viewCtrl.dismiss();
    }
};
CustomerSearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-customer-search',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\pages\searches\customer-search\customer-search.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pesquisa de Cliente</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar placeholder="Filtro de Cliente" (ionInput)="onFilterCustomer($event)"></ion-searchbar>\n    <ion-list >\n      <ion-list-header>\n        Clientes\n      </ion-list-header>    \n         \n      <ion-item *ngFor="let customer of customers" #item (click)="onChooseCustomer(customer)">\n        <h2>{{customer.name}}</h2>\n        <p>{{customer.customerID}}</p>        \n      </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer>\n  <button ion-button block outline color="danger" (click)="onClose()">Cancelar</button>\n  \n</ion-footer>\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\pages\searches\customer-search\customer-search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_0__services_customer_service__["a" /* CustomerService */]])
], CustomerSearchPage);

//# sourceMappingURL=customer-search.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tab_order_detail_tab_order_detail__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sales_sales__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_order_detail_payment_order_detail_payment__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_order_detail_itens_order_detail_itens__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_order_detail_customer_order_detail_customer__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_order_detail_order_detail__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_order_order__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_searches_product_search_product_search__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_searches_customer_search_customer_search__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_edit_item_edit_item__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_walkthrough_walkthrough__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_product_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_auth_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_order_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_customer_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_data_change_data_change__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_counter_input_counter_input__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_customer_input_customer_input__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__directives_input_mask_directive__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_barcode_scanner__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_order_detail_customer_order_detail_customer__["a" /* OrderDetailCustomerPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_order_detail_itens_order_detail_itens__["a" /* OrderDetailItensPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_order_detail_payment_order_detail_payment__["a" /* OrderDetailPaymentPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_sales_sales__["a" /* SalesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tab_order_detail_tab_order_detail__["a" /* TabOrderDetailPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */],
            __WEBPACK_IMPORTED_MODULE_29__directives_input_mask_directive__["a" /* InputMask */],
            __WEBPACK_IMPORTED_MODULE_18__pages_searches_product_search_product_search__["a" /* ProductSearchPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_edit_item_edit_item__["a" /* EditItemPage */],
            __WEBPACK_IMPORTED_MODULE_27__components_counter_input_counter_input__["a" /* CounterInputComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_data_change_data_change__["a" /* DataChangeComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_customer_input_customer_input__["a" /* CustomerInputComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_searches_customer_search_customer_search__["a" /* CustomerSearchPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_order_detail_customer_order_detail_customer__["a" /* OrderDetailCustomerPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_order_detail_itens_order_detail_itens__["a" /* OrderDetailItensPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_order_detail_payment_order_detail_payment__["a" /* OrderDetailPaymentPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_sales_sales__["a" /* SalesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tab_order_detail_tab_order_detail__["a" /* TabOrderDetailPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_searches_product_search_product_search__["a" /* ProductSearchPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_edit_item_edit_item__["a" /* EditItemPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_searches_customer_search_customer_search__["a" /* CustomerSearchPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_23__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_22__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_24__services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_25__services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* LOCALE_ID */], useValue: 'pt-BR' },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_walkthrough_walkthrough__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_signin_signin__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_order_order__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sales_sales__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










let MyApp = class MyApp {
    constructor(platform, statusBar, splashScreen) {
        this.salesPage = __WEBPACK_IMPORTED_MODULE_4__pages_sales_sales__["a" /* SalesPage */];
        this.orderPage = __WEBPACK_IMPORTED_MODULE_3__pages_order_order__["a" /* OrderPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* SettingsPage */];
        this.signinPage = __WEBPACK_IMPORTED_MODULE_1__pages_signin_signin__["a" /* SigninPage */];
        this.isAuthenticated = false;
        platform.ready().then(() => {
            __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.initializeApp({
                apiKey: "AIzaSyA90BJz9Fg6CtkaZpbPYNmCdi44wZ6tzQQ",
                authDomain: "tdapp-53fb0.firebaseapp.com",
                databaseURL: "https://tdapp-53fb0.firebaseio.com",
                projectId: "tdapp-53fb0",
                storageBucket: "tdapp-53fb0.appspot.com",
                messagingSenderId: "159256520588"
            });
            __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.auth().onAuthStateChanged(user => {
                if (user) {
                    this.isAuthenticated = true;
                    this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_sales_sales__["a" /* SalesPage */];
                }
                else {
                    this.isAuthenticated = false;
                    this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */];
                }
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    openPage(page) {
        this.rootPage = page;
    }
};
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\app\app.html"*/'<ion-menu [content]="nav">\n    <ion-header>     \n           \n        <ion-toolbar>  \n            <ion-title>Menu Pricipal</ion-title>        \n        </ion-toolbar>\n        \n        <ion-item>\n            <ion-avatar>                            \n                <img src="assets/images/avatar.jpg">\n            </ion-avatar>\n            <ion-note item-end>\n                <h3>Olá Rafael!</h3>\n                <p>rafael.reis@grupotodimo.com.br</p>                \n            </ion-note>                    \n        </ion-item>   \n\n    </ion-header>\n    <ion-content>\n        <ion-list>            \n            <button ion-item (click)="openPage(signinPage)" menuClose>               \n                Login\n                <ion-icon name="log-in" item-left></ion-icon>                \n            </button>\n            <button ion-item (click)="openPage(salesPage)" menuClose>\n                Ofertas\n                <ion-icon name="logo-usd" item-left></ion-icon>\n                <ion-badge id="notifications-badge" color="danger">5</ion-badge>\n            </button>\n            <button ion-item (click)="openPage(orderPage)" menuClose>\n                Orçamento\n                <ion-icon name="pricetags" item-left></ion-icon>\n            </button>\n            <button ion-item (click)="openPage(settingsPage)" menuClose>\n                Configuração\n                <ion-icon name="settings" item-left></ion-icon>\n            </button>            \n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #nav></ion-nav>\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_payment_model__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_seller_model__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_order_model__ = __webpack_require__(742);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let OrderService = class OrderService {
    constructor(alertCrtl, customerService) {
        this.alertCrtl = alertCrtl;
        this.customerService = customerService;
        this.orders = [];
        this.order = null;
        this.itemIndex = 1;
        this.totalItens = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["w" /* EventEmitter */]();
        this.totalPayment = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["w" /* EventEmitter */]();
    }
    getNewOrderNumber() {
        return '000001';
    }
    newOrder() {
        console.log('New order');
        let orderNumber = this.getNewOrderNumber();
        this.order = new __WEBPACK_IMPORTED_MODULE_5__models_order_model__["a" /* OrderModel */](orderNumber);
        this.order.seller = new __WEBPACK_IMPORTED_MODULE_4__models_seller_model__["a" /* SellerModel */]('01', 'VENDEDOR PADRÃO');
        this.itemIndex = 1;
        this.customerService.getDefaultCustomer()
            .subscribe((data) => {
            this.order.customer = data;
            //make a copy of  address's curtomers
            this.order.deliveyAddress = Object.assign({}, this.order.customer.address);
        });
    }
    getLastItemIndex() {
        return this.itemIndex++;
    }
    addItem(item) {
        let totalItem = this.getTotalOfItem(item.product.code);
        console.log(totalItem);
        if (totalItem > 1) {
            const alert = this.alertCrtl.create({
                title: 'Erro',
                message: 'Já existe este produto no orçamento',
                buttons: ['Ok']
            });
            alert.present();
            return;
        }
        else if (totalItem == 1) {
            let i = this.getItemByCode(item.product.code);
            item.whereToTake = i.whereToTake == 'Loja' ? 'Deposito' : 'Loja';
        }
        item.itemId = this.getLastItemIndex();
        this.order.itens.push(item);
        this.order.remainingValue = this.order.netTotal;
        this.order.payments = [];
        this.totalPayment.emit(this.order.payments.length);
        this.totalItens.emit(this.order.itens.length);
    }
    updateItem(item, index) {
        this.order.itens[index] = item;
        this.order.remainingValue = this.order.netTotal;
        this.order.payments = [];
        this.totalPayment.emit(this.order.payments.length);
    }
    removeItem(index) {
        this.order.itens.splice(index, 1);
        this.order.remainingValue = this.order.netTotal;
        this.order.payments = [];
        this.totalPayment.emit(this.order.payments.length);
        this.totalItens.emit(this.order.itens.length);
    }
    addPayment(type, value, instalment = 1) {
        if (value <= 0 || value > this.order.remainingValue) {
            const alert = this.alertCrtl.create({
                title: 'Erro',
                message: 'Valor digitado maior que o valor restante.',
                buttons: ['Ok']
            });
            alert.present();
            return;
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_0__models_payment_model__["b" /* PaymentType */].Nenhum) {
            const alert = this.alertCrtl.create({
                title: 'Erro',
                message: 'Por favor, selecione uma condição de pagamento',
                buttons: ['Ok']
            });
            alert.present();
            return;
        }
        else {
            let ret;
            if (type == __WEBPACK_IMPORTED_MODULE_0__models_payment_model__["b" /* PaymentType */].Dinheiro) {
                ret = this.order.payments.find((data) => {
                    return data.type == type;
                });
                if (ret) {
                    const alert = this.alertCrtl.create({
                        title: 'Erro',
                        message: 'Já existe parcela em dinheiro',
                        buttons: ['Ok']
                    });
                    alert.present();
                    return;
                }
            }
            this.order.payments.push(new __WEBPACK_IMPORTED_MODULE_0__models_payment_model__["a" /* PaymentModel */](type, value, instalment));
            this.order.remainingValue = parseFloat((this.order.remainingValue - value).toFixed(2));
            this.totalPayment.emit(this.order.payments.length);
        }
    }
    removePayment(index) {
        let remain = this.order.remainingValue;
        let value = this.order.payments[index].value;
        let sum = Number(remain) + Number(value);
        this.order.remainingValue = sum;
        this.order.payments.splice(index, 1);
        this.totalPayment.emit(this.order.payments.length);
    }
    getTotalOfItem(code) {
        let itens;
        itens = this.order.itens.filter((item) => {
            return item.product.code == code;
        });
        return itens.length;
    }
    getItemByCode(code) {
        return this.order.itens.find((item) => {
            return item.product.code == code;
        });
    }
    getOrder() {
        return this.order;
    }
    setCostumer(customer) {
        this.order.customer = customer;
        this.order.deliveyAddress = Object.assign({}, this.order.customer.address);
    }
};
OrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1__customer_service__["a" /* CustomerService */]])
], OrderService);

//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SellerModel {
    constructor(sellerId, name) {
        this.sellerId = sellerId;
        this.name = name;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SellerModel;

//# sourceMappingURL=seller.model.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OrderType */
var OrderType;
(function (OrderType) {
    OrderType[OrderType["internal"] = 0] = "internal";
    OrderType[OrderType["pool"] = 1] = "pool";
    OrderType[OrderType["negociation"] = 2] = "negociation";
})(OrderType || (OrderType = {}));
class OrderModel {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.discount = 0;
        this.orderType = OrderType.negociation;
        this.deliveyAddress = null;
        this.itens = [];
        ;
        this.payments = [];
        this.customer = null;
        this.seller = null;
        this.date = new Date();
        this.remainingValue = 0;
    }
    get grossTotal() {
        return this.itens
            .reduce((sum, item) => sum + item.total, 0);
    }
    get netTotal() {
        return parseFloat((this.grossTotal - this.discount - this.discountPROMO).toFixed(2));
    }
    get discountPROMO() {
        return this.itens
            .reduce((sum, item) => sum + item.discountPromo, 0);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OrderModel;

//# sourceMappingURL=order.model.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ItemModel {
    constructor(itemId, product, quantity, discountPromo, price, whereToTake) {
        this.itemId = itemId;
        this.product = product;
        this.quantity = quantity;
        this.discountPromo = discountPromo;
        this.price = price;
        this.whereToTake = whereToTake;
    }
    get total() {
        return (this.quantity * this.price) - this.discountPromo;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ItemModel;

//# sourceMappingURL=item.model.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let HomePage = class HomePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary" text-center>\n    <img src="" alt="">\n    <ion-title >\n        <img style="width: 100px; height: 30px;"src="./assets/images/logo_cliente.jpg">\n    </ion-title>\n  </ion-navbar>\n  <div text-center>\n    <h2>HOME</h2>\n  </div>\n  \n</ion-header>\n\n\n\n<ion-content padding>\n    \n    \n</ion-content>\n\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataChangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let DataChangeComponent = class DataChangeComponent {
    constructor() {
    }
    ngOnInit() {
        this.newDate = this.startDate;
        this.convertDateToString(this.newDate);
    }
    previousMonths() {
        this.newDate.setMonth(this.newDate.getMonth() - 1);
        this.convertDateToString(this.newDate);
    }
    nextsMonths() {
        this.newDate.setMonth(this.newDate.getMonth() + 1);
        this.convertDateToString(this.newDate);
    }
    convertDateToString(date) {
        this.stringDate = this.getMonthName(date) + ' - ' + date.getFullYear();
    }
    getMonthName(date) {
        let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
        return months[date.getMonth()];
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Date)
], DataChangeComponent.prototype, "startDate", void 0);
DataChangeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'data-change',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\components\data-change\data-change.html"*/'<ion-row text-center> \n  <ion-col width-10>\n       <button ion-button clear round color="button-alt" (click)="previousMonths()">\n           <ion-icon name="arrow-dropleft-circle"></ion-icon>\n       </button>       \n  </ion-col>\n  <ion-col width-75 >\n      <h4 class="date">{{stringDate}} </h4>\n  </ion-col>\n  <ion-col width-10>\n      <button ion-button clear round color="button-alt" (click)="nextsMonths()">\n          <ion-icon name="arrow-dropright-circle"></ion-icon>\n      </button>\n  </ion-col>\n</ion-row>\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\components\data-change\data-change.html"*/
    }),
    __metadata("design:paramtypes", [])
], DataChangeComponent);

//# sourceMappingURL=data-change.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let CounterInputComponent = class CounterInputComponent {
    constructor() {
        this.valueChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.newValue = 1;
    }
    onIncrease() {
        this.newValue++;
        this.valueChanged.emit({ newValue: this.newValue });
        this.oldValue = this.newValue;
    }
    onDecrease() {
        if (this.newValue <= 1) {
            this.newValue = 1;
        }
        else {
            this.newValue--;
        }
        if (this.oldValue != this.newValue) {
            this.valueChanged.emit({ newValue: this.newValue });
            this.oldValue = this.newValue;
        }
    }
    onBlurQuantity() {
        if (this.newValue < 1) {
            this.newValue = 1;
        }
        if (this.oldValue != this.newValue) {
            this.valueChanged.emit({ newValue: this.newValue });
            this.oldValue = this.newValue;
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CounterInputComponent.prototype, "description", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], CounterInputComponent.prototype, "valueChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], CounterInputComponent.prototype, "newValue", void 0);
CounterInputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'counter-input',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\components\counter-input\counter-input.html"*/'<ion-list padding>\n        <ion-item>\n          <ion-label color="primary">{{description}}:</ion-label>\n          <ion-input type="number" [(ngModel)]="newValue" placeholder={{description}} (blur)="onBlurQuantity()"  ng-pattern="/^[0-9]+(\.[0-9]{1,2})?$/" step="0.01"> </ion-input>        \n        </ion-item>\n        <ion-item text-center >\n        <button ion-button round small color="button-alt" (click)="onIncrease()">\n                <ion-icon name="add"></ion-icon>\n        </button>\n        <button ion-button round small color="button-alt" (click)="onDecrease()">\n                <ion-icon name="remove"></ion-icon>\n        </button>      \n    </ion-item>    \n</ion-list>\n'/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\components\counter-input\counter-input.html"*/,
    }),
    __metadata("design:paramtypes", [])
], CounterInputComponent);

//# sourceMappingURL=counter-input.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_customer_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_searches_customer_search_customer_search__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let CustomerInputComponent = class CustomerInputComponent {
    constructor(customeService, modelCrtl) {
        this.customeService = customeService;
        this.modelCrtl = modelCrtl;
        this.onCustomerChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
    }
    ngOnInit() {
        console.log('customeroninit');
        this.customeService.getDefaultCustomer()
            .subscribe((data) => {
            this.customer = data;
            this.onCustomerChange.emit(this.customer);
        });
    }
    onSearchCustomer() {
        const modal = this.modelCrtl.create(__WEBPACK_IMPORTED_MODULE_3__pages_searches_customer_search_customer_search__["a" /* CustomerSearchPage */]);
        modal.present();
        modal.onDidDismiss((data) => {
            if (data) {
                this.customer = data;
                this.onCustomerChange.emit(this.customer);
            }
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], CustomerInputComponent.prototype, "onCustomerChange", void 0);
CustomerInputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'customer-input',template:/*ion-inline-start:"C:\Projetos IONIC2\TDapp\src\components\customer-input\customer-input.html"*/'\n \n <ion-item class="background">\n    <ion-note item-start  class="icon-customer">\n       \n        <ion-col><ion-icon name="person" ></ion-icon></ion-col> \n    </ion-note>    \n  \n    <h5 class="customer">{{customer?.name}}</h5>    \n    <p>{{customer?.customerID}}</p>\n    <ion-note item-end>\n        <button color="button-alt" class = "button" ion-button icon-only (click)="onSearchCustomer();">\n            <ion-icon name="search"></ion-icon>\n        \n       </button>\n    </ion-note>\n  </ion-item>  \n '/*ion-inline-end:"C:\Projetos IONIC2\TDapp\src\components\customer-input\customer-input.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_customer_service__["a" /* CustomerService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */]])
], CustomerInputComponent);

//# sourceMappingURL=customer-input.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputMask; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let InputMask = class InputMask {
    constructor(model, pattern) {
        this.model = model;
        this.pattern = pattern;
    }
    onInputChange(event) {
        let value = event.target.value, pattern = this.pattern;
        if (event.keyIdentifier === 'U+0008' || event.keyCode === 8 || event.key === 'Backspace') {
            if (value.length) {
                //remove all trailing formatting then delete character
                while (pattern[value.length] && pattern[value.length] !== '*') {
                    value = value.substring(0, value.length - 1);
                }
                //remove all leading formatting to restore placeholder
                if (pattern.substring(0, value.length).indexOf('*') < 0) {
                    value = value.substring(0, value.length - 1);
                }
            }
        }
        else {
            let maskIndex = value.length, formatted = '';
            if (value.length === 1 && value !== pattern[0]) {
                //apply leading formatting
                maskIndex = 0;
                while (maskIndex < pattern.length && pattern[maskIndex] !== '*') {
                    formatted += pattern[maskIndex];
                    maskIndex++;
                }
            }
            formatted += value;
            if (maskIndex < pattern.length) {
                //apply trailing formatting
                while (pattern[maskIndex] !== '*') {
                    formatted += pattern[maskIndex];
                    maskIndex++;
                }
            }
            value = formatted;
        }
        //this.model.update.emit(value);
        event.target.value = value;
    }
};
InputMask = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[mask]',
        host: {
            '(keyup)': 'onInputChange($event)'
        },
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgModel */]]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Attribute */])('mask')),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgModel */], String])
], InputMask);

//# sourceMappingURL=input-mask.directive.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let AuthService = class AuthService {
    constructor() {
        this.isAuthenticated = false;
    }
    singup(email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
    }
    signin(email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    }
    signinWhitgGoogle() {
        let googleProvide = new __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth.GoogleAuthProvider();
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithRedirect(googleProvide);
    }
    signinWithFacebook() {
        let facebookProvide = new __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth.FacebookAuthProvider();
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithRedirect(facebookProvide).then(function () {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().getRedirectResult();
        });
    }
    logout() {
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    }
    getActiveUser() {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser;
    }
};
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map