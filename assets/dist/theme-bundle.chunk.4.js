(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/array-find/find.js":
/*!*****************************************!*\
  !*** ./node_modules/array-find/find.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function find(array, predicate, context) {
  if (typeof Array.prototype.find === 'function') {
    return array.find(predicate, context);
  }

  context = context || this;
  var length = array.length;
  var i;

  if (typeof predicate !== 'function') {
    throw new TypeError(predicate + ' is not a function');
  }

  for (i = 0; i < length; i++) {
    if (predicate.call(context, array[i], i, array)) {
      return array[i];
    }
  }
}

module.exports = find;


/***/ }),

/***/ "./node_modules/creditcards-types/index.js":
/*!*************************************************!*\
  !*** ./node_modules/creditcards-types/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./types */ "./node_modules/creditcards-types/types/index.js")


/***/ }),

/***/ "./node_modules/creditcards-types/type.js":
/*!************************************************!*\
  !*** ./node_modules/creditcards-types/type.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! xtend/mutable */ "./node_modules/xtend/mutable.js")

module.exports = CardType

function CardType (data) {
  if (!(this instanceof CardType)) return new CardType(data)
  assign(this, data)
}

CardType.prototype.digits = 16
CardType.prototype.cvcLength = 3
CardType.prototype.luhn = true
CardType.prototype.groupPattern = /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/

CardType.prototype.group = function (number) {
  return (number.match(this.groupPattern) || [])
    .slice(1)
    .filter(Boolean)
}

CardType.prototype.test = function (number, eager) {
  return this[eager ? 'eagerPattern' : 'pattern'].test(number)
}


/***/ }),

/***/ "./node_modules/creditcards-types/types/american-express.js":
/*!******************************************************************!*\
  !*** ./node_modules/creditcards-types/types/american-express.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'American Express',
  digits: 15,
  pattern: /^3[47]\d{13}$/,
  eagerPattern: /^3[47]/,
  groupPattern: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
  cvcLength: 4
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/dankort.js":
/*!*********************************************************!*\
  !*** ./node_modules/creditcards-types/types/dankort.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Dankort',
  pattern: /^5019\d{12}$/,
  eagerPattern: /^5019/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/diners-club.js":
/*!*************************************************************!*\
  !*** ./node_modules/creditcards-types/types/diners-club.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Diners Club',
  digits: 14,
  pattern: /^3(0[0-5]|[68]\d)\d{11}$/,
  eagerPattern: /^3(0|[68])/,
  groupPattern: /(\d{1,4})?(\d{1,6})?(\d{1,4})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/discover.js":
/*!**********************************************************!*\
  !*** ./node_modules/creditcards-types/types/discover.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Discover',
  pattern: /^6(011(0[0-9]|[2-4]\d|74|7[7-9]|8[6-9]|9[0-9])|4[4-9]\d{3}|5\d{4})\d{10}$/,
  eagerPattern: /^6(011(0[0-9]|[2-4]|74|7[7-9]|8[6-9]|9[0-9])|4[4-9]|5)/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/elo.js":
/*!*****************************************************!*\
  !*** ./node_modules/creditcards-types/types/elo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Elo',
  pattern: /^(4[035]|5[0]|6[235])(6[7263]|9[90]|1[2416]|7[736]|8[9]|0[04579]|5[0])([0-9])([0-9])\d{10}$/,
  eagerPattern: /^(4[035]|5[0]|6[235])(6[7263]|9[90]|1[2416]|7[736]|8[9]|0[04579]|5[0])([0-9])([0-9])/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/forbrugsforeningen.js":
/*!********************************************************************!*\
  !*** ./node_modules/creditcards-types/types/forbrugsforeningen.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Forbrugsforeningen',
  pattern: /^600722\d{10}$/,
  eagerPattern: /^600/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/creditcards-types/types/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
  __webpack_require__(/*! ./visa */ "./node_modules/creditcards-types/types/visa.js"),
  __webpack_require__(/*! ./maestro */ "./node_modules/creditcards-types/types/maestro.js"),
  __webpack_require__(/*! ./forbrugsforeningen */ "./node_modules/creditcards-types/types/forbrugsforeningen.js"),
  __webpack_require__(/*! ./dankort */ "./node_modules/creditcards-types/types/dankort.js"),
  __webpack_require__(/*! ./mastercard */ "./node_modules/creditcards-types/types/mastercard.js"),
  __webpack_require__(/*! ./american-express */ "./node_modules/creditcards-types/types/american-express.js"),
  __webpack_require__(/*! ./diners-club */ "./node_modules/creditcards-types/types/diners-club.js"),
  __webpack_require__(/*! ./discover */ "./node_modules/creditcards-types/types/discover.js"),
  __webpack_require__(/*! ./jcb */ "./node_modules/creditcards-types/types/jcb.js"),
  __webpack_require__(/*! ./unionpay */ "./node_modules/creditcards-types/types/unionpay.js"),
  __webpack_require__(/*! ./troy */ "./node_modules/creditcards-types/types/troy.js"),
  __webpack_require__(/*! ./elo */ "./node_modules/creditcards-types/types/elo.js"),
  __webpack_require__(/*! ./uatp */ "./node_modules/creditcards-types/types/uatp.js")
]


/***/ }),

/***/ "./node_modules/creditcards-types/types/jcb.js":
/*!*****************************************************!*\
  !*** ./node_modules/creditcards-types/types/jcb.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'JCB',
  pattern: /^35\d{14}$/,
  eagerPattern: /^35/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/maestro.js":
/*!*********************************************************!*\
  !*** ./node_modules/creditcards-types/types/maestro.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Maestro',
  digits: [12, 19],
  pattern: /^(?:5[06789]\d\d|(?!6011[0234])(?!60117[4789])(?!60118[6789])(?!60119)(?!64[456789])(?!65)6\d{3})\d{8,15}$/,
  eagerPattern: /^(5(018|0[23]|[68])|6[37]|60111|60115|60117([56]|7[56])|60118[0-5]|64[0-3]|66)/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/mastercard.js":
/*!************************************************************!*\
  !*** ./node_modules/creditcards-types/types/mastercard.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Mastercard',
  pattern: /^(5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)\d{12}$/,
  eagerPattern: /^(2[3-7]|22[2-9]|5[1-5])/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/troy.js":
/*!******************************************************!*\
  !*** ./node_modules/creditcards-types/types/troy.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Troy',
  pattern: /^9792\d{12}$/,
  eagerPattern: /^9792/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/uatp.js":
/*!******************************************************!*\
  !*** ./node_modules/creditcards-types/types/uatp.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'UATP',
  digits: 15,
  pattern: /^1\d{14}$/,
  eagerPattern: /^1/,
  groupPattern: /(\d{1,4})(\d{1,5})?(\d{1,6})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/unionpay.js":
/*!**********************************************************!*\
  !*** ./node_modules/creditcards-types/types/unionpay.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'UnionPay',
  pattern: /^62[0-5]\d{13,16}$/,
  eagerPattern: /^62/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/,
  luhn: false
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/visa.js":
/*!******************************************************!*\
  !*** ./node_modules/creditcards-types/types/visa.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Visa',
  digits: [13, 19],
  pattern: /^4\d{12}(\d{3}|\d{6})?$/,
  eagerPattern: /^4/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/
})


/***/ }),

