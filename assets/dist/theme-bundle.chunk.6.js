(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./assets/js/theme/auth.js":
/*!*********************************!*\
  !*** ./assets/js/theme/auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Auth; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Auth = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Auth, _PageManager);
  function Auth(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = Object(_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_6__["createTranslationDictionary"])(context);
    _this.formCreateSelector = 'form[data-create-account-form]';
    _this.recaptcha = $('.g-recaptcha iframe[src]');
    return _this;
  }
  var _proto = Auth.prototype;
  _proto.registerLoginValidation = function registerLoginValidation($loginForm) {
    var _this2 = this;
    var loginModel = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"];
    this.loginValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.login-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    this.loginValidator.add([{
      selector: '.login-form input[name="login_email"]',
      validate: function validate(cb, val) {
        var result = loginModel.email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }, {
      selector: '.login-form input[name="login_pass"]',
      validate: function validate(cb, val) {
        var result = loginModel.password(val);
        cb(result);
      },
      errorMessage: this.context.enterPass
    }]);
    $loginForm.on('submit', function (event) {
      _this2.loginValidator.performCheck();
      if (_this2.loginValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerForgotPasswordValidation = function registerForgotPasswordValidation($forgotPasswordForm) {
    var _this3 = this;
    this.forgotPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.forgot-password-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    this.forgotPasswordValidator.add([{
      selector: '.forgot-password-form input[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }]);
    $forgotPasswordForm.on('submit', function (event) {
      _this3.forgotPasswordValidator.performCheck();
      if (_this3.forgotPasswordValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerNewPasswordValidation = function registerNewPasswordValidation() {
    var _this$validationDicti = this.validationDictionary,
      enterPassword = _this$validationDicti.password,
      matchPassword = _this$validationDicti.password_match,
      invalidPassword = _this$validationDicti.invalid_password;
    var newPasswordForm = '.new-password-form';
    var newPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: $(newPasswordForm + " input[type=\"submit\"]"),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    var passwordSelector = $(newPasswordForm + " input[name=\"password\"]");
    var password2Selector = $(newPasswordForm + " input[name=\"password_confirm\"]");
    var errorTextMessages = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["createPasswordValidationErrorTextObject"])(enterPassword, enterPassword, matchPassword, invalidPassword);
    _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setPasswordValidation(newPasswordValidator, passwordSelector, password2Selector, this.passwordRequirements, errorTextMessages);
  };
  _proto.registerCreateAccountValidator = function registerCreateAccountValidator($createAccountForm) {
    var _this4 = this;
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_3__["default"])($createAccountForm, this.context);
    var createAccountValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: this.formCreateSelector + " input[type='submit']",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    var $stateElement = $('[data-field-type="State"]');
    var emailSelector = this.formCreateSelector + " [data-field-type='EmailAddress']";
    var $emailElement = $(emailSelector);
    var passwordSelector = this.formCreateSelector + " [data-field-type='Password']";
    var $passwordElement = $(passwordSelector);
    var password2Selector = this.formCreateSelector + " [data-field-type='ConfirmPassword']";
    var $password2Element = $(password2Selector);
    createAccountValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_1__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (createAccountValidator.getStatus($stateElement) !== 'undefined') {
          createAccountValidator.remove($stateElement);
        }
        if ($last) {
          createAccountValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setStateCountryValidation(createAccountValidator, field, _this4.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].cleanUpStateValidation(field);
        }
      });
    }
    if ($emailElement) {
      createAccountValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setEmailValidation(createAccountValidator, emailSelector, this.validationDictionary.valid_email);
    }
    if ($passwordElement && $password2Element) {
      var _this$validationDicti2 = this.validationDictionary,
        enterPassword = _this$validationDicti2.password,
        matchPassword = _this$validationDicti2.password_match,
        invalidPassword = _this$validationDicti2.invalid_password;
      createAccountValidator.remove(passwordSelector);
      createAccountValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setPasswordValidation(createAccountValidator, passwordSelector, password2Selector, this.passwordRequirements, Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["createPasswordValidationErrorTextObject"])(enterPassword, enterPassword, matchPassword, invalidPassword));
    }
    $createAccountForm.on('submit', function (event) {
      createAccountValidator.performCheck();
      if (createAccountValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  }

  /**
   * Request is made in this function to the remote endpoint and pulls back the states for country.
   */;
  _proto.onReady = function onReady() {
    if (!this.recaptcha.attr('title')) {
      this.recaptcha.attr('title', this.context.recaptchaTitle);
    }
    var $createAccountForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])(this.formCreateSelector);
    var $loginForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.login-form');
    var $forgotPasswordForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.forgot-password-form');
    var $newPasswordForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.new-password-form'); // reset password

    // Injected via auth.html
    this.passwordRequirements = this.context.passwordRequirements;
    if ($loginForm.length) {
      this.registerLoginValidation($loginForm);
    }
    if ($newPasswordForm.length) {
      this.registerNewPasswordValidation();
    }
    if ($forgotPasswordForm.length) {
      this.registerForgotPasswordValidation($forgotPasswordForm);
    }
    if ($createAccountForm.length) {
      this.registerCreateAccountValidator($createAccountForm);
    }
  };
  return Auth;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");


