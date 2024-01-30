import {
  $r,
  Ai,
  Bi,
  Bt,
  Dt,
  Et,
  Fi,
  Gi,
  Hi,
  Ht,
  Jt,
  Ti,
  We,
  Zr,
  _i,
  animated,
  band,
  diverging_default,
  fi,
  format,
  friday,
  hour_default,
  k,
  li,
  linear,
  log,
  millisecond_default,
  minute_default,
  monday,
  month_default,
  newInterval,
  ni,
  oi,
  point,
  pr,
  require_Set,
  require_SetCache,
  require_Stack,
  require_arrayFilter,
  require_arrayIncludes,
  require_arrayIncludesWith,
  require_arrayMap,
  require_baseFlatten,
  require_baseFor,
  require_baseGet,
  require_baseGetTag,
  require_baseIsEqual,
  require_baseRest,
  require_baseUnary,
  require_cacheHas,
  require_get,
  require_hasIn,
  require_identity,
  require_isArray,
  require_isArrayLike,
  require_isIterateeCall,
  require_isKey,
  require_isObject,
  require_isObjectLike,
  require_isSymbol,
  require_jsx_runtime,
  require_keys,
  require_last,
  require_nodeUtil,
  require_omit,
  require_prop_types,
  require_setToArray,
  require_toKey,
  saturday,
  second_default,
  si,
  stack_default,
  sunday,
  symlog,
  thursday,
  time,
  timeFormat,
  timeParse,
  to,
  tuesday,
  useSpring,
  useTransition,
  utcFriday,
  utcHour_default,
  utcMinute_default,
  utcMonday,
  utcMonth_default,
  utcParse,
  utcSaturday,
  utcSunday,
  utcThursday,
  utcTime,
  utcTuesday,
  utcWednesday,
  utcYear_default,
  w,
  wednesday,
  year_default
} from "./chunk-GVRTHUP3.js";
import "./chunk-UWZXFKA6.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/lodash/noop.js"(exports, module) {
    function noop() {
    }
    module.exports = noop;
  }
});

// node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/lodash/_createSet.js"(exports, module) {
    var Set = require_Set();
    var noop = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set(values);
    };
    module.exports = createSet;
  }
});

// node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/lodash/_baseUniq.js"(exports, module) {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    module.exports = baseUniq;
  }
});

// node_modules/lodash/uniq.js
var require_uniq = __commonJS({
  "node_modules/lodash/uniq.js"(exports, module) {
    var baseUniq = require_baseUniq();
    function uniq(array) {
      return array && array.length ? baseUniq(array) : [];
    }
    module.exports = uniq;
  }
});

// node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    module.exports = isStrictComparable;
  }
});

// node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/lodash/_baseMatches.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    var get = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/lodash/_baseProperty.js"(exports, module) {
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  }
});

// node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/lodash/property.js"(exports, module) {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  }
});

// node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/lodash/_baseIteratee.js"(exports, module) {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    module.exports = baseIteratee;
  }
});

// node_modules/lodash/uniqBy.js
var require_uniqBy = __commonJS({
  "node_modules/lodash/uniqBy.js"(exports, module) {
    var baseIteratee = require_baseIteratee();
    var baseUniq = require_baseUniq();
    function uniqBy(array, iteratee) {
      return array && array.length ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
    }
    module.exports = uniqBy;
  }
});

// node_modules/lodash/_baseForOwn.js
var require_baseForOwn = __commonJS({
  "node_modules/lodash/_baseForOwn.js"(exports, module) {
    var baseFor = require_baseFor();
    var keys = require_keys();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    module.exports = baseForOwn;
  }
});

// node_modules/lodash/_createBaseEach.js
var require_createBaseEach = __commonJS({
  "node_modules/lodash/_createBaseEach.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
        while (fromRight ? index-- : ++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    module.exports = createBaseEach;
  }
});

// node_modules/lodash/_baseEach.js
var require_baseEach = __commonJS({
  "node_modules/lodash/_baseEach.js"(exports, module) {
    var baseForOwn = require_baseForOwn();
    var createBaseEach = require_createBaseEach();
    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
  }
});

// node_modules/lodash/_baseMap.js
var require_baseMap = __commonJS({
  "node_modules/lodash/_baseMap.js"(exports, module) {
    var baseEach = require_baseEach();
    var isArrayLike = require_isArrayLike();
    function baseMap(collection, iteratee) {
      var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
      baseEach(collection, function(value, key, collection2) {
        result[++index] = iteratee(value, key, collection2);
      });
      return result;
    }
    module.exports = baseMap;
  }
});

// node_modules/lodash/_baseSortBy.js
var require_baseSortBy = __commonJS({
  "node_modules/lodash/_baseSortBy.js"(exports, module) {
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    module.exports = baseSortBy;
  }
});

// node_modules/lodash/_compareAscending.js
var require_compareAscending = __commonJS({
  "node_modules/lodash/_compareAscending.js"(exports, module) {
    var isSymbol = require_isSymbol();
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
        var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
          return 1;
        }
        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }
    module.exports = compareAscending;
  }
});

// node_modules/lodash/_compareMultiple.js
var require_compareMultiple = __commonJS({
  "node_modules/lodash/_compareMultiple.js"(exports, module) {
    var compareAscending = require_compareAscending();
    function compareMultiple(object, other, orders) {
      var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == "desc" ? -1 : 1);
        }
      }
      return object.index - other.index;
    }
    module.exports = compareMultiple;
  }
});

// node_modules/lodash/_baseOrderBy.js
var require_baseOrderBy = __commonJS({
  "node_modules/lodash/_baseOrderBy.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var baseGet = require_baseGet();
    var baseIteratee = require_baseIteratee();
    var baseMap = require_baseMap();
    var baseSortBy = require_baseSortBy();
    var baseUnary = require_baseUnary();
    var compareMultiple = require_compareMultiple();
    var identity = require_identity();
    var isArray = require_isArray();
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            };
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }
      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
      var result = baseMap(collection, function(value, key, collection2) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { "criteria": criteria, "index": ++index, "value": value };
      });
      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }
    module.exports = baseOrderBy;
  }
});

// node_modules/lodash/sortBy.js
var require_sortBy = __commonJS({
  "node_modules/lodash/sortBy.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    var baseOrderBy = require_baseOrderBy();
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });
    module.exports = sortBy;
  }
});

// node_modules/lodash/_baseIsDate.js
var require_baseIsDate = __commonJS({
  "node_modules/lodash/_baseIsDate.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var dateTag = "[object Date]";
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }
    module.exports = baseIsDate;
  }
});

// node_modules/lodash/isDate.js
var require_isDate = __commonJS({
  "node_modules/lodash/isDate.js"(exports, module) {
    var baseIsDate = require_baseIsDate();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsDate = nodeUtil && nodeUtil.isDate;
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
    module.exports = isDate;
  }
});

// node_modules/lodash/_baseFilter.js
var require_baseFilter = __commonJS({
  "node_modules/lodash/_baseFilter.js"(exports, module) {
    var baseEach = require_baseEach();
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection2) {
        if (predicate(value, index, collection2)) {
          result.push(value);
        }
      });
      return result;
    }
    module.exports = baseFilter;
  }
});

// node_modules/lodash/filter.js
var require_filter = __commonJS({
  "node_modules/lodash/filter.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var baseFilter = require_baseFilter();
    var baseIteratee = require_baseIteratee();
    var isArray = require_isArray();
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, baseIteratee(predicate, 3));
    }
    module.exports = filter;
  }
});

// node_modules/lodash/isNumber.js
var require_isNumber = __commonJS({
  "node_modules/lodash/isNumber.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var numberTag = "[object Number]";
    function isNumber(value) {
      return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
    }
    module.exports = isNumber;
  }
});

// node_modules/@nivo/axes/dist/nivo-axes.es.js
var t2 = __toESM(require_react());
var import_react = __toESM(require_react());

// node_modules/@nivo/scales/dist/nivo-scales.es.js
var import_uniq = __toESM(require_uniq());
var import_uniqBy = __toESM(require_uniqBy());
var import_sortBy = __toESM(require_sortBy());
var import_last = __toESM(require_last());
var import_isDate = __toESM(require_isDate());
var J = [function(n4) {
  return n4.setMilliseconds(0);
}, function(n4) {
  return n4.setSeconds(0);
}, function(n4) {
  return n4.setMinutes(0);
}, function(n4) {
  return n4.setHours(0);
}, function(n4) {
  return n4.setDate(1);
}, function(n4) {
  return n4.setMonth(0);
}];
var K = { millisecond: [], second: J.slice(0, 1), minute: J.slice(0, 2), hour: J.slice(0, 3), day: J.slice(0, 4), month: J.slice(0, 5), year: J.slice(0, 6) };
var L = function(n4) {
  return function(t5) {
    return K[n4].forEach(function(n5) {
      n5(t5);
    }), t5;
  };
};
var Q = function(n4) {
  var t5 = n4.format, r3 = void 0 === t5 ? "native" : t5, e6 = n4.precision, a4 = void 0 === e6 ? "millisecond" : e6, u3 = n4.useUTC, c3 = void 0 === u3 || u3, s2 = L(a4);
  return function(n5) {
    if (void 0 === n5)
      return n5;
    if ("native" === r3 || n5 instanceof Date)
      return s2(n5);
    var t6 = c3 ? utcParse(r3) : timeParse(r3);
    return s2(t6(n5));
  };
};
var W = function(n4, t5, r3, e6) {
  var a4, i3, o2, c3, s2 = n4.min, d3 = void 0 === s2 ? 0 : s2, f2 = n4.max, l = void 0 === f2 ? "auto" : f2, m3 = n4.stacked, v4 = void 0 !== m3 && m3, y = n4.reverse, p4 = void 0 !== y && y, h3 = n4.clamp, g4 = void 0 !== h3 && h3, x3 = n4.nice, k5 = void 0 !== x3 && x3;
  "auto" === d3 ? a4 = true === v4 ? null != (i3 = t5.minStacked) ? i3 : 0 : t5.min : a4 = d3;
  "auto" === l ? o2 = true === v4 ? null != (c3 = t5.maxStacked) ? c3 : 0 : t5.max : o2 = l;
  var T5 = linear().rangeRound("x" === e6 ? [0, r3] : [r3, 0]).domain(p4 ? [o2, a4] : [a4, o2]).clamp(g4);
  return true === k5 ? T5.nice() : "number" == typeof k5 && T5.nice(k5), X(T5, v4);
};
var X = function(n4, t5) {
  void 0 === t5 && (t5 = false);
  var r3 = n4;
  return r3.type = "linear", r3.stacked = t5, r3;
};
var Y = function(n4, t5, r3) {
  var e6 = point().range([0, r3]).domain(t5.all);
  return e6.type = "point", e6;
};
var _ = function(n4, t5, r3, e6) {
  var a4 = n4.round, i3 = void 0 === a4 || a4, o2 = band().range("x" === e6 ? [0, r3] : [r3, 0]).domain(t5.all).round(i3);
  return nn(o2);
};
var nn = function(n4) {
  var t5 = n4;
  return t5.type = "band", t5;
};
var tn = function(n4, t5, r3) {
  var e6, a4, i3 = n4.format, o2 = void 0 === i3 ? "native" : i3, u3 = n4.precision, c3 = void 0 === u3 ? "millisecond" : u3, s2 = n4.min, l = void 0 === s2 ? "auto" : s2, m3 = n4.max, v4 = void 0 === m3 ? "auto" : m3, y = n4.useUTC, p4 = void 0 === y || y, h3 = n4.nice, g4 = void 0 !== h3 && h3, x3 = Q({ format: o2, precision: c3, useUTC: p4 });
  e6 = "auto" === l ? x3(t5.min) : "native" !== o2 ? x3(l) : l, a4 = "auto" === v4 ? x3(t5.max) : "native" !== o2 ? x3(v4) : v4;
  var k5 = p4 ? utcTime() : time();
  k5.range([0, r3]), e6 && a4 && k5.domain([e6, a4]), true === g4 ? k5.nice() : "object" != typeof g4 && "number" != typeof g4 || k5.nice(g4);
  var T5 = k5;
  return T5.type = "time", T5.useUTC = p4, T5;
};
var rn = function(n4, t5, r3, e6) {
  var a4, i3 = n4.base, o2 = void 0 === i3 ? 10 : i3, u3 = n4.min, c3 = void 0 === u3 ? "auto" : u3, s2 = n4.max, d3 = void 0 === s2 ? "auto" : s2;
  if (t5.all.some(function(n5) {
    return 0 === n5;
  }))
    throw new Error("a log scale domain must not include or cross zero");
  var f2, m3, v4 = false;
  if (t5.all.filter(function(n5) {
    return null != n5;
  }).forEach(function(n5) {
    v4 || (void 0 === a4 ? a4 = Math.sign(n5) : Math.sign(n5) !== a4 && (v4 = true));
  }), v4)
    throw new Error("a log scale domain must be strictly-positive or strictly-negative");
  f2 = "auto" === c3 ? t5.min : c3, m3 = "auto" === d3 ? t5.max : d3;
  var y = log().domain([f2, m3]).rangeRound("x" === e6 ? [0, r3] : [r3, 0]).base(o2).nice();
  return y.type = "log", y;
};
var en = function(n4, t5, r3, e6) {
  var a4, i3, o2 = n4.constant, u3 = void 0 === o2 ? 1 : o2, c3 = n4.min, s2 = void 0 === c3 ? "auto" : c3, d3 = n4.max, f2 = void 0 === d3 ? "auto" : d3, l = n4.reverse, v4 = void 0 !== l && l;
  a4 = "auto" === s2 ? t5.min : s2, i3 = "auto" === f2 ? t5.max : f2;
  var y = symlog().constant(u3).rangeRound("x" === e6 ? [0, r3] : [r3, 0]).nice();
  true === v4 ? y.domain([i3, a4]) : y.domain([a4, i3]);
  var p4 = y;
  return p4.type = "symlog", p4;
};
function cn(n4, t5, r3, e6) {
  switch (n4.type) {
    case "linear":
      return W(n4, t5, r3, e6);
    case "point":
      return Y(n4, t5, r3);
    case "band":
      return _(n4, t5, r3, e6);
    case "time":
      return tn(n4, t5, r3);
    case "log":
      return rn(n4, t5, r3, e6);
    case "symlog":
      return en(n4, t5, r3, e6);
    default:
      throw new Error("invalid scale spec");
  }
}
var pn = function(n4) {
  var t5 = n4.bandwidth();
  if (0 === t5)
    return n4;
  var r3 = t5 / 2;
  return n4.round() && (r3 = Math.round(r3)), function(t6) {
    var e6;
    return (null != (e6 = n4(t6)) ? e6 : 0) + r3;
  };
};
var hn = { millisecond: [millisecond_default, millisecond_default], second: [second_default, second_default], minute: [minute_default, utcMinute_default], hour: [hour_default, utcHour_default], day: [newInterval(function(n4) {
  return n4.setHours(0, 0, 0, 0);
}, function(n4, t5) {
  return n4.setDate(n4.getDate() + t5);
}, function(n4, t5) {
  return (t5.getTime() - n4.getTime()) / 864e5;
}, function(n4) {
  return Math.floor(n4.getTime() / 864e5);
}), newInterval(function(n4) {
  return n4.setUTCHours(0, 0, 0, 0);
}, function(n4, t5) {
  return n4.setUTCDate(n4.getUTCDate() + t5);
}, function(n4, t5) {
  return (t5.getTime() - n4.getTime()) / 864e5;
}, function(n4) {
  return Math.floor(n4.getTime() / 864e5);
})], week: [sunday, utcSunday], sunday: [sunday, utcSunday], monday: [monday, utcMonday], tuesday: [tuesday, utcTuesday], wednesday: [wednesday, utcWednesday], thursday: [thursday, utcThursday], friday: [friday, utcFriday], saturday: [saturday, utcSaturday], month: [month_default, utcMonth_default], year: [year_default, utcYear_default] };
var gn = Object.keys(hn);
var xn = new RegExp("^every\\s*(\\d+)?\\s*(" + gn.join("|") + ")s?$", "i");
var kn = function(n4, t5) {
  if (Array.isArray(t5))
    return t5;
  if ("string" == typeof t5 && "useUTC" in n4) {
    var r3 = t5.match(xn);
    if (r3) {
      var e6 = r3[1], a4 = r3[2], i3 = hn[a4][n4.useUTC ? 1 : 0];
      if ("day" === a4) {
        var o2, u3, c3 = n4.domain(), s2 = c3[0], d3 = c3[1], f2 = new Date(d3);
        return f2.setDate(f2.getDate() + 1), null != (o2 = null == (u3 = i3.every(Number(null != e6 ? e6 : 1))) ? void 0 : u3.range(s2, f2)) ? o2 : [];
      }
      if (void 0 === e6)
        return n4.ticks(i3);
      var l = i3.every(Number(e6));
      if (l)
        return n4.ticks(l);
    }
    throw new Error("Invalid tickValues: " + t5);
  }
  if ("ticks" in n4) {
    if (void 0 === t5)
      return n4.ticks();
    if ("number" == typeof (m3 = t5) && isFinite(m3) && Math.floor(m3) === m3)
      return n4.ticks(t5);
  }
  var m3;
  return n4.domain();
};