/***/ "./node_modules/creditcards/card.js":
/*!******************************************!*\
  !*** ./node_modules/creditcards/card.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var luhn = __webpack_require__(/*! fast-luhn */ "./node_modules/fast-luhn/index.js")
var Types = __webpack_require__(/*! ./types */ "./node_modules/creditcards/types.js")

module.exports = Card

function Card (data) {
  var types = Types(data)

  return {
    types: data,
    parse: parseCard,
    format: formatCard,
    type: cardType,
    luhn: luhn,
    isValid: isCardValid
  }

  function parseCard (number) {
    if (typeof number !== 'string') return ''
    return number.replace(/[^\d]/g, '')
  }

  function formatCard (number, separator) {
    var type = getType(number, true)
    if (!type) return number
    return type.group(number).join(separator || ' ')
  }

  function cardType (number, eager) {
    var type = getType(number, eager)
    return type ? type.name : undefined
  }

  function isCardValid (number, type) {
    if (type) {
      type = types.get(type)
    } else {
      type = getType(number)
    }
    if (!type) return false
    return (!type.luhn || luhn(number)) && type.test(number)
  }

  function getType (number, eager) {
    return types.find(function (type) {
      return type.test(number, eager)
    })
  }
}


/***/ }),

/***/ "./node_modules/creditcards/cvc.js":
/*!*****************************************!*\
  !*** ./node_modules/creditcards/cvc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Types = __webpack_require__(/*! ./types */ "./node_modules/creditcards/types.js")
var cvcRegex = /^\d{3,4}$/

module.exports = Cvc

function Cvc (data) {
  var types = Types(data)

  return {
    isValid: cvcIsValid
  }

  function cvcIsValid (cvc, type) {
    if (typeof cvc !== 'string') return false
    if (!cvcRegex.test(cvc)) return false

    if (!type) {
      return types.some(function (type) {
        return type.cvcLength === cvc.length
      })
    }

    return types.get(type).cvcLength === cvc.length
  }
}


/***/ }),

/***/ "./node_modules/creditcards/expiration.js":
/*!************************************************!*\
  !*** ./node_modules/creditcards/expiration.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValidMonth = __webpack_require__(/*! is-valid-month */ "./node_modules/is-valid-month/index.js")
var parseIntStrict = __webpack_require__(/*! parse-int */ "./node_modules/parse-int/index.js")
var parseYear = __webpack_require__(/*! parse-year */ "./node_modules/parse-year/index.js")

module.exports = {
  isPast: isPast,
  month: {
    parse: parseMonth,
    isValid: isValidMonth
  },
  year: {
    parse: parseYear,
    format: formatExpYear,
    isValid: isExpYearValid,
    isPast: isExpYearPast
  }
}

function isPast (month, year) {
  return Date.now() >= new Date(year, month)
}

function parseMonth (month) {
  return parseIntStrict(month)
}

function formatExpYear (year, strip) {
  year = year.toString()
  return strip ? year.substr(2, 4) : year
}

function isExpYearValid (year) {
  if (typeof year !== 'number') return false
  year = parseIntStrict(year)
  return year > 0
}

function isExpYearPast (year) {
  return new Date().getFullYear() > year
}


/***/ }),

/***/ "./node_modules/creditcards/index.js":
/*!*******************************************!*\
  !*** ./node_modules/creditcards/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! creditcards-types */ "./node_modules/creditcards-types/index.js")
var Card = __webpack_require__(/*! ./card */ "./node_modules/creditcards/card.js")
var Cvc = __webpack_require__(/*! ./cvc */ "./node_modules/creditcards/cvc.js")
var expiration = __webpack_require__(/*! ./expiration */ "./node_modules/creditcards/expiration.js")

module.exports = withTypes(types)
module.exports.withTypes = withTypes

function withTypes (types) {
  return {
    card: Card(types),
    cvc: Cvc(types),
    expiration: expiration
  }
}


/***/ }),

/***/ "./node_modules/creditcards/types.js":
/*!*******************************************!*\
  !*** ./node_modules/creditcards/types.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var find = __webpack_require__(/*! array-find */ "./node_modules/array-find/find.js")
var defaults = __webpack_require__(/*! creditcards-types */ "./node_modules/creditcards-types/index.js")

module.exports = CardTypes
module.exports.defaults = defaults

function CardTypes (types) {
  var map = types.reduce(function (acc, type) {
    acc[type.name] = type
    return acc
  }, {})

  return {
    find: find.bind(null, types),
    some: types.some.bind(types),
    get: get
  }

  function get (name) {
    var type = map[name]

    if (!type) {
      throw new Error('No type found for name: ' + name)
    }

    return type
  }
}


/***/ }),

/***/ "./node_modules/expand-year/index.js":
/*!*******************************************!*\
  !*** ./node_modules/expand-year/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var zeroFill = __webpack_require__(/*! zero-fill */ "./node_modules/zero-fill/index.js")
var parseIntStrict = __webpack_require__(/*! parse-int */ "./node_modules/parse-int/index.js")

var pad = zeroFill(2)

module.exports = function expandYear (year, now) {
  now = now || new Date()
  var base = now.getFullYear().toString().substr(0, 2)
  year = parseIntStrict(year)
  return parseIntStrict(base + pad(year))
}


/***/ }),

/***/ "./node_modules/fast-luhn/index.js":
/*!*****************************************!*\
  !*** ./node_modules/fast-luhn/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (function (array) {
  return function luhn (number) {
    if (typeof number !== 'string') throw new TypeError('Expected string input')
    if (!number) return false
    var length = number.length
    var bit = 1
    var sum = 0
    var value

    while (length) {
      value = parseInt(number.charAt(--length), 10)
      bit ^= 1
      sum += bit ? array[value] : value
    }

    return sum % 10 === 0
  }
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]))


/***/ }),

