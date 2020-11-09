(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\wine-store\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() {
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, consts: [["id", "main"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Home\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#main[_ngcontent-%COMP%] {\n  background: url('bg.jpg');\n  height: 150%;\n}\n\ndiv[_ngcontent-%COMP%] {\n  background: url('bg.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQWdEO0VBQ2hELFlBQVk7QUFDaEI7O0FBRUE7RUFDSSx5QkFBZ0Q7QUFDcEQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbntcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9hc2NvbmkvYmcuanBnXCIpO1xyXG4gICAgaGVpZ2h0OiAxNTAlO1xyXG59XHJcblxyXG5kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYXNjb25pL2JnLmpwZ1wiKTtcclxufSBcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2pWA":
/*!***************************************************************************!*\
  !*** ./src/app/pages/products/single-product/single-product.component.ts ***!
  \***************************************************************************/
/*! exports provided: SingleProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProductComponent", function() { return SingleProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/libs/services/products.service */ "gulj");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");





class SingleProductComponent {
    constructor(router, _productService, route) {
        this.router = router;
        this._productService = _productService;
        this.route = route;
    }
    ngOnInit() {
        this.getSingleProduct();
    }
    getSingleProduct() {
        const id = this.route.snapshot.paramMap.get("id");
        this._productService.getSingleProduct(id).subscribe((singleProduct) => {
            this.singleProduct = singleProduct;
        });
    }
    addToCart() {
        const id = this.route.snapshot.paramMap.get("id");
        this._productService.getSingleProduct(id).subscribe((singleProduct) => {
            this.singleProduct = singleProduct;
            this._productService.addToCart(id);
        });
    }
    goBack() {
        this.router.navigateByUrl("/products");
    }
}
SingleProductComponent.ɵfac = function SingleProductComponent_Factory(t) { return new (t || SingleProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
SingleProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleProductComponent, selectors: [["app-single-product"]], decls: 13, vars: 3, consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "card"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "card-header"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["alt", "single-product-img", 3, "src"], ["fxFill", "", "fxLayout", "row", "fxLayoutAlign", "space-between center"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "btn", "btn-lg", "badge-success", "m-1", 3, "click"], [1, "fas", "fa-cart-plus"], [1, "btn", "btn-lg", "badge-info", "m-1", 3, "click"]], template: function SingleProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleProductComponent_Template_button_click_9_listener() { return ctx.addToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleProductComponent_Template_button_click_11_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.singleProduct == null ? null : ctx.singleProduct.productName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Ksh. ", ctx.singleProduct == null ? null : ctx.singleProduct.price, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.singleProduct == null ? null : ctx.singleProduct.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["FlexFillDirective"]], styles: ["img[_ngcontent-%COMP%] {\n  height: 40%;\n  width: 50%;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin: 0px 10%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  font-size: 15px !important;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  font-weight: 600;\n  text-align: center;\n  font-size: 15px;\n  width: 100%;\n  margin: 0;\n}\n\n.description[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvc2luZ2xlLXByb2R1Y3Qvc2luZ2xlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsVUFBVTtBQUNkOztBQUVBO0VBQ0ksZUFBZTtBQUNuQjs7QUFFQTtFQUNJLFdBQVc7RUFDWCxTQUFTO0VBQ1QsMEJBQTBCO0FBQzlCOztBQUVBO0VBQ0kseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0FBQ2I7O0FBRUE7RUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvc2luZ2xlLXByb2R1Y3Qvc2luZ2xlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgbWFyZ2luOiAwcHggMTAlO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb257XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-product',
                templateUrl: './single-product.component.html',
                styleUrls: ['./single-product.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "9hOt":
/*!**************************************************************!*\
  !*** ./src/app/admin/new-products/new-products.component.ts ***!
  \**************************************************************/
/*! exports provided: NewProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductsComponent", function() { return NewProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "4USb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/libs/services/products.service */ "gulj");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");









class NewProductsComponent {
    constructor(fb, productsService, storage, dialogRef, toastr) {
        this.fb = fb;
        this.productsService = productsService;
        this.storage = storage;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.productsForm = this.fb.group({
            productId: [''],
            productName: [""],
            category: [""],
            imgUrl: [""],
            price: [""],
            description: [""]
        });
        this.n = Date.now();
        this.filePath = `productImages/${this.n}`;
        this.fileRef = this.storage.ref(this.filePath);
        this.selectedImg = "../../../assets/images/no-preview-available.png";
        this.checkImgUpload = false;
    }
    ngOnInit() { }
    //CHECK IF IMAGE HAS ALREADY UPLOADED SO AS TO SAVE
    checker() {
        this.selectedImg == "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" ||
            this.selectedImg == "../../../assets/images/no-preview-available.png" ?
            this.checkImgUpload = false : this.checkImgUpload = true;
    }
    //CREATE NEW UNIQUE ID
    getId() {
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
    }
    onSubmit() {
        this.getId();
        this.productsForm.controls["productId"].setValue(this.id);
        this.product = this.productsForm.value;
        this.productsService.addNewProduct(this.product);
        this.showSuccess(this.product.productName);
        this.closeDialogue();
    }
    //UPLOAD IMAGE TO FIREBASE, RETRIEVE URL AND USE IT
    onFileSelected(event) {
        this.selectedImg = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
        this.productsService.uploadSingleFile(event, this.n).subscribe({
            complete: () => {
                this.downloadURL = this.fileRef.getDownloadURL();
                this.downloadURL.subscribe(url => {
                    if (url) {
                        this.fileUrl = url;
                        this.productsForm.patchValue({ imgUrl: this.fileUrl });
                        this.product = this.productsForm.value;
                        this.selectedImg = this.fileUrl;
                        this.checker();
                    }
                });
            }
        });
    }
    closeDialogue() {
        this.dialogRef.close();
    }
    showSuccess(product) {
        this.toastr.success(`${product} saved.`);
    }
    cancel() {
        this.productsForm.reset();
        this.closeDialogue();
    }
}
NewProductsComponent.ɵfac = function NewProductsComponent_Factory(t) { return new (t || NewProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
NewProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewProductsComponent, selectors: [["app-new-products"]], decls: 35, vars: 3, consts: [[1, "card-body"], ["fxLayout", "column", "fxLayoutAlign", "center", 3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["type", "text", "formControlName", "productName", "required", ""], ["formControlName", "category", "required", ""], ["type", "file", "required", "", 3, "change"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [3, "src"], ["type", "number", "formControlName", "price", "required", ""], ["maxlength", "255", "formControlName", "description", "required", ""], ["fxLayout", "row", "fxLayoutAlign", "space-evenly center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "btn", "btn-danger", 3, "click"]], template: function NewProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewProductsComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Product Category:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "White");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Semi-dry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Product Image:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NewProductsComponent_Template_input_change_19_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Product Price(Ksh):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewProductsComponent_Template_button_click_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewProductsComponent_Template_button_click_33_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.selectedImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.productsForm.valid || !ctx.checkImgUpload);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], styles: ["input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 400px;\n  background-color: aliceblue;\n  margin: 5px;\n  border: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-top: 20px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbmV3LXByb2R1Y3RzL25ldy1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0FBQ2hCOztBQUVBO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNJLFlBQVk7RUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbmV3LXByb2R1Y3RzL25ldy1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LCBzZWxlY3QsIHRleHRhcmVhe1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-products',
                templateUrl: './new-products.component.html',
                styleUrls: ['./new-products.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: "sports-store-c1ca4",
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.API_ID,
        measurementId: process.env.MEASUREMENT_ID
    }
};


/***/ }),

/***/ "NPQ2":
/*!*******************************************************************!*\
  !*** ./src/app/pages/products/all-products/products.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/libs/services/products.service */ "gulj");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");







const _c0 = function (a1) { return ["/products", a1]; };
function ProductsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_div_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const singleProduct_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addToCart(singleProduct_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const singleProduct_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, singleProduct_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", singleProduct_r1.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, singleProduct_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", singleProduct_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ksh. ", singleProduct_r1.price, " ");
} }
class ProductsComponent {
    constructor(_productsService, dialog) {
        this._productsService = _productsService;
        this.dialog = dialog;
        this.singleProduct = this._productsService.singleProduct;
        this.cart = this._productsService.cart;
    }
    ngOnInit() {
        this.getAllProducts();
    }
    getAllProducts() {
        this._productsService.getAllProducts().subscribe(products => {
            this.products = products.map(e => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
        });
    }
    //ADD ITEM TO CART, OPEN MODAL FOR THE ITEM
    addToCart(id) {
        this._productsService.addToCart(id);
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 3, vars: 1, consts: [[1, "products-body", "d-flex", "align-items-center", "justify-content-center"], [1, "container", "row", "d-flex", "align-items-center", "justify-content-center"], ["class", "card col-xl-3 col-lg-4 col-md-6 col-sm-12", 4, "ngFor", "ngForOf"], [1, "card", "col-xl-3", "col-lg-4", "col-md-6", "col-sm-12"], ["routerLinkActive", "router-link-active", 1, "card-header", 3, "routerLink"], ["routerLinkActive", "router-link-active", 1, "card-body", "d-flex", "align-items-center", "justify-content-center", 3, "routerLink"], ["alt", "product-image", 3, "src"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "card-footer"], [1, "btn", "btn-sm", "badge-success", 3, "click"], [1, "fas", "fa-cart-plus"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsComponent_div_2_Template, 12, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  margin: 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 10px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0;\n  cursor: pointer;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin: 2px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #F7F7F7;\n  cursor: pointer;\n  font-weight: 700;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 8px;\n  padding-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvYWxsLXByb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVTtFQUNWLGFBQVk7RUFDWixTQUFTO0FBQ2I7O0FBQ0E7RUFDSSxVQUFVO0VBQ1YsWUFBWTtBQUVoQjs7QUFFQTtFQUNJLFVBQVU7RUFDVixlQUFlO0FBQ25COztBQUVBO0VBQ0ksV0FBVztBQUNmOztBQUVBO0VBQ0kseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDSSxlQUFlO0FBQ25COztBQUVBO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL2FsbC1wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmNhcmQtYm9keXtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbml7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss']
            }]
    }], function () { return [{ type: src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Neos":
/*!******************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.ts ***!
  \******************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/checkout-modal/checkout-modal.component */ "vhUM");
/* harmony import */ var src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/libs/services/products.service */ "gulj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");











function CheckoutComponent_div_0_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cartItem_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", cartItem_r4[0].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cartItem_r4[0].productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: Ksh.", cartItem_r4[0].price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Qnty: ", cartItem_r4[1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: Ksh.", cartItem_r4[0].price * cartItem_r4[1], "");
} }
function CheckoutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CheckoutComponent_div_0_mat_list_item_5_Template, 12, 5, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.editOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.submitOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Submit Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.cancelOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancel Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.displayCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Grand Total: ", ctx_r0.grandTotal, "");
} }
const _c0 = function () { return ["/products"]; };
function CheckoutComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nothing to checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go to products page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class CheckoutComponent {
    constructor(productsService, router, dialog) {
        this.productsService = productsService;
        this.router = router;
        this.dialog = dialog;
        this.displayCart = [];
        this.grandTotalArray = [];
    }
    ngOnInit() {
        this.productsService.cartSource.subscribe(cart => {
            this.cart = cart;
            this.calculateCart(this.cart);
        });
    }
    calculateCart(cart) {
        let counter = {};
        cart.forEach(function (obj) {
            var key = JSON.stringify(obj);
            counter[key] = (counter[key] || 0) + 1;
        });
        for (const [key, value] of Object.entries(counter)) {
            let singleProduct = JSON.parse(key);
            this.displayCart = [...this.displayCart, [singleProduct, +value]];
            let total = singleProduct.price * (+value);
            this.grandTotalArray = [...this.grandTotalArray, total];
        }
        this.grandTotal = this.grandTotalArray.reduce((a, b) => a + b, 0);
    }
    editOrder() {
        this.router.navigateByUrl("/cart");
    }
    cancelOrder() {
        if (confirm("Are you sure you want to cancel the order?")) {
            this.productsService.clearCart();
            this.router.navigateByUrl("/");
        }
        else {
            this.router.navigateByUrl("/checkout");
        }
    }
    submitOrder() {
        const dialogRef = this.dialog.open(src_app_components_checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_1__["CheckoutModalComponent"], {
            width: '550px',
            data: { products: this.cart, total: this.grandTotal, cartWithNumber: this.displayCart }
        });
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 3, vars: 2, consts: [["class", "p-5", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "p-5"], [1, "text-center"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "m-3"], [1, "btn", "btn-warning", "text-center", "font-weight-bolder"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "text-center"], [1, "btn", "btn-outline-info", "m-1", 3, "click"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "btn", "btn-outline-danger", "m-1", 3, "click"], ["matListAvatar", "", "alt", "item-image", 3, "src"], ["matLine", ""], [1, "font-weight-bold", "font-italic"], ["routerLinkActive", "router-link-active", 1, "btn", "btn-primary", 3, "routerLink"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CheckoutComponent_div_0_Template, 16, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_ng_template_1_Template, 5, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart && (ctx.cart == null ? null : ctx.cart.length))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatList"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatLine"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["button[_ngcontent-%COMP%] {\n  width: 200px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcclxuICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkout',
                templateUrl: './checkout.component.html',
                styleUrls: ['./checkout.component.scss']
            }]
    }], function () { return [{ type: src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _libs_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/services/products.service */ "gulj");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(service) {
        this.service = service;
        this.title = 'sport-store';
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_libs_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _libs_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "WzN+":
/*!*************************************************!*\
  !*** ./src/app/libs/services/orders.service.ts ***!
  \*************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.service */ "gulj");




class OrdersService {
    constructor(firestore, productService) {
        this.firestore = firestore;
        this.productService = productService;
    }
    submitOrder(order) {
        this.productService.submitCart();
        return this.firestore.collection("orders").add(order);
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"])); };
OrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/error-page/error-page.component */ "atk4");
/* harmony import */ var _pages_products_all_products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/products/all-products/products.component */ "NPQ2");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "kzCK");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/cart/cart.component */ "sHrM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _admin_new_products_new_products_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/new-products/new-products.component */ "9hOt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ "o8Ft");
/* harmony import */ var _pages_products_single_product_single_product_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/products/single-product/single-product.component */ "2pWA");
/* harmony import */ var _components_cart_badge_cart_badge_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/cart-badge/cart-badge.component */ "we6M");
/* harmony import */ var _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/checkout/checkout.component */ "Neos");
/* harmony import */ var _components_checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/checkout-modal/checkout-modal.component */ "vhUM");




































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot({ closeButton: true }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCollapseModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_27__["AngularFireStorageModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_23__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_24__["AngularFireDatabaseModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__["ErrorPageComponent"],
        _pages_products_all_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
        _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponent"],
        _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"],
        _admin_new_products_new_products_component__WEBPACK_IMPORTED_MODULE_25__["NewProductsComponent"],
        _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"],
        _pages_products_single_product_single_product_component__WEBPACK_IMPORTED_MODULE_29__["SingleProductComponent"],
        _components_cart_badge_cart_badge_component__WEBPACK_IMPORTED_MODULE_30__["CartBadgeComponent"],
        _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_31__["CheckoutComponent"],
        _components_checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_32__["CheckoutModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCollapseModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_27__["AngularFireStorageModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_23__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_24__["AngularFireDatabaseModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__["ErrorPageComponent"],
                    _pages_products_all_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
                    _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponent"],
                    _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"],
                    _admin_new_products_new_products_component__WEBPACK_IMPORTED_MODULE_25__["NewProductsComponent"],
                    _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"],
                    _pages_products_single_product_single_product_component__WEBPACK_IMPORTED_MODULE_29__["SingleProductComponent"],
                    _components_cart_badge_cart_badge_component__WEBPACK_IMPORTED_MODULE_30__["CartBadgeComponent"],
                    _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_31__["CheckoutComponent"],
                    _components_checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_32__["CheckoutModalComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot({ closeButton: true }),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCollapseModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_27__["AngularFireStorageModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_23__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebaseConfig),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_24__["AngularFireDatabaseModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "atk4":
/*!***************************************************************!*\
  !*** ./src/app/components/error-page/error-page.component.ts ***!
  \***************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/"]; };
class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 7, vars: 2, consts: [[1, "container"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "card"], [1, "card-body"], ["src", "../../../assets/images/error-404.jpg", "alt", "Error 404 Page not found"], ["routerLinkActive", "router-link-active", 1, "btn", "btn-info", 3, "routerLink"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Return to home page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".card[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci1wYWdlL2Vycm9yLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0FBQ2pCOztBQUVBO0VBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lcnJvci1wYWdlL2Vycm9yLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-page',
                templateUrl: './error-page.component.html',
                styleUrls: ['./error-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gulj":
/*!***************************************************!*\
  !*** ./src/app/libs/services/products.service.ts ***!
  \***************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");








class ProductsService {
    constructor(firestore, fireStorage, toastr) {
        this.firestore = firestore;
        this.fireStorage = fireStorage;
        this.toastr = toastr;
        this.singleProduct = undefined;
        this.cart = [];
        this.singleProductSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.cartSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.currentCart = this.cartSource.asObservable();
        this.currentSingleProduct = this.singleProductSource.asObservable();
    }
    ngOnInit() { }
    //ADD ITEM TO CART
    addToCart(id) {
        this.getSingleProduct(id).subscribe((singleProduct) => {
            if (this.singleProduct !== null || this.singleProduct !== undefined) {
                this.singleProduct = singleProduct;
                this.updateSingleProduct(this.singleProduct);
                this.toastr.success(`${this.singleProduct.productName} added to cart`);
                this.cart = [...this.cart, this.singleProduct];
                this.updateCart(this.cart);
            }
        });
    }
    //CLEAR CART
    clearCart() {
        this.cart = [];
        this.updateCart(this.cart);
        this.toastr.error("Cart has been cleared");
    }
    //CLEAR CART AFTER SUBMIT
    submitCart() {
        this.cart = [];
        this.updateCart(this.cart);
    }
    //ADD ITEM BASED ON PRODUCT ID QUERY
    addOneItemToCart(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const query = yield this.firestore.firestore.collection("products").where("productId", "==", id).get();
            if (!query.empty) {
                const snapshot = query.docs[0];
                const data = snapshot.data();
                this.singleProductFromQuery = data;
                this.toastr.success(`One more ${this.singleProductFromQuery.productName} added to cart.`);
                this.cart = [...this.cart, this.singleProductFromQuery];
                this.updateCart(this.cart);
            }
            else {
                console.error("No item added");
            }
        });
    }
    //REMOVE ITEM BASED ON PRODUCT ID QUERY
    removeOneItemFromCart(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const query = yield this.firestore.firestore.collection("products").where("productId", "==", id).get();
            if (!query.empty) {
                const snapshot = query.docs[0];
                const data = snapshot.data();
                this.singleProductFromQuery = data;
                this.toastr.warning(`One ${this.singleProductFromQuery.productName} removed from cart.`);
                let index = this.cart.findIndex(item => item.productId == this.singleProductFromQuery.productId);
                this.cart.splice(index, 1);
                this.updateCart(this.cart);
            }
            else {
                console.error("No item removed");
            }
        });
    }
    //UPDATE CART AS OBSERVABLE
    updateCart(cart) {
        this.cartSource.next(cart);
    }
    //UPDATE SINGLE PRODUCT AS OBSERVABLE
    updateSingleProduct(singleProduct) {
        this.singleProductSource.next(singleProduct);
    }
    //CHECK ERRORS WITH HTTP CALLS
    handleError(err) {
        let errorMessage = "";
        //check if error is on the client side
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        }
        else {
            //else error is server side
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
    //GET ALL PRODUCTS
    getAllProducts() {
        return this.firestore.collection("products").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //GET SINGLE ITEM VIA ID
    getSingleProduct(id) {
        return this.firestore.collection("products").doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //ADD NEW PRODUCT TO FIREBASE
    addNewProduct(product) {
        return this.firestore.collection("products").add(product);
    }
    //UPLOAD FUNCTION
    uploadSingleFile(event, n) {
        const file = event.target.files[0];
        const task = this.fireStorage.upload(`productImages/${n}`, file);
        return task.snapshotChanges();
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _cart_badge_cart_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart-badge/cart-badge.component */ "we6M");





class NavbarComponent {
    constructor() {
        this.isMenuCollapsed = true;
    }
    ngOnInit() { }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 13, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "navbar-brand", 3, "routerLink"], ["src", "../../../assets/asconi/wine-logo.jpg", "alt", "logo"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "navbar-nav", "ml-auto"], [1, "nav-item", "active"], [1, "nav-link", 3, "routerLink", "click"], [1, "nav-item"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Wine Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() { return ctx.isMenuCollapsed = !ctx.isMenuCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u2630 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_9_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-cart-badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/products");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"], _cart_badge_cart_badge_component__WEBPACK_IMPORTED_MODULE_3__["CartBadgeComponent"]], styles: ["nav[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  font-weight: 500;\n  color: white !important;\n}\n\napp-cart-badge[_ngcontent-%COMP%] {\n  padding: 0;\n  cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n@media only screen and (max-width: 400px) {\n  .navbar-toggler[_ngcontent-%COMP%] {\n    color: black !important;\n  }\n  nav[_ngcontent-%COMP%] {\n    background-color: transparent !important;\n    font-weight: 500;\n    color: black !important;\n  }\n  a[_ngcontent-%COMP%] {\n    color: black !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7RUFDSSxVQUFVO0VBQ1YsZUFBZTtBQUNuQjs7QUFFQTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0VBQ0k7SUFDSSx1QkFBdUI7RUFDN0I7RUFFRTtJQUNJLHdDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQTdCO0VBR0U7SUFDSSx1QkFBdUI7RUFEN0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuYXBwLWNhcnQtYmFkZ2V7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgICAgIFxyXG59XHJcblxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVye1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xyXG4gICAgLm5hdmJhci10b2dnbGVye1xyXG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIG5hdntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBhe1xyXG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kzCK":
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 2, vars: 0, template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about-us works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "o8Ft":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _new_products_new_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../new-products/new-products.component */ "9hOt");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");





class DashboardComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    addNewProduct() {
        const dialogRef = this.dialog.open(_new_products_new_products_component__WEBPACK_IMPORTED_MODULE_1__["NewProductsComponent"], {
            minWidth: "500px"
        });
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 6, vars: 0, consts: [["fxLayout", "column", "fxLayoutAlign", "center center"], [1, "title"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "card", 3, "click"], [1, "card-body"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_3_listener() { return ctx.addNewProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add New Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"]], styles: [".card[_ngcontent-%COMP%] {\n  margin: 20px;\n  background-color: green;\n  color: white;\n  width: 50%;\n  text-align: center;\n  cursor: pointer;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtBQUNuQjs7QUFHQTtFQUNJLGtCQUFrQjtBQUF0QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "sHrM":
/*!**********************************************!*\
  !*** ./src/app/pages/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/libs/services/products.service */ "gulj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");








function CartComponent_table_1_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Product Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_table_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14[0].productName, " ");
} }
function CartComponent_table_1_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_table_1_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_table_1_td_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const element_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.addOneItem(element_r15[0].productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_table_1_td_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const element_r15 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.removeOneItem(element_r15[0].productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r15[1]);
} }
function CartComponent_table_1_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Price Per Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_table_1_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19[0].price, " ");
} }
function CartComponent_table_1_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_table_1_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20[1] * element_r20[0].price, " ");
} }
function CartComponent_table_1_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function CartComponent_table_1_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
function CartComponent_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_table_1_th_2_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_table_1_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CartComponent_table_1_th_5_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_table_1_td_6_Template, 7, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CartComponent_table_1_th_8_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartComponent_table_1_td_9_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CartComponent_table_1_th_11_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CartComponent_table_1_td_12_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CartComponent_table_1_tr_13_Template, 1, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CartComponent_table_1_tr_14_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
} }
function CartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.checkout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Proceed to checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.checkout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.clearCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Clear Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: Ksh ", ctx_r1.grandTotal, "");
} }
const _c0 = function () { return ["/products"]; };
function CartComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No Products in cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go to products page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class CartComponent {
    constructor(productsService, router) {
        this.productsService = productsService;
        this.router = router;
        this.displayedColumns = ['productName', 'number', 'price', 'total'];
        this.displayCart = [];
        this.grandTotalArray = [];
    }
    ngOnInit() {
        this.productsService.currentCart.subscribe(cart => {
            this.cart = cart;
            this.calculateCart(this.cart);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.displayCart);
        });
    }
    calculateCart(cart) {
        let counter = {};
        cart.forEach(function (obj) {
            var key = JSON.stringify(obj);
            counter[key] = (counter[key] || 0) + 1;
        });
        for (const [key, value] of Object.entries(counter)) {
            let singleProduct = JSON.parse(key);
            this.displayCart = [...this.displayCart, [singleProduct, +value]];
            let total = singleProduct.price * (+value);
            this.grandTotalArray = [...this.grandTotalArray, total];
        }
        this.grandTotal = this.grandTotalArray.reduce((a, b) => a + b, 0);
    }
    clearCart() {
        this.productsService.clearCart();
    }
    removeOneItem(id) {
        this.productsService.removeOneItemFromCart(id);
        this.displayCart = [];
        this.grandTotalArray = [];
    }
    addOneItem(id) {
        this.productsService.addOneItemToCart(id);
        this.displayCart = [];
        this.grandTotalArray = [];
    }
    checkout() {
        if (confirm("Confirm to proceed to checkout")) {
            this.router.navigateByUrl("/checkout");
        }
        else {
            this.router.navigateByUrl("/cart");
        }
    }
    back() {
        this.router.navigateByUrl("/products");
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 5, vars: 3, consts: [[1, "p-2"], ["mat-table", "", "class", "mat-elevation-z2", 3, "dataSource", 4, "ngIf", "ngIfElse"], ["class", "total", "fxLayout", "column", "fxLayoutAlign", "space-around center", 4, "ngIf"], ["notLoaded", ""], ["mat-table", "", 1, "mat-elevation-z2", 3, "dataSource"], ["matColumnDef", "productName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "number"], ["class", "numberCell", "mat-cell", "", "fxLayout", "column wrap", "fxLayoutAlign", "center center", 4, "matCellDef"], ["matColumnDef", "price"], ["matColumnDef", "total"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", "fxLayout", "column wrap", "fxLayoutAlign", "center center", 1, "numberCell"], [1, "action-btn", "m-1", 3, "click"], [1, "m-1"], ["mat-header-row", ""], ["mat-row", ""], ["fxLayout", "column", "fxLayoutAlign", "space-around center", 1, "total"], [1, "m-1", "total-value", "text-center"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "btn", "btn-info", "m-1", 3, "click"], [1, "btn", "btn-danger", "m-1", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [1, "text-center", "text-white"], ["routerLinkActive", "router-link-active", 1, "btn", "btn-primary", 3, "routerLink"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_table_1_Template, 15, 3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_div_2_Template, 12, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_ng_template_3_Template, 5, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource && (ctx.cart == null ? null : ctx.cart.length))("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource && (ctx.cart == null ? null : ctx.cart.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.total[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.total-value[_ngcontent-%COMP%] {\n  border: 0.1px solid grey;\n  border-radius: 5px;\n  width: 200px;\n  font-size: larger;\n  background-color: #EBA154;\n  color: white;\n  font-weight: bolder;\n  padding: 5px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  width: 30px !important;\n  text-align: center !important;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 1px 4px !important;\n  text-align: center;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .numberCell[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: row-reverse !important;\n    place-content: center !important;\n    align-items: center !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztBQUNmOztBQUVBO0VBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0ksd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNuQixZQUFZO0VBQ1gsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7QUFDaEI7O0FBRUE7RUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0ksc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtFQUNJLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0k7SUFDSSx3QkFBd0I7SUFDeEIsc0NBQXNDO0lBQ3RDLGdDQUFnQztJQUNoQyw4QkFBOEI7RUFDcEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udG90YWx7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udG90YWwtdmFsdWV7XHJcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgIHdpZHRoOiAyMDBweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VCQTE1NDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmFjdGlvbi1idG57XHJcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRoLCB0ZHtcclxuICAgIHBhZGRpbmc6IDFweCA0cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGgubWF0LWhlYWRlci1jZWxse1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5udW1iZXJDZWxse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcclxuICAgICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.scss']
            }]
    }], function () { return [{ type: src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ "o8Ft");
/* harmony import */ var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/error-page/error-page.component */ "atk4");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "kzCK");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/cart/cart.component */ "sHrM");
/* harmony import */ var _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/checkout/checkout.component */ "Neos");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_products_all_products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/products/all-products/products.component */ "NPQ2");
/* harmony import */ var _pages_products_single_product_single_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/products/single-product/single-product.component */ "2pWA");












