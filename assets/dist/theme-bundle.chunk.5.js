(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var leftArrowKey = 37;
var rightArrowKey = 39;
var Search = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Search, _CatalogPage);
  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  var _proto = Search.prototype;
  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;
    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };
    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }
    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }
    return nodeData;
  };
  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$productListingContainer.removeClass('u-hidden');
    this.$facetedSearchContainer.removeClass('u-hidden');
    this.$contentResultsContainer.addClass('u-hidden');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-product-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$contentResultsContainer.removeClass('u-hidden');
    this.$productListingContainer.addClass('u-hidden');
    this.$facetedSearchContainer.addClass('u-hidden');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-content-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.activateTab = function activateTab($tabToActivate) {
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    $tabsCollection.each(function (idx, tab) {
      var $tab = $(tab);
      if ($tab.is($tabToActivate)) {
        $tab.removeAttr('tabindex');
        $tab.attr('aria-selected', true);
        return;
      }
      $tab.attr('tabindex', '-1');
      $tab.attr('aria-selected', false);
    });
  };
  _proto.onTabChangeWithArrows = function onTabChangeWithArrows(event) {
    var eventKey = event.which;
    var isLeftOrRightArrowKeydown = eventKey === leftArrowKey || eventKey === rightArrowKey;
    if (!isLeftOrRightArrowKeydown) return;
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    var isActiveElementNotTab = $tabsCollection.index($(document.activeElement)) === -1;
    if (isActiveElementNotTab) return;
    var $activeTab = $("#" + document.activeElement.id);
    var activeTabIdx = $tabsCollection.index($activeTab);
    var lastTabIdx = $tabsCollection.length - 1;
    var nextTabIdx;
    switch (eventKey) {
      case leftArrowKey:
        nextTabIdx = activeTabIdx === 0 ? lastTabIdx : activeTabIdx - 1;
        break;
      case rightArrowKey:
        nextTabIdx = activeTabIdx === lastTabIdx ? 0 : activeTabIdx + 1;
        break;
      default:
        break;
    }
    $($tabsCollection.get(nextTabIdx)).focus().trigger('click');
  };
  _proto.onReady = function onReady() {
    var _this2 = this;
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context.urls);
    this.arrangeFocusOnSortBy();
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content');

    // Init faceted search
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }

    // Init collapsibles
    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showContent();
    });
    $('[data-search-page-tabs]').on('keyup', this.onTabChangeWithArrows);
    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }
    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();
      if (!validator.check()) {
        return event.preventDefault();
      }
      $searchForm.find('input[name="category\[\]"]').remove();
      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
    setTimeout(function () {
      $('[data-search-aria-message]').removeClass('u-hidden');
    }, 100);

    /* Halothemes */
    this.category_sidebar();
    Object(_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_10__["default"])(this.context);
    Object(_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_11__["default"])();
    this.showProductsPerPage();
    if (this.context.themeSettings.halo_show_more == true) {
      this.showmore_product();
    }
  };
  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;
    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };
  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;
    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;
    // eslint-disable-next-line object-curly-newline
    var _this$context = this.context,
      onMinPriceError = _this$context.onMinPriceError,
      onMaxPriceError = _this$context.onMaxPriceError,
      minPriceNotEntered = _this$context.minPriceNotEntered,
      maxPriceNotEntered = _this$context.maxPriceNotEntered,
      onInvalidPrice = _this$context.onInvalidPrice;
    var $productListingContainer = $('#product-listing-container');
    var $contentListingContainer = $('#search-results-content');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var $contentCount = $('#search-results-content-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);
      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);
        _this5.showContent(false);
      } else {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);
        _this5.showProducts(false);
      }
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);

      /* Halothemes */
      _this5.category_sidebar();
      Object(_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_10__["default"])(_this5.context);
      Object(_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_11__["default"])();
      _this5.showProductsPerPage();
      if (_this5.context.themeSettings.halo_show_more == true) {
        _this5.showmore_product();
      }
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };
  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_9__["default"])({
      submit: $form,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__["announceInputErrorMessage"]
    });
    return this;
  };
  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }
    return this;
  };
  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }
    return false;
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
    var _this6 = this;
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
          context: _this6.content,
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
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./node_modules/jstree/dist/jstree.min.js":
/*!************************************************!*\
  !*** ./node_modules/jstree/dist/jstree.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\BigCommerce\\node_modules\\jstree\\dist\\jstree.min.js'");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sIm5hbWVzIjpbImxlZnRBcnJvd0tleSIsInJpZ2h0QXJyb3dLZXkiLCJTZWFyY2giLCJfQ2F0YWxvZ1BhZ2UiLCJfaW5oZXJpdHNMb29zZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3Byb3RvIiwicHJvdG90eXBlIiwiZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlIiwibm9kZSIsIl90aGlzIiwibm9kZURhdGEiLCJ0ZXh0IiwiZGF0YSIsImlkIiwibWV0YWRhdGEiLCJzdGF0ZSIsInNlbGVjdGVkIiwib3BlbmVkIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwicHVzaCIsInNob3dQcm9kdWN0cyIsIm5hdmlnYXRlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwicmVtb3ZlQ2xhc3MiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsIiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciIsImFkZENsYXNzIiwiJCIsImFjdGl2YXRlVGFiIiwic2VhcmNoRGF0YSIsInVybCIsImNvdW50IiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwicGFnZSIsImdvVG9VcmwiLCJzaG93Q29udGVudCIsIiR0YWJUb0FjdGl2YXRlIiwiJHRhYnNDb2xsZWN0aW9uIiwiZmluZCIsImVhY2giLCJpZHgiLCJ0YWIiLCIkdGFiIiwiaXMiLCJyZW1vdmVBdHRyIiwiYXR0ciIsIm9uVGFiQ2hhbmdlV2l0aEFycm93cyIsImV2ZW50IiwiZXZlbnRLZXkiLCJ3aGljaCIsImlzTGVmdE9yUmlnaHRBcnJvd0tleWRvd24iLCJpc0FjdGl2ZUVsZW1lbnROb3RUYWIiLCJpbmRleCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsIiRhY3RpdmVUYWIiLCJhY3RpdmVUYWJJZHgiLCJsYXN0VGFiSWR4IiwibGVuZ3RoIiwibmV4dFRhYklkeCIsImdldCIsImZvY3VzIiwidHJpZ2dlciIsIm9uUmVhZHkiLCJfdGhpczIiLCJjb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwidXJscyIsImFycmFuZ2VGb2N1c09uU29ydEJ5IiwiJHNlYXJjaEZvcm0iLCIkY2F0ZWdvcnlUcmVlQ29udGFpbmVyIiwiVXJsIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0cmVlRGF0YSIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwiaG9va3MiLCJvbiIsImNvbGxhcHNpYmxlRmFjdG9yeSIsInByZXZlbnREZWZhdWx0IiwicXVlcnkiLCJzZWN0aW9uIiwidmFsaWRhdG9yIiwiaW5pdFZhbGlkYXRpb24iLCJiaW5kVmFsaWRhdGlvbiIsImNhdGVnb3J5VHJlZSIsImNhdGVnb3J5VHJlZURhdGEiLCJjcmVhdGVDYXRlZ29yeVRyZWUiLCJzZWxlY3RlZENhdGVnb3J5SWRzIiwianN0cmVlIiwiZ2V0X3NlbGVjdGVkIiwiY2hlY2siLCJyZW1vdmUiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiX3N0ZXAiLCJkb25lIiwiY2F0ZWdvcnlJZCIsInZhbHVlIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImFwcGVuZCIsInNldFRpbWVvdXQiLCJjYXRlZ29yeV9zaWRlYmFyIiwicHJvZHVjdERpc3BsYXlNb2RlIiwiaGFsb1N0aWNreVRvb2xiYXIiLCJzaG93UHJvZHVjdHNQZXJQYWdlIiwidGhlbWVTZXR0aW5ncyIsImhhbG9fc2hvd19tb3JlIiwic2hvd21vcmVfcHJvZHVjdCIsImxvYWRUcmVlTm9kZXMiLCJjYiIsIl90aGlzMyIsImFqYXgiLCJzZWxlY3RlZENhdGVnb3J5SWQiLCJwcmVmaXgiLCJoZWFkZXJzIiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsImZvcm1hdHRlZFJlc3VsdHMiLCJkYXRhTm9kZSIsIiRjb250YWluZXIiLCJfdGhpczQiLCJ0cmVlT3B0aW9ucyIsImNvcmUiLCJ0aGVtZXMiLCJpY29ucyIsImNoZWNrYm94IiwidGhyZWVfc3RhdGUiLCJwbHVnaW5zIiwiX3RoaXM1IiwiX3RoaXMkY29udGV4dCIsIm9uTWluUHJpY2VFcnJvciIsIm9uTWF4UHJpY2VFcnJvciIsIm1pblByaWNlTm90RW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwiJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyIiwiJHNlYXJjaEhlYWRpbmciLCIkc2VhcmNoQ291bnQiLCIkY29udGVudENvdW50IiwicHJvZHVjdHNQZXJQYWdlIiwic2VhcmNoUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwiY29udGVudExpc3RpbmciLCJzaWRlYmFyIiwiaGVhZGluZyIsInByb2R1Y3RDb3VudCIsImNvbnRlbnRDb3VudCIsImNvbmZpZyIsInByb2R1Y3RfcmVzdWx0cyIsImxpbWl0Iiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCIkZm9ybSIsIm5vZCIsInN1Ym1pdCIsInRhcCIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCIkZWxlbWVudCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJlcnJvck1lc3NhZ2UiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJicmVhZExpbmsiLCJwcmV2IiwicGF0aG5hbWUiLCJzaWJsaW5ncyIsInBhcmVudHMiLCJwYXJlbnQiLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJoYXNDbGFzcyIsIlVSTCIsImMiLCJzZWFyY2hQYXJhbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJjYWxsIiwiZWxlbWVudCIsImUiLCJfdGhpczYiLCJuZXh0UGFnZSIsIm5leHQiLCJsaW5rIiwidW5kZWZpbmVkIiwicmVwbGFjZSIsInN1Y2Nlc3Mi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QUFDLCtDQUErQyxDQUFDLENBQUM2SyxJQUFJLEVBQUU7Y0FFcEUsSUFBSUssTUFBTSxDQUFDbEwsQ0FBQyxDQUFDakIsSUFBSSxDQUFDLENBQUM2QixJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQzlCLElBQUksRUFBRSxDQUFDLEdBQUdvTSxNQUFNLENBQUNsTCxDQUFDLENBQUNqQixJQUFJLENBQUMsQ0FBQzZCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOUIsSUFBSSxFQUFFLENBQUMsRUFBRTtnQkFDL0drQixDQUFDLENBQUMsbUNBQW1DLENBQUMsQ0FBQ3lJLElBQUksQ0FBQ3pJLENBQUMsQ0FBQ2pCLElBQUksQ0FBQyxDQUFDNkIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM5QixJQUFJLEVBQUUsQ0FBQztjQUM3RixDQUFDLE1BQU07Z0JBQ0hrQixDQUFDLENBQUMsbUNBQW1DLENBQUMsQ0FBQ3lJLElBQUksQ0FBQ3pJLENBQUMsQ0FBQ2pCLElBQUksQ0FBQyxDQUFDNkIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM5QixJQUFJLEVBQUUsQ0FBQztjQUMvRjtjQUNBLElBQUk4TCxRQUFRLENBQUM1SSxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QmhDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDRCxRQUFRLENBQUMsU0FBUyxDQUFDO2dCQUNsREMsQ0FBQyxDQUFDLGtDQUFrQyxDQUFDLENBQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUM7Y0FDakU7Y0FFQSxJQUFJcU0sV0FBVyxHQUFHbkwsQ0FBQyxDQUFDLDBDQUEwQyxDQUFDLENBQUNtQixJQUFJLENBQUMsSUFBSSxDQUFDO2NBQzFFO1lBQ0o7VUFDSjtRQUNKLENBQUMsQ0FBQztNQUNOO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUFoRCxNQUFBO0FBQUEsRUE5YitCaU4sZ0RBQVciLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgJ2pzdHJlZSc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgcHJvZHVjdERpc3BsYXlNb2RlIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvUHJvZHVjdERpc3BsYXlNb2RlJztcbmltcG9ydCBoYWxvU3RpY2t5VG9vbGJhciBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1N0aWNreVRvb2xiYXInO1xuXG5jb25zdCBsZWZ0QXJyb3dLZXkgPSAzNztcbmNvbnN0IHJpZ2h0QXJyb3dLZXkgPSAzOTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIGZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSB7XG4gICAgICAgIGNvbnN0IG5vZGVEYXRhID0ge1xuICAgICAgICAgICAgdGV4dDogbm9kZS5kYXRhLFxuICAgICAgICAgICAgaWQ6IG5vZGUubWV0YWRhdGEuaWQsXG4gICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBub2RlLnNlbGVjdGVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobm9kZS5zdGF0ZSkge1xuICAgICAgICAgICAgbm9kZURhdGEuc3RhdGUub3BlbmVkID0gbm9kZS5zdGF0ZSA9PT0gJ29wZW4nO1xuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gW107XG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoY2hpbGROb2RlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlRGF0YTtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdHMobmF2aWdhdGUgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW4nKTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYigkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpKTtcblxuICAgICAgICBpZiAoIW5hdmlnYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWFyY2hEYXRhID0gJCgnI3NlYXJjaC1yZXN1bHRzLXByb2R1Y3QtY291bnQgc3BhbicpLmRhdGEoKTtcbiAgICAgICAgY29uc3QgdXJsID0gKHNlYXJjaERhdGEuY291bnQgPiAwKSA/IHNlYXJjaERhdGEudXJsIDogdXJsVXRpbHMucmVwbGFjZVBhcmFtcyhzZWFyY2hEYXRhLnVybCwge1xuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIHNob3dDb250ZW50KG5hdmlnYXRlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVUYWIoJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKSk7XG5cbiAgICAgICAgaWYgKCFuYXZpZ2F0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50LWNvdW50IHNwYW4nKS5kYXRhKCk7XG4gICAgICAgIGNvbnN0IHVybCA9IChzZWFyY2hEYXRhLmNvdW50ID4gMCkgPyBzZWFyY2hEYXRhLnVybCA6IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMoc2VhcmNoRGF0YS51cmwsIHtcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZVRhYigkdGFiVG9BY3RpdmF0ZSkge1xuICAgICAgICBjb25zdCAkdGFic0NvbGxlY3Rpb24gPSAkKCdbZGF0YS1zZWFyY2gtcGFnZS10YWJzXScpLmZpbmQoJ1tyb2xlPVwidGFiXCJdJyk7XG5cbiAgICAgICAgJHRhYnNDb2xsZWN0aW9uLmVhY2goKGlkeCwgdGFiKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFiID0gJCh0YWIpO1xuXG4gICAgICAgICAgICBpZiAoJHRhYi5pcygkdGFiVG9BY3RpdmF0ZSkpIHtcbiAgICAgICAgICAgICAgICAkdGFiLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICAgICAgJHRhYi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkdGFiLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICAkdGFiLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uVGFiQ2hhbmdlV2l0aEFycm93cyhldmVudCkge1xuICAgICAgICBjb25zdCBldmVudEtleSA9IGV2ZW50LndoaWNoO1xuICAgICAgICBjb25zdCBpc0xlZnRPclJpZ2h0QXJyb3dLZXlkb3duID0gZXZlbnRLZXkgPT09IGxlZnRBcnJvd0tleVxuICAgICAgICAgICAgfHwgZXZlbnRLZXkgPT09IHJpZ2h0QXJyb3dLZXk7XG4gICAgICAgIGlmICghaXNMZWZ0T3JSaWdodEFycm93S2V5ZG93bikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0ICR0YWJzQ29sbGVjdGlvbiA9ICQoJ1tkYXRhLXNlYXJjaC1wYWdlLXRhYnNdJykuZmluZCgnW3JvbGU9XCJ0YWJcIl0nKTtcblxuICAgICAgICBjb25zdCBpc0FjdGl2ZUVsZW1lbnROb3RUYWIgPSAkdGFic0NvbGxlY3Rpb24uaW5kZXgoJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkgPT09IC0xO1xuICAgICAgICBpZiAoaXNBY3RpdmVFbGVtZW50Tm90VGFiKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgJGFjdGl2ZVRhYiA9ICQoYCMke2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWR9YCk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYklkeCA9ICR0YWJzQ29sbGVjdGlvbi5pbmRleCgkYWN0aXZlVGFiKTtcbiAgICAgICAgY29uc3QgbGFzdFRhYklkeCA9ICR0YWJzQ29sbGVjdGlvbi5sZW5ndGggLSAxO1xuXG4gICAgICAgIGxldCBuZXh0VGFiSWR4O1xuICAgICAgICBzd2l0Y2ggKGV2ZW50S2V5KSB7XG4gICAgICAgIGNhc2UgbGVmdEFycm93S2V5OlxuICAgICAgICAgICAgbmV4dFRhYklkeCA9IGFjdGl2ZVRhYklkeCA9PT0gMCA/IGxhc3RUYWJJZHggOiBhY3RpdmVUYWJJZHggLSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcmlnaHRBcnJvd0tleTpcbiAgICAgICAgICAgIG5leHRUYWJJZHggPSBhY3RpdmVUYWJJZHggPT09IGxhc3RUYWJJZHggPyAwIDogYWN0aXZlVGFiSWR4ICsgMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgICQoJHRhYnNDb2xsZWN0aW9uLmdldChuZXh0VGFiSWR4KSkuZm9jdXMoKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG4gICAgICAgIHRoaXMuYXJyYW5nZUZvY3VzT25Tb3J0QnkoKTtcblxuICAgICAgICBjb25zdCAkc2VhcmNoRm9ybSA9ICQoJ1tkYXRhLWFkdmFuY2VkLXNlYXJjaC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyID0gJHNlYXJjaEZvcm0uZmluZCgnW2RhdGEtc2VhcmNoLWNhdGVnb3J5LXRyZWVdJyk7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHRyZWVEYXRhID0gW107XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudCcpO1xuXG4gICAgICAgIC8vIEluaXQgZmFjZXRlZCBzZWFyY2hcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1wYWdlLXRhYnNdJykub24oJ2tleXVwJywgdGhpcy5vblRhYkNoYW5nZVdpdGhBcnJvd3MpO1xuXG4gICAgICAgIGlmICh0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKCdsaS5wcm9kdWN0JykubGVuZ3RoID09PSAwIHx8IHVybC5xdWVyeS5zZWN0aW9uID09PSAnY29udGVudCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5pbml0VmFsaWRhdGlvbigkc2VhcmNoRm9ybSlcbiAgICAgICAgICAgIC5iaW5kVmFsaWRhdGlvbigkc2VhcmNoRm9ybS5maW5kKCcjc2VhcmNoX3F1ZXJ5X2FkdicpKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuY2F0ZWdvcnlUcmVlLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHRyZWVEYXRhLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNhdGVnb3J5VHJlZURhdGEgPSB0cmVlRGF0YTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeVRyZWUoJGNhdGVnb3J5VHJlZUNvbnRhaW5lcik7XG5cbiAgICAgICAgJHNlYXJjaEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcnlJZHMgPSAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyLmpzdHJlZSgpLmdldF9zZWxlY3RlZCgpO1xuXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRvci5jaGVjaygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzZWFyY2hGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjYXRlZ29yeVxcW1xcXVwiXScpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhdGVnb3J5SWQgb2Ygc2VsZWN0ZWRDYXRlZ29yeUlkcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gJCgnPGlucHV0PicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYXRlZ29yeVtdJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkc2VhcmNoRm9ybS5hcHBlbmQoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICQoJ1tkYXRhLXNlYXJjaC1hcmlhLW1lc3NhZ2VdJykucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XG4gICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgLyogSGFsb3RoZW1lcyAqL1xuICAgICAgICB0aGlzLmNhdGVnb3J5X3NpZGViYXIoKTtcbiAgICAgICAgcHJvZHVjdERpc3BsYXlNb2RlKHRoaXMuY29udGV4dCk7XG4gICAgICAgIGhhbG9TdGlja3lUb29sYmFyKCk7XG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19zaG93X21vcmUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93bW9yZV9wcm9kdWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkVHJlZU5vZGVzKG5vZGUsIGNiKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvcmVtb3RlL3YxL2NhdGVnb3J5LXRyZWUnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnlJZDogbm9kZS5pZCxcbiAgICAgICAgICAgICAgICBwcmVmaXg6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICd4LXhzcmYtdG9rZW4nOiB3aW5kb3cuQkNEYXRhICYmIHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA/IHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkuZG9uZShkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFJlc3VsdHMgPSBbXTtcblxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChkYXRhTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFJlc3VsdHMucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShkYXRhTm9kZSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNiKGZvcm1hdHRlZFJlc3VsdHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVDYXRlZ29yeVRyZWUoJGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB0cmVlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvcmU6IHtcbiAgICAgICAgICAgICAgICBkYXRhOiAobm9kZSwgY2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUm9vdCBub2RlXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmlkID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXp5IGxvYWRlZCBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVHJlZU5vZGVzKG5vZGUsIGNiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25zOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tib3g6IHtcbiAgICAgICAgICAgICAgICB0aHJlZV9zdGF0ZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgICdjaGVja2JveCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuXG4gICAgICAgICRjb250YWluZXIuanN0cmVlKHRyZWVPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9iamVjdC1jdXJseS1uZXdsaW5lXG4gICAgICAgIGNvbnN0IHsgb25NaW5QcmljZUVycm9yLCBvbk1heFByaWNlRXJyb3IsIG1pblByaWNlTm90RW50ZXJlZCwgbWF4UHJpY2VOb3RFbnRlcmVkLCBvbkludmFsaWRQcmljZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkY29udGVudExpc3RpbmdDb250YWluZXIgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudCcpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJHNlYXJjaEhlYWRpbmcgPSAkKCcjc2VhcmNoLXJlc3VsdHMtaGVhZGluZycpO1xuICAgICAgICBjb25zdCAkc2VhcmNoQ291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtcHJvZHVjdC1jb3VudCcpO1xuICAgICAgICBjb25zdCAkY29udGVudENvdW50ID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQtY291bnQnKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LnNlYXJjaFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnc2VhcmNoL3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgY29udGVudExpc3Rpbmc6ICdzZWFyY2gvY29udGVudC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnc2VhcmNoL3NpZGViYXInLFxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdzZWFyY2gvaGVhZGluZycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdENvdW50OiAnc2VhcmNoL3Byb2R1Y3QtY291bnQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRDb3VudDogJ3NlYXJjaC9jb250ZW50LWNvdW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0X3Jlc3VsdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnc2VhcmNoL3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkc2VhcmNoSGVhZGluZy5odG1sKGNvbnRlbnQuaGVhZGluZyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAodXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xuICAgICAgICAgICAgICAgICRjb250ZW50TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQuY29udGVudExpc3RpbmcpO1xuICAgICAgICAgICAgICAgICRjb250ZW50Q291bnQuaHRtbChjb250ZW50LmNvbnRlbnRDb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudChmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgICAgICAgICAgICAkc2VhcmNoQ291bnQuaHRtbChjb250ZW50LnByb2R1Y3RDb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgLyogSGFsb3RoZW1lcyAqL1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeV9zaWRlYmFyKCk7XG4gICAgICAgICAgICBwcm9kdWN0RGlzcGxheU1vZGUodGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgIGhhbG9TdGlja3lUb29sYmFyKCk7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX3Nob3dfbW9yZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93bW9yZV9wcm9kdWN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgb25JbnZhbGlkUHJpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0VmFsaWRhdGlvbigkZm9ybSkge1xuICAgICAgICB0aGlzLiRmb3JtID0gJGZvcm07XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJGZvcm0sXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJpbmRWYWxpZGF0aW9uKCRlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAkZWxlbWVudC5kYXRhKCdlcnJvck1lc3NhZ2UnKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qIEhhbG90aGVtZXMgRnVuY3Rpb25zICovXG5cbiAgICBjYXRlZ29yeV9zaWRlYmFyKCkge1xuICAgICAgICBpZiAoJCgnLmFsbC1jYXRlZ29yaWVzLWxpc3QnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKCd1bC5hbGwtY2F0ZWdvcmllcy1saXN0IGxpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgY29uc3QgYnJlYWRMaW5rID0gJCgnLnBhZ2UtdHlwZS1wcm9kdWN0ICNicmVhZGNydW1icy13cmFwcGVyIHVsIGxpLmJyZWFkY3J1bWIuaXMtYWN0aXZlJykucHJldignLmJyZWFkY3J1bWInKS5jaGlsZHJlbignYScpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgICAgaWYgKCgkKHRoaXMpLmNoaWxkcmVuKCdhJykuYXR0cignaHJlZicpID09IHdpbmRvdy5sb2NhdGlvbikgfHwgKCQodGhpcykuY2hpbGRyZW4oJ2EnKS5hdHRyKCdocmVmJykgPT0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LWNhdCcpO1xuICAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuZHJvcGRvd24tY2F0ZWdvcnktbGlzdCcpLmFkZENsYXNzKCdjYXQtZXhwYW5kZWQnKS5zaWJsaW5ncygnLmljb24tZHJvcGRvd24nKS5hZGRDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5kcm9wZG93bi1jYXRlZ29yeS1saXN0JykuYWRkQ2xhc3MoJ2NhdC1leHBhbmRlZCcpLnNpYmxpbmdzKCcuaWNvbi1kcm9wZG93bicpLmFkZENsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCQodGhpcykuY2hpbGRyZW4oJ2EnKS5hdHRyKCdocmVmJykgPT0gYnJlYWRMaW5rKSB7XG4gICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtY2F0Jyk7XG4gICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3QnKS5hZGRDbGFzcygnY2F0LWV4cGFuZGVkJykuc2libGluZ3MoJy5pY29uLWRyb3Bkb3duJykuYWRkQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgJCgnLmFsbC1jYXRlZ29yaWVzLWxpc3QgLmljb24tZHJvcGRvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuZmluZChcIj4gLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3RcIikuc2xpZGVVcCggXCJzbG93XCIgKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuZmluZChcIj4gLmljb24tZHJvcGRvd25cIikucmVtb3ZlQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCI+IC5kcm9wZG93bi1jYXRlZ29yeS1saXN0XCIpLnNsaWRlVG9nZ2xlKCBcInNsb3dcIiApO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdpcy1jbGlja2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQcm9kdWN0c1BlclBhZ2UoKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIHZhciBjID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsaW1pdFwiKTtcbiAgICAgICAgICAgIGlmKGMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0I2xpbWl0IG9wdGlvbicpO1xuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGltaXQsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC52YWx1ZSA9PSBjKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge31cbiAgICB9XG5cbiAgICBzaG93bW9yZV9wcm9kdWN0KCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24td3JhcHBlciAucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKSxcbiAgICAgICAgICAgICAgICBsaW5rID0gbmV4dFBhZ2UuZmluZChcImFcIikuYXR0cihcImhyZWZcIik7XG5cbiAgICAgICAgICAgIGlmIChsaW5rID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICghJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLmhhc0NsYXNzKCdkaXNhYmxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLmFkZENsYXNzKCdkaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGxpbmsucmVwbGFjZShcImh0dHA6Ly9cIiwgXCIvL1wiKSxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChkYXRhKS5maW5kKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuYXBwZW5kKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuY2hpbGRyZW4oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24tbGlzdCcpLmh0bWwoJChkYXRhKS5maW5kKFwiLnBhZ2luYXRpb24tbGlzdFwiKS5odG1sKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlID0gJChcIi5wYWdpbmF0aW9uLXdyYXBwZXIgLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcigkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSkgPCBOdW1iZXIoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykuaHRtbCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykuaHRtbCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRQYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeSA+IHNwYW4nKS50ZXh0KCdObyBtb3JlIHByb2R1Y3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJHByb2RXcmFwSWQgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAuY2FyZC12YXJpYW50JykuYXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hhbG9Db2xvclZhcmlhbnRzKGNvbnRleHQsICRwcm9kV3JhcElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=