/***/ "./node_modules/is-finite/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-finite/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Number.isFinite || function (value) {
	return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
};


/***/ }),

/***/ "./node_modules/is-integer/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-integer/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/paulmillr/es6-shim
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
var isFinite = __webpack_require__(/*! is-finite */ "./node_modules/is-finite/index.js");
module.exports = Number.isInteger || function(val) {
  return typeof val === "number" &&
    isFinite(val) &&
    Math.floor(val) === val;
};


/***/ }),

/***/ "./node_modules/is-valid-month/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-valid-month/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isInteger = __webpack_require__(/*! is-integer */ "./node_modules/is-integer/index.js")

module.exports = function isValidMonth (month) {
  if (typeof month !== 'number' || !isInteger(month)) return false
  return month >= 1 && month <= 12
}


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_createFind.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createFind.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ "./node_modules/lodash/find.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/find.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(/*! ./_createFind */ "./node_modules/lodash/_createFind.js"),
    findIndex = __webpack_require__(/*! ./findIndex */ "./node_modules/lodash/findIndex.js");

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/findIndex.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "./node_modules/lodash/reduce.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/reduce.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/parse-int/index.js":
/*!*****************************************!*\
  !*** ./node_modules/parse-int/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isInteger = __webpack_require__(/*! is-integer */ "./node_modules/is-integer/index.js")
var isIntegerRegex = /^-?\d+$/

module.exports = function parseIntStrict (integer) {
  if (typeof integer === 'number') {
    return isInteger(integer) ? integer : undefined
  }
  if (typeof integer === 'string') {
    return isIntegerRegex.test(integer) ? parseInt(integer, 10) : undefined
  }
}


/***/ }),

/***/ "./node_modules/parse-year/index.js":
/*!******************************************!*\
  !*** ./node_modules/parse-year/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseIntStrict = __webpack_require__(/*! parse-int */ "./node_modules/parse-int/index.js")
var expandYear = __webpack_require__(/*! expand-year */ "./node_modules/expand-year/index.js")

module.exports = function parseYear (year, expand, now) {
  year = parseIntStrict(year)
  if (year == null) return
  if (!expand) return year
  return expandYear(year, now)
}


/***/ }),

/***/ "./node_modules/xtend/mutable.js":
/*!***************************************!*\
  !*** ./node_modules/xtend/mutable.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./node_modules/zero-fill/index.js":
/*!*****************************************!*\
  !*** ./node_modules/zero-fill/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! zero-fill. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/**
 * Given a number, return a zero-filled string.
 * From http://stackoverflow.com/questions/1267283/
 * @param  {number} width
 * @param  {number} number
 * @return {string}
 */