// node_modules/@nivo/axes/dist/nivo-axes.es.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_prop_types = __toESM(require_prop_types());
function p() {
  return p = Object.assign ? Object.assign.bind() : function(t5) {
    for (var e6 = 1; e6 < arguments.length; e6++) {
      var i3 = arguments[e6];
      for (var n4 in i3)
        Object.prototype.hasOwnProperty.call(i3, n4) && (t5[n4] = i3[n4]);
    }
    return t5;
  }, p.apply(this, arguments);
}
var b = function(t5) {
  var e6, i3 = t5.axis, n4 = t5.scale, r3 = t5.ticksPosition, a4 = t5.tickValues, l = t5.tickSize, s2 = t5.tickPadding, c3 = t5.tickRotation, f2 = t5.truncateTickAt, u3 = t5.engine, d3 = void 0 === u3 ? "svg" : u3, x3 = kn(n4, a4), h3 = fi[d3], g4 = "bandwidth" in n4 ? pn(n4) : n4, k5 = { lineX: 0, lineY: 0 }, v4 = { textX: 0, textY: 0 }, b4 = "object" == typeof document && "rtl" === document.dir, T5 = h3.align.center, P3 = h3.baseline.center;
  "x" === i3 ? (e6 = function(t6) {
    var e7;
    return { x: null != (e7 = g4(t6)) ? e7 : 0, y: 0 };
  }, k5.lineY = l * ("after" === r3 ? 1 : -1), v4.textY = (l + s2) * ("after" === r3 ? 1 : -1), P3 = "after" === r3 ? h3.baseline.top : h3.baseline.bottom, 0 === c3 ? T5 = h3.align.center : "after" === r3 && c3 < 0 || "before" === r3 && c3 > 0 ? (T5 = h3.align[b4 ? "left" : "right"], P3 = h3.baseline.center) : ("after" === r3 && c3 > 0 || "before" === r3 && c3 < 0) && (T5 = h3.align[b4 ? "right" : "left"], P3 = h3.baseline.center)) : (e6 = function(t6) {
    var e7;
    return { x: 0, y: null != (e7 = g4(t6)) ? e7 : 0 };
  }, k5.lineX = l * ("after" === r3 ? 1 : -1), v4.textX = (l + s2) * ("after" === r3 ? 1 : -1), T5 = "after" === r3 ? h3.align.left : h3.align.right);
  return { ticks: x3.map(function(t6) {
    var i4 = "string" == typeof t6 ? function(t7) {
      var e7 = String(t7).length;
      return f2 && f2 > 0 && e7 > f2 ? "" + String(t7).slice(0, f2).concat("...") : "" + t7;
    }(t6) : t6;
    return p({ key: t6 instanceof Date ? "" + t6.valueOf() : "" + t6, value: i4 }, e6(t6), k5, v4);
  }), textAlign: T5, textBaseline: P3 };
};
var T = function(t5, e6) {
  if (void 0 === t5 || "function" == typeof t5)
    return t5;
  if ("time" === e6.type) {
    var i3 = timeFormat(t5);
    return function(t6) {
      return i3(t6 instanceof Date ? t6 : new Date(t6));
    };
  }
  return format(t5);
};
var P = function(t5) {
  var e6, i3 = t5.width, n4 = t5.height, r3 = t5.scale, o2 = t5.axis, a4 = t5.values, l = (e6 = a4, Array.isArray(e6) ? a4 : void 0) || kn(r3, a4), s2 = "bandwidth" in r3 ? pn(r3) : r3, c3 = "x" === o2 ? l.map(function(t6) {
    var e7, i4;
    return { key: t6 instanceof Date ? "" + t6.valueOf() : "" + t6, x1: null != (e7 = s2(t6)) ? e7 : 0, x2: null != (i4 = s2(t6)) ? i4 : 0, y1: 0, y2: n4 };
  }) : l.map(function(t6) {
    var e7, n5;
    return { key: t6 instanceof Date ? "" + t6.valueOf() : "" + t6, x1: 0, x2: i3, y1: null != (e7 = s2(t6)) ? e7 : 0, y2: null != (n5 = s2(t6)) ? n5 : 0 };
  });
  return c3;
};
var S = (0, import_react.memo)(function(t5) {
  var e6, n4 = t5.value, r3 = t5.format, o2 = t5.lineX, l = t5.lineY, s2 = t5.onClick, f2 = t5.textBaseline, u3 = t5.textAnchor, d3 = t5.animatedProps, x3 = Et(), m3 = x3.axis.ticks.line, y = x3.axis.ticks.text, k5 = null != (e6 = null == r3 ? void 0 : r3(n4)) ? e6 : n4, v4 = (0, import_react.useMemo)(function() {
    var t6 = { opacity: d3.opacity };
    return s2 ? { style: p({}, t6, { cursor: "pointer" }), onClick: function(t7) {
      return s2(t7, k5);
    } } : { style: t6 };
  }, [d3.opacity, s2, k5]);
  return (0, import_jsx_runtime.jsxs)(animated.g, p({ transform: d3.transform }, v4, { children: [(0, import_jsx_runtime.jsx)("line", { x1: 0, x2: o2, y1: 0, y2: l, style: m3 }), y.outlineWidth > 0 && (0, import_jsx_runtime.jsx)(animated.text, { dominantBaseline: f2, textAnchor: u3, transform: d3.textTransform, style: y, strokeWidth: 2 * y.outlineWidth, stroke: y.outlineColor, strokeLinejoin: "round", children: "" + k5 }), (0, import_jsx_runtime.jsx)(animated.text, { dominantBaseline: f2, textAnchor: u3, transform: d3.textTransform, style: y, children: "" + k5 })] }));
});
var A = function(e6) {
  var r3 = e6.axis, o2 = e6.scale, s2 = e6.x, d3 = void 0 === s2 ? 0 : s2, x3 = e6.y, m3 = void 0 === x3 ? 0 : x3, y = e6.length, v4 = e6.ticksPosition, P3 = e6.tickValues, A2 = e6.tickSize, W5 = void 0 === A2 ? 5 : A2, O3 = e6.tickPadding, w5 = void 0 === O3 ? 5 : O3, B4 = e6.tickRotation, X4 = void 0 === B4 ? 0 : B4, Y4 = e6.format, C4 = e6.renderTick, z4 = void 0 === C4 ? S : C4, V3 = e6.truncateTickAt, j3 = e6.legend, D3 = e6.legendPosition, R3 = void 0 === D3 ? "end" : D3, E2 = e6.legendOffset, L3 = void 0 === E2 ? 0 : E2, q3 = e6.onClick, F = e6.ariaHidden, H3 = Et(), N2 = H3.axis.legend.text, I3 = (0, import_react.useMemo)(function() {
    return T(Y4, o2);
  }, [Y4, o2]), J4 = b({ axis: r3, scale: o2, ticksPosition: v4, tickValues: P3, tickSize: W5, tickPadding: w5, tickRotation: X4, truncateTickAt: V3 }), G = J4.ticks, K3 = J4.textAlign, M3 = J4.textBaseline, Q3 = null;
  if (void 0 !== j3) {
    var U2, Z2 = 0, $2 = 0, _3 = 0;
    "y" === r3 ? (_3 = -90, Z2 = L3, "start" === R3 ? (U2 = "start", $2 = y) : "middle" === R3 ? (U2 = "middle", $2 = y / 2) : "end" === R3 && (U2 = "end")) : ($2 = L3, "start" === R3 ? U2 = "start" : "middle" === R3 ? (U2 = "middle", Z2 = y / 2) : "end" === R3 && (U2 = "end", Z2 = y)), Q3 = (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [N2.outlineWidth > 0 && (0, import_jsx_runtime.jsx)("text", { transform: "translate(" + Z2 + ", " + $2 + ") rotate(" + _3 + ")", textAnchor: U2, style: p({ dominantBaseline: "central" }, N2), strokeWidth: 2 * N2.outlineWidth, stroke: N2.outlineColor, strokeLinejoin: "round", children: j3 }), (0, import_jsx_runtime.jsx)("text", { transform: "translate(" + Z2 + ", " + $2 + ") rotate(" + _3 + ")", textAnchor: U2, style: p({ dominantBaseline: "central" }, N2), children: j3 })] });
  }
  var tt = Zr(), et = tt.animate, it = tt.config, nt = useSpring({ transform: "translate(" + d3 + "," + m3 + ")", lineX2: "x" === r3 ? y : 0, lineY2: "x" === r3 ? 0 : y, config: it, immediate: !et }), rt = (0, import_react.useCallback)(function(t5) {
    return { opacity: 1, transform: "translate(" + t5.x + "," + t5.y + ")", textTransform: "translate(" + t5.textX + "," + t5.textY + ") rotate(" + X4 + ")" };
  }, [X4]), ot = (0, import_react.useCallback)(function(t5) {
    return { opacity: 0, transform: "translate(" + t5.x + "," + t5.y + ")", textTransform: "translate(" + t5.textX + "," + t5.textY + ") rotate(" + X4 + ")" };
  }, [X4]), at = useTransition(G, { keys: function(t5) {
    return t5.key;
  }, initial: rt, from: ot, enter: rt, update: rt, leave: { opacity: 0 }, config: it, immediate: !et });
  return (0, import_jsx_runtime.jsxs)(animated.g, { transform: nt.transform, "aria-hidden": F, children: [at(function(e7, i3, n4, r4) {
    return t2.createElement(z4, p({ tickIndex: r4, format: I3, rotate: X4, textBaseline: M3, textAnchor: K3, truncateTickAt: V3, animatedProps: e7 }, i3, q3 ? { onClick: q3 } : {}));
  }), (0, import_jsx_runtime.jsx)(animated.line, { style: H3.axis.domain.line, x1: 0, x2: nt.lineX2, y1: 0, y2: nt.lineY2 }), Q3] });
};
var W2 = (0, import_react.memo)(A);
var O = { ticksPosition: import_prop_types.default.oneOf(["before", "after"]), tickValues: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.instanceOf(Date)])), import_prop_types.default.string]), rotateOnTickLength: import_prop_types.default.shape({ angle: import_prop_types.default.number, length: import_prop_types.default.number }), tickSize: import_prop_types.default.number, tickPadding: import_prop_types.default.number, tickRotation: import_prop_types.default.number, format: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.string]), renderTick: import_prop_types.default.func, legend: import_prop_types.default.node, legendPosition: import_prop_types.default.oneOf(["start", "middle", "end"]), legendOffset: import_prop_types.default.number, ariaHidden: import_prop_types.default.bool };
var w2 = import_prop_types.default.shape(O);
var B = ["top", "right", "bottom", "left"];
var X2 = (0, import_react.memo)(function(t5) {
  var e6 = t5.xScale, i3 = t5.yScale, n4 = t5.width, r3 = t5.height, o2 = { top: t5.top, right: t5.right, bottom: t5.bottom, left: t5.left };
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: B.map(function(t6) {
    var a4 = o2[t6];
    if (!a4)
      return null;
    var l = "top" === t6 || "bottom" === t6;
    return (0, import_jsx_runtime.jsx)(W2, p({}, a4, { axis: l ? "x" : "y", x: "right" === t6 ? n4 : 0, y: "bottom" === t6 ? r3 : 0, scale: l ? e6 : i3, length: l ? n4 : r3, ticksPosition: "top" === t6 || "left" === t6 ? "before" : "after", truncateTickAt: a4.truncateTickAt }), t6);
  }) });
});
var Y2 = (0, import_react.memo)(function(t5) {
  var e6 = t5.animatedProps, i3 = Et();
  return (0, import_jsx_runtime.jsx)(animated.line, p({}, e6, i3.grid.line));
});
var C = (0, import_react.memo)(function(t5) {
  var e6 = t5.lines, i3 = Zr(), n4 = i3.animate, o2 = i3.config, a4 = useTransition(e6, { keys: function(t6) {
    return t6.key;
  }, initial: function(t6) {
    return { opacity: 1, x1: t6.x1, x2: t6.x2, y1: t6.y1, y2: t6.y2 };
  }, from: function(t6) {
    return { opacity: 0, x1: t6.x1, x2: t6.x2, y1: t6.y1, y2: t6.y2 };
  }, enter: function(t6) {
    return { opacity: 1, x1: t6.x1, x2: t6.x2, y1: t6.y1, y2: t6.y2 };
  }, update: function(t6) {
    return { opacity: 1, x1: t6.x1, x2: t6.x2, y1: t6.y1, y2: t6.y2 };
  }, leave: { opacity: 0 }, config: o2, immediate: !n4 });
  return (0, import_jsx_runtime.jsx)("g", { children: a4(function(t6, e7) {
    return (0, import_react.createElement)(Y2, p({}, e7, { key: e7.key, animatedProps: t6 }));
  }) });
});
var z = (0, import_react.memo)(function(t5) {
  var e6 = t5.width, n4 = t5.height, r3 = t5.xScale, o2 = t5.yScale, a4 = t5.xValues, l = t5.yValues, s2 = (0, import_react.useMemo)(function() {
    return !!r3 && P({ width: e6, height: n4, scale: r3, axis: "x", values: a4 });
  }, [r3, a4, e6, n4]), c3 = (0, import_react.useMemo)(function() {
    return !!o2 && P({ width: e6, height: n4, scale: o2, axis: "y", values: l });
  }, [n4, e6, o2, l]);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [s2 && (0, import_jsx_runtime.jsx)(C, { lines: s2 }), c3 && (0, import_jsx_runtime.jsx)(C, { lines: c3 })] });
});
var V = function(t5, e6) {
  var i3, n4 = e6.axis, r3 = e6.scale, o2 = e6.x, a4 = void 0 === o2 ? 0 : o2, l = e6.y, c3 = void 0 === l ? 0 : l, f2 = e6.length, u3 = e6.ticksPosition, d3 = e6.tickValues, x3 = e6.tickSize, m3 = void 0 === x3 ? 5 : x3, y = e6.tickPadding, h3 = void 0 === y ? 5 : y, g4 = e6.tickRotation, k5 = void 0 === g4 ? 0 : g4, v4 = e6.format, p4 = e6.legend, T5 = e6.legendPosition, P3 = void 0 === T5 ? "end" : T5, S4 = e6.legendOffset, A2 = void 0 === S4 ? 0 : S4, W5 = e6.theme, O3 = b({ axis: n4, scale: r3, ticksPosition: u3, tickValues: d3, tickSize: m3, tickPadding: h3, tickRotation: k5, engine: "canvas" }), w5 = O3.ticks, B4 = O3.textAlign, X4 = O3.textBaseline;
  t5.save(), t5.translate(a4, c3), t5.textAlign = B4, t5.textBaseline = X4;
  var Y4 = W5.axis.ticks.text;
  t5.font = (Y4.fontWeight ? Y4.fontWeight + " " : "") + Y4.fontSize + "px " + Y4.fontFamily, (null != (i3 = W5.axis.domain.line.strokeWidth) ? i3 : 0) > 0 && (t5.lineWidth = Number(W5.axis.domain.line.strokeWidth), t5.lineCap = "square", W5.axis.domain.line.stroke && (t5.strokeStyle = W5.axis.domain.line.stroke), t5.beginPath(), t5.moveTo(0, 0), t5.lineTo("x" === n4 ? f2 : 0, "x" === n4 ? 0 : f2), t5.stroke());
  var C4 = "function" == typeof v4 ? v4 : function(t6) {
    return "" + t6;
  };
  if (w5.forEach(function(e7) {
    var i4;
    (null != (i4 = W5.axis.ticks.line.strokeWidth) ? i4 : 0) > 0 && (t5.lineWidth = Number(W5.axis.ticks.line.strokeWidth), t5.lineCap = "square", W5.axis.ticks.line.stroke && (t5.strokeStyle = W5.axis.ticks.line.stroke), t5.beginPath(), t5.moveTo(e7.x, e7.y), t5.lineTo(e7.x + e7.lineX, e7.y + e7.lineY), t5.stroke());
    var n5 = C4(e7.value);
    t5.save(), t5.translate(e7.x + e7.textX, e7.y + e7.textY), t5.rotate(ni(k5)), Y4.outlineWidth > 0 && (t5.strokeStyle = Y4.outlineColor, t5.lineWidth = 2 * Y4.outlineWidth, t5.lineJoin = "round", t5.strokeText("" + n5, 0, 0)), W5.axis.ticks.text.fill && (t5.fillStyle = Y4.fill), t5.fillText("" + n5, 0, 0), t5.restore();
  }), void 0 !== p4) {
    var z4 = 0, V3 = 0, j3 = 0, D3 = "center";
    "y" === n4 ? (j3 = -90, z4 = A2, "start" === P3 ? (D3 = "start", V3 = f2) : "middle" === P3 ? (D3 = "center", V3 = f2 / 2) : "end" === P3 && (D3 = "end")) : (V3 = A2, "start" === P3 ? D3 = "start" : "middle" === P3 ? (D3 = "center", z4 = f2 / 2) : "end" === P3 && (D3 = "end", z4 = f2)), t5.translate(z4, V3), t5.rotate(ni(j3)), t5.font = (W5.axis.legend.text.fontWeight ? W5.axis.legend.text.fontWeight + " " : "") + W5.axis.legend.text.fontSize + "px " + W5.axis.legend.text.fontFamily, W5.axis.legend.text.fill && (t5.fillStyle = W5.axis.legend.text.fill), t5.textAlign = D3, t5.textBaseline = "middle", t5.fillText(p4, 0, 0);
  }
  t5.restore();
};
var j = function(t5, e6) {
  var i3 = e6.xScale, n4 = e6.yScale, r3 = e6.width, o2 = e6.height, a4 = e6.top, l = e6.right, s2 = e6.bottom, c3 = e6.left, f2 = e6.theme, u3 = { top: a4, right: l, bottom: s2, left: c3 };
  B.forEach(function(e7) {
    var a5 = u3[e7];
    if (!a5)
      return null;
    var l2 = "top" === e7 || "bottom" === e7, s3 = "top" === e7 || "left" === e7 ? "before" : "after", c4 = l2 ? i3 : n4, d3 = T(a5.format, c4);
    V(t5, p({}, a5, { axis: l2 ? "x" : "y", x: "right" === e7 ? r3 : 0, y: "bottom" === e7 ? o2 : 0, scale: c4, format: d3, length: l2 ? r3 : o2, ticksPosition: s3, theme: f2 }));
  });
};
var D = function(t5, e6) {
  var i3 = e6.width, n4 = e6.height, r3 = e6.scale, o2 = e6.axis, a4 = e6.values;
  P({ width: i3, height: n4, scale: r3, axis: o2, values: a4 }).forEach(function(e7) {
    t5.beginPath(), t5.moveTo(e7.x1, e7.y1), t5.lineTo(e7.x2, e7.y2), t5.stroke();
  });
};

// node_modules/@nivo/annotations/dist/nivo-annotations.es.js
var import_react2 = __toESM(require_react());
var import_filter = __toESM(require_filter());
var import_isNumber = __toESM(require_isNumber());
var import_omit = __toESM(require_omit());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function g2() {
  return g2 = Object.assign ? Object.assign.bind() : function(t5) {
    for (var n4 = 1; n4 < arguments.length; n4++) {
      var i3 = arguments[n4];
      for (var o2 in i3)
        Object.prototype.hasOwnProperty.call(i3, o2) && (t5[o2] = i3[o2]);
    }
    return t5;
  }, g2.apply(this, arguments);
}
var k3 = { dotSize: 4, noteWidth: 120, noteTextOffset: 8, animate: true };
var W3 = function(n4) {
  var i3 = typeof n4;
  return (0, import_react2.isValidElement)(n4) || "string" === i3 || "function" === i3 || "object" === i3;
};
var v2 = function(t5) {
  var n4 = typeof t5;
  return "string" === n4 || "function" === n4;
};
var b2 = function(t5) {
  return "circle" === t5.type;
};
var w3 = function(t5) {
  return "dot" === t5.type;
};
var z2 = function(t5) {
  return "rect" === t5.type;
};
var P2 = function(t5) {
  var n4 = t5.data, i3 = t5.annotations, e6 = t5.getPosition, r3 = t5.getDimensions;
  return i3.reduce(function(t6, i4) {
    var s2 = i4.offset || 0;
    return [].concat(t6, (0, import_filter.default)(n4, i4.match).map(function(t7) {
      var n5 = e6(t7), o2 = r3(t7);
      return (b2(i4) || z2(i4)) && (o2.size = o2.size + 2 * s2, o2.width = o2.width + 2 * s2, o2.height = o2.height + 2 * s2), g2({}, (0, import_omit.default)(i4, ["match", "offset"]), n5, o2, { size: i4.size || o2.size, datum: t7 });
    }));
  }, []);
};
var C2 = function(t5, n4, i3, o2) {
  var e6 = Math.atan2(o2 - n4, i3 - t5);
  return si(oi(e6));
};
var O2 = function(t5) {
  var n4, i3, o2 = t5.x, a4 = t5.y, r3 = t5.noteX, s2 = t5.noteY, h3 = t5.noteWidth, d3 = void 0 === h3 ? k3.noteWidth : h3, c3 = t5.noteTextOffset, f2 = void 0 === c3 ? k3.noteTextOffset : c3;
  if ((0, import_isNumber.default)(r3))
    n4 = o2 + r3;
  else {
    if (void 0 === r3.abs)
      throw new Error("noteX should be either a number or an object containing an 'abs' property");
    n4 = r3.abs;
  }
  if ((0, import_isNumber.default)(s2))
    i3 = a4 + s2;
  else {
    if (void 0 === s2.abs)
      throw new Error("noteY should be either a number or an object containing an 'abs' property");
    i3 = s2.abs;
  }
  var y = o2, x3 = a4, m3 = C2(o2, a4, n4, i3);
  if (b2(t5)) {
    var p4 = li(ni(m3), t5.size / 2);
    y += p4.x, x3 += p4.y;
  }
  if (z2(t5)) {
    var g4 = Math.round((m3 + 90) / 45) % 8;
    0 === g4 && (x3 -= t5.height / 2), 1 === g4 && (y += t5.width / 2, x3 -= t5.height / 2), 2 === g4 && (y += t5.width / 2), 3 === g4 && (y += t5.width / 2, x3 += t5.height / 2), 4 === g4 && (x3 += t5.height / 2), 5 === g4 && (y -= t5.width / 2, x3 += t5.height / 2), 6 === g4 && (y -= t5.width / 2), 7 === g4 && (y -= t5.width / 2, x3 -= t5.height / 2);
  }
  var W5 = n4, v4 = n4;
  return (m3 + 90) % 360 > 180 ? (W5 -= d3, v4 -= d3) : v4 += d3, { points: [[y, x3], [n4, i3], [v4, i3]], text: [W5, i3 - f2], angle: m3 + 90 };
};
var S2 = function(t5) {
  var i3 = t5.data, o2 = t5.annotations, e6 = t5.getPosition, a4 = t5.getDimensions;
  return (0, import_react2.useMemo)(function() {
    return P2({ data: i3, annotations: o2, getPosition: e6, getDimensions: a4 });
  }, [i3, o2, e6, a4]);
};
var j2 = function(t5) {
  var i3 = t5.annotations;
  return (0, import_react2.useMemo)(function() {
    return i3.map(function(t6) {
      return g2({}, t6, { computed: O2(g2({}, t6)) });
    });
  }, [i3]);
};
var M = function(t5) {
  return (0, import_react2.useMemo)(function() {
    return O2(t5);
  }, [t5]);
};
var T2 = function(t5) {
  var n4 = t5.datum, o2 = t5.x, e6 = t5.y, r3 = t5.note, s2 = Et(), l = Zr(), u3 = l.animate, c3 = l.config, k5 = useSpring({ x: o2, y: e6, config: c3, immediate: !u3 });
  return "function" == typeof r3 ? (0, import_react2.createElement)(r3, { x: o2, y: e6, datum: n4 }) : (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [s2.annotations.text.outlineWidth > 0 && (0, import_jsx_runtime2.jsx)(animated.text, { x: k5.x, y: k5.y, style: g2({}, s2.annotations.text, { strokeLinejoin: "round", strokeWidth: 2 * s2.annotations.text.outlineWidth, stroke: s2.annotations.text.outlineColor }), children: r3 }), (0, import_jsx_runtime2.jsx)(animated.text, { x: k5.x, y: k5.y, style: (0, import_omit.default)(s2.annotations.text, ["outlineWidth", "outlineColor"]), children: r3 })] });
};
var E = function(t5) {
  var i3 = t5.points, o2 = t5.isOutline, e6 = void 0 !== o2 && o2, a4 = Et(), r3 = (0, import_react2.useMemo)(function() {
    var t6 = i3[0];
    return i3.slice(1).reduce(function(t7, n4) {
      return t7 + " L" + n4[0] + "," + n4[1];
    }, "M" + t6[0] + "," + t6[1]);
  }, [i3]), s2 = $r(r3);
  if (e6 && a4.annotations.link.outlineWidth <= 0)
    return null;
  var l = g2({}, a4.annotations.link);
  return e6 && (l.strokeLinecap = "square", l.strokeWidth = a4.annotations.link.strokeWidth + 2 * a4.annotations.link.outlineWidth, l.stroke = a4.annotations.link.outlineColor, l.opacity = a4.annotations.link.outlineOpacity), (0, import_jsx_runtime2.jsx)(animated.path, { fill: "none", d: s2, style: l });
};
var I = function(t5) {
  var n4 = t5.x, i3 = t5.y, o2 = t5.size, e6 = Et(), a4 = Zr(), r3 = a4.animate, s2 = a4.config, l = useSpring({ x: n4, y: i3, radius: o2 / 2, config: s2, immediate: !r3 });
  return (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [e6.annotations.outline.outlineWidth > 0 && (0, import_jsx_runtime2.jsx)(animated.circle, { cx: l.x, cy: l.y, r: l.radius, style: g2({}, e6.annotations.outline, { fill: "none", strokeWidth: e6.annotations.outline.strokeWidth + 2 * e6.annotations.outline.outlineWidth, stroke: e6.annotations.outline.outlineColor, opacity: e6.annotations.outline.outlineOpacity }) }), (0, import_jsx_runtime2.jsx)(animated.circle, { cx: l.x, cy: l.y, r: l.radius, style: e6.annotations.outline })] });
};
var D2 = function(t5) {
  var n4 = t5.x, i3 = t5.y, o2 = t5.size, e6 = void 0 === o2 ? k3.dotSize : o2, a4 = Et(), r3 = Zr(), s2 = r3.animate, l = r3.config, u3 = useSpring({ x: n4, y: i3, radius: e6 / 2, config: l, immediate: !s2 });
  return (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [a4.annotations.outline.outlineWidth > 0 && (0, import_jsx_runtime2.jsx)(animated.circle, { cx: u3.x, cy: u3.y, r: u3.radius, style: g2({}, a4.annotations.outline, { fill: "none", strokeWidth: 2 * a4.annotations.outline.outlineWidth, stroke: a4.annotations.outline.outlineColor, opacity: a4.annotations.outline.outlineOpacity }) }), (0, import_jsx_runtime2.jsx)(animated.circle, { cx: u3.x, cy: u3.y, r: u3.radius, style: a4.annotations.symbol })] });
};
var L2 = function(t5) {
  var n4 = t5.x, i3 = t5.y, o2 = t5.width, e6 = t5.height, a4 = t5.borderRadius, r3 = void 0 === a4 ? 6 : a4, s2 = Et(), l = Zr(), u3 = l.animate, c3 = l.config, k5 = useSpring({ x: n4 - o2 / 2, y: i3 - e6 / 2, width: o2, height: e6, config: c3, immediate: !u3 });
  return (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [s2.annotations.outline.outlineWidth > 0 && (0, import_jsx_runtime2.jsx)(animated.rect, { x: k5.x, y: k5.y, rx: r3, ry: r3, width: k5.width, height: k5.height, style: g2({}, s2.annotations.outline, { fill: "none", strokeWidth: s2.annotations.outline.strokeWidth + 2 * s2.annotations.outline.outlineWidth, stroke: s2.annotations.outline.outlineColor, opacity: s2.annotations.outline.outlineOpacity }) }), (0, import_jsx_runtime2.jsx)(animated.rect, { x: k5.x, y: k5.y, rx: r3, ry: r3, width: k5.width, height: k5.height, style: s2.annotations.outline })] });
};
var R = function(t5) {
  var n4 = t5.datum, i3 = t5.x, o2 = t5.y, e6 = t5.note, a4 = M(t5);
  if (!W3(e6))
    throw new Error("note should be a valid react element");
  return (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [(0, import_jsx_runtime2.jsx)(E, { points: a4.points, isOutline: true }), b2(t5) && (0, import_jsx_runtime2.jsx)(I, { x: i3, y: o2, size: t5.size }), w3(t5) && (0, import_jsx_runtime2.jsx)(D2, { x: i3, y: o2, size: t5.size }), z2(t5) && (0, import_jsx_runtime2.jsx)(L2, { x: i3, y: o2, width: t5.width, height: t5.height, borderRadius: t5.borderRadius }), (0, import_jsx_runtime2.jsx)(E, { points: a4.points }), (0, import_jsx_runtime2.jsx)(T2, { datum: n4, x: a4.text[0], y: a4.text[1], note: e6 })] });
};
var q = function(t5, n4) {
  n4.forEach(function(n5, i3) {
    var o2 = n5[0], e6 = n5[1];
    0 === i3 ? t5.moveTo(o2, e6) : t5.lineTo(o2, e6);
  });
};
var J2 = function(t5, n4) {
  var i3 = n4.annotations, o2 = n4.theme;
  0 !== i3.length && (t5.save(), i3.forEach(function(n5) {
    if (!v2(n5.note))
      throw new Error("note is invalid for canvas implementation");
    o2.annotations.link.outlineWidth > 0 && (t5.lineCap = "square", t5.strokeStyle = o2.annotations.link.outlineColor, t5.lineWidth = o2.annotations.link.strokeWidth + 2 * o2.annotations.link.outlineWidth, t5.beginPath(), q(t5, n5.computed.points), t5.stroke(), t5.lineCap = "butt"), b2(n5) && o2.annotations.outline.outlineWidth > 0 && (t5.strokeStyle = o2.annotations.outline.outlineColor, t5.lineWidth = o2.annotations.outline.strokeWidth + 2 * o2.annotations.outline.outlineWidth, t5.beginPath(), t5.arc(n5.x, n5.y, n5.size / 2, 0, 2 * Math.PI), t5.stroke()), w3(n5) && o2.annotations.symbol.outlineWidth > 0 && (t5.strokeStyle = o2.annotations.symbol.outlineColor, t5.lineWidth = 2 * o2.annotations.symbol.outlineWidth, t5.beginPath(), t5.arc(n5.x, n5.y, n5.size / 2, 0, 2 * Math.PI), t5.stroke()), z2(n5) && o2.annotations.outline.outlineWidth > 0 && (t5.strokeStyle = o2.annotations.outline.outlineColor, t5.lineWidth = o2.annotations.outline.strokeWidth + 2 * o2.annotations.outline.outlineWidth, t5.beginPath(), t5.rect(n5.x - n5.width / 2, n5.y - n5.height / 2, n5.width, n5.height), t5.stroke()), t5.strokeStyle = o2.annotations.link.stroke, t5.lineWidth = o2.annotations.link.strokeWidth, t5.beginPath(), q(t5, n5.computed.points), t5.stroke(), b2(n5) && (t5.strokeStyle = o2.annotations.outline.stroke, t5.lineWidth = o2.annotations.outline.strokeWidth, t5.beginPath(), t5.arc(n5.x, n5.y, n5.size / 2, 0, 2 * Math.PI), t5.stroke()), w3(n5) && (t5.fillStyle = o2.annotations.symbol.fill, t5.beginPath(), t5.arc(n5.x, n5.y, n5.size / 2, 0, 2 * Math.PI), t5.fill()), z2(n5) && (t5.strokeStyle = o2.annotations.outline.stroke, t5.lineWidth = o2.annotations.outline.strokeWidth, t5.beginPath(), t5.rect(n5.x - n5.width / 2, n5.y - n5.height / 2, n5.width, n5.height), t5.stroke()), "function" == typeof n5.note ? n5.note(t5, { datum: n5.datum, x: n5.computed.text[0], y: n5.computed.text[1], theme: o2 }) : (t5.font = o2.annotations.text.fontSize + "px " + o2.annotations.text.fontFamily, t5.textAlign = "left", t5.textBaseline = "alphabetic", t5.fillStyle = o2.annotations.text.fill, t5.strokeStyle = o2.annotations.text.outlineColor, t5.lineWidth = 2 * o2.annotations.text.outlineWidth, o2.annotations.text.outlineWidth > 0 && (t5.lineJoin = "round", t5.strokeText(n5.note, n5.computed.text[0], n5.computed.text[1]), t5.lineJoin = "miter"), t5.fillText(n5.note, n5.computed.text[0], n5.computed.text[1]));
  }), t5.restore());
};

// node_modules/@nivo/bar/dist/nivo-bar.es.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());

// node_modules/@nivo/legends/dist/nivo-legends.es.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var a3 = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var m2 = function(e6) {
  var i3 = e6.x, n4 = e6.y, o2 = e6.size, r3 = e6.fill, l = e6.opacity, a4 = void 0 === l ? 1 : l, c3 = e6.borderWidth, s2 = void 0 === c3 ? 0 : c3, d3 = e6.borderColor;
  return (0, import_jsx_runtime3.jsx)("circle", { r: o2 / 2, cx: i3 + o2 / 2, cy: n4 + o2 / 2, fill: r3, opacity: a4, strokeWidth: s2, stroke: void 0 === d3 ? "transparent" : d3, style: { pointerEvents: "none" } });
};
var f = function(e6) {
  var i3 = e6.x, n4 = e6.y, o2 = e6.size, r3 = e6.fill, l = e6.opacity, a4 = void 0 === l ? 1 : l, c3 = e6.borderWidth, s2 = void 0 === c3 ? 0 : c3, d3 = e6.borderColor;
  return (0, import_jsx_runtime3.jsx)("g", { transform: "translate(" + i3 + "," + n4 + ")", children: (0, import_jsx_runtime3.jsx)("path", { d: "\n                    M" + o2 / 2 + " 0\n                    L" + 0.8 * o2 + " " + o2 / 2 + "\n                    L" + o2 / 2 + " " + o2 + "\n                    L" + 0.2 * o2 + " " + o2 / 2 + "\n                    L" + o2 / 2 + " 0\n                ", fill: r3, opacity: a4, strokeWidth: s2, stroke: void 0 === d3 ? "transparent" : d3, style: { pointerEvents: "none" } }) });
};
var u = function(e6) {
  var i3 = e6.x, n4 = e6.y, o2 = e6.size, r3 = e6.fill, l = e6.opacity, a4 = void 0 === l ? 1 : l, c3 = e6.borderWidth, s2 = void 0 === c3 ? 0 : c3, d3 = e6.borderColor;
  return (0, import_jsx_runtime3.jsx)("rect", { x: i3, y: n4, fill: r3, opacity: a4, strokeWidth: s2, stroke: void 0 === d3 ? "transparent" : d3, width: o2, height: o2, style: { pointerEvents: "none" } });
};
var v3 = function(e6) {
  var i3 = e6.x, n4 = e6.y, o2 = e6.size, r3 = e6.fill, l = e6.opacity, a4 = void 0 === l ? 1 : l, c3 = e6.borderWidth, s2 = void 0 === c3 ? 0 : c3, d3 = e6.borderColor;
  return (0, import_jsx_runtime3.jsx)("g", { transform: "translate(" + i3 + "," + n4 + ")", children: (0, import_jsx_runtime3.jsx)("path", { d: "\n                M" + o2 / 2 + " 0\n                L" + o2 + " " + o2 + "\n                L0 " + o2 + "\n                L" + o2 / 2 + " 0\n            ", fill: r3, opacity: a4, strokeWidth: s2, stroke: void 0 === d3 ? "transparent" : d3, style: { pointerEvents: "none" } }) });
};
function p3() {
  return p3 = Object.assign ? Object.assign.bind() : function(t5) {
    for (var e6 = 1; e6 < arguments.length; e6++) {
      var i3 = arguments[e6];
      for (var n4 in i3)
        Object.prototype.hasOwnProperty.call(i3, n4) && (t5[n4] = i3[n4]);
    }
    return t5;
  }, p3.apply(this, arguments);
}
var b3 = { top: 0, right: 0, bottom: 0, left: 0 };
var k4 = function(t5) {
  var e6, i3 = t5.direction, n4 = t5.itemsSpacing, o2 = t5.padding, r3 = t5.itemCount, l = t5.itemWidth, a4 = t5.itemHeight;
  if ("number" != typeof o2 && ("object" != typeof (e6 = o2) || Array.isArray(e6) || null === e6))
    throw new Error("Invalid property padding, must be one of: number, object");
  var c3 = "number" == typeof o2 ? { top: o2, right: o2, bottom: o2, left: o2 } : p3({}, b3, o2), s2 = c3.left + c3.right, d3 = c3.top + c3.bottom, h3 = l + s2, g4 = a4 + d3, m3 = (r3 - 1) * n4;
  return "row" === i3 ? h3 = l * r3 + m3 + s2 : "column" === i3 && (g4 = a4 * r3 + m3 + d3), { width: h3, height: g4, padding: c3 };
};
var x2 = function(t5) {
  var e6 = t5.anchor, i3 = t5.translateX, n4 = t5.translateY, o2 = t5.containerWidth, r3 = t5.containerHeight, l = t5.width, a4 = t5.height, c3 = i3, s2 = n4;
  switch (e6) {
    case "top":
      c3 += (o2 - l) / 2;
      break;
    case "top-right":
      c3 += o2 - l;
      break;
    case "right":
      c3 += o2 - l, s2 += (r3 - a4) / 2;
      break;
    case "bottom-right":
      c3 += o2 - l, s2 += r3 - a4;
      break;
    case "bottom":
      c3 += (o2 - l) / 2, s2 += r3 - a4;
      break;
    case "bottom-left":
      s2 += r3 - a4;
      break;
    case "left":
      s2 += (r3 - a4) / 2;
      break;
    case "center":
      c3 += (o2 - l) / 2, s2 += (r3 - a4) / 2;
  }
  return { x: c3, y: s2 };
};
var S3 = function(t5) {
  var e6, i3, n4, o2, r3, l, a4 = t5.direction, c3 = t5.justify, s2 = t5.symbolSize, d3 = t5.symbolSpacing, h3 = t5.width, g4 = t5.height;
  switch (a4) {
    case "left-to-right":
      e6 = 0, i3 = (g4 - s2) / 2, o2 = g4 / 2, l = "central", c3 ? (n4 = h3, r3 = "end") : (n4 = s2 + d3, r3 = "start");
      break;
    case "right-to-left":
      e6 = h3 - s2, i3 = (g4 - s2) / 2, o2 = g4 / 2, l = "central", c3 ? (n4 = 0, r3 = "start") : (n4 = h3 - s2 - d3, r3 = "end");
      break;
    case "top-to-bottom":
      e6 = (h3 - s2) / 2, i3 = 0, n4 = h3 / 2, r3 = "middle", c3 ? (o2 = g4, l = "alphabetic") : (o2 = s2 + d3, l = "text-before-edge");
      break;
    case "bottom-to-top":
      e6 = (h3 - s2) / 2, i3 = g4 - s2, n4 = h3 / 2, r3 = "middle", c3 ? (o2 = 0, l = "text-before-edge") : (o2 = g4 - s2 - d3, l = "alphabetic");
  }
  return { symbolX: e6, symbolY: i3, labelX: n4, labelY: o2, labelAnchor: r3, labelAlignment: l };
};
var C3 = { circle: m2, diamond: f, square: u, triangle: v3 };
var B2 = function(i3) {
  var n4, r3, l, c3, h3, g4, m3, f2, u3, v4, y, b4 = i3.x, k5 = i3.y, x3 = i3.width, A2 = i3.height, W5 = i3.data, O3 = i3.direction, z4 = void 0 === O3 ? "left-to-right" : O3, B4 = i3.justify, w5 = void 0 !== B4 && B4, X4 = i3.textColor, Y4 = i3.background, H3 = void 0 === Y4 ? "transparent" : Y4, E2 = i3.opacity, j3 = void 0 === E2 ? 1 : E2, T5 = i3.symbolShape, L3 = void 0 === T5 ? "square" : T5, M3 = i3.symbolSize, F = void 0 === M3 ? 16 : M3, P3 = i3.symbolSpacing, R3 = void 0 === P3 ? 8 : P3, q3 = i3.symbolBorderWidth, V3 = void 0 === q3 ? 0 : q3, D3 = i3.symbolBorderColor, G = void 0 === D3 ? "transparent" : D3, I3 = i3.onClick, N2 = i3.onMouseEnter, _3 = i3.onMouseLeave, J4 = i3.toggleSerie, K3 = i3.effects, Q3 = (0, import_react3.useState)({}), U2 = Q3[0], Z2 = Q3[1], $2 = Et(), tt = (0, import_react3.useCallback)(function(t5) {
    if (K3) {
      var e6 = K3.filter(function(t6) {
        return "hover" === t6.on;
      }).reduce(function(t6, e7) {
        return p3({}, t6, e7.style);
      }, {});
      Z2(e6);
    }
    null == N2 || N2(W5, t5);
  }, [N2, W5, K3]), et = (0, import_react3.useCallback)(function(t5) {
    if (K3) {
      var e6 = K3.filter(function(t6) {
        return "hover" !== t6.on;
      }).reduce(function(t6, e7) {
        return p3({}, t6, e7.style);
      }, {});
      Z2(e6);
    }
    null == _3 || _3(W5, t5);
  }, [_3, W5, K3]), it = S3({ direction: z4, justify: w5, symbolSize: null != (n4 = U2.symbolSize) ? n4 : F, symbolSpacing: R3, width: x3, height: A2 }), nt = it.symbolX, ot = it.symbolY, rt = it.labelX, lt = it.labelY, at = it.labelAnchor, ct = it.labelAlignment, st = [I3, N2, _3, J4].some(function(t5) {
    return void 0 !== t5;
  }), dt = "function" == typeof L3 ? L3 : C3[L3];
  return (0, import_jsx_runtime3.jsxs)("g", { transform: "translate(" + b4 + "," + k5 + ")", style: { opacity: null != (r3 = U2.itemOpacity) ? r3 : j3 }, children: [(0, import_jsx_runtime3.jsx)("rect", { width: x3, height: A2, fill: null != (l = U2.itemBackground) ? l : H3, style: { cursor: st ? "pointer" : "auto" }, onClick: function(t5) {
    null == I3 || I3(W5, t5), null == J4 || J4(W5.id);
  }, onMouseEnter: tt, onMouseLeave: et }), a3.createElement(dt, p3({ id: W5.id, x: nt, y: ot, size: null != (c3 = U2.symbolSize) ? c3 : F, fill: null != (h3 = null != (g4 = W5.fill) ? g4 : W5.color) ? h3 : "black", borderWidth: null != (m3 = U2.symbolBorderWidth) ? m3 : V3, borderColor: null != (f2 = U2.symbolBorderColor) ? f2 : G }, W5.hidden ? $2.legends.hidden.symbol : void 0)), (0, import_jsx_runtime3.jsx)("text", { textAnchor: at, style: p3({}, $2.legends.text, { fill: null != (u3 = null != (v4 = null != (y = U2.itemTextColor) ? y : X4) ? v4 : $2.legends.text.fill) ? u3 : "black", dominantBaseline: ct, pointerEvents: "none", userSelect: "none" }, W5.hidden ? $2.legends.hidden.text : void 0), x: rt, y: lt, children: W5.label })] });
};
var w4 = function(e6) {
  var i3 = e6.data, n4 = e6.x, o2 = e6.y, r3 = e6.direction, l = e6.padding, a4 = void 0 === l ? 0 : l, c3 = e6.justify, s2 = e6.effects, d3 = e6.itemWidth, h3 = e6.itemHeight, g4 = e6.itemDirection, m3 = void 0 === g4 ? "left-to-right" : g4, f2 = e6.itemsSpacing, u3 = void 0 === f2 ? 0 : f2, v4 = e6.itemTextColor, p4 = e6.itemBackground, y = void 0 === p4 ? "transparent" : p4, b4 = e6.itemOpacity, x3 = void 0 === b4 ? 1 : b4, S4 = e6.symbolShape, A2 = e6.symbolSize, W5 = e6.symbolSpacing, O3 = e6.symbolBorderWidth, z4 = e6.symbolBorderColor, C4 = e6.onClick, w5 = e6.onMouseEnter, X4 = e6.onMouseLeave, Y4 = e6.toggleSerie, H3 = k4({ itemCount: i3.length, itemWidth: d3, itemHeight: h3, itemsSpacing: u3, direction: r3, padding: a4 }).padding, E2 = "row" === r3 ? d3 + u3 : 0, j3 = "column" === r3 ? h3 + u3 : 0;
  return (0, import_jsx_runtime3.jsx)("g", { transform: "translate(" + n4 + "," + o2 + ")", children: i3.map(function(e7, i4) {
    return (0, import_jsx_runtime3.jsx)(B2, { data: e7, x: i4 * E2 + H3.left, y: i4 * j3 + H3.top, width: d3, height: h3, direction: m3, justify: c3, effects: s2, textColor: v4, background: y, opacity: x3, symbolShape: S4, symbolSize: A2, symbolSpacing: W5, symbolBorderWidth: O3, symbolBorderColor: z4, onClick: C4, onMouseEnter: w5, onMouseLeave: X4, toggleSerie: Y4 }, i4);
  }) });
};
var X3 = function(e6) {
  var i3 = e6.data, n4 = e6.containerWidth, o2 = e6.containerHeight, r3 = e6.translateX, l = void 0 === r3 ? 0 : r3, a4 = e6.translateY, c3 = void 0 === a4 ? 0 : a4, s2 = e6.anchor, d3 = e6.direction, h3 = e6.padding, g4 = void 0 === h3 ? 0 : h3, m3 = e6.justify, f2 = e6.itemsSpacing, u3 = void 0 === f2 ? 0 : f2, v4 = e6.itemWidth, p4 = e6.itemHeight, y = e6.itemDirection, b4 = e6.itemTextColor, S4 = e6.itemBackground, A2 = e6.itemOpacity, W5 = e6.symbolShape, O3 = e6.symbolSize, z4 = e6.symbolSpacing, C4 = e6.symbolBorderWidth, B4 = e6.symbolBorderColor, X4 = e6.onClick, Y4 = e6.onMouseEnter, H3 = e6.onMouseLeave, E2 = e6.toggleSerie, j3 = e6.effects, T5 = k4({ itemCount: i3.length, itemsSpacing: u3, itemWidth: v4, itemHeight: p4, direction: d3, padding: g4 }), L3 = T5.width, M3 = T5.height, F = x2({ anchor: s2, translateX: l, translateY: c3, containerWidth: n4, containerHeight: o2, width: L3, height: M3 }), P3 = F.x, R3 = F.y;
  return (0, import_jsx_runtime3.jsx)(w4, { data: i3, x: P3, y: R3, direction: d3, padding: g4, justify: m3, effects: j3, itemsSpacing: u3, itemWidth: v4, itemHeight: p4, itemDirection: y, itemTextColor: b4, itemBackground: S4, itemOpacity: A2, symbolShape: W5, symbolSize: O3, symbolSpacing: z4, symbolBorderWidth: C4, symbolBorderColor: B4, onClick: X4, onMouseEnter: Y4, onMouseLeave: H3, toggleSerie: "boolean" == typeof E2 ? void 0 : E2 });
};
var Y3 = { start: "left", middle: "center", end: "right" };
var H = function(t5, e6) {
  var i3 = e6.data, n4 = e6.containerWidth, o2 = e6.containerHeight, r3 = e6.translateX, l = void 0 === r3 ? 0 : r3, a4 = e6.translateY, c3 = void 0 === a4 ? 0 : a4, s2 = e6.anchor, d3 = e6.direction, h3 = e6.padding, g4 = void 0 === h3 ? 0 : h3, m3 = e6.justify, f2 = void 0 !== m3 && m3, u3 = e6.itemsSpacing, v4 = void 0 === u3 ? 0 : u3, p4 = e6.itemWidth, y = e6.itemHeight, b4 = e6.itemDirection, A2 = void 0 === b4 ? "left-to-right" : b4, W5 = e6.itemTextColor, O3 = e6.symbolSize, z4 = void 0 === O3 ? 16 : O3, C4 = e6.symbolSpacing, B4 = void 0 === C4 ? 8 : C4, w5 = e6.theme, X4 = k4({ itemCount: i3.length, itemWidth: p4, itemHeight: y, itemsSpacing: v4, direction: d3, padding: g4 }), H3 = X4.width, E2 = X4.height, j3 = X4.padding, T5 = x2({ anchor: s2, translateX: l, translateY: c3, containerWidth: n4, containerHeight: o2, width: H3, height: E2 }), L3 = T5.x, M3 = T5.y, F = "row" === d3 ? p4 + v4 : 0, P3 = "column" === d3 ? y + v4 : 0;
  t5.save(), t5.translate(L3, M3), t5.font = w5.legends.text.fontSize + "px " + (w5.legends.text.fontFamily || "sans-serif"), i3.forEach(function(e7, i4) {
    var n5, o3, r4 = i4 * F + j3.left, l2 = i4 * P3 + j3.top, a5 = S3({ direction: A2, justify: f2, symbolSize: z4, symbolSpacing: B4, width: p4, height: y }), c4 = a5.symbolX, s3 = a5.symbolY, d4 = a5.labelX, h4 = a5.labelY, g5 = a5.labelAnchor, m4 = a5.labelAlignment;
    t5.fillStyle = null != (n5 = e7.color) ? n5 : "black", t5.fillRect(r4 + c4, l2 + s3, z4, z4), t5.textAlign = Y3[g5], "central" === m4 && (t5.textBaseline = "middle"), t5.fillStyle = null != (o3 = null != W5 ? W5 : w5.legends.text.fill) ? o3 : "black", t5.fillText(String(e7.label), r4 + d4, l2 + h4);
  }), t5.restore();
};
var T3 = { data: import_prop_types2.default.arrayOf(import_prop_types2.default.object), anchor: import_prop_types2.default.oneOf(["top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", "center"]).isRequired, translateX: import_prop_types2.default.number, translateY: import_prop_types2.default.number, direction: import_prop_types2.default.oneOf(["row", "column"]).isRequired, itemsSpacing: import_prop_types2.default.number, itemWidth: import_prop_types2.default.number.isRequired, itemHeight: import_prop_types2.default.number.isRequired, itemDirection: import_prop_types2.default.oneOf(["left-to-right", "right-to-left", "top-to-bottom", "bottom-to-top"]), itemTextColor: import_prop_types2.default.string, itemBackground: import_prop_types2.default.string, itemOpacity: import_prop_types2.default.number, symbolShape: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["circle", "diamond", "square", "triangle"]), import_prop_types2.default.func]), symbolSize: import_prop_types2.default.number, symbolSpacing: import_prop_types2.default.number, symbolBorderWidth: import_prop_types2.default.number, symbolBorderColor: import_prop_types2.default.string, onClick: import_prop_types2.default.func, onMouseEnter: import_prop_types2.default.func, onMouseLeave: import_prop_types2.default.func, effects: import_prop_types2.default.arrayOf(import_prop_types2.default.shape({ on: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["hover"])]).isRequired, style: import_prop_types2.default.shape({ itemTextColor: import_prop_types2.default.string, itemBackground: import_prop_types2.default.string, itemOpacity: import_prop_types2.default.number, symbolSize: import_prop_types2.default.number, symbolBorderWidth: import_prop_types2.default.number, symbolBorderColor: import_prop_types2.default.string }).isRequired })) };

// node_modules/@nivo/bar/dist/nivo-bar.es.js
var import_react4 = __toESM(require_react());
var import_uniqBy2 = __toESM(require_uniqBy());
function z3() {
  return z3 = Object.assign ? Object.assign.bind() : function(e6) {
    for (var a4 = 1; a4 < arguments.length; a4++) {
      var i3 = arguments[a4];
      for (var t5 in i3)
        Object.prototype.hasOwnProperty.call(i3, t5) && (e6[t5] = i3[t5]);
    }
    return e6;
  }, z3.apply(this, arguments);
}
function K2(e6, a4) {
  if (null == e6)
    return {};
  var i3, t5, n4 = {}, r3 = Object.keys(e6);
  for (t5 = 0; t5 < r3.length; t5++)
    i3 = r3[t5], a4.indexOf(i3) >= 0 || (n4[i3] = e6[i3]);
  return n4;
}
var N;
var J3 = function(e6) {
  var a4 = e6.bars, i3 = e6.annotations, t5 = S2({ data: a4, annotations: i3, getPosition: function(e7) {
    return { x: e7.x + e7.width / 2, y: e7.y + e7.height / 2 };
  }, getDimensions: function(e7) {
    var a5 = e7.height, i4 = e7.width;
    return { width: i4, height: a5, size: Math.max(i4, a5) };
  } });
  return (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: t5.map(function(e7, a5) {
    return (0, import_jsx_runtime4.jsx)(R, z3({}, e7), a5);
  }) });
};
var Q2 = function(e6) {
  var a4 = e6.width, i3 = e6.height, t5 = e6.legends, n4 = e6.toggleSerie;
  return (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: t5.map(function(e7, t6) {
    var r3, l = e7[0], o2 = e7[1];
    return (0, import_jsx_runtime4.jsx)(X3, z3({}, l, { containerWidth: a4, containerHeight: i3, data: null != (r3 = l.data) ? r3 : o2, toggleSerie: l.toggleSerie && "keys" === l.dataFrom ? n4 : void 0 }), t6);
  }) });
};
var U = ["data"];
var Z = function(e6) {
  var a4, i3 = e6.bar, t5 = i3.data, n4 = K2(i3, U), r3 = e6.style, l = r3.borderColor, o2 = r3.color, u3 = r3.height, s2 = r3.labelColor, h3 = r3.labelOpacity, g4 = r3.labelX, v4 = r3.labelY, f2 = r3.transform, m3 = r3.width, p4 = e6.borderRadius, x3 = e6.borderWidth, y = e6.label, S4 = e6.shouldRenderLabel, k5 = e6.isInteractive, L3 = e6.onClick, w5 = e6.onMouseEnter, C4 = e6.onMouseLeave, B4 = e6.tooltip, I3 = e6.isFocusable, T5 = e6.ariaLabel, R3 = e6.ariaLabelledBy, H3 = e6.ariaDescribedBy, F = Et(), Y4 = k(), D3 = Y4.showTooltipFromEvent, O3 = Y4.showTooltipAt, G = Y4.hideTooltip, A2 = (0, import_react4.useMemo)(function() {
    return function() {
      return (0, import_react4.createElement)(B4, z3({}, n4, t5));
    };
  }, [B4, n4, t5]), j3 = (0, import_react4.useCallback)(function(e7) {
    null == L3 || L3(z3({ color: n4.color }, t5), e7);
  }, [n4, t5, L3]), q3 = (0, import_react4.useCallback)(function(e7) {
    return D3(A2(), e7);
  }, [D3, A2]), N2 = (0, import_react4.useCallback)(function(e7) {
    null == w5 || w5(t5, e7), D3(A2(), e7);
  }, [t5, w5, D3, A2]), J4 = (0, import_react4.useCallback)(function(e7) {
    null == C4 || C4(t5, e7), G();
  }, [t5, G, C4]), Q3 = (0, import_react4.useCallback)(function() {
    O3(A2(), [n4.absX + n4.width / 2, n4.absY]);
  }, [O3, A2, n4]), Z2 = (0, import_react4.useCallback)(function() {
    G();
  }, [G]);
  return (0, import_jsx_runtime4.jsxs)(animated.g, { transform: f2, children: [(0, import_jsx_runtime4.jsx)(animated.rect, { width: to(m3, function(e7) {
    return Math.max(e7, 0);
  }), height: to(u3, function(e7) {
    return Math.max(e7, 0);
  }), rx: p4, ry: p4, fill: null != (a4 = t5.fill) ? a4 : o2, strokeWidth: x3, stroke: l, focusable: I3, tabIndex: I3 ? 0 : void 0, "aria-label": T5 ? T5(t5) : void 0, "aria-labelledby": R3 ? R3(t5) : void 0, "aria-describedby": H3 ? H3(t5) : void 0, onMouseEnter: k5 ? N2 : void 0, onMouseMove: k5 ? q3 : void 0, onMouseLeave: k5 ? J4 : void 0, onClick: k5 ? j3 : void 0, onFocus: k5 && I3 ? Q3 : void 0, onBlur: k5 && I3 ? Z2 : void 0 }), S4 && (0, import_jsx_runtime4.jsx)(animated.text, { x: g4, y: v4, textAnchor: "middle", dominantBaseline: "central", fillOpacity: h3, style: z3({}, F.labels.text, { pointerEvents: "none", fill: s2 }), children: y })] });
};
var $ = ["color", "label"];
var _2 = function(e6) {
  var a4 = e6.color, i3 = e6.label, t5 = K2(e6, $);
  return (0, import_jsx_runtime4.jsx)(w, { id: i3, value: t5.formattedValue, enableChip: true, color: a4 });
};
var ee = { indexBy: "id", keys: ["value"], groupMode: "stacked", layout: "vertical", reverse: false, minValue: "auto", maxValue: "auto", valueScale: { type: "linear" }, indexScale: { type: "band", round: true }, padding: 0.1, innerPadding: 0, axisBottom: {}, axisLeft: {}, enableGridX: false, enableGridY: true, enableLabel: true, label: "formattedValue", labelSkipWidth: 0, labelSkipHeight: 0, labelTextColor: { from: "theme", theme: "labels.text.fill" }, colorBy: "id", colors: { scheme: "nivo" }, borderRadius: 0, borderWidth: 0, borderColor: { from: "color" }, isInteractive: true, tooltip: _2, tooltipLabel: function(e6) {
  return e6.id + " - " + e6.indexValue;
}, legends: [], initialHiddenIds: [], annotations: [], markers: [] };
var ae = z3({}, ee, { layers: ["grid", "axes", "bars", "markers", "legends", "annotations"], barComponent: Z, defs: [], fill: [], animate: true, motionConfig: "default", role: "img", isFocusable: false });
var ie = z3({}, ee, { layers: ["grid", "axes", "bars", "legends", "annotations"], pixelRatio: "undefined" != typeof window && null != (N = window.devicePixelRatio) ? N : 1 });
var te = function(e6, a4, i3, t5, n4, r3) {
  return cn(t5, { all: e6.map(a4), min: 0, max: 0 }, n4, r3).padding(i3);
};
var ne = function(e6, a4) {
  return e6.map(function(e7) {
    return z3({}, a4.reduce(function(e8, a5) {
      return e8[a5] = null, e8;
    }, {}), e7);
  });
};
var re = function(e6) {
  return Object.keys(e6).reduce(function(a4, i3) {
    return e6[i3] && (a4[i3] = e6[i3]), a4;
  }, {});
};
var le = function(e6) {
  return [e6, Number(e6)];
};
var oe = ["layout", "minValue", "maxValue", "reverse", "width", "height", "padding", "innerPadding", "valueScale", "indexScale", "hiddenIds"];
var de = function(e6, a4) {
  return e6 > a4;
};
var ue = function(e6, a4) {
  return e6 < a4;
};
var ce = function(e6, a4) {
  return Array.from(" ".repeat(a4 - e6), function(a5, i3) {
    return e6 + i3;
  });
};
var se = function(e6) {
  return de(e6, 0) ? 0 : e6;
};
var he = function(e6, a4, i3, t5) {
  var n4 = e6.data, r3 = e6.formatValue, l = e6.getColor, o2 = e6.getIndex, d3 = e6.getTooltipLabel, u3 = e6.innerPadding, c3 = void 0 === u3 ? 0 : u3, s2 = e6.keys, h3 = e6.xScale, b4 = e6.yScale, g4 = e6.margin, v4 = i3 ? ue : de, f2 = n4.map(re), m3 = [];
  return s2.forEach(function(e7, i4) {
    return ce(0, h3.domain().length).forEach(function(u4) {
      var s3, p4, x3, y = le(n4[u4][e7]), S4 = y[0], k5 = y[1], L3 = o2(n4[u4]), w5 = (null != (s3 = h3(L3)) ? s3 : 0) + a4 * i4 + c3 * i4, C4 = v4(p4 = k5, 0) ? null != (x3 = b4(p4)) ? x3 : 0 : t5, V3 = function(e8, a5) {
        var i5;
        return v4(e8, 0) ? t5 - a5 : (null != (i5 = b4(e8)) ? i5 : 0) - t5;
      }(k5, C4), W5 = { id: e7, value: null === S4 ? S4 : k5, formattedValue: r3(k5), hidden: false, index: u4, indexValue: L3, data: f2[u4] };
      m3.push({ key: e7 + "." + W5.indexValue, index: m3.length, data: W5, x: w5, y: C4, absX: g4.left + w5, absY: g4.top + C4, width: a4, height: V3, color: l(W5), label: d3(W5) });
    });
  }), m3;
};
var be = function(e6, a4, i3, t5) {
  var n4 = e6.data, r3 = e6.formatValue, l = e6.getIndex, o2 = e6.getColor, d3 = e6.getTooltipLabel, u3 = e6.keys, c3 = e6.innerPadding, s2 = void 0 === c3 ? 0 : c3, h3 = e6.xScale, b4 = e6.yScale, g4 = e6.margin, v4 = i3 ? ue : de, f2 = n4.map(re), m3 = [];
  return u3.forEach(function(e7, i4) {
    return ce(0, b4.domain().length).forEach(function(u4) {
      var c4, p4, x3, y = le(n4[u4][e7]), S4 = y[0], k5 = y[1], L3 = l(n4[u4]), w5 = v4(p4 = k5, 0) ? t5 : null != (x3 = h3(p4)) ? x3 : 0, C4 = (null != (c4 = b4(L3)) ? c4 : 0) + a4 * i4 + s2 * i4, V3 = function(e8, a5) {
        var i5;
        return v4(e8, 0) ? (null != (i5 = h3(e8)) ? i5 : 0) - t5 : t5 - a5;
      }(k5, w5), W5 = { id: e7, value: null === S4 ? S4 : k5, formattedValue: r3(k5), hidden: false, index: u4, indexValue: L3, data: f2[u4] };
      m3.push({ key: e7 + "." + W5.indexValue, index: m3.length, data: W5, x: w5, y: C4, absX: g4.left + w5, absY: g4.top + C4, width: V3, height: a4, color: o2(W5), label: d3(W5) });
    });
  }), m3;
};
var ge = function(e6) {
  var a4, i3, t5 = e6.layout, n4 = e6.minValue, r3 = e6.maxValue, l = e6.reverse, o2 = e6.width, d3 = e6.height, u3 = e6.padding, c3 = void 0 === u3 ? 0 : u3, s2 = e6.innerPadding, h3 = void 0 === s2 ? 0 : s2, b4 = e6.valueScale, g4 = e6.indexScale, v4 = e6.hiddenIds, f2 = void 0 === v4 ? [] : v4, m3 = K2(e6, oe), p4 = m3.keys.filter(function(e7) {
    return !f2.includes(e7);
  }), x3 = ne(m3.data, p4), y = "vertical" === t5 ? ["y", "x", o2] : ["x", "y", d3], S4 = y[0], k5 = y[1], L3 = y[2], w5 = te(x3, m3.getIndex, c3, g4, L3, k5), C4 = z3({ max: r3, min: n4, reverse: l }, b4), V3 = "auto" === C4.min ? se : function(e7) {
    return e7;
  }, W5 = x3.reduce(function(e7, a5) {
    return [].concat(e7, p4.map(function(e8) {
      return a5[e8];
    }));
  }, []).filter(Boolean), M3 = V3(Math.min.apply(Math, W5)), B4 = (i3 = Math.max.apply(Math, W5), isFinite(i3) ? i3 : 0), I3 = cn(C4, { all: W5, min: M3, max: B4 }, "x" === S4 ? o2 : d3, S4), T5 = "vertical" === t5 ? [w5, I3] : [I3, w5], R3 = T5[0], H3 = T5[1], P3 = (w5.bandwidth() - h3 * (p4.length - 1)) / p4.length, E2 = [z3({}, m3, { data: x3, keys: p4, innerPadding: h3, xScale: R3, yScale: H3 }), P3, C4.reverse, null != (a4 = I3(0)) ? a4 : 0];
  return { xScale: R3, yScale: H3, bars: P3 > 0 ? "vertical" === t5 ? he.apply(void 0, E2) : be.apply(void 0, E2) : [] };
};
var ve = ["data", "layout", "minValue", "maxValue", "reverse", "width", "height", "padding", "valueScale", "indexScale", "hiddenIds"];
var fe = function e5(a4) {
  var i3;
  return a4.some(Array.isArray) ? e5((i3 = []).concat.apply(i3, a4)) : a4;
};
var me = function(e6, a4, i3) {
  var t5 = e6.formatValue, n4 = e6.getColor, r3 = e6.getIndex, l = e6.getTooltipLabel, o2 = e6.innerPadding, d3 = e6.stackedData, u3 = e6.xScale, c3 = e6.yScale, s2 = e6.margin, h3 = [];
  return d3.forEach(function(e7) {
    return u3.domain().forEach(function(d4, b4) {
      var g4, v4, f2 = e7[b4], m3 = null != (g4 = u3(r3(f2.data))) ? g4 : 0, p4 = (null != (v4 = function(e8) {
        return c3(e8[i3 ? 0 : 1]);
      }(f2)) ? v4 : 0) + 0.5 * o2, x3 = function(e8, a5) {
        var t6;
        return (null != (t6 = c3(e8[i3 ? 1 : 0])) ? t6 : 0) - a5;
      }(f2, p4) - o2, y = le(f2.data[e7.key]), S4 = y[0], k5 = y[1], L3 = { id: e7.key, value: null === S4 ? S4 : k5, formattedValue: t5(k5), hidden: false, index: b4, indexValue: d4, data: re(f2.data) };
      h3.push({ key: e7.key + "." + d4, index: h3.length, data: L3, x: m3, y: p4, absX: s2.left + m3, absY: s2.top + p4, width: a4, height: x3, color: n4(L3), label: l(L3) });
    });
  }), h3;
};
var pe = function(e6, a4, i3) {
  var t5 = e6.formatValue, n4 = e6.getColor, r3 = e6.getIndex, l = e6.getTooltipLabel, o2 = e6.innerPadding, d3 = e6.stackedData, u3 = e6.xScale, c3 = e6.yScale, s2 = e6.margin, h3 = [];
  return d3.forEach(function(e7) {
    return c3.domain().forEach(function(d4, b4) {
      var g4, v4, f2 = e7[b4], m3 = null != (g4 = c3(r3(f2.data))) ? g4 : 0, p4 = (null != (v4 = function(e8) {
        return u3(e8[i3 ? 1 : 0]);
      }(f2)) ? v4 : 0) + 0.5 * o2, x3 = function(e8, a5) {
        var t6;
        return (null != (t6 = u3(e8[i3 ? 0 : 1])) ? t6 : 0) - a5;
      }(f2, p4) - o2, y = le(f2.data[e7.key]), S4 = y[0], k5 = y[1], L3 = { id: e7.key, value: null === S4 ? S4 : k5, formattedValue: t5(k5), hidden: false, index: b4, indexValue: d4, data: re(f2.data) };
      h3.push({ key: e7.key + "." + d4, index: h3.length, data: L3, x: p4, y: m3, absX: s2.left + p4, absY: s2.top + m3, width: x3, height: a4, color: n4(L3), label: l(L3) });
    });
  }), h3;
};
var xe = function(e6) {
  var a4, i3 = e6.data, t5 = e6.layout, n4 = e6.minValue, r3 = e6.maxValue, l = e6.reverse, o2 = e6.width, d3 = e6.height, u3 = e6.padding, c3 = void 0 === u3 ? 0 : u3, s2 = e6.valueScale, h3 = e6.indexScale, b4 = e6.hiddenIds, g4 = void 0 === b4 ? [] : b4, v4 = K2(e6, ve), f2 = v4.keys.filter(function(e7) {
    return !g4.includes(e7);
  }), m3 = stack_default().keys(f2).offset(diverging_default)(ne(i3, f2)), p4 = "vertical" === t5 ? ["y", "x", o2] : ["x", "y", d3], x3 = p4[0], y = p4[1], S4 = p4[2], k5 = te(i3, v4.getIndex, c3, h3, S4, y), L3 = z3({ max: r3, min: n4, reverse: l }, s2), w5 = (a4 = fe(m3), "log" === s2.type ? a4.filter(function(e7) {
    return 0 !== e7;
  }) : a4), C4 = Math.min.apply(Math, w5), V3 = Math.max.apply(Math, w5), W5 = cn(L3, { all: w5, min: C4, max: V3 }, "x" === x3 ? o2 : d3, x3), M3 = "vertical" === t5 ? [k5, W5] : [W5, k5], B4 = M3[0], I3 = M3[1], T5 = v4.innerPadding > 0 ? v4.innerPadding : 0, R3 = k5.bandwidth(), H3 = [z3({}, v4, { innerPadding: T5, stackedData: m3, xScale: B4, yScale: I3 }), R3, L3.reverse];
  return { xScale: B4, yScale: I3, bars: R3 > 0 ? "vertical" === t5 ? me.apply(void 0, H3) : pe.apply(void 0, H3) : [] };
};
var ye = function(e6) {
  var a4 = e6.bars, i3 = e6.direction, t5 = e6.from, n4 = e6.groupMode, r3 = e6.layout, l = e6.legendLabel, o2 = e6.reverse, d3 = Bi(null != l ? l : "indexes" === t5 ? "indexValue" : "id");
  return "indexes" === t5 ? function(e7, a5, i4) {
    var t6 = (0, import_uniqBy2.default)(e7.map(function(e8) {
      var a6, t7;
      return { id: null != (a6 = e8.data.indexValue) ? a6 : "", label: i4(e8.data), hidden: e8.data.hidden, color: null != (t7 = e8.color) ? t7 : "#000" };
    }), function(e8) {
      return e8.id;
    });
    return "horizontal" === a5 && t6.reverse(), t6;
  }(a4, r3, d3) : function(e7, a5, i4, t6, n5, r4) {
    var l2 = (0, import_uniqBy2.default)(e7.map(function(e8) {
      var a6;
      return { id: e8.data.id, label: r4(e8.data), hidden: e8.data.hidden, color: null != (a6 = e8.color) ? a6 : "#000" };
    }), function(e8) {
      return e8.id;
    });
    return ("vertical" === a5 && "stacked" === t6 && "column" === i4 && true !== n5 || "horizontal" === a5 && "stacked" === t6 && true === n5) && l2.reverse(), l2;
  }(a4, r3, i3, n4, o2, d3);
};
var Se = function(e6) {
  var a4 = e6.indexBy, i3 = void 0 === a4 ? ee.indexBy : a4, t5 = e6.keys, n4 = void 0 === t5 ? ee.keys : t5, r3 = e6.label, l = void 0 === r3 ? ee.label : r3, o2 = e6.tooltipLabel, d3 = void 0 === o2 ? ee.tooltipLabel : o2, u3 = e6.valueFormat, c3 = e6.colors, s2 = void 0 === c3 ? ee.colors : c3, h3 = e6.colorBy, g4 = void 0 === h3 ? ee.colorBy : h3, m3 = e6.borderColor, p4 = void 0 === m3 ? ee.borderColor : m3, x3 = e6.labelTextColor, y = void 0 === x3 ? ee.labelTextColor : x3, S4 = e6.groupMode, k5 = void 0 === S4 ? ee.groupMode : S4, L3 = e6.layout, w5 = void 0 === L3 ? ee.layout : L3, C4 = e6.reverse, W5 = void 0 === C4 ? ee.reverse : C4, I3 = e6.data, T5 = e6.minValue, R3 = void 0 === T5 ? ee.minValue : T5, H3 = e6.maxValue, P3 = void 0 === H3 ? ee.maxValue : H3, E2 = e6.margin, F = e6.width, X4 = e6.height, Y4 = e6.padding, G = void 0 === Y4 ? ee.padding : Y4, A2 = e6.innerPadding, j3 = void 0 === A2 ? ee.innerPadding : A2, q3 = e6.valueScale, K3 = void 0 === q3 ? ee.valueScale : q3, N2 = e6.indexScale, J4 = void 0 === N2 ? ee.indexScale : N2, Q3 = e6.initialHiddenIds, U2 = void 0 === Q3 ? ee.initialHiddenIds : Q3, Z2 = e6.enableLabel, $2 = void 0 === Z2 ? ee.enableLabel : Z2, _3 = e6.labelSkipWidth, ae2 = void 0 === _3 ? ee.labelSkipWidth : _3, ie2 = e6.labelSkipHeight, te2 = void 0 === ie2 ? ee.labelSkipHeight : ie2, ne2 = e6.legends, re2 = void 0 === ne2 ? ee.legends : ne2, le2 = e6.legendLabel, oe2 = (0, import_react4.useState)(null != U2 ? U2 : []), de2 = oe2[0], ue2 = oe2[1], ce2 = (0, import_react4.useCallback)(function(e7) {
    ue2(function(a5) {
      return a5.indexOf(e7) > -1 ? a5.filter(function(a6) {
        return a6 !== e7;
      }) : [].concat(a5, [e7]);
    });
  }, []), se2 = Gi(i3), he2 = Gi(l), be2 = Gi(d3), ve2 = Dt(u3), fe2 = Et(), me2 = pr(s2, g4), pe2 = We(p4, fe2), Se2 = We(y, fe2), ke2 = ("grouped" === k5 ? ge : xe)({ layout: w5, reverse: W5, data: I3, getIndex: se2, keys: n4, minValue: R3, maxValue: P3, width: F, height: X4, getColor: me2, padding: G, innerPadding: j3, valueScale: K3, indexScale: J4, hiddenIds: de2, formatValue: ve2, getTooltipLabel: be2, margin: E2 }), Le2 = ke2.bars, we2 = ke2.xScale, Ce2 = ke2.yScale, Ve2 = (0, import_react4.useMemo)(function() {
    return Le2.filter(function(e7) {
      return null !== e7.data.value;
    }).map(function(e7, a5) {
      return z3({}, e7, { index: a5 });
    });
  }, [Le2]), We3 = (0, import_react4.useCallback)(function(e7) {
    var a5 = e7.width, i4 = e7.height;
    return !!$2 && (!(ae2 > 0 && a5 < ae2) && !(te2 > 0 && i4 < te2));
  }, [$2, ae2, te2]), Me2 = (0, import_react4.useMemo)(function() {
    return n4.map(function(e7) {
      var a5 = Le2.find(function(a6) {
        return a6.data.id === e7;
      });
      return z3({}, a5, { data: z3({ id: e7 }, null == a5 ? void 0 : a5.data, { hidden: de2.includes(e7) }) });
    });
  }, [de2, n4, Le2]), Be2 = (0, import_react4.useMemo)(function() {
    return re2.map(function(e7) {
      return [e7, ye({ bars: "keys" === e7.dataFrom ? Me2 : Le2, direction: e7.direction, from: e7.dataFrom, groupMode: k5, layout: w5, legendLabel: le2, reverse: W5 })];
    });
  }, [re2, Me2, Le2, k5, w5, le2, W5]);
  return { bars: Le2, barsWithValue: Ve2, xScale: we2, yScale: Ce2, getIndex: se2, getLabel: he2, getTooltipLabel: be2, formatValue: ve2, getColor: me2, getBorderColor: pe2, getLabelColor: Se2, shouldRenderBarLabel: We3, hiddenIds: de2, toggleSerie: ce2, legendsWithData: Be2 };
};
var ke = ["isInteractive", "animate", "motionConfig", "theme", "renderWrapper"];
var Le = function(i3) {
  var t5 = i3.data, n4 = i3.indexBy, r3 = i3.keys, l = i3.margin, o2 = i3.width, u3 = i3.height, c3 = i3.groupMode, s2 = i3.layout, h3 = i3.reverse, b4 = i3.minValue, g4 = i3.maxValue, v4 = i3.valueScale, f2 = i3.indexScale, m3 = i3.padding, L3 = i3.innerPadding, w5 = i3.axisTop, C4 = i3.axisRight, M3 = i3.axisBottom, B4 = void 0 === M3 ? ae.axisBottom : M3, T5 = i3.axisLeft, R3 = void 0 === T5 ? ae.axisLeft : T5, H3 = i3.enableGridX, P3 = void 0 === H3 ? ae.enableGridX : H3, E2 = i3.enableGridY, X4 = void 0 === E2 ? ae.enableGridY : E2, Y4 = i3.gridXValues, D3 = i3.gridYValues, O3 = i3.layers, G = void 0 === O3 ? ae.layers : O3, A2 = i3.barComponent, j3 = void 0 === A2 ? ae.barComponent : A2, q3 = i3.enableLabel, K3 = void 0 === q3 ? ae.enableLabel : q3, N2 = i3.label, U2 = i3.labelSkipWidth, Z2 = void 0 === U2 ? ae.labelSkipWidth : U2, $2 = i3.labelSkipHeight, _3 = void 0 === $2 ? ae.labelSkipHeight : $2, ee2 = i3.labelTextColor, ie2 = i3.markers, te2 = void 0 === ie2 ? ae.markers : ie2, ne2 = i3.colorBy, re2 = i3.colors, le2 = i3.defs, oe2 = void 0 === le2 ? ae.defs : le2, de2 = i3.fill, ue2 = void 0 === de2 ? ae.fill : de2, ce2 = i3.borderRadius, se2 = void 0 === ce2 ? ae.borderRadius : ce2, he2 = i3.borderWidth, be2 = void 0 === he2 ? ae.borderWidth : he2, ge2 = i3.borderColor, ve2 = i3.annotations, fe2 = void 0 === ve2 ? ae.annotations : ve2, me2 = i3.legendLabel, pe2 = i3.tooltipLabel, xe2 = i3.valueFormat, ye2 = i3.isInteractive, ke2 = void 0 === ye2 ? ae.isInteractive : ye2, Le2 = i3.tooltip, we2 = void 0 === Le2 ? ae.tooltip : Le2, Ce2 = i3.onClick, Ve2 = i3.onMouseEnter, We3 = i3.onMouseLeave, Me2 = i3.legends, Be2 = i3.role, Ie2 = void 0 === Be2 ? ae.role : Be2, Te = i3.ariaLabel, Re = i3.ariaLabelledBy, He = i3.ariaDescribedBy, Pe = i3.isFocusable, Ee = void 0 === Pe ? ae.isFocusable : Pe, Fe = i3.barAriaLabel, Xe = i3.barAriaLabelledBy, Ye = i3.barAriaDescribedBy, De = i3.initialHiddenIds, Oe = Zr(), Ge = Oe.animate, Ae = Oe.config, je = Bt(o2, u3, l), qe = je.outerWidth, ze = je.outerHeight, Ke = je.margin, Ne = je.innerWidth, Je = je.innerHeight, Qe = Se({ indexBy: n4, label: N2, tooltipLabel: pe2, valueFormat: xe2, colors: re2, colorBy: ne2, borderColor: ge2, labelTextColor: ee2, groupMode: c3, layout: s2, reverse: h3, data: t5, keys: r3, minValue: b4, maxValue: g4, margin: Ke, width: Ne, height: Je, padding: m3, innerPadding: L3, valueScale: v4, indexScale: f2, enableLabel: K3, labelSkipWidth: Z2, labelSkipHeight: _3, legends: Me2, legendLabel: me2, initialHiddenIds: De }), Ue = Qe.bars, Ze = Qe.barsWithValue, $e = Qe.xScale, _e = Qe.yScale, ea = Qe.getLabel, aa = Qe.getTooltipLabel, ia = Qe.getBorderColor, ta = Qe.getLabelColor, na = Qe.shouldRenderBarLabel, ra = Qe.toggleSerie, la = Qe.legendsWithData, oa = useTransition(Ze, { keys: function(e6) {
    return e6.key;
  }, from: function(e6) {
    return z3({ borderColor: ia(e6), color: e6.color, height: 0, labelColor: ta(e6), labelOpacity: 0, labelX: e6.width / 2, labelY: e6.height / 2, transform: "translate(" + e6.x + ", " + (e6.y + e6.height) + ")", width: e6.width }, "vertical" === s2 ? {} : { height: e6.height, transform: "translate(" + e6.x + ", " + e6.y + ")", width: 0 });
  }, enter: function(e6) {
    return { borderColor: ia(e6), color: e6.color, height: e6.height, labelColor: ta(e6), labelOpacity: 1, labelX: e6.width / 2, labelY: e6.height / 2, transform: "translate(" + e6.x + ", " + e6.y + ")", width: e6.width };
  }, update: function(e6) {
    return { borderColor: ia(e6), color: e6.color, height: e6.height, labelColor: ta(e6), labelOpacity: 1, labelX: e6.width / 2, labelY: e6.height / 2, transform: "translate(" + e6.x + ", " + e6.y + ")", width: e6.width };
  }, leave: function(e6) {
    return z3({ borderColor: ia(e6), color: e6.color, height: 0, labelColor: ta(e6), labelOpacity: 0, labelX: e6.width / 2, labelY: 0, transform: "translate(" + e6.x + ", " + (e6.y + e6.height) + ")", width: e6.width }, "vertical" === s2 ? {} : { labelX: 0, labelY: e6.height / 2, height: e6.height, transform: "translate(" + e6.x + ", " + e6.y + ")", width: 0 });
  }, config: Ae, immediate: !Ge, initial: Ge ? void 0 : null }), da = (0, import_react4.useMemo)(function() {
    return { borderRadius: se2, borderWidth: be2, enableLabel: K3, isInteractive: ke2, labelSkipWidth: Z2, labelSkipHeight: _3, onClick: Ce2, onMouseEnter: Ve2, onMouseLeave: We3, getTooltipLabel: aa, tooltip: we2, isFocusable: Ee, ariaLabel: Fe, ariaLabelledBy: Xe, ariaDescribedBy: Ye };
  }, [se2, be2, K3, aa, ke2, _3, Z2, Ce2, Ve2, We3, we2, Ee, Fe, Xe, Ye]), ua = Hi(oe2, Ue, ue2, { dataKey: "data", targetKey: "data.fill" }), ca = { annotations: null, axes: null, bars: null, grid: null, legends: null, markers: null };
  G.includes("annotations") && (ca.annotations = (0, import_jsx_runtime4.jsx)(J3, { bars: Ue, annotations: fe2 }, "annotations")), G.includes("axes") && (ca.axes = (0, import_jsx_runtime4.jsx)(X2, { xScale: $e, yScale: _e, width: Ne, height: Je, top: w5, right: C4, bottom: B4, left: R3 }, "axes")), G.includes("bars") && (ca.bars = (0, import_jsx_runtime4.jsx)(import_react4.Fragment, { children: oa(function(e6, a4) {
    return (0, import_react4.createElement)(j3, z3({}, da, { bar: a4, style: e6, shouldRenderLabel: na(a4), label: ea(a4.data) }));
  }) }, "bars")), G.includes("grid") && (ca.grid = (0, import_jsx_runtime4.jsx)(z, { width: Ne, height: Je, xScale: P3 ? $e : null, yScale: X4 ? _e : null, xValues: Y4, yValues: D3 }, "grid")), G.includes("legends") && (ca.legends = (0, import_jsx_runtime4.jsx)(Q2, { width: Ne, height: Je, legends: la, toggleSerie: ra }, "legends")), G.includes("markers") && (ca.markers = (0, import_jsx_runtime4.jsx)(Ti, { markers: te2, width: Ne, height: Je, xScale: $e, yScale: _e }, "markers"));
  var sa = (0, import_react4.useMemo)(function() {
    return z3({}, da, { margin: Ke, width: o2, height: u3, innerWidth: Ne, innerHeight: Je, bars: Ue, legendData: la, enableLabel: K3, xScale: $e, yScale: _e, tooltip: we2, getTooltipLabel: aa, onClick: Ce2, onMouseEnter: Ve2, onMouseLeave: We3 });
  }, [da, Ke, o2, u3, Ne, Je, Ue, la, K3, $e, _e, we2, aa, Ce2, Ve2, We3]);
  return (0, import_jsx_runtime4.jsx)(_i, { width: qe, height: ze, margin: Ke, defs: ua, role: Ie2, ariaLabel: Te, ariaLabelledBy: Re, ariaDescribedBy: He, isFocusable: Ee, children: G.map(function(e6, a4) {
    var i4;
    return "function" == typeof e6 ? (0, import_jsx_runtime4.jsx)(import_react4.Fragment, { children: (0, import_react4.createElement)(e6, sa) }, a4) : null != (i4 = null == ca ? void 0 : ca[e6]) ? i4 : null;
  }) });
};
var we = function(e6) {
  var a4 = e6.isInteractive, i3 = void 0 === a4 ? ae.isInteractive : a4, t5 = e6.animate, n4 = void 0 === t5 ? ae.animate : t5, r3 = e6.motionConfig, l = void 0 === r3 ? ae.motionConfig : r3, o2 = e6.theme, u3 = e6.renderWrapper, c3 = K2(e6, ke);
  return (0, import_jsx_runtime4.jsx)(Ht, { animate: n4, isInteractive: i3, motionConfig: l, renderWrapper: u3, theme: o2, children: (0, import_jsx_runtime4.jsx)(Le, z3({ isInteractive: i3 }, c3)) });
};
var Ce = ["isInteractive", "renderWrapper", "theme"];
var Ve = function(e6, a4, i3, t5) {
  return e6.find(function(e7) {
    return Ai(e7.x + a4.left, e7.y + a4.top, e7.width, e7.height, i3, t5);
  });
};
var We2 = function(e6) {
  var a4 = e6.data, r3 = e6.indexBy, u3 = e6.keys, c3 = e6.margin, s2 = e6.width, g4 = e6.height, v4 = e6.groupMode, f2 = e6.layout, m3 = e6.reverse, p4 = e6.minValue, y = e6.maxValue, S4 = e6.valueScale, k5 = e6.indexScale, w5 = e6.padding, C4 = e6.innerPadding, B4 = e6.axisTop, I3 = e6.axisRight, T5 = e6.axisBottom, P3 = void 0 === T5 ? ie.axisBottom : T5, E2 = e6.axisLeft, F = void 0 === E2 ? ie.axisLeft : E2, Y4 = e6.enableGridX, D3 = void 0 === Y4 ? ie.enableGridX : Y4, O3 = e6.enableGridY, G = void 0 === O3 ? ie.enableGridY : O3, A2 = e6.gridXValues, j3 = e6.gridYValues, q3 = e6.layers, K3 = void 0 === q3 ? ie.layers : q3, N2 = e6.renderBar, J4 = void 0 === N2 ? function(e7, a5) {
    var i3 = a5.bar, t5 = i3.color, n4 = i3.height, r4 = i3.width, l = i3.x, o2 = i3.y, d3 = a5.borderColor, u4 = a5.borderRadius, c4 = a5.borderWidth, s3 = a5.label, h3 = a5.labelColor, b4 = a5.shouldRenderLabel;
    if (e7.fillStyle = t5, c4 > 0 && (e7.strokeStyle = d3, e7.lineWidth = c4), e7.beginPath(), u4 > 0) {
      var g5 = Math.min(u4, n4);
      e7.moveTo(l + g5, o2), e7.lineTo(l + r4 - g5, o2), e7.quadraticCurveTo(l + r4, o2, l + r4, o2 + g5), e7.lineTo(l + r4, o2 + n4 - g5), e7.quadraticCurveTo(l + r4, o2 + n4, l + r4 - g5, o2 + n4), e7.lineTo(l + g5, o2 + n4), e7.quadraticCurveTo(l, o2 + n4, l, o2 + n4 - g5), e7.lineTo(l, o2 + g5), e7.quadraticCurveTo(l, o2, l + g5, o2), e7.closePath();
    } else
      e7.rect(l, o2, r4, n4);
    e7.fill(), c4 > 0 && e7.stroke(), b4 && (e7.textBaseline = "middle", e7.textAlign = "center", e7.fillStyle = h3, e7.fillText(s3, l + r4 / 2, o2 + n4 / 2));
  } : N2, Q3 = e6.enableLabel, U2 = void 0 === Q3 ? ie.enableLabel : Q3, Z2 = e6.label, $2 = e6.labelSkipWidth, _3 = void 0 === $2 ? ie.labelSkipWidth : $2, ee2 = e6.labelSkipHeight, ae2 = void 0 === ee2 ? ie.labelSkipHeight : ee2, te2 = e6.labelTextColor, ne2 = e6.colorBy, re2 = e6.colors, le2 = e6.borderRadius, oe2 = void 0 === le2 ? ie.borderRadius : le2, de2 = e6.borderWidth, ue2 = void 0 === de2 ? ie.borderWidth : de2, ce2 = e6.borderColor, se2 = e6.annotations, he2 = void 0 === se2 ? ie.annotations : se2, be2 = e6.legendLabel, ge2 = e6.tooltipLabel, ve2 = e6.valueFormat, fe2 = e6.isInteractive, me2 = void 0 === fe2 ? ie.isInteractive : fe2, pe2 = e6.tooltip, xe2 = void 0 === pe2 ? ie.tooltip : pe2, ye2 = e6.onClick, ke2 = e6.onMouseEnter, Le2 = e6.onMouseLeave, we2 = e6.legends, Ce2 = e6.pixelRatio, We3 = void 0 === Ce2 ? ie.pixelRatio : Ce2, Me2 = e6.canvasRef, Be2 = (0, import_react4.useRef)(null), Ie2 = Et(), Te = Bt(s2, g4, c3), Re = Te.margin, He = Te.innerWidth, Pe = Te.innerHeight, Ee = Te.outerWidth, Fe = Te.outerHeight, Xe = Se({ indexBy: r3, label: Z2, tooltipLabel: ge2, valueFormat: ve2, colors: re2, colorBy: ne2, borderColor: ce2, labelTextColor: te2, groupMode: v4, layout: f2, reverse: m3, data: a4, keys: u3, minValue: p4, maxValue: y, margin: Re, width: He, height: Pe, padding: w5, innerPadding: C4, valueScale: S4, indexScale: k5, enableLabel: U2, labelSkipWidth: _3, labelSkipHeight: ae2, legends: we2, legendLabel: be2 }), Ye = Xe.bars, De = Xe.barsWithValue, Oe = Xe.xScale, Ge = Xe.yScale, Ae = Xe.getLabel, je = Xe.getTooltipLabel, qe = Xe.getBorderColor, ze = Xe.getLabelColor, Ke = Xe.shouldRenderBarLabel, Ne = Xe.legendsWithData, Je = k(), Qe = Je.showTooltipFromEvent, Ue = Je.hideTooltip, Ze = j2({ annotations: S2({ data: Ye, annotations: he2, getPosition: function(e7) {
    return { x: e7.x, y: e7.y };
  }, getDimensions: function(e7) {
    var a5 = e7.width, i3 = e7.height;
    return { width: a5, height: i3, size: Math.max(a5, i3) };
  } }) }), $e = (0, import_react4.useMemo)(function() {
    return { borderRadius: oe2, borderWidth: ue2, isInteractive: me2, isFocusable: false, labelSkipWidth: _3, labelSkipHeight: ae2, margin: Re, width: s2, height: g4, innerWidth: He, innerHeight: Pe, bars: Ye, legendData: Ne, enableLabel: U2, xScale: Oe, yScale: Ge, tooltip: xe2, getTooltipLabel: je, onClick: ye2, onMouseEnter: ke2, onMouseLeave: Le2 };
  }, [oe2, ue2, me2, _3, ae2, Re, s2, g4, He, Pe, Ye, Ne, U2, Oe, Ge, xe2, je, ye2, ke2, Le2]);
  (0, import_react4.useEffect)(function() {
    var e7, a5 = null == (e7 = Be2.current) ? void 0 : e7.getContext("2d");
    Be2.current && a5 && (Be2.current.width = Ee * We3, Be2.current.height = Fe * We3, a5.scale(We3, We3), a5.fillStyle = Ie2.background, a5.fillRect(0, 0, Ee, Fe), a5.translate(Re.left, Re.top), K3.forEach(function(e8) {
      "grid" === e8 ? "number" == typeof Ie2.grid.line.strokeWidth && Ie2.grid.line.strokeWidth > 0 && (a5.lineWidth = Ie2.grid.line.strokeWidth, a5.strokeStyle = Ie2.grid.line.stroke, D3 && D(a5, { width: s2, height: g4, scale: Oe, axis: "x", values: A2 }), G && D(a5, { width: s2, height: g4, scale: Ge, axis: "y", values: j3 })) : "axes" === e8 ? j(a5, { xScale: Oe, yScale: Ge, width: He, height: Pe, top: B4, right: I3, bottom: P3, left: F, theme: Ie2 }) : "bars" === e8 ? De.forEach(function(e9) {
        J4(a5, { bar: e9, borderColor: qe(e9), borderRadius: oe2, borderWidth: ue2, label: Ae(e9.data), labelColor: ze(e9), shouldRenderLabel: Ke(e9) });
      }) : "legends" === e8 ? Ne.forEach(function(e9) {
        var i3 = e9[0], t5 = e9[1];
        H(a5, z3({}, i3, { data: t5, containerWidth: He, containerHeight: Pe, theme: Ie2 }));
      }) : "annotations" === e8 ? J2(a5, { annotations: Ze, theme: Ie2 }) : "function" == typeof e8 && e8(a5, $e);
    }), a5.save());
  }, [P3, F, I3, B4, De, oe2, ue2, Ze, D3, G, qe, Ae, ze, A2, j3, v4, g4, Pe, He, $e, K3, f2, Ne, Re.left, Re.top, Fe, Ee, We3, J4, Oe, Ge, m3, Ke, Ie2, s2]);
  var _e = (0, import_react4.useCallback)(function(e7) {
    if (Ye && Be2.current) {
      var a5 = Fi(Be2.current, e7), i3 = a5[0], t5 = a5[1], n4 = Ve(Ye, Re, i3, t5);
      void 0 !== n4 ? (Qe((0, import_react4.createElement)(xe2, z3({}, n4.data, { color: n4.color, label: n4.label, value: Number(n4.data.value) })), e7), "mouseenter" === e7.type && (null == ke2 || ke2(n4.data, e7))) : Ue();
    }
  }, [Ue, Re, ke2, Ye, Qe, xe2]), ea = (0, import_react4.useCallback)(function(e7) {
    if (Ye && Be2.current) {
      Ue();
      var a5 = Fi(Be2.current, e7), i3 = a5[0], t5 = a5[1], n4 = Ve(Ye, Re, i3, t5);
      n4 && (null == Le2 || Le2(n4.data, e7));
    }
  }, [Ue, Re, Le2, Ye]), aa = (0, import_react4.useCallback)(function(e7) {
    if (Ye && Be2.current) {
      var a5 = Fi(Be2.current, e7), i3 = a5[0], t5 = a5[1], n4 = Ve(Ye, Re, i3, t5);
      void 0 !== n4 && (null == ye2 || ye2(z3({}, n4.data, { color: n4.color }), e7));
    }
  }, [Re, ye2, Ye]);
  return (0, import_jsx_runtime4.jsx)("canvas", { ref: function(e7) {
    Be2.current = e7, Me2 && "current" in Me2 && (Me2.current = e7);
  }, width: Ee * We3, height: Fe * We3, style: { width: Ee, height: Fe, cursor: me2 ? "auto" : "normal" }, onMouseEnter: me2 ? _e : void 0, onMouseMove: me2 ? _e : void 0, onMouseLeave: me2 ? ea : void 0, onClick: me2 ? aa : void 0 });
};
var Me = (0, import_react4.forwardRef)(function(e6, a4) {
  var i3 = e6.isInteractive, t5 = e6.renderWrapper, n4 = e6.theme, r3 = K2(e6, Ce);
  return (0, import_jsx_runtime4.jsx)(Ht, { isInteractive: i3, renderWrapper: t5, theme: n4, animate: false, children: (0, import_jsx_runtime4.jsx)(We2, z3({}, r3, { canvasRef: a4 })) });
});
var Be = function(e6) {
  return (0, import_jsx_runtime4.jsx)(Jt, { children: function(a4) {
    var i3 = a4.width, t5 = a4.height;
    return (0, import_jsx_runtime4.jsx)(we, z3({ width: i3, height: t5 }, e6));
  } });
};
var Ie = (0, import_react4.forwardRef)(function(e6, a4) {
  return (0, import_jsx_runtime4.jsx)(Jt, { children: function(i3) {
    var t5 = i3.width, n4 = i3.height;
    return (0, import_jsx_runtime4.jsx)(Me, z3({ width: t5, height: n4 }, e6, { ref: a4 }));
  } });
});
export {
  we as Bar,
  Me as BarCanvas,
  Z as BarItem,
  _2 as BarTooltip,
  Be as ResponsiveBar,
  Ie as ResponsiveBarCanvas,
  ie as canvasDefaultProps,
  ee as defaultProps,
  ae as svgDefaultProps
};
//# sourceMappingURL=@nivo_bar.js.map