const routes = [
    { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: "products", component: _pages_products_all_products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"] },
    { path: "products/:id", component: _pages_products_single_product_single_product_component__WEBPACK_IMPORTED_MODULE_9__["SingleProductComponent"] },
    { path: "about-us", component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"] },
    { path: "cart", component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"] },
    { path: "checkout", component: _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"] },
    { path: "admin", component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: "", redirectTo: "/products", pathMatch: "full" },
    { path: "**", component: _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vhUM":
/*!***********************************************************************!*\
  !*** ./src/app/components/checkout-modal/checkout-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: CheckoutModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModalComponent", function() { return CheckoutModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "4USb");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ "D5Hz");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/libs/services/products.service */ "gulj");
/* harmony import */ var src_app_libs_services_orders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/libs/services/orders.service */ "WzN+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");















function CheckoutModalComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutModalComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutModalComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutModalComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter Email correctly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutModalComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
Object(emailjs_com__WEBPACK_IMPORTED_MODULE_4__["init"])("user_s3GXm5gpAGyKt7rNl9Qfb");
class CheckoutModalComponent {
    constructor(fb, dialogRef, data, router, productService, orderService, toastr) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.productService = productService;
        this.orderService = orderService;
        this.toastr = toastr;
        this.checkoutForm = this.fb.group({
            firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            orderNo: [""]
        });
        this.products = undefined;
        this.order = {
            email: undefined,
            firstName: undefined,
            lastName: undefined,
            orderNo: undefined,
            products: this.products,
            phoneNumber: undefined,
            grandTotal: undefined
        };
    }
    ngOnInit() {
        this.getOrderNo();
        this.products = this.data.products;
    }
    //CREATE NEW UNIQUE ORDER NO.
    getOrderNo() {
        this.tempOrderNo = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
    }
    //CANCEL ORDER
    cancelOrder() {
        if (confirm("Are you sure you want to cancel this order?")) {
            this.productService.clearCart();
            this.dialogRef.close();
            this.router.navigateByUrl("/");
        }
    }
    //SUBMIT ORDER
    submitOrder() {
        this.order.email = this.checkoutForm.value.email;
        this.order.firstName = this.checkoutForm.value.firstName;
        this.order.lastName = this.checkoutForm.value.lastName;
        this.order.orderNo = this.tempOrderNo;
        this.order.phoneNumber = this.checkoutForm.value.phoneNumber;
        this.order.products = this.products;
        this.order.grandTotal = this.data.total;
        this.orderService.submitOrder(this.order);
        this.toastr.success(`Order number: ${this.order.orderNo} submitted. An email has been sent to ${this.order.email}`);
        this.getProductsForAdmin();
        this.emailToCustomer();
        this.emailToAdmin();
        // this.whatsappAdmin();
        this.dialogRef.close();
        this.router.navigateByUrl("/");
    }
    getProductsForAdmin() {
        let products = this.order.products.map((item) => item["productName"]);
        products.sort();
        let finalProductCount = "";
        let current = null;
        let count = 0;
        for (let i = 0; i < products.length; i++) {
            if (products[i] != current) {
                if (count > 0) {
                    finalProductCount += ` \n Product: ${current} Quantity: ${count}, `;
                }
                current = products[i];
                count = 1;
            }
            else {
                count++;
            }
        }
        if (count > 0) {
            finalProductCount += ` \n Product: ${current}, Quantity: ${count}  `;
        }
        this.productsForAdmin = finalProductCount;
    }
    //EMAIL TO CUSTOMER
    emailToCustomer() {
        const templateParams = {
            to_email: this.order.email,
            from_name: 'Asconi Wines',
            message: `Your order has been received and is being processed.`,
            order: this.productsForAdmin,
            order_no: this.order.orderNo
        };
        emailjs_com__WEBPACK_IMPORTED_MODULE_4___default.a.send('service_csyz6nw', 'template_j0w73t8', templateParams, 'user_s3GXm5gpAGyKt7rNl9Qfb')
            .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });
    }
    //EMAIL TO ADMIN
    emailToAdmin() {
        const templateParams = {
            customer_email: this.order.email,
            customer_phone_no: this.order.phoneNumber,
            message: this.productsForAdmin,
            grand_Total: this.order.grandTotal,
            order_no: this.order.orderNo,
            firstName: this.order.firstName,
            lastName: this.order.lastName
        };
        emailjs_com__WEBPACK_IMPORTED_MODULE_4___default.a.send('service_csyz6nw', 'template_8gkys9i', templateParams, 'user_s3GXm5gpAGyKt7rNl9Qfb')
            .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });
    }
    //SEND TO ADMIN WHATSAPP
    whatsappAdmin() {
        this.order.email = this.checkoutForm.value.email;
        this.order.firstName = this.checkoutForm.value.firstName;
        this.order.lastName = this.checkoutForm.value.lastName;
        this.order.orderNo = this.tempOrderNo;
        this.order.phoneNumber = this.checkoutForm.value.phoneNumber;
        this.order.products = this.products;
        this.order.grandTotal = this.data.total;
        this.orderService.submitOrder(this.order);
        this.toastr.success(`Order number: ${this.order.orderNo} submitted.`);
        this.getProductsForAdmin();
        this.whatsAppMessage = `Hi, my name is ${this.order.firstName} ${this.order.lastName}. I would like the following wines from your site: ${this.productsForAdmin} which comes to a grand total of ${this.order.grandTotal}`;
        this.whatsAppUrl = `https://api.whatsapp.com/send?phone=254704987850&text=%20${this.whatsAppMessage}`;
        window.open(this.whatsAppUrl, "_blank");
        this.dialogRef.close();
        this.router.navigateByUrl("/");
    }
    close() {
        this.dialogRef.close();
    }
}
CheckoutModalComponent.ɵfac = function CheckoutModalComponent_Factory(t) { return new (t || CheckoutModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_libs_services_orders_service__WEBPACK_IMPORTED_MODULE_7__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"])); };
CheckoutModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutModalComponent, selectors: [["app-checkout-modal"]], decls: 40, vars: 9, consts: [["fxLayout", "column", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "text-center"], [1, "far", "fa-times-circle", 3, "click"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly center"], ["fxLayout", "column"], ["for", "firstName"], ["formControlName", "firstName", "type", "text", "required", ""], ["class", "text-muted errorText", 4, "ngIf"], ["for", "lastName"], ["formControlName", "lastName", "type", "text", "required", ""], ["for", "email"], ["formControlName", "email", "type", "email", "required", ""], ["for", "phoneNumber"], ["formControlName", "phoneNumber", "type", "number", "required", ""], [1, "btn", "btn-warning", "m-2"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "text-center"], ["type", "submit", 1, "btn", "btn-success", "m-2", 3, "disabled", "click"], [1, "far", "fa-envelope", "p-1", "m-1"], ["type", "submit", 1, "btn", "btn-outline-success", "m-2", 3, "disabled", "click"], [1, "fab", "fa-whatsapp", "p-1", "m-1"], [1, "btn", "btn-outline-danger", "m-2", 3, "click"], [1, "text-muted", "errorText"]], template: function CheckoutModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Check Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutModalComponent_Template_i_click_4_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CheckoutModalComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CheckoutModalComponent_div_15_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Your Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CheckoutModalComponent_div_21_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CheckoutModalComponent_div_22_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Your Phone No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CheckoutModalComponent_div_27_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutModalComponent_Template_button_click_32_listener() { return ctx.submitOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Order via email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutModalComponent_Template_button_click_35_listener() { return ctx.whatsappAdmin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Order via Whatsapp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutModalComponent_Template_button_click_38_listener() { return ctx.cancelOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Cancel order ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkoutForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkoutForm.get("firstName").hasError("required") && ctx.checkoutForm.get("firstName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkoutForm.get("lastName").hasError("required") && ctx.checkoutForm.get("lastName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkoutForm.get("email").hasError("required") && ctx.checkoutForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkoutForm.get("email").hasError("email") && ctx.checkoutForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkoutForm.get("phoneNumber").hasError("required") && ctx.checkoutForm.get("phoneNumber").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total:Ksh. ", ctx.data.total, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.checkoutForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.checkoutForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: ["label[_ngcontent-%COMP%] {\n  font-size: smaller;\n  font-weight: 300;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  padding: 5px 20px;\n  background-color: aliceblue;\n}\n\nbutton[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n  width: 200px !important;\n}\n\n.errorText[_ngcontent-%COMP%] {\n  font-size: 8px;\n  color: red !important;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVja291dC1tb2RhbC9jaGVja291dC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUMvQjs7QUFFQTtFQUNJLHVCQUF1QjtBQUMzQjs7QUFHQTtFQUNJLGNBQWM7RUFDZCxxQkFBcUI7QUFBekI7O0FBSUE7O0VBRUUsd0JBQXdCO0VBQ3hCLFNBQVM7QUFEWDs7QUFHQSxZQUFBOztBQUNBO0VBQ0UsMEJBQTBCO0FBQTVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGVja291dC1tb2RhbC9jaGVja291dC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuYnV0dG9uLHNwYW57XHJcbiAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy9FUlJPUiBNRVNTQUdFXHJcbi5lcnJvclRleHR7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gUkVNT1ZFIE5VTUJFUlMgRlJPTSBJTlBVVFxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLyogRmlyZWZveCAqL1xyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkout-modal',
                templateUrl: './checkout-modal.component.html',
                styleUrls: ['./checkout-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"] }, { type: src_app_libs_services_orders_service__WEBPACK_IMPORTED_MODULE_7__["OrdersService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "we6M":
/*!***************************************************************!*\
  !*** ./src/app/components/cart-badge/cart-badge.component.ts ***!
  \***************************************************************/
/*! exports provided: CartBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartBadgeComponent", function() { return CartBadgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/libs/services/products.service */ "gulj");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class CartBadgeComponent {
    constructor(_productsService) {
        this._productsService = _productsService;
        this.hidden = true;
        this.num = 0;
        this.isMenuCollapsed = true;
    }
    ngOnInit() {
        this.cart = this._productsService.cart;
        this._productsService.cartSource.subscribe(cart => {
            (this.num = cart.length);
            if (cart.length > 0) {
                this.hidden = false;
            }
        });
    }
}
CartBadgeComponent.ɵfac = function CartBadgeComponent_Factory(t) { return new (t || CartBadgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
CartBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartBadgeComponent, selectors: [["app-cart-badge"]], decls: 2, vars: 3, consts: [["matBadgeColor", "warn", "matBadgeSize", "small", "matBadgeOverlap", "true", 1, "nav-link", 3, "matBadge", "matBadgeHidden", "routerLink", "click"], [1, "fas", "fa-shopping-cart"]], template: function CartBadgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartBadgeComponent_Template_span_click_0_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx.num)("matBadgeHidden", ctx.hidden)("routerLink", "/cart");
    } }, directives: [_angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadge"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["span[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-top: 8px;\n}\n\ni[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n@media only screen and (max-width: 400px) {\n  i[_ngcontent-%COMP%] {\n    color: black !important;\n  }\n  a[_ngcontent-%COMP%] {\n    color: black !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0LWJhZGdlL2NhcnQtYmFkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsZUFBZTtBQUNuQjs7QUFFQTtFQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtFQUNJO0lBQ0ksdUJBQXVCO0VBQzdCO0VBRUU7SUFDSSx1QkFBdUI7RUFBN0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC1iYWRnZS9jYXJ0LWJhZGdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7ICBcclxufVxyXG5cclxuaXtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcclxuICAgIGl7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXtcclxuICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart-badge',
                templateUrl: './cart-badge.component.html',
                styleUrls: ['./cart-badge.component.scss']
            }]
    }], function () { return [{ type: src_app_libs_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map