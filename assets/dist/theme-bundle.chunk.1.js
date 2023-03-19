(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
/* harmony import */ var _halothemes_halo_express_order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./halothemes/halo-express-order */ "./assets/js/theme/halothemes/halo-express-order.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






//import haloColorVariants from './halothemes/haloAddOptionForProduct';

/* Halo Express Order */

var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__["createTranslationDictionary"])(context);
    return _this;
  }
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;
    if (!$('[data-shop-by-price]').length) return;
    if ($('.navList-action').hasClass('is-active')) {
      $('a.navList-action.is-active').focus();
    }
    $('a.navList-action').on('click', function () {
      return _this2.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive');
    });
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }
    $('a.reset-btn').on('click', function () {
      return _this3.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    this.ariaNotifyNoProducts();

    /* Halothemes */
    this.category_sidebar();
    Object(_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_5__["default"])(this.context);
    Object(_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_6__["default"])();
    this.showProductsPerPage();
    if (this.context.themeSettings.halo_show_more == true) {
      this.showmore_product();
    }
    Object(_halothemes_halo_express_order__WEBPACK_IMPORTED_MODULE_7__["default"])();
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this4 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);

      /* Halothemes */
      _this4.category_sidebar();
      _this4.showProductsPerPage();
      Object(_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_6__["default"])();
      Object(_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_5__["default"])(_this4.context);
      Object(_halothemes_halo_express_order__WEBPACK_IMPORTED_MODULE_7__["default"])();
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  }

  /* Halothemes Functions */;
  _proto.category_sidebar = function category_sidebar() {
    if ($('.all-categories-list').length > 0) {
      $('ul.all-categories-list li').each(function () {
        var breadLink = $('.page-type-product #breadcrumbs-wrapper ul li.breadcrumb.is-active').prev('.breadcrumb').children('a').attr('href');
        if ($(this).children('a').attr('href') == window.location || $(this).children('a').attr('href') == window.location.pathname) {
          $(this).addClass('current-cat');
          $(this).children('.dropdown-category-list').addClass('cat-expanded').siblings('.icon-dropdown').addClass('is-clicked');
          $(this).parents('.dropdown-category-list').addClass('cat-expanded').siblings('.icon-dropdown').addClass('is-clicked');
        }
        if ($(this).children('a').attr('href') == breadLink) {
          $(this).addClass('current-cat');
          $(this).parents('.dropdown-category-list').addClass('cat-expanded').siblings('.icon-dropdown').addClass('is-clicked');
        }
      });
      $('.all-categories-list .icon-dropdown').on('click', function () {
        $(this).parent().siblings().removeClass('is-clicked');
        $(this).parent().siblings().find("> .dropdown-category-list").slideUp("slow");
        $(this).parent().siblings().find("> .icon-dropdown").removeClass('is-clicked');
        $(this).parent().find("> .dropdown-category-list").slideToggle("slow");
        $(this).parent().siblings().removeClass('open');
        if ($(this).hasClass('is-clicked')) {
          $(this).removeClass('is-clicked');
          $(this).parent().removeClass('open');
        } else {
          $(this).addClass('is-clicked');
          $(this).parent().addClass('open');
        }
      });
    }
  };
  _proto.showProductsPerPage = function showProductsPerPage() {
    try {
      var url = new URL(window.location.href);
      var c = url.searchParams.get("limit");
      if (c != null) {
        var limit = document.querySelectorAll('select#limit option');
        Array.prototype.forEach.call(limit, function (element) {
          if (element.value == c) {
            element.selected = true;
          }
        });
      }
    } catch (e) {}
  };
  _proto.showmore_product = function showmore_product() {
    var _this5 = this;
    var context = this.context;
    $('#button-showmore-category').on('click', function (event) {
      event.preventDefault();
      var nextPage = $(".pagination-wrapper .pagination-item--current").next(),
        link = nextPage.find("a").attr("href");
      if (link == undefined) {
        if (!$('#button-showmore-category').hasClass('disable')) {
          $('#button-showmore-category').addClass('disable');
        }
      } else {
        $('#button-showmore-category').addClass('loading');
        $.ajax({
          type: 'get',
          url: link.replace("http://", "//"),
          context: _this5.content,
          success: function success(data) {
            if ($(data).find('#product-listing-container .productListing').length > 0) {
              $('#product-listing-container .productListing').append($(data).find('#product-listing-container .productListing').children());
              $('.pagination-list').html($(data).find(".pagination-list").html());
              $('#button-showmore-category').removeClass('loading');
              nextPage = $(".pagination-wrapper .pagination-item--current").next();
              if (Number($(data).find('.pagination-info .end').text()) < Number($(data).find('.pagination-info .total').text())) {
                $('.pagination .pagination-info .end').html($(data).find('.pagination-info .end').text());
              } else {
                $('.pagination .pagination-info .end').html($(data).find('.pagination-info .total').text());
              }
              if (nextPage.length === 0) {
                $('#button-showmore-category').addClass('disable');
                $('#button-showmore-category > span').text('No more product');
              }
              var $prodWrapId = $('#product-listing-container .card-variant').attr('id');
              //haloColorVariants(context, $prodWrapId);
            }
          }
        });
      }
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/*! exports provided: createTranslationDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationDictionary", function() { return createTranslationDictionary; });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }),

/***/ "./assets/js/theme/halothemes/halo-express-order.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/halothemes/halo-express-order.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");







// We want to ensure that the events are bound to a single instance of the product details component
var productSingleton = null;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].hooks.on('product-option-change', function (event, changedOption) {
    productOptionsChanged(event, changedOption);
  });
  var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_5__["defaultModal"])();
  var $ajaxcart = jquery__WEBPACK_IMPORTED_MODULE_0___default()("a.add-to-cart");
  var $ajaxcart_option = jquery__WEBPACK_IMPORTED_MODULE_0___default()("a.add-to-cart-option");
  var $ajaxcart_all = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#add-all-to-cart");
  var $content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="modal-body quickView"><div class="row"></div></div>');
  var j,
    count = 0,
    qty = 0;
  var list_product = "",
    list_outofstock = [];
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
    callProductOption();
    listenQuantityChange();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#add-all-to-cart', function (event) {
      list_product = "";
      var pro = {};
      j = 0;
      qty = 0;
      count = 0;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.data-product-qty').each(function (i) {
        if (parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) > 0) {
          pro[j] = {
            "action": "add",
            "fastcart": "1",
            "product_id": jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prop("id").replace("data-product-qty-", ""),
            "qty[]": parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val(), 10)
          };
          j++;
          //qty += parseInt($(this).val(), 10);
        }
      });

      if (j == 0) {
        alert("Please enter a valid quantity");
      } else {
        var check = true;
        for (var i = 0; i < j; i++) {
          check = checkBeforeAdd(pro[i]);
          if (check != true) {
            alert("Please select an option");
            break;
          }
        }
        //add to cart
        if (check == true) {
          //modal.open();

          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(pro, function (i) {
            addToCart(pro[i], false);
          });
        }
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', 'a.add-to-cart', function (event) {
      var product_id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).data('productId');
      var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#data-product-qty-" + product_id);
      var oldQty = parseInt($el.val(), 10);
      qty = 0;
      event.preventDefault();
      if (oldQty > 0) {
        var data = {
          "action": "add",
          "fastcart": "1"
        };
        data["product_id"] = product_id;
        data["qty[]"] = oldQty;
        qty = oldQty;
        list_product = "";
        checkBeforeAdd(data);
        addToCart(data, true);
      } else {
        alert("Please enter a valid quantity");
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', 'a.add-to-cart-option', function (event) {
      var product_id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).data('productId');
      var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#data-product-qty-" + product_id);
      var oldQty = parseInt($el.val(), 10);
      var $attributes = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".data-product-option-" + product_id);
      qty = 0;
      event.preventDefault();
      var check = true;
      list_product = "";
      if (oldQty > 0) {
        var data = {
          "action": "add",
          "fastcart": "1"
        };
        data["product_id"] = product_id;
        data["qty[]"] = oldQty;
        check = checkBeforeAdd(data);
        if (check == true) {
          qty = oldQty;
          addToCart(data, true);
        } else {
          alert("Please select an option");
        }
      } else {
        alert("Please enter a valid quantity");
      }
    });
  });
  function checkBeforeAdd(data) {
    var product_id = data.product_id;
    var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#data-product-qty-" + product_id);
    var oldQty = parseInt($el.val(), 10);
    var $attributes = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".data-product-option-" + product_id);
    var check = true;
    var product_name = $el.parents("li").find("img").attr("alt");
    var product_price = $el.parents("li").find(".price-section [data-product-price-without-tax], .price-section [data-product-price-with-tax]").text();
    list_product += '<li data-product-id ="' + product_id + '" class="previewCartItem"><div class="previewCartItem-image"><a href="' + $el.parents("li").find("a").attr("href") + '">\
		<img src="' + $el.parents("li").find("img").attr("src") + '" ></a></div>\
		<div class="previewCartItem-content"><h4 class="previewCartItem-name"><a href="' + $el.parents("li").find("a").attr("href") + '">' + product_name + '</a></h4><div class="productView-price"><span>' + oldQty + ' x</span> ' + product_price + '</div><dl class="productView-info">';
    $attributes.find('input:text, input:password, input:file, select, textarea').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prop('required')) {
        data[jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("name")] = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
      } else {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) {
          data[jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("name")] = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
          list_product += '<dt class="productView-info-name">' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-name") + ':</dt><dd class="productView-info-value">' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('option:selected').attr("data-title") + '</dd>';
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).focus();
          check = false;
        }
      }
    });
    var att = "";
    $attributes.find('input:radio, input:checkbox').each(function () {
      if (att != jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("name")) {
        att = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("name");
        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prop('required')) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name='" + att + "']:checked").val()) {
              // check if the checkbox is checked
              data[jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("name")] = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name='" + att + "']:checked").val();
              list_product += '<dt class="productView-info-name">' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-name") + ':</dt><dd class="productView-info-value">' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input:checked').attr("data-title") + '</dd>';
            }
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name='" + att + "']:checked").val()) {
              // check if the radio is checked
              data[jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("name")] = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name='" + att + "']:checked").val();
              //list_product += '<dt class="productView-info-name">'+$(this).attr("name")+':</dt><dd class="productView-info-value">'+$(this).val()+'</dd>';
            }
          }
        } else {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name='" + att + "']:checked").val()) {
              // check if the checkbox is checked
              data[jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("name")] = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name='" + att + "']:checked").val();
            } else {
              check = false;
            }
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name='" + att + "']:checked").val()) {
              // check if the radio is checked
              data[jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("name")] = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name='" + att + "']:checked").val();
            } else {
              check = false;
            }
          }
        }
        var title = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name='" + att + "']:checked").next().children().text();
        if (title == "") {
          title = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name='" + att + "']:checked").next().children().first().attr('title');
        }
        if (title != undefined) {
          list_product += '<dt class="productView-info-name">' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().attr('data-name') + '</dt><dd class="productView-info-value">' + title + '</dd>';
        }
      }
    });
    list_product += '</dl></div></li>';
    return check;
  }
  function addToCart(data, add_single_to_cart) {
    var product_id = data.product_id;
    var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#data-product-qty-" + product_id);
    if (add_single_to_cart == true) {
      var form_data = new FormData();
      for (var key in data) {
        form_data.append(key, data[key]);
      }

      // Add item to cart
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemAdd(form_data, function (err, response) {
        var errorMessage = err || response.data.error;

        // Guard statement
        if (errorMessage) {
          // Strip the HTML from the error message
          var tmp = document.createElement('DIV');
          tmp.innerHTML = errorMessage;
          return alert(tmp.textContent || tmp.innerText);
        }
        modal.open();
        count++;
        $el.val(0);
        getCart(qty, list_product);
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        type: 'POST',
        async: false,
        url: "/remote/v1/cart/add",
        data: data,
        dataType: 'html',
        error: function error(xhr, textStatus, errorThrown) {
          console.log('function : addToCart() ' + (errorThrown ? errorThrown : xhr.status));
        },
        beforeSend: function beforeSend() {
          //modal.open({ size: 'small' });
        },
        success: function success(response, textStatus, xhr) {
          var obj = JSON.parse(response);
          if (obj.data.error != undefined) {
            for (var key in data) {
              if (key === 'product_id') {
                list_outofstock.push(data[key]);
              }
            }
            alert(obj.data.error);
            modal.close();
          } else if (obj.data.cart_item.id) {
            modal.open();
            count++;
            $el.val(0);
            for (var key in data) {
              if (key === 'qty[]') qty = qty + data[key];
            }

            //if(count == j ){
            getCart(qty, list_product);
            //}	        		
          } else {
            console.log(response);
          }
        },
        complete: function complete() {}
      });
    }
  }
  function getCart(qty, list_product) {
    var options = {
      template: {
        content: 'cart/content',
        pageTitle: 'cart/page-title',
        totals: 'cart/totals'
      }
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getContent(options, function (err, response) {
      var $cartContent = response.content;
      var quantity = jquery__WEBPACK_IMPORTED_MODULE_0___default()(response.content).attr('data-cart-quantity') || 0;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').trigger('cart-quantity-update', quantity);
      //$(".cart-quantity").html(quantity);

      $content.html("");
      $content.append('<div class="modal-express-order"><h1 class="modal-header-title">' + qty + ' product has been added to your cart</h1><div class="previewCartAction haloExpressCartAdded"><div class="previewCartAction-viewCart navUser"><ul class="previewCartList">' + list_product + '</ul></div><div class="previewCartAction-checkout"><a href="/checkout.php" class="button button--primary btn-checkout btn-lg">Proceed to checkout</a><ul class="cart-totals"><li class="cart-total">' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(response.totals).find("li:first-child").html() + '</li><li class="cart-total">' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(response.totals).find("li:last-child").html() + '</li></ul><h3>' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(response.pageTitle).text() + '</h3><a href="#" class="button btn-alt" id="modal_close" onclick="var m = document.getElementsByClassName(\'modal-close\');m[0].click();">Continue Shopping</a><a href="/cart.php" class="button button--primary btn-alt">View Cart</a></div></div></div>');
      for (var i = 0; i <= list_outofstock.length; i++) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-id="' + list_outofstock[i] + '"]', $content).remove();
      }
      modal.updateContent($content);
    });
  }
  function callProductOption() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each($ajaxcart_option, function (key, value) {
      var productId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('productId');
      if (productId != undefined) {
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(productId, {
          template: 'products/quick-view'
        }, function (err, response) {
          var data_option = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-option-change]', response).html();
          data_option = data_option.replace(new RegExp(escapeRegExp("attribute_"), 'g'), "attribute_" + productId + "_");
          data_option = data_option.replace(new RegExp(escapeRegExp("attribute_" + productId + "_value_images"), 'g'), "attribute_value_images");
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(".data-product-option-" + productId).append("<div data-product-option-change>" + data_option + "</div>");
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(productId, "action=add&product_id=" + productId, function (err, response) {
            var attributesData = response.data || {};
            updateProductAttributes(attributesData, jquery__WEBPACK_IMPORTED_MODULE_0___default()(".data-product-option-" + productId));
            //this.updateView(attributesData);
          });
        });
      }
    });
  }

  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }

  /**
   *
   * Handle product options changes
   *
   */
  function productOptionsChanged(event, changedOption) {
    var $changedOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()(changedOption);
    var $scope = $changedOption.parents("li");
    var productId = $scope.find("div.last-addtocart-box").children("a").attr("data-product-id");
    if (productId == undefined) {
      return;
    }

    // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }
    var data = {
      "action": "add"
    };
    data["product_id"] = productId;
    $scope.find('input:text, input:password, input:file, select, textarea').each(function () {
      data[jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("name")] = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
    });
    var att = "";
    $scope.find('input:radio, input:checkbox').each(function () {
      if (att != jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("name")) {
        att = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("name");
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("name") != "products[]") {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name='" + att + "']:checked").val()) {
              // check if the checkbox is checked
              data[jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("name")] = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name='" + att + "']:checked").val();
            }
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name='" + att + "']:checked").val()) {
              // check if the radio is checked
              data[jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("name")] = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name='" + att + "']:checked").val();
            }
          }
        }
      }
    });
    data["qty[]"] = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#data-product-qty-" + productId).val();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(productId, data, function (err, response) {
      var productAttributesData = response.data || {};
      updateProductAttributes(productAttributesData, $scope);
      updateView(productAttributesData, $scope);
    });
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */
  function updateProductAttributes(data, $scope) {
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = "(" + data.out_of_stock_message + ")";
    showProductImage(data.image, $scope);
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute-value]', $scope).each(function (i, attribute) {
      var $attribute = jquery__WEBPACK_IMPORTED_MODULE_0___default()(attribute);
      var attrId = parseInt($attribute.data('product-attribute-value'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }
  function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  }
  function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('product-attribute') : null;
  }
  function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
      if ($attribute.parent().val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  }
  function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  }
  function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.removeAttr('disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */
  function updateView(data, $scope) {
    var viewModel = getViewModel($scope);

    //this.showMessageBox(data.stock_message || data.purchasing_message);

    if (typeof data.price === "object" && data.price !== null) {
      updatePriceView(viewModel, data.price);
    }

    // Set variation_id if it exists for adding to wishlist
    if (data.variantId) {
      viewModel.$wishlistVariation.val(data.variantId);
    }

    // If SKU is available
    if (data.sku) {
      viewModel.$sku.text(data.sku);
    }

    // if stock view is on (CP settings)
    if (viewModel.stock.$container.length && _.isNumber(data.stock)) {
      // if the stock container is hidden, show
      viewModel.stock.$container.removeClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    }
    if (!data.purchasable || !data.instock) {
      viewModel.$addToCart.prop('disabled', true);
      viewModel.$increments.prop('disabled', true);
    } else {
      viewModel.$addToCart.prop('disabled', false);
      viewModel.$increments.prop('disabled', false);
    }
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */
  function updatePriceView(viewModel, price) {
    if (price.with_tax) {
      viewModel.$priceWithTax.html(price.with_tax.formatted);
    }
    if (price.without_tax) {
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
    }
    if (price.rrp_with_tax) {
      viewModel.$rrpWithTax.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.$rrpWithoutTax.html(price.rrp_without_tax.formatted);
    }
  }

  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */
  function getViewModel($scope) {
    return {
      $priceWithTax: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-price-with-tax]', $scope),
      $rrpWithTax: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-rrp-with-tax]', $scope),
      $priceWithoutTax: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-price-without-tax]', $scope),
      $rrpWithoutTax: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-rrp-without-tax]', $scope),
      $weight: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.productView-info [data-product-weight]', $scope),
      $increments: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-field--increments :input', $scope),
      $addToCart: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#form-action-addToCart', $scope),
      $wishlistVariation: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-field--stock', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-stock]', $scope)
      },
      $sku: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-sku]', $scope),
      quantity: {
        $text: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-input--incrementTotal', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name=data-product-qty]', $scope)
      }
    };
  }
  function showProductImage(image, $scope) {
    if (typeof image === "object" && image !== null) {
      //alert(image.data);
    }
  }

  /**
   *
   * Handle action when the shopper clicks on + / - for quantity
   *
   */
  function listenQuantityChange() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '[data-quantity-change] button', function (event) {
      event.preventDefault();
      var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
      var $scope = $target.parents("li");
      var viewModel = getViewModel($scope);
      var $input = viewModel.quantity.$input;
      var quantityMin = parseInt($input.data('quantity-min'), 10);
      var quantityMax = parseInt($input.data('quantity-max'), 10);
      var qty = parseInt($input.val(), 10);

      // If action is incrementing
      if ($target.data('action') === 'inc') {
        // If quantity max option is set
        if (quantityMax > 0) {
          // Check quantity does not exceed max
          if (qty + 1 <= quantityMax) {
            qty++;
          }
        } else {
          qty++;
        }
      } else if (qty > 0) {
        // If quantity min option is set
        if (quantityMin > 0) {
          // Check quantity does not fall below min
          if (qty - 1 >= quantityMin) {
            qty--;
          }
        } else {
          qty--;
        }
      }

      // update hidden input
      viewModel.quantity.$input.val(qty);
      // update text
      viewModel.quantity.$text.text(qty);
    });
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsby1leHByZXNzLW9yZGVyLmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwiX0NhdGFsb2dQYWdlIiwiX2luaGVyaXRzTG9vc2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJzZXRMaXZlUmVnaW9uQXR0cmlidXRlcyIsIiRlbGVtZW50Iiwicm9sZVR5cGUiLCJhcmlhTGl2ZVN0YXR1cyIsImF0dHIiLCJyb2xlIiwibWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSIsIl90aGlzMiIsIiQiLCJsZW5ndGgiLCJoYXNDbGFzcyIsImZvY3VzIiwib24iLCJvblJlYWR5IiwiX3RoaXMzIiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCJlIiwiY3VycmVudFRhcmdldCIsIm5leHQiLCJjb21wYXJlUHJvZHVjdHMiLCJ1cmxzIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsInNldExpdmVSZWdpb25zQXR0cmlidXRlcyIsImFyaWFOb3RpZnlOb1Byb2R1Y3RzIiwiY2F0ZWdvcnlfc2lkZWJhciIsInByb2R1Y3REaXNwbGF5TW9kZSIsImhhbG9TdGlja3lUb29sYmFyIiwic2hvd1Byb2R1Y3RzUGVyUGFnZSIsInRoZW1lU2V0dGluZ3MiLCJoYWxvX3Nob3dfbW9yZSIsInNob3dtb3JlX3Byb2R1Y3QiLCJoYWxvRXhwcmVzc09yZGVyIiwiJG5vUHJvZHVjdHNNZXNzYWdlIiwiX3RoaXM0IiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwib25NaW5QcmljZUVycm9yIiwicHJpY2VfbWluX2V2YWx1YXRpb24iLCJvbk1heFByaWNlRXJyb3IiLCJwcmljZV9tYXhfZXZhbHVhdGlvbiIsIm1pblByaWNlTm90RW50ZXJlZCIsInByaWNlX21pbl9ub3RfZW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsInByaWNlX21heF9ub3RfZW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwicHJpY2VfaW52YWxpZF92YWx1ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsImNhdGVnb3J5Iiwic2hvcF9ieV9wcmljZSIsInByb2R1Y3RzIiwibGltaXQiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsIkZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiZWFjaCIsImJyZWFkTGluayIsInByZXYiLCJjaGlsZHJlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJhZGRDbGFzcyIsInNpYmxpbmdzIiwicGFyZW50cyIsInBhcmVudCIsInJlbW92ZUNsYXNzIiwiZmluZCIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsInVybCIsIlVSTCIsImhyZWYiLCJjIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsInZhbHVlIiwic2VsZWN0ZWQiLCJfdGhpczUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmV4dFBhZ2UiLCJsaW5rIiwidW5kZWZpbmVkIiwiYWpheCIsInR5cGUiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRhdGEiLCJhcHBlbmQiLCJOdW1iZXIiLCJ0ZXh0IiwiJHByb2RXcmFwSWQiLCJDYXRhbG9nUGFnZSIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJpIiwiYXJndW1lbnRzIiwiSlNPTiIsInBhcnNlIiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ2YWx1ZXMiLCJ0cmFuc2xhdGlvbktleXMiLCJtYXAiLCJrZXkiLCJzcGxpdCIsInBvcCIsInJlZHVjZSIsImFjYyIsInByb2R1Y3RTaW5nbGV0b24iLCJ1dGlscyIsImNoYW5nZWRPcHRpb24iLCJwcm9kdWN0T3B0aW9uc0NoYW5nZWQiLCJtb2RhbCIsImRlZmF1bHRNb2RhbCIsIiRhamF4Y2FydCIsIiRhamF4Y2FydF9vcHRpb24iLCIkYWpheGNhcnRfYWxsIiwiJGNvbnRlbnQiLCJqIiwiY291bnQiLCJxdHkiLCJsaXN0X3Byb2R1Y3QiLCJsaXN0X291dG9mc3RvY2siLCJyZWFkeSIsImNhbGxQcm9kdWN0T3B0aW9uIiwibGlzdGVuUXVhbnRpdHlDaGFuZ2UiLCJwcm8iLCJwYXJzZUludCIsInZhbCIsInByb3AiLCJhbGVydCIsImNoZWNrIiwiY2hlY2tCZWZvcmVBZGQiLCJhZGRUb0NhcnQiLCJwcm9kdWN0X2lkIiwiJGVsIiwib2xkUXR5IiwiJGF0dHJpYnV0ZXMiLCJwcm9kdWN0X25hbWUiLCJwcm9kdWN0X3ByaWNlIiwiYXR0IiwidGl0bGUiLCJmaXJzdCIsImFkZF9zaW5nbGVfdG9fY2FydCIsImZvcm1fZGF0YSIsIkZvcm1EYXRhIiwiYXBpIiwiY2FydCIsIml0ZW1BZGQiLCJlcnIiLCJyZXNwb25zZSIsImVycm9yTWVzc2FnZSIsImVycm9yIiwidG1wIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0Iiwib3BlbiIsImdldENhcnQiLCJhc3luYyIsImRhdGFUeXBlIiwieGhyIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImJlZm9yZVNlbmQiLCJvYmoiLCJwdXNoIiwiY2xvc2UiLCJjYXJ0X2l0ZW0iLCJpZCIsImNvbXBsZXRlIiwib3B0aW9ucyIsInBhZ2VUaXRsZSIsInRvdGFscyIsImdldENvbnRlbnQiLCIkY2FydENvbnRlbnQiLCJxdWFudGl0eSIsInRyaWdnZXIiLCJyZW1vdmUiLCJ1cGRhdGVDb250ZW50IiwicHJvZHVjdElkIiwicHJvZHVjdCIsImdldEJ5SWQiLCJkYXRhX29wdGlvbiIsIlJlZ0V4cCIsImVzY2FwZVJlZ0V4cCIsInByb2R1Y3RBdHRyaWJ1dGVzIiwib3B0aW9uQ2hhbmdlIiwiYXR0cmlidXRlc0RhdGEiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsInN0ciIsIiRjaGFuZ2VkT3B0aW9uIiwiJHNjb3BlIiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwidXBkYXRlVmlldyIsImJlaGF2aW9yIiwib3V0X29mX3N0b2NrX2JlaGF2aW9yIiwiaW5TdG9ja0lkcyIsImluX3N0b2NrX2F0dHJpYnV0ZXMiLCJvdXRPZlN0b2NrTWVzc2FnZSIsIm91dF9vZl9zdG9ja19tZXNzYWdlIiwic2hvd1Byb2R1Y3RJbWFnZSIsImltYWdlIiwiYXR0cmlidXRlIiwiJGF0dHJpYnV0ZSIsImF0dHJJZCIsImluZGV4T2YiLCJlbmFibGVBdHRyaWJ1dGUiLCJkaXNhYmxlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlVHlwZSIsImRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCJoaWRlIiwiJHBhcmVudCIsImNsb3Nlc3QiLCIkc2VsZWN0IiwidG9nZ2xlT3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsInNob3ciLCJyZW1vdmVBdHRyIiwidmlld01vZGVsIiwiZ2V0Vmlld01vZGVsIiwicHJpY2UiLCJ1cGRhdGVQcmljZVZpZXciLCJ2YXJpYW50SWQiLCIkd2lzaGxpc3RWYXJpYXRpb24iLCJza3UiLCIkc2t1Iiwic3RvY2siLCIkY29udGFpbmVyIiwiXyIsImlzTnVtYmVyIiwiJGlucHV0IiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiJGFkZFRvQ2FydCIsIiRpbmNyZW1lbnRzIiwid2l0aF90YXgiLCIkcHJpY2VXaXRoVGF4IiwiZm9ybWF0dGVkIiwid2l0aG91dF90YXgiLCIkcHJpY2VXaXRob3V0VGF4IiwicnJwX3dpdGhfdGF4IiwiJHJycFdpdGhUYXgiLCJycnBfd2l0aG91dF90YXgiLCIkcnJwV2l0aG91dFRheCIsIiR3ZWlnaHQiLCIkdGV4dCIsIiR0YXJnZXQiLCJxdWFudGl0eU1pbiIsInF1YW50aXR5TWF4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDb0I7QUFDSjtBQUNtQztBQUNsQjtBQUNyRTtBQUMrRDtBQUMvRDtBQUMrRDtBQUFBLElBRTFDQSxRQUFRLDBCQUFBQyxZQUFBO0VBQUFDLGNBQUEsQ0FBQUYsUUFBQSxFQUFBQyxZQUFBO0VBQ3pCLFNBQUFELFNBQVlHLE9BQU8sRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDakJBLEtBQUEsR0FBQUgsWUFBQSxDQUFBSSxJQUFBLE9BQU1GLE9BQU8sQ0FBQztJQUNkQyxLQUFBLENBQUtFLG9CQUFvQixHQUFHQywwR0FBMkIsQ0FBQ0osT0FBTyxDQUFDO0lBQUMsT0FBQUMsS0FBQTtFQUNyRTtFQUFDLElBQUFJLE1BQUEsR0FBQVIsUUFBQSxDQUFBUyxTQUFBO0VBQUFELE1BQUEsQ0FFREUsdUJBQXVCLEdBQXZCLFNBQUFBLHdCQUF3QkMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLGNBQWMsRUFBRTtJ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QyxHQUFHLENBQUM7SUFDdEMsQ0FBQyxDQUFDO0VBQ047QUFDSixDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbmltcG9ydCBwcm9kdWN0RGlzcGxheU1vZGUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0RGlzcGxheU1vZGUnO1xuLy9pbXBvcnQgaGFsb0NvbG9yVmFyaWFudHMgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0JztcbmltcG9ydCBoYWxvU3RpY2t5VG9vbGJhciBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1N0aWNreVRvb2xiYXInO1xuLyogSGFsbyBFeHByZXNzIE9yZGVyICovXG5pbXBvcnQgaGFsb0V4cHJlc3NPcmRlciBmcm9tICcuL2hhbG90aGVtZXMvaGFsby1leHByZXNzLW9yZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBzZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkZWxlbWVudCwgcm9sZVR5cGUsIGFyaWFMaXZlU3RhdHVzKSB7XG4gICAgICAgICRlbGVtZW50LmF0dHIoe1xuICAgICAgICAgICAgcm9sZTogcm9sZVR5cGUsXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogYXJpYUxpdmVTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKSB7XG4gICAgICAgIGlmICghJCgnW2RhdGEtc2hvcC1ieS1wcmljZV0nKS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAoJCgnLm5hdkxpc3QtYWN0aW9uJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uLmlzLWFjdGl2ZScpLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKCdzcGFuLnByaWNlLWZpbHRlci1tZXNzYWdlJyksICdzdGF0dXMnLCAnYXNzZXJ0aXZlJykpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuYXJyYW5nZUZvY3VzT25Tb3J0QnkoKTtcblxuICAgICAgICAkKCdbZGF0YS1idXR0b24tdHlwZT1cImFkZC1jYXJ0XCJdJykub24oJ2NsaWNrJywgKGUpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJChlLmN1cnJlbnRUYXJnZXQpLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XG5cbiAgICAgICAgdGhpcy5tYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCk7XG5cbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcblxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2EucmVzZXQtYnRuJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMoJCgnc3Bhbi5yZXNldC1tZXNzYWdlJyksICdzdGF0dXMnLCAncG9saXRlJykpO1xuXG4gICAgICAgIHRoaXMuYXJpYU5vdGlmeU5vUHJvZHVjdHMoKTtcblxuICAgICAgICAvKiBIYWxvdGhlbWVzICovXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlfc2lkZWJhcigpO1xuICAgICAgICBwcm9kdWN0RGlzcGxheU1vZGUodGhpcy5jb250ZXh0KTtcbiAgICAgICAgaGFsb1N0aWNreVRvb2xiYXIoKTtcbiAgICAgICAgdGhpcy5zaG93UHJvZHVjdHNQZXJQYWdlKCk7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX3Nob3dfbW9yZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dtb3JlX3Byb2R1Y3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbG9FeHByZXNzT3JkZXIoKTtcbiAgICB9XG5cbiAgICBhcmlhTm90aWZ5Tm9Qcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgJG5vUHJvZHVjdHNNZXNzYWdlID0gJCgnW2RhdGEtbm8tcHJvZHVjdHMtbm90aWZpY2F0aW9uXScpO1xuICAgICAgICBpZiAoJG5vUHJvZHVjdHNNZXNzYWdlLmxlbmd0aCkge1xuICAgICAgICAgICAgJG5vUHJvZHVjdHNNZXNzYWdlLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJpY2VfbWluX2V2YWx1YXRpb246IG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21heF9ldmFsdWF0aW9uOiBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9taW5fbm90X2VudGVyZWQ6IG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX21heF9ub3RfZW50ZXJlZDogbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfaW52YWxpZF92YWx1ZTogb25JbnZhbGlkUHJpY2UsXG4gICAgICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnY2F0ZWdvcnkvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgLyogSGFsb3RoZW1lcyAqL1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeV9zaWRlYmFyKCk7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgICAgIGhhbG9TdGlja3lUb29sYmFyKCk7XG4gICAgICAgICAgICBwcm9kdWN0RGlzcGxheU1vZGUodGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgIGhhbG9FeHByZXNzT3JkZXIoKTtcblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyogSGFsb3RoZW1lcyBGdW5jdGlvbnMgKi9cblxuICAgIGNhdGVnb3J5X3NpZGViYXIoKSB7XG4gICAgICAgIGlmICgkKCcuYWxsLWNhdGVnb3JpZXMtbGlzdCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQoJ3VsLmFsbC1jYXRlZ29yaWVzLWxpc3QgbGknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBjb25zdCBicmVhZExpbmsgPSAkKCcucGFnZS10eXBlLXByb2R1Y3QgI2JyZWFkY3J1bWJzLXdyYXBwZXIgdWwgbGkuYnJlYWRjcnVtYi5pcy1hY3RpdmUnKS5wcmV2KCcuYnJlYWRjcnVtYicpLmNoaWxkcmVuKCdhJykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgICBpZiAoKCQodGhpcykuY2hpbGRyZW4oJ2EnKS5hdHRyKCdocmVmJykgPT0gd2luZG93LmxvY2F0aW9uKSB8fCAoJCh0aGlzKS5jaGlsZHJlbignYScpLmF0dHIoJ2hyZWYnKSA9PSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtY2F0Jyk7XG4gICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5kcm9wZG93bi1jYXRlZ29yeS1saXN0JykuYWRkQ2xhc3MoJ2NhdC1leHBhbmRlZCcpLnNpYmxpbmdzKCcuaWNvbi1kcm9wZG93bicpLmFkZENsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3QnKS5hZGRDbGFzcygnY2F0LWV4cGFuZGVkJykuc2libGluZ3MoJy5pY29uLWRyb3Bkb3duJykuYWRkQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5jaGlsZHJlbignYScpLmF0dHIoJ2hyZWYnKSA9PSBicmVhZExpbmspIHtcbiAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY3VycmVudC1jYXQnKTtcbiAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZHJvcGRvd24tY2F0ZWdvcnktbGlzdCcpLmFkZENsYXNzKCdjYXQtZXhwYW5kZWQnKS5zaWJsaW5ncygnLmljb24tZHJvcGRvd24nKS5hZGRDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAkKCcuYWxsLWNhdGVnb3JpZXMtbGlzdCAuaWNvbi1kcm9wZG93bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5maW5kKFwiPiAuZHJvcGRvd24tY2F0ZWdvcnktbGlzdFwiKS5zbGlkZVVwKCBcInNsb3dcIiApO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5maW5kKFwiPiAuaWNvbi1kcm9wZG93blwiKS5yZW1vdmVDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmluZChcIj4gLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3RcIikuc2xpZGVUb2dnbGUoIFwic2xvd1wiICk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2lzLWNsaWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzUGVyUGFnZSgpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgdmFyIGMgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxpbWl0XCIpO1xuICAgICAgICAgICAgaWYoYyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QjbGltaXQgb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW1pdCwgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnZhbHVlID09IGMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7fVxuICAgIH1cblxuICAgIHNob3dtb3JlX3Byb2R1Y3QoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi13cmFwcGVyIC5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpLFxuICAgICAgICAgICAgICAgIGxpbmsgPSBuZXh0UGFnZS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcblxuICAgICAgICAgICAgaWYgKGxpbmsgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dldCcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogbGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKGRhdGEpLmZpbmQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5hcHBlbmQoJChkYXRhKS5maW5kKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5jaGlsZHJlbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1saXN0JykuaHRtbCgkKGRhdGEpLmZpbmQoXCIucGFnaW5hdGlvbi1saXN0XCIpLmh0bWwoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24td3JhcHBlciAucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKSA8IE51bWJlcigkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS5odG1sKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS5odG1sKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5hZGRDbGFzcygnZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5ID4gc3BhbicpLnRleHQoJ05vIG1vcmUgcHJvZHVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkcHJvZFdyYXBJZCA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5jYXJkLXZhcmlhbnQnKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaGFsb0NvbG9yVmFyaWFudHMoY29udGV4dCwgJHByb2RXcmFwSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XHJcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24uZHJvcGRvd24nO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi4vY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XHJcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XHJcblxyXG4vLyBXZSB3YW50IHRvIGVuc3VyZSB0aGF0IHRoZSBldmVudHMgYXJlIGJvdW5kIHRvIGEgc2luZ2xlIGluc3RhbmNlIG9mIHRoZSBwcm9kdWN0IGRldGFpbHMgY29tcG9uZW50XHJcbmxldCBwcm9kdWN0U2luZ2xldG9uID0gbnVsbDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIHV0aWxzLmhvb2tzLm9uKCdwcm9kdWN0LW9wdGlvbi1jaGFuZ2UnLCAoZXZlbnQsIGNoYW5nZWRPcHRpb24pID0+IHtcclxuICAgICAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQsIGNoYW5nZWRPcHRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcclxuXHJcbiAgICBjb25zdCAkYWpheGNhcnQgPSAkKFwiYS5hZGQtdG8tY2FydFwiKTtcclxuICAgIGNvbnN0ICRhamF4Y2FydF9vcHRpb24gPSAkKFwiYS5hZGQtdG8tY2FydC1vcHRpb25cIik7XHJcbiAgICBjb25zdCAkYWpheGNhcnRfYWxsID0gJChcIiNhZGQtYWxsLXRvLWNhcnRcIik7XHJcbiAgICBjb25zdCAkY29udGVudCA9ICQoJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5IHF1aWNrVmlld1wiPjxkaXYgY2xhc3M9XCJyb3dcIj48L2Rpdj48L2Rpdj4nKTtcclxuICAgIHZhciBqLCBjb3VudCA9IDAsIHF0eSA9IDA7XHJcbiAgICB2YXIgbGlzdF9wcm9kdWN0ID0gXCJcIiwgbGlzdF9vdXRvZnN0b2NrID0gW107XHJcblxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY2FsbFByb2R1Y3RPcHRpb24oKTtcclxuICAgICAgICBsaXN0ZW5RdWFudGl0eUNoYW5nZSgpO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FkZC1hbGwtdG8tY2FydCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBsaXN0X3Byb2R1Y3QgPSBcIlwiO1xyXG4gICAgICAgICAgICB2YXIgcHJvID0ge31cclxuICAgICAgICAgICAgaiA9IDA7XHJcbiAgICAgICAgICAgIHF0eSA9IDA7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgJCgnLmRhdGEtcHJvZHVjdC1xdHknKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJCh0aGlzKS52YWwoKSkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvW2pdID0geyBcImFjdGlvblwiOiBcImFkZFwiLCBcImZhc3RjYXJ0XCI6IFwiMVwiLCBcInByb2R1Y3RfaWRcIjogJCh0aGlzKS5wcm9wKFwiaWRcIikucmVwbGFjZShcImRhdGEtcHJvZHVjdC1xdHktXCIsIFwiXCIpLCBcInF0eVtdXCI6IHBhcnNlSW50KCQodGhpcykudmFsKCksIDEwKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGorKztcclxuICAgICAgICAgICAgICAgICAgICAvL3F0eSArPSBwYXJzZUludCgkKHRoaXMpLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoaiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIHZhbGlkIHF1YW50aXR5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgajsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBjaGVja0JlZm9yZUFkZChwcm9baV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVjayAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhbiBvcHRpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vYWRkIHRvIGNhcnRcclxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9tb2RhbC5vcGVuKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2gocHJvLCBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUb0NhcnQocHJvW2ldLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdhLmFkZC10by1jYXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RfaWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3Byb2R1Y3RJZCcpO1xyXG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGAjZGF0YS1wcm9kdWN0LXF0eS0ke3Byb2R1Y3RfaWR9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZFF0eSA9IHBhcnNlSW50KCRlbC52YWwoKSwgMTApO1xyXG4gICAgICAgICAgICBxdHkgPSAwO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAob2xkUXR5ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7IFwiYWN0aW9uXCI6IFwiYWRkXCIsIFwiZmFzdGNhcnRcIjogXCIxXCIgfVxyXG4gICAgICAgICAgICAgICAgZGF0YVtcInByb2R1Y3RfaWRcIl0gPSBwcm9kdWN0X2lkO1xyXG4gICAgICAgICAgICAgICAgZGF0YVtcInF0eVtdXCJdID0gb2xkUXR5O1xyXG4gICAgICAgICAgICAgICAgcXR5ID0gb2xkUXR5O1xyXG4gICAgICAgICAgICAgICAgbGlzdF9wcm9kdWN0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNoZWNrQmVmb3JlQWRkKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0KGRhdGEsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBxdWFudGl0eVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnYS5hZGQtdG8tY2FydC1vcHRpb24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdF9pZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgncHJvZHVjdElkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoYCNkYXRhLXByb2R1Y3QtcXR5LSR7cHJvZHVjdF9pZH1gKTtcclxuICAgICAgICAgICAgY29uc3Qgb2xkUXR5ID0gcGFyc2VJbnQoJGVsLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhdHRyaWJ1dGVzID0gJChgLmRhdGEtcHJvZHVjdC1vcHRpb24tJHtwcm9kdWN0X2lkfWApO1xyXG4gICAgICAgICAgICBxdHkgPSAwO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBsaXN0X3Byb2R1Y3QgPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAob2xkUXR5ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7IFwiYWN0aW9uXCI6IFwiYWRkXCIsIFwiZmFzdGNhcnRcIjogXCIxXCIgfVxyXG4gICAgICAgICAgICAgICAgZGF0YVtcInByb2R1Y3RfaWRcIl0gPSBwcm9kdWN0X2lkO1xyXG4gICAgICAgICAgICAgICAgZGF0YVtcInF0eVtdXCJdID0gb2xkUXR5O1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBjaGVja0JlZm9yZUFkZChkYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXR5ID0gb2xkUXR5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhZGRUb0NhcnQoZGF0YSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlBsZWFzZSBzZWxlY3QgYW4gb3B0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBxdWFudGl0eVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tCZWZvcmVBZGQoZGF0YSkge1xyXG5cclxuICAgICAgICBjb25zdCBwcm9kdWN0X2lkID0gZGF0YS5wcm9kdWN0X2lkO1xyXG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNkYXRhLXByb2R1Y3QtcXR5LSR7cHJvZHVjdF9pZH1gKTtcclxuICAgICAgICBjb25zdCBvbGRRdHkgPSBwYXJzZUludCgkZWwudmFsKCksIDEwKTtcclxuICAgICAgICBjb25zdCAkYXR0cmlidXRlcyA9ICQoYC5kYXRhLXByb2R1Y3Qtb3B0aW9uLSR7cHJvZHVjdF9pZH1gKTtcclxuICAgICAgICB2YXIgY2hlY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgcHJvZHVjdF9uYW1lID0gJGVsLnBhcmVudHMoXCJsaVwiKS5maW5kKFwiaW1nXCIpLmF0dHIoXCJhbHRcIik7XHJcbiAgICAgICAgdmFyIHByb2R1Y3RfcHJpY2UgPSAkZWwucGFyZW50cyhcImxpXCIpLmZpbmQoXCIucHJpY2Utc2VjdGlvbiBbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XSwgLnByaWNlLXNlY3Rpb24gW2RhdGEtcHJvZHVjdC1wcmljZS13aXRoLXRheF1cIikudGV4dCgpO1xyXG4gICAgICAgIGxpc3RfcHJvZHVjdCArPSAnPGxpIGRhdGEtcHJvZHVjdC1pZCA9XCInICsgcHJvZHVjdF9pZCArICdcIiBjbGFzcz1cInByZXZpZXdDYXJ0SXRlbVwiPjxkaXYgY2xhc3M9XCJwcmV2aWV3Q2FydEl0ZW0taW1hZ2VcIj48YSBocmVmPVwiJyArICRlbC5wYXJlbnRzKFwibGlcIikuZmluZChcImFcIikuYXR0cihcImhyZWZcIikgKyAnXCI+XFxcclxuXHRcdDxpbWcgc3JjPVwiJysgJGVsLnBhcmVudHMoXCJsaVwiKS5maW5kKFwiaW1nXCIpLmF0dHIoXCJzcmNcIikgKyAnXCIgPjwvYT48L2Rpdj5cXFxyXG5cdFx0PGRpdiBjbGFzcz1cInByZXZpZXdDYXJ0SXRlbS1jb250ZW50XCI+PGg0IGNsYXNzPVwicHJldmlld0NhcnRJdGVtLW5hbWVcIj48YSBocmVmPVwiJysgJGVsLnBhcmVudHMoXCJsaVwiKS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKSArICdcIj4nICsgcHJvZHVjdF9uYW1lICsgJzwvYT48L2g0PjxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1wcmljZVwiPjxzcGFuPicgKyBvbGRRdHkgKyAnIHg8L3NwYW4+ICcgKyBwcm9kdWN0X3ByaWNlICsgJzwvZGl2PjxkbCBjbGFzcz1cInByb2R1Y3RWaWV3LWluZm9cIj4nO1xyXG5cclxuXHJcblxyXG4gICAgICAgICRhdHRyaWJ1dGVzLmZpbmQoJ2lucHV0OnRleHQsIGlucHV0OnBhc3N3b3JkLCBpbnB1dDpmaWxlLCBzZWxlY3QsIHRleHRhcmVhJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoISQodGhpcykucHJvcCgncmVxdWlyZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YVskKHRoaXMpLmF0dHIoXCJuYW1lXCIpXSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RfcHJvZHVjdCArPSAnPGR0IGNsYXNzPVwicHJvZHVjdFZpZXctaW5mby1uYW1lXCI+JyArICQodGhpcykuYXR0cihcImRhdGEtbmFtZVwiKSArICc6PC9kdD48ZGQgY2xhc3M9XCJwcm9kdWN0Vmlldy1pbmZvLXZhbHVlXCI+JyArICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykuYXR0cihcImRhdGEtdGl0bGVcIikgKyAnPC9kZD4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBhdHQgPSBcIlwiO1xyXG4gICAgICAgICRhdHRyaWJ1dGVzLmZpbmQoJ2lucHV0OnJhZGlvLCBpbnB1dDpjaGVja2JveCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoYXR0ICE9ICQodGhpcykuYXR0cihcIm5hbWVcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBhdHQgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLnByb3AoJ3JlcXVpcmVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHsgLy8gY2hlY2sgaWYgdGhlIGNoZWNrYm94IGlzIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdF9wcm9kdWN0ICs9ICc8ZHQgY2xhc3M9XCJwcm9kdWN0Vmlldy1pbmZvLW5hbWVcIj4nICsgJCh0aGlzKS5hdHRyKFwiZGF0YS1uYW1lXCIpICsgJzo8L2R0PjxkZCBjbGFzcz1cInByb2R1Y3RWaWV3LWluZm8tdmFsdWVcIj4nICsgJCh0aGlzKS5maW5kKCdpbnB1dDpjaGVja2VkJykuYXR0cihcImRhdGEtdGl0bGVcIikgKyAnPC9kZD4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkgeyAvLyBjaGVjayBpZiB0aGUgcmFkaW8gaXMgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVskKHRoaXMpLmF0dHIoXCJuYW1lXCIpXSA9ICQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2xpc3RfcHJvZHVjdCArPSAnPGR0IGNsYXNzPVwicHJvZHVjdFZpZXctaW5mby1uYW1lXCI+JyskKHRoaXMpLmF0dHIoXCJuYW1lXCIpKyc6PC9kdD48ZGQgY2xhc3M9XCJwcm9kdWN0Vmlldy1pbmZvLXZhbHVlXCI+JyskKHRoaXMpLnZhbCgpKyc8L2RkPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHsgLy8gY2hlY2sgaWYgdGhlIGNoZWNrYm94IGlzIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcInJhZGlvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHsgLy8gY2hlY2sgaWYgdGhlIHJhZGlvIGlzIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0aXRsZSA9ICQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikubmV4dCgpLmNoaWxkcmVuKCkudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9ICQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikubmV4dCgpLmNoaWxkcmVuKCkuZmlyc3QoKS5hdHRyKCd0aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RfcHJvZHVjdCArPSAnPGR0IGNsYXNzPVwicHJvZHVjdFZpZXctaW5mby1uYW1lXCI+JyArICQodGhpcykucGFyZW50KCkucGFyZW50KCkuYXR0cignZGF0YS1uYW1lJykgKyAnPC9kdD48ZGQgY2xhc3M9XCJwcm9kdWN0Vmlldy1pbmZvLXZhbHVlXCI+JyArIHRpdGxlICsgJzwvZGQ+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsaXN0X3Byb2R1Y3QgKz0gJzwvZGw+PC9kaXY+PC9saT4nO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9DYXJ0KGRhdGEsIGFkZF9zaW5nbGVfdG9fY2FydCkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RfaWQgPSBkYXRhLnByb2R1Y3RfaWQ7XHJcbiAgICAgICAgY29uc3QgJGVsID0gJChgI2RhdGEtcHJvZHVjdC1xdHktJHtwcm9kdWN0X2lkfWApO1xyXG5cclxuICAgICAgICBpZiAoYWRkX3NpbmdsZV90b19jYXJ0ID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoa2V5LCBkYXRhW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgaXRlbSB0byBjYXJ0XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1BZGQoZm9ybV9kYXRhLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gR3VhcmQgc3RhdGVtZW50XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RyaXAgdGhlIEhUTUwgZnJvbSB0aGUgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAkZWwudmFsKDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGdldENhcnQocXR5LCBsaXN0X3Byb2R1Y3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYXN5bmM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9yZW1vdGUvdjEvY2FydC9hZGRcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Z1bmN0aW9uIDogYWRkVG9DYXJ0KCkgJyArIChlcnJvclRocm93biA/IGVycm9yVGhyb3duIDogeGhyLnN0YXR1cykpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL21vZGFsLm9wZW4oeyBzaXplOiAnc21hbGwnIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UsIHRleHRTdGF0dXMsIHhocikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouZGF0YS5lcnJvciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdwcm9kdWN0X2lkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Rfb3V0b2ZzdG9jay5wdXNoKGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KG9iai5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob2JqLmRhdGEuY2FydF9pdGVtLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRlbC52YWwoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAncXR5W10nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eSA9IHF0eSArIGRhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZihjb3VudCA9PSBqICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldENhcnQocXR5LCBsaXN0X3Byb2R1Y3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL31cdCAgICAgICAgXHRcdFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2FydChxdHksIGxpc3RfcHJvZHVjdCkge1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ2NhcnQvY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICBwYWdlVGl0bGU6ICdjYXJ0L3BhZ2UtdGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgdG90YWxzOiAnY2FydC90b3RhbHMnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdmFyICRjYXJ0Q29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQocmVzcG9uc2UuY29udGVudCkuYXR0cignZGF0YS1jYXJ0LXF1YW50aXR5JykgfHwgMDtcclxuXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcclxuICAgICAgICAgICAgLy8kKFwiLmNhcnQtcXVhbnRpdHlcIikuaHRtbChxdWFudGl0eSk7XHJcblxyXG4gICAgICAgICAgICAkY29udGVudC5odG1sKFwiXCIpO1xyXG4gICAgICAgICAgICAkY29udGVudC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJtb2RhbC1leHByZXNzLW9yZGVyXCI+PGgxIGNsYXNzPVwibW9kYWwtaGVhZGVyLXRpdGxlXCI+JyArIHF0eSArICcgcHJvZHVjdCBoYXMgYmVlbiBhZGRlZCB0byB5b3VyIGNhcnQ8L2gxPjxkaXYgY2xhc3M9XCJwcmV2aWV3Q2FydEFjdGlvbiBoYWxvRXhwcmVzc0NhcnRBZGRlZFwiPjxkaXYgY2xhc3M9XCJwcmV2aWV3Q2FydEFjdGlvbi12aWV3Q2FydCBuYXZVc2VyXCI+PHVsIGNsYXNzPVwicHJldmlld0NhcnRMaXN0XCI+JyArIGxpc3RfcHJvZHVjdCArICc8L3VsPjwvZGl2PjxkaXYgY2xhc3M9XCJwcmV2aWV3Q2FydEFjdGlvbi1jaGVja291dFwiPjxhIGhyZWY9XCIvY2hlY2tvdXQucGhwXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IGJ0bi1jaGVja291dCBidG4tbGdcIj5Qcm9jZWVkIHRvIGNoZWNrb3V0PC9hPjx1bCBjbGFzcz1cImNhcnQtdG90YWxzXCI+PGxpIGNsYXNzPVwiY2FydC10b3RhbFwiPicgKyAkKHJlc3BvbnNlLnRvdGFscykuZmluZChcImxpOmZpcnN0LWNoaWxkXCIpLmh0bWwoKSArICc8L2xpPjxsaSBjbGFzcz1cImNhcnQtdG90YWxcIj4nICsgJChyZXNwb25zZS50b3RhbHMpLmZpbmQoXCJsaTpsYXN0LWNoaWxkXCIpLmh0bWwoKSArICc8L2xpPjwvdWw+PGgzPicgKyAkKHJlc3BvbnNlLnBhZ2VUaXRsZSkudGV4dCgpICsgJzwvaDM+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ1dHRvbiBidG4tYWx0XCIgaWQ9XCJtb2RhbF9jbG9zZVwiIG9uY2xpY2s9XCJ2YXIgbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXFwnbW9kYWwtY2xvc2VcXCcpO21bMF0uY2xpY2soKTtcIj5Db250aW51ZSBTaG9wcGluZzwvYT48YSBocmVmPVwiL2NhcnQucGhwXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IGJ0bi1hbHRcIj5WaWV3IENhcnQ8L2E+PC9kaXY+PC9kaXY+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGxpc3Rfb3V0b2ZzdG9jay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBsaXN0X291dG9mc3RvY2tbaV0gKyAnXCJdJywgJGNvbnRlbnQpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoJGNvbnRlbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxsUHJvZHVjdE9wdGlvbigpIHtcclxuXHJcbiAgICAgICAgJC5lYWNoKCRhamF4Y2FydF9vcHRpb24sIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gJCh0aGlzKS5kYXRhKCdwcm9kdWN0SWQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0SWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHByb2R1Y3RJZCwgeyB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL3F1aWNrLXZpZXcnIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFfb3B0aW9uID0gJCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScsIHJlc3BvbnNlKS5odG1sKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YV9vcHRpb24gPSBkYXRhX29wdGlvbi5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKFwiYXR0cmlidXRlX1wiKSwgJ2cnKSwgXCJhdHRyaWJ1dGVfXCIgKyBwcm9kdWN0SWQgKyBcIl9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YV9vcHRpb24gPSBkYXRhX29wdGlvbi5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKFwiYXR0cmlidXRlX1wiICsgcHJvZHVjdElkICsgXCJfdmFsdWVfaW1hZ2VzXCIpLCAnZycpLCBcImF0dHJpYnV0ZV92YWx1ZV9pbWFnZXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5kYXRhLXByb2R1Y3Qtb3B0aW9uLVwiICsgcHJvZHVjdElkKS5hcHBlbmQoXCI8ZGl2IGRhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlPlwiICsgZGF0YV9vcHRpb24gKyBcIjwvZGl2PlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsIFwiYWN0aW9uPWFkZCZwcm9kdWN0X2lkPVwiICsgcHJvZHVjdElkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhhdHRyaWJ1dGVzRGF0YSwgJChcIi5kYXRhLXByb2R1Y3Qtb3B0aW9uLVwiICsgcHJvZHVjdElkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy51cGRhdGVWaWV3KGF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xyXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBIYW5kbGUgcHJvZHVjdCBvcHRpb25zIGNoYW5nZXNcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCwgY2hhbmdlZE9wdGlvbikge1xyXG4gICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChjaGFuZ2VkT3B0aW9uKTtcclxuICAgICAgICBjb25zdCAkc2NvcGUgPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKFwibGlcIik7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJHNjb3BlLmZpbmQoXCJkaXYubGFzdC1hZGR0b2NhcnQtYm94XCIpLmNoaWxkcmVuKFwiYVwiKS5hdHRyKFwiZGF0YS1wcm9kdWN0LWlkXCIpO1xyXG4gICAgICAgIGlmIChwcm9kdWN0SWQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERvIG5vdCB0cmlnZ2VyIGFuIGFqYXggcmVxdWVzdCBpZiBpdCdzIGEgZmlsZSBvciBpZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcclxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGF0YSA9IHsgXCJhY3Rpb25cIjogXCJhZGRcIiB9XHJcbiAgICAgICAgZGF0YVtcInByb2R1Y3RfaWRcIl0gPSBwcm9kdWN0SWQ7XHJcblxyXG4gICAgICAgICRzY29wZS5maW5kKCdpbnB1dDp0ZXh0LCBpbnB1dDpwYXNzd29yZCwgaW5wdXQ6ZmlsZSwgc2VsZWN0LCB0ZXh0YXJlYScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZGF0YVskKHRoaXMpLmF0dHIoXCJuYW1lXCIpXSA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgYXR0ID0gXCJcIjtcclxuICAgICAgICAkc2NvcGUuZmluZCgnaW5wdXQ6cmFkaW8sIGlucHV0OmNoZWNrYm94JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChhdHQgIT0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGF0dCA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcIm5hbWVcIikgIT0gXCJwcm9kdWN0c1tdXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcInR5cGVcIikgPT0gXCJjaGVja2JveFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7IC8vIGNoZWNrIGlmIHRoZSBjaGVja2JveCBpcyBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhWyQodGhpcykuYXR0cihcIm5hbWVcIildID0gJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcInR5cGVcIikgPT0gXCJyYWRpb1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7IC8vIGNoZWNrIGlmIHRoZSByYWRpbyBpcyBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhWyQodGhpcykuYXR0cihcIm5hbWVcIildID0gJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkYXRhW1wicXR5W11cIl0gPSAkKFwiI2RhdGEtcHJvZHVjdC1xdHktXCIgKyBwcm9kdWN0SWQpLnZhbCgpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgZGF0YSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSwgJHNjb3BlKTtcclxuICAgICAgICAgICAgdXBkYXRlVmlldyhwcm9kdWN0QXR0cmlidXRlc0RhdGEsICRzY29wZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIG9yIG1hcmsgYXMgdW5hdmFpbGFibGUgb3V0IG9mIHN0b2NrIGF0dHJpYnV0ZXMgaWYgZW5hYmxlZFxyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSwgJHNjb3BlKSB7XHJcbiAgICAgICAgY29uc3QgYmVoYXZpb3IgPSBkYXRhLm91dF9vZl9zdG9ja19iZWhhdmlvcjtcclxuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xyXG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tNZXNzYWdlID0gYCgke2RhdGEub3V0X29mX3N0b2NrX21lc3NhZ2V9KWA7XHJcblxyXG4gICAgICAgIHNob3dQcm9kdWN0SW1hZ2UoZGF0YS5pbWFnZSwgJHNjb3BlKTtcclxuXHJcbiAgICAgICAgaWYgKGJlaGF2aW9yICE9PSAnaGlkZV9vcHRpb24nICYmIGJlaGF2aW9yICE9PSAnbGFiZWxfb3B0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV0nLCAkc2NvcGUpLmVhY2goKGksIGF0dHJpYnV0ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlID0gJChhdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRySWQgPSBwYXJzZUludCgkYXR0cmlidXRlLmRhdGEoJ3Byb2R1Y3QtYXR0cmlidXRlLXZhbHVlJyksIDEwKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoaW5TdG9ja0lkcy5pbmRleE9mKGF0dHJJZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkYXR0cmlidXRlLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xyXG5cclxuICAgICAgICByZXR1cm4gJHBhcmVudCA/ICRwYXJlbnQuZGF0YSgncHJvZHVjdC1hdHRyaWJ1dGUnKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGF0dHJpYnV0ZS5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBpcyB0aGUgc2VsZWN0ZWQgb3B0aW9uIGluIGEgc2VsZWN0IGRyb3Bkb3duLCBzZWxlY3QgdGhlIGZpcnN0IG9wdGlvbiAoTUVSQy02MzkpXHJcbiAgICAgICAgICAgIGlmICgkYXR0cmlidXRlLnBhcmVudCgpLnZhbCgpID09PSAkYXR0cmlidXRlLmF0dHIoJ3ZhbHVlJykpIHtcclxuICAgICAgICAgICAgICAgICRzZWxlY3RbMF0uc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucmVtb3ZlQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXcoZGF0YSwgJHNjb3BlKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gZ2V0Vmlld01vZGVsKCRzY29wZSk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5zaG93TWVzc2FnZUJveChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhLnByaWNlID09PSBcIm9iamVjdFwiKSAmJiAoZGF0YS5wcmljZSAhPT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgZGF0YS5wcmljZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgdmFyaWF0aW9uX2lkIGlmIGl0IGV4aXN0cyBmb3IgYWRkaW5nIHRvIHdpc2hsaXN0XHJcbiAgICAgICAgaWYgKGRhdGEudmFyaWFudElkKSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2lzaGxpc3RWYXJpYXRpb24udmFsKGRhdGEudmFyaWFudElkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIFNLVSBpcyBhdmFpbGFibGVcclxuICAgICAgICBpZiAoZGF0YS5za3UpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRza3UudGV4dChkYXRhLnNrdSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBzdG9jayB2aWV3IGlzIG9uIChDUCBzZXR0aW5ncylcclxuICAgICAgICBpZiAodmlld01vZGVsLnN0b2NrLiRjb250YWluZXIubGVuZ3RoICYmIF8uaXNOdW1iZXIoZGF0YS5zdG9jaykpIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIHN0b2NrIGNvbnRhaW5lciBpcyBoaWRkZW4sIHNob3dcclxuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcclxuXHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xyXG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aFRheC5odG1sKHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2Uud2l0aG91dF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhvdXRUYXguaHRtbChwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuJHJycFdpdGhUYXguaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRycnBXaXRob3V0VGF4Lmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2luY2UgJHByb2R1Y3RWaWV3IGNhbiBiZSBkeW5hbWljYWxseSBpbnNlcnRlZCB1c2luZyByZW5kZXJfd2l0aCxcclxuICAgICAqIFdlIGhhdmUgdG8gcmV0cmlldmUgdGhlIHJlc3BlY3RpdmUgZWxlbWVudHNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gJHNjb3BlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgICRycnBXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXJycC13aXRoLXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAkcHJpY2VXaXRob3V0VGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgICRycnBXaXRob3V0VGF4OiAkKCdbZGF0YS1wcm9kdWN0LXJycC13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAkd2VpZ2h0OiAkKCcucHJvZHVjdFZpZXctaW5mbyBbZGF0YS1wcm9kdWN0LXdlaWdodF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAkaW5jcmVtZW50czogJCgnLmZvcm0tZmllbGQtLWluY3JlbWVudHMgOmlucHV0JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICR3aXNobGlzdFZhcmlhdGlvbjogJCgnW2RhdGEtd2lzaGxpc3QtYWRkXSBbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScsICRzY29wZSksXHJcbiAgICAgICAgICAgIHN0b2NrOiB7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2snLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbZGF0YS1wcm9kdWN0LXN0b2NrXScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRza3U6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XHJcbiAgICAgICAgICAgICAgICAkdGV4dDogJCgnLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW25hbWU9ZGF0YS1wcm9kdWN0LXF0eV0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93UHJvZHVjdEltYWdlKGltYWdlLCAkc2NvcGUpIHtcclxuICAgICAgICBpZiAoKHR5cGVvZiBpbWFnZSA9PT0gXCJvYmplY3RcIikgJiYgKGltYWdlICE9PSBudWxsKSkge1xyXG4gICAgICAgICAgICAvL2FsZXJ0KGltYWdlLmRhdGEpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogSGFuZGxlIGFjdGlvbiB3aGVuIHRoZSBzaG9wcGVyIGNsaWNrcyBvbiArIC8gLSBmb3IgcXVhbnRpdHlcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGxpc3RlblF1YW50aXR5Q2hhbmdlKCkge1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBidXR0b24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCAkc2NvcGUgPSAkdGFyZ2V0LnBhcmVudHMoXCJsaVwiKTtcclxuICAgICAgICAgICAgY29uc3Qgdmlld01vZGVsID0gZ2V0Vmlld01vZGVsKCRzY29wZSk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9IHZpZXdNb2RlbC5xdWFudGl0eS4kaW5wdXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5TWluID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5LW1pbicpLCAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5TWF4ID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5LW1heCcpLCAxMCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcXR5ID0gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBhY3Rpb24gaXMgaW5jcmVtZW50aW5nXHJcbiAgICAgICAgICAgIGlmICgkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJykge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgcXVhbnRpdHkgbWF4IG9wdGlvbiBpcyBzZXRcclxuICAgICAgICAgICAgICAgIGlmIChxdWFudGl0eU1heCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBxdWFudGl0eSBkb2VzIG5vdCBleGNlZWQgbWF4XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChxdHkgKyAxKSA8PSBxdWFudGl0eU1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdHkrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHF0eSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF0eSA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHF1YW50aXR5IG1pbiBvcHRpb24gaXMgc2V0XHJcbiAgICAgICAgICAgICAgICBpZiAocXVhbnRpdHlNaW4gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgZG9lcyBub3QgZmFsbCBiZWxvdyBtaW5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHF0eSAtIDEpID49IHF1YW50aXR5TWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF0eS0tO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXR5LS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBoaWRkZW4gaW5wdXRcclxuICAgICAgICAgICAgdmlld01vZGVsLnF1YW50aXR5LiRpbnB1dC52YWwocXR5KTtcclxuICAgICAgICAgICAgLy8gdXBkYXRlIHRleHRcclxuICAgICAgICAgICAgdmlld01vZGVsLnF1YW50aXR5LiR0ZXh0LnRleHQocXR5KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9