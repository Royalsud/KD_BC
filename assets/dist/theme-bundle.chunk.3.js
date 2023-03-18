(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./assets/js/theme/common/utils/safe-string.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/utils/safe-string.js ***!
  \*****************************************************/
/*! exports provided: safeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeString", function() { return safeString; });
/**
 * This function parses HTML entities in strings
 * @param str: String
 * @returns String
*/
var safeString = function safeString(str) {
  var d = new DOMParser();
  return d.parseFromString(str, 'text/html').body.textContent;
};

/***/ }),

/***/ "./assets/js/theme/halothemes/haloBundleProducts.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloBundleProducts.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./haloCalculateFreeShipping */ "./assets/js/theme/halothemes/haloCalculateFreeShipping.js");


function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var relate_tab = "#tab-related";
  var $bundle = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products');
  showBundle();
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.halo-toggle-options', function (event) {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-toggle-options').not(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this)).removeClass('is-focus');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-detail-options').not(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next('.halo-detail-options')).removeClass('is-open');
    if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next('.halo-detail-options').hasClass('is-open')) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).addClass('is-focus');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next('.halo-detail-options').addClass('is-open');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next('.halo-detail-options').removeClass('is-open');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).removeClass('is-focus');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.halo-option-close', function (event) {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-detail-options').removeClass('is-open');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-toggle-options').removeClass('is-focus');
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', function (event) {
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-detail-options').hasClass('is-open')) {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target).closest('.halo-detail-options').length === 0 && jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target).closest('.halo-toggle-options').length === 0) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-detail-options').removeClass('is-open');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-toggle-options').removeClass('is-focus');
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('change', '.halo-detail-checkbox', function () {
    var id = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('id').replace('fbt_product', '');
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).is(':checked') == false) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + id + '"]').removeClass('isChecked');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + id + '"]').addClass('isChecked');
    }
    totalPrice();
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '#halo-addAll', function (event) {
    var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()('form', jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products'));
    var arrPro = new Array();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-detail-checkbox').each(function (i, val) {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).is(':checked')) {
        arrPro.push(i);
      }
    });
    var check = false;
    if (arrPro.length > 0) {
      check = checkProduct($form, arrPro);
    }
    if (check) {
      if (arrPro.length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .loadingOverlay').show();
        addToCart($form, 0, arrPro);
      }
    } else {
      var errorMessage = 'Please make sure all options have been filled in.';
      if (errorMessage) {
        // Strip the HTML from the error message
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        return alert(tmp.textContent || tmp.innerText);
      }
    }
    event.preventDefault();
  });
  function showBundle() {
    var options = {
      template: {
        item: 'halothemes/product/halo-bundle-products-tmp',
        options: 'halothemes/product/halo-bundle-products-options'
      }
    };
    var prodBundleId = [];
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products').removeClass('halo-block-disable');
    firstItem();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .bundle-product-right').append('<div class="halo-product-total"><div class="total-price"><span class="text">Total price:</span><span class="price"></span></div><a class="button button--primary halo-product-total-button" id="halo-addAll">Add All To Cart</a></div>');
    jquery__WEBPACK_IMPORTED_MODULE_2___default.a.each(context.productCustomFields, function (index, obj) {
      if (obj.name == '__bundleid') {
        prodBundleId = JSON.parse('[' + obj.value + ']');
      }
    });
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products').length > 0 && prodBundleId.length == 0) {
      var num = 0;
      var list = [];
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(relate_tab + ' .card').each(function (i, val) {
        list.push({
          i: i,
          data: ""
        });
        var pId = jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).data('product-id');
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return false;
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == jquery__WEBPACK_IMPORTED_MODULE_2___default()(relate_tab + ' .card').length) {
              showList(list);
            }
          });
        }
      });
    } else if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products').length > 0 && prodBundleId.length > 0) {
      var num = 0;
      var list = [];
      jquery__WEBPACK_IMPORTED_MODULE_2___default.a.each(prodBundleId, function (i, val) {
        list.push({
          i: i,
          data: ""
        });
        var pId = prodBundleId[i];
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return false;
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == prodBundleId.length) {
              showList(list);
            }
          });
        }
      });
    }
  }
  function firstItem() {
    var firstItem = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .halo-product-list .halo-product-item:first-child'),
      pId = firstItem.data('product-id'),
      $form = firstItem.find('form'),
      hasOptions = $form.find('[data-fbt-option-change]').length,
      hasDefaultOptions = $form.find('[data-default]').length;
    if (hasDefaultOptions && hasOptions) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
        var attributesData = response.data || {};
        var attributesContent = response.content || {};
        updateProductAttributes($form, attributesData);
        if (hasDefaultOptions) {
          updateView($form, attributesData, attributesContent);
        } else {
          updateDefaultAttributesForOOS(attributesData);
        }
      });
    }
  }
  function showList(list) {
    list.forEach(function (element) {
      var response = element.data;
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .halo-product-list').append(response.item);
      if (response.options.trim() != "") {
        var pId = jquery__WEBPACK_IMPORTED_MODULE_2___default()(response.item).data('product-id');
        var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .halo-product-list .halo-product-item[data-product-id="' + pId + '"] form');
        $form.append(response.options);
        var $productOptionsElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change]', $form);
        var hasOptions = $productOptionsElement.html().trim().length;
        var hasDefaultOptions = jquery__WEBPACK_IMPORTED_MODULE_2___default()(response.options).find('[data-default]').length;
        if (hasDefaultOptions && hasOptions) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
            var attributesData = response.data || {};
            var attributesContent = response.content || {};
            updateProductAttributes($form, attributesData);
            if (hasDefaultOptions) {
              updateView($form, attributesData, attributesContent);
            } else {
              updateDefaultAttributesForOOS(attributesData);
            }
          });
        }
        setProductVariant();
      }
    });
    productOptions();
    showSlickSlider();
    totalPrice();
  }
  function showSlickSlider() {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .halo-product-list').slick({
      dots: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      mobileFirst: true,
      infinite: false,
      nextArrow: "<div class='slick-next slick-arrow'>next</div>",
      prevArrow: "<div class='slick-prev slick-arrow'>prev</div>",
      responsive: [{
        breakpoint: 1440,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 4,
          dots: false,
          arrows: true
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: true
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }]
    });
  }
  function checkProduct(form, arrPro) {
    var check = true;
    for (var i = 0, len = arrPro.length; i < len; i++) {
      var k = arrPro[i];
      var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()(form[k]);
      if ($form.find('[data-fbt-option-change]').length) {
        check = checkBeforeAdd($form);
        if (check == false) return false;
      }
    }
    return check;
  }
  function checkBeforeAdd($attributes) {
    var check = true;
    $attributes.find('input:text, input:password, input:file, textarea').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop('required')) {} else {
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val()) {} else {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).focus();
          check = false;
        }
      }
    });
    $attributes.find('select').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop('required')) {} else {
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val()) {} else {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).focus();
          check = false;
        }
      }
    });
    var att = "";
    $attributes.find('input:radio, input:checkbox').each(function () {
      if (att != jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("name")) {
        att = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("name");
        if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop('required')) {
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {}
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {}
          }
        } else {
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
        }
      }
    });
    return check;
  }
  function addToCart(form, i, arrP) {
    var _this = this;
    if (i >= arrP.length) {
      window.location = '/cart.php';
      return;
    }
    if (window.FormData === undefined) {
      return;
    }
    var k = arrP[i];
    // Add item to cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemAdd(filterEmptyFilesFromForm(new FormData(form[k])), function (err, response) {
      var errorMessage = err || response.data.error;
      if (errorMessage) {
        // Strip the HTML from the error message
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        alert(tmp.textContent || tmp.innerText);
      }
      i++;
      if (i >= arrP.length) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .loadingOverlay').hide();
        updateCartContent(response.data.cart_item.id);
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.modal-background').trigger('click');
        var options = {
          template: 'common/cart-preview'
        };
        var loadingClass = 'is-loading';
        var $body = jquery__WEBPACK_IMPORTED_MODULE_2___default()('body');
        var $cartDropdown = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#cart-preview-dropdown');
        var $cartLoading = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<div class="loadingOverlay"></div>');
        $body.toggleClass('halo-open-side-cart');
        $cartDropdown.addClass(loadingClass).html($cartLoading);
        $cartLoading.show();
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getContent(options, function (err, response) {
          $cartDropdown.removeClass(loadingClass).html(response);
          $cartLoading.hide();
          var quantity = jquery__WEBPACK_IMPORTED_MODULE_2___default()(response).find('[data-cart-quantity]').data('cartQuantity') || 0;
          $body.trigger('cart-quantity-update', quantity);
          Object(_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.context);
        });
        return;
      }
      addToCart(form, i, arrP);
    });
  }
  function updateCartContent(cartItemId, onComplete) {
    var $body = jquery__WEBPACK_IMPORTED_MODULE_2___default()('body');
    var loadingClass = 'is-loading';
    var $cartDropdown = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#cart-preview-dropdown');
    var $cartLoading = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<div class="loadingOverlay"></div>');
    var $sideCartBlock = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#sideBlock_cart');
    $body.toggleClass('openCartSidebar is-side-block');
    $sideCartBlock.toggleClass('is-open');
    $cartDropdown.addClass(loadingClass).html($cartLoading);
    $cartLoading.show();
    getCartContent(cartItemId, function (err, response) {
      if (err) {
        return;
      }
      $cartDropdown.removeClass(loadingClass).html(response);
      $cartLoading.hide();
      var quantity = jquery__WEBPACK_IMPORTED_MODULE_2___default()(response).find('[data-cart-quantity]').data('cartQuantity') || 0;
      $body.trigger('cart-quantity-update', quantity);
      Object(_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_4__["default"])(context);
      if (onComplete) {
        onComplete(response);
      }
    });
  }
  function getCartContent(cartItemId, onComplete) {
    var options = {
      template: 'common/cart-preview'
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getContent(options, onComplete);
  }
  function totalPrice() {
    var total = 0,
      pos = 0,
      symbol = "$";
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item.isChecked').each(function (i, val) {
      var currency, price, s;
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('.price-section .price.price--withTax').length) {
        currency = jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('.price-section .price.price--withTax').text();
      } else {
        currency = jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('.price-section .price.price--withoutTax').text();
      }
      price = parseFloat(currency.replace(/[^0-9.-]+/g, ""));
      s = currency.replace(parseFloat(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), "");
      if (isNaN(parseFloat(s.replace(/[^0-9.-]+/g, "")))) {
        symbol = s;
      }
      if (currency.indexOf(symbol) != -1) {
        pos = currency.indexOf(symbol);
      }
      total = total + price;
    });
    total = parseFloat(total).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (pos == 0) {
      total = symbol + total;
    } else {
      total = total + symbol;
    }
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-total .price').html(total);
  }
  function productOptions() {
    totalPrice();
    var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()('form', $bundle);
    var $productOptionsElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change]', $form);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('change', '#halo-bundle-products form [data-fbt-option-change]', function (event) {
      productOptionsChanged(event);
      setProductVariant(event);
    });
  }
  function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    jquery__WEBPACK_IMPORTED_MODULE_2___default.a.each(jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change] [data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(value.children[0]).find('[data-option-value]').text(select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
              jquery__WEBPACK_IMPORTED_MODULE_2___default()(value.children[0]).find('[data-option-value]').text(label);
            }
          }
          if (type === 'swatch') {
            var _label = checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
              jquery__WEBPACK_IMPORTED_MODULE_2___default()(value.children[0]).find('[data-option-value]').text(_label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
  }
  function productOptionsChanged(event) {
    var $changedOption = jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target);
    var $form = $changedOption.parents('form');
    var productId = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="product_id"]', $form).val();
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }
    if ($changedOption.attr('id') === 'fbt_product' + productId) {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      showProductImage(productId, productAttributesData);
      updateProductAttributes($form, productAttributesData);
      updateView($form, productAttributesData, productAttributesContent);
      totalPrice();
    });
    return false;
  }
  function updateProductAttributes($scope, data) {
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-attribute-value]', $scope).each(function (i, attribute) {
      var $attribute = jquery__WEBPACK_IMPORTED_MODULE_2___default()(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
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
  function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  }
  function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
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
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  }
  function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }
  function showProductImage(productId, data) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(data.image)) {
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].tools.image.getSrc(data.image.data, context.themeSettings.productgallery_size);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': mainImageUrl,
        'data-srcset': jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('srcset')
      });
    } else {
      var _mainImageUrl = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr('data-srcset');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': _mainImageUrl,
        'data-srcset': jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('srcset')
      });
    }
  }
  function updateView($scope, data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = getViewModel($scope);
    showMessageBox(data.stock_message || data.purchasing_message);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(data.price)) {
      updatePriceView(viewModel, data.price);
    }
    var productId = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="product_id"]', $scope).val();
    if (!data.purchasable || !data.instock) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
        }
      }
    }
  }
  function updateDefaultAttributesForOOS($scope, data) {
    var productId = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="product_id"]', $scope).val();
    if (!data.purchasable || !data.instock) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
        }
      }
    }
  }
  function getViewModel($scope) {
    return {
      $priceWithTax: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.rrp-price--withTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.rrp-price--withoutTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.non-sale-price--withTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.non-sale-price--withoutTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.price-section--saving', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.price-now-label', $scope)
      },
      priceLabel: {
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.price-label', $scope)
      },
      $weight: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info [data-product-weight]', $scope),
      $increments: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.form-field--increments :input', $scope),
      $addToCart: jquery__WEBPACK_IMPORTED_MODULE_2___default()('#form-action-addToCart', $scope),
      $wishlistVariation: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.form-field--stock', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-stock]', $scope)
      },
      $sku: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-sku]'),
      $upc: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-upc]'),
      quantity: {
        $text: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.incrementTotal', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info-bulkPricing', $scope)
    };
  }
  function showMessageBox(message) {
    var $messageBox = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productAttributes-message');
    if (message) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  }
  function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }
  function updatePriceView(viewModel, price) {
    clearPricingNotFound(viewModel);
    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
    }
    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }
  function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          val = _step$value[1];
        if (val instanceof File && !val.name && !val.size) {
          formData["delete"](key);
        }
      }
    } catch (e) {
      console.error(e);
    }
    return formData;
  }
});

/***/ }),

/***/ "./assets/js/theme/halothemes/haloPrevNextProduct.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloPrevNextProduct.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  if (context.themeSettings.halo_prev_next_product == true) {
    if ($(window).width() > 1024) {
      if ($('.productView-nextProducts').length) {
        var productId = $('.productView-nextProducts').data('product-id'),
          nextId = productId + 1,
          prevId = productId - 1,
          nextLink,
          prevLink;
        var $prodWrap = $('.productView-nextProducts .next-prev-modal'),
          $prodIcons = $('.productView-nextProducts .next-prev-icons'),
          $options = {
            template: 'halothemes/product/halo-prev-next-product-tpm'
          };
        if (nextId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById(nextId, $options, function (err, response) {
            if (err) {
              return false;
            }
            nextLink = $(response).find('.card-link').attr('href');
            if (nextLink != undefined && nextLink != '') {
              $prodIcons.find('.next-icon').attr('href', nextLink);
              $prodIcons.find('.next-icon').removeClass('disable');
              $prodWrap.find('#next-product-modal').append(response);
            }
          });
        }
        if (prevId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById(prevId, $options, function (err, response) {
            if (err) {
              return false;
            }
            prevLink = $(response).find('.card-link').attr('href');
            if (prevLink != undefined && prevLink != '') {
              $prodIcons.find('.prev-icon').attr('href', prevLink);
              $prodIcons.find('.prev-icon').removeClass('disable');
              $prodWrap.find('#prev-product-modal').append(response);
            }
          });
        }
        $prodIcons.on('mouseover', function () {
          $prodWrap.addClass('is-active');
        }).on('mouseleave', function () {
          $prodWrap.removeClass('is-active');
        });
        $('.next-icon', $prodIcons).on('mouseover', function () {
          if (!$(this).hasClass('disable')) {
            $('#prev-product-modal').removeClass('is-show');
            $('#next-product-modal').addClass('is-show');
          } else {
            $('#prev-product-modal').removeClass('is-show');
          }
        });
        $('.prev-icon', $prodIcons).on('mouseover', function () {
          if (!$(this).hasClass('disable')) {
            $('#next-product-modal').removeClass('is-show');
            $('#prev-product-modal').addClass('is-show');
          } else {
            $('#next-product-modal').removeClass('is-show');
          }
        });
        $prodWrap.on('mouseover', function () {
          $prodWrap.addClass('is-active');
        }).on('mouseleave', function () {
          $prodWrap.removeClass('is-active');
        });
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/halothemes/haloStickyAddToCart.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloStickyAddToCart.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#form-action-addToCart').length) {
    var scroll = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#form-action-addToCart').offset();
    var scrollTop = scroll.top;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > scrollTop) {
        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').hasClass('show_sticky')) {
          var heightHeader = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header').height();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').addClass('show_sticky');
          // if ($('.header').hasClass('is-sticky')) {
          //     $('#sticky_addtocart').css('top', heightHeader);
          // } else {
          //     $('#sticky_addtocart').css('top', '0px');
          // }
        }
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').removeClass('show_sticky');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pop-up-option').removeClass('is-open');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choose_options_add').removeClass('is-active');
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.choose_options_add', function (event) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('is-active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pop-up-option').toggleClass('is-open');
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.pop-up-option .close', function (event) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".pop-up-option").removeClass('is-open');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choose_options_add').removeClass('is-active');
    });
    window.onload = function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > scrollTop) {
        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').hasClass('show_sticky')) {
          var heightHeader = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header').height();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').addClass('show_sticky');
          // if ($('.header').hasClass('is-sticky')) {
          //     $('#sticky_addtocart').css('top', heightHeader);
          // } else {
          //     $('#sticky_addtocart').css('top', '0px');
          // }
        }
      }
    };
  }
});

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./halothemes/haloBundleProducts */ "./assets/js/theme/halothemes/haloBundleProducts.js");
/* harmony import */ var _halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./halothemes/haloStickyAddToCart */ "./assets/js/theme/halothemes/haloStickyAddToCart.js");
/* harmony import */ var _halothemes_haloPrevNextProduct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloPrevNextProduct */ "./assets/js/theme/halothemes/haloPrevNextProduct.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/*
 Import all product specific js
 */










var WRITE_REVIEW = _global_modal__WEBPACK_IMPORTED_MODULE_6__["modalTypes"].WRITE_REVIEW;
var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    this.bulkPricingHandler();
    this.hlGlobal();
    Object(_halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_8__["default"])();
    if (this.context.themeSettings.halo_bundle_products_enable == true) {
      Object(_halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context);
    }
    Object(_halothemes_haloPrevNextProduct__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context);
    var $reviewForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.writeReview-form');
    if ($reviewForm.length === 0) return;
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]($reviewForm);
    $(document).on('opened.fndtn.reveal', '#modal-review-form', function () {
      return _this2.reviewModal.setupFocusableElements(WRITE_REVIEW);
    });
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
  };
  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };
  _proto.hlGlobal = function hlGlobal() {
    var wWidth = window.innerWidth;
    var $desTab = $('.productView-description');
    var $infoTab = $('#tab-additional-information');
    if ($desTab.length && wWidth < 1025) {
      $('.tab-content.is-active', $desTab).find('.tabContent').slideDown();
    }
    if ($infoTab.length) {
      if ($infoTab.find('.tabContent').text().trim() == '') {
        $('[href="#tab-additional-information"]').parent().hide();
        $infoTab.hide();
      }
    }

    //
    // Load Tabs
    // -----------------------------------------------------------------------------
    var $loadTabBtn = $('[data-tab-load]');
    $loadTabBtn.on('click', function (e) {
      e.preventDefault();
      var $target = $(e.currentTarget);
      var check_loadTab = $target.data('tab-check');
      if (check_loadTab) {
        $target.data('tab-check', false);
        var url_loadTab = $target.data('tab-load');
        var thisTab = $target.attr('href');
        var $thisTab = $(thisTab + ' .tabContent');
        $.get(url_loadTab, function (data) {
          $('.icon-loading', $thisTab).remove();
          $thisTab.append($(data).find('.page-content').html());
        }).fail(function (err) {
          $('.icon-loading', $thisTab).remove();
          $thisTab.append("<p>To Be Updated</p>");
        });
      }
    });

    //
    // Tabs Mobile
    // -----------------------------------------------------------------------------
    var $btnTabMobile = $('.tab-titleMobile');
    $btnTabMobile.on('click', function (e) {
      e.preventDefault();
      var $target = $(e.currentTarget);
      var idTab = $target.attr('href');
      var thisTop = $('.productView-description').offset().top - 20;
      if ($target.hasClass('is-active')) {
        $target.removeClass('is-active');
        $(idTab).removeClass('is-active').find('.tabContent').slideUp();
      } else {
        var $tabActiveMobile = $('.productView-description .tabs-contents .tab-content.is-active');
        $btnTabMobile.removeClass('is-active');
        $target.addClass('is-active');
        $tabActiveMobile.removeClass('is-active').find('.tabContent').slideUp();
        $(idTab).addClass('is-active').find('.tabContent').slideDown();
        $('body,html').animate({
          scrollTop: thisTop
        }, 1000);
      }
    });

    //
    // Share Link
    // -----------------------------------------------------------------------------
    var $shareLinkBtn = $('.socialMedia-button');
    var $shareLinkPopup = $('.socialMedia-dropdown');
    var $shareLinkClose = $('.shareLinkSocial__close');
    var $shareLinkCopy = $('#shareLinkSocial__copy');
    $shareLinkBtn.on('click', function (e) {
      e.preventDefault();
      if ($shareLinkPopup.hasClass('is-open')) {
        $shareLinkPopup.slideUp(200);
        $shareLinkPopup.removeClass('is-open');
      } else {
        $shareLinkPopup.slideDown(200);
        $shareLinkPopup.addClass('is-open');
      }
    });
    $shareLinkClose.on('click', function (e) {
      e.preventDefault();
      if ($shareLinkPopup.hasClass('is-open')) {
        $shareLinkPopup.slideUp(200);
        $shareLinkPopup.removeClass('is-open');
      }
    });
    $shareLinkCopy.on('click', function (e) {
      e.preventDefault();
      var $target = $(e.target);
      $target.select();
      document.execCommand("copy");
    });

    //
    // Body Close
    // -----------------------------------------------------------------------------
    $(document).on('click', function (e) {
      var $target = $(e.target);
      var $shareLinkPopup = $('.socialMedia-dropdown');
      if ($target.closest('.social-mediaBlock').length === 0) {
        if ($shareLinkPopup.hasClass('is-open')) {
          $shareLinkPopup.slideUp(200);
          $shareLinkPopup.removeClass('is-open');
        }
      }
    });
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/safe-string */ "./assets/js/theme/common/utils/safe-string.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");