/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */
function buildDateValidation($formField, validation) {
  // No date range restriction, skip
  if (validation.min_date && validation.max_date) {
    var invalidMessage = "Your chosen date must fall between " + validation.min_date + " and " + validation.max_date + ".";
    var formElementId = $formField.attr('id');
    var minSplit = validation.min_date.split('-');
    var maxSplit = validation.max_date.split('-');
    var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
    var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);
    return {
      selector: "#" + formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = Number($formField.find('select[data-label="day"]').val());
        var month = Number($formField.find('select[data-label="month"]').val()) - 1;
        var year = Number(val);
        var chosenDate = new Date(year, month, day);
        cb(chosenDate >= minDate && chosenDate <= maxDate);
      },
      errorMessage: invalidMessage
    };
  }
}

/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 * @param errorText provides error validation message
 */
function buildRequiredCheckboxValidation(validation, $formField, errorText) {
  var formFieldId = $formField.attr('id');
  var primarySelector = "#" + formFieldId + " input:first-of-type";
  var secondarySelector = "#" + formFieldId + " input";
  return {
    selector: primarySelector,
    triggeredBy: secondarySelector,
    validate: function validate(cb) {
      var result = false;
      $(secondarySelector).each(function (index, checkbox) {
        if (checkbox.checked) {
          result = true;
          return false;
        }
      });
      cb(result);
    },
    errorMessage: errorText
  };
}
function buildRequiredValidation(validation, selector, errorText) {
  return {
    selector: selector,
    validate: function validate(cb, val) {
      cb(val.length > 0);
    },
    errorMessage: errorText
  };
}
function buildNumberRangeValidation(validation, formFieldSelector) {
  var invalidMessage = "The value for " + validation.label + " must be between " + validation.min + " and " + validation.max + ".";
  var min = Number(validation.min);
  var max = Number(validation.max);
  return {
    selector: formFieldSelector + " input[name=\"" + validation.name + "\"]",
    validate: function validate(cb, val) {
      var numberVal = Number(val);
      cb(numberVal >= min && numberVal <= max);
    },
    errorMessage: invalidMessage
  };
}
function buildValidation($validateableElement, errorMessage) {
  var validation = $validateableElement.data('validation');
  var fieldValidations = [];
  var formFieldSelector = "#" + $validateableElement.attr('id');
  if (validation.type === 'datechooser') {
    var dateValidation = buildDateValidation($validateableElement, validation);
    if (dateValidation) {
      fieldValidations.push(dateValidation);
    }
  } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
    fieldValidations.push(buildRequiredCheckboxValidation(validation, $validateableElement, errorMessage));
  } else {
    $validateableElement.find('input, select, textarea').each(function (index, element) {
      var $inputElement = $(element);
      var tagName = $inputElement.get(0).tagName;
      var inputName = $inputElement.attr('name');
      var elementSelector = formFieldSelector + " " + tagName + "[name=\"" + inputName + "\"]";
      if (validation.type === 'numberonly') {
        fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
      }
      if (validation.required) {
        fieldValidations.push(buildRequiredValidation(validation, elementSelector, errorMessage));
      }
    });
  }
  return fieldValidations;
}

/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @param context provides access for error messages on required fields validation
 * @returns {Array}
 */
