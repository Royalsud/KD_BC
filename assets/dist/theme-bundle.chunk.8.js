(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brand; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Brand = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Brand, _CatalogPage);
  function Brand(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__["createTranslationDictionary"])(context);
    return _this;
  }
  var _proto = Brand.prototype;
  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }

    /* Halothemes */
    this.category_sidebar();
    Object(_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_5__["default"])(this.context);
    Object(_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_6__["default"])();
    this.showProductsPerPage();
    if (this.context.themeSettings.halo_show_more == true) {
      this.showmore_product();
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this2 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'brand/product-listing',
        sidebar: 'brand/sidebar'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);

      /* Halothemes */
      _this2.category_sidebar();
      _this2.showProductsPerPage();
      Object(_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_6__["default"])();
      Object(_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_5__["default"])(_this2.context);
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
    var _this3 = this;
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
          context: _this3.content,
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
  return Brand;
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiXSwibmFtZXMiOlsiQnJhbmQiLCJfQ2F0YWxvZ1BhZ2UiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJjb21wYXJlUHJvZHVjdHMiLCJ1cmxzIiwiJCIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwiaG9va3MiLCJvbiIsImNhdGVnb3J5X3NpZGViYXIiLCJwcm9kdWN0RGlzcGxheU1vZGUiLCJoYWxvU3RpY2t5VG9vbGJhciIsInNob3dQcm9kdWN0c1BlclBhZ2UiLCJ0aGVtZVNldHRpbmdzIiwiaGFsb19zaG93X21vcmUiLCJzaG93bW9yZV9wcm9kdWN0IiwiX3RoaXMyIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwib25NaW5QcmljZUVycm9yIiwicHJpY2VfbWluX2V2YWx1YXRpb24iLCJvbk1heFByaWNlRXJyb3IiLCJwcmljZV9tYXhfZXZhbHVhdGlvbiIsIm1pblByaWNlTm90RW50ZXJlZCIsInByaWNlX21pbl9ub3RfZW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsInByaWNlX21heF9ub3RfZW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwicHJpY2VfaW52YWxpZF92YWx1ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiYnJhbmRQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwiY29uZmlnIiwic2hvcF9ieV9icmFuZCIsImJyYW5kIiwicHJvZHVjdHMiLCJsaW1pdCIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsIkZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiZWFjaCIsImJyZWFkTGluayIsInByZXYiLCJjaGlsZHJlbiIsImF0dHIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiYWRkQ2xhc3MiLCJzaWJsaW5ncyIsInBhcmVudHMiLCJwYXJlbnQiLCJyZW1vdmVDbGFzcyIsImZpbmQiLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJoYXNDbGFzcyIsInVybCIsIlVSTCIsImhyZWYiLCJjIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsInZhbHVlIiwic2VsZWN0ZWQiLCJlIiwiX3RoaXMzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5leHRQYWdlIiwibmV4dCIsImxpbmsiLCJ1bmRlZmluZWQiLCJhamF4IiwidHlwZSIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZGF0YSIsImFwcGVuZCIsIk51bWJlciIsInRleHQiLCIkcHJvZFdyYXBJZCIsIkNhdGFsb2dQYWdlIiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImkiLCJhcmd1bWVudHMiLCJKU09OIiwicGFyc2UiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInNwbGl0IiwicG9wIiwicmVkdWNlIiwiYWNjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ21DO0FBQ2xCO0FBQ047QUFBQSxJQUUxQ0EsS0FBSywwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLEtBQUEsRUFBQUMsWUFBQTtFQUN0QixTQUFBRCxNQUFZRyxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFILFlBQUEsQ0FBQUksSUFBQSxPQUFNRixPQUFPLENBQUM7SUFDZEMsS0FBQSxDQUFLRSxvQkFBb0IsR0FBR0MsMEdBQTJCLENBQUNKLE9BQU8sQ0FBQztJQUFDLE9BQUFDLEtBQUE7RUFDckU7RUFBQyxJQUFBSSxNQUFBLEdBQUFSLEtBQUEsQ0FBQVMsU0FBQTtFQUFBRCxNQUFBLENBRURFLE9BQU8sR0FBUCxTQUFBQSxRQUFBLEVBQVU7SUFDTkMsd0VBQWUsQ0FBQyxJQUFJLENBQUNSLE9BQU8sQ0FBQ1MsSUFBSSxDQUFDO0lBRWxDLElBQUlDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ2hDLElBQUksQ0FBQ0MsaUJBQWlCLEVBQUU7SUFDNUIsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDQyxjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7TUFDcERDLGdFQUFLLENBQUNDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUNILGNBQWMsQ0FBQztJQUNyRDs7SUFFQTtJQUNBLElBQUksQ0FBQ0ksZ0JBQWdCLEVBQUU7SUFDdkJDLGtGQUFrQixDQUFDLElBQUksQ0FBQ2xCLE9BQU8sQ0FBQztJQUNoQ21CLDZFQUFpQixFQUFFO0lBQ25CLElBQUksQ0FBQ0MsbUJBQW1CLEVBQUU7SUFDMUIsSUFBSSxJQUFJLENB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Q0FBQyxDQUFDO0lBQzNCLE9BQU9nQixHQUFHO0VBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay44LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbmltcG9ydCBwcm9kdWN0RGlzcGxheU1vZGUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0RGlzcGxheU1vZGUnO1xuaW1wb3J0IGhhbG9TdGlja3lUb29sYmFyIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5VG9vbGJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5kIGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcblxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEhhbG90aGVtZXMgKi9cbiAgICAgICAgdGhpcy5jYXRlZ29yeV9zaWRlYmFyKCk7XG4gICAgICAgIHByb2R1Y3REaXNwbGF5TW9kZSh0aGlzLmNvbnRleHQpO1xuICAgICAgICBoYWxvU3RpY2t5VG9vbGJhcigpO1xuICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fc2hvd19tb3JlID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd21vcmVfcHJvZHVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByaWNlX21pbl9ldmFsdWF0aW9uOiBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9tYXhfZXZhbHVhdGlvbjogb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWluX25vdF9lbnRlcmVkOiBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9tYXhfbm90X2VudGVyZWQ6IG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX2ludmFsaWRfdmFsdWU6IG9uSW52YWxpZFByaWNlLFxuICAgICAgICB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5icmFuZFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnYnJhbmQvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnYnJhbmQvc2lkZWJhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgc2hvcF9ieV9icmFuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBicmFuZDoge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnYnJhbmQvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgLyogSGFsb3RoZW1lcyAqL1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeV9zaWRlYmFyKCk7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgICAgIGhhbG9TdGlja3lUb29sYmFyKCk7XG4gICAgICAgICAgICBwcm9kdWN0RGlzcGxheU1vZGUodGhpcy5jb250ZXh0KTtcblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIEhhbG90aGVtZXMgRnVuY3Rpb25zICovXG5cbiAgICBjYXRlZ29yeV9zaWRlYmFyKCkge1xuICAgICAgICBpZiAoJCgnLmFsbC1jYXRlZ29yaWVzLWxpc3QnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKCd1bC5hbGwtY2F0ZWdvcmllcy1saXN0IGxpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgY29uc3QgYnJlYWRMaW5rID0gJCgnLnBhZ2UtdHlwZS1wcm9kdWN0ICNicmVhZGNydW1icy13cmFwcGVyIHVsIGxpLmJyZWFkY3J1bWIuaXMtYWN0aXZlJykucHJldignLmJyZWFkY3J1bWInKS5jaGlsZHJlbignYScpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgICAgaWYgKCgkKHRoaXMpLmNoaWxkcmVuKCdhJykuYXR0cignaHJlZicpID09IHdpbmRvdy5sb2NhdGlvbikgfHwgKCQodGhpcykuY2hpbGRyZW4oJ2EnKS5hdHRyKCdocmVmJykgPT0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LWNhdCcpO1xuICAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuZHJvcGRvd24tY2F0ZWdvcnktbGlzdCcpLmFkZENsYXNzKCdjYXQtZXhwYW5kZWQnKS5zaWJsaW5ncygnLmljb24tZHJvcGRvd24nKS5hZGRDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5kcm9wZG93bi1jYXRlZ29yeS1saXN0JykuYWRkQ2xhc3MoJ2NhdC1leHBhbmRlZCcpLnNpYmxpbmdzKCcuaWNvbi1kcm9wZG93bicpLmFkZENsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCQodGhpcykuY2hpbGRyZW4oJ2EnKS5hdHRyKCdocmVmJykgPT0gYnJlYWRMaW5rKSB7XG4gICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtY2F0Jyk7XG4gICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3QnKS5hZGRDbGFzcygnY2F0LWV4cGFuZGVkJykuc2libGluZ3MoJy5pY29uLWRyb3Bkb3duJykuYWRkQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgJCgnLmFsbC1jYXRlZ29yaWVzLWxpc3QgLmljb24tZHJvcGRvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuZmluZChcIj4gLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3RcIikuc2xpZGVVcCggXCJzbG93XCIgKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuZmluZChcIj4gLmljb24tZHJvcGRvd25cIikucmVtb3ZlQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCI+IC5kcm9wZG93bi1jYXRlZ29yeS1saXN0XCIpLnNsaWRlVG9nZ2xlKCBcInNsb3dcIiApO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdpcy1jbGlja2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQcm9kdWN0c1BlclBhZ2UoKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIHZhciBjID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsaW1pdFwiKTtcbiAgICAgICAgICAgIGlmKGMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0I2xpbWl0IG9wdGlvbicpO1xuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGltaXQsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC52YWx1ZSA9PSBjKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge31cbiAgICB9XG5cbiAgICBzaG93bW9yZV9wcm9kdWN0KCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24td3JhcHBlciAucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKSxcbiAgICAgICAgICAgICAgICBsaW5rID0gbmV4dFBhZ2UuZmluZChcImFcIikuYXR0cihcImhyZWZcIik7XG5cbiAgICAgICAgICAgIGlmIChsaW5rID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICghJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLmhhc0NsYXNzKCdkaXNhYmxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLmFkZENsYXNzKCdkaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGxpbmsucmVwbGFjZShcImh0dHA6Ly9cIiwgXCIvL1wiKSxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChkYXRhKS5maW5kKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuYXBwZW5kKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuY2hpbGRyZW4oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24tbGlzdCcpLmh0bWwoJChkYXRhKS5maW5kKFwiLnBhZ2luYXRpb24tbGlzdFwiKS5odG1sKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlID0gJChcIi5wYWdpbmF0aW9uLXdyYXBwZXIgLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcigkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSkgPCBOdW1iZXIoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykuaHRtbCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykuaHRtbCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRQYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeSA+IHNwYW4nKS50ZXh0KCdObyBtb3JlIHByb2R1Y3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJHByb2RXcmFwSWQgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAuY2FyZC12YXJpYW50JykuYXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hhbG9Db2xvclZhcmlhbnRzKGNvbnRleHQsICRwcm9kV3JhcElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=