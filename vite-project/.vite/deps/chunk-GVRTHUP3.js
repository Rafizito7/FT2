import {
  require_react_dom
} from "./chunk-UWZXFKA6.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React3 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format2) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format2, args);
            }
          }
        }
        function printWarning(level, format2, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format2 += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format2);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x4) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign2 = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign2({}, props, {
                  value: prevLog
                }),
                info: assign2({}, props, {
                  value: prevInfo
                }),
                warn: assign2({}, props, {
                  value: prevWarn
                }),
                error: assign2({}, props, {
                  value: prevError
                }),
                group: assign2({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign2({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign2({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix2;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix2 === void 0) {
              try {
                throw Error();
              } catch (x4) {
                var match = x4.stack.trim().match(/\n( *(at )?)/);
                prefix2 = match && match[1] || "";
              }
            }
            return "\n" + prefix2 + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x4) {
                  control = x4;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x4) {
                  control = x4;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x4) {
                control = x4;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s3 = sampleLines.length - 1;
              var c10 = controlLines.length - 1;
              while (s3 >= 1 && c10 >= 0 && sampleLines[s3] !== controlLines[c10]) {
                c10--;
              }
              for (; s3 >= 1 && c10 >= 0; s3--, c10--) {
                if (sampleLines[s3] !== controlLines[c10]) {
                  if (s3 !== 1 || c10 !== 1) {
                    do {
                      s3--;
                      c10--;
                      if (c10 < 0 || sampleLines[s3] !== controlLines[c10]) {
                        var _frame = "\n" + sampleLines[s3].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s3 >= 1 && c10 >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x4) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a3) {
          return isArrayImpl(a3);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e4) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS2 = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config2) {
          {
            if (hasOwnProperty.call(config2, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.ref !== void 0;
        }
        function hasValidKey(config2) {
          {
            if (hasOwnProperty.call(config2, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config2, self2) {
          {
            if (typeof config2.ref === "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config2.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config2, maybeKey, source, self2) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config2)) {
              {
                checkKeyStringCoercion(config2.key);
              }
              key = "" + config2.key;
            }
            if (hasValidRef(config2)) {
              ref = config2.ref;
              warnIfStringRefCannotBeAutoConverted(config2, self2);
            }
            for (propName in config2) {
              if (hasOwnProperty.call(config2, propName) && !RESERVED_PROPS2.hasOwnProperty(propName)) {
                props[propName] = config2[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i3 = 0; i3 < node.length; i3++) {
                var child = node[i3];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i3 = 0; i3 < keys.length; i3++) {
              var key = keys[i3];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self2);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i3 = 0; i3 < children.length; i3++) {
                      validateChildKeys(children[i3], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i3 = 0; i3 < 10; i3++) {
          test2["_" + String.fromCharCode(i3)] = i3;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n3) {
          return test2[n3];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to3 = toObject(target);
      var symbols2;
      for (var s3 = 1; s3 < arguments.length; s3++) {
        from = Object(arguments[s3]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to3[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols2 = getOwnPropertySymbols(from);
          for (var i3 = 0; i3 < symbols2.length; i3++) {
            if (propIsEnumerable.call(from, symbols2[i3])) {
              to3[symbols2[i3]] = from[symbols2[i3]];
            }
          }
        }
      }
      return to3;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x4) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign2 = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x4) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is2(x4, y4) {
        if (x4 === y4) {
          return x4 !== 0 || 1 / x4 === 1 / y4;
        } else {
          return x4 !== x4 && y4 !== y4;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey2 = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey2] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey2] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i3 = 0; i3 < propValue.length; i3++) {
            var error = typeChecker(propValue, i3, componentName, location, propFullName + "[" + i3 + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i3 = 0; i3 < expectedValues.length; i3++) {
            if (is2(propValue, expectedValues[i3])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
          var checker = arrayOfTypeCheckers[i3];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i3 + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i4 = 0; i4 < arrayOfTypeCheckers.length; i4++) {
            var checker2 = arrayOfTypeCheckers[i4];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign2({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array2, key) {
      var length = array2.length;
      while (length--) {
        if (eq(array2[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index2 == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index2, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      return index2 < 0 ? void 0 : data[index2][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index2][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e4) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e4) {
        }
        try {
          return func + "";
        } catch (e4) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map4, key) {
      var data = map4.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs2 = data.__data__;
        if (!Map2 || pairs2.length < LARGE_ARRAY_SIZE - 1) {
          pairs2.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs2);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e4) {
      }
    }();
    module.exports = defineProperty;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// node_modules/lodash/_assignMergeValue.js
var require_assignMergeValue = __commonJS({
  "node_modules/lodash/_assignMergeValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    function assignMergeValue(object, key, value) {
      if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignMergeValue;
  }
});

// node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "node_modules/lodash/_createBaseFor.js"(exports, module) {
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index2];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    module.exports = createBaseFor;
  }
});

// node_modules/lodash/_baseFor.js
var require_baseFor = __commonJS({
  "node_modules/lodash/_baseFor.js"(exports, module) {
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module.exports = baseFor;
  }
});

// node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports, module) {
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array = root.Uint8Array;
    module.exports = Uint8Array;
  }
});

// node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
    var Uint8Array = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    module.exports = cloneArrayBuffer;
  }
});

// node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module.exports = cloneTypedArray;
  }
});

// node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports, module) {
    function copyArray(source, array2) {
      var index2 = -1, length = source.length;
      array2 || (array2 = Array(length));
      while (++index2 < length) {
        array2[index2] = source[index2];
      }
      return array2;
    }
    module.exports = copyArray;
  }
});

// node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports, module) {
    var isObject = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = /* @__PURE__ */ function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module.exports = baseCreate;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module.exports = initCloneObject;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/isArrayLikeObject.js
var require_isArrayLikeObject = __commonJS({
  "node_modules/lodash/isArrayLikeObject.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    var isObjectLike = require_isObjectLike();
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    module.exports = isArrayLikeObject;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "node_modules/lodash/isPlainObject.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module.exports = isPlainObject;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e4) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_safeGet.js
var require_safeGet = __commonJS({
  "node_modules/lodash/_safeGet.js"(exports, module) {
    function safeGet(object, key) {
      if (key === "constructor" && typeof object[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object[key];
    }
    module.exports = safeGet;
  }
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignValue;
  }
});

// node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports, module) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index2 = -1, length = props.length;
      while (++index2 < length) {
        var key = props[index2];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    module.exports = copyObject;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n3, iteratee) {
      var index2 = -1, result = Array(n3);
      while (++index2 < n3) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = nativeKeysIn;
  }
});

// node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports, module) {
    var isObject = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeysIn;
  }
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
  }
});

// node_modules/lodash/toPlainObject.js
var require_toPlainObject = __commonJS({
  "node_modules/lodash/toPlainObject.js"(exports, module) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    module.exports = toPlainObject;
  }
});

// node_modules/lodash/_baseMergeDeep.js
var require_baseMergeDeep = __commonJS({
  "node_modules/lodash/_baseMergeDeep.js"(exports, module) {
    var assignMergeValue = require_assignMergeValue();
    var cloneBuffer = require_cloneBuffer();
    var cloneTypedArray = require_cloneTypedArray();
    var copyArray = require_copyArray();
    var initCloneObject = require_initCloneObject();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isArrayLikeObject = require_isArrayLikeObject();
    var isBuffer = require_isBuffer();
    var isFunction = require_isFunction();
    var isObject = require_isObject();
    var isPlainObject = require_isPlainObject();
    var isTypedArray = require_isTypedArray();
    var safeGet = require_safeGet();
    var toPlainObject = require_toPlainObject();
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }
    module.exports = baseMergeDeep;
  }
});

// node_modules/lodash/_baseMerge.js
var require_baseMerge = __commonJS({
  "node_modules/lodash/_baseMerge.js"(exports, module) {
    var Stack = require_Stack();
    var assignMergeValue = require_assignMergeValue();
    var baseFor = require_baseFor();
    var baseMergeDeep = require_baseMergeDeep();
    var isObject = require_isObject();
    var keysIn = require_keysIn();
    var safeGet = require_safeGet();
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack());
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }
    module.exports = baseMerge;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module) {
    function identity6(value) {
      return value;
    }
    module.exports = identity6;
  }
});

// node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports, module) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module.exports = apply;
  }
});

// node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports, module) {
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start2, transform) {
      start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
      return function() {
        var args = arguments, index2 = -1, length = nativeMax(args.length - start2, 0), array2 = Array(length);
        while (++index2 < length) {
          array2[index2] = args[start2 + index2];
        }
        index2 = -1;
        var otherArgs = Array(start2 + 1);
        while (++index2 < start2) {
          otherArgs[index2] = args[index2];
        }
        otherArgs[start2] = transform(array2);
        return apply(func, this, otherArgs);
      };
    }
    module.exports = overRest;
  }
});

// node_modules/lodash/constant.js
var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports, module) {
    function constant(value) {
      return function() {
        return value;
      };
    }
    module.exports = constant;
  }
});

// node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports, module) {
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity6 = require_identity();
    var baseSetToString = !defineProperty ? identity6 : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module.exports = baseSetToString;
  }
});

// node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports, module) {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count2 = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count2 >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count2 = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module.exports = shortOut;
  }
});

// node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports, module) {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  }
});

// node_modules/lodash/_baseRest.js
var require_baseRest = __commonJS({
  "node_modules/lodash/_baseRest.js"(exports, module) {
    var identity6 = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start2) {
      return setToString(overRest(func, start2, identity6), func + "");
    }
    module.exports = baseRest;
  }
});

// node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "node_modules/lodash/_isIterateeCall.js"(exports, module) {
    var eq = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    function isIterateeCall(value, index2, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index2;
      if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
        return eq(object[index2], value);
      }
      return false;
    }
    module.exports = isIterateeCall;
  }
});

// node_modules/lodash/_createAssigner.js
var require_createAssigner = __commonJS({
  "node_modules/lodash/_createAssigner.js"(exports, module) {
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index2 < length) {
          var source = sources[index2];
          if (source) {
            assigner(object, source, index2, customizer);
          }
        }
        return object;
      });
    }
    module.exports = createAssigner;
  }
});

// node_modules/lodash/merge.js
var require_merge = __commonJS({
  "node_modules/lodash/merge.js"(exports, module) {
    var baseMerge = require_baseMerge();
    var createAssigner = require_createAssigner();
    var merge2 = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });
    module.exports = merge2;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number3, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number3 || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array2, iteratee) {
      var index2 = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
      while (++index2 < length) {
        result[index2] = iteratee(array2[index2], index2, array2);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path2) {
      path2 = castPath(path2, object);
      var index2 = 0, length = path2.length;
      while (object != null && index2 < length) {
        object = object[toKey(path2[index2++])];
      }
      return index2 && index2 == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get(object, path2, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path2);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get;
  }
});

// node_modules/lodash/_baseSet.js
var require_baseSet = __commonJS({
  "node_modules/lodash/_baseSet.js"(exports, module) {
    var assignValue = require_assignValue();
    var castPath = require_castPath();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    var toKey = require_toKey();
    function baseSet(object, path2, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path2 = castPath(path2, object);
      var index2 = -1, length = path2.length, lastIndex = length - 1, nested = object;
      while (nested != null && ++index2 < length) {
        var key = toKey(path2[index2]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
          return object;
        }
        if (index2 != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : void 0;
          if (newValue === void 0) {
            newValue = isObject(objValue) ? objValue : isIndex(path2[index2 + 1]) ? [] : {};
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }
    module.exports = baseSet;
  }
});

// node_modules/lodash/set.js
var require_set = __commonJS({
  "node_modules/lodash/set.js"(exports, module) {
    var baseSet = require_baseSet();
    function set2(object, path2, value) {
      return object == null ? object : baseSet(object, path2, value);
    }
    module.exports = set2;
  }
});

// node_modules/lodash/isString.js
var require_isString = __commonJS({
  "node_modules/lodash/isString.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isArray = require_isArray();
    var isObjectLike = require_isObjectLike();
    var stringTag = "[object String]";
    function isString(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
    }
    module.exports = isString;
  }
});

// node_modules/lodash/last.js
var require_last = __commonJS({
  "node_modules/lodash/last.js"(exports, module) {
    function last(array2) {
      var length = array2 == null ? 0 : array2.length;
      return length ? array2[length - 1] : void 0;
    }
    module.exports = last;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index2 = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index2 < length) {
        this.add(values[index2]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports, module) {
    function baseFindIndex(array2, predicate, fromIndex, fromRight) {
      var length = array2.length, index2 = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index2-- : ++index2 < length) {
        if (predicate(array2[index2], index2, array2)) {
          return index2;
        }
      }
      return -1;
    }
    module.exports = baseFindIndex;
  }
});

// node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/lodash/_baseIsNaN.js"(exports, module) {
    function baseIsNaN(value) {
      return value !== value;
    }
    module.exports = baseIsNaN;
  }
});

// node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/lodash/_strictIndexOf.js"(exports, module) {
    function strictIndexOf(array2, value, fromIndex) {
      var index2 = fromIndex - 1, length = array2.length;
      while (++index2 < length) {
        if (array2[index2] === value) {
          return index2;
        }
      }
      return -1;
    }
    module.exports = strictIndexOf;
  }
});

// node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/lodash/_baseIndexOf.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array2, value, fromIndex) {
      return value === value ? strictIndexOf(array2, value, fromIndex) : baseFindIndex(array2, baseIsNaN, fromIndex);
    }
    module.exports = baseIndexOf;
  }
});

// node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/lodash/_arrayIncludes.js"(exports, module) {
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array2, value) {
      var length = array2 == null ? 0 : array2.length;
      return !!length && baseIndexOf(array2, value, 0) > -1;
    }
    module.exports = arrayIncludes;
  }
});

// node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/lodash/_arrayIncludesWith.js"(exports, module) {
    function arrayIncludesWith(array2, value, comparator) {
      var index2 = -1, length = array2 == null ? 0 : array2.length;
      while (++index2 < length) {
        if (comparator(value, array2[index2])) {
          return true;
        }
      }
      return false;
    }
    module.exports = arrayIncludesWith;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_baseDifference.js
var require_baseDifference = __commonJS({
  "node_modules/lodash/_baseDifference.js"(exports, module) {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var arrayMap = require_arrayMap();
    var baseUnary = require_baseUnary();
    var cacheHas = require_cacheHas();
    var LARGE_ARRAY_SIZE = 200;
    function baseDifference(array2, values, iteratee, comparator) {
      var index2 = -1, includes = arrayIncludes, isCommon = true, length = array2.length, result = [], valuesLength = values.length;
      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      } else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
        while (++index2 < length) {
          var value = array2[index2], computed = iteratee == null ? value : iteratee(value);
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var valuesIndex = valuesLength;
            while (valuesIndex--) {
              if (values[valuesIndex] === computed) {
                continue outer;
              }
            }
            result.push(value);
          } else if (!includes(values, computed, comparator)) {
            result.push(value);
          }
        }
      return result;
    }
    module.exports = baseDifference;
  }
});

// node_modules/lodash/without.js
var require_without = __commonJS({
  "node_modules/lodash/without.js"(exports, module) {
    var baseDifference = require_baseDifference();
    var baseRest = require_baseRest();
    var isArrayLikeObject = require_isArrayLikeObject();
    var without = baseRest(function(array2, values) {
      return isArrayLikeObject(array2) ? baseDifference(array2, values) : [];
    });
    module.exports = without;
  }
});

// node_modules/lodash/_basePickBy.js
var require_basePickBy = __commonJS({
  "node_modules/lodash/_basePickBy.js"(exports, module) {
    var baseGet = require_baseGet();
    var baseSet = require_baseSet();
    var castPath = require_castPath();
    function basePickBy(object, paths, predicate) {
      var index2 = -1, length = paths.length, result = {};
      while (++index2 < length) {
        var path2 = paths[index2], value = baseGet(object, path2);
        if (predicate(value, path2)) {
          baseSet(result, castPath(path2, object), value);
        }
      }
      return result;
    }
    module.exports = basePickBy;
  }
});

// node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path2, hasFunc) {
      path2 = castPath(path2, object);
      var index2 = -1, length = path2.length, result = false;
      while (++index2 < length) {
        var key = toKey(path2[index2]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index2 != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/lodash/hasIn.js"(exports, module) {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path2) {
      return object != null && hasPath(object, path2, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// node_modules/lodash/_basePick.js
var require_basePick = __commonJS({
  "node_modules/lodash/_basePick.js"(exports, module) {
    var basePickBy = require_basePickBy();
    var hasIn = require_hasIn();
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path2) {
        return hasIn(object, path2);
      });
    }
    module.exports = basePick;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array2, values) {
      var index2 = -1, length = values.length, offset = array2.length;
      while (++index2 < length) {
        array2[offset + index2] = values[index2];
      }
      return array2;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "node_modules/lodash/_isFlattenable.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    module.exports = isFlattenable;
  }
});

// node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "node_modules/lodash/_baseFlatten.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array2, depth, predicate, isStrict, result) {
      var index2 = -1, length = array2.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index2 < length) {
        var value = array2[index2];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    module.exports = baseFlatten;
  }
});

// node_modules/lodash/flatten.js
var require_flatten = __commonJS({
  "node_modules/lodash/flatten.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    function flatten(array2) {
      var length = array2 == null ? 0 : array2.length;
      return length ? baseFlatten(array2, 1) : [];
    }
    module.exports = flatten;
  }
});

// node_modules/lodash/_flatRest.js
var require_flatRest = __commonJS({
  "node_modules/lodash/_flatRest.js"(exports, module) {
    var flatten = require_flatten();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function flatRest(func) {
      return setToString(overRest(func, void 0, flatten), func + "");
    }
    module.exports = flatRest;
  }
});

// node_modules/lodash/pick.js
var require_pick = __commonJS({
  "node_modules/lodash/pick.js"(exports, module) {
    var basePick = require_basePick();
    var flatRest = require_flatRest();
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });
    module.exports = pick;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array2, predicate) {
      var index2 = -1, length = array2 == null ? 0 : array2.length;
      while (++index2 < length) {
        if (predicate(array2[index2], index2, array2)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array2, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array2.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array2);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array2;
      }
      var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array2, other);
      stack.set(other, array2);
      while (++index2 < arrLength) {
        var arrValue = array2[index2], othValue = other[index2];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index2, other, array2, stack) : customizer(arrValue, othValue, index2, array2, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array2);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map4) {
      var index2 = -1, result = Array(map4.size);
      map4.forEach(function(value, key) {
        result[++index2] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set2) {
      var index2 = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index2] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var Uint8Array = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array2, predicate) {
      var index2 = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array2[index2];
        if (predicate(value, index2, array2)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index2 = objLength;
      while (index2--) {
        var key = objProps[index2];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index2 < objLength) {
        key = objProps[index2];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView2 = getNative(root, "DataView");
    module.exports = DataView2;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap2 = getNative(root, "WeakMap");
    module.exports = WeakMap2;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView2 = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap2 = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var getTag = baseGetTag;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  "node_modules/lodash/isEqual.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    function isEqual2(value, other) {
      return baseIsEqual(value, other);
    }
    module.exports = isEqual2;
  }
});

// node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/lodash/_arrayEach.js"(exports, module) {
    function arrayEach(array2, iteratee) {
      var index2 = -1, length = array2 == null ? 0 : array2.length;
      while (++index2 < length) {
        if (iteratee(array2[index2], index2, array2) === false) {
          break;
        }
      }
      return array2;
    }
    module.exports = arrayEach;
  }
});

// node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/lodash/_baseAssign.js"(exports, module) {
    var copyObject = require_copyObject();
    var keys = require_keys();
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    module.exports = baseAssign;
  }
});

// node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/lodash/_baseAssignIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    module.exports = baseAssignIn;
  }
});

// node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/lodash/_copySymbols.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    module.exports = copySymbols;
  }
});

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module.exports = getSymbolsIn;
  }
});

// node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/lodash/_copySymbolsIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    module.exports = copySymbolsIn;
  }
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
  }
});

// node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "node_modules/lodash/_initCloneArray.js"(exports, module) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function initCloneArray(array2) {
      var length = array2.length, result = new array2.constructor(length);
      if (length && typeof array2[0] == "string" && hasOwnProperty.call(array2, "index")) {
        result.index = array2.index;
        result.input = array2.input;
      }
      return result;
    }
    module.exports = initCloneArray;
  }
});

// node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/lodash/_cloneDataView.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module.exports = cloneDataView;
  }
});

// node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/lodash/_cloneRegExp.js"(exports, module) {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    module.exports = cloneRegExp;
  }
});

// node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/lodash/_cloneSymbol.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module.exports = cloneSymbol;
  }
});

// node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "node_modules/lodash/_initCloneByTag.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return new Ctor();
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    module.exports = initCloneByTag;
  }
});

// node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "node_modules/lodash/_baseIsMap.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    module.exports = baseIsMap;
  }
});

// node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "node_modules/lodash/isMap.js"(exports, module) {
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module.exports = isMap;
  }
});

// node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "node_modules/lodash/_baseIsSet.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    module.exports = baseIsSet;
  }
});

// node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "node_modules/lodash/isSet.js"(exports, module) {
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module.exports = isSet;
  }
});

// node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "node_modules/lodash/_baseClone.js"(exports, module) {
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject = require_isObject();
    var isSet = require_isSet();
    var keys = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module.exports = baseClone;
  }
});

// node_modules/lodash/_baseSlice.js
var require_baseSlice = __commonJS({
  "node_modules/lodash/_baseSlice.js"(exports, module) {
    function baseSlice(array2, start2, end) {
      var index2 = -1, length = array2.length;
      if (start2 < 0) {
        start2 = -start2 > length ? 0 : length + start2;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start2 > end ? 0 : end - start2 >>> 0;
      start2 >>>= 0;
      var result = Array(length);
      while (++index2 < length) {
        result[index2] = array2[index2 + start2];
      }
      return result;
    }
    module.exports = baseSlice;
  }
});

// node_modules/lodash/_parent.js
var require_parent = __commonJS({
  "node_modules/lodash/_parent.js"(exports, module) {
    var baseGet = require_baseGet();
    var baseSlice = require_baseSlice();
    function parent(object, path2) {
      return path2.length < 2 ? object : baseGet(object, baseSlice(path2, 0, -1));
    }
    module.exports = parent;
  }
});

// node_modules/lodash/_baseUnset.js
var require_baseUnset = __commonJS({
  "node_modules/lodash/_baseUnset.js"(exports, module) {
    var castPath = require_castPath();
    var last = require_last();
    var parent = require_parent();
    var toKey = require_toKey();
    function baseUnset(object, path2) {
      path2 = castPath(path2, object);
      object = parent(object, path2);
      return object == null || delete object[toKey(last(path2))];
    }
    module.exports = baseUnset;
  }
});

// node_modules/lodash/_customOmitClone.js
var require_customOmitClone = __commonJS({
  "node_modules/lodash/_customOmitClone.js"(exports, module) {
    var isPlainObject = require_isPlainObject();
    function customOmitClone(value) {
      return isPlainObject(value) ? void 0 : value;
    }
    module.exports = customOmitClone;
  }
});

// node_modules/lodash/omit.js
var require_omit = __commonJS({
  "node_modules/lodash/omit.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var baseClone = require_baseClone();
    var baseUnset = require_baseUnset();
    var castPath = require_castPath();
    var copyObject = require_copyObject();
    var customOmitClone = require_customOmitClone();
    var flatRest = require_flatRest();
    var getAllKeysIn = require_getAllKeysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path2) {
        path2 = castPath(path2, object);
        isDeep || (isDeep = path2.length > 1);
        return path2;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });
    module.exports = omit;
  }
});

// node_modules/@react-spring/shared/dist/react-spring_shared.modern.mjs
var import_react = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var globals_exports = {};
__export(globals_exports, {
  assign: () => assign,
  colors: () => colors,
  createStringInterpolator: () => createStringInterpolator,
  skipAnimation: () => skipAnimation,
  to: () => to,
  willAdvance: () => willAdvance
});
var updateQueue = makeQueue();
var raf = (fn) => schedule(fn, updateQueue);
var writeQueue = makeQueue();
raf.write = (fn) => schedule(fn, writeQueue);
var onStartQueue = makeQueue();
raf.onStart = (fn) => schedule(fn, onStartQueue);
var onFrameQueue = makeQueue();
raf.onFrame = (fn) => schedule(fn, onFrameQueue);
var onFinishQueue = makeQueue();
raf.onFinish = (fn) => schedule(fn, onFinishQueue);
var timeouts = [];
raf.setTimeout = (handler, ms) => {
  const time2 = raf.now() + ms;
  const cancel = () => {
    const i3 = timeouts.findIndex((t5) => t5.cancel == cancel);
    if (~i3)
      timeouts.splice(i3, 1);
    pendingCount -= ~i3 ? 1 : 0;
  };
  const timeout = { time: time2, handler, cancel };
  timeouts.splice(findTimeout(time2), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};
var findTimeout = (time2) => ~(~timeouts.findIndex((t5) => t5.time > time2) || ~timeouts.length);
raf.cancel = (fn) => {
  onStartQueue.delete(fn);
  onFrameQueue.delete(fn);
  onFinishQueue.delete(fn);
  updateQueue.delete(fn);
  writeQueue.delete(fn);
};
raf.sync = (fn) => {
  sync = true;
  raf.batchedUpdates(fn);
  sync = false;
};
raf.throttle = (fn) => {
  let lastArgs;
  function queuedFn() {
    try {
      fn(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }
  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }
  throttled.handler = fn;
  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };
  return throttled;
};
var nativeRaf = typeof window != "undefined" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
raf.use = (impl) => nativeRaf = impl;
raf.now = typeof performance != "undefined" ? () => performance.now() : Date.now;
raf.batchedUpdates = (fn) => fn();
raf.catch = console.error;
raf.frameLoop = "always";
raf.advance = () => {
  if (raf.frameLoop !== "demand") {
    console.warn(
      "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
    );
  } else {
    update();
  }
};
var ts = -1;
var pendingCount = 0;
var sync = false;
function schedule(fn, queue) {
  if (sync) {
    queue.delete(fn);
    fn(0);
  } else {
    queue.add(fn);
    start();
  }
}
function start() {
  if (ts < 0) {
    ts = 0;
    if (raf.frameLoop !== "demand") {
      nativeRaf(loop);
    }
  }
}
function stop() {
  ts = -1;
}
function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}
function update() {
  const prevTs = ts;
  ts = raf.now();
  const count2 = findTimeout(ts);
  if (count2) {
    eachSafely(timeouts.splice(0, count2), (t5) => t5.handler());
    pendingCount -= count2;
  }
  if (!pendingCount) {
    stop();
    return;
  }
  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
}
function makeQueue() {
  let next = /* @__PURE__ */ new Set();
  let current = next;
  return {
    add(fn) {
      pendingCount += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },
    delete(fn) {
      pendingCount -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },
    flush(arg) {
      if (current.size) {
        next = /* @__PURE__ */ new Set();
        pendingCount -= current.size;
        eachSafely(current, (fn) => fn(arg) && next.add(fn));
        pendingCount += next.size;
        current = next;
      }
    }
  };
}
function eachSafely(values, each2) {
  values.forEach((value) => {
    try {
      each2(value);
    } catch (e4) {
      raf.catch(e4);
    }
  });
}
function noop() {
}
var defineHidden = (obj, key, value) => Object.defineProperty(obj, key, { value, writable: true, configurable: true });
var is = {
  arr: Array.isArray,
  obj: (a3) => !!a3 && a3.constructor.name === "Object",
  fun: (a3) => typeof a3 === "function",
  str: (a3) => typeof a3 === "string",
  num: (a3) => typeof a3 === "number",
  und: (a3) => a3 === void 0
};
function isEqual(a3, b2) {
  if (is.arr(a3)) {
    if (!is.arr(b2) || a3.length !== b2.length)
      return false;
    for (let i3 = 0; i3 < a3.length; i3++) {
      if (a3[i3] !== b2[i3])
        return false;
    }
    return true;
  }
  return a3 === b2;
}
var each = (obj, fn) => obj.forEach(fn);
function eachProp(obj, fn, ctx2) {
  if (is.arr(obj)) {
    for (let i3 = 0; i3 < obj.length; i3++) {
      fn.call(ctx2, obj[i3], `${i3}`);
    }
    return;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx2, obj[key], key);
    }
  }
}
var toArray = (a3) => is.und(a3) ? [] : is.arr(a3) ? a3 : [a3];
function flush(queue, iterator) {
  if (queue.size) {
    const items = Array.from(queue);
    queue.clear();
    each(items, iterator);
  }
}
var flushCalls = (queue, ...args) => flush(queue, (fn) => fn(...args));
var isSSR = () => typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
var createStringInterpolator;
var to;
var colors = null;
var skipAnimation = false;
var willAdvance = noop;
var assign = (globals) => {
  if (globals.to)
    to = globals.to;
  if (globals.now)
    raf.now = globals.now;
  if (globals.colors !== void 0)
    colors = globals.colors;
  if (globals.skipAnimation != null)
    skipAnimation = globals.skipAnimation;
  if (globals.createStringInterpolator)
    createStringInterpolator = globals.createStringInterpolator;
  if (globals.requestAnimationFrame)
    raf.use(globals.requestAnimationFrame);
  if (globals.batchedUpdates)
    raf.batchedUpdates = globals.batchedUpdates;
  if (globals.willAdvance)
    willAdvance = globals.willAdvance;
  if (globals.frameLoop)
    raf.frameLoop = globals.frameLoop;
};
var startQueue = /* @__PURE__ */ new Set();
var currentFrame = [];
var prevFrame = [];
var priority = 0;
var frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      raf(advance);
    }
  },
  /** Advance all animations by the given time. */
  advance,
  /** Call this when an animation's priority changes. */
  sort(animation) {
    if (priority) {
      raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);
      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    currentFrame = [];
    startQueue.clear();
  }
};
function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  raf(advance);
}
function startSafely(animation) {
  if (!currentFrame.includes(animation))
    startUnsafely(animation);
}
function startUnsafely(animation) {
  currentFrame.splice(
    findIndex(currentFrame, (other) => other.priority > animation.priority),
    0,
    animation
  );
}
function advance(dt2) {
  const nextFrame = prevFrame;
  for (let i3 = 0; i3 < currentFrame.length; i3++) {
    const animation = currentFrame[i3];
    priority = animation.priority;
    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt2);
      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }
  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}
function findIndex(arr, test) {
  const index2 = arr.findIndex(test);
  return index2 < 0 ? arr.length : index2;
}
var clamp = (min3, max3, v3) => Math.min(Math.max(v3, min3), max3);
var colors2 = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...parts) {
  return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp(
  "hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)
);
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;
function normalizeColor(color4) {
  let match;
  if (typeof color4 === "number") {
    return color4 >>> 0 === color4 && color4 >= 0 && color4 <= 4294967295 ? color4 : null;
  }
  if (match = hex6.exec(color4))
    return parseInt(match[1] + "ff", 16) >>> 0;
  if (colors && colors[color4] !== void 0) {
    return colors[color4];
  }
  if (match = rgb.exec(color4)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    255) >>> // a
    0;
  }
  if (match = rgba.exec(color4)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }
  if (match = hex3.exec(color4)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      "ff",
      // a
      16
    ) >>> 0;
  }
  if (match = hex8.exec(color4))
    return parseInt(match[1], 16) >>> 0;
  if (match = hex4.exec(color4)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      match[4] + match[4],
      // a
      16
    ) >>> 0;
  }
  if (match = hsl.exec(color4)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | 255) >>> // a
    0;
  }
  if (match = hsla.exec(color4)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | parse1(match[4])) >>> // a
    0;
  }
  return null;
}
function hue2rgb(p2, q, t5) {
  if (t5 < 0)
    t5 += 1;
  if (t5 > 1)
    t5 -= 1;
  if (t5 < 1 / 6)
    return p2 + (q - p2) * 6 * t5;
  if (t5 < 1 / 2)
    return q;
  if (t5 < 2 / 3)
    return p2 + (q - p2) * (2 / 3 - t5) * 6;
  return p2;
}
function hslToRgb(h, s3, l3) {
  const q = l3 < 0.5 ? l3 * (1 + s3) : l3 + s3 - l3 * s3;
  const p2 = 2 * l3 - q;
  const r3 = hue2rgb(p2, q, h + 1 / 3);
  const g2 = hue2rgb(p2, q, h);
  const b2 = hue2rgb(p2, q, h - 1 / 3);
  return Math.round(r3 * 255) << 24 | Math.round(g2 * 255) << 16 | Math.round(b2 * 255) << 8;
}
function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0)
    return 0;
  if (int > 255)
    return 255;
  return int;
}
function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  const num = parseFloat(str);
  if (num < 0)
    return 0;
  if (num > 1)
    return 255;
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0)
    return 0;
  if (int > 100)
    return 1;
  return int / 100;
}
function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null)
    return input;
  int32Color = int32Color || 0;
  const r3 = (int32Color & 4278190080) >>> 24;
  const g2 = (int32Color & 16711680) >>> 16;
  const b2 = (int32Color & 65280) >>> 8;
  const a3 = (int32Color & 255) / 255;
  return `rgba(${r3}, ${g2}, ${b2}, ${a3})`;
}
var createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range;
  }
  if (is.arr(range)) {
    return createInterpolator({
      range,
      output,
      extrapolate
    });
  }
  if (is.str(range.output[0])) {
    return createStringInterpolator(range);
  }
  const config2 = range;
  const outputRange = config2.output;
  const inputRange = config2.range || [0, 1];
  const extrapolateLeft = config2.extrapolateLeft || config2.extrapolate || "extend";
  const extrapolateRight = config2.extrapolateRight || config2.extrapolate || "extend";
  const easing = config2.easing || ((t5) => t5);
  return (input) => {
    const range2 = findRange(input, inputRange);
    return interpolate(
      input,
      inputRange[range2],
      inputRange[range2 + 1],
      outputRange[range2],
      outputRange[range2 + 1],
      easing,
      extrapolateLeft,
      extrapolateRight,
      config2.map
    );
  };
};
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map4) {
  let result = map4 ? map4(input) : input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity")
      return result;
    else if (extrapolateLeft === "clamp")
      result = inputMin;
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity")
      return result;
    else if (extrapolateRight === "clamp")
      result = inputMax;
  }
  if (outputMin === outputMax)
    return outputMin;
  if (inputMin === inputMax)
    return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity)
    result = -result;
  else if (inputMax === Infinity)
    result = result - inputMin;
  else
    result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity)
    result = -result;
  else if (outputMax === Infinity)
    result = result + outputMin;
  else
    result = result * (outputMax - outputMin) + outputMin;
  return result;
}
function findRange(input, inputRange) {
  for (var i3 = 1; i3 < inputRange.length - 1; ++i3)
    if (inputRange[i3] >= input)
      break;
  return i3 - 1;
}
var steps = (steps2, direction = "end") => (progress2) => {
  progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
  const expanded = progress2 * steps2;
  const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
  return clamp(0, 1, rounded / steps2);
};
var c1 = 1.70158;
var c2 = c1 * 1.525;
var c3 = c1 + 1;
var c4 = 2 * Math.PI / 3;
var c5 = 2 * Math.PI / 4.5;
var bounceOut = (x4) => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x4 < 1 / d1) {
    return n1 * x4 * x4;
  } else if (x4 < 2 / d1) {
    return n1 * (x4 -= 1.5 / d1) * x4 + 0.75;
  } else if (x4 < 2.5 / d1) {
    return n1 * (x4 -= 2.25 / d1) * x4 + 0.9375;
  } else {
    return n1 * (x4 -= 2.625 / d1) * x4 + 0.984375;
  }
};
var easings = {
  linear: (x4) => x4,
  easeInQuad: (x4) => x4 * x4,
  easeOutQuad: (x4) => 1 - (1 - x4) * (1 - x4),
  easeInOutQuad: (x4) => x4 < 0.5 ? 2 * x4 * x4 : 1 - Math.pow(-2 * x4 + 2, 2) / 2,
  easeInCubic: (x4) => x4 * x4 * x4,
  easeOutCubic: (x4) => 1 - Math.pow(1 - x4, 3),
  easeInOutCubic: (x4) => x4 < 0.5 ? 4 * x4 * x4 * x4 : 1 - Math.pow(-2 * x4 + 2, 3) / 2,
  easeInQuart: (x4) => x4 * x4 * x4 * x4,
  easeOutQuart: (x4) => 1 - Math.pow(1 - x4, 4),
  easeInOutQuart: (x4) => x4 < 0.5 ? 8 * x4 * x4 * x4 * x4 : 1 - Math.pow(-2 * x4 + 2, 4) / 2,
  easeInQuint: (x4) => x4 * x4 * x4 * x4 * x4,
  easeOutQuint: (x4) => 1 - Math.pow(1 - x4, 5),
  easeInOutQuint: (x4) => x4 < 0.5 ? 16 * x4 * x4 * x4 * x4 * x4 : 1 - Math.pow(-2 * x4 + 2, 5) / 2,
  easeInSine: (x4) => 1 - Math.cos(x4 * Math.PI / 2),
  easeOutSine: (x4) => Math.sin(x4 * Math.PI / 2),
  easeInOutSine: (x4) => -(Math.cos(Math.PI * x4) - 1) / 2,
  easeInExpo: (x4) => x4 === 0 ? 0 : Math.pow(2, 10 * x4 - 10),
  easeOutExpo: (x4) => x4 === 1 ? 1 : 1 - Math.pow(2, -10 * x4),
  easeInOutExpo: (x4) => x4 === 0 ? 0 : x4 === 1 ? 1 : x4 < 0.5 ? Math.pow(2, 20 * x4 - 10) / 2 : (2 - Math.pow(2, -20 * x4 + 10)) / 2,
  easeInCirc: (x4) => 1 - Math.sqrt(1 - Math.pow(x4, 2)),
  easeOutCirc: (x4) => Math.sqrt(1 - Math.pow(x4 - 1, 2)),
  easeInOutCirc: (x4) => x4 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x4, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x4 + 2, 2)) + 1) / 2,
  easeInBack: (x4) => c3 * x4 * x4 * x4 - c1 * x4 * x4,
  easeOutBack: (x4) => 1 + c3 * Math.pow(x4 - 1, 3) + c1 * Math.pow(x4 - 1, 2),
  easeInOutBack: (x4) => x4 < 0.5 ? Math.pow(2 * x4, 2) * ((c2 + 1) * 2 * x4 - c2) / 2 : (Math.pow(2 * x4 - 2, 2) * ((c2 + 1) * (x4 * 2 - 2) + c2) + 2) / 2,
  easeInElastic: (x4) => x4 === 0 ? 0 : x4 === 1 ? 1 : -Math.pow(2, 10 * x4 - 10) * Math.sin((x4 * 10 - 10.75) * c4),
  easeOutElastic: (x4) => x4 === 0 ? 0 : x4 === 1 ? 1 : Math.pow(2, -10 * x4) * Math.sin((x4 * 10 - 0.75) * c4) + 1,
  easeInOutElastic: (x4) => x4 === 0 ? 0 : x4 === 1 ? 1 : x4 < 0.5 ? -(Math.pow(2, 20 * x4 - 10) * Math.sin((20 * x4 - 11.125) * c5)) / 2 : Math.pow(2, -20 * x4 + 10) * Math.sin((20 * x4 - 11.125) * c5) / 2 + 1,
  easeInBounce: (x4) => 1 - bounceOut(1 - x4),
  easeOutBounce: bounceOut,
  easeInOutBounce: (x4) => x4 < 0.5 ? (1 - bounceOut(1 - 2 * x4)) / 2 : (1 + bounceOut(2 * x4 - 1)) / 2,
  steps
};
var $get = Symbol.for("FluidValue.get");
var $observers = Symbol.for("FluidValue.observers");
var hasFluidValue = (arg) => Boolean(arg && arg[$get]);
var getFluidValue = (arg) => arg && arg[$get] ? arg[$get]() : arg;
var getFluidObservers = (target) => target[$observers] || null;
function callFluidObserver(observer2, event) {
  if (observer2.eventObserved) {
    observer2.eventObserved(event);
  } else {
    observer2(event);
  }
}
function callFluidObservers(target, event) {
  const observers = target[$observers];
  if (observers) {
    observers.forEach((observer2) => {
      callFluidObserver(observer2, event);
    });
  }
}
var FluidValue = class {
  constructor(get) {
    if (!get && !(get = this.get)) {
      throw Error("Unknown getter");
    }
    setFluidGetter(this, get);
  }
};
var setFluidGetter = (target, get) => setHidden(target, $get, get);
function addFluidObserver(target, observer2) {
  if (target[$get]) {
    let observers = target[$observers];
    if (!observers) {
      setHidden(target, $observers, observers = /* @__PURE__ */ new Set());
    }
    if (!observers.has(observer2)) {
      observers.add(observer2);
      if (target.observerAdded) {
        target.observerAdded(observers.size, observer2);
      }
    }
  }
  return observer2;
}
function removeFluidObserver(target, observer2) {
  const observers = target[$observers];
  if (observers && observers.has(observer2)) {
    const count2 = observers.size - 1;
    if (count2) {
      observers.delete(observer2);
    } else {
      target[$observers] = null;
    }
    if (target.observerRemoved) {
      target.observerRemoved(count2, observer2);
    }
  }
}
var setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});
var numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
var rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
var variableToRgba = (input) => {
  const [token, fallback] = parseCSSVariable(input);
  if (!token || isSSR()) {
    return input;
  }
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);
  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith("--")) {
    const value2 = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);
    if (value2) {
      return value2;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }
  return input;
};
var parseCSSVariable = (current) => {
  const match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};
var namedColorRegex;
var rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;
var createStringInterpolator2 = (config2) => {
  if (!namedColorRegex)
    namedColorRegex = colors ? (
      // match color names, ignore partial matches
      new RegExp(`(${Object.keys(colors).join("|")})(?!\\w)`, "g")
    ) : (
      // never match
      /^\b$/
    );
  const output = config2.output.map((value) => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map((value) => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map(
    (_, i3) => keyframes.map((values) => {
      if (!(i3 in values)) {
        throw Error('The arity of each "output" value must be equal');
      }
      return values[i3];
    })
  );
  const interpolators = outputRanges.map(
    (output2) => createInterpolator({ ...config2, output: output2 })
  );
  return (input) => {
    var _a;
    const missingUnit = !unitRegex.test(output[0]) && ((_a = output.find((value) => unitRegex.test(value))) == null ? void 0 : _a.replace(numberRegex, ""));
    let i3 = 0;
    return output[0].replace(
      numberRegex,
      () => `${interpolators[i3++](input)}${missingUnit || ""}`
    ).replace(rgbaRegex, rgbaRound);
  };
};
var prefix = "react-spring: ";
var once = (fn) => {
  const func = fn;
  let called = false;
  if (typeof func != "function") {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }
  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};
var warnInterpolate = once(console.warn);
function deprecateInterpolate() {
  warnInterpolate(
    `${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var warnDirectCall = once(console.warn);
function deprecateDirectCall() {
  warnDirectCall(
    `${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function isAnimatedString(value) {
  return is.str(value) && (value[0] == "#" || /\d/.test(value) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !isSSR() && cssVariableRegex.test(value) || value in (colors || {}));
}
var useIsomorphicLayoutEffect = isSSR() ? import_react4.useEffect : import_react4.useLayoutEffect;
var useIsMounted = () => {
  const isMounted = (0, import_react3.useRef)(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};
function useForceUpdate() {
  const update22 = (0, import_react2.useState)()[1];
  const isMounted = useIsMounted();
  return () => {
    if (isMounted.current) {
      update22(Math.random());
    }
  };
}
function useMemoOne(getResult, inputs) {
  const [initial] = (0, import_react5.useState)(
    () => ({
      inputs,
      result: getResult()
    })
  );
  const committed = (0, import_react5.useRef)();
  const prevCache = committed.current;
  let cache = prevCache;
  if (cache) {
    const useCache = Boolean(
      inputs && cache.inputs && areInputsEqual(inputs, cache.inputs)
    );
    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }
  (0, import_react5.useEffect)(() => {
    committed.current = cache;
    if (prevCache == initial) {
      initial.inputs = initial.result = void 0;
    }
  }, [cache]);
  return cache.result;
}
function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }
  for (let i3 = 0; i3 < next.length; i3++) {
    if (next[i3] !== prev[i3]) {
      return false;
    }
  }
  return true;
}
var useOnce = (effect) => (0, import_react6.useEffect)(effect, emptyDeps);
var emptyDeps = [];
function usePrev(value) {
  const prevRef = (0, import_react7.useRef)();
  (0, import_react7.useEffect)(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}

// node_modules/@react-spring/core/dist/react-spring_core.modern.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/@react-spring/animated/dist/react-spring_animated.modern.mjs
var React = __toESM(require_react(), 1);
var import_react9 = __toESM(require_react(), 1);
var $node = Symbol.for("Animated:node");
var isAnimated = (value) => !!value && value[$node] === value;
var getAnimated = (owner) => owner && owner[$node];
var setAnimated = (owner, node) => defineHidden(owner, $node, node);
var getPayload = (owner) => owner && owner[$node] && owner[$node].getPayload();
var Animated = class {
  constructor() {
    setAnimated(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
};
var AnimatedValue = class extends Animated {
  constructor(_value) {
    super();
    this._value = _value;
    this.done = true;
    this.durationProgress = 0;
    if (is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }
  /** @internal */
  static create(value) {
    return new AnimatedValue(value);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(value, step) {
    if (is.num(value)) {
      this.lastPosition = value;
      if (step) {
        value = Math.round(value / step) * step;
        if (this.done) {
          this.lastPosition = value;
        }
      }
    }
    if (this._value === value) {
      return false;
    }
    this._value = value;
    return true;
  }
  reset() {
    const { done } = this;
    this.done = false;
    if (is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done)
        this.lastVelocity = null;
      this.v0 = null;
    }
  }
};
var AnimatedString = class extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = createInterpolator({
      output: [value, value]
    });
  }
  /** @internal */
  static create(value) {
    return new AnimatedString(value);
  }
  getValue() {
    const value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }
  setValue(value) {
    if (is.str(value)) {
      if (value == this._string) {
        return false;
      }
      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }
    return true;
  }
  reset(goal) {
    if (goal) {
      this._toString = createInterpolator({
        output: [this.getValue(), goal]
      });
    }
    this._value = 0;
    super.reset();
  }
};
var TreeContext = { dependencies: null };
var AnimatedObject = class extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }
  getValue(animated2) {
    const values = {};
    eachProp(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated2);
      } else if (hasFluidValue(source)) {
        values[key] = getFluidValue(source);
      } else if (!animated2) {
        values[key] = source;
      }
    });
    return values;
  }
  /** Replace the raw object data */
  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }
  reset() {
    if (this.payload) {
      each(this.payload, (node) => node.reset());
    }
  }
  /** Create a payload set. */
  _makePayload(source) {
    if (source) {
      const payload = /* @__PURE__ */ new Set();
      eachProp(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }
  /** Add to a payload set. */
  _addToPayload(source) {
    if (TreeContext.dependencies && hasFluidValue(source)) {
      TreeContext.dependencies.add(source);
    }
    const payload = getPayload(source);
    if (payload) {
      each(payload, (node) => this.add(node));
    }
  }
};
var AnimatedArray = class extends AnimatedObject {
  constructor(source) {
    super(source);
  }
  /** @internal */
  static create(source) {
    return new AnimatedArray(source);
  }
  getValue() {
    return this.source.map((node) => node.getValue());
  }
  setValue(source) {
    const payload = this.getPayload();
    if (source.length == payload.length) {
      return payload.map((node, i3) => node.setValue(source[i3])).some(Boolean);
    }
    super.setValue(source.map(makeAnimated));
    return true;
  }
};
function makeAnimated(value) {
  const nodeType = isAnimatedString(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}
function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
}
var withAnimated = (Component, host2) => {
  const hasInstance = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !is.fun(Component) || Component.prototype && Component.prototype.isReactComponent
  );
  return (0, import_react9.forwardRef)((givenProps, givenRef) => {
    const instanceRef = (0, import_react9.useRef)(null);
    const ref = hasInstance && // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, import_react9.useCallback)(
      (value) => {
        instanceRef.current = updateRef(givenRef, value);
      },
      [givenRef]
    );
    const [props, deps] = getAnimatedState(givenProps, host2);
    const forceUpdate = useForceUpdate();
    const callback = () => {
      const instance = instanceRef.current;
      if (hasInstance && !instance) {
        return;
      }
      const didUpdate = instance ? host2.applyAnimatedValues(instance, props.getValue(true)) : false;
      if (didUpdate === false) {
        forceUpdate();
      }
    };
    const observer = new PropsObserver(callback, deps);
    const observerRef = (0, import_react9.useRef)();
    useIsomorphicLayoutEffect(() => {
      observerRef.current = observer;
      each(deps, (dep) => addFluidObserver(dep, observer));
      return () => {
        if (observerRef.current) {
          each(
            observerRef.current.deps,
            (dep) => removeFluidObserver(dep, observerRef.current)
          );
          raf.cancel(observerRef.current.update);
        }
      };
    });
    (0, import_react9.useEffect)(callback, []);
    useOnce(() => () => {
      const observer2 = observerRef.current;
      each(observer2.deps, (dep) => removeFluidObserver(dep, observer2));
    });
    const usedProps = host2.getComponentProps(props.getValue());
    return React.createElement(Component, { ...usedProps, ref });
  });
};
var PropsObserver = class {
  constructor(update3, deps) {
    this.update = update3;
    this.deps = deps;
  }
  eventObserved(event) {
    if (event.type == "change") {
      raf.write(this.update);
    }
  }
};
function getAnimatedState(props, host2) {
  const dependencies = /* @__PURE__ */ new Set();
  TreeContext.dependencies = dependencies;
  if (props.style)
    props = {
      ...props,
      style: host2.createAnimatedStyle(props.style)
    };
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}
function updateRef(ref, value) {
  if (ref) {
    if (is.fun(ref))
      ref(value);
    else
      ref.current = value;
  }
  return value;
}
var cacheKey = Symbol.for("AnimatedComponent");
var createHost = (components, {
  applyAnimatedValues: applyAnimatedValues2 = () => false,
  createAnimatedStyle = (style) => new AnimatedObject(style),
  getComponentProps = (props) => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues: applyAnimatedValues2,
    createAnimatedStyle,
    getComponentProps
  };
  const animated2 = (Component) => {
    const displayName = getDisplayName(Component) || "Anonymous";
    if (is.str(Component)) {
      Component = animated2[Component] || (animated2[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }
    Component.displayName = `Animated(${displayName})`;
    return Component;
  };
  eachProp(components, (Component, key) => {
    if (is.arr(components)) {
      key = getDisplayName(Component);
    }
    animated2[key] = animated2(Component);
  });
  return {
    animated: animated2
  };
};
var getDisplayName = (arg) => is.str(arg) ? arg : arg && is.str(arg.displayName) ? arg.displayName : is.fun(arg) && arg.name || null;

// node_modules/@react-spring/core/dist/react-spring_core.modern.mjs
var React2 = __toESM(require_react(), 1);
var import_react11 = __toESM(require_react(), 1);
var import_react12 = __toESM(require_react(), 1);
var React22 = __toESM(require_react(), 1);
var import_react13 = __toESM(require_react(), 1);
var import_react14 = __toESM(require_react(), 1);
function callProp(value, ...args) {
  return is.fun(value) ? value(...args) : value;
}
var matchProp = (value, key) => value === true || !!(key && value && (is.fun(value) ? value(key) : toArray(value).includes(key)));
var resolveProp = (prop, key) => is.obj(prop) ? key && prop[key] : prop;
var getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : void 0;
var noopTransform = (value) => value;
var getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;
  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }
  const defaults2 = {};
  for (const key of keys) {
    const value = transform(props[key], key);
    if (!is.und(value)) {
      defaults2[key] = value;
    }
  }
  return defaults2;
};
var DEFAULT_PROPS = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
];
var RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  // Transition props
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  // Internal props
  keys: 1,
  callId: 1,
  parentId: 1
};
function getForwardProps(props) {
  const forward = {};
  let count2 = 0;
  eachProp(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count2++;
    }
  });
  if (count2) {
    return forward;
  }
}
function inferTo(props) {
  const to22 = getForwardProps(props);
  if (to22) {
    const out = { to: to22 };
    eachProp(props, (val, key) => key in to22 || (out[key] = val));
    return out;
  }
  return { ...props };
}
function computeGoal(value) {
  value = getFluidValue(value);
  return is.arr(value) ? value.map(computeGoal) : isAnimatedString(value) ? globals_exports.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _ in props)
    return true;
  return false;
}
function isAsyncTo(to22) {
  return is.fun(to22) || is.arr(to22) && is.obj(to22[0]);
}
function detachRefs(ctrl, ref) {
  var _a;
  (_a = ctrl.ref) == null ? void 0 : _a.delete(ctrl);
  ref == null ? void 0 : ref.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  var _a;
  if (ref && ctrl.ref !== ref) {
    (_a = ctrl.ref) == null ? void 0 : _a.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}
var config = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
};
var defaults = {
  ...config.default,
  mass: 1,
  damping: 1,
  easing: easings.linear,
  clamp: false
};
var AnimationConfig = class {
  constructor() {
    this.velocity = 0;
    Object.assign(this, defaults);
  }
};
function mergeConfig(config2, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = { ...defaultConfig };
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = { ...defaultConfig, ...newConfig };
  }
  sanitizeConfig(config2, newConfig);
  Object.assign(config2, newConfig);
  for (const key in defaults) {
    if (config2[key] == null) {
      config2[key] = defaults[key];
    }
  }
  let { frequency, damping } = config2;
  const { mass } = config2;
  if (!is.und(frequency)) {
    if (frequency < 0.01)
      frequency = 0.01;
    if (damping < 0)
      damping = 0;
    config2.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config2.friction = 4 * Math.PI * damping * mass / frequency;
  }
  return config2;
}
function sanitizeConfig(config2, props) {
  if (!is.und(props.decay)) {
    config2.duration = void 0;
  } else {
    const isTensionConfig = !is.und(props.tension) || !is.und(props.friction);
    if (isTensionConfig || !is.und(props.frequency) || !is.und(props.damping) || !is.und(props.mass)) {
      config2.duration = void 0;
      config2.decay = void 0;
    }
    if (isTensionConfig) {
      config2.frequency = void 0;
    }
  }
}
var emptyArray = [];
var Animation = class {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.config = new AnimationConfig();
    this.immediate = false;
  }
};
function scheduleProps(callId, { key, props, defaultProps, state, actions }) {
  return new Promise((resolve, reject) => {
    let delay;
    let timeout;
    let cancel = matchProp(props.cancel ?? (defaultProps == null ? void 0 : defaultProps.cancel), key);
    if (cancel) {
      onStart();
    } else {
      if (!is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }
      let pause = defaultProps == null ? void 0 : defaultProps.pause;
      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }
      delay = callProp(props.delay || 0, key);
      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }
    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - raf.now();
    }
    function onResume() {
      if (delay > 0 && !globals_exports.skipAnimation) {
        state.delayed = true;
        timeout = raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }
    function onStart() {
      if (state.delayed) {
        state.delayed = false;
      }
      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);
      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }
      try {
        actions.start({ ...props, callId, cancel }, resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}
var getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some((result) => result.cancelled) ? getCancelledResult(target.get()) : results.every((result) => result.noop) ? getNoopResult(target.get()) : getFinishedResult(
  target.get(),
  results.every((result) => result.finished)
);
var getNoopResult = (value) => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});
var getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});
var getCancelledResult = (value) => ({
  value,
  cancelled: true,
  finished: false
});
function runAsync(to22, props, state, target) {
  const { callId, parentId, onRest } = props;
  const { asyncTo: prevTo, promise: prevPromise } = state;
  if (!parentId && to22 === prevTo && !props.reset) {
    return prevPromise;
  }
  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to22;
    const defaultProps = getDefaultProps(
      props,
      (value, key) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        key === "onRest" ? void 0 : value
      )
    );
    let preventBail;
    let bail;
    const bailPromise = new Promise(
      (resolve, reject) => (preventBail = resolve, bail = reject)
    );
    const bailIfEnded = (bailSignal) => {
      const bailResult = (
        // The `cancel` prop or `stop` method was used.
        callId <= (state.cancelId || 0) && getCancelledResult(target) || // The async `to` prop was replaced.
        callId !== state.asyncId && getFinishedResult(target, false)
      );
      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };
    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAnimationSignal();
      return (async () => {
        if (globals_exports.skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }
        bailIfEnded(bailSignal);
        const props2 = is.obj(arg1) ? { ...arg1 } : { ...arg2, to: arg1 };
        props2.parentId = callId;
        eachProp(defaultProps, (value, key) => {
          if (is.und(props2[key])) {
            props2[key] = value;
          }
        });
        const result2 = await target.start(props2);
        bailIfEnded(bailSignal);
        if (state.paused) {
          await new Promise((resume) => {
            state.resumeQueue.add(resume);
          });
        }
        return result2;
      })();
    };
    let result;
    if (globals_exports.skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target, false);
    }
    try {
      let animating;
      if (is.arr(to22)) {
        animating = (async (queue) => {
          for (const props2 of queue) {
            await animate(props2);
          }
        })(to22);
      } else {
        animating = Promise.resolve(to22(animate, target.stop.bind(target)));
      }
      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAnimationSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : void 0;
        state.promise = parentId ? prevPromise : void 0;
      }
    }
    if (is.fun(onRest)) {
      raf.batchedUpdates(() => {
        onRest(result, target, target.item);
      });
    }
    return result;
  })();
}
function stopAsync(state, cancelId) {
  flush(state.timeouts, (t5) => t5.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = void 0;
  if (cancelId)
    state.cancelId = cancelId;
}
var BailSignal = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
};
var SkipAnimationSignal = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
};
var isFrameValue = (value) => value instanceof FrameValue;
var nextId = 1;
var FrameValue = class extends FluidValue {
  constructor() {
    super(...arguments);
    this.id = nextId++;
    this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(priority2) {
    if (this._priority != priority2) {
      this._priority = priority2;
      this._onPriorityChange(priority2);
    }
  }
  /** Get the current value */
  get() {
    const node = getAnimated(this);
    return node && node.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...args) {
    return globals_exports.to(this, args);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...args) {
    deprecateInterpolate();
    return globals_exports.to(this, args);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(count2) {
    if (count2 == 1)
      this._attach();
  }
  observerRemoved(count2) {
    if (count2 == 0)
      this._detach();
  }
  /** Called when the first child is added. */
  _attach() {
  }
  /** Called when the last child is removed. */
  _detach() {
  }
  /** Tell our children about our new value */
  _onChange(value, idle = false) {
    callFluidObservers(this, {
      type: "change",
      parent: this,
      value,
      idle
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(priority2) {
    if (!this.idle) {
      frameLoop.sort(this);
    }
    callFluidObservers(this, {
      type: "priority",
      parent: this,
      priority: priority2
    });
  }
};
var $P = Symbol.for("SpringPhase");
var HAS_ANIMATED = 1;
var IS_ANIMATING = 2;
var IS_PAUSED = 4;
var hasAnimated = (target) => (target[$P] & HAS_ANIMATED) > 0;
var isAnimating = (target) => (target[$P] & IS_ANIMATING) > 0;
var isPaused = (target) => (target[$P] & IS_PAUSED) > 0;
var setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
var setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;
var SpringValue = class extends FrameValue {
  constructor(arg1, arg2) {
    super();
    this.animation = new Animation();
    this.defaultProps = {};
    this._state = {
      paused: false,
      delayed: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    this._pendingCalls = /* @__PURE__ */ new Set();
    this._lastCallId = 0;
    this._lastToId = 0;
    this._memoizedDuration = 0;
    if (!is.und(arg1) || !is.und(arg2)) {
      const props = is.obj(arg1) ? { ...arg1 } : { ...arg2, from: arg1 };
      if (is.und(props.default)) {
        props.default = true;
      }
      this.start(props);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }
  get goal() {
    return getFluidValue(this.animation.to);
  }
  get velocity() {
    const node = getAnimated(this);
    return node instanceof AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map((node2) => node2.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return hasAnimated(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return isAnimating(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return isPaused(this);
  }
  /**
   *
   *
   */
  get isDelayed() {
    return this._state.delayed;
  }
  /** Advance the current animation by a number of milliseconds */
  advance(dt2) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let { toValues } = anim;
    const { config: config2 } = anim;
    const payload = getPayload(anim.to);
    if (!payload && hasFluidValue(anim.to)) {
      toValues = toArray(getFluidValue(anim.to));
    }
    anim.values.forEach((node2, i3) => {
      if (node2.done)
        return;
      const to22 = (
        // Animated strings always go from 0 to 1.
        node2.constructor == AnimatedString ? 1 : payload ? payload[i3].lastPosition : toValues[i3]
      );
      let finished = anim.immediate;
      let position = to22;
      if (!finished) {
        position = node2.lastPosition;
        if (config2.tension <= 0) {
          node2.done = true;
          return;
        }
        let elapsed = node2.elapsedTime += dt2;
        const from = anim.fromValues[i3];
        const v0 = node2.v0 != null ? node2.v0 : node2.v0 = is.arr(config2.velocity) ? config2.velocity[i3] : config2.velocity;
        let velocity;
        const precision = config2.precision || (from == to22 ? 5e-3 : Math.min(1, Math.abs(to22 - from) * 1e-3));
        if (!is.und(config2.duration)) {
          let p2 = 1;
          if (config2.duration > 0) {
            if (this._memoizedDuration !== config2.duration) {
              this._memoizedDuration = config2.duration;
              if (node2.durationProgress > 0) {
                node2.elapsedTime = config2.duration * node2.durationProgress;
                elapsed = node2.elapsedTime += dt2;
              }
            }
            p2 = (config2.progress || 0) + elapsed / this._memoizedDuration;
            p2 = p2 > 1 ? 1 : p2 < 0 ? 0 : p2;
            node2.durationProgress = p2;
          }
          position = from + config2.easing(p2) * (to22 - from);
          velocity = (position - node2.lastPosition) / dt2;
          finished = p2 == 1;
        } else if (config2.decay) {
          const decay = config2.decay === true ? 0.998 : config2.decay;
          const e4 = Math.exp(-(1 - decay) * elapsed);
          position = from + v0 / (1 - decay) * (1 - e4);
          finished = Math.abs(node2.lastPosition - position) <= precision;
          velocity = v0 * e4;
        } else {
          velocity = node2.lastVelocity == null ? v0 : node2.lastVelocity;
          const restVelocity = config2.restVelocity || precision / 10;
          const bounceFactor = config2.clamp ? 0 : config2.bounce;
          const canBounce = !is.und(bounceFactor);
          const isGrowing = from == to22 ? node2.v0 > 0 : from < to22;
          let isMoving;
          let isBouncing = false;
          const step = 1;
          const numSteps = Math.ceil(dt2 / step);
          for (let n3 = 0; n3 < numSteps; ++n3) {
            isMoving = Math.abs(velocity) > restVelocity;
            if (!isMoving) {
              finished = Math.abs(to22 - position) <= precision;
              if (finished) {
                break;
              }
            }
            if (canBounce) {
              isBouncing = position == to22 || position > to22 == isGrowing;
              if (isBouncing) {
                velocity = -velocity * bounceFactor;
                position = to22;
              }
            }
            const springForce = -config2.tension * 1e-6 * (position - to22);
            const dampingForce = -config2.friction * 1e-3 * velocity;
            const acceleration = (springForce + dampingForce) / config2.mass;
            velocity = velocity + acceleration * step;
            position = position + velocity * step;
          }
        }
        node2.lastVelocity = velocity;
        if (Number.isNaN(position)) {
          console.warn(`Got NaN while animating:`, this);
          finished = true;
        }
      }
      if (payload && !payload[i3].done) {
        finished = false;
      }
      if (finished) {
        node2.done = true;
      } else {
        idle = false;
      }
      if (node2.setValue(position, config2.round)) {
        changed = true;
      }
    });
    const node = getAnimated(this);
    const currVal = node.getValue();
    if (idle) {
      const finalVal = getFluidValue(anim.to);
      if ((currVal !== finalVal || changed) && !config2.decay) {
        node.setValue(finalVal);
        this._onChange(finalVal);
      } else if (changed && config2.decay) {
        this._onChange(currVal);
      }
      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }
  /** Set the current value, while stopping the current animation */
  set(value) {
    raf.batchedUpdates(() => {
      this._stop();
      this._focus(value);
      this._set(value);
    });
    return this;
  }
  /**
   * Freeze the active animation in time, as well as any updates merged
   * before `resume` is called.
   */
  pause() {
    this._update({ pause: true });
  }
  /** Resume the animation if paused. */
  resume() {
    this._update({ pause: false });
  }
  /** Skip to the end of the current animation. */
  finish() {
    if (isAnimating(this)) {
      const { to: to22, config: config2 } = this.animation;
      raf.batchedUpdates(() => {
        this._onStart();
        if (!config2.decay) {
          this._set(to22, false);
        }
        this._stop();
      });
    }
    return this;
  }
  /** Push props into the pending queue. */
  update(props) {
    const queue = this.queue || (this.queue = []);
    queue.push(props);
    return this;
  }
  start(to22, arg2) {
    let queue;
    if (!is.und(to22)) {
      queue = [is.obj(to22) ? to22 : { ...arg2, to: to22 }];
    } else {
      queue = this.queue || [];
      this.queue = [];
    }
    return Promise.all(
      queue.map((props) => {
        const up = this._update(props);
        return up;
      })
    ).then((results) => getCombinedResult(this, results));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(cancel) {
    const { to: to22 } = this.animation;
    this._focus(this.get());
    stopAsync(this._state, cancel && this._lastCallId);
    raf.batchedUpdates(() => this._stop(to22, cancel));
    return this;
  }
  /** Restart the animation. */
  reset() {
    this._update({ reset: true });
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      this._start();
    } else if (event.type == "priority") {
      this.priority = event.priority + 1;
    }
  }
  /**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */
  _prepareNode(props) {
    const key = this.key || "";
    let { to: to22, from } = props;
    to22 = is.obj(to22) ? to22[key] : to22;
    if (to22 == null || isAsyncTo(to22)) {
      to22 = void 0;
    }
    from = is.obj(from) ? from[key] : from;
    if (from == null) {
      from = void 0;
    }
    const range = { to: to22, from };
    if (!hasAnimated(this)) {
      if (props.reverse)
        [to22, from] = [from, to22];
      from = getFluidValue(from);
      if (!is.und(from)) {
        this._set(from);
      } else if (!getAnimated(this)) {
        this._set(to22);
      }
    }
    return range;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...props }, isLoop) {
    const { key, defaultProps } = this;
    if (props.default)
      Object.assign(
        defaultProps,
        getDefaultProps(
          props,
          (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value
        )
      );
    mergeActiveFn(this, props, "onProps");
    sendEvent(this, "onProps", props, this);
    const range = this._prepareNode(props);
    if (Object.isFrozen(this)) {
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    }
    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            flushCalls(state.pauseQueue);
            sendEvent(
              this,
              "onPause",
              getFinishedResult(this, checkFinished(this, this.animation.to)),
              this
            );
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);
            if (isAnimating(this)) {
              this._resume();
            }
            flushCalls(state.resumeQueue);
            sendEvent(
              this,
              "onResume",
              getFinishedResult(this, checkFinished(this, this.animation.to)),
              this
            );
          }
        },
        start: this._merge.bind(this, range)
      }
    }).then((result) => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);
        if (nextProps) {
          return this._update(nextProps, true);
        }
      }
      return result;
    });
  }
  /** Merge props into the current animation */
  _merge(range, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }
    const hasToProp = !is.und(range.to);
    const hasFromProp = !is.und(range.from);
    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }
    const { key, defaultProps, animation: anim } = this;
    const { to: prevTo, from: prevFrom } = anim;
    let { to: to22 = prevTo, from = prevFrom } = range;
    if (hasFromProp && !hasToProp && (!props.default || is.und(to22))) {
      to22 = from;
    }
    if (props.reverse)
      [to22, from] = [from, to22];
    const hasFromChanged = !isEqual(from, prevFrom);
    if (hasFromChanged) {
      anim.from = from;
    }
    from = getFluidValue(from);
    const hasToChanged = !isEqual(to22, prevTo);
    if (hasToChanged) {
      this._focus(to22);
    }
    const hasAsyncTo = isAsyncTo(props.to);
    const { config: config2 } = anim;
    const { decay, velocity } = config2;
    if (hasToProp || hasFromProp) {
      config2.velocity = 0;
    }
    if (props.config && !hasAsyncTo) {
      mergeConfig(
        config2,
        callProp(props.config, key),
        // Avoid calling the same "config" prop twice.
        props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0
      );
    }
    let node = getAnimated(this);
    if (!node || is.und(to22)) {
      return resolve(getFinishedResult(this, true));
    }
    const reset = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      is.und(props.reset) ? hasFromProp && !props.default : !is.und(from) && matchProp(props.reset, key)
    );
    const value = reset ? from : this.get();
    const goal = computeGoal(to22);
    const isAnimatable = is.num(goal) || is.arr(goal) || isAnimatedString(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));
    if (hasToChanged) {
      const nodeType = getAnimatedType(to22);
      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else
          throw Error(
            `Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`
          );
      }
    }
    const goalType = node.constructor;
    let started = hasFluidValue(to22);
    let finished = false;
    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;
      if (hasToChanged || hasValueChanged) {
        finished = isEqual(computeGoal(value), goal);
        started = !finished;
      }
      if (!isEqual(anim.immediate, immediate) && !immediate || !isEqual(config2.decay, decay) || !isEqual(config2.velocity, velocity)) {
        started = true;
      }
    }
    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
        this._stop(prevTo);
      }
    }
    if (!hasAsyncTo) {
      if (started || hasFluidValue(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = hasFluidValue(to22) ? null : goalType == AnimatedString ? [1] : toArray(goal);
      }
      if (anim.immediate != immediate) {
        anim.immediate = immediate;
        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }
      if (started) {
        const { onRest } = anim;
        each(ACTIVE_EVENTS, (type) => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        flushCalls(this._pendingCalls, result);
        this._pendingCalls.add(resolve);
        if (anim.changed)
          raf.batchedUpdates(() => {
            var _a;
            anim.changed = !reset;
            onRest == null ? void 0 : onRest(result, this);
            if (reset) {
              callProp(defaultProps.onRest, result);
            } else {
              (_a = anim.onStart) == null ? void 0 : _a.call(anim, result, this);
            }
          });
      }
    }
    if (reset) {
      this._set(value);
    }
    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
      this._start();
    } else if (isAnimating(this) && !hasToChanged) {
      this._pendingCalls.add(resolve);
    } else {
      resolve(getNoopResult(value));
    }
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(value) {
    const anim = this.animation;
    if (value !== anim.to) {
      if (getFluidObservers(this)) {
        this._detach();
      }
      anim.to = value;
      if (getFluidObservers(this)) {
        this._attach();
      }
    }
  }
  _attach() {
    let priority2 = 0;
    const { to: to22 } = this.animation;
    if (hasFluidValue(to22)) {
      addFluidObserver(to22, this);
      if (isFrameValue(to22)) {
        priority2 = to22.priority + 1;
      }
    }
    this.priority = priority2;
  }
  _detach() {
    const { to: to22 } = this.animation;
    if (hasFluidValue(to22)) {
      removeFluidObserver(to22, this);
    }
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(arg, idle = true) {
    const value = getFluidValue(arg);
    if (!is.und(value)) {
      const oldNode = getAnimated(this);
      if (!oldNode || !isEqual(value, oldNode.getValue())) {
        const nodeType = getAnimatedType(value);
        if (!oldNode || oldNode.constructor != nodeType) {
          setAnimated(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }
        if (oldNode) {
          raf.batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }
    return getAnimated(this);
  }
  _onStart() {
    const anim = this.animation;
    if (!anim.changed) {
      anim.changed = true;
      sendEvent(
        this,
        "onStart",
        getFinishedResult(this, checkFinished(this, anim.to)),
        this
      );
    }
  }
  _onChange(value, idle) {
    if (!idle) {
      this._onStart();
      callProp(this.animation.onChange, value, this);
    }
    callProp(this.defaultProps.onChange, value, this);
    super._onChange(value, idle);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const anim = this.animation;
    getAnimated(this).reset(getFluidValue(anim.to));
    if (!anim.immediate) {
      anim.fromValues = anim.values.map((node) => node.lastPosition);
    }
    if (!isAnimating(this)) {
      setActiveBit(this, true);
      if (!isPaused(this)) {
        this._resume();
      }
    }
  }
  _resume() {
    if (globals_exports.skipAnimation) {
      this.finish();
    } else {
      frameLoop.start(this);
    }
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      each(anim.values, (node) => {
        node.done = true;
      });
      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = void 0;
      }
      callFluidObservers(this, {
        type: "idle",
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal ?? anim.to));
      flushCalls(this._pendingCalls, result);
      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, "onRest", result, this);
      }
    }
  }
};
function checkFinished(target, to22) {
  const goal = computeGoal(to22);
  const value = computeGoal(target.get());
  return isEqual(value, goal);
}
function createLoopUpdate(props, loop2 = props.loop, to22 = props.to) {
  const loopRet = callProp(loop2);
  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse2 = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate({
      ...props,
      loop: loop2,
      // Avoid updating default props when looping.
      default: false,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !reverse2 || isAsyncTo(to22) ? to22 : void 0,
      // Ignore the "from" prop except on reset.
      from: reset ? props.from : void 0,
      reset,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...overrides
    });
  }
}
function createUpdate(props) {
  const { to: to22, from } = props = inferTo(props);
  const keys = /* @__PURE__ */ new Set();
  if (is.obj(to22))
    findDefined(to22, keys);
  if (is.obj(from))
    findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}
function declareUpdate(props) {
  const update22 = createUpdate(props);
  if (is.und(update22.default)) {
    update22.default = getDefaultProps(update22);
  }
  return update22;
}
function findDefined(values, keys) {
  eachProp(values, (value, key) => value != null && keys.add(key));
}
var ACTIVE_EVENTS = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : void 0;
}
function sendEvent(target, type, ...args) {
  var _a, _b, _c, _d;
  (_b = (_a = target.animation)[type]) == null ? void 0 : _b.call(_a, ...args);
  (_d = (_c = target.defaultProps)[type]) == null ? void 0 : _d.call(_c, ...args);
}
var BATCHED_EVENTS = ["onStart", "onChange", "onRest"];
var nextId2 = 1;
var Controller = class {
  constructor(props, flush3) {
    this.id = nextId2++;
    this.springs = {};
    this.queue = [];
    this._lastAsyncId = 0;
    this._active = /* @__PURE__ */ new Set();
    this._changed = /* @__PURE__ */ new Set();
    this._started = false;
    this._state = {
      paused: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    };
    this._onFrame = this._onFrame.bind(this);
    if (flush3) {
      this._flush = flush3;
    }
    if (props) {
      this.start({ default: true, ...props });
    }
  }
  /**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((spring) => {
      return spring.idle && !spring.isDelayed && !spring.isPaused;
    });
  }
  get item() {
    return this._item;
  }
  set item(item) {
    this._item = item;
  }
  /** Get the current values of our springs */
  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }
  /** Set the current values without animating. */
  set(values) {
    for (const key in values) {
      const value = values[key];
      if (!is.und(value)) {
        this.springs[key].set(value);
      }
    }
  }
  /** Push an update onto the queue of each value. */
  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }
    return this;
  }
  /**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */
  start(props) {
    let { queue } = this;
    if (props) {
      queue = toArray(props).map(createUpdate);
    } else {
      this.queue = [];
    }
    if (this._flush) {
      return this._flush(this, queue);
    }
    prepareKeys(this, queue);
    return flushUpdateQueue(this, queue);
  }
  /** @internal */
  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }
    if (keys) {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each((spring) => spring.stop(!!arg));
    }
    return this;
  }
  /** Freeze the active animation in time */
  pause(keys) {
    if (is.und(keys)) {
      this.start({ pause: true });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(keys) {
    if (is.und(keys)) {
      this.start({ pause: false });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(iterator) {
    eachProp(this.springs, iterator);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart, onChange, onRest } = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;
    if (active && !this._started || changed && !this._started) {
      this._started = true;
      flush(onStart, ([onStart2, result]) => {
        result.value = this.get();
        onStart2(result, this, this._item);
      });
    }
    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;
    if (changed && onChange.size) {
      flush(onChange, ([onChange2, result]) => {
        result.value = values;
        onChange2(result, this, this._item);
      });
    }
    if (idle) {
      this._started = false;
      flush(onRest, ([onRest2, result]) => {
        result.value = values;
        onRest2(result, this, this._item);
      });
    }
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      this._changed.add(event.parent);
      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else
      return;
    raf.onFrame(this._onFrame);
  }
};
function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map((props) => flushUpdate(ctrl, props))).then(
    (results) => getCombinedResult(ctrl, results)
  );
}
async function flushUpdate(ctrl, props, isLoop) {
  const { keys, to: to22, from, loop: loop2, onRest, onResolve } = props;
  const defaults2 = is.obj(props.default) && props.default;
  if (loop2) {
    props.loop = false;
  }
  if (to22 === false)
    props.to = null;
  if (from === false)
    props.from = null;
  const asyncTo = is.arr(to22) || is.fun(to22) ? to22 : void 0;
  if (asyncTo) {
    props.to = void 0;
    props.onRest = void 0;
    if (defaults2) {
      defaults2.onRest = void 0;
    }
  } else {
    each(BATCHED_EVENTS, (key) => {
      const handler = props[key];
      if (is.fun(handler)) {
        const queue = ctrl["_events"][key];
        props[key] = ({ finished, cancelled }) => {
          const result2 = queue.get(handler);
          if (result2) {
            if (!finished)
              result2.finished = false;
            if (cancelled)
              result2.cancelled = true;
          } else {
            queue.set(handler, {
              value: null,
              finished: finished || false,
              cancelled: cancelled || false
            });
          }
        };
        if (defaults2) {
          defaults2[key] = props[key];
        }
      }
    });
  }
  const state = ctrl["_state"];
  if (props.pause === !state.paused) {
    state.paused = props.pause;
    flushCalls(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
    props.pause = true;
  }
  const promises = (keys || Object.keys(ctrl.springs)).map(
    (key) => ctrl.springs[key].start(props)
  );
  const cancel = props.cancel === true || getDefaultProp(props, "cancel") === true;
  if (asyncTo || cancel && state.asyncId) {
    promises.push(
      scheduleProps(++ctrl["_lastAsyncId"], {
        props,
        state,
        actions: {
          pause: noop,
          resume: noop,
          start(props2, resolve) {
            if (cancel) {
              stopAsync(state, ctrl["_lastAsyncId"]);
              resolve(getCancelledResult(ctrl));
            } else {
              props2.onRest = onRest;
              resolve(
                runAsync(
                  asyncTo,
                  props2,
                  state,
                  ctrl
                )
              );
            }
          }
        }
      })
    );
  }
  if (state.paused) {
    await new Promise((resume) => {
      state.resumeQueue.add(resume);
    });
  }
  const result = getCombinedResult(ctrl, await Promise.all(promises));
  if (loop2 && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop2, to22);
    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }
  if (onResolve) {
    raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }
  return result;
}
function getSprings(ctrl, props) {
  const springs = { ...ctrl.springs };
  if (props) {
    each(toArray(props), (props2) => {
      if (is.und(props2.keys)) {
        props2 = createUpdate(props2);
      }
      if (!is.obj(props2.to)) {
        props2 = { ...props2, to: void 0 };
      }
      prepareSprings(springs, props2, (key) => {
        return createSpring(key);
      });
    });
  }
  setSprings(ctrl, springs);
  return springs;
}
function setSprings(ctrl, springs) {
  eachProp(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      addFluidObserver(spring, ctrl);
    }
  });
}
function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;
  if (observer) {
    addFluidObserver(spring, observer);
  }
  return spring;
}
function prepareSprings(springs, props, create) {
  if (props.keys) {
    each(props.keys, (key) => {
      const spring = springs[key] || (springs[key] = create(key));
      spring["_prepareNode"](props);
    });
  }
}
function prepareKeys(ctrl, queue) {
  each(queue, (props) => {
    prepareSprings(ctrl.springs, props, (key) => {
      return createSpring(key, ctrl);
    });
  });
}
var SpringContext = ({
  children,
  ...props
}) => {
  const inherited = (0, import_react11.useContext)(ctx);
  const pause = props.pause || !!inherited.pause, immediate = props.immediate || !!inherited.immediate;
  props = useMemoOne(() => ({ pause, immediate }), [pause, immediate]);
  const { Provider } = ctx;
  return React2.createElement(Provider, { value: props }, children);
};
var ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;
function makeContext(target, init) {
  Object.assign(target, React2.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}
var SpringRef = () => {
  const current = [];
  const SpringRef2 = function(props) {
    deprecateDirectCall();
    const results = [];
    each(current, (ctrl, i3) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update22 = _getProps(props, ctrl, i3);
        if (update22) {
          results.push(ctrl.start(update22));
        }
      }
    });
    return results;
  };
  SpringRef2.current = current;
  SpringRef2.add = function(ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };
  SpringRef2.delete = function(ctrl) {
    const i3 = current.indexOf(ctrl);
    if (~i3)
      current.splice(i3, 1);
  };
  SpringRef2.pause = function() {
    each(current, (ctrl) => ctrl.pause(...arguments));
    return this;
  };
  SpringRef2.resume = function() {
    each(current, (ctrl) => ctrl.resume(...arguments));
    return this;
  };
  SpringRef2.set = function(values) {
    each(current, (ctrl, i3) => {
      const update22 = is.fun(values) ? values(i3, ctrl) : values;
      if (update22) {
        ctrl.set(update22);
      }
    });
  };
  SpringRef2.start = function(props) {
    const results = [];
    each(current, (ctrl, i3) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update22 = this._getProps(props, ctrl, i3);
        if (update22) {
          results.push(ctrl.start(update22));
        }
      }
    });
    return results;
  };
  SpringRef2.stop = function() {
    each(current, (ctrl) => ctrl.stop(...arguments));
    return this;
  };
  SpringRef2.update = function(props) {
    each(current, (ctrl, i3) => ctrl.update(this._getProps(props, ctrl, i3)));
    return this;
  };
  const _getProps = function(arg, ctrl, index2) {
    return is.fun(arg) ? arg(index2, ctrl) : arg;
  };
  SpringRef2._getProps = _getProps;
  return SpringRef2;
};
function useSprings(length, props, deps) {
  const propsFn = is.fun(props) && props;
  if (propsFn && !deps)
    deps = [];
  const ref = (0, import_react10.useMemo)(
    () => propsFn || arguments.length == 3 ? SpringRef() : void 0,
    []
  );
  const layoutId = (0, import_react10.useRef)(0);
  const forceUpdate = useForceUpdate();
  const state = (0, import_react10.useMemo)(
    () => ({
      ctrls: [],
      queue: [],
      flush(ctrl, updates2) {
        const springs2 = getSprings(ctrl, updates2);
        const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs2).some((key) => !ctrl.springs[key]);
        return canFlushSync ? flushUpdateQueue(ctrl, updates2) : new Promise((resolve) => {
          setSprings(ctrl, springs2);
          state.queue.push(() => {
            resolve(flushUpdateQueue(ctrl, updates2));
          });
          forceUpdate();
        });
      }
    }),
    []
  );
  const ctrls = (0, import_react10.useRef)([...state.ctrls]);
  const updates = [];
  const prevLength = usePrev(length) || 0;
  (0, import_react10.useMemo)(() => {
    each(ctrls.current.slice(length, prevLength), (ctrl) => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  (0, import_react10.useMemo)(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);
  function declareUpdates(startIndex, endIndex) {
    for (let i3 = startIndex; i3 < endIndex; i3++) {
      const ctrl = ctrls.current[i3] || (ctrls.current[i3] = new Controller(null, state.flush));
      const update22 = propsFn ? propsFn(i3, ctrl) : props[i3];
      if (update22) {
        updates[i3] = declareUpdate(update22);
      }
    }
  }
  const springs = ctrls.current.map((ctrl, i3) => getSprings(ctrl, updates[i3]));
  const context = (0, import_react10.useContext)(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useIsomorphicLayoutEffect(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const { queue } = state;
    if (queue.length) {
      state.queue = [];
      each(queue, (cb) => cb());
    }
    each(ctrls.current, (ctrl, i3) => {
      ref == null ? void 0 : ref.add(ctrl);
      if (hasContext) {
        ctrl.start({ default: context });
      }
      const update22 = updates[i3];
      if (update22) {
        replaceRef(ctrl, update22.ref);
        if (ctrl.ref) {
          ctrl.queue.push(update22);
        } else {
          ctrl.start(update22);
        }
      }
    });
  });
  useOnce(() => () => {
    each(state.ctrls, (ctrl) => ctrl.stop(true));
  });
  const values = springs.map((x4) => ({ ...x4 }));
  return ref ? [values, ref] : values;
}
function useSpring(props, deps) {
  const isFn = is.fun(props);
  const [[values], ref] = useSprings(
    1,
    isFn ? props : [props],
    isFn ? deps || [] : deps
  );
  return isFn || arguments.length == 2 ? [values, ref] : values;
}
function useTransition(data, props, deps) {
  const propsFn = is.fun(props) && props;
  const {
    reset,
    sort: sort2,
    trail = 0,
    expires = true,
    exitBeforeEnter = false,
    onDestroyed,
    ref: propsRef,
    config: propsConfig
  } = propsFn ? propsFn() : props;
  const ref = (0, import_react13.useMemo)(
    () => propsFn || arguments.length == 3 ? SpringRef() : void 0,
    []
  );
  const items = toArray(data);
  const transitions = [];
  const usedTransitions = (0, import_react13.useRef)(null);
  const prevTransitions = reset ? null : usedTransitions.current;
  useIsomorphicLayoutEffect(() => {
    usedTransitions.current = transitions;
  });
  useOnce(() => {
    each(transitions, (t5) => {
      ref == null ? void 0 : ref.add(t5.ctrl);
      t5.ctrl.ref = ref;
    });
    return () => {
      each(usedTransitions.current, (t5) => {
        if (t5.expired) {
          clearTimeout(t5.expirationId);
        }
        detachRefs(t5.ctrl, ref);
        t5.ctrl.stop(true);
      });
    };
  });
  const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
  const expired = reset && usedTransitions.current || [];
  useIsomorphicLayoutEffect(
    () => each(expired, ({ ctrl, item, key }) => {
      detachRefs(ctrl, ref);
      callProp(onDestroyed, item, key);
    })
  );
  const reused = [];
  if (prevTransitions)
    each(prevTransitions, (t5, i3) => {
      if (t5.expired) {
        clearTimeout(t5.expirationId);
        expired.push(t5);
      } else {
        i3 = reused[i3] = keys.indexOf(t5.key);
        if (~i3)
          transitions[i3] = t5;
      }
    });
  each(items, (item, i3) => {
    if (!transitions[i3]) {
      transitions[i3] = {
        key: keys[i3],
        item,
        phase: "mount",
        ctrl: new Controller()
      };
      transitions[i3].ctrl.item = item;
    }
  });
  if (reused.length) {
    let i3 = -1;
    const { leave } = propsFn ? propsFn() : props;
    each(reused, (keyIndex, prevIndex) => {
      const t5 = prevTransitions[prevIndex];
      if (~keyIndex) {
        i3 = transitions.indexOf(t5);
        transitions[i3] = { ...t5, item: items[keyIndex] };
      } else if (leave) {
        transitions.splice(++i3, 0, t5);
      }
    });
  }
  if (is.fun(sort2)) {
    transitions.sort((a3, b2) => sort2(a3.item, b2.item));
  }
  let delay = -trail;
  const forceUpdate = useForceUpdate();
  const defaultProps = getDefaultProps(props);
  const changes = /* @__PURE__ */ new Map();
  const exitingTransitions = (0, import_react13.useRef)(/* @__PURE__ */ new Map());
  const forceChange = (0, import_react13.useRef)(false);
  each(transitions, (t5, i3) => {
    const key = t5.key;
    const prevPhase = t5.phase;
    const p2 = propsFn ? propsFn() : props;
    let to22;
    let phase;
    const propsDelay = callProp(p2.delay || 0, key);
    if (prevPhase == "mount") {
      to22 = p2.enter;
      phase = "enter";
    } else {
      const isLeave = keys.indexOf(key) < 0;
      if (prevPhase != "leave") {
        if (isLeave) {
          to22 = p2.leave;
          phase = "leave";
        } else if (to22 = p2.update) {
          phase = "update";
        } else
          return;
      } else if (!isLeave) {
        to22 = p2.enter;
        phase = "enter";
      } else
        return;
    }
    to22 = callProp(to22, t5.item, i3);
    to22 = is.obj(to22) ? inferTo(to22) : { to: to22 };
    if (!to22.config) {
      const config2 = propsConfig || defaultProps.config;
      to22.config = callProp(config2, t5.item, i3, phase);
    }
    delay += trail;
    const payload = {
      ...defaultProps,
      // we need to add our props.delay value you here.
      delay: propsDelay + delay,
      ref: propsRef,
      immediate: p2.immediate,
      // This prevents implied resets.
      reset: false,
      // Merge any phase-specific props.
      ...to22
    };
    if (phase == "enter" && is.und(payload.from)) {
      const p22 = propsFn ? propsFn() : props;
      const from = is.und(p22.initial) || prevTransitions ? p22.from : p22.initial;
      payload.from = callProp(from, t5.item, i3);
    }
    const { onResolve } = payload;
    payload.onResolve = (result) => {
      callProp(onResolve, result);
      const transitions2 = usedTransitions.current;
      const t24 = transitions2.find((t34) => t34.key === key);
      if (!t24)
        return;
      if (result.cancelled && t24.phase != "update") {
        return;
      }
      if (t24.ctrl.idle) {
        const idle = transitions2.every((t34) => t34.ctrl.idle);
        if (t24.phase == "leave") {
          const expiry = callProp(expires, t24.item);
          if (expiry !== false) {
            const expiryMs = expiry === true ? 0 : expiry;
            t24.expired = true;
            if (!idle && expiryMs > 0) {
              if (expiryMs <= 2147483647)
                t24.expirationId = setTimeout(forceUpdate, expiryMs);
              return;
            }
          }
        }
        if (idle && transitions2.some((t34) => t34.expired)) {
          exitingTransitions.current.delete(t24);
          if (exitBeforeEnter) {
            forceChange.current = true;
          }
          forceUpdate();
        }
      }
    };
    const springs = getSprings(t5.ctrl, payload);
    if (phase === "leave" && exitBeforeEnter) {
      exitingTransitions.current.set(t5, { phase, springs, payload });
    } else {
      changes.set(t5, { phase, springs, payload });
    }
  });
  const context = (0, import_react13.useContext)(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useIsomorphicLayoutEffect(() => {
    if (hasContext) {
      each(transitions, (t5) => {
        t5.ctrl.start({ default: context });
      });
    }
  }, [context]);
  each(changes, (_, t5) => {
    if (exitingTransitions.current.size) {
      const ind = transitions.findIndex((state) => state.key === t5.key);
      transitions.splice(ind, 1);
    }
  });
  useIsomorphicLayoutEffect(
    () => {
      each(
        exitingTransitions.current.size ? exitingTransitions.current : changes,
        ({ phase, payload }, t5) => {
          const { ctrl } = t5;
          t5.phase = phase;
          ref == null ? void 0 : ref.add(ctrl);
          if (hasContext && phase == "enter") {
            ctrl.start({ default: context });
          }
          if (payload) {
            replaceRef(ctrl, payload.ref);
            if ((ctrl.ref || ref) && !forceChange.current) {
              ctrl.update(payload);
            } else {
              ctrl.start(payload);
              if (forceChange.current) {
                forceChange.current = false;
              }
            }
          }
        }
      );
    },
    reset ? void 0 : deps
  );
  const renderTransitions = (render) => React22.createElement(React22.Fragment, null, transitions.map((t5, i3) => {
    const { springs } = changes.get(t5) || t5.ctrl;
    const elem = render({ ...springs }, t5.item, t5, i3);
    return elem && elem.type ? React22.createElement(
      elem.type,
      {
        ...elem.props,
        key: is.str(t5.key) || is.num(t5.key) ? t5.key : t5.ctrl.id,
        ref: elem.ref
      }
    ) : elem;
  }));
  return ref ? [renderTransitions, ref] : renderTransitions;
}
var nextKey = 1;
function getKeys(items, { key, keys = key }, prevTransitions) {
  if (keys === null) {
    const reused = /* @__PURE__ */ new Set();
    return items.map((item) => {
      const t5 = prevTransitions && prevTransitions.find(
        (t24) => t24.item === item && t24.phase !== "leave" && !reused.has(t24)
      );
      if (t5) {
        reused.add(t5);
        return t5.key;
      }
      return nextKey++;
    });
  }
  return is.und(keys) ? items : is.fun(keys) ? items.map(keys) : toArray(keys);
}
var Interpolation = class extends FrameValue {
  constructor(source, args) {
    super();
    this.source = source;
    this.idle = true;
    this._active = /* @__PURE__ */ new Set();
    this.calc = createInterpolator(...args);
    const value = this._get();
    const nodeType = getAnimatedType(value);
    setAnimated(this, nodeType.create(value));
  }
  advance(_dt) {
    const value = this._get();
    const oldValue = this.get();
    if (!isEqual(value, oldValue)) {
      getAnimated(this).setValue(value);
      this._onChange(value, this.idle);
    }
    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }
  _get() {
    const inputs = is.arr(this.source) ? this.source.map(getFluidValue) : toArray(getFluidValue(this.source));
    return this.calc(...inputs);
  }
  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      each(getPayload(this), (node) => {
        node.done = false;
      });
      if (globals_exports.skipAnimation) {
        raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        frameLoop.start(this);
      }
    }
  }
  // Observe our sources only when we're observed.
  _attach() {
    let priority2 = 1;
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        addFluidObserver(source, this);
      }
      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }
        priority2 = Math.max(priority2, source.priority + 1);
      }
    });
    this.priority = priority2;
    this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        removeFluidObserver(source, this);
      }
    });
    this._active.clear();
    becomeIdle(this);
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);
        this._start();
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else if (event.type == "priority") {
      this.priority = toArray(this.source).reduce(
        (highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1),
        0
      );
    }
  }
};
function isIdle(source) {
  return source.idle !== false;
}
function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}
function becomeIdle(self2) {
  if (!self2.idle) {
    self2.idle = true;
    each(getPayload(self2), (node) => {
      node.done = true;
    });
    callFluidObservers(self2, {
      type: "idle",
      parent: self2
    });
  }
}
var to2 = (source, ...args) => new Interpolation(source, args);
globals_exports.assign({
  createStringInterpolator: createStringInterpolator2,
  to: (source, args) => new Interpolation(source, args)
});
var update2 = frameLoop.advance;

// node_modules/@react-spring/web/dist/react-spring_web.modern.mjs
var import_react_dom = __toESM(require_react_dom(), 1);
var isCustomPropRE = /^--/;
function dangerousStyleValue(name, value) {
  if (value == null || typeof value === "boolean" || value === "")
    return "";
  if (typeof value === "number" && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]))
    return value + "px";
  return ("" + value).trim();
}
var attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }
  const isFilterElement = instance.nodeName === "filter" || instance.parentNode && instance.parentNode.nodeName === "filter";
  const { style, children, scrollTop, scrollLeft, viewBox, ...attributes } = props;
  const values = Object.values(attributes);
  const names = Object.keys(attributes).map(
    (name) => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (n3) => "-" + n3.toLowerCase()
    ))
  );
  if (children !== void 0) {
    instance.textContent = children;
  }
  for (const name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);
      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }
  names.forEach((name, i3) => {
    instance.setAttribute(name, values[i3]);
  });
  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }
  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }
  if (viewBox !== void 0) {
    instance.setAttribute("viewBox", viewBox);
  }
}
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var prefixKey = (prefix2, key) => prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
var prefixes = ["Webkit", "Ms", "Moz", "O"];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach((prefix2) => acc[prefixKey(prefix2, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);
var domTransforms = /^(matrix|translate|scale|rotate|skew)/;
var pxTransforms = /^(translate)/;
var degTransforms = /^(rotate|skew)/;
var addUnit = (value, unit2) => is.num(value) && value !== 0 ? value + unit2 : value;
var isValueIdentity = (value, id) => is.arr(value) ? value.every((v3) => isValueIdentity(v3, id)) : is.num(value) ? value === id : parseFloat(value) === id;
var AnimatedStyle = class extends AnimatedObject {
  constructor({ x: x4, y: y4, z: z3, ...style }) {
    const inputs = [];
    const transforms = [];
    if (x4 || y4 || z3) {
      inputs.push([x4 || 0, y4 || 0, z3 || 0]);
      transforms.push((xyz) => [
        `translate3d(${xyz.map((v3) => addUnit(v3, "px")).join(",")})`,
        // prettier-ignore
        isValueIdentity(xyz, 0)
      ]);
    }
    eachProp(style, (value, key) => {
      if (key === "transform") {
        inputs.push([value || ""]);
        transforms.push((transform) => [transform, transform === ""]);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (is.und(value))
          return;
        const unit2 = pxTransforms.test(key) ? "px" : degTransforms.test(key) ? "deg" : "";
        inputs.push(toArray(value));
        transforms.push(
          key === "rotate3d" ? ([x22, y22, z22, deg]) => [
            `rotate3d(${x22},${y22},${z22},${addUnit(deg, unit2)})`,
            isValueIdentity(deg, 0)
          ] : (input) => [
            `${key}(${input.map((v3) => addUnit(v3, unit2)).join(",")})`,
            isValueIdentity(input, key.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    });
    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }
    super(style);
  }
};
var FluidTransform = class extends FluidValue {
  constructor(inputs, transforms) {
    super();
    this.inputs = inputs;
    this.transforms = transforms;
    this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let transform = "";
    let identity6 = true;
    each(this.inputs, (input, i3) => {
      const arg1 = getFluidValue(input[0]);
      const [t5, id] = this.transforms[i3](
        is.arr(arg1) ? arg1 : input.map(getFluidValue)
      );
      transform += " " + t5;
      identity6 = identity6 && id;
    });
    return identity6 ? "none" : transform;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(count2) {
    if (count2 == 1)
      each(
        this.inputs,
        (input) => each(
          input,
          (value) => hasFluidValue(value) && addFluidObserver(value, this)
        )
      );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(count2) {
    if (count2 == 0)
      each(
        this.inputs,
        (input) => each(
          input,
          (value) => hasFluidValue(value) && removeFluidObserver(value, this)
        )
      );
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._value = null;
    }
    callFluidObservers(this, event);
  }
};
var primitives = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
globals_exports.assign({
  batchedUpdates: import_react_dom.unstable_batchedUpdates,
  createStringInterpolator: createStringInterpolator2,
  colors: colors2
});
var host = createHost(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: (style) => new AnimatedStyle(style),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop, scrollLeft, ...props }) => props
});
var animated = host.animated;

// node_modules/@nivo/tooltip/dist/nivo-tooltip.es.js
var import_react16 = __toESM(require_react());

// node_modules/@nivo/core/dist/nivo-core.es.js
var import_react15 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_merge2 = __toESM(require_merge());
var import_get = __toESM(require_get());
var import_set2 = __toESM(require_set());

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m3, l3;
  format2 = (format2 + "").trim().toLowerCase();
  return (m3 = reHex.exec(format2)) ? (l3 = m3[1].length, m3 = parseInt(m3[1], 16), l3 === 6 ? rgbn(m3) : l3 === 3 ? new Rgb(m3 >> 8 & 15 | m3 >> 4 & 240, m3 >> 4 & 15 | m3 & 240, (m3 & 15) << 4 | m3 & 15, 1) : l3 === 8 ? rgba2(m3 >> 24 & 255, m3 >> 16 & 255, m3 >> 8 & 255, (m3 & 255) / 255) : l3 === 4 ? rgba2(m3 >> 12 & 15 | m3 >> 8 & 240, m3 >> 8 & 15 | m3 >> 4 & 240, m3 >> 4 & 15 | m3 & 240, ((m3 & 15) << 4 | m3 & 15) / 255) : null) : (m3 = reRgbInteger.exec(format2)) ? new Rgb(m3[1], m3[2], m3[3], 1) : (m3 = reRgbPercent.exec(format2)) ? new Rgb(m3[1] * 255 / 100, m3[2] * 255 / 100, m3[3] * 255 / 100, 1) : (m3 = reRgbaInteger.exec(format2)) ? rgba2(m3[1], m3[2], m3[3], m3[4]) : (m3 = reRgbaPercent.exec(format2)) ? rgba2(m3[1] * 255 / 100, m3[2] * 255 / 100, m3[3] * 255 / 100, m3[4]) : (m3 = reHslPercent.exec(format2)) ? hsla2(m3[1], m3[2] / 100, m3[3] / 100, 1) : (m3 = reHslaPercent.exec(format2)) ? hsla2(m3[1], m3[2] / 100, m3[3] / 100, m3[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n3) {
  return new Rgb(n3 >> 16 & 255, n3 >> 8 & 255, n3 & 255, 1);
}
function rgba2(r3, g2, b2, a3) {
  if (a3 <= 0)
    r3 = g2 = b2 = NaN;
  return new Rgb(r3, g2, b2, a3);
}
function rgbConvert(o3) {
  if (!(o3 instanceof Color))
    o3 = color(o3);
  if (!o3)
    return new Rgb();
  o3 = o3.rgb();
  return new Rgb(o3.r, o3.g, o3.b, o3.opacity);
}
function rgb2(r3, g2, b2, opacity) {
  return arguments.length === 1 ? rgbConvert(r3) : new Rgb(r3, g2, b2, opacity == null ? 1 : opacity);
}
function Rgb(r3, g2, b2, opacity) {
  this.r = +r3;
  this.g = +g2;
  this.b = +b2;
  this.opacity = +opacity;
}
define_default(Rgb, rgb2, extend(Color, {
  brighter(k3) {
    k3 = k3 == null ? brighter : Math.pow(brighter, k3);
    return new Rgb(this.r * k3, this.g * k3, this.b * k3, this.opacity);
  },
  darker(k3) {
    k3 = k3 == null ? darker : Math.pow(darker, k3);
    return new Rgb(this.r * k3, this.g * k3, this.b * k3, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a3 = clampa(this.opacity);
  return `${a3 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a3 === 1 ? ")" : `, ${a3})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla2(h, s3, l3, a3) {
  if (a3 <= 0)
    h = s3 = l3 = NaN;
  else if (l3 <= 0 || l3 >= 1)
    h = s3 = NaN;
  else if (s3 <= 0)
    h = NaN;
  return new Hsl(h, s3, l3, a3);
}
function hslConvert(o3) {
  if (o3 instanceof Hsl)
    return new Hsl(o3.h, o3.s, o3.l, o3.opacity);
  if (!(o3 instanceof Color))
    o3 = color(o3);
  if (!o3)
    return new Hsl();
  if (o3 instanceof Hsl)
    return o3;
  o3 = o3.rgb();
  var r3 = o3.r / 255, g2 = o3.g / 255, b2 = o3.b / 255, min3 = Math.min(r3, g2, b2), max3 = Math.max(r3, g2, b2), h = NaN, s3 = max3 - min3, l3 = (max3 + min3) / 2;
  if (s3) {
    if (r3 === max3)
      h = (g2 - b2) / s3 + (g2 < b2) * 6;
    else if (g2 === max3)
      h = (b2 - r3) / s3 + 2;
    else
      h = (r3 - g2) / s3 + 4;
    s3 /= l3 < 0.5 ? max3 + min3 : 2 - max3 - min3;
    h *= 60;
  } else {
    s3 = l3 > 0 && l3 < 1 ? 0 : h;
  }
  return new Hsl(h, s3, l3, o3.opacity);
}
function hsl2(h, s3, l3, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s3, l3, opacity == null ? 1 : opacity);
}
function Hsl(h, s3, l3, opacity) {
  this.h = +h;
  this.s = +s3;
  this.l = +l3;
  this.opacity = +opacity;
}
define_default(Hsl, hsl2, extend(Color, {
  brighter(k3) {
    k3 = k3 == null ? brighter : Math.pow(brighter, k3);
    return new Hsl(this.h, this.s, this.l * k3, this.opacity);
  },
  darker(k3) {
    k3 = k3 == null ? darker : Math.pow(darker, k3);
    return new Hsl(this.h, this.s, this.l * k3, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s3 = isNaN(h) || isNaN(this.s) ? 0 : this.s, l3 = this.l, m22 = l3 + (l3 < 0.5 ? l3 : 1 - l3) * s3, m1 = 2 * l3 - m22;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m22),
      hsl2rgb(h, m1, m22),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m22),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a3 = clampa(this.opacity);
    return `${a3 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a3 === 1 ? ")" : `, ${a3})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m22) {
  return (h < 60 ? m1 + (m22 - m1) * h / 60 : h < 180 ? m22 : h < 240 ? m1 + (m22 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-color/src/math.js
var radians = Math.PI / 180;
var degrees = 180 / Math.PI;

// node_modules/d3-color/src/lab.js
var K = 18;
var Xn = 0.96422;
var Yn = 1;
var Zn = 0.82521;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;
function labConvert(o3) {
  if (o3 instanceof Lab)
    return new Lab(o3.l, o3.a, o3.b, o3.opacity);
  if (o3 instanceof Hcl)
    return hcl2lab(o3);
  if (!(o3 instanceof Rgb))
    o3 = rgbConvert(o3);
  var r3 = rgb2lrgb(o3.r), g2 = rgb2lrgb(o3.g), b2 = rgb2lrgb(o3.b), y4 = xyz2lab((0.2225045 * r3 + 0.7168786 * g2 + 0.0606169 * b2) / Yn), x4, z3;
  if (r3 === g2 && g2 === b2)
    x4 = z3 = y4;
  else {
    x4 = xyz2lab((0.4360747 * r3 + 0.3850649 * g2 + 0.1430804 * b2) / Xn);
    z3 = xyz2lab((0.0139322 * r3 + 0.0971045 * g2 + 0.7141733 * b2) / Zn);
  }
  return new Lab(116 * y4 - 16, 500 * (x4 - y4), 200 * (y4 - z3), o3.opacity);
}
function lab(l3, a3, b2, opacity) {
  return arguments.length === 1 ? labConvert(l3) : new Lab(l3, a3, b2, opacity == null ? 1 : opacity);
}
function Lab(l3, a3, b2, opacity) {
  this.l = +l3;
  this.a = +a3;
  this.b = +b2;
  this.opacity = +opacity;
}
define_default(Lab, lab, extend(Color, {
  brighter(k3) {
    return new Lab(this.l + K * (k3 == null ? 1 : k3), this.a, this.b, this.opacity);
  },
  darker(k3) {
    return new Lab(this.l - K * (k3 == null ? 1 : k3), this.a, this.b, this.opacity);
  },
  rgb() {
    var y4 = (this.l + 16) / 116, x4 = isNaN(this.a) ? y4 : y4 + this.a / 500, z3 = isNaN(this.b) ? y4 : y4 - this.b / 200;
    x4 = Xn * lab2xyz(x4);
    y4 = Yn * lab2xyz(y4);
    z3 = Zn * lab2xyz(z3);
    return new Rgb(
      lrgb2rgb(3.1338561 * x4 - 1.6168667 * y4 - 0.4906146 * z3),
      lrgb2rgb(-0.9787684 * x4 + 1.9161415 * y4 + 0.033454 * z3),
      lrgb2rgb(0.0719453 * x4 - 0.2289914 * y4 + 1.4052427 * z3),
      this.opacity
    );
  }
}));
function xyz2lab(t5) {
  return t5 > t3 ? Math.pow(t5, 1 / 3) : t5 / t2 + t0;
}
function lab2xyz(t5) {
  return t5 > t1 ? t5 * t5 * t5 : t2 * (t5 - t0);
}
function lrgb2rgb(x4) {
  return 255 * (x4 <= 31308e-7 ? 12.92 * x4 : 1.055 * Math.pow(x4, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x4) {
  return (x4 /= 255) <= 0.04045 ? x4 / 12.92 : Math.pow((x4 + 0.055) / 1.055, 2.4);
}
function hclConvert(o3) {
  if (o3 instanceof Hcl)
    return new Hcl(o3.h, o3.c, o3.l, o3.opacity);
  if (!(o3 instanceof Lab))
    o3 = labConvert(o3);
  if (o3.a === 0 && o3.b === 0)
    return new Hcl(NaN, 0 < o3.l && o3.l < 100 ? 0 : NaN, o3.l, o3.opacity);
  var h = Math.atan2(o3.b, o3.a) * degrees;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o3.a * o3.a + o3.b * o3.b), o3.l, o3.opacity);
}
function hcl(h, c10, l3, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c10, l3, opacity == null ? 1 : opacity);
}
function Hcl(h, c10, l3, opacity) {
  this.h = +h;
  this.c = +c10;
  this.l = +l3;
  this.opacity = +opacity;
}
function hcl2lab(o3) {
  if (isNaN(o3.h))
    return new Lab(o3.l, 0, 0, o3.opacity);
  var h = o3.h * radians;
  return new Lab(o3.l, Math.cos(h) * o3.c, Math.sin(h) * o3.c, o3.opacity);
}
define_default(Hcl, hcl, extend(Color, {
  brighter(k3) {
    return new Hcl(this.h, this.c, this.l + K * (k3 == null ? 1 : k3), this.opacity);
  },
  darker(k3) {
    return new Hcl(this.h, this.c, this.l - K * (k3 == null ? 1 : k3), this.opacity);
  },
  rgb() {
    return hcl2lab(this).rgb();
  }
}));

// node_modules/d3-color/src/cubehelix.js
var A = -0.14861;
var B = 1.78277;
var C = -0.29227;
var D = -0.90649;
var E = 1.97294;
var ED = E * D;
var EB = E * B;
var BC_DA = B * C - D * A;
function cubehelixConvert(o3) {
  if (o3 instanceof Cubehelix)
    return new Cubehelix(o3.h, o3.s, o3.l, o3.opacity);
  if (!(o3 instanceof Rgb))
    o3 = rgbConvert(o3);
  var r3 = o3.r / 255, g2 = o3.g / 255, b2 = o3.b / 255, l3 = (BC_DA * b2 + ED * r3 - EB * g2) / (BC_DA + ED - EB), bl = b2 - l3, k3 = (E * (g2 - l3) - C * bl) / D, s3 = Math.sqrt(k3 * k3 + bl * bl) / (E * l3 * (1 - l3)), h = s3 ? Math.atan2(k3, bl) * degrees - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s3, l3, o3.opacity);
}
function cubehelix(h, s3, l3, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s3, l3, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s3, l3, opacity) {
  this.h = +h;
  this.s = +s3;
  this.l = +l3;
  this.opacity = +opacity;
}
define_default(Cubehelix, cubehelix, extend(Color, {
  brighter(k3) {
    k3 = k3 == null ? brighter : Math.pow(brighter, k3);
    return new Cubehelix(this.h, this.s, this.l * k3, this.opacity);
  },
  darker(k3) {
    k3 = k3 == null ? darker : Math.pow(darker, k3);
    return new Cubehelix(this.h, this.s, this.l * k3, this.opacity);
  },
  rgb() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * radians, l3 = +this.l, a3 = isNaN(this.s) ? 0 : this.s * l3 * (1 - l3), cosh4 = Math.cos(h), sinh4 = Math.sin(h);
    return new Rgb(
      255 * (l3 + a3 * (A * cosh4 + B * sinh4)),
      255 * (l3 + a3 * (C * cosh4 + D * sinh4)),
      255 * (l3 + a3 * (E * cosh4)),
      this.opacity
    );
  }
}));

// node_modules/d3-interpolate/src/basis.js
function basis(t16, v0, v1, v22, v3) {
  var t24 = t16 * t16, t34 = t24 * t16;
  return ((1 - 3 * t16 + 3 * t24 - t34) * v0 + (4 - 6 * t24 + 3 * t34) * v1 + (1 + 3 * t16 + 3 * t24 - 3 * t34) * v22 + t34 * v3) / 6;
}
function basis_default(values) {
  var n3 = values.length - 1;
  return function(t5) {
    var i3 = t5 <= 0 ? t5 = 0 : t5 >= 1 ? (t5 = 1, n3 - 1) : Math.floor(t5 * n3), v1 = values[i3], v22 = values[i3 + 1], v0 = i3 > 0 ? values[i3 - 1] : 2 * v1 - v22, v3 = i3 < n3 - 1 ? values[i3 + 2] : 2 * v22 - v1;
    return basis((t5 - i3 / n3) * n3, v0, v1, v22, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n3 = values.length;
  return function(t5) {
    var i3 = Math.floor(((t5 %= 1) < 0 ? ++t5 : t5) * n3), v0 = values[(i3 + n3 - 1) % n3], v1 = values[i3 % n3], v22 = values[(i3 + 1) % n3], v3 = values[(i3 + 2) % n3];
    return basis((t5 - i3 / n3) * n3, v0, v1, v22, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default = (x4) => () => x4;

// node_modules/d3-interpolate/src/color.js
function linear(a3, d2) {
  return function(t5) {
    return a3 + t5 * d2;
  };
}
function exponential(a3, b2, y4) {
  return a3 = Math.pow(a3, y4), b2 = Math.pow(b2, y4) - a3, y4 = 1 / y4, function(t5) {
    return Math.pow(a3 + t5 * b2, y4);
  };
}
function hue(a3, b2) {
  var d2 = b2 - a3;
  return d2 ? linear(a3, d2 > 180 || d2 < -180 ? d2 - 360 * Math.round(d2 / 360) : d2) : constant_default(isNaN(a3) ? b2 : a3);
}
function gamma(y4) {
  return (y4 = +y4) === 1 ? nogamma : function(a3, b2) {
    return b2 - a3 ? exponential(a3, b2, y4) : constant_default(isNaN(a3) ? b2 : a3);
  };
}
function nogamma(a3, b2) {
  var d2 = b2 - a3;
  return d2 ? linear(a3, d2) : constant_default(isNaN(a3) ? b2 : a3);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y4) {
  var color4 = gamma(y4);
  function rgb5(start2, end) {
    var r3 = color4((start2 = rgb2(start2)).r, (end = rgb2(end)).r), g2 = color4(start2.g, end.g), b2 = color4(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t5) {
      start2.r = r3(t5);
      start2.g = g2(t5);
      start2.b = b2(t5);
      start2.opacity = opacity(t5);
      return start2 + "";
    };
  }
  rgb5.gamma = rgbGamma;
  return rgb5;
}(1);
function rgbSpline(spline) {
  return function(colors3) {
    var n3 = colors3.length, r3 = new Array(n3), g2 = new Array(n3), b2 = new Array(n3), i3, color4;
    for (i3 = 0; i3 < n3; ++i3) {
      color4 = rgb2(colors3[i3]);
      r3[i3] = color4.r || 0;
      g2[i3] = color4.g || 0;
      b2[i3] = color4.b || 0;
    }
    r3 = spline(r3);
    g2 = spline(g2);
    b2 = spline(b2);
    color4.opacity = 1;
    return function(t5) {
      color4.r = r3(t5);
      color4.g = g2(t5);
      color4.b = b2(t5);
      return color4 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/number.js
function number_default(a3, b2) {
  return a3 = +a3, b2 = +b2, function(t5) {
    return a3 * (1 - t5) + b2 * t5;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b2) {
  return function() {
    return b2;
  };
}
function one(b2) {
  return function(t5) {
    return b2(t5) + "";
  };
}
function string_default(a3, b2) {
  var bi2 = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i3 = -1, s3 = [], q = [];
  a3 = a3 + "", b2 = b2 + "";
  while ((am = reA.exec(a3)) && (bm = reB.exec(b2))) {
    if ((bs = bm.index) > bi2) {
      bs = b2.slice(bi2, bs);
      if (s3[i3])
        s3[i3] += bs;
      else
        s3[++i3] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s3[i3])
        s3[i3] += bm;
      else
        s3[++i3] = bm;
    } else {
      s3[++i3] = null;
      q.push({ i: i3, x: number_default(am, bm) });
    }
    bi2 = reB.lastIndex;
  }
  if (bi2 < b2.length) {
    bs = b2.slice(bi2);
    if (s3[i3])
      s3[i3] += bs;
    else
      s3[++i3] = bs;
  }
  return s3.length < 2 ? q[0] ? one(q[0].x) : zero(b2) : (b2 = q.length, function(t5) {
    for (var i4 = 0, o3; i4 < b2; ++i4)
      s3[(o3 = q[i4]).i] = o3.x(t5);
    return s3.join("");
  });
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees2 = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a3, b2, c10, d2, e4, f2) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a3 * a3 + b2 * b2))
    a3 /= scaleX, b2 /= scaleX;
  if (skewX = a3 * c10 + b2 * d2)
    c10 -= a3 * skewX, d2 -= b2 * skewX;
  if (scaleY = Math.sqrt(c10 * c10 + d2 * d2))
    c10 /= scaleY, d2 /= scaleY, skewX /= scaleY;
  if (a3 * d2 < b2 * c10)
    a3 = -a3, b2 = -b2, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e4,
    translateY: f2,
    rotate: Math.atan2(b2, a3) * degrees2,
    skewX: Math.atan(skewX) * degrees2,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m3 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m3.isIdentity ? identity : decompose_default(m3.a, m3.b, m3.c, m3.d, m3.e, m3.f);
}
function parseSvg(value) {
  if (value == null)
    return identity;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s3) {
    return s3.length ? s3.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s3, q) {
    if (xa !== xb || ya !== yb) {
      var i3 = s3.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i3 - 4, x: number_default(xa, xb) }, { i: i3 - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s3.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a3, b2, s3, q) {
    if (a3 !== b2) {
      if (a3 - b2 > 180)
        b2 += 360;
      else if (b2 - a3 > 180)
        a3 += 360;
      q.push({ i: s3.push(pop(s3) + "rotate(", null, degParen) - 2, x: number_default(a3, b2) });
    } else if (b2) {
      s3.push(pop(s3) + "rotate(" + b2 + degParen);
    }
  }
  function skewX(a3, b2, s3, q) {
    if (a3 !== b2) {
      q.push({ i: s3.push(pop(s3) + "skewX(", null, degParen) - 2, x: number_default(a3, b2) });
    } else if (b2) {
      s3.push(pop(s3) + "skewX(" + b2 + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s3, q) {
    if (xa !== xb || ya !== yb) {
      var i3 = s3.push(pop(s3) + "scale(", null, ",", null, ")");
      q.push({ i: i3 - 4, x: number_default(xa, xb) }, { i: i3 - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s3.push(pop(s3) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a3, b2) {
    var s3 = [], q = [];
    a3 = parse(a3), b2 = parse(b2);
    translate(a3.translateX, a3.translateY, b2.translateX, b2.translateY, s3, q);
    rotate(a3.rotate, b2.rotate, s3, q);
    skewX(a3.skewX, b2.skewX, s3, q);
    scale(a3.scaleX, a3.scaleY, b2.scaleX, b2.scaleY, s3, q);
    a3 = b2 = null;
    return function(t5) {
      var i3 = -1, n3 = q.length, o3;
      while (++i3 < n3)
        s3[(o3 = q[i3]).i] = o3.x(t5);
      return s3.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x4) {
  return ((x4 = Math.exp(x4)) + 1 / x4) / 2;
}
function sinh(x4) {
  return ((x4 = Math.exp(x4)) - 1 / x4) / 2;
}
function tanh(x4) {
  return ((x4 = Math.exp(2 * x4)) - 1) / (x4 + 1);
}
var zoom_default = function zoomRho(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i3, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i3 = function(t5) {
        return [
          ux0 + t5 * dx,
          uy0 + t5 * dy,
          w0 * Math.exp(rho * t5 * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i3 = function(t5) {
        var s3 = t5 * S, coshr0 = cosh(r0), u2 = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s3 + r0) - sinh(r0));
        return [
          ux0 + u2 * dx,
          uy0 + u2 * dy,
          w0 * coshr0 / cosh(rho * s3 + r0)
        ];
      };
    }
    i3.duration = S * 1e3 * rho / Math.SQRT2;
    return i3;
  }
  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/d3-interpolate/src/hsl.js
function hsl3(hue4) {
  return function(start2, end) {
    var h = hue4((start2 = hsl2(start2)).h, (end = hsl2(end)).h), s3 = nogamma(start2.s, end.s), l3 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t5) {
      start2.h = h(t5);
      start2.s = s3(t5);
      start2.l = l3(t5);
      start2.opacity = opacity(t5);
      return start2 + "";
    };
  };
}
var hsl_default = hsl3(hue);
var hslLong = hsl3(nogamma);

// node_modules/d3-interpolate/src/hcl.js
function hcl2(hue4) {
  return function(start2, end) {
    var h = hue4((start2 = hcl(start2)).h, (end = hcl(end)).h), c10 = nogamma(start2.c, end.c), l3 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t5) {
      start2.h = h(t5);
      start2.c = c10(t5);
      start2.l = l3(t5);
      start2.opacity = opacity(t5);
      return start2 + "";
    };
  };
}
var hcl_default = hcl2(hue);
var hclLong = hcl2(nogamma);

// node_modules/d3-interpolate/src/cubehelix.js
function cubehelix2(hue4) {
  return function cubehelixGamma(y4) {
    y4 = +y4;
    function cubehelix7(start2, end) {
      var h = hue4((start2 = cubehelix(start2)).h, (end = cubehelix(end)).h), s3 = nogamma(start2.s, end.s), l3 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
      return function(t5) {
        start2.h = h(t5);
        start2.s = s3(t5);
        start2.l = l3(Math.pow(t5, y4));
        start2.opacity = opacity(t5);
        return start2 + "";
      };
    }
    cubehelix7.gamma = cubehelixGamma;
    return cubehelix7;
  }(1);
}
var cubehelix_default = cubehelix2(hue);
var cubehelixLong = cubehelix2(nogamma);

// node_modules/@nivo/core/dist/nivo-core.es.js
var import_isString = __toESM(require_isString());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_last = __toESM(require_last());
var import_isArray = __toESM(require_isArray());

// node_modules/d3-array/src/ascending.js
function ascending_default(a3, b2) {
  return a3 < b2 ? -1 : a3 > b2 ? 1 : a3 >= b2 ? 0 : NaN;
}

// node_modules/d3-array/src/bisector.js
function bisector_default(f2) {
  let delta = f2;
  let compare = f2;
  if (f2.length === 1) {
    delta = (d2, x4) => f2(d2) - x4;
    compare = ascendingComparator(f2);
  }
  function left(a3, x4, lo, hi2) {
    if (lo == null)
      lo = 0;
    if (hi2 == null)
      hi2 = a3.length;
    while (lo < hi2) {
      const mid = lo + hi2 >>> 1;
      if (compare(a3[mid], x4) < 0)
        lo = mid + 1;
      else
        hi2 = mid;
    }
    return lo;
  }
  function right(a3, x4, lo, hi2) {
    if (lo == null)
      lo = 0;
    if (hi2 == null)
      hi2 = a3.length;
    while (lo < hi2) {
      const mid = lo + hi2 >>> 1;
      if (compare(a3[mid], x4) > 0)
        hi2 = mid;
      else
        lo = mid + 1;
    }
    return lo;
  }
  function center(a3, x4, lo, hi2) {
    if (lo == null)
      lo = 0;
    if (hi2 == null)
      hi2 = a3.length;
    const i3 = left(a3, x4, lo, hi2 - 1);
    return i3 > lo && delta(a3[i3 - 1], x4) > -delta(a3[i3], x4) ? i3 - 1 : i3;
  }
  return { left, center, right };
}
function ascendingComparator(f2) {
  return (d2, x4) => ascending_default(f2(d2), x4);
}

// node_modules/d3-array/src/number.js
function number_default2(x4) {
  return x4 === null ? NaN : +x4;
}

// node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector_default(ascending_default);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector_default(number_default2).center;
var bisect_default = bisectRight;

// node_modules/d3-array/src/array.js
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

// node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function ticks_default(start2, stop2, count2) {
  var reverse2, i3 = -1, n3, ticks, step;
  stop2 = +stop2, start2 = +start2, count2 = +count2;
  if (start2 === stop2 && count2 > 0)
    return [start2];
  if (reverse2 = stop2 < start2)
    n3 = start2, start2 = stop2, stop2 = n3;
  if ((step = tickIncrement(start2, stop2, count2)) === 0 || !isFinite(step))
    return [];
  if (step > 0) {
    let r0 = Math.round(start2 / step), r1 = Math.round(stop2 / step);
    if (r0 * step < start2)
      ++r0;
    if (r1 * step > stop2)
      --r1;
    ticks = new Array(n3 = r1 - r0 + 1);
    while (++i3 < n3)
      ticks[i3] = (r0 + i3) * step;
  } else {
    step = -step;
    let r0 = Math.round(start2 * step), r1 = Math.round(stop2 * step);
    if (r0 / step < start2)
      ++r0;
    if (r1 / step > stop2)
      --r1;
    ticks = new Array(n3 = r1 - r0 + 1);
    while (++i3 < n3)
      ticks[i3] = (r0 + i3) / step;
  }
  if (reverse2)
    ticks.reverse();
  return ticks;
}
function tickIncrement(start2, stop2, count2) {
  var step = (stop2 - start2) / Math.max(0, count2), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start2, stop2, count2) {
  var step0 = Math.abs(stop2 - start2) / Math.max(0, count2), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
  if (error >= e10)
    step1 *= 10;
  else if (error >= e5)
    step1 *= 5;
  else if (error >= e2)
    step1 *= 2;
  return stop2 < start2 ? -step1 : step1;
}

// node_modules/d3-array/src/range.js
function range_default(start2, stop2, step) {
  start2 = +start2, stop2 = +stop2, step = (n3 = arguments.length) < 2 ? (stop2 = start2, start2 = 0, 1) : n3 < 3 ? 1 : +step;
  var i3 = -1, n3 = Math.max(0, Math.ceil((stop2 - start2) / step)) | 0, range = new Array(n3);
  while (++i3 < n3) {
    range[i3] = start2 + i3 * step;
  }
  return range;
}

// node_modules/d3-array/src/shuffle.js
var shuffle_default = shuffler(Math.random);
function shuffler(random) {
  return function shuffle(array2, i0 = 0, i1 = array2.length) {
    let m3 = i1 - (i0 = +i0);
    while (m3) {
      const i3 = random() * m3-- | 0, t5 = array2[m3 + i0];
      array2[m3 + i0] = array2[i3 + i0];
      array2[i3 + i0] = t5;
    }
    return array2;
  };
}

// node_modules/d3-scale/src/init.js
function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range).domain(domain);
      break;
  }
  return this;
}

// node_modules/d3-scale/src/ordinal.js
var implicit = Symbol("implicit");
function ordinal() {
  var index2 = /* @__PURE__ */ new Map(), domain = [], range = [], unknown = implicit;
  function scale(d2) {
    var key = d2 + "", i3 = index2.get(key);
    if (!i3) {
      if (unknown !== implicit)
        return unknown;
      index2.set(key, i3 = domain.push(d2));
    }
    return range[(i3 - 1) % range.length];
  }
  scale.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [], index2 = /* @__PURE__ */ new Map();
    for (const value of _) {
      const key = value + "";
      if (index2.has(key))
        continue;
      index2.set(key, domain.push(value));
    }
    return scale;
  };
  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/band.js
function band() {
  var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n3 = domain().length, reverse2 = r1 < r0, start2 = reverse2 ? r1 : r0, stop2 = reverse2 ? r0 : r1;
    step = (stop2 - start2) / Math.max(1, n3 - paddingInner + paddingOuter * 2);
    if (round)
      step = Math.floor(step);
    start2 += (stop2 - start2 - step * (n3 - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round)
      start2 = Math.round(start2), bandwidth = Math.round(bandwidth);
    var values = range_default(n3).map(function(i3) {
      return start2 + step * i3;
    });
    return ordinalRange(reverse2 ? values.reverse() : values);
  }
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };
  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };
  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };
  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };
  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };
  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale.copy = function() {
    return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}
function pointish(scale) {
  var copy3 = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;
  scale.copy = function() {
    return pointish(copy3());
  };
  return scale;
}
function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

// node_modules/d3-scale/node_modules/d3-color/src/define.js
function define_default2(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend2(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-scale/node_modules/d3-color/src/color.js
function Color2() {
}
var darker2 = 0.7;
var brighter2 = 1 / darker2;
var reI2 = "\\s*([+-]?\\d+)\\s*";
var reN2 = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP2 = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex2 = /^#([0-9a-f]{3,8})$/;
var reRgbInteger2 = new RegExp("^rgb\\(" + [reI2, reI2, reI2] + "\\)$");
var reRgbPercent2 = new RegExp("^rgb\\(" + [reP2, reP2, reP2] + "\\)$");
var reRgbaInteger2 = new RegExp("^rgba\\(" + [reI2, reI2, reI2, reN2] + "\\)$");
var reRgbaPercent2 = new RegExp("^rgba\\(" + [reP2, reP2, reP2, reN2] + "\\)$");
var reHslPercent2 = new RegExp("^hsl\\(" + [reN2, reP2, reP2] + "\\)$");
var reHslaPercent2 = new RegExp("^hsla\\(" + [reN2, reP2, reP2, reN2] + "\\)$");
var named2 = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default2(Color2, color2, {
  copy: function(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex2,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex2,
  formatHsl: color_formatHsl2,
  formatRgb: color_formatRgb2,
  toString: color_formatRgb2
});
function color_formatHex2() {
  return this.rgb().formatHex();
}
function color_formatHsl2() {
  return hslConvert2(this).formatHsl();
}
function color_formatRgb2() {
  return this.rgb().formatRgb();
}
function color2(format2) {
  var m3, l3;
  format2 = (format2 + "").trim().toLowerCase();
  return (m3 = reHex2.exec(format2)) ? (l3 = m3[1].length, m3 = parseInt(m3[1], 16), l3 === 6 ? rgbn2(m3) : l3 === 3 ? new Rgb2(m3 >> 8 & 15 | m3 >> 4 & 240, m3 >> 4 & 15 | m3 & 240, (m3 & 15) << 4 | m3 & 15, 1) : l3 === 8 ? rgba3(m3 >> 24 & 255, m3 >> 16 & 255, m3 >> 8 & 255, (m3 & 255) / 255) : l3 === 4 ? rgba3(m3 >> 12 & 15 | m3 >> 8 & 240, m3 >> 8 & 15 | m3 >> 4 & 240, m3 >> 4 & 15 | m3 & 240, ((m3 & 15) << 4 | m3 & 15) / 255) : null) : (m3 = reRgbInteger2.exec(format2)) ? new Rgb2(m3[1], m3[2], m3[3], 1) : (m3 = reRgbPercent2.exec(format2)) ? new Rgb2(m3[1] * 255 / 100, m3[2] * 255 / 100, m3[3] * 255 / 100, 1) : (m3 = reRgbaInteger2.exec(format2)) ? rgba3(m3[1], m3[2], m3[3], m3[4]) : (m3 = reRgbaPercent2.exec(format2)) ? rgba3(m3[1] * 255 / 100, m3[2] * 255 / 100, m3[3] * 255 / 100, m3[4]) : (m3 = reHslPercent2.exec(format2)) ? hsla3(m3[1], m3[2] / 100, m3[3] / 100, 1) : (m3 = reHslaPercent2.exec(format2)) ? hsla3(m3[1], m3[2] / 100, m3[3] / 100, m3[4]) : named2.hasOwnProperty(format2) ? rgbn2(named2[format2]) : format2 === "transparent" ? new Rgb2(NaN, NaN, NaN, 0) : null;
}
function rgbn2(n3) {
  return new Rgb2(n3 >> 16 & 255, n3 >> 8 & 255, n3 & 255, 1);
}
function rgba3(r3, g2, b2, a3) {
  if (a3 <= 0)
    r3 = g2 = b2 = NaN;
  return new Rgb2(r3, g2, b2, a3);
}
function rgbConvert2(o3) {
  if (!(o3 instanceof Color2))
    o3 = color2(o3);
  if (!o3)
    return new Rgb2();
  o3 = o3.rgb();
  return new Rgb2(o3.r, o3.g, o3.b, o3.opacity);
}
function rgb3(r3, g2, b2, opacity) {
  return arguments.length === 1 ? rgbConvert2(r3) : new Rgb2(r3, g2, b2, opacity == null ? 1 : opacity);
}
function Rgb2(r3, g2, b2, opacity) {
  this.r = +r3;
  this.g = +g2;
  this.b = +b2;
  this.opacity = +opacity;
}
define_default2(Rgb2, rgb3, extend2(Color2, {
  brighter: function(k3) {
    k3 = k3 == null ? brighter2 : Math.pow(brighter2, k3);
    return new Rgb2(this.r * k3, this.g * k3, this.b * k3, this.opacity);
  },
  darker: function(k3) {
    k3 = k3 == null ? darker2 : Math.pow(darker2, k3);
    return new Rgb2(this.r * k3, this.g * k3, this.b * k3, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex2,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex2,
  formatRgb: rgb_formatRgb2,
  toString: rgb_formatRgb2
}));
function rgb_formatHex2() {
  return "#" + hex2(this.r) + hex2(this.g) + hex2(this.b);
}
function rgb_formatRgb2() {
  var a3 = this.opacity;
  a3 = isNaN(a3) ? 1 : Math.max(0, Math.min(1, a3));
  return (a3 === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a3 === 1 ? ")" : ", " + a3 + ")");
}
function hex2(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla3(h, s3, l3, a3) {
  if (a3 <= 0)
    h = s3 = l3 = NaN;
  else if (l3 <= 0 || l3 >= 1)
    h = s3 = NaN;
  else if (s3 <= 0)
    h = NaN;
  return new Hsl2(h, s3, l3, a3);
}
function hslConvert2(o3) {
  if (o3 instanceof Hsl2)
    return new Hsl2(o3.h, o3.s, o3.l, o3.opacity);
  if (!(o3 instanceof Color2))
    o3 = color2(o3);
  if (!o3)
    return new Hsl2();
  if (o3 instanceof Hsl2)
    return o3;
  o3 = o3.rgb();
  var r3 = o3.r / 255, g2 = o3.g / 255, b2 = o3.b / 255, min3 = Math.min(r3, g2, b2), max3 = Math.max(r3, g2, b2), h = NaN, s3 = max3 - min3, l3 = (max3 + min3) / 2;
  if (s3) {
    if (r3 === max3)
      h = (g2 - b2) / s3 + (g2 < b2) * 6;
    else if (g2 === max3)
      h = (b2 - r3) / s3 + 2;
    else
      h = (r3 - g2) / s3 + 4;
    s3 /= l3 < 0.5 ? max3 + min3 : 2 - max3 - min3;
    h *= 60;
  } else {
    s3 = l3 > 0 && l3 < 1 ? 0 : h;
  }
  return new Hsl2(h, s3, l3, o3.opacity);
}
function hsl4(h, s3, l3, opacity) {
  return arguments.length === 1 ? hslConvert2(h) : new Hsl2(h, s3, l3, opacity == null ? 1 : opacity);
}
function Hsl2(h, s3, l3, opacity) {
  this.h = +h;
  this.s = +s3;
  this.l = +l3;
  this.opacity = +opacity;
}
define_default2(Hsl2, hsl4, extend2(Color2, {
  brighter: function(k3) {
    k3 = k3 == null ? brighter2 : Math.pow(brighter2, k3);
    return new Hsl2(this.h, this.s, this.l * k3, this.opacity);
  },
  darker: function(k3) {
    k3 = k3 == null ? darker2 : Math.pow(darker2, k3);
    return new Hsl2(this.h, this.s, this.l * k3, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360, s3 = isNaN(h) || isNaN(this.s) ? 0 : this.s, l3 = this.l, m22 = l3 + (l3 < 0.5 ? l3 : 1 - l3) * s3, m1 = 2 * l3 - m22;
    return new Rgb2(
      hsl2rgb2(h >= 240 ? h - 240 : h + 120, m1, m22),
      hsl2rgb2(h, m1, m22),
      hsl2rgb2(h < 120 ? h + 240 : h - 120, m1, m22),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a3 = this.opacity;
    a3 = isNaN(a3) ? 1 : Math.max(0, Math.min(1, a3));
    return (a3 === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a3 === 1 ? ")" : ", " + a3 + ")");
  }
}));
function hsl2rgb2(h, m1, m22) {
  return (h < 60 ? m1 + (m22 - m1) * h / 60 : h < 180 ? m22 : h < 240 ? m1 + (m22 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-scale/node_modules/d3-color/src/math.js
var radians2 = Math.PI / 180;
var degrees3 = 180 / Math.PI;

// node_modules/d3-scale/node_modules/d3-color/src/lab.js
var K2 = 18;
var Xn2 = 0.96422;
var Yn2 = 1;
var Zn2 = 0.82521;
var t02 = 4 / 29;
var t12 = 6 / 29;
var t22 = 3 * t12 * t12;
var t32 = t12 * t12 * t12;
function labConvert2(o3) {
  if (o3 instanceof Lab2)
    return new Lab2(o3.l, o3.a, o3.b, o3.opacity);
  if (o3 instanceof Hcl2)
    return hcl2lab2(o3);
  if (!(o3 instanceof Rgb2))
    o3 = rgbConvert2(o3);
  var r3 = rgb2lrgb2(o3.r), g2 = rgb2lrgb2(o3.g), b2 = rgb2lrgb2(o3.b), y4 = xyz2lab2((0.2225045 * r3 + 0.7168786 * g2 + 0.0606169 * b2) / Yn2), x4, z3;
  if (r3 === g2 && g2 === b2)
    x4 = z3 = y4;
  else {
    x4 = xyz2lab2((0.4360747 * r3 + 0.3850649 * g2 + 0.1430804 * b2) / Xn2);
    z3 = xyz2lab2((0.0139322 * r3 + 0.0971045 * g2 + 0.7141733 * b2) / Zn2);
  }
  return new Lab2(116 * y4 - 16, 500 * (x4 - y4), 200 * (y4 - z3), o3.opacity);
}
function lab3(l3, a3, b2, opacity) {
  return arguments.length === 1 ? labConvert2(l3) : new Lab2(l3, a3, b2, opacity == null ? 1 : opacity);
}
function Lab2(l3, a3, b2, opacity) {
  this.l = +l3;
  this.a = +a3;
  this.b = +b2;
  this.opacity = +opacity;
}
define_default2(Lab2, lab3, extend2(Color2, {
  brighter: function(k3) {
    return new Lab2(this.l + K2 * (k3 == null ? 1 : k3), this.a, this.b, this.opacity);
  },
  darker: function(k3) {
    return new Lab2(this.l - K2 * (k3 == null ? 1 : k3), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y4 = (this.l + 16) / 116, x4 = isNaN(this.a) ? y4 : y4 + this.a / 500, z3 = isNaN(this.b) ? y4 : y4 - this.b / 200;
    x4 = Xn2 * lab2xyz2(x4);
    y4 = Yn2 * lab2xyz2(y4);
    z3 = Zn2 * lab2xyz2(z3);
    return new Rgb2(
      lrgb2rgb2(3.1338561 * x4 - 1.6168667 * y4 - 0.4906146 * z3),
      lrgb2rgb2(-0.9787684 * x4 + 1.9161415 * y4 + 0.033454 * z3),
      lrgb2rgb2(0.0719453 * x4 - 0.2289914 * y4 + 1.4052427 * z3),
      this.opacity
    );
  }
}));
function xyz2lab2(t5) {
  return t5 > t32 ? Math.pow(t5, 1 / 3) : t5 / t22 + t02;
}
function lab2xyz2(t5) {
  return t5 > t12 ? t5 * t5 * t5 : t22 * (t5 - t02);
}
function lrgb2rgb2(x4) {
  return 255 * (x4 <= 31308e-7 ? 12.92 * x4 : 1.055 * Math.pow(x4, 1 / 2.4) - 0.055);
}
function rgb2lrgb2(x4) {
  return (x4 /= 255) <= 0.04045 ? x4 / 12.92 : Math.pow((x4 + 0.055) / 1.055, 2.4);
}
function hclConvert2(o3) {
  if (o3 instanceof Hcl2)
    return new Hcl2(o3.h, o3.c, o3.l, o3.opacity);
  if (!(o3 instanceof Lab2))
    o3 = labConvert2(o3);
  if (o3.a === 0 && o3.b === 0)
    return new Hcl2(NaN, 0 < o3.l && o3.l < 100 ? 0 : NaN, o3.l, o3.opacity);
  var h = Math.atan2(o3.b, o3.a) * degrees3;
  return new Hcl2(h < 0 ? h + 360 : h, Math.sqrt(o3.a * o3.a + o3.b * o3.b), o3.l, o3.opacity);
}
function hcl3(h, c10, l3, opacity) {
  return arguments.length === 1 ? hclConvert2(h) : new Hcl2(h, c10, l3, opacity == null ? 1 : opacity);
}
function Hcl2(h, c10, l3, opacity) {
  this.h = +h;
  this.c = +c10;
  this.l = +l3;
  this.opacity = +opacity;
}
function hcl2lab2(o3) {
  if (isNaN(o3.h))
    return new Lab2(o3.l, 0, 0, o3.opacity);
  var h = o3.h * radians2;
  return new Lab2(o3.l, Math.cos(h) * o3.c, Math.sin(h) * o3.c, o3.opacity);
}
define_default2(Hcl2, hcl3, extend2(Color2, {
  brighter: function(k3) {
    return new Hcl2(this.h, this.c, this.l + K2 * (k3 == null ? 1 : k3), this.opacity);
  },
  darker: function(k3) {
    return new Hcl2(this.h, this.c, this.l - K2 * (k3 == null ? 1 : k3), this.opacity);
  },
  rgb: function() {
    return hcl2lab2(this).rgb();
  }
}));

// node_modules/d3-scale/node_modules/d3-color/src/cubehelix.js
var A2 = -0.14861;
var B2 = 1.78277;
var C2 = -0.29227;
var D2 = -0.90649;
var E2 = 1.97294;
var ED2 = E2 * D2;
var EB2 = E2 * B2;
var BC_DA2 = B2 * C2 - D2 * A2;
function cubehelixConvert2(o3) {
  if (o3 instanceof Cubehelix2)
    return new Cubehelix2(o3.h, o3.s, o3.l, o3.opacity);
  if (!(o3 instanceof Rgb2))
    o3 = rgbConvert2(o3);
  var r3 = o3.r / 255, g2 = o3.g / 255, b2 = o3.b / 255, l3 = (BC_DA2 * b2 + ED2 * r3 - EB2 * g2) / (BC_DA2 + ED2 - EB2), bl = b2 - l3, k3 = (E2 * (g2 - l3) - C2 * bl) / D2, s3 = Math.sqrt(k3 * k3 + bl * bl) / (E2 * l3 * (1 - l3)), h = s3 ? Math.atan2(k3, bl) * degrees3 - 120 : NaN;
  return new Cubehelix2(h < 0 ? h + 360 : h, s3, l3, o3.opacity);
}
function cubehelix3(h, s3, l3, opacity) {
  return arguments.length === 1 ? cubehelixConvert2(h) : new Cubehelix2(h, s3, l3, opacity == null ? 1 : opacity);
}
function Cubehelix2(h, s3, l3, opacity) {
  this.h = +h;
  this.s = +s3;
  this.l = +l3;
  this.opacity = +opacity;
}
define_default2(Cubehelix2, cubehelix3, extend2(Color2, {
  brighter: function(k3) {
    k3 = k3 == null ? brighter2 : Math.pow(brighter2, k3);
    return new Cubehelix2(this.h, this.s, this.l * k3, this.opacity);
  },
  darker: function(k3) {
    k3 = k3 == null ? darker2 : Math.pow(darker2, k3);
    return new Cubehelix2(this.h, this.s, this.l * k3, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * radians2, l3 = +this.l, a3 = isNaN(this.s) ? 0 : this.s * l3 * (1 - l3), cosh4 = Math.cos(h), sinh4 = Math.sin(h);
    return new Rgb2(
      255 * (l3 + a3 * (A2 * cosh4 + B2 * sinh4)),
      255 * (l3 + a3 * (C2 * cosh4 + D2 * sinh4)),
      255 * (l3 + a3 * (E2 * cosh4)),
      this.opacity
    );
  }
}));

// node_modules/d3-scale/node_modules/d3-interpolate/src/basis.js
function basis2(t16, v0, v1, v22, v3) {
  var t24 = t16 * t16, t34 = t24 * t16;
  return ((1 - 3 * t16 + 3 * t24 - t34) * v0 + (4 - 6 * t24 + 3 * t34) * v1 + (1 + 3 * t16 + 3 * t24 - 3 * t34) * v22 + t34 * v3) / 6;
}
function basis_default2(values) {
  var n3 = values.length - 1;
  return function(t5) {
    var i3 = t5 <= 0 ? t5 = 0 : t5 >= 1 ? (t5 = 1, n3 - 1) : Math.floor(t5 * n3), v1 = values[i3], v22 = values[i3 + 1], v0 = i3 > 0 ? values[i3 - 1] : 2 * v1 - v22, v3 = i3 < n3 - 1 ? values[i3 + 2] : 2 * v22 - v1;
    return basis2((t5 - i3 / n3) * n3, v0, v1, v22, v3);
  };
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default2(values) {
  var n3 = values.length;
  return function(t5) {
    var i3 = Math.floor(((t5 %= 1) < 0 ? ++t5 : t5) * n3), v0 = values[(i3 + n3 - 1) % n3], v1 = values[i3 % n3], v22 = values[(i3 + 1) % n3], v3 = values[(i3 + 2) % n3];
    return basis2((t5 - i3 / n3) * n3, v0, v1, v22, v3);
  };
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/constant.js
var constant_default3 = (x4) => () => x4;

// node_modules/d3-scale/node_modules/d3-interpolate/src/color.js
function linear2(a3, d2) {
  return function(t5) {
    return a3 + t5 * d2;
  };
}
function exponential2(a3, b2, y4) {
  return a3 = Math.pow(a3, y4), b2 = Math.pow(b2, y4) - a3, y4 = 1 / y4, function(t5) {
    return Math.pow(a3 + t5 * b2, y4);
  };
}
function hue2(a3, b2) {
  var d2 = b2 - a3;
  return d2 ? linear2(a3, d2 > 180 || d2 < -180 ? d2 - 360 * Math.round(d2 / 360) : d2) : constant_default3(isNaN(a3) ? b2 : a3);
}
function gamma2(y4) {
  return (y4 = +y4) === 1 ? nogamma2 : function(a3, b2) {
    return b2 - a3 ? exponential2(a3, b2, y4) : constant_default3(isNaN(a3) ? b2 : a3);
  };
}
function nogamma2(a3, b2) {
  var d2 = b2 - a3;
  return d2 ? linear2(a3, d2) : constant_default3(isNaN(a3) ? b2 : a3);
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/rgb.js
var rgb_default2 = function rgbGamma2(y4) {
  var color4 = gamma2(y4);
  function rgb5(start2, end) {
    var r3 = color4((start2 = rgb3(start2)).r, (end = rgb3(end)).r), g2 = color4(start2.g, end.g), b2 = color4(start2.b, end.b), opacity = nogamma2(start2.opacity, end.opacity);
    return function(t5) {
      start2.r = r3(t5);
      start2.g = g2(t5);
      start2.b = b2(t5);
      start2.opacity = opacity(t5);
      return start2 + "";
    };
  }
  rgb5.gamma = rgbGamma2;
  return rgb5;
}(1);
function rgbSpline2(spline) {
  return function(colors3) {
    var n3 = colors3.length, r3 = new Array(n3), g2 = new Array(n3), b2 = new Array(n3), i3, color4;
    for (i3 = 0; i3 < n3; ++i3) {
      color4 = rgb3(colors3[i3]);
      r3[i3] = color4.r || 0;
      g2[i3] = color4.g || 0;
      b2[i3] = color4.b || 0;
    }
    r3 = spline(r3);
    g2 = spline(g2);
    b2 = spline(b2);
    color4.opacity = 1;
    return function(t5) {
      color4.r = r3(t5);
      color4.g = g2(t5);
      color4.b = b2(t5);
      return color4 + "";
    };
  };
}
var rgbBasis2 = rgbSpline2(basis_default2);
var rgbBasisClosed2 = rgbSpline2(basisClosed_default2);

// node_modules/d3-scale/node_modules/d3-interpolate/src/numberArray.js
function numberArray_default2(a3, b2) {
  if (!b2)
    b2 = [];
  var n3 = a3 ? Math.min(b2.length, a3.length) : 0, c10 = b2.slice(), i3;
  return function(t5) {
    for (i3 = 0; i3 < n3; ++i3)
      c10[i3] = a3[i3] * (1 - t5) + b2[i3] * t5;
    return c10;
  };
}
function isNumberArray2(x4) {
  return ArrayBuffer.isView(x4) && !(x4 instanceof DataView);
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/array.js
function genericArray2(a3, b2) {
  var nb = b2 ? b2.length : 0, na = a3 ? Math.min(nb, a3.length) : 0, x4 = new Array(na), c10 = new Array(nb), i3;
  for (i3 = 0; i3 < na; ++i3)
    x4[i3] = value_default2(a3[i3], b2[i3]);
  for (; i3 < nb; ++i3)
    c10[i3] = b2[i3];
  return function(t5) {
    for (i3 = 0; i3 < na; ++i3)
      c10[i3] = x4[i3](t5);
    return c10;
  };
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/date.js
function date_default2(a3, b2) {
  var d2 = /* @__PURE__ */ new Date();
  return a3 = +a3, b2 = +b2, function(t5) {
    return d2.setTime(a3 * (1 - t5) + b2 * t5), d2;
  };
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/number.js
function number_default3(a3, b2) {
  return a3 = +a3, b2 = +b2, function(t5) {
    return a3 * (1 - t5) + b2 * t5;
  };
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/object.js
function object_default2(a3, b2) {
  var i3 = {}, c10 = {}, k3;
  if (a3 === null || typeof a3 !== "object")
    a3 = {};
  if (b2 === null || typeof b2 !== "object")
    b2 = {};
  for (k3 in b2) {
    if (k3 in a3) {
      i3[k3] = value_default2(a3[k3], b2[k3]);
    } else {
      c10[k3] = b2[k3];
    }
  }
  return function(t5) {
    for (k3 in i3)
      c10[k3] = i3[k3](t5);
    return c10;
  };
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/string.js
var reA2 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB2 = new RegExp(reA2.source, "g");
function zero2(b2) {
  return function() {
    return b2;
  };
}
function one2(b2) {
  return function(t5) {
    return b2(t5) + "";
  };
}
function string_default2(a3, b2) {
  var bi2 = reA2.lastIndex = reB2.lastIndex = 0, am, bm, bs, i3 = -1, s3 = [], q = [];
  a3 = a3 + "", b2 = b2 + "";
  while ((am = reA2.exec(a3)) && (bm = reB2.exec(b2))) {
    if ((bs = bm.index) > bi2) {
      bs = b2.slice(bi2, bs);
      if (s3[i3])
        s3[i3] += bs;
      else
        s3[++i3] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s3[i3])
        s3[i3] += bm;
      else
        s3[++i3] = bm;
    } else {
      s3[++i3] = null;
      q.push({ i: i3, x: number_default3(am, bm) });
    }
    bi2 = reB2.lastIndex;
  }
  if (bi2 < b2.length) {
    bs = b2.slice(bi2);
    if (s3[i3])
      s3[i3] += bs;
    else
      s3[++i3] = bs;
  }
  return s3.length < 2 ? q[0] ? one2(q[0].x) : zero2(b2) : (b2 = q.length, function(t5) {
    for (var i4 = 0, o3; i4 < b2; ++i4)
      s3[(o3 = q[i4]).i] = o3.x(t5);
    return s3.join("");
  });
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/value.js
function value_default2(a3, b2) {
  var t5 = typeof b2, c10;
  return b2 == null || t5 === "boolean" ? constant_default3(b2) : (t5 === "number" ? number_default3 : t5 === "string" ? (c10 = color2(b2)) ? (b2 = c10, rgb_default2) : string_default2 : b2 instanceof color2 ? rgb_default2 : b2 instanceof Date ? date_default2 : isNumberArray2(b2) ? numberArray_default2 : Array.isArray(b2) ? genericArray2 : typeof b2.valueOf !== "function" && typeof b2.toString !== "function" || isNaN(b2) ? object_default2 : number_default3)(a3, b2);
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/round.js
function round_default2(a3, b2) {
  return a3 = +a3, b2 = +b2, function(t5) {
    return Math.round(a3 * (1 - t5) + b2 * t5);
  };
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/transform/decompose.js
var degrees4 = 180 / Math.PI;
var identity2 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default2(a3, b2, c10, d2, e4, f2) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a3 * a3 + b2 * b2))
    a3 /= scaleX, b2 /= scaleX;
  if (skewX = a3 * c10 + b2 * d2)
    c10 -= a3 * skewX, d2 -= b2 * skewX;
  if (scaleY = Math.sqrt(c10 * c10 + d2 * d2))
    c10 /= scaleY, d2 /= scaleY, skewX /= scaleY;
  if (a3 * d2 < b2 * c10)
    a3 = -a3, b2 = -b2, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e4,
    translateY: f2,
    rotate: Math.atan2(b2, a3) * degrees4,
    skewX: Math.atan(skewX) * degrees4,
    scaleX,
    scaleY
  };
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/transform/parse.js
var svgNode2;
function parseCss2(value) {
  const m3 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m3.isIdentity ? identity2 : decompose_default2(m3.a, m3.b, m3.c, m3.d, m3.e, m3.f);
}
function parseSvg2(value) {
  if (value == null)
    return identity2;
  if (!svgNode2)
    svgNode2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode2.setAttribute("transform", value);
  if (!(value = svgNode2.transform.baseVal.consolidate()))
    return identity2;
  value = value.matrix;
  return decompose_default2(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform2(parse, pxComma, pxParen, degParen) {
  function pop(s3) {
    return s3.length ? s3.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s3, q) {
    if (xa !== xb || ya !== yb) {
      var i3 = s3.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i3 - 4, x: number_default3(xa, xb) }, { i: i3 - 2, x: number_default3(ya, yb) });
    } else if (xb || yb) {
      s3.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a3, b2, s3, q) {
    if (a3 !== b2) {
      if (a3 - b2 > 180)
        b2 += 360;
      else if (b2 - a3 > 180)
        a3 += 360;
      q.push({ i: s3.push(pop(s3) + "rotate(", null, degParen) - 2, x: number_default3(a3, b2) });
    } else if (b2) {
      s3.push(pop(s3) + "rotate(" + b2 + degParen);
    }
  }
  function skewX(a3, b2, s3, q) {
    if (a3 !== b2) {
      q.push({ i: s3.push(pop(s3) + "skewX(", null, degParen) - 2, x: number_default3(a3, b2) });
    } else if (b2) {
      s3.push(pop(s3) + "skewX(" + b2 + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s3, q) {
    if (xa !== xb || ya !== yb) {
      var i3 = s3.push(pop(s3) + "scale(", null, ",", null, ")");
      q.push({ i: i3 - 4, x: number_default3(xa, xb) }, { i: i3 - 2, x: number_default3(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s3.push(pop(s3) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a3, b2) {
    var s3 = [], q = [];
    a3 = parse(a3), b2 = parse(b2);
    translate(a3.translateX, a3.translateY, b2.translateX, b2.translateY, s3, q);
    rotate(a3.rotate, b2.rotate, s3, q);
    skewX(a3.skewX, b2.skewX, s3, q);
    scale(a3.scaleX, a3.scaleY, b2.scaleX, b2.scaleY, s3, q);
    a3 = b2 = null;
    return function(t5) {
      var i3 = -1, n3 = q.length, o3;
      while (++i3 < n3)
        s3[(o3 = q[i3]).i] = o3.x(t5);
      return s3.join("");
    };
  };
}
var interpolateTransformCss2 = interpolateTransform2(parseCss2, "px, ", "px)", "deg)");
var interpolateTransformSvg2 = interpolateTransform2(parseSvg2, ", ", ")", ")");

// node_modules/d3-scale/node_modules/d3-interpolate/src/zoom.js
var epsilon22 = 1e-12;
function cosh2(x4) {
  return ((x4 = Math.exp(x4)) + 1 / x4) / 2;
}
function sinh2(x4) {
  return ((x4 = Math.exp(x4)) - 1 / x4) / 2;
}
function tanh2(x4) {
  return ((x4 = Math.exp(2 * x4)) - 1) / (x4 + 1);
}
var zoom_default2 = function zoomRho2(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i3, S;
    if (d2 < epsilon22) {
      S = Math.log(w1 / w0) / rho;
      i3 = function(t5) {
        return [
          ux0 + t5 * dx,
          uy0 + t5 * dy,
          w0 * Math.exp(rho * t5 * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i3 = function(t5) {
        var s3 = t5 * S, coshr0 = cosh2(r0), u2 = w0 / (rho2 * d1) * (coshr0 * tanh2(rho * s3 + r0) - sinh2(r0));
        return [
          ux0 + u2 * dx,
          uy0 + u2 * dy,
          w0 * coshr0 / cosh2(rho * s3 + r0)
        ];
      };
    }
    i3.duration = S * 1e3 * rho / Math.SQRT2;
    return i3;
  }
  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho2(_1, _2, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/d3-scale/node_modules/d3-interpolate/src/hsl.js
function hsl5(hue4) {
  return function(start2, end) {
    var h = hue4((start2 = hsl4(start2)).h, (end = hsl4(end)).h), s3 = nogamma2(start2.s, end.s), l3 = nogamma2(start2.l, end.l), opacity = nogamma2(start2.opacity, end.opacity);
    return function(t5) {
      start2.h = h(t5);
      start2.s = s3(t5);
      start2.l = l3(t5);
      start2.opacity = opacity(t5);
      return start2 + "";
    };
  };
}
var hsl_default2 = hsl5(hue2);
var hslLong2 = hsl5(nogamma2);

// node_modules/d3-scale/node_modules/d3-interpolate/src/hcl.js
function hcl4(hue4) {
  return function(start2, end) {
    var h = hue4((start2 = hcl3(start2)).h, (end = hcl3(end)).h), c10 = nogamma2(start2.c, end.c), l3 = nogamma2(start2.l, end.l), opacity = nogamma2(start2.opacity, end.opacity);
    return function(t5) {
      start2.h = h(t5);
      start2.c = c10(t5);
      start2.l = l3(t5);
      start2.opacity = opacity(t5);
      return start2 + "";
    };
  };
}
var hcl_default2 = hcl4(hue2);
var hclLong2 = hcl4(nogamma2);

// node_modules/d3-scale/node_modules/d3-interpolate/src/cubehelix.js
function cubehelix4(hue4) {
  return function cubehelixGamma(y4) {
    y4 = +y4;
    function cubehelix7(start2, end) {
      var h = hue4((start2 = cubehelix3(start2)).h, (end = cubehelix3(end)).h), s3 = nogamma2(start2.s, end.s), l3 = nogamma2(start2.l, end.l), opacity = nogamma2(start2.opacity, end.opacity);
      return function(t5) {
        start2.h = h(t5);
        start2.s = s3(t5);
        start2.l = l3(Math.pow(t5, y4));
        start2.opacity = opacity(t5);
        return start2 + "";
      };
    }
    cubehelix7.gamma = cubehelixGamma;
    return cubehelix7;
  }(1);
}
var cubehelix_default2 = cubehelix4(hue2);
var cubehelixLong2 = cubehelix4(nogamma2);

// node_modules/d3-scale/src/constant.js
function constants(x4) {
  return function() {
    return x4;
  };
}

// node_modules/d3-scale/src/number.js
function number(x4) {
  return +x4;
}

// node_modules/d3-scale/src/continuous.js
var unit = [0, 1];
function identity3(x4) {
  return x4;
}
function normalize(a3, b2) {
  return (b2 -= a3 = +a3) ? function(x4) {
    return (x4 - a3) / b2;
  } : constants(isNaN(b2) ? NaN : 0.5);
}
function clamper(a3, b2) {
  var t5;
  if (a3 > b2)
    t5 = a3, a3 = b2, b2 = t5;
  return function(x4) {
    return Math.max(a3, Math.min(b2, x4));
  };
}
function bimap(domain, range, interpolate2) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate2(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate2(r0, r1);
  return function(x4) {
    return r0(d0(x4));
  };
}
function polymap(domain, range, interpolate2) {
  var j2 = Math.min(domain.length, range.length) - 1, d2 = new Array(j2), r3 = new Array(j2), i3 = -1;
  if (domain[j2] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }
  while (++i3 < j2) {
    d2[i3] = normalize(domain[i3], domain[i3 + 1]);
    r3[i3] = interpolate2(range[i3], range[i3 + 1]);
  }
  return function(x4) {
    var i4 = bisect_default(domain, x4, 1, j2) - 1;
    return r3[i4](d2[i4](x4));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range = unit, interpolate2 = value_default2, transform, untransform, unknown, clamp2 = identity3, piecewise4, output, input;
  function rescale() {
    var n3 = Math.min(domain.length, range.length);
    if (clamp2 !== identity3)
      clamp2 = clamper(domain[0], domain[n3 - 1]);
    piecewise4 = n3 > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x4) {
    return x4 == null || isNaN(x4 = +x4) ? unknown : (output || (output = piecewise4(domain.map(transform), range, interpolate2)))(transform(clamp2(x4)));
  }
  scale.invert = function(y4) {
    return clamp2(untransform((input || (input = piecewise4(range, domain.map(transform), number_default3)))(y4)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };
  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate2 = round_default2, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp2 = _ ? true : identity3, rescale()) : clamp2 !== identity3;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate2 = _, rescale()) : interpolate2;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t5, u2) {
    transform = t5, untransform = u2;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity3, identity3);
}

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x4) {
  return Math.abs(x4 = Math.round(x4)) >= 1e21 ? x4.toLocaleString("en").replace(/,/g, "") : x4.toString(10);
}
function formatDecimalParts(x4, p2) {
  if ((i3 = (x4 = p2 ? x4.toExponential(p2 - 1) : x4.toExponential()).indexOf("e")) < 0)
    return null;
  var i3, coefficient = x4.slice(0, i3);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x4.slice(i3 + 1)
  ];
}

// node_modules/d3-format/src/exponent.js
function exponent_default(x4) {
  return x4 = formatDecimalParts(Math.abs(x4)), x4 ? x4[1] : NaN;
}

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i3 = value.length, t5 = [], j2 = 0, g2 = grouping[0], length = 0;
    while (i3 > 0 && g2 > 0) {
      if (length + g2 + 1 > width)
        g2 = Math.max(1, width - length);
      t5.push(value.substring(i3 -= g2, i3 + g2));
      if ((length += g2 + 1) > width)
        break;
      g2 = grouping[j2 = (j2 + 1) % grouping.length];
    }
    return t5.reverse().join(thousands);
  };
}

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i3) {
      return numerals[+i3];
    });
  };
}

// node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s3) {
  out:
    for (var n3 = s3.length, i3 = 1, i0 = -1, i1; i3 < n3; ++i3) {
      switch (s3[i3]) {
        case ".":
          i0 = i1 = i3;
          break;
        case "0":
          if (i0 === 0)
            i0 = i3;
          i1 = i3;
          break;
        default:
          if (!+s3[i3])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s3.slice(0, i0) + s3.slice(i1 + 1) : s3;
}

// node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x4, p2) {
  var d2 = formatDecimalParts(x4, p2);
  if (!d2)
    return x4 + "";
  var coefficient = d2[0], exponent = d2[1], i3 = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n3 = coefficient.length;
  return i3 === n3 ? coefficient : i3 > n3 ? coefficient + new Array(i3 - n3 + 1).join("0") : i3 > 0 ? coefficient.slice(0, i3) + "." + coefficient.slice(i3) : "0." + new Array(1 - i3).join("0") + formatDecimalParts(x4, Math.max(0, p2 + i3 - 1))[0];
}

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x4, p2) {
  var d2 = formatDecimalParts(x4, p2);
  if (!d2)
    return x4 + "";
  var coefficient = d2[0], exponent = d2[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": function(x4, p2) {
    return (x4 * 100).toFixed(p2);
  },
  "b": function(x4) {
    return Math.round(x4).toString(2);
  },
  "c": function(x4) {
    return x4 + "";
  },
  "d": formatDecimal_default,
  "e": function(x4, p2) {
    return x4.toExponential(p2);
  },
  "f": function(x4, p2) {
    return x4.toFixed(p2);
  },
  "g": function(x4, p2) {
    return x4.toPrecision(p2);
  },
  "o": function(x4) {
    return Math.round(x4).toString(8);
  },
  "p": function(x4, p2) {
    return formatRounded_default(x4 * 100, p2);
  },
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": function(x4) {
    return Math.round(x4).toString(16).toUpperCase();
  },
  "x": function(x4) {
    return Math.round(x4).toString(16);
  }
};

// node_modules/d3-format/src/identity.js
function identity_default2(x4) {
  return x4;
}

// node_modules/d3-format/src/locale.js
var map3 = Array.prototype.map;
var prefixes2 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group2 = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default2 : formatGroup_default(map3.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default2 : formatNumerals_default(map3.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "-" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n")
      comma = true, type = "g";
    else if (!formatTypes_default[type])
      precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero3 || fill === "0" && align === "=")
      zero3 = true, fill = "0", align = "=";
    var prefix2 = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes_default[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix2, valueSuffix = suffix, i3, n3, c10;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign2 !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes2[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i3 = -1, n3 = value.length;
          while (++i3 < n3) {
            if (c10 = value.charCodeAt(i3), 48 > c10 || c10 > 57) {
              valueSuffix = (c10 === 46 ? decimal + value.slice(i3 + 1) : value.slice(i3)) + valueSuffix;
              value = value.slice(0, i3);
              break;
            }
          }
        }
      }
      if (comma && !zero3)
        value = group2(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero3)
        value = group2(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f2 = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e4 = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k3 = Math.pow(10, -e4), prefix2 = prefixes2[8 + e4 / 3];
    return function(value2) {
      return f2(k3 * value2) + prefix2;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max3) {
  step = Math.abs(step), max3 = Math.abs(max3) - step;
  return Math.max(0, exponent_default(max3) - exponent_default(step)) + 1;
}

// node_modules/d3-scale/src/tickFormat.js
function tickFormat(start2, stop2, count2, specifier) {
  var step = tickStep(start2, stop2, count2), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start2), Math.abs(stop2));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value)))
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start2), Math.abs(stop2)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

// node_modules/d3-scale/src/linear.js
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count2) {
    var d2 = domain();
    return ticks_default(d2[0], d2[d2.length - 1], count2 == null ? 10 : count2);
  };
  scale.tickFormat = function(count2, specifier) {
    var d2 = domain();
    return tickFormat(d2[0], d2[d2.length - 1], count2 == null ? 10 : count2, specifier);
  };
  scale.nice = function(count2) {
    if (count2 == null)
      count2 = 10;
    var d2 = domain();
    var i0 = 0;
    var i1 = d2.length - 1;
    var start2 = d2[i0];
    var stop2 = d2[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop2 < start2) {
      step = start2, start2 = stop2, stop2 = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start2, stop2, count2);
      if (step === prestep) {
        d2[i0] = start2;
        d2[i1] = stop2;
        return domain(d2);
      } else if (step > 0) {
        start2 = Math.floor(start2 / step) * step;
        stop2 = Math.ceil(stop2 / step) * step;
      } else if (step < 0) {
        start2 = Math.ceil(start2 * step) / step;
        stop2 = Math.floor(stop2 * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear3() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear3());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

// node_modules/d3-scale/src/nice.js
function nice2(domain, interval) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t5;
  if (x1 < x0) {
    t5 = i0, i0 = i1, i1 = t5;
    t5 = x0, x0 = x1, x1 = t5;
  }
  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

// node_modules/d3-scale/src/log.js
function transformLog(x4) {
  return Math.log(x4);
}
function transformExp(x4) {
  return Math.exp(x4);
}
function transformLogn(x4) {
  return -Math.log(-x4);
}
function transformExpn(x4) {
  return -Math.exp(-x4);
}
function pow10(x4) {
  return isFinite(x4) ? +("1e" + x4) : x4 < 0 ? 0 : x4;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : function(x4) {
    return Math.pow(base, x4);
  };
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function(x4) {
    return Math.log(x4) / base;
  });
}
function reflect(f2) {
  return function(x4) {
    return -f2(-x4);
  };
}
function loggish(transform) {
  var scale = transform(transformLog, transformExp), domain = scale.domain, base = 10, logs, pows;
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }
  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.ticks = function(count2) {
    var d2 = domain(), u2 = d2[0], v3 = d2[d2.length - 1], r3;
    if (r3 = v3 < u2)
      i3 = u2, u2 = v3, v3 = i3;
    var i3 = logs(u2), j2 = logs(v3), p2, k3, t5, n3 = count2 == null ? 10 : +count2, z3 = [];
    if (!(base % 1) && j2 - i3 < n3) {
      i3 = Math.floor(i3), j2 = Math.ceil(j2);
      if (u2 > 0)
        for (; i3 <= j2; ++i3) {
          for (k3 = 1, p2 = pows(i3); k3 < base; ++k3) {
            t5 = p2 * k3;
            if (t5 < u2)
              continue;
            if (t5 > v3)
              break;
            z3.push(t5);
          }
        }
      else
        for (; i3 <= j2; ++i3) {
          for (k3 = base - 1, p2 = pows(i3); k3 >= 1; --k3) {
            t5 = p2 * k3;
            if (t5 < u2)
              continue;
            if (t5 > v3)
              break;
            z3.push(t5);
          }
        }
      if (z3.length * 2 < n3)
        z3 = ticks_default(u2, v3, n3);
    } else {
      z3 = ticks_default(i3, j2, Math.min(j2 - i3, n3)).map(pows);
    }
    return r3 ? z3.reverse() : z3;
  };
  scale.tickFormat = function(count2, specifier) {
    if (specifier == null)
      specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function")
      specifier = format(specifier);
    if (count2 === Infinity)
      return specifier;
    if (count2 == null)
      count2 = 10;
    var k3 = Math.max(1, base * count2 / scale.ticks().length);
    return function(d2) {
      var i3 = d2 / pows(Math.round(logs(d2)));
      if (i3 * base < base - 0.5)
        i3 *= base;
      return i3 <= k3 ? specifier(d2) : "";
    };
  };
  scale.nice = function() {
    return domain(nice2(domain(), {
      floor: function(x4) {
        return pows(Math.floor(logs(x4)));
      },
      ceil: function(x4) {
        return pows(Math.ceil(logs(x4)));
      }
    }));
  };
  return scale;
}
function log() {
  var scale = loggish(transformer()).domain([1, 10]);
  scale.copy = function() {
    return copy(scale, log()).base(scale.base());
  };
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/symlog.js
function transformSymlog(c10) {
  return function(x4) {
    return Math.sign(x4) * Math.log1p(Math.abs(x4 / c10));
  };
}
function transformSymexp(c10) {
  return function(x4) {
    return Math.sign(x4) * Math.expm1(Math.abs(x4)) * c10;
  };
}
function symlogish(transform) {
  var c10 = 1, scale = transform(transformSymlog(c10), transformSymexp(c10));
  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c10 = +_), transformSymexp(c10)) : c10;
  };
  return linearish(scale);
}
function symlog() {
  var scale = symlogish(transformer());
  scale.copy = function() {
    return copy(scale, symlog()).constant(scale.constant());
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-scale/node_modules/d3-time/src/interval.js
var t03 = /* @__PURE__ */ new Date();
var t13 = /* @__PURE__ */ new Date();
function newInterval(floori, offseti, count2, field) {
  function interval(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval.floor = function(date2) {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval.ceil = function(date2) {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval.round = function(date2) {
    var d0 = interval(date2), d1 = interval.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval.offset = function(date2, step) {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval.range = function(start2, stop2, step) {
    var range = [], previous;
    start2 = interval.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop2) || !(step > 0))
      return range;
    do
      range.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop2);
    return range;
  };
  interval.filter = function(test) {
    return newInterval(function(date2) {
      if (date2 >= date2)
        while (floori(date2), !test(date2))
          date2.setTime(date2 - 1);
    }, function(date2, step) {
      if (date2 >= date2) {
        if (step < 0)
          while (++step <= 0) {
            while (offseti(date2, -1), !test(date2)) {
            }
          }
        else
          while (--step >= 0) {
            while (offseti(date2, 1), !test(date2)) {
            }
          }
      }
    });
  };
  if (count2) {
    interval.count = function(start2, end) {
      t03.setTime(+start2), t13.setTime(+end);
      floori(t03), floori(t13);
      return Math.floor(count2(t03, t13));
    };
    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function(d2) {
        return field(d2) % step === 0;
      } : function(d2) {
        return interval.count(0, d2) % step === 0;
      });
    };
  }
  return interval;
}

// node_modules/d3-scale/node_modules/d3-time/src/millisecond.js
var millisecond = newInterval(function() {
}, function(date2, step) {
  date2.setTime(+date2 + step);
}, function(start2, end) {
  return end - start2;
});
millisecond.every = function(k3) {
  k3 = Math.floor(k3);
  if (!isFinite(k3) || !(k3 > 0))
    return null;
  if (!(k3 > 1))
    return millisecond;
  return newInterval(function(date2) {
    date2.setTime(Math.floor(date2 / k3) * k3);
  }, function(date2, step) {
    date2.setTime(+date2 + step * k3);
  }, function(start2, end) {
    return (end - start2) / k3;
  });
};
var millisecond_default = millisecond;
var milliseconds = millisecond.range;

// node_modules/d3-scale/node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

// node_modules/d3-scale/node_modules/d3-time/src/second.js
var second = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds());
}, function(date2, step) {
  date2.setTime(+date2 + step * durationSecond);
}, function(start2, end) {
  return (end - start2) / durationSecond;
}, function(date2) {
  return date2.getUTCSeconds();
});
var second_default = second;
var seconds = second.range;

// node_modules/d3-scale/node_modules/d3-time/src/minute.js
var minute = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute);
}, function(start2, end) {
  return (end - start2) / durationMinute;
}, function(date2) {
  return date2.getMinutes();
});
var minute_default = minute;
var minutes = minute.range;

// node_modules/d3-scale/node_modules/d3-time/src/hour.js
var hour = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour);
}, function(start2, end) {
  return (end - start2) / durationHour;
}, function(date2) {
  return date2.getHours();
});
var hour_default = hour;
var hours = hour.range;

// node_modules/d3-scale/node_modules/d3-time/src/day.js
var day = newInterval(
  (date2) => date2.setHours(0, 0, 0, 0),
  (date2, step) => date2.setDate(date2.getDate() + step),
  (start2, end) => (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationDay,
  (date2) => date2.getDate() - 1
);
var day_default = day;
var days = day.range;

// node_modules/d3-scale/node_modules/d3-time/src/week.js
function weekday(i3) {
  return newInterval(function(date2) {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i3) % 7);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setDate(date2.getDate() + step * 7);
  }, function(start2, end) {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);
var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

// node_modules/d3-scale/node_modules/d3-time/src/month.js
var month = newInterval(function(date2) {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setMonth(date2.getMonth() + step);
}, function(start2, end) {
  return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
}, function(date2) {
  return date2.getMonth();
});
var month_default = month;
var months = month.range;

// node_modules/d3-scale/node_modules/d3-time/src/year.js
var year = newInterval(function(date2) {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setFullYear(date2.getFullYear() + step);
}, function(start2, end) {
  return end.getFullYear() - start2.getFullYear();
}, function(date2) {
  return date2.getFullYear();
});
year.every = function(k3) {
  return !isFinite(k3 = Math.floor(k3)) || !(k3 > 0) ? null : newInterval(function(date2) {
    date2.setFullYear(Math.floor(date2.getFullYear() / k3) * k3);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setFullYear(date2.getFullYear() + step * k3);
  });
};
var year_default = year;
var years = year.range;

// node_modules/d3-scale/node_modules/d3-time/src/utcMinute.js
var utcMinute = newInterval(function(date2) {
  date2.setUTCSeconds(0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute);
}, function(start2, end) {
  return (end - start2) / durationMinute;
}, function(date2) {
  return date2.getUTCMinutes();
});
var utcMinute_default = utcMinute;
var utcMinutes = utcMinute.range;

// node_modules/d3-scale/node_modules/d3-time/src/utcHour.js
var utcHour = newInterval(function(date2) {
  date2.setUTCMinutes(0, 0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour);
}, function(start2, end) {
  return (end - start2) / durationHour;
}, function(date2) {
  return date2.getUTCHours();
});
var utcHour_default = utcHour;
var utcHours = utcHour.range;

// node_modules/d3-scale/node_modules/d3-time/src/utcDay.js
var utcDay = newInterval(function(date2) {
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCDate(date2.getUTCDate() + step);
}, function(start2, end) {
  return (end - start2) / durationDay;
}, function(date2) {
  return date2.getUTCDate() - 1;
});
var utcDay_default = utcDay;
var utcDays = utcDay.range;

// node_modules/d3-scale/node_modules/d3-time/src/utcWeek.js
function utcWeekday(i3) {
  return newInterval(function(date2) {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i3) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, function(start2, end) {
    return (end - start2) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// node_modules/d3-scale/node_modules/d3-time/src/utcMonth.js
var utcMonth = newInterval(function(date2) {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, function(start2, end) {
  return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, function(date2) {
  return date2.getUTCMonth();
});
var utcMonth_default = utcMonth;
var utcMonths = utcMonth.range;

// node_modules/d3-scale/node_modules/d3-time/src/utcYear.js
var utcYear = newInterval(function(date2) {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, function(start2, end) {
  return end.getUTCFullYear() - start2.getUTCFullYear();
}, function(date2) {
  return date2.getUTCFullYear();
});
utcYear.every = function(k3) {
  return !isFinite(k3 = Math.floor(k3)) || !(k3 > 0) ? null : newInterval(function(date2) {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k3) * k3);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k3);
  });
};
var utcYear_default = utcYear;
var utcYears = utcYear.range;

// node_modules/d3-scale/node_modules/d3-time/src/ticks.js
function ticker(year3, month3, week, day3, hour3, minute3) {
  const tickIntervals = [
    [second_default, 1, durationSecond],
    [second_default, 5, 5 * durationSecond],
    [second_default, 15, 15 * durationSecond],
    [second_default, 30, 30 * durationSecond],
    [minute3, 1, durationMinute],
    [minute3, 5, 5 * durationMinute],
    [minute3, 15, 15 * durationMinute],
    [minute3, 30, 30 * durationMinute],
    [hour3, 1, durationHour],
    [hour3, 3, 3 * durationHour],
    [hour3, 6, 6 * durationHour],
    [hour3, 12, 12 * durationHour],
    [day3, 1, durationDay],
    [day3, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month3, 1, durationMonth],
    [month3, 3, 3 * durationMonth],
    [year3, 1, durationYear]
  ];
  function ticks(start2, stop2, count2) {
    const reverse2 = stop2 < start2;
    if (reverse2)
      [start2, stop2] = [stop2, start2];
    const interval = count2 && typeof count2.range === "function" ? count2 : tickInterval(start2, stop2, count2);
    const ticks2 = interval ? interval.range(start2, +stop2 + 1) : [];
    return reverse2 ? ticks2.reverse() : ticks2;
  }
  function tickInterval(start2, stop2, count2) {
    const target = Math.abs(stop2 - start2) / count2;
    const i3 = bisector_default(([, , step2]) => step2).right(tickIntervals, target);
    if (i3 === tickIntervals.length)
      return year3.every(tickStep(start2 / durationYear, stop2 / durationYear, count2));
    if (i3 === 0)
      return millisecond_default.every(Math.max(tickStep(start2, stop2, count2), 1));
    const [t5, step] = tickIntervals[target / tickIntervals[i3 - 1][2] < tickIntervals[i3][2] / target ? i3 - 1 : i3];
    return t5.every(step);
  }
  return [ticks, tickInterval];
}
var [utcTicks, utcTickInterval] = ticker(utcYear_default, utcMonth_default, utcSunday, utcDay_default, utcHour_default, utcMinute_default);
var [timeTicks, timeTickInterval] = ticker(year_default, month_default, sunday, day_default, hour_default, minute_default);

// node_modules/d3-time/src/interval.js
var t04 = /* @__PURE__ */ new Date();
var t14 = /* @__PURE__ */ new Date();
function newInterval2(floori, offseti, count2, field) {
  function interval(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval.floor = function(date2) {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval.ceil = function(date2) {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval.round = function(date2) {
    var d0 = interval(date2), d1 = interval.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval.offset = function(date2, step) {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval.range = function(start2, stop2, step) {
    var range = [], previous;
    start2 = interval.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop2) || !(step > 0))
      return range;
    do
      range.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop2);
    return range;
  };
  interval.filter = function(test) {
    return newInterval2(function(date2) {
      if (date2 >= date2)
        while (floori(date2), !test(date2))
          date2.setTime(date2 - 1);
    }, function(date2, step) {
      if (date2 >= date2) {
        if (step < 0)
          while (++step <= 0) {
            while (offseti(date2, -1), !test(date2)) {
            }
          }
        else
          while (--step >= 0) {
            while (offseti(date2, 1), !test(date2)) {
            }
          }
      }
    });
  };
  if (count2) {
    interval.count = function(start2, end) {
      t04.setTime(+start2), t14.setTime(+end);
      floori(t04), floori(t14);
      return Math.floor(count2(t04, t14));
    };
    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function(d2) {
        return field(d2) % step === 0;
      } : function(d2) {
        return interval.count(0, d2) % step === 0;
      });
    };
  }
  return interval;
}

// node_modules/d3-time/src/millisecond.js
var millisecond2 = newInterval2(function() {
}, function(date2, step) {
  date2.setTime(+date2 + step);
}, function(start2, end) {
  return end - start2;
});
millisecond2.every = function(k3) {
  k3 = Math.floor(k3);
  if (!isFinite(k3) || !(k3 > 0))
    return null;
  if (!(k3 > 1))
    return millisecond2;
  return newInterval2(function(date2) {
    date2.setTime(Math.floor(date2 / k3) * k3);
  }, function(date2, step) {
    date2.setTime(+date2 + step * k3);
  }, function(start2, end) {
    return (end - start2) / k3;
  });
};
var millisecond_default2 = millisecond2;
var milliseconds2 = millisecond2.range;

// node_modules/d3-time/src/duration.js
var durationSecond2 = 1e3;
var durationMinute2 = 6e4;
var durationHour2 = 36e5;
var durationDay2 = 864e5;
var durationWeek2 = 6048e5;

// node_modules/d3-time/src/second.js
var second2 = newInterval2(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds());
}, function(date2, step) {
  date2.setTime(+date2 + step * durationSecond2);
}, function(start2, end) {
  return (end - start2) / durationSecond2;
}, function(date2) {
  return date2.getUTCSeconds();
});
var second_default2 = second2;
var seconds2 = second2.range;

// node_modules/d3-time/src/minute.js
var minute2 = newInterval2(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond2);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute2);
}, function(start2, end) {
  return (end - start2) / durationMinute2;
}, function(date2) {
  return date2.getMinutes();
});
var minute_default2 = minute2;
var minutes2 = minute2.range;

// node_modules/d3-time/src/hour.js
var hour2 = newInterval2(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond2 - date2.getMinutes() * durationMinute2);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour2);
}, function(start2, end) {
  return (end - start2) / durationHour2;
}, function(date2) {
  return date2.getHours();
});
var hour_default2 = hour2;
var hours2 = hour2.range;

// node_modules/d3-time/src/day.js
var day2 = newInterval2(function(date2) {
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setDate(date2.getDate() + step);
}, function(start2, end) {
  return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute2) / durationDay2;
}, function(date2) {
  return date2.getDate() - 1;
});
var day_default2 = day2;
var days2 = day2.range;

// node_modules/d3-time/src/week.js
function weekday2(i3) {
  return newInterval2(function(date2) {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i3) % 7);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setDate(date2.getDate() + step * 7);
  }, function(start2, end) {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute2) / durationWeek2;
  });
}
var sunday2 = weekday2(0);
var monday2 = weekday2(1);
var tuesday2 = weekday2(2);
var wednesday2 = weekday2(3);
var thursday2 = weekday2(4);
var friday2 = weekday2(5);
var saturday2 = weekday2(6);
var sundays2 = sunday2.range;
var mondays2 = monday2.range;
var tuesdays2 = tuesday2.range;
var wednesdays2 = wednesday2.range;
var thursdays2 = thursday2.range;
var fridays2 = friday2.range;
var saturdays2 = saturday2.range;

// node_modules/d3-time/src/month.js
var month2 = newInterval2(function(date2) {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setMonth(date2.getMonth() + step);
}, function(start2, end) {
  return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
}, function(date2) {
  return date2.getMonth();
});
var month_default2 = month2;
var months2 = month2.range;

// node_modules/d3-time/src/year.js
var year2 = newInterval2(function(date2) {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setFullYear(date2.getFullYear() + step);
}, function(start2, end) {
  return end.getFullYear() - start2.getFullYear();
}, function(date2) {
  return date2.getFullYear();
});
year2.every = function(k3) {
  return !isFinite(k3 = Math.floor(k3)) || !(k3 > 0) ? null : newInterval2(function(date2) {
    date2.setFullYear(Math.floor(date2.getFullYear() / k3) * k3);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setFullYear(date2.getFullYear() + step * k3);
  });
};
var year_default2 = year2;
var years2 = year2.range;

// node_modules/d3-time/src/utcMinute.js
var utcMinute2 = newInterval2(function(date2) {
  date2.setUTCSeconds(0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute2);
}, function(start2, end) {
  return (end - start2) / durationMinute2;
}, function(date2) {
  return date2.getUTCMinutes();
});
var utcMinute_default2 = utcMinute2;
var utcMinutes2 = utcMinute2.range;

// node_modules/d3-time/src/utcHour.js
var utcHour2 = newInterval2(function(date2) {
  date2.setUTCMinutes(0, 0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour2);
}, function(start2, end) {
  return (end - start2) / durationHour2;
}, function(date2) {
  return date2.getUTCHours();
});
var utcHour_default2 = utcHour2;
var utcHours2 = utcHour2.range;

// node_modules/d3-time/src/utcDay.js
var utcDay2 = newInterval2(function(date2) {
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCDate(date2.getUTCDate() + step);
}, function(start2, end) {
  return (end - start2) / durationDay2;
}, function(date2) {
  return date2.getUTCDate() - 1;
});
var utcDay_default2 = utcDay2;
var utcDays2 = utcDay2.range;

// node_modules/d3-time/src/utcWeek.js
function utcWeekday2(i3) {
  return newInterval2(function(date2) {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i3) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, function(start2, end) {
    return (end - start2) / durationWeek2;
  });
}
var utcSunday2 = utcWeekday2(0);
var utcMonday2 = utcWeekday2(1);
var utcTuesday2 = utcWeekday2(2);
var utcWednesday2 = utcWeekday2(3);
var utcThursday2 = utcWeekday2(4);
var utcFriday2 = utcWeekday2(5);
var utcSaturday2 = utcWeekday2(6);
var utcSundays2 = utcSunday2.range;
var utcMondays2 = utcMonday2.range;
var utcTuesdays2 = utcTuesday2.range;
var utcWednesdays2 = utcWednesday2.range;
var utcThursdays2 = utcThursday2.range;
var utcFridays2 = utcFriday2.range;
var utcSaturdays2 = utcSaturday2.range;

// node_modules/d3-time/src/utcMonth.js
var utcMonth2 = newInterval2(function(date2) {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, function(start2, end) {
  return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, function(date2) {
  return date2.getUTCMonth();
});
var utcMonth_default2 = utcMonth2;
var utcMonths2 = utcMonth2.range;

// node_modules/d3-time/src/utcYear.js
var utcYear2 = newInterval2(function(date2) {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, function(start2, end) {
  return end.getUTCFullYear() - start2.getUTCFullYear();
}, function(date2) {
  return date2.getUTCFullYear();
});
utcYear2.every = function(k3) {
  return !isFinite(k3 = Math.floor(k3)) || !(k3 > 0) ? null : newInterval2(function(date2) {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k3) * k3);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k3);
  });
};
var utcYear_default2 = utcYear2;
var utcYears2 = utcYear2.range;

// node_modules/d3-time-format/src/locale.js
function localDate(d2) {
  if (0 <= d2.y && d2.y < 100) {
    var date2 = new Date(-1, d2.m, d2.d, d2.H, d2.M, d2.S, d2.L);
    date2.setFullYear(d2.y);
    return date2;
  }
  return new Date(d2.y, d2.m, d2.d, d2.H, d2.M, d2.S, d2.L);
}
function utcDate(d2) {
  if (0 <= d2.y && d2.y < 100) {
    var date2 = new Date(Date.UTC(-1, d2.m, d2.d, d2.H, d2.M, d2.S, d2.L));
    date2.setUTCFullYear(d2.y);
    return date2;
  }
  return new Date(Date.UTC(d2.y, d2.m, d2.d, d2.H, d2.M, d2.S, d2.L));
}
function newDate(y4, m3, d2) {
  return { y: y4, m: m3, d: d2, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i3 = -1, j2 = 0, n3 = specifier.length, c10, pad2, format2;
      if (!(date2 instanceof Date))
        date2 = /* @__PURE__ */ new Date(+date2);
      while (++i3 < n3) {
        if (specifier.charCodeAt(i3) === 37) {
          string.push(specifier.slice(j2, i3));
          if ((pad2 = pads[c10 = specifier.charAt(++i3)]) != null)
            c10 = specifier.charAt(++i3);
          else
            pad2 = c10 === "e" ? " " : "0";
          if (format2 = formats2[c10])
            c10 = format2(date2, pad2);
          string.push(c10);
          j2 = i3 + 1;
        }
      }
      string.push(specifier.slice(j2, i3));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d2 = newDate(1900, void 0, 1), i3 = parseSpecifier(d2, specifier, string += "", 0), week, day3;
      if (i3 != string.length)
        return null;
      if ("Q" in d2)
        return new Date(d2.Q);
      if ("s" in d2)
        return new Date(d2.s * 1e3 + ("L" in d2 ? d2.L : 0));
      if (Z && !("Z" in d2))
        d2.Z = 0;
      if ("p" in d2)
        d2.H = d2.H % 12 + d2.p * 12;
      if (d2.m === void 0)
        d2.m = "q" in d2 ? d2.q : 0;
      if ("V" in d2) {
        if (d2.V < 1 || d2.V > 53)
          return null;
        if (!("w" in d2))
          d2.w = 1;
        if ("Z" in d2) {
          week = utcDate(newDate(d2.y, 0, 1)), day3 = week.getUTCDay();
          week = day3 > 4 || day3 === 0 ? utcMonday2.ceil(week) : utcMonday2(week);
          week = utcDay_default2.offset(week, (d2.V - 1) * 7);
          d2.y = week.getUTCFullYear();
          d2.m = week.getUTCMonth();
          d2.d = week.getUTCDate() + (d2.w + 6) % 7;
        } else {
          week = localDate(newDate(d2.y, 0, 1)), day3 = week.getDay();
          week = day3 > 4 || day3 === 0 ? monday2.ceil(week) : monday2(week);
          week = day_default2.offset(week, (d2.V - 1) * 7);
          d2.y = week.getFullYear();
          d2.m = week.getMonth();
          d2.d = week.getDate() + (d2.w + 6) % 7;
        }
      } else if ("W" in d2 || "U" in d2) {
        if (!("w" in d2))
          d2.w = "u" in d2 ? d2.u % 7 : "W" in d2 ? 1 : 0;
        day3 = "Z" in d2 ? utcDate(newDate(d2.y, 0, 1)).getUTCDay() : localDate(newDate(d2.y, 0, 1)).getDay();
        d2.m = 0;
        d2.d = "W" in d2 ? (d2.w + 6) % 7 + d2.W * 7 - (day3 + 5) % 7 : d2.w + d2.U * 7 - (day3 + 6) % 7;
      }
      if ("Z" in d2) {
        d2.H += d2.Z / 100 | 0;
        d2.M += d2.Z % 100;
        return utcDate(d2);
      }
      return localDate(d2);
    };
  }
  function parseSpecifier(d2, specifier, string, j2) {
    var i3 = 0, n3 = specifier.length, m3 = string.length, c10, parse;
    while (i3 < n3) {
      if (j2 >= m3)
        return -1;
      c10 = specifier.charCodeAt(i3++);
      if (c10 === 37) {
        c10 = specifier.charAt(i3++);
        parse = parses[c10 in pads ? specifier.charAt(i3++) : c10];
        if (!parse || (j2 = parse(d2, string, j2)) < 0)
          return -1;
      } else if (c10 != string.charCodeAt(j2++)) {
        return -1;
      }
    }
    return j2;
  }
  function parsePeriod(d2, string, i3) {
    var n3 = periodRe.exec(string.slice(i3));
    return n3 ? (d2.p = periodLookup.get(n3[0].toLowerCase()), i3 + n3[0].length) : -1;
  }
  function parseShortWeekday(d2, string, i3) {
    var n3 = shortWeekdayRe.exec(string.slice(i3));
    return n3 ? (d2.w = shortWeekdayLookup.get(n3[0].toLowerCase()), i3 + n3[0].length) : -1;
  }
  function parseWeekday(d2, string, i3) {
    var n3 = weekdayRe.exec(string.slice(i3));
    return n3 ? (d2.w = weekdayLookup.get(n3[0].toLowerCase()), i3 + n3[0].length) : -1;
  }
  function parseShortMonth(d2, string, i3) {
    var n3 = shortMonthRe.exec(string.slice(i3));
    return n3 ? (d2.m = shortMonthLookup.get(n3[0].toLowerCase()), i3 + n3[0].length) : -1;
  }
  function parseMonth(d2, string, i3) {
    var n3 = monthRe.exec(string.slice(i3));
    return n3 ? (d2.m = monthLookup.get(n3[0].toLowerCase()), i3 + n3[0].length) : -1;
  }
  function parseLocaleDateTime(d2, string, i3) {
    return parseSpecifier(d2, locale_dateTime, string, i3);
  }
  function parseLocaleDate(d2, string, i3) {
    return parseSpecifier(d2, locale_date, string, i3);
  }
  function parseLocaleTime(d2, string, i3) {
    return parseSpecifier(d2, locale_time, string, i3);
  }
  function formatShortWeekday(d2) {
    return locale_shortWeekdays[d2.getDay()];
  }
  function formatWeekday(d2) {
    return locale_weekdays[d2.getDay()];
  }
  function formatShortMonth(d2) {
    return locale_shortMonths[d2.getMonth()];
  }
  function formatMonth(d2) {
    return locale_months[d2.getMonth()];
  }
  function formatPeriod(d2) {
    return locale_periods[+(d2.getHours() >= 12)];
  }
  function formatQuarter(d2) {
    return 1 + ~~(d2.getMonth() / 3);
  }
  function formatUTCShortWeekday(d2) {
    return locale_shortWeekdays[d2.getUTCDay()];
  }
  function formatUTCWeekday(d2) {
    return locale_weekdays[d2.getUTCDay()];
  }
  function formatUTCShortMonth(d2) {
    return locale_shortMonths[d2.getUTCMonth()];
  }
  function formatUTCMonth(d2) {
    return locale_months[d2.getUTCMonth()];
  }
  function formatUTCPeriod(d2) {
    return locale_periods[+(d2.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d2) {
    return 1 + ~~(d2.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f2 = newFormat(specifier += "", formats);
      f2.toString = function() {
        return specifier;
      };
      return f2;
    },
    parse: function(specifier) {
      var p2 = newParse(specifier += "", false);
      p2.toString = function() {
        return specifier;
      };
      return p2;
    },
    utcFormat: function(specifier) {
      var f2 = newFormat(specifier += "", utcFormats);
      f2.toString = function() {
        return specifier;
      };
      return f2;
    },
    utcParse: function(specifier) {
      var p2 = newParse(specifier += "", true);
      p2.toString = function() {
        return specifier;
      };
      return p2;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" };
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign2 = value < 0 ? "-" : "", string = (sign2 ? -value : value) + "", length = string.length;
  return sign2 + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s3) {
  return s3.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i3) => [name.toLowerCase(), i3]));
}
function parseWeekdayNumberSunday(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 1));
  return n3 ? (d2.w = +n3[0], i3 + n3[0].length) : -1;
}
function parseWeekdayNumberMonday(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 1));
  return n3 ? (d2.u = +n3[0], i3 + n3[0].length) : -1;
}
function parseWeekNumberSunday(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d2.U = +n3[0], i3 + n3[0].length) : -1;
}
function parseWeekNumberISO(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d2.V = +n3[0], i3 + n3[0].length) : -1;
}
function parseWeekNumberMonday(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d2.W = +n3[0], i3 + n3[0].length) : -1;
}
function parseFullYear(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 4));
  return n3 ? (d2.y = +n3[0], i3 + n3[0].length) : -1;
}
function parseYear(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d2.y = +n3[0] + (+n3[0] > 68 ? 1900 : 2e3), i3 + n3[0].length) : -1;
}
function parseZone(d2, string, i3) {
  var n3 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i3, i3 + 6));
  return n3 ? (d2.Z = n3[1] ? 0 : -(n3[2] + (n3[3] || "00")), i3 + n3[0].length) : -1;
}
function parseQuarter(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 1));
  return n3 ? (d2.q = n3[0] * 3 - 3, i3 + n3[0].length) : -1;
}
function parseMonthNumber(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d2.m = n3[0] - 1, i3 + n3[0].length) : -1;
}
function parseDayOfMonth(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d2.d = +n3[0], i3 + n3[0].length) : -1;
}
function parseDayOfYear(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 3));
  return n3 ? (d2.m = 0, d2.d = +n3[0], i3 + n3[0].length) : -1;
}
function parseHour24(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d2.H = +n3[0], i3 + n3[0].length) : -1;
}
function parseMinutes(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d2.M = +n3[0], i3 + n3[0].length) : -1;
}
function parseSeconds(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d2.S = +n3[0], i3 + n3[0].length) : -1;
}
function parseMilliseconds(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 3));
  return n3 ? (d2.L = +n3[0], i3 + n3[0].length) : -1;
}
function parseMicroseconds(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 6));
  return n3 ? (d2.L = Math.floor(n3[0] / 1e3), i3 + n3[0].length) : -1;
}
function parseLiteralPercent(d2, string, i3) {
  var n3 = percentRe.exec(string.slice(i3, i3 + 1));
  return n3 ? i3 + n3[0].length : -1;
}
function parseUnixTimestamp(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3));
  return n3 ? (d2.Q = +n3[0], i3 + n3[0].length) : -1;
}
function parseUnixTimestampSeconds(d2, string, i3) {
  var n3 = numberRe.exec(string.slice(i3));
  return n3 ? (d2.s = +n3[0], i3 + n3[0].length) : -1;
}
function formatDayOfMonth(d2, p2) {
  return pad(d2.getDate(), p2, 2);
}
function formatHour24(d2, p2) {
  return pad(d2.getHours(), p2, 2);
}
function formatHour12(d2, p2) {
  return pad(d2.getHours() % 12 || 12, p2, 2);
}
function formatDayOfYear(d2, p2) {
  return pad(1 + day_default2.count(year_default2(d2), d2), p2, 3);
}
function formatMilliseconds(d2, p2) {
  return pad(d2.getMilliseconds(), p2, 3);
}
function formatMicroseconds(d2, p2) {
  return formatMilliseconds(d2, p2) + "000";
}
function formatMonthNumber(d2, p2) {
  return pad(d2.getMonth() + 1, p2, 2);
}
function formatMinutes(d2, p2) {
  return pad(d2.getMinutes(), p2, 2);
}
function formatSeconds(d2, p2) {
  return pad(d2.getSeconds(), p2, 2);
}
function formatWeekdayNumberMonday(d2) {
  var day3 = d2.getDay();
  return day3 === 0 ? 7 : day3;
}
function formatWeekNumberSunday(d2, p2) {
  return pad(sunday2.count(year_default2(d2) - 1, d2), p2, 2);
}
function dISO(d2) {
  var day3 = d2.getDay();
  return day3 >= 4 || day3 === 0 ? thursday2(d2) : thursday2.ceil(d2);
}
function formatWeekNumberISO(d2, p2) {
  d2 = dISO(d2);
  return pad(thursday2.count(year_default2(d2), d2) + (year_default2(d2).getDay() === 4), p2, 2);
}
function formatWeekdayNumberSunday(d2) {
  return d2.getDay();
}
function formatWeekNumberMonday(d2, p2) {
  return pad(monday2.count(year_default2(d2) - 1, d2), p2, 2);
}
function formatYear(d2, p2) {
  return pad(d2.getFullYear() % 100, p2, 2);
}
function formatYearISO(d2, p2) {
  d2 = dISO(d2);
  return pad(d2.getFullYear() % 100, p2, 2);
}
function formatFullYear(d2, p2) {
  return pad(d2.getFullYear() % 1e4, p2, 4);
}
function formatFullYearISO(d2, p2) {
  var day3 = d2.getDay();
  d2 = day3 >= 4 || day3 === 0 ? thursday2(d2) : thursday2.ceil(d2);
  return pad(d2.getFullYear() % 1e4, p2, 4);
}
function formatZone(d2) {
  var z3 = d2.getTimezoneOffset();
  return (z3 > 0 ? "-" : (z3 *= -1, "+")) + pad(z3 / 60 | 0, "0", 2) + pad(z3 % 60, "0", 2);
}
function formatUTCDayOfMonth(d2, p2) {
  return pad(d2.getUTCDate(), p2, 2);
}
function formatUTCHour24(d2, p2) {
  return pad(d2.getUTCHours(), p2, 2);
}
function formatUTCHour12(d2, p2) {
  return pad(d2.getUTCHours() % 12 || 12, p2, 2);
}
function formatUTCDayOfYear(d2, p2) {
  return pad(1 + utcDay_default2.count(utcYear_default2(d2), d2), p2, 3);
}
function formatUTCMilliseconds(d2, p2) {
  return pad(d2.getUTCMilliseconds(), p2, 3);
}
function formatUTCMicroseconds(d2, p2) {
  return formatUTCMilliseconds(d2, p2) + "000";
}
function formatUTCMonthNumber(d2, p2) {
  return pad(d2.getUTCMonth() + 1, p2, 2);
}
function formatUTCMinutes(d2, p2) {
  return pad(d2.getUTCMinutes(), p2, 2);
}
function formatUTCSeconds(d2, p2) {
  return pad(d2.getUTCSeconds(), p2, 2);
}
function formatUTCWeekdayNumberMonday(d2) {
  var dow = d2.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d2, p2) {
  return pad(utcSunday2.count(utcYear_default2(d2) - 1, d2), p2, 2);
}
function UTCdISO(d2) {
  var day3 = d2.getUTCDay();
  return day3 >= 4 || day3 === 0 ? utcThursday2(d2) : utcThursday2.ceil(d2);
}
function formatUTCWeekNumberISO(d2, p2) {
  d2 = UTCdISO(d2);
  return pad(utcThursday2.count(utcYear_default2(d2), d2) + (utcYear_default2(d2).getUTCDay() === 4), p2, 2);
}
function formatUTCWeekdayNumberSunday(d2) {
  return d2.getUTCDay();
}
function formatUTCWeekNumberMonday(d2, p2) {
  return pad(utcMonday2.count(utcYear_default2(d2) - 1, d2), p2, 2);
}
function formatUTCYear(d2, p2) {
  return pad(d2.getUTCFullYear() % 100, p2, 2);
}
function formatUTCYearISO(d2, p2) {
  d2 = UTCdISO(d2);
  return pad(d2.getUTCFullYear() % 100, p2, 2);
}
function formatUTCFullYear(d2, p2) {
  return pad(d2.getUTCFullYear() % 1e4, p2, 4);
}
function formatUTCFullYearISO(d2, p2) {
  var day3 = d2.getUTCDay();
  d2 = day3 >= 4 || day3 === 0 ? utcThursday2(d2) : utcThursday2.ceil(d2);
  return pad(d2.getUTCFullYear() % 1e4, p2, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d2) {
  return +d2;
}
function formatUnixTimestampSeconds(d2) {
  return Math.floor(+d2 / 1e3);
}

// node_modules/d3-time-format/src/defaultLocale.js
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// node_modules/d3-time-format/src/isoFormat.js
var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
function formatIsoNative(date2) {
  return date2.toISOString();
}
var formatIso = Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);

// node_modules/d3-time-format/src/isoParse.js
function parseIsoNative(string) {
  var date2 = new Date(string);
  return isNaN(date2) ? null : date2;
}
var parseIso = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);

// node_modules/d3-scale/src/time.js
function date(t5) {
  return new Date(t5);
}
function number2(t5) {
  return t5 instanceof Date ? +t5 : +/* @__PURE__ */ new Date(+t5);
}
function calendar(ticks, tickInterval, year3, month3, week, day3, hour3, minute3, second3, format2) {
  var scale = continuous(), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear2 = format2("%Y");
  function tickFormat2(date2) {
    return (second3(date2) < date2 ? formatMillisecond : minute3(date2) < date2 ? formatSecond : hour3(date2) < date2 ? formatMinute : day3(date2) < date2 ? formatHour : month3(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year3(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  scale.invert = function(y4) {
    return new Date(invert(y4));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number2)) : domain().map(date);
  };
  scale.ticks = function(interval) {
    var d2 = domain();
    return ticks(d2[0], d2[d2.length - 1], interval == null ? 10 : interval);
  };
  scale.tickFormat = function(count2, specifier) {
    return specifier == null ? tickFormat2 : format2(specifier);
  };
  scale.nice = function(interval) {
    var d2 = domain();
    if (!interval || typeof interval.range !== "function")
      interval = tickInterval(d2[0], d2[d2.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice2(d2, interval)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(ticks, tickInterval, year3, month3, week, day3, hour3, minute3, second3, format2));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, year_default, month_default, sunday, day_default, hour_default, minute_default, second_default, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}

// node_modules/d3-scale/src/utcTime.js
function utcTime() {
  return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear_default, utcMonth_default, utcSunday, utcDay_default, utcHour_default, utcMinute_default, second_default, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/colors.js
function colors_default(specifier) {
  var n3 = specifier.length / 6 | 0, colors3 = new Array(n3), i3 = 0;
  while (i3 < n3)
    colors3[i3] = "#" + specifier.slice(i3 * 6, ++i3 * 6);
  return colors3;
}

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/category10.js
var category10_default = colors_default("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Accent.js
var Accent_default = colors_default("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Dark2.js
var Dark2_default = colors_default("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Paired.js
var Paired_default = colors_default("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Pastel1.js
var Pastel1_default = colors_default("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Pastel2.js
var Pastel2_default = colors_default("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Set1.js
var Set1_default = colors_default("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Set2.js
var Set2_default = colors_default("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Set3.js
var Set3_default = colors_default("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Tableau10.js
var Tableau10_default = colors_default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/ramp.js
var ramp_default = (scheme55) => rgbBasis(scheme55[scheme55.length - 1]);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/BrBG.js
var scheme = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(colors_default);
var BrBG_default = ramp_default(scheme);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/PRGn.js
var scheme2 = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(colors_default);
var PRGn_default = ramp_default(scheme2);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/PiYG.js
var scheme3 = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(colors_default);
var PiYG_default = ramp_default(scheme3);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/PuOr.js
var scheme4 = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(colors_default);
var PuOr_default = ramp_default(scheme4);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/RdBu.js
var scheme5 = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(colors_default);
var RdBu_default = ramp_default(scheme5);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/RdGy.js
var scheme6 = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(colors_default);
var RdGy_default = ramp_default(scheme6);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js
var scheme7 = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(colors_default);
var RdYlBu_default = ramp_default(scheme7);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js
var scheme8 = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(colors_default);
var RdYlGn_default = ramp_default(scheme8);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/Spectral.js
var scheme9 = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(colors_default);
var Spectral_default = ramp_default(scheme9);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js
var scheme10 = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(colors_default);
var BuGn_default = ramp_default(scheme10);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js
var scheme11 = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(colors_default);
var BuPu_default = ramp_default(scheme11);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js
var scheme12 = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(colors_default);
var GnBu_default = ramp_default(scheme12);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js
var scheme13 = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(colors_default);
var OrRd_default = ramp_default(scheme13);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js
var scheme14 = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(colors_default);
var PuBuGn_default = ramp_default(scheme14);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js
var scheme15 = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(colors_default);
var PuBu_default = ramp_default(scheme15);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js
var scheme16 = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(colors_default);
var PuRd_default = ramp_default(scheme16);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js
var scheme17 = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(colors_default);
var RdPu_default = ramp_default(scheme17);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js
var scheme18 = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(colors_default);
var YlGnBu_default = ramp_default(scheme18);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js
var scheme19 = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(colors_default);
var YlGn_default = ramp_default(scheme19);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js
var scheme20 = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(colors_default);
var YlOrBr_default = ramp_default(scheme20);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js
var scheme21 = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(colors_default);
var YlOrRd_default = ramp_default(scheme21);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-single/Blues.js
var scheme22 = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(colors_default);
var Blues_default = ramp_default(scheme22);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-single/Greens.js
var scheme23 = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(colors_default);
var Greens_default = ramp_default(scheme23);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-single/Greys.js
var scheme24 = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(colors_default);
var Greys_default = ramp_default(scheme24);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-single/Purples.js
var scheme25 = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(colors_default);
var Purples_default = ramp_default(scheme25);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-single/Reds.js
var scheme26 = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(colors_default);
var Reds_default = ramp_default(scheme26);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js
var scheme27 = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(colors_default);
var Oranges_default = ramp_default(scheme27);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var cubehelix_default3 = cubehelixLong(cubehelix(300, 0.5, 0), cubehelix(-240, 0.5, 1));

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js
var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var c = cubehelix();

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var c6 = rgb2();
var pi_1_3 = Math.PI / 3;
var pi_2_3 = Math.PI * 2 / 3;

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function ramp(range) {
  var n3 = range.length;
  return function(t5) {
    return range[Math.max(0, Math.min(n3 - 1, Math.floor(t5 * n3)))];
  };
}
var viridis_default = ramp(colors_default("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp(colors_default("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp(colors_default("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp(colors_default("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

// node_modules/@nivo/core/dist/nivo-core.es.js
var import_isFunction = __toESM(require_isFunction());
var import_without = __toESM(require_without());

// node_modules/d3-path/src/path.js
var pi = Math.PI;
var tau = 2 * pi;
var epsilon = 1e-6;
var tauEpsilon = tau - epsilon;
function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null;
  this._ = "";
}
function path() {
  return new Path();
}
Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x4, y4) {
    this._ += "M" + (this._x0 = this._x1 = +x4) + "," + (this._y0 = this._y1 = +y4);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x4, y4) {
    this._ += "L" + (this._x1 = +x4) + "," + (this._y1 = +y4);
  },
  quadraticCurveTo: function(x1, y1, x4, y4) {
    this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x4) + "," + (this._y1 = +y4);
  },
  bezierCurveTo: function(x1, y1, x22, y22, x4, y4) {
    this._ += "C" + +x1 + "," + +y1 + "," + +x22 + "," + +y22 + "," + (this._x1 = +x4) + "," + (this._y1 = +y4);
  },
  arcTo: function(x1, y1, x22, y22, r3) {
    x1 = +x1, y1 = +y1, x22 = +x22, y22 = +y22, r3 = +r3;
    var x0 = this._x1, y0 = this._y1, x21 = x22 - x1, y21 = y22 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (r3 < 0)
      throw new Error("negative radius: " + r3);
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else if (!(l01_2 > epsilon))
      ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r3) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else {
      var x20 = x22 - x0, y20 = y22 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l3 = r3 * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l3 / l01, t21 = l3 / l21;
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }
      this._ += "A" + r3 + "," + r3 + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x4, y4, r3, a0, a1, ccw) {
    x4 = +x4, y4 = +y4, r3 = +r3, ccw = !!ccw;
    var dx = r3 * Math.cos(a0), dy = r3 * Math.sin(a0), x0 = x4 + dx, y0 = y4 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (r3 < 0)
      throw new Error("negative radius: " + r3);
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }
    if (!r3)
      return;
    if (da < 0)
      da = da % tau + tau;
    if (da > tauEpsilon) {
      this._ += "A" + r3 + "," + r3 + ",0,1," + cw + "," + (x4 - dx) + "," + (y4 - dy) + "A" + r3 + "," + r3 + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    } else if (da > epsilon) {
      this._ += "A" + r3 + "," + r3 + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x4 + r3 * Math.cos(a1)) + "," + (this._y1 = y4 + r3 * Math.sin(a1));
    }
  },
  rect: function(x4, y4, w2, h) {
    this._ += "M" + (this._x0 = this._x1 = +x4) + "," + (this._y0 = this._y1 = +y4) + "h" + +w2 + "v" + +h + "h" + -w2 + "Z";
  },
  toString: function() {
    return this._;
  }
};

// node_modules/d3-shape/src/constant.js
function constant_default4(x4) {
  return function constant() {
    return x4;
  };
}

// node_modules/d3-shape/src/math.js
var epsilon3 = 1e-12;
var pi2 = Math.PI;
var halfPi = pi2 / 2;
var tau2 = 2 * pi2;

// node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x4, y4);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// node_modules/d3-shape/src/curve/radial.js
var curveRadialLinear = curveRadial(linear_default);
function Radial(curve) {
  this._curve = curve;
}
Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a3, r3) {
    this._curve.point(r3 * Math.sin(a3), r3 * -Math.cos(a3));
  }
};
function curveRadial(curve) {
  function radial2(context) {
    return new Radial(curve(context));
  }
  radial2._curve = curve;
  return radial2;
}

// node_modules/d3-shape/src/array.js
var slice2 = Array.prototype.slice;

// node_modules/d3-shape/src/symbol/diamond.js
var tan30 = Math.sqrt(1 / 3);
var tan30_2 = tan30 * 2;

// node_modules/d3-shape/src/symbol/star.js
var kr = Math.sin(pi2 / 10) / Math.sin(7 * pi2 / 10);
var kx = Math.sin(tau2 / 10) * kr;
var ky = -Math.cos(tau2 / 10) * kr;

// node_modules/d3-shape/src/symbol/triangle.js
var sqrt3 = Math.sqrt(3);

// node_modules/d3-shape/src/symbol/wye.js
var s = Math.sqrt(3) / 2;
var k = 1 / Math.sqrt(12);
var a = (k / 2 + 1) * 3;

// node_modules/d3-shape/src/noop.js
function noop_default() {
}

// node_modules/d3-shape/src/curve/basis.js
function point2(that, x4, y4) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x4) / 6,
    (that._y0 + 4 * that._y1 + y4) / 6
  );
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point2(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        point2(this, x4, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = x4;
    this._y0 = this._y1, this._y1 = y4;
  }
};
function basis_default3(context) {
  return new Basis(context);
}

// node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x4, this._y2 = y4;
        break;
      case 1:
        this._point = 2;
        this._x3 = x4, this._y3 = y4;
        break;
      case 2:
        this._point = 3;
        this._x4 = x4, this._y4 = y4;
        this._context.moveTo((this._x0 + 4 * this._x1 + x4) / 6, (this._y0 + 4 * this._y1 + y4) / 6);
        break;
      default:
        point2(this, x4, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = x4;
    this._y0 = this._y1, this._y1 = y4;
  }
};
function basisClosed_default3(context) {
  return new BasisClosed(context);
}

// node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x4) / 6, y0 = (this._y0 + 4 * this._y1 + y4) / 6;
        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4;
      default:
        point2(this, x4, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = x4;
    this._y0 = this._y1, this._y1 = y4;
  }
};
function basisOpen_default(context) {
  return new BasisOpen(context);
}

// node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x4 = this._x, y4 = this._y, j2 = x4.length - 1;
    if (j2 > 0) {
      var x0 = x4[0], y0 = y4[0], dx = x4[j2] - x0, dy = y4[j2] - y0, i3 = -1, t5;
      while (++i3 <= j2) {
        t5 = i3 / j2;
        this._basis.point(
          this._beta * x4[i3] + (1 - this._beta) * (x0 + t5 * dx),
          this._beta * y4[i3] + (1 - this._beta) * (y0 + t5 * dy)
        );
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x4, y4) {
    this._x.push(+x4);
    this._y.push(+y4);
  }
};
var bundle_default = function custom(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom(+beta2);
  };
  return bundle;
}(0.85);

// node_modules/d3-shape/src/curve/cardinal.js
function point3(that, x4, y4) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x4),
    that._y2 + that._k * (that._y1 - y4),
    that._x2,
    that._y2
  );
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point3(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
        break;
      case 1:
        this._point = 2;
        this._x1 = x4, this._y1 = y4;
        break;
      case 2:
        this._point = 3;
      default:
        point3(this, x4, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var cardinal_default = function custom2(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom2(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x4, this._y3 = y4;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x4, this._y4 = y4);
        break;
      case 2:
        this._point = 3;
        this._x5 = x4, this._y5 = y4;
        break;
      default:
        point3(this, x4, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var cardinalClosed_default = function custom3(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom3(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point3(this, x4, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var cardinalOpen_default = function custom4(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom4(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/catmullRom.js
function point4(that, x4, y4) {
  var x1 = that._x1, y1 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon3) {
    var a3 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n3 = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a3 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n3;
    y1 = (y1 * a3 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n3;
  }
  if (that._l23_a > epsilon3) {
    var b2 = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m3 = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b2 + that._x1 * that._l23_2a - x4 * that._l12_2a) / m3;
    y22 = (y22 * b2 + that._y1 * that._l23_2a - y4 * that._l12_2a) / m3;
  }
  that._context.bezierCurveTo(x1, y1, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    if (this._point) {
      var x23 = this._x2 - x4, y23 = this._y2 - y4;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        point4(this, x4, y4);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var catmullRom_default = function custom5(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom5(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    if (this._point) {
      var x23 = this._x2 - x4, y23 = this._y2 - y4;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x4, this._y3 = y4;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x4, this._y4 = y4);
        break;
      case 2:
        this._point = 3;
        this._x5 = x4, this._y5 = y4;
        break;
      default:
        point4(this, x4, y4);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var catmullRomClosed_default = function custom6(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom6(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    if (this._point) {
      var x23 = this._x2 - x4, y23 = this._y2 - y4;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point4(this, x4, y4);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var catmullRomOpen_default = function custom7(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom7(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point)
      this._context.closePath();
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    if (this._point)
      this._context.lineTo(x4, y4);
    else
      this._point = 1, this._context.moveTo(x4, y4);
  }
};
function linearClosed_default(context) {
  return new LinearClosed(context);
}

// node_modules/d3-shape/src/curve/monotone.js
function sign(x4) {
  return x4 < 0 ? -1 : 1;
}
function slope3(that, x22, y22) {
  var h0 = that._x1 - that._x0, h1 = x22 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y22 - that._y1) / (h1 || h0 < 0 && -0), p2 = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p2)) || 0;
}
function slope2(that, t5) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t5) / 2 : t5;
}
function point5(that, t06, t16) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t06, x1 - dx, y1 - dx * t16, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point5(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    var t16 = NaN;
    x4 = +x4, y4 = +y4;
    if (x4 === this._x1 && y4 === this._y1)
      return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point5(this, slope2(this, t16 = slope3(this, x4, y4)), t16);
        break;
      default:
        point5(this, this._t0, t16 = slope3(this, x4, y4));
        break;
    }
    this._x0 = this._x1, this._x1 = x4;
    this._y0 = this._y1, this._y1 = y4;
    this._t0 = t16;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x4, y4) {
  MonotoneX.prototype.point.call(this, y4, x4);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x4, y4) {
    this._context.moveTo(y4, x4);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x4, y4) {
    this._context.lineTo(y4, x4);
  },
  bezierCurveTo: function(x1, y1, x22, y22, x4, y4) {
    this._context.bezierCurveTo(y1, x1, y22, x22, y4, x4);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}

// node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x4 = this._x, y4 = this._y, n3 = x4.length;
    if (n3) {
      this._line ? this._context.lineTo(x4[0], y4[0]) : this._context.moveTo(x4[0], y4[0]);
      if (n3 === 2) {
        this._context.lineTo(x4[1], y4[1]);
      } else {
        var px = controlPoints(x4), py = controlPoints(y4);
        for (var i0 = 0, i1 = 1; i1 < n3; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x4[i1], y4[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n3 === 1)
      this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x4, y4) {
    this._x.push(+x4);
    this._y.push(+y4);
  }
};
function controlPoints(x4) {
  var i3, n3 = x4.length - 1, m3, a3 = new Array(n3), b2 = new Array(n3), r3 = new Array(n3);
  a3[0] = 0, b2[0] = 2, r3[0] = x4[0] + 2 * x4[1];
  for (i3 = 1; i3 < n3 - 1; ++i3)
    a3[i3] = 1, b2[i3] = 4, r3[i3] = 4 * x4[i3] + 2 * x4[i3 + 1];
  a3[n3 - 1] = 2, b2[n3 - 1] = 7, r3[n3 - 1] = 8 * x4[n3 - 1] + x4[n3];
  for (i3 = 1; i3 < n3; ++i3)
    m3 = a3[i3] / b2[i3 - 1], b2[i3] -= m3, r3[i3] -= m3 * r3[i3 - 1];
  a3[n3 - 1] = r3[n3 - 1] / b2[n3 - 1];
  for (i3 = n3 - 2; i3 >= 0; --i3)
    a3[i3] = (r3[i3] - a3[i3 + 1]) / b2[i3];
  b2[n3 - 1] = (x4[n3] + a3[n3 - 1]) / 2;
  for (i3 = 0; i3 < n3 - 1; ++i3)
    b2[i3] = 2 * x4[i3 + 1] - a3[i3 + 1];
  return [a3, b2];
}
function natural_default(context) {
  return new Natural(context);
}

// node_modules/d3-shape/src/curve/step.js
function Step(context, t5) {
  this._context = context;
  this._t = t5;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2)
      this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    if (this._line >= 0)
      this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y4);
          this._context.lineTo(x4, y4);
        } else {
          var x1 = this._x * (1 - this._t) + x4 * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y4);
        }
        break;
      }
    }
    this._x = x4, this._y = y4;
  }
};
function step_default(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}

// node_modules/d3-shape/src/offset/none.js
function none_default(series, order) {
  if (!((n3 = series.length) > 1))
    return;
  for (var i3 = 1, j2, s0, s1 = series[order[0]], n3, m3 = s1.length; i3 < n3; ++i3) {
    s0 = s1, s1 = series[order[i3]];
    for (j2 = 0; j2 < m3; ++j2) {
      s1[j2][1] += s1[j2][0] = isNaN(s0[j2][1]) ? s0[j2][0] : s0[j2][1];
    }
  }
}

// node_modules/d3-shape/src/order/none.js
function none_default2(series) {
  var n3 = series.length, o3 = new Array(n3);
  while (--n3 >= 0)
    o3[n3] = n3;
  return o3;
}

// node_modules/d3-shape/src/stack.js
function stackValue(d2, key) {
  return d2[key];
}
function stack_default() {
  var keys = constant_default4([]), order = none_default2, offset = none_default, value = stackValue;
  function stack(data) {
    var kz = keys.apply(this, arguments), i3, m3 = data.length, n3 = kz.length, sz = new Array(n3), oz;
    for (i3 = 0; i3 < n3; ++i3) {
      for (var ki2 = kz[i3], si2 = sz[i3] = new Array(m3), j2 = 0, sij; j2 < m3; ++j2) {
        si2[j2] = sij = [0, +value(data[j2], ki2, j2, data)];
        sij.data = data[j2];
      }
      si2.key = ki2;
    }
    for (i3 = 0, oz = order(sz); i3 < n3; ++i3) {
      sz[oz[i3]].index = i3;
    }
    offset(sz, oz);
    return sz;
  }
  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : constant_default4(slice2.call(_)), stack) : keys;
  };
  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant_default4(+_), stack) : value;
  };
  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? none_default2 : typeof _ === "function" ? _ : constant_default4(slice2.call(_)), stack) : order;
  };
  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? none_default : _, stack) : offset;
  };
  return stack;
}

// node_modules/d3-shape/src/offset/expand.js
function expand_default(series, order) {
  if (!((n3 = series.length) > 0))
    return;
  for (var i3, n3, j2 = 0, m3 = series[0].length, y4; j2 < m3; ++j2) {
    for (y4 = i3 = 0; i3 < n3; ++i3)
      y4 += series[i3][j2][1] || 0;
    if (y4)
      for (i3 = 0; i3 < n3; ++i3)
        series[i3][j2][1] /= y4;
  }
  none_default(series, order);
}

// node_modules/d3-shape/src/offset/diverging.js
function diverging_default(series, order) {
  if (!((n3 = series.length) > 0))
    return;
  for (var i3, j2 = 0, d2, dy, yp, yn, n3, m3 = series[order[0]].length; j2 < m3; ++j2) {
    for (yp = yn = 0, i3 = 0; i3 < n3; ++i3) {
      if ((dy = (d2 = series[order[i3]][j2])[1] - d2[0]) > 0) {
        d2[0] = yp, d2[1] = yp += dy;
      } else if (dy < 0) {
        d2[1] = yn, d2[0] = yn += dy;
      } else {
        d2[0] = 0, d2[1] = dy;
      }
    }
  }
}

// node_modules/d3-shape/src/offset/silhouette.js
function silhouette_default(series, order) {
  if (!((n3 = series.length) > 0))
    return;
  for (var j2 = 0, s0 = series[order[0]], n3, m3 = s0.length; j2 < m3; ++j2) {
    for (var i3 = 0, y4 = 0; i3 < n3; ++i3)
      y4 += series[i3][j2][1] || 0;
    s0[j2][1] += s0[j2][0] = -y4 / 2;
  }
  none_default(series, order);
}

// node_modules/d3-shape/src/offset/wiggle.js
function wiggle_default(series, order) {
  if (!((n3 = series.length) > 0) || !((m3 = (s0 = series[order[0]]).length) > 0))
    return;
  for (var y4 = 0, j2 = 1, s0, m3, n3; j2 < m3; ++j2) {
    for (var i3 = 0, s1 = 0, s22 = 0; i3 < n3; ++i3) {
      var si2 = series[order[i3]], sij0 = si2[j2][1] || 0, sij1 = si2[j2 - 1][1] || 0, s3 = (sij0 - sij1) / 2;
      for (var k3 = 0; k3 < i3; ++k3) {
        var sk = series[order[k3]], skj0 = sk[j2][1] || 0, skj1 = sk[j2 - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s22 += s3 * sij0;
    }
    s0[j2 - 1][1] += s0[j2 - 1][0] = y4;
    if (s1)
      y4 -= s22 / s1;
  }
  s0[j2 - 1][1] += s0[j2 - 1][0] = y4;
  none_default(series, order);
}

// node_modules/d3-shape/src/order/appearance.js
function appearance_default(series) {
  var peaks = series.map(peak);
  return none_default2(series).sort(function(a3, b2) {
    return peaks[a3] - peaks[b2];
  });
}
function peak(series) {
  var i3 = -1, j2 = 0, n3 = series.length, vi2, vj = -Infinity;
  while (++i3 < n3)
    if ((vi2 = +series[i3][1]) > vj)
      vj = vi2, j2 = i3;
  return j2;
}

// node_modules/d3-shape/src/order/ascending.js
function ascending_default2(series) {
  var sums = series.map(sum2);
  return none_default2(series).sort(function(a3, b2) {
    return sums[a3] - sums[b2];
  });
}
function sum2(series) {
  var s3 = 0, i3 = -1, n3 = series.length, v3;
  while (++i3 < n3)
    if (v3 = +series[i3][1])
      s3 += v3;
  return s3;
}

// node_modules/d3-shape/src/order/descending.js
function descending_default3(series) {
  return ascending_default2(series).reverse();
}

// node_modules/d3-shape/src/order/insideOut.js
function insideOut_default(series) {
  var n3 = series.length, i3, j2, sums = series.map(sum2), order = appearance_default(series), top = 0, bottom = 0, tops = [], bottoms = [];
  for (i3 = 0; i3 < n3; ++i3) {
    j2 = order[i3];
    if (top < bottom) {
      top += sums[j2];
      tops.push(j2);
    } else {
      bottom += sums[j2];
      bottoms.push(j2);
    }
  }
  return bottoms.reverse().concat(tops);
}

// node_modules/d3-shape/src/order/reverse.js
function reverse_default(series) {
  return none_default2(series).reverse();
}

// node_modules/@nivo/core/dist/nivo-core.es.js
var import_isPlainObject = __toESM(require_isPlainObject());
var import_pick = __toESM(require_pick());
var import_isEqual = __toESM(require_isEqual());
function Sr() {
  return Sr = Object.assign ? Object.assign.bind() : function(e4) {
    for (var r3 = 1; r3 < arguments.length; r3++) {
      var t5 = arguments[r3];
      for (var i3 in t5)
        Object.prototype.hasOwnProperty.call(t5, i3) && (e4[i3] = t5[i3]);
    }
    return e4;
  }, Sr.apply(this, arguments);
}
function jr(e4, r3) {
  if (null == e4)
    return {};
  var t5, i3, n3 = {}, o3 = Object.keys(e4);
  for (i3 = 0; i3 < o3.length; i3++)
    t5 = o3[i3], r3.indexOf(t5) >= 0 || (n3[t5] = e4[t5]);
  return n3;
}
var Br = { fill: import_prop_types.default.string, fontSize: import_prop_types.default.number, fontFamily: import_prop_types.default.string };
var Gr = import_prop_types.default.shape({ domain: import_prop_types.default.shape({ line: import_prop_types.default.shape({ stroke: import_prop_types.default.string.isRequired, strokeWidth: import_prop_types.default.number.isRequired, strokeDasharray: import_prop_types.default.string }).isRequired }).isRequired, ticks: import_prop_types.default.shape({ line: import_prop_types.default.shape({ stroke: import_prop_types.default.string.isRequired, strokeWidth: import_prop_types.default.number.isRequired, strokeDasharray: import_prop_types.default.string }).isRequired, text: import_prop_types.default.shape(Sr({}, Br)).isRequired }).isRequired, legend: import_prop_types.default.shape({ text: import_prop_types.default.shape(Sr({}, Br)).isRequired }).isRequired });
var Lr = import_prop_types.default.shape({ line: import_prop_types.default.shape({ stroke: import_prop_types.default.string.isRequired, strokeWidth: import_prop_types.default.number.isRequired, strokeDasharray: import_prop_types.default.string }).isRequired });
var Ir = import_prop_types.default.shape({ hidden: import_prop_types.default.shape({ symbol: import_prop_types.default.shape({ fill: import_prop_types.default.string.isRequired, opacity: import_prop_types.default.number }).isRequired, text: import_prop_types.default.shape(Sr({}, Br, { opacity: import_prop_types.default.number })).isRequired }).isRequired, text: import_prop_types.default.shape(Sr({}, Br)).isRequired });
var Dr = import_prop_types.default.shape({ text: import_prop_types.default.shape(Sr({}, Br)).isRequired });
var Yr = import_prop_types.default.shape({ text: import_prop_types.default.shape(Sr({}, Br)).isRequired });
var Ar = import_prop_types.default.shape({ text: import_prop_types.default.shape(Sr({}, Br)).isRequired });
var Fr = import_prop_types.default.shape({ line: import_prop_types.default.shape({ stroke: import_prop_types.default.string.isRequired, strokeWidth: import_prop_types.default.number.isRequired, strokeDasharray: import_prop_types.default.string }).isRequired });
var Er = import_prop_types.default.shape({ text: import_prop_types.default.shape(Sr({}, Br, { outlineWidth: import_prop_types.default.number.isRequired, outlineColor: import_prop_types.default.string.isRequired })).isRequired, link: import_prop_types.default.shape({ stroke: import_prop_types.default.string.isRequired, strokeWidth: import_prop_types.default.number.isRequired, outlineWidth: import_prop_types.default.number.isRequired, outlineColor: import_prop_types.default.string.isRequired }).isRequired, outline: import_prop_types.default.shape({ stroke: import_prop_types.default.string.isRequired, strokeWidth: import_prop_types.default.number.isRequired, outlineWidth: import_prop_types.default.number.isRequired, outlineColor: import_prop_types.default.string.isRequired }).isRequired, symbol: import_prop_types.default.shape({ fill: import_prop_types.default.string.isRequired, outlineWidth: import_prop_types.default.number.isRequired, outlineColor: import_prop_types.default.string.isRequired }).isRequired });
var Ur = import_prop_types.default.shape({ background: import_prop_types.default.string.isRequired, fontFamily: import_prop_types.default.string.isRequired, fontSize: import_prop_types.default.number.isRequired, textColor: import_prop_types.default.string.isRequired, axis: Gr.isRequired, grid: Lr.isRequired, legends: Ir.isRequired, labels: Dr.isRequired, dots: Yr.isRequired, markers: Ar, crosshair: Fr.isRequired, annotations: Er.isRequired });
var Xr = { background: "transparent", text: { fontFamily: "sans-serif", fontSize: 11, fill: "#333333", outlineWidth: 0, outlineColor: "transparent" }, axis: { domain: { line: { stroke: "transparent", strokeWidth: 1 } }, ticks: { line: { stroke: "#777777", strokeWidth: 1 }, text: {} }, legend: { text: { fontSize: 12 } } }, grid: { line: { stroke: "#dddddd", strokeWidth: 1 } }, legends: { hidden: { symbol: { fill: "#333333", opacity: 0.6 }, text: { fill: "#333333", opacity: 0.6 } }, text: {}, ticks: { line: { stroke: "#777777", strokeWidth: 1 }, text: { fontSize: 10 } }, title: { text: {} } }, labels: { text: {} }, markers: { lineColor: "#000000", lineStrokeWidth: 1, text: {} }, dots: { text: {} }, tooltip: { container: { background: "white", color: "inherit", fontSize: "inherit", borderRadius: "2px", boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)", padding: "5px 9px" }, basic: { whiteSpace: "pre", display: "flex", alignItems: "center" }, chip: { marginRight: 7 }, table: {}, tableCell: { padding: "3px 5px" }, tableCellValue: { fontWeight: "bold" } }, crosshair: { line: { stroke: "#000000", strokeWidth: 1, strokeOpacity: 0.75, strokeDasharray: "6 6" } }, annotations: { text: { fontSize: 13, outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 }, link: { stroke: "#000000", strokeWidth: 1, outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 }, outline: { fill: "none", stroke: "#000000", strokeWidth: 2, outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 }, symbol: { fill: "#000000", outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 } } };
var Hr = ["axis.ticks.text", "axis.legend.text", "legends.title.text", "legends.text", "legends.ticks.text", "legends.title.text", "labels.text", "dots.text", "markers.text", "annotations.text"];
var Kr = function(e4, r3) {
  var t5 = (0, import_merge2.default)({}, e4, r3);
  return Hr.forEach(function(e6) {
    void 0 === (0, import_get.default)(t5, e6 + ".fontFamily") && (0, import_set2.default)(t5, e6 + ".fontFamily", t5.text.fontFamily), void 0 === (0, import_get.default)(t5, e6 + ".fontSize") && (0, import_set2.default)(t5, e6 + ".fontSize", t5.text.fontSize), void 0 === (0, import_get.default)(t5, e6 + ".fill") && (0, import_set2.default)(t5, e6 + ".fill", t5.text.fill), void 0 === (0, import_get.default)(t5, e6 + ".outlineWidth") && (0, import_set2.default)(t5, e6 + ".outlineWidth", t5.text.outlineWidth), void 0 === (0, import_get.default)(t5, e6 + ".outlineColor") && (0, import_set2.default)(t5, e6 + ".outlineColor", t5.text.outlineColor);
  }), t5;
};
var Nr = (0, import_react15.createContext)();
var Vr = function(e4) {
  var t5 = e4.children, i3 = e4.animate, n3 = e4.config, o3 = (0, import_react15.useMemo)(function() {
    var e6 = (0, import_isString.default)(n3) ? config[n3] : n3;
    return { animate: i3, config: e6 };
  }, [i3, n3]);
  return (0, import_jsx_runtime.jsx)(Nr.Provider, { value: o3, children: t5 });
};
var Jr = { animate: import_prop_types.default.bool, motionConfig: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(Object.keys(config)), import_prop_types.default.shape({ mass: import_prop_types.default.number, tension: import_prop_types.default.number, friction: import_prop_types.default.number, clamp: import_prop_types.default.bool, precision: import_prop_types.default.number, velocity: import_prop_types.default.number, duration: import_prop_types.default.number, easing: import_prop_types.default.func })]) };
Vr.propTypes = { children: import_prop_types.default.node.isRequired, animate: Jr.animate, config: Jr.motionConfig };
var Qr = { animate: true, config: "default" };
Vr.defaultProps = Qr;
var Zr = function() {
  return (0, import_react15.useContext)(Nr);
};
var $r = function(e4) {
  var t5 = Zr(), o3 = t5.animate, a3 = t5.config, l3 = function(e6) {
    var r3 = (0, import_react15.useRef)();
    return (0, import_react15.useEffect)(function() {
      r3.current = e6;
    }, [e6]), r3.current;
  }(e4), s3 = (0, import_react15.useMemo)(function() {
    return string_default(l3, e4);
  }, [l3, e4]), d2 = useSpring({ from: { value: 0 }, to: { value: 1 }, reset: true, config: a3, immediate: !o3 }).value;
  return to2(d2, s3);
};
var et = { nivo: ["#d76445", "#f47560", "#e8c1a0", "#97e3d5", "#61cdbb", "#00b0a7"], BrBG: (0, import_last.default)(scheme), PRGn: (0, import_last.default)(scheme2), PiYG: (0, import_last.default)(scheme3), PuOr: (0, import_last.default)(scheme4), RdBu: (0, import_last.default)(scheme5), RdGy: (0, import_last.default)(scheme6), RdYlBu: (0, import_last.default)(scheme7), RdYlGn: (0, import_last.default)(scheme8), spectral: (0, import_last.default)(scheme9), blues: (0, import_last.default)(scheme22), greens: (0, import_last.default)(scheme23), greys: (0, import_last.default)(scheme24), oranges: (0, import_last.default)(scheme27), purples: (0, import_last.default)(scheme25), reds: (0, import_last.default)(scheme26), BuGn: (0, import_last.default)(scheme10), BuPu: (0, import_last.default)(scheme11), GnBu: (0, import_last.default)(scheme12), OrRd: (0, import_last.default)(scheme13), PuBuGn: (0, import_last.default)(scheme14), PuBu: (0, import_last.default)(scheme15), PuRd: (0, import_last.default)(scheme16), RdPu: (0, import_last.default)(scheme17), YlGnBu: (0, import_last.default)(scheme18), YlGn: (0, import_last.default)(scheme19), YlOrBr: (0, import_last.default)(scheme20), YlOrRd: (0, import_last.default)(scheme21) };
var rt = Object.keys(et);
var it = { nivo: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb", "#97e3d5"], category10: category10_default, accent: Accent_default, dark2: Dark2_default, paired: Paired_default, pastel1: Pastel1_default, pastel2: Pastel2_default, set1: Set1_default, set2: Set2_default, set3: Set3_default, brown_blueGreen: (0, import_last.default)(scheme), purpleRed_green: (0, import_last.default)(scheme2), pink_yellowGreen: (0, import_last.default)(scheme3), purple_orange: (0, import_last.default)(scheme4), red_blue: (0, import_last.default)(scheme5), red_grey: (0, import_last.default)(scheme6), red_yellow_blue: (0, import_last.default)(scheme7), red_yellow_green: (0, import_last.default)(scheme8), spectral: (0, import_last.default)(scheme9), blues: (0, import_last.default)(scheme22), greens: (0, import_last.default)(scheme23), greys: (0, import_last.default)(scheme24), oranges: (0, import_last.default)(scheme27), purples: (0, import_last.default)(scheme25), reds: (0, import_last.default)(scheme26), blue_green: (0, import_last.default)(scheme10), blue_purple: (0, import_last.default)(scheme11), green_blue: (0, import_last.default)(scheme12), orange_red: (0, import_last.default)(scheme13), purple_blue_green: (0, import_last.default)(scheme14), purple_blue: (0, import_last.default)(scheme15), purple_red: (0, import_last.default)(scheme16), red_purple: (0, import_last.default)(scheme17), yellow_green_blue: (0, import_last.default)(scheme18), yellow_green: (0, import_last.default)(scheme19), yellow_orange_brown: (0, import_last.default)(scheme20), yellow_orange_red: (0, import_last.default)(scheme21) };
var dt = import_prop_types.default.oneOfType([import_prop_types.default.oneOf(rt), import_prop_types.default.func, import_prop_types.default.arrayOf(import_prop_types.default.string)]);
var ut = { basis: basis_default3, basisClosed: basisClosed_default3, basisOpen: basisOpen_default, bundle: bundle_default, cardinal: cardinal_default, cardinalClosed: cardinalClosed_default, cardinalOpen: cardinalOpen_default, catmullRom: catmullRom_default, catmullRomClosed: catmullRomClosed_default, catmullRomOpen: catmullRomOpen_default, linear: linear_default, linearClosed: linearClosed_default, monotoneX, monotoneY, natural: natural_default, step: step_default, stepAfter, stepBefore };
var ct = Object.keys(ut);
var ft = import_prop_types.default.oneOf(ct);
var pt = ct.filter(function(e4) {
  return e4.endsWith("Closed");
});
var ht = (0, import_without.default)(ct, "bundle", "basisClosed", "basisOpen", "cardinalClosed", "cardinalOpen", "catmullRomClosed", "catmullRomOpen", "linearClosed");
var gt = (0, import_without.default)(ct, "bundle", "basisClosed", "basisOpen", "cardinalClosed", "cardinalOpen", "catmullRomClosed", "catmullRomOpen", "linearClosed");
var bt = import_prop_types.default.oneOf(gt);
var yt = { defs: import_prop_types.default.arrayOf(import_prop_types.default.shape({ id: import_prop_types.default.string.isRequired })).isRequired, fill: import_prop_types.default.arrayOf(import_prop_types.default.shape({ id: import_prop_types.default.string.isRequired, match: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["*"]), import_prop_types.default.object, import_prop_types.default.func]).isRequired })).isRequired };
var vt = { ascending: ascending_default2, descending: descending_default3, insideOut: insideOut_default, none: none_default2, reverse: reverse_default };
var Rt = Object.keys(vt);
var qt = import_prop_types.default.oneOf(Rt);
var _t = { expand: expand_default, diverging: diverging_default, none: none_default, silhouette: silhouette_default, wiggle: wiggle_default };
var wt = Object.keys(_t);
var xt = import_prop_types.default.oneOf(wt);
var Wt = import_prop_types.default.shape({ top: import_prop_types.default.number, right: import_prop_types.default.number, bottom: import_prop_types.default.number, left: import_prop_types.default.number }).isRequired;
var Ct = ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
var zt = import_prop_types.default.oneOf(Ct);
var Mt = ordinal(Set3_default);
var jt = { top: 0, right: 0, bottom: 0, left: 0 };
var Bt = function(e4, t5, i3) {
  return void 0 === i3 && (i3 = {}), (0, import_react15.useMemo)(function() {
    var r3 = Sr({}, jt, i3);
    return { margin: r3, innerWidth: e4 - r3.left - r3.right, innerHeight: t5 - r3.top - r3.bottom, outerWidth: e4, outerHeight: t5 };
  }, [e4, t5, i3.top, i3.right, i3.bottom, i3.left]);
};
var Gt = function() {
  var e4 = (0, import_react15.useRef)(null), r3 = (0, import_react15.useState)({ left: 0, top: 0, width: 0, height: 0 }), t5 = r3[0], a3 = r3[1], l3 = (0, import_react15.useState)(function() {
    return "undefined" == typeof ResizeObserver ? null : new ResizeObserver(function(e6) {
      var r4 = e6[0];
      return a3(r4.contentRect);
    });
  })[0];
  return (0, import_react15.useEffect)(function() {
    return e4.current && null !== l3 && l3.observe(e4.current), function() {
      null !== l3 && l3.disconnect();
    };
  }, []), [e4, t5];
};
var Lt = function(e4) {
  return (0, import_react15.useMemo)(function() {
    return Kr(Xr, e4);
  }, [e4]);
};
var It = function(e4) {
  return "function" == typeof e4 ? e4 : "string" == typeof e4 ? 0 === e4.indexOf("time:") ? timeFormat(e4.slice("5")) : format(e4) : function(e6) {
    return "" + e6;
  };
};
var Dt = function(e4) {
  return (0, import_react15.useMemo)(function() {
    return It(e4);
  }, [e4]);
};
var Yt = (0, import_react15.createContext)();
var At = {};
var Ft = function(e4) {
  var r3 = e4.theme, t5 = void 0 === r3 ? At : r3, i3 = e4.children, n3 = Lt(t5);
  return (0, import_jsx_runtime.jsx)(Yt.Provider, { value: n3, children: i3 });
};
Ft.propTypes = { children: import_prop_types.default.node.isRequired, theme: import_prop_types.default.object };
var Et = function() {
  return (0, import_react15.useContext)(Yt);
};
var Ut = function(e4) {
  var r3 = e4.children, t5 = e4.condition, i3 = e4.wrapper;
  return t5 ? (0, import_react15.cloneElement)(i3, {}, r3) : r3;
};
Ut.propTypes = { children: import_prop_types.default.node.isRequired, condition: import_prop_types.default.bool.isRequired, wrapper: import_prop_types.default.element.isRequired };
var Xt = { position: "relative" };
var Ht = function(e4) {
  var r3 = e4.children, t5 = e4.theme, n3 = e4.renderWrapper, o3 = void 0 === n3 || n3, a3 = e4.isInteractive, l3 = void 0 === a3 || a3, s3 = e4.animate, d2 = e4.motionConfig, u2 = (0, import_react15.useRef)(null);
  return (0, import_jsx_runtime.jsx)(Ft, { theme: t5, children: (0, import_jsx_runtime.jsx)(Vr, { animate: s3, config: d2, children: (0, import_jsx_runtime.jsx)(M, { container: u2, children: (0, import_jsx_runtime.jsxs)(Ut, { condition: o3, wrapper: (0, import_jsx_runtime.jsx)("div", { style: Xt, ref: u2 }), children: [r3, l3 && (0, import_jsx_runtime.jsx)(F, {})] }) }) }) });
};
Ht.propTypes = { children: import_prop_types.default.element.isRequired, isInteractive: import_prop_types.default.bool, renderWrapper: import_prop_types.default.bool, theme: import_prop_types.default.object, animate: import_prop_types.default.bool, motionConfig: import_prop_types.default.string };
var Kt = function() {
};
var Nt = { position: "relative" };
var Vt = function(e4) {
  var t5 = e4.children, n3 = e4.theme, o3 = e4.isInteractive, a3 = void 0 === o3 || o3, s3 = e4.renderWrapper, d2 = void 0 === s3 || s3, u2 = e4.animate, c10 = e4.motionConfig, f2 = (0, import_react15.useRef)(null), m3 = V(f2), y4 = m3.actions, v3 = m3.state, R = (0, import_react15.useCallback)(function(e6, r3) {
    return y4.showTooltipFromEvent(e6, r3);
  }, [y4.showTooltipFromEvent]), q = (0, import_react15.useMemo)(function() {
    return { showTooltip: a3 ? R : Kt, hideTooltip: a3 ? y4.hideTooltip : Kt };
  }, [y4.hideTooltip, a3, R]);
  return (0, import_jsx_runtime.jsx)(Ft, { theme: n3, children: (0, import_jsx_runtime.jsx)(Vr, { animate: u2, config: c10, children: (0, import_jsx_runtime.jsx)(j.Provider, { value: y4, children: (0, import_jsx_runtime.jsx)(O.Provider, { value: v3, children: (0, import_jsx_runtime.jsxs)(Ut, { condition: d2, wrapper: (0, import_jsx_runtime.jsx)("div", { style: Nt, ref: f2 }), children: [t5(q), a3 && (0, import_jsx_runtime.jsx)(F, {})] }) }) }) }) });
};
Vt.propTypes = { children: import_prop_types.default.func.isRequired, isInteractive: import_prop_types.default.bool, renderWrapper: import_prop_types.default.bool, theme: import_prop_types.default.object.isRequired, animate: import_prop_types.default.bool.isRequired, motionConfig: import_prop_types.default.string };
var Jt = function(e4) {
  var r3 = e4.children, t5 = Gt(), i3 = t5[0], n3 = t5[1], o3 = n3.width > 0 && n3.height > 0;
  return (0, import_jsx_runtime.jsx)("div", { ref: i3, style: { width: "100%", height: "100%" }, children: o3 && r3({ width: n3.width, height: n3.height }) });
};
Jt.propTypes = { children: import_prop_types.default.func.isRequired };
var Qt = ["id", "colors"];
var Zt = function(e4) {
  var r3 = e4.id, t5 = e4.colors, i3 = jr(e4, Qt);
  return (0, import_jsx_runtime.jsx)("linearGradient", Sr({ id: r3, x1: 0, x2: 0, y1: 0, y2: 1 }, i3, { children: t5.map(function(e6) {
    var r4 = e6.offset, t6 = e6.color, i4 = e6.opacity;
    return (0, import_jsx_runtime.jsx)("stop", { offset: r4 + "%", stopColor: t6, stopOpacity: void 0 !== i4 ? i4 : 1 }, r4);
  }) }));
};
Zt.propTypes = { id: import_prop_types.default.string.isRequired, colors: import_prop_types.default.arrayOf(import_prop_types.default.shape({ offset: import_prop_types.default.number.isRequired, color: import_prop_types.default.string.isRequired, opacity: import_prop_types.default.number })).isRequired, gradientTransform: import_prop_types.default.string };
var ei = { linearGradient: Zt };
var ri = (0, import_react15.memo)(function(e4) {
  var r3 = e4.id, t5 = e4.background, i3 = e4.color, n3 = e4.size, o3 = e4.padding, a3 = e4.stagger, l3 = n3 + o3, s3 = n3 / 2, d2 = o3 / 2;
  return true === a3 && (l3 = 2 * n3 + 2 * o3), (0, import_jsx_runtime.jsxs)("pattern", { id: r3, width: l3, height: l3, patternUnits: "userSpaceOnUse", children: [(0, import_jsx_runtime.jsx)("rect", { width: l3, height: l3, fill: t5 }), (0, import_jsx_runtime.jsx)("circle", { cx: d2 + s3, cy: d2 + s3, r: s3, fill: i3 }), a3 && (0, import_jsx_runtime.jsx)("circle", { cx: 1.5 * o3 + n3 + s3, cy: 1.5 * o3 + n3 + s3, r: s3, fill: i3 })] });
});
ri.displayName = "PatternDots", ri.propTypes = { id: import_prop_types.default.string.isRequired, color: import_prop_types.default.string.isRequired, background: import_prop_types.default.string.isRequired, size: import_prop_types.default.number.isRequired, padding: import_prop_types.default.number.isRequired, stagger: import_prop_types.default.bool.isRequired }, ri.defaultProps = { color: "#000000", background: "#ffffff", size: 4, padding: 4, stagger: false };
var ii = 2 * Math.PI;
var ni = function(e4) {
  return e4 * Math.PI / 180;
};
var oi = function(e4) {
  return 180 * e4 / Math.PI;
};
var li = function(e4, r3) {
  return { x: Math.cos(e4) * r3, y: Math.sin(e4) * r3 };
};
var si = function(e4) {
  var r3 = e4 % 360;
  return r3 < 0 && (r3 += 360), r3;
};
var fi = { svg: { align: { left: "start", center: "middle", right: "end", start: "start", middle: "middle", end: "end" }, baseline: { top: "text-before-edge", center: "central", bottom: "alphabetic" } }, canvas: { align: { left: "left", center: "center", right: "right", start: "left", middle: "center", end: "right" }, baseline: { top: "top", center: "middle", bottom: "bottom" } } };
var hi = (0, import_react15.memo)(function(e4) {
  var r3 = e4.id, t5 = e4.spacing, i3 = e4.rotation, n3 = e4.background, o3 = e4.color, a3 = e4.lineWidth, l3 = Math.round(i3) % 360, s3 = Math.abs(t5);
  l3 > 180 ? l3 -= 360 : l3 > 90 ? l3 -= 180 : l3 < -180 ? l3 += 360 : l3 < -90 && (l3 += 180);
  var d2, u2 = s3, c10 = s3;
  return 0 === l3 ? d2 = "\n                M 0 0 L " + u2 + " 0\n                M 0 " + c10 + " L " + u2 + " " + c10 + "\n            " : 90 === l3 ? d2 = "\n                M 0 0 L 0 " + c10 + "\n                M " + u2 + " 0 L " + u2 + " " + c10 + "\n            " : (u2 = Math.abs(s3 / Math.sin(ni(l3))), c10 = s3 / Math.sin(ni(90 - l3)), d2 = l3 > 0 ? "\n                    M 0 " + -c10 + " L " + 2 * u2 + " " + c10 + "\n                    M " + -u2 + " " + -c10 + " L " + u2 + " " + c10 + "\n                    M " + -u2 + " 0 L " + u2 + " " + 2 * c10 + "\n                " : "\n                    M " + -u2 + " " + c10 + " L " + u2 + " " + -c10 + "\n                    M " + -u2 + " " + 2 * c10 + " L " + 2 * u2 + " " + -c10 + "\n                    M 0 " + 2 * c10 + " L " + 2 * u2 + " 0\n                "), (0, import_jsx_runtime.jsxs)("pattern", { id: r3, width: u2, height: c10, patternUnits: "userSpaceOnUse", children: [(0, import_jsx_runtime.jsx)("rect", { width: u2, height: c10, fill: n3, stroke: "rgba(255, 0, 0, 0.1)", strokeWidth: 0 }), (0, import_jsx_runtime.jsx)("path", { d: d2, strokeWidth: a3, stroke: o3, strokeLinecap: "square" })] });
});
hi.displayName = "PatternLines", hi.propTypes = { id: import_prop_types.default.string.isRequired, spacing: import_prop_types.default.number.isRequired, rotation: import_prop_types.default.number.isRequired, background: import_prop_types.default.string.isRequired, color: import_prop_types.default.string.isRequired, lineWidth: import_prop_types.default.number.isRequired }, hi.defaultProps = { spacing: 5, rotation: 0, color: "#000000", background: "#ffffff", lineWidth: 2 };
var bi = (0, import_react15.memo)(function(e4) {
  var r3 = e4.id, t5 = e4.background, i3 = e4.color, n3 = e4.size, o3 = e4.padding, a3 = e4.stagger, l3 = n3 + o3, s3 = o3 / 2;
  return true === a3 && (l3 = 2 * n3 + 2 * o3), (0, import_jsx_runtime.jsxs)("pattern", { id: r3, width: l3, height: l3, patternUnits: "userSpaceOnUse", children: [(0, import_jsx_runtime.jsx)("rect", { width: l3, height: l3, fill: t5 }), (0, import_jsx_runtime.jsx)("rect", { x: s3, y: s3, width: n3, height: n3, fill: i3 }), a3 && (0, import_jsx_runtime.jsx)("rect", { x: 1.5 * o3 + n3, y: 1.5 * o3 + n3, width: n3, height: n3, fill: i3 })] });
});
bi.displayName = "PatternSquares", bi.propTypes = { id: import_prop_types.default.string.isRequired, color: import_prop_types.default.string.isRequired, background: import_prop_types.default.string.isRequired, size: import_prop_types.default.number.isRequired, padding: import_prop_types.default.number.isRequired, stagger: import_prop_types.default.bool.isRequired }, bi.defaultProps = { color: "#000000", background: "#ffffff", size: 4, padding: 4, stagger: false };
var yi = { patternDots: ri, patternLines: hi, patternSquares: bi };
var vi = ["type"];
var Ri = Sr({}, ei, yi);
var qi = function(e4) {
  var r3 = e4.defs;
  return !r3 || r3.length < 1 ? null : (0, import_jsx_runtime.jsx)("defs", { "aria-hidden": true, children: r3.map(function(e6) {
    var r4 = e6.type, t5 = jr(e6, vi);
    return Ri[r4] ? (0, import_react15.createElement)(Ri[r4], Sr({ key: t5.id }, t5)) : null;
  }) });
};
qi.propTypes = { defs: import_prop_types.default.arrayOf(import_prop_types.default.shape({ type: import_prop_types.default.oneOf(Object.keys(Ri)).isRequired, id: import_prop_types.default.string.isRequired })) };
var ki = (0, import_react15.memo)(qi);
var _i = function(e4) {
  var r3 = e4.width, t5 = e4.height, i3 = e4.margin, n3 = e4.defs, o3 = e4.children, a3 = e4.role, l3 = e4.ariaLabel, s3 = e4.ariaLabelledBy, d2 = e4.ariaDescribedBy, u2 = e4.isFocusable, c10 = Et();
  return (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: r3, height: t5, role: a3, "aria-label": l3, "aria-labelledby": s3, "aria-describedby": d2, focusable: u2, tabIndex: u2 ? 0 : void 0, children: [(0, import_jsx_runtime.jsx)(ki, { defs: n3 }), (0, import_jsx_runtime.jsx)("rect", { width: r3, height: t5, fill: c10.background }), (0, import_jsx_runtime.jsx)("g", { transform: "translate(" + i3.left + "," + i3.top + ")", children: o3 })] });
};
_i.propTypes = { width: import_prop_types.default.number.isRequired, height: import_prop_types.default.number.isRequired, margin: import_prop_types.default.shape({ top: import_prop_types.default.number.isRequired, left: import_prop_types.default.number.isRequired }).isRequired, defs: import_prop_types.default.array, children: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.node), import_prop_types.default.node]).isRequired, role: import_prop_types.default.string, isFocusable: import_prop_types.default.bool, ariaLabel: import_prop_types.default.string, ariaLabelledBy: import_prop_types.default.string, ariaDescribedBy: import_prop_types.default.string };
var wi = function(e4) {
  var r3 = e4.size, t5 = e4.color, i3 = e4.borderWidth, n3 = e4.borderColor;
  return (0, import_jsx_runtime.jsx)("circle", { r: r3 / 2, fill: t5, stroke: n3, strokeWidth: i3, style: { pointerEvents: "none" } });
};
wi.propTypes = { size: import_prop_types.default.number.isRequired, color: import_prop_types.default.string.isRequired, borderWidth: import_prop_types.default.number.isRequired, borderColor: import_prop_types.default.string.isRequired };
var xi = (0, import_react15.memo)(wi);
var Oi = function(e4) {
  var r3 = e4.x, t5 = e4.y, i3 = e4.symbol, n3 = void 0 === i3 ? xi : i3, o3 = e4.size, a3 = e4.datum, l3 = e4.color, s3 = e4.borderWidth, u2 = e4.borderColor, c10 = e4.label, f2 = e4.labelTextAnchor, p2 = void 0 === f2 ? "middle" : f2, h = e4.labelYOffset, g2 = void 0 === h ? -12 : h, b2 = Et(), m3 = Zr(), y4 = m3.animate, v3 = m3.config, R = useSpring({ transform: "translate(" + r3 + ", " + t5 + ")", config: v3, immediate: !y4 });
  return (0, import_jsx_runtime.jsxs)(animated.g, { transform: R.transform, style: { pointerEvents: "none" }, children: [(0, import_react15.createElement)(n3, { size: o3, color: l3, datum: a3, borderWidth: s3, borderColor: u2 }), c10 && (0, import_jsx_runtime.jsx)("text", { textAnchor: p2, y: g2, style: b2.dots.text, children: c10 })] });
};
Oi.propTypes = { x: import_prop_types.default.number.isRequired, y: import_prop_types.default.number.isRequired, datum: import_prop_types.default.object.isRequired, size: import_prop_types.default.number.isRequired, color: import_prop_types.default.string.isRequired, borderWidth: import_prop_types.default.number.isRequired, borderColor: import_prop_types.default.string.isRequired, symbol: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]), label: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]), labelTextAnchor: import_prop_types.default.oneOf(["start", "middle", "end"]), labelYOffset: import_prop_types.default.number };
var Wi = (0, import_react15.memo)(Oi);
var Ci = function(e4) {
  var r3 = e4.width, t5 = e4.height, i3 = e4.axis, n3 = e4.scale, o3 = e4.value, a3 = e4.lineStyle, l3 = e4.textStyle, s3 = e4.legend, d2 = e4.legendPosition, u2 = e4.legendOffsetX, c10 = e4.legendOffsetY, f2 = e4.legendOrientation, p2 = Et(), h = 0, g2 = 0, b2 = 0, m3 = 0;
  "y" === i3 ? (b2 = n3(o3), g2 = r3) : (h = n3(o3), m3 = t5);
  var y4 = null;
  if (s3) {
    var v3 = function(e6) {
      var r4 = e6.axis, t6 = e6.width, i4 = e6.height, n4 = e6.position, o4 = e6.offsetX, a4 = e6.offsetY, l4 = e6.orientation, s4 = 0, d3 = 0, u3 = "vertical" === l4 ? -90 : 0, c11 = "start";
      if ("x" === r4)
        switch (n4) {
          case "top-left":
            s4 = -o4, d3 = a4, c11 = "end";
            break;
          case "top":
            d3 = -a4, c11 = "horizontal" === l4 ? "middle" : "start";
            break;
          case "top-right":
            s4 = o4, d3 = a4, c11 = "horizontal" === l4 ? "start" : "end";
            break;
          case "right":
            s4 = o4, d3 = i4 / 2, c11 = "horizontal" === l4 ? "start" : "middle";
            break;
          case "bottom-right":
            s4 = o4, d3 = i4 - a4, c11 = "start";
            break;
          case "bottom":
            d3 = i4 + a4, c11 = "horizontal" === l4 ? "middle" : "end";
            break;
          case "bottom-left":
            d3 = i4 - a4, s4 = -o4, c11 = "horizontal" === l4 ? "end" : "start";
            break;
          case "left":
            s4 = -o4, d3 = i4 / 2, c11 = "horizontal" === l4 ? "end" : "middle";
        }
      else
        switch (n4) {
          case "top-left":
            s4 = o4, d3 = -a4, c11 = "start";
            break;
          case "top":
            s4 = t6 / 2, d3 = -a4, c11 = "horizontal" === l4 ? "middle" : "start";
            break;
          case "top-right":
            s4 = t6 - o4, d3 = -a4, c11 = "horizontal" === l4 ? "end" : "start";
            break;
          case "right":
            s4 = t6 + o4, c11 = "horizontal" === l4 ? "start" : "middle";
            break;
          case "bottom-right":
            s4 = t6 - o4, d3 = a4, c11 = "end";
            break;
          case "bottom":
            s4 = t6 / 2, d3 = a4, c11 = "horizontal" === l4 ? "middle" : "end";
            break;
          case "bottom-left":
            s4 = o4, d3 = a4, c11 = "horizontal" === l4 ? "start" : "end";
            break;
          case "left":
            s4 = -o4, c11 = "horizontal" === l4 ? "end" : "middle";
        }
      return { x: s4, y: d3, rotation: u3, textAnchor: c11 };
    }({ axis: i3, width: r3, height: t5, position: d2, offsetX: u2, offsetY: c10, orientation: f2 });
    y4 = (0, import_jsx_runtime.jsx)("text", { transform: "translate(" + v3.x + ", " + v3.y + ") rotate(" + v3.rotation + ")", textAnchor: v3.textAnchor, dominantBaseline: "central", style: l3, children: s3 });
  }
  return (0, import_jsx_runtime.jsxs)("g", { transform: "translate(" + h + ", " + b2 + ")", children: [(0, import_jsx_runtime.jsx)("line", { x1: 0, x2: g2, y1: 0, y2: m3, stroke: p2.markers.lineColor, strokeWidth: p2.markers.lineStrokeWidth, style: a3 }), y4] });
};
Ci.propTypes = { width: import_prop_types.default.number.isRequired, height: import_prop_types.default.number.isRequired, axis: import_prop_types.default.oneOf(["x", "y"]).isRequired, scale: import_prop_types.default.func.isRequired, value: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.instanceOf(Date)]).isRequired, lineStyle: import_prop_types.default.object, textStyle: import_prop_types.default.object, legend: import_prop_types.default.string, legendPosition: import_prop_types.default.oneOf(["top-left", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left"]), legendOffsetX: import_prop_types.default.number.isRequired, legendOffsetY: import_prop_types.default.number.isRequired, legendOrientation: import_prop_types.default.oneOf(["horizontal", "vertical"]).isRequired }, Ci.defaultProps = { legendPosition: "top-right", legendOffsetX: 14, legendOffsetY: 14, legendOrientation: "horizontal" };
var zi = (0, import_react15.memo)(Ci);
var Pi = function(e4) {
  var r3 = e4.markers, t5 = e4.width, i3 = e4.height, n3 = e4.xScale, o3 = e4.yScale;
  return r3 && 0 !== r3.length ? r3.map(function(e6, r4) {
    return (0, import_jsx_runtime.jsx)(zi, Sr({}, e6, { width: t5, height: i3, scale: "y" === e6.axis ? o3 : n3 }), r4);
  }) : null;
};
Pi.propTypes = { width: import_prop_types.default.number.isRequired, height: import_prop_types.default.number.isRequired, xScale: import_prop_types.default.func.isRequired, yScale: import_prop_types.default.func.isRequired, markers: import_prop_types.default.arrayOf(import_prop_types.default.shape({ axis: import_prop_types.default.oneOf(["x", "y"]).isRequired, value: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.instanceOf(Date)]).isRequired, lineStyle: import_prop_types.default.object, textStyle: import_prop_types.default.object })) };
var Ti = (0, import_react15.memo)(Pi);
var Bi = function(e4) {
  return (0, import_isFunction.default)(e4) ? e4 : function(r3) {
    return (0, import_get.default)(r3, e4);
  };
};
var Gi = function(e4) {
  return (0, import_react15.useMemo)(function() {
    return Bi(e4);
  }, [e4]);
};
var Ai = function(e4, r3, t5, i3, n3, o3) {
  return e4 <= n3 && n3 <= e4 + t5 && r3 <= o3 && o3 <= r3 + i3;
};
var Fi = function(e4, r3) {
  var t5, i3 = r3.clientX, n3 = r3.clientY, o3 = e4.getBoundingClientRect(), a3 = (t5 = void 0 !== e4.getBBox ? e4.getBBox() : { width: e4.offsetWidth, height: e4.offsetHeight }).width === o3.width ? 1 : t5.width / o3.width;
  return [(i3 - o3.left) * a3, (n3 - o3.top) * a3];
};
var Ei = Object.keys(ei);
var Ui = Object.keys(yi);
var Xi = function(e4, r3, t5) {
  if ("*" === e4)
    return true;
  if ((0, import_isFunction.default)(e4))
    return e4(r3);
  if ((0, import_isPlainObject.default)(e4)) {
    var i3 = t5 ? (0, import_get.default)(r3, t5) : r3;
    return (0, import_isEqual.default)((0, import_pick.default)(i3, Object.keys(e4)), e4);
  }
  return false;
};
var Hi = function(e4, r3, t5, i3) {
  var n3 = void 0 === i3 ? {} : i3, o3 = n3.dataKey, a3 = n3.colorKey, l3 = void 0 === a3 ? "color" : a3, s3 = n3.targetKey, d2 = void 0 === s3 ? "fill" : s3, u2 = [], c10 = {};
  return e4.length && r3.length && (u2 = [].concat(e4), r3.forEach(function(r4) {
    for (var i4 = function() {
      var i5 = t5[n4], a4 = i5.id, s4 = i5.match;
      if (Xi(s4, r4, o3)) {
        var f2 = e4.find(function(e6) {
          return e6.id === a4;
        });
        if (f2) {
          if (Ui.includes(f2.type))
            if ("inherit" === f2.background || "inherit" === f2.color) {
              var p2 = (0, import_get.default)(r4, l3), h = f2.background, g2 = f2.color, b2 = a4;
              "inherit" === f2.background && (b2 = b2 + ".bg." + p2, h = p2), "inherit" === f2.color && (b2 = b2 + ".fg." + p2, g2 = p2), (0, import_set2.default)(r4, d2, "url(#" + b2 + ")"), c10[b2] || (u2.push(Sr({}, f2, { id: b2, background: h, color: g2 })), c10[b2] = 1);
            } else
              (0, import_set2.default)(r4, d2, "url(#" + a4 + ")");
          else if (Ei.includes(f2.type)) {
            if (f2.colors.map(function(e6) {
              return e6.color;
            }).includes("inherit")) {
              var m3 = (0, import_get.default)(r4, l3), R = a4, q = Sr({}, f2, { colors: f2.colors.map(function(e6, r5) {
                return "inherit" !== e6.color ? e6 : (R = R + "." + r5 + "." + m3, Sr({}, e6, { color: "inherit" === e6.color ? m3 : e6.color }));
              }) });
              q.id = R, (0, import_set2.default)(r4, d2, "url(#" + R + ")"), c10[R] || (u2.push(q), c10[R] = 1);
            } else
              (0, import_set2.default)(r4, d2, "url(#" + a4 + ")");
          }
        }
        return "break";
      }
    }, n4 = 0; n4 < t5.length; n4++) {
      if ("break" === i4())
        break;
    }
  })), u2;
};

// node_modules/@nivo/tooltip/dist/nivo-tooltip.es.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function v2() {
  return v2 = Object.assign ? Object.assign.bind() : function(t5) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var o3 = arguments[i3];
      for (var n3 in o3)
        Object.prototype.hasOwnProperty.call(o3, n3) && (t5[n3] = o3[n3]);
    }
    return t5;
  }, v2.apply(this, arguments);
}
var x3 = { pointerEvents: "none", position: "absolute", zIndex: 10, top: 0, left: 0 };
var m2 = function(t5, i3) {
  return "translate(" + t5 + "px, " + i3 + "px)";
};
var b = (0, import_react16.memo)(function(t5) {
  var o3, n3 = t5.position, r3 = t5.anchor, e4 = t5.children, l3 = Et(), u2 = Zr(), p2 = u2.animate, f2 = u2.config, b2 = Gt(), g2 = b2[0], w2 = b2[1], T2 = (0, import_react16.useRef)(false), C6 = void 0, E5 = false, P2 = w2.width > 0 && w2.height > 0, j2 = Math.round(n3[0]), N2 = Math.round(n3[1]);
  P2 && ("top" === r3 ? (j2 -= w2.width / 2, N2 -= w2.height + 14) : "right" === r3 ? (j2 += 14, N2 -= w2.height / 2) : "bottom" === r3 ? (j2 -= w2.width / 2, N2 += 14) : "left" === r3 ? (j2 -= w2.width + 14, N2 -= w2.height / 2) : "center" === r3 && (j2 -= w2.width / 2, N2 -= w2.height / 2), C6 = { transform: m2(j2, N2) }, T2.current || (E5 = true), T2.current = [j2, N2]);
  var O3 = useSpring({ to: C6, config: f2, immediate: !p2 || E5 }), V2 = v2({}, x3, l3.tooltip, { transform: null != (o3 = O3.transform) ? o3 : m2(j2, N2) });
  return (0, import_jsx_runtime2.jsx)(animated.div, { ref: g2, style: V2, children: e4 });
});
b.displayName = "TooltipWrapper";
var g = (0, import_react16.memo)(function(t5) {
  var i3 = t5.size, o3 = void 0 === i3 ? 12 : i3, n3 = t5.color, r3 = t5.style;
  return (0, import_jsx_runtime2.jsx)("span", { style: v2({ display: "block", width: o3, height: o3, background: n3 }, void 0 === r3 ? {} : r3) });
});
var w = (0, import_react16.memo)(function(t5) {
  var i3, o3 = t5.id, n3 = t5.value, r3 = t5.format, e4 = t5.enableChip, l3 = void 0 !== e4 && e4, a3 = t5.color, c10 = t5.renderContent, h = Et(), d2 = Dt(r3);
  if ("function" == typeof c10)
    i3 = c10();
  else {
    var f2 = n3;
    void 0 !== d2 && void 0 !== f2 && (f2 = d2(f2)), i3 = (0, import_jsx_runtime2.jsxs)("div", { style: h.tooltip.basic, children: [l3 && (0, import_jsx_runtime2.jsx)(g, { color: a3, style: h.tooltip.chip }), void 0 !== f2 ? (0, import_jsx_runtime2.jsxs)("span", { children: [o3, ": ", (0, import_jsx_runtime2.jsx)("strong", { children: "" + f2 })] }) : o3] });
  }
  return (0, import_jsx_runtime2.jsx)("div", { style: h.tooltip.container, children: i3 });
});
var T = { width: "100%", borderCollapse: "collapse" };
var C4 = (0, import_react16.memo)(function(t5) {
  var i3, o3 = t5.title, n3 = t5.rows, r3 = void 0 === n3 ? [] : n3, e4 = t5.renderContent, l3 = Et();
  return r3.length ? (i3 = "function" == typeof e4 ? e4() : (0, import_jsx_runtime2.jsxs)("div", { children: [o3 && o3, (0, import_jsx_runtime2.jsx)("table", { style: v2({}, T, l3.tooltip.table), children: (0, import_jsx_runtime2.jsx)("tbody", { children: r3.map(function(t6, i4) {
    return (0, import_jsx_runtime2.jsx)("tr", { children: t6.map(function(t7, i5) {
      return (0, import_jsx_runtime2.jsx)("td", { style: l3.tooltip.tableCell, children: t7 }, i5);
    }) }, i4);
  }) }) })] }), (0, import_jsx_runtime2.jsx)("div", { style: l3.tooltip.container, children: i3 })) : null;
});
C4.displayName = "TableTooltip";
var E3 = (0, import_react16.memo)(function(t5) {
  var i3 = t5.x0, n3 = t5.x1, r3 = t5.y0, e4 = t5.y1, l3 = Et(), d2 = Zr(), u2 = d2.animate, p2 = d2.config, f2 = (0, import_react16.useMemo)(function() {
    return v2({}, l3.crosshair.line, { pointerEvents: "none" });
  }, [l3.crosshair.line]), x4 = useSpring({ x1: i3, x2: n3, y1: r3, y2: e4, config: p2, immediate: !u2 });
  return (0, import_jsx_runtime2.jsx)(animated.line, v2({}, x4, { fill: "none", style: f2 }));
});
E3.displayName = "CrosshairLine";
var P = (0, import_react16.memo)(function(t5) {
  var i3, o3, n3 = t5.width, r3 = t5.height, e4 = t5.type, l3 = t5.x, a3 = t5.y;
  return "cross" === e4 ? (i3 = { x0: l3, x1: l3, y0: 0, y1: r3 }, o3 = { x0: 0, x1: n3, y0: a3, y1: a3 }) : "top-left" === e4 ? (i3 = { x0: l3, x1: l3, y0: 0, y1: a3 }, o3 = { x0: 0, x1: l3, y0: a3, y1: a3 }) : "top" === e4 ? i3 = { x0: l3, x1: l3, y0: 0, y1: a3 } : "top-right" === e4 ? (i3 = { x0: l3, x1: l3, y0: 0, y1: a3 }, o3 = { x0: l3, x1: n3, y0: a3, y1: a3 }) : "right" === e4 ? o3 = { x0: l3, x1: n3, y0: a3, y1: a3 } : "bottom-right" === e4 ? (i3 = { x0: l3, x1: l3, y0: a3, y1: r3 }, o3 = { x0: l3, x1: n3, y0: a3, y1: a3 }) : "bottom" === e4 ? i3 = { x0: l3, x1: l3, y0: a3, y1: r3 } : "bottom-left" === e4 ? (i3 = { x0: l3, x1: l3, y0: a3, y1: r3 }, o3 = { x0: 0, x1: l3, y0: a3, y1: a3 }) : "left" === e4 ? o3 = { x0: 0, x1: l3, y0: a3, y1: a3 } : "x" === e4 ? i3 = { x0: l3, x1: l3, y0: 0, y1: r3 } : "y" === e4 && (o3 = { x0: 0, x1: n3, y0: a3, y1: a3 }), (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [i3 && (0, import_jsx_runtime2.jsx)(E3, { x0: i3.x0, x1: i3.x1, y0: i3.y0, y1: i3.y1 }), o3 && (0, import_jsx_runtime2.jsx)(E3, { x0: o3.x0, x1: o3.x1, y0: o3.y0, y1: o3.y1 })] });
});
P.displayName = "Crosshair";
var j = (0, import_react16.createContext)({ showTooltipAt: function() {
}, showTooltipFromEvent: function() {
}, hideTooltip: function() {
} });
var N = { isVisible: false, position: [null, null], content: null, anchor: null };
var O = (0, import_react16.createContext)(N);
var V = function(t5) {
  var i3 = (0, import_react16.useState)(N), n3 = i3[0], l3 = i3[1], a3 = (0, import_react16.useCallback)(function(t6, i4, o3) {
    var n4 = i4[0], r3 = i4[1];
    void 0 === o3 && (o3 = "top"), l3({ isVisible: true, position: [n4, r3], anchor: o3, content: t6 });
  }, [l3]), c10 = (0, import_react16.useCallback)(function(i4, o3, n4) {
    void 0 === n4 && (n4 = "top");
    var r3 = t5.current.getBoundingClientRect(), e4 = t5.current.offsetWidth, a4 = e4 === r3.width ? 1 : e4 / r3.width, c11 = (o3.clientX - r3.left) * a4, s4 = (o3.clientY - r3.top) * a4;
    "left" !== n4 && "right" !== n4 || (n4 = c11 < r3.width / 2 ? "right" : "left"), l3({ isVisible: true, position: [c11, s4], anchor: n4, content: i4 });
  }, [t5, l3]), s3 = (0, import_react16.useCallback)(function() {
    l3(N);
  }, [l3]);
  return { actions: (0, import_react16.useMemo)(function() {
    return { showTooltipAt: a3, showTooltipFromEvent: c10, hideTooltip: s3 };
  }, [a3, c10, s3]), state: n3 };
};
var k2 = function() {
  var t5 = (0, import_react16.useContext)(j);
  if (void 0 === t5)
    throw new Error("useTooltip must be used within a TooltipProvider");
  return t5;
};
var z2 = function() {
  var t5 = (0, import_react16.useContext)(O);
  if (void 0 === t5)
    throw new Error("useTooltipState must be used within a TooltipProvider");
  return t5;
};
var A3 = function(t5) {
  return t5.isVisible;
};
var F = function() {
  var t5 = z2();
  return A3(t5) ? (0, import_jsx_runtime2.jsx)(b, { position: t5.position, anchor: t5.anchor, children: t5.content }) : null;
};
var M = function(t5) {
  var i3 = t5.container, o3 = t5.children, n3 = V(i3), r3 = n3.actions, e4 = n3.state;
  return (0, import_jsx_runtime2.jsx)(j.Provider, { value: r3, children: (0, import_jsx_runtime2.jsx)(O.Provider, { value: e4, children: o3 }) });
};

// node_modules/d3-scale-chromatic/src/colors.js
function colors_default2(specifier) {
  var n3 = specifier.length / 6 | 0, colors3 = new Array(n3), i3 = 0;
  while (i3 < n3)
    colors3[i3] = "#" + specifier.slice(i3 * 6, ++i3 * 6);
  return colors3;
}

// node_modules/d3-scale-chromatic/src/categorical/category10.js
var category10_default2 = colors_default2("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

// node_modules/d3-scale-chromatic/src/categorical/Accent.js
var Accent_default2 = colors_default2("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

// node_modules/d3-scale-chromatic/src/categorical/Dark2.js
var Dark2_default2 = colors_default2("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

// node_modules/d3-scale-chromatic/src/categorical/Paired.js
var Paired_default2 = colors_default2("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

// node_modules/d3-scale-chromatic/src/categorical/Pastel1.js
var Pastel1_default2 = colors_default2("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

// node_modules/d3-scale-chromatic/src/categorical/Pastel2.js
var Pastel2_default2 = colors_default2("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

// node_modules/d3-scale-chromatic/src/categorical/Set1.js
var Set1_default2 = colors_default2("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

// node_modules/d3-scale-chromatic/src/categorical/Set2.js
var Set2_default2 = colors_default2("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

// node_modules/d3-scale-chromatic/src/categorical/Set3.js
var Set3_default2 = colors_default2("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

// node_modules/d3-scale-chromatic/src/categorical/Tableau10.js
var Tableau10_default2 = colors_default2("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

// node_modules/d3-scale-chromatic/node_modules/d3-color/src/define.js
function define_default3(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend3(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-scale-chromatic/node_modules/d3-color/src/color.js
function Color3() {
}
var darker3 = 0.7;
var brighter3 = 1 / darker3;
var reI3 = "\\s*([+-]?\\d+)\\s*";
var reN3 = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP3 = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex3 = /^#([0-9a-f]{3,8})$/;
var reRgbInteger3 = new RegExp("^rgb\\(" + [reI3, reI3, reI3] + "\\)$");
var reRgbPercent3 = new RegExp("^rgb\\(" + [reP3, reP3, reP3] + "\\)$");
var reRgbaInteger3 = new RegExp("^rgba\\(" + [reI3, reI3, reI3, reN3] + "\\)$");
var reRgbaPercent3 = new RegExp("^rgba\\(" + [reP3, reP3, reP3, reN3] + "\\)$");
var reHslPercent3 = new RegExp("^hsl\\(" + [reN3, reP3, reP3] + "\\)$");
var reHslaPercent3 = new RegExp("^hsla\\(" + [reN3, reP3, reP3, reN3] + "\\)$");
var named3 = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default3(Color3, color3, {
  copy: function(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex3,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex3,
  formatHsl: color_formatHsl3,
  formatRgb: color_formatRgb3,
  toString: color_formatRgb3
});
function color_formatHex3() {
  return this.rgb().formatHex();
}
function color_formatHsl3() {
  return hslConvert3(this).formatHsl();
}
function color_formatRgb3() {
  return this.rgb().formatRgb();
}
function color3(format2) {
  var m3, l3;
  format2 = (format2 + "").trim().toLowerCase();
  return (m3 = reHex3.exec(format2)) ? (l3 = m3[1].length, m3 = parseInt(m3[1], 16), l3 === 6 ? rgbn3(m3) : l3 === 3 ? new Rgb3(m3 >> 8 & 15 | m3 >> 4 & 240, m3 >> 4 & 15 | m3 & 240, (m3 & 15) << 4 | m3 & 15, 1) : l3 === 8 ? rgba4(m3 >> 24 & 255, m3 >> 16 & 255, m3 >> 8 & 255, (m3 & 255) / 255) : l3 === 4 ? rgba4(m3 >> 12 & 15 | m3 >> 8 & 240, m3 >> 8 & 15 | m3 >> 4 & 240, m3 >> 4 & 15 | m3 & 240, ((m3 & 15) << 4 | m3 & 15) / 255) : null) : (m3 = reRgbInteger3.exec(format2)) ? new Rgb3(m3[1], m3[2], m3[3], 1) : (m3 = reRgbPercent3.exec(format2)) ? new Rgb3(m3[1] * 255 / 100, m3[2] * 255 / 100, m3[3] * 255 / 100, 1) : (m3 = reRgbaInteger3.exec(format2)) ? rgba4(m3[1], m3[2], m3[3], m3[4]) : (m3 = reRgbaPercent3.exec(format2)) ? rgba4(m3[1] * 255 / 100, m3[2] * 255 / 100, m3[3] * 255 / 100, m3[4]) : (m3 = reHslPercent3.exec(format2)) ? hsla4(m3[1], m3[2] / 100, m3[3] / 100, 1) : (m3 = reHslaPercent3.exec(format2)) ? hsla4(m3[1], m3[2] / 100, m3[3] / 100, m3[4]) : named3.hasOwnProperty(format2) ? rgbn3(named3[format2]) : format2 === "transparent" ? new Rgb3(NaN, NaN, NaN, 0) : null;
}
function rgbn3(n3) {
  return new Rgb3(n3 >> 16 & 255, n3 >> 8 & 255, n3 & 255, 1);
}
function rgba4(r3, g2, b2, a3) {
  if (a3 <= 0)
    r3 = g2 = b2 = NaN;
  return new Rgb3(r3, g2, b2, a3);
}
function rgbConvert3(o3) {
  if (!(o3 instanceof Color3))
    o3 = color3(o3);
  if (!o3)
    return new Rgb3();
  o3 = o3.rgb();
  return new Rgb3(o3.r, o3.g, o3.b, o3.opacity);
}
function rgb4(r3, g2, b2, opacity) {
  return arguments.length === 1 ? rgbConvert3(r3) : new Rgb3(r3, g2, b2, opacity == null ? 1 : opacity);
}
function Rgb3(r3, g2, b2, opacity) {
  this.r = +r3;
  this.g = +g2;
  this.b = +b2;
  this.opacity = +opacity;
}
define_default3(Rgb3, rgb4, extend3(Color3, {
  brighter: function(k3) {
    k3 = k3 == null ? brighter3 : Math.pow(brighter3, k3);
    return new Rgb3(this.r * k3, this.g * k3, this.b * k3, this.opacity);
  },
  darker: function(k3) {
    k3 = k3 == null ? darker3 : Math.pow(darker3, k3);
    return new Rgb3(this.r * k3, this.g * k3, this.b * k3, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex3,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex3,
  formatRgb: rgb_formatRgb3,
  toString: rgb_formatRgb3
}));
function rgb_formatHex3() {
  return "#" + hex5(this.r) + hex5(this.g) + hex5(this.b);
}
function rgb_formatRgb3() {
  var a3 = this.opacity;
  a3 = isNaN(a3) ? 1 : Math.max(0, Math.min(1, a3));
  return (a3 === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a3 === 1 ? ")" : ", " + a3 + ")");
}
function hex5(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla4(h, s3, l3, a3) {
  if (a3 <= 0)
    h = s3 = l3 = NaN;
  else if (l3 <= 0 || l3 >= 1)
    h = s3 = NaN;
  else if (s3 <= 0)
    h = NaN;
  return new Hsl3(h, s3, l3, a3);
}
function hslConvert3(o3) {
  if (o3 instanceof Hsl3)
    return new Hsl3(o3.h, o3.s, o3.l, o3.opacity);
  if (!(o3 instanceof Color3))
    o3 = color3(o3);
  if (!o3)
    return new Hsl3();
  if (o3 instanceof Hsl3)
    return o3;
  o3 = o3.rgb();
  var r3 = o3.r / 255, g2 = o3.g / 255, b2 = o3.b / 255, min3 = Math.min(r3, g2, b2), max3 = Math.max(r3, g2, b2), h = NaN, s3 = max3 - min3, l3 = (max3 + min3) / 2;
  if (s3) {
    if (r3 === max3)
      h = (g2 - b2) / s3 + (g2 < b2) * 6;
    else if (g2 === max3)
      h = (b2 - r3) / s3 + 2;
    else
      h = (r3 - g2) / s3 + 4;
    s3 /= l3 < 0.5 ? max3 + min3 : 2 - max3 - min3;
    h *= 60;
  } else {
    s3 = l3 > 0 && l3 < 1 ? 0 : h;
  }
  return new Hsl3(h, s3, l3, o3.opacity);
}
function hsl6(h, s3, l3, opacity) {
  return arguments.length === 1 ? hslConvert3(h) : new Hsl3(h, s3, l3, opacity == null ? 1 : opacity);
}
function Hsl3(h, s3, l3, opacity) {
  this.h = +h;
  this.s = +s3;
  this.l = +l3;
  this.opacity = +opacity;
}
define_default3(Hsl3, hsl6, extend3(Color3, {
  brighter: function(k3) {
    k3 = k3 == null ? brighter3 : Math.pow(brighter3, k3);
    return new Hsl3(this.h, this.s, this.l * k3, this.opacity);
  },
  darker: function(k3) {
    k3 = k3 == null ? darker3 : Math.pow(darker3, k3);
    return new Hsl3(this.h, this.s, this.l * k3, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360, s3 = isNaN(h) || isNaN(this.s) ? 0 : this.s, l3 = this.l, m22 = l3 + (l3 < 0.5 ? l3 : 1 - l3) * s3, m1 = 2 * l3 - m22;
    return new Rgb3(
      hsl2rgb3(h >= 240 ? h - 240 : h + 120, m1, m22),
      hsl2rgb3(h, m1, m22),
      hsl2rgb3(h < 120 ? h + 240 : h - 120, m1, m22),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a3 = this.opacity;
    a3 = isNaN(a3) ? 1 : Math.max(0, Math.min(1, a3));
    return (a3 === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a3 === 1 ? ")" : ", " + a3 + ")");
  }
}));
function hsl2rgb3(h, m1, m22) {
  return (h < 60 ? m1 + (m22 - m1) * h / 60 : h < 180 ? m22 : h < 240 ? m1 + (m22 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-scale-chromatic/node_modules/d3-color/src/math.js
var radians3 = Math.PI / 180;
var degrees5 = 180 / Math.PI;

// node_modules/d3-scale-chromatic/node_modules/d3-color/src/lab.js
var K3 = 18;
var Xn3 = 0.96422;
var Yn3 = 1;
var Zn3 = 0.82521;
var t05 = 4 / 29;
var t15 = 6 / 29;
var t23 = 3 * t15 * t15;
var t33 = t15 * t15 * t15;
function labConvert3(o3) {
  if (o3 instanceof Lab3)
    return new Lab3(o3.l, o3.a, o3.b, o3.opacity);
  if (o3 instanceof Hcl3)
    return hcl2lab3(o3);
  if (!(o3 instanceof Rgb3))
    o3 = rgbConvert3(o3);
  var r3 = rgb2lrgb3(o3.r), g2 = rgb2lrgb3(o3.g), b2 = rgb2lrgb3(o3.b), y4 = xyz2lab3((0.2225045 * r3 + 0.7168786 * g2 + 0.0606169 * b2) / Yn3), x4, z3;
  if (r3 === g2 && g2 === b2)
    x4 = z3 = y4;
  else {
    x4 = xyz2lab3((0.4360747 * r3 + 0.3850649 * g2 + 0.1430804 * b2) / Xn3);
    z3 = xyz2lab3((0.0139322 * r3 + 0.0971045 * g2 + 0.7141733 * b2) / Zn3);
  }
  return new Lab3(116 * y4 - 16, 500 * (x4 - y4), 200 * (y4 - z3), o3.opacity);
}
function lab5(l3, a3, b2, opacity) {
  return arguments.length === 1 ? labConvert3(l3) : new Lab3(l3, a3, b2, opacity == null ? 1 : opacity);
}
function Lab3(l3, a3, b2, opacity) {
  this.l = +l3;
  this.a = +a3;
  this.b = +b2;
  this.opacity = +opacity;
}
define_default3(Lab3, lab5, extend3(Color3, {
  brighter: function(k3) {
    return new Lab3(this.l + K3 * (k3 == null ? 1 : k3), this.a, this.b, this.opacity);
  },
  darker: function(k3) {
    return new Lab3(this.l - K3 * (k3 == null ? 1 : k3), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y4 = (this.l + 16) / 116, x4 = isNaN(this.a) ? y4 : y4 + this.a / 500, z3 = isNaN(this.b) ? y4 : y4 - this.b / 200;
    x4 = Xn3 * lab2xyz3(x4);
    y4 = Yn3 * lab2xyz3(y4);
    z3 = Zn3 * lab2xyz3(z3);
    return new Rgb3(
      lrgb2rgb3(3.1338561 * x4 - 1.6168667 * y4 - 0.4906146 * z3),
      lrgb2rgb3(-0.9787684 * x4 + 1.9161415 * y4 + 0.033454 * z3),
      lrgb2rgb3(0.0719453 * x4 - 0.2289914 * y4 + 1.4052427 * z3),
      this.opacity
    );
  }
}));
function xyz2lab3(t5) {
  return t5 > t33 ? Math.pow(t5, 1 / 3) : t5 / t23 + t05;
}
function lab2xyz3(t5) {
  return t5 > t15 ? t5 * t5 * t5 : t23 * (t5 - t05);
}
function lrgb2rgb3(x4) {
  return 255 * (x4 <= 31308e-7 ? 12.92 * x4 : 1.055 * Math.pow(x4, 1 / 2.4) - 0.055);
}
function rgb2lrgb3(x4) {
  return (x4 /= 255) <= 0.04045 ? x4 / 12.92 : Math.pow((x4 + 0.055) / 1.055, 2.4);
}
function hclConvert3(o3) {
  if (o3 instanceof Hcl3)
    return new Hcl3(o3.h, o3.c, o3.l, o3.opacity);
  if (!(o3 instanceof Lab3))
    o3 = labConvert3(o3);
  if (o3.a === 0 && o3.b === 0)
    return new Hcl3(NaN, 0 < o3.l && o3.l < 100 ? 0 : NaN, o3.l, o3.opacity);
  var h = Math.atan2(o3.b, o3.a) * degrees5;
  return new Hcl3(h < 0 ? h + 360 : h, Math.sqrt(o3.a * o3.a + o3.b * o3.b), o3.l, o3.opacity);
}
function hcl5(h, c10, l3, opacity) {
  return arguments.length === 1 ? hclConvert3(h) : new Hcl3(h, c10, l3, opacity == null ? 1 : opacity);
}
function Hcl3(h, c10, l3, opacity) {
  this.h = +h;
  this.c = +c10;
  this.l = +l3;
  this.opacity = +opacity;
}
function hcl2lab3(o3) {
  if (isNaN(o3.h))
    return new Lab3(o3.l, 0, 0, o3.opacity);
  var h = o3.h * radians3;
  return new Lab3(o3.l, Math.cos(h) * o3.c, Math.sin(h) * o3.c, o3.opacity);
}
define_default3(Hcl3, hcl5, extend3(Color3, {
  brighter: function(k3) {
    return new Hcl3(this.h, this.c, this.l + K3 * (k3 == null ? 1 : k3), this.opacity);
  },
  darker: function(k3) {
    return new Hcl3(this.h, this.c, this.l - K3 * (k3 == null ? 1 : k3), this.opacity);
  },
  rgb: function() {
    return hcl2lab3(this).rgb();
  }
}));

// node_modules/d3-scale-chromatic/node_modules/d3-color/src/cubehelix.js
var A4 = -0.14861;
var B3 = 1.78277;
var C5 = -0.29227;
var D3 = -0.90649;
var E4 = 1.97294;
var ED3 = E4 * D3;
var EB3 = E4 * B3;
var BC_DA3 = B3 * C5 - D3 * A4;
function cubehelixConvert3(o3) {
  if (o3 instanceof Cubehelix3)
    return new Cubehelix3(o3.h, o3.s, o3.l, o3.opacity);
  if (!(o3 instanceof Rgb3))
    o3 = rgbConvert3(o3);
  var r3 = o3.r / 255, g2 = o3.g / 255, b2 = o3.b / 255, l3 = (BC_DA3 * b2 + ED3 * r3 - EB3 * g2) / (BC_DA3 + ED3 - EB3), bl = b2 - l3, k3 = (E4 * (g2 - l3) - C5 * bl) / D3, s3 = Math.sqrt(k3 * k3 + bl * bl) / (E4 * l3 * (1 - l3)), h = s3 ? Math.atan2(k3, bl) * degrees5 - 120 : NaN;
  return new Cubehelix3(h < 0 ? h + 360 : h, s3, l3, o3.opacity);
}
function cubehelix5(h, s3, l3, opacity) {
  return arguments.length === 1 ? cubehelixConvert3(h) : new Cubehelix3(h, s3, l3, opacity == null ? 1 : opacity);
}
function Cubehelix3(h, s3, l3, opacity) {
  this.h = +h;
  this.s = +s3;
  this.l = +l3;
  this.opacity = +opacity;
}
define_default3(Cubehelix3, cubehelix5, extend3(Color3, {
  brighter: function(k3) {
    k3 = k3 == null ? brighter3 : Math.pow(brighter3, k3);
    return new Cubehelix3(this.h, this.s, this.l * k3, this.opacity);
  },
  darker: function(k3) {
    k3 = k3 == null ? darker3 : Math.pow(darker3, k3);
    return new Cubehelix3(this.h, this.s, this.l * k3, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * radians3, l3 = +this.l, a3 = isNaN(this.s) ? 0 : this.s * l3 * (1 - l3), cosh4 = Math.cos(h), sinh4 = Math.sin(h);
    return new Rgb3(
      255 * (l3 + a3 * (A4 * cosh4 + B3 * sinh4)),
      255 * (l3 + a3 * (C5 * cosh4 + D3 * sinh4)),
      255 * (l3 + a3 * (E4 * cosh4)),
      this.opacity
    );
  }
}));

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/basis.js
function basis3(t16, v0, v1, v22, v3) {
  var t24 = t16 * t16, t34 = t24 * t16;
  return ((1 - 3 * t16 + 3 * t24 - t34) * v0 + (4 - 6 * t24 + 3 * t34) * v1 + (1 + 3 * t16 + 3 * t24 - 3 * t34) * v22 + t34 * v3) / 6;
}
function basis_default4(values) {
  var n3 = values.length - 1;
  return function(t5) {
    var i3 = t5 <= 0 ? t5 = 0 : t5 >= 1 ? (t5 = 1, n3 - 1) : Math.floor(t5 * n3), v1 = values[i3], v22 = values[i3 + 1], v0 = i3 > 0 ? values[i3 - 1] : 2 * v1 - v22, v3 = i3 < n3 - 1 ? values[i3 + 2] : 2 * v22 - v1;
    return basis3((t5 - i3 / n3) * n3, v0, v1, v22, v3);
  };
}

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default4(values) {
  var n3 = values.length;
  return function(t5) {
    var i3 = Math.floor(((t5 %= 1) < 0 ? ++t5 : t5) * n3), v0 = values[(i3 + n3 - 1) % n3], v1 = values[i3 % n3], v22 = values[(i3 + 1) % n3], v3 = values[(i3 + 2) % n3];
    return basis3((t5 - i3 / n3) * n3, v0, v1, v22, v3);
  };
}

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/constant.js
var constant_default5 = (x4) => () => x4;

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/color.js
function linear4(a3, d2) {
  return function(t5) {
    return a3 + t5 * d2;
  };
}
function exponential3(a3, b2, y4) {
  return a3 = Math.pow(a3, y4), b2 = Math.pow(b2, y4) - a3, y4 = 1 / y4, function(t5) {
    return Math.pow(a3 + t5 * b2, y4);
  };
}
function hue3(a3, b2) {
  var d2 = b2 - a3;
  return d2 ? linear4(a3, d2 > 180 || d2 < -180 ? d2 - 360 * Math.round(d2 / 360) : d2) : constant_default5(isNaN(a3) ? b2 : a3);
}
function gamma3(y4) {
  return (y4 = +y4) === 1 ? nogamma3 : function(a3, b2) {
    return b2 - a3 ? exponential3(a3, b2, y4) : constant_default5(isNaN(a3) ? b2 : a3);
  };
}
function nogamma3(a3, b2) {
  var d2 = b2 - a3;
  return d2 ? linear4(a3, d2) : constant_default5(isNaN(a3) ? b2 : a3);
}

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/rgb.js
var rgb_default3 = function rgbGamma3(y4) {
  var color4 = gamma3(y4);
  function rgb5(start2, end) {
    var r3 = color4((start2 = rgb4(start2)).r, (end = rgb4(end)).r), g2 = color4(start2.g, end.g), b2 = color4(start2.b, end.b), opacity = nogamma3(start2.opacity, end.opacity);
    return function(t5) {
      start2.r = r3(t5);
      start2.g = g2(t5);
      start2.b = b2(t5);
      start2.opacity = opacity(t5);
      return start2 + "";
    };
  }
  rgb5.gamma = rgbGamma3;
  return rgb5;
}(1);
function rgbSpline3(spline) {
  return function(colors3) {
    var n3 = colors3.length, r3 = new Array(n3), g2 = new Array(n3), b2 = new Array(n3), i3, color4;
    for (i3 = 0; i3 < n3; ++i3) {
      color4 = rgb4(colors3[i3]);
      r3[i3] = color4.r || 0;
      g2[i3] = color4.g || 0;
      b2[i3] = color4.b || 0;
    }
    r3 = spline(r3);
    g2 = spline(g2);
    b2 = spline(b2);
    color4.opacity = 1;
    return function(t5) {
      color4.r = r3(t5);
      color4.g = g2(t5);
      color4.b = b2(t5);
      return color4 + "";
    };
  };
}
var rgbBasis3 = rgbSpline3(basis_default4);
var rgbBasisClosed3 = rgbSpline3(basisClosed_default4);

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/number.js
function number_default4(a3, b2) {
  return a3 = +a3, b2 = +b2, function(t5) {
    return a3 * (1 - t5) + b2 * t5;
  };
}

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/string.js
var reA3 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB3 = new RegExp(reA3.source, "g");

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/transform/decompose.js
var degrees6 = 180 / Math.PI;
var identity5 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default3(a3, b2, c10, d2, e4, f2) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a3 * a3 + b2 * b2))
    a3 /= scaleX, b2 /= scaleX;
  if (skewX = a3 * c10 + b2 * d2)
    c10 -= a3 * skewX, d2 -= b2 * skewX;
  if (scaleY = Math.sqrt(c10 * c10 + d2 * d2))
    c10 /= scaleY, d2 /= scaleY, skewX /= scaleY;
  if (a3 * d2 < b2 * c10)
    a3 = -a3, b2 = -b2, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e4,
    translateY: f2,
    rotate: Math.atan2(b2, a3) * degrees6,
    skewX: Math.atan(skewX) * degrees6,
    scaleX,
    scaleY
  };
}

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/transform/parse.js
var svgNode3;
function parseCss3(value) {
  const m3 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m3.isIdentity ? identity5 : decompose_default3(m3.a, m3.b, m3.c, m3.d, m3.e, m3.f);
}
function parseSvg3(value) {
  if (value == null)
    return identity5;
  if (!svgNode3)
    svgNode3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode3.setAttribute("transform", value);
  if (!(value = svgNode3.transform.baseVal.consolidate()))
    return identity5;
  value = value.matrix;
  return decompose_default3(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform3(parse, pxComma, pxParen, degParen) {
  function pop(s3) {
    return s3.length ? s3.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s3, q) {
    if (xa !== xb || ya !== yb) {
      var i3 = s3.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i3 - 4, x: number_default4(xa, xb) }, { i: i3 - 2, x: number_default4(ya, yb) });
    } else if (xb || yb) {
      s3.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a3, b2, s3, q) {
    if (a3 !== b2) {
      if (a3 - b2 > 180)
        b2 += 360;
      else if (b2 - a3 > 180)
        a3 += 360;
      q.push({ i: s3.push(pop(s3) + "rotate(", null, degParen) - 2, x: number_default4(a3, b2) });
    } else if (b2) {
      s3.push(pop(s3) + "rotate(" + b2 + degParen);
    }
  }
  function skewX(a3, b2, s3, q) {
    if (a3 !== b2) {
      q.push({ i: s3.push(pop(s3) + "skewX(", null, degParen) - 2, x: number_default4(a3, b2) });
    } else if (b2) {
      s3.push(pop(s3) + "skewX(" + b2 + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s3, q) {
    if (xa !== xb || ya !== yb) {
      var i3 = s3.push(pop(s3) + "scale(", null, ",", null, ")");
      q.push({ i: i3 - 4, x: number_default4(xa, xb) }, { i: i3 - 2, x: number_default4(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s3.push(pop(s3) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a3, b2) {
    var s3 = [], q = [];
    a3 = parse(a3), b2 = parse(b2);
    translate(a3.translateX, a3.translateY, b2.translateX, b2.translateY, s3, q);
    rotate(a3.rotate, b2.rotate, s3, q);
    skewX(a3.skewX, b2.skewX, s3, q);
    scale(a3.scaleX, a3.scaleY, b2.scaleX, b2.scaleY, s3, q);
    a3 = b2 = null;
    return function(t5) {
      var i3 = -1, n3 = q.length, o3;
      while (++i3 < n3)
        s3[(o3 = q[i3]).i] = o3.x(t5);
      return s3.join("");
    };
  };
}
var interpolateTransformCss3 = interpolateTransform3(parseCss3, "px, ", "px)", "deg)");
var interpolateTransformSvg3 = interpolateTransform3(parseSvg3, ", ", ")", ")");

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/zoom.js
var epsilon23 = 1e-12;
function cosh3(x4) {
  return ((x4 = Math.exp(x4)) + 1 / x4) / 2;
}
function sinh3(x4) {
  return ((x4 = Math.exp(x4)) - 1 / x4) / 2;
}
function tanh3(x4) {
  return ((x4 = Math.exp(2 * x4)) - 1) / (x4 + 1);
}
var zoom_default3 = function zoomRho3(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i3, S;
    if (d2 < epsilon23) {
      S = Math.log(w1 / w0) / rho;
      i3 = function(t5) {
        return [
          ux0 + t5 * dx,
          uy0 + t5 * dy,
          w0 * Math.exp(rho * t5 * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i3 = function(t5) {
        var s3 = t5 * S, coshr0 = cosh3(r0), u2 = w0 / (rho2 * d1) * (coshr0 * tanh3(rho * s3 + r0) - sinh3(r0));
        return [
          ux0 + u2 * dx,
          uy0 + u2 * dy,
          w0 * coshr0 / cosh3(rho * s3 + r0)
        ];
      };
    }
    i3.duration = S * 1e3 * rho / Math.SQRT2;
    return i3;
  }
  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho3(_1, _2, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/hsl.js
function hsl7(hue4) {
  return function(start2, end) {
    var h = hue4((start2 = hsl6(start2)).h, (end = hsl6(end)).h), s3 = nogamma3(start2.s, end.s), l3 = nogamma3(start2.l, end.l), opacity = nogamma3(start2.opacity, end.opacity);
    return function(t5) {
      start2.h = h(t5);
      start2.s = s3(t5);
      start2.l = l3(t5);
      start2.opacity = opacity(t5);
      return start2 + "";
    };
  };
}
var hsl_default3 = hsl7(hue3);
var hslLong3 = hsl7(nogamma3);

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/hcl.js
function hcl6(hue4) {
  return function(start2, end) {
    var h = hue4((start2 = hcl5(start2)).h, (end = hcl5(end)).h), c10 = nogamma3(start2.c, end.c), l3 = nogamma3(start2.l, end.l), opacity = nogamma3(start2.opacity, end.opacity);
    return function(t5) {
      start2.h = h(t5);
      start2.c = c10(t5);
      start2.l = l3(t5);
      start2.opacity = opacity(t5);
      return start2 + "";
    };
  };
}
var hcl_default3 = hcl6(hue3);
var hclLong3 = hcl6(nogamma3);

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/cubehelix.js
function cubehelix6(hue4) {
  return function cubehelixGamma(y4) {
    y4 = +y4;
    function cubehelix7(start2, end) {
      var h = hue4((start2 = cubehelix5(start2)).h, (end = cubehelix5(end)).h), s3 = nogamma3(start2.s, end.s), l3 = nogamma3(start2.l, end.l), opacity = nogamma3(start2.opacity, end.opacity);
      return function(t5) {
        start2.h = h(t5);
        start2.s = s3(t5);
        start2.l = l3(Math.pow(t5, y4));
        start2.opacity = opacity(t5);
        return start2 + "";
      };
    }
    cubehelix7.gamma = cubehelixGamma;
    return cubehelix7;
  }(1);
}
var cubehelix_default4 = cubehelix6(hue3);
var cubehelixLong3 = cubehelix6(nogamma3);

// node_modules/d3-scale-chromatic/src/ramp.js
var ramp_default2 = (scheme55) => rgbBasis3(scheme55[scheme55.length - 1]);

// node_modules/d3-scale-chromatic/src/diverging/BrBG.js
var scheme28 = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(colors_default2);
var BrBG_default2 = ramp_default2(scheme28);

// node_modules/d3-scale-chromatic/src/diverging/PRGn.js
var scheme29 = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(colors_default2);
var PRGn_default2 = ramp_default2(scheme29);

// node_modules/d3-scale-chromatic/src/diverging/PiYG.js
var scheme30 = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(colors_default2);
var PiYG_default2 = ramp_default2(scheme30);

// node_modules/d3-scale-chromatic/src/diverging/PuOr.js
var scheme31 = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(colors_default2);
var PuOr_default2 = ramp_default2(scheme31);

// node_modules/d3-scale-chromatic/src/diverging/RdBu.js
var scheme32 = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(colors_default2);
var RdBu_default2 = ramp_default2(scheme32);

// node_modules/d3-scale-chromatic/src/diverging/RdGy.js
var scheme33 = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(colors_default2);
var RdGy_default2 = ramp_default2(scheme33);

// node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js
var scheme34 = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(colors_default2);
var RdYlBu_default2 = ramp_default2(scheme34);

// node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js
var scheme35 = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(colors_default2);
var RdYlGn_default2 = ramp_default2(scheme35);

// node_modules/d3-scale-chromatic/src/diverging/Spectral.js
var scheme36 = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(colors_default2);
var Spectral_default2 = ramp_default2(scheme36);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js
var scheme37 = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(colors_default2);
var BuGn_default2 = ramp_default2(scheme37);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js
var scheme38 = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(colors_default2);
var BuPu_default2 = ramp_default2(scheme38);

// node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js
var scheme39 = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(colors_default2);
var GnBu_default2 = ramp_default2(scheme39);

// node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js
var scheme40 = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(colors_default2);
var OrRd_default2 = ramp_default2(scheme40);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js
var scheme41 = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(colors_default2);
var PuBuGn_default2 = ramp_default2(scheme41);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js
var scheme42 = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(colors_default2);
var PuBu_default2 = ramp_default2(scheme42);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js
var scheme43 = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(colors_default2);
var PuRd_default2 = ramp_default2(scheme43);

// node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js
var scheme44 = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(colors_default2);
var RdPu_default2 = ramp_default2(scheme44);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js
var scheme45 = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(colors_default2);
var YlGnBu_default2 = ramp_default2(scheme45);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js
var scheme46 = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(colors_default2);
var YlGn_default2 = ramp_default2(scheme46);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js
var scheme47 = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(colors_default2);
var YlOrBr_default2 = ramp_default2(scheme47);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js
var scheme48 = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(colors_default2);
var YlOrRd_default2 = ramp_default2(scheme48);

// node_modules/d3-scale-chromatic/src/sequential-single/Blues.js
var scheme49 = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(colors_default2);
var Blues_default2 = ramp_default2(scheme49);

// node_modules/d3-scale-chromatic/src/sequential-single/Greens.js
var scheme50 = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(colors_default2);
var Greens_default2 = ramp_default2(scheme50);

// node_modules/d3-scale-chromatic/src/sequential-single/Greys.js
var scheme51 = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(colors_default2);
var Greys_default2 = ramp_default2(scheme51);

// node_modules/d3-scale-chromatic/src/sequential-single/Purples.js
var scheme52 = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(colors_default2);
var Purples_default2 = ramp_default2(scheme52);

// node_modules/d3-scale-chromatic/src/sequential-single/Reds.js
var scheme53 = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(colors_default2);
var Reds_default2 = ramp_default2(scheme53);

// node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js
var scheme54 = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(colors_default2);
var Oranges_default2 = ramp_default2(scheme54);

// node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
function cividis_default2(t5) {
  t5 = Math.max(0, Math.min(1, t5));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t5 * (35.34 - t5 * (2381.73 - t5 * (6402.7 - t5 * (7024.72 - t5 * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t5 * (170.73 + t5 * (52.82 - t5 * (131.46 - t5 * (176.58 - t5 * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t5 * (442.36 - t5 * (2482.43 - t5 * (6167.24 - t5 * (6614.94 - t5 * 2475.67))))))) + ")";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var cubehelix_default5 = cubehelixLong3(cubehelix5(300, 0.5, 0), cubehelix5(-240, 0.5, 1));

// node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js
var warm2 = cubehelixLong3(cubehelix5(-100, 0.75, 0.35), cubehelix5(80, 1.5, 0.8));
var cool2 = cubehelixLong3(cubehelix5(260, 0.75, 0.35), cubehelix5(80, 1.5, 0.8));
var c8 = cubehelix5();
function rainbow_default2(t5) {
  if (t5 < 0 || t5 > 1)
    t5 -= Math.floor(t5);
  var ts2 = Math.abs(t5 - 0.5);
  c8.h = 360 * t5 - 100;
  c8.s = 1.5 - 1.5 * ts2;
  c8.l = 0.8 - 0.9 * ts2;
  return c8 + "";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var c9 = rgb4();
var pi_1_32 = Math.PI / 3;
var pi_2_32 = Math.PI * 2 / 3;
function sinebow_default2(t5) {
  var x4;
  t5 = (0.5 - t5) * Math.PI;
  c9.r = 255 * (x4 = Math.sin(t5)) * x4;
  c9.g = 255 * (x4 = Math.sin(t5 + pi_1_32)) * x4;
  c9.b = 255 * (x4 = Math.sin(t5 + pi_2_32)) * x4;
  return c9 + "";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
function turbo_default2(t5) {
  t5 = Math.max(0, Math.min(1, t5));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t5 * (1172.33 - t5 * (10793.56 - t5 * (33300.12 - t5 * (38394.49 - t5 * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t5 * (557.33 + t5 * (1225.33 - t5 * (3574.96 - t5 * (1073.77 + t5 * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t5 * (3211.1 - t5 * (15327.97 - t5 * (27814 - t5 * (22569.18 - t5 * 6838.66))))))) + ")";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function ramp2(range) {
  var n3 = range.length;
  return function(t5) {
    return range[Math.max(0, Math.min(n3 - 1, Math.floor(t5 * n3)))];
  };
}
var viridis_default2 = ramp2(colors_default2("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma2 = ramp2(colors_default2("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno2 = ramp2(colors_default2("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma2 = ramp2(colors_default2("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

// node_modules/@nivo/colors/dist/nivo-colors.es.js
var import_react17 = __toESM(require_react());
var import_get2 = __toESM(require_get());
var import_isPlainObject2 = __toESM(require_isPlainObject());
var import_prop_types2 = __toESM(require_prop_types());
function qe() {
  return qe = Object.assign ? Object.assign.bind() : function(e4) {
    for (var r3 = 1; r3 < arguments.length; r3++) {
      var n3 = arguments[r3];
      for (var t5 in n3)
        Object.prototype.hasOwnProperty.call(n3, t5) && (e4[t5] = n3[t5]);
    }
    return e4;
  }, qe.apply(this, arguments);
}
function Se(e4, r3) {
  (null == r3 || r3 > e4.length) && (r3 = e4.length);
  for (var n3 = 0, t5 = new Array(r3); n3 < r3; n3++)
    t5[n3] = e4[n3];
  return t5;
}
function Re(e4, r3) {
  var n3 = "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
  if (n3)
    return (n3 = n3.call(e4)).next.bind(n3);
  if (Array.isArray(e4) || (n3 = function(e6, r4) {
    if (e6) {
      if ("string" == typeof e6)
        return Se(e6, r4);
      var n4 = Object.prototype.toString.call(e6).slice(8, -1);
      return "Object" === n4 && e6.constructor && (n4 = e6.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e6) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? Se(e6, r4) : void 0;
    }
  }(e4)) || r3 && e4 && "number" == typeof e4.length) {
    n3 && (e4 = n3);
    var t5 = 0;
    return function() {
      return t5 >= e4.length ? { done: true } : { done: false, value: e4[t5++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var Ce = { nivo: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb", "#97e3d5"], category10: category10_default2, accent: Accent_default2, dark2: Dark2_default2, paired: Paired_default2, pastel1: Pastel1_default2, pastel2: Pastel2_default2, set1: Set1_default2, set2: Set2_default2, set3: Set3_default2 };
var Ge = Object.keys(Ce);
var Ve = { brown_blueGreen: scheme28, purpleRed_green: scheme29, pink_yellowGreen: scheme30, purple_orange: scheme31, red_blue: scheme32, red_grey: scheme33, red_yellow_blue: scheme34, red_yellow_green: scheme35, spectral: scheme36 };
var Te = Object.keys(Ve);
var Pe = { brown_blueGreen: BrBG_default2, purpleRed_green: PRGn_default2, pink_yellowGreen: PiYG_default2, purple_orange: PuOr_default2, red_blue: RdBu_default2, red_grey: RdGy_default2, red_yellow_blue: RdYlBu_default2, red_yellow_green: RdYlGn_default2, spectral: Spectral_default2 };
var Ue = { blues: scheme49, greens: scheme50, greys: scheme51, oranges: scheme54, purples: scheme52, reds: scheme53, blue_green: scheme37, blue_purple: scheme38, green_blue: scheme39, orange_red: scheme40, purple_blue_green: scheme41, purple_blue: scheme42, purple_red: scheme43, red_purple: scheme44, yellow_green_blue: scheme45, yellow_green: scheme46, yellow_orange_brown: scheme47, yellow_orange_red: scheme48 };
var De = Object.keys(Ue);
var Me = { blues: Blues_default2, greens: Greens_default2, greys: Greys_default2, oranges: Oranges_default2, purples: Purples_default2, reds: Reds_default2, turbo: turbo_default2, viridis: viridis_default2, inferno: inferno2, magma: magma2, plasma: plasma2, cividis: cividis_default2, warm: warm2, cool: cool2, cubehelixDefault: cubehelix_default5, blue_green: BuGn_default2, blue_purple: BuPu_default2, green_blue: GnBu_default2, orange_red: OrRd_default2, purple_blue_green: PuBuGn_default2, purple_blue: PuBu_default2, purple_red: PuRd_default2, red_purple: RdPu_default2, yellow_green_blue: YlGnBu_default2, yellow_green: YlGn_default2, yellow_orange_brown: YlOrBr_default2, yellow_orange_red: YlOrRd_default2 };
var $e = qe({}, Ce, Ve, Ue);
var Be = Object.keys($e);
var Fe = function(e4) {
  return Ge.includes(e4);
};
var He = function(e4) {
  return Te.includes(e4);
};
var Je = function(e4) {
  return De.includes(e4);
};
var Ke = { rainbow: rainbow_default2, sinebow: sinebow_default2 };
var Le = qe({}, Pe, Me, Ke);
var Ne = Object.keys(Le);
var Qe2 = function(e4, r3) {
  if ("function" == typeof e4)
    return e4;
  if ((0, import_isPlainObject2.default)(e4)) {
    if (function(e6) {
      return void 0 !== e6.theme;
    }(e4)) {
      if (void 0 === r3)
        throw new Error("Unable to use color from theme as no theme was provided");
      var n3 = (0, import_get2.default)(r3, e4.theme);
      if (void 0 === n3)
        throw new Error("Color from theme is undefined at path: '" + e4.theme + "'");
      return function() {
        return n3;
      };
    }
    if (function(e6) {
      return void 0 !== e6.from;
    }(e4)) {
      var t5 = function(r4) {
        return (0, import_get2.default)(r4, e4.from);
      };
      if (Array.isArray(e4.modifiers)) {
        for (var o3, i3 = [], u2 = function() {
          var e6 = o3.value, r4 = e6[0], n4 = e6[1];
          if ("brighter" === r4)
            i3.push(function(e7) {
              return e7.brighter(n4);
            });
          else if ("darker" === r4)
            i3.push(function(e7) {
              return e7.darker(n4);
            });
          else {
            if ("opacity" !== r4)
              throw new Error("Invalid color modifier: '" + r4 + "', must be one of: 'brighter', 'darker', 'opacity'");
            i3.push(function(e7) {
              return e7.opacity = n4, e7;
            });
          }
        }, a3 = Re(e4.modifiers); !(o3 = a3()).done; )
          u2();
        return 0 === i3.length ? t5 : function(e6) {
          return i3.reduce(function(e7, r4) {
            return r4(e7);
          }, rgb2(t5(e6))).toString();
        };
      }
      return t5;
    }
    throw new Error("Invalid color spec, you should either specify 'theme' or 'from' when using a config object");
  }
  return function() {
    return e4;
  };
};
var We = function(e4, r3) {
  return (0, import_react17.useMemo)(function() {
    return Qe2(e4, r3);
  }, [e4, r3]);
};
var Xe = import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.arrayOf(import_prop_types2.default.string), import_prop_types2.default.shape({ scheme: import_prop_types2.default.oneOf(Be).isRequired, size: import_prop_types2.default.number }), import_prop_types2.default.shape({ datum: import_prop_types2.default.string.isRequired }), import_prop_types2.default.string]);
var Ye = import_prop_types2.default.oneOfType([import_prop_types2.default.string, import_prop_types2.default.func, import_prop_types2.default.shape({ theme: import_prop_types2.default.string.isRequired }), import_prop_types2.default.shape({ from: import_prop_types2.default.string.isRequired, modifiers: import_prop_types2.default.arrayOf(import_prop_types2.default.array) })]);
var fr = function(e4, r3) {
  if ("function" == typeof e4)
    return e4;
  var n3 = "function" == typeof r3 ? r3 : function(e6) {
    return (0, import_get2.default)(e6, r3);
  };
  if (Array.isArray(e4)) {
    var t5 = ordinal(e4), o3 = function(e6) {
      return t5(n3(e6));
    };
    return o3.scale = t5, o3;
  }
  if ((0, import_isPlainObject2.default)(e4)) {
    if (function(e6) {
      return void 0 !== e6.datum;
    }(e4))
      return function(r4) {
        return (0, import_get2.default)(r4, e4.datum);
      };
    if (function(e6) {
      return void 0 !== e6.scheme;
    }(e4)) {
      if (Fe(e4.scheme)) {
        var i3 = ordinal($e[e4.scheme]), u2 = function(e6) {
          return i3(n3(e6));
        };
        return u2.scale = i3, u2;
      }
      if (He(e4.scheme)) {
        if (void 0 !== e4.size && (e4.size < 3 || e4.size > 11))
          throw new Error("Invalid size '" + e4.size + "' for diverging color scheme '" + e4.scheme + "', must be between 3~11");
        var a3 = ordinal($e[e4.scheme][e4.size || 11]), l3 = function(e6) {
          return a3(n3(e6));
        };
        return l3.scale = a3, l3;
      }
      if (Je(e4.scheme)) {
        if (void 0 !== e4.size && (e4.size < 3 || e4.size > 9))
          throw new Error("Invalid size '" + e4.size + "' for sequential color scheme '" + e4.scheme + "', must be between 3~9");
        var s3 = ordinal($e[e4.scheme][e4.size || 9]), c10 = function(e6) {
          return s3(n3(e6));
        };
        return c10.scale = s3, c10;
      }
    }
    throw new Error("Invalid colors, when using an object, you should either pass a 'datum' or a 'scheme' property");
  }
  return function() {
    return e4;
  };
};
var pr = function(e4, r3) {
  return (0, import_react17.useMemo)(function() {
    return fr(e4, r3);
  }, [e4, r3]);
};

export {
  require_prop_types,
  useSpring,
  useTransition,
  to2 as to,
  animated,
  require_jsx_runtime,
  w,
  k2 as k,
  require_baseGetTag,
  require_isObject,
  require_Stack,
  require_baseFor,
  require_isObjectLike,
  require_isArray,
  require_isArrayLike,
  require_baseUnary,
  require_nodeUtil,
  require_identity,
  require_baseRest,
  require_isIterateeCall,
  require_isSymbol,
  require_isKey,
  require_arrayMap,
  require_toString,
  require_toKey,
  require_baseGet,
  require_get,
  require_last,
  band,
  point,
  format,
  linear3 as linear,
  log,
  symlog,
  newInterval2 as newInterval,
  millisecond_default2 as millisecond_default,
  second_default2 as second_default,
  minute_default2 as minute_default,
  hour_default2 as hour_default,
  sunday2 as sunday,
  monday2 as monday,
  tuesday2 as tuesday,
  wednesday2 as wednesday,
  thursday2 as thursday,
  friday2 as friday,
  saturday2 as saturday,
  month_default2 as month_default,
  year_default2 as year_default,
  utcMinute_default2 as utcMinute_default,
  utcHour_default2 as utcHour_default,
  utcSunday2 as utcSunday,
  utcMonday2 as utcMonday,
  utcTuesday2 as utcTuesday,
  utcWednesday2 as utcWednesday,
  utcThursday2 as utcThursday,
  utcFriday2 as utcFriday,
  utcSaturday2 as utcSaturday,
  utcMonth_default2 as utcMonth_default,
  utcYear_default2 as utcYear_default,
  timeFormat,
  timeParse,
  utcParse,
  time,
  utcTime,
  require_SetCache,
  require_arrayIncludes,
  require_arrayIncludesWith,
  require_cacheHas,
  stack_default,
  diverging_default,
  require_hasIn,
  require_baseFlatten,
  require_setToArray,
  require_arrayFilter,
  require_keys,
  require_Set,
  require_baseIsEqual,
  Zr,
  $r,
  Bt,
  Dt,
  Et,
  Ht,
  Jt,
  ni,
  oi,
  li,
  si,
  fi,
  _i,
  Ti,
  Bi,
  Gi,
  Ai,
  Fi,
  Hi,
  require_baseClone,
  require_baseSlice,
  require_omit,
  We,
  pr
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=chunk-GVRTHUP3.js.map