module.exports = function zeroFill (width, number, pad) {
  if (number === undefined) {
    return function (number, pad) {
      return zeroFill(width, number, pad)
    }
  }
  if (pad === undefined) pad = '0'
  width -= number.toString().length
  if (width > 0) return new Array(width + (/\./.test(number) ? 2 : 1)).join(pad) + number
  return number + ''
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJyYXktZmluZC9maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvYW1lcmljYW4tZXhwcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvZGFua29ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvZGluZXJzLWNsdWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL2Rpc2NvdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy10eXBlcy90eXBlcy9lbG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL2ZvcmJydWdzZm9yZW5pbmdlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL2pjYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvbWFlc3Ryby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvbWFzdGVyY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvdHJveS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvdWF0cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvdW5pb25wYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL3Zpc2EuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzL2N2Yy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMvZXhwaXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzL3R5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leHBhbmQteWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmFzdC1sdWhuL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1maW5pdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLXZhbGlkLW1vbnRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlRmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9maW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b0ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcnNlLWludC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFyc2UteWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveHRlbmQvbXV0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvemVyby1maWxsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDdEJZOztBQUVaLGlCQUFpQixtQkFBTyxDQUFDLGdFQUFTOzs7Ozs7Ozs7Ozs7O0FDRnRCOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyxzREFBZTs7QUFFcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLElBQUksS0FBSyxJQUFJLE1BQU0sSUFBSSxNQUFNLElBQUk7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJZOztBQUVaLFdBQVcsbUJBQU8sQ0FBQyx5REFBUzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEdBQUc7QUFDeEI7QUFDQSxxQkFBcUIsSUFBSSxLQUFLLElBQUksTUFBTSxJQUFJO0FBQzVDO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1hXOztBQUVaLFdBQVcsbUJBQU8sQ0FBQyx5REFBUzs7QUFFNUI7QUFDQTtBQUNBLG9CQUFvQixHQUFHO0FBQ3ZCO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1JXOztBQUVaLFdBQVcsbUJBQU8sQ0FBQyx5REFBUzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0Es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Q0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3BCWTs7QUFFWixnQkFBZ0IsbUJBQU8sQ0FBQyxzREFBWTtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWlk7O0FBRVoscUJBQXFCLG1CQUFPLENBQUMsb0RBQVc7QUFDeEMsaUJBQWlCLG1CQUFPLENBQUMsd0RBQWE7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBmaW5kKGFycmF5LCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcclxuICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZS5maW5kID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gYXJyYXkuZmluZChwcmVkaWNhdGUsIGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgY29udGV4dCA9IGNvbnRleHQgfHwgdGhpcztcclxuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xyXG4gIHZhciBpO1xyXG5cclxuICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihwcmVkaWNhdGUgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChwcmVkaWNhdGUuY2FsbChjb250ZXh0LCBhcnJheVtpXSwgaSwgYXJyYXkpKSB7XHJcbiAgICAgIHJldHVybiBhcnJheVtpXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZmluZDtcclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vdHlwZXMnKVxyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbnZhciBhc3NpZ24gPSByZXF1aXJlKCd4dGVuZC9tdXRhYmxlJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ2FyZFR5cGVcclxuXHJcbmZ1bmN0aW9uIENhcmRUeXBlIChkYXRhKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENhcmRUeXBlKSkgcmV0dXJuIG5ldyBDYXJkVHlwZShkYXRhKVxyXG4gIGFzc2lnbih0aGlzLCBkYXRhKVxyXG59XHJcblxyXG5DYXJkVHlwZS5wcm90b3R5cGUuZGlnaXRzID0gMTZcclxuQ2FyZFR5cGUucHJvdG90eXBlLmN2Y0xlbmd0aCA9IDNcclxuQ2FyZFR5cGUucHJvdG90eXBlLmx1aG4gPSB0cnVlXHJcbkNhcmRUeXBlLnByb3RvdHlwZS5ncm91cFBhdHRlcm4gPSAvKFxcZHsxLDR9KShcXGR7MSw0fSk/KFxcZHsxLDR9KT8oXFxkezEsNH0pPy9cclxuXHJcbkNhcmRUeXBlLnByb3RvdHlwZS5ncm91cCA9IGZ1bmN0aW9uIChudW1iZXIpIHtcclxuICByZXR1cm4gKG51bWJlci5tYXRjaCh0aGlzLmdyb3VwUGF0dGVybikgfHwgW10pXHJcbiAgICAuc2xpY2UoMSlcclxuICAgIC5maWx0ZXIoQm9vbGVhbilcclxufVxyXG5cclxuQ2FyZFR5cGUucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbiAobnVtYmVyLCBlYWdlcikge1xyXG4gIHJldHVybiB0aGlzW2VhZ2VyID8gJ2VhZ2VyUGF0dGVybicgOiAncGF0dGVybiddLnRlc3QobnVtYmVyKVxyXG59XHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XHJcbiAgbmFtZTogJ0FtZXJpY2FuIEV4cHJlc3MnLFxyXG4gIGRpZ2l0czogMTUsXHJcbiAgcGF0dGVybjogL14zWzQ3XVxcZHsxM30kLyxcclxuICBlYWdlclBhdHRlcm46IC9eM1s0N10vLFxyXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSkoXFxkezEsNn0pPyhcXGR7MSw1fSk/LyxcclxuICBjdmNMZW5ndGg6IDRcclxufSlcclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUeXBlKHtcclxuICBuYW1lOiAnRGFua29ydCcsXHJcbiAgcGF0dGVybjogL141MDE5XFxkezEyfSQvLFxyXG4gIGVhZ2VyUGF0dGVybjogL141MDE5L1xyXG59KVxyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xyXG4gIG5hbWU6ICdEaW5lcnMgQ2x1YicsXHJcbiAgZGlnaXRzOiAxNCxcclxuICBwYXR0ZXJuOiAvXjMoMFswLTVdfFs2OF1cXGQpXFxkezExfSQvLFxyXG4gIGVhZ2VyUGF0dGVybjogL14zKDB8WzY4XSkvLFxyXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSk/KFxcZHsxLDZ9KT8oXFxkezEsNH0pPy9cclxufSlcclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUeXBlKHtcclxuICBuYW1lOiAnRGlzY292ZXInLFxyXG4gIHBhdHRlcm46IC9eNigwMTEoMFswLTldfFsyLTRdXFxkfDc0fDdbNy05XXw4WzYtOV18OVswLTldKXw0WzQtOV1cXGR7M318NVxcZHs0fSlcXGR7MTB9JC8sXHJcbiAgZWFnZXJQYXR0ZXJuOiAvXjYoMDExKDBbMC05XXxbMi00XXw3NHw3WzctOV18OFs2LTldfDlbMC05XSl8NFs0LTldfDUpL1xyXG59KVxyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xyXG4gIG5hbWU6ICdFbG8nLFxyXG4gIHBhdHRlcm46IC9eKDRbMDM1XXw1WzBdfDZbMjM1XSkoNls3MjYzXXw5WzkwXXwxWzI0MTZdfDdbNzM2XXw4WzldfDBbMDQ1NzldfDVbMF0pKFswLTldKShbMC05XSlcXGR7MTB9JC8sXHJcbiAgZWFnZXJQYXR0ZXJuOiAvXig0WzAzNV18NVswXXw2WzIzNV0pKDZbNzI2M118OVs5MF18MVsyNDE2XXw3WzczNl18OFs5XXwwWzA0NTc5XXw1WzBdKShbMC05XSkoWzAtOV0pLyxcclxuICBncm91cFBhdHRlcm46IC8oXFxkezEsNH0pKFxcZHsxLDR9KT8oXFxkezEsNH0pPyhcXGR7MSw0fSk/KFxcZHsxLDN9KT8vXHJcbn0pXHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XHJcbiAgbmFtZTogJ0ZvcmJydWdzZm9yZW5pbmdlbicsXHJcbiAgcGF0dGVybjogL142MDA3MjJcXGR7MTB9JC8sXHJcbiAgZWFnZXJQYXR0ZXJuOiAvXjYwMC9cclxufSlcclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFtcclxuICByZXF1aXJlKCcuL3Zpc2EnKSxcclxuICByZXF1aXJlKCcuL21hZXN0cm8nKSxcclxuICByZXF1aXJlKCcuL2ZvcmJydWdzZm9yZW5pbmdlbicpLFxyXG4gIHJlcXVpcmUoJy4vZGFua29ydCcpLFxyXG4gIHJlcXVpcmUoJy4vbWFzdGVyY2FyZCcpLFxyXG4gIHJlcXVpcmUoJy4vYW1lcmljYW4tZXhwcmVzcycpLFxyXG4gIHJlcXVpcmUoJy4vZGluZXJzLWNsdWInKSxcclxuICByZXF1aXJlKCcuL2Rpc2NvdmVyJyksXHJcbiAgcmVxdWlyZSgnLi9qY2InKSxcclxuICByZXF1aXJlKCcuL3VuaW9ucGF5JyksXHJcbiAgcmVxdWlyZSgnLi90cm95JyksXHJcbiAgcmVxdWlyZSgnLi9lbG8nKSxcclxuICByZXF1aXJlKCcuL3VhdHAnKVxyXG5dXHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XHJcbiAgbmFtZTogJ0pDQicsXHJcbiAgcGF0dGVybjogL14zNVxcZHsxNH0kLyxcclxuICBlYWdlclBhdHRlcm46IC9eMzUvXHJcbn0pXHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XHJcbiAgbmFtZTogJ01hZXN0cm8nLFxyXG4gIGRpZ2l0czogWzEyLCAxOV0sXHJcbiAgcGF0dGVybjogL14oPzo1WzA2Nzg5XVxcZFxcZHwoPyE2MDExWzAyMzRdKSg/ITYwMTE3WzQ3ODldKSg/ITYwMTE4WzY3ODldKSg/ITYwMTE5KSg/ITY0WzQ1Njc4OV0pKD8hNjUpNlxcZHszfSlcXGR7OCwxNX0kLyxcclxuICBlYWdlclBhdHRlcm46IC9eKDUoMDE4fDBbMjNdfFs2OF0pfDZbMzddfDYwMTExfDYwMTE1fDYwMTE3KFs1Nl18N1s1Nl0pfDYwMTE4WzAtNV18NjRbMC0zXXw2NikvLFxyXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSkoXFxkezEsNH0pPyhcXGR7MSw0fSk/KFxcZHsxLDR9KT8oXFxkezEsM30pPy9cclxufSlcclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUeXBlKHtcclxuICBuYW1lOiAnTWFzdGVyY2FyZCcsXHJcbiAgcGF0dGVybjogL14oNVsxLTVdWzAtOV17Mn18MjIyWzEtOV18MjJbMy05XVswLTldfDJbMy02XVswLTldezJ9fDI3WzAxXVswLTldfDI3MjApXFxkezEyfSQvLFxyXG4gIGVhZ2VyUGF0dGVybjogL14oMlszLTddfDIyWzItOV18NVsxLTVdKS9cclxufSlcclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUeXBlKHtcclxuICBuYW1lOiAnVHJveScsXHJcbiAgcGF0dGVybjogL145NzkyXFxkezEyfSQvLFxyXG4gIGVhZ2VyUGF0dGVybjogL145NzkyL1xyXG59KVxyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xyXG4gIG5hbWU6ICdVQVRQJyxcclxuICBkaWdpdHM6IDE1LFxyXG4gIHBhdHRlcm46IC9eMVxcZHsxNH0kLyxcclxuICBlYWdlclBhdHRlcm46IC9eMS8sXHJcbiAgZ3JvdXBQYXR0ZXJuOiAvKFxcZHsxLDR9KShcXGR7MSw1fSk/KFxcZHsxLDZ9KT8vXHJcbn0pXHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XHJcbiAgbmFtZTogJ1VuaW9uUGF5JyxcclxuICBwYXR0ZXJuOiAvXjYyWzAtNV1cXGR7MTMsMTZ9JC8sXHJcbiAgZWFnZXJQYXR0ZXJuOiAvXjYyLyxcclxuICBncm91cFBhdHRlcm46IC8oXFxkezEsNH0pKFxcZHsxLDR9KT8oXFxkezEsNH0pPyhcXGR7MSw0fSk/KFxcZHsxLDN9KT8vLFxyXG4gIGx1aG46IGZhbHNlXHJcbn0pXHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XHJcbiAgbmFtZTogJ1Zpc2EnLFxyXG4gIGRpZ2l0czogWzEzLCAxOV0sXHJcbiAgcGF0dGVybjogL140XFxkezEyfShcXGR7M318XFxkezZ9KT8kLyxcclxuICBlYWdlclBhdHRlcm46IC9eNC8sXHJcbiAgZ3JvdXBQYXR0ZXJuOiAvKFxcZHsxLDR9KShcXGR7MSw0fSk/KFxcZHsxLDR9KT8oXFxkezEsNH0pPyhcXGR7MSwzfSk/L1xyXG59KVxyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbnZhciBsdWhuID0gcmVxdWlyZSgnZmFzdC1sdWhuJylcclxudmFyIFR5cGVzID0gcmVxdWlyZSgnLi90eXBlcycpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENhcmRcclxuXHJcbmZ1bmN0aW9uIENhcmQgKGRhdGEpIHtcclxuICB2YXIgdHlwZXMgPSBUeXBlcyhkYXRhKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdHlwZXM6IGRhdGEsXHJcbiAgICBwYXJzZTogcGFyc2VDYXJkLFxyXG4gICAgZm9ybWF0OiBmb3JtYXRDYXJkLFxyXG4gICAgdHlwZTogY2FyZFR5cGUsXHJcbiAgICBsdWhuOiBsdWhuLFxyXG4gICAgaXNWYWxpZDogaXNDYXJkVmFsaWRcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBhcnNlQ2FyZCAobnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZW9mIG51bWJlciAhPT0gJ3N0cmluZycpIHJldHVybiAnJ1xyXG4gICAgcmV0dXJuIG51bWJlci5yZXBsYWNlKC9bXlxcZF0vZywgJycpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmb3JtYXRDYXJkIChudW1iZXIsIHNlcGFyYXRvcikge1xyXG4gICAgdmFyIHR5cGUgPSBnZXRUeXBlKG51bWJlciwgdHJ1ZSlcclxuICAgIGlmICghdHlwZSkgcmV0dXJuIG51bWJlclxyXG4gICAgcmV0dXJuIHR5cGUuZ3JvdXAobnVtYmVyKS5qb2luKHNlcGFyYXRvciB8fCAnICcpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYXJkVHlwZSAobnVtYmVyLCBlYWdlcikge1xyXG4gICAgdmFyIHR5cGUgPSBnZXRUeXBlKG51bWJlciwgZWFnZXIpXHJcbiAgICByZXR1cm4gdHlwZSA/IHR5cGUubmFtZSA6IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNDYXJkVmFsaWQgKG51bWJlciwgdHlwZSkge1xyXG4gICAgaWYgKHR5cGUpIHtcclxuICAgICAgdHlwZSA9IHR5cGVzLmdldCh0eXBlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHlwZSA9IGdldFR5cGUobnVtYmVyKVxyXG4gICAgfVxyXG4gICAgaWYgKCF0eXBlKSByZXR1cm4gZmFsc2VcclxuICAgIHJldHVybiAoIXR5cGUubHVobiB8fCBsdWhuKG51bWJlcikpICYmIHR5cGUudGVzdChudW1iZXIpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRUeXBlIChudW1iZXIsIGVhZ2VyKSB7XHJcbiAgICByZXR1cm4gdHlwZXMuZmluZChmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICByZXR1cm4gdHlwZS50ZXN0KG51bWJlciwgZWFnZXIpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbnZhciBUeXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKVxyXG52YXIgY3ZjUmVnZXggPSAvXlxcZHszLDR9JC9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ3ZjXHJcblxyXG5mdW5jdGlvbiBDdmMgKGRhdGEpIHtcclxuICB2YXIgdHlwZXMgPSBUeXBlcyhkYXRhKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXNWYWxpZDogY3ZjSXNWYWxpZFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3ZjSXNWYWxpZCAoY3ZjLCB0eXBlKSB7XHJcbiAgICBpZiAodHlwZW9mIGN2YyAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZVxyXG4gICAgaWYgKCFjdmNSZWdleC50ZXN0KGN2YykpIHJldHVybiBmYWxzZVxyXG5cclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICByZXR1cm4gdHlwZXMuc29tZShmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlLmN2Y0xlbmd0aCA9PT0gY3ZjLmxlbmd0aFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0eXBlcy5nZXQodHlwZSkuY3ZjTGVuZ3RoID09PSBjdmMubGVuZ3RoXHJcbiAgfVxyXG59XHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxudmFyIGlzVmFsaWRNb250aCA9IHJlcXVpcmUoJ2lzLXZhbGlkLW1vbnRoJylcclxudmFyIHBhcnNlSW50U3RyaWN0ID0gcmVxdWlyZSgncGFyc2UtaW50JylcclxudmFyIHBhcnNlWWVhciA9IHJlcXVpcmUoJ3BhcnNlLXllYXInKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgaXNQYXN0OiBpc1Bhc3QsXHJcbiAgbW9udGg6IHtcclxuICAgIHBhcnNlOiBwYXJzZU1vbnRoLFxyXG4gICAgaXNWYWxpZDogaXNWYWxpZE1vbnRoXHJcbiAgfSxcclxuICB5ZWFyOiB7XHJcbiAgICBwYXJzZTogcGFyc2VZZWFyLFxyXG4gICAgZm9ybWF0OiBmb3JtYXRFeHBZZWFyLFxyXG4gICAgaXNWYWxpZDogaXNFeHBZZWFyVmFsaWQsXHJcbiAgICBpc1Bhc3Q6IGlzRXhwWWVhclBhc3RcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUGFzdCAobW9udGgsIHllYXIpIHtcclxuICByZXR1cm4gRGF0ZS5ub3coKSA+PSBuZXcgRGF0ZSh5ZWFyLCBtb250aClcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VNb250aCAobW9udGgpIHtcclxuICByZXR1cm4gcGFyc2VJbnRTdHJpY3QobW9udGgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdEV4cFllYXIgKHllYXIsIHN0cmlwKSB7XHJcbiAgeWVhciA9IHllYXIudG9TdHJpbmcoKVxyXG4gIHJldHVybiBzdHJpcCA/IHllYXIuc3Vic3RyKDIsIDQpIDogeWVhclxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0V4cFllYXJWYWxpZCAoeWVhcikge1xyXG4gIGlmICh0eXBlb2YgeWVhciAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZVxyXG4gIHllYXIgPSBwYXJzZUludFN0cmljdCh5ZWFyKVxyXG4gIHJldHVybiB5ZWFyID4gMFxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0V4cFllYXJQYXN0ICh5ZWFyKSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSA+IHllYXJcclxufVxyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbnZhciB0eXBlcyA9IHJlcXVpcmUoJ2NyZWRpdGNhcmRzLXR5cGVzJylcclxudmFyIENhcmQgPSByZXF1aXJlKCcuL2NhcmQnKVxyXG52YXIgQ3ZjID0gcmVxdWlyZSgnLi9jdmMnKVxyXG52YXIgZXhwaXJhdGlvbiA9IHJlcXVpcmUoJy4vZXhwaXJhdGlvbicpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhUeXBlcyh0eXBlcylcclxubW9kdWxlLmV4cG9ydHMud2l0aFR5cGVzID0gd2l0aFR5cGVzXHJcblxyXG5mdW5jdGlvbiB3aXRoVHlwZXMgKHR5cGVzKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNhcmQ6IENhcmQodHlwZXMpLFxyXG4gICAgY3ZjOiBDdmModHlwZXMpLFxyXG4gICAgZXhwaXJhdGlvbjogZXhwaXJhdGlvblxyXG4gIH1cclxufVxyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbnZhciBmaW5kID0gcmVxdWlyZSgnYXJyYXktZmluZCcpXHJcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJ2NyZWRpdGNhcmRzLXR5cGVzJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ2FyZFR5cGVzXHJcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHRzID0gZGVmYXVsdHNcclxuXHJcbmZ1bmN0aW9uIENhcmRUeXBlcyAodHlwZXMpIHtcclxuICB2YXIgbWFwID0gdHlwZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHR5cGUpIHtcclxuICAgIGFjY1t0eXBlLm5hbWVdID0gdHlwZVxyXG4gICAgcmV0dXJuIGFjY1xyXG4gIH0sIHt9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZmluZDogZmluZC5iaW5kKG51bGwsIHR5cGVzKSxcclxuICAgIHNvbWU6IHR5cGVzLnNvbWUuYmluZCh0eXBlcyksXHJcbiAgICBnZXQ6IGdldFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0IChuYW1lKSB7XHJcbiAgICB2YXIgdHlwZSA9IG1hcFtuYW1lXVxyXG5cclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHR5cGUgZm91bmQgZm9yIG5hbWU6ICcgKyBuYW1lKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0eXBlXHJcbiAgfVxyXG59XHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxudmFyIHplcm9GaWxsID0gcmVxdWlyZSgnemVyby1maWxsJylcclxudmFyIHBhcnNlSW50U3RyaWN0ID0gcmVxdWlyZSgncGFyc2UtaW50JylcclxuXHJcbnZhciBwYWQgPSB6ZXJvRmlsbCgyKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHBhbmRZZWFyICh5ZWFyLCBub3cpIHtcclxuICBub3cgPSBub3cgfHwgbmV3IERhdGUoKVxyXG4gIHZhciBiYXNlID0gbm93LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKS5zdWJzdHIoMCwgMilcclxuICB5ZWFyID0gcGFyc2VJbnRTdHJpY3QoeWVhcilcclxuICByZXR1cm4gcGFyc2VJbnRTdHJpY3QoYmFzZSArIHBhZCh5ZWFyKSlcclxufVxyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIChhcnJheSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiBsdWhuIChudW1iZXIpIHtcclxuICAgIGlmICh0eXBlb2YgbnVtYmVyICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgc3RyaW5nIGlucHV0JylcclxuICAgIGlmICghbnVtYmVyKSByZXR1cm4gZmFsc2VcclxuICAgIHZhciBsZW5ndGggPSBudW1iZXIubGVuZ3RoXHJcbiAgICB2YXIgYml0ID0gMVxyXG4gICAgdmFyIHN1bSA9IDBcclxuICAgIHZhciB2YWx1ZVxyXG5cclxuICAgIHdoaWxlIChsZW5ndGgpIHtcclxuICAgICAgdmFsdWUgPSBwYXJzZUludChudW1iZXIuY2hhckF0KC0tbGVuZ3RoKSwgMTApXHJcbiAgICAgIGJpdCBePSAxXHJcbiAgICAgIHN1bSArPSBiaXQgPyBhcnJheVt2YWx1ZV0gOiB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdW0gJSAxMCA9PT0gMFxyXG4gIH1cclxufShbMCwgMiwgNCwgNiwgOCwgMSwgMywgNSwgNywgOV0pKVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlci5pc0Zpbml0ZSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRyZXR1cm4gISh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8IHZhbHVlICE9PSB2YWx1ZSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkgfHwgdmFsdWUgPT09IC1JbmZpbml0eSk7XHJcbn07XHJcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXVsbWlsbHIvZXM2LXNoaW1cclxuLy8gaHR0cDovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtbnVtYmVyLmlzaW50ZWdlclxyXG52YXIgaXNGaW5pdGUgPSByZXF1aXJlKFwiaXMtZmluaXRlXCIpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlci5pc0ludGVnZXIgfHwgZnVuY3Rpb24odmFsKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIgJiZcclxuICAgIGlzRmluaXRlKHZhbCkgJiZcclxuICAgIE1hdGguZmxvb3IodmFsKSA9PT0gdmFsO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbnZhciBpc0ludGVnZXIgPSByZXF1aXJlKCdpcy1pbnRlZ2VyJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNWYWxpZE1vbnRoIChtb250aCkge1xyXG4gIGlmICh0eXBlb2YgbW9udGggIT09ICdudW1iZXInIHx8ICFpc0ludGVnZXIobW9udGgpKSByZXR1cm4gZmFsc2VcclxuICByZXR1cm4gbW9udGggPj0gMSAmJiBtb250aCA8PSAxMlxyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YCB3aXRob3V0XHJcbiAqIHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cclxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxyXG4gKi9cclxuZnVuY3Rpb24gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xyXG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXHJcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDEgOiAtMSk7XHJcblxyXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XHJcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xyXG4gICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAtMTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZEluZGV4O1xyXG4iLCJ2YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXHJcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcclxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgYF8uZmluZGAgb3IgYF8uZmluZExhc3RgIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmaW5kSW5kZXhGdW5jIFRoZSBmdW5jdGlvbiB0byBmaW5kIHRoZSBjb2xsZWN0aW9uIGluZGV4LlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmaW5kIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlRmluZChmaW5kSW5kZXhGdW5jKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgZnJvbUluZGV4KSB7XHJcbiAgICB2YXIgaXRlcmFibGUgPSBPYmplY3QoY29sbGVjdGlvbik7XHJcbiAgICBpZiAoIWlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pKSB7XHJcbiAgICAgIHZhciBpdGVyYXRlZSA9IGJhc2VJdGVyYXRlZShwcmVkaWNhdGUsIDMpO1xyXG4gICAgICBjb2xsZWN0aW9uID0ga2V5cyhjb2xsZWN0aW9uKTtcclxuICAgICAgcHJlZGljYXRlID0gZnVuY3Rpb24oa2V5KSB7IHJldHVybiBpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKTsgfTtcclxuICAgIH1cclxuICAgIHZhciBpbmRleCA9IGZpbmRJbmRleEZ1bmMoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBmcm9tSW5kZXgpO1xyXG4gICAgcmV0dXJuIGluZGV4ID4gLTEgPyBpdGVyYWJsZVtpdGVyYXRlZSA/IGNvbGxlY3Rpb25baW5kZXhdIDogaW5kZXhdIDogdW5kZWZpbmVkO1xyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlRmluZDtcclxuIiwidmFyIGNyZWF0ZUZpbmQgPSByZXF1aXJlKCcuL19jcmVhdGVGaW5kJyksXHJcbiAgICBmaW5kSW5kZXggPSByZXF1aXJlKCcuL2ZpbmRJbmRleCcpO1xyXG5cclxuLyoqXHJcbiAqIEl0ZXJhdGVzIG92ZXIgZWxlbWVudHMgb2YgYGNvbGxlY3Rpb25gLCByZXR1cm5pbmcgdGhlIGZpcnN0IGVsZW1lbnRcclxuICogYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yLiBUaGUgcHJlZGljYXRlIGlzIGludm9rZWQgd2l0aCB0aHJlZVxyXG4gKiBhcmd1bWVudHM6ICh2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAbWVtYmVyT2YgX1xyXG4gKiBAc2luY2UgMC4xLjBcclxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cclxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaW5zcGVjdC5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3ByZWRpY2F0ZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2Zyb21JbmRleD0wXSBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXHJcbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXRjaGVkIGVsZW1lbnQsIGVsc2UgYHVuZGVmaW5lZGAuXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIHZhciB1c2VycyA9IFtcclxuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICAnYWdlJzogMzYsICdhY3RpdmUnOiB0cnVlIH0sXHJcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAgJ2FnZSc6IDQwLCAnYWN0aXZlJzogZmFsc2UgfSxcclxuICogICB7ICd1c2VyJzogJ3BlYmJsZXMnLCAnYWdlJzogMSwgICdhY3RpdmUnOiB0cnVlIH1cclxuICogXTtcclxuICpcclxuICogXy5maW5kKHVzZXJzLCBmdW5jdGlvbihvKSB7IHJldHVybiBvLmFnZSA8IDQwOyB9KTtcclxuICogLy8gPT4gb2JqZWN0IGZvciAnYmFybmV5J1xyXG4gKlxyXG4gKiAvLyBUaGUgYF8ubWF0Y2hlc2AgaXRlcmF0ZWUgc2hvcnRoYW5kLlxyXG4gKiBfLmZpbmQodXNlcnMsIHsgJ2FnZSc6IDEsICdhY3RpdmUnOiB0cnVlIH0pO1xyXG4gKiAvLyA9PiBvYmplY3QgZm9yICdwZWJibGVzJ1xyXG4gKlxyXG4gKiAvLyBUaGUgYF8ubWF0Y2hlc1Byb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXHJcbiAqIF8uZmluZCh1c2VycywgWydhY3RpdmUnLCBmYWxzZV0pO1xyXG4gKiAvLyA9PiBvYmplY3QgZm9yICdmcmVkJ1xyXG4gKlxyXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cclxuICogXy5maW5kKHVzZXJzLCAnYWN0aXZlJyk7XHJcbiAqIC8vID0+IG9iamVjdCBmb3IgJ2Jhcm5leSdcclxuICovXHJcbnZhciBmaW5kID0gY3JlYXRlRmluZChmaW5kSW5kZXgpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmaW5kO1xyXG4iLCJ2YXIgYmFzZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4vX2Jhc2VGaW5kSW5kZXgnKSxcclxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxyXG4gICAgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi90b0ludGVnZXInKTtcclxuXHJcbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cclxudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uZmluZGAgZXhjZXB0IHRoYXQgaXQgcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0XHJcbiAqIGVsZW1lbnQgYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yIGluc3RlYWQgb2YgdGhlIGVsZW1lbnQgaXRzZWxmLlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBtZW1iZXJPZiBfXHJcbiAqIEBzaW5jZSAxLjEuMFxyXG4gKiBAY2F0ZWdvcnkgQXJyYXlcclxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtmcm9tSW5kZXg9MF0gVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZm91bmQgZWxlbWVudCwgZWxzZSBgLTFgLlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiB2YXIgdXNlcnMgPSBbXHJcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAgJ2FjdGl2ZSc6IGZhbHNlIH0sXHJcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAgJ2FjdGl2ZSc6IGZhbHNlIH0sXHJcbiAqICAgeyAndXNlcic6ICdwZWJibGVzJywgJ2FjdGl2ZSc6IHRydWUgfVxyXG4gKiBdO1xyXG4gKlxyXG4gKiBfLmZpbmRJbmRleCh1c2VycywgZnVuY3Rpb24obykgeyByZXR1cm4gby51c2VyID09ICdiYXJuZXknOyB9KTtcclxuICogLy8gPT4gMFxyXG4gKlxyXG4gKiAvLyBUaGUgYF8ubWF0Y2hlc2AgaXRlcmF0ZWUgc2hvcnRoYW5kLlxyXG4gKiBfLmZpbmRJbmRleCh1c2VycywgeyAndXNlcic6ICdmcmVkJywgJ2FjdGl2ZSc6IGZhbHNlIH0pO1xyXG4gKiAvLyA9PiAxXHJcbiAqXHJcbiAqIC8vIFRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cclxuICogXy5maW5kSW5kZXgodXNlcnMsIFsnYWN0aXZlJywgZmFsc2VdKTtcclxuICogLy8gPT4gMFxyXG4gKlxyXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cclxuICogXy5maW5kSW5kZXgodXNlcnMsICdhY3RpdmUnKTtcclxuICogLy8gPT4gMlxyXG4gKi9cclxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCkge1xyXG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcclxuICBpZiAoIWxlbmd0aCkge1xyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIoZnJvbUluZGV4KTtcclxuICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICBpbmRleCA9IG5hdGl2ZU1heChsZW5ndGggKyBpbmRleCwgMCk7XHJcbiAgfVxyXG4gIHJldHVybiBiYXNlRmluZEluZGV4KGFycmF5LCBiYXNlSXRlcmF0ZWUocHJlZGljYXRlLCAzKSwgaW5kZXgpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRJbmRleDtcclxuIiwiLyoqXHJcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxyXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXHJcbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cclxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcclxuICogIHRoZSBpbml0aWFsIHZhbHVlLlxyXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcclxuICB2YXIgaW5kZXggPSAtMSxcclxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XHJcblxyXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XHJcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xyXG4gIH1cclxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xyXG4gIH1cclxuICByZXR1cm4gYWNjdW11bGF0b3I7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXJyYXlSZWR1Y2U7XHJcbiIsIi8qKlxyXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAc2luY2UgMC4xLjBcclxuICogQG1lbWJlck9mIF9cclxuICogQGNhdGVnb3J5IFV0aWxcclxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXHJcbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XHJcbiAqIC8vID0+IHRydWVcclxuICovXHJcbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbnZhciBpc0ludGVnZXIgPSByZXF1aXJlKCdpcy1pbnRlZ2VyJylcclxudmFyIGlzSW50ZWdlclJlZ2V4ID0gL14tP1xcZCskL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUludFN0cmljdCAoaW50ZWdlcikge1xyXG4gIGlmICh0eXBlb2YgaW50ZWdlciA9PT0gJ251bWJlcicpIHtcclxuICAgIHJldHVybiBpc0ludGVnZXIoaW50ZWdlcikgPyBpbnRlZ2VyIDogdW5kZWZpbmVkXHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgaW50ZWdlciA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiBpc0ludGVnZXJSZWdleC50ZXN0KGludGVnZXIpID8gcGFyc2VJbnQoaW50ZWdlciwgMTApIDogdW5kZWZpbmVkXHJcbiAgfVxyXG59XHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxudmFyIHBhcnNlSW50U3RyaWN0ID0gcmVxdWlyZSgncGFyc2UtaW50JylcclxudmFyIGV4cGFuZFllYXIgPSByZXF1aXJlKCdleHBhbmQteWVhcicpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlWWVhciAoeWVhciwgZXhwYW5kLCBub3cpIHtcclxuICB5ZWFyID0gcGFyc2VJbnRTdHJpY3QoeWVhcilcclxuICBpZiAoeWVhciA9PSBudWxsKSByZXR1cm5cclxuICBpZiAoIWV4cGFuZCkgcmV0dXJuIHllYXJcclxuICByZXR1cm4gZXhwYW5kWWVhcih5ZWFyLCBub3cpXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcclxuXHJcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcblxyXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cclxuXHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xyXG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0XHJcbn1cclxuIiwiLyohIHplcm8tZmlsbC4gTUlUIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xyXG4vKipcclxuICogR2l2ZW4gYSBudW1iZXIsIHJldHVybiBhIHplcm8tZmlsbGVkIHN0cmluZy5cclxuICogRnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEyNjcyODMvXHJcbiAqIEBwYXJhbSAge251bWJlcn0gd2lkdGhcclxuICogQHBhcmFtICB7bnVtYmVyfSBudW1iZXJcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB6ZXJvRmlsbCAod2lkdGgsIG51bWJlciwgcGFkKSB7XHJcbiAgaWYgKG51bWJlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKG51bWJlciwgcGFkKSB7XHJcbiAgICAgIHJldHVybiB6ZXJvRmlsbCh3aWR0aCwgbnVtYmVyLCBwYWQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChwYWQgPT09IHVuZGVmaW5lZCkgcGFkID0gJzAnXHJcbiAgd2lkdGggLT0gbnVtYmVyLnRvU3RyaW5nKCkubGVuZ3RoXHJcbiAgaWYgKHdpZHRoID4gMCkgcmV0dXJuIG5ldyBBcnJheSh3aWR0aCArICgvXFwuLy50ZXN0KG51bWJlcikgPyAyIDogMSkpLmpvaW4ocGFkKSArIG51bWJlclxyXG4gIHJldHVybiBudW1iZXIgKyAnJ1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=