var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
      submit: $reviewForm.find('input[type="submit"]'),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__["announceInputErrorMessage"]
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $content = $('#productReviews-content', this.$reviewsContent);
    $('#productReview_link').on('click', function () {
      $('.productView-reviewTabLink').trigger('click');
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
      }
    });
  };
  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    }

    // force collapse on page load
    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: Object(_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__["safeString"])(this.context.reviewRating)
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: Object(_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__["safeString"])(this.context.reviewSubject)
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: Object(_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__["safeString"])(this.context.reviewComment)
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3NhZmUtc3RyaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9CdW5kbGVQcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvUHJldk5leHRQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9TdGlja3lBZGRUb0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbInNhZmVTdHJpbmciLCJzdHIiLCJkIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiYm9keSIsInRleHRDb250ZW50IiwiY29udGV4dCIsInJlbGF0ZV90YWIiLCIkYnVuZGxlIiwiJCIsInNob3dCdW5kbGUiLCJkb2N1bWVudCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5vdCIsInJlbW92ZUNsYXNzIiwibmV4dCIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJ0YXJnZXQiLCJjbG9zZXN0IiwibGVuZ3RoIiwiaWQiLCJhdHRyIiwicmVwbGFjZSIsImlzIiwidG90YWxQcmljZSIsIiRmb3JtIiwiYXJyUHJvIiwiQXJyYXkiLCJlYWNoIiwiaSIsInZhbCIsInB1c2giLCJjaGVjayIsImNoZWNrUHJvZHVjdCIsInNob3ciLCJhZGRUb0NhcnQiLCJlcnJvck1lc3NhZ2UiLCJ0bXAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYWxlcnQiLCJpbm5lclRleHQiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJpdGVtIiwicHJvZEJ1bmRsZUlkIiwiZmlyc3RJdGVtIiwiYXBwZW5kIiwicHJvZHVjdEN1c3RvbUZpZWxkcyIsImluZGV4Iiwib2JqIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInZhbHVlIiwibnVtIiwibGlzdCIsImRhdGEiLCJwSWQiLCJ1bmRlZmluZWQiLCJ1dGlscyIsImFwaSIsInByb2R1Y3QiLCJnZXRCeUlkIiwiZXJyIiwicmVzcG9uc2UiLCJmb3JFYWNoIiwiZWxlbWVudCIsInNob3dMaXN0IiwiZmluZCIsImhhc09wdGlvbnMiLCJoYXNEZWZhdWx0T3B0aW9ucyIsInByb2R1Y3RBdHRyaWJ1dGVzIiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwiYXR0cmlidXRlc0RhdGEiLCJhdHRyaWJ1dGVzQ29udGVudCIsImNvbnRlbnQiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsInVwZGF0ZVZpZXciLCJ1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyIsInRyaW0iLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50IiwiaHRtbCIsInNldFByb2R1Y3RWYXJpYW50IiwicHJvZHVjdE9wdGlvbnMiLCJzaG93U2xpY2tTbGlkZXIiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIm1vYmlsZUZpcnN0IiwiaW5maW5pdGUiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiZm9ybSIsImxlbiIsImsiLCJjaGVja0JlZm9yZUFkZCIsIiRhdHRyaWJ1dGVzIiwicHJvcCIsImZvY3VzIiwiYXR0IiwiYXJyUCIsIl90aGlzIiwid2luZG93IiwibG9jYXRpb24iLCJGb3JtRGF0YSIsImNhcnQiLCJpdGVtQWRkIiwiZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtIiwiZXJyb3IiLCJoaWRlIiwidXBkYXRlQ2FydENvbnRlbnQiLCJjYXJ0X2l0ZW0iLCJ0cmlnZ2VyIiwibG9hZGluZ0NsYXNzIiwiJGJvZHkiLCIkY2FydERyb3Bkb3duIiwiJGNhcnRMb2FkaW5nIiwidG9nZ2xlQ2xhc3MiLCJnZXRDb250ZW50IiwicXVhbnRpdHkiLCJoYWxvQ2FsY3VsYXRlRnJlZVNoaXBwaW5nIiwiY2FydEl0ZW1JZCIsIm9uQ29tcGxldGUiLCIkc2lkZUNhcnRCbG9jayIsImdldENhcnRDb250ZW50IiwidG90YWwiLCJwb3MiLCJzeW1ib2wiLCJjdXJyZW5jeSIsInByaWNlIiwicyIsInRleHQiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImlzTmFOIiwiaW5kZXhPZiIsInByb2R1Y3RPcHRpb25zQ2hhbmdlZCIsInVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMiLCJvcHRpb25MYWJlbCIsImNoaWxkcmVuIiwib3B0aW9uVGl0bGUiLCJzcGxpdCIsInJlcXVpcmVkIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yIiwiaXNTYXRpc2ZpZWQiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImV2ZXJ5Iiwic2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImRhdGVTdHJpbmciLCJtYXAiLCJ4Iiwiam9pbiIsImNoZWNrZWQiLCJsYWJlbCIsImxhYmVscyIsInRpdGxlIiwiJGNoYW5nZWRPcHRpb24iLCJwYXJlbnRzIiwicHJvZHVjdElkIiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwicHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50Iiwic2hvd1Byb2R1Y3RJbWFnZSIsIiRzY29wZSIsImJlaGF2aW9yIiwib3V0X29mX3N0b2NrX2JlaGF2aW9yIiwiaW5TdG9ja0lkcyIsImluX3N0b2NrX2F0dHJpYnV0ZXMiLCJvdXRPZlN0b2NrTWVzc2FnZSIsIm91dF9vZl9zdG9ja19tZXNzYWdlIiwiYXR0cmlidXRlIiwiJGF0dHJpYnV0ZSIsImF0dHJJZCIsInBhcnNlSW50IiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZVR5cGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHNlbGVjdCIsInBhcmVudCIsInRvZ2dsZU9wdGlvbiIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRwYXJlbnQiLCJfaXNQbGFpbk9iamVjdCIsImltYWdlIiwibWFpbkltYWdlVXJsIiwidG9vbHMiLCJnZXRTcmMiLCJ0aGVtZVNldHRpbmdzIiwicHJvZHVjdGdhbGxlcnlfc2l6ZSIsInZpZXdNb2RlbCIsImdldFZpZXdNb2RlbCIsInNob3dNZXNzYWdlQm94Iiwic3RvY2tfbWVzc2FnZSIsInB1cmNoYXNpbmdfbWVzc2FnZSIsIl9pc09iamVjdCIsInVwZGF0ZVByaWNlVmlldyIsInB1cmNoYXNhYmxlIiwiaW5zdG9jayIsIiRwcmljZVdpdGhUYXgiLCIkcHJpY2VXaXRob3V0VGF4IiwicnJwV2l0aFRheCIsIiRkaXYiLCIkc3BhbiIsInJycFdpdGhvdXRUYXgiLCJub25TYWxlV2l0aFRheCIsIm5vblNhbGVXaXRob3V0VGF4IiwicHJpY2VTYXZlZCIsInByaWNlTm93TGFiZWwiLCJwcmljZUxhYmVsIiwiJHdlaWdodCIsIiRpbmNyZW1lbnRzIiwiJGFkZFRvQ2FydCIsIiR3aXNobGlzdFZhcmlhdGlvbiIsInN0b2NrIiwiJGNvbnRhaW5lciIsIiRpbnB1dCIsIiRza3UiLCIkdXBjIiwiJHRleHQiLCIkYnVsa1ByaWNpbmciLCJtZXNzYWdlIiwiJG1lc3NhZ2VCb3giLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsIndpdGhfdGF4IiwiZm9ybWF0dGVkIiwid2l0aG91dF90YXgiLCJycnBfd2l0aF90YXgiLCJycnBfd2l0aG91dF90YXgiLCJzYXZlZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJmb3JtRGF0YSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJfc3RlcCR2YWx1ZSIsImtleSIsIkZpbGUiLCJzaXplIiwiZSIsImNvbnNvbGUiLCJoYWxvX3ByZXZfbmV4dF9wcm9kdWN0Iiwid2lkdGgiLCJuZXh0SWQiLCJwcmV2SWQiLCJuZXh0TGluayIsInByZXZMaW5rIiwiJHByb2RXcmFwIiwiJHByb2RJY29ucyIsIiRvcHRpb25zIiwic2Nyb2xsIiwib2Zmc2V0Iiwic2Nyb2xsVG9wIiwidG9wIiwiaGVpZ2h0SGVhZGVyIiwiaGVpZ2h0Iiwib25sb2FkIiwiV1JJVEVfUkVWSUVXIiwibW9kYWxUeXBlcyIsIlByb2R1Y3QiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImNhbGwiLCJ1cmwiLCJocmVmIiwiJHJldmlld0xpbmsiLCIkYnVsa1ByaWNpbmdMaW5rIiwicmV2aWV3TW9kYWwiLCJtb2RhbEZhY3RvcnkiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiX3RoaXMyIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInBhdGhuYW1lIiwidmFsaWRhdG9yIiwiY29sbGFwc2libGVGYWN0b3J5IiwicHJvZHVjdERldGFpbHMiLCJQcm9kdWN0RGV0YWlscyIsIkJDRGF0YSIsInByb2R1Y3RfYXR0cmlidXRlcyIsInZpZGVvR2FsbGVyeSIsImJ1bGtQcmljaW5nSGFuZGxlciIsImhsR2xvYmFsIiwiaGFsb1N0aWNreUFkZFRvQ2FydCIsImhhbG9fYnVuZGxlX3Byb2R1Y3RzX2VuYWJsZSIsImhhbG9CdW5kbGVQcm9kdWN0cyIsImhhbG9QcmV2TmV4dFByb2R1Y3QiLCIkcmV2aWV3Rm9ybSIsImNsYXNzaWZ5Rm9ybSIsInJldmlldyIsIlJldmlldyIsInNldHVwRm9jdXNhYmxlRWxlbWVudHMiLCJyZWdpc3RlclZhbGlkYXRpb24iLCJhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJwcm9kdWN0UmV2aWV3SGFuZGxlciIsIl8iLCJpbnB1dCIsIm1zZ1NwYW5JZCIsInNpYmxpbmdzIiwid1dpZHRoIiwiaW5uZXJXaWR0aCIsIiRkZXNUYWIiLCIkaW5mb1RhYiIsInNsaWRlRG93biIsIiRsb2FkVGFiQnRuIiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjaGVja19sb2FkVGFiIiwidXJsX2xvYWRUYWIiLCJ0aGlzVGFiIiwiJHRoaXNUYWIiLCJnZXQiLCJyZW1vdmUiLCJmYWlsIiwiJGJ0blRhYk1vYmlsZSIsImlkVGFiIiwidGhpc1RvcCIsInNsaWRlVXAiLCIkdGFiQWN0aXZlTW9iaWxlIiwiYW5pbWF0ZSIsIiRzaGFyZUxpbmtCdG4iLCIkc2hhcmVMaW5rUG9wdXAiLCIkc2hhcmVMaW5rQ2xvc2UiLCIkc2hhcmVMaW5rQ29weSIsImV4ZWNDb21tYW5kIiwiUGFnZU1hbmFnZXIiLCJfZGVmYXVsdCIsIm5vZCIsInN1Ym1pdCIsInRhcCIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCIkcmV2aWV3c0NvbnRlbnQiLCIkY29sbGFwc2libGUiLCJpbml0TGlua0JpbmQiLCJpbmplY3RQYWdpbmF0aW9uTGluayIsImNvbGxhcHNlUmV2aWV3cyIsIiRjb250ZW50IiwiQ29sbGFwc2libGVFdmVudHMiLCJjbGljayIsImhhc2giLCIkbmV4dExpbmsiLCIkcHJldkxpbmsiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwicmV2aWV3UmF0aW5nIiwicmV2aWV3U3ViamVjdCIsInJldmlld0NvbW1lbnQiLCJjYiIsInJlc3VsdCIsImZvcm1zIiwiZW1haWwiLCJyZXZpZXdFbWFpbCIsIlZpZGVvR2FsbGVyeSIsIiRlbGVtZW50IiwiJHBsYXllciIsIiR2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJiaW5kRXZlbnRzIiwic2VsZWN0TmV3VmlkZW8iLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSUMsR0FBRyxFQUFLO0VBQy9CLElBQU1DLENBQUMsR0FBRyxJQUFJQyxTQUFTLEVBQUU7RUFDekIsT0FBT0QsQ0FBQyxDQUFDRSxlQUFlLENBQUNILEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQ0ksSUFBSSxDQUFDQyxXQUFXO0FBQy9ELENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSc0I7QUFDd0I7QUFFcUI7QUFFckQseUVBQVNDLE9BQU8sRUFBRTtFQUM3QixJQUFNQyxVQUFVLEdBQUcsY0FBYztFQUNqQyxJQUFNQyxPQUFPLEdBQUdDLDZDQUFDLENBQUMsdUJBQXVCLENBQUM7RUFFMUNDLFVBQVUsRUFBRTtFQUVaRCw2Q0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxVQUFTQyxLQUFLLEVBQUU7SUFDNURBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO0lBRXRCTCw2Q0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNNLEdBQUcsQ0FBQ04sNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDTyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQzlEUCw2Q0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNNLEdBQUcsQ0FBQ04sNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1EsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQ0QsV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUUxRixJQUFJLENBQUNQLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNRLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7TUFDM0RULDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNVLFFBQVEsQ0FBQyxVQUFVLENBQUM7TUFDNUJWLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNRLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDRSxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQzVELENBQUMsTUFBTTtNQUNIViw2Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDUSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0QsV0FBVyxDQUFDLFNBQVMsQ0FBQztNQUMzRFAsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ08sV0FBVyxDQUFDLFVBQVUsQ0FBQztJQUNuQztFQUNKLENBQUMsQ0FBQztFQUVGUCw2Q0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxVQUFTQyxLQUFLLEVBQUU7SUFDMURBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO0lBRXRCTCw2Q0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNPLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDaERQLDZDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ08sV0FBVyxDQUFDLFVBQVUsQ0FBQztFQUNyRCxDQUFDLENBQUM7RUFFRlAsNkNBQUMsQ0FBQ0UsUUFBUSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO0lBQzdCLElBQUlKLDZDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ1MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO01BQy9DLElBQUtULDZDQUFDLENBQUNJLEtBQUssQ0FBQ08sTUFBTSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDQyxNQUFNLEtBQUssQ0FBQyxJQUFNYiw2Q0FBQyxDQUFDSSxLQUFLLENBQUNPLE1BQU0sQ0FBQyxDQUFDQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsTUFBTSxLQUFLLENBQUUsRUFBQztRQUNqSWIsNkNBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDTyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ2hEUCw2Q0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNPLFdBQVcsQ0FBQyxVQUFVLENBQUM7TUFDckQ7SUFDSjtFQUNKLENBQUMsQ0FBQztFQUVGUCw2Q0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxZQUFXO0lBQ3pELElBQUlXLEVBQUUsR0FBR2QsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQztJQUV0RCxJQUFJaEIsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2lCLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLEVBQUU7TUFDakNqQiw2Q0FBQyxDQUFDLHNDQUFzQyxHQUFHYyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUNQLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDbEYsQ0FBQyxNQUFNO01BQ0hQLDZDQUFDLENBQUMsc0NBQXNDLEdBQUdjLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQ0osUUFBUSxDQUFDLFdBQVcsQ0FBQztJQUMvRTtJQUVBUSxVQUFVLEVBQUU7RUFDaEIsQ0FBQyxDQUFDO0VBRUZsQiw2Q0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBU0MsS0FBSyxFQUFFO0lBQ3BELElBQU1lLEtBQUssR0FBR25CLDZDQUFDLENBQUMsTUFBTSxFQUFFQSw2Q0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDbkQsSUFBSW9CLE1BQU0sR0FBRyxJQUFJQyxLQUFLLEVBQUU7SUFFeEJyQiw2Q0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNzQixJQUFJLENBQUMsVUFBU0MsQ0FBQyxFQUFFQyxHQUFHLEVBQUU7TUFDN0MsSUFBSXhCLDZDQUFDLENBQUN3QixHQUFHLENBQUMsQ0FBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ3ZCRyxNQUFNLENBQUNLLElBQUksQ0FBQ0YsQ0FBQyxDQUFDO01BQ2xCO0lBQ0osQ0FBQyxDQUFDO0lBRUYsSUFBSUcsS0FBSyxHQUFHLEtBQUs7SUFFakIsSUFBSU4sTUFBTSxDQUFDUCxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ25CYSxLQUFLLEdBQUdDLFlBQVksQ0FBQ1IsS0FBSyxFQUFFQyxNQUFNLENBQUM7SUFDdkM7SUFFQSxJQUFJTSxLQUFLLEVBQUU7TUFDUCxJQUFJTixNQUFNLENBQUNQLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDbkJiLDZDQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQzRCLElBQUksRUFBRTtRQUVqREMsU0FBUyxDQUFDVixLQUFLLEVBQUUsQ0FBQyxFQUFFQyxNQUFNLENBQUM7TUFDL0I7SUFDSixDQUFDLE1BQU07TUFDSCxJQUFNVSxZQUFZLEdBQUcsbURBQW1EO01BRXhFLElBQUlBLFlBQVksRUFBRTtRQUNkO1FBQ0EsSUFBTUMsR0FBRyxHQUFHN0IsUUFBUSxDQUFDOEIsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN6Q0QsR0FBRyxDQUFDRSxTQUFTLEdBQUdILFlBQVk7UUFFNUIsT0FBT0ksS0FBSyxDQUFDSCxHQUFHLENBQUNuQyxXQUFXLElBQUltQyxHQUFHLENBQUNJLFNBQVMsQ0FBQztNQUVsRDtJQUNKO0lBRUEvQixLQUFLLENBQUNDLGNBQWMsRUFBRTtFQUMxQixDQUFDLENBQUM7RUFFRixTQUFTSixVQUFVQSxDQUFBLEVBQUc7SUFDbEIsSUFBTW1DLE9BQU8sR0FBRztNQUNSQyxRQUFRLEVBQUU7UUFDTkMsSUFBSSxFQUFFLDZDQUE2QztRQUNuREYsT0FBTyxFQUFFO01BQ2I7SUFDSixDQUFDO0lBRUwsSUFBSUcsWUFBWSxHQUFHLEVBQUU7SUFFckJ2Qyw2Q0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNPLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztJQUU1RGlDLFNBQVMsRUFBRTtJQUVYeEMsNkNBQUMsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDeUMsTUFBTSxDQUFDLHdPQUF3TyxDQUFDO0lBRWpTekMsNkNBQUMsQ0FBQ3NCLElBQUksQ0FBQ3pCLE9BQU8sQ0FBQzZDLG1CQUFtQixFQUFFLFVBQVNDLEtBQUssRUFBRUMsR0FBRyxFQUFFO01BQ3JELElBQUlBLEdBQUcsQ0FBQ0MsSUFBSSxJQUFJLFlBQVksRUFBRTtRQUMxQk4sWUFBWSxHQUFHTyxJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHLEdBQUNILEdBQUcsQ0FBQ0ksS0FBSyxHQUFDLEdBQUcsQ0FBQztNQUNoRDtJQUNKLENBQUMsQ0FBQztJQUVGLElBQUloRCw2Q0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNhLE1BQU0sR0FBRyxDQUFDLElBQUkwQixZQUFZLENBQUMxQixNQUFNLElBQUksQ0FBQyxFQUFFO01BQ25FLElBQUlvQyxHQUFHLEdBQUcsQ0FBQztNQUNYLElBQUlDLElBQUksR0FBRyxFQUFFO01BRWJsRCw2Q0FBQyxDQUFDRixVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUN3QixJQUFJLENBQUMsVUFBU0MsQ0FBQyxFQUFFQyxHQUFHLEVBQUU7UUFDM0MwQixJQUFJLENBQUN6QixJQUFJLENBQUM7VUFBQ0YsQ0FBQyxFQUFDQSxDQUFDO1VBQUU0QixJQUFJLEVBQUU7UUFBRSxDQUFDLENBQUM7UUFFMUIsSUFBSUMsR0FBRyxHQUFHcEQsNkNBQUMsQ0FBQ3dCLEdBQUcsQ0FBQyxDQUFDMkIsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUVuQyxJQUFJQyxHQUFHLElBQUlDLFNBQVMsRUFBRTtVQUNsQkMsa0VBQUssQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0wsR0FBRyxFQUFFaEIsT0FBTyxFQUFFLFVBQUNzQixHQUFHLEVBQUVDLFFBQVEsRUFBSztZQUN2RCxJQUFJRCxHQUFHLEVBQUU7Y0FDTCxPQUFPLEtBQUs7WUFDaEI7WUFFQVIsSUFBSSxDQUFDVSxPQUFPLENBQUMsVUFBU0MsT0FBTyxFQUFFO2NBQzNCLElBQUdBLE9BQU8sQ0FBQ3RDLENBQUMsSUFBSUEsQ0FBQyxFQUFDO2dCQUNkc0MsT0FBTyxDQUFDVixJQUFJLEdBQUdRLFFBQVE7Y0FDM0I7WUFDSixDQUFDLENBQUM7WUFFRlYsR0FBRyxFQUFFO1lBRUwsSUFBR0EsR0FBRyxJQUFJakQsNkNBQUMsQ0FBQ0YsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDZSxNQUFNLEVBQUM7Y0FDdENpRCxRQUFRLENBQUNaLElBQUksQ0FBQztZQUNsQjtVQUNKLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxNQUFNLElBQUlsRCw2Q0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNhLE1BQU0sR0FBRyxDQUFDLElBQUkwQixZQUFZLENBQUMxQixNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ3pFLElBQUlvQyxHQUFHLEdBQUcsQ0FBQztNQUNYLElBQUlDLElBQUksR0FBRyxFQUFFO01BRWJsRCw2Q0FBQyxDQUFDc0IsSUFBSSxDQUFDaUIsWUFBWSxFQUFFLFVBQVNoQixDQUFDLEVBQUVDLEdBQUcsRUFBQztRQUNqQzBCLElBQUksQ0FBQ3pCLElBQUksQ0FBQztVQUFDRixDQUFDLEVBQUNBLENBQUM7VUFBRTRCLElBQUksRUFBRTtRQUFFLENBQUMsQ0FBQztRQUUxQixJQUFJQyxHQUFHLEdBQUdiLFlBQVksQ0FBQ2hCLENBQUMsQ0FBQztRQUV6QixJQUFJNkIsR0FBRyxJQUFJQyxTQUFTLEVBQUU7VUFDbEJDLGtFQUFLLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLENBQUNMLEdBQUcsRUFBRWhCLE9BQU8sRUFBRSxVQUFDc0IsR0FBRyxFQUFFQyxRQUFRLEVBQUs7WUFDdkQsSUFBSUQsR0FBRyxFQUFFO2NBQ0wsT0FBTyxLQUFLO1lBQ2hCO1lBRUFSLElBQUksQ0FBQ1UsT0FBTyxDQUFDLFVBQVNDLE9BQU8sRUFBRTtjQUMzQixJQUFHQSxPQUFPLENBQUN0QyxDQUFDLElBQUlBLENBQUMsRUFBQztnQkFDZHNDLE9BQU8sQ0FBQ1YsSUFBSSxHQUFHUSxRQUFRO2NBQzNCO1lBQ0osQ0FBQyxDQUFDO1lBRUZWLEdBQUcsRUFBRTtZQUVMLElBQUdBLEdBQUcsSUFBSVYsWUFBWSxDQUFDMUIsTUFBTSxFQUFDO2NBQzFCaUQsUUFBUSxDQUFDWixJQUFJLENBQUM7WUFDbEI7VUFDSixDQUFDLENBQUM7UUFDTjtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQ0o7RUFFQSxTQUFTVixTQUFTQSxDQUFBLEVBQUU7SUFDaEIsSUFBTUEsU0FBUyxHQUFHeEMsNkNBQUMsQ0FBQyx5RUFBeUUsQ0FBQztNQUMxRm9ELEdBQUcsR0FBR1osU0FBUyxDQUFDVyxJQUFJLENBQUMsWUFBWSxDQUFDO01BQ2xDaEMsS0FBSyxHQUFHcUIsU0FBUyxDQUFDdUIsSUFBSSxDQUFDLE1BQU0sQ0FBQztNQUM5QkMsVUFBVSxHQUFHN0MsS0FBSyxDQUFDNEMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUNsRCxNQUFNO01BQzFEb0QsaUJBQWlCLEdBQUc5QyxLQUFLLENBQUM0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ2xELE1BQU07SUFFM0QsSUFBSW9ELGlCQUFpQixJQUFJRCxVQUFVLEVBQUU7TUFDakNWLGtFQUFLLENBQUNDLEdBQUcsQ0FBQ1csaUJBQWlCLENBQUNDLFlBQVksQ0FBQ2YsR0FBRyxFQUFFakMsS0FBSyxDQUFDaUQsU0FBUyxFQUFFLEVBQUUsOEJBQThCLEVBQUUsVUFBQ1YsR0FBRyxFQUFFQyxRQUFRLEVBQUs7UUFDaEgsSUFBTVUsY0FBYyxHQUFHVixRQUFRLENBQUNSLElBQUksSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBTW1CLGlCQUFpQixHQUFHWCxRQUFRLENBQUNZLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFFaERDLHVCQUF1QixDQUFDckQsS0FBSyxFQUFFa0QsY0FBYyxDQUFDO1FBRTlDLElBQUlKLGlCQUFpQixFQUFFO1VBQ25CUSxVQUFVLENBQUN0RCxLQUFLLEVBQUVrRCxjQUFjLEVBQUVDLGlCQUFpQixDQUFDO1FBQ3hELENBQUMsTUFBTTtVQUNISSw2QkFBNkIsQ0FBQ0wsY0FBYyxDQUFDO1FBQ2pEO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFDSjtFQUVBLFNBQVNQLFFBQVFBLENBQUNaLElBQUksRUFBQztJQUNuQkEsSUFBSSxDQUFDVSxPQUFPLENBQUMsVUFBU0MsT0FBTyxFQUFFO01BQzNCLElBQUlGLFFBQVEsR0FBR0UsT0FBTyxDQUFDVixJQUFJO01BRTNCbkQsNkNBQUMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDeUMsTUFBTSxDQUFDa0IsUUFBUSxDQUFDckIsSUFBSSxDQUFDO01BRW5FLElBQUlxQixRQUFRLENBQUN2QixPQUFPLENBQUN1QyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDL0IsSUFBSXZCLEdBQUcsR0FBR3BELDZDQUFDLENBQUMyRCxRQUFRLENBQUNyQixJQUFJLENBQUMsQ0FBQ2EsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QyxJQUFNaEMsS0FBSyxHQUFHbkIsNkNBQUMsQ0FBQywrRUFBK0UsR0FBR29ELEdBQUcsR0FBRyxTQUFTLENBQUM7UUFFbEhqQyxLQUFLLENBQUNzQixNQUFNLENBQUNrQixRQUFRLENBQUN2QixPQUFPLENBQUM7UUFFOUIsSUFBTXdDLHNCQUFzQixHQUFHNUUsNkNBQUMsQ0FBQywwQkFBMEIsRUFBRW1CLEtBQUssQ0FBQztRQUNuRSxJQUFNNkMsVUFBVSxHQUFHWSxzQkFBc0IsQ0FBQ0MsSUFBSSxFQUFFLENBQUNGLElBQUksRUFBRSxDQUFDOUQsTUFBTTtRQUM5RCxJQUFNb0QsaUJBQWlCLEdBQUdqRSw2Q0FBQyxDQUFDMkQsUUFBUSxDQUFDdkIsT0FBTyxDQUFDLENBQUMyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ2xELE1BQU07UUFFM0UsSUFBSW9ELGlCQUFpQixJQUFJRCxVQUFVLEVBQUU7VUFDakNWLGtFQUFLLENBQUNDLEdBQUcsQ0FBQ1csaUJBQWlCLENBQUNDLFlBQVksQ0FBQ2YsR0FBRyxFQUFFakMsS0FBSyxDQUFDaUQsU0FBUyxFQUFFLEVBQUUsOEJBQThCLEVBQUUsVUFBQ1YsR0FBRyxFQUFFQyxRQUFRLEVBQUs7WUFDaEgsSUFBTVUsY0FBYyxHQUFHVixRQUFRLENBQUNSLElBQUksSUFBSSxDQUFDLENBQUM7WUFDMUMsSUFBTW1CLGlCQUFpQixHQUFHWCxRQUFRLENBQUNZLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFFaERDLHVCQUF1QixDQUFDckQsS0FBSyxFQUFFa0QsY0FBYyxDQUFDO1lBRTlDLElBQUlKLGlCQUFpQixFQUFFO2NBQ25CUSxVQUFVLENBQUN0RCxLQUFLLEVBQUVrRCxjQUFjLEVBQUVDLGlCQUFpQixDQUFDO1lBQ3hELENBQUMsTUFBTTtjQUNISSw2QkFBNkIsQ0FBQ0wsY0FBYyxDQUFDO1lBQ2pEO1VBQ0osQ0FBQyxDQUFDO1FBQ047UUFFQVMsaUJBQWlCLEVBQUU7TUFDdkI7SUFDSixDQUFDLENBQUM7SUFFRkMsY0FBYyxFQUFFO0lBQ2hCQyxlQUFlLEVBQUU7SUFDakI5RCxVQUFVLEVBQUU7RUFDaEI7RUFFQSxTQUFTOEQsZUFBZUEsQ0FBQSxFQUFFO0lBQ3RCaEYsNkNBQUMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDaUYsS0FBSyxDQUFDO01BQ2hEQyxJQUFJLEVBQUUsSUFBSTtNQUNWQyxNQUFNLEVBQUUsS0FBSztNQUNiQyxZQUFZLEVBQUUsQ0FBQztNQUNmQyxjQUFjLEVBQUUsQ0FBQztNQUNqQkMsV0FBVyxFQUFFLElBQUk7TUFDakJDLFFBQVEsRUFBRSxLQUFLO01BQ2ZDLFNBQVMsRUFBRSxnREFBZ0Q7TUFDM0RDLFNBQVMsRUFBRSxnREFBZ0Q7TUFDM0RDLFVBQVUsRUFBRSxDQUNSO1FBQ0lDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCQyxRQUFRLEVBQUU7VUFDTlAsY0FBYyxFQUFFLENBQUM7VUFDakJELFlBQVksRUFBRSxDQUFDO1VBQ2ZGLElBQUksRUFBRSxLQUFLO1VBQ1hDLE1BQU0sRUFBRTtRQUNaO01BQ0osQ0FBQyxFQUNEO1FBQ0lRLFVBQVUsRUFBRSxJQUFJO1FBQ2hCQyxRQUFRLEVBQUU7VUFDTlIsWUFBWSxFQUFFLENBQUM7VUFDZkMsY0FBYyxFQUFFLENBQUM7VUFDakJILElBQUksRUFBRSxLQUFLO1VBQ1hDLE1BQU0sRUFBRTtRQUNaO01BQ0osQ0FBQyxFQUNEO1FBQ0lRLFVBQVUsRUFBRSxHQUFHO1FBQ2ZDLFFBQVEsRUFBRTtVQUNOUixZQUFZLEVBQUUsQ0FBQztVQUNmQyxjQUFjLEVBQUU7UUFDcEI7TUFDSixDQUFDLEVBQ0Q7UUFDSU0sVUFBVSxFQUFFLEdBQUc7UUFDZkMsUUFBUSxFQUFFO1VBQ05SLFlBQVksRUFBRSxDQUFDO1VBQ2ZDLGNBQWMsRUFBRTtRQUNwQjtNQUNKLENBQUM7SUFFVCxDQUFDLENBQUM7RUFDTjtFQUVBLFNBQVMxRCxZQUFZQSxDQUFDa0UsSUFBSSxFQUFFekUsTUFBTSxFQUFFO0lBQ2hDLElBQUlNLEtBQUssR0FBRyxJQUFJO0lBRWhCLEtBQUssSUFBSUgsQ0FBQyxHQUFHLENBQUMsRUFBRXVFLEdBQUcsR0FBRzFFLE1BQU0sQ0FBQ1AsTUFBTSxFQUFFVSxDQUFDLEdBQUd1RSxHQUFHLEVBQUV2RSxDQUFDLEVBQUUsRUFBRTtNQUMvQyxJQUFJd0UsQ0FBQyxHQUFHM0UsTUFBTSxDQUFDRyxDQUFDLENBQUM7TUFDakIsSUFBSUosS0FBSyxHQUFHbkIsNkNBQUMsQ0FBQzZGLElBQUksQ0FBQ0UsQ0FBQyxDQUFDLENBQUM7TUFDdEIsSUFBSTVFLEtBQUssQ0FBQzRDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDbEQsTUFBTSxFQUFFO1FBQy9DYSxLQUFLLEdBQUdzRSxjQUFjLENBQUM3RSxLQUFLLENBQUM7UUFDN0IsSUFBSU8sS0FBSyxJQUFJLEtBQUssRUFDZCxPQUFPLEtBQUs7TUFDcEI7SUFDSjtJQUNBLE9BQU9BLEtBQUs7RUFDaEI7RUFFQSxTQUFTc0UsY0FBY0EsQ0FBQ0MsV0FBVyxFQUFFO0lBQ2pDLElBQUl2RSxLQUFLLEdBQUcsSUFBSTtJQUNoQnVFLFdBQVcsQ0FBQ2xDLElBQUksQ0FBQyxrREFBa0QsQ0FBQyxDQUFDekMsSUFBSSxDQUFDLFlBQVc7TUFFakYsSUFBSSxDQUFDdEIsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2tHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTTtRQUNuQyxJQUFJbEcsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNO1VBQ3ZCeEIsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ21HLEtBQUssRUFBRTtVQUNmekUsS0FBSyxHQUFHLEtBQUs7UUFDakI7TUFDSjtJQUNKLENBQUMsQ0FBQztJQUVGdUUsV0FBVyxDQUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDekMsSUFBSSxDQUFDLFlBQVc7TUFFdkMsSUFBSSxDQUFDdEIsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2tHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUUvQixDQUFDLE1BQU07UUFDSCxJQUFJbEcsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNO1VBQ3ZCeEIsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ21HLEtBQUssRUFBRTtVQUNmekUsS0FBSyxHQUFHLEtBQUs7UUFDakI7TUFDSjtJQUNKLENBQUMsQ0FBQztJQUVGLElBQUkwRSxHQUFHLEdBQUcsRUFBRTtJQUNaSCxXQUFXLENBQUNsQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQ3pDLElBQUksQ0FBQyxZQUFXO01BQzVELElBQUk4RSxHQUFHLElBQUlwRyw2Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDZSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFFN0JxRixHQUFHLEdBQUdwRyw2Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQ2YsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2tHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtVQUMzQixJQUFJbEcsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFVBQVUsRUFBRTtZQUNwQyxJQUFJZiw2Q0FBQyxDQUFDLFNBQVMsR0FBR29HLEdBQUcsR0FBRyxZQUFZLENBQUMsQ0FBQzVFLEdBQUcsRUFBRSxFQUFFLENBQUM7VUFDbEQ7VUFDQSxJQUFJeEIsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sRUFBRTtZQUNqQyxJQUFJZiw2Q0FBQyxDQUFDLFNBQVMsR0FBR29HLEdBQUcsR0FBRyxZQUFZLENBQUMsQ0FBQzVFLEdBQUcsRUFBRSxFQUFFLENBQUM7VUFDbEQ7UUFDSixDQUFDLE1BQU07VUFDSCxJQUFJeEIsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFVBQVUsRUFBRTtZQUNwQyxJQUFJZiw2Q0FBQyxDQUFDLFNBQVMsR0FBR29HLEdBQUcsR0FBRyxZQUFZLENBQUMsQ0FBQzVFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNO2NBQ2pERSxLQUFLLEdBQUcsS0FBSztZQUNqQjtVQUNKO1VBQ0EsSUFBSTFCLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNlLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxPQUFPLEVBQUU7WUFDakMsSUFBSWYsNkNBQUMsQ0FBQyxTQUFTLEdBQUdvRyxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUM1RSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTTtjQUNqREUsS0FBSyxHQUFHLEtBQUs7WUFDakI7VUFDSjtRQUNKO01BQ0o7SUFDSixDQUFDLENBQUM7SUFFRixPQUFPQSxLQUFLO0VBQ2hCO0VBRUEsU0FBU0csU0FBU0EsQ0FBQ2dFLElBQUksRUFBRXRFLENBQUMsRUFBRThFLElBQUksRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDOUIsSUFBSS9FLENBQUMsSUFBSThFLElBQUksQ0FBQ3hGLE1BQU0sRUFBRTtNQUNsQjBGLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHLFdBQVc7TUFDN0I7SUFDSjtJQUVBLElBQUlELE1BQU0sQ0FBQ0UsUUFBUSxLQUFLcEQsU0FBUyxFQUFFO01BQy9CO0lBQ0o7SUFFQSxJQUFJMEMsQ0FBQyxHQUFHTSxJQUFJLENBQUM5RSxDQUFDLENBQUM7SUFDZjtJQUNBK0Isa0VBQUssQ0FBQ0MsR0FBRyxDQUFDbUQsSUFBSSxDQUFDQyxPQUFPLENBQUNDLHdCQUF3QixDQUFDLElBQUlILFFBQVEsQ0FBQ1osSUFBSSxDQUFDRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBQ3JDLEdBQUcsRUFBRUMsUUFBUSxFQUFLO01BQ3ZGLElBQU03QixZQUFZLEdBQUc0QixHQUFHLElBQUlDLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDMEQsS0FBSztNQUUvQyxJQUFJL0UsWUFBWSxFQUFFO1FBQ2Q7UUFDQSxJQUFNQyxHQUFHLEdBQUc3QixRQUFRLENBQUM4QixhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3pDRCxHQUFHLENBQUNFLFNBQVMsR0FBR0gsWUFBWTtRQUM1QkksS0FBSyxDQUFDSCxHQUFHLENBQUNuQyxXQUFXLElBQUltQyxHQUFHLENBQUNJLFNBQVMsQ0FBQztNQUMzQztNQUVBWixDQUFDLEVBQUU7TUFFSCxJQUFJQSxDQUFDLElBQUk4RSxJQUFJLENBQUN4RixNQUFNLEVBQUU7UUFDbEJiLDZDQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQzhHLElBQUksRUFBRTtRQUNqREMsaUJBQWlCLENBQUNwRCxRQUFRLENBQUNSLElBQUksQ0FBQzZELFNBQVMsQ0FBQ2xHLEVBQUUsQ0FBQztRQUU3Q2QsNkNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDaUgsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUN2QyxJQUFNN0UsT0FBTyxHQUFHO1VBQ1pDLFFBQVEsRUFBRTtRQUNkLENBQUM7UUFDRCxJQUFNNkUsWUFBWSxHQUFHLFlBQVk7UUFDakMsSUFBTUMsS0FBSyxHQUFHbkgsNkNBQUMsQ0FBQyxNQUFNLENBQUM7UUFDdkIsSUFBTW9ILGFBQWEsR0FBR3BILDZDQUFDLENBQUMsd0JBQXdCLENBQUM7UUFDakQsSUFBTXFILFlBQVksR0FBR3JILDZDQUFDLENBQUMsb0NBQW9DLENBQUM7UUFFNURtSCxLQUFLLENBQUNHLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQztRQUV4Q0YsYUFBYSxDQUNSMUcsUUFBUSxDQUFDd0csWUFBWSxDQUFDLENBQ3RCckMsSUFBSSxDQUFDd0MsWUFBWSxDQUFDO1FBQ3ZCQSxZQUFZLENBQ1B6RixJQUFJLEVBQUU7UUFFWDBCLGtFQUFLLENBQUNDLEdBQUcsQ0FBQ21ELElBQUksQ0FBQ2EsVUFBVSxDQUFDbkYsT0FBTyxFQUFFLFVBQUNzQixHQUFHLEVBQUVDLFFBQVEsRUFBSztVQUNsRHlELGFBQWEsQ0FDUjdHLFdBQVcsQ0FBQzJHLFlBQVksQ0FBQyxDQUN6QnJDLElBQUksQ0FBQ2xCLFFBQVEsQ0FBQztVQUNuQjBELFlBQVksQ0FDUFAsSUFBSSxFQUFFO1VBRVgsSUFBTVUsUUFBUSxHQUFHeEgsNkNBQUMsQ0FBQzJELFFBQVEsQ0FBQyxDQUFDSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7VUFFbkZnRSxLQUFLLENBQUNGLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRU8sUUFBUSxDQUFDO1VBRS9DQywwRUFBeUIsQ0FBQ25CLEtBQUksQ0FBQ3pHLE9BQU8sQ0FBQztRQUMzQyxDQUFDLENBQUM7UUFFRjtNQUNKO01BRUFnQyxTQUFTLENBQUNnRSxJQUFJLEVBQUV0RSxDQUFDLEVBQUU4RSxJQUFJLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0VBQ047RUFFQSxTQUFTVSxpQkFBaUJBLENBQUNXLFVBQVUsRUFBRUMsVUFBVSxFQUFFO0lBQy9DLElBQU1SLEtBQUssR0FBR25ILDZDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLElBQU1rSCxZQUFZLEdBQUcsWUFBWTtJQUNqQyxJQUFNRSxhQUFhLEdBQUdwSCw2Q0FBQyxDQUFDLHdCQUF3QixDQUFDO0lBQ2pELElBQU1xSCxZQUFZLEdBQUdySCw2Q0FBQyxDQUFDLG9DQUFvQyxDQUFDO0lBQzVELElBQU00SCxjQUFjLEdBQUc1SCw2Q0FBQyxDQUFDLGlCQUFpQixDQUFDO0lBRTNDbUgsS0FBSyxDQUFDRyxXQUFXLENBQUMsK0JBQStCLENBQUM7SUFDbERNLGNBQWMsQ0FBQ04sV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUVyQ0YsYUFBYSxDQUNSMUcsUUFBUSxDQUFDd0csWUFBWSxDQUFDLENBQ3RCckMsSUFBSSxDQUFDd0MsWUFBWSxDQUFDO0lBQ3ZCQSxZQUFZLENBQ1B6RixJQUFJLEVBQUU7SUFFWGlHLGNBQWMsQ0FBQ0gsVUFBVSxFQUFFLFVBQUNoRSxHQUFHLEVBQUVDLFFBQVEsRUFBSztNQUMxQyxJQUFJRCxHQUFHLEVBQUU7UUFDTDtNQUNKO01BRUEwRCxhQUFhLENBQ1I3RyxXQUFXLENBQUMyRyxZQUFZLENBQUMsQ0FDekJyQyxJQUFJLENBQUNsQixRQUFRLENBQUM7TUFDbkIwRCxZQUFZLENBQ1BQLElBQUksRUFBRTtNQUVYLElBQU1VLFFBQVEsR0FBR3hILDZDQUFDLENBQUMyRCxRQUFRLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO01BRW5GZ0UsS0FBSyxDQUFDRixPQUFPLENBQUMsc0JBQXNCLEVBQUVPLFFBQVEsQ0FBQztNQUMvQ0MsMEVBQXlCLENBQUM1SCxPQUFPLENBQUM7TUFFbEMsSUFBSThILFVBQVUsRUFBRTtRQUNaQSxVQUFVLENBQUNoRSxRQUFRLENBQUM7TUFDeEI7SUFDSixDQUFDLENBQUM7RUFDTjtFQUVBLFNBQVNrRSxjQUFjQSxDQUFDSCxVQUFVLEVBQUVDLFVBQVUsRUFBRTtJQUM3QyxJQUFNdkYsT0FBTyxHQUFHO01BQ1hDLFFBQVEsRUFBRTtJQUNkLENBQUM7SUFFRGlCLGtFQUFLLENBQUNDLEdBQUcsQ0FBQ21ELElBQUksQ0FBQ2EsVUFBVSxDQUFDbkYsT0FBTyxFQUFFdUYsVUFBVSxDQUFDO0VBQ2xEO0VBRUEsU0FBU3pHLFVBQVVBLENBQUEsRUFBRztJQUNsQixJQUFJNEcsS0FBSyxHQUFHLENBQUM7TUFDVEMsR0FBRyxHQUFHLENBQUM7TUFDUEMsTUFBTSxHQUFHLEdBQUc7SUFFaEJoSSw2Q0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUNzQixJQUFJLENBQUMsVUFBU0MsQ0FBQyxFQUFFQyxHQUFHLEVBQUU7TUFDcEQsSUFBSXlHLFFBQVEsRUFDUkMsS0FBSyxFQUFFQyxDQUFDO01BRVosSUFBSW5JLDZDQUFDLENBQUN3QixHQUFHLENBQUMsQ0FBQ3VDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDbEQsTUFBTSxFQUFDO1FBQzNEb0gsUUFBUSxHQUFHakksNkNBQUMsQ0FBQ3dCLEdBQUcsQ0FBQyxDQUFDdUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUNxRSxJQUFJLEVBQUU7TUFDekUsQ0FBQyxNQUFLO1FBQ0ZILFFBQVEsR0FBR2pJLDZDQUFDLENBQUN3QixHQUFHLENBQUMsQ0FBQ3VDLElBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDcUUsSUFBSSxFQUFFO01BQzVFO01BRUFGLEtBQUssR0FBR0csVUFBVSxDQUFDSixRQUFRLENBQUNqSCxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BRXREbUgsQ0FBQyxHQUFHRixRQUFRLENBQUNqSCxPQUFPLENBQUNxSCxVQUFVLENBQUNILEtBQUssQ0FBQyxDQUFDSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUN0SCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO01BRTVGLElBQUl1SCxLQUFLLENBQUNGLFVBQVUsQ0FBQ0YsQ0FBQyxDQUFDbkgsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDL0NnSCxNQUFNLEdBQUdHLENBQUM7TUFDZDtNQUVBLElBQUlGLFFBQVEsQ0FBQ08sT0FBTyxDQUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQztRQUMvQkQsR0FBRyxHQUFHRSxRQUFRLENBQUNPLE9BQU8sQ0FBQ1IsTUFBTSxDQUFDO01BQ2xDO01BRUFGLEtBQUssR0FBR0EsS0FBSyxHQUFHSSxLQUFLO0lBQ3pCLENBQUMsQ0FBQztJQUVGSixLQUFLLEdBQUdPLFVBQVUsQ0FBQ1AsS0FBSyxDQUFDLENBQUNRLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ3RILE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUM7SUFFMUUsSUFBSStHLEdBQUcsSUFBSSxDQUFDLEVBQUM7TUFDVEQsS0FBSyxHQUFHRSxNQUFNLEdBQUdGLEtBQUs7SUFDMUIsQ0FBQyxNQUFLO01BQ0ZBLEtBQUssR0FBR0EsS0FBSyxHQUFHRSxNQUFNO0lBQzFCO0lBRUFoSSw2Q0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM2RSxJQUFJLENBQUNpRCxLQUFLLENBQUM7RUFDL0M7RUFFQSxTQUFTL0MsY0FBY0EsQ0FBQSxFQUFHO0lBQ3RCN0QsVUFBVSxFQUFFO0lBRVosSUFBTUMsS0FBSyxHQUFHbkIsNkNBQUMsQ0FBQyxNQUFNLEVBQUVELE9BQU8sQ0FBQztJQUVoQyxJQUFNNkUsc0JBQXNCLEdBQUc1RSw2Q0FBQyxDQUFDLDBCQUEwQixFQUFFbUIsS0FBSyxDQUFDO0lBRW5FbkIsNkNBQUMsQ0FBQ0UsUUFBUSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxRQUFRLEVBQUUscURBQXFELEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQ3JGcUkscUJBQXFCLENBQUNySSxLQUFLLENBQUM7TUFDNUIwRSxpQkFBaUIsQ0FBQzFFLEtBQUssQ0FBQztJQUM1QixDQUFDLENBQUM7RUFDTjtFQUVBLFNBQVMwRSxpQkFBaUJBLENBQUEsRUFBRztJQUN6QixJQUFNNEQseUJBQXlCLEdBQUcsRUFBRTtJQUNwQyxJQUFNdEcsT0FBTyxHQUFHLEVBQUU7SUFFbEJwQyw2Q0FBQyxDQUFDc0IsSUFBSSxDQUFDdEIsNkNBQUMsQ0FBQyxtREFBbUQsQ0FBQyxFQUFFLFVBQUMyQyxLQUFLLEVBQUVLLEtBQUssRUFBSztNQUM3RSxJQUFNMkYsV0FBVyxHQUFHM0YsS0FBSyxDQUFDNEYsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDekcsU0FBUztNQUMvQyxJQUFNMEcsV0FBVyxHQUFHRixXQUFXLENBQUNHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ25FLElBQUksRUFBRTtNQUNwRCxJQUFNb0UsUUFBUSxHQUFHSixXQUFXLENBQUNLLFdBQVcsRUFBRSxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDO01BQy9ELElBQU1DLElBQUksR0FBR2xHLEtBQUssQ0FBQ21HLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztNQUV6RCxJQUFJLENBQUNELElBQUksS0FBSyxZQUFZLElBQUlBLElBQUksS0FBSyxZQUFZLElBQUlBLElBQUksS0FBSyxjQUFjLEtBQUtsRyxLQUFLLENBQUNvRyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUNwRyxLQUFLLEtBQUssRUFBRSxJQUFJK0YsUUFBUSxFQUFFO1FBQ3RJTCx5QkFBeUIsQ0FBQ2pILElBQUksQ0FBQ3VCLEtBQUssQ0FBQztNQUN6QztNQUVBLElBQUlrRyxJQUFJLEtBQUssVUFBVSxJQUFJbEcsS0FBSyxDQUFDb0csYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDcEcsS0FBSyxLQUFLLEVBQUUsSUFBSStGLFFBQVEsRUFBRTtRQUNqRkwseUJBQXlCLENBQUNqSCxJQUFJLENBQUN1QixLQUFLLENBQUM7TUFDekM7TUFFQSxJQUFJa0csSUFBSSxLQUFLLE1BQU0sRUFBRTtRQUNqQixJQUFNRyxXQUFXLEdBQUdoSSxLQUFLLENBQUNpSSxJQUFJLENBQUN0RyxLQUFLLENBQUN1RyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsVUFBQ0MsTUFBTTtVQUFBLE9BQUtBLE1BQU0sQ0FBQ0MsYUFBYSxLQUFLLENBQUM7UUFBQSxFQUFDO1FBRTlHLElBQUlMLFdBQVcsRUFBRTtVQUNiLElBQU1NLFVBQVUsR0FBR3RJLEtBQUssQ0FBQ2lJLElBQUksQ0FBQ3RHLEtBQUssQ0FBQ3VHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUNLLEdBQUcsQ0FBQyxVQUFDQyxDQUFDO1lBQUEsT0FBS0EsQ0FBQyxDQUFDN0csS0FBSztVQUFBLEVBQUMsQ0FBQzhHLElBQUksQ0FBQyxHQUFHLENBQUM7VUFDN0YxSCxPQUFPLENBQUNYLElBQUksQ0FBSW9ILFdBQVcsU0FBSWMsVUFBVSxDQUFHO1VBRTVDO1FBQ0o7UUFFQSxJQUFJWixRQUFRLEVBQUU7VUFDVkwseUJBQXlCLENBQUNqSCxJQUFJLENBQUN1QixLQUFLLENBQUM7UUFDekM7TUFDSjtNQUVBLElBQUlrRyxJQUFJLEtBQUssWUFBWSxFQUFFO1FBQ3ZCLElBQU1PLE1BQU0sR0FBR3pHLEtBQUssQ0FBQ29HLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDNUMsSUFBTU0sYUFBYSxHQUFHRCxNQUFNLENBQUNDLGFBQWE7UUFFMUMsSUFBSUEsYUFBYSxLQUFLLENBQUMsRUFBRTtVQUNyQnRILE9BQU8sQ0FBQ1gsSUFBSSxDQUFJb0gsV0FBVyxTQUFJWSxNQUFNLENBQUNySCxPQUFPLENBQUNzSCxhQUFhLENBQUMsQ0FBQ3ZILFNBQVMsQ0FBRztVQUN6RW5DLDZDQUFDLENBQUNnRCxLQUFLLENBQUM0RixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzdFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDcUUsSUFBSSxDQUFDcUIsTUFBTSxDQUFDckgsT0FBTyxDQUFDc0gsYUFBYSxDQUFDLENBQUN2SCxTQUFTLENBQUM7VUFDOUY7UUFDSjtRQUVBLElBQUk0RyxRQUFRLEVBQUU7VUFDVkwseUJBQXlCLENBQUNqSCxJQUFJLENBQUN1QixLQUFLLENBQUM7UUFDekM7TUFDSjtNQUVBLElBQUlrRyxJQUFJLEtBQUssZUFBZSxJQUFJQSxJQUFJLEtBQUssV0FBVyxJQUFJQSxJQUFJLEtBQUssUUFBUSxJQUFJQSxJQUFJLEtBQUssZ0JBQWdCLElBQUlBLElBQUksS0FBSyxjQUFjLEVBQUU7UUFDL0gsSUFBTWEsT0FBTyxHQUFHL0csS0FBSyxDQUFDb0csYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJVyxPQUFPLEVBQUU7VUFDVCxJQUFJYixJQUFJLEtBQUssZUFBZSxJQUFJQSxJQUFJLEtBQUssV0FBVyxJQUFJQSxJQUFJLEtBQUssY0FBYyxFQUFFO1lBQzdFLElBQU1jLEtBQUssR0FBR0QsT0FBTyxDQUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM5SCxTQUFTO1lBQ3pDLElBQUk2SCxLQUFLLEVBQUU7Y0FDUDVILE9BQU8sQ0FBQ1gsSUFBSSxDQUFJb0gsV0FBVyxTQUFJbUIsS0FBSyxDQUFHO2NBQ3ZDaEssNkNBQUMsQ0FBQ2dELEtBQUssQ0FBQzRGLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDN0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUNxRSxJQUFJLENBQUM0QixLQUFLLENBQUM7WUFDaEU7VUFDSjtVQUVBLElBQUlkLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDbkIsSUFBTWMsTUFBSyxHQUFHRCxPQUFPLENBQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ3JCLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSW9CLE1BQUssRUFBRTtjQUNQNUgsT0FBTyxDQUFDWCxJQUFJLENBQUlvSCxXQUFXLFNBQUltQixNQUFLLENBQUNFLEtBQUssQ0FBRztjQUM3Q2xLLDZDQUFDLENBQUNnRCxLQUFLLENBQUM0RixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzdFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDcUUsSUFBSSxDQUFDNEIsTUFBSyxDQUFDRSxLQUFLLENBQUM7WUFDdEU7VUFDSjtVQUVBLElBQUloQixJQUFJLEtBQUssZ0JBQWdCLEVBQUU7WUFDM0I5RyxPQUFPLENBQUNYLElBQUksQ0FBSW9ILFdBQVcsVUFBTztVQUN0QztVQUVBO1FBQ0o7UUFFQSxJQUFJSyxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7VUFDM0I5RyxPQUFPLENBQUNYLElBQUksQ0FBSW9ILFdBQVcsU0FBTTtRQUNyQztRQUVBLElBQUlFLFFBQVEsRUFBRTtVQUNWTCx5QkFBeUIsQ0FBQ2pILElBQUksQ0FBQ3VCLEtBQUssQ0FBQztRQUN6QztNQUNKO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFFQSxTQUFTeUYscUJBQXFCQSxDQUFDckksS0FBSyxFQUFFO0lBQ2xDLElBQU0rSixjQUFjLEdBQUduSyw2Q0FBQyxDQUFDSSxLQUFLLENBQUNPLE1BQU0sQ0FBQztJQUN0QyxJQUFNUSxLQUFLLEdBQUdnSixjQUFjLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDNUMsSUFBTUMsU0FBUyxHQUFHckssNkNBQUMsQ0FBQyxxQkFBcUIsRUFBRW1CLEtBQUssQ0FBQyxDQUFDSyxHQUFHLEVBQUU7SUFFdkQsSUFBSTJJLGNBQWMsQ0FBQ3BKLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLElBQUl3RixNQUFNLENBQUNFLFFBQVEsS0FBS3BELFNBQVMsRUFBRTtNQUN6RTtJQUNKO0lBRUEsSUFBSThHLGNBQWMsQ0FBQ3BKLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxhQUFhLEdBQUdzSixTQUFTLEVBQUU7TUFDekQ7SUFDSjtJQUVBL0csa0VBQUssQ0FBQ0MsR0FBRyxDQUFDVyxpQkFBaUIsQ0FBQ0MsWUFBWSxDQUFDa0csU0FBUyxFQUFFbEosS0FBSyxDQUFDaUQsU0FBUyxFQUFFLEVBQUUsOEJBQThCLEVBQUUsVUFBQ1YsR0FBRyxFQUFFQyxRQUFRLEVBQUs7TUFDdEgsSUFBTTJHLHFCQUFxQixHQUFHM0csUUFBUSxDQUFDUixJQUFJLElBQUksQ0FBQyxDQUFDO01BQ2pELElBQU1vSCx3QkFBd0IsR0FBRzVHLFFBQVEsQ0FBQ1ksT0FBTyxJQUFJLENBQUMsQ0FBQztNQUN2RGlHLGdCQUFnQixDQUFDSCxTQUFTLEVBQUVDLHFCQUFxQixDQUFDO01BQ2xEOUYsdUJBQXVCLENBQUNyRCxLQUFLLEVBQUVtSixxQkFBcUIsQ0FBQztNQUNyRDdGLFVBQVUsQ0FBQ3RELEtBQUssRUFBRW1KLHFCQUFxQixFQUFFQyx3QkFBd0IsQ0FBQztNQUNsRXJKLFVBQVUsRUFBRTtJQUNoQixDQUFDLENBQUM7SUFFRixPQUFPLEtBQUs7RUFDaEI7RUFFQSxTQUFTc0QsdUJBQXVCQSxDQUFDaUcsTUFBTSxFQUFFdEgsSUFBSSxFQUFFO0lBQzNDLElBQU11SCxRQUFRLEdBQUd2SCxJQUFJLENBQUN3SCxxQkFBcUI7SUFDM0MsSUFBTUMsVUFBVSxHQUFHekgsSUFBSSxDQUFDMEgsbUJBQW1CO0lBQzNDLElBQU1DLGlCQUFpQixVQUFRM0gsSUFBSSxDQUFDNEgsb0JBQW9CLE1BQUc7SUFFM0QsSUFBSUwsUUFBUSxLQUFLLGFBQWEsSUFBSUEsUUFBUSxLQUFLLGNBQWMsRUFBRTtNQUMzRDtJQUNKO0lBRUExSyw2Q0FBQyxDQUFDLGdDQUFnQyxFQUFFeUssTUFBTSxDQUFDLENBQUNuSixJQUFJLENBQUMsVUFBQ0MsQ0FBQyxFQUFFeUosU0FBUyxFQUFLO01BQy9ELElBQU1DLFVBQVUsR0FBR2pMLDZDQUFDLENBQUNnTCxTQUFTLENBQUM7TUFDL0IsSUFBTUUsTUFBTSxHQUFHQyxRQUFRLENBQUNGLFVBQVUsQ0FBQzlILElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztNQUVyRSxJQUFJeUgsVUFBVSxDQUFDcEMsT0FBTyxDQUFDMEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDbkNFLGVBQWUsQ0FBQ0gsVUFBVSxFQUFFUCxRQUFRLEVBQUVJLGlCQUFpQixDQUFDO01BQzVELENBQUMsTUFBTTtRQUNITyxnQkFBZ0IsQ0FBQ0osVUFBVSxFQUFFUCxRQUFRLEVBQUVJLGlCQUFpQixDQUFDO01BQzdEO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFFQSxTQUFTTyxnQkFBZ0JBLENBQUNKLFVBQVUsRUFBRVAsUUFBUSxFQUFFSSxpQkFBaUIsRUFBRTtJQUMvRCxJQUFJUSxnQkFBZ0IsQ0FBQ0wsVUFBVSxDQUFDLEtBQUssWUFBWSxFQUFFO01BQy9DLE9BQU9NLDRCQUE0QixDQUFDTixVQUFVLEVBQUVQLFFBQVEsRUFBRUksaUJBQWlCLENBQUM7SUFDaEY7SUFFQSxJQUFJSixRQUFRLEtBQUssYUFBYSxFQUFFO01BQzVCTyxVQUFVLENBQUNuRSxJQUFJLEVBQUU7SUFDckIsQ0FBQyxNQUFNO01BQ0htRSxVQUFVLENBQUN2SyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ3RDO0VBQ0o7RUFFQSxTQUFTNkssNEJBQTRCQSxDQUFDTixVQUFVLEVBQUVQLFFBQVEsRUFBRUksaUJBQWlCLEVBQUU7SUFDM0UsSUFBTVUsT0FBTyxHQUFHUCxVQUFVLENBQUNRLE1BQU0sRUFBRTtJQUVuQyxJQUFJZixRQUFRLEtBQUssYUFBYSxFQUFFO01BQzVCTyxVQUFVLENBQUNTLFlBQVksQ0FBQyxLQUFLLENBQUM7TUFFOUIsSUFBSUYsT0FBTyxDQUFDaEssR0FBRyxFQUFFLEtBQUt5SixVQUFVLENBQUNsSyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDNUN5SyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM5QixhQUFhLEdBQUcsQ0FBQztNQUNoQztJQUNKLENBQUMsTUFBTTtNQUNIdUIsVUFBVSxDQUFDbEssSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7TUFDdkNrSyxVQUFVLENBQUNwRyxJQUFJLENBQUNvRyxVQUFVLENBQUNwRyxJQUFJLEVBQUUsQ0FBQzdELE9BQU8sQ0FBQzhKLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHQSxpQkFBaUIsQ0FBQztJQUN6RjtFQUNKO0VBRUEsU0FBU00sZUFBZUEsQ0FBQ0gsVUFBVSxFQUFFUCxRQUFRLEVBQUVJLGlCQUFpQixFQUFFO0lBQzlELElBQUlRLGdCQUFnQixDQUFDTCxVQUFVLENBQUMsS0FBSyxZQUFZLEVBQUU7TUFDL0MsT0FBT1UsMkJBQTJCLENBQUNWLFVBQVUsRUFBRVAsUUFBUSxFQUFFSSxpQkFBaUIsQ0FBQztJQUMvRTtJQUVBLElBQUlKLFFBQVEsS0FBSyxhQUFhLEVBQUU7TUFDNUJPLFVBQVUsQ0FBQ3JKLElBQUksRUFBRTtJQUNyQixDQUFDLE1BQU07TUFDSHFKLFVBQVUsQ0FBQzFLLFdBQVcsQ0FBQyxhQUFhLENBQUM7SUFDekM7RUFDSjtFQUVBLFNBQVNvTCwyQkFBMkJBLENBQUNWLFVBQVUsRUFBRVAsUUFBUSxFQUFFSSxpQkFBaUIsRUFBRTtJQUMxRSxJQUFJSixRQUFRLEtBQUssYUFBYSxFQUFFO01BQzVCTyxVQUFVLENBQUNTLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQyxNQUFNO01BQ0hULFVBQVUsQ0FBQy9FLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO01BQ2xDK0UsVUFBVSxDQUFDcEcsSUFBSSxDQUFDb0csVUFBVSxDQUFDcEcsSUFBSSxFQUFFLENBQUM3RCxPQUFPLENBQUM4SixpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyRTtFQUNKO0VBRUEsU0FBU1EsZ0JBQWdCQSxDQUFDTCxVQUFVLEVBQUU7SUFDbEMsSUFBTVcsT0FBTyxHQUFHWCxVQUFVLENBQUNySyxPQUFPLENBQUMsMEJBQTBCLENBQUM7SUFFOUQsT0FBT2dMLE9BQU8sR0FBR0EsT0FBTyxDQUFDekksSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsSUFBSTtFQUM1RDtFQUVBLFNBQVNxSCxnQkFBZ0JBLENBQUNILFNBQVMsRUFBRWxILElBQUksRUFBRTtJQUN2QyxJQUFJMEksMkRBQUEsQ0FBZ0IxSSxJQUFJLENBQUMySSxLQUFLLENBQUMsRUFBRTtNQUM3QixJQUFNQyxZQUFZLEdBQUd6SSxrRUFBSyxDQUFDMEksS0FBSyxDQUFDRixLQUFLLENBQUNHLE1BQU0sQ0FDekM5SSxJQUFJLENBQUMySSxLQUFLLENBQUMzSSxJQUFJLEVBQ2Z0RCxPQUFPLENBQUNxTSxhQUFhLENBQUNDLG1CQUFtQixDQUM1QztNQUVEbk0sNkNBQUMsQ0FBQyxzQ0FBc0MsR0FBR3FLLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQ3RHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQ2hELElBQUksQ0FBQztRQUMxRSxRQUFRLEVBQUVnTCxZQUFZO1FBQ3RCLGFBQWEsRUFBRS9MLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNlLElBQUksQ0FBQyxRQUFRO01BQ3hDLENBQUMsQ0FBQztJQUVOLENBQUMsTUFBTTtNQUNILElBQU1nTCxhQUFZLEdBQUcvTCw2Q0FBQyxDQUFDLHNDQUFzQyxHQUFHcUssU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDdEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQztNQUNqSGYsNkNBQUMsQ0FBQyxzQ0FBc0MsR0FBR3FLLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQ3RHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQ2hELElBQUksQ0FBQztRQUMxRSxRQUFRLEVBQUVnTCxhQUFZO1FBQ3RCLGFBQWEsRUFBRS9MLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNlLElBQUksQ0FBQyxRQUFRO01BQ3hDLENBQUMsQ0FBQztJQUNOO0VBQ0o7RUFFQSxTQUFTMEQsVUFBVUEsQ0FBQ2dHLE1BQU0sRUFBRXRILElBQUksRUFBRW9CLE9BQU8sRUFBUztJQUFBLElBQWhCQSxPQUFPO01BQVBBLE9BQU8sR0FBRyxJQUFJO0lBQUE7SUFDNUMsSUFBTTZILFNBQVMsR0FBR0MsWUFBWSxDQUFDNUIsTUFBTSxDQUFDO0lBRXRDNkIsY0FBYyxDQUFDbkosSUFBSSxDQUFDb0osYUFBYSxJQUFJcEosSUFBSSxDQUFDcUosa0JBQWtCLENBQUM7SUFFN0QsSUFBSUMsc0RBQUEsQ0FBV3RKLElBQUksQ0FBQytFLEtBQUssQ0FBQyxFQUFFO01BQ3hCd0UsZUFBZSxDQUFDTixTQUFTLEVBQUVqSixJQUFJLENBQUMrRSxLQUFLLENBQUM7SUFDMUM7SUFFQSxJQUFJbUMsU0FBUyxHQUFHckssNkNBQUMsQ0FBQyxxQkFBcUIsRUFBRXlLLE1BQU0sQ0FBQyxDQUFDakosR0FBRyxFQUFFO0lBRXRELElBQUksQ0FBQzJCLElBQUksQ0FBQ3dKLFdBQVcsSUFBSSxDQUFDeEosSUFBSSxDQUFDeUosT0FBTyxFQUFFO01BQ3BDNU0sNkNBQUMsQ0FBQyxzQ0FBc0MsR0FBR3FLLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQzlKLFdBQVcsQ0FBQyxXQUFXLENBQUM7TUFFckZQLDZDQUFDLENBQUMsY0FBYyxHQUFHcUssU0FBUyxDQUFDLENBQUNuRSxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDQSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztNQUUzRWxHLDZDQUFDLENBQUMsc0NBQXNDLEdBQUdxSyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM5SixXQUFXLENBQUMsc0JBQXNCLENBQUM7SUFDcEcsQ0FBQyxNQUFNO01BQ0hQLDZDQUFDLENBQUMsc0NBQXNDLEdBQUdxSyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMzSixRQUFRLENBQUMsV0FBVyxDQUFDO01BRWxGViw2Q0FBQyxDQUFDLGNBQWMsR0FBR3FLLFNBQVMsQ0FBQyxDQUFDbkUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7TUFFM0UsSUFBSXVFLE1BQU0sQ0FBQzFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDbEQsTUFBTSxFQUFFO1FBQ2hELElBQUlhLEtBQUssR0FBR3NFLGNBQWMsQ0FBQ3lFLE1BQU0sQ0FBQztRQUVsQyxJQUFJL0ksS0FBSyxJQUFJLElBQUksRUFBRTtVQUNmMUIsNkNBQUMsQ0FBQyxzQ0FBc0MsR0FBR3FLLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQzNKLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQztRQUNqRztNQUNKO0lBQ0o7RUFDSjtFQUVBLFNBQVNnRSw2QkFBNkJBLENBQUMrRixNQUFNLEVBQUV0SCxJQUFJLEVBQUU7SUFDakQsSUFBSWtILFNBQVMsR0FBR3JLLDZDQUFDLENBQUMscUJBQXFCLEVBQUV5SyxNQUFNLENBQUMsQ0FBQ2pKLEdBQUcsRUFBRTtJQUV0RCxJQUFJLENBQUMyQixJQUFJLENBQUN3SixXQUFXLElBQUksQ0FBQ3hKLElBQUksQ0FBQ3lKLE9BQU8sRUFBRTtNQUNwQzVNLDZDQUFDLENBQUMsc0NBQXNDLEdBQUdxSyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM5SixXQUFXLENBQUMsV0FBVyxDQUFDO01BQ3JGUCw2Q0FBQyxDQUFDLGNBQWMsR0FBR3FLLFNBQVMsQ0FBQyxDQUFDbkUsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7TUFDM0VsRyw2Q0FBQyxDQUFDLHNDQUFzQyxHQUFHcUssU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDOUosV0FBVyxDQUFDLHNCQUFzQixDQUFDO0lBQ3BHLENBQUMsTUFBTTtNQUNIUCw2Q0FBQyxDQUFDLHNDQUFzQyxHQUFHcUssU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDM0osUUFBUSxDQUFDLFdBQVcsQ0FBQztNQUNsRlYsNkNBQUMsQ0FBQyxjQUFjLEdBQUdxSyxTQUFTLENBQUMsQ0FBQ25FLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUNBLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO01BRTNFLElBQUl1RSxNQUFNLENBQUMxRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQ2xELE1BQU0sRUFBRTtRQUNoRCxJQUFJYSxLQUFLLEdBQUdzRSxjQUFjLENBQUN5RSxNQUFNLENBQUM7UUFFbEMsSUFBSS9JLEtBQUssSUFBSSxJQUFJLEVBQUU7VUFDZjFCLDZDQUFDLENBQUMsc0NBQXNDLEdBQUdxSyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMzSixRQUFRLENBQUMsc0JBQXNCLENBQUM7UUFDakc7TUFDSjtJQUNKO0VBQ0o7RUFFQSxTQUFTMkwsWUFBWUEsQ0FBQzVCLE1BQU0sRUFBRTtJQUMxQixPQUFPO01BQ0hvQyxhQUFhLEVBQUU3TSw2Q0FBQyxDQUFDLCtCQUErQixFQUFFeUssTUFBTSxDQUFDO01BQ3pEcUMsZ0JBQWdCLEVBQUU5TSw2Q0FBQyxDQUFDLGtDQUFrQyxFQUFFeUssTUFBTSxDQUFDO01BQy9Ec0MsVUFBVSxFQUFFO1FBQ1JDLElBQUksRUFBRWhOLDZDQUFDLENBQUMscUJBQXFCLEVBQUV5SyxNQUFNLENBQUM7UUFDdEN3QyxLQUFLLEVBQUVqTiw2Q0FBQyxDQUFDLDZCQUE2QixFQUFFeUssTUFBTTtNQUNsRCxDQUFDO01BQ0R5QyxhQUFhLEVBQUU7UUFDWEYsSUFBSSxFQUFFaE4sNkNBQUMsQ0FBQyx3QkFBd0IsRUFBRXlLLE1BQU0sQ0FBQztRQUN6Q3dDLEtBQUssRUFBRWpOLDZDQUFDLENBQUMsc0NBQXNDLEVBQUV5SyxNQUFNO01BQzNELENBQUM7TUFDRDBDLGNBQWMsRUFBRTtRQUNaSCxJQUFJLEVBQUVoTiw2Q0FBQyxDQUFDLDBCQUEwQixFQUFFeUssTUFBTSxDQUFDO1FBQzNDd0MsS0FBSyxFQUFFak4sNkNBQUMsQ0FBQyx3Q0FBd0MsRUFBRXlLLE1BQU07TUFDN0QsQ0FBQztNQUNEMkMsaUJBQWlCLEVBQUU7UUFDZkosSUFBSSxFQUFFaE4sNkNBQUMsQ0FBQyw2QkFBNkIsRUFBRXlLLE1BQU0sQ0FBQztRQUM5Q3dDLEtBQUssRUFBRWpOLDZDQUFDLENBQUMsMkNBQTJDLEVBQUV5SyxNQUFNO01BQ2hFLENBQUM7TUFDRDRDLFVBQVUsRUFBRTtRQUNSTCxJQUFJLEVBQUVoTiw2Q0FBQyxDQUFDLHdCQUF3QixFQUFFeUssTUFBTSxDQUFDO1FBQ3pDd0MsS0FBSyxFQUFFak4sNkNBQUMsQ0FBQyw0QkFBNEIsRUFBRXlLLE1BQU07TUFDakQsQ0FBQztNQUNENkMsYUFBYSxFQUFFO1FBQ1hMLEtBQUssRUFBRWpOLDZDQUFDLENBQUMsa0JBQWtCLEVBQUV5SyxNQUFNO01BQ3ZDLENBQUM7TUFDRDhDLFVBQVUsRUFBRTtRQUNSTixLQUFLLEVBQUVqTiw2Q0FBQyxDQUFDLGNBQWMsRUFBRXlLLE1BQU07TUFDbkMsQ0FBQztNQUNEK0MsT0FBTyxFQUFFeE4sNkNBQUMsQ0FBQyx5Q0FBeUMsRUFBRXlLLE1BQU0sQ0FBQztNQUM3RGdELFdBQVcsRUFBRXpOLDZDQUFDLENBQUMsZ0NBQWdDLEVBQUV5SyxNQUFNLENBQUM7TUFDeERpRCxVQUFVLEVBQUUxTiw2Q0FBQyxDQUFDLHdCQUF3QixFQUFFeUssTUFBTSxDQUFDO01BQy9Da0Qsa0JBQWtCLEVBQUUzTiw2Q0FBQyxDQUFDLDJDQUEyQyxFQUFFeUssTUFBTSxDQUFDO01BQzFFbUQsS0FBSyxFQUFFO1FBQ0hDLFVBQVUsRUFBRTdOLDZDQUFDLENBQUMsb0JBQW9CLEVBQUV5SyxNQUFNLENBQUM7UUFDM0NxRCxNQUFNLEVBQUU5Tiw2Q0FBQyxDQUFDLHNCQUFzQixFQUFFeUssTUFBTTtNQUM1QyxDQUFDO01BQ0RzRCxJQUFJLEVBQUUvTiw2Q0FBQyxDQUFDLG9CQUFvQixDQUFDO01BQzdCZ08sSUFBSSxFQUFFaE8sNkNBQUMsQ0FBQyxvQkFBb0IsQ0FBQztNQUM3QndILFFBQVEsRUFBRTtRQUNOeUcsS0FBSyxFQUFFak8sNkNBQUMsQ0FBQyxpQkFBaUIsRUFBRXlLLE1BQU0sQ0FBQztRQUNuQ3FELE1BQU0sRUFBRTlOLDZDQUFDLENBQUMsa0JBQWtCLEVBQUV5SyxNQUFNO01BQ3hDLENBQUM7TUFDRHlELFlBQVksRUFBRWxPLDZDQUFDLENBQUMsK0JBQStCLEVBQUV5SyxNQUFNO0lBQzNELENBQUM7RUFDTDtFQUVBLFNBQVM2QixjQUFjQSxDQUFDNkIsT0FBTyxFQUFFO0lBQzdCLElBQU1DLFdBQVcsR0FBR3BPLDZDQUFDLENBQUMsNEJBQTRCLENBQUM7SUFFbkQsSUFBSW1PLE9BQU8sRUFBRTtNQUNUbk8sNkNBQUMsQ0FBQyxtQkFBbUIsRUFBRW9PLFdBQVcsQ0FBQyxDQUFDaEcsSUFBSSxDQUFDK0YsT0FBTyxDQUFDO01BQ2pEQyxXQUFXLENBQUN4TSxJQUFJLEVBQUU7SUFDdEIsQ0FBQyxNQUFNO01BQ0h3TSxXQUFXLENBQUN0SCxJQUFJLEVBQUU7SUFDdEI7RUFDSjtFQUVBLFNBQVN1SCxvQkFBb0JBLENBQUNqQyxTQUFTLEVBQUU7SUFDckNBLFNBQVMsQ0FBQ1csVUFBVSxDQUFDQyxJQUFJLENBQUNsRyxJQUFJLEVBQUU7SUFDaENzRixTQUFTLENBQUNjLGFBQWEsQ0FBQ0YsSUFBSSxDQUFDbEcsSUFBSSxFQUFFO0lBQ25Dc0YsU0FBUyxDQUFDZSxjQUFjLENBQUNILElBQUksQ0FBQ2xHLElBQUksRUFBRTtJQUNwQ3NGLFNBQVMsQ0FBQ2dCLGlCQUFpQixDQUFDSixJQUFJLENBQUNsRyxJQUFJLEVBQUU7SUFDdkNzRixTQUFTLENBQUNpQixVQUFVLENBQUNMLElBQUksQ0FBQ2xHLElBQUksRUFBRTtJQUNoQ3NGLFNBQVMsQ0FBQ2tCLGFBQWEsQ0FBQ0wsS0FBSyxDQUFDbkcsSUFBSSxFQUFFO0lBQ3BDc0YsU0FBUyxDQUFDbUIsVUFBVSxDQUFDTixLQUFLLENBQUNuRyxJQUFJLEVBQUU7RUFDckM7RUFFQSxTQUFTNEYsZUFBZUEsQ0FBQ04sU0FBUyxFQUFFbEUsS0FBSyxFQUFFO0lBQ3ZDbUcsb0JBQW9CLENBQUNqQyxTQUFTLENBQUM7SUFFL0IsSUFBSWxFLEtBQUssQ0FBQ29HLFFBQVEsRUFBRTtNQUNoQmxDLFNBQVMsQ0FBQ21CLFVBQVUsQ0FBQ04sS0FBSyxDQUFDckwsSUFBSSxFQUFFO01BQ2pDd0ssU0FBUyxDQUFDUyxhQUFhLENBQUNoSSxJQUFJLENBQUNxRCxLQUFLLENBQUNvRyxRQUFRLENBQUNDLFNBQVMsQ0FBQztJQUMxRDtJQUVBLElBQUlyRyxLQUFLLENBQUNzRyxXQUFXLEVBQUU7TUFDbkJwQyxTQUFTLENBQUNtQixVQUFVLENBQUNOLEtBQUssQ0FBQ3JMLElBQUksRUFBRTtNQUNqQ3dLLFNBQVMsQ0FBQ1UsZ0JBQWdCLENBQUNqSSxJQUFJLENBQUNxRCxLQUFLLENBQUNzRyxXQUFXLENBQUNELFNBQVMsQ0FBQztJQUNoRTtJQUVBLElBQUlyRyxLQUFLLENBQUN1RyxZQUFZLEVBQUU7TUFDcEJyQyxTQUFTLENBQUNXLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDcEwsSUFBSSxFQUFFO01BQ2hDd0ssU0FBUyxDQUFDVyxVQUFVLENBQUNFLEtBQUssQ0FBQ3BJLElBQUksQ0FBQ3FELEtBQUssQ0FBQ3VHLFlBQVksQ0FBQ0YsU0FBUyxDQUFDO0lBQ2pFO0lBRUEsSUFBSXJHLEtBQUssQ0FBQ3dHLGVBQWUsRUFBRTtNQUN2QnRDLFNBQVMsQ0FBQ2MsYUFBYSxDQUFDRixJQUFJLENBQUNwTCxJQUFJLEVBQUU7TUFDbkN3SyxTQUFTLENBQUNjLGFBQWEsQ0FBQ0QsS0FBSyxDQUFDcEksSUFBSSxDQUFDcUQsS0FBSyxDQUFDd0csZUFBZSxDQUFDSCxTQUFTLENBQUM7SUFDdkU7SUFFQSxJQUFJckcsS0FBSyxDQUFDeUcsS0FBSyxFQUFFO01BQ2J2QyxTQUFTLENBQUNpQixVQUFVLENBQUNMLElBQUksQ0FBQ3BMLElBQUksRUFBRTtNQUNoQ3dLLFNBQVMsQ0FBQ2lCLFVBQVUsQ0FBQ0osS0FBSyxDQUFDcEksSUFBSSxDQUFDcUQsS0FBSyxDQUFDeUcsS0FBSyxDQUFDSixTQUFTLENBQUM7SUFDMUQ7SUFFQSxJQUFJckcsS0FBSyxDQUFDMEcsdUJBQXVCLEVBQUU7TUFDL0J4QyxTQUFTLENBQUNtQixVQUFVLENBQUNOLEtBQUssQ0FBQ25HLElBQUksRUFBRTtNQUNqQ3NGLFNBQVMsQ0FBQ2UsY0FBYyxDQUFDSCxJQUFJLENBQUNwTCxJQUFJLEVBQUU7TUFDcEN3SyxTQUFTLENBQUNrQixhQUFhLENBQUNMLEtBQUssQ0FBQ3JMLElBQUksRUFBRTtNQUNwQ3dLLFNBQVMsQ0FBQ2UsY0FBYyxDQUFDRixLQUFLLENBQUNwSSxJQUFJLENBQUNxRCxLQUFLLENBQUMwRyx1QkFBdUIsQ0FBQ0wsU0FBUyxDQUFDO0lBQ2hGO0lBRUEsSUFBSXJHLEtBQUssQ0FBQzJHLDBCQUEwQixFQUFFO01BQ2xDekMsU0FBUyxDQUFDbUIsVUFBVSxDQUFDTixLQUFLLENBQUNuRyxJQUFJLEVBQUU7TUFDakNzRixTQUFTLENBQUNnQixpQkFBaUIsQ0FBQ0osSUFBSSxDQUFDcEwsSUFBSSxFQUFFO01BQ3ZDd0ssU0FBUyxDQUFDa0IsYUFBYSxDQUFDTCxLQUFLLENBQUNyTCxJQUFJLEVBQUU7TUFDcEN3SyxTQUFTLENBQUNnQixpQkFBaUIsQ0FBQ0gsS0FBSyxDQUFDcEksSUFBSSxDQUFDcUQsS0FBSyxDQUFDMkcsMEJBQTBCLENBQUNOLFNBQVMsQ0FBQztJQUN0RjtFQUNKO0VBRUEsU0FBUzNILHdCQUF3QkEsQ0FBQ2tJLFFBQVEsRUFBRTtJQUN4QyxJQUFJO01BQ0EsU0FBQUMsU0FBQSxHQUFBQywrQkFBQSxDQUF5QkYsUUFBUSxHQUFBRyxLQUFBLElBQUFBLEtBQUEsR0FBQUYsU0FBQSxJQUFBRyxJQUFBLEdBQUU7UUFBQSxJQUFBQyxXQUFBLEdBQUFGLEtBQUEsQ0FBQWpNLEtBQUE7VUFBdkJvTSxHQUFHLEdBQUFELFdBQUE7VUFBRTNOLEdBQUcsR0FBQTJOLFdBQUE7UUFDaEIsSUFBSTNOLEdBQUcsWUFBWTZOLElBQUksSUFBSSxDQUFDN04sR0FBRyxDQUFDcUIsSUFBSSxJQUFJLENBQUNyQixHQUFHLENBQUM4TixJQUFJLEVBQUU7VUFDL0NSLFFBQVEsVUFBTyxDQUFDTSxHQUFHLENBQUM7UUFDeEI7TUFDSjtJQUNKLENBQUMsQ0FBQyxPQUFPRyxDQUFDLEVBQUU7TUFDUkMsT0FBTyxDQUFDM0ksS0FBSyxDQUFDMEksQ0FBQyxDQUFDO0lBQ3BCO0lBRUEsT0FBT1QsUUFBUTtFQUNuQjtBQUNKLEM7Ozs7Ozs7Ozs7OztBQ3g0QkE7QUFBQTtBQUErQztBQUVoQyx5RUFBU2pQLE9BQU8sRUFBRTtFQUM3QixJQUFJQSxPQUFPLENBQUNxTSxhQUFhLENBQUN1RCxzQkFBc0IsSUFBSSxJQUFJLEVBQUU7SUFDdEQsSUFBSXpQLENBQUMsQ0FBQ3VHLE1BQU0sQ0FBQyxDQUFDbUosS0FBSyxFQUFFLEdBQUcsSUFBSSxFQUFFO01BQzFCLElBQUkxUCxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQ2EsTUFBTSxFQUFFO1FBQ3ZDLElBQUl3SixTQUFTLEdBQUdySyxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQ21ELElBQUksQ0FBQyxZQUFZLENBQUM7VUFDN0R3TSxNQUFNLEdBQUd0RixTQUFTLEdBQUcsQ0FBQztVQUN0QnVGLE1BQU0sR0FBR3ZGLFNBQVMsR0FBRyxDQUFDO1VBQ3RCd0YsUUFBUTtVQUFFQyxRQUFRO1FBRXRCLElBQU1DLFNBQVMsR0FBRy9QLENBQUMsQ0FBQyw0Q0FBNEMsQ0FBQztVQUM3RGdRLFVBQVUsR0FBR2hRLENBQUMsQ0FBQyw0Q0FBNEMsQ0FBQztVQUM1RGlRLFFBQVEsR0FBRztZQUNQNU4sUUFBUSxFQUFFO1VBQ2QsQ0FBQztRQUVMLElBQUdzTixNQUFNLElBQUl0TSxTQUFTLEVBQUM7VUFDbkJDLGtFQUFLLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLENBQUNrTSxNQUFNLEVBQUVNLFFBQVEsRUFBRSxVQUFDdk0sR0FBRyxFQUFFQyxRQUFRLEVBQUs7WUFDM0QsSUFBR0QsR0FBRyxFQUFDO2NBQ0gsT0FBTyxLQUFLO1lBQ2hCO1lBQ0FtTSxRQUFRLEdBQUc3UCxDQUFDLENBQUMyRCxRQUFRLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUV0RCxJQUFHOE8sUUFBUSxJQUFJeE0sU0FBUyxJQUFJd00sUUFBUSxJQUFJLEVBQUUsRUFBQztjQUN2Q0csVUFBVSxDQUFDak0sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDaEQsSUFBSSxDQUFDLE1BQU0sRUFBRThPLFFBQVEsQ0FBQztjQUNwREcsVUFBVSxDQUFDak0sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDeEQsV0FBVyxDQUFDLFNBQVMsQ0FBQztjQUNwRHdQLFNBQVMsQ0FBQ2hNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDdEIsTUFBTSxDQUFDa0IsUUFBUSxDQUFDO1lBQzFEO1VBQ0osQ0FBQyxDQUFDO1FBQ047UUFFQSxJQUFHaU0sTUFBTSxJQUFJdk0sU0FBUyxFQUFDO1VBQ25CQyxrRUFBSyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDbU0sTUFBTSxFQUFFSyxRQUFRLEVBQUUsVUFBQ3ZNLEdBQUcsRUFBRUMsUUFBUSxFQUFLO1lBQzNELElBQUdELEdBQUcsRUFBQztjQUNILE9BQU8sS0FBSztZQUNoQjtZQUVBb00sUUFBUSxHQUFHOVAsQ0FBQyxDQUFDMkQsUUFBUSxDQUFDLENBQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUM7WUFFdEQsSUFBRytPLFFBQVEsSUFBSXpNLFNBQVMsSUFBSXlNLFFBQVEsSUFBSSxFQUFFLEVBQUM7Y0FDdkNFLFVBQVUsQ0FBQ2pNLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQ2hELElBQUksQ0FBQyxNQUFNLEVBQUUrTyxRQUFRLENBQUM7Y0FDcERFLFVBQVUsQ0FBQ2pNLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQ3hELFdBQVcsQ0FBQyxTQUFTLENBQUM7Y0FDcER3UCxTQUFTLENBQUNoTSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQ3RCLE1BQU0sQ0FBQ2tCLFFBQVEsQ0FBQztZQUMxRDtVQUNKLENBQUMsQ0FBQztRQUNOO1FBRUFxTSxVQUFVLENBQUM3UCxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVU7VUFDakM0UCxTQUFTLENBQUNyUCxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUNEUCxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVU7VUFDeEI0UCxTQUFTLENBQUN4UCxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQ3RDLENBQUMsQ0FBQztRQUVGUCxDQUFDLENBQUMsWUFBWSxFQUFFZ1EsVUFBVSxDQUFDLENBQUM3UCxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVU7VUFDbEQsSUFBSSxDQUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNTLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM5QlQsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNPLFdBQVcsQ0FBQyxTQUFTLENBQUM7WUFDL0NQLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDVSxRQUFRLENBQUMsU0FBUyxDQUFDO1VBQ2hELENBQUMsTUFDSTtZQUNEVixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQ08sV0FBVyxDQUFDLFNBQVMsQ0FBQztVQUNuRDtRQUNKLENBQUMsQ0FBQztRQUVGUCxDQUFDLENBQUMsWUFBWSxFQUFFZ1EsVUFBVSxDQUFDLENBQUM3UCxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVU7VUFDbEQsSUFBSSxDQUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNTLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM5QlQsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNPLFdBQVcsQ0FBQyxTQUFTLENBQUM7WUFDL0NQLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDVSxRQUFRLENBQUMsU0FBUyxDQUFDO1VBQ2hELENBQUMsTUFDSTtZQUNEVixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQ08sV0FBVyxDQUFDLFNBQVMsQ0FBQztVQUNuRDtRQUNKLENBQUMsQ0FBQztRQUVGd1AsU0FBUyxDQUFDNVAsRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFVO1VBQ2hDNFAsU0FBUyxDQUFDclAsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FDRFAsRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFVO1VBQ3hCNFAsU0FBUyxDQUFDeFAsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUN0QyxDQUFDLENBQUM7TUFDTjtJQUNKO0VBQ0o7QUFDSixDOzs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QjtBQUN3QjtBQUNoQjtBQUdoQiwyRUFBVTtFQUNyQixJQUFJUCw2Q0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUNhLE1BQU0sRUFBRTtJQUNwQyxJQUFJcVAsTUFBTSxHQUFHbFEsNkNBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDbVEsTUFBTSxFQUFFO0lBQ2pELElBQUlDLFNBQVMsR0FBR0YsTUFBTSxDQUFDRyxHQUFHO0lBRTFCclEsNkNBQUMsQ0FBQ3VHLE1BQU0sQ0FBQyxDQUFDMkosTUFBTSxDQUFDLFlBQVU7TUFDdkIsSUFBR2xRLDZDQUFDLENBQUN1RyxNQUFNLENBQUMsQ0FBQzZKLFNBQVMsRUFBRSxHQUFHQSxTQUFTLEVBQUM7UUFDakMsSUFBRyxDQUFDcFEsNkNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDUyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUM7VUFDL0MsSUFBSTZQLFlBQVksR0FBR3RRLDZDQUFDLENBQUMsU0FBUyxDQUFDLENBQUN1USxNQUFNLEVBQUU7VUFDeEN2USw2Q0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNVLFFBQVEsQ0FBQyxhQUFhLENBQUM7VUFDOUM7VUFDQTtVQUNBO1VBQ0E7VUFDQTtRQUNKO01BQ0osQ0FBQyxNQUFLO1FBQ0ZWLDZDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ08sV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUNqRFAsNkNBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDTyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQzFDUCw2Q0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNPLFdBQVcsQ0FBQyxXQUFXLENBQUM7TUFDckQ7SUFDSixDQUFDLENBQUM7SUFFRlAsNkNBQUMsQ0FBQ0UsUUFBUSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUMscUJBQXFCLEVBQUUsVUFBU0MsS0FBSyxFQUFDO01BQ3pESiw2Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDc0gsV0FBVyxDQUFDLFdBQVcsQ0FBQztNQUNoQ3RILDZDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3NILFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0lBRUZ0SCw2Q0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxVQUFTQyxLQUFLLEVBQUM7TUFDM0RKLDZDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ08sV0FBVyxDQUFDLFNBQVMsQ0FBQztNQUMxQ1AsNkNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDTyxXQUFXLENBQUMsV0FBVyxDQUFDO0lBQ3JELENBQUMsQ0FBQztJQUVGZ0csTUFBTSxDQUFDaUssTUFBTSxHQUFHLFlBQVU7TUFDdEIsSUFBR3hRLDZDQUFDLENBQUN1RyxNQUFNLENBQUMsQ0FBQzZKLFNBQVMsRUFBRSxHQUFHQSxTQUFTLEVBQUM7UUFDakMsSUFBRyxDQUFDcFEsNkNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDUyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUM7VUFDL0MsSUFBSTZQLFlBQVksR0FBR3RRLDZDQUFDLENBQUMsU0FBUyxDQUFDLENBQUN1USxNQUFNLEVBQUU7VUFDeEN2USw2Q0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNVLFFBQVEsQ0FBQyxhQUFhLENBQUM7VUFDOUM7VUFDQTtVQUNBO1VBQ0E7VUFDQTtRQUNKO01BQ0o7SUFDSixDQUFDO0VBQ0w7QUFFSixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDeUM7QUFDRjtBQUNlO0FBQ0E7QUFDSDtBQUNNO0FBQ0M7QUFDTztBQUNFO0FBQ0E7QUFFbkUsSUFBUStQLFlBQVksR0FBS0Msd0RBQVUsQ0FBM0JELFlBQVk7QUFBZ0IsSUFFZkUsT0FBTywwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLE9BQUEsRUFBQUMsWUFBQTtFQUN4QixTQUFBRCxRQUFZOVEsT0FBTyxFQUFFO0lBQUEsSUFBQXlHLEtBQUE7SUFDakJBLEtBQUEsR0FBQXNLLFlBQUEsQ0FBQUUsSUFBQSxPQUFNalIsT0FBTyxDQUFDO0lBQ2R5RyxLQUFBLENBQUt5SyxHQUFHLEdBQUd4SyxNQUFNLENBQUNDLFFBQVEsQ0FBQ3dLLElBQUk7SUFDL0IxSyxLQUFBLENBQUsySyxXQUFXLEdBQUdqUixDQUFDLENBQUMsc0NBQXNDLENBQUM7SUFDNURzRyxLQUFBLENBQUs0SyxnQkFBZ0IsR0FBR2xSLENBQUMsQ0FBQyx1Q0FBdUMsQ0FBQztJQUNsRXNHLEtBQUEsQ0FBSzZLLFdBQVcsR0FBR0MsNkRBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFDLE9BQUE5SyxLQUFBO0VBQzdEO0VBQUMsSUFBQStLLE1BQUEsR0FBQVYsT0FBQSxDQUFBVyxTQUFBO0VBQUFELE1BQUEsQ0FFREUsT0FBTyxHQUFQLFNBQUFBLFFBQUEsRUFBVTtJQUFBLElBQUFDLE1BQUE7SUFDTjtJQUNBeFIsQ0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLG9CQUFvQixFQUFFLFlBQU07TUFDdkMsSUFBSXFSLE1BQUksQ0FBQ1QsR0FBRyxDQUFDdkksT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLE9BQU9qQyxNQUFNLENBQUNrTCxPQUFPLENBQUNDLFlBQVksS0FBSyxVQUFVLEVBQUU7UUFDL0ZuTCxNQUFNLENBQUNrTCxPQUFPLENBQUNDLFlBQVksQ0FBQyxJQUFJLEVBQUV4UixRQUFRLENBQUNnSyxLQUFLLEVBQUUzRCxNQUFNLENBQUNDLFFBQVEsQ0FBQ21MLFFBQVEsQ0FBQztNQUMvRTtJQUNKLENBQUMsQ0FBQztJQUVGLElBQUlDLFNBQVM7O0lBRWI7SUFDQUMsbUVBQWtCLEVBQUU7SUFFcEIsSUFBSSxDQUFDQyxjQUFjLEdBQUcsSUFBSUMsK0RBQWMsQ0FBQy9SLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUNILE9BQU8sRUFBRTBHLE1BQU0sQ0FBQ3lMLE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUM7SUFDM0csSUFBSSxDQUFDSCxjQUFjLENBQUNoTixpQkFBaUIsRUFBRTtJQUV2Q29OLHNFQUFZLEVBQUU7SUFFZCxJQUFJLENBQUNDLGtCQUFrQixFQUFFO0lBQ3pCLElBQUksQ0FBQ0MsUUFBUSxFQUFFO0lBQ2ZDLCtFQUFtQixFQUFFO0lBRXJCLElBQUksSUFBSSxDQUFDeFMsT0FBTyxDQUFDcU0sYUFBYSxDQUFDb0csMkJBQTJCLElBQUksSUFBSSxFQUFFO01BQ2hFQyw4RUFBa0IsQ0FBQyxJQUFJLENBQUMxUyxPQUFPLENBQUM7SUFDcEM7SUFDQTJTLCtFQUFtQixDQUFDLElBQUksQ0FBQzNTLE9BQU8sQ0FBQztJQUVqQyxJQUFNNFMsV0FBVyxHQUFHQyw2RUFBWSxDQUFDLG1CQUFtQixDQUFDO0lBRXJELElBQUlELFdBQVcsQ0FBQzVSLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFFOUIsSUFBTThSLE1BQU0sR0FBRyxJQUFJQyx3REFBTSxDQUFDSCxXQUFXLENBQUM7SUFFdEN6UyxDQUFDLENBQUNFLFFBQVEsQ0FBQyxDQUFDQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUU7TUFBQSxPQUFNcVIsTUFBSSxDQUFDTCxXQUFXLENBQUMwQixzQkFBc0IsQ0FBQ3BDLFlBQVksQ0FBQztJQUFBLEVBQUM7SUFFeEh6USxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsWUFBTTtNQUNoRXlSLFNBQVMsR0FBR2UsTUFBTSxDQUFDRyxrQkFBa0IsQ0FBQ3RCLE1BQUksQ0FBQzNSLE9BQU8sQ0FBQztNQUNuRDJSLE1BQUksQ0FBQ3VCLHdCQUF3QixDQUFDTixXQUFXLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0lBRUZBLFdBQVcsQ0FBQ3RTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBTTtNQUMzQixJQUFJeVIsU0FBUyxFQUFFO1FBQ1hBLFNBQVMsQ0FBQ29CLFlBQVksRUFBRTtRQUN4QixPQUFPcEIsU0FBUyxDQUFDcUIsTUFBTSxDQUFDLE9BQU8sQ0FBQztNQUNwQztNQUVBLE9BQU8sS0FBSztJQUNoQixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNDLG9CQUFvQixFQUFFO0VBQy9CLENBQUM7RUFBQTdCLE1BQUEsQ0FFRDBCLHdCQUF3QixHQUF4QixTQUFBQSx5QkFBeUI1UixLQUFLLEVBQUU7SUFDNUJBLEtBQUssQ0FBQzRDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQ3pDLElBQUksQ0FBQyxVQUFDNlIsQ0FBQyxFQUFFQyxLQUFLLEVBQUs7TUFDMUMsSUFBTXRGLE1BQU0sR0FBRzlOLENBQUMsQ0FBQ29ULEtBQUssQ0FBQztNQUN2QixJQUFNQyxTQUFTLEdBQU12RixNQUFNLENBQUMvTSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQU07TUFFOUMrTSxNQUFNLENBQUN3RixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUN2UyxJQUFJLENBQUMsSUFBSSxFQUFFc1MsU0FBUyxDQUFDO01BQzdDdkYsTUFBTSxDQUFDL00sSUFBSSxDQUFDLGtCQUFrQixFQUFFc1MsU0FBUyxDQUFDO0lBQzlDLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQWhDLE1BQUEsQ0FFRDZCLG9CQUFvQixHQUFwQixTQUFBQSxxQkFBQSxFQUF1QjtJQUNuQixJQUFJLElBQUksQ0FBQ25DLEdBQUcsQ0FBQ3ZJLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtNQUMxQyxJQUFJLENBQUN5SSxXQUFXLENBQUNoSyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3JDO0VBQ0osQ0FBQztFQUFBb0ssTUFBQSxDQUVEYyxrQkFBa0IsR0FBbEIsU0FBQUEsbUJBQUEsRUFBcUI7SUFDakIsSUFBSSxJQUFJLENBQUNwQixHQUFHLENBQUN2SSxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7TUFDMUMsSUFBSSxDQUFDMEksZ0JBQWdCLENBQUNqSyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzFDO0VBQ0osQ0FBQztFQUFBb0ssTUFBQSxDQUVEZSxRQUFRLEdBQVIsU0FBQUEsU0FBQSxFQUFXO0lBQ1AsSUFBTW1CLE1BQU0sR0FBR2hOLE1BQU0sQ0FBQ2lOLFVBQVU7SUFDaEMsSUFBTUMsT0FBTyxHQUFHelQsQ0FBQyxDQUFDLDBCQUEwQixDQUFDO0lBQzdDLElBQU0wVCxRQUFRLEdBQUcxVCxDQUFDLENBQUMsNkJBQTZCLENBQUM7SUFFakQsSUFBSXlULE9BQU8sQ0FBQzVTLE1BQU0sSUFBSTBTLE1BQU0sR0FBRyxJQUFJLEVBQUU7TUFDakN2VCxDQUFDLENBQUMsd0JBQXdCLEVBQUV5VCxPQUFPLENBQUMsQ0FBQzFQLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzRQLFNBQVMsRUFBRTtJQUN4RTtJQUVBLElBQUlELFFBQVEsQ0FBQzdTLE1BQU0sRUFBRTtNQUNqQixJQUFJNlMsUUFBUSxDQUFDM1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDcUUsSUFBSSxFQUFFLENBQUN6RCxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDbEQzRSxDQUFDLENBQUMsc0NBQXNDLENBQUMsQ0FBQ3lMLE1BQU0sRUFBRSxDQUFDM0UsSUFBSSxFQUFFO1FBQ3pENE0sUUFBUSxDQUFDNU0sSUFBSSxFQUFFO01BQ25CO0lBQ0o7O0lBRUE7SUFDQTtJQUNBO0lBQ0EsSUFBTThNLFdBQVcsR0FBRzVULENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUV4QzRULFdBQVcsQ0FBQ3pULEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ29QLENBQUMsRUFBSztNQUMzQkEsQ0FBQyxDQUFDbFAsY0FBYyxFQUFFO01BQ2xCLElBQU13VCxPQUFPLEdBQUc3VCxDQUFDLENBQUN1UCxDQUFDLENBQUN1RSxhQUFhLENBQUM7TUFFbEMsSUFBTUMsYUFBYSxHQUFHRixPQUFPLENBQUMxUSxJQUFJLENBQUMsV0FBVyxDQUFDO01BRS9DLElBQUk0USxhQUFhLEVBQUU7UUFDZkYsT0FBTyxDQUFDMVEsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUM7UUFDaEMsSUFBTTZRLFdBQVcsR0FBR0gsT0FBTyxDQUFDMVEsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM1QyxJQUFNOFEsT0FBTyxHQUFHSixPQUFPLENBQUM5UyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQU1tVCxRQUFRLEdBQUdsVSxDQUFDLENBQUNpVSxPQUFPLEdBQUMsY0FBYyxDQUFDO1FBRTFDalUsQ0FBQyxDQUFDbVUsR0FBRyxDQUFDSCxXQUFXLEVBQUUsVUFBUzdRLElBQUksRUFBRTtVQUM5Qm5ELENBQUMsQ0FBQyxlQUFlLEVBQUVrVSxRQUFRLENBQUMsQ0FBQ0UsTUFBTSxFQUFFO1VBQ3JDRixRQUFRLENBQUN6UixNQUFNLENBQUN6QyxDQUFDLENBQUNtRCxJQUFJLENBQUMsQ0FBQ1ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDYyxJQUFJLEVBQUUsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQ3dQLElBQUksQ0FBQyxVQUFTM1EsR0FBRyxFQUFFO1VBQ2xCMUQsQ0FBQyxDQUFDLGVBQWUsRUFBRWtVLFFBQVEsQ0FBQyxDQUFDRSxNQUFNLEVBQUU7VUFDckNGLFFBQVEsQ0FBQ3pSLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztRQUMzQyxDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBO0lBQ0E7SUFDQSxJQUFNNlIsYUFBYSxHQUFHdFUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO0lBRTNDc1UsYUFBYSxDQUFDblUsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDb1AsQ0FBQyxFQUFLO01BQzdCQSxDQUFDLENBQUNsUCxjQUFjLEVBQUU7TUFDbEIsSUFBTXdULE9BQU8sR0FBRzdULENBQUMsQ0FBQ3VQLENBQUMsQ0FBQ3VFLGFBQWEsQ0FBQztNQUNsQyxJQUFNUyxLQUFLLEdBQUdWLE9BQU8sQ0FBQzlTLElBQUksQ0FBQyxNQUFNLENBQUM7TUFDbEMsSUFBTXlULE9BQU8sR0FBR3hVLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDbVEsTUFBTSxFQUFFLENBQUNFLEdBQUcsR0FBRyxFQUFFO01BRS9ELElBQUl3RCxPQUFPLENBQUNwVCxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDL0JvVCxPQUFPLENBQUN0VCxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQ2hDUCxDQUFDLENBQUN1VSxLQUFLLENBQUMsQ0FBQ2hVLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQ3dELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzBRLE9BQU8sRUFBRTtNQUNuRSxDQUFDLE1BQ0k7UUFDRCxJQUFNQyxnQkFBZ0IsR0FBRzFVLENBQUMsQ0FBQyxnRUFBZ0UsQ0FBQztRQUU1RnNVLGFBQWEsQ0FBQy9ULFdBQVcsQ0FBQyxXQUFXLENBQUM7UUFDdENzVCxPQUFPLENBQUNuVCxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQzdCZ1UsZ0JBQWdCLENBQUNuVSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUN3RCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMwUSxPQUFPLEVBQUU7UUFDdkV6VSxDQUFDLENBQUN1VSxLQUFLLENBQUMsQ0FBQzdULFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQ3FELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzRQLFNBQVMsRUFBRTtRQUU5RDNULENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQzJVLE9BQU8sQ0FBQztVQUNuQnZFLFNBQVMsRUFBRW9FO1FBQ2YsQ0FBQyxFQUFFLElBQUksQ0FBQztNQUNaO0lBQ0osQ0FBQyxDQUFDOztJQUVGO0lBQ0E7SUFDQTtJQUNBLElBQU1JLGFBQWEsR0FBRzVVLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUM5QyxJQUFNNlUsZUFBZSxHQUFHN1UsQ0FBQyxDQUFDLHVCQUF1QixDQUFDO0lBQ2xELElBQU04VSxlQUFlLEdBQUc5VSxDQUFDLENBQUMseUJBQXlCLENBQUM7SUFDcEQsSUFBTStVLGNBQWMsR0FBRy9VLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQztJQUVsRDRVLGFBQWEsQ0FBQ3pVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ29QLENBQUMsRUFBSztNQUM3QkEsQ0FBQyxDQUFDbFAsY0FBYyxFQUFFO01BRWxCLElBQUl3VSxlQUFlLENBQUNwVSxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDckNvVSxlQUFlLENBQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDNUJJLGVBQWUsQ0FBQ3RVLFdBQVcsQ0FBQyxTQUFTLENBQUM7TUFDMUMsQ0FBQyxNQUNJO1FBQ0RzVSxlQUFlLENBQUNsQixTQUFTLENBQUMsR0FBRyxDQUFDO1FBQzlCa0IsZUFBZSxDQUFDblUsUUFBUSxDQUFDLFNBQVMsQ0FBQztNQUN2QztJQUNKLENBQUMsQ0FBQztJQUVGb1UsZUFBZSxDQUFDM1UsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDb1AsQ0FBQyxFQUFLO01BQy9CQSxDQUFDLENBQUNsUCxjQUFjLEVBQUU7TUFFbEIsSUFBSXdVLGVBQWUsQ0FBQ3BVLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUNyQ29VLGVBQWUsQ0FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUM1QkksZUFBZSxDQUFDdFUsV0FBVyxDQUFDLFNBQVMsQ0FBQztNQUMxQztJQUNKLENBQUMsQ0FBQztJQUVGd1UsY0FBYyxDQUFDNVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDb1AsQ0FBQyxFQUFLO01BQzlCQSxDQUFDLENBQUNsUCxjQUFjLEVBQUU7TUFDbEIsSUFBTXdULE9BQU8sR0FBRzdULENBQUMsQ0FBQ3VQLENBQUMsQ0FBQzVPLE1BQU0sQ0FBQztNQUUzQmtULE9BQU8sQ0FBQ3BLLE1BQU0sRUFBRTtNQUNoQnZKLFFBQVEsQ0FBQzhVLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQyxDQUFDOztJQUVGO0lBQ0E7SUFDQTtJQUNBaFYsQ0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDb1AsQ0FBQyxFQUFLO01BQzNCLElBQU1zRSxPQUFPLEdBQUc3VCxDQUFDLENBQUN1UCxDQUFDLENBQUM1TyxNQUFNLENBQUM7TUFDM0IsSUFBTWtVLGVBQWUsR0FBRzdVLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQztNQUVsRCxJQUFJNlQsT0FBTyxDQUFDalQsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDcEQsSUFBSWdVLGVBQWUsQ0FBQ3BVLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtVQUNyQ29VLGVBQWUsQ0FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQztVQUM1QkksZUFBZSxDQUFDdFUsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUMxQztNQUNKO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUFvUSxPQUFBO0FBQUEsRUEvTWdDc0UscURBQVc7Ozs7Ozs7Ozs7Ozs7O0FDaEJoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnQztBQUMwQjtBQUNmO0FBQ2M7QUFDYztBQUFBLElBQUFDLFFBQUE7RUFHbkUsU0FBQUEsU0FBWXpDLFdBQVcsRUFBRTtJQUNyQixJQUFJLENBQUNiLFNBQVMsR0FBR3VELDJEQUFHLENBQUM7TUFDakJDLE1BQU0sRUFBRTNDLFdBQVcsQ0FBQzFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztNQUNoRHNSLEdBQUcsRUFBRUMsa0ZBQXlCQTtJQUNsQyxDQUFDLENBQUM7SUFFRixJQUFJLENBQUNDLGVBQWUsR0FBR3ZWLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztJQUM1QyxJQUFJLENBQUN3VixZQUFZLEdBQUd4VixDQUFDLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDdVYsZUFBZSxDQUFDO0lBRWpFLElBQUksQ0FBQ0UsWUFBWSxFQUFFO0lBQ25CLElBQUksQ0FBQ0Msb0JBQW9CLEVBQUU7SUFDM0IsSUFBSSxDQUFDQyxlQUFlLEVBQUU7RUFDMUI7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7RUFISSxJQUFBdEUsTUFBQSxHQUFBNkQsUUFBQSxDQUFBNUQsU0FBQTtFQUFBRCxNQUFBLENBSUFvRSxZQUFZLEdBQVosU0FBQUEsYUFBQSxFQUFlO0lBQUEsSUFBQW5QLEtBQUE7SUFDWCxJQUFNc1AsUUFBUSxHQUFHNVYsQ0FBQyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQ3VWLGVBQWUsQ0FBQztJQUVuRXZWLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQU07TUFDdkNILENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDaUgsT0FBTyxDQUFDLE9BQU8sQ0FBQztNQUNoRCxJQUFJLENBQUMyTyxRQUFRLENBQUNuVixRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDL0I2RixLQUFJLENBQUNrUCxZQUFZLENBQUN2TyxPQUFPLENBQUM0TyxxRUFBaUIsQ0FBQ0MsS0FBSyxDQUFDO01BQ3REO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBekUsTUFBQSxDQUVEc0UsZUFBZSxHQUFmLFNBQUFBLGdCQUFBLEVBQWtCO0lBQ2Q7SUFDQSxJQUFJcFAsTUFBTSxDQUFDQyxRQUFRLENBQUN1UCxJQUFJLElBQUl4UCxNQUFNLENBQUNDLFFBQVEsQ0FBQ3VQLElBQUksQ0FBQ3ZOLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtNQUNoRjtJQUNKOztJQUVBO0lBQ0EsSUFBSSxDQUFDZ04sWUFBWSxDQUFDdk8sT0FBTyxDQUFDNE8scUVBQWlCLENBQUNDLEtBQUssQ0FBQztFQUN0RDs7RUFFQTtBQUNKO0FBQ0EsS0FGSTtFQUFBekUsTUFBQSxDQUdBcUUsb0JBQW9CLEdBQXBCLFNBQUFBLHFCQUFBLEVBQXVCO0lBQ25CLElBQU1NLFNBQVMsR0FBR2hXLENBQUMsQ0FBQyx5Q0FBeUMsRUFBRSxJQUFJLENBQUN1VixlQUFlLENBQUM7SUFDcEYsSUFBTVUsU0FBUyxHQUFHalcsQ0FBQyxDQUFDLDZDQUE2QyxFQUFFLElBQUksQ0FBQ3VWLGVBQWUsQ0FBQztJQUV4RixJQUFJUyxTQUFTLENBQUNuVixNQUFNLEVBQUU7TUFDbEJtVixTQUFTLENBQUNqVixJQUFJLENBQUMsTUFBTSxFQUFLaVYsU0FBUyxDQUFDalYsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBb0I7SUFDeEU7SUFFQSxJQUFJa1YsU0FBUyxDQUFDcFYsTUFBTSxFQUFFO01BQ2xCb1YsU0FBUyxDQUFDbFYsSUFBSSxDQUFDLE1BQU0sRUFBS2tWLFNBQVMsQ0FBQ2xWLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQW9CO0lBQ3hFO0VBQ0osQ0FBQztFQUFBc1EsTUFBQSxDQUVEeUIsa0JBQWtCLEdBQWxCLFNBQUFBLG1CQUFtQmpULE9BQU8sRUFBRTtJQUN4QixJQUFJLENBQUNBLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUMrUixTQUFTLENBQUNzRSxHQUFHLENBQUMsQ0FBQztNQUNoQkMsUUFBUSxFQUFFLG9CQUFvQjtNQUM5QkMsUUFBUSxFQUFFLFVBQVU7TUFDcEJ0VSxZQUFZLEVBQUV4Qyw0RUFBVSxDQUFDLElBQUksQ0FBQ08sT0FBTyxDQUFDd1csWUFBWTtJQUN0RCxDQUFDLEVBQUU7TUFDQ0YsUUFBUSxFQUFFLG1CQUFtQjtNQUM3QkMsUUFBUSxFQUFFLFVBQVU7TUFDcEJ0VSxZQUFZLEVBQUV4Qyw0RUFBVSxDQUFDLElBQUksQ0FBQ08sT0FBTyxDQUFDeVcsYUFBYTtJQUN2RCxDQUFDLEVBQUU7TUFDQ0gsUUFBUSxFQUFFLGtCQUFrQjtNQUM1QkMsUUFBUSxFQUFFLFVBQVU7TUFDcEJ0VSxZQUFZLEVBQUV4Qyw0RUFBVSxDQUFDLElBQUksQ0FBQ08sT0FBTyxDQUFDMFcsYUFBYTtJQUN2RCxDQUFDLEVBQUU7TUFDQ0osUUFBUSxFQUFFLGtDQUFrQztNQUM1Q0MsUUFBUSxFQUFFLFNBQUFBLFNBQUNJLEVBQUUsRUFBRWhWLEdBQUcsRUFBSztRQUNuQixJQUFNaVYsTUFBTSxHQUFHQyw0REFBSyxDQUFDQyxLQUFLLENBQUNuVixHQUFHLENBQUM7UUFDL0JnVixFQUFFLENBQUNDLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDRDNVLFlBQVksRUFBRSxJQUFJLENBQUNqQyxPQUFPLENBQUMrVztJQUMvQixDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSxDQUFDaEYsU0FBUztFQUN6QixDQUFDO0VBQUFQLE1BQUEsQ0FFRCtFLFFBQVEsR0FBUixTQUFBQSxTQUFBLEVBQVc7SUFDUCxPQUFPLElBQUksQ0FBQ3hFLFNBQVMsQ0FBQ29CLFlBQVksRUFBRTtFQUN4QyxDQUFDO0VBQUEsT0FBQWtDLFFBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUMxRkw7QUFBQTtBQUFBO0FBQU8sSUFBTTJCLFlBQVk7RUFDckIsU0FBQUEsYUFBWUMsUUFBUSxFQUFFO0lBQ2xCLElBQUksQ0FBQ0MsT0FBTyxHQUFHRCxRQUFRLENBQUMvUyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDbkQsSUFBSSxDQUFDaVQsT0FBTyxHQUFHRixRQUFRLENBQUMvUyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDakQsSUFBSSxDQUFDa1QsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNDLFVBQVUsRUFBRTtFQUNyQjtFQUFDLElBQUE3RixNQUFBLEdBQUF3RixZQUFBLENBQUF2RixTQUFBO0VBQUFELE1BQUEsQ0FFRDhGLGNBQWMsR0FBZCxTQUFBQSxlQUFlNUgsQ0FBQyxFQUFFO0lBQ2RBLENBQUMsQ0FBQ2xQLGNBQWMsRUFBRTtJQUVsQixJQUFNd1QsT0FBTyxHQUFHN1QsQ0FBQyxDQUFDdVAsQ0FBQyxDQUFDdUUsYUFBYSxDQUFDO0lBRWxDLElBQUksQ0FBQ21ELFlBQVksR0FBRztNQUNoQm5XLEVBQUUsRUFBRStTLE9BQU8sQ0FBQzFRLElBQUksQ0FBQyxTQUFTLENBQUM7TUFDM0JpVSxjQUFjLEVBQUV2RDtJQUNwQixDQUFDO0lBRUQsSUFBSSxDQUFDd0QsWUFBWSxFQUFFO0lBQ25CLElBQUksQ0FBQ0MsY0FBYyxFQUFFO0VBQ3pCLENBQUM7RUFBQWpHLE1BQUEsQ0FFRGdHLFlBQVksR0FBWixTQUFBQSxhQUFBLEVBQWU7SUFDWCxJQUFJLENBQUNOLE9BQU8sQ0FBQ2hXLElBQUksQ0FBQyxLQUFLLCtCQUE2QixJQUFJLENBQUNrVyxZQUFZLENBQUNuVyxFQUFFLENBQUc7RUFDL0UsQ0FBQztFQUFBdVEsTUFBQSxDQUVEaUcsY0FBYyxHQUFkLFNBQUFBLGVBQUEsRUFBaUI7SUFDYixJQUFJLENBQUNOLE9BQU8sQ0FBQ3pXLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDckMsSUFBSSxDQUFDMFcsWUFBWSxDQUFDRyxjQUFjLENBQUMxVyxRQUFRLENBQUMsV0FBVyxDQUFDO0VBQzFELENBQUM7RUFBQTJRLE1BQUEsQ0FFRDZGLFVBQVUsR0FBVixTQUFBQSxXQUFBLEVBQWE7SUFDVCxJQUFJLENBQUNGLE9BQU8sQ0FBQzdXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDZ1gsY0FBYyxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDNUQsQ0FBQztFQUFBLE9BQUFWLFlBQUE7QUFBQTtBQUdVLFNBQVMzRSxZQUFZQSxDQUFBLEVBQUc7RUFDbkMsSUFBTXNGLFNBQVMsR0FBRyxlQUFlO0VBQ2pDLElBQU1DLGFBQWEsR0FBR3pYLENBQUMsWUFBVXdYLFNBQVMsT0FBSTtFQUU5Q0MsYUFBYSxDQUFDblcsSUFBSSxDQUFDLFVBQUNxQixLQUFLLEVBQUVrQixPQUFPLEVBQUs7SUFDbkMsSUFBTTZULEdBQUcsR0FBRzFYLENBQUMsQ0FBQzZELE9BQU8sQ0FBQztJQUN0QixJQUFNOFQsYUFBYSxHQUFHRCxHQUFHLENBQUN2VSxJQUFJLENBQUNxVSxTQUFTLENBQUMsWUFBWVgsWUFBWTtJQUVqRSxJQUFJYyxhQUFhLEVBQUU7TUFDZjtJQUNKO0lBRUFELEdBQUcsQ0FBQ3ZVLElBQUksQ0FBQ3FVLFNBQVMsRUFBRSxJQUFJWCxZQUFZLENBQUNhLEdBQUcsQ0FBQyxDQUFDO0VBQzlDLENBQUMsQ0FBQztBQUNOLEMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZnVuY3Rpb24gcGFyc2VzIEhUTUwgZW50aXRpZXMgaW4gc3RyaW5nc1xuICogQHBhcmFtIHN0cjogU3RyaW5nXG4gKiBAcmV0dXJucyBTdHJpbmdcbiovXG5leHBvcnQgY29uc3Qgc2FmZVN0cmluZyA9IChzdHIpID0+IHtcbiAgICBjb25zdCBkID0gbmV3IERPTVBhcnNlcigpO1xuICAgIHJldHVybiBkLnBhcnNlRnJvbVN0cmluZyhzdHIsICd0ZXh0L2h0bWwnKS5ib2R5LnRleHRDb250ZW50O1xufTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBoYWxvQ2FsY3VsYXRlRnJlZVNoaXBwaW5nIGZyb20gJy4vaGFsb0NhbGN1bGF0ZUZyZWVTaGlwcGluZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgICBjb25zdCByZWxhdGVfdGFiID0gXCIjdGFiLXJlbGF0ZWRcIjtcclxuICAgIGNvbnN0ICRidW5kbGUgPSAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMnKTtcclxuXHJcbiAgICBzaG93QnVuZGxlKCk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5oYWxvLXRvZ2dsZS1vcHRpb25zJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkKCcuaGFsby10b2dnbGUtb3B0aW9ucycpLm5vdCgkKHRoaXMpKS5yZW1vdmVDbGFzcygnaXMtZm9jdXMnKTtcclxuICAgICAgICAkKCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLm5vdCgkKHRoaXMpLm5leHQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcblxyXG4gICAgICAgIGlmICghJCh0aGlzKS5uZXh0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtZm9jdXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLmFkZENsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLWZvY3VzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5oYWxvLW9wdGlvbi1jbG9zZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgJCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgICQoJy5oYWxvLXRvZ2dsZS1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLWZvY3VzJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKCQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICBpZiAoKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuaGFsby10b2dnbGUtb3B0aW9ucycpLmxlbmd0aCA9PT0gMCkpe1xyXG4gICAgICAgICAgICAgICAgJCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtZm9jdXMnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmhhbG8tZGV0YWlsLWNoZWNrYm94JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpLnJlcGxhY2UoJ2ZidF9wcm9kdWN0JywgJycpO1xyXG5cclxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdpc0NoZWNrZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCdpc0NoZWNrZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRvdGFsUHJpY2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjaGFsby1hZGRBbGwnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybScsICQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cycpKTtcclxuICAgICAgICB2YXIgYXJyUHJvID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgICAgICQoJy5oYWxvLWRldGFpbC1jaGVja2JveCcpLmVhY2goZnVuY3Rpb24oaSwgdmFsKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHZhbCkuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgIGFyclByby5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBjaGVjayA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoYXJyUHJvLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY2hlY2sgPSBjaGVja1Byb2R1Y3QoJGZvcm0sIGFyclBybyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgICAgICAgICAgaWYgKGFyclByby5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMgLmxvYWRpbmdPdmVybGF5Jykuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydCgkZm9ybSwgMCwgYXJyUHJvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdQbGVhc2UgbWFrZSBzdXJlIGFsbCBvcHRpb25zIGhhdmUgYmVlbiBmaWxsZWQgaW4uJztcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dCdW5kbGUoKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogJ2hhbG90aGVtZXMvcHJvZHVjdC9oYWxvLWJ1bmRsZS1wcm9kdWN0cy10bXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6ICdoYWxvdGhlbWVzL3Byb2R1Y3QvaGFsby1idW5kbGUtcHJvZHVjdHMtb3B0aW9ucycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgcHJvZEJ1bmRsZUlkID0gW107XHJcblxyXG4gICAgICAgICQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cycpLnJlbW92ZUNsYXNzKCdoYWxvLWJsb2NrLWRpc2FibGUnKTtcclxuXHJcbiAgICAgICAgZmlyc3RJdGVtKCk7XHJcblxyXG4gICAgICAgICQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cyAuYnVuZGxlLXByb2R1Y3QtcmlnaHQnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJoYWxvLXByb2R1Y3QtdG90YWxcIj48ZGl2IGNsYXNzPVwidG90YWwtcHJpY2VcIj48c3BhbiBjbGFzcz1cInRleHRcIj5Ub3RhbCBwcmljZTo8L3NwYW4+PHNwYW4gY2xhc3M9XCJwcmljZVwiPjwvc3Bhbj48L2Rpdj48YSBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgaGFsby1wcm9kdWN0LXRvdGFsLWJ1dHRvblwiIGlkPVwiaGFsby1hZGRBbGxcIj5BZGQgQWxsIFRvIENhcnQ8L2E+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgICQuZWFjaChjb250ZXh0LnByb2R1Y3RDdXN0b21GaWVsZHMsIGZ1bmN0aW9uKGluZGV4LCBvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5uYW1lID09ICdfX2J1bmRsZWlkJykge1xyXG4gICAgICAgICAgICAgICAgcHJvZEJ1bmRsZUlkID0gSlNPTi5wYXJzZSgnWycrb2JqLnZhbHVlKyddJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cycpLmxlbmd0aCA+IDAgJiYgcHJvZEJ1bmRsZUlkLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBudW0gPSAwO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgJChyZWxhdGVfdGFiICsgJyAuY2FyZCcpLmVhY2goZnVuY3Rpb24oaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goe2k6aSwgZGF0YTogXCJcIn0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwSWQgPSAkKHZhbCkuZGF0YSgncHJvZHVjdC1pZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwSWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuaSA9PSBpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG51bSA9PSAkKHJlbGF0ZV90YWIgKyAnIC5jYXJkJykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMaXN0KGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzJykubGVuZ3RoID4gMCAmJiBwcm9kQnVuZGxlSWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgbnVtID0gMDtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICQuZWFjaChwcm9kQnVuZGxlSWQsIGZ1bmN0aW9uKGksIHZhbCl7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goe2k6aSwgZGF0YTogXCJcIn0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwSWQgPSBwcm9kQnVuZGxlSWRbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBJZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHBJZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5pID09IGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSsrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtID09IHByb2RCdW5kbGVJZC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xpc3QobGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpcnN0SXRlbSgpe1xyXG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9ICQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cyAuaGFsby1wcm9kdWN0LWxpc3QgLmhhbG8tcHJvZHVjdC1pdGVtOmZpcnN0LWNoaWxkJyksXHJcbiAgICAgICAgICAgIHBJZCA9IGZpcnN0SXRlbS5kYXRhKCdwcm9kdWN0LWlkJyksXHJcbiAgICAgICAgICAgICRmb3JtID0gZmlyc3RJdGVtLmZpbmQoJ2Zvcm0nKSxcclxuICAgICAgICAgICAgaGFzT3B0aW9ucyA9ICRmb3JtLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCxcclxuICAgICAgICAgICAgaGFzRGVmYXVsdE9wdGlvbnMgPSAkZm9ybS5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGhhc0RlZmF1bHRPcHRpb25zICYmIGhhc09wdGlvbnMpIHtcclxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwSWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJGZvcm0sIGF0dHJpYnV0ZXNEYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVWaWV3KCRmb3JtLCBhdHRyaWJ1dGVzRGF0YSwgYXR0cmlidXRlc0NvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhhdHRyaWJ1dGVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93TGlzdChsaXN0KXtcclxuICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBlbGVtZW50LmRhdGE7XHJcblxyXG4gICAgICAgICAgICAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMgLmhhbG8tcHJvZHVjdC1saXN0JykuYXBwZW5kKHJlc3BvbnNlLml0ZW0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9wdGlvbnMudHJpbSgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwSWQgPSAkKHJlc3BvbnNlLml0ZW0pLmRhdGEoJ3Byb2R1Y3QtaWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzIC5oYWxvLXByb2R1Y3QtbGlzdCAuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHBJZCArICdcIl0gZm9ybScpO1xyXG5cclxuICAgICAgICAgICAgICAgICRmb3JtLmFwcGVuZChyZXNwb25zZS5vcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNEZWZhdWx0T3B0aW9ucyA9ICQocmVzcG9uc2Uub3B0aW9ucykuZmluZCgnW2RhdGEtZGVmYXVsdF0nKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRPcHRpb25zICYmIGhhc09wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHBJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcygkZm9ybSwgYXR0cmlidXRlc0RhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVWaWV3KCRmb3JtLCBhdHRyaWJ1dGVzRGF0YSwgYXR0cmlidXRlc0NvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoYXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdFZhcmlhbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwcm9kdWN0T3B0aW9ucygpO1xyXG4gICAgICAgIHNob3dTbGlja1NsaWRlcigpO1xyXG4gICAgICAgIHRvdGFsUHJpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93U2xpY2tTbGlkZXIoKXtcclxuICAgICAgICAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMgLmhhbG8tcHJvZHVjdC1saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6IFwiPGRpdiBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyc+bmV4dDwvZGl2PlwiLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6IFwiPGRpdiBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyc+cHJldjwvZGl2PlwiLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTQ0MCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA2NDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrUHJvZHVjdChmb3JtLCBhcnJQcm8pIHtcclxuICAgICAgICB2YXIgY2hlY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyUHJvLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBrID0gYXJyUHJvW2ldO1xyXG4gICAgICAgICAgICB2YXIgJGZvcm0gPSAkKGZvcm1ba10pO1xyXG4gICAgICAgICAgICBpZiAoJGZvcm0uZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IGNoZWNrQmVmb3JlQWRkKCRmb3JtKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrQmVmb3JlQWRkKCRhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrID0gdHJ1ZTtcclxuICAgICAgICAkYXR0cmlidXRlcy5maW5kKCdpbnB1dDp0ZXh0LCBpbnB1dDpwYXNzd29yZCwgaW5wdXQ6ZmlsZSwgdGV4dGFyZWEnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkKHRoaXMpLnByb3AoJ3JlcXVpcmVkJykpIHt9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkpIHt9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRhdHRyaWJ1dGVzLmZpbmQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoISQodGhpcykucHJvcCgncmVxdWlyZWQnKSkge1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7fSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgYXR0ID0gXCJcIjtcclxuICAgICAgICAkYXR0cmlidXRlcy5maW5kKCdpbnB1dDpyYWRpbywgaW5wdXQ6Y2hlY2tib3gnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoYXR0ICE9ICQodGhpcykuYXR0cihcIm5hbWVcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBhdHQgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLnByb3AoJ3JlcXVpcmVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkge31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpID09IFwiY2hlY2tib3hcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkge30gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkge30gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUb0NhcnQoZm9ybSwgaSwgYXJyUCkge1xyXG4gICAgICAgIGlmIChpID49IGFyclAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvY2FydC5waHAnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGsgPSBhcnJQW2ldO1xyXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIGNhcnRcclxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShuZXcgRm9ybURhdGEoZm9ybVtrXSkpLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaSsrO1xyXG5cclxuICAgICAgICAgICAgaWYgKGkgPj0gYXJyUC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cyAubG9hZGluZ092ZXJsYXknKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVDYXJ0Q29udGVudChyZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsLWJhY2tncm91bmQnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2NvbW1vbi9jYXJ0LXByZXZpZXcnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZGluZ0NsYXNzID0gJ2lzLWxvYWRpbmcnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY2FydERyb3Bkb3duID0gJCgnI2NhcnQtcHJldmlldy1kcm9wZG93bicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNhcnRMb2FkaW5nID0gJCgnPGRpdiBjbGFzcz1cImxvYWRpbmdPdmVybGF5XCI+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGJvZHkudG9nZ2xlQ2xhc3MoJ2hhbG8tb3Blbi1zaWRlLWNhcnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkY2FydERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGxvYWRpbmdDbGFzcylcclxuICAgICAgICAgICAgICAgICAgICAuaHRtbCgkY2FydExvYWRpbmcpO1xyXG4gICAgICAgICAgICAgICAgJGNhcnRMb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNhcnREcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MobG9hZGluZ0NsYXNzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNhcnRMb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJChyZXNwb25zZSkuZmluZCgnW2RhdGEtY2FydC1xdWFudGl0eV0nKS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkYm9keS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGFsb0NhbGN1bGF0ZUZyZWVTaGlwcGluZyh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhZGRUb0NhcnQoZm9ybSwgaSwgYXJyUCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2FydENvbnRlbnQoY2FydEl0ZW1JZCwgb25Db21wbGV0ZSkge1xyXG4gICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgIGNvbnN0IGxvYWRpbmdDbGFzcyA9ICdpcy1sb2FkaW5nJztcclxuICAgICAgICBjb25zdCAkY2FydERyb3Bkb3duID0gJCgnI2NhcnQtcHJldmlldy1kcm9wZG93bicpO1xyXG4gICAgICAgIGNvbnN0ICRjYXJ0TG9hZGluZyA9ICQoJzxkaXYgY2xhc3M9XCJsb2FkaW5nT3ZlcmxheVwiPjwvZGl2PicpO1xyXG4gICAgICAgIGNvbnN0ICRzaWRlQ2FydEJsb2NrID0gJCgnI3NpZGVCbG9ja19jYXJ0Jyk7XHJcblxyXG4gICAgICAgICRib2R5LnRvZ2dsZUNsYXNzKCdvcGVuQ2FydFNpZGViYXIgaXMtc2lkZS1ibG9jaycpO1xyXG4gICAgICAgICRzaWRlQ2FydEJsb2NrLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XHJcblxyXG4gICAgICAgICRjYXJ0RHJvcGRvd25cclxuICAgICAgICAgICAgLmFkZENsYXNzKGxvYWRpbmdDbGFzcylcclxuICAgICAgICAgICAgLmh0bWwoJGNhcnRMb2FkaW5nKTtcclxuICAgICAgICAkY2FydExvYWRpbmdcclxuICAgICAgICAgICAgLnNob3coKTtcclxuXHJcbiAgICAgICAgZ2V0Q2FydENvbnRlbnQoY2FydEl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkY2FydERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MobG9hZGluZ0NsYXNzKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAkY2FydExvYWRpbmdcclxuICAgICAgICAgICAgICAgIC5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQocmVzcG9uc2UpLmZpbmQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJykuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcclxuXHJcbiAgICAgICAgICAgICRib2R5LnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xyXG4gICAgICAgICAgICBoYWxvQ2FsY3VsYXRlRnJlZVNoaXBwaW5nKGNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2FydENvbnRlbnQoY2FydEl0ZW1JZCwgb25Db21wbGV0ZSkge1xyXG4gICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICdjb21tb24vY2FydC1wcmV2aWV3J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgb25Db21wbGV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG90YWxQcmljZSgpIHtcclxuICAgICAgICB2YXIgdG90YWwgPSAwLFxyXG4gICAgICAgICAgICBwb3MgPSAwLFxyXG4gICAgICAgICAgICBzeW1ib2wgPSBcIiRcIjtcclxuXHJcbiAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtLmlzQ2hlY2tlZCcpLmVhY2goZnVuY3Rpb24oaSwgdmFsKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW5jeSxcclxuICAgICAgICAgICAgICAgIHByaWNlLCBzO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQodmFsKS5maW5kKCcucHJpY2Utc2VjdGlvbiAucHJpY2UucHJpY2UtLXdpdGhUYXgnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgY3VycmVuY3kgPSAkKHZhbCkuZmluZCgnLnByaWNlLXNlY3Rpb24gLnByaWNlLnByaWNlLS13aXRoVGF4JykudGV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeSA9ICQodmFsKS5maW5kKCcucHJpY2Utc2VjdGlvbiAucHJpY2UucHJpY2UtLXdpdGhvdXRUYXgnKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByaWNlID0gcGFyc2VGbG9hdChjdXJyZW5jeS5yZXBsYWNlKC9bXjAtOS4tXSsvZywgXCJcIikpO1xyXG5cclxuICAgICAgICAgICAgcyA9IGN1cnJlbmN5LnJlcGxhY2UocGFyc2VGbG9hdChwcmljZSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIiksIFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzTmFOKHBhcnNlRmxvYXQocy5yZXBsYWNlKC9bXjAtOS4tXSsvZywgXCJcIikpKSl7XHJcbiAgICAgICAgICAgICAgICBzeW1ib2wgPSBzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3kuaW5kZXhPZihzeW1ib2wpICE9IC0xKXtcclxuICAgICAgICAgICAgICAgIHBvcyA9IGN1cnJlbmN5LmluZGV4T2Yoc3ltYm9sKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIHByaWNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWwpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG5cclxuICAgICAgICBpZiAocG9zID09IDApe1xyXG4gICAgICAgICAgICB0b3RhbCA9IHN5bWJvbCArIHRvdGFsO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIHN5bWJvbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5oYWxvLXByb2R1Y3QtdG90YWwgLnByaWNlJykuaHRtbCh0b3RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvZHVjdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgdG90YWxQcmljZSgpO1xyXG5cclxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm0nLCAkYnVuZGxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScsICRmb3JtKTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjaGFsby1idW5kbGUtcHJvZHVjdHMgZm9ybSBbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCk7XHJcbiAgICAgICAgICAgIHNldFByb2R1Y3RWYXJpYW50KGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRQcm9kdWN0VmFyaWFudCgpIHtcclxuICAgICAgICBjb25zdCB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzID0gW107XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICAkLmVhY2goJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gdmFsdWUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGV4dGFyZWEnICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2RhdGVTdHJpbmd9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3Quc2VsZWN0ZWRJbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSkuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpLnRleHQoc2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAnc3dhdGNoJyB8fCB0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdmFsdWUucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNoZWNrZWQubGFiZWxzWzBdLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHZhbHVlLmNoaWxkcmVuWzBdKS5maW5kKCdbZGF0YS1vcHRpb24tdmFsdWVdJykudGV4dChsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3dhdGNoJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNoZWNrZWQubGFiZWxzWzBdLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbC50aXRsZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKS50ZXh0KGxhYmVsLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpZZXNgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06Tm9gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgJGNoYW5nZWRPcHRpb24gPSAkKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRjaGFuZ2VkT3B0aW9uLmF0dHIoJ2lkJykgPT09ICdmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcclxuICAgICAgICAgICAgc2hvd1Byb2R1Y3RJbWFnZShwcm9kdWN0SWQsIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKCRmb3JtLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgICAgICB1cGRhdGVWaWV3KCRmb3JtLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEsIHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCk7XHJcbiAgICAgICAgICAgIHRvdGFsUHJpY2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcygkc2NvcGUsIGRhdGEpIHtcclxuICAgICAgICBjb25zdCBiZWhhdmlvciA9IGRhdGEub3V0X29mX3N0b2NrX2JlaGF2aW9yO1xyXG4gICAgICAgIGNvbnN0IGluU3RvY2tJZHMgPSBkYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXM7XHJcbiAgICAgICAgY29uc3Qgb3V0T2ZTdG9ja01lc3NhZ2UgPSBgICgke2RhdGEub3V0X29mX3N0b2NrX21lc3NhZ2V9KWA7XHJcblxyXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdJywgJHNjb3BlKS5lYWNoKChpLCBhdHRyaWJ1dGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZSA9ICQoYXR0cmlidXRlKTtcclxuICAgICAgICAgICAgY29uc3QgYXR0cklkID0gcGFyc2VJbnQoJGF0dHJpYnV0ZS5kYXRhKCdwcm9kdWN0QXR0cmlidXRlVmFsdWUnKSwgMTApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLmhpZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkYXR0cmlidXRlLnBhcmVudCgpO1xyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24oZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRzZWxlY3QudmFsKCkgPT09ICRhdHRyaWJ1dGUuYXR0cigndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSArIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucmVtb3ZlQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkYXR0cmlidXRlLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xyXG5cclxuICAgICAgICByZXR1cm4gJHBhcmVudCA/ICRwYXJlbnQuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZScpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93UHJvZHVjdEltYWdlKHByb2R1Y3RJZCwgZGF0YSkge1xyXG4gICAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QoZGF0YS5pbWFnZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2UuZ2V0U3JjKFxyXG4gICAgICAgICAgICAgICAgZGF0YS5pbWFnZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3RnYWxsZXJ5X3NpemVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmZpbmQoJ2ltZycpLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgJ3NyY3NldCc6IG1haW5JbWFnZVVybCxcclxuICAgICAgICAgICAgICAgICdkYXRhLXNyY3NldCc6ICQodGhpcykuYXR0cignc3Jjc2V0JyksXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VVcmwgPSAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5maW5kKCdpbWcnKS5hdHRyKCdkYXRhLXNyY3NldCcpO1xyXG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5maW5kKCdpbWcnKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICdzcmNzZXQnOiBtYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgICAgICAnZGF0YS1zcmNzZXQnOiAkKHRoaXMpLmF0dHIoJ3NyY3NldCcpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlVmlldygkc2NvcGUsIGRhdGEsIGNvbnRlbnQgPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gZ2V0Vmlld01vZGVsKCRzY29wZSk7XHJcblxyXG4gICAgICAgIHNob3dNZXNzYWdlQm94KGRhdGEuc3RvY2tfbWVzc2FnZSB8fCBkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XHJcblxyXG4gICAgICAgIGlmIChfLmlzT2JqZWN0KGRhdGEucHJpY2UpKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRzY29wZSkudmFsKCk7XHJcblxyXG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XHJcbiAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdpc0NoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgICAgICQoJyNmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmFkZENsYXNzKCdpc0NoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgICAgICQoJyNmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUuZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkc2NvcGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoJHNjb3BlLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRzY29wZSkudmFsKCk7XHJcblxyXG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XHJcbiAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdpc0NoZWNrZWQnKTtcclxuICAgICAgICAgICAgJCgnI2ZidF9wcm9kdWN0JyArIHByb2R1Y3RJZCkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5hZGRDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgICAgICQoJyNmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUuZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkc2NvcGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Vmlld01vZGVsKCRzY29wZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICRwcmljZVdpdGhUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJHByaWNlV2l0aG91dFRheDogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XHJcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC13aXRoLXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBycnBXaXRob3V0VGF4OiB7XHJcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub25TYWxlV2l0aFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XHJcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpY2VTYXZlZDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLXNlY3Rpb24tLXNhdmluZycsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmljZU5vd0xhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByaWNlTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkd2VpZ2h0OiAkKCcucHJvZHVjdFZpZXctaW5mbyBbZGF0YS1wcm9kdWN0LXdlaWdodF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAkaW5jcmVtZW50czogJCgnLmZvcm0tZmllbGQtLWluY3JlbWVudHMgOmlucHV0JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICR3aXNobGlzdFZhcmlhdGlvbjogJCgnW2RhdGEtd2lzaGxpc3QtYWRkXSBbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScsICRzY29wZSksXHJcbiAgICAgICAgICAgIHN0b2NrOiB7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2snLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbZGF0YS1wcm9kdWN0LXN0b2NrXScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRza3U6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScpLFxyXG4gICAgICAgICAgICAkdXBjOiAkKCdbZGF0YS1wcm9kdWN0LXVwY10nKSxcclxuICAgICAgICAgICAgcXVhbnRpdHk6IHtcclxuICAgICAgICAgICAgICAgICR0ZXh0OiAkKCcuaW5jcmVtZW50VG90YWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbbmFtZT1xdHlcXFxcW1xcXFxdXScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRidWxrUHJpY2luZzogJCgnLnByb2R1Y3RWaWV3LWluZm8tYnVsa1ByaWNpbmcnLCAkc2NvcGUpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd01lc3NhZ2VCb3gobWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLnByb2R1Y3RBdHRyaWJ1dGVzLW1lc3NhZ2UnKTtcclxuXHJcbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChtZXNzYWdlKTtcclxuICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XHJcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xyXG4gICAgICAgIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XHJcblxyXG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRoVGF4Lmh0bWwocHJpY2Uud2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS53aXRob3V0X3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRob3V0VGF4Lmh0bWwocHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLnNhdmVkKSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kc3Bhbi5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0oZm9ybURhdGEpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBGaWxlICYmICF2YWwubmFtZSAmJiAhdmFsLnNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gICAgaWYgKGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX3ByZXZfbmV4dF9wcm9kdWN0ID09IHRydWUpIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XHJcbiAgICAgICAgICAgIGlmICgkKCcucHJvZHVjdFZpZXctbmV4dFByb2R1Y3RzJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnLnByb2R1Y3RWaWV3LW5leHRQcm9kdWN0cycpLmRhdGEoJ3Byb2R1Y3QtaWQnKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0SWQgPSBwcm9kdWN0SWQgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZJZCA9IHByb2R1Y3RJZCAtIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dExpbmssIHByZXZMaW5rO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kV3JhcCA9ICQoJy5wcm9kdWN0Vmlldy1uZXh0UHJvZHVjdHMgLm5leHQtcHJldi1tb2RhbCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMgPSAkKCcucHJvZHVjdFZpZXctbmV4dFByb2R1Y3RzIC5uZXh0LXByZXYtaWNvbnMnKSxcclxuICAgICAgICAgICAgICAgICAgICAkb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL3Byb2R1Y3QvaGFsby1wcmV2LW5leHQtcHJvZHVjdC10cG0nXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihuZXh0SWQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKG5leHRJZCwgJG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVycil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dExpbmsgPSAkKHJlc3BvbnNlKS5maW5kKCcuY2FyZC1saW5rJykuYXR0cignaHJlZicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV4dExpbmsgIT0gdW5kZWZpbmVkICYmIG5leHRMaW5rICE9ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLm5leHQtaWNvbicpLmF0dHIoJ2hyZWYnLCBuZXh0TGluayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5uZXh0LWljb24nKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLmZpbmQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5hcHBlbmQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocHJldklkICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcmV2SWQsICRvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlcnIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2TGluayA9ICQocmVzcG9uc2UpLmZpbmQoJy5jYXJkLWxpbmsnKS5hdHRyKCdocmVmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwcmV2TGluayAhPSB1bmRlZmluZWQgJiYgcHJldkxpbmsgIT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcucHJldi1pY29uJykuYXR0cignaHJlZicsIHByZXZMaW5rKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLnByZXYtaWNvbicpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuZmluZCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLmFwcGVuZChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkcHJvZEljb25zLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICRwcm9kV3JhcC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLm5leHQtaWNvbicsICRwcm9kSWNvbnMpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnZGlzYWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykuYWRkQ2xhc3MoJ2lzLXNob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5wcmV2LWljb24nLCAkcHJvZEljb25zKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2lzLXNob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLmFkZENsYXNzKCdpcy1zaG93Jyk7ICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRwcm9kV3JhcC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgICBpZiAoJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcpLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBzY3JvbGwgPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0Jykub2Zmc2V0KCk7XHJcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHNjcm9sbC50b3A7XHJcblxyXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gc2Nyb2xsVG9wKXtcclxuICAgICAgICAgICAgICAgIGlmKCEkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmhhc0NsYXNzKCdzaG93X3N0aWNreScpKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0SGVhZGVyID0gJCgnLmhlYWRlcicpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNzdGlja3lfYWRkdG9jYXJ0JykuYWRkQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCQoJy5oZWFkZXInKS5oYXNDbGFzcygnaXMtc3RpY2t5JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5jc3MoJ3RvcCcsIGhlaWdodEhlYWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5jc3MoJ3RvcCcsICcwcHgnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICQoJyNzdGlja3lfYWRkdG9jYXJ0JykucmVtb3ZlQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcucG9wLXVwLW9wdGlvbicpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2hvb3NlX29wdGlvbnNfYWRkJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5jaG9vc2Vfb3B0aW9uc19hZGQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcucG9wLXVwLW9wdGlvbicpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5wb3AtdXAtb3B0aW9uIC5jbG9zZScsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgJChcIi5wb3AtdXAtb3B0aW9uXCIpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgICAgICQoJy5jaG9vc2Vfb3B0aW9uc19hZGQnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiBzY3JvbGxUb3Ape1xyXG4gICAgICAgICAgICAgICAgaWYoISQoJyNzdGlja3lfYWRkdG9jYXJ0JykuaGFzQ2xhc3MoJ3Nob3dfc3RpY2t5Jykpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWlnaHRIZWFkZXIgPSAkKCcuaGVhZGVyJykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5hZGRDbGFzcygnc2hvd19zdGlja3knKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoJCgnLmhlYWRlcicpLmhhc0NsYXNzKCdpcy1zdGlja3knKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmNzcygndG9wJywgaGVpZ2h0SGVhZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmNzcygndG9wJywgJzBweCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbiIsIi8qXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXG4gKi9cbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgUmV2aWV3IGZyb20gJy4vcHJvZHVjdC9yZXZpZXdzJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4vY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgdmlkZW9HYWxsZXJ5IGZyb20gJy4vcHJvZHVjdC92aWRlby1nYWxsZXJ5JztcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBtb2RhbFR5cGVzIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGhhbG9CdW5kbGVQcm9kdWN0cyBmcm9tICcuL2hhbG90aGVtZXMvaGFsb0J1bmRsZVByb2R1Y3RzJztcbmltcG9ydCBoYWxvU3RpY2t5QWRkVG9DYXJ0IGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5QWRkVG9DYXJ0JztcbmltcG9ydCBoYWxvUHJldk5leHRQcm9kdWN0IGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvUHJldk5leHRQcm9kdWN0JztcblxuY29uc3QgeyBXUklURV9SRVZJRVcgfSA9IG1vZGFsVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdGhpcy4kcmV2aWV3TGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJyk7XG4gICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLWJ1bGstcHJpY2luZ1wiXScpO1xuICAgICAgICB0aGlzLnJldmlld01vZGFsID0gbW9kYWxGYWN0b3J5KCcjbW9kYWwtcmV2aWV3LWZvcm0nKVswXTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICAvLyBMaXN0ZW4gZm9yIGZvdW5kYXRpb24gbW9kYWwgY2xvc2UgZXZlbnRzIHRvIHNhbml0aXplIFVSTCBhZnRlciByZXZpZXcuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbG9zZS5mbmR0bi5yZXZlYWwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSAmJiB0eXBlb2Ygd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdmFsaWRhdG9yO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBQcm9kdWN0RGV0YWlscygkKCcucHJvZHVjdFZpZXcnKSwgdGhpcy5jb250ZXh0LCB3aW5kb3cuQkNEYXRhLnByb2R1Y3RfYXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcblxuICAgICAgICB2aWRlb0dhbGxlcnkoKTtcblxuICAgICAgICB0aGlzLmJ1bGtQcmljaW5nSGFuZGxlcigpO1xuICAgICAgICB0aGlzLmhsR2xvYmFsKCk7XG4gICAgICAgIGhhbG9TdGlja3lBZGRUb0NhcnQoKTtcblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19idW5kbGVfcHJvZHVjdHNfZW5hYmxlID09IHRydWUpIHtcbiAgICAgICAgICAgIGhhbG9CdW5kbGVQcm9kdWN0cyh0aGlzLmNvbnRleHQpOyAgIFxuICAgICAgICB9XG4gICAgICAgIGhhbG9QcmV2TmV4dFByb2R1Y3QodGhpcy5jb250ZXh0KTtcblxuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcblxuICAgICAgICBpZiAoJHJldmlld0Zvcm0ubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ29wZW5lZC5mbmR0bi5yZXZlYWwnLCAnI21vZGFsLXJldmlldy1mb3JtJywgKCkgPT4gdGhpcy5yZXZpZXdNb2RhbC5zZXR1cEZvY3VzYWJsZUVsZW1lbnRzKFdSSVRFX1JFVklFVykpO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nLCAoKSA9PiB7XG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLmFyaWFEZXNjcmliZVJldmlld0lucHV0cygkcmV2aWV3Rm9ybSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcbiAgICB9XG5cbiAgICBhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJGZvcm0pIHtcbiAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtaW5wdXRdJykuZWFjaCgoXywgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgbXNnU3BhbklkID0gYCR7JGlucHV0LmF0dHIoJ25hbWUnKX0tbXNnYDtcblxuICAgICAgICAgICAgJGlucHV0LnNpYmxpbmdzKCdzcGFuJykuYXR0cignaWQnLCBtc2dTcGFuSWQpO1xuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBtc2dTcGFuSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1bGtQcmljaW5nSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyNidWxrX3ByaWNpbmcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGxHbG9iYWwoKSB7XG4gICAgICAgIGNvbnN0IHdXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb25zdCAkZGVzVGFiID0gJCgnLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0ICRpbmZvVGFiID0gJCgnI3RhYi1hZGRpdGlvbmFsLWluZm9ybWF0aW9uJyk7XG5cbiAgICAgICAgaWYgKCRkZXNUYWIubGVuZ3RoICYmIHdXaWR0aCA8IDEwMjUpIHtcbiAgICAgICAgICAgICQoJy50YWItY29udGVudC5pcy1hY3RpdmUnLCAkZGVzVGFiKS5maW5kKCcudGFiQ29udGVudCcpLnNsaWRlRG93bigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRpbmZvVGFiLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCRpbmZvVGFiLmZpbmQoJy50YWJDb250ZW50JykudGV4dCgpLnRyaW0oKSA9PSAnJykge1xuICAgICAgICAgICAgICAgICQoJ1tocmVmPVwiI3RhYi1hZGRpdGlvbmFsLWluZm9ybWF0aW9uXCJdJykucGFyZW50KCkuaGlkZSgpO1xuICAgICAgICAgICAgICAgICRpbmZvVGFiLmhpZGUoKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cblxuICAgICAgICAvL1xuICAgICAgICAvLyBMb2FkIFRhYnNcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgY29uc3QgJGxvYWRUYWJCdG4gPSAkKCdbZGF0YS10YWItbG9hZF0nKTtcblxuICAgICAgICAkbG9hZFRhYkJ0bi5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgY29uc3QgY2hlY2tfbG9hZFRhYiA9ICR0YXJnZXQuZGF0YSgndGFiLWNoZWNrJyk7XG5cbiAgICAgICAgICAgIGlmIChjaGVja19sb2FkVGFiKSB7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5kYXRhKCd0YWItY2hlY2snLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsX2xvYWRUYWIgPSAkdGFyZ2V0LmRhdGEoJ3RhYi1sb2FkJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGhpc1RhYiA9ICR0YXJnZXQuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzVGFiID0gJCh0aGlzVGFiKycgLnRhYkNvbnRlbnQnKTtcblxuICAgICAgICAgICAgICAgICQuZ2V0KHVybF9sb2FkVGFiLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5pY29uLWxvYWRpbmcnLCAkdGhpc1RhYikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzVGFiLmFwcGVuZCgkKGRhdGEpLmZpbmQoJy5wYWdlLWNvbnRlbnQnKS5odG1sKCkpO1xuICAgICAgICAgICAgICAgIH0pLmZhaWwoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5pY29uLWxvYWRpbmcnLCAkdGhpc1RhYikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzVGFiLmFwcGVuZChcIjxwPlRvIEJlIFVwZGF0ZWQ8L3A+XCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBUYWJzIE1vYmlsZVxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBjb25zdCAkYnRuVGFiTW9iaWxlID0gJCgnLnRhYi10aXRsZU1vYmlsZScpO1xuXG4gICAgICAgICRidG5UYWJNb2JpbGUub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpZFRhYiA9ICR0YXJnZXQuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgY29uc3QgdGhpc1RvcCA9ICQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbicpLm9mZnNldCgpLnRvcCAtIDIwO1xuXG4gICAgICAgICAgICBpZiAoJHRhcmdldC5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKGlkVGFiKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJykuZmluZCgnLnRhYkNvbnRlbnQnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGFiQWN0aXZlTW9iaWxlID0gJCgnLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uIC50YWJzLWNvbnRlbnRzIC50YWItY29udGVudC5pcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICRidG5UYWJNb2JpbGUucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICR0YWJBY3RpdmVNb2JpbGUucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpLmZpbmQoJy50YWJDb250ZW50Jykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgICAgICQoaWRUYWIpLmFkZENsYXNzKCdpcy1hY3RpdmUnKS5maW5kKCcudGFiQ29udGVudCcpLnNsaWRlRG93bigpO1xuXG4gICAgICAgICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpc1RvcFxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBTaGFyZSBMaW5rXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGNvbnN0ICRzaGFyZUxpbmtCdG4gPSAkKCcuc29jaWFsTWVkaWEtYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0ICRzaGFyZUxpbmtQb3B1cCA9ICQoJy5zb2NpYWxNZWRpYS1kcm9wZG93bicpO1xuICAgICAgICBjb25zdCAkc2hhcmVMaW5rQ2xvc2UgPSAkKCcuc2hhcmVMaW5rU29jaWFsX19jbG9zZScpO1xuICAgICAgICBjb25zdCAkc2hhcmVMaW5rQ29weSA9ICQoJyNzaGFyZUxpbmtTb2NpYWxfX2NvcHknKTtcblxuICAgICAgICAkc2hhcmVMaW5rQnRuLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICgkc2hhcmVMaW5rUG9wdXAuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICRzaGFyZUxpbmtQb3B1cC5zbGlkZVVwKDIwMCk7XG4gICAgICAgICAgICAgICAgJHNoYXJlTGlua1BvcHVwLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkc2hhcmVMaW5rUG9wdXAuc2xpZGVEb3duKDIwMCk7XG4gICAgICAgICAgICAgICAgJHNoYXJlTGlua1BvcHVwLmFkZENsYXNzKCdpcy1vcGVuJyk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRzaGFyZUxpbmtDbG9zZS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoJHNoYXJlTGlua1BvcHVwLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAkc2hhcmVMaW5rUG9wdXAuc2xpZGVVcCgyMDApO1xuICAgICAgICAgICAgICAgICRzaGFyZUxpbmtQb3B1cC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkc2hhcmVMaW5rQ29weS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuXG4gICAgICAgICAgICAkdGFyZ2V0LnNlbGVjdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBCb2R5IENsb3NlXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCAkc2hhcmVMaW5rUG9wdXAgPSAkKCcuc29jaWFsTWVkaWEtZHJvcGRvd24nKTtcblxuICAgICAgICAgICAgaWYgKCR0YXJnZXQuY2xvc2VzdCgnLnNvY2lhbC1tZWRpYUJsb2NrJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCRzaGFyZUxpbmtQb3B1cC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICRzaGFyZUxpbmtQb3B1cC5zbGlkZVVwKDIwMCk7XG4gICAgICAgICAgICAgICAgICAgICRzaGFyZUxpbmtQb3B1cC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB7IENvbGxhcHNpYmxlRXZlbnRzIH0gZnJvbSAnLi4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBmb3JtcyBmcm9tICcuLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcbmltcG9ydCB7IHNhZmVTdHJpbmcgfSBmcm9tICcuLi9jb21tb24vdXRpbHMvc2FmZS1zdHJpbmcnO1xuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCRyZXZpZXdGb3JtKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJHJldmlld0Zvcm0uZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRyZXZpZXdzQ29udGVudCA9ICQoJyNwcm9kdWN0LXJldmlld3MnKTtcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUgPSAkKCdbZGF0YS1jb2xsYXBzaWJsZV0nLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgdGhpcy5pbml0TGlua0JpbmQoKTtcbiAgICAgICAgdGhpcy5pbmplY3RQYWdpbmF0aW9uTGluaygpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlUmV2aWV3cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGluaXRpYWwgcGFnZSBsb2FkLCB0aGUgdXNlciBjbGlja3Mgb24gXCIoMTIgUmV2aWV3cylcIiBsaW5rXG4gICAgICogVGhlIGJyb3dzZXIganVtcHMgdG8gdGhlIHJldmlldyBwYWdlIGFuZCBzaG91bGQgZXhwYW5kIHRoZSByZXZpZXdzIHNlY3Rpb25cbiAgICAgKi9cbiAgICBpbml0TGlua0JpbmQoKSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJCgnI3Byb2R1Y3RSZXZpZXdzLWNvbnRlbnQnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgJCgnI3Byb2R1Y3RSZXZpZXdfbGluaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdUYWJMaW5rJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIGlmICghJGNvbnRlbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZVJldmlld3MoKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHBhZ2luYXRpbmcgc3RhdGUsIGRvIG5vdCBjb2xsYXBzZVxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3Byb2R1Y3QtcmV2aWV3cycpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjZSBjb2xsYXBzZSBvbiBwYWdlIGxvYWRcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IElEIGludG8gdGhlIHBhZ2luYXRpb24gbGlua1xuICAgICAqL1xuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIGNvbnN0ICRwcmV2TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzIC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgaWYgKCRuZXh0TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRuZXh0TGluay5hdHRyKCdocmVmJywgYCR7JG5leHRMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKFt7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2cmF0aW5nXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBzYWZlU3RyaW5nKHRoaXMuY29udGV4dC5yZXZpZXdSYXRpbmcpLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGl0bGVcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHNhZmVTdHJpbmcodGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QpLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGV4dFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogc2FmZVN0cmluZyh0aGlzLmNvbnRleHQucmV2aWV3Q29tbWVudCksXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLndyaXRlUmV2aWV3LWZvcm0gW25hbWU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3RW1haWwsXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmlkZW9HYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XG4gICAgICAgIHRoaXMuJHZpZGVvcyA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge307XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7XG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXG4gICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogJHRhcmdldCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldE1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvLiRzZWxlY3RlZFRodW1iLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZGVvR2FsbGVyeSgpIHtcbiAgICBjb25zdCBwbHVnaW5LZXkgPSAndmlkZW8tZ2FsbGVyeSc7XG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcblxuICAgICR2aWRlb0dhbGxlcnkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaXNJbml0aWFsaXplZCA9ICRlbC5kYXRhKHBsdWdpbktleSkgaW5zdGFuY2VvZiBWaWRlb0dhbGxlcnk7XG5cbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbC5kYXRhKHBsdWdpbktleSwgbmV3IFZpZGVvR2FsbGVyeSgkZWwpKTtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=