/* harmony default export */ __webpack_exports__["default"] = (function ($form, context) {
  var validationsToPerform = [];
  var _createTranslationDic = Object(_utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__["createTranslationDictionary"])(context),
    requiredFieldValidationText = _createTranslationDic.field_not_blank;
  $form.find('[data-validation]').each(function (index, input) {
    var getLabel = function getLabel($el) {
      return $el.first().data('validation').label;
    };
    var requiredValidationMessage = getLabel($(input)) + requiredFieldValidationText;
    validationsToPerform = validationsToPerform.concat(buildValidation($(input), requiredValidationMessage));
  });
  return validationsToPerform;
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyJdLCJuYW1lcyI6WyJBdXRoIiwiX1BhZ2VNYW5hZ2VyIiwiX2luaGVyaXRzTG9vc2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJmb3JtQ3JlYXRlU2VsZWN0b3IiLCJyZWNhcHRjaGEiLCIkIiwiX3Byb3RvIiwicHJvdG90eXBlIiwicmVnaXN0ZXJMb2dpblZhbGlkYXRpb24iLCIkbG9naW5Gb3JtIiwiX3RoaXMyIiwibG9naW5Nb2RlbCIsImZvcm1zIiwibG9naW5WYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCJ0YXAiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwidmFsIiwicmVzdWx0IiwiZW1haWwiLCJlcnJvck1lc3NhZ2UiLCJ1c2VWYWxpZEVtYWlsIiwicGFzc3dvcmQiLCJlbnRlclBhc3MiLCJvbiIsImV2ZW50IiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJldmVudERlZmF1bHQiLCJyZWdpc3RlckZvcmdvdFBhc3N3b3JkVmFsaWRhdGlvbiIsIiRmb3Jnb3RQYXNzd29yZEZvcm0iLCJfdGhpczMiLCJmb3Jnb3RQYXNzd29yZFZhbGlkYXRvciIsInJlZ2lzdGVyTmV3UGFzc3dvcmRWYWxpZGF0aW9uIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwiZW50ZXJQYXNzd29yZCIsIm1hdGNoUGFzc3dvcmQiLCJwYXNzd29yZF9tYXRjaCIsImludmFsaWRQYXNzd29yZCIsImludmFsaWRfcGFzc3dvcmQiLCJuZXdQYXNzd29yZEZvcm0iLCJuZXdQYXNzd29yZFZhbGlkYXRvciIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsImVycm9yVGV4dE1lc3NhZ2VzIiwiY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0IiwiVmFsaWRhdG9ycyIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkUmVxdWlyZW1lbnRzIiwicmVnaXN0ZXJDcmVhdGVBY2NvdW50VmFsaWRhdG9yIiwiJGNyZWF0ZUFjY291bnRGb3JtIiwiX3RoaXM0IiwidmFsaWRhdGlvbk1vZGVsIiwidmFsaWRhdGlvbiIsImNyZWF0ZUFjY291bnRWYWxpZGF0b3IiLCIkc3RhdGVFbGVtZW50IiwiZW1haWxTZWxlY3RvciIsIiRlbWFpbEVsZW1lbnQiLCIkcGFzc3dvcmRFbGVtZW50IiwiJHBhc3N3b3JkMkVsZW1lbnQiLCIkbGFzdCIsInN0YXRlQ291bnRyeSIsImVyciIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJyZW1vdmUiLCJpcyIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJmaWVsZF9ub3RfYmxhbmsiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRfZW1haWwiLCJfdGhpcyR2YWxpZGF0aW9uRGljdGkyIiwib25SZWFkeSIsImF0dHIiLCJyZWNhcHRjaGFUaXRsZSIsImNsYXNzaWZ5Rm9ybSIsIiRuZXdQYXNzd29yZEZvcm0iLCJsZW5ndGgiLCJQYWdlTWFuYWdlciIsImJ1aWxkRGF0ZVZhbGlkYXRpb24iLCIkZm9ybUZpZWxkIiwibWluX2RhdGUiLCJtYXhfZGF0ZSIsImludmFsaWRNZXNzYWdlIiwiZm9ybUVsZW1lbnRJZCIsIm1pblNwbGl0Iiwic3BsaXQiLCJtYXhTcGxpdCIsIm1pbkRhdGUiLCJEYXRlIiwibWF4RGF0ZSIsInRyaWdnZXJlZEJ5IiwiZGF5IiwiTnVtYmVyIiwiZmluZCIsIm1vbnRoIiwieWVhciIsImNob3NlbkRhdGUiLCJidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uIiwiZXJyb3JUZXh0IiwiZm9ybUZpZWxkSWQiLCJwcmltYXJ5U2VsZWN0b3IiLCJzZWNvbmRhcnlTZWxlY3RvciIsImVhY2giLCJpbmRleCIsImNoZWNrYm94IiwiY2hlY2tlZCIsImJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uIiwiYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24iLCJmb3JtRmllbGRTZWxlY3RvciIsImxhYmVsIiwibWluIiwibWF4IiwibmFtZSIsIm51bWJlclZhbCIsImJ1aWxkVmFsaWRhdGlvbiIsIiR2YWxpZGF0ZWFibGVFbGVtZW50IiwiZGF0YSIsImZpZWxkVmFsaWRhdGlvbnMiLCJ0eXBlIiwiZGF0ZVZhbGlkYXRpb24iLCJwdXNoIiwicmVxdWlyZWQiLCJlbGVtZW50IiwiJGlucHV0RWxlbWVudCIsInRhZ05hbWUiLCJnZXQiLCJpbnB1dE5hbWUiLCJlbGVtZW50U2VsZWN0b3IiLCIkZm9ybSIsInZhbGlkYXRpb25zVG9QZXJmb3JtIiwiX2NyZWF0ZVRyYW5zbGF0aW9uRGljIiwicmVxdWlyZWRGaWVsZFZhbGlkYXRpb25UZXh0IiwiaW5wdXQiLCJnZXRMYWJlbCIsIiRlbCIsImZpcnN0IiwicmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZSIsImNvbmNhdCIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJpIiwiYXJndW1lbnRzIiwiSlNPTiIsInBhcnNlIiwidW5kZWZpbmVkIiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ2YWx1ZXMiLCJ0cmFu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QU8sQ0FBN0VpSyxnQ0FBZ0M7SUFBRUMsK0JBQStCLEdBQUtsSyxPQUFPLENBQTNDa0ssK0JBQStCO0VBQ25HLElBQU1DLGdCQUFnQixHQUFHVCxzQkFBc0IsQ0FBQ00sd0JBQXdCLEVBQUVDLGdDQUFnQyxFQUFFQywrQkFBK0IsQ0FBQztFQUM1SSxJQUFNRSxhQUFhLEdBQUdaLE1BQU0sQ0FBQ2EsTUFBTSxDQUFDRixnQkFBZ0IsQ0FBQ2QsWUFBWSxDQUFDLENBQUM7RUFDbkUsSUFBTWlCLGVBQWUsR0FBR2QsTUFBTSxDQUFDQyxJQUFJLENBQUNVLGdCQUFnQixDQUFDZCxZQUFZLENBQUMsQ0FBQyxDQUFDa0IsR0FBRyxDQUFDLFVBQUFDLEdBQUc7SUFBQSxPQUFJQSxHQUFHLENBQUN4RSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUN5RSxHQUFHLEVBQUU7RUFBQSxFQUFDO0VBRXBHLE9BQU9ILGVBQWUsQ0FBQ0ksTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUgsR0FBRyxFQUFFYixDQUFDLEVBQUs7SUFDM0NnQixHQUFHLENBQUNILEdBQUcsQ0FBQyxHQUFHSixhQUFhLENBQUNULENBQUMsQ0FBQztJQUMzQixPQUFPZ0IsR0FBRztFQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNWLENBQUMsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi9jb21tb24vZm9ybS12YWxpZGF0aW9uJztcbmltcG9ydCBmb3JtcyBmcm9tICcuL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuaW1wb3J0IHtcbiAgICBjbGFzc2lmeUZvcm0sXG4gICAgVmFsaWRhdG9ycyxcbiAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QsXG4gICAgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbn0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG4gICAgICAgIHRoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1jcmVhdGUtYWNjb3VudC1mb3JtXSc7XG4gICAgICAgIHRoaXMucmVjYXB0Y2hhID0gJCgnLmctcmVjYXB0Y2hhIGlmcmFtZVtzcmNdJyk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJMb2dpblZhbGlkYXRpb24oJGxvZ2luRm9ybSkge1xuICAgICAgICBjb25zdCBsb2dpbk1vZGVsID0gZm9ybXM7XG5cbiAgICAgICAgdGhpcy5sb2dpblZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcubG9naW4tZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sb2dpblZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmxvZ2luLWZvcm0gaW5wdXRbbmFtZT1cImxvZ2luX2VtYWlsXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbG9naW5Nb2RlbC5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC51c2VWYWxpZEVtYWlsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5sb2dpbi1mb3JtIGlucHV0W25hbWU9XCJsb2dpbl9wYXNzXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbG9naW5Nb2RlbC5wYXNzd29yZCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlclBhc3MsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkbG9naW5Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dpblZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRm9yZ290UGFzc3dvcmRWYWxpZGF0aW9uKCRmb3Jnb3RQYXNzd29yZEZvcm0pIHtcbiAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcuZm9yZ290LXBhc3N3b3JkLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBpbnB1dFtuYW1lPVwiZW1haWxcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC51c2VWYWxpZEVtYWlsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGZvcmdvdFBhc3N3b3JkRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck5ld1Bhc3N3b3JkVmFsaWRhdGlvbigpIHtcbiAgICAgICAgY29uc3QgeyBwYXNzd29yZDogZW50ZXJQYXNzd29yZCwgcGFzc3dvcmRfbWF0Y2g6IG1hdGNoUGFzc3dvcmQsIGludmFsaWRfcGFzc3dvcmQ6IGludmFsaWRQYXNzd29yZCB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICAgICAgY29uc3QgbmV3UGFzc3dvcmRGb3JtID0gJy5uZXctcGFzc3dvcmQtZm9ybSc7XG4gICAgICAgIGNvbnN0IG5ld1Bhc3N3b3JkVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJChgJHtuZXdQYXNzd29yZEZvcm19IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gKSxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkU2VsZWN0b3IgPSAkKGAke25ld1Bhc3N3b3JkRm9ybX0gaW5wdXRbbmFtZT1cInBhc3N3b3JkXCJdYCk7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gJChgJHtuZXdQYXNzd29yZEZvcm19IGlucHV0W25hbWU9XCJwYXNzd29yZF9jb25maXJtXCJdYCk7XG4gICAgICAgIGNvbnN0IGVycm9yVGV4dE1lc3NhZ2VzID0gY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0KGVudGVyUGFzc3dvcmQsIGVudGVyUGFzc3dvcmQsIG1hdGNoUGFzc3dvcmQsIGludmFsaWRQYXNzd29yZCk7XG4gICAgICAgIFZhbGlkYXRvcnMuc2V0UGFzc3dvcmRWYWxpZGF0aW9uKFxuICAgICAgICAgICAgbmV3UGFzc3dvcmRWYWxpZGF0b3IsXG4gICAgICAgICAgICBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgZXJyb3JUZXh0TWVzc2FnZXMsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDcmVhdGVBY2NvdW50VmFsaWRhdG9yKCRjcmVhdGVBY2NvdW50Rm9ybSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRjcmVhdGVBY2NvdW50Rm9ybSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgY29uc3QgY3JlYXRlQWNjb3VudFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBpbnB1dFt0eXBlPSdzdWJtaXQnXWAsXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG4gICAgICAgIGNvbnN0IGVtYWlsU2VsZWN0b3IgPSBgJHt0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT0nRW1haWxBZGRyZXNzJ11gO1xuICAgICAgICBjb25zdCAkZW1haWxFbGVtZW50ID0gJChlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRTZWxlY3RvciA9IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPSdQYXNzd29yZCddYDtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkRWxlbWVudCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gYCR7dGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9J0NvbmZpcm1QYXNzd29yZCddYDtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkMkVsZW1lbnQgPSAkKHBhc3N3b3JkMlNlbGVjdG9yKTtcblxuICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xuXG4gICAgICAgIGlmICgkc3RhdGVFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgJGxhc3Q7XG5cbiAgICAgICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICAgICAgICAgIGlmIChjcmVhdGVBY2NvdW50VmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24oY3JlYXRlQWNjb3VudFZhbGlkYXRvciwgZmllbGQsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkuZmllbGRfbm90X2JsYW5rKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRlbWFpbEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRFbWFpbFZhbGlkYXRpb24oY3JlYXRlQWNjb3VudFZhbGlkYXRvciwgZW1haWxTZWxlY3RvciwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS52YWxpZF9lbWFpbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHBhc3N3b3JkRWxlbWVudCAmJiAkcGFzc3dvcmQyRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgeyBwYXNzd29yZDogZW50ZXJQYXNzd29yZCwgcGFzc3dvcmRfbWF0Y2g6IG1hdGNoUGFzc3dvcmQsIGludmFsaWRfcGFzc3dvcmQ6IGludmFsaWRQYXNzd29yZCB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcblxuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZDJTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcbiAgICAgICAgICAgICAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QoZW50ZXJQYXNzd29yZCwgZW50ZXJQYXNzd29yZCwgbWF0Y2hQYXNzd29yZCwgaW52YWxpZFBhc3N3b3JkKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAkY3JlYXRlQWNjb3VudEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChjcmVhdGVBY2NvdW50VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBpcyBtYWRlIGluIHRoaXMgZnVuY3Rpb24gdG8gdGhlIHJlbW90ZSBlbmRwb2ludCBhbmQgcHVsbHMgYmFjayB0aGUgc3RhdGVzIGZvciBjb3VudHJ5LlxuICAgICAqL1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGlmICghdGhpcy5yZWNhcHRjaGEuYXR0cigndGl0bGUnKSkge1xuICAgICAgICAgICAgdGhpcy5yZWNhcHRjaGEuYXR0cigndGl0bGUnLCB0aGlzLmNvbnRleHQucmVjYXB0Y2hhVGl0bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgJGNyZWF0ZUFjY291bnRGb3JtID0gY2xhc3NpZnlGb3JtKHRoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgJGxvZ2luRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLmxvZ2luLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGZvcmdvdFBhc3N3b3JkRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLmZvcmdvdC1wYXNzd29yZC1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRuZXdQYXNzd29yZEZvcm0gPSBjbGFzc2lmeUZvcm0oJy5uZXctcGFzc3dvcmQtZm9ybScpOyAvLyByZXNldCBwYXNzd29yZFxuXG4gICAgICAgIC8vIEluamVjdGVkIHZpYSBhdXRoLmh0bWxcbiAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyA9IHRoaXMuY29udGV4dC5wYXNzd29yZFJlcXVpcmVtZW50cztcblxuICAgICAgICBpZiAoJGxvZ2luRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJMb2dpblZhbGlkYXRpb24oJGxvZ2luRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJG5ld1Bhc3N3b3JkRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJOZXdQYXNzd29yZFZhbGlkYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkZm9yZ290UGFzc3dvcmRGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckZvcmdvdFBhc3N3b3JkVmFsaWRhdGlvbigkZm9yZ290UGFzc3dvcmRGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkY3JlYXRlQWNjb3VudEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ3JlYXRlQWNjb3VudFZhbGlkYXRvcigkY3JlYXRlQWNjb3VudEZvcm0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuXG4vKipcbiAqIFZhbGlkYXRlIHRoYXQgdGhlIGdpdmVuIGRhdGUgZm9yIHRoZSBkYXkvbW9udGgveWVhciBzZWxlY3QgaW5wdXRzIGlzIHdpdGhpbiBwb3RlbnRpYWwgcmFuZ2VcbiAqIEBwYXJhbSAkZm9ybUZpZWxkXG4gKiBAcGFyYW0gdmFsaWRhdGlvblxuICogQHJldHVybnMge3tzZWxlY3Rvcjogc3RyaW5nLCB0cmlnZ2VyZWRCeTogc3RyaW5nLCB2YWxpZGF0ZTogRnVuY3Rpb24sIGVycm9yTWVzc2FnZTogc3RyaW5nfX1cbiAqL1xuZnVuY3Rpb24gYnVpbGREYXRlVmFsaWRhdGlvbigkZm9ybUZpZWxkLCB2YWxpZGF0aW9uKSB7XG4gICAgLy8gTm8gZGF0ZSByYW5nZSByZXN0cmljdGlvbiwgc2tpcFxuICAgIGlmICh2YWxpZGF0aW9uLm1pbl9kYXRlICYmIHZhbGlkYXRpb24ubWF4X2RhdGUpIHtcbiAgICAgICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgWW91ciBjaG9zZW4gZGF0ZSBtdXN0IGZhbGwgYmV0d2VlbiAke3ZhbGlkYXRpb24ubWluX2RhdGV9IGFuZCAke3ZhbGlkYXRpb24ubWF4X2RhdGV9LmA7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50SWQgPSAkZm9ybUZpZWxkLmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IG1pblNwbGl0ID0gdmFsaWRhdGlvbi5taW5fZGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICBjb25zdCBtYXhTcGxpdCA9IHZhbGlkYXRpb24ubWF4X2RhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgbWluRGF0ZSA9IG5ldyBEYXRlKG1pblNwbGl0WzBdLCBtaW5TcGxpdFsxXSAtIDEsIG1pblNwbGl0WzJdKTtcbiAgICAgICAgY29uc3QgbWF4RGF0ZSA9IG5ldyBEYXRlKG1heFNwbGl0WzBdLCBtYXhTcGxpdFsxXSAtIDEsIG1heFNwbGl0WzJdKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VsZWN0b3I6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3RbZGF0YS1sYWJlbD1cInllYXJcIl1gLFxuICAgICAgICAgICAgdHJpZ2dlcmVkQnk6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3Q6bm90KFtkYXRhLWxhYmVsPVwieWVhclwiXSlgLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJkYXlcIl0nKS52YWwoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGggPSBOdW1iZXIoJGZvcm1GaWVsZC5maW5kKCdzZWxlY3RbZGF0YS1sYWJlbD1cIm1vbnRoXCJdJykudmFsKCkpIC0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hvc2VuRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuXG4gICAgICAgICAgICAgICAgY2IoY2hvc2VuRGF0ZSA+PSBtaW5EYXRlICYmIGNob3NlbkRhdGUgPD0gbWF4RGF0ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBpbnZhbGlkTWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8qKlxuICogV2UgdmFsaWRhdGUgY2hlY2tib3hlcyBzZXBhcmF0ZWx5IGZyb20gc2luZ2xlIGlucHV0IGZpZWxkcywgYXMgdGhleSBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGNoZWNrZWQgb3B0aW9uXG4gKiBmcm9tIG1hbnkgZGlmZmVyZW50IGlucHV0c1xuICogQHBhcmFtICRmb3JtRmllbGRcbiAqIEBwYXJhbSB2YWxpZGF0aW9uXG4gKiBAcGFyYW0gZXJyb3JUZXh0IHByb3ZpZGVzIGVycm9yIHZhbGlkYXRpb24gbWVzc2FnZVxuICovXG5mdW5jdGlvbiBidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uKHZhbGlkYXRpb24sICRmb3JtRmllbGQsIGVycm9yVGV4dCkge1xuICAgIGNvbnN0IGZvcm1GaWVsZElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xuICAgIGNvbnN0IHByaW1hcnlTZWxlY3RvciA9IGAjJHtmb3JtRmllbGRJZH0gaW5wdXQ6Zmlyc3Qtb2YtdHlwZWA7XG4gICAgY29uc3Qgc2Vjb25kYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0YDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdG9yOiBwcmltYXJ5U2VsZWN0b3IsXG4gICAgICAgIHRyaWdnZXJlZEJ5OiBzZWNvbmRhcnlTZWxlY3RvcixcbiAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAkKHNlY29uZGFyeVNlbGVjdG9yKS5lYWNoKChpbmRleCwgY2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvclRleHQsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24odmFsaWRhdGlvbiwgc2VsZWN0b3IsIGVycm9yVGV4dCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdG9yLFxuICAgICAgICB2YWxpZGF0ZShjYiwgdmFsKSB7XG4gICAgICAgICAgICBjYih2YWwubGVuZ3RoID4gMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JUZXh0LFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSB7XG4gICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgVGhlIHZhbHVlIGZvciAke3ZhbGlkYXRpb24ubGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke3ZhbGlkYXRpb24ubWlufSBhbmQgJHt2YWxpZGF0aW9uLm1heH0uYDtcbiAgICBjb25zdCBtaW4gPSBOdW1iZXIodmFsaWRhdGlvbi5taW4pO1xuICAgIGNvbnN0IG1heCA9IE51bWJlcih2YWxpZGF0aW9uLm1heCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUZpZWxkU2VsZWN0b3J9IGlucHV0W25hbWU9XCIke3ZhbGlkYXRpb24ubmFtZX1cIl1gLFxuICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlclZhbCA9IE51bWJlcih2YWwpO1xuXG4gICAgICAgICAgICBjYihudW1iZXJWYWwgPj0gbWluICYmIG51bWJlclZhbCA8PSBtYXgpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGludmFsaWRNZXNzYWdlLFxuICAgIH07XG59XG5cblxuZnVuY3Rpb24gYnVpbGRWYWxpZGF0aW9uKCR2YWxpZGF0ZWFibGVFbGVtZW50LCBlcnJvck1lc3NhZ2UpIHtcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gJHZhbGlkYXRlYWJsZUVsZW1lbnQuZGF0YSgndmFsaWRhdGlvbicpO1xuICAgIGNvbnN0IGZpZWxkVmFsaWRhdGlvbnMgPSBbXTtcbiAgICBjb25zdCBmb3JtRmllbGRTZWxlY3RvciA9IGAjJHskdmFsaWRhdGVhYmxlRWxlbWVudC5hdHRyKCdpZCcpfWA7XG5cbiAgICBpZiAodmFsaWRhdGlvbi50eXBlID09PSAnZGF0ZWNob29zZXInKSB7XG4gICAgICAgIGNvbnN0IGRhdGVWYWxpZGF0aW9uID0gYnVpbGREYXRlVmFsaWRhdGlvbigkdmFsaWRhdGVhYmxlRWxlbWVudCwgdmFsaWRhdGlvbik7XG5cbiAgICAgICAgaWYgKGRhdGVWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goZGF0ZVZhbGlkYXRpb24pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWxpZGF0aW9uLnJlcXVpcmVkICYmICh2YWxpZGF0aW9uLnR5cGUgPT09ICdjaGVja2JveHNlbGVjdCcgfHwgdmFsaWRhdGlvbi50eXBlID09PSAncmFkaW9zZWxlY3QnKSkge1xuICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbih2YWxpZGF0aW9uLCAkdmFsaWRhdGVhYmxlRWxlbWVudCwgZXJyb3JNZXNzYWdlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJHZhbGlkYXRlYWJsZUVsZW1lbnQuZmluZCgnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGlucHV0RWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gJGlucHV0RWxlbWVudC5nZXQoMCkudGFnTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0TmFtZSA9ICRpbnB1dEVsZW1lbnQuYXR0cignbmFtZScpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudFNlbGVjdG9yID0gYCR7Zm9ybUZpZWxkU2VsZWN0b3J9ICR7dGFnTmFtZX1bbmFtZT1cIiR7aW5wdXROYW1lfVwiXWA7XG5cbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLnR5cGUgPT09ICdudW1iZXJvbmx5Jykge1xuICAgICAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZE51bWJlclJhbmdlVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBmb3JtRmllbGRTZWxlY3RvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24ucmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24odmFsaWRhdGlvbiwgZWxlbWVudFNlbGVjdG9yLCBlcnJvck1lc3NhZ2UpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkVmFsaWRhdGlvbnM7XG59XG5cbi8qKlxuICogQnVpbGRzIHRoZSB2YWxpZGF0aW9uIG1vZGVsIGZvciBkeW5hbWljIGZvcm1zXG4gKiBAcGFyYW0gJGZvcm1cbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyBmb3IgZXJyb3IgbWVzc2FnZXMgb24gcmVxdWlyZWQgZmllbGRzIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCRmb3JtLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRpb25zVG9QZXJmb3JtID0gW107XG4gICAgY29uc3QgeyBmaWVsZF9ub3RfYmxhbms6IHJlcXVpcmVkRmllbGRWYWxpZGF0aW9uVGV4dCB9ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuXG4gICAgJGZvcm0uZmluZCgnW2RhdGEtdmFsaWRhdGlvbl0nKS5lYWNoKChpbmRleCwgaW5wdXQpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0TGFiZWwgPSAkZWwgPT4gJGVsLmZpcnN0KCkuZGF0YSgndmFsaWRhdGlvbicpLmxhYmVsO1xuICAgICAgICBjb25zdCByZXF1aXJlZFZhbGlkYXRpb25NZXNzYWdlID0gZ2V0TGFiZWwoJChpbnB1dCkpICsgcmVxdWlyZWRGaWVsZFZhbGlkYXRpb25UZXh0O1xuXG4gICAgICAgIHZhbGlkYXRpb25zVG9QZXJmb3JtID0gdmFsaWRhdGlvbnNUb1BlcmZvcm0uY29uY2F0KGJ1aWxkVmFsaWRhdGlvbigkKGlucHV0KSwgcmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25zVG9QZXJmb3JtO1xufVxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==