var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
function _mergeNamespaces(n2, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e = m2[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k2 in e) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d = Object.getOwnPropertyDescriptor(e, k2);
          if (d) {
            Object.defineProperty(n2, k2, d.get ? d : {
              enumerable: true,
              get: () => e[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var define_global_default$1 = {};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof define_global_default$1 !== "undefined" ? define_global_default$1 : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for("react.element"), n$2 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r$1 = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u$1 = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b)
    for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
      J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
  var g2 = arguments.length - 2;
  if (1 === g2)
    c.children = e;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps)
    for (d in g2 = a.defaultProps, g2)
      void 0 === c[d] && (c[d] = g2[d]);
  return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
}
function N$1(a, b) {
  return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$1(a, b, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$1:
          case n$2:
            h = true;
        }
    }
  if (h)
    return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
      return a2;
    })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a))
    for (var g2 = 0; g2 < a.length; g2++) {
      k2 = a[g2];
      var f2 = d + Q$1(k2, g2);
      h += R$1(k2, b, e, f2, c);
    }
  else if (f2 = A$1(a), "function" === typeof f2)
    for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = d + Q$1(k2, g2++), h += R$1(k2, b, e, f2, c);
  else if ("object" === k2)
    throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$1(a, b, e) {
  if (null == a)
    return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
  S$1(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$3;
react_production_min.Profiler = r$1;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$2;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a, b, e) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g2 = a.type.defaultProps;
    for (f2 in b)
      J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g2 ? g2[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d.children = e;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    d.children = g2;
  }
  return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u$1, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t$1, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$2, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b) {
  return U$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e) {
  return U$1.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$1.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e) {
  return U$1.current.useReducer(a, b, e);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e) {
  return U$1.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.2.0";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React$1 = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const ReactOriginal = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: React$1
}, [reactExports]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n$1 = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$2 = { key: true, ref: true, __self: true, __source: true };
function q$1(c, a, g2) {
  var b, d = {}, e = null, h = null;
  void 0 !== g2 && (e = "" + g2);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a)
    m$1.call(a, b) && !p$2.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n$1.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q$1;
reactJsxRuntime_production_min.jsxs = q$1;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client$1 = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g2(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length)
      return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a:
        for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
          var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
          if (0 > g2(C2, c))
            n2 < e && 0 > g2(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
          else if (n2 < e && 0 > g2(x2, c))
            a[d] = x2, a[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b;
  }
  function g2(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h(t2); null !== b; ) {
      if (null === b.callback)
        k2(t2);
      else if (b.startTime <= a)
        k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
      else
        break;
      b = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h(r2))
        A2 = true, I2(J2);
      else {
        var b = h(t2);
        null !== b && K2(H2, b.startTime - a);
      }
  }
  function J2(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
          G2(b);
        } else
          k2(r2);
        v2 = h(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h(t2);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p$1(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++)
    da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (null !== c)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d))
    return true;
  if (d)
    return false;
  if (null !== c)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function v$1(a, b, c, d, e, f2, g2) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v$1(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new v$1(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v$1(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v$1(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v$1(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v$1(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v$1(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v$1(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v$1(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ra,
    sa
  );
  z[b] = new v$1(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v$1(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v$1(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v$1(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v$1(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
    qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na)
    return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l2) {
          d = l2;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g2 = e.length - 1, h = f2.length - 1; 1 <= g2 && 0 <= h && e[g2] !== f2[h]; )
        h--;
      for (; 1 <= g2 && 0 <= h; g2--, h--)
        if (e[g2] !== f2[h]) {
          if (1 !== g2 || 1 !== h) {
            do
              if (g2--, h--, 0 > h || e[g2] !== f2[h]) {
                var k2 = "\n" + e[g2].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b)
        return b.displayName || b.name || null;
      if ("string" === typeof b)
        return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c)
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a)
    null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML)
    throw Error(p$1(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b)
        throw Error(p$1(92));
      if (eb(c)) {
        if (1 < c.length)
          throw Error(p$1(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
    a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
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
  gridArea: true,
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
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
      throw Error(p$1(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children)
        throw Error(p$1(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
        throw Error(p$1(61));
    }
    if (null != b.style && "object" !== typeof b.style)
      throw Error(p$1(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(p$1(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib)
    return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c)
    return null;
  var d = Db(c);
  if (null === d)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && "function" !== typeof c)
    throw Error(p$1(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
function Nb(a, b, c, d, e, f2, g2, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b, c, d, e, f2, g2, h, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f2, g2, h, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p$1(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b)
      return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a)
    throw Error(p$1(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b)
      throw Error(p$1(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e)
      break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c)
          return Xb(e), a;
        if (f2 === d)
          return Xb(e), b;
        f2 = f2.sibling;
      }
      throw Error(p$1(188));
    }
    if (c.return !== d.return)
      c = e, d = f2;
    else {
      for (var g2 = false, h = e.child; h; ) {
        if (h === c) {
          g2 = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g2 = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g2) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g2 = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g2 = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g2)
          throw Error(p$1(189));
      }
    }
    if (c.alternate !== d)
      throw Error(p$1(190));
  }
  if (3 !== c.tag)
    throw Error(p$1(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag)
    return a;
  for (a = a.child; null !== a; ) {
    var b = $b(a);
    if (null !== b)
      return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c)
    return 0;
  var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g2 = c & 268435455;
  if (0 !== g2) {
    var h = g2 & ~e;
    0 !== h ? d = tc(h) : (f2 &= g2, 0 !== f2 && (d = tc(f2)));
  } else
    g2 = c & ~e, 0 !== g2 ? d = tc(g2) : 0 !== f2 && (d = tc(f2));
  if (0 === d)
    return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240)))
    return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h = 1 << g2, k2 = e[g2];
    if (-1 === k2) {
      if (0 === (h & c) || 0 !== (h & d))
        e[g2] = vc(h, b);
    } else
      k2 <= b && (a.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f2 = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f2;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Wb(c), null !== b) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else
      return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++)
    d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
    Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function gd(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (null === e)
      hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e, a, b, c, d))
      d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb(e);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b, c, d);
        null === f2 && hd(a, b, d, id, c);
        if (f2 === e)
          break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else
      hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a)
    if (b = Vb(a), null === b)
      a = null;
    else if (c = b.tag, 13 === c) {
      a = Wb(b);
      if (null !== a)
        return a;
      a = null;
    } else if (3 === c) {
      if (b.stateNode.current.memoizedState.isDehydrated)
        return 3 === b.tag ? b.stateNode.containerInfo : null;
      a = null;
    } else
      b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g2 = c - a;
  for (d = 1; d <= g2 && b[c - d] === e[f2 - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g2) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b)
      return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if ("change" === a)
    return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b) {
  if ("click" === a)
    return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a)
    return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e]))
      return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
        c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Ke(c, f2);
        var g2 = Ke(
          c,
          d
        );
        e && g2 && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g2.node, g2.offset)) : (b.setEnd(g2.node, g2.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; )
      1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++)
      a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a])
    return Xe[a];
  if (!We[a])
    return a;
  var b = We[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Ye)
      return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b)
        for (var g2 = d.length - 1; 0 <= g2; g2--) {
          var h = d[g2], k2 = h.instance, l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d.length; g2++) {
          h = d[g2];
          k2 = h.instance;
          l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d)
    a:
      for (; ; ) {
        if (null === d)
          return;
        var g2 = d.tag;
        if (3 === g2 || 4 === g2) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e)
            break;
          if (4 === g2)
            for (g2 = d.return; null !== g2; ) {
              var k2 = g2.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g2.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                  return;
              }
              g2 = g2.return;
            }
          for (; null !== h; ) {
            g2 = Wc(h);
            if (null === g2)
              return;
            k2 = g2.tag;
            if (5 === k2 || 6 === k2) {
              d = f2 = g2;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Jb(function() {
    var d2 = f2, e2 = xb(c), g3 = [];
    a: {
      var h2 = df.get(a);
      if (void 0 !== h2) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g3.push({ event: h2, listeners: t2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue(k3);
            u2 = null == n2 ? h2 : ue(n2);
            h2 = new t2(F2, w2 + "leave", k3, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g3, h2, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type)
          var na = ve;
        else if (me(h2))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g3, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable)
            Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c, e2);
      }
      var $a;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g3.push({ event: e2, listeners: d2 }), e2.data = $a);
    }
    se(g3, b);
  });
}
function tf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f2 = b._reactName, g2 = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d)
      break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g2.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g2.push(tf(c, k2, h))));
    c = c.return;
  }
  0 !== g2.length && a.push({ event: b, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c)
    throw Error(p$1(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType)
      if (c = e.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e);
          bd(b);
          return;
        }
        d--;
      } else
        "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b)
      break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b)
        break;
      if ("/$" === b)
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b)
          return a;
        b--;
      } else
        "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child)
        for (a = Mf(a); null !== a; ) {
          if (c = a[Of])
            return c;
          a = Mf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(p$1(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c)
    e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf)
    throw Error(p$1(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext)
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in b))
      throw Error(p$1(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(p$1(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - oc(b) + e;
  if (30 < f2) {
    var g2 = e - e % 5;
    f2 = (d & (1 << g2) - 1).toString(32);
    d >>= g2;
    e -= g2;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f2 + a;
  } else
    rg = 1 << f2 | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a))
          throw Error(p$1(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p$1(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I)
    return Fg(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a))
      throw Hg(), Error(p$1(418));
    for (; b; )
      Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(p$1(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else
            "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b = Mg.current;
  E(Mg);
  a._currentValue = b;
}
function Sg(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c)
      break;
    a = a.return;
  }
}
function Tg(a, b) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b = a._currentValue;
  if (Pg !== a)
    if (a = { context: a, memoizedValue: b, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p$1(308));
      Og = a;
      Ng.dependencies = { lanes: 0, firstContext: a };
    } else
      Og = Og.next = a;
  return b;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b, c, d) {
  var e = b.interleaved;
  null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return Zg(a, d);
}
function Zg(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var $g = false;
function ah(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function ch(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function dh(a, b, c) {
  var d = a.updateQueue;
  if (null === d)
    return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return Zg(a, c);
  }
  e = d.interleaved;
  null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return Zg(a, c);
}
function eh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function fh(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g2 = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g2 : f2 = f2.next = g2;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b : f2 = f2.next = b;
    } else
      e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function gh(a, b, c, d) {
  var e = a.updateQueue;
  $g = false;
  var f2 = e.firstBaseUpdate, g2 = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g2 && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
      h = h.next;
      if (null === h)
        if (h = e.shared.pending, null === h)
          break;
        else
          r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do
        g2 |= e.lane, e = e.next;
      while (e !== b);
    } else
      null === f2 && (e.shared.lanes = 0);
    hh |= g2;
    a.lanes = g2;
    a.memoizedState = q2;
  }
}
function ih(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e)
          throw Error(p$1(191, e));
        e.call(d);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var nh = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e = lh(a), f2 = ch(d, e);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e);
  null !== b && (mh(b, a, e, d), eh(b, a, e));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e = lh(a), f2 = ch(d, e);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e);
  null !== b && (mh(b, a, e, d), eh(b, a, e));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = L(), d = lh(a), e = ch(c, d);
  e.tag = 2;
  void 0 !== b && null !== b && (e.callback = b);
  b = dh(a, e, d);
  null !== b && (mh(b, a, d, c), eh(b, a, d));
} };
function oh(a, b, c, d, e, f2, g2) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g2) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
}
function ph(a, b, c) {
  var d = false, e = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = nh;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function qh(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
}
function rh(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = jh;
  ah(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = Vg(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a, b, f2, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag)
          throw Error(p$1(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(p$1(147, a));
      var e = d, f2 = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
        return b.ref;
      b = function(a2) {
        var b2 = e.refs;
        b2 === jh && (b2 = e.refs = {});
        null === a2 ? delete b2[f2] : b2[f2] = a2;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a)
      throw Error(p$1(284));
    if (!c._owner)
      throw Error(p$1(290, a));
  }
  return a;
}
function th(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p$1(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function uh(a) {
  var b = a._init;
  return b(a._payload);
}
function vh(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; null !== d2; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
      null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = wh(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2)
      return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g2(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag)
      return b2 = xh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya)
      return m2(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b2.type))
      return d2 = e(b2, c2.props), d2.ref = sh(a2, b2, c2), d2.return = a2, d2;
    d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = sh(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = zh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag)
      return b2 = Ah(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
      return b2 = xh("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c2 = yh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = sh(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = zh(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2))
        return b2 = Ah(b2, a2.mode, c2, null), b2.return = a2, b2;
      th(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e2 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
      return null !== e2 ? null : h(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(
            a2,
            b2,
            e2(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2))
        return null !== e2 ? null : m2(a2, b2, c2, d2, null);
      th(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b2, c2, f3(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2))
        return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
      th(b2, d2);
    }
    return null;
  }
  function n2(e2, g3, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b(e2, u2);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h2.length)
      return c(e2, u2), I && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++)
        u2 = q2(e2, h2[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++)
      x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function t2(e2, g3, h2, k3) {
    var l3 = Ka(h2);
    if ("function" !== typeof l3)
      throw Error(p$1(150));
    h2 = l3.call(h2);
    if (null == h2)
      throw Error(p$1(151));
    for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b(e2, m3);
      g3 = f2(t3, g3, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c(
        e2,
        m3
      ), I && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h2.next())
        n3 = q2(e2, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e2, w2);
      return l3;
    }
    for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next())
      n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = sh(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else
                b(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Ah(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = yh(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = sh(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g2(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3)
                if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = zh(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g2(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
      }
      if (eb(f3))
        return n2(a2, d2, f3, h2);
      if (Ka(f3))
        return t2(a2, d2, f3, h2);
      th(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f3, a2.mode, h2), d2.return = a2, a2 = d2), g2(a2)) : c(a2, d2);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh)
    throw Error(p$1(174));
  return a;
}
function Ih(a, b) {
  G(Gh, b);
  G(Fh, a);
  G(Eh, Dh);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(Eh);
  G(Eh, b);
}
function Jh() {
  E(Eh);
  E(Fh);
  E(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b = Hh(Eh.current);
  var c = lb(b, a.type);
  b !== c && (G(Fh, a), G(Eh, c));
}
function Lh(a) {
  Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
        return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128))
        return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++)
    Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q() {
  throw Error(p$1(321));
}
function Wh(a, b) {
  if (null === b)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Xh(a, b, c, d, e, f2) {
  Rh = f2;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
  a = c(d, e);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p$1(301));
      f2 += 1;
      P = O = null;
      b.updateQueue = null;
      Ph.current = $h;
      a = c(d, e);
    } while (Th);
  }
  Ph.current = ai;
  b = null !== O && null !== O.next;
  Rh = 0;
  P = O = N = null;
  Sh = false;
  if (b)
    throw Error(p$1(300));
  return a;
}
function bi() {
  var a = 0 !== Uh;
  Uh = 0;
  return a;
}
function ci() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function di() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = O.next;
  var b = null === P ? N.memoizedState : P.next;
  if (null !== b)
    P = b, O = a;
  else {
    if (null === a)
      throw Error(p$1(310));
    O = a;
    a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function ei(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function fi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p$1(311));
  c.lastRenderedReducer = a;
  var d = O, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g2 = e.next;
      e.next = f2.next;
      f2.next = g2;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d = d.baseState;
    var h = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g2 = d) : k2 = k2.next = q2;
        N.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d : k2.next = h;
    He(d, b.memoizedState) || (Ug = true);
    b.memoizedState = d;
    b.baseState = g2;
    b.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, N.lanes |= f2, hh |= f2, e = e.next;
    while (e !== a);
  } else
    null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function gi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p$1(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g2 = e = e.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e);
    He(f2, b.memoizedState) || (Ug = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function hi() {
}
function ii(a, b) {
  var c = N, d = di(), e = b(), f2 = !He(d.memoizedState, e);
  f2 && (d.memoizedState = e, Ug = true);
  d = d.queue;
  ji(ki.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f2 || null !== P && P.memoizedState.tag & 1) {
    c.flags |= 2048;
    li(9, mi.bind(null, c, d, e, b), void 0, null);
    if (null === R)
      throw Error(p$1(349));
    0 !== (Rh & 30) || ni(c, b, e);
  }
  return e;
}
function ni(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function mi(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  oi(b) && pi(a);
}
function ki(a, b, c) {
  return c(function() {
    oi(b) && pi(a);
  });
}
function oi(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function pi(a) {
  var b = Zg(a, 1);
  null !== b && mh(b, a, 1, -1);
}
function qi(a) {
  var b = ci();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ri.bind(null, N, a);
  return [b.memoizedState, a];
}
function li(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b, c, d) {
  var e = ci();
  N.flags |= a;
  e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
}
function ui(a, b, c, d) {
  var e = di();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== O) {
    var g2 = O.memoizedState;
    f2 = g2.destroy;
    if (null !== d && Wh(d, g2.deps)) {
      e.memoizedState = li(b, c, f2, d);
      return;
    }
  }
  N.flags |= a;
  e.memoizedState = li(1 | b, c, f2, d);
}
function vi(a, b) {
  return ti(8390656, 8, a, b);
}
function ji(a, b) {
  return ui(2048, 8, a, b);
}
function wi(a, b) {
  return ui(4, 2, a, b);
}
function xi(a, b) {
  return ui(4, 4, a, b);
}
function yi(a, b) {
  if ("function" === typeof b)
    return a = a(), b(a), function() {
      b(null);
    };
  if (null !== b && void 0 !== b)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function zi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b, a), c);
}
function Ai() {
}
function Bi(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function Ci(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function Di(a, b, c) {
  if (0 === (Rh & 21))
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
  He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = true);
  return b;
}
function Ei(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Qh.transition;
  Qh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Qh.transition = d;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b, c) {
  var d = lh(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, c);
  else if (c = Yg(a, b, c, d), null !== c) {
    var e = L();
    mh(c, a, d, e);
    Ji(c, b, d);
  }
}
function ri(a, b, c) {
  var d = lh(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
      try {
        var g2 = b.lastRenderedState, h = f2(g2, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He(h, g2)) {
          var k2 = b.interleaved;
          null === k2 ? (e.next = e, Xg(b)) : (e.next = k2.next, k2.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c = Yg(a, b, e, d);
    null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
  }
}
function Hi(a) {
  var b = a.alternate;
  return a === N || null !== b && b === N;
}
function Ii(a, b) {
  Th = Sh = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Ji(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b) {
  ci().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return ti(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ti(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = ci();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = ci();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = Gi.bind(null, N, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = ci();
  a = { current: a };
  return b.memoizedState = a;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
  return ci().memoizedState = a;
}, useTransition: function() {
  var a = qi(false), b = a[0];
  a = Ei.bind(null, a[1]);
  ci().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = N, e = ci();
  if (I) {
    if (void 0 === c)
      throw Error(p$1(407));
    c = c();
  } else {
    c = b();
    if (null === R)
      throw Error(p$1(349));
    0 !== (Rh & 30) || ni(d, b, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e.queue = f2;
  vi(ki.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  li(9, mi.bind(null, d, f2, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = ci(), b = R.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Uh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else
    c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a) {
    var b = di();
    return Di(b, O.memoizedState, a);
  },
  useTransition: function() {
    var a = fi(ei)[0], b = di().memoizedState;
    return [a, b];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a) {
  var b = di();
  return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
}, useTransition: function() {
  var a = gi(ei)[0], b = di().memoizedState;
  return [a, b];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e, digest: null };
}
function Li(a, b, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
function Mi(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Pi || (Pi = true, Qi = d);
    Mi(a, b);
  };
  return c;
}
function Ri(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Mi(a, b);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Mi(a, b);
    "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Ti(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Ni();
    var e = /* @__PURE__ */ new Set();
    d.set(b, e);
  } else
    e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
}
function Vi(a) {
  do {
    var b;
    if (b = 13 === a.tag)
      b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b)
      return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi(a, b, c, d, e) {
  if (0 === (a.mode & 1))
    return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a, b, c, d) {
  b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
}
function Zi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  Tg(b, e);
  d = Xh(a, b, c, d, f2, e);
  c = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && c && vg(b);
  b.flags |= 1;
  Yi(a, b, d, e);
  return b.child;
}
function aj(a, b, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
      return b.tag = 15, b.type = f2, cj(a, b, f2, d, e);
    a = yh(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g2 = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g2, d) && a.ref === b.ref)
      return $i(a, b, e);
  }
  b.flags |= 1;
  a = wh(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function cj(a, b, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b.ref)
      if (Ug = false, b.pendingProps = d = f2, 0 !== (a.lanes & e))
        0 !== (a.flags & 131072) && (Ug = true);
      else
        return b.lanes = a.lanes, $i(a, b, e);
  }
  return dj(a, b, c, d, e);
}
function ej(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode)
    if (0 === (b.mode & 1))
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c;
    else {
      if (0 === (c & 1073741824))
        return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(fj, gj), gj |= a, null;
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f2 ? f2.baseLanes : c;
      G(fj, gj);
      gj |= d;
    }
  else
    null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
  Yi(a, b, e, c);
  return b.child;
}
function hj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c)
    b.flags |= 512, b.flags |= 2097152;
}
function dj(a, b, c, d, e) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b, f2);
  Tg(b, e);
  c = Xh(a, b, c, d, f2, e);
  d = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && d && vg(b);
  b.flags |= 1;
  Yi(a, b, c, e);
  return b.child;
}
function ij(a, b, c, d, e) {
  if (Zf(c)) {
    var f2 = true;
    cg(b);
  } else
    f2 = false;
  Tg(b, e);
  if (null === b.stateNode)
    jj(a, b), ph(b, c, d), rh(b, c, d, e), d = true;
  else if (null === a) {
    var g2 = b.stateNode, h = b.memoizedProps;
    g2.props = h;
    var k2 = g2.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h !== d || k2 !== l2) && qh(b, g2, d, l2);
    $g = false;
    var r2 = b.memoizedState;
    g2.state = r2;
    gh(b, d, g2, e);
    k2 = b.memoizedState;
    h !== d || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b, c, m2, d), k2 = b.memoizedState), (h = $g || oh(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g2.props = d, g2.state = k2, g2.context = l2, d = h) : ("function" === typeof g2.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g2 = b.stateNode;
    bh(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : Lg(b.type, h);
    g2.props = l2;
    q2 = b.pendingProps;
    r2 = g2.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h !== q2 || r2 !== k2) && qh(b, g2, d, k2);
    $g = false;
    r2 = b.memoizedState;
    g2.state = r2;
    gh(b, d, g2, e);
    var n2 = b.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b, c, y2, d), n2 = b.memoizedState), (l2 = $g || oh(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g2.componentDidUpdate && (b.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g2.props = d, g2.state = n2, g2.context = k2, d = l2) : ("function" !== typeof g2.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return kj(a, b, c, d, f2, e);
}
function kj(a, b, c, d, e, f2) {
  hj(a, b);
  var g2 = 0 !== (b.flags & 128);
  if (!d && !g2)
    return e && dg(b, c, false), $i(a, b, f2);
  d = b.stateNode;
  Xi.current = b;
  var h = g2 && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g2 ? (b.child = Bh(b, a.child, null, f2), b.child = Bh(b, null, h, f2)) : Yi(a, b, h, f2);
  b.memoizedState = d.state;
  e && dg(b, c, true);
  return b.child;
}
function lj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  Ih(a, b.containerInfo);
}
function mj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Yi(a, b, c, d);
  return b.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function pj(a, b, c) {
  var d = b.pendingProps, e = M.current, f2 = false, g2 = 0 !== (b.flags & 128), h;
  (h = g2) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h)
    f2 = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState)
    e |= 1;
  G(M, e & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a))
      return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g2 = d.children;
    a = d.fallback;
    return f2 ? (d = b.mode, f2 = b.child, g2 = { mode: "hidden", children: g2 }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d, 0, null), a = Ah(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g2);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h))
    return sj(a, b, g2, d, h, e, c);
  if (f2) {
    f2 = d.fallback;
    g2 = b.mode;
    e = a.child;
    h = e.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g2 & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = wh(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f2 = wh(h, f2) : (f2 = Ah(f2, g2, c, null), f2.flags |= 2);
    f2.return = b;
    d.return = b;
    d.sibling = f2;
    b.child = d;
    d = f2;
    f2 = b.child;
    g2 = a.child.memoizedState;
    g2 = null === g2 ? oj(c) : { baseLanes: g2.baseLanes | c, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a.childLanes & ~c;
    b.memoizedState = nj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = wh(f2, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function rj(a, b) {
  b = qj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function tj(a, b, c, d) {
  null !== d && Jg(d);
  Bh(b, a.child, null, c);
  a = rj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function sj(a, b, c, d, e, f2, g2) {
  if (c) {
    if (b.flags & 256)
      return b.flags &= -257, d = Li(Error(p$1(422))), tj(a, b, g2, d);
    if (null !== b.memoizedState)
      return b.child = a.child, b.flags |= 128, null;
    f2 = d.fallback;
    e = b.mode;
    d = qj({ mode: "visible", children: d.children }, e, 0, null);
    f2 = Ah(f2, e, g2, null);
    f2.flags |= 2;
    d.return = b;
    f2.return = b;
    d.sibling = f2;
    b.child = d;
    0 !== (b.mode & 1) && Bh(b, a.child, null, g2);
    b.child.memoizedState = oj(g2);
    b.memoizedState = nj;
    return f2;
  }
  if (0 === (b.mode & 1))
    return tj(a, b, g2, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d)
      var h = d.dgst;
    d = h;
    f2 = Error(p$1(419));
    d = Li(f2, d, void 0);
    return tj(a, b, g2, d);
  }
  h = 0 !== (g2 & a.childLanes);
  if (Ug || h) {
    d = R;
    if (null !== d) {
      switch (g2 & -g2) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g2)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, Zg(a, e), mh(d, a, e, -1));
    }
    uj();
    d = Li(Error(p$1(421)));
    return tj(a, b, g2, d);
  }
  if ("$?" === e.data)
    return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = rj(b, d.children);
  b.flags |= 4096;
  return b;
}
function wj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  Sg(a.return, b, c);
}
function xj(a, b, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function yj(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  Yi(a, b, d.children, c);
  d = M.current;
  if (0 !== (d & 2))
    d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && wj(a, c, b);
          else if (19 === a.tag)
            wj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  G(M, d);
  if (0 === (b.mode & 1))
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; )
          a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        xj(b, false, e, c, f2);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Mh(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        xj(b, true, c, null, f2);
        break;
      case "together":
        xj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function jj(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $i(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  hh |= b.lanes;
  if (0 === (c & b.childLanes))
    return null;
  if (null !== a && b.child !== a.child)
    throw Error(p$1(153));
  if (null !== b.child) {
    a = b.child;
    c = wh(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; )
      a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function zj(a, b, c) {
  switch (b.tag) {
    case 3:
      lj(b);
      Ig();
      break;
    case 5:
      Kh(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      Ih(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e = b.memoizedProps.value;
      G(Mg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated)
          return G(M, M.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes))
          return pj(a, b, c);
        G(M, M.current & 1);
        a = $i(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(M, M.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d)
          return yj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(M, M.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b.lanes = 0, ej(a, b, c);
  }
  return $i(a, b, c);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag)
      a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e = A({}, e, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g2;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
        if ("style" === l2) {
          var h = e[l2];
          for (g2 in h)
            h.hasOwnProperty(g2) && (c || (c = {}), c[g2] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h))
        if ("style" === l2)
          if (h) {
            for (g2 in h)
              !h.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c || (c = {}), c[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h[g2] !== k2[g2] && (c || (c = {}), c[g2] = k2[g2]);
          } else
            c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Dj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Ej(a, b) {
  if (!I)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; )
          null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b)
    for (var e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else
    for (e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Fj(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      Jh();
      E(Wf);
      E(H);
      Oh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child)
        Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b);
      S(b);
      return null;
    case 5:
      Lh(b);
      var e = Hh(Gh.current);
      c = b.type;
      if (null !== a && null != b.stateNode)
        Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode)
            throw Error(p$1(166));
          S(b);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f2;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++)
                D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h = f2[g2];
              "children" === g2 ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                d.textContent,
                h,
                a
              ), e = ["children", "" + h]) : ea.hasOwnProperty(g2) && null != h && "onScroll" === g2 && D("scroll", d);
            }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g2 = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g2.createElement(c, { is: d.is }) : (a = g2.createElement(c), "select" === c && (g2 = a, d.multiple ? g2.multiple = true : d.size && (g2.size = d.size))) : a = g2.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          Aj(a, b, false, false);
          b.stateNode = a;
          a: {
            g2 = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++)
                  D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f2 in h)
              if (h.hasOwnProperty(f2)) {
                var k2 = h[f2];
                "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g2));
              }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode)
        Dj(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode)
          throw Error(p$1(166));
        c = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a)
              switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
          }
          f2 && (b.flags |= 4);
        } else
          d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(M);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
          Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2)
              throw Error(p$1(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p$1(317));
            f2[Of] = b;
          } else
            Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128))
        return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return Rg(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(M);
      f2 = b.memoizedState;
      if (null === f2)
        return S(b), null;
      d = 0 !== (b.flags & 128);
      g2 = f2.rendering;
      if (null === g2)
        if (d)
          Ej(f2, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128))
            for (a = b.child; null !== a; ) {
              g2 = Mh(a);
              if (null !== g2) {
                b.flags |= 128;
                Ej(f2, false);
                d = g2.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; )
                  f2 = c, a = d, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(M, M.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          null !== f2.tail && B() > Hj && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        }
      else {
        if (!d)
          if (a = Mh(g2), null !== a) {
            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I)
              return S(b), null;
          } else
            2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b.child, b.child = g2) : (c = f2.last, null !== c ? c.sibling = g2 : b.child = g2, f2.last = g2);
      }
      if (null !== f2.tail)
        return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$1(156, b.tag));
}
function Jj(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Lh(b), null;
    case 13:
      E(M);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate)
          throw Error(p$1(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a, b) {
  var c = a.ref;
  if (null !== c)
    if ("function" === typeof c)
      try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
    else
      c.current = null;
}
function Nj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Oj = false;
function Pj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a)
      var c = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e = d.anchorOffset, f2 = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f2.nodeType;
          } catch (F2) {
            c = null;
            break a;
          }
          var g2 = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g2 + e);
                q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g2 + d);
                3 === q2.nodeType && (g2 += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c && ++l2 === e && (h = g2);
                r2 === f2 && ++m2 === d && (k2 = g2);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
        } else
          c = null;
      }
    c = c || { start: 0, end: 0 };
  } else
    c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b; null !== V; )
    if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
      a.return = b, V = a;
    else
      for (; null !== V; ) {
        b = V;
        try {
          var n2 = b.alternate;
          if (0 !== (b.flags & 1024))
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Lg(b.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$1(163));
            }
        } catch (F2) {
          W(b, b.return, F2);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Nj(b, c, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Rj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Sj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Tj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Tj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a))
    for (Wj(a, b, c), a = a.sibling; null !== a; )
      Wj(a, b, c), a = a.sibling;
}
function Xj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a))
    for (Xj(a, b, c), a = a.sibling; null !== a; )
      Xj(a, b, c), a = a.sibling;
}
var X = null, Yj = false;
function Zj(a, b, c) {
  for (c = c.child; null !== c; )
    ak(a, b, c), c = c.sibling;
}
function ak(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h) {
    }
  switch (c.tag) {
    case 5:
      U || Mj(c, b);
    case 6:
      var d = X, e = Yj;
      X = null;
      Zj(a, b, c);
      X = d;
      Yj = e;
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Yj;
      X = c.stateNode.containerInfo;
      Yj = true;
      Zj(a, b, c);
      X = d;
      Yj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c, b, g2) : 0 !== (f2 & 4) && Nj(c, b, g2));
          e = e.next;
        } while (e !== d);
      }
      Zj(a, b, c);
      break;
    case 1:
      if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W(c, b, h);
        }
      Zj(a, b, c);
      break;
    case 21:
      Zj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
      break;
    default:
      Zj(a, b, c);
  }
}
function bk(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Lj());
    b.forEach(function(b2) {
      var d = ck.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function dk(a, b) {
  var c = b.deletions;
  if (null !== c)
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f2 = a, g2 = b, h = g2;
        a:
          for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X = h.stateNode;
                Yj = false;
                break a;
              case 3:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h = h.return;
          }
        if (null === X)
          throw Error(p$1(160));
        ak(f2, g2, e);
        X = null;
        Yj = false;
        var k2 = e.alternate;
        null !== k2 && (k2.return = null);
        e.return = null;
      } catch (l2) {
        W(e, b, l2);
      }
    }
  if (b.subtreeFlags & 12854)
    for (b = b.child; null !== b; )
      ek(b, a), b = b.sibling;
}
function ek(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b, a);
      fk(a);
      if (d & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      break;
    case 5:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g2 = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
            vb(h, g2);
            var l2 = vb(h, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var m2 = k2[g2], q2 = k2[g2 + 1];
              "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
            }
            switch (h) {
              case "input":
                bb(e, f2);
                break;
              case "textarea":
                ib(e, f2);
                break;
              case "select":
                var r2 = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e[Pf] = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b, a);
      fk(a);
      if (d & 4) {
        if (null === a.stateNode)
          throw Error(p$1(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b, a);
      fk(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated)
        try {
          bd(b.containerInfo);
        } catch (t2) {
          W(a, a.return, t2);
        }
      break;
    case 4:
      dk(b, a);
      fk(a);
      break;
    case 13:
      dk(b, a);
      fk(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
      d & 4 && bk(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, dk(b, a), U = l2) : dk(b, a);
      fk(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
          for (V = a, m2 = a.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d = r2;
                    c = r2.return;
                    try {
                      b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W(d, c, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g2));
                } catch (t2) {
                  W(a, a.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a, a.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b, a);
      fk(a);
      d & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(
        b,
        a
      ), fk(a);
  }
}
function fk(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Uj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p$1(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f2 = Vj(a);
          Xj(a, f2, e);
          break;
        case 3:
        case 4:
          var g2 = d.stateNode.containerInfo, h = Vj(a);
          Wj(a, h, g2);
          break;
        default:
          throw Error(p$1(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function ik(a, b, c) {
  V = a;
  jk(a);
}
function jk(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e = V, f2 = e.child;
    if (22 === e.tag && d) {
      var g2 = null !== e.memoizedState || Kj;
      if (!g2) {
        var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
        h = Kj;
        var l2 = U;
        Kj = g2;
        if ((U = k2) && !l2)
          for (V = e; null !== V; )
            g2 = V, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e) : null !== k2 ? (k2.return = g2, V = k2) : kk(e);
        for (; null !== f2; )
          V = f2, jk(f2), f2 = f2.sibling;
        V = e;
        Kj = h;
        U = l2;
      }
      lk(a);
    } else
      0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : lk(a);
  }
}
function lk(a) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772))
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U || Rj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U)
                if (null === c)
                  d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b.updateQueue;
              null !== f2 && ih(b, f2, d);
              break;
            case 3:
              var g2 = b.updateQueue;
              if (null !== g2) {
                c = null;
                if (null !== b.child)
                  switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                ih(b, g2, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              if (null === c && b.flags & 4) {
                c = h;
                var k2 = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c.focus();
                    break;
                  case "img":
                    k2.src && (c.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b.memoizedState) {
                var l2 = b.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p$1(163));
          }
        U || b.flags & 512 && Sj(b);
      } catch (r2) {
        W(b, b.return, r2);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function hk(a) {
  for (; null !== V; ) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Rj(4, b);
          } catch (k2) {
            W(b, c, k2);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b, e, k2);
            }
          }
          var f2 = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g2 = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, g2, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
  if (0 === (a.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z)
    return Z & -Z;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a = C;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function mh(a, b, c, d) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p$1(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== R)
    a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b)
      0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Gk(c, Hk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Hk(a, b) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p$1(327));
  var c = a.callbackNode;
  if (Ik() && a.callbackNode !== c)
    return null;
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
    b = Jk(a, d);
  else {
    b = d;
    var e = K;
    K |= 2;
    var f2 = Kk();
    if (R !== a || Z !== b)
      vk = null, Hj = B() + 500, Lk(a, b);
    do
      try {
        Mk();
        break;
      } catch (h) {
        Nk(a, h);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e;
    null !== Y ? b = 0 : (R = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
    if (1 === b)
      throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
    if (6 === b)
      Dk(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Ok(a, f2))), 1 === b))
        throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p$1(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d);
          if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0))
              break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              L();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d);
          if ((d & 4194240) === d)
            break;
          b = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g2 = 31 - oc(d);
            f2 = 1 << g2;
            g2 = b[g2];
            g2 > e && (e = g2);
            d &= ~f2;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p$1(329));
      }
    }
  }
  Ek(a, B());
  return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b) {
  var c = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
  a = Jk(a, b);
  2 !== a && (b = uk, uk = c, null !== b && Gj(b));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c))
        for (var d = 0; d < c.length; d++) {
          var e = c[d], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f2(), e))
              return false;
          } catch (g2) {
            return false;
          }
        }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c)
      c.return = b, b = c;
    else {
      if (b === a)
        break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a)
          return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Dk(a, b) {
  b &= ~sk;
  b &= ~rk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Fk(a) {
  if (0 !== (K & 6))
    throw Error(p$1(327));
  Ik();
  var b = uc(a, 0);
  if (0 === (b & 1))
    return Ek(a, B()), null;
  var c = Jk(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Ok(a, d));
  }
  if (1 === c)
    throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
  if (6 === c)
    throw Error(p$1(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Qk(a, uk, vk);
  Ek(a, B());
  return null;
}
function Rk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b = K;
  K |= 1;
  var c = pk.transition, d = C;
  try {
    if (pk.transition = null, C = 1, a)
      return a();
  } finally {
    C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E(fj);
}
function Lk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y)
    for (c = Y.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          Jh();
          E(Wf);
          E(H);
          Oh();
          break;
        case 5:
          Lh(d);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E(M);
          break;
        case 19:
          E(M);
          break;
        case 10:
          Rg(d.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c = c.return;
    }
  R = a;
  Y = a = wh(a.current, null);
  Z = gj = b;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b = 0; b < Wg.length; b++)
      if (c = Wg[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f2 = c.pending;
        if (null !== f2) {
          var g2 = f2.next;
          f2.next = e;
          d.next = g2;
        }
        c.pending = d;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b) {
  do {
    var c = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d = N.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Sh = false;
      }
      Rh = 0;
      P = O = N = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c || null === c.return) {
        T = 1;
        qk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g2 = c.return, h = c, k2 = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g2);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g2, h, f2, b);
            y2.mode & 1 && Ti(f2, l2, b);
            b = y2;
            k2 = l2;
            var n2 = b.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Ti(f2, l2, b);
              uj();
              break a;
            }
            k2 = Error(p$1(426));
          }
        } else if (I && h.mode & 1) {
          var J2 = Vi(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g2, h, f2, b);
            Jg(Ki(k2, h));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h);
        4 !== T && (T = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Oi(f2, k2, b);
              fh(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Ri(f2, h, b);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return null === a ? ai : a;
}
function uj() {
  if (0 === T || 3 === T || 2 === T)
    T = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b) {
  var c = K;
  K |= 2;
  var d = Kk();
  if (R !== a || Z !== b)
    vk = null, Lk(a, b);
  do
    try {
      Uk();
      break;
    } catch (e) {
      Nk(a, e);
    }
  while (1);
  Qg();
  K = c;
  nk.current = d;
  if (null !== Y)
    throw Error(p$1(261));
  R = null;
  Z = 0;
  return T;
}
function Uk() {
  for (; null !== Y; )
    Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc(); )
    Vk(Y);
}
function Vk(a) {
  var b = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b ? Tk(a) : Y = b;
  ok.current = null;
}
function Tk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Fj(c, b, gj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Jj(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Qk(a, b, c) {
  var d = C, e = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a, b, c, d);
  } finally {
    pk.transition = e, C = d;
  }
  return null;
}
function Xk(a, b, c, d) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p$1(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(p$1(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === R && (Y = R = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g2 = C;
    C = 1;
    var h = K;
    K |= 4;
    ok.current = null;
    Pj(a, c);
    ek(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    ik(c);
    dc();
    K = h;
    C = g2;
    pk.transition = f2;
  } else
    a.current = c;
  wk && (wk = false, xk = a, yk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Si = null);
  mc(c.stateNode);
  Ek(a, B());
  if (null !== b)
    for (d = a.onRecoverableError, c = 0; c < b.length; c++)
      e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
  if (Pi)
    throw Pi = false, a = Qi, Qi = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc(yk), b = pk.transition, c = C;
    try {
      pk.transition = null;
      C = 16 > a ? 16 : a;
      if (null === xk)
        var d = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p$1(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g2 = f2.child;
          if (0 !== (V.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V = q2;
                  else
                    for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
            g2.return = f2, V = g2;
          else
            b:
              for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g2 = V;
          var u2 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
            u2.return = g2, V = u2;
          else
            b:
              for (g2 = w2; null !== V; ) {
                h = V;
                if (0 !== (h.flags & 2048))
                  try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                if (h === g2) {
                  V = null;
                  break b;
                }
                var F2 = h.sibling;
                if (null !== F2) {
                  F2.return = h.return;
                  V = F2;
                  break b;
                }
                V = h.return;
              }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
        d = true;
      }
      return d;
    } finally {
      C = c, pk.transition = b;
    }
  }
  return false;
}
function Yk(a, b, c) {
  b = Ki(c, b);
  b = Oi(a, b, 1);
  a = dh(a, b, 1);
  b = L();
  null !== a && (Ac(a, 1, b), Ek(a, b));
}
function W(a, b, c) {
  if (3 === a.tag)
    Yk(a, a, c);
  else
    for (; null !== b; ) {
      if (3 === b.tag) {
        Yk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
          a = Ki(c, a);
          a = Ri(b, a, 1);
          b = dh(b, a, 1);
          a = L();
          null !== b && (Ac(b, 1, a), Ek(b, a));
          break;
        }
      }
      b = b.return;
    }
}
function Ui(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = L();
  a.pingedLanes |= a.suspendedLanes & c;
  R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
  Ek(a, b);
}
function Zk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = L();
  a = Zg(a, b);
  null !== a && (Ac(a, b, c), Ek(a, c));
}
function vj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Zk(a, c);
}
function ck(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p$1(314));
  }
  null !== d && d.delete(b);
  Zk(a, c);
}
var Wk;
Wk = function(a, b, c) {
  if (null !== a)
    if (a.memoizedProps !== b.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128))
        return Ug = false, zj(a, b, c);
      Ug = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    Ug = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      jj(a, b);
      a = b.pendingProps;
      var e = Yf(b, H.current);
      Tg(b, c);
      e = Xh(null, b, d, a, e, c);
      var f2 = bi();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Yi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        jj(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = $k(d);
        a = Lg(d, a);
        switch (e) {
          case 0:
            b = dj(null, b, d, a, c);
            break a;
          case 1:
            b = ij(null, b, d, a, c);
            break a;
          case 11:
            b = Zi(null, b, d, a, c);
            break a;
          case 14:
            b = aj(null, b, d, Lg(d.type, a), c);
            break a;
        }
        throw Error(p$1(
          306,
          d,
          ""
        ));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
    case 3:
      a: {
        lj(b);
        if (null === a)
          throw Error(p$1(387));
        d = b.pendingProps;
        f2 = b.memoizedState;
        e = f2.element;
        bh(a, b);
        gh(b, d, null, c);
        var g2 = b.memoizedState;
        d = g2.element;
        if (f2.isDehydrated)
          if (f2 = { element: d, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
            e = Ki(Error(p$1(423)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ki(Error(p$1(424)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else
            for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Ch(b, null, d, c), b.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b = $i(a, b, c);
            break a;
          }
          Yi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e.children, Ef(d, e) ? g2 = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), hj(a, b), Yi(a, b, g2, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return pj(a, b, c);
    case 4:
      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
    case 7:
      return Yi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f2 = b.memoizedProps;
        g2 = e.value;
        G(Mg, d._currentValue);
        d._currentValue = g2;
        if (null !== f2)
          if (He(f2.value, g2)) {
            if (f2.children === e.children && !Wf.current) {
              b = $i(a, b, c);
              break a;
            }
          } else
            for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
              var h = f2.dependencies;
              if (null !== h) {
                g2 = f2.child;
                for (var k2 = h.firstContext; null !== k2; ) {
                  if (k2.context === d) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c & -c);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c);
                    Sg(
                      f2.return,
                      c,
                      b
                    );
                    h.lanes |= c;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g2 = f2.type === b.type ? null : f2.child;
              else if (18 === f2.tag) {
                g2 = f2.return;
                if (null === g2)
                  throw Error(p$1(341));
                g2.lanes |= c;
                h = g2.alternate;
                null !== h && (h.lanes |= c);
                Sg(g2, c, b);
                g2 = f2.sibling;
              } else
                g2 = f2.child;
              if (null !== g2)
                g2.return = f2;
              else
                for (g2 = f2; null !== g2; ) {
                  if (g2 === b) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (null !== f2) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
              f2 = g2;
            }
        Yi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
    case 15:
      return cj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, true, a, c);
    case 19:
      return yj(a, b, c);
    case 22:
      return ej(a, b, c);
  }
  throw Error(p$1(156, b.tag));
};
function Gk(a, b) {
  return ac(a, b);
}
function al(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new al(a, b, c, d);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a)
    return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da)
      return 11;
    if (a === Ga)
      return 14;
  }
  return 2;
}
function wh(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function yh(a, b, c, d, e, f2) {
  var g2 = 2;
  d = a;
  if ("function" === typeof a)
    bj(a) && (g2 = 1);
  else if ("string" === typeof a)
    g2 = 5;
  else
    a:
      switch (a) {
        case ya:
          return Ah(c.children, e, f2, b);
        case za:
          g2 = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return qj(c, e, f2, b);
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Ba:
                g2 = 10;
                break a;
              case Ca:
                g2 = 9;
                break a;
              case Da:
                g2 = 11;
                break a;
              case Ga:
                g2 = 14;
                break a;
              case Ha:
                g2 = 16;
                d = null;
                break a;
            }
          throw Error(p$1(130, null == a ? a : typeof a, ""));
      }
  b = Bg(g2, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Ah(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function qj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function xh(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function zh(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function bl(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b, c, d, e, f2, g2, h, k2) {
  a = new bl(a, b, c, h, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a;
}
function dl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function el(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag)
      throw Error(p$1(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p$1(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c))
      return bg(a, c, b);
  }
  return b;
}
function fl(a, b, c, d, e, f2, g2, h, k2) {
  a = cl(c, d, true, a, e, f2, g2, h, k2);
  a.context = el(null);
  c = a.current;
  d = L();
  e = lh(c);
  f2 = ch(d, e);
  f2.callback = void 0 !== b && null !== b ? b : null;
  dh(c, f2, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Ek(a, d);
  return a;
}
function gl(a, b, c, d) {
  var e = b.current, f2 = L(), g2 = lh(e);
  c = el(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = ch(f2, g2);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = dh(e, b, g2);
  null !== a && (mh(a, e, g2, f2), eh(a, e, g2));
  return g2;
}
function hl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function jl(a, b) {
  il(a, b);
  (a = a.alternate) && il(a, b);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b)
    throw Error(p$1(409));
  gl(a, b, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Sk(function() {
      gl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++)
      ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {
}
function rl(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = hl(g2);
        f2.call(a2);
      };
    }
    var g2 = fl(b, d, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g2;
    a[uf] = g2.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g2;
  }
  for (; e = a.lastChild; )
    a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = hl(k2);
      h.call(a2);
    };
  }
  var k2 = cl(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function() {
    gl(b, k2, c, d);
  });
  return k2;
}
function sl(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = hl(g2);
        h.call(a2);
      };
    }
    gl(b, g2, a, e);
  } else
    g2 = rl(c, b, a, e, d);
  return hl(g2);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b2 = Zg(a, 1);
        if (null !== b2) {
          var c2 = L();
          mh(b2, a, 1, c2);
        }
      }), jl(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = Zg(a, 134217728);
    if (null !== b) {
      var c = L();
      mh(b, a, 134217728, c);
    }
    jl(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b = lh(a), c = Zg(a, b);
    if (null !== c) {
      var d = L();
      mh(c, a, b, d);
    }
    jl(a, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(p$1(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b))
    throw Error(p$1(200));
  return dl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!ol(a))
    throw Error(p$1(299));
  var c = false, d = "", e = ll;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = cl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render)
      throw Error(p$1(188));
    a = Object.keys(a).join(",");
    throw Error(p$1(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Sk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!pl(b))
    throw Error(p$1(200));
  return sl(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!ol(a))
    throw Error(p$1(405));
  var d = null != c && c.hydratedSources || null, e = false, f2 = "", g2 = ll;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g2 = c.onRecoverableError));
  b = fl(b, null, a, 1, null != c ? c : null, e, false, f2, g2);
  a[uf] = b.current;
  sf(a);
  if (d)
    for (a = 0; a < d.length; a++)
      c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
        c,
        e
      );
  return new nl(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!pl(b))
    throw Error(p$1(200));
  return sl(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!pl(a))
    throw Error(p$1(40));
  return a._reactRootContainer ? (Sk(function() {
    sl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!pl(c))
    throw Error(p$1(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(p$1(38));
  return sl(a, b, c, false, d);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var m = reactDomExports;
{
  client$1.createRoot = m.createRoot;
  client$1.hydrateRoot = m.hydrateRoot;
}
var withSelector = { exports: {} };
var useSyncExternalStoreWithSelector_production_min = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g = reactExports;
function n(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var p = "function" === typeof Object.is ? Object.is : n, q = g.useSyncExternalStore, r = g.useRef, t = g.useEffect, u = g.useMemo, v = g.useDebugValue;
useSyncExternalStoreWithSelector_production_min.useSyncExternalStoreWithSelector = function(a, b, e, l2, h) {
  var c = r(null);
  if (null === c.current) {
    var f2 = { hasValue: false, value: null };
    c.current = f2;
  } else
    f2 = c.current;
  c = u(function() {
    function a2(a3) {
      if (!c2) {
        c2 = true;
        d2 = a3;
        a3 = l2(a3);
        if (void 0 !== h && f2.hasValue) {
          var b2 = f2.value;
          if (h(b2, a3))
            return k2 = b2;
        }
        return k2 = a3;
      }
      b2 = k2;
      if (p(d2, a3))
        return b2;
      var e2 = l2(a3);
      if (void 0 !== h && h(b2, e2))
        return b2;
      d2 = a3;
      return k2 = e2;
    }
    var c2 = false, d2, k2, m2 = void 0 === e ? null : e;
    return [function() {
      return a2(b());
    }, null === m2 ? void 0 : function() {
      return a2(m2());
    }];
  }, [b, e, l2, h]);
  var d = q(a, c[0], c[1]);
  t(function() {
    f2.hasValue = true;
    f2.value = d;
  }, [d]);
  v(d);
  return d;
};
{
  withSelector.exports = useSyncExternalStoreWithSelector_production_min;
}
var withSelectorExports = withSelector.exports;
var React = (
  // prettier-ignore
  // @ts-ignore
  "default" in ReactOriginal ? React$1 : ReactOriginal
);
var ContextKey = Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function getContext() {
  if (!React.createContext)
    return {};
  const contextMap = gT[ContextKey] ?? (gT[ContextKey] = /* @__PURE__ */ new Map());
  let realContext = contextMap.get(React.createContext);
  if (!realContext) {
    realContext = React.createContext(
      null
    );
    contextMap.set(React.createContext, realContext);
  }
  return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();
var notInitialized = () => {
  throw new Error("uSES not initialized!");
};
function createReduxContextHook(context = ReactReduxContext) {
  return function useReduxContext2() {
    const contextValue = React.useContext(context);
    return contextValue;
  };
}
var useReduxContext = /* @__PURE__ */ createReduxContextHook();
var useSyncExternalStoreWithSelector = notInitialized;
var initializeUseSelector = (fn) => {
  useSyncExternalStoreWithSelector = fn;
};
var refEquality = (a, b) => a === b;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
  const useSelector2 = (selector, equalityFnOrOptions = {}) => {
    const { equalityFn = refEquality, devModeChecks = {} } = typeof equalityFnOrOptions === "function" ? { equalityFn: equalityFnOrOptions } : equalityFnOrOptions;
    const {
      store: store2,
      subscription,
      getServerState,
      stabilityCheck,
      identityFunctionCheck
    } = useReduxContext2();
    React.useRef(true);
    const wrappedSelector = React.useCallback(
      {
        [selector.name](state) {
          const selected = selector(state);
          return selected;
        }
      }[selector.name],
      [selector, stabilityCheck, devModeChecks.stabilityCheck]
    );
    const selectedState = useSyncExternalStoreWithSelector(
      subscription.addNestedSub,
      store2.getState,
      getServerState || store2.getState,
      wrappedSelector,
      equalityFn
    );
    React.useDebugValue(selectedState);
    return selectedState;
  };
  Object.assign(useSelector2, {
    withTypes: () => useSelector2
  });
  return useSelector2;
}
var useSelector = /* @__PURE__ */ createSelectorHook();
function defaultNoopBatch(callback) {
  callback();
}
function createListenerCollection() {
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      defaultNoopBatch(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      const listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      const listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store2, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  let subscriptionsAmount = 0;
  let selfSubscribed = false;
  function addNestedSub(listener) {
    trySubscribe();
    const cleanupListener = listeners.subscribe(listener);
    let removed = false;
    return () => {
      if (!removed) {
        removed = true;
        cleanupListener();
        tryUnsubscribe();
      }
    };
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return selfSubscribed;
  }
  function trySubscribe() {
    subscriptionsAmount++;
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store2.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    subscriptionsAmount--;
    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true;
      trySubscribe();
    }
  }
  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false;
      tryUnsubscribe();
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners
  };
  return subscription;
}
var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var useIsomorphicLayoutEffect = canUseDOM ? React.useLayoutEffect : React.useEffect;
function Provider({
  store: store2,
  context,
  children,
  serverState,
  stabilityCheck = "once",
  identityFunctionCheck = "once"
}) {
  const contextValue = React.useMemo(() => {
    const subscription = createSubscription(store2);
    return {
      store: store2,
      subscription,
      getServerState: serverState ? () => serverState : void 0,
      stabilityCheck,
      identityFunctionCheck
    };
  }, [store2, serverState, stabilityCheck, identityFunctionCheck]);
  const previousState = React.useMemo(() => store2.getState(), [store2]);
  useIsomorphicLayoutEffect(() => {
    const { subscription } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store2.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ React.createElement(Context.Provider, { value: contextValue }, children);
}
var Provider_default = Provider;
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : (
    // @ts-ignore
    createReduxContextHook(context)
  );
  const useStore2 = () => {
    const { store: store2 } = useReduxContext2();
    return store2;
  };
  Object.assign(useStore2, {
    withTypes: () => useStore2
  });
  return useStore2;
}
var useStore = /* @__PURE__ */ createStoreHook();
function createDispatchHook(context = ReactReduxContext) {
  const useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
  const useDispatch2 = () => {
    const store2 = useStore2();
    return store2.dispatch;
  };
  Object.assign(useDispatch2, {
    withTypes: () => useDispatch2
  });
  return useDispatch2;
}
var useDispatch = /* @__PURE__ */ createDispatchHook();
initializeUseSelector(withSelectorExports.useSyncExternalStoreWithSelector);
function formatProdErrorMessage$1(code) {
  return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;
var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
  INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
var actionTypes_default = ActionTypes;
function isPlainObject$1(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}
function createStore(reducer2, preloadedState, enhancer) {
  if (typeof reducer2 !== "function") {
    throw new Error(formatProdErrorMessage$1(2));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage$1(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage$1(1));
    }
    return enhancer(createStore)(reducer2, preloadedState);
  }
  let currentReducer = reducer2;
  let currentState = preloadedState;
  let currentListeners = /* @__PURE__ */ new Map();
  let nextListeners = currentListeners;
  let listenerIdCounter = 0;
  let isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = /* @__PURE__ */ new Map();
      currentListeners.forEach((listener, key) => {
        nextListeners.set(key, listener);
      });
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage$1(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage$1(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage$1(5));
    }
    let isSubscribed = true;
    ensureCanMutateNextListeners();
    const listenerId = listenerIdCounter++;
    nextListeners.set(listenerId, listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage$1(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      nextListeners.delete(listenerId);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject$1(action)) {
      throw new Error(formatProdErrorMessage$1(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage$1(8));
    }
    if (typeof action.type !== "string") {
      throw new Error(formatProdErrorMessage$1(17));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage$1(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    const listeners = currentListeners = nextListeners;
    listeners.forEach((listener) => {
      listener();
    });
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage$1(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: actionTypes_default.REPLACE
    });
  }
  function observable2() {
    const outerSubscribe = subscribe;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage$1(11));
        }
        function observeState() {
          const observerAsObserver = observer;
          if (observerAsObserver.next) {
            observerAsObserver.next(getState());
          }
        }
        observeState();
        const unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      },
      [symbol_observable_default]() {
        return this;
      }
    };
  }
  dispatch({
    type: actionTypes_default.INIT
  });
  const store2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [symbol_observable_default]: observable2
  };
  return store2;
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach((key) => {
    const reducer2 = reducers[key];
    const initialState = reducer2(void 0, {
      type: actionTypes_default.INIT
    });
    if (typeof initialState === "undefined") {
      throw new Error(formatProdErrorMessage$1(12));
    }
    if (typeof reducer2(void 0, {
      type: actionTypes_default.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(formatProdErrorMessage$1(13));
    }
  });
}
function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);
  let shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }
  return function combination(state = {}, action) {
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    let hasChanged = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer2 = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer2(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        action && action.type;
        throw new Error(formatProdErrorMessage$1(14));
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
function applyMiddleware(...middlewares) {
  return (createStore2) => (reducer2, preloadedState) => {
    const store2 = createStore2(reducer2, preloadedState);
    let dispatch = () => {
      throw new Error(formatProdErrorMessage$1(15));
    };
    const middlewareAPI = {
      getState: store2.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    };
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store2.dispatch);
    return {
      ...store2,
      dispatch
    };
  };
}
function isAction(action) {
  return isPlainObject$1(action) && "type" in action && typeof action.type === "string";
}
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
function die(error, ...args) {
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  var _a;
  if (!value)
    return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!((_a = value.constructor) == null ? void 0 : _a[DRAFTABLE]) || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0) {
    Reflect.ownKeys(obj).forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function set(thing, propOrOldValue, value) {
  const t2 = getArchtype(thing);
  if (t2 === 2)
    thing.set(propOrOldValue, value);
  else if (t2 === 3) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x2, y2) {
  if (x2 === y2) {
    return x2 !== 0 || 1 / x2 === 1 / y2;
  } else {
    return x2 !== x2 && y2 !== y2;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  if (!strict && isPlainObject(base)) {
    if (!getPrototypeOf(base)) {
      const obj = /* @__PURE__ */ Object.create(null);
      return Object.assign(obj, base);
    }
    return { ...base };
  }
  const descriptors = Object.getOwnPropertyDescriptors(base);
  delete descriptors[DRAFT_STATE];
  let keys = Reflect.ownKeys(descriptors);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const desc = descriptors[key];
    if (desc.writable === false) {
      desc.writable = true;
      desc.configurable = true;
    }
    if (desc.get || desc.set)
      descriptors[key] = {
        configurable: true,
        writable: true,
        // could live with !!desc.set as well here...
        enumerable: desc.enumerable,
        value: base[key]
      };
  }
  return Object.create(getPrototypeOf(base), descriptors);
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep)
    Object.entries(obj).forEach(([key, value]) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 || state.type_ === 1)
    state.revoke_();
  else
    state.revoked_ = true;
}
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop))
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc == null ? void 0 : desc.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2 == null ? void 0 : current2[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  var _a;
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (_a = desc.get) == null ? void 0 : _a.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}
var Immer2 = class {
  constructor(config2) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self2 = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self2.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p2 = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p2, ip);
          patchListener(p2, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p2, ip) => {
        patches = p2;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof (config2 == null ? void 0 : config2.autoFreeze) === "boolean")
      this.setAutoFreeze(config2.autoFreeze);
    if (typeof (config2 == null ? void 0 : config2.useStrictShallowCopy) === "boolean")
      this.setUseStrictShallowCopy(config2.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}
var immer = new Immer2();
var produce = immer.produce;
immer.produceWithPatches.bind(
  immer
);
immer.setAutoFreeze.bind(immer);
immer.setUseStrictShallowCopy.bind(immer);
immer.applyPatches.bind(immer);
immer.createDraft.bind(immer);
immer.finishDraft.bind(immer);
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
  if (typeof func !== "function") {
    throw new TypeError(errorMessage);
  }
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
  if (typeof object !== "object") {
    throw new TypeError(errorMessage);
  }
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
  if (!array.every((item) => typeof item === "function")) {
    const itemTypes = array.map(
      (item) => typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item
    ).join(", ");
    throw new TypeError(`${errorMessage}[${itemTypes}]`);
  }
}
var ensureIsArray = (item) => {
  return Array.isArray(item) ? item : [item];
};
function getDependencies(createSelectorArgs) {
  const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
  assertIsArrayOfFunctions(
    dependencies,
    `createSelector expects all input-selectors to be functions, but received the following types: `
  );
  return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
  const inputSelectorResults = [];
  const { length } = dependencies;
  for (let i = 0; i < length; i++) {
    inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
  }
  return inputSelectorResults;
}
var StrongRef = class {
  constructor(value) {
    this.value = value;
  }
  deref() {
    return this.value;
  }
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
  return {
    s: UNTERMINATED,
    v: void 0,
    o: null,
    p: null
  };
}
function weakMapMemoize(func, options = {}) {
  let fnNode = createCacheNode();
  const { resultEqualityCheck } = options;
  let lastResult;
  let resultsCount = 0;
  function memoized() {
    var _a;
    let cacheNode = fnNode;
    const { length } = arguments;
    for (let i = 0, l2 = length; i < l2; i++) {
      const arg = arguments[i];
      if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
        let objectCache = cacheNode.o;
        if (objectCache === null) {
          cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
        }
        const objectNode = objectCache.get(arg);
        if (objectNode === void 0) {
          cacheNode = createCacheNode();
          objectCache.set(arg, cacheNode);
        } else {
          cacheNode = objectNode;
        }
      } else {
        let primitiveCache = cacheNode.p;
        if (primitiveCache === null) {
          cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
        }
        const primitiveNode = primitiveCache.get(arg);
        if (primitiveNode === void 0) {
          cacheNode = createCacheNode();
          primitiveCache.set(arg, cacheNode);
        } else {
          cacheNode = primitiveNode;
        }
      }
    }
    const terminatedNode = cacheNode;
    let result;
    if (cacheNode.s === TERMINATED) {
      result = cacheNode.v;
    } else {
      result = func.apply(null, arguments);
      resultsCount++;
    }
    terminatedNode.s = TERMINATED;
    if (resultEqualityCheck) {
      const lastResultValue = ((_a = lastResult == null ? void 0 : lastResult.deref) == null ? void 0 : _a.call(lastResult)) ?? lastResult;
      if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
        result = lastResultValue;
        resultsCount !== 0 && resultsCount--;
      }
      const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
      lastResult = needsWeakRef ? new Ref(result) : result;
    }
    terminatedNode.v = result;
    return result;
  }
  memoized.clearCache = () => {
    fnNode = createCacheNode();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
  const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
    memoize: memoizeOrOptions,
    memoizeOptions: memoizeOptionsFromArgs
  } : memoizeOrOptions;
  const createSelector2 = (...createSelectorArgs) => {
    let recomputations = 0;
    let dependencyRecomputations = 0;
    let lastResult;
    let directlyPassedOptions = {};
    let resultFunc = createSelectorArgs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = createSelectorArgs.pop();
    }
    assertIsFunction(
      resultFunc,
      `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`
    );
    const combinedOptions = {
      ...createSelectorCreatorOptions,
      ...directlyPassedOptions
    };
    const {
      memoize,
      memoizeOptions = [],
      argsMemoize = weakMapMemoize,
      argsMemoizeOptions = [],
      devModeChecks = {}
    } = combinedOptions;
    const finalMemoizeOptions = ensureIsArray(memoizeOptions);
    const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
    const dependencies = getDependencies(createSelectorArgs);
    const memoizedResultFunc = memoize(function recomputationWrapper() {
      recomputations++;
      return resultFunc.apply(
        null,
        arguments
      );
    }, ...finalMemoizeOptions);
    const selector = argsMemoize(function dependenciesChecker() {
      dependencyRecomputations++;
      const inputSelectorResults = collectInputSelectorResults(
        dependencies,
        arguments
      );
      lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
      return lastResult;
    }, ...finalArgsMemoizeOptions);
    return Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      dependencyRecomputations: () => dependencyRecomputations,
      resetDependencyRecomputations: () => {
        dependencyRecomputations = 0;
      },
      lastResult: () => lastResult,
      recomputations: () => recomputations,
      resetRecomputations: () => {
        recomputations = 0;
      },
      memoize,
      argsMemoize
    });
  };
  Object.assign(createSelector2, {
    withTypes: () => createSelector2
  });
  return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);
var createStructuredSelector = Object.assign(
  (inputSelectorsObject, selectorCreator = createSelector) => {
    assertIsObject(
      inputSelectorsObject,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`
    );
    const inputSelectorKeys = Object.keys(inputSelectorsObject);
    const dependencies = inputSelectorKeys.map(
      (key) => inputSelectorsObject[key]
    );
    const structuredSelector = selectorCreator(
      dependencies,
      (...inputSelectorResults) => {
        return inputSelectorResults.reduce((composition, value, index) => {
          composition[inputSelectorKeys[index]] = value;
          return composition;
        }, {});
      }
    );
    return structuredSelector;
  },
  { withTypes: () => createStructuredSelector }
);
function createThunkMiddleware(extraArgument) {
  const middleware = ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  };
  return middleware;
}
var thunk = createThunkMiddleware();
var withExtraArgument = createThunkMiddleware;
var createDraftSafeSelectorCreator = (...args) => {
  const createSelector2 = createSelectorCreator(...args);
  const createDraftSafeSelector2 = Object.assign((...args2) => {
    const selector = createSelector2(...args2);
    const wrappedSelector = (value, ...rest) => selector(isDraft(value) ? current(value) : value, ...rest);
    Object.assign(wrappedSelector, selector);
    return wrappedSelector;
  }, {
    withTypes: () => createDraftSafeSelector2
  });
  return createDraftSafeSelector2;
};
createDraftSafeSelectorCreator(weakMapMemoize);
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0)
    return void 0;
  if (typeof arguments[0] === "object")
    return compose;
  return compose.apply(null, arguments);
};
var hasMatchFunction = (v2) => {
  return v2 && typeof v2.match === "function";
};
function createAction(type, prepareAction) {
  function actionCreator(...args) {
    if (prepareAction) {
      let prepared = prepareAction(...args);
      if (!prepared) {
        throw new Error(formatProdErrorMessage(0));
      }
      return {
        type,
        payload: prepared.payload,
        ..."meta" in prepared && {
          meta: prepared.meta
        },
        ..."error" in prepared && {
          error: prepared.error
        }
      };
    }
    return {
      type,
      payload: args[0]
    };
  }
  actionCreator.toString = () => `${type}`;
  actionCreator.type = type;
  actionCreator.match = (action) => isAction(action) && action.type === type;
  return actionCreator;
}
var Tuple = class _Tuple extends Array {
  constructor(...items) {
    super(...items);
    Object.setPrototypeOf(this, _Tuple.prototype);
  }
  static get [Symbol.species]() {
    return _Tuple;
  }
  concat(...arr) {
    return super.concat.apply(this, arr);
  }
  prepend(...arr) {
    if (arr.length === 1 && Array.isArray(arr[0])) {
      return new _Tuple(...arr[0].concat(this));
    }
    return new _Tuple(...arr.concat(this));
  }
};
function freezeDraftable(val) {
  return isDraftable(val) ? produce(val, () => {
  }) : val;
}
function emplace(map, key, handler) {
  if (map.has(key)) {
    let value = map.get(key);
    if (handler.update) {
      value = handler.update(value, key, map);
      map.set(key, value);
    }
    return value;
  }
  if (!handler.insert)
    throw new Error(formatProdErrorMessage(10));
  const inserted = handler.insert(key, map);
  map.set(key, inserted);
  return inserted;
}
function isBoolean(x2) {
  return typeof x2 === "boolean";
}
var buildGetDefaultMiddleware = () => function getDefaultMiddleware(options) {
  const {
    thunk: thunk$1 = true,
    immutableCheck = true,
    serializableCheck = true,
    actionCreatorCheck = true
  } = options ?? {};
  let middlewareArray = new Tuple();
  if (thunk$1) {
    if (isBoolean(thunk$1)) {
      middlewareArray.push(thunk);
    } else {
      middlewareArray.push(withExtraArgument(thunk$1.extraArgument));
    }
  }
  return middlewareArray;
};
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var createQueueWithTimer = (timeout) => {
  return (notify) => {
    setTimeout(notify, timeout);
  };
};
var rAF = typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
var autoBatchEnhancer = (options = {
  type: "raf"
}) => (next) => (...args) => {
  const store2 = next(...args);
  let notifying = true;
  let shouldNotifyAtEndOfTick = false;
  let notificationQueued = false;
  const listeners = /* @__PURE__ */ new Set();
  const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? rAF : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
  const notifyListeners = () => {
    notificationQueued = false;
    if (shouldNotifyAtEndOfTick) {
      shouldNotifyAtEndOfTick = false;
      listeners.forEach((l2) => l2());
    }
  };
  return Object.assign({}, store2, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(listener2) {
      const wrappedListener = () => notifying && listener2();
      const unsubscribe = store2.subscribe(wrappedListener);
      listeners.add(listener2);
      return () => {
        unsubscribe();
        listeners.delete(listener2);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(action) {
      var _a;
      try {
        notifying = !((_a = action == null ? void 0 : action.meta) == null ? void 0 : _a[SHOULD_AUTOBATCH]);
        shouldNotifyAtEndOfTick = !notifying;
        if (shouldNotifyAtEndOfTick) {
          if (!notificationQueued) {
            notificationQueued = true;
            queueCallback(notifyListeners);
          }
        }
        return store2.dispatch(action);
      } finally {
        notifying = true;
      }
    }
  });
};
var buildGetDefaultEnhancers = (middlewareEnhancer) => function getDefaultEnhancers(options) {
  const {
    autoBatch = true
  } = options ?? {};
  let enhancerArray = new Tuple(middlewareEnhancer);
  if (autoBatch) {
    enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
  }
  return enhancerArray;
};
var IS_PRODUCTION = true;
function configureStore(options) {
  const getDefaultMiddleware = buildGetDefaultMiddleware();
  const {
    reducer: reducer2 = void 0,
    middleware,
    devTools = true,
    preloadedState = void 0,
    enhancers = void 0
  } = options || {};
  let rootReducer;
  if (typeof reducer2 === "function") {
    rootReducer = reducer2;
  } else if (isPlainObject$1(reducer2)) {
    rootReducer = combineReducers(reducer2);
  } else {
    throw new Error(formatProdErrorMessage(1));
  }
  let finalMiddleware;
  if (typeof middleware === "function") {
    finalMiddleware = middleware(getDefaultMiddleware);
  } else {
    finalMiddleware = getDefaultMiddleware();
  }
  let finalCompose = compose;
  if (devTools) {
    finalCompose = composeWithDevTools({
      // Enable capture of stack traces for dispatched Redux actions
      trace: !IS_PRODUCTION,
      ...typeof devTools === "object" && devTools
    });
  }
  const middlewareEnhancer = applyMiddleware(...finalMiddleware);
  const getDefaultEnhancers = buildGetDefaultEnhancers(middlewareEnhancer);
  let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
  const composedEnhancer = finalCompose(...storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}
function executeReducerBuilderCallback(builderCallback) {
  const actionsMap = {};
  const actionMatchers = [];
  let defaultCaseReducer;
  const builder = {
    addCase(typeOrActionCreator, reducer2) {
      const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (!type) {
        throw new Error(formatProdErrorMessage(28));
      }
      if (type in actionsMap) {
        throw new Error(formatProdErrorMessage(29));
      }
      actionsMap[type] = reducer2;
      return builder;
    },
    addMatcher(matcher, reducer2) {
      actionMatchers.push({
        matcher,
        reducer: reducer2
      });
      return builder;
    },
    addDefaultCase(reducer2) {
      defaultCaseReducer = reducer2;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}
function isStateFunction(x2) {
  return typeof x2 === "function";
}
function createReducer(initialState, mapOrBuilderCallback) {
  let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
  let getInitialState;
  if (isStateFunction(initialState)) {
    getInitialState = () => freezeDraftable(initialState());
  } else {
    const frozenInitialState = freezeDraftable(initialState);
    getInitialState = () => frozenInitialState;
  }
  function reducer2(state = getInitialState(), action) {
    let caseReducers = [actionsMap[action.type], ...finalActionMatchers.filter(({
      matcher
    }) => matcher(action)).map(({
      reducer: reducer22
    }) => reducer22)];
    if (caseReducers.filter((cr) => !!cr).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce((previousState, caseReducer) => {
      if (caseReducer) {
        if (isDraft(previousState)) {
          const draft = previousState;
          const result = caseReducer(draft, action);
          if (result === void 0) {
            return previousState;
          }
          return result;
        } else if (!isDraftable(previousState)) {
          const result = caseReducer(previousState, action);
          if (result === void 0) {
            if (previousState === null) {
              return previousState;
            }
            throw new Error(formatProdErrorMessage(9));
          }
          return result;
        } else {
          return produce(previousState, (draft) => {
            return caseReducer(draft, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer2.getInitialState = getInitialState;
  return reducer2;
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = (size = 21) => {
  let id2 = "";
  let i = size;
  while (i--) {
    id2 += urlAlphabet[Math.random() * 64 | 0];
  }
  return id2;
};
var matches = (matcher, action) => {
  if (hasMatchFunction(matcher)) {
    return matcher.match(action);
  } else {
    return matcher(action);
  }
};
function isAnyOf(...matchers) {
  return (action) => {
    return matchers.some((matcher) => matches(matcher, action));
  };
}
var commonProperties = ["name", "message", "stack", "code"];
var RejectWithValue = class {
  constructor(payload, meta) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    __publicField(this, "_type");
    this.payload = payload;
    this.meta = meta;
  }
};
var FulfillWithMeta = class {
  constructor(payload, meta) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    __publicField(this, "_type");
    this.payload = payload;
    this.meta = meta;
  }
};
var miniSerializeError = (value) => {
  if (typeof value === "object" && value !== null) {
    const simpleError = {};
    for (const property of commonProperties) {
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return {
    message: String(value)
  };
};
var createAsyncThunk = /* @__PURE__ */ (() => {
  function createAsyncThunk2(typePrefix, payloadCreator, options) {
    const fulfilled = createAction(typePrefix + "/fulfilled", (payload, requestId, arg, meta) => ({
      payload,
      meta: {
        ...meta || {},
        arg,
        requestId,
        requestStatus: "fulfilled"
      }
    }));
    const pending = createAction(typePrefix + "/pending", (requestId, arg, meta) => ({
      payload: void 0,
      meta: {
        ...meta || {},
        arg,
        requestId,
        requestStatus: "pending"
      }
    }));
    const rejected = createAction(typePrefix + "/rejected", (error, requestId, arg, payload, meta) => ({
      payload,
      error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
      meta: {
        ...meta || {},
        arg,
        requestId,
        rejectedWithValue: !!payload,
        requestStatus: "rejected",
        aborted: (error == null ? void 0 : error.name) === "AbortError",
        condition: (error == null ? void 0 : error.name) === "ConditionError"
      }
    }));
    function actionCreator(arg) {
      return (dispatch, getState, extra) => {
        const requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
        const abortController = new AbortController();
        let abortHandler;
        let abortReason;
        function abort(reason) {
          abortReason = reason;
          abortController.abort();
        }
        const promise = async function() {
          var _a, _b;
          let finalAction;
          try {
            let conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, {
              getState,
              extra
            });
            if (isThenable(conditionResult)) {
              conditionResult = await conditionResult;
            }
            if (conditionResult === false || abortController.signal.aborted) {
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            }
            const abortedPromise = new Promise((_, reject) => {
              abortHandler = () => {
                reject({
                  name: "AbortError",
                  message: abortReason || "Aborted"
                });
              };
              abortController.signal.addEventListener("abort", abortHandler);
            });
            dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, {
              requestId,
              arg
            }, {
              getState,
              extra
            })));
            finalAction = await Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
              dispatch,
              getState,
              extra,
              requestId,
              signal: abortController.signal,
              abort,
              rejectWithValue: (value, meta) => {
                return new RejectWithValue(value, meta);
              },
              fulfillWithValue: (value, meta) => {
                return new FulfillWithMeta(value, meta);
              }
            })).then((result) => {
              if (result instanceof RejectWithValue) {
                throw result;
              }
              if (result instanceof FulfillWithMeta) {
                return fulfilled(result.payload, requestId, arg, result.meta);
              }
              return fulfilled(result, requestId, arg);
            })]);
          } catch (err) {
            finalAction = err instanceof RejectWithValue ? rejected(null, requestId, arg, err.payload, err.meta) : rejected(err, requestId, arg);
          } finally {
            if (abortHandler) {
              abortController.signal.removeEventListener("abort", abortHandler);
            }
          }
          const skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
          if (!skipDispatch) {
            dispatch(finalAction);
          }
          return finalAction;
        }();
        return Object.assign(promise, {
          abort,
          requestId,
          arg,
          unwrap() {
            return promise.then(unwrapResult);
          }
        });
      };
    }
    return Object.assign(actionCreator, {
      pending,
      rejected,
      fulfilled,
      settled: isAnyOf(rejected, fulfilled),
      typePrefix
    });
  }
  createAsyncThunk2.withTypes = () => createAsyncThunk2;
  return createAsyncThunk2;
})();
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}
var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function getType(slice, actionKey) {
  return `${slice}/${actionKey}`;
}
function buildCreateSlice({
  creators
} = {}) {
  var _a;
  const cAT = (_a = creators == null ? void 0 : creators.asyncThunk) == null ? void 0 : _a[asyncThunkSymbol];
  return function createSlice2(options) {
    const {
      name,
      reducerPath = name
    } = options;
    if (!name) {
      throw new Error(formatProdErrorMessage(11));
    }
    if (typeof process !== "undefined" && false) {
      if (options.initialState === void 0) {
        console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
      }
    }
    const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
    const reducerNames = Object.keys(reducers);
    const context = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    };
    const contextMethods = {
      addCase(typeOrActionCreator, reducer22) {
        const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
        if (!type) {
          throw new Error(formatProdErrorMessage(12));
        }
        if (type in context.sliceCaseReducersByType) {
          throw new Error(formatProdErrorMessage(13));
        }
        context.sliceCaseReducersByType[type] = reducer22;
        return contextMethods;
      },
      addMatcher(matcher, reducer22) {
        context.sliceMatchers.push({
          matcher,
          reducer: reducer22
        });
        return contextMethods;
      },
      exposeAction(name2, actionCreator) {
        context.actionCreators[name2] = actionCreator;
        return contextMethods;
      },
      exposeCaseReducer(name2, reducer22) {
        context.sliceCaseReducersByName[name2] = reducer22;
        return contextMethods;
      }
    };
    reducerNames.forEach((reducerName) => {
      const reducerDefinition = reducers[reducerName];
      const reducerDetails = {
        reducerName,
        type: getType(name, reducerName),
        createNotation: typeof options.reducers === "function"
      };
      if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) {
        handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT);
      } else {
        handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
      }
    });
    function buildReducer() {
      const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers];
      const finalCaseReducers = {
        ...extraReducers,
        ...context.sliceCaseReducersByType
      };
      return createReducer(options.initialState, (builder) => {
        for (let key in finalCaseReducers) {
          builder.addCase(key, finalCaseReducers[key]);
        }
        for (let sM of context.sliceMatchers) {
          builder.addMatcher(sM.matcher, sM.reducer);
        }
        for (let m2 of actionMatchers) {
          builder.addMatcher(m2.matcher, m2.reducer);
        }
        if (defaultCaseReducer) {
          builder.addDefaultCase(defaultCaseReducer);
        }
      });
    }
    const selectSelf = (state) => state;
    const injectedSelectorCache = /* @__PURE__ */ new Map();
    let _reducer;
    function reducer2(state, action) {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer(state, action);
    }
    function getInitialState() {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer.getInitialState();
    }
    function makeSelectorProps(reducerPath2, injected = false) {
      function selectSlice(state) {
        let sliceState = state[reducerPath2];
        if (typeof sliceState === "undefined") {
          if (injected) {
            sliceState = getInitialState();
          }
        }
        return sliceState;
      }
      function getSelectors(selectState = selectSelf) {
        const selectorCache = emplace(injectedSelectorCache, injected, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return emplace(selectorCache, selectState, {
          insert: () => {
            const map = {};
            for (const [name2, selector] of Object.entries(options.selectors ?? {})) {
              map[name2] = wrapSelector(selector, selectState, getInitialState, injected);
            }
            return map;
          }
        });
      }
      return {
        reducerPath: reducerPath2,
        getSelectors,
        get selectors() {
          return getSelectors(selectSlice);
        },
        selectSlice
      };
    }
    const slice = {
      name,
      reducer: reducer2,
      actions: context.actionCreators,
      caseReducers: context.sliceCaseReducersByName,
      getInitialState,
      ...makeSelectorProps(reducerPath),
      injectInto(injectable, {
        reducerPath: pathOpt,
        ...config2
      } = {}) {
        const newReducerPath = pathOpt ?? reducerPath;
        injectable.inject({
          reducerPath: newReducerPath,
          reducer: reducer2
        }, config2);
        return {
          ...slice,
          ...makeSelectorProps(newReducerPath, true)
        };
      }
    };
    return slice;
  };
}
function wrapSelector(selector, selectState, getInitialState, injected) {
  function wrapper(rootState, ...args) {
    let sliceState = selectState(rootState);
    if (typeof sliceState === "undefined") {
      if (injected) {
        sliceState = getInitialState();
      }
    }
    return selector(sliceState, ...args);
  }
  wrapper.unwrapped = selector;
  return wrapper;
}
var createSlice = /* @__PURE__ */ buildCreateSlice();
function buildReducerCreators() {
  function asyncThunk(payloadCreator, config2) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator,
      ...config2
    };
  }
  asyncThunk.withTypes = () => asyncThunk;
  return {
    reducer(caseReducer) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [caseReducer.name](...args) {
          return caseReducer(...args);
        }
      }[caseReducer.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(prepare, reducer2) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare,
        reducer: reducer2
      };
    },
    asyncThunk
  };
}
function handleNormalReducerDefinition({
  type,
  reducerName,
  createNotation
}, maybeReducerWithPrepare, context) {
  let caseReducer;
  let prepareCallback;
  if ("reducer" in maybeReducerWithPrepare) {
    if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) {
      throw new Error(formatProdErrorMessage(17));
    }
    caseReducer = maybeReducerWithPrepare.reducer;
    prepareCallback = maybeReducerWithPrepare.prepare;
  } else {
    caseReducer = maybeReducerWithPrepare;
  }
  context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
}
function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
  return reducerDefinition._reducerDefinitionType === "asyncThunk";
}
function isCaseReducerWithPrepareDefinition(reducerDefinition) {
  return reducerDefinition._reducerDefinitionType === "reducerWithPrepare";
}
function handleThunkCaseReducerDefinition({
  type,
  reducerName
}, reducerDefinition, context, cAT) {
  if (!cAT) {
    throw new Error(formatProdErrorMessage(18));
  }
  const {
    payloadCreator,
    fulfilled,
    pending,
    rejected,
    settled,
    options
  } = reducerDefinition;
  const thunk2 = cAT(type, payloadCreator, options);
  context.exposeAction(reducerName, thunk2);
  if (fulfilled) {
    context.addCase(thunk2.fulfilled, fulfilled);
  }
  if (pending) {
    context.addCase(thunk2.pending, pending);
  }
  if (rejected) {
    context.addCase(thunk2.rejected, rejected);
  }
  if (settled) {
    context.addMatcher(thunk2.settled, settled);
  }
  context.exposeCaseReducer(reducerName, {
    fulfilled: fulfilled || noop$1,
    pending: pending || noop$1,
    rejected: rejected || noop$1,
    settled: settled || noop$1
  });
}
function noop$1() {
}
var assertFunction = (func, expected) => {
  if (typeof func !== "function") {
    throw new Error(formatProdErrorMessage(32));
  }
};
var alm = "listenerMiddleware";
var getListenerEntryPropsFrom = (options) => {
  let {
    type,
    actionCreator,
    matcher,
    predicate,
    effect
  } = options;
  if (type) {
    predicate = createAction(type).match;
  } else if (actionCreator) {
    type = actionCreator.type;
    predicate = actionCreator.match;
  } else if (matcher) {
    predicate = matcher;
  } else if (predicate)
    ;
  else {
    throw new Error(formatProdErrorMessage(21));
  }
  assertFunction(effect);
  return {
    predicate,
    type,
    effect
  };
};
var createListenerEntry = Object.assign((options) => {
  const {
    type,
    predicate,
    effect
  } = getListenerEntryPropsFrom(options);
  const id2 = nanoid();
  const entry = {
    id: id2,
    effect,
    type,
    predicate,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(formatProdErrorMessage(22));
    }
  };
  return entry;
}, {
  withTypes: () => createListenerEntry
});
var addListener = Object.assign(createAction(`${alm}/add`), {
  withTypes: () => addListener
});
createAction(`${alm}/removeAll`);
var removeListener = Object.assign(createAction(`${alm}/remove`), {
  withTypes: () => removeListener
});
function formatProdErrorMessage(code) {
  return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
var reduxLogger = { exports: {} };
(function(module, exports) {
  var define_global_default2 = {};
  !function(e, t2) {
    t2(exports);
  }(commonjsGlobal, function(e) {
    function t2(e2, t22) {
      e2.super_ = t22, e2.prototype = Object.create(t22.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } });
    }
    function r2(e2, t22) {
      Object.defineProperty(this, "kind", { value: e2, enumerable: true }), t22 && t22.length && Object.defineProperty(this, "path", { value: t22, enumerable: true });
    }
    function n2(e2, t22, r22) {
      n2.super_.call(this, "E", e2), Object.defineProperty(this, "lhs", { value: t22, enumerable: true }), Object.defineProperty(this, "rhs", { value: r22, enumerable: true });
    }
    function o(e2, t22) {
      o.super_.call(this, "N", e2), Object.defineProperty(this, "rhs", { value: t22, enumerable: true });
    }
    function i(e2, t22) {
      i.super_.call(this, "D", e2), Object.defineProperty(this, "lhs", { value: t22, enumerable: true });
    }
    function a(e2, t22, r22) {
      a.super_.call(this, "A", e2), Object.defineProperty(this, "index", { value: t22, enumerable: true }), Object.defineProperty(this, "item", { value: r22, enumerable: true });
    }
    function f2(e2, t22, r22) {
      var n22 = e2.slice((r22 || t22) + 1 || e2.length);
      return e2.length = t22 < 0 ? e2.length + t22 : t22, e2.push.apply(e2, n22), e2;
    }
    function u2(e2) {
      var t22 = "undefined" == typeof e2 ? "undefined" : N2(e2);
      return "object" !== t22 ? t22 : e2 === Math ? "math" : null === e2 ? "null" : Array.isArray(e2) ? "array" : "[object Date]" === Object.prototype.toString.call(e2) ? "date" : "function" == typeof e2.toString && /^\/.*\//.test(e2.toString()) ? "regexp" : "object";
    }
    function l2(e2, t22, r22, c2, s2, d2, p22) {
      s2 = s2 || [], p22 = p22 || [];
      var g22 = s2.slice(0);
      if ("undefined" != typeof d2) {
        if (c2) {
          if ("function" == typeof c2 && c2(g22, d2))
            return;
          if ("object" === ("undefined" == typeof c2 ? "undefined" : N2(c2))) {
            if (c2.prefilter && c2.prefilter(g22, d2))
              return;
            if (c2.normalize) {
              var h2 = c2.normalize(g22, d2, e2, t22);
              h2 && (e2 = h2[0], t22 = h2[1]);
            }
          }
        }
        g22.push(d2);
      }
      "regexp" === u2(e2) && "regexp" === u2(t22) && (e2 = e2.toString(), t22 = t22.toString());
      var y22 = "undefined" == typeof e2 ? "undefined" : N2(e2), v22 = "undefined" == typeof t22 ? "undefined" : N2(t22), b2 = "undefined" !== y22 || p22 && p22[p22.length - 1].lhs && p22[p22.length - 1].lhs.hasOwnProperty(d2), m22 = "undefined" !== v22 || p22 && p22[p22.length - 1].rhs && p22[p22.length - 1].rhs.hasOwnProperty(d2);
      if (!b2 && m22)
        r22(new o(g22, t22));
      else if (!m22 && b2)
        r22(new i(g22, e2));
      else if (u2(e2) !== u2(t22))
        r22(new n2(g22, e2, t22));
      else if ("date" === u2(e2) && e2 - t22 !== 0)
        r22(new n2(g22, e2, t22));
      else if ("object" === y22 && null !== e2 && null !== t22)
        if (p22.filter(function(t3) {
          return t3.lhs === e2;
        }).length)
          e2 !== t22 && r22(new n2(g22, e2, t22));
        else {
          if (p22.push({ lhs: e2, rhs: t22 }), Array.isArray(e2)) {
            var w22;
            e2.length;
            for (w22 = 0; w22 < e2.length; w22++)
              w22 >= t22.length ? r22(new a(g22, w22, new i(void 0, e2[w22]))) : l2(e2[w22], t22[w22], r22, c2, g22, w22, p22);
            for (; w22 < t22.length; )
              r22(new a(g22, w22, new o(void 0, t22[w22++])));
          } else {
            var x22 = Object.keys(e2), S22 = Object.keys(t22);
            x22.forEach(function(n22, o2) {
              var i2 = S22.indexOf(n22);
              i2 >= 0 ? (l2(e2[n22], t22[n22], r22, c2, g22, n22, p22), S22 = f2(S22, i2)) : l2(e2[n22], void 0, r22, c2, g22, n22, p22);
            }), S22.forEach(function(e3) {
              l2(void 0, t22[e3], r22, c2, g22, e3, p22);
            });
          }
          p22.length = p22.length - 1;
        }
      else
        e2 !== t22 && ("number" === y22 && isNaN(e2) && isNaN(t22) || r22(new n2(g22, e2, t22)));
    }
    function c(e2, t22, r22, n22) {
      return n22 = n22 || [], l2(e2, t22, function(e3) {
        e3 && n22.push(e3);
      }, r22), n22.length ? n22 : void 0;
    }
    function s(e2, t22, r22) {
      if (r22.path && r22.path.length) {
        var n22, o2 = e2[t22], i2 = r22.path.length - 1;
        for (n22 = 0; n22 < i2; n22++)
          o2 = o2[r22.path[n22]];
        switch (r22.kind) {
          case "A":
            s(o2[r22.path[n22]], r22.index, r22.item);
            break;
          case "D":
            delete o2[r22.path[n22]];
            break;
          case "E":
          case "N":
            o2[r22.path[n22]] = r22.rhs;
        }
      } else
        switch (r22.kind) {
          case "A":
            s(e2[t22], r22.index, r22.item);
            break;
          case "D":
            e2 = f2(e2, t22);
            break;
          case "E":
          case "N":
            e2[t22] = r22.rhs;
        }
      return e2;
    }
    function d(e2, t22, r22) {
      if (e2 && t22 && r22 && r22.kind) {
        for (var n22 = e2, o2 = -1, i2 = r22.path ? r22.path.length - 1 : 0; ++o2 < i2; )
          "undefined" == typeof n22[r22.path[o2]] && (n22[r22.path[o2]] = "number" == typeof r22.path[o2] ? [] : {}), n22 = n22[r22.path[o2]];
        switch (r22.kind) {
          case "A":
            s(r22.path ? n22[r22.path[o2]] : n22, r22.index, r22.item);
            break;
          case "D":
            delete n22[r22.path[o2]];
            break;
          case "E":
          case "N":
            n22[r22.path[o2]] = r22.rhs;
        }
      }
    }
    function p2(e2, t22, r22) {
      if (r22.path && r22.path.length) {
        var n22, o2 = e2[t22], i2 = r22.path.length - 1;
        for (n22 = 0; n22 < i2; n22++)
          o2 = o2[r22.path[n22]];
        switch (r22.kind) {
          case "A":
            p2(o2[r22.path[n22]], r22.index, r22.item);
            break;
          case "D":
            o2[r22.path[n22]] = r22.lhs;
            break;
          case "E":
            o2[r22.path[n22]] = r22.lhs;
            break;
          case "N":
            delete o2[r22.path[n22]];
        }
      } else
        switch (r22.kind) {
          case "A":
            p2(e2[t22], r22.index, r22.item);
            break;
          case "D":
            e2[t22] = r22.lhs;
            break;
          case "E":
            e2[t22] = r22.lhs;
            break;
          case "N":
            e2 = f2(e2, t22);
        }
      return e2;
    }
    function g2(e2, t22, r22) {
      if (e2 && t22 && r22 && r22.kind) {
        var n22, o2, i2 = e2;
        for (o2 = r22.path.length - 1, n22 = 0; n22 < o2; n22++)
          "undefined" == typeof i2[r22.path[n22]] && (i2[r22.path[n22]] = {}), i2 = i2[r22.path[n22]];
        switch (r22.kind) {
          case "A":
            p2(i2[r22.path[n22]], r22.index, r22.item);
            break;
          case "D":
            i2[r22.path[n22]] = r22.lhs;
            break;
          case "E":
            i2[r22.path[n22]] = r22.lhs;
            break;
          case "N":
            delete i2[r22.path[n22]];
        }
      }
    }
    function h(e2, t22, r22) {
      if (e2 && t22) {
        var n22 = function(n3) {
          r22 && !r22(e2, t22, n3) || d(e2, t22, n3);
        };
        l2(e2, t22, n22);
      }
    }
    function y2(e2) {
      return "color: " + F2[e2].color + "; font-weight: bold";
    }
    function v2(e2) {
      var t22 = e2.kind, r22 = e2.path, n22 = e2.lhs, o2 = e2.rhs, i2 = e2.index, a2 = e2.item;
      switch (t22) {
        case "E":
          return [r22.join("."), n22, "→", o2];
        case "N":
          return [r22.join("."), o2];
        case "D":
          return [r22.join(".")];
        case "A":
          return [r22.join(".") + "[" + i2 + "]", a2];
        default:
          return [];
      }
    }
    function b(e2, t22, r22, n22) {
      var o2 = c(e2, t22);
      try {
        n22 ? r22.groupCollapsed("diff") : r22.group("diff");
      } catch (e3) {
        r22.log("diff");
      }
      o2 ? o2.forEach(function(e3) {
        var t3 = e3.kind, n3 = v2(e3);
        r22.log.apply(r22, ["%c " + F2[t3].text, y2(t3)].concat(P2(n3)));
      }) : r22.log("—— no diff ——");
      try {
        r22.groupEnd();
      } catch (e3) {
        r22.log("—— diff end —— ");
      }
    }
    function m2(e2, t22, r22, n22) {
      switch ("undefined" == typeof e2 ? "undefined" : N2(e2)) {
        case "object":
          return "function" == typeof e2[n22] ? e2[n22].apply(e2, P2(r22)) : e2[n22];
        case "function":
          return e2(t22);
        default:
          return e2;
      }
    }
    function w2(e2) {
      var t22 = e2.timestamp, r22 = e2.duration;
      return function(e3, n22, o2) {
        var i2 = ["action"];
        return i2.push("%c" + String(e3.type)), t22 && i2.push("%c@ " + n22), r22 && i2.push("%c(in " + o2.toFixed(2) + " ms)"), i2.join(" ");
      };
    }
    function x2(e2, t22) {
      var r22 = t22.logger, n22 = t22.actionTransformer, o2 = t22.titleFormatter, i2 = void 0 === o2 ? w2(t22) : o2, a2 = t22.collapsed, f22 = t22.colors, u22 = t22.level, l22 = t22.diff, c2 = "undefined" == typeof t22.titleFormatter;
      e2.forEach(function(o3, s2) {
        var d2 = o3.started, p22 = o3.startedTime, g22 = o3.action, h2 = o3.prevState, y22 = o3.error, v22 = o3.took, w22 = o3.nextState, x22 = e2[s2 + 1];
        x22 && (w22 = x22.prevState, v22 = x22.started - d2);
        var S22 = n22(g22), k22 = "function" == typeof a2 ? a2(function() {
          return w22;
        }, g22, o3) : a2, j2 = D2(p22), E22 = f22.title ? "color: " + f22.title(S22) + ";" : "", A22 = ["color: gray; font-weight: lighter;"];
        A22.push(E22), t22.timestamp && A22.push("color: gray; font-weight: lighter;"), t22.duration && A22.push("color: gray; font-weight: lighter;");
        var O22 = i2(S22, j2, v22);
        try {
          k22 ? f22.title && c2 ? r22.groupCollapsed.apply(r22, ["%c " + O22].concat(A22)) : r22.groupCollapsed(O22) : f22.title && c2 ? r22.group.apply(r22, ["%c " + O22].concat(A22)) : r22.group(O22);
        } catch (e3) {
          r22.log(O22);
        }
        var N22 = m2(u22, S22, [h2], "prevState"), P22 = m2(u22, S22, [S22], "action"), C22 = m2(u22, S22, [y22, h2], "error"), F22 = m2(u22, S22, [w22], "nextState");
        if (N22)
          if (f22.prevState) {
            var L22 = "color: " + f22.prevState(h2) + "; font-weight: bold";
            r22[N22]("%c prev state", L22, h2);
          } else
            r22[N22]("prev state", h2);
        if (P22)
          if (f22.action) {
            var T22 = "color: " + f22.action(S22) + "; font-weight: bold";
            r22[P22]("%c action    ", T22, S22);
          } else
            r22[P22]("action    ", S22);
        if (y22 && C22)
          if (f22.error) {
            var M2 = "color: " + f22.error(y22, h2) + "; font-weight: bold;";
            r22[C22]("%c error     ", M2, y22);
          } else
            r22[C22]("error     ", y22);
        if (F22)
          if (f22.nextState) {
            var _ = "color: " + f22.nextState(w22) + "; font-weight: bold";
            r22[F22]("%c next state", _, w22);
          } else
            r22[F22]("next state", w22);
        l22 && b(h2, w22, r22, k22);
        try {
          r22.groupEnd();
        } catch (e3) {
          r22.log("—— log end ——");
        }
      });
    }
    function S2() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t22 = Object.assign({}, L2, e2), r22 = t22.logger, n22 = t22.stateTransformer, o2 = t22.errorTransformer, i2 = t22.predicate, a2 = t22.logErrors, f22 = t22.diffPredicate;
      if ("undefined" == typeof r22)
        return function() {
          return function(e3) {
            return function(t3) {
              return e3(t3);
            };
          };
        };
      if (e2.getState && e2.dispatch)
        return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), function() {
          return function(e3) {
            return function(t3) {
              return e3(t3);
            };
          };
        };
      var u22 = [];
      return function(e3) {
        var r3 = e3.getState;
        return function(e4) {
          return function(l22) {
            if ("function" == typeof i2 && !i2(r3, l22))
              return e4(l22);
            var c2 = {};
            u22.push(c2), c2.started = O2.now(), c2.startedTime = /* @__PURE__ */ new Date(), c2.prevState = n22(r3()), c2.action = l22;
            var s2 = void 0;
            if (a2)
              try {
                s2 = e4(l22);
              } catch (e5) {
                c2.error = o2(e5);
              }
            else
              s2 = e4(l22);
            c2.took = O2.now() - c2.started, c2.nextState = n22(r3());
            var d2 = t22.diff && "function" == typeof f22 ? f22(r3, l22) : t22.diff;
            if (x2(u22, Object.assign({}, t22, { diff: d2 })), u22.length = 0, c2.error)
              throw c2.error;
            return s2;
          };
        };
      };
    }
    var k2, j, E2 = function(e2, t22) {
      return new Array(t22 + 1).join(e2);
    }, A2 = function(e2, t22) {
      return E2("0", t22 - e2.toString().length) + e2;
    }, D2 = function(e2) {
      return A2(e2.getHours(), 2) + ":" + A2(e2.getMinutes(), 2) + ":" + A2(e2.getSeconds(), 2) + "." + A2(e2.getMilliseconds(), 3);
    }, O2 = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date, N2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
      return typeof e2;
    } : function(e2) {
      return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
    }, P2 = function(e2) {
      if (Array.isArray(e2)) {
        for (var t22 = 0, r22 = Array(e2.length); t22 < e2.length; t22++)
          r22[t22] = e2[t22];
        return r22;
      }
      return Array.from(e2);
    }, C2 = [];
    k2 = "object" === ("undefined" == typeof define_global_default2 ? "undefined" : N2(define_global_default2)) && define_global_default2 ? define_global_default2 : "undefined" != typeof window ? window : {}, j = k2.DeepDiff, j && C2.push(function() {
      "undefined" != typeof j && k2.DeepDiff === c && (k2.DeepDiff = j, j = void 0);
    }), t2(n2, r2), t2(o, r2), t2(i, r2), t2(a, r2), Object.defineProperties(c, { diff: { value: c, enumerable: true }, observableDiff: { value: l2, enumerable: true }, applyDiff: { value: h, enumerable: true }, applyChange: { value: d, enumerable: true }, revertChange: { value: g2, enumerable: true }, isConflict: { value: function() {
      return "undefined" != typeof j;
    }, enumerable: true }, noConflict: { value: function() {
      return C2 && (C2.forEach(function(e2) {
        e2();
      }), C2 = null), c;
    }, enumerable: true } });
    var F2 = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } }, L2 = { level: "log", logger: console, logErrors: true, collapsed: void 0, predicate: void 0, duration: false, timestamp: true, stateTransformer: function(e2) {
      return e2;
    }, actionTransformer: function(e2) {
      return e2;
    }, errorTransformer: function(e2) {
      return e2;
    }, colors: { title: function() {
      return "inherit";
    }, prevState: function() {
      return "#9E9E9E";
    }, action: function() {
      return "#03A9F4";
    }, nextState: function() {
      return "#4CAF50";
    }, error: function() {
      return "#F20404";
    } }, diff: false, diffPredicate: void 0, transformer: void 0 }, T2 = function() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t22 = e2.dispatch, r22 = e2.getState;
      return "function" == typeof t22 || "function" == typeof r22 ? S2()({ dispatch: t22, getState: r22 }) : void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n");
    };
    e.defaults = L2, e.createLogger = S2, e.logger = T2, e.default = T2, Object.defineProperty(e, "__esModule", { value: true });
  });
})(reduxLogger, reduxLogger.exports);
var reduxLoggerExports = reduxLogger.exports;
const logger = /* @__PURE__ */ getDefaultExportFromCjs(reduxLoggerExports);
async function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { "Content-Type": "application/json" };
  const config2 = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  };
  if (body) {
    config2.body = JSON.stringify(body);
  }
  let data;
  try {
    const response = await window.fetch(endpoint, config2);
    data = await response.json();
    if (response.ok) {
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url
      };
    }
    throw new Error(response.statusText);
  } catch (err) {
    return Promise.reject(err.message ? err.message : data);
  }
}
client.get = function(endpoint, customConfig = {}) {
  console.log("client running?");
  return client(endpoint, { ...customConfig, method: "GET" });
};
client.post = function(endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, body });
};
const fetchDebugVars = createAsyncThunk("reportListReducer/fetchDebugVars", async () => {
  const response = await client.get("http://localhost:8000/debug/vars");
  return response.data;
});
let initialControllerState = {
  lineGraph: {
    instructions: true,
    start: false,
    stop: true,
    running: false,
    expvars: []
  }
};
const controllerReducer = createSlice({
  name: "controller",
  initialState: initialControllerState,
  // name: 'launchConfig',
  // initialState:defaultLaunchConfig,
  reducers: {
    onButtonSubmit: (state, action) => {
      if (action.payload === "start") {
        state.lineGraph.instructions = false;
        state.lineGraph.start = true;
        state.lineGraph.stop = false;
        state.lineGraph.running = true;
      } else {
        state.lineGraph.instructions = true;
        state.lineGraph.start = false;
        state.lineGraph.stop = true;
        state.lineGraph.running = false;
      }
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchDebugVars.fulfilled, (state, action) => {
      let heap_idle_count = action.payload.memstats["HeapIdle"];
      let HeapIdle = { name: "HeapIdle", count: heap_idle_count };
      let heap_in_use_count = action.payload.memstats["HeapInuse"];
      let HeapInuse = { name: "HeapInuse", count: heap_in_use_count };
      let heap_alloc_count = action.payload.memstats["HeapAlloc"];
      let HeapAlloc = { name: "HeapAlloc", count: heap_alloc_count };
      let next_gc = action.payload.memstats["NextGC"];
      let NextGC = { name: "NextGC", count: next_gc };
      let stats = [];
      stats[0] = HeapIdle;
      stats[1] = HeapInuse;
      stats[2] = HeapAlloc;
      stats[3] = NextGC;
      state.lineGraph.expvars = stats;
    });
  }
});
const { onButtonSubmit } = controllerReducer.actions;
const controllerReducer$1 = controllerReducer.reducer;
const gc_pauses_report = [
  {
    "pause": 0,
    "percent": 0
  }
];
const gc_frequency_report = [
  // { 1712666013330474000 oldest
  {
    "diff": 0,
    "percent": 0,
    "recent_ts": 0,
    "older_ts": 0
  },
  {
    "diff": 0,
    "percent": 0,
    "recent_ts": 0,
    "older_ts": 0
  }
];
function calculatePauseNsStats(pause_ns_sorted, number_gcs_at_report_time) {
  var start_gc, end_gc;
  if (number_gcs_at_report_time == 256) {
    start_gc = 0;
    end_gc = number_gcs_at_report_time;
  } else if (number_gcs_at_report_time > 256) {
    start_gc = number_gcs_at_report_time - 256;
    end_gc = number_gcs_at_report_time;
  } else {
    start_gc = 0;
    end_gc = number_gcs_at_report_time;
  }
  var len = pause_ns_sorted.length;
  var quarter = Math.round(len / 4);
  var three_quarter = quarter * 3;
  var mid = (len - 1) / 2 + 1;
  var mid_even = len / 2 + 1;
  var k2 = len % 2;
  var median;
  if (k2 == 1) {
    median = pause_ns_sorted[mid];
  } else {
    median = pause_ns_sorted[mid_even];
  }
  var twenty_five_percentile = pause_ns_sorted[quarter];
  var third_quarter = pause_ns_sorted[three_quarter];
  var max = Math.max(...pause_ns_sorted);
  var stats = { sample: len, median, twenty_five: twenty_five_percentile, seventy_five: third_quarter, max, start_gc, end_gc };
  return stats;
}
function calculatePauseEndStats(pause_ns_sorted, number_gcs_at_report_time) {
  var start_gc, end_gc;
  if (number_gcs_at_report_time == 256) {
    start_gc = 0;
    end_gc = number_gcs_at_report_time;
  } else if (number_gcs_at_report_time > 256) {
    start_gc = number_gcs_at_report_time - 256;
    end_gc = number_gcs_at_report_time;
  } else {
    start_gc = 0;
    end_gc = number_gcs_at_report_time;
  }
  var len = pause_ns_sorted.length;
  var quarter = Math.round(len / 4);
  var three_quarter = quarter * 3;
  var mid = (len - 1) / 2 + 1;
  var mid_even = len / 2 + 1;
  var k2 = len % 2;
  var median;
  if (k2 == 1) {
    median = pause_ns_sorted[mid];
  } else {
    median = pause_ns_sorted[mid_even];
  }
  var twenty_five_percentile = pause_ns_sorted[quarter];
  var third_quarter = pause_ns_sorted[three_quarter];
  var max = Math.max(...pause_ns_sorted);
  var stats = { sample: len, median, twenty_five: twenty_five_percentile, seventy_five: third_quarter, max, start_gc, end_gc };
  return stats;
}
function calculatePauseEndPercents(PauseEndDiffs, pauseEndMax) {
  var percents = [];
  for (var i = PauseEndDiffs.length - 1; i >= 0; i--) {
    var rawnumber = PauseEndDiffs[i].diff;
    var rawbymax = rawnumber / pauseEndMax;
    var percent = rawbymax * 100;
    var diffobject = { diff: rawnumber, percent, recent_ts: PauseEndDiffs[i].recent_ts, older_ts: PauseEndDiffs[i].older_ts };
    percents.push(diffobject);
  }
  return percents;
}
function calculatePercents(PauseNsZeros, pauseNsMax) {
  var percents = [];
  for (var i = 0; i < PauseNsZeros.length; i++) {
    var rawnumber = PauseNsZeros[i];
    var rawbymax = rawnumber / pauseNsMax;
    var percent = rawbymax * 100;
    var pausensobject = { pause: rawnumber, percent };
    percents.push(pausensobject);
  }
  return percents;
}
function pauseEndDiffs(PauseEndNoZeros) {
  var max = 0;
  var diffs = [];
  var mintomax = [];
  for (var i = PauseEndNoZeros.length - 1; i >= 0; i--) {
    if (i == 0)
      ;
    else {
      var diff = PauseEndNoZeros[i] - PauseEndNoZeros[i - 1];
      if (max < diff) {
        max = diff;
      }
      var k2 = { diff, recent_ts: PauseEndNoZeros[i], older_ts: PauseEndNoZeros[i - 1] };
      diffs.push(k2);
      mintomax.push(diff);
    }
  }
  return { max, diffs, mintomax };
}
function removeZerosPauseNs(PauseNS, PauseEnd) {
  var NoZeros = [];
  var max = 0;
  var MinToMax = [];
  var PauseEndNoZeros = [];
  for (var i = 0; i < 256; i++) {
    if (PauseNS[i] == 0)
      ;
    else {
      NoZeros.push(PauseNS[i]);
      MinToMax.push(PauseNS[i]);
      if (max < PauseNS[i]) {
        max = PauseNS[i];
      }
      PauseEndNoZeros.push(PauseEnd[i]);
    }
  }
  return { withoutZeros: NoZeros, Max: max, mintomax: MinToMax, pauseend: PauseEndNoZeros };
}
let initialBySize = [{ "Size": 8, "Mallocs": 0, "Frees": 0 }, { "Size": 16, "Mallocs": 0, "Frees": 0 }, { "Size": 24, "Mallocs": 0, "Frees": 0 }, { "Size": 32, "Mallocs": 0, "Frees": 0 }, { "Size": 48, "Mallocs": 0, "Frees": 0 }, { "Size": 64, "Mallocs": 0, "Frees": 0 }, { "Size": 80, "Mallocs": 0, "Frees": 0 }, { "Size": 96, "Mallocs": 0, "Frees": 0 }, { "Size": 112, "Mallocs": 0, "Frees": 0 }, { "Size": 128, "Mallocs": 0, "Frees": 0 }, { "Size": 144, "Mallocs": 0, "Frees": 0 }, { "Size": 160, "Mallocs": 0, "Frees": 0 }, { "Size": 176, "Mallocs": 0, "Frees": 0 }, { "Size": 192, "Mallocs": 0, "Frees": 0 }, { "Size": 208, "Mallocs": 0, "Frees": 0 }, { "Size": 224, "Mallocs": 0, "Frees": 0 }, { "Size": 240, "Mallocs": 0, "Frees": 0 }, { "Size": 256, "Mallocs": 0, "Frees": 0 }, { "Size": 288, "Mallocs": 0, "Frees": 0 }, { "Size": 320, "Mallocs": 0, "Frees": 0 }, { "Size": 352, "Mallocs": 0, "Frees": 0 }, { "Size": 384, "Mallocs": 0, "Frees": 0 }, { "Size": 416, "Mallocs": 0, "Frees": 0 }, { "Size": 448, "Mallocs": 0, "Frees": 0 }, { "Size": 480, "Mallocs": 0, "Frees": 0 }, { "Size": 512, "Mallocs": 0, "Frees": 0 }, { "Size": 576, "Mallocs": 0, "Frees": 0 }, { "Size": 640, "Mallocs": 0, "Frees": 0 }, { "Size": 704, "Mallocs": 0, "Frees": 0 }, { "Size": 768, "Mallocs": 0, "Frees": 0 }, { "Size": 896, "Mallocs": 0, "Frees": 0 }, { "Size": 1024, "Mallocs": 0, "Frees": 0 }, { "Size": 1152, "Mallocs": 0, "Frees": 0 }, { "Size": 1280, "Mallocs": 0, "Frees": 0 }, { "Size": 1408, "Mallocs": 0, "Frees": 0 }, { "Size": 1536, "Mallocs": 0, "Frees": 0 }, { "Size": 1792, "Mallocs": 0, "Frees": 0 }, { "Size": 2048, "Mallocs": 0, "Frees": 0 }, { "Size": 2304, "Mallocs": 0, "Frees": 0 }, { "Size": 2688, "Mallocs": 0, "Frees": 0 }, { "Size": 3072, "Mallocs": 0, "Frees": 0 }, { "Size": 3200, "Mallocs": 0, "Frees": 0 }, { "Size": 3456, "Mallocs": 0, "Frees": 0 }, { "Size": 4096, "Mallocs": 0, "Frees": 0 }, { "Size": 4864, "Mallocs": 0, "Frees": 0 }, { "Size": 5376, "Mallocs": 0, "Frees": 0 }, { "Size": 6144, "Mallocs": 0, "Frees": 0 }, { "Size": 6528, "Mallocs": 0, "Frees": 0 }, { "Size": 6784, "Mallocs": 0, "Frees": 0 }, { "Size": 6912, "Mallocs": 0, "Frees": 0 }, { "Size": 8192, "Mallocs": 0, "Frees": 0 }, { "Size": 9472, "Mallocs": 0, "Frees": 0 }, { "Size": 9728, "Mallocs": 0, "Frees": 0 }, { "Size": 10240, "Mallocs": 0, "Frees": 0 }, { "Size": 10880, "Mallocs": 0, "Frees": 0 }, { "Size": 12288, "Mallocs": 0, "Frees": 0 }, { "Size": 13568, "Mallocs": 0, "Frees": 0 }, { "Size": 14336, "Mallocs": 0, "Frees": 0 }, { "Size": 16384, "Mallocs": 0, "Frees": 0 }, { "Size": 18432, "Mallocs": 0, "Frees": 0 }];
let initialGcStatsState = {
  GcPausesReports: [{ Frequency: gc_frequency_report, Pauses: gc_pauses_report, FrequencyStats: {}, PauseStats: {}, Ticks: [{ y: 0, nanoseconds: 0 }, { y: 0, nanoseconds: 0 }], FTicks: [{ y: 0, nanoseconds: 0 }, { y: 0, nanoseconds: 0 }] }],
  GcRead: {
    HeapAlloc: 0,
    // HeapAllocP:0,
    HeapInuse: 0,
    // HeapInuseP: 0,
    HeapIdle: 0,
    // HeapIdleP: 0,
    NextGC: 0,
    // NextGCP: 0,
    LastGC: 0,
    // LastGCP: 0,
    BySize: [],
    NumGC: 0,
    OtherSys: 0,
    GCSys: 0,
    BuckHashSys: 0,
    MCacheSys: 0,
    MCacheInuse: 0,
    MSpanSys: 0,
    MSpanInuse: 0,
    StackSys: 0,
    StackInuse: 0,
    HeapObjects: 0,
    HeapReleased: 0,
    HeapSys: 0,
    Frees: 0,
    Mallocs: 0,
    Sys: 0,
    Lookups: 0,
    TotalAlloc: 0,
    PauseTotalNs: 0,
    GCCPUFraction: 0,
    NumberForcedGC: 0,
    Alloc: 0,
    Max: 0,
    PauseNs: [],
    PauseEnd: []
  },
  GcStats: [
    {
      HeapAlloc: 0,
      // HeapAllocP:0,
      HeapInuse: 0,
      // HeapInuseP: 0,
      HeapIdle: 0,
      // HeapIdleP: 0,
      NextGC: 0,
      // NextGCP: 0,
      LastGC: 0,
      // LastGCP: 0,
      BySize: initialBySize,
      NumGC: 0,
      OtherSys: 0,
      GCSys: 0,
      BuckHashSys: 0,
      MCacheSys: 0,
      MCacheInuse: 0,
      MSpanSys: 0,
      MSpanInuse: 0,
      StackSys: 0,
      StackInuse: 0,
      HeapObjects: 0,
      HeapReleased: 0,
      HeapSys: 0,
      Frees: 0,
      Mallocs: 0,
      Sys: 0,
      Lookups: 0,
      TotalAlloc: 0,
      PauseTotalNs: 0,
      GCCPUFraction: 0,
      NumberForcedGC: 0,
      Alloc: 0,
      Max: 0,
      PauseEnd: [],
      PauseNs: []
    }
  ],
  MostRecentGCPause: 0,
  PauseNsForReport: [],
  PauseEndForReport: [],
  LastGC: 0,
  NumGCatReportTime: 0,
  PauseNsSorted: [],
  PauseEndDiffsSorted: []
};
const gcStatsReducer = createSlice({
  name: "gcStatsReducer",
  initialState: initialGcStatsState,
  reducers: {
    gcPauses: (state, action) => {
      state.GcPausesReports = [];
      state.PauseNsForReport = [...state.GcRead.PauseNs];
      state.PauseEndForReport = [...state.GcRead.PauseEnd];
      state.LastGC = state.GcRead.LastGC;
      state.NumGCatReportTime = state.GcRead.NumGC;
      state.MemstatsForReport = state.GcRead;
      if (state.GcRead.NumGC < 256) {
        var a = removeZerosPauseNs(state.PauseNsForReport, state.PauseEndForReport);
        console.log(a, "from do stuff");
        var b = pauseEndDiffs(a.pauseend);
        var pause_end_diffs_unsorted = [...b.mintomax];
        var pause_ns_unsorted = [...a.mintomax];
        pause_end_diffs_unsorted.sort();
        pause_ns_unsorted.sort();
        var pe_stats = calculatePauseEndStats(pause_end_diffs_unsorted, state.NumGCatReportTime);
        var pause_ns_stats = calculatePauseNsStats(pause_ns_unsorted, state.NumGCatReportTime);
        console.log("sorted arrays", pause_end_diffs_unsorted, pause_ns_unsorted);
        var c = calculatePercents(a.withoutZeros, a.Max);
        var aa2 = a.Max / 3;
        var round = 1e4;
        var bb2 = round * Math.round(aa2 / round);
        var cc2 = bb2 / a.Max;
        var dd2 = cc2 * 100;
        var first_y_value = 100 - dd2;
        var ff2 = aa2 * 2;
        var bbb = round * Math.round(ff2 / round);
        var ccc = bbb / a.Max;
        var ddd = ccc * 100;
        var second_y_value = 100 - ddd;
        var ticky = { y: first_y_value, nanoseconds: bb2 };
        var ticky2 = { y: second_y_value, nanoseconds: bbb };
        var tickz = [];
        tickz[0] = ticky;
        tickz[1] = ticky2;
        var d = calculatePauseEndPercents(b.diffs, b.max);
        var aaa = b.max / 3;
        var round = 1e4;
        var bbb = round * Math.round(aaa / round);
        var ccc = bbb / b.max;
        var ddd = ccc * 100;
        var first_y_value = 100 - ddd;
        console.log("first y", b.max, aaa, bbb, ccc, ddd, first_y_value);
        var t2 = aaa * 2;
        var b2 = round * Math.round(t2 / round);
        var c2 = b2 / b.max;
        var d2 = c2 * 100;
        var second_y_value = 100 - d2;
        var fticky = { y: first_y_value, nanoseconds: bbb };
        console.log("second y", b.max, aaa, bbb, ccc, ddd, second_y_value);
        var fticky2 = { y: second_y_value, nanoseconds: b2 };
        var ftickz = [];
        ftickz[0] = fticky;
        ftickz[1] = fticky2;
        let report = { Frequency: d, Pauses: c, FrequencyStats: pe_stats, PauseStats: pause_ns_stats, Ticks: tickz, FTicks: ftickz };
        state.GcPausesReports[0] = report;
      } else {
        state.PauseNsForReport = [...state.GcRead.PauseNs];
        state.PauseEndForReport = [...state.GcRead.PauseEnd];
        var numGC = state.GcRead.NumGC;
        var pausens_max = 0;
        var PauseEndReordered = [];
        var PauseNsReordered = [];
        var find_most_recent_gc = numGC + 255;
        var most_recent = find_most_recent_gc % 256;
        console.log(find_most_recent_gc, most_recent, "finding most recent gc");
        state.MostRecentGCPause = state.PauseNsForReport[most_recent];
        for (var i = 0; i < 256; i++) {
          PauseEndReordered.push(state.PauseEndForReport[(numGC + i) % 256]);
          PauseNsReordered.push(state.PauseNsForReport[(numGC + i) % 256]);
          if (pausens_max < state.PauseNsForReport[i]) {
            pausens_max = state.PauseNsForReport[i];
          }
        }
        state.PauseEndReordered = PauseEndReordered;
        state.PauseNsReordered = PauseNsReordered;
        var b = pauseEndDiffs(PauseEndReordered);
        var pause_end_diffs_unsorted = [...b.mintomax];
        var pause_ns_unsorted = [...PauseNsReordered];
        pause_end_diffs_unsorted.sort();
        pause_ns_unsorted.sort();
        var pe_stats = calculatePauseEndStats(pause_end_diffs_unsorted, state.NumGCatReportTime);
        var pause_ns_stats = calculatePauseNsStats(pause_ns_unsorted, state.NumGCatReportTime);
        console.log("sorted arrays", pause_end_diffs_unsorted, pause_ns_unsorted);
        var c = calculatePercents(PauseNsReordered, pausens_max);
        var aa2 = pausens_max / 3;
        var round = 1e4;
        var bb2 = round * Math.round(aa2 / round);
        var cc2 = bb2 / pausens_max;
        var dd2 = cc2 * 100;
        var first_y_value = 100 - dd2;
        var ff2 = aa2 * 2;
        var bbb = round * Math.round(ff2 / round);
        var ccc = bbb / pausens_max;
        var ddd = ccc * 100;
        var second_y_value = 100 - ddd;
        var ticky = { y: first_y_value, nanoseconds: bb2 };
        var ticky2 = { y: second_y_value, nanoseconds: bbb };
        var tickz = [];
        tickz[0] = ticky;
        tickz[1] = ticky2;
        var d = calculatePauseEndPercents(b.diffs, b.max);
        var aaa = b.max / 3;
        var round = 1e4;
        var bbb = round * Math.round(aaa / round);
        var ccc = bbb / b.max;
        var ddd = ccc * 100;
        var first_y_value = 100 - ddd;
        console.log("first y", b.max, aaa, bbb, ccc, ddd, first_y_value);
        var t2 = aaa * 2;
        var b2 = round * Math.round(t2 / round);
        var c2 = b2 / b.max;
        var d2 = c2 * 100;
        var second_y_value = 100 - d2;
        console.log("second y", b.max, aaa, bbb, ccc, ddd, first_y_value);
        var fticky = { y: first_y_value, nanoseconds: bbb };
        var fticky2 = { y: second_y_value, nanoseconds: b2 };
        var ftickz = [];
        ftickz[0] = fticky;
        ftickz[1] = fticky2;
        let report = { Frequency: d, Pauses: c, FrequencyStats: pe_stats, PauseStats: pause_ns_stats, Ticks: tickz, FTicks: ftickz };
        state.GcPausesReports[0] = report;
      }
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchDebugVars.fulfilled, (state, action) => {
      var ap = action.payload.memstats;
      state.GcRead.HeapAlloc = ap.HeapAlloc;
      state.GcRead.HeapIdle = ap.HeapIdle;
      state.GcRead.HeapInuse = ap.HeapInuse;
      state.GcRead.NextGC = ap.NextGC;
      state.GcRead.LastGC = ap.LastGC;
      var ap = action.payload.memstats;
      state.GcRead.NumGC = ap.NumGC;
      state.GcRead.OtherSys = ap.OtherSys;
      state.GcRead.GCSys = ap.GCSys;
      state.GcRead.BuckHashSys = ap.BuckHashSys;
      state.GcRead.MCacheSys = ap.MCacheSys;
      state.GcRead.MCacheInuse = ap.MCacheInuse;
      state.GcRead.MSpanSys = ap.MSpanSys;
      state.GcRead.MSpanInuse = ap.MSpanInuse;
      state.GcRead.StackSys = ap.StackSys;
      state.GcRead.StackInuse = ap.StackInuse;
      state.GcRead.HeapObjects = ap.HeapObjects;
      state.GcRead.HeapReleased = ap.HeapReleased;
      state.GcRead.HeapSys = ap.HeapSys;
      state.GcRead.Frees = ap.Frees;
      state.GcRead.Mallocs = ap.Mallocs;
      state.GcRead.Sys = ap.Sys;
      state.GcRead.Lookups = ap.Lookups;
      state.GcRead.TotalAlloc = ap.TotalAlloc;
      state.GcRead.PauseTotalNs = ap.PauseTotalNs;
      state.GcRead.GCCPUFraction = ap.GCCPUFraction;
      state.GcRead.Alloc = ap.Alloc;
      state.GcRead.BySize = action.payload.memstats.BySize;
      state.GcRead.PauseEnd = ap.PauseEnd;
      state.GcRead.PauseNs = ap.PauseNs;
      console.log(ap.PauseEnd, ap.PauseNs);
      let max = Math.max(state.GcRead.HeapAlloc, state.GcRead.HeapIdle, state.GcRead.HeapInuse, state.GcRead.NextGC);
      state.GcRead.Max = max;
      var k2 = [];
      k2[0] = state.GcRead;
      state.GcStats = k2;
    });
  }
});
const { gcPauses } = gcStatsReducer.actions;
const gcStatsReducer$1 = gcStatsReducer.reducer;
const reducer = {
  controller: controllerReducer$1,
  gcstats: gcStatsReducer$1
};
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: false
});
const Button = ({ title, handleSubmit }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-flow-row auto-rows-max", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
      onClick: handleSubmit,
      children: title
    }
  ) });
};
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p2 in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p2))
        d2[p2] = b2[p2];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o[s], i = 0;
  if (m2)
    return m2.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i = m2.call(o), r2, ar = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l2 = from.length, ar; i < l2; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function isFunction(value) {
  return typeof value === "function";
}
function createErrorClass(createImpl) {
  var _super = function(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}
var UnsubscriptionError = createErrorClass(function(_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
      return i + 1 + ") " + err.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = errors;
  };
});
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription2.prototype.unsubscribe = function() {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                _a.call(_parentage_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
              _b.call(_finalizers_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription2.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription2) {
      teardown._removeParent(this);
    }
  };
  Subscription2.EMPTY = function() {
    var empty = new Subscription2();
    empty.closed = true;
    return empty;
  }();
  return Subscription2;
}();
Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};
var timeoutProvider = {
  setTimeout: function(handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  },
  clearTimeout: function(handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: void 0
};
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    {
      throw err;
    }
  });
}
function noop() {
}
function errorContext(cb2) {
  {
    cb2();
  }
}
var Subscriber = function(_super) {
  __extends(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber2.create = function(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber2.prototype.next = function(value) {
    if (this.isStopped)
      ;
    else {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (this.isStopped)
      ;
    else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (this.isStopped)
      ;
    else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber2;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
  function ConsumerObserver2(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver2.prototype.next = function(value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver2.prototype.error = function(err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver2.prototype.complete = function() {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver2;
}();
var SafeSubscriber = function(_super) {
  __extends(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
        error: error !== null && error !== void 0 ? error : void 0,
        complete: complete !== null && complete !== void 0 ? complete : void 0
      };
    } else {
      var context_1;
      if (_this && config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function() {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber2;
}(Subscriber);
function handleUnhandledError(error) {
  {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};
var observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
function identity(x2) {
  return x2;
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}
var Observable = function() {
  function Observable2(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable2.prototype.lift = function(operator) {
    var observable2 = new Observable2();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  };
  Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function() {
      var _a = _this, operator = _a.operator, source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable2.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable2.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function(value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable2.prototype._subscribe = function(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable2.prototype[observable] = function() {
    return this;
  };
  Observable2.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable2.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x2) {
        return value = x2;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable2.create = function(subscribe) {
    return new Observable2(subscribe);
  };
  return Observable2;
}();
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}
var dateTimestampProvider = {
  now: function() {
    return Date.now();
  },
  delegate: void 0
};
var Action = function(_super) {
  __extends(Action2, _super);
  function Action2(scheduler2, work) {
    return _super.call(this) || this;
  }
  Action2.prototype.schedule = function(state, delay) {
    return this;
  };
  return Action2;
}(Subscription);
var intervalProvider = {
  setInterval: function(handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  },
  clearInterval: function(handle) {
    var delegate = intervalProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: void 0
};
var AsyncAction = function(_super) {
  __extends(AsyncAction2, _super);
  function AsyncAction2(scheduler2, work) {
    var _this = _super.call(this, scheduler2, work) || this;
    _this.scheduler = scheduler2;
    _this.work = work;
    _this.pending = false;
    return _this;
  }
  AsyncAction2.prototype.schedule = function(state, delay) {
    var _a;
    if (delay === void 0) {
      delay = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = state;
    var id2 = this.id;
    var scheduler2 = this.scheduler;
    if (id2 != null) {
      this.id = this.recycleAsyncId(scheduler2, id2, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler2, this.id, delay);
    return this;
  };
  AsyncAction2.prototype.requestAsyncId = function(scheduler2, _id, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return intervalProvider.setInterval(scheduler2.flush.bind(scheduler2, this), delay);
  };
  AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id2, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    if (delay != null && this.delay === delay && this.pending === false) {
      return id2;
    }
    if (id2 != null) {
      intervalProvider.clearInterval(id2);
    }
    return void 0;
  };
  AsyncAction2.prototype.execute = function(state, delay) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  AsyncAction2.prototype._execute = function(state, _delay) {
    var errored = false;
    var errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error("Scheduled action threw falsy error");
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };
  AsyncAction2.prototype.unsubscribe = function() {
    if (!this.closed) {
      var _a = this, id2 = _a.id, scheduler2 = _a.scheduler;
      var actions = scheduler2.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      arrRemove(actions, this);
      if (id2 != null) {
        this.id = this.recycleAsyncId(scheduler2, id2, null);
      }
      this.delay = null;
      _super.prototype.unsubscribe.call(this);
    }
  };
  return AsyncAction2;
}(Action);
var Scheduler = function() {
  function Scheduler2(schedulerActionCtor, now) {
    if (now === void 0) {
      now = Scheduler2.now;
    }
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  Scheduler2.prototype.schedule = function(work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  };
  Scheduler2.now = dateTimestampProvider.now;
  return Scheduler2;
}();
var AsyncScheduler = function(_super) {
  __extends(AsyncScheduler2, _super);
  function AsyncScheduler2(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }
    var _this = _super.call(this, SchedulerAction, now) || this;
    _this.actions = [];
    _this._active = false;
    return _this;
  }
  AsyncScheduler2.prototype.flush = function(action) {
    var actions = this.actions;
    if (this._active) {
      actions.push(action);
      return;
    }
    var error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsyncScheduler2;
}(Scheduler);
var asyncScheduler = new AsyncScheduler(AsyncAction);
var async = asyncScheduler;
function isScheduler(value) {
  return value && isFunction(value.schedule);
}
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}
function timer(dueTime, intervalOrScheduler, scheduler2) {
  if (dueTime === void 0) {
    dueTime = 0;
  }
  if (scheduler2 === void 0) {
    scheduler2 = async;
  }
  var intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if (isScheduler(intervalOrScheduler)) {
      scheduler2 = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new Observable(function(subscriber) {
    var due = isValidDate(dueTime) ? +dueTime - scheduler2.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    var n2 = 0;
    return scheduler2.schedule(function() {
      if (!subscriber.closed) {
        subscriber.next(n2++);
        if (0 <= intervalDuration) {
          this.schedule(void 0, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}
const useAppDispatch = useDispatch;
const useAppSelector = useSelector;
const Menu = () => {
  const dispatch = useAppDispatch();
  const subscription = reactExports.useRef(null);
  function start() {
    console.log("test");
    if (subscription.current === null) {
      subscription.current = timer(0, 1e3).subscribe((n2) => dispatch(fetchDebugVars()));
      dispatch(onButtonSubmit("start"));
    }
  }
  function stop() {
    console.log("test");
    subscription.current.unsubscribe();
    subscription.current = null;
    dispatch(onButtonSubmit("stop"));
  }
  function gc_pauses() {
    dispatch(gcPauses("hi"));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto bg-white-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-[100px] w-full overflow-x-scroll rounded-lg p-6 lg:overflow-visible", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-max gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        title: "start",
        handleSubmit: start
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        title: "stop",
        handleSubmit: stop
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        title: "gc pauses and frequency  snapshot",
        handleSubmit: gc_pauses
      }
    )
  ] }) }) });
};
const GcStats = ({ data }) => {
  function position_next_gc() {
    var a, b, c, percent, height_of_rectangle;
    if (data.NextGC == 0 && data.Max == 0) {
      return 0 + 20;
    }
    if (data.NextGC == data.Max) {
      return 0 + 20;
    } else {
      a = data.NextGC;
      b = data.Max;
      c = 100;
      percent = a / b * c;
    }
    height_of_rectangle = 220;
    var val = height_of_rectangle - percent * 2 + 20;
    return val;
  }
  function height_plus_offset() {
    return 220 + 40;
  }
  function fn_labels() {
    return 220 + 40;
  }
  function fn_height_plus_offset_plus20() {
    return 220 + 20 + 20 + 20;
  }
  function fn_heap_inuse_base() {
    return 220 + 40;
  }
  function fn_heap_idle_base() {
    return 220 + 40;
  }
  function fn_heap_alloc_base() {
    return 220 + 40;
  }
  function fn_position_heap_alloc_num() {
    var a, b, c, percent, height_of_rectangle;
    if (data.HeapAlloc == 0 && data.Max == 0) {
      return 0 + 240;
    }
    if (data.HeapAlloc == data.Max) {
      return 0 + 20;
    } else {
      a = data.HeapAlloc;
      b = data.Max;
      c = 100;
      percent = a / b * c;
    }
    height_of_rectangle = 240;
    var val = height_of_rectangle - percent * 2;
    return val + 20;
  }
  function fn_position_heap_alloc() {
    var a, b, c, percent, height_of_rectangle;
    if (data.HeapAlloc == 0 && data.Max == 0) {
      return 0 + 260;
    }
    if (data.HeapAlloc == data.Max) {
      return 0 + 20;
    } else {
      a = data.HeapAlloc;
      b = data.Max;
      c = 100;
      percent = a / b * c;
    }
    height_of_rectangle = 260;
    var val = height_of_rectangle - percent * 2;
    return val;
  }
  function formatBytes(a, b = 2) {
    if (a == 0) {
      return "";
    }
    if (!+a)
      return "0 Bytes";
    const c = 0 > b ? 0 : b, d = Math.floor(Math.log(a) / Math.log(1024));
    return `${parseFloat((a / Math.pow(1024, d)).toFixed(c))} ${["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"][d]}`;
  }
  function fn_position_heap_in_use_num() {
    var a, b, c, percent, height_of_rectangle;
    if (data.HeapInuse == 0 && data.Max == 0) {
      return 0 + 240;
    }
    if (data.HeapInuse == data.Max) {
      return 0 + 20;
    } else {
      a = data.HeapInuse;
      b = data.Max;
      c = 100;
      percent = a / b * c;
    }
    height_of_rectangle = 240;
    var val = height_of_rectangle - percent * 2;
    return val;
  }
  function fn_position_heap_in_use() {
    var a, b, c, percent, height_of_rectangle;
    if (data.HeapInuse == 0 && data.Max == 0) {
      return 0 + 260;
    }
    if (data.HeapInuse == data.Max) {
      return 0 + 20;
    } else {
      a = data.HeapInuse;
      b = data.Max;
      c = 100;
      percent = a / b * c;
    }
    height_of_rectangle = 260;
    var val = height_of_rectangle - percent * 2;
    return val;
  }
  function fn_position_heap_idle_num() {
    var a, b, c, percent, height_of_rectangle;
    if (data.HeapIdle == 0 && data.Max == 0) {
      return 0 + 240;
    }
    if (data.HeapIdle == data.Max) {
      return 0 + 20;
    } else {
      a = data.HeapIdle;
      b = data.Max;
      c = 100;
      percent = a / b * c;
    }
    height_of_rectangle = 240;
    var val = height_of_rectangle - percent * 2;
    return val + 20;
  }
  function fn_position_heap_idle() {
    var a, b, c, percent, height_of_rectangle;
    if (data.HeapIdle == 0 && data.Max == 0) {
      return 0 + 260;
    }
    if (data.HeapIdle == data.Max) {
      return 0 + 20;
    } else {
      a = data.HeapIdle;
      b = data.Max;
      c = 100;
      percent = a / b * c;
    }
    height_of_rectangle = 260;
    var val = height_of_rectangle - percent * 2;
    return val;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h64 col-span-2 p-4 rounded-lg bg-white-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      width: "740",
      height: "290",
      style: {
        marginLeft: "0px",
        marginTop: "0px"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(0, 30)", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "y axis", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "10", y: "20", fontSize: "20", fill: "black", children: [
            " NextGC : ",
            data.NextGC,
            " "
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "10", y: "40", fontSize: "20", fill: "black", children: [
            " HeapAlloc: ",
            data.HeapAlloc,
            " ",
            formatBytes(data.HeapAlloc),
            " "
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "10", y: "60", fontSize: "20", fill: "black", children: [
            " HeapIdle: ",
            data.HeapIdle,
            " "
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "10", y: "80", fontSize: "20", fill: "black", children: [
            " HeapInuse: ",
            data.HeapInuse,
            " "
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "10", y: "100", fontSize: "20", fill: "black", children: [
            " LastGC: ",
            data.LastGC,
            " "
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0", y: "0", width: "590", height: "290", fill: "#fff", rx: "4", ry: "4", stroke: "#fff", strokeWidth: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "620", y: "10", fontSize: "20", fill: "#795548", children: [
            " NumGC : ",
            data.NumGC
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "305", y: position_next_gc(), fontSize: "20", fill: "#795548", children: [
            " NextGC : ",
            data.NextGC
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "300", cy: position_next_gc(), r: "4", fill: "#795548" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "300", cy: height_plus_offset(), r: "4", fill: "#795548" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "300", x2: "300", y1: height_plus_offset(), y2: position_next_gc(), strokeWidth: "4", stroke: "#795548", strokeOpacity: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "260", y: fn_height_plus_offset_plus20(), fontSize: "20", fill: "#795548", children: [
            " LastGC:",
            data.LastGC,
            " "
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "323", x2: "323", y1: fn_heap_alloc_base(), y2: fn_position_heap_alloc(), strokeWidth: "15", stroke: "#673ab7", strokeOpacity: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "330", y: fn_position_heap_alloc_num(), fontSize: "20", fill: "#673ab7", children: [
            "  ",
            formatBytes(data.HeapAlloc)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "332", y: fn_labels(), fontSize: "20", fill: "#673ab7", children: " HeapAlloc" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "150", x2: "150", y1: fn_heap_inuse_base(), y2: fn_position_heap_in_use(), strokeWidth: "15", stroke: "#ff5722", strokeOpacity: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "160", y: fn_position_heap_in_use_num(), fontSize: "20", fill: "#ff5722", children: [
            "  ",
            formatBytes(data.HeapInuse)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "160", y: fn_labels(), fontSize: "20", fill: "#ff5722", children: " HeapInUse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "25", x2: "25", y1: fn_heap_idle_base(), y2: fn_position_heap_idle(), strokeWidth: "15", stroke: "#009688", strokeOpacity: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "35", y: fn_position_heap_idle_num(), fontSize: "20", fill: "#009688", children: formatBytes(data.HeapIdle) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "34", y: fn_labels(), fontSize: "20", fill: "#009688", children: "HeapIdle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "320", y1: fn_position_heap_alloc(), x2: "320", y2: fn_position_heap_alloc(), strokeWidth: "3", stroke: "#673ab7", markerStart: "url(#arrow)", markerEnd: "url(#arrow)" })
        ] })
      ] })
    }
  ) });
};
const Row = ({ data, x: x2, y: y2 }) => {
  let translate = "translate(" + x2 + "," + y2 + ")";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: translate, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "20", y: "30", fontSize: "16px", fontWeight: "bold", fill: "rgb(63, 81, 181)", textAnchor: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { x: "20", dy: "1em", children: data.Size }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "150", y: "30", fontSize: "16px", textAnchor: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { x: "150", dy: "1em", children: data.Mallocs }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "250", y: "30", fontSize: "16px", textAnchor: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { x: "280", dy: "1em", children: data.Frees }) })
  ] });
};
const BySize = ({ data }) => {
  function formatBytes(a, b = 2) {
    if (a == 0) {
      return "";
    }
    if (!+a)
      return "0 Bytes";
    const c = 0 > b ? 0 : b, d = Math.floor(Math.log(a) / Math.log(1024));
    return `${parseFloat((a / Math.pow(1024, d)).toFixed(c))} ${["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"][d]}`;
  }
  function roundup(data2) {
    return data2.toFixed(3);
  }
  function makeTable(bySizeObject, i) {
    var num;
    var yValue;
    var x2;
    if (i <= 19) {
      num = (i + 1) * 19;
      yValue = num.toString();
      x2 = 0;
    } else if (i > 19 && i <= 39) {
      num = (i - 19) * 20;
      yValue = num.toString();
      x2 = 420;
    } else if (i > 39) {
      num = (i - 39) * 20;
      yValue = num.toString();
      x2 = 850;
    }
    var props = {
      data: bySizeObject,
      y: yValue,
      x: x2
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { ...props });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h64 col-span-4 p-4 rounded-lg bg-white-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: "1250",
      height: "660",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(0,0)", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0", y: "0", width: "380", height: "200", stroke: "#fff", fill: "#fff", rx: "4", ry: "4", strokeWidth: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(0,0)", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "5", y: "30", fontSize: "20", fill: "black", children: [
              " ",
              data.HeapSys,
              " HeapSys : ",
              formatBytes(data.HeapSys)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "5", y: "50", fontSize: "20", fill: "black", children: [
              "+ ",
              data.StackSys,
              " StackSys  ",
              formatBytes(data.StackSys),
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "5", y: "70", fontSize: "20", fill: "black", children: [
              "+ ",
              data.MSpanSys,
              " MSpanSys ",
              formatBytes(data.MSpanSys)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "5", y: "90", fontSize: "20", fill: "black", children: [
              "+ ",
              data.MCacheSys,
              "  MCacheSys ",
              formatBytes(data.MCacheSys)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "5", y: "110", fontSize: "20", fill: "black", children: [
              "+ ",
              data.BuckHashSys,
              " BuckHashSys ",
              formatBytes(data.BuckHashSys)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "5", y: "130", fontSize: "20", fill: "black", children: [
              "+ ",
              data.GCSys,
              " GCSys ",
              formatBytes(data.GCSys)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "5", y: "150", fontSize: "20", fill: "black", children: [
              "+ ",
              data.OtherSys,
              " OtherSys ",
              formatBytes(data.OtherSys)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "5", y: "190", fontSize: "20", children: [
              " = ",
              data.Sys,
              " Sys ",
              formatBytes(data.Sys)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "390", y: "0", width: "1000", height: "200", stroke: "#fff", fill: "#fff", rx: "4", ry: "4", strokeWidth: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(250,0)", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "700", y: "30", fontSize: "20", fill: "black", children: [
              " MSpanInuse ",
              data.MSpanInuse,
              " ",
              formatBytes(data.MSpanInuse),
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "700", y: "50", fontSize: "20", fill: "black", children: [
              " MCacheInuse ",
              data.MCacheInuse,
              " ",
              formatBytes(data.MCacheInuse)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "700", y: "70", fontSize: "20", fill: "black", children: [
              " StackInuse : ",
              data.StackInuse,
              " ",
              formatBytes(data.StackSys)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(250,0)", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "120", y: "110", fontSize: "20", fill: "black", children: [
              " Total Alloc ",
              data.TotalAlloc,
              " ",
              formatBytes(data.TotalAlloc),
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "120", y: "30", fontSize: "20", fill: "black", children: [
              " Mallocs: ",
              data.Mallocs,
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "120", y: "50", fontSize: "20", fill: "black", children: [
              " Frees: ",
              data.Frees,
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "120", y: "70", fontSize: "20", fill: "black", children: [
              " HeapObjects: ",
              data.HeapObjects,
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "600", y: "150", fontSize: "20", fill: "black", children: [
              " HeapReleased : ",
              data.HeapReleased,
              " ",
              formatBytes(data.HeapReleased)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "120", y: "150", fontSize: "20", fill: "black", children: [
              " GCCPUFraction :  ",
              roundup(data.GCCPUFraction)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "400", y: "70", fontSize: "20", fill: "black", children: [
              " PauseTotalNs: ",
              data.PauseTotalNs,
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "400", y: "50", fontSize: "20", fill: "black", children: [
              " NumForcedGC:",
              data.NumberForcedGC,
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "400", y: "30", fontSize: "20", fill: "black", children: [
              " NumGC:",
              data.NumGC,
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "600", y: "130", fontSize: "20", fill: "black", children: [
              " Lookups :",
              data.Lookups,
              " "
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(0,210)", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0", y: "0", width: "1280", height: "450", stroke: "#fff", fill: "#fff", rx: "4", ry: "4", strokeWidth: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { id: "columnGroup", transform: "translate(10, 0)", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "0", y: "30", fontSize: "16px", fontWeight: "bold", fill: "rgb(63, 81, 181)", textAnchor: "end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { x: "30", fontWeight: "bold", fill: "rgb(63, 81, 181)", children: "Size" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { x: "180", fontWeight: "bold", fill: "rgb(63, 81, 181)", children: "Mallocs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { x: "300", fontWeight: "bold", fill: "rgb(63, 81, 181)", children: "Frees" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "30", y: "30", fontSize: "16px", fontWeight: "bold", fill: "rgb(63, 81, 181)", textAnchor: "end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { x: "440", fontWeight: "bold", fill: "rgb(63, 81, 181)", children: "Size" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { x: "600", fontWeight: "bold", fill: "rgb(63, 81, 181)", children: "Mallocs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { x: "720", fontWeight: "bold", fill: "rgb(63, 81, 181)", children: "Frees" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "30", y: "30", fontSize: "16px", fontWeight: "bold", fill: "rgb(63, 81, 181)", textAnchor: "end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { x: "860", fontWeight: "bold", fill: "rgb(63, 81, 181)", children: "Size" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { x: "1020", fontWeight: "bold", fill: "rgb(63, 81, 181)", children: "Mallocs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { x: "1150", fontWeight: "bold", fill: "rgb(63, 81, 181)", children: "Frees" })
            ] }),
            data.BySize.map(makeTable.bind(void 0))
          ] })
        ] })
      ]
    }
  ) });
};
const GCFrequency = ({ report, stats, ticks }) => {
  function lineOpacity(tick, index) {
    if (tick.y == 0) {
      return 0;
    } else {
      return 1;
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      width: "1400",
      height: "260",
      style: {
        marginLeft: "0px",
        marginTop: "0px"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(0, 0)", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "220", fontSize: "20", children: "GC Frequency Diffs (subtracts previous from subsequent timestamp) " }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "50", y: "240", fontSize: "20", children: [
          " Max:",
          /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { stroke: "blue", fill: "blue", children: stats.max }),
          " DataPoints:",
          /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { stroke: "blue", fill: "blue", children: stats.sample }),
          " 25th percentile: ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tspan", { stroke: "blue", fill: "blue", children: [
            stats.twenty_five,
            " "
          ] }),
          "  75th: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { stroke: "blue", fill: "blue", children: stats.seventy_five }),
          " Median: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { stroke: "blue", fill: "blue", children: stats.median }),
          " Start GC: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { stroke: "blue", fill: "blue", children: stats.start_gc }),
          "End GC: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { stroke: "blue", fill: "blue", children: stats.end_gc }),
          "  "
        ] }),
        ticks.map(
          (tick, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "10", y: tick.y * 2, children: [
              " ",
              tick.nanoseconds
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "120", x2: "1200", y1: tick.y * 2, y2: tick.y * 2, stroke: "black", strokeWidth: "1", opacity: lineOpacity(tick) })
          ] })
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(120, 0)", children: report.map(
          (frequency_unit, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              width: "3px",
              id: frequency_unit.diff,
              height: frequency_unit.percent * 2,
              x: (index + 1) * 4,
              y: 200 - frequency_unit.percent * 2,
              fill: "blue"
            },
            index
          )
        ) })
      ] })
    }
  ) });
};
const GCPauses = ({ report, stats, ticks }) => {
  function lineOpacity(tick, index) {
    if (tick.y == 0) {
      return 0;
    } else {
      return 1;
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      width: "1400",
      height: "260",
      style: {
        marginLeft: "0px",
        marginTop: "0px"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(0, 0)", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "220", fontSize: "20", children: "GC Pause Durations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "50", y: "240", fontSize: "20", children: [
          " Max:",
          /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { stroke: "blue", fill: "blue", children: stats.max }),
          " DataPoints:",
          /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { stroke: "blue", fill: "blue", children: stats.sample }),
          " 25th percentile: ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tspan", { stroke: "blue", fill: "blue", children: [
            stats.twenty_five,
            " "
          ] }),
          "  75th: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { stroke: "blue", fill: "blue", children: stats.seventy_five }),
          " Median: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { stroke: "blue", fill: "blue", children: stats.median }),
          " Start GC: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { stroke: "blue", fill: "blue", children: stats.start_gc }),
          "End GC: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { stroke: "blue", fill: "blue", children: stats.end_gc }),
          "  "
        ] }),
        ticks.map(
          (tick, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "10", y: tick.y * 2, children: [
              " ",
              tick.nanoseconds
            ] }, index),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "120", x2: "1200", y1: tick.y * 2, y2: tick.y * 2, stroke: "black", strokeWidth: "1", opacity: lineOpacity(tick) }, index)
          ] })
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(120, 0)", children: report.map(
          (pause_unit, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              width: "3px",
              id: pause_unit.pause,
              height: pause_unit.percent * 2,
              x: (index + 1) * 4,
              y: 200 - pause_unit.percent * 2,
              fill: "red"
            },
            index
          )
        ) })
      ] })
    }
  ) });
};
const ReportList = () => {
  const reportList = useAppSelector((state) => state.gcstats.GcPausesReports);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "max-w-8xl space-y-1 text-gray-500 list-disc list-inside", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(GCPauses, { report: reportList[0].Pauses, stats: reportList[0].PauseStats, ticks: reportList[0].Ticks })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(GCFrequency, { report: reportList[0].Frequency, stats: reportList[0].FrequencyStats, ticks: reportList[0].FTicks })
    ] })
  ] });
};
function App() {
  reactExports.useState(0);
  const heapGraphs = useAppSelector((state) => state.gcstats.GcStats);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl mx-auto bg-white-200 h-dvh mt-10 space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-8xl mx-auto ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-8xl mx-auto grid grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GcStats, { data: heapGraphs[0] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h64 col-span-2 grid grid-rows-3 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-white-500 grid place-content-left row-span-3 col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "labels", className: "m-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "header", className: "m-0 p-0" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BySize, { data: heapGraphs[0] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-8xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportList, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "h-48" })
  ] }) });
}
var d3$1 = { exports: {} };
(function(module) {
  (function() {
    var d32 = {
      version: "3.5.5"
    };
    var d3_arraySlice = [].slice, d3_array = function(list) {
      return d3_arraySlice.call(list);
    };
    var d3_document = this.document;
    function d3_documentElement(node) {
      return node && (node.ownerDocument || node.document || node).documentElement;
    }
    function d3_window(node) {
      return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
    }
    if (d3_document) {
      try {
        d3_array(d3_document.documentElement.childNodes)[0].nodeType;
      } catch (e) {
        d3_array = function(list) {
          var i = list.length, array = new Array(i);
          while (i--)
            array[i] = list[i];
          return array;
        };
      }
    }
    if (!Date.now)
      Date.now = function() {
        return +/* @__PURE__ */ new Date();
      };
    if (d3_document) {
      try {
        d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
      } catch (error) {
        var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
        d3_element_prototype.setAttribute = function(name, value) {
          d3_element_setAttribute.call(this, name, value + "");
        };
        d3_element_prototype.setAttributeNS = function(space, local, value) {
          d3_element_setAttributeNS.call(this, space, local, value + "");
        };
        d3_style_prototype.setProperty = function(name, value, priority) {
          d3_style_setProperty.call(this, name, value + "", priority);
        };
      }
    }
    d32.ascending = d3_ascending;
    function d3_ascending(a, b) {
      return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }
    d32.descending = function(a, b) {
      return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
    };
    d32.min = function(array, f2) {
      var i = -1, n2 = array.length, a, b;
      if (arguments.length === 1) {
        while (++i < n2)
          if ((b = array[i]) != null && b >= b) {
            a = b;
            break;
          }
        while (++i < n2)
          if ((b = array[i]) != null && a > b)
            a = b;
      } else {
        while (++i < n2)
          if ((b = f2.call(array, array[i], i)) != null && b >= b) {
            a = b;
            break;
          }
        while (++i < n2)
          if ((b = f2.call(array, array[i], i)) != null && a > b)
            a = b;
      }
      return a;
    };
    d32.max = function(array, f2) {
      var i = -1, n2 = array.length, a, b;
      if (arguments.length === 1) {
        while (++i < n2)
          if ((b = array[i]) != null && b >= b) {
            a = b;
            break;
          }
        while (++i < n2)
          if ((b = array[i]) != null && b > a)
            a = b;
      } else {
        while (++i < n2)
          if ((b = f2.call(array, array[i], i)) != null && b >= b) {
            a = b;
            break;
          }
        while (++i < n2)
          if ((b = f2.call(array, array[i], i)) != null && b > a)
            a = b;
      }
      return a;
    };
    d32.extent = function(array, f2) {
      var i = -1, n2 = array.length, a, b, c;
      if (arguments.length === 1) {
        while (++i < n2)
          if ((b = array[i]) != null && b >= b) {
            a = c = b;
            break;
          }
        while (++i < n2)
          if ((b = array[i]) != null) {
            if (a > b)
              a = b;
            if (c < b)
              c = b;
          }
      } else {
        while (++i < n2)
          if ((b = f2.call(array, array[i], i)) != null && b >= b) {
            a = c = b;
            break;
          }
        while (++i < n2)
          if ((b = f2.call(array, array[i], i)) != null) {
            if (a > b)
              a = b;
            if (c < b)
              c = b;
          }
      }
      return [a, c];
    };
    function d3_number(x2) {
      return x2 === null ? NaN : +x2;
    }
    function d3_numeric(x2) {
      return !isNaN(x2);
    }
    d32.sum = function(array, f2) {
      var s = 0, n2 = array.length, a, i = -1;
      if (arguments.length === 1) {
        while (++i < n2)
          if (d3_numeric(a = +array[i]))
            s += a;
      } else {
        while (++i < n2)
          if (d3_numeric(a = +f2.call(array, array[i], i)))
            s += a;
      }
      return s;
    };
    d32.mean = function(array, f2) {
      var s = 0, n2 = array.length, a, i = -1, j = n2;
      if (arguments.length === 1) {
        while (++i < n2)
          if (d3_numeric(a = d3_number(array[i])))
            s += a;
          else
            --j;
      } else {
        while (++i < n2)
          if (d3_numeric(a = d3_number(f2.call(array, array[i], i))))
            s += a;
          else
            --j;
      }
      if (j)
        return s / j;
    };
    d32.quantile = function(values, p2) {
      var H2 = (values.length - 1) * p2 + 1, h = Math.floor(H2), v2 = +values[h - 1], e = H2 - h;
      return e ? v2 + e * (values[h] - v2) : v2;
    };
    d32.median = function(array, f2) {
      var numbers = [], n2 = array.length, a, i = -1;
      if (arguments.length === 1) {
        while (++i < n2)
          if (d3_numeric(a = d3_number(array[i])))
            numbers.push(a);
      } else {
        while (++i < n2)
          if (d3_numeric(a = d3_number(f2.call(array, array[i], i))))
            numbers.push(a);
      }
      if (numbers.length)
        return d32.quantile(numbers.sort(d3_ascending), 0.5);
    };
    d32.variance = function(array, f2) {
      var n2 = array.length, m2 = 0, a, d, s = 0, i = -1, j = 0;
      if (arguments.length === 1) {
        while (++i < n2) {
          if (d3_numeric(a = d3_number(array[i]))) {
            d = a - m2;
            m2 += d / ++j;
            s += d * (a - m2);
          }
        }
      } else {
        while (++i < n2) {
          if (d3_numeric(a = d3_number(f2.call(array, array[i], i)))) {
            d = a - m2;
            m2 += d / ++j;
            s += d * (a - m2);
          }
        }
      }
      if (j > 1)
        return s / (j - 1);
    };
    d32.deviation = function() {
      var v2 = d32.variance.apply(this, arguments);
      return v2 ? Math.sqrt(v2) : v2;
    };
    function d3_bisector(compare) {
      return {
        left: function(a, x2, lo, hi2) {
          if (arguments.length < 3)
            lo = 0;
          if (arguments.length < 4)
            hi2 = a.length;
          while (lo < hi2) {
            var mid = lo + hi2 >>> 1;
            if (compare(a[mid], x2) < 0)
              lo = mid + 1;
            else
              hi2 = mid;
          }
          return lo;
        },
        right: function(a, x2, lo, hi2) {
          if (arguments.length < 3)
            lo = 0;
          if (arguments.length < 4)
            hi2 = a.length;
          while (lo < hi2) {
            var mid = lo + hi2 >>> 1;
            if (compare(a[mid], x2) > 0)
              hi2 = mid;
            else
              lo = mid + 1;
          }
          return lo;
        }
      };
    }
    var d3_bisect = d3_bisector(d3_ascending);
    d32.bisectLeft = d3_bisect.left;
    d32.bisect = d32.bisectRight = d3_bisect.right;
    d32.bisector = function(f2) {
      return d3_bisector(f2.length === 1 ? function(d, x2) {
        return d3_ascending(f2(d), x2);
      } : f2);
    };
    d32.shuffle = function(array, i0, i1) {
      if ((m2 = arguments.length) < 3) {
        i1 = array.length;
        if (m2 < 2)
          i0 = 0;
      }
      var m2 = i1 - i0, t2, i;
      while (m2) {
        i = Math.random() * m2-- | 0;
        t2 = array[m2 + i0], array[m2 + i0] = array[i + i0], array[i + i0] = t2;
      }
      return array;
    };
    d32.permute = function(array, indexes) {
      var i = indexes.length, permutes = new Array(i);
      while (i--)
        permutes[i] = array[indexes[i]];
      return permutes;
    };
    d32.pairs = function(array) {
      var i = 0, n2 = array.length - 1, p1 = array[0], pairs = new Array(n2 < 0 ? 0 : n2);
      while (i < n2)
        pairs[i] = [p1, p1 = array[++i]];
      return pairs;
    };
    d32.zip = function() {
      if (!(n2 = arguments.length))
        return [];
      for (var i = -1, m2 = d32.min(arguments, d3_zipLength), zips = new Array(m2); ++i < m2; ) {
        for (var j = -1, n2, zip = zips[i] = new Array(n2); ++j < n2; ) {
          zip[j] = arguments[j][i];
        }
      }
      return zips;
    };
    function d3_zipLength(d) {
      return d.length;
    }
    d32.transpose = function(matrix) {
      return d32.zip.apply(d32, matrix);
    };
    d32.keys = function(map) {
      var keys = [];
      for (var key in map)
        keys.push(key);
      return keys;
    };
    d32.values = function(map) {
      var values = [];
      for (var key in map)
        values.push(map[key]);
      return values;
    };
    d32.entries = function(map) {
      var entries = [];
      for (var key in map)
        entries.push({
          key,
          value: map[key]
        });
      return entries;
    };
    d32.merge = function(arrays) {
      var n2 = arrays.length, m2, i = -1, j = 0, merged, array;
      while (++i < n2)
        j += arrays[i].length;
      merged = new Array(j);
      while (--n2 >= 0) {
        array = arrays[n2];
        m2 = array.length;
        while (--m2 >= 0) {
          merged[--j] = array[m2];
        }
      }
      return merged;
    };
    var abs = Math.abs;
    d32.range = function(start, stop, step) {
      if (arguments.length < 3) {
        step = 1;
        if (arguments.length < 2) {
          stop = start;
          start = 0;
        }
      }
      if ((stop - start) / step === Infinity)
        throw new Error("infinite range");
      var range = [], k2 = d3_range_integerScale(abs(step)), i = -1, j;
      start *= k2, stop *= k2, step *= k2;
      if (step < 0)
        while ((j = start + step * ++i) > stop)
          range.push(j / k2);
      else
        while ((j = start + step * ++i) < stop)
          range.push(j / k2);
      return range;
    };
    function d3_range_integerScale(x2) {
      var k2 = 1;
      while (x2 * k2 % 1)
        k2 *= 10;
      return k2;
    }
    function d3_class(ctor, properties) {
      for (var key in properties) {
        Object.defineProperty(ctor.prototype, key, {
          value: properties[key],
          enumerable: false
        });
      }
    }
    d32.map = function(object, f2) {
      var map = new d3_Map();
      if (object instanceof d3_Map) {
        object.forEach(function(key2, value) {
          map.set(key2, value);
        });
      } else if (Array.isArray(object)) {
        var i = -1, n2 = object.length, o;
        if (arguments.length === 1)
          while (++i < n2)
            map.set(i, object[i]);
        else
          while (++i < n2)
            map.set(f2.call(object, o = object[i], i), o);
      } else {
        for (var key in object)
          map.set(key, object[key]);
      }
      return map;
    };
    function d3_Map() {
      this._ = /* @__PURE__ */ Object.create(null);
    }
    var d3_map_proto = "__proto__", d3_map_zero = "\0";
    d3_class(d3_Map, {
      has: d3_map_has,
      get: function(key) {
        return this._[d3_map_escape(key)];
      },
      set: function(key, value) {
        return this._[d3_map_escape(key)] = value;
      },
      remove: d3_map_remove,
      keys: d3_map_keys,
      values: function() {
        var values = [];
        for (var key in this._)
          values.push(this._[key]);
        return values;
      },
      entries: function() {
        var entries = [];
        for (var key in this._)
          entries.push({
            key: d3_map_unescape(key),
            value: this._[key]
          });
        return entries;
      },
      size: d3_map_size,
      empty: d3_map_empty,
      forEach: function(f2) {
        for (var key in this._)
          f2.call(this, d3_map_unescape(key), this._[key]);
      }
    });
    function d3_map_escape(key) {
      return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
    }
    function d3_map_unescape(key) {
      return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
    }
    function d3_map_has(key) {
      return d3_map_escape(key) in this._;
    }
    function d3_map_remove(key) {
      return (key = d3_map_escape(key)) in this._ && delete this._[key];
    }
    function d3_map_keys() {
      var keys = [];
      for (var key in this._)
        keys.push(d3_map_unescape(key));
      return keys;
    }
    function d3_map_size() {
      var size = 0;
      for (var key in this._)
        ++size;
      return size;
    }
    function d3_map_empty() {
      for (var key in this._)
        return false;
      return true;
    }
    d32.nest = function() {
      var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
      function map(mapType, array, depth) {
        if (depth >= keys.length)
          return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
        var i = -1, n2 = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
        while (++i < n2) {
          if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
            values.push(object);
          } else {
            valuesByKey.set(keyValue, [object]);
          }
        }
        if (mapType) {
          object = mapType();
          setter = function(keyValue2, values2) {
            object.set(keyValue2, map(mapType, values2, depth));
          };
        } else {
          object = {};
          setter = function(keyValue2, values2) {
            object[keyValue2] = map(mapType, values2, depth);
          };
        }
        valuesByKey.forEach(setter);
        return object;
      }
      function entries(map2, depth) {
        if (depth >= keys.length)
          return map2;
        var array = [], sortKey = sortKeys[depth++];
        map2.forEach(function(key, keyMap) {
          array.push({
            key,
            values: entries(keyMap, depth)
          });
        });
        return sortKey ? array.sort(function(a, b) {
          return sortKey(a.key, b.key);
        }) : array;
      }
      nest.map = function(array, mapType) {
        return map(mapType, array, 0);
      };
      nest.entries = function(array) {
        return entries(map(d32.map, array, 0), 0);
      };
      nest.key = function(d) {
        keys.push(d);
        return nest;
      };
      nest.sortKeys = function(order) {
        sortKeys[keys.length - 1] = order;
        return nest;
      };
      nest.sortValues = function(order) {
        sortValues = order;
        return nest;
      };
      nest.rollup = function(f2) {
        rollup = f2;
        return nest;
      };
      return nest;
    };
    d32.set = function(array) {
      var set2 = new d3_Set();
      if (array)
        for (var i = 0, n2 = array.length; i < n2; ++i)
          set2.add(array[i]);
      return set2;
    };
    function d3_Set() {
      this._ = /* @__PURE__ */ Object.create(null);
    }
    d3_class(d3_Set, {
      has: d3_map_has,
      add: function(key) {
        this._[d3_map_escape(key += "")] = true;
        return key;
      },
      remove: d3_map_remove,
      values: d3_map_keys,
      size: d3_map_size,
      empty: d3_map_empty,
      forEach: function(f2) {
        for (var key in this._)
          f2.call(this, d3_map_unescape(key));
      }
    });
    d32.behavior = {};
    function d3_identity(d) {
      return d;
    }
    d32.rebind = function(target, source) {
      var i = 1, n2 = arguments.length, method;
      while (++i < n2)
        target[method = arguments[i]] = d3_rebind(target, source, source[method]);
      return target;
    };
    function d3_rebind(target, source, method) {
      return function() {
        var value = method.apply(source, arguments);
        return value === source ? target : value;
      };
    }
    function d3_vendorSymbol(object, name) {
      if (name in object)
        return name;
      name = name.charAt(0).toUpperCase() + name.slice(1);
      for (var i = 0, n2 = d3_vendorPrefixes.length; i < n2; ++i) {
        var prefixName = d3_vendorPrefixes[i] + name;
        if (prefixName in object)
          return prefixName;
      }
    }
    var d3_vendorPrefixes = ["webkit", "ms", "moz", "Moz", "o", "O"];
    function d3_noop() {
    }
    d32.dispatch = function() {
      var dispatch = new d3_dispatch(), i = -1, n2 = arguments.length;
      while (++i < n2)
        dispatch[arguments[i]] = d3_dispatch_event(dispatch);
      return dispatch;
    };
    function d3_dispatch() {
    }
    d3_dispatch.prototype.on = function(type, listener) {
      var i = type.indexOf("."), name = "";
      if (i >= 0) {
        name = type.slice(i + 1);
        type = type.slice(0, i);
      }
      if (type)
        return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
      if (arguments.length === 2) {
        if (listener == null)
          for (type in this) {
            if (this.hasOwnProperty(type))
              this[type].on(name, null);
          }
        return this;
      }
    };
    function d3_dispatch_event(dispatch) {
      var listeners = [], listenerByName = new d3_Map();
      function event() {
        var z2 = listeners, i = -1, n2 = z2.length, l2;
        while (++i < n2)
          if (l2 = z2[i].on)
            l2.apply(this, arguments);
        return dispatch;
      }
      event.on = function(name, listener) {
        var l2 = listenerByName.get(name), i;
        if (arguments.length < 2)
          return l2 && l2.on;
        if (l2) {
          l2.on = null;
          listeners = listeners.slice(0, i = listeners.indexOf(l2)).concat(listeners.slice(i + 1));
          listenerByName.remove(name);
        }
        if (listener)
          listeners.push(listenerByName.set(name, {
            on: listener
          }));
        return dispatch;
      };
      return event;
    }
    d32.event = null;
    function d3_eventPreventDefault() {
      d32.event.preventDefault();
    }
    function d3_eventSource() {
      var e = d32.event, s;
      while (s = e.sourceEvent)
        e = s;
      return e;
    }
    function d3_eventDispatch(target) {
      var dispatch = new d3_dispatch(), i = 0, n2 = arguments.length;
      while (++i < n2)
        dispatch[arguments[i]] = d3_dispatch_event(dispatch);
      dispatch.of = function(thiz, argumentz) {
        return function(e1) {
          try {
            var e0 = e1.sourceEvent = d32.event;
            e1.target = target;
            d32.event = e1;
            dispatch[e1.type].apply(thiz, argumentz);
          } finally {
            d32.event = e0;
          }
        };
      };
      return dispatch;
    }
    d32.requote = function(s) {
      return s.replace(d3_requote_re, "\\$&");
    };
    var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    var d3_subclass = {}.__proto__ ? function(object, prototype) {
      object.__proto__ = prototype;
    } : function(object, prototype) {
      for (var property in prototype)
        object[property] = prototype[property];
    };
    function d3_selection(groups) {
      d3_subclass(groups, d3_selectionPrototype);
      return groups;
    }
    var d3_select = function(s, n2) {
      return n2.querySelector(s);
    }, d3_selectAll = function(s, n2) {
      return n2.querySelectorAll(s);
    }, d3_selectMatches = function(n2, s) {
      var d3_selectMatcher = n2.matches || n2[d3_vendorSymbol(n2, "matchesSelector")];
      d3_selectMatches = function(n3, s2) {
        return d3_selectMatcher.call(n3, s2);
      };
      return d3_selectMatches(n2, s);
    };
    if (typeof Sizzle === "function") {
      d3_select = function(s, n2) {
        return Sizzle(s, n2)[0] || null;
      };
      d3_selectAll = Sizzle;
      d3_selectMatches = Sizzle.matchesSelector;
    }
    d32.selection = function() {
      return d32.select(d3_document.documentElement);
    };
    var d3_selectionPrototype = d32.selection.prototype = [];
    d3_selectionPrototype.select = function(selector) {
      var subgroups = [], subgroup, subnode, group, node;
      selector = d3_selection_selector(selector);
      for (var j = -1, m2 = this.length; ++j < m2; ) {
        subgroups.push(subgroup = []);
        subgroup.parentNode = (group = this[j]).parentNode;
        for (var i = -1, n2 = group.length; ++i < n2; ) {
          if (node = group[i]) {
            subgroup.push(subnode = selector.call(node, node.__data__, i, j));
            if (subnode && "__data__" in node)
              subnode.__data__ = node.__data__;
          } else {
            subgroup.push(null);
          }
        }
      }
      return d3_selection(subgroups);
    };
    function d3_selection_selector(selector) {
      return typeof selector === "function" ? selector : function() {
        return d3_select(selector, this);
      };
    }
    d3_selectionPrototype.selectAll = function(selector) {
      var subgroups = [], subgroup, node;
      selector = d3_selection_selectorAll(selector);
      for (var j = -1, m2 = this.length; ++j < m2; ) {
        for (var group = this[j], i = -1, n2 = group.length; ++i < n2; ) {
          if (node = group[i]) {
            subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
            subgroup.parentNode = node;
          }
        }
      }
      return d3_selection(subgroups);
    };
    function d3_selection_selectorAll(selector) {
      return typeof selector === "function" ? selector : function() {
        return d3_selectAll(selector, this);
      };
    }
    var d3_nsPrefix = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: "http://www.w3.org/1999/xhtml",
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    };
    d32.ns = {
      prefix: d3_nsPrefix,
      qualify: function(name) {
        var i = name.indexOf(":"), prefix = name;
        if (i >= 0) {
          prefix = name.slice(0, i);
          name = name.slice(i + 1);
        }
        return d3_nsPrefix.hasOwnProperty(prefix) ? {
          space: d3_nsPrefix[prefix],
          local: name
        } : name;
      }
    };
    d3_selectionPrototype.attr = function(name, value) {
      if (arguments.length < 2) {
        if (typeof name === "string") {
          var node = this.node();
          name = d32.ns.qualify(name);
          return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
        }
        for (value in name)
          this.each(d3_selection_attr(value, name[value]));
        return this;
      }
      return this.each(d3_selection_attr(name, value));
    };
    function d3_selection_attr(name, value) {
      name = d32.ns.qualify(name);
      function attrNull() {
        this.removeAttribute(name);
      }
      function attrNullNS() {
        this.removeAttributeNS(name.space, name.local);
      }
      function attrConstant() {
        this.setAttribute(name, value);
      }
      function attrConstantNS() {
        this.setAttributeNS(name.space, name.local, value);
      }
      function attrFunction() {
        var x2 = value.apply(this, arguments);
        if (x2 == null)
          this.removeAttribute(name);
        else
          this.setAttribute(name, x2);
      }
      function attrFunctionNS() {
        var x2 = value.apply(this, arguments);
        if (x2 == null)
          this.removeAttributeNS(name.space, name.local);
        else
          this.setAttributeNS(name.space, name.local, x2);
      }
      return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
    }
    function d3_collapse(s) {
      return s.trim().replace(/\s+/g, " ");
    }
    d3_selectionPrototype.classed = function(name, value) {
      if (arguments.length < 2) {
        if (typeof name === "string") {
          var node = this.node(), n2 = (name = d3_selection_classes(name)).length, i = -1;
          if (value = node.classList) {
            while (++i < n2)
              if (!value.contains(name[i]))
                return false;
          } else {
            value = node.getAttribute("class");
            while (++i < n2)
              if (!d3_selection_classedRe(name[i]).test(value))
                return false;
          }
          return true;
        }
        for (value in name)
          this.each(d3_selection_classed(value, name[value]));
        return this;
      }
      return this.each(d3_selection_classed(name, value));
    };
    function d3_selection_classedRe(name) {
      return new RegExp("(?:^|\\s+)" + d32.requote(name) + "(?:\\s+|$)", "g");
    }
    function d3_selection_classes(name) {
      return (name + "").trim().split(/^|\s+/);
    }
    function d3_selection_classed(name, value) {
      name = d3_selection_classes(name).map(d3_selection_classedName);
      var n2 = name.length;
      function classedConstant() {
        var i = -1;
        while (++i < n2)
          name[i](this, value);
      }
      function classedFunction() {
        var i = -1, x2 = value.apply(this, arguments);
        while (++i < n2)
          name[i](this, x2);
      }
      return typeof value === "function" ? classedFunction : classedConstant;
    }
    function d3_selection_classedName(name) {
      var re2 = d3_selection_classedRe(name);
      return function(node, value) {
        if (c = node.classList)
          return value ? c.add(name) : c.remove(name);
        var c = node.getAttribute("class") || "";
        if (value) {
          re2.lastIndex = 0;
          if (!re2.test(c))
            node.setAttribute("class", d3_collapse(c + " " + name));
        } else {
          node.setAttribute("class", d3_collapse(c.replace(re2, " ")));
        }
      };
    }
    d3_selectionPrototype.style = function(name, value, priority) {
      var n2 = arguments.length;
      if (n2 < 3) {
        if (typeof name !== "string") {
          if (n2 < 2)
            value = "";
          for (priority in name)
            this.each(d3_selection_style(priority, name[priority], value));
          return this;
        }
        if (n2 < 2) {
          var node = this.node();
          return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
        }
        priority = "";
      }
      return this.each(d3_selection_style(name, value, priority));
    };
    function d3_selection_style(name, value, priority) {
      function styleNull() {
        this.style.removeProperty(name);
      }
      function styleConstant() {
        this.style.setProperty(name, value, priority);
      }
      function styleFunction() {
        var x2 = value.apply(this, arguments);
        if (x2 == null)
          this.style.removeProperty(name);
        else
          this.style.setProperty(name, x2, priority);
      }
      return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
    }
    d3_selectionPrototype.property = function(name, value) {
      if (arguments.length < 2) {
        if (typeof name === "string")
          return this.node()[name];
        for (value in name)
          this.each(d3_selection_property(value, name[value]));
        return this;
      }
      return this.each(d3_selection_property(name, value));
    };
    function d3_selection_property(name, value) {
      function propertyNull() {
        delete this[name];
      }
      function propertyConstant() {
        this[name] = value;
      }
      function propertyFunction() {
        var x2 = value.apply(this, arguments);
        if (x2 == null)
          delete this[name];
        else
          this[name] = x2;
      }
      return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
    }
    d3_selectionPrototype.text = function(value) {
      return arguments.length ? this.each(typeof value === "function" ? function() {
        var v2 = value.apply(this, arguments);
        this.textContent = v2 == null ? "" : v2;
      } : value == null ? function() {
        this.textContent = "";
      } : function() {
        this.textContent = value;
      }) : this.node().textContent;
    };
    d3_selectionPrototype.html = function(value) {
      return arguments.length ? this.each(typeof value === "function" ? function() {
        var v2 = value.apply(this, arguments);
        this.innerHTML = v2 == null ? "" : v2;
      } : value == null ? function() {
        this.innerHTML = "";
      } : function() {
        this.innerHTML = value;
      }) : this.node().innerHTML;
    };
    d3_selectionPrototype.append = function(name) {
      name = d3_selection_creator(name);
      return this.select(function() {
        return this.appendChild(name.apply(this, arguments));
      });
    };
    function d3_selection_creator(name) {
      function create() {
        var document2 = this.ownerDocument, namespace = this.namespaceURI;
        return namespace ? document2.createElementNS(namespace, name) : document2.createElement(name);
      }
      function createNS() {
        return this.ownerDocument.createElementNS(name.space, name.local);
      }
      return typeof name === "function" ? name : (name = d32.ns.qualify(name)).local ? createNS : create;
    }
    d3_selectionPrototype.insert = function(name, before) {
      name = d3_selection_creator(name);
      before = d3_selection_selector(before);
      return this.select(function() {
        return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
      });
    };
    d3_selectionPrototype.remove = function() {
      return this.each(d3_selectionRemove);
    };
    function d3_selectionRemove() {
      var parent = this.parentNode;
      if (parent)
        parent.removeChild(this);
    }
    d3_selectionPrototype.data = function(value, key) {
      var i = -1, n2 = this.length, group, node;
      if (!arguments.length) {
        value = new Array(n2 = (group = this[0]).length);
        while (++i < n2) {
          if (node = group[i]) {
            value[i] = node.__data__;
          }
        }
        return value;
      }
      function bind2(group2, groupData) {
        var i2, n3 = group2.length, m2 = groupData.length, n0 = Math.min(n3, m2), updateNodes = new Array(m2), enterNodes = new Array(m2), exitNodes = new Array(n3), node2, nodeData;
        if (key) {
          var nodeByKeyValue = new d3_Map(), keyValues = new Array(n3), keyValue;
          for (i2 = -1; ++i2 < n3; ) {
            if (nodeByKeyValue.has(keyValue = key.call(node2 = group2[i2], node2.__data__, i2))) {
              exitNodes[i2] = node2;
            } else {
              nodeByKeyValue.set(keyValue, node2);
            }
            keyValues[i2] = keyValue;
          }
          for (i2 = -1; ++i2 < m2; ) {
            if (!(node2 = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i2], i2)))) {
              enterNodes[i2] = d3_selection_dataNode(nodeData);
            } else if (node2 !== true) {
              updateNodes[i2] = node2;
              node2.__data__ = nodeData;
            }
            nodeByKeyValue.set(keyValue, true);
          }
          for (i2 = -1; ++i2 < n3; ) {
            if (nodeByKeyValue.get(keyValues[i2]) !== true) {
              exitNodes[i2] = group2[i2];
            }
          }
        } else {
          for (i2 = -1; ++i2 < n0; ) {
            node2 = group2[i2];
            nodeData = groupData[i2];
            if (node2) {
              node2.__data__ = nodeData;
              updateNodes[i2] = node2;
            } else {
              enterNodes[i2] = d3_selection_dataNode(nodeData);
            }
          }
          for (; i2 < m2; ++i2) {
            enterNodes[i2] = d3_selection_dataNode(groupData[i2]);
          }
          for (; i2 < n3; ++i2) {
            exitNodes[i2] = group2[i2];
          }
        }
        enterNodes.update = updateNodes;
        enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group2.parentNode;
        enter.push(enterNodes);
        update.push(updateNodes);
        exit.push(exitNodes);
      }
      var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
      if (typeof value === "function") {
        while (++i < n2) {
          bind2(group = this[i], value.call(group, group.parentNode.__data__, i));
        }
      } else {
        while (++i < n2) {
          bind2(group = this[i], value);
        }
      }
      update.enter = function() {
        return enter;
      };
      update.exit = function() {
        return exit;
      };
      return update;
    };
    function d3_selection_dataNode(data) {
      return {
        __data__: data
      };
    }
    d3_selectionPrototype.datum = function(value) {
      return arguments.length ? this.property("__data__", value) : this.property("__data__");
    };
    d3_selectionPrototype.filter = function(filter) {
      var subgroups = [], subgroup, group, node;
      if (typeof filter !== "function")
        filter = d3_selection_filter(filter);
      for (var j = 0, m2 = this.length; j < m2; j++) {
        subgroups.push(subgroup = []);
        subgroup.parentNode = (group = this[j]).parentNode;
        for (var i = 0, n2 = group.length; i < n2; i++) {
          if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
            subgroup.push(node);
          }
        }
      }
      return d3_selection(subgroups);
    };
    function d3_selection_filter(selector) {
      return function() {
        return d3_selectMatches(this, selector);
      };
    }
    d3_selectionPrototype.order = function() {
      for (var j = -1, m2 = this.length; ++j < m2; ) {
        for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
          if (node = group[i]) {
            if (next && next !== node.nextSibling)
              next.parentNode.insertBefore(node, next);
            next = node;
          }
        }
      }
      return this;
    };
    d3_selectionPrototype.sort = function(comparator) {
      comparator = d3_selection_sortComparator.apply(this, arguments);
      for (var j = -1, m2 = this.length; ++j < m2; )
        this[j].sort(comparator);
      return this.order();
    };
    function d3_selection_sortComparator(comparator) {
      if (!arguments.length)
        comparator = d3_ascending;
      return function(a, b) {
        return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
      };
    }
    d3_selectionPrototype.each = function(callback) {
      return d3_selection_each(this, function(node, i, j) {
        callback.call(node, node.__data__, i, j);
      });
    };
    function d3_selection_each(groups, callback) {
      for (var j = 0, m2 = groups.length; j < m2; j++) {
        for (var group = groups[j], i = 0, n2 = group.length, node; i < n2; i++) {
          if (node = group[i])
            callback(node, i, j);
        }
      }
      return groups;
    }
    d3_selectionPrototype.call = function(callback) {
      var args = d3_array(arguments);
      callback.apply(args[0] = this, args);
      return this;
    };
    d3_selectionPrototype.empty = function() {
      return !this.node();
    };
    d3_selectionPrototype.node = function() {
      for (var j = 0, m2 = this.length; j < m2; j++) {
        for (var group = this[j], i = 0, n2 = group.length; i < n2; i++) {
          var node = group[i];
          if (node)
            return node;
        }
      }
      return null;
    };
    d3_selectionPrototype.size = function() {
      var n2 = 0;
      d3_selection_each(this, function() {
        ++n2;
      });
      return n2;
    };
    function d3_selection_enter(selection) {
      d3_subclass(selection, d3_selection_enterPrototype);
      return selection;
    }
    var d3_selection_enterPrototype = [];
    d32.selection.enter = d3_selection_enter;
    d32.selection.enter.prototype = d3_selection_enterPrototype;
    d3_selection_enterPrototype.append = d3_selectionPrototype.append;
    d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
    d3_selection_enterPrototype.node = d3_selectionPrototype.node;
    d3_selection_enterPrototype.call = d3_selectionPrototype.call;
    d3_selection_enterPrototype.size = d3_selectionPrototype.size;
    d3_selection_enterPrototype.select = function(selector) {
      var subgroups = [], subgroup, subnode, upgroup, group, node;
      for (var j = -1, m2 = this.length; ++j < m2; ) {
        upgroup = (group = this[j]).update;
        subgroups.push(subgroup = []);
        subgroup.parentNode = group.parentNode;
        for (var i = -1, n2 = group.length; ++i < n2; ) {
          if (node = group[i]) {
            subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
            subnode.__data__ = node.__data__;
          } else {
            subgroup.push(null);
          }
        }
      }
      return d3_selection(subgroups);
    };
    d3_selection_enterPrototype.insert = function(name, before) {
      if (arguments.length < 2)
        before = d3_selection_enterInsertBefore(this);
      return d3_selectionPrototype.insert.call(this, name, before);
    };
    function d3_selection_enterInsertBefore(enter) {
      var i0, j0;
      return function(d, i, j) {
        var group = enter[j].update, n2 = group.length, node;
        if (j != j0)
          j0 = j, i0 = 0;
        if (i >= i0)
          i0 = i + 1;
        while (!(node = group[i0]) && ++i0 < n2)
          ;
        return node;
      };
    }
    d32.select = function(node) {
      var group;
      if (typeof node === "string") {
        group = [d3_select(node, d3_document)];
        group.parentNode = d3_document.documentElement;
      } else {
        group = [node];
        group.parentNode = d3_documentElement(node);
      }
      return d3_selection([group]);
    };
    d32.selectAll = function(nodes) {
      var group;
      if (typeof nodes === "string") {
        group = d3_array(d3_selectAll(nodes, d3_document));
        group.parentNode = d3_document.documentElement;
      } else {
        group = nodes;
        group.parentNode = null;
      }
      return d3_selection([group]);
    };
    d3_selectionPrototype.on = function(type, listener, capture) {
      var n2 = arguments.length;
      if (n2 < 3) {
        if (typeof type !== "string") {
          if (n2 < 2)
            listener = false;
          for (capture in type)
            this.each(d3_selection_on(capture, type[capture], listener));
          return this;
        }
        if (n2 < 2)
          return (n2 = this.node()["__on" + type]) && n2._;
        capture = false;
      }
      return this.each(d3_selection_on(type, listener, capture));
    };
    function d3_selection_on(type, listener, capture) {
      var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
      if (i > 0)
        type = type.slice(0, i);
      var filter = d3_selection_onFilters.get(type);
      if (filter)
        type = filter, wrap = d3_selection_onFilter;
      function onRemove() {
        var l2 = this[name];
        if (l2) {
          this.removeEventListener(type, l2, l2.$);
          delete this[name];
        }
      }
      function onAdd() {
        var l2 = wrap(listener, d3_array(arguments));
        onRemove.call(this);
        this.addEventListener(type, this[name] = l2, l2.$ = capture);
        l2._ = listener;
      }
      function removeAll() {
        var re2 = new RegExp("^__on([^.]+)" + d32.requote(type) + "$"), match;
        for (var name2 in this) {
          if (match = name2.match(re2)) {
            var l2 = this[name2];
            this.removeEventListener(match[1], l2, l2.$);
            delete this[name2];
          }
        }
      }
      return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
    }
    var d3_selection_onFilters = d32.map({
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    });
    if (d3_document) {
      d3_selection_onFilters.forEach(function(k2) {
        if ("on" + k2 in d3_document)
          d3_selection_onFilters.remove(k2);
      });
    }
    function d3_selection_onListener(listener, argumentz) {
      return function(e) {
        var o = d32.event;
        d32.event = e;
        argumentz[0] = this.__data__;
        try {
          listener.apply(this, argumentz);
        } finally {
          d32.event = o;
        }
      };
    }
    function d3_selection_onFilter(listener, argumentz) {
      var l2 = d3_selection_onListener(listener, argumentz);
      return function(e) {
        var target = this, related = e.relatedTarget;
        if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
          l2.call(target, e);
        }
      };
    }
    var d3_event_dragSelect, d3_event_dragId = 0;
    function d3_event_dragSuppress(node) {
      var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w2 = d32.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
      if (d3_event_dragSelect == null) {
        d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
      }
      if (d3_event_dragSelect) {
        var style = d3_documentElement(node).style, select = style[d3_event_dragSelect];
        style[d3_event_dragSelect] = "none";
      }
      return function(suppressClick) {
        w2.on(name, null);
        if (d3_event_dragSelect)
          style[d3_event_dragSelect] = select;
        if (suppressClick) {
          var off = function() {
            w2.on(click, null);
          };
          w2.on(click, function() {
            d3_eventPreventDefault();
            off();
          }, true);
          setTimeout(off, 0);
        }
      };
    }
    d32.mouse = function(container) {
      return d3_mousePoint(container, d3_eventSource());
    };
    var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
    function d3_mousePoint(container, e) {
      if (e.changedTouches)
        e = e.changedTouches[0];
      var svg = container.ownerSVGElement || container;
      if (svg.createSVGPoint) {
        var point = svg.createSVGPoint();
        if (d3_mouse_bug44083 < 0) {
          var window2 = d3_window(container);
          if (window2.scrollX || window2.scrollY) {
            svg = d32.select("body").append("svg").style({
              position: "absolute",
              top: 0,
              left: 0,
              margin: 0,
              padding: 0,
              border: "none"
            }, "important");
            var ctm = svg[0][0].getScreenCTM();
            d3_mouse_bug44083 = !(ctm.f || ctm.e);
            svg.remove();
          }
        }
        if (d3_mouse_bug44083)
          point.x = e.pageX, point.y = e.pageY;
        else
          point.x = e.clientX, point.y = e.clientY;
        point = point.matrixTransform(container.getScreenCTM().inverse());
        return [point.x, point.y];
      }
      var rect = container.getBoundingClientRect();
      return [e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop];
    }
    d32.touch = function(container, touches, identifier) {
      if (arguments.length < 3)
        identifier = touches, touches = d3_eventSource().changedTouches;
      if (touches)
        for (var i = 0, n2 = touches.length, touch; i < n2; ++i) {
          if ((touch = touches[i]).identifier === identifier) {
            return d3_mousePoint(container, touch);
          }
        }
    };
    d32.behavior.drag = function() {
      var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d32.mouse, d3_window, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d32.touch, d3_identity, "touchmove", "touchend");
      function drag() {
        this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
      }
      function dragstart(id2, position, subject, move, end) {
        return function() {
          var that = this, target = d32.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id2(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d32.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(target), position0 = position(parent, dragId);
          if (origin) {
            dragOffset = origin.apply(that, arguments);
            dragOffset = [dragOffset.x - position0[0], dragOffset.y - position0[1]];
          } else {
            dragOffset = [0, 0];
          }
          dispatch({
            type: "dragstart"
          });
          function moved() {
            var position1 = position(parent, dragId), dx, dy;
            if (!position1)
              return;
            dx = position1[0] - position0[0];
            dy = position1[1] - position0[1];
            dragged |= dx | dy;
            position0 = position1;
            dispatch({
              type: "drag",
              x: position1[0] + dragOffset[0],
              y: position1[1] + dragOffset[1],
              dx,
              dy
            });
          }
          function ended() {
            if (!position(parent, dragId))
              return;
            dragSubject.on(move + dragName, null).on(end + dragName, null);
            dragRestore(dragged && d32.event.target === target);
            dispatch({
              type: "dragend"
            });
          }
        };
      }
      drag.origin = function(x2) {
        if (!arguments.length)
          return origin;
        origin = x2;
        return drag;
      };
      return d32.rebind(drag, event, "on");
    };
    function d3_behavior_dragTouchId() {
      return d32.event.changedTouches[0].identifier;
    }
    d32.touches = function(container, touches) {
      if (arguments.length < 2)
        touches = d3_eventSource().touches;
      return touches ? d3_array(touches).map(function(touch) {
        var point = d3_mousePoint(container, touch);
        point.identifier = touch.identifier;
        return point;
      }) : [];
    };
    var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
    function d3_sgn(x2) {
      return x2 > 0 ? 1 : x2 < 0 ? -1 : 0;
    }
    function d3_cross2d(a, b, c) {
      return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
    }
    function d3_acos(x2) {
      return x2 > 1 ? 0 : x2 < -1 ? π : Math.acos(x2);
    }
    function d3_asin(x2) {
      return x2 > 1 ? halfπ : x2 < -1 ? -halfπ : Math.asin(x2);
    }
    function d3_sinh(x2) {
      return ((x2 = Math.exp(x2)) - 1 / x2) / 2;
    }
    function d3_cosh(x2) {
      return ((x2 = Math.exp(x2)) + 1 / x2) / 2;
    }
    function d3_tanh(x2) {
      return ((x2 = Math.exp(2 * x2)) - 1) / (x2 + 1);
    }
    function d3_haversin(x2) {
      return (x2 = Math.sin(x2 / 2)) * x2;
    }
    var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
    d32.interpolateZoom = function(p0, p1) {
      var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2];
      var dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1), dr = r1 - r0, S2 = (dr || Math.log(w1 / w0)) / ρ;
      function interpolate(t2) {
        var s = t2 * S2;
        if (dr) {
          var coshr0 = d3_cosh(r0), u2 = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
          return [ux0 + u2 * dx, uy0 + u2 * dy, w0 * coshr0 / d3_cosh(ρ * s + r0)];
        }
        return [ux0 + t2 * dx, uy0 + t2 * dy, w0 * Math.exp(ρ * s)];
      }
      interpolate.duration = S2 * 1e3;
      return interpolate;
    };
    d32.behavior.zoom = function() {
      var view = {
        x: 0,
        y: 0,
        k: 1
      }, translate0, center0, center, size = [960, 500], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
      if (!d3_behavior_zoomWheel) {
        d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
          return -d32.event.deltaY * (d32.event.deltaMode ? 120 : 1);
        }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
          return d32.event.wheelDelta;
        }, "mousewheel") : (d3_behavior_zoomDelta = function() {
          return -d32.event.detail;
        }, "MozMousePixelScroll");
      }
      function zoom(g2) {
        g2.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
      }
      zoom.event = function(g2) {
        g2.each(function() {
          var dispatch = event.of(this, arguments), view1 = view;
          if (d3_transitionInheritId) {
            d32.select(this).transition().each("start.zoom", function() {
              view = this.__chart__ || {
                x: 0,
                y: 0,
                k: 1
              };
              zoomstarted(dispatch);
            }).tween("zoom:zoom", function() {
              var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d32.interpolateZoom([(cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k], [(cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k]);
              return function(t2) {
                var l2 = i(t2), k2 = dx / l2[2];
                this.__chart__ = view = {
                  x: cx - l2[0] * k2,
                  y: cy - l2[1] * k2,
                  k: k2
                };
                zoomed(dispatch);
              };
            }).each("interrupt.zoom", function() {
              zoomended(dispatch);
            }).each("end.zoom", function() {
              zoomended(dispatch);
            });
          } else {
            this.__chart__ = view;
            zoomstarted(dispatch);
            zoomed(dispatch);
            zoomended(dispatch);
          }
        });
      };
      zoom.translate = function(_) {
        if (!arguments.length)
          return [view.x, view.y];
        view = {
          x: +_[0],
          y: +_[1],
          k: view.k
        };
        rescale();
        return zoom;
      };
      zoom.scale = function(_) {
        if (!arguments.length)
          return view.k;
        view = {
          x: view.x,
          y: view.y,
          k: +_
        };
        rescale();
        return zoom;
      };
      zoom.scaleExtent = function(_) {
        if (!arguments.length)
          return scaleExtent;
        scaleExtent = _ == null ? d3_behavior_zoomInfinity : [+_[0], +_[1]];
        return zoom;
      };
      zoom.center = function(_) {
        if (!arguments.length)
          return center;
        center = _ && [+_[0], +_[1]];
        return zoom;
      };
      zoom.size = function(_) {
        if (!arguments.length)
          return size;
        size = _ && [+_[0], +_[1]];
        return zoom;
      };
      zoom.duration = function(_) {
        if (!arguments.length)
          return duration;
        duration = +_;
        return zoom;
      };
      zoom.x = function(z2) {
        if (!arguments.length)
          return x1;
        x1 = z2;
        x0 = z2.copy();
        view = {
          x: 0,
          y: 0,
          k: 1
        };
        return zoom;
      };
      zoom.y = function(z2) {
        if (!arguments.length)
          return y1;
        y1 = z2;
        y0 = z2.copy();
        view = {
          x: 0,
          y: 0,
          k: 1
        };
        return zoom;
      };
      function location(p2) {
        return [(p2[0] - view.x) / view.k, (p2[1] - view.y) / view.k];
      }
      function point(l2) {
        return [l2[0] * view.k + view.x, l2[1] * view.k + view.y];
      }
      function scaleTo(s) {
        view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
      }
      function translateTo(p2, l2) {
        l2 = point(l2);
        view.x += p2[0] - l2[0];
        view.y += p2[1] - l2[1];
      }
      function zoomTo(that, p2, l2, k2) {
        that.__chart__ = {
          x: view.x,
          y: view.y,
          k: view.k
        };
        scaleTo(Math.pow(2, k2));
        translateTo(center0 = p2, l2);
        that = d32.select(that);
        if (duration > 0)
          that = that.transition().duration(duration);
        that.call(zoom.event);
      }
      function rescale() {
        if (x1)
          x1.domain(x0.range().map(function(x2) {
            return (x2 - view.x) / view.k;
          }).map(x0.invert));
        if (y1)
          y1.domain(y0.range().map(function(y2) {
            return (y2 - view.y) / view.k;
          }).map(y0.invert));
      }
      function zoomstarted(dispatch) {
        if (!zooming++)
          dispatch({
            type: "zoomstart"
          });
      }
      function zoomed(dispatch) {
        rescale();
        dispatch({
          type: "zoom",
          scale: view.k,
          translate: [view.x, view.y]
        });
      }
      function zoomended(dispatch) {
        if (!--zooming)
          dispatch({
            type: "zoomend"
          });
        center0 = null;
      }
      function mousedowned() {
        var that = this, target = d32.event.target, dispatch = event.of(that, arguments), dragged = 0, subject = d32.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended), location0 = location(d32.mouse(that)), dragRestore = d3_event_dragSuppress(that);
        d3_selection_interrupt.call(that);
        zoomstarted(dispatch);
        function moved() {
          dragged = 1;
          translateTo(d32.mouse(that), location0);
          zoomed(dispatch);
        }
        function ended() {
          subject.on(mousemove, null).on(mouseup, null);
          dragRestore(dragged && d32.event.target === target);
          zoomended(dispatch);
        }
      }
      function touchstarted() {
        var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d32.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d32.select(that), dragRestore = d3_event_dragSuppress(that);
        started();
        zoomstarted(dispatch);
        subject.on(mousedown, null).on(touchstart, started);
        function relocate() {
          var touches = d32.touches(that);
          scale0 = view.k;
          touches.forEach(function(t2) {
            if (t2.identifier in locations0)
              locations0[t2.identifier] = location(t2);
          });
          return touches;
        }
        function started() {
          var target = d32.event.target;
          d32.select(target).on(touchmove, moved).on(touchend, ended);
          targets.push(target);
          var changed = d32.event.changedTouches;
          for (var i = 0, n2 = changed.length; i < n2; ++i) {
            locations0[changed[i].identifier] = null;
          }
          var touches = relocate(), now = Date.now();
          if (touches.length === 1) {
            if (now - touchtime < 500) {
              var p2 = touches[0];
              zoomTo(that, p2, locations0[p2.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
              d3_eventPreventDefault();
            }
            touchtime = now;
          } else if (touches.length > 1) {
            var p2 = touches[0], q2 = touches[1], dx = p2[0] - q2[0], dy = p2[1] - q2[1];
            distance0 = dx * dx + dy * dy;
          }
        }
        function moved() {
          var touches = d32.touches(that), p0, l0, p1, l1;
          d3_selection_interrupt.call(that);
          for (var i = 0, n2 = touches.length; i < n2; ++i, l1 = null) {
            p1 = touches[i];
            if (l1 = locations0[p1.identifier]) {
              if (l0)
                break;
              p0 = p1, l0 = l1;
            }
          }
          if (l1) {
            var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
            p0 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
            l0 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
            scaleTo(scale1 * scale0);
          }
          touchtime = null;
          translateTo(p0, l0);
          zoomed(dispatch);
        }
        function ended() {
          if (d32.event.touches.length) {
            var changed = d32.event.changedTouches;
            for (var i = 0, n2 = changed.length; i < n2; ++i) {
              delete locations0[changed[i].identifier];
            }
            for (var identifier in locations0) {
              return void relocate();
            }
          }
          d32.selectAll(targets).on(zoomName, null);
          subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
          dragRestore();
          zoomended(dispatch);
        }
      }
      function mousewheeled() {
        var dispatch = event.of(this, arguments);
        if (mousewheelTimer)
          clearTimeout(mousewheelTimer);
        else
          translate0 = location(center0 = center || d32.mouse(this)), d3_selection_interrupt.call(this), zoomstarted(dispatch);
        mousewheelTimer = setTimeout(function() {
          mousewheelTimer = null;
          zoomended(dispatch);
        }, 50);
        d3_eventPreventDefault();
        scaleTo(Math.pow(2, d3_behavior_zoomDelta() * 2e-3) * view.k);
        translateTo(center0, translate0);
        zoomed(dispatch);
      }
      function dblclicked() {
        var p2 = d32.mouse(this), k2 = Math.log(view.k) / Math.LN2;
        zoomTo(this, p2, location(p2), d32.event.shiftKey ? Math.ceil(k2) - 1 : Math.floor(k2) + 1);
      }
      return d32.rebind(zoom, event, "on");
    };
    var d3_behavior_zoomInfinity = [0, Infinity], d3_behavior_zoomDelta, d3_behavior_zoomWheel;
    d32.color = d3_color;
    function d3_color() {
    }
    d3_color.prototype.toString = function() {
      return this.rgb() + "";
    };
    d32.hsl = d3_hsl;
    function d3_hsl(h, s, l2) {
      return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l2) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l2);
    }
    var d3_hslPrototype = d3_hsl.prototype = new d3_color();
    d3_hslPrototype.brighter = function(k2) {
      k2 = Math.pow(0.7, arguments.length ? k2 : 1);
      return new d3_hsl(this.h, this.s, this.l / k2);
    };
    d3_hslPrototype.darker = function(k2) {
      k2 = Math.pow(0.7, arguments.length ? k2 : 1);
      return new d3_hsl(this.h, this.s, k2 * this.l);
    };
    d3_hslPrototype.rgb = function() {
      return d3_hsl_rgb(this.h, this.s, this.l);
    };
    function d3_hsl_rgb(h, s, l2) {
      var m1, m2;
      h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
      s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
      l2 = l2 < 0 ? 0 : l2 > 1 ? 1 : l2;
      m2 = l2 <= 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
      m1 = 2 * l2 - m2;
      function v2(h2) {
        if (h2 > 360)
          h2 -= 360;
        else if (h2 < 0)
          h2 += 360;
        if (h2 < 60)
          return m1 + (m2 - m1) * h2 / 60;
        if (h2 < 180)
          return m2;
        if (h2 < 240)
          return m1 + (m2 - m1) * (240 - h2) / 60;
        return m1;
      }
      function vv(h2) {
        return Math.round(v2(h2) * 255);
      }
      return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
    }
    d32.hcl = d3_hcl;
    function d3_hcl(h, c, l2) {
      return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l2) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d32.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l2);
    }
    var d3_hclPrototype = d3_hcl.prototype = new d3_color();
    d3_hclPrototype.brighter = function(k2) {
      return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k2 : 1)));
    };
    d3_hclPrototype.darker = function(k2) {
      return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k2 : 1)));
    };
    d3_hclPrototype.rgb = function() {
      return d3_hcl_lab(this.h, this.c, this.l).rgb();
    };
    function d3_hcl_lab(h, c, l2) {
      if (isNaN(h))
        h = 0;
      if (isNaN(c))
        c = 0;
      return new d3_lab(l2, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
    }
    d32.lab = d3_lab;
    function d3_lab(l2, a, b) {
      return this instanceof d3_lab ? void (this.l = +l2, this.a = +a, this.b = +b) : arguments.length < 2 ? l2 instanceof d3_lab ? new d3_lab(l2.l, l2.a, l2.b) : l2 instanceof d3_hcl ? d3_hcl_lab(l2.h, l2.c, l2.l) : d3_rgb_lab((l2 = d3_rgb(l2)).r, l2.g, l2.b) : new d3_lab(l2, a, b);
    }
    var d3_lab_K = 18;
    var d3_lab_X = 0.95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
    var d3_labPrototype = d3_lab.prototype = new d3_color();
    d3_labPrototype.brighter = function(k2) {
      return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k2 : 1)), this.a, this.b);
    };
    d3_labPrototype.darker = function(k2) {
      return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k2 : 1)), this.a, this.b);
    };
    d3_labPrototype.rgb = function() {
      return d3_lab_rgb(this.l, this.a, this.b);
    };
    function d3_lab_rgb(l2, a, b) {
      var y2 = (l2 + 16) / 116, x2 = y2 + a / 500, z2 = y2 - b / 200;
      x2 = d3_lab_xyz(x2) * d3_lab_X;
      y2 = d3_lab_xyz(y2) * d3_lab_Y;
      z2 = d3_lab_xyz(z2) * d3_lab_Z;
      return new d3_rgb(d3_xyz_rgb(3.2404542 * x2 - 1.5371385 * y2 - 0.4985314 * z2), d3_xyz_rgb(-0.969266 * x2 + 1.8760108 * y2 + 0.041556 * z2), d3_xyz_rgb(0.0556434 * x2 - 0.2040259 * y2 + 1.0572252 * z2));
    }
    function d3_lab_hcl(l2, a, b) {
      return l2 > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l2) : new d3_hcl(NaN, NaN, l2);
    }
    function d3_lab_xyz(x2) {
      return x2 > 0.206893034 ? x2 * x2 * x2 : (x2 - 4 / 29) / 7.787037;
    }
    function d3_xyz_lab(x2) {
      return x2 > 8856e-6 ? Math.pow(x2, 1 / 3) : 7.787037 * x2 + 4 / 29;
    }
    function d3_xyz_rgb(r2) {
      return Math.round(255 * (r2 <= 304e-5 ? 12.92 * r2 : 1.055 * Math.pow(r2, 1 / 2.4) - 0.055));
    }
    d32.rgb = d3_rgb;
    function d3_rgb(r2, g2, b) {
      return this instanceof d3_rgb ? void (this.r = ~~r2, this.g = ~~g2, this.b = ~~b) : arguments.length < 2 ? r2 instanceof d3_rgb ? new d3_rgb(r2.r, r2.g, r2.b) : d3_rgb_parse("" + r2, d3_rgb, d3_hsl_rgb) : new d3_rgb(r2, g2, b);
    }
    function d3_rgbNumber(value) {
      return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
    }
    function d3_rgbString(value) {
      return d3_rgbNumber(value) + "";
    }
    var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
    d3_rgbPrototype.brighter = function(k2) {
      k2 = Math.pow(0.7, arguments.length ? k2 : 1);
      var r2 = this.r, g2 = this.g, b = this.b, i = 30;
      if (!r2 && !g2 && !b)
        return new d3_rgb(i, i, i);
      if (r2 && r2 < i)
        r2 = i;
      if (g2 && g2 < i)
        g2 = i;
      if (b && b < i)
        b = i;
      return new d3_rgb(Math.min(255, r2 / k2), Math.min(255, g2 / k2), Math.min(255, b / k2));
    };
    d3_rgbPrototype.darker = function(k2) {
      k2 = Math.pow(0.7, arguments.length ? k2 : 1);
      return new d3_rgb(k2 * this.r, k2 * this.g, k2 * this.b);
    };
    d3_rgbPrototype.hsl = function() {
      return d3_rgb_hsl(this.r, this.g, this.b);
    };
    d3_rgbPrototype.toString = function() {
      return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
    };
    function d3_rgb_hex(v2) {
      return v2 < 16 ? "0" + Math.max(0, v2).toString(16) : Math.min(255, v2).toString(16);
    }
    function d3_rgb_parse(format, rgb, hsl) {
      var r2 = 0, g2 = 0, b = 0, m1, m2, color;
      m1 = /([a-z]+)\((.*)\)/i.exec(format);
      if (m1) {
        m2 = m1[2].split(",");
        switch (m1[1]) {
          case "hsl": {
            return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
          }
          case "rgb": {
            return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
          }
        }
      }
      if (color = d3_rgb_names.get(format.toLowerCase())) {
        return rgb(color.r, color.g, color.b);
      }
      if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
        if (format.length === 4) {
          r2 = (color & 3840) >> 4;
          r2 = r2 >> 4 | r2;
          g2 = color & 240;
          g2 = g2 >> 4 | g2;
          b = color & 15;
          b = b << 4 | b;
        } else if (format.length === 7) {
          r2 = (color & 16711680) >> 16;
          g2 = (color & 65280) >> 8;
          b = color & 255;
        }
      }
      return rgb(r2, g2, b);
    }
    function d3_rgb_hsl(r2, g2, b) {
      var min = Math.min(r2 /= 255, g2 /= 255, b /= 255), max = Math.max(r2, g2, b), d = max - min, h, s, l2 = (max + min) / 2;
      if (d) {
        s = l2 < 0.5 ? d / (max + min) : d / (2 - max - min);
        if (r2 == max)
          h = (g2 - b) / d + (g2 < b ? 6 : 0);
        else if (g2 == max)
          h = (b - r2) / d + 2;
        else
          h = (r2 - g2) / d + 4;
        h *= 60;
      } else {
        h = NaN;
        s = l2 > 0 && l2 < 1 ? 0 : h;
      }
      return new d3_hsl(h, s, l2);
    }
    function d3_rgb_lab(r2, g2, b) {
      r2 = d3_rgb_xyz(r2);
      g2 = d3_rgb_xyz(g2);
      b = d3_rgb_xyz(b);
      var x2 = d3_xyz_lab((0.4124564 * r2 + 0.3575761 * g2 + 0.1804375 * b) / d3_lab_X), y2 = d3_xyz_lab((0.2126729 * r2 + 0.7151522 * g2 + 0.072175 * b) / d3_lab_Y), z2 = d3_xyz_lab((0.0193339 * r2 + 0.119192 * g2 + 0.9503041 * b) / d3_lab_Z);
      return d3_lab(116 * y2 - 16, 500 * (x2 - y2), 200 * (y2 - z2));
    }
    function d3_rgb_xyz(r2) {
      return (r2 /= 255) <= 0.04045 ? r2 / 12.92 : Math.pow((r2 + 0.055) / 1.055, 2.4);
    }
    function d3_rgb_parseNumber(c) {
      var f2 = parseFloat(c);
      return c.charAt(c.length - 1) === "%" ? Math.round(f2 * 2.55) : f2;
    }
    var d3_rgb_names = d32.map({
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
    });
    d3_rgb_names.forEach(function(key, value) {
      d3_rgb_names.set(key, d3_rgbNumber(value));
    });
    function d3_functor(v2) {
      return typeof v2 === "function" ? v2 : function() {
        return v2;
      };
    }
    d32.functor = d3_functor;
    d32.xhr = d3_xhrType(d3_identity);
    function d3_xhrType(response) {
      return function(url, mimeType, callback) {
        if (arguments.length === 2 && typeof mimeType === "function")
          callback = mimeType, mimeType = null;
        return d3_xhr(url, mimeType, response, callback);
      };
    }
    function d3_xhr(url, mimeType, response, callback) {
      var xhr = {}, dispatch = d32.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
      if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url))
        request = new XDomainRequest();
      "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
        request.readyState > 3 && respond();
      };
      function respond() {
        var status = request.status, result;
        if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
          try {
            result = response.call(xhr, request);
          } catch (e) {
            dispatch.error.call(xhr, e);
            return;
          }
          dispatch.load.call(xhr, result);
        } else {
          dispatch.error.call(xhr, request);
        }
      }
      request.onprogress = function(event) {
        var o = d32.event;
        d32.event = event;
        try {
          dispatch.progress.call(xhr, request);
        } finally {
          d32.event = o;
        }
      };
      xhr.header = function(name, value) {
        name = (name + "").toLowerCase();
        if (arguments.length < 2)
          return headers[name];
        if (value == null)
          delete headers[name];
        else
          headers[name] = value + "";
        return xhr;
      };
      xhr.mimeType = function(value) {
        if (!arguments.length)
          return mimeType;
        mimeType = value == null ? null : value + "";
        return xhr;
      };
      xhr.responseType = function(value) {
        if (!arguments.length)
          return responseType;
        responseType = value;
        return xhr;
      };
      xhr.response = function(value) {
        response = value;
        return xhr;
      };
      ["get", "post"].forEach(function(method) {
        xhr[method] = function() {
          return xhr.send.apply(xhr, [method].concat(d3_array(arguments)));
        };
      });
      xhr.send = function(method, data, callback2) {
        if (arguments.length === 2 && typeof data === "function")
          callback2 = data, data = null;
        request.open(method, url, true);
        if (mimeType != null && !("accept" in headers))
          headers["accept"] = mimeType + ",*/*";
        if (request.setRequestHeader)
          for (var name in headers)
            request.setRequestHeader(name, headers[name]);
        if (mimeType != null && request.overrideMimeType)
          request.overrideMimeType(mimeType);
        if (responseType != null)
          request.responseType = responseType;
        if (callback2 != null)
          xhr.on("error", callback2).on("load", function(request2) {
            callback2(null, request2);
          });
        dispatch.beforesend.call(xhr, request);
        request.send(data == null ? null : data);
        return xhr;
      };
      xhr.abort = function() {
        request.abort();
        return xhr;
      };
      d32.rebind(xhr, dispatch, "on");
      return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
    }
    function d3_xhr_fixCallback(callback) {
      return callback.length === 1 ? function(error, request) {
        callback(error == null ? request : null);
      } : callback;
    }
    function d3_xhrHasResponse(request) {
      var type = request.responseType;
      return type && type !== "text" ? request.response : request.responseText;
    }
    d32.dsv = function(delimiter, mimeType) {
      var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
      function dsv(url, row, callback) {
        if (arguments.length < 3)
          callback = row, row = null;
        var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
        xhr.row = function(_) {
          return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
        };
        return xhr;
      }
      function response(request) {
        return dsv.parse(request.responseText);
      }
      function typedResponse(f2) {
        return function(request) {
          return dsv.parse(request.responseText, f2);
        };
      }
      dsv.parse = function(text, f2) {
        var o;
        return dsv.parseRows(text, function(row, i) {
          if (o)
            return o(row, i - 1);
          var a = new Function("d", "return {" + row.map(function(name, i2) {
            return JSON.stringify(name) + ": d[" + i2 + "]";
          }).join(",") + "}");
          o = f2 ? function(row2, i2) {
            return f2(a(row2), i2);
          } : a;
        });
      };
      dsv.parseRows = function(text, f2) {
        var EOL = {}, EOF = {}, rows = [], N2 = text.length, I2 = 0, n2 = 0, t2, eol;
        function token() {
          if (I2 >= N2)
            return EOF;
          if (eol)
            return eol = false, EOL;
          var j = I2;
          if (text.charCodeAt(j) === 34) {
            var i = j;
            while (i++ < N2) {
              if (text.charCodeAt(i) === 34) {
                if (text.charCodeAt(i + 1) !== 34)
                  break;
                ++i;
              }
            }
            I2 = i + 2;
            var c = text.charCodeAt(i + 1);
            if (c === 13) {
              eol = true;
              if (text.charCodeAt(i + 2) === 10)
                ++I2;
            } else if (c === 10) {
              eol = true;
            }
            return text.slice(j + 1, i).replace(/""/g, '"');
          }
          while (I2 < N2) {
            var c = text.charCodeAt(I2++), k2 = 1;
            if (c === 10)
              eol = true;
            else if (c === 13) {
              eol = true;
              if (text.charCodeAt(I2) === 10)
                ++I2, ++k2;
            } else if (c !== delimiterCode)
              continue;
            return text.slice(j, I2 - k2);
          }
          return text.slice(j);
        }
        while ((t2 = token()) !== EOF) {
          var a = [];
          while (t2 !== EOL && t2 !== EOF) {
            a.push(t2);
            t2 = token();
          }
          if (f2 && (a = f2(a, n2++)) == null)
            continue;
          rows.push(a);
        }
        return rows;
      };
      dsv.format = function(rows) {
        if (Array.isArray(rows[0]))
          return dsv.formatRows(rows);
        var fieldSet = new d3_Set(), fields = [];
        rows.forEach(function(row) {
          for (var field in row) {
            if (!fieldSet.has(field)) {
              fields.push(fieldSet.add(field));
            }
          }
        });
        return [fields.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
          return fields.map(function(field) {
            return formatValue(row[field]);
          }).join(delimiter);
        })).join("\n");
      };
      dsv.formatRows = function(rows) {
        return rows.map(formatRow).join("\n");
      };
      function formatRow(row) {
        return row.map(formatValue).join(delimiter);
      }
      function formatValue(text) {
        return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
      }
      return dsv;
    };
    d32.csv = d32.dsv(",", "text/csv");
    d32.tsv = d32.dsv("	", "text/tab-separated-values");
    var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_active, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
      setTimeout(callback, 17);
    };
    d32.timer = function(callback, delay, then) {
      var n2 = arguments.length;
      if (n2 < 2)
        delay = 0;
      if (n2 < 3)
        then = Date.now();
      var time = then + delay, timer2 = {
        c: callback,
        t: time,
        f: false,
        n: null
      };
      if (d3_timer_queueTail)
        d3_timer_queueTail.n = timer2;
      else
        d3_timer_queueHead = timer2;
      d3_timer_queueTail = timer2;
      if (!d3_timer_interval) {
        d3_timer_timeout = clearTimeout(d3_timer_timeout);
        d3_timer_interval = 1;
        d3_timer_frame(d3_timer_step);
      }
    };
    function d3_timer_step() {
      var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
      if (delay > 24) {
        if (isFinite(delay)) {
          clearTimeout(d3_timer_timeout);
          d3_timer_timeout = setTimeout(d3_timer_step, delay);
        }
        d3_timer_interval = 0;
      } else {
        d3_timer_interval = 1;
        d3_timer_frame(d3_timer_step);
      }
    }
    d32.timer.flush = function() {
      d3_timer_mark();
      d3_timer_sweep();
    };
    function d3_timer_mark() {
      var now = Date.now();
      d3_timer_active = d3_timer_queueHead;
      while (d3_timer_active) {
        if (now >= d3_timer_active.t)
          d3_timer_active.f = d3_timer_active.c(now - d3_timer_active.t);
        d3_timer_active = d3_timer_active.n;
      }
      return now;
    }
    function d3_timer_sweep() {
      var t0, t1 = d3_timer_queueHead, time = Infinity;
      while (t1) {
        if (t1.f) {
          t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
        } else {
          if (t1.t < time)
            time = t1.t;
          t1 = (t0 = t1).n;
        }
      }
      d3_timer_queueTail = t0;
      return time;
    }
    function d3_format_precision(x2, p2) {
      return p2 - (x2 ? Math.ceil(Math.log(x2) / Math.LN10) : 1);
    }
    d32.round = function(x2, n2) {
      return n2 ? Math.round(x2 * (n2 = Math.pow(10, n2))) / n2 : Math.round(x2);
    };
    var d3_formatPrefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(d3_formatPrefix);
    d32.formatPrefix = function(value, precision) {
      var i = 0;
      if (value) {
        if (value < 0)
          value *= -1;
        if (precision)
          value = d32.round(value, d3_format_precision(value, precision));
        i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
        i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
      }
      return d3_formatPrefixes[8 + i / 3];
    };
    function d3_formatPrefix(d, i) {
      var k2 = Math.pow(10, abs(8 - i) * 3);
      return {
        scale: i > 8 ? function(d2) {
          return d2 / k2;
        } : function(d2) {
          return d2 * k2;
        },
        symbol: d
      };
    }
    function d3_locale_numberFormat(locale) {
      var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
        var i = value.length, t2 = [], j = 0, g2 = locale_grouping[0], length = 0;
        while (i > 0 && g2 > 0) {
          if (length + g2 + 1 > width)
            g2 = Math.max(1, width - length);
          t2.push(value.substring(i -= g2, i + g2));
          if ((length += g2 + 1) > width)
            break;
          g2 = locale_grouping[j = (j + 1) % locale_grouping.length];
        }
        return t2.reverse().join(locale_thousands);
      } : d3_identity;
      return function(specifier) {
        var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
        if (precision)
          precision = +precision.substring(1);
        if (zfill || fill === "0" && align === "=") {
          zfill = fill = "0";
          align = "=";
        }
        switch (type) {
          case "n":
            comma = true;
            type = "g";
            break;
          case "%":
            scale = 100;
            suffix = "%";
            type = "f";
            break;
          case "p":
            scale = 100;
            suffix = "%";
            type = "r";
            break;
          case "b":
          case "o":
          case "x":
          case "X":
            if (symbol === "#")
              prefix = "0" + type.toLowerCase();
          case "c":
            exponent = false;
          case "d":
            integer = true;
            precision = 0;
            break;
          case "s":
            scale = -1;
            type = "r";
            break;
        }
        if (symbol === "$")
          prefix = locale_currency[0], suffix = locale_currency[1];
        if (type == "r" && !precision)
          type = "g";
        if (precision != null) {
          if (type == "g")
            precision = Math.max(1, Math.min(21, precision));
          else if (type == "e" || type == "f")
            precision = Math.max(0, Math.min(20, precision));
        }
        type = d3_format_types.get(type) || d3_format_typeDefault;
        var zcomma = zfill && comma;
        return function(value) {
          var fullSuffix = suffix;
          if (integer && value % 1)
            return "";
          var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
          if (scale < 0) {
            var unit = d32.formatPrefix(value, precision);
            value = unit.scale(value);
            fullSuffix = unit.symbol + suffix;
          } else {
            value *= scale;
          }
          value = type(value, precision);
          var i = value.lastIndexOf("."), before, after;
          if (i < 0) {
            var j = exponent ? value.lastIndexOf("e") : -1;
            if (j < 0)
              before = value, after = "";
            else
              before = value.substring(0, j), after = value.substring(j);
          } else {
            before = value.substring(0, i);
            after = locale_decimal + value.substring(i + 1);
          }
          if (!zfill && comma)
            before = formatGroup(before, Infinity);
          var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
          if (zcomma)
            before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
          negative += prefix;
          value = before + after;
          return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
        };
      };
    }
    var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
    var d3_format_types = d32.map({
      b: function(x2) {
        return x2.toString(2);
      },
      c: function(x2) {
        return String.fromCharCode(x2);
      },
      o: function(x2) {
        return x2.toString(8);
      },
      x: function(x2) {
        return x2.toString(16);
      },
      X: function(x2) {
        return x2.toString(16).toUpperCase();
      },
      g: function(x2, p2) {
        return x2.toPrecision(p2);
      },
      e: function(x2, p2) {
        return x2.toExponential(p2);
      },
      f: function(x2, p2) {
        return x2.toFixed(p2);
      },
      r: function(x2, p2) {
        return (x2 = d32.round(x2, d3_format_precision(x2, p2))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x2 * (1 + 1e-15), p2))));
      }
    });
    function d3_format_typeDefault(x2) {
      return x2 + "";
    }
    var d3_time = d32.time = {}, d3_date = Date;
    function d3_date_utc() {
      this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
    }
    d3_date_utc.prototype = {
      getDate: function() {
        return this._.getUTCDate();
      },
      getDay: function() {
        return this._.getUTCDay();
      },
      getFullYear: function() {
        return this._.getUTCFullYear();
      },
      getHours: function() {
        return this._.getUTCHours();
      },
      getMilliseconds: function() {
        return this._.getUTCMilliseconds();
      },
      getMinutes: function() {
        return this._.getUTCMinutes();
      },
      getMonth: function() {
        return this._.getUTCMonth();
      },
      getSeconds: function() {
        return this._.getUTCSeconds();
      },
      getTime: function() {
        return this._.getTime();
      },
      getTimezoneOffset: function() {
        return 0;
      },
      valueOf: function() {
        return this._.valueOf();
      },
      setDate: function() {
        d3_time_prototype.setUTCDate.apply(this._, arguments);
      },
      setDay: function() {
        d3_time_prototype.setUTCDay.apply(this._, arguments);
      },
      setFullYear: function() {
        d3_time_prototype.setUTCFullYear.apply(this._, arguments);
      },
      setHours: function() {
        d3_time_prototype.setUTCHours.apply(this._, arguments);
      },
      setMilliseconds: function() {
        d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
      },
      setMinutes: function() {
        d3_time_prototype.setUTCMinutes.apply(this._, arguments);
      },
      setMonth: function() {
        d3_time_prototype.setUTCMonth.apply(this._, arguments);
      },
      setSeconds: function() {
        d3_time_prototype.setUTCSeconds.apply(this._, arguments);
      },
      setTime: function() {
        d3_time_prototype.setTime.apply(this._, arguments);
      }
    };
    var d3_time_prototype = Date.prototype;
    function d3_time_interval(local, step, number) {
      function round(date) {
        var d0 = local(date), d1 = offset(d0, 1);
        return date - d0 < d1 - date ? d0 : d1;
      }
      function ceil(date) {
        step(date = local(new d3_date(date - 1)), 1);
        return date;
      }
      function offset(date, k2) {
        step(date = new d3_date(+date), k2);
        return date;
      }
      function range(t0, t1, dt) {
        var time = ceil(t0), times = [];
        if (dt > 1) {
          while (time < t1) {
            if (!(number(time) % dt))
              times.push(/* @__PURE__ */ new Date(+time));
            step(time, 1);
          }
        } else {
          while (time < t1)
            times.push(/* @__PURE__ */ new Date(+time)), step(time, 1);
        }
        return times;
      }
      function range_utc(t0, t1, dt) {
        try {
          d3_date = d3_date_utc;
          var utc2 = new d3_date_utc();
          utc2._ = t0;
          return range(utc2, t1, dt);
        } finally {
          d3_date = Date;
        }
      }
      local.floor = local;
      local.round = round;
      local.ceil = ceil;
      local.offset = offset;
      local.range = range;
      var utc = local.utc = d3_time_interval_utc(local);
      utc.floor = utc;
      utc.round = d3_time_interval_utc(round);
      utc.ceil = d3_time_interval_utc(ceil);
      utc.offset = d3_time_interval_utc(offset);
      utc.range = range_utc;
      return local;
    }
    function d3_time_interval_utc(method) {
      return function(date, k2) {
        try {
          d3_date = d3_date_utc;
          var utc = new d3_date_utc();
          utc._ = date;
          return method(utc, k2)._;
        } finally {
          d3_date = Date;
        }
      };
    }
    d3_time.year = d3_time_interval(function(date) {
      date = d3_time.day(date);
      date.setMonth(0, 1);
      return date;
    }, function(date, offset) {
      date.setFullYear(date.getFullYear() + offset);
    }, function(date) {
      return date.getFullYear();
    });
    d3_time.years = d3_time.year.range;
    d3_time.years.utc = d3_time.year.utc.range;
    d3_time.day = d3_time_interval(function(date) {
      var day = new d3_date(2e3, 0);
      day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
      return day;
    }, function(date, offset) {
      date.setDate(date.getDate() + offset);
    }, function(date) {
      return date.getDate() - 1;
    });
    d3_time.days = d3_time.day.range;
    d3_time.days.utc = d3_time.day.utc.range;
    d3_time.dayOfYear = function(date) {
      var year = d3_time.year(date);
      return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
    };
    ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(day, i) {
      i = 7 - i;
      var interval = d3_time[day] = d3_time_interval(function(date) {
        (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
        return date;
      }, function(date, offset) {
        date.setDate(date.getDate() + Math.floor(offset) * 7);
      }, function(date) {
        var day2 = d3_time.year(date).getDay();
        return Math.floor((d3_time.dayOfYear(date) + (day2 + i) % 7) / 7) - (day2 !== i);
      });
      d3_time[day + "s"] = interval.range;
      d3_time[day + "s"].utc = interval.utc.range;
      d3_time[day + "OfYear"] = function(date) {
        var day2 = d3_time.year(date).getDay();
        return Math.floor((d3_time.dayOfYear(date) + (day2 + i) % 7) / 7);
      };
    });
    d3_time.week = d3_time.sunday;
    d3_time.weeks = d3_time.sunday.range;
    d3_time.weeks.utc = d3_time.sunday.utc.range;
    d3_time.weekOfYear = d3_time.sundayOfYear;
    function d3_locale_timeFormat(locale) {
      var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
      function d3_time_format2(template) {
        var n2 = template.length;
        function format(date) {
          var string = [], i = -1, j = 0, c, p2, f2;
          while (++i < n2) {
            if (template.charCodeAt(i) === 37) {
              string.push(template.slice(j, i));
              if ((p2 = d3_time_formatPads[c = template.charAt(++i)]) != null)
                c = template.charAt(++i);
              if (f2 = d3_time_formats[c])
                c = f2(date, p2 == null ? c === "e" ? " " : "0" : p2);
              string.push(c);
              j = i + 1;
            }
          }
          string.push(template.slice(j, i));
          return string.join("");
        }
        format.parse = function(string) {
          var d = {
            y: 1900,
            m: 0,
            d: 1,
            H: 0,
            M: 0,
            S: 0,
            L: 0,
            Z: null
          }, i = d3_time_parse(d, template, string, 0);
          if (i != string.length)
            return null;
          if ("p" in d)
            d.H = d.H % 12 + d.p * 12;
          var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
          if ("j" in d)
            date.setFullYear(d.y, 0, d.j);
          else if ("w" in d && ("W" in d || "U" in d)) {
            date.setFullYear(d.y, 0, 1);
            date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
          } else
            date.setFullYear(d.y, d.m, d.d);
          date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
          return localZ ? date._ : date;
        };
        format.toString = function() {
          return template;
        };
        return format;
      }
      function d3_time_parse(date, template, string, j) {
        var c, p2, t2, i = 0, n2 = template.length, m2 = string.length;
        while (i < n2) {
          if (j >= m2)
            return -1;
          c = template.charCodeAt(i++);
          if (c === 37) {
            t2 = template.charAt(i++);
            p2 = d3_time_parsers[t2 in d3_time_formatPads ? template.charAt(i++) : t2];
            if (!p2 || (j = p2(date, string, j)) < 0)
              return -1;
          } else if (c != string.charCodeAt(j++)) {
            return -1;
          }
        }
        return j;
      }
      d3_time_format2.utc = function(template) {
        var local = d3_time_format2(template);
        function format(date) {
          try {
            d3_date = d3_date_utc;
            var utc = new d3_date();
            utc._ = date;
            return local(utc);
          } finally {
            d3_date = Date;
          }
        }
        format.parse = function(string) {
          try {
            d3_date = d3_date_utc;
            var date = local.parse(string);
            return date && date._;
          } finally {
            d3_date = Date;
          }
        };
        format.toString = local.toString;
        return format;
      };
      d3_time_format2.multi = d3_time_format2.utc.multi = d3_time_formatMulti;
      var d3_time_periodLookup = d32.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
      locale_periods.forEach(function(p2, i) {
        d3_time_periodLookup.set(p2.toLowerCase(), i);
      });
      var d3_time_formats = {
        a: function(d) {
          return locale_shortDays[d.getDay()];
        },
        A: function(d) {
          return locale_days[d.getDay()];
        },
        b: function(d) {
          return locale_shortMonths[d.getMonth()];
        },
        B: function(d) {
          return locale_months[d.getMonth()];
        },
        c: d3_time_format2(locale_dateTime),
        d: function(d, p2) {
          return d3_time_formatPad(d.getDate(), p2, 2);
        },
        e: function(d, p2) {
          return d3_time_formatPad(d.getDate(), p2, 2);
        },
        H: function(d, p2) {
          return d3_time_formatPad(d.getHours(), p2, 2);
        },
        I: function(d, p2) {
          return d3_time_formatPad(d.getHours() % 12 || 12, p2, 2);
        },
        j: function(d, p2) {
          return d3_time_formatPad(1 + d3_time.dayOfYear(d), p2, 3);
        },
        L: function(d, p2) {
          return d3_time_formatPad(d.getMilliseconds(), p2, 3);
        },
        m: function(d, p2) {
          return d3_time_formatPad(d.getMonth() + 1, p2, 2);
        },
        M: function(d, p2) {
          return d3_time_formatPad(d.getMinutes(), p2, 2);
        },
        p: function(d) {
          return locale_periods[+(d.getHours() >= 12)];
        },
        S: function(d, p2) {
          return d3_time_formatPad(d.getSeconds(), p2, 2);
        },
        U: function(d, p2) {
          return d3_time_formatPad(d3_time.sundayOfYear(d), p2, 2);
        },
        w: function(d) {
          return d.getDay();
        },
        W: function(d, p2) {
          return d3_time_formatPad(d3_time.mondayOfYear(d), p2, 2);
        },
        x: d3_time_format2(locale_date),
        X: d3_time_format2(locale_time),
        y: function(d, p2) {
          return d3_time_formatPad(d.getFullYear() % 100, p2, 2);
        },
        Y: function(d, p2) {
          return d3_time_formatPad(d.getFullYear() % 1e4, p2, 4);
        },
        Z: d3_time_zone,
        "%": function() {
          return "%";
        }
      };
      var d3_time_parsers = {
        a: d3_time_parseWeekdayAbbrev,
        A: d3_time_parseWeekday,
        b: d3_time_parseMonthAbbrev,
        B: d3_time_parseMonth,
        c: d3_time_parseLocaleFull,
        d: d3_time_parseDay,
        e: d3_time_parseDay,
        H: d3_time_parseHour24,
        I: d3_time_parseHour24,
        j: d3_time_parseDayOfYear,
        L: d3_time_parseMilliseconds,
        m: d3_time_parseMonthNumber,
        M: d3_time_parseMinutes,
        p: d3_time_parseAmPm,
        S: d3_time_parseSeconds,
        U: d3_time_parseWeekNumberSunday,
        w: d3_time_parseWeekdayNumber,
        W: d3_time_parseWeekNumberMonday,
        x: d3_time_parseLocaleDate,
        X: d3_time_parseLocaleTime,
        y: d3_time_parseYear,
        Y: d3_time_parseFullYear,
        Z: d3_time_parseZone,
        "%": d3_time_parseLiteralPercent
      };
      function d3_time_parseWeekdayAbbrev(date, string, i) {
        d3_time_dayAbbrevRe.lastIndex = 0;
        var n2 = d3_time_dayAbbrevRe.exec(string.slice(i));
        return n2 ? (date.w = d3_time_dayAbbrevLookup.get(n2[0].toLowerCase()), i + n2[0].length) : -1;
      }
      function d3_time_parseWeekday(date, string, i) {
        d3_time_dayRe.lastIndex = 0;
        var n2 = d3_time_dayRe.exec(string.slice(i));
        return n2 ? (date.w = d3_time_dayLookup.get(n2[0].toLowerCase()), i + n2[0].length) : -1;
      }
      function d3_time_parseMonthAbbrev(date, string, i) {
        d3_time_monthAbbrevRe.lastIndex = 0;
        var n2 = d3_time_monthAbbrevRe.exec(string.slice(i));
        return n2 ? (date.m = d3_time_monthAbbrevLookup.get(n2[0].toLowerCase()), i + n2[0].length) : -1;
      }
      function d3_time_parseMonth(date, string, i) {
        d3_time_monthRe.lastIndex = 0;
        var n2 = d3_time_monthRe.exec(string.slice(i));
        return n2 ? (date.m = d3_time_monthLookup.get(n2[0].toLowerCase()), i + n2[0].length) : -1;
      }
      function d3_time_parseLocaleFull(date, string, i) {
        return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
      }
      function d3_time_parseLocaleDate(date, string, i) {
        return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
      }
      function d3_time_parseLocaleTime(date, string, i) {
        return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
      }
      function d3_time_parseAmPm(date, string, i) {
        var n2 = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
        return n2 == null ? -1 : (date.p = n2, i);
      }
      return d3_time_format2;
    }
    var d3_time_formatPads = {
      "-": "",
      _: " ",
      "0": "0"
    }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
    function d3_time_formatPad(value, fill, width) {
      var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
      return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
    }
    function d3_time_formatRe(names) {
      return new RegExp("^(?:" + names.map(d32.requote).join("|") + ")", "i");
    }
    function d3_time_formatLookup(names) {
      var map = new d3_Map(), i = -1, n2 = names.length;
      while (++i < n2)
        map.set(names[i].toLowerCase(), i);
      return map;
    }
    function d3_time_parseWeekdayNumber(date, string, i) {
      d3_time_numberRe.lastIndex = 0;
      var n2 = d3_time_numberRe.exec(string.slice(i, i + 1));
      return n2 ? (date.w = +n2[0], i + n2[0].length) : -1;
    }
    function d3_time_parseWeekNumberSunday(date, string, i) {
      d3_time_numberRe.lastIndex = 0;
      var n2 = d3_time_numberRe.exec(string.slice(i));
      return n2 ? (date.U = +n2[0], i + n2[0].length) : -1;
    }
    function d3_time_parseWeekNumberMonday(date, string, i) {
      d3_time_numberRe.lastIndex = 0;
      var n2 = d3_time_numberRe.exec(string.slice(i));
      return n2 ? (date.W = +n2[0], i + n2[0].length) : -1;
    }
    function d3_time_parseFullYear(date, string, i) {
      d3_time_numberRe.lastIndex = 0;
      var n2 = d3_time_numberRe.exec(string.slice(i, i + 4));
      return n2 ? (date.y = +n2[0], i + n2[0].length) : -1;
    }
    function d3_time_parseYear(date, string, i) {
      d3_time_numberRe.lastIndex = 0;
      var n2 = d3_time_numberRe.exec(string.slice(i, i + 2));
      return n2 ? (date.y = d3_time_expandYear(+n2[0]), i + n2[0].length) : -1;
    }
    function d3_time_parseZone(date, string, i) {
      return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, i + 5) : -1;
    }
    function d3_time_expandYear(d) {
      return d + (d > 68 ? 1900 : 2e3);
    }
    function d3_time_parseMonthNumber(date, string, i) {
      d3_time_numberRe.lastIndex = 0;
      var n2 = d3_time_numberRe.exec(string.slice(i, i + 2));
      return n2 ? (date.m = n2[0] - 1, i + n2[0].length) : -1;
    }
    function d3_time_parseDay(date, string, i) {
      d3_time_numberRe.lastIndex = 0;
      var n2 = d3_time_numberRe.exec(string.slice(i, i + 2));
      return n2 ? (date.d = +n2[0], i + n2[0].length) : -1;
    }
    function d3_time_parseDayOfYear(date, string, i) {
      d3_time_numberRe.lastIndex = 0;
      var n2 = d3_time_numberRe.exec(string.slice(i, i + 3));
      return n2 ? (date.j = +n2[0], i + n2[0].length) : -1;
    }
    function d3_time_parseHour24(date, string, i) {
      d3_time_numberRe.lastIndex = 0;
      var n2 = d3_time_numberRe.exec(string.slice(i, i + 2));
      return n2 ? (date.H = +n2[0], i + n2[0].length) : -1;
    }
    function d3_time_parseMinutes(date, string, i) {
      d3_time_numberRe.lastIndex = 0;
      var n2 = d3_time_numberRe.exec(string.slice(i, i + 2));
      return n2 ? (date.M = +n2[0], i + n2[0].length) : -1;
    }
    function d3_time_parseSeconds(date, string, i) {
      d3_time_numberRe.lastIndex = 0;
      var n2 = d3_time_numberRe.exec(string.slice(i, i + 2));
      return n2 ? (date.S = +n2[0], i + n2[0].length) : -1;
    }
    function d3_time_parseMilliseconds(date, string, i) {
      d3_time_numberRe.lastIndex = 0;
      var n2 = d3_time_numberRe.exec(string.slice(i, i + 3));
      return n2 ? (date.L = +n2[0], i + n2[0].length) : -1;
    }
    function d3_time_zone(d) {
      var z2 = d.getTimezoneOffset(), zs = z2 > 0 ? "-" : "+", zh2 = abs(z2) / 60 | 0, zm = abs(z2) % 60;
      return zs + d3_time_formatPad(zh2, "0", 2) + d3_time_formatPad(zm, "0", 2);
    }
    function d3_time_parseLiteralPercent(date, string, i) {
      d3_time_percentRe.lastIndex = 0;
      var n2 = d3_time_percentRe.exec(string.slice(i, i + 1));
      return n2 ? i + n2[0].length : -1;
    }
    function d3_time_formatMulti(formats) {
      var n2 = formats.length, i = -1;
      while (++i < n2)
        formats[i][0] = this(formats[i][0]);
      return function(date) {
        var i2 = 0, f2 = formats[i2];
        while (!f2[1](date))
          f2 = formats[++i2];
        return f2[0](date);
      };
    }
    d32.locale = function(locale) {
      return {
        numberFormat: d3_locale_numberFormat(locale),
        timeFormat: d3_locale_timeFormat(locale)
      };
    };
    var d3_locale_enUS = d32.locale({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""],
      dateTime: "%a %b %e %X %Y",
      date: "%m/%d/%Y",
      time: "%H:%M:%S",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    d32.format = d3_locale_enUS.numberFormat;
    d32.geo = {};
    function d3_adder() {
    }
    d3_adder.prototype = {
      s: 0,
      t: 0,
      add: function(y2) {
        d3_adderSum(y2, this.t, d3_adderTemp);
        d3_adderSum(d3_adderTemp.s, this.s, this);
        if (this.s)
          this.t += d3_adderTemp.t;
        else
          this.s = d3_adderTemp.t;
      },
      reset: function() {
        this.s = this.t = 0;
      },
      valueOf: function() {
        return this.s;
      }
    };
    var d3_adderTemp = new d3_adder();
    function d3_adderSum(a, b, o) {
      var x2 = o.s = a + b, bv = x2 - a, av = x2 - bv;
      o.t = a - av + (b - bv);
    }
    d32.geo.stream = function(object, listener) {
      if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
        d3_geo_streamObjectType[object.type](object, listener);
      } else {
        d3_geo_streamGeometry(object, listener);
      }
    };
    function d3_geo_streamGeometry(geometry, listener) {
      if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
        d3_geo_streamGeometryType[geometry.type](geometry, listener);
      }
    }
    var d3_geo_streamObjectType = {
      Feature: function(feature, listener) {
        d3_geo_streamGeometry(feature.geometry, listener);
      },
      FeatureCollection: function(object, listener) {
        var features = object.features, i = -1, n2 = features.length;
        while (++i < n2)
          d3_geo_streamGeometry(features[i].geometry, listener);
      }
    };
    var d3_geo_streamGeometryType = {
      Sphere: function(object, listener) {
        listener.sphere();
      },
      Point: function(object, listener) {
        object = object.coordinates;
        listener.point(object[0], object[1], object[2]);
      },
      MultiPoint: function(object, listener) {
        var coordinates = object.coordinates, i = -1, n2 = coordinates.length;
        while (++i < n2)
          object = coordinates[i], listener.point(object[0], object[1], object[2]);
      },
      LineString: function(object, listener) {
        d3_geo_streamLine(object.coordinates, listener, 0);
      },
      MultiLineString: function(object, listener) {
        var coordinates = object.coordinates, i = -1, n2 = coordinates.length;
        while (++i < n2)
          d3_geo_streamLine(coordinates[i], listener, 0);
      },
      Polygon: function(object, listener) {
        d3_geo_streamPolygon(object.coordinates, listener);
      },
      MultiPolygon: function(object, listener) {
        var coordinates = object.coordinates, i = -1, n2 = coordinates.length;
        while (++i < n2)
          d3_geo_streamPolygon(coordinates[i], listener);
      },
      GeometryCollection: function(object, listener) {
        var geometries = object.geometries, i = -1, n2 = geometries.length;
        while (++i < n2)
          d3_geo_streamGeometry(geometries[i], listener);
      }
    };
    function d3_geo_streamLine(coordinates, listener, closed) {
      var i = -1, n2 = coordinates.length - closed, coordinate;
      listener.lineStart();
      while (++i < n2)
        coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
      listener.lineEnd();
    }
    function d3_geo_streamPolygon(coordinates, listener) {
      var i = -1, n2 = coordinates.length;
      listener.polygonStart();
      while (++i < n2)
        d3_geo_streamLine(coordinates[i], listener, 1);
      listener.polygonEnd();
    }
    d32.geo.area = function(object) {
      d3_geo_areaSum = 0;
      d32.geo.stream(object, d3_geo_area);
      return d3_geo_areaSum;
    };
    var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
    var d3_geo_area = {
      sphere: function() {
        d3_geo_areaSum += 4 * π;
      },
      point: d3_noop,
      lineStart: d3_noop,
      lineEnd: d3_noop,
      polygonStart: function() {
        d3_geo_areaRingSum.reset();
        d3_geo_area.lineStart = d3_geo_areaRingStart;
      },
      polygonEnd: function() {
        var area = 2 * d3_geo_areaRingSum;
        d3_geo_areaSum += area < 0 ? 4 * π + area : area;
        d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
      }
    };
    function d3_geo_areaRingStart() {
      var λ00, φ00, λ0, cosφ0, sinφ0;
      d3_geo_area.point = function(λ, φ) {
        d3_geo_area.point = nextPoint;
        λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), sinφ0 = Math.sin(φ);
      };
      function nextPoint(λ, φ) {
        λ *= d3_radians;
        φ = φ * d3_radians / 2 + π / 4;
        var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k2 = sinφ0 * sinφ, u2 = cosφ0 * cosφ + k2 * Math.cos(adλ), v2 = k2 * sdλ * Math.sin(adλ);
        d3_geo_areaRingSum.add(Math.atan2(v2, u2));
        λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
      }
      d3_geo_area.lineEnd = function() {
        nextPoint(λ00, φ00);
      };
    }
    function d3_geo_cartesian(spherical) {
      var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
      return [cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ)];
    }
    function d3_geo_cartesianDot(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }
    function d3_geo_cartesianCross(a, b) {
      return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    }
    function d3_geo_cartesianAdd(a, b) {
      a[0] += b[0];
      a[1] += b[1];
      a[2] += b[2];
    }
    function d3_geo_cartesianScale(vector, k2) {
      return [vector[0] * k2, vector[1] * k2, vector[2] * k2];
    }
    function d3_geo_cartesianNormalize(d) {
      var l2 = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
      d[0] /= l2;
      d[1] /= l2;
      d[2] /= l2;
    }
    function d3_geo_spherical(cartesian) {
      return [Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2])];
    }
    function d3_geo_sphericalEqual(a, b) {
      return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
    }
    d32.geo.bounds = /* @__PURE__ */ function() {
      var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
      var bound = {
        point,
        lineStart,
        lineEnd,
        polygonStart: function() {
          bound.point = ringPoint;
          bound.lineStart = ringStart;
          bound.lineEnd = ringEnd;
          dλSum = 0;
          d3_geo_area.polygonStart();
        },
        polygonEnd: function() {
          d3_geo_area.polygonEnd();
          bound.point = point;
          bound.lineStart = lineStart;
          bound.lineEnd = lineEnd;
          if (d3_geo_areaRingSum < 0)
            λ0 = -(λ1 = 180), φ0 = -(φ1 = 90);
          else if (dλSum > ε)
            φ1 = 90;
          else if (dλSum < -ε)
            φ0 = -90;
          range[0] = λ0, range[1] = λ1;
        }
      };
      function point(λ, φ) {
        ranges.push(range = [λ0 = λ, λ1 = λ]);
        if (φ < φ0)
          φ0 = φ;
        if (φ > φ1)
          φ1 = φ;
      }
      function linePoint(λ, φ) {
        var p2 = d3_geo_cartesian([λ * d3_radians, φ * d3_radians]);
        if (p0) {
          var normal = d3_geo_cartesianCross(p0, p2), equatorial = [normal[1], -normal[0], 0], inflection = d3_geo_cartesianCross(equatorial, normal);
          d3_geo_cartesianNormalize(inflection);
          inflection = d3_geo_spherical(inflection);
          var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
          if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
            var φi = inflection[1] * d3_degrees;
            if (φi > φ1)
              φ1 = φi;
          } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
            var φi = -inflection[1] * d3_degrees;
            if (φi < φ0)
              φ0 = φi;
          } else {
            if (φ < φ0)
              φ0 = φ;
            if (φ > φ1)
              φ1 = φ;
          }
          if (antimeridian) {
            if (λ < λ_) {
              if (angle(λ0, λ) > angle(λ0, λ1))
                λ1 = λ;
            } else {
              if (angle(λ, λ1) > angle(λ0, λ1))
                λ0 = λ;
            }
          } else {
            if (λ1 >= λ0) {
              if (λ < λ0)
                λ0 = λ;
              if (λ > λ1)
                λ1 = λ;
            } else {
              if (λ > λ_) {
                if (angle(λ0, λ) > angle(λ0, λ1))
                  λ1 = λ;
              } else {
                if (angle(λ, λ1) > angle(λ0, λ1))
                  λ0 = λ;
              }
            }
          }
        } else {
          point(λ, φ);
        }
        p0 = p2, λ_ = λ;
      }
      function lineStart() {
        bound.point = linePoint;
      }
      function lineEnd() {
        range[0] = λ0, range[1] = λ1;
        bound.point = point;
        p0 = null;
      }
      function ringPoint(λ, φ) {
        if (p0) {
          var dλ = λ - λ_;
          dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
        } else
          λ__ = λ, φ__ = φ;
        d3_geo_area.point(λ, φ);
        linePoint(λ, φ);
      }
      function ringStart() {
        d3_geo_area.lineStart();
      }
      function ringEnd() {
        ringPoint(λ__, φ__);
        d3_geo_area.lineEnd();
        if (abs(dλSum) > ε)
          λ0 = -(λ1 = 180);
        range[0] = λ0, range[1] = λ1;
        p0 = null;
      }
      function angle(λ02, λ12) {
        return (λ12 -= λ02) < 0 ? λ12 + 360 : λ12;
      }
      function compareRanges(a, b) {
        return a[0] - b[0];
      }
      function withinRange(x2, range2) {
        return range2[0] <= range2[1] ? range2[0] <= x2 && x2 <= range2[1] : x2 < range2[0] || range2[1] < x2;
      }
      return function(feature) {
        φ1 = λ1 = -(λ0 = φ0 = Infinity);
        ranges = [];
        d32.geo.stream(feature, bound);
        var n2 = ranges.length;
        if (n2) {
          ranges.sort(compareRanges);
          for (var i = 1, a = ranges[0], b, merged = [a]; i < n2; ++i) {
            b = ranges[i];
            if (withinRange(b[0], a) || withinRange(b[1], a)) {
              if (angle(a[0], b[1]) > angle(a[0], a[1]))
                a[1] = b[1];
              if (angle(b[0], a[1]) > angle(a[0], a[1]))
                a[0] = b[0];
            } else {
              merged.push(a = b);
            }
          }
          var best = -Infinity, dλ;
          for (var n2 = merged.length - 1, i = 0, a = merged[n2], b; i <= n2; a = b, ++i) {
            b = merged[i];
            if ((dλ = angle(a[1], b[0])) > best)
              best = dλ, λ0 = b[0], λ1 = a[1];
          }
        }
        ranges = range = null;
        return λ0 === Infinity || φ0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[λ0, φ0], [λ1, φ1]];
      };
    }();
    d32.geo.centroid = function(object) {
      d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
      d32.geo.stream(object, d3_geo_centroid);
      var x2 = d3_geo_centroidX2, y2 = d3_geo_centroidY2, z2 = d3_geo_centroidZ2, m2 = x2 * x2 + y2 * y2 + z2 * z2;
      if (m2 < ε2) {
        x2 = d3_geo_centroidX1, y2 = d3_geo_centroidY1, z2 = d3_geo_centroidZ1;
        if (d3_geo_centroidW1 < ε)
          x2 = d3_geo_centroidX0, y2 = d3_geo_centroidY0, z2 = d3_geo_centroidZ0;
        m2 = x2 * x2 + y2 * y2 + z2 * z2;
        if (m2 < ε2)
          return [NaN, NaN];
      }
      return [Math.atan2(y2, x2) * d3_degrees, d3_asin(z2 / Math.sqrt(m2)) * d3_degrees];
    };
    var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
    var d3_geo_centroid = {
      sphere: d3_noop,
      point: d3_geo_centroidPoint,
      lineStart: d3_geo_centroidLineStart,
      lineEnd: d3_geo_centroidLineEnd,
      polygonStart: function() {
        d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
      },
      polygonEnd: function() {
        d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
      }
    };
    function d3_geo_centroidPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
    }
    function d3_geo_centroidPointXYZ(x2, y2, z2) {
      ++d3_geo_centroidW0;
      d3_geo_centroidX0 += (x2 - d3_geo_centroidX0) / d3_geo_centroidW0;
      d3_geo_centroidY0 += (y2 - d3_geo_centroidY0) / d3_geo_centroidW0;
      d3_geo_centroidZ0 += (z2 - d3_geo_centroidZ0) / d3_geo_centroidW0;
    }
    function d3_geo_centroidLineStart() {
      var x0, y0, z0;
      d3_geo_centroid.point = function(λ, φ) {
        λ *= d3_radians;
        var cosφ = Math.cos(φ *= d3_radians);
        x0 = cosφ * Math.cos(λ);
        y0 = cosφ * Math.sin(λ);
        z0 = Math.sin(φ);
        d3_geo_centroid.point = nextPoint;
        d3_geo_centroidPointXYZ(x0, y0, z0);
      };
      function nextPoint(λ, φ) {
        λ *= d3_radians;
        var cosφ = Math.cos(φ *= d3_radians), x2 = cosφ * Math.cos(λ), y2 = cosφ * Math.sin(λ), z2 = Math.sin(φ), w2 = Math.atan2(Math.sqrt((w2 = y0 * z2 - z0 * y2) * w2 + (w2 = z0 * x2 - x0 * z2) * w2 + (w2 = x0 * y2 - y0 * x2) * w2), x0 * x2 + y0 * y2 + z0 * z2);
        d3_geo_centroidW1 += w2;
        d3_geo_centroidX1 += w2 * (x0 + (x0 = x2));
        d3_geo_centroidY1 += w2 * (y0 + (y0 = y2));
        d3_geo_centroidZ1 += w2 * (z0 + (z0 = z2));
        d3_geo_centroidPointXYZ(x0, y0, z0);
      }
    }
    function d3_geo_centroidLineEnd() {
      d3_geo_centroid.point = d3_geo_centroidPoint;
    }
    function d3_geo_centroidRingStart() {
      var λ00, φ00, x0, y0, z0;
      d3_geo_centroid.point = function(λ, φ) {
        λ00 = λ, φ00 = φ;
        d3_geo_centroid.point = nextPoint;
        λ *= d3_radians;
        var cosφ = Math.cos(φ *= d3_radians);
        x0 = cosφ * Math.cos(λ);
        y0 = cosφ * Math.sin(λ);
        z0 = Math.sin(φ);
        d3_geo_centroidPointXYZ(x0, y0, z0);
      };
      d3_geo_centroid.lineEnd = function() {
        nextPoint(λ00, φ00);
        d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
        d3_geo_centroid.point = d3_geo_centroidPoint;
      };
      function nextPoint(λ, φ) {
        λ *= d3_radians;
        var cosφ = Math.cos(φ *= d3_radians), x2 = cosφ * Math.cos(λ), y2 = cosφ * Math.sin(λ), z2 = Math.sin(φ), cx = y0 * z2 - z0 * y2, cy = z0 * x2 - x0 * z2, cz = x0 * y2 - y0 * x2, m2 = Math.sqrt(cx * cx + cy * cy + cz * cz), u2 = x0 * x2 + y0 * y2 + z0 * z2, v2 = m2 && -d3_acos(u2) / m2, w2 = Math.atan2(m2, u2);
        d3_geo_centroidX2 += v2 * cx;
        d3_geo_centroidY2 += v2 * cy;
        d3_geo_centroidZ2 += v2 * cz;
        d3_geo_centroidW1 += w2;
        d3_geo_centroidX1 += w2 * (x0 + (x0 = x2));
        d3_geo_centroidY1 += w2 * (y0 + (y0 = y2));
        d3_geo_centroidZ1 += w2 * (z0 + (z0 = z2));
        d3_geo_centroidPointXYZ(x0, y0, z0);
      }
    }
    function d3_geo_compose(a, b) {
      function compose2(x2, y2) {
        return x2 = a(x2, y2), b(x2[0], x2[1]);
      }
      if (a.invert && b.invert)
        compose2.invert = function(x2, y2) {
          return x2 = b.invert(x2, y2), x2 && a.invert(x2[0], x2[1]);
        };
      return compose2;
    }
    function d3_true() {
      return true;
    }
    function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
      var subject = [], clip = [];
      segments.forEach(function(segment) {
        if ((n3 = segment.length - 1) <= 0)
          return;
        var n3, p0 = segment[0], p1 = segment[n3];
        if (d3_geo_sphericalEqual(p0, p1)) {
          listener.lineStart();
          for (var i2 = 0; i2 < n3; ++i2)
            listener.point((p0 = segment[i2])[0], p0[1]);
          listener.lineEnd();
          return;
        }
        var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
        a.o = b;
        subject.push(a);
        clip.push(b);
        a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
        b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
        a.o = b;
        subject.push(a);
        clip.push(b);
      });
      clip.sort(compare);
      d3_geo_clipPolygonLinkCircular(subject);
      d3_geo_clipPolygonLinkCircular(clip);
      if (!subject.length)
        return;
      for (var i = 0, entry = clipStartInside, n2 = clip.length; i < n2; ++i) {
        clip[i].e = entry = !entry;
      }
      var start = subject[0], points, point;
      while (1) {
        var current2 = start, isSubject = true;
        while (current2.v)
          if ((current2 = current2.n) === start)
            return;
        points = current2.z;
        listener.lineStart();
        do {
          current2.v = current2.o.v = true;
          if (current2.e) {
            if (isSubject) {
              for (var i = 0, n2 = points.length; i < n2; ++i)
                listener.point((point = points[i])[0], point[1]);
            } else {
              interpolate(current2.x, current2.n.x, 1, listener);
            }
            current2 = current2.n;
          } else {
            if (isSubject) {
              points = current2.p.z;
              for (var i = points.length - 1; i >= 0; --i)
                listener.point((point = points[i])[0], point[1]);
            } else {
              interpolate(current2.x, current2.p.x, -1, listener);
            }
            current2 = current2.p;
          }
          current2 = current2.o;
          points = current2.z;
          isSubject = !isSubject;
        } while (!current2.v);
        listener.lineEnd();
      }
    }
    function d3_geo_clipPolygonLinkCircular(array) {
      if (!(n2 = array.length))
        return;
      var n2, i = 0, a = array[0], b;
      while (++i < n2) {
        a.n = b = array[i];
        b.p = a;
        a = b;
      }
      a.n = b = array[0];
      b.p = a;
    }
    function d3_geo_clipPolygonIntersection(point, points, other, entry) {
      this.x = point;
      this.z = points;
      this.o = other;
      this.e = entry;
      this.v = false;
      this.n = this.p = null;
    }
    function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
      return function(rotate, listener) {
        var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
        var clip = {
          point,
          lineStart,
          lineEnd,
          polygonStart: function() {
            clip.point = pointRing;
            clip.lineStart = ringStart;
            clip.lineEnd = ringEnd;
            segments = [];
            polygon = [];
          },
          polygonEnd: function() {
            clip.point = point;
            clip.lineStart = lineStart;
            clip.lineEnd = lineEnd;
            segments = d32.merge(segments);
            var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
            if (segments.length) {
              if (!polygonStarted)
                listener.polygonStart(), polygonStarted = true;
              d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
            } else if (clipStartInside) {
              if (!polygonStarted)
                listener.polygonStart(), polygonStarted = true;
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
            }
            if (polygonStarted)
              listener.polygonEnd(), polygonStarted = false;
            segments = polygon = null;
          },
          sphere: function() {
            listener.polygonStart();
            listener.lineStart();
            interpolate(null, null, 1, listener);
            listener.lineEnd();
            listener.polygonEnd();
          }
        };
        function point(λ, φ) {
          var point2 = rotate(λ, φ);
          if (pointVisible(λ = point2[0], φ = point2[1]))
            listener.point(λ, φ);
        }
        function pointLine(λ, φ) {
          var point2 = rotate(λ, φ);
          line.point(point2[0], point2[1]);
        }
        function lineStart() {
          clip.point = pointLine;
          line.lineStart();
        }
        function lineEnd() {
          clip.point = point;
          line.lineEnd();
        }
        var segments;
        var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
        function pointRing(λ, φ) {
          ring.push([λ, φ]);
          var point2 = rotate(λ, φ);
          ringListener.point(point2[0], point2[1]);
        }
        function ringStart() {
          ringListener.lineStart();
          ring = [];
        }
        function ringEnd() {
          pointRing(ring[0][0], ring[0][1]);
          ringListener.lineEnd();
          var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n2 = ringSegments.length;
          ring.pop();
          polygon.push(ring);
          ring = null;
          if (!n2)
            return;
          if (clean & 1) {
            segment = ringSegments[0];
            var n2 = segment.length - 1, i = -1, point2;
            if (n2 > 0) {
              if (!polygonStarted)
                listener.polygonStart(), polygonStarted = true;
              listener.lineStart();
              while (++i < n2)
                listener.point((point2 = segment[i])[0], point2[1]);
              listener.lineEnd();
            }
            return;
          }
          if (n2 > 1 && clean & 2)
            ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
          segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
        }
        return clip;
      };
    }
    function d3_geo_clipSegmentLength1(segment) {
      return segment.length > 1;
    }
    function d3_geo_clipBufferListener() {
      var lines = [], line;
      return {
        lineStart: function() {
          lines.push(line = []);
        },
        point: function(λ, φ) {
          line.push([λ, φ]);
        },
        lineEnd: d3_noop,
        buffer: function() {
          var buffer = lines;
          lines = [];
          line = null;
          return buffer;
        },
        rejoin: function() {
          if (lines.length > 1)
            lines.push(lines.pop().concat(lines.shift()));
        }
      };
    }
    function d3_geo_clipSort(a, b) {
      return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
    }
    var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [-π, -π / 2]);
    function d3_geo_clipAntimeridianLine(listener) {
      var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
      return {
        lineStart: function() {
          listener.lineStart();
          clean = 1;
        },
        point: function(λ1, φ1) {
          var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
          if (abs(dλ - π) < ε) {
            listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
            listener.point(sλ0, φ0);
            listener.lineEnd();
            listener.lineStart();
            listener.point(sλ1, φ0);
            listener.point(λ1, φ0);
            clean = 0;
          } else if (sλ0 !== sλ1 && dλ >= π) {
            if (abs(λ0 - sλ0) < ε)
              λ0 -= sλ0 * ε;
            if (abs(λ1 - sλ1) < ε)
              λ1 -= sλ1 * ε;
            φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
            listener.point(sλ0, φ0);
            listener.lineEnd();
            listener.lineStart();
            listener.point(sλ1, φ0);
            clean = 0;
          }
          listener.point(λ0 = λ1, φ0 = φ1);
          sλ0 = sλ1;
        },
        lineEnd: function() {
          listener.lineEnd();
          λ0 = φ0 = NaN;
        },
        clean: function() {
          return 2 - clean;
        }
      };
    }
    function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
      var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
      return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
    }
    function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
      var φ;
      if (from == null) {
        φ = direction * halfπ;
        listener.point(-π, φ);
        listener.point(0, φ);
        listener.point(π, φ);
        listener.point(π, 0);
        listener.point(π, -φ);
        listener.point(0, -φ);
        listener.point(-π, -φ);
        listener.point(-π, 0);
        listener.point(-π, φ);
      } else if (abs(from[0] - to[0]) > ε) {
        var s = from[0] < to[0] ? π : -π;
        φ = direction * s / 2;
        listener.point(-s, φ);
        listener.point(0, φ);
        listener.point(s, φ);
      } else {
        listener.point(to[0], to[1]);
      }
    }
    function d3_geo_pointInPolygon(point, polygon) {
      var meridian = point[0], parallel = point[1], meridianNormal = [Math.sin(meridian), -Math.cos(meridian), 0], polarAngle = 0, winding = 0;
      d3_geo_areaRingSum.reset();
      for (var i = 0, n2 = polygon.length; i < n2; ++i) {
        var ring = polygon[i], m2 = ring.length;
        if (!m2)
          continue;
        var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
        while (true) {
          if (j === m2)
            j = 0;
          point = ring[j];
          var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k2 = sinφ0 * sinφ;
          d3_geo_areaRingSum.add(Math.atan2(k2 * sdλ * Math.sin(adλ), cosφ0 * cosφ + k2 * Math.cos(adλ)));
          polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
          if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
            var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
            d3_geo_cartesianNormalize(arc);
            var intersection = d3_geo_cartesianCross(meridianNormal, arc);
            d3_geo_cartesianNormalize(intersection);
            var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
            if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
              winding += antimeridian ^ dλ >= 0 ? 1 : -1;
            }
          }
          if (!j++)
            break;
          λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
        }
      }
      return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < 0) ^ winding & 1;
    }
    function d3_geo_clipCircle(radius) {
      var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
      return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-π, radius - π]);
      function visible(λ, φ) {
        return Math.cos(λ) * Math.cos(φ) > cr;
      }
      function clipLine(listener) {
        var point0, c0, v0, v00, clean;
        return {
          lineStart: function() {
            v00 = v0 = false;
            clean = 1;
          },
          point: function(λ, φ) {
            var point1 = [λ, φ], point2, v2 = visible(λ, φ), c = smallRadius ? v2 ? 0 : code(λ, φ) : v2 ? code(λ + (λ < 0 ? π : -π), φ) : 0;
            if (!point0 && (v00 = v0 = v2))
              listener.lineStart();
            if (v2 !== v0) {
              point2 = intersect(point0, point1);
              if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
                point1[0] += ε;
                point1[1] += ε;
                v2 = visible(point1[0], point1[1]);
              }
            }
            if (v2 !== v0) {
              clean = 0;
              if (v2) {
                listener.lineStart();
                point2 = intersect(point1, point0);
                listener.point(point2[0], point2[1]);
              } else {
                point2 = intersect(point0, point1);
                listener.point(point2[0], point2[1]);
                listener.lineEnd();
              }
              point0 = point2;
            } else if (notHemisphere && point0 && smallRadius ^ v2) {
              var t2;
              if (!(c & c0) && (t2 = intersect(point1, point0, true))) {
                clean = 0;
                if (smallRadius) {
                  listener.lineStart();
                  listener.point(t2[0][0], t2[0][1]);
                  listener.point(t2[1][0], t2[1][1]);
                  listener.lineEnd();
                } else {
                  listener.point(t2[1][0], t2[1][1]);
                  listener.lineEnd();
                  listener.lineStart();
                  listener.point(t2[0][0], t2[0][1]);
                }
              }
            }
            if (v2 && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
              listener.point(point1[0], point1[1]);
            }
            point0 = point1, v0 = v2, c0 = c;
          },
          lineEnd: function() {
            if (v0)
              listener.lineEnd();
            point0 = null;
          },
          clean: function() {
            return clean | (v00 && v0) << 1;
          }
        };
      }
      function intersect(a, b, two) {
        var pa2 = d3_geo_cartesian(a), pb2 = d3_geo_cartesian(b);
        var n1 = [1, 0, 0], n2 = d3_geo_cartesianCross(pa2, pb2), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
        if (!determinant)
          return !two && a;
        var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A2 = d3_geo_cartesianScale(n1, c1), B2 = d3_geo_cartesianScale(n2, c2);
        d3_geo_cartesianAdd(A2, B2);
        var u2 = n1xn2, w2 = d3_geo_cartesianDot(A2, u2), uu = d3_geo_cartesianDot(u2, u2), t2 = w2 * w2 - uu * (d3_geo_cartesianDot(A2, A2) - 1);
        if (t2 < 0)
          return;
        var t3 = Math.sqrt(t2), q2 = d3_geo_cartesianScale(u2, (-w2 - t3) / uu);
        d3_geo_cartesianAdd(q2, A2);
        q2 = d3_geo_spherical(q2);
        if (!two)
          return q2;
        var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z2;
        if (λ1 < λ0)
          z2 = λ0, λ0 = λ1, λ1 = z2;
        var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
        if (!polar && φ1 < φ0)
          z2 = φ0, φ0 = φ1, φ1 = z2;
        if (meridian ? polar ? φ0 + φ1 > 0 ^ q2[1] < (abs(q2[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q2[1] && q2[1] <= φ1 : δλ > π ^ (λ0 <= q2[0] && q2[0] <= λ1)) {
          var q1 = d3_geo_cartesianScale(u2, (-w2 + t3) / uu);
          d3_geo_cartesianAdd(q1, A2);
          return [q2, d3_geo_spherical(q1)];
        }
      }
      function code(λ, φ) {
        var r2 = smallRadius ? radius : π - radius, code2 = 0;
        if (λ < -r2)
          code2 |= 1;
        else if (λ > r2)
          code2 |= 2;
        if (φ < -r2)
          code2 |= 4;
        else if (φ > r2)
          code2 |= 8;
        return code2;
      }
    }
    function d3_geom_clipLine(x0, y0, x1, y1) {
      return function(line) {
        var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r2;
        r2 = x0 - ax;
        if (!dx && r2 > 0)
          return;
        r2 /= dx;
        if (dx < 0) {
          if (r2 < t0)
            return;
          if (r2 < t1)
            t1 = r2;
        } else if (dx > 0) {
          if (r2 > t1)
            return;
          if (r2 > t0)
            t0 = r2;
        }
        r2 = x1 - ax;
        if (!dx && r2 < 0)
          return;
        r2 /= dx;
        if (dx < 0) {
          if (r2 > t1)
            return;
          if (r2 > t0)
            t0 = r2;
        } else if (dx > 0) {
          if (r2 < t0)
            return;
          if (r2 < t1)
            t1 = r2;
        }
        r2 = y0 - ay;
        if (!dy && r2 > 0)
          return;
        r2 /= dy;
        if (dy < 0) {
          if (r2 < t0)
            return;
          if (r2 < t1)
            t1 = r2;
        } else if (dy > 0) {
          if (r2 > t1)
            return;
          if (r2 > t0)
            t0 = r2;
        }
        r2 = y1 - ay;
        if (!dy && r2 < 0)
          return;
        r2 /= dy;
        if (dy < 0) {
          if (r2 > t1)
            return;
          if (r2 > t0)
            t0 = r2;
        } else if (dy > 0) {
          if (r2 < t0)
            return;
          if (r2 < t1)
            t1 = r2;
        }
        if (t0 > 0)
          line.a = {
            x: ax + t0 * dx,
            y: ay + t0 * dy
          };
        if (t1 < 1)
          line.b = {
            x: ax + t1 * dx,
            y: ay + t1 * dy
          };
        return line;
      };
    }
    var d3_geo_clipExtentMAX = 1e9;
    d32.geo.clipExtent = function() {
      var x0, y0, x1, y1, stream, clip, clipExtent = {
        stream: function(output) {
          if (stream)
            stream.valid = false;
          stream = clip(output);
          stream.valid = true;
          return stream;
        },
        extent: function(_) {
          if (!arguments.length)
            return [[x0, y0], [x1, y1]];
          clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
          if (stream)
            stream.valid = false, stream = null;
          return clipExtent;
        }
      };
      return clipExtent.extent([[0, 0], [960, 500]]);
    };
    function d3_geo_clipExtent(x0, y0, x1, y1) {
      return function(listener) {
        var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
        var clip = {
          point,
          lineStart,
          lineEnd,
          polygonStart: function() {
            listener = bufferListener;
            segments = [];
            polygon = [];
            clean = true;
          },
          polygonEnd: function() {
            listener = listener_;
            segments = d32.merge(segments);
            var clipStartInside = insidePolygon([x0, y1]), inside = clean && clipStartInside, visible = segments.length;
            if (inside || visible) {
              listener.polygonStart();
              if (inside) {
                listener.lineStart();
                interpolate(null, null, 1, listener);
                listener.lineEnd();
              }
              if (visible) {
                d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
              }
              listener.polygonEnd();
            }
            segments = polygon = ring = null;
          }
        };
        function insidePolygon(p2) {
          var wn = 0, n2 = polygon.length, y2 = p2[1];
          for (var i = 0; i < n2; ++i) {
            for (var j = 1, v2 = polygon[i], m2 = v2.length, a = v2[0], b; j < m2; ++j) {
              b = v2[j];
              if (a[1] <= y2) {
                if (b[1] > y2 && d3_cross2d(a, b, p2) > 0)
                  ++wn;
              } else {
                if (b[1] <= y2 && d3_cross2d(a, b, p2) < 0)
                  --wn;
              }
              a = b;
            }
          }
          return wn !== 0;
        }
        function interpolate(from, to, direction, listener2) {
          var a = 0, a1 = 0;
          if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
            do {
              listener2.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
            } while ((a = (a + direction + 4) % 4) !== a1);
          } else {
            listener2.point(to[0], to[1]);
          }
        }
        function pointVisible(x2, y2) {
          return x0 <= x2 && x2 <= x1 && y0 <= y2 && y2 <= y1;
        }
        function point(x2, y2) {
          if (pointVisible(x2, y2))
            listener.point(x2, y2);
        }
        var x__, y__, v__, x_, y_, v_, first, clean;
        function lineStart() {
          clip.point = linePoint;
          if (polygon)
            polygon.push(ring = []);
          first = true;
          v_ = false;
          x_ = y_ = NaN;
        }
        function lineEnd() {
          if (segments) {
            linePoint(x__, y__);
            if (v__ && v_)
              bufferListener.rejoin();
            segments.push(bufferListener.buffer());
          }
          clip.point = point;
          if (v_)
            listener.lineEnd();
        }
        function linePoint(x2, y2) {
          x2 = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x2));
          y2 = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y2));
          var v2 = pointVisible(x2, y2);
          if (polygon)
            ring.push([x2, y2]);
          if (first) {
            x__ = x2, y__ = y2, v__ = v2;
            first = false;
            if (v2) {
              listener.lineStart();
              listener.point(x2, y2);
            }
          } else {
            if (v2 && v_)
              listener.point(x2, y2);
            else {
              var l2 = {
                a: {
                  x: x_,
                  y: y_
                },
                b: {
                  x: x2,
                  y: y2
                }
              };
              if (clipLine(l2)) {
                if (!v_) {
                  listener.lineStart();
                  listener.point(l2.a.x, l2.a.y);
                }
                listener.point(l2.b.x, l2.b.y);
                if (!v2)
                  listener.lineEnd();
                clean = false;
              } else if (v2) {
                listener.lineStart();
                listener.point(x2, y2);
                clean = false;
              }
            }
          }
          x_ = x2, y_ = y2, v_ = v2;
        }
        return clip;
      };
      function corner(p2, direction) {
        return abs(p2[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p2[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p2[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
      }
      function compare(a, b) {
        return comparePoints(a.x, b.x);
      }
      function comparePoints(a, b) {
        var ca2 = corner(a, 1), cb2 = corner(b, 1);
        return ca2 !== cb2 ? ca2 - cb2 : ca2 === 0 ? b[1] - a[1] : ca2 === 1 ? a[0] - b[0] : ca2 === 2 ? a[1] - b[1] : b[0] - a[0];
      }
    }
    function d3_geo_conic(projectAt) {
      var φ0 = 0, φ1 = π / 3, m2 = d3_geo_projectionMutator(projectAt), p2 = m2(φ0, φ1);
      p2.parallels = function(_) {
        if (!arguments.length)
          return [φ0 / π * 180, φ1 / π * 180];
        return m2(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
      };
      return p2;
    }
    function d3_geo_conicEqualArea(φ0, φ1) {
      var sinφ0 = Math.sin(φ0), n2 = (sinφ0 + Math.sin(φ1)) / 2, C2 = 1 + sinφ0 * (2 * n2 - sinφ0), ρ0 = Math.sqrt(C2) / n2;
      function forward(λ, φ) {
        var ρ3 = Math.sqrt(C2 - 2 * n2 * Math.sin(φ)) / n2;
        return [ρ3 * Math.sin(λ *= n2), ρ0 - ρ3 * Math.cos(λ)];
      }
      forward.invert = function(x2, y2) {
        var ρ0_y = ρ0 - y2;
        return [Math.atan2(x2, ρ0_y) / n2, d3_asin((C2 - (x2 * x2 + ρ0_y * ρ0_y) * n2 * n2) / (2 * n2))];
      };
      return forward;
    }
    (d32.geo.conicEqualArea = function() {
      return d3_geo_conic(d3_geo_conicEqualArea);
    }).raw = d3_geo_conicEqualArea;
    d32.geo.albers = function() {
      return d32.geo.conicEqualArea().rotate([96, 0]).center([-0.6, 38.7]).parallels([29.5, 45.5]).scale(1070);
    };
    d32.geo.albersUsa = function() {
      var lower48 = d32.geo.albers();
      var alaska = d32.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]);
      var hawaii = d32.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]);
      var point, pointStream = {
        point: function(x2, y2) {
          point = [x2, y2];
        }
      }, lower48Point, alaskaPoint, hawaiiPoint;
      function albersUsa(coordinates) {
        var x2 = coordinates[0], y2 = coordinates[1];
        point = null;
        (lower48Point(x2, y2), point) || (alaskaPoint(x2, y2), point) || hawaiiPoint(x2, y2);
        return point;
      }
      albersUsa.invert = function(coordinates) {
        var k2 = lower48.scale(), t2 = lower48.translate(), x2 = (coordinates[0] - t2[0]) / k2, y2 = (coordinates[1] - t2[1]) / k2;
        return (y2 >= 0.12 && y2 < 0.234 && x2 >= -0.425 && x2 < -0.214 ? alaska : y2 >= 0.166 && y2 < 0.234 && x2 >= -0.214 && x2 < -0.115 ? hawaii : lower48).invert(coordinates);
      };
      albersUsa.stream = function(stream) {
        var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
        return {
          point: function(x2, y2) {
            lower48Stream.point(x2, y2);
            alaskaStream.point(x2, y2);
            hawaiiStream.point(x2, y2);
          },
          sphere: function() {
            lower48Stream.sphere();
            alaskaStream.sphere();
            hawaiiStream.sphere();
          },
          lineStart: function() {
            lower48Stream.lineStart();
            alaskaStream.lineStart();
            hawaiiStream.lineStart();
          },
          lineEnd: function() {
            lower48Stream.lineEnd();
            alaskaStream.lineEnd();
            hawaiiStream.lineEnd();
          },
          polygonStart: function() {
            lower48Stream.polygonStart();
            alaskaStream.polygonStart();
            hawaiiStream.polygonStart();
          },
          polygonEnd: function() {
            lower48Stream.polygonEnd();
            alaskaStream.polygonEnd();
            hawaiiStream.polygonEnd();
          }
        };
      };
      albersUsa.precision = function(_) {
        if (!arguments.length)
          return lower48.precision();
        lower48.precision(_);
        alaska.precision(_);
        hawaii.precision(_);
        return albersUsa;
      };
      albersUsa.scale = function(_) {
        if (!arguments.length)
          return lower48.scale();
        lower48.scale(_);
        alaska.scale(_ * 0.35);
        hawaii.scale(_);
        return albersUsa.translate(lower48.translate());
      };
      albersUsa.translate = function(_) {
        if (!arguments.length)
          return lower48.translate();
        var k2 = lower48.scale(), x2 = +_[0], y2 = +_[1];
        lower48Point = lower48.translate(_).clipExtent([[x2 - 0.455 * k2, y2 - 0.238 * k2], [x2 + 0.455 * k2, y2 + 0.238 * k2]]).stream(pointStream).point;
        alaskaPoint = alaska.translate([x2 - 0.307 * k2, y2 + 0.201 * k2]).clipExtent([[x2 - 0.425 * k2 + ε, y2 + 0.12 * k2 + ε], [x2 - 0.214 * k2 - ε, y2 + 0.234 * k2 - ε]]).stream(pointStream).point;
        hawaiiPoint = hawaii.translate([x2 - 0.205 * k2, y2 + 0.212 * k2]).clipExtent([[x2 - 0.214 * k2 + ε, y2 + 0.166 * k2 + ε], [x2 - 0.115 * k2 - ε, y2 + 0.234 * k2 - ε]]).stream(pointStream).point;
        return albersUsa;
      };
      return albersUsa.scale(1070);
    };
    var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
      point: d3_noop,
      lineStart: d3_noop,
      lineEnd: d3_noop,
      polygonStart: function() {
        d3_geo_pathAreaPolygon = 0;
        d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
      },
      polygonEnd: function() {
        d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
        d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
      }
    };
    function d3_geo_pathAreaRingStart() {
      var x00, y00, x0, y0;
      d3_geo_pathArea.point = function(x2, y2) {
        d3_geo_pathArea.point = nextPoint;
        x00 = x0 = x2, y00 = y0 = y2;
      };
      function nextPoint(x2, y2) {
        d3_geo_pathAreaPolygon += y0 * x2 - x0 * y2;
        x0 = x2, y0 = y2;
      }
      d3_geo_pathArea.lineEnd = function() {
        nextPoint(x00, y00);
      };
    }
    var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
    var d3_geo_pathBounds = {
      point: d3_geo_pathBoundsPoint,
      lineStart: d3_noop,
      lineEnd: d3_noop,
      polygonStart: d3_noop,
      polygonEnd: d3_noop
    };
    function d3_geo_pathBoundsPoint(x2, y2) {
      if (x2 < d3_geo_pathBoundsX0)
        d3_geo_pathBoundsX0 = x2;
      if (x2 > d3_geo_pathBoundsX1)
        d3_geo_pathBoundsX1 = x2;
      if (y2 < d3_geo_pathBoundsY0)
        d3_geo_pathBoundsY0 = y2;
      if (y2 > d3_geo_pathBoundsY1)
        d3_geo_pathBoundsY1 = y2;
    }
    function d3_geo_pathBuffer() {
      var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
      var stream = {
        point,
        lineStart: function() {
          stream.point = pointLineStart;
        },
        lineEnd,
        polygonStart: function() {
          stream.lineEnd = lineEndPolygon;
        },
        polygonEnd: function() {
          stream.lineEnd = lineEnd;
          stream.point = point;
        },
        pointRadius: function(_) {
          pointCircle = d3_geo_pathBufferCircle(_);
          return stream;
        },
        result: function() {
          if (buffer.length) {
            var result = buffer.join("");
            buffer = [];
            return result;
          }
        }
      };
      function point(x2, y2) {
        buffer.push("M", x2, ",", y2, pointCircle);
      }
      function pointLineStart(x2, y2) {
        buffer.push("M", x2, ",", y2);
        stream.point = pointLine;
      }
      function pointLine(x2, y2) {
        buffer.push("L", x2, ",", y2);
      }
      function lineEnd() {
        stream.point = point;
      }
      function lineEndPolygon() {
        buffer.push("Z");
      }
      return stream;
    }
    function d3_geo_pathBufferCircle(radius) {
      return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
    }
    var d3_geo_pathCentroid = {
      point: d3_geo_pathCentroidPoint,
      lineStart: d3_geo_pathCentroidLineStart,
      lineEnd: d3_geo_pathCentroidLineEnd,
      polygonStart: function() {
        d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
      },
      polygonEnd: function() {
        d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
        d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
        d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
      }
    };
    function d3_geo_pathCentroidPoint(x2, y2) {
      d3_geo_centroidX0 += x2;
      d3_geo_centroidY0 += y2;
      ++d3_geo_centroidZ0;
    }
    function d3_geo_pathCentroidLineStart() {
      var x0, y0;
      d3_geo_pathCentroid.point = function(x2, y2) {
        d3_geo_pathCentroid.point = nextPoint;
        d3_geo_pathCentroidPoint(x0 = x2, y0 = y2);
      };
      function nextPoint(x2, y2) {
        var dx = x2 - x0, dy = y2 - y0, z2 = Math.sqrt(dx * dx + dy * dy);
        d3_geo_centroidX1 += z2 * (x0 + x2) / 2;
        d3_geo_centroidY1 += z2 * (y0 + y2) / 2;
        d3_geo_centroidZ1 += z2;
        d3_geo_pathCentroidPoint(x0 = x2, y0 = y2);
      }
    }
    function d3_geo_pathCentroidLineEnd() {
      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
    }
    function d3_geo_pathCentroidRingStart() {
      var x00, y00, x0, y0;
      d3_geo_pathCentroid.point = function(x2, y2) {
        d3_geo_pathCentroid.point = nextPoint;
        d3_geo_pathCentroidPoint(x00 = x0 = x2, y00 = y0 = y2);
      };
      function nextPoint(x2, y2) {
        var dx = x2 - x0, dy = y2 - y0, z2 = Math.sqrt(dx * dx + dy * dy);
        d3_geo_centroidX1 += z2 * (x0 + x2) / 2;
        d3_geo_centroidY1 += z2 * (y0 + y2) / 2;
        d3_geo_centroidZ1 += z2;
        z2 = y0 * x2 - x0 * y2;
        d3_geo_centroidX2 += z2 * (x0 + x2);
        d3_geo_centroidY2 += z2 * (y0 + y2);
        d3_geo_centroidZ2 += z2 * 3;
        d3_geo_pathCentroidPoint(x0 = x2, y0 = y2);
      }
      d3_geo_pathCentroid.lineEnd = function() {
        nextPoint(x00, y00);
      };
    }
    function d3_geo_pathContext(context) {
      var pointRadius = 4.5;
      var stream = {
        point,
        lineStart: function() {
          stream.point = pointLineStart;
        },
        lineEnd,
        polygonStart: function() {
          stream.lineEnd = lineEndPolygon;
        },
        polygonEnd: function() {
          stream.lineEnd = lineEnd;
          stream.point = point;
        },
        pointRadius: function(_) {
          pointRadius = _;
          return stream;
        },
        result: d3_noop
      };
      function point(x2, y2) {
        context.moveTo(x2 + pointRadius, y2);
        context.arc(x2, y2, pointRadius, 0, τ);
      }
      function pointLineStart(x2, y2) {
        context.moveTo(x2, y2);
        stream.point = pointLine;
      }
      function pointLine(x2, y2) {
        context.lineTo(x2, y2);
      }
      function lineEnd() {
        stream.point = point;
      }
      function lineEndPolygon() {
        context.closePath();
      }
      return stream;
    }
    function d3_geo_resample(project) {
      var δ2 = 0.5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
      function resample(stream) {
        return (maxDepth ? resampleRecursive : resampleNone)(stream);
      }
      function resampleNone(stream) {
        return d3_geo_transformPoint(stream, function(x2, y2) {
          x2 = project(x2, y2);
          stream.point(x2[0], x2[1]);
        });
      }
      function resampleRecursive(stream) {
        var λ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
        var resample2 = {
          point,
          lineStart,
          lineEnd,
          polygonStart: function() {
            stream.polygonStart();
            resample2.lineStart = ringStart;
          },
          polygonEnd: function() {
            stream.polygonEnd();
            resample2.lineStart = lineStart;
          }
        };
        function point(x2, y2) {
          x2 = project(x2, y2);
          stream.point(x2[0], x2[1]);
        }
        function lineStart() {
          x0 = NaN;
          resample2.point = linePoint;
          stream.lineStart();
        }
        function linePoint(λ, φ) {
          var c = d3_geo_cartesian([λ, φ]), p2 = project(λ, φ);
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p2[0], y0 = p2[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
          stream.point(x0, y0);
        }
        function lineEnd() {
          resample2.point = point;
          stream.lineEnd();
        }
        function ringStart() {
          lineStart();
          resample2.point = ringPoint;
          resample2.lineEnd = ringEnd;
        }
        function ringPoint(λ, φ) {
          linePoint(λ00 = λ, φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
          resample2.point = linePoint;
        }
        function ringEnd() {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
          resample2.lineEnd = lineEnd;
          lineEnd();
        }
        return resample2;
      }
      function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
        var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
        if (d2 > 4 * δ2 && depth--) {
          var a = a0 + a1, b = b0 + b1, c = c0 + c1, m2 = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m2), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p2 = project(λ2, φ2), x2 = p2[0], y2 = p2[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
          if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
            resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m2, b /= m2, c, depth, stream);
            stream.point(x2, y2);
            resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
          }
        }
      }
      resample.precision = function(_) {
        if (!arguments.length)
          return Math.sqrt(δ2);
        maxDepth = (δ2 = _ * _) > 0 && 16;
        return resample;
      };
      return resample;
    }
    d32.geo.path = function() {
      var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
      function path(object) {
        if (object) {
          if (typeof pointRadius === "function")
            contextStream.pointRadius(+pointRadius.apply(this, arguments));
          if (!cacheStream || !cacheStream.valid)
            cacheStream = projectStream(contextStream);
          d32.geo.stream(object, cacheStream);
        }
        return contextStream.result();
      }
      path.area = function(object) {
        d3_geo_pathAreaSum = 0;
        d32.geo.stream(object, projectStream(d3_geo_pathArea));
        return d3_geo_pathAreaSum;
      };
      path.centroid = function(object) {
        d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
        d32.geo.stream(object, projectStream(d3_geo_pathCentroid));
        return d3_geo_centroidZ2 ? [d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2] : d3_geo_centroidZ1 ? [d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1] : d3_geo_centroidZ0 ? [d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0] : [NaN, NaN];
      };
      path.bounds = function(object) {
        d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
        d32.geo.stream(object, projectStream(d3_geo_pathBounds));
        return [[d3_geo_pathBoundsX0, d3_geo_pathBoundsY0], [d3_geo_pathBoundsX1, d3_geo_pathBoundsY1]];
      };
      path.projection = function(_) {
        if (!arguments.length)
          return projection;
        projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
        return reset();
      };
      path.context = function(_) {
        if (!arguments.length)
          return context;
        contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
        if (typeof pointRadius !== "function")
          contextStream.pointRadius(pointRadius);
        return reset();
      };
      path.pointRadius = function(_) {
        if (!arguments.length)
          return pointRadius;
        pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
        return path;
      };
      function reset() {
        cacheStream = null;
        return path;
      }
      return path.projection(d32.geo.albersUsa()).context(null);
    };
    function d3_geo_pathProjectStream(project) {
      var resample = d3_geo_resample(function(x2, y2) {
        return project([x2 * d3_degrees, y2 * d3_degrees]);
      });
      return function(stream) {
        return d3_geo_projectionRadians(resample(stream));
      };
    }
    d32.geo.transform = function(methods) {
      return {
        stream: function(stream) {
          var transform = new d3_geo_transform(stream);
          for (var k2 in methods)
            transform[k2] = methods[k2];
          return transform;
        }
      };
    };
    function d3_geo_transform(stream) {
      this.stream = stream;
    }
    d3_geo_transform.prototype = {
      point: function(x2, y2) {
        this.stream.point(x2, y2);
      },
      sphere: function() {
        this.stream.sphere();
      },
      lineStart: function() {
        this.stream.lineStart();
      },
      lineEnd: function() {
        this.stream.lineEnd();
      },
      polygonStart: function() {
        this.stream.polygonStart();
      },
      polygonEnd: function() {
        this.stream.polygonEnd();
      }
    };
    function d3_geo_transformPoint(stream, point) {
      return {
        point,
        sphere: function() {
          stream.sphere();
        },
        lineStart: function() {
          stream.lineStart();
        },
        lineEnd: function() {
          stream.lineEnd();
        },
        polygonStart: function() {
          stream.polygonStart();
        },
        polygonEnd: function() {
          stream.polygonEnd();
        }
      };
    }
    d32.geo.projection = d3_geo_projection;
    d32.geo.projectionMutator = d3_geo_projectionMutator;
    function d3_geo_projection(project) {
      return d3_geo_projectionMutator(function() {
        return project;
      })();
    }
    function d3_geo_projectionMutator(projectAt) {
      var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x3, y3) {
        x3 = project(x3, y3);
        return [x3[0] * k2 + δx, δy - x3[1] * k2];
      }), k2 = 150, x2 = 480, y2 = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
      function projection(point) {
        point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
        return [point[0] * k2 + δx, δy - point[1] * k2];
      }
      function invert(point) {
        point = projectRotate.invert((point[0] - δx) / k2, (δy - point[1]) / k2);
        return point && [point[0] * d3_degrees, point[1] * d3_degrees];
      }
      projection.stream = function(output) {
        if (stream)
          stream.valid = false;
        stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
        stream.valid = true;
        return stream;
      };
      projection.clipAngle = function(_) {
        if (!arguments.length)
          return clipAngle;
        preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
        return invalidate();
      };
      projection.clipExtent = function(_) {
        if (!arguments.length)
          return clipExtent;
        clipExtent = _;
        postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
        return invalidate();
      };
      projection.scale = function(_) {
        if (!arguments.length)
          return k2;
        k2 = +_;
        return reset();
      };
      projection.translate = function(_) {
        if (!arguments.length)
          return [x2, y2];
        x2 = +_[0];
        y2 = +_[1];
        return reset();
      };
      projection.center = function(_) {
        if (!arguments.length)
          return [λ * d3_degrees, φ * d3_degrees];
        λ = _[0] % 360 * d3_radians;
        φ = _[1] % 360 * d3_radians;
        return reset();
      };
      projection.rotate = function(_) {
        if (!arguments.length)
          return [δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees];
        δλ = _[0] % 360 * d3_radians;
        δφ = _[1] % 360 * d3_radians;
        δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
        return reset();
      };
      d32.rebind(projection, projectResample, "precision");
      function reset() {
        projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
        var center = project(λ, φ);
        δx = x2 - center[0] * k2;
        δy = y2 + center[1] * k2;
        return invalidate();
      }
      function invalidate() {
        if (stream)
          stream.valid = false, stream = null;
        return projection;
      }
      return function() {
        project = projectAt.apply(this, arguments);
        projection.invert = project.invert && invert;
        return reset();
      };
    }
    function d3_geo_projectionRadians(stream) {
      return d3_geo_transformPoint(stream, function(x2, y2) {
        stream.point(x2 * d3_radians, y2 * d3_radians);
      });
    }
    function d3_geo_equirectangular(λ, φ) {
      return [λ, φ];
    }
    (d32.geo.equirectangular = function() {
      return d3_geo_projection(d3_geo_equirectangular);
    }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
    d32.geo.rotation = function(rotate) {
      rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
      function forward(coordinates) {
        coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
        return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
      }
      forward.invert = function(coordinates) {
        coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
        return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
      };
      return forward;
    };
    function d3_geo_identityRotation(λ, φ) {
      return [λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ];
    }
    d3_geo_identityRotation.invert = d3_geo_equirectangular;
    function d3_geo_rotation(δλ, δφ, δγ) {
      return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
    }
    function d3_geo_forwardRotationλ(δλ) {
      return function(λ, φ) {
        return λ += δλ, [λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ];
      };
    }
    function d3_geo_rotationλ(δλ) {
      var rotation = d3_geo_forwardRotationλ(δλ);
      rotation.invert = d3_geo_forwardRotationλ(-δλ);
      return rotation;
    }
    function d3_geo_rotationφγ(δφ, δγ) {
      var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
      function rotation(λ, φ) {
        var cosφ = Math.cos(φ), x2 = Math.cos(λ) * cosφ, y2 = Math.sin(λ) * cosφ, z2 = Math.sin(φ), k2 = z2 * cosδφ + x2 * sinδφ;
        return [Math.atan2(y2 * cosδγ - k2 * sinδγ, x2 * cosδφ - z2 * sinδφ), d3_asin(k2 * cosδγ + y2 * sinδγ)];
      }
      rotation.invert = function(λ, φ) {
        var cosφ = Math.cos(φ), x2 = Math.cos(λ) * cosφ, y2 = Math.sin(λ) * cosφ, z2 = Math.sin(φ), k2 = z2 * cosδγ - y2 * sinδγ;
        return [Math.atan2(y2 * cosδγ + z2 * sinδγ, x2 * cosδφ + k2 * sinδφ), d3_asin(k2 * cosδφ - x2 * sinδφ)];
      };
      return rotation;
    }
    d32.geo.circle = function() {
      var origin = [0, 0], angle, precision = 6, interpolate;
      function circle() {
        var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
        interpolate(null, null, 1, {
          point: function(x2, y2) {
            ring.push(x2 = rotate(x2, y2));
            x2[0] *= d3_degrees, x2[1] *= d3_degrees;
          }
        });
        return {
          type: "Polygon",
          coordinates: [ring]
        };
      }
      circle.origin = function(x2) {
        if (!arguments.length)
          return origin;
        origin = x2;
        return circle;
      };
      circle.angle = function(x2) {
        if (!arguments.length)
          return angle;
        interpolate = d3_geo_circleInterpolate((angle = +x2) * d3_radians, precision * d3_radians);
        return circle;
      };
      circle.precision = function(_) {
        if (!arguments.length)
          return precision;
        interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
        return circle;
      };
      return circle.angle(90);
    };
    function d3_geo_circleInterpolate(radius, precision) {
      var cr = Math.cos(radius), sr = Math.sin(radius);
      return function(from, to, direction, listener) {
        var step = direction * precision;
        if (from != null) {
          from = d3_geo_circleAngle(cr, from);
          to = d3_geo_circleAngle(cr, to);
          if (direction > 0 ? from < to : from > to)
            from += direction * τ;
        } else {
          from = radius + direction * τ;
          to = radius - 0.5 * step;
        }
        for (var point, t2 = from; direction > 0 ? t2 > to : t2 < to; t2 -= step) {
          listener.point((point = d3_geo_spherical([cr, -sr * Math.cos(t2), -sr * Math.sin(t2)]))[0], point[1]);
        }
      };
    }
    function d3_geo_circleAngle(cr, point) {
      var a = d3_geo_cartesian(point);
      a[0] -= cr;
      d3_geo_cartesianNormalize(a);
      var angle = d3_acos(-a[1]);
      return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
    }
    d32.geo.distance = function(a, b) {
      var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t2;
      return Math.atan2(Math.sqrt((t2 = cosφ1 * sinΔλ) * t2 + (t2 = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t2), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
    };
    d32.geo.graticule = function() {
      var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x2, y2, X2, Y2, precision = 2.5;
      function graticule() {
        return {
          type: "MultiLineString",
          coordinates: lines()
        };
      }
      function lines() {
        return d32.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X2).concat(d32.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y2)).concat(d32.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x3) {
          return abs(x3 % DX) > ε;
        }).map(x2)).concat(d32.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y3) {
          return abs(y3 % DY) > ε;
        }).map(y2));
      }
      graticule.lines = function() {
        return lines().map(function(coordinates) {
          return {
            type: "LineString",
            coordinates
          };
        });
      };
      graticule.outline = function() {
        return {
          type: "Polygon",
          coordinates: [X2(X0).concat(Y2(Y1).slice(1), X2(X1).reverse().slice(1), Y2(Y0).reverse().slice(1))]
        };
      };
      graticule.extent = function(_) {
        if (!arguments.length)
          return graticule.minorExtent();
        return graticule.majorExtent(_).minorExtent(_);
      };
      graticule.majorExtent = function(_) {
        if (!arguments.length)
          return [[X0, Y0], [X1, Y1]];
        X0 = +_[0][0], X1 = +_[1][0];
        Y0 = +_[0][1], Y1 = +_[1][1];
        if (X0 > X1)
          _ = X0, X0 = X1, X1 = _;
        if (Y0 > Y1)
          _ = Y0, Y0 = Y1, Y1 = _;
        return graticule.precision(precision);
      };
      graticule.minorExtent = function(_) {
        if (!arguments.length)
          return [[x0, y0], [x1, y1]];
        x0 = +_[0][0], x1 = +_[1][0];
        y0 = +_[0][1], y1 = +_[1][1];
        if (x0 > x1)
          _ = x0, x0 = x1, x1 = _;
        if (y0 > y1)
          _ = y0, y0 = y1, y1 = _;
        return graticule.precision(precision);
      };
      graticule.step = function(_) {
        if (!arguments.length)
          return graticule.minorStep();
        return graticule.majorStep(_).minorStep(_);
      };
      graticule.majorStep = function(_) {
        if (!arguments.length)
          return [DX, DY];
        DX = +_[0], DY = +_[1];
        return graticule;
      };
      graticule.minorStep = function(_) {
        if (!arguments.length)
          return [dx, dy];
        dx = +_[0], dy = +_[1];
        return graticule;
      };
      graticule.precision = function(_) {
        if (!arguments.length)
          return precision;
        precision = +_;
        x2 = d3_geo_graticuleX(y0, y1, 90);
        y2 = d3_geo_graticuleY(x0, x1, precision);
        X2 = d3_geo_graticuleX(Y0, Y1, 90);
        Y2 = d3_geo_graticuleY(X0, X1, precision);
        return graticule;
      };
      return graticule.majorExtent([[-180, -90 + ε], [180, 90 - ε]]).minorExtent([[-180, -80 - ε], [180, 80 + ε]]);
    };
    function d3_geo_graticuleX(y0, y1, dy) {
      var y2 = d32.range(y0, y1 - ε, dy).concat(y1);
      return function(x2) {
        return y2.map(function(y3) {
          return [x2, y3];
        });
      };
    }
    function d3_geo_graticuleY(x0, x1, dx) {
      var x2 = d32.range(x0, x1 - ε, dx).concat(x1);
      return function(y2) {
        return x2.map(function(x3) {
          return [x3, y2];
        });
      };
    }
    function d3_source(d) {
      return d.source;
    }
    function d3_target(d) {
      return d.target;
    }
    d32.geo.greatArc = function() {
      var source = d3_source, source_, target = d3_target, target_;
      function greatArc() {
        return {
          type: "LineString",
          coordinates: [source_ || source.apply(this, arguments), target_ || target.apply(this, arguments)]
        };
      }
      greatArc.distance = function() {
        return d32.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
      };
      greatArc.source = function(_) {
        if (!arguments.length)
          return source;
        source = _, source_ = typeof _ === "function" ? null : _;
        return greatArc;
      };
      greatArc.target = function(_) {
        if (!arguments.length)
          return target;
        target = _, target_ = typeof _ === "function" ? null : _;
        return greatArc;
      };
      greatArc.precision = function() {
        return arguments.length ? greatArc : 0;
      };
      return greatArc;
    };
    d32.geo.interpolate = function(source, target) {
      return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
    };
    function d3_geo_interpolate(x0, y0, x1, y1) {
      var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k2 = 1 / Math.sin(d);
      var interpolate = d ? function(t2) {
        var B2 = Math.sin(t2 *= d) * k2, A2 = Math.sin(d - t2) * k2, x2 = A2 * kx0 + B2 * kx1, y2 = A2 * ky0 + B2 * ky1, z2 = A2 * sy0 + B2 * sy1;
        return [Math.atan2(y2, x2) * d3_degrees, Math.atan2(z2, Math.sqrt(x2 * x2 + y2 * y2)) * d3_degrees];
      } : function() {
        return [x0 * d3_degrees, y0 * d3_degrees];
      };
      interpolate.distance = d;
      return interpolate;
    }
    d32.geo.length = function(object) {
      d3_geo_lengthSum = 0;
      d32.geo.stream(object, d3_geo_length);
      return d3_geo_lengthSum;
    };
    var d3_geo_lengthSum;
    var d3_geo_length = {
      sphere: d3_noop,
      point: d3_noop,
      lineStart: d3_geo_lengthLineStart,
      lineEnd: d3_noop,
      polygonStart: d3_noop,
      polygonEnd: d3_noop
    };
    function d3_geo_lengthLineStart() {
      var λ0, sinφ0, cosφ0;
      d3_geo_length.point = function(λ, φ) {
        λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
        d3_geo_length.point = nextPoint;
      };
      d3_geo_length.lineEnd = function() {
        d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
      };
      function nextPoint(λ, φ) {
        var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t2 = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t2);
        d3_geo_lengthSum += Math.atan2(Math.sqrt((t2 = cosφ * Math.sin(t2)) * t2 + (t2 = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t2), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
      }
    }
    function d3_geo_azimuthal(scale, angle) {
      function azimuthal(λ, φ) {
        var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k2 = scale(cosλ * cosφ);
        return [k2 * cosφ * Math.sin(λ), k2 * Math.sin(φ)];
      }
      azimuthal.invert = function(x2, y2) {
        var ρ3 = Math.sqrt(x2 * x2 + y2 * y2), c = angle(ρ3), sinc = Math.sin(c), cosc = Math.cos(c);
        return [Math.atan2(x2 * sinc, ρ3 * cosc), Math.asin(ρ3 && y2 * sinc / ρ3)];
      };
      return azimuthal;
    }
    var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
      return Math.sqrt(2 / (1 + cosλcosφ));
    }, function(ρ3) {
      return 2 * Math.asin(ρ3 / 2);
    });
    (d32.geo.azimuthalEqualArea = function() {
      return d3_geo_projection(d3_geo_azimuthalEqualArea);
    }).raw = d3_geo_azimuthalEqualArea;
    var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
      var c = Math.acos(cosλcosφ);
      return c && c / Math.sin(c);
    }, d3_identity);
    (d32.geo.azimuthalEquidistant = function() {
      return d3_geo_projection(d3_geo_azimuthalEquidistant);
    }).raw = d3_geo_azimuthalEquidistant;
    function d3_geo_conicConformal(φ0, φ1) {
      var cosφ0 = Math.cos(φ0), t2 = function(φ) {
        return Math.tan(π / 4 + φ / 2);
      }, n2 = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t2(φ1) / t2(φ0)), F2 = cosφ0 * Math.pow(t2(φ0), n2) / n2;
      if (!n2)
        return d3_geo_mercator;
      function forward(λ, φ) {
        if (F2 > 0) {
          if (φ < -halfπ + ε)
            φ = -halfπ + ε;
        } else {
          if (φ > halfπ - ε)
            φ = halfπ - ε;
        }
        var ρ3 = F2 / Math.pow(t2(φ), n2);
        return [ρ3 * Math.sin(n2 * λ), F2 - ρ3 * Math.cos(n2 * λ)];
      }
      forward.invert = function(x2, y2) {
        var ρ0_y = F2 - y2, ρ3 = d3_sgn(n2) * Math.sqrt(x2 * x2 + ρ0_y * ρ0_y);
        return [Math.atan2(x2, ρ0_y) / n2, 2 * Math.atan(Math.pow(F2 / ρ3, 1 / n2)) - halfπ];
      };
      return forward;
    }
    (d32.geo.conicConformal = function() {
      return d3_geo_conic(d3_geo_conicConformal);
    }).raw = d3_geo_conicConformal;
    function d3_geo_conicEquidistant(φ0, φ1) {
      var cosφ0 = Math.cos(φ0), n2 = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G2 = cosφ0 / n2 + φ0;
      if (abs(n2) < ε)
        return d3_geo_equirectangular;
      function forward(λ, φ) {
        var ρ3 = G2 - φ;
        return [ρ3 * Math.sin(n2 * λ), G2 - ρ3 * Math.cos(n2 * λ)];
      }
      forward.invert = function(x2, y2) {
        var ρ0_y = G2 - y2;
        return [Math.atan2(x2, ρ0_y) / n2, G2 - d3_sgn(n2) * Math.sqrt(x2 * x2 + ρ0_y * ρ0_y)];
      };
      return forward;
    }
    (d32.geo.conicEquidistant = function() {
      return d3_geo_conic(d3_geo_conicEquidistant);
    }).raw = d3_geo_conicEquidistant;
    var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
      return 1 / cosλcosφ;
    }, Math.atan);
    (d32.geo.gnomonic = function() {
      return d3_geo_projection(d3_geo_gnomonic);
    }).raw = d3_geo_gnomonic;
    function d3_geo_mercator(λ, φ) {
      return [λ, Math.log(Math.tan(π / 4 + φ / 2))];
    }
    d3_geo_mercator.invert = function(x2, y2) {
      return [x2, 2 * Math.atan(Math.exp(y2)) - halfπ];
    };
    function d3_geo_mercatorProjection(project) {
      var m2 = d3_geo_projection(project), scale = m2.scale, translate = m2.translate, clipExtent = m2.clipExtent, clipAuto;
      m2.scale = function() {
        var v2 = scale.apply(m2, arguments);
        return v2 === m2 ? clipAuto ? m2.clipExtent(null) : m2 : v2;
      };
      m2.translate = function() {
        var v2 = translate.apply(m2, arguments);
        return v2 === m2 ? clipAuto ? m2.clipExtent(null) : m2 : v2;
      };
      m2.clipExtent = function(_) {
        var v2 = clipExtent.apply(m2, arguments);
        if (v2 === m2) {
          if (clipAuto = _ == null) {
            var k2 = π * scale(), t2 = translate();
            clipExtent([[t2[0] - k2, t2[1] - k2], [t2[0] + k2, t2[1] + k2]]);
          }
        } else if (clipAuto) {
          v2 = null;
        }
        return v2;
      };
      return m2.clipExtent(null);
    }
    (d32.geo.mercator = function() {
      return d3_geo_mercatorProjection(d3_geo_mercator);
    }).raw = d3_geo_mercator;
    var d3_geo_orthographic = d3_geo_azimuthal(function() {
      return 1;
    }, Math.asin);
    (d32.geo.orthographic = function() {
      return d3_geo_projection(d3_geo_orthographic);
    }).raw = d3_geo_orthographic;
    var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
      return 1 / (1 + cosλcosφ);
    }, function(ρ3) {
      return 2 * Math.atan(ρ3);
    });
    (d32.geo.stereographic = function() {
      return d3_geo_projection(d3_geo_stereographic);
    }).raw = d3_geo_stereographic;
    function d3_geo_transverseMercator(λ, φ) {
      return [Math.log(Math.tan(π / 4 + φ / 2)), -λ];
    }
    d3_geo_transverseMercator.invert = function(x2, y2) {
      return [-y2, 2 * Math.atan(Math.exp(x2)) - halfπ];
    };
    (d32.geo.transverseMercator = function() {
      var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
      projection.center = function(_) {
        return _ ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
      };
      projection.rotate = function(_) {
        return _ ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
      };
      return rotate([0, 0, 90]);
    }).raw = d3_geo_transverseMercator;
    d32.geom = {};
    function d3_geom_pointX(d) {
      return d[0];
    }
    function d3_geom_pointY(d) {
      return d[1];
    }
    d32.geom.hull = function(vertices) {
      var x2 = d3_geom_pointX, y2 = d3_geom_pointY;
      if (arguments.length)
        return hull(vertices);
      function hull(data) {
        if (data.length < 3)
          return [];
        var fx = d3_functor(x2), fy = d3_functor(y2), i, n2 = data.length, points = [], flippedPoints = [];
        for (i = 0; i < n2; i++) {
          points.push([+fx.call(this, data[i], i), +fy.call(this, data[i], i), i]);
        }
        points.sort(d3_geom_hullOrder);
        for (i = 0; i < n2; i++)
          flippedPoints.push([points[i][0], -points[i][1]]);
        var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
        var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
        for (i = upper.length - 1; i >= 0; --i)
          polygon.push(data[points[upper[i]][2]]);
        for (i = +skipLeft; i < lower.length - skipRight; ++i)
          polygon.push(data[points[lower[i]][2]]);
        return polygon;
      }
      hull.x = function(_) {
        return arguments.length ? (x2 = _, hull) : x2;
      };
      hull.y = function(_) {
        return arguments.length ? (y2 = _, hull) : y2;
      };
      return hull;
    };
    function d3_geom_hullUpper(points) {
      var n2 = points.length, hull = [0, 1], hs = 2;
      for (var i = 2; i < n2; i++) {
        while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0)
          --hs;
        hull[hs++] = i;
      }
      return hull.slice(0, hs);
    }
    function d3_geom_hullOrder(a, b) {
      return a[0] - b[0] || a[1] - b[1];
    }
    d32.geom.polygon = function(coordinates) {
      d3_subclass(coordinates, d3_geom_polygonPrototype);
      return coordinates;
    };
    var d3_geom_polygonPrototype = d32.geom.polygon.prototype = [];
    d3_geom_polygonPrototype.area = function() {
      var i = -1, n2 = this.length, a, b = this[n2 - 1], area = 0;
      while (++i < n2) {
        a = b;
        b = this[i];
        area += a[1] * b[0] - a[0] * b[1];
      }
      return area * 0.5;
    };
    d3_geom_polygonPrototype.centroid = function(k2) {
      var i = -1, n2 = this.length, x2 = 0, y2 = 0, a, b = this[n2 - 1], c;
      if (!arguments.length)
        k2 = -1 / (6 * this.area());
      while (++i < n2) {
        a = b;
        b = this[i];
        c = a[0] * b[1] - b[0] * a[1];
        x2 += (a[0] + b[0]) * c;
        y2 += (a[1] + b[1]) * c;
      }
      return [x2 * k2, y2 * k2];
    };
    d3_geom_polygonPrototype.clip = function(subject) {
      var input, closed = d3_geom_polygonClosed(subject), i = -1, n2 = this.length - d3_geom_polygonClosed(this), j, m2, a = this[n2 - 1], b, c, d;
      while (++i < n2) {
        input = subject.slice();
        subject.length = 0;
        b = this[i];
        c = input[(m2 = input.length - closed) - 1];
        j = -1;
        while (++j < m2) {
          d = input[j];
          if (d3_geom_polygonInside(d, a, b)) {
            if (!d3_geom_polygonInside(c, a, b)) {
              subject.push(d3_geom_polygonIntersect(c, d, a, b));
            }
            subject.push(d);
          } else if (d3_geom_polygonInside(c, a, b)) {
            subject.push(d3_geom_polygonIntersect(c, d, a, b));
          }
          c = d;
        }
        if (closed)
          subject.push(subject[0]);
        a = b;
      }
      return subject;
    };
    function d3_geom_polygonInside(p2, a, b) {
      return (b[0] - a[0]) * (p2[1] - a[1]) < (b[1] - a[1]) * (p2[0] - a[0]);
    }
    function d3_geom_polygonIntersect(c, d, a, b) {
      var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua2 = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
      return [x1 + ua2 * x21, y1 + ua2 * y21];
    }
    function d3_geom_polygonClosed(coordinates) {
      var a = coordinates[0], b = coordinates[coordinates.length - 1];
      return !(a[0] - b[0] || a[1] - b[1]);
    }
    var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
    function d3_geom_voronoiBeach() {
      d3_geom_voronoiRedBlackNode(this);
      this.edge = this.site = this.circle = null;
    }
    function d3_geom_voronoiCreateBeach(site) {
      var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
      beach.site = site;
      return beach;
    }
    function d3_geom_voronoiDetachBeach(beach) {
      d3_geom_voronoiDetachCircle(beach);
      d3_geom_voronoiBeaches.remove(beach);
      d3_geom_voronoiBeachPool.push(beach);
      d3_geom_voronoiRedBlackNode(beach);
    }
    function d3_geom_voronoiRemoveBeach(beach) {
      var circle = beach.circle, x2 = circle.x, y2 = circle.cy, vertex = {
        x: x2,
        y: y2
      }, previous = beach.P, next = beach.N, disappearing = [beach];
      d3_geom_voronoiDetachBeach(beach);
      var lArc = previous;
      while (lArc.circle && abs(x2 - lArc.circle.x) < ε && abs(y2 - lArc.circle.cy) < ε) {
        previous = lArc.P;
        disappearing.unshift(lArc);
        d3_geom_voronoiDetachBeach(lArc);
        lArc = previous;
      }
      disappearing.unshift(lArc);
      d3_geom_voronoiDetachCircle(lArc);
      var rArc = next;
      while (rArc.circle && abs(x2 - rArc.circle.x) < ε && abs(y2 - rArc.circle.cy) < ε) {
        next = rArc.N;
        disappearing.push(rArc);
        d3_geom_voronoiDetachBeach(rArc);
        rArc = next;
      }
      disappearing.push(rArc);
      d3_geom_voronoiDetachCircle(rArc);
      var nArcs = disappearing.length, iArc;
      for (iArc = 1; iArc < nArcs; ++iArc) {
        rArc = disappearing[iArc];
        lArc = disappearing[iArc - 1];
        d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
      }
      lArc = disappearing[0];
      rArc = disappearing[nArcs - 1];
      rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
      d3_geom_voronoiAttachCircle(lArc);
      d3_geom_voronoiAttachCircle(rArc);
    }
    function d3_geom_voronoiAddBeach(site) {
      var x2 = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
      while (node) {
        dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x2;
        if (dxl > ε)
          node = node.L;
        else {
          dxr = x2 - d3_geom_voronoiRightBreakPoint(node, directrix);
          if (dxr > ε) {
            if (!node.R) {
              lArc = node;
              break;
            }
            node = node.R;
          } else {
            if (dxl > -ε) {
              lArc = node.P;
              rArc = node;
            } else if (dxr > -ε) {
              lArc = node;
              rArc = node.N;
            } else {
              lArc = rArc = node;
            }
            break;
          }
        }
      }
      var newArc = d3_geom_voronoiCreateBeach(site);
      d3_geom_voronoiBeaches.insert(lArc, newArc);
      if (!lArc && !rArc)
        return;
      if (lArc === rArc) {
        d3_geom_voronoiDetachCircle(lArc);
        rArc = d3_geom_voronoiCreateBeach(lArc.site);
        d3_geom_voronoiBeaches.insert(newArc, rArc);
        newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
        d3_geom_voronoiAttachCircle(lArc);
        d3_geom_voronoiAttachCircle(rArc);
        return;
      }
      if (!rArc) {
        newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
        return;
      }
      d3_geom_voronoiDetachCircle(lArc);
      d3_geom_voronoiDetachCircle(rArc);
      var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb2 = bx * bx + by * by, hc2 = cx * cx + cy * cy, vertex = {
        x: (cy * hb2 - by * hc2) / d + ax,
        y: (bx * hc2 - cx * hb2) / d + ay
      };
      d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
      newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
      rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
      d3_geom_voronoiAttachCircle(lArc);
      d3_geom_voronoiAttachCircle(rArc);
    }
    function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
      var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
      if (!pby2)
        return rfocx;
      var lArc = arc.P;
      if (!lArc)
        return -Infinity;
      site = lArc.site;
      var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
      if (!plby2)
        return lfocx;
      var hl2 = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl2 / plby2;
      if (aby2)
        return (-b + Math.sqrt(b * b - 2 * aby2 * (hl2 * hl2 / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
      return (rfocx + lfocx) / 2;
    }
    function d3_geom_voronoiRightBreakPoint(arc, directrix) {
      var rArc = arc.N;
      if (rArc)
        return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
      var site = arc.site;
      return site.y === directrix ? site.x : Infinity;
    }
    function d3_geom_voronoiCell(site) {
      this.site = site;
      this.edges = [];
    }
    d3_geom_voronoiCell.prototype.prepare = function() {
      var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
      while (iHalfEdge--) {
        edge = halfEdges[iHalfEdge].edge;
        if (!edge.b || !edge.a)
          halfEdges.splice(iHalfEdge, 1);
      }
      halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
      return halfEdges.length;
    };
    function d3_geom_voronoiCloseCells(extent) {
      var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
      while (iCell--) {
        cell = cells[iCell];
        if (!cell || !cell.prepare())
          continue;
        halfEdges = cell.edges;
        nHalfEdges = halfEdges.length;
        iHalfEdge = 0;
        while (iHalfEdge < nHalfEdges) {
          end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
          start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
          if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
            halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
              x: x0,
              y: abs(x2 - x0) < ε ? y2 : y1
            } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
              x: abs(y2 - y1) < ε ? x2 : x1,
              y: y1
            } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
              x: x1,
              y: abs(x2 - x1) < ε ? y2 : y0
            } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
              x: abs(y2 - y0) < ε ? x2 : x0,
              y: y0
            } : null), cell.site, null));
            ++nHalfEdges;
          }
        }
      }
    }
    function d3_geom_voronoiHalfEdgeOrder(a, b) {
      return b.angle - a.angle;
    }
    function d3_geom_voronoiCircle() {
      d3_geom_voronoiRedBlackNode(this);
      this.x = this.y = this.arc = this.site = this.cy = null;
    }
    function d3_geom_voronoiAttachCircle(arc) {
      var lArc = arc.P, rArc = arc.N;
      if (!lArc || !rArc)
        return;
      var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
      if (lSite === rSite)
        return;
      var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
      var d = 2 * (ax * cy - ay * cx);
      if (d >= -ε2)
        return;
      var ha2 = ax * ax + ay * ay, hc2 = cx * cx + cy * cy, x2 = (cy * ha2 - ay * hc2) / d, y2 = (ax * hc2 - cx * ha2) / d, cy = y2 + by;
      var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
      circle.arc = arc;
      circle.site = cSite;
      circle.x = x2 + bx;
      circle.y = cy + Math.sqrt(x2 * x2 + y2 * y2);
      circle.cy = cy;
      arc.circle = circle;
      var before = null, node = d3_geom_voronoiCircles._;
      while (node) {
        if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
          if (node.L)
            node = node.L;
          else {
            before = node.P;
            break;
          }
        } else {
          if (node.R)
            node = node.R;
          else {
            before = node;
            break;
          }
        }
      }
      d3_geom_voronoiCircles.insert(before, circle);
      if (!before)
        d3_geom_voronoiFirstCircle = circle;
    }
    function d3_geom_voronoiDetachCircle(arc) {
      var circle = arc.circle;
      if (circle) {
        if (!circle.P)
          d3_geom_voronoiFirstCircle = circle.N;
        d3_geom_voronoiCircles.remove(circle);
        d3_geom_voronoiCirclePool.push(circle);
        d3_geom_voronoiRedBlackNode(circle);
        arc.circle = null;
      }
    }
    function d3_geom_voronoiClipEdges(extent) {
      var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
      while (i--) {
        e = edges[i];
        if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
          e.a = e.b = null;
          edges.splice(i, 1);
        }
      }
    }
    function d3_geom_voronoiConnectEdge(edge, extent) {
      var vb2 = edge.b;
      if (vb2)
        return true;
      var va2 = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb2;
      if (ry === ly) {
        if (fx < x0 || fx >= x1)
          return;
        if (lx > rx) {
          if (!va2)
            va2 = {
              x: fx,
              y: y0
            };
          else if (va2.y >= y1)
            return;
          vb2 = {
            x: fx,
            y: y1
          };
        } else {
          if (!va2)
            va2 = {
              x: fx,
              y: y1
            };
          else if (va2.y < y0)
            return;
          vb2 = {
            x: fx,
            y: y0
          };
        }
      } else {
        fm = (lx - rx) / (ry - ly);
        fb2 = fy - fm * fx;
        if (fm < -1 || fm > 1) {
          if (lx > rx) {
            if (!va2)
              va2 = {
                x: (y0 - fb2) / fm,
                y: y0
              };
            else if (va2.y >= y1)
              return;
            vb2 = {
              x: (y1 - fb2) / fm,
              y: y1
            };
          } else {
            if (!va2)
              va2 = {
                x: (y1 - fb2) / fm,
                y: y1
              };
            else if (va2.y < y0)
              return;
            vb2 = {
              x: (y0 - fb2) / fm,
              y: y0
            };
          }
        } else {
          if (ly < ry) {
            if (!va2)
              va2 = {
                x: x0,
                y: fm * x0 + fb2
              };
            else if (va2.x >= x1)
              return;
            vb2 = {
              x: x1,
              y: fm * x1 + fb2
            };
          } else {
            if (!va2)
              va2 = {
                x: x1,
                y: fm * x1 + fb2
              };
            else if (va2.x < x0)
              return;
            vb2 = {
              x: x0,
              y: fm * x0 + fb2
            };
          }
        }
      }
      edge.a = va2;
      edge.b = vb2;
      return true;
    }
    function d3_geom_voronoiEdge(lSite, rSite) {
      this.l = lSite;
      this.r = rSite;
      this.a = this.b = null;
    }
    function d3_geom_voronoiCreateEdge(lSite, rSite, va2, vb2) {
      var edge = new d3_geom_voronoiEdge(lSite, rSite);
      d3_geom_voronoiEdges.push(edge);
      if (va2)
        d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va2);
      if (vb2)
        d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb2);
      d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
      d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
      return edge;
    }
    function d3_geom_voronoiCreateBorderEdge(lSite, va2, vb2) {
      var edge = new d3_geom_voronoiEdge(lSite, null);
      edge.a = va2;
      edge.b = vb2;
      d3_geom_voronoiEdges.push(edge);
      return edge;
    }
    function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
      if (!edge.a && !edge.b) {
        edge.a = vertex;
        edge.l = lSite;
        edge.r = rSite;
      } else if (edge.l === rSite) {
        edge.b = vertex;
      } else {
        edge.a = vertex;
      }
    }
    function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
      var va2 = edge.a, vb2 = edge.b;
      this.edge = edge;
      this.site = lSite;
      this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb2.x - va2.x, va2.y - vb2.y) : Math.atan2(va2.x - vb2.x, vb2.y - va2.y);
    }
    d3_geom_voronoiHalfEdge.prototype = {
      start: function() {
        return this.edge.l === this.site ? this.edge.a : this.edge.b;
      },
      end: function() {
        return this.edge.l === this.site ? this.edge.b : this.edge.a;
      }
    };
    function d3_geom_voronoiRedBlackTree() {
      this._ = null;
    }
    function d3_geom_voronoiRedBlackNode(node) {
      node.U = node.C = node.L = node.R = node.P = node.N = null;
    }
    d3_geom_voronoiRedBlackTree.prototype = {
      insert: function(after, node) {
        var parent, grandpa, uncle;
        if (after) {
          node.P = after;
          node.N = after.N;
          if (after.N)
            after.N.P = node;
          after.N = node;
          if (after.R) {
            after = after.R;
            while (after.L)
              after = after.L;
            after.L = node;
          } else {
            after.R = node;
          }
          parent = after;
        } else if (this._) {
          after = d3_geom_voronoiRedBlackFirst(this._);
          node.P = null;
          node.N = after;
          after.P = after.L = node;
          parent = after;
        } else {
          node.P = node.N = null;
          this._ = node;
          parent = null;
        }
        node.L = node.R = null;
        node.U = parent;
        node.C = true;
        after = node;
        while (parent && parent.C) {
          grandpa = parent.U;
          if (parent === grandpa.L) {
            uncle = grandpa.R;
            if (uncle && uncle.C) {
              parent.C = uncle.C = false;
              grandpa.C = true;
              after = grandpa;
            } else {
              if (after === parent.R) {
                d3_geom_voronoiRedBlackRotateLeft(this, parent);
                after = parent;
                parent = after.U;
              }
              parent.C = false;
              grandpa.C = true;
              d3_geom_voronoiRedBlackRotateRight(this, grandpa);
            }
          } else {
            uncle = grandpa.L;
            if (uncle && uncle.C) {
              parent.C = uncle.C = false;
              grandpa.C = true;
              after = grandpa;
            } else {
              if (after === parent.L) {
                d3_geom_voronoiRedBlackRotateRight(this, parent);
                after = parent;
                parent = after.U;
              }
              parent.C = false;
              grandpa.C = true;
              d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
            }
          }
          parent = after.U;
        }
        this._.C = false;
      },
      remove: function(node) {
        if (node.N)
          node.N.P = node.P;
        if (node.P)
          node.P.N = node.N;
        node.N = node.P = null;
        var parent = node.U, sibling, left = node.L, right = node.R, next, red;
        if (!left)
          next = right;
        else if (!right)
          next = left;
        else
          next = d3_geom_voronoiRedBlackFirst(right);
        if (parent) {
          if (parent.L === node)
            parent.L = next;
          else
            parent.R = next;
        } else {
          this._ = next;
        }
        if (left && right) {
          red = next.C;
          next.C = node.C;
          next.L = left;
          left.U = next;
          if (next !== right) {
            parent = next.U;
            next.U = node.U;
            node = next.R;
            parent.L = node;
            next.R = right;
            right.U = next;
          } else {
            next.U = parent;
            parent = next;
            node = next.R;
          }
        } else {
          red = node.C;
          node = next;
        }
        if (node)
          node.U = parent;
        if (red)
          return;
        if (node && node.C) {
          node.C = false;
          return;
        }
        do {
          if (node === this._)
            break;
          if (node === parent.L) {
            sibling = parent.R;
            if (sibling.C) {
              sibling.C = false;
              parent.C = true;
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              sibling = parent.R;
            }
            if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
              if (!sibling.R || !sibling.R.C) {
                sibling.L.C = false;
                sibling.C = true;
                d3_geom_voronoiRedBlackRotateRight(this, sibling);
                sibling = parent.R;
              }
              sibling.C = parent.C;
              parent.C = sibling.R.C = false;
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              node = this._;
              break;
            }
          } else {
            sibling = parent.L;
            if (sibling.C) {
              sibling.C = false;
              parent.C = true;
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              sibling = parent.L;
            }
            if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
              if (!sibling.L || !sibling.L.C) {
                sibling.R.C = false;
                sibling.C = true;
                d3_geom_voronoiRedBlackRotateLeft(this, sibling);
                sibling = parent.L;
              }
              sibling.C = parent.C;
              parent.C = sibling.L.C = false;
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              node = this._;
              break;
            }
          }
          sibling.C = true;
          node = parent;
          parent = parent.U;
        } while (!node.C);
        if (node)
          node.C = false;
      }
    };
    function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
      var p2 = node, q2 = node.R, parent = p2.U;
      if (parent) {
        if (parent.L === p2)
          parent.L = q2;
        else
          parent.R = q2;
      } else {
        tree._ = q2;
      }
      q2.U = parent;
      p2.U = q2;
      p2.R = q2.L;
      if (p2.R)
        p2.R.U = p2;
      q2.L = p2;
    }
    function d3_geom_voronoiRedBlackRotateRight(tree, node) {
      var p2 = node, q2 = node.L, parent = p2.U;
      if (parent) {
        if (parent.L === p2)
          parent.L = q2;
        else
          parent.R = q2;
      } else {
        tree._ = q2;
      }
      q2.U = parent;
      p2.U = q2;
      p2.L = q2.R;
      if (p2.L)
        p2.L.U = p2;
      q2.R = p2;
    }
    function d3_geom_voronoiRedBlackFirst(node) {
      while (node.L)
        node = node.L;
      return node;
    }
    function d3_geom_voronoi(sites, bbox) {
      var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
      d3_geom_voronoiEdges = [];
      d3_geom_voronoiCells = new Array(sites.length);
      d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
      d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
      while (true) {
        circle = d3_geom_voronoiFirstCircle;
        if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
          if (site.x !== x0 || site.y !== y0) {
            d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
            d3_geom_voronoiAddBeach(site);
            x0 = site.x, y0 = site.y;
          }
          site = sites.pop();
        } else if (circle) {
          d3_geom_voronoiRemoveBeach(circle.arc);
        } else {
          break;
        }
      }
      if (bbox)
        d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
      var diagram = {
        cells: d3_geom_voronoiCells,
        edges: d3_geom_voronoiEdges
      };
      d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
      return diagram;
    }
    function d3_geom_voronoiVertexOrder(a, b) {
      return b.y - a.y || b.x - a.x;
    }
    d32.geom.voronoi = function(points) {
      var x2 = d3_geom_pointX, y2 = d3_geom_pointY, fx = x2, fy = y2, clipExtent = d3_geom_voronoiClipExtent;
      if (points)
        return voronoi(points);
      function voronoi(data) {
        var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
        d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
          var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
            var s = e.start();
            return [s.x, s.y];
          }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [[x0, y1], [x1, y1], [x1, y0], [x0, y0]] : [];
          polygon.point = data[i];
        });
        return polygons;
      }
      function sites(data) {
        return data.map(function(d, i) {
          return {
            x: Math.round(fx(d, i) / ε) * ε,
            y: Math.round(fy(d, i) / ε) * ε,
            i
          };
        });
      }
      voronoi.links = function(data) {
        return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
          return edge.l && edge.r;
        }).map(function(edge) {
          return {
            source: data[edge.l.i],
            target: data[edge.r.i]
          };
        });
      };
      voronoi.triangles = function(data) {
        var triangles = [];
        d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
          var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m2 = edges.length, s0, e1 = edges[m2 - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
          while (++j < m2) {
            s0 = s1;
            e1 = edges[j].edge;
            s1 = e1.l === site ? e1.r : e1.l;
            if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
              triangles.push([data[i], data[s0.i], data[s1.i]]);
            }
          }
        });
        return triangles;
      };
      voronoi.x = function(_) {
        return arguments.length ? (fx = d3_functor(x2 = _), voronoi) : x2;
      };
      voronoi.y = function(_) {
        return arguments.length ? (fy = d3_functor(y2 = _), voronoi) : y2;
      };
      voronoi.clipExtent = function(_) {
        if (!arguments.length)
          return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
        clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
        return voronoi;
      };
      voronoi.size = function(_) {
        if (!arguments.length)
          return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
        return voronoi.clipExtent(_ && [[0, 0], _]);
      };
      return voronoi;
    };
    var d3_geom_voronoiClipExtent = [[-1e6, -1e6], [1e6, 1e6]];
    function d3_geom_voronoiTriangleArea(a, b, c) {
      return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
    }
    d32.geom.delaunay = function(vertices) {
      return d32.geom.voronoi().triangles(vertices);
    };
    d32.geom.quadtree = function(points, x1, y1, x2, y2) {
      var x3 = d3_geom_pointX, y3 = d3_geom_pointY, compat;
      if (compat = arguments.length) {
        x3 = d3_geom_quadtreeCompatX;
        y3 = d3_geom_quadtreeCompatY;
        if (compat === 3) {
          y2 = y1;
          x2 = x1;
          y1 = x1 = 0;
        }
        return quadtree(points);
      }
      function quadtree(data) {
        var d, fx = d3_functor(x3), fy = d3_functor(y3), xs, ys, i, n2, x1_, y1_, x2_, y2_;
        if (x1 != null) {
          x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
        } else {
          x2_ = y2_ = -(x1_ = y1_ = Infinity);
          xs = [], ys = [];
          n2 = data.length;
          if (compat)
            for (i = 0; i < n2; ++i) {
              d = data[i];
              if (d.x < x1_)
                x1_ = d.x;
              if (d.y < y1_)
                y1_ = d.y;
              if (d.x > x2_)
                x2_ = d.x;
              if (d.y > y2_)
                y2_ = d.y;
              xs.push(d.x);
              ys.push(d.y);
            }
          else
            for (i = 0; i < n2; ++i) {
              var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
              if (x_ < x1_)
                x1_ = x_;
              if (y_ < y1_)
                y1_ = y_;
              if (x_ > x2_)
                x2_ = x_;
              if (y_ > y2_)
                y2_ = y_;
              xs.push(x_);
              ys.push(y_);
            }
        }
        var dx = x2_ - x1_, dy = y2_ - y1_;
        if (dx > dy)
          y2_ = y1_ + dx;
        else
          x2_ = x1_ + dy;
        function insert(n3, d2, x4, y4, x12, y12, x22, y22) {
          if (isNaN(x4) || isNaN(y4))
            return;
          if (n3.leaf) {
            var nx = n3.x, ny = n3.y;
            if (nx != null) {
              if (abs(nx - x4) + abs(ny - y4) < 0.01) {
                insertChild(n3, d2, x4, y4, x12, y12, x22, y22);
              } else {
                var nPoint = n3.point;
                n3.x = n3.y = n3.point = null;
                insertChild(n3, nPoint, nx, ny, x12, y12, x22, y22);
                insertChild(n3, d2, x4, y4, x12, y12, x22, y22);
              }
            } else {
              n3.x = x4, n3.y = y4, n3.point = d2;
            }
          } else {
            insertChild(n3, d2, x4, y4, x12, y12, x22, y22);
          }
        }
        function insertChild(n3, d2, x4, y4, x12, y12, x22, y22) {
          var xm = (x12 + x22) * 0.5, ym = (y12 + y22) * 0.5, right = x4 >= xm, below = y4 >= ym, i2 = below << 1 | right;
          n3.leaf = false;
          n3 = n3.nodes[i2] || (n3.nodes[i2] = d3_geom_quadtreeNode());
          if (right)
            x12 = xm;
          else
            x22 = xm;
          if (below)
            y12 = ym;
          else
            y22 = ym;
          insert(n3, d2, x4, y4, x12, y12, x22, y22);
        }
        var root = d3_geom_quadtreeNode();
        root.add = function(d2) {
          insert(root, d2, +fx(d2, ++i), +fy(d2, i), x1_, y1_, x2_, y2_);
        };
        root.visit = function(f2) {
          d3_geom_quadtreeVisit(f2, root, x1_, y1_, x2_, y2_);
        };
        root.find = function(point) {
          return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
        };
        i = -1;
        if (x1 == null) {
          while (++i < n2) {
            insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
          }
          --i;
        } else
          data.forEach(root.add);
        xs = ys = data = d = null;
        return root;
      }
      quadtree.x = function(_) {
        return arguments.length ? (x3 = _, quadtree) : x3;
      };
      quadtree.y = function(_) {
        return arguments.length ? (y3 = _, quadtree) : y3;
      };
      quadtree.extent = function(_) {
        if (!arguments.length)
          return x1 == null ? null : [[x1, y1], [x2, y2]];
        if (_ == null)
          x1 = y1 = x2 = y2 = null;
        else
          x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], y2 = +_[1][1];
        return quadtree;
      };
      quadtree.size = function(_) {
        if (!arguments.length)
          return x1 == null ? null : [x2 - x1, y2 - y1];
        if (_ == null)
          x1 = y1 = x2 = y2 = null;
        else
          x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
        return quadtree;
      };
      return quadtree;
    };
    function d3_geom_quadtreeCompatX(d) {
      return d.x;
    }
    function d3_geom_quadtreeCompatY(d) {
      return d.y;
    }
    function d3_geom_quadtreeNode() {
      return {
        leaf: true,
        nodes: [],
        point: null,
        x: null,
        y: null
      };
    }
    function d3_geom_quadtreeVisit(f2, node, x1, y1, x2, y2) {
      if (!f2(node, x1, y1, x2, y2)) {
        var sx = (x1 + x2) * 0.5, sy = (y1 + y2) * 0.5, children = node.nodes;
        if (children[0])
          d3_geom_quadtreeVisit(f2, children[0], x1, y1, sx, sy);
        if (children[1])
          d3_geom_quadtreeVisit(f2, children[1], sx, y1, x2, sy);
        if (children[2])
          d3_geom_quadtreeVisit(f2, children[2], x1, sy, sx, y2);
        if (children[3])
          d3_geom_quadtreeVisit(f2, children[3], sx, sy, x2, y2);
      }
    }
    function d3_geom_quadtreeFind(root, x2, y2, x0, y0, x3, y3) {
      var minDistance2 = Infinity, closestPoint;
      (function find(node, x1, y1, x22, y22) {
        if (x1 > x3 || y1 > y3 || x22 < x0 || y22 < y0)
          return;
        if (point = node.point) {
          var point, dx = x2 - node.x, dy = y2 - node.y, distance2 = dx * dx + dy * dy;
          if (distance2 < minDistance2) {
            var distance = Math.sqrt(minDistance2 = distance2);
            x0 = x2 - distance, y0 = y2 - distance;
            x3 = x2 + distance, y3 = y2 + distance;
            closestPoint = point;
          }
        }
        var children = node.nodes, xm = (x1 + x22) * 0.5, ym = (y1 + y22) * 0.5, right = x2 >= xm, below = y2 >= ym;
        for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
          if (node = children[i & 3])
            switch (i & 3) {
              case 0:
                find(node, x1, y1, xm, ym);
                break;
              case 1:
                find(node, xm, y1, x22, ym);
                break;
              case 2:
                find(node, x1, ym, xm, y22);
                break;
              case 3:
                find(node, xm, ym, x22, y22);
                break;
            }
        }
      })(root, x0, y0, x3, y3);
      return closestPoint;
    }
    d32.interpolateRgb = d3_interpolateRgb;
    function d3_interpolateRgb(a, b) {
      a = d32.rgb(a);
      b = d32.rgb(b);
      var ar = a.r, ag2 = a.g, ab2 = a.b, br = b.r - ar, bg2 = b.g - ag2, bb2 = b.b - ab2;
      return function(t2) {
        return "#" + d3_rgb_hex(Math.round(ar + br * t2)) + d3_rgb_hex(Math.round(ag2 + bg2 * t2)) + d3_rgb_hex(Math.round(ab2 + bb2 * t2));
      };
    }
    d32.interpolateObject = d3_interpolateObject;
    function d3_interpolateObject(a, b) {
      var i = {}, c = {}, k2;
      for (k2 in a) {
        if (k2 in b) {
          i[k2] = d3_interpolate(a[k2], b[k2]);
        } else {
          c[k2] = a[k2];
        }
      }
      for (k2 in b) {
        if (!(k2 in a)) {
          c[k2] = b[k2];
        }
      }
      return function(t2) {
        for (k2 in i)
          c[k2] = i[k2](t2);
        return c;
      };
    }
    d32.interpolateNumber = d3_interpolateNumber;
    function d3_interpolateNumber(a, b) {
      a = +a, b = +b;
      return function(t2) {
        return a * (1 - t2) + b * t2;
      };
    }
    d32.interpolateString = d3_interpolateString;
    function d3_interpolateString(a, b) {
      var bi2 = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q2 = [];
      a = a + "", b = b + "";
      while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
        if ((bs = bm.index) > bi2) {
          bs = b.slice(bi2, bs);
          if (s[i])
            s[i] += bs;
          else
            s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
          if (s[i])
            s[i] += bm;
          else
            s[++i] = bm;
        } else {
          s[++i] = null;
          q2.push({
            i,
            x: d3_interpolateNumber(am, bm)
          });
        }
        bi2 = d3_interpolate_numberB.lastIndex;
      }
      if (bi2 < b.length) {
        bs = b.slice(bi2);
        if (s[i])
          s[i] += bs;
        else
          s[++i] = bs;
      }
      return s.length < 2 ? q2[0] ? (b = q2[0].x, function(t2) {
        return b(t2) + "";
      }) : function() {
        return b;
      } : (b = q2.length, function(t2) {
        for (var i2 = 0, o; i2 < b; ++i2)
          s[(o = q2[i2]).i] = o.x(t2);
        return s.join("");
      });
    }
    var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
    d32.interpolate = d3_interpolate;
    function d3_interpolate(a, b) {
      var i = d32.interpolators.length, f2;
      while (--i >= 0 && !(f2 = d32.interpolators[i](a, b)))
        ;
      return f2;
    }
    d32.interpolators = [function(a, b) {
      var t2 = typeof b;
      return (t2 === "string" ? d3_rgb_names.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t2 === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
    }];
    d32.interpolateArray = d3_interpolateArray;
    function d3_interpolateArray(a, b) {
      var x2 = [], c = [], na = a.length, nb2 = b.length, n0 = Math.min(a.length, b.length), i;
      for (i = 0; i < n0; ++i)
        x2.push(d3_interpolate(a[i], b[i]));
      for (; i < na; ++i)
        c[i] = a[i];
      for (; i < nb2; ++i)
        c[i] = b[i];
      return function(t2) {
        for (i = 0; i < n0; ++i)
          c[i] = x2[i](t2);
        return c;
      };
    }
    var d3_ease_default = function() {
      return d3_identity;
    };
    var d3_ease = d32.map({
      linear: d3_ease_default,
      poly: d3_ease_poly,
      quad: function() {
        return d3_ease_quad;
      },
      cubic: function() {
        return d3_ease_cubic;
      },
      sin: function() {
        return d3_ease_sin;
      },
      exp: function() {
        return d3_ease_exp;
      },
      circle: function() {
        return d3_ease_circle;
      },
      elastic: d3_ease_elastic,
      back: d3_ease_back,
      bounce: function() {
        return d3_ease_bounce;
      }
    });
    var d3_ease_mode = d32.map({
      "in": d3_identity,
      out: d3_ease_reverse,
      "in-out": d3_ease_reflect,
      "out-in": function(f2) {
        return d3_ease_reflect(d3_ease_reverse(f2));
      }
    });
    d32.ease = function(name) {
      var i = name.indexOf("-"), t2 = i >= 0 ? name.slice(0, i) : name, m2 = i >= 0 ? name.slice(i + 1) : "in";
      t2 = d3_ease.get(t2) || d3_ease_default;
      m2 = d3_ease_mode.get(m2) || d3_identity;
      return d3_ease_clamp(m2(t2.apply(null, d3_arraySlice.call(arguments, 1))));
    };
    function d3_ease_clamp(f2) {
      return function(t2) {
        return t2 <= 0 ? 0 : t2 >= 1 ? 1 : f2(t2);
      };
    }
    function d3_ease_reverse(f2) {
      return function(t2) {
        return 1 - f2(1 - t2);
      };
    }
    function d3_ease_reflect(f2) {
      return function(t2) {
        return 0.5 * (t2 < 0.5 ? f2(2 * t2) : 2 - f2(2 - 2 * t2));
      };
    }
    function d3_ease_quad(t2) {
      return t2 * t2;
    }
    function d3_ease_cubic(t2) {
      return t2 * t2 * t2;
    }
    function d3_ease_cubicInOut(t2) {
      if (t2 <= 0)
        return 0;
      if (t2 >= 1)
        return 1;
      var t22 = t2 * t2, t3 = t22 * t2;
      return 4 * (t2 < 0.5 ? t3 : 3 * (t2 - t22) + t3 - 0.75);
    }
    function d3_ease_poly(e) {
      return function(t2) {
        return Math.pow(t2, e);
      };
    }
    function d3_ease_sin(t2) {
      return 1 - Math.cos(t2 * halfπ);
    }
    function d3_ease_exp(t2) {
      return Math.pow(2, 10 * (t2 - 1));
    }
    function d3_ease_circle(t2) {
      return 1 - Math.sqrt(1 - t2 * t2);
    }
    function d3_ease_elastic(a, p2) {
      var s;
      if (arguments.length < 2)
        p2 = 0.45;
      if (arguments.length)
        s = p2 / τ * Math.asin(1 / a);
      else
        a = 1, s = p2 / 4;
      return function(t2) {
        return 1 + a * Math.pow(2, -10 * t2) * Math.sin((t2 - s) * τ / p2);
      };
    }
    function d3_ease_back(s) {
      if (!s)
        s = 1.70158;
      return function(t2) {
        return t2 * t2 * ((s + 1) * t2 - s);
      };
    }
    function d3_ease_bounce(t2) {
      return t2 < 1 / 2.75 ? 7.5625 * t2 * t2 : t2 < 2 / 2.75 ? 7.5625 * (t2 -= 1.5 / 2.75) * t2 + 0.75 : t2 < 2.5 / 2.75 ? 7.5625 * (t2 -= 2.25 / 2.75) * t2 + 0.9375 : 7.5625 * (t2 -= 2.625 / 2.75) * t2 + 0.984375;
    }
    d32.interpolateHcl = d3_interpolateHcl;
    function d3_interpolateHcl(a, b) {
      a = d32.hcl(a);
      b = d32.hcl(b);
      var ah2 = a.h, ac2 = a.c, al2 = a.l, bh2 = b.h - ah2, bc2 = b.c - ac2, bl2 = b.l - al2;
      if (isNaN(bc2))
        bc2 = 0, ac2 = isNaN(ac2) ? b.c : ac2;
      if (isNaN(bh2))
        bh2 = 0, ah2 = isNaN(ah2) ? b.h : ah2;
      else if (bh2 > 180)
        bh2 -= 360;
      else if (bh2 < -180)
        bh2 += 360;
      return function(t2) {
        return d3_hcl_lab(ah2 + bh2 * t2, ac2 + bc2 * t2, al2 + bl2 * t2) + "";
      };
    }
    d32.interpolateHsl = d3_interpolateHsl;
    function d3_interpolateHsl(a, b) {
      a = d32.hsl(a);
      b = d32.hsl(b);
      var ah2 = a.h, as = a.s, al2 = a.l, bh2 = b.h - ah2, bs = b.s - as, bl2 = b.l - al2;
      if (isNaN(bs))
        bs = 0, as = isNaN(as) ? b.s : as;
      if (isNaN(bh2))
        bh2 = 0, ah2 = isNaN(ah2) ? b.h : ah2;
      else if (bh2 > 180)
        bh2 -= 360;
      else if (bh2 < -180)
        bh2 += 360;
      return function(t2) {
        return d3_hsl_rgb(ah2 + bh2 * t2, as + bs * t2, al2 + bl2 * t2) + "";
      };
    }
    d32.interpolateLab = d3_interpolateLab;
    function d3_interpolateLab(a, b) {
      a = d32.lab(a);
      b = d32.lab(b);
      var al2 = a.l, aa2 = a.a, ab2 = a.b, bl2 = b.l - al2, ba = b.a - aa2, bb2 = b.b - ab2;
      return function(t2) {
        return d3_lab_rgb(al2 + bl2 * t2, aa2 + ba * t2, ab2 + bb2 * t2) + "";
      };
    }
    d32.interpolateRound = d3_interpolateRound;
    function d3_interpolateRound(a, b) {
      b -= a;
      return function(t2) {
        return Math.round(a + b * t2);
      };
    }
    d32.transform = function(string) {
      var g2 = d3_document.createElementNS(d32.ns.prefix.svg, "g");
      return (d32.transform = function(string2) {
        if (string2 != null) {
          g2.setAttribute("transform", string2);
          var t2 = g2.transform.baseVal.consolidate();
        }
        return new d3_transform(t2 ? t2.matrix : d3_transformIdentity);
      })(string);
    };
    function d3_transform(m2) {
      var r0 = [m2.a, m2.b], r1 = [m2.c, m2.d], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
      if (r0[0] * r1[1] < r1[0] * r0[1]) {
        r0[0] *= -1;
        r0[1] *= -1;
        kx *= -1;
        kz *= -1;
      }
      this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
      this.translate = [m2.e, m2.f];
      this.scale = [kx, ky];
      this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
    }
    d3_transform.prototype.toString = function() {
      return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
    };
    function d3_transformDot(a, b) {
      return a[0] * b[0] + a[1] * b[1];
    }
    function d3_transformNormalize(a) {
      var k2 = Math.sqrt(d3_transformDot(a, a));
      if (k2) {
        a[0] /= k2;
        a[1] /= k2;
      }
      return k2;
    }
    function d3_transformCombine(a, b, k2) {
      a[0] += k2 * b[0];
      a[1] += k2 * b[1];
      return a;
    }
    var d3_transformIdentity = {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 0,
      f: 0
    };
    d32.interpolateTransform = d3_interpolateTransform;
    function d3_interpolateTransform(a, b) {
      var s = [], q2 = [], n2, A2 = d32.transform(a), B2 = d32.transform(b), ta2 = A2.translate, tb2 = B2.translate, ra2 = A2.rotate, rb2 = B2.rotate, wa2 = A2.skew, wb2 = B2.skew, ka2 = A2.scale, kb2 = B2.scale;
      if (ta2[0] != tb2[0] || ta2[1] != tb2[1]) {
        s.push("translate(", null, ",", null, ")");
        q2.push({
          i: 1,
          x: d3_interpolateNumber(ta2[0], tb2[0])
        }, {
          i: 3,
          x: d3_interpolateNumber(ta2[1], tb2[1])
        });
      } else if (tb2[0] || tb2[1]) {
        s.push("translate(" + tb2 + ")");
      } else {
        s.push("");
      }
      if (ra2 != rb2) {
        if (ra2 - rb2 > 180)
          rb2 += 360;
        else if (rb2 - ra2 > 180)
          ra2 += 360;
        q2.push({
          i: s.push(s.pop() + "rotate(", null, ")") - 2,
          x: d3_interpolateNumber(ra2, rb2)
        });
      } else if (rb2) {
        s.push(s.pop() + "rotate(" + rb2 + ")");
      }
      if (wa2 != wb2) {
        q2.push({
          i: s.push(s.pop() + "skewX(", null, ")") - 2,
          x: d3_interpolateNumber(wa2, wb2)
        });
      } else if (wb2) {
        s.push(s.pop() + "skewX(" + wb2 + ")");
      }
      if (ka2[0] != kb2[0] || ka2[1] != kb2[1]) {
        n2 = s.push(s.pop() + "scale(", null, ",", null, ")");
        q2.push({
          i: n2 - 4,
          x: d3_interpolateNumber(ka2[0], kb2[0])
        }, {
          i: n2 - 2,
          x: d3_interpolateNumber(ka2[1], kb2[1])
        });
      } else if (kb2[0] != 1 || kb2[1] != 1) {
        s.push(s.pop() + "scale(" + kb2 + ")");
      }
      n2 = q2.length;
      return function(t2) {
        var i = -1, o;
        while (++i < n2)
          s[(o = q2[i]).i] = o.x(t2);
        return s.join("");
      };
    }
    function d3_uninterpolateNumber(a, b) {
      b = (b -= a = +a) || 1 / b;
      return function(x2) {
        return (x2 - a) / b;
      };
    }
    function d3_uninterpolateClamp(a, b) {
      b = (b -= a = +a) || 1 / b;
      return function(x2) {
        return Math.max(0, Math.min(1, (x2 - a) / b));
      };
    }
    d32.layout = {};
    d32.layout.bundle = function() {
      return function(links) {
        var paths = [], i = -1, n2 = links.length;
        while (++i < n2)
          paths.push(d3_layout_bundlePath(links[i]));
        return paths;
      };
    };
    function d3_layout_bundlePath(link) {
      var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [start];
      while (start !== lca) {
        start = start.parent;
        points.push(start);
      }
      var k2 = points.length;
      while (end !== lca) {
        points.splice(k2, 0, end);
        end = end.parent;
      }
      return points;
    }
    function d3_layout_bundleAncestors(node) {
      var ancestors = [], parent = node.parent;
      while (parent != null) {
        ancestors.push(node);
        node = parent;
        parent = parent.parent;
      }
      ancestors.push(node);
      return ancestors;
    }
    function d3_layout_bundleLeastCommonAncestor(a, b) {
      if (a === b)
        return a;
      var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
      while (aNode === bNode) {
        sharedNode = aNode;
        aNode = aNodes.pop();
        bNode = bNodes.pop();
      }
      return sharedNode;
    }
    d32.layout.chord = function() {
      var chord = {}, chords, groups, matrix, n2, padding = 0, sortGroups, sortSubgroups, sortChords;
      function relayout() {
        var subgroups = {}, groupSums = [], groupIndex = d32.range(n2), subgroupIndex = [], k2, x2, x0, i, j;
        chords = [];
        groups = [];
        k2 = 0, i = -1;
        while (++i < n2) {
          x2 = 0, j = -1;
          while (++j < n2) {
            x2 += matrix[i][j];
          }
          groupSums.push(x2);
          subgroupIndex.push(d32.range(n2));
          k2 += x2;
        }
        if (sortGroups) {
          groupIndex.sort(function(a, b) {
            return sortGroups(groupSums[a], groupSums[b]);
          });
        }
        if (sortSubgroups) {
          subgroupIndex.forEach(function(d, i2) {
            d.sort(function(a, b) {
              return sortSubgroups(matrix[i2][a], matrix[i2][b]);
            });
          });
        }
        k2 = (τ - padding * n2) / k2;
        x2 = 0, i = -1;
        while (++i < n2) {
          x0 = x2, j = -1;
          while (++j < n2) {
            var di2 = groupIndex[i], dj2 = subgroupIndex[di2][j], v2 = matrix[di2][dj2], a0 = x2, a1 = x2 += v2 * k2;
            subgroups[di2 + "-" + dj2] = {
              index: di2,
              subindex: dj2,
              startAngle: a0,
              endAngle: a1,
              value: v2
            };
          }
          groups[di2] = {
            index: di2,
            startAngle: x0,
            endAngle: x2,
            value: (x2 - x0) / k2
          };
          x2 += padding;
        }
        i = -1;
        while (++i < n2) {
          j = i - 1;
          while (++j < n2) {
            var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
            if (source.value || target.value) {
              chords.push(source.value < target.value ? {
                source: target,
                target: source
              } : {
                source,
                target
              });
            }
          }
        }
        if (sortChords)
          resort();
      }
      function resort() {
        chords.sort(function(a, b) {
          return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
        });
      }
      chord.matrix = function(x2) {
        if (!arguments.length)
          return matrix;
        n2 = (matrix = x2) && matrix.length;
        chords = groups = null;
        return chord;
      };
      chord.padding = function(x2) {
        if (!arguments.length)
          return padding;
        padding = x2;
        chords = groups = null;
        return chord;
      };
      chord.sortGroups = function(x2) {
        if (!arguments.length)
          return sortGroups;
        sortGroups = x2;
        chords = groups = null;
        return chord;
      };
      chord.sortSubgroups = function(x2) {
        if (!arguments.length)
          return sortSubgroups;
        sortSubgroups = x2;
        chords = null;
        return chord;
      };
      chord.sortChords = function(x2) {
        if (!arguments.length)
          return sortChords;
        sortChords = x2;
        if (chords)
          resort();
        return chord;
      };
      chord.chords = function() {
        if (!chords)
          relayout();
        return chords;
      };
      chord.groups = function() {
        if (!groups)
          relayout();
        return groups;
      };
      return chord;
    };
    d32.layout.force = function() {
      var force = {}, event = d32.dispatch("start", "tick", "end"), size = [1, 1], drag, alpha, friction = 0.9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = 0.1, theta2 = 0.64, nodes = [], links = [], distances, strengths, charges;
      function repulse(node) {
        return function(quad, x1, _, x2) {
          if (quad.point !== node) {
            var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
            if (dw * dw / theta2 < dn) {
              if (dn < chargeDistance2) {
                var k2 = quad.charge / dn;
                node.px -= dx * k2;
                node.py -= dy * k2;
              }
              return true;
            }
            if (quad.point && dn && dn < chargeDistance2) {
              var k2 = quad.pointCharge / dn;
              node.px -= dx * k2;
              node.py -= dy * k2;
            }
          }
          return !quad.charge;
        };
      }
      force.tick = function() {
        if ((alpha *= 0.99) < 5e-3) {
          event.end({
            type: "end",
            alpha: alpha = 0
          });
          return true;
        }
        var n2 = nodes.length, m2 = links.length, q2, i, o, s, t2, l2, k2, x2, y2;
        for (i = 0; i < m2; ++i) {
          o = links[i];
          s = o.source;
          t2 = o.target;
          x2 = t2.x - s.x;
          y2 = t2.y - s.y;
          if (l2 = x2 * x2 + y2 * y2) {
            l2 = alpha * strengths[i] * ((l2 = Math.sqrt(l2)) - distances[i]) / l2;
            x2 *= l2;
            y2 *= l2;
            t2.x -= x2 * (k2 = s.weight / (t2.weight + s.weight));
            t2.y -= y2 * k2;
            s.x += x2 * (k2 = 1 - k2);
            s.y += y2 * k2;
          }
        }
        if (k2 = alpha * gravity) {
          x2 = size[0] / 2;
          y2 = size[1] / 2;
          i = -1;
          if (k2)
            while (++i < n2) {
              o = nodes[i];
              o.x += (x2 - o.x) * k2;
              o.y += (y2 - o.y) * k2;
            }
        }
        if (charge) {
          d3_layout_forceAccumulate(q2 = d32.geom.quadtree(nodes), alpha, charges);
          i = -1;
          while (++i < n2) {
            if (!(o = nodes[i]).fixed) {
              q2.visit(repulse(o));
            }
          }
        }
        i = -1;
        while (++i < n2) {
          o = nodes[i];
          if (o.fixed) {
            o.x = o.px;
            o.y = o.py;
          } else {
            o.x -= (o.px - (o.px = o.x)) * friction;
            o.y -= (o.py - (o.py = o.y)) * friction;
          }
        }
        event.tick({
          type: "tick",
          alpha
        });
      };
      force.nodes = function(x2) {
        if (!arguments.length)
          return nodes;
        nodes = x2;
        return force;
      };
      force.links = function(x2) {
        if (!arguments.length)
          return links;
        links = x2;
        return force;
      };
      force.size = function(x2) {
        if (!arguments.length)
          return size;
        size = x2;
        return force;
      };
      force.linkDistance = function(x2) {
        if (!arguments.length)
          return linkDistance;
        linkDistance = typeof x2 === "function" ? x2 : +x2;
        return force;
      };
      force.distance = force.linkDistance;
      force.linkStrength = function(x2) {
        if (!arguments.length)
          return linkStrength;
        linkStrength = typeof x2 === "function" ? x2 : +x2;
        return force;
      };
      force.friction = function(x2) {
        if (!arguments.length)
          return friction;
        friction = +x2;
        return force;
      };
      force.charge = function(x2) {
        if (!arguments.length)
          return charge;
        charge = typeof x2 === "function" ? x2 : +x2;
        return force;
      };
      force.chargeDistance = function(x2) {
        if (!arguments.length)
          return Math.sqrt(chargeDistance2);
        chargeDistance2 = x2 * x2;
        return force;
      };
      force.gravity = function(x2) {
        if (!arguments.length)
          return gravity;
        gravity = +x2;
        return force;
      };
      force.theta = function(x2) {
        if (!arguments.length)
          return Math.sqrt(theta2);
        theta2 = x2 * x2;
        return force;
      };
      force.alpha = function(x2) {
        if (!arguments.length)
          return alpha;
        x2 = +x2;
        if (alpha) {
          if (x2 > 0)
            alpha = x2;
          else
            alpha = 0;
        } else if (x2 > 0) {
          event.start({
            type: "start",
            alpha: alpha = x2
          });
          d32.timer(force.tick);
        }
        return force;
      };
      force.start = function() {
        var i, n2 = nodes.length, m2 = links.length, w2 = size[0], h = size[1], neighbors, o;
        for (i = 0; i < n2; ++i) {
          (o = nodes[i]).index = i;
          o.weight = 0;
        }
        for (i = 0; i < m2; ++i) {
          o = links[i];
          if (typeof o.source == "number")
            o.source = nodes[o.source];
          if (typeof o.target == "number")
            o.target = nodes[o.target];
          ++o.source.weight;
          ++o.target.weight;
        }
        for (i = 0; i < n2; ++i) {
          o = nodes[i];
          if (isNaN(o.x))
            o.x = position("x", w2);
          if (isNaN(o.y))
            o.y = position("y", h);
          if (isNaN(o.px))
            o.px = o.x;
          if (isNaN(o.py))
            o.py = o.y;
        }
        distances = [];
        if (typeof linkDistance === "function")
          for (i = 0; i < m2; ++i)
            distances[i] = +linkDistance.call(this, links[i], i);
        else
          for (i = 0; i < m2; ++i)
            distances[i] = linkDistance;
        strengths = [];
        if (typeof linkStrength === "function")
          for (i = 0; i < m2; ++i)
            strengths[i] = +linkStrength.call(this, links[i], i);
        else
          for (i = 0; i < m2; ++i)
            strengths[i] = linkStrength;
        charges = [];
        if (typeof charge === "function")
          for (i = 0; i < n2; ++i)
            charges[i] = +charge.call(this, nodes[i], i);
        else
          for (i = 0; i < n2; ++i)
            charges[i] = charge;
        function position(dimension, size2) {
          if (!neighbors) {
            neighbors = new Array(n2);
            for (j = 0; j < n2; ++j) {
              neighbors[j] = [];
            }
            for (j = 0; j < m2; ++j) {
              var o2 = links[j];
              neighbors[o2.source.index].push(o2.target);
              neighbors[o2.target.index].push(o2.source);
            }
          }
          var candidates = neighbors[i], j = -1, l2 = candidates.length, x2;
          while (++j < l2)
            if (!isNaN(x2 = candidates[j][dimension]))
              return x2;
          return Math.random() * size2;
        }
        return force.resume();
      };
      force.resume = function() {
        return force.alpha(0.1);
      };
      force.stop = function() {
        return force.alpha(0);
      };
      force.drag = function() {
        if (!drag)
          drag = d32.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
        if (!arguments.length)
          return drag;
        this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
      };
      function dragmove(d) {
        d.px = d32.event.x, d.py = d32.event.y;
        force.resume();
      }
      return d32.rebind(force, event, "on");
    };
    function d3_layout_forceDragstart(d) {
      d.fixed |= 2;
    }
    function d3_layout_forceDragend(d) {
      d.fixed &= ~6;
    }
    function d3_layout_forceMouseover(d) {
      d.fixed |= 4;
      d.px = d.x, d.py = d.y;
    }
    function d3_layout_forceMouseout(d) {
      d.fixed &= ~4;
    }
    function d3_layout_forceAccumulate(quad, alpha, charges) {
      var cx = 0, cy = 0;
      quad.charge = 0;
      if (!quad.leaf) {
        var nodes = quad.nodes, n2 = nodes.length, i = -1, c;
        while (++i < n2) {
          c = nodes[i];
          if (c == null)
            continue;
          d3_layout_forceAccumulate(c, alpha, charges);
          quad.charge += c.charge;
          cx += c.charge * c.cx;
          cy += c.charge * c.cy;
        }
      }
      if (quad.point) {
        if (!quad.leaf) {
          quad.point.x += Math.random() - 0.5;
          quad.point.y += Math.random() - 0.5;
        }
        var k2 = alpha * charges[quad.point.index];
        quad.charge += quad.pointCharge = k2;
        cx += k2 * quad.point.x;
        cy += k2 * quad.point.y;
      }
      quad.cx = cx / quad.charge;
      quad.cy = cy / quad.charge;
    }
    var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
    d32.layout.hierarchy = function() {
      var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
      function hierarchy(root) {
        var stack = [root], nodes = [], node;
        root.depth = 0;
        while ((node = stack.pop()) != null) {
          nodes.push(node);
          if ((childs = children.call(hierarchy, node, node.depth)) && (n2 = childs.length)) {
            var n2, childs, child;
            while (--n2 >= 0) {
              stack.push(child = childs[n2]);
              child.parent = node;
              child.depth = node.depth + 1;
            }
            if (value)
              node.value = 0;
            node.children = childs;
          } else {
            if (value)
              node.value = +value.call(hierarchy, node, node.depth) || 0;
            delete node.children;
          }
        }
        d3_layout_hierarchyVisitAfter(root, function(node2) {
          var childs2, parent;
          if (sort && (childs2 = node2.children))
            childs2.sort(sort);
          if (value && (parent = node2.parent))
            parent.value += node2.value;
        });
        return nodes;
      }
      hierarchy.sort = function(x2) {
        if (!arguments.length)
          return sort;
        sort = x2;
        return hierarchy;
      };
      hierarchy.children = function(x2) {
        if (!arguments.length)
          return children;
        children = x2;
        return hierarchy;
      };
      hierarchy.value = function(x2) {
        if (!arguments.length)
          return value;
        value = x2;
        return hierarchy;
      };
      hierarchy.revalue = function(root) {
        if (value) {
          d3_layout_hierarchyVisitBefore(root, function(node) {
            if (node.children)
              node.value = 0;
          });
          d3_layout_hierarchyVisitAfter(root, function(node) {
            var parent;
            if (!node.children)
              node.value = +value.call(hierarchy, node, node.depth) || 0;
            if (parent = node.parent)
              parent.value += node.value;
          });
        }
        return root;
      };
      return hierarchy;
    };
    function d3_layout_hierarchyRebind(object, hierarchy) {
      d32.rebind(object, hierarchy, "sort", "children", "value");
      object.nodes = object;
      object.links = d3_layout_hierarchyLinks;
      return object;
    }
    function d3_layout_hierarchyVisitBefore(node, callback) {
      var nodes = [node];
      while ((node = nodes.pop()) != null) {
        callback(node);
        if ((children = node.children) && (n2 = children.length)) {
          var n2, children;
          while (--n2 >= 0)
            nodes.push(children[n2]);
        }
      }
    }
    function d3_layout_hierarchyVisitAfter(node, callback) {
      var nodes = [node], nodes2 = [];
      while ((node = nodes.pop()) != null) {
        nodes2.push(node);
        if ((children = node.children) && (n2 = children.length)) {
          var i = -1, n2, children;
          while (++i < n2)
            nodes.push(children[i]);
        }
      }
      while ((node = nodes2.pop()) != null) {
        callback(node);
      }
    }
    function d3_layout_hierarchyChildren(d) {
      return d.children;
    }
    function d3_layout_hierarchyValue(d) {
      return d.value;
    }
    function d3_layout_hierarchySort(a, b) {
      return b.value - a.value;
    }
    function d3_layout_hierarchyLinks(nodes) {
      return d32.merge(nodes.map(function(parent) {
        return (parent.children || []).map(function(child) {
          return {
            source: parent,
            target: child
          };
        });
      }));
    }
    d32.layout.partition = function() {
      var hierarchy = d32.layout.hierarchy(), size = [1, 1];
      function position(node, x2, dx, dy) {
        var children = node.children;
        node.x = x2;
        node.y = node.depth * dy;
        node.dx = dx;
        node.dy = dy;
        if (children && (n2 = children.length)) {
          var i = -1, n2, c, d;
          dx = node.value ? dx / node.value : 0;
          while (++i < n2) {
            position(c = children[i], x2, d = c.value * dx, dy);
            x2 += d;
          }
        }
      }
      function depth(node) {
        var children = node.children, d = 0;
        if (children && (n2 = children.length)) {
          var i = -1, n2;
          while (++i < n2)
            d = Math.max(d, depth(children[i]));
        }
        return 1 + d;
      }
      function partition(d, i) {
        var nodes = hierarchy.call(this, d, i);
        position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
        return nodes;
      }
      partition.size = function(x2) {
        if (!arguments.length)
          return size;
        size = x2;
        return partition;
      };
      return d3_layout_hierarchyRebind(partition, hierarchy);
    };
    d32.layout.pie = function() {
      var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
      function pie(data) {
        var n2 = data.length, values = data.map(function(d, i) {
          return +value.call(pie, d, i);
        }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da2 = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p2 = Math.min(Math.abs(da2) / n2, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa2 = p2 * (da2 < 0 ? -1 : 1), k2 = (da2 - n2 * pa2) / d32.sum(values), index = d32.range(n2), arcs = [], v2;
        if (sort != null)
          index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
            return values[j] - values[i];
          } : function(i, j) {
            return sort(data[i], data[j]);
          });
        index.forEach(function(i) {
          arcs[i] = {
            data: data[i],
            value: v2 = values[i],
            startAngle: a,
            endAngle: a += v2 * k2 + pa2,
            padAngle: p2
          };
        });
        return arcs;
      }
      pie.value = function(_) {
        if (!arguments.length)
          return value;
        value = _;
        return pie;
      };
      pie.sort = function(_) {
        if (!arguments.length)
          return sort;
        sort = _;
        return pie;
      };
      pie.startAngle = function(_) {
        if (!arguments.length)
          return startAngle;
        startAngle = _;
        return pie;
      };
      pie.endAngle = function(_) {
        if (!arguments.length)
          return endAngle;
        endAngle = _;
        return pie;
      };
      pie.padAngle = function(_) {
        if (!arguments.length)
          return padAngle;
        padAngle = _;
        return pie;
      };
      return pie;
    };
    var d3_layout_pieSortByValue = {};
    d32.layout.stack = function() {
      var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x2 = d3_layout_stackX, y2 = d3_layout_stackY;
      function stack(data, index) {
        if (!(n2 = data.length))
          return data;
        var series = data.map(function(d, i2) {
          return values.call(stack, d, i2);
        });
        var points = series.map(function(d) {
          return d.map(function(v2, i2) {
            return [x2.call(stack, v2, i2), y2.call(stack, v2, i2)];
          });
        });
        var orders = order.call(stack, points, index);
        series = d32.permute(series, orders);
        points = d32.permute(points, orders);
        var offsets = offset.call(stack, points, index);
        var m2 = series[0].length, n2, i, j, o;
        for (j = 0; j < m2; ++j) {
          out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
          for (i = 1; i < n2; ++i) {
            out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
          }
        }
        return data;
      }
      stack.values = function(x3) {
        if (!arguments.length)
          return values;
        values = x3;
        return stack;
      };
      stack.order = function(x3) {
        if (!arguments.length)
          return order;
        order = typeof x3 === "function" ? x3 : d3_layout_stackOrders.get(x3) || d3_layout_stackOrderDefault;
        return stack;
      };
      stack.offset = function(x3) {
        if (!arguments.length)
          return offset;
        offset = typeof x3 === "function" ? x3 : d3_layout_stackOffsets.get(x3) || d3_layout_stackOffsetZero;
        return stack;
      };
      stack.x = function(z2) {
        if (!arguments.length)
          return x2;
        x2 = z2;
        return stack;
      };
      stack.y = function(z2) {
        if (!arguments.length)
          return y2;
        y2 = z2;
        return stack;
      };
      stack.out = function(z2) {
        if (!arguments.length)
          return out;
        out = z2;
        return stack;
      };
      return stack;
    };
    function d3_layout_stackX(d) {
      return d.x;
    }
    function d3_layout_stackY(d) {
      return d.y;
    }
    function d3_layout_stackOut(d, y0, y2) {
      d.y0 = y0;
      d.y = y2;
    }
    var d3_layout_stackOrders = d32.map({
      "inside-out": function(data) {
        var n2 = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d32.range(n2).sort(function(a, b) {
          return max[a] - max[b];
        }), top = 0, bottom = 0, tops = [], bottoms = [];
        for (i = 0; i < n2; ++i) {
          j = index[i];
          if (top < bottom) {
            top += sums[j];
            tops.push(j);
          } else {
            bottom += sums[j];
            bottoms.push(j);
          }
        }
        return bottoms.reverse().concat(tops);
      },
      reverse: function(data) {
        return d32.range(data.length).reverse();
      },
      "default": d3_layout_stackOrderDefault
    });
    var d3_layout_stackOffsets = d32.map({
      silhouette: function(data) {
        var n2 = data.length, m2 = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
        for (j = 0; j < m2; ++j) {
          for (i = 0, o = 0; i < n2; i++)
            o += data[i][j][1];
          if (o > max)
            max = o;
          sums.push(o);
        }
        for (j = 0; j < m2; ++j) {
          y0[j] = (max - sums[j]) / 2;
        }
        return y0;
      },
      wiggle: function(data) {
        var n2 = data.length, x2 = data[0], m2 = x2.length, i, j, k2, s1, s2, s3, dx, o, o0, y0 = [];
        y0[0] = o = o0 = 0;
        for (j = 1; j < m2; ++j) {
          for (i = 0, s1 = 0; i < n2; ++i)
            s1 += data[i][j][1];
          for (i = 0, s2 = 0, dx = x2[j][0] - x2[j - 1][0]; i < n2; ++i) {
            for (k2 = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k2 < i; ++k2) {
              s3 += (data[k2][j][1] - data[k2][j - 1][1]) / dx;
            }
            s2 += s3 * data[i][j][1];
          }
          y0[j] = o -= s1 ? s2 / s1 * dx : 0;
          if (o < o0)
            o0 = o;
        }
        for (j = 0; j < m2; ++j)
          y0[j] -= o0;
        return y0;
      },
      expand: function(data) {
        var n2 = data.length, m2 = data[0].length, k2 = 1 / n2, i, j, o, y0 = [];
        for (j = 0; j < m2; ++j) {
          for (i = 0, o = 0; i < n2; i++)
            o += data[i][j][1];
          if (o)
            for (i = 0; i < n2; i++)
              data[i][j][1] /= o;
          else
            for (i = 0; i < n2; i++)
              data[i][j][1] = k2;
        }
        for (j = 0; j < m2; ++j)
          y0[j] = 0;
        return y0;
      },
      zero: d3_layout_stackOffsetZero
    });
    function d3_layout_stackOrderDefault(data) {
      return d32.range(data.length);
    }
    function d3_layout_stackOffsetZero(data) {
      var j = -1, m2 = data[0].length, y0 = [];
      while (++j < m2)
        y0[j] = 0;
      return y0;
    }
    function d3_layout_stackMaxIndex(array) {
      var i = 1, j = 0, v2 = array[0][1], k2, n2 = array.length;
      for (; i < n2; ++i) {
        if ((k2 = array[i][1]) > v2) {
          j = i;
          v2 = k2;
        }
      }
      return j;
    }
    function d3_layout_stackReduceSum(d) {
      return d.reduce(d3_layout_stackSum, 0);
    }
    function d3_layout_stackSum(p2, d) {
      return p2 + d[1];
    }
    d32.layout.histogram = function() {
      var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
      function histogram(data, i) {
        var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n2 = values.length, m2 = thresholds.length - 1, k2 = frequency ? 1 : 1 / n2, x2;
        while (++i < m2) {
          bin = bins[i] = [];
          bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
          bin.y = 0;
        }
        if (m2 > 0) {
          i = -1;
          while (++i < n2) {
            x2 = values[i];
            if (x2 >= range[0] && x2 <= range[1]) {
              bin = bins[d32.bisect(thresholds, x2, 1, m2) - 1];
              bin.y += k2;
              bin.push(data[i]);
            }
          }
        }
        return bins;
      }
      histogram.value = function(x2) {
        if (!arguments.length)
          return valuer;
        valuer = x2;
        return histogram;
      };
      histogram.range = function(x2) {
        if (!arguments.length)
          return ranger;
        ranger = d3_functor(x2);
        return histogram;
      };
      histogram.bins = function(x2) {
        if (!arguments.length)
          return binner;
        binner = typeof x2 === "number" ? function(range) {
          return d3_layout_histogramBinFixed(range, x2);
        } : d3_functor(x2);
        return histogram;
      };
      histogram.frequency = function(x2) {
        if (!arguments.length)
          return frequency;
        frequency = !!x2;
        return histogram;
      };
      return histogram;
    };
    function d3_layout_histogramBinSturges(range, values) {
      return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
    }
    function d3_layout_histogramBinFixed(range, n2) {
      var x2 = -1, b = +range[0], m2 = (range[1] - b) / n2, f2 = [];
      while (++x2 <= n2)
        f2[x2] = m2 * x2 + b;
      return f2;
    }
    function d3_layout_histogramRange(values) {
      return [d32.min(values), d32.max(values)];
    }
    d32.layout.pack = function() {
      var hierarchy = d32.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [1, 1], radius;
      function pack(d, i) {
        var nodes = hierarchy.call(this, d, i), root = nodes[0], w2 = size[0], h = size[1], r2 = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
          return radius;
        };
        root.x = root.y = 0;
        d3_layout_hierarchyVisitAfter(root, function(d2) {
          d2.r = +r2(d2.value);
        });
        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
        if (padding) {
          var dr = padding * (radius ? 1 : Math.max(2 * root.r / w2, 2 * root.r / h)) / 2;
          d3_layout_hierarchyVisitAfter(root, function(d2) {
            d2.r += dr;
          });
          d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
          d3_layout_hierarchyVisitAfter(root, function(d2) {
            d2.r -= dr;
          });
        }
        d3_layout_packTransform(root, w2 / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w2, 2 * root.r / h));
        return nodes;
      }
      pack.size = function(_) {
        if (!arguments.length)
          return size;
        size = _;
        return pack;
      };
      pack.radius = function(_) {
        if (!arguments.length)
          return radius;
        radius = _ == null || typeof _ === "function" ? _ : +_;
        return pack;
      };
      pack.padding = function(_) {
        if (!arguments.length)
          return padding;
        padding = +_;
        return pack;
      };
      return d3_layout_hierarchyRebind(pack, hierarchy);
    };
    function d3_layout_packSort(a, b) {
      return a.value - b.value;
    }
    function d3_layout_packInsert(a, b) {
      var c = a._pack_next;
      a._pack_next = b;
      b._pack_prev = a;
      b._pack_next = c;
      c._pack_prev = b;
    }
    function d3_layout_packSplice(a, b) {
      a._pack_next = b;
      b._pack_prev = a;
    }
    function d3_layout_packIntersects(a, b) {
      var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
      return 0.999 * dr * dr > dx * dx + dy * dy;
    }
    function d3_layout_packSiblings(node) {
      if (!(nodes = node.children) || !(n2 = nodes.length))
        return;
      var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k2, n2;
      function bound(node2) {
        xMin = Math.min(node2.x - node2.r, xMin);
        xMax = Math.max(node2.x + node2.r, xMax);
        yMin = Math.min(node2.y - node2.r, yMin);
        yMax = Math.max(node2.y + node2.r, yMax);
      }
      nodes.forEach(d3_layout_packLink);
      a = nodes[0];
      a.x = -a.r;
      a.y = 0;
      bound(a);
      if (n2 > 1) {
        b = nodes[1];
        b.x = b.r;
        b.y = 0;
        bound(b);
        if (n2 > 2) {
          c = nodes[2];
          d3_layout_packPlace(a, b, c);
          bound(c);
          d3_layout_packInsert(a, c);
          a._pack_prev = c;
          d3_layout_packInsert(c, b);
          b = a._pack_next;
          for (i = 3; i < n2; i++) {
            d3_layout_packPlace(a, b, c = nodes[i]);
            var isect = 0, s1 = 1, s2 = 1;
            for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
              if (d3_layout_packIntersects(j, c)) {
                isect = 1;
                break;
              }
            }
            if (isect == 1) {
              for (k2 = a._pack_prev; k2 !== j._pack_prev; k2 = k2._pack_prev, s2++) {
                if (d3_layout_packIntersects(k2, c)) {
                  break;
                }
              }
            }
            if (isect) {
              if (s1 < s2 || s1 == s2 && b.r < a.r)
                d3_layout_packSplice(a, b = j);
              else
                d3_layout_packSplice(a = k2, b);
              i--;
            } else {
              d3_layout_packInsert(a, c);
              b = c;
              bound(c);
            }
          }
        }
      }
      var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
      for (i = 0; i < n2; i++) {
        c = nodes[i];
        c.x -= cx;
        c.y -= cy;
        cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
      }
      node.r = cr;
      nodes.forEach(d3_layout_packUnlink);
    }
    function d3_layout_packLink(node) {
      node._pack_next = node._pack_prev = node;
    }
    function d3_layout_packUnlink(node) {
      delete node._pack_next;
      delete node._pack_prev;
    }
    function d3_layout_packTransform(node, x2, y2, k2) {
      var children = node.children;
      node.x = x2 += k2 * node.x;
      node.y = y2 += k2 * node.y;
      node.r *= k2;
      if (children) {
        var i = -1, n2 = children.length;
        while (++i < n2)
          d3_layout_packTransform(children[i], x2, y2, k2);
      }
    }
    function d3_layout_packPlace(a, b, c) {
      var db2 = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
      if (db2 && (dx || dy)) {
        var da2 = b.r + c.r, dc2 = dx * dx + dy * dy;
        da2 *= da2;
        db2 *= db2;
        var x2 = 0.5 + (db2 - da2) / (2 * dc2), y2 = Math.sqrt(Math.max(0, 2 * da2 * (db2 + dc2) - (db2 -= dc2) * db2 - da2 * da2)) / (2 * dc2);
        c.x = a.x + x2 * dx + y2 * dy;
        c.y = a.y + x2 * dy - y2 * dx;
      } else {
        c.x = a.x + db2;
        c.y = a.y;
      }
    }
    d32.layout.tree = function() {
      var hierarchy = d32.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [1, 1], nodeSize = null;
      function tree(d, i) {
        var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
        d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
        d3_layout_hierarchyVisitBefore(root1, secondWalk);
        if (nodeSize)
          d3_layout_hierarchyVisitBefore(root0, sizeNode);
        else {
          var left = root0, right = root0, bottom = root0;
          d3_layout_hierarchyVisitBefore(root0, function(node) {
            if (node.x < left.x)
              left = node;
            if (node.x > right.x)
              right = node;
            if (node.depth > bottom.depth)
              bottom = node;
          });
          var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
          d3_layout_hierarchyVisitBefore(root0, function(node) {
            node.x = (node.x + tx) * kx;
            node.y = node.depth * ky;
          });
        }
        return nodes;
      }
      function wrapTree(root0) {
        var root1 = {
          A: null,
          children: [root0]
        }, queue = [root1], node1;
        while ((node1 = queue.pop()) != null) {
          for (var children = node1.children, child, i = 0, n2 = children.length; i < n2; ++i) {
            queue.push((children[i] = child = {
              _: children[i],
              parent: node1,
              children: (child = children[i].children) && child.slice() || [],
              A: null,
              a: null,
              z: 0,
              m: 0,
              c: 0,
              s: 0,
              t: null,
              i
            }).a = child);
          }
        }
        return root1.children[0];
      }
      function firstWalk(v2) {
        var children = v2.children, siblings = v2.parent.children, w2 = v2.i ? siblings[v2.i - 1] : null;
        if (children.length) {
          d3_layout_treeShift(v2);
          var midpoint = (children[0].z + children[children.length - 1].z) / 2;
          if (w2) {
            v2.z = w2.z + separation(v2._, w2._);
            v2.m = v2.z - midpoint;
          } else {
            v2.z = midpoint;
          }
        } else if (w2) {
          v2.z = w2.z + separation(v2._, w2._);
        }
        v2.parent.A = apportion(v2, w2, v2.parent.A || siblings[0]);
      }
      function secondWalk(v2) {
        v2._.x = v2.z + v2.parent.m;
        v2.m += v2.parent.m;
      }
      function apportion(v2, w2, ancestor) {
        if (w2) {
          var vip = v2, vop = v2, vim = w2, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
          while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
            vom = d3_layout_treeLeft(vom);
            vop = d3_layout_treeRight(vop);
            vop.a = v2;
            shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
            if (shift > 0) {
              d3_layout_treeMove(d3_layout_treeAncestor(vim, v2, ancestor), v2, shift);
              sip += shift;
              sop += shift;
            }
            sim += vim.m;
            sip += vip.m;
            som += vom.m;
            sop += vop.m;
          }
          if (vim && !d3_layout_treeRight(vop)) {
            vop.t = vim;
            vop.m += sim - sop;
          }
          if (vip && !d3_layout_treeLeft(vom)) {
            vom.t = vip;
            vom.m += sip - som;
            ancestor = v2;
          }
        }
        return ancestor;
      }
      function sizeNode(node) {
        node.x *= size[0];
        node.y = node.depth * size[1];
      }
      tree.separation = function(x2) {
        if (!arguments.length)
          return separation;
        separation = x2;
        return tree;
      };
      tree.size = function(x2) {
        if (!arguments.length)
          return nodeSize ? null : size;
        nodeSize = (size = x2) == null ? sizeNode : null;
        return tree;
      };
      tree.nodeSize = function(x2) {
        if (!arguments.length)
          return nodeSize ? size : null;
        nodeSize = (size = x2) == null ? null : sizeNode;
        return tree;
      };
      return d3_layout_hierarchyRebind(tree, hierarchy);
    };
    function d3_layout_treeSeparation(a, b) {
      return a.parent == b.parent ? 1 : 2;
    }
    function d3_layout_treeLeft(v2) {
      var children = v2.children;
      return children.length ? children[0] : v2.t;
    }
    function d3_layout_treeRight(v2) {
      var children = v2.children, n2;
      return (n2 = children.length) ? children[n2 - 1] : v2.t;
    }
    function d3_layout_treeMove(wm, wp, shift) {
      var change = shift / (wp.i - wm.i);
      wp.c -= change;
      wp.s += shift;
      wm.c += change;
      wp.z += shift;
      wp.m += shift;
    }
    function d3_layout_treeShift(v2) {
      var shift = 0, change = 0, children = v2.children, i = children.length, w2;
      while (--i >= 0) {
        w2 = children[i];
        w2.z += shift;
        w2.m += shift;
        shift += w2.s + (change += w2.c);
      }
    }
    function d3_layout_treeAncestor(vim, v2, ancestor) {
      return vim.a.parent === v2.parent ? vim.a : ancestor;
    }
    d32.layout.cluster = function() {
      var hierarchy = d32.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [1, 1], nodeSize = false;
      function cluster(d, i) {
        var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x2 = 0;
        d3_layout_hierarchyVisitAfter(root, function(node) {
          var children = node.children;
          if (children && children.length) {
            node.x = d3_layout_clusterX(children);
            node.y = d3_layout_clusterY(children);
          } else {
            node.x = previousNode ? x2 += separation(node, previousNode) : 0;
            node.y = 0;
            previousNode = node;
          }
        });
        var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
        d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
          node.x = (node.x - root.x) * size[0];
          node.y = (root.y - node.y) * size[1];
        } : function(node) {
          node.x = (node.x - x0) / (x1 - x0) * size[0];
          node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
        });
        return nodes;
      }
      cluster.separation = function(x2) {
        if (!arguments.length)
          return separation;
        separation = x2;
        return cluster;
      };
      cluster.size = function(x2) {
        if (!arguments.length)
          return nodeSize ? null : size;
        nodeSize = (size = x2) == null;
        return cluster;
      };
      cluster.nodeSize = function(x2) {
        if (!arguments.length)
          return nodeSize ? size : null;
        nodeSize = (size = x2) != null;
        return cluster;
      };
      return d3_layout_hierarchyRebind(cluster, hierarchy);
    };
    function d3_layout_clusterY(children) {
      return 1 + d32.max(children, function(child) {
        return child.y;
      });
    }
    function d3_layout_clusterX(children) {
      return children.reduce(function(x2, child) {
        return x2 + child.x;
      }, 0) / children.length;
    }
    function d3_layout_clusterLeft(node) {
      var children = node.children;
      return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
    }
    function d3_layout_clusterRight(node) {
      var children = node.children, n2;
      return children && (n2 = children.length) ? d3_layout_clusterRight(children[n2 - 1]) : node;
    }
    d32.layout.treemap = function() {
      var hierarchy = d32.layout.hierarchy(), round = Math.round, size = [1, 1], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = 0.5 * (1 + Math.sqrt(5));
      function scale(children, k2) {
        var i = -1, n2 = children.length, child, area;
        while (++i < n2) {
          area = (child = children[i]).value * (k2 < 0 ? 0 : k2);
          child.area = isNaN(area) || area <= 0 ? 0 : area;
        }
      }
      function squarify(node) {
        var children = node.children;
        if (children && children.length) {
          var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u2 = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n2;
          scale(remaining, rect.dx * rect.dy / node.value);
          row.area = 0;
          while ((n2 = remaining.length) > 0) {
            row.push(child = remaining[n2 - 1]);
            row.area += child.area;
            if (mode !== "squarify" || (score = worst(row, u2)) <= best) {
              remaining.pop();
              best = score;
            } else {
              row.area -= row.pop().area;
              position(row, u2, rect, false);
              u2 = Math.min(rect.dx, rect.dy);
              row.length = row.area = 0;
              best = Infinity;
            }
          }
          if (row.length) {
            position(row, u2, rect, true);
            row.length = row.area = 0;
          }
          children.forEach(squarify);
        }
      }
      function stickify(node) {
        var children = node.children;
        if (children && children.length) {
          var rect = pad(node), remaining = children.slice(), child, row = [];
          scale(remaining, rect.dx * rect.dy / node.value);
          row.area = 0;
          while (child = remaining.pop()) {
            row.push(child);
            row.area += child.area;
            if (child.z != null) {
              position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
              row.length = row.area = 0;
            }
          }
          children.forEach(stickify);
        }
      }
      function worst(row, u2) {
        var s = row.area, r2, rmax = 0, rmin = Infinity, i = -1, n2 = row.length;
        while (++i < n2) {
          if (!(r2 = row[i].area))
            continue;
          if (r2 < rmin)
            rmin = r2;
          if (r2 > rmax)
            rmax = r2;
        }
        s *= s;
        u2 *= u2;
        return s ? Math.max(u2 * rmax * ratio / s, s / (u2 * rmin * ratio)) : Infinity;
      }
      function position(row, u2, rect, flush) {
        var i = -1, n2 = row.length, x2 = rect.x, y2 = rect.y, v2 = u2 ? round(row.area / u2) : 0, o;
        if (u2 == rect.dx) {
          if (flush || v2 > rect.dy)
            v2 = rect.dy;
          while (++i < n2) {
            o = row[i];
            o.x = x2;
            o.y = y2;
            o.dy = v2;
            x2 += o.dx = Math.min(rect.x + rect.dx - x2, v2 ? round(o.area / v2) : 0);
          }
          o.z = true;
          o.dx += rect.x + rect.dx - x2;
          rect.y += v2;
          rect.dy -= v2;
        } else {
          if (flush || v2 > rect.dx)
            v2 = rect.dx;
          while (++i < n2) {
            o = row[i];
            o.x = x2;
            o.y = y2;
            o.dx = v2;
            y2 += o.dy = Math.min(rect.y + rect.dy - y2, v2 ? round(o.area / v2) : 0);
          }
          o.z = false;
          o.dy += rect.y + rect.dy - y2;
          rect.x += v2;
          rect.dx -= v2;
        }
      }
      function treemap(d) {
        var nodes = stickies || hierarchy(d), root = nodes[0];
        root.x = 0;
        root.y = 0;
        root.dx = size[0];
        root.dy = size[1];
        if (stickies)
          hierarchy.revalue(root);
        scale([root], root.dx * root.dy / root.value);
        (stickies ? stickify : squarify)(root);
        if (sticky)
          stickies = nodes;
        return nodes;
      }
      treemap.size = function(x2) {
        if (!arguments.length)
          return size;
        size = x2;
        return treemap;
      };
      treemap.padding = function(x2) {
        if (!arguments.length)
          return padding;
        function padFunction(node) {
          var p2 = x2.call(treemap, node, node.depth);
          return p2 == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p2 === "number" ? [p2, p2, p2, p2] : p2);
        }
        function padConstant(node) {
          return d3_layout_treemapPad(node, x2);
        }
        var type;
        pad = (padding = x2) == null ? d3_layout_treemapPadNull : (type = typeof x2) === "function" ? padFunction : type === "number" ? (x2 = [x2, x2, x2, x2], padConstant) : padConstant;
        return treemap;
      };
      treemap.round = function(x2) {
        if (!arguments.length)
          return round != Number;
        round = x2 ? Math.round : Number;
        return treemap;
      };
      treemap.sticky = function(x2) {
        if (!arguments.length)
          return sticky;
        sticky = x2;
        stickies = null;
        return treemap;
      };
      treemap.ratio = function(x2) {
        if (!arguments.length)
          return ratio;
        ratio = x2;
        return treemap;
      };
      treemap.mode = function(x2) {
        if (!arguments.length)
          return mode;
        mode = x2 + "";
        return treemap;
      };
      return d3_layout_hierarchyRebind(treemap, hierarchy);
    };
    function d3_layout_treemapPadNull(node) {
      return {
        x: node.x,
        y: node.y,
        dx: node.dx,
        dy: node.dy
      };
    }
    function d3_layout_treemapPad(node, padding) {
      var x2 = node.x + padding[3], y2 = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
      if (dx < 0) {
        x2 += dx / 2;
        dx = 0;
      }
      if (dy < 0) {
        y2 += dy / 2;
        dy = 0;
      }
      return {
        x: x2,
        y: y2,
        dx,
        dy
      };
    }
    d32.random = {
      normal: function(µ, σ) {
        var n2 = arguments.length;
        if (n2 < 2)
          σ = 1;
        if (n2 < 1)
          µ = 0;
        return function() {
          var x2, y2, r2;
          do {
            x2 = Math.random() * 2 - 1;
            y2 = Math.random() * 2 - 1;
            r2 = x2 * x2 + y2 * y2;
          } while (!r2 || r2 > 1);
          return µ + σ * x2 * Math.sqrt(-2 * Math.log(r2) / r2);
        };
      },
      logNormal: function() {
        var random = d32.random.normal.apply(d32, arguments);
        return function() {
          return Math.exp(random());
        };
      },
      bates: function(m2) {
        var random = d32.random.irwinHall(m2);
        return function() {
          return random() / m2;
        };
      },
      irwinHall: function(m2) {
        return function() {
          for (var s = 0, j = 0; j < m2; j++)
            s += Math.random();
          return s;
        };
      }
    };
    d32.scale = {};
    function d3_scaleExtent(domain) {
      var start = domain[0], stop = domain[domain.length - 1];
      return start < stop ? [start, stop] : [stop, start];
    }
    function d3_scaleRange(scale) {
      return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
    }
    function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
      var u2 = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
      return function(x2) {
        return i(u2(x2));
      };
    }
    function d3_scale_nice(domain, nice) {
      var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
      if (x1 < x0) {
        dx = i0, i0 = i1, i1 = dx;
        dx = x0, x0 = x1, x1 = dx;
      }
      domain[i0] = nice.floor(x0);
      domain[i1] = nice.ceil(x1);
      return domain;
    }
    function d3_scale_niceStep(step) {
      return step ? {
        floor: function(x2) {
          return Math.floor(x2 / step) * step;
        },
        ceil: function(x2) {
          return Math.ceil(x2 / step) * step;
        }
      } : d3_scale_niceIdentity;
    }
    var d3_scale_niceIdentity = {
      floor: d3_identity,
      ceil: d3_identity
    };
    function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
      var u2 = [], i = [], j = 0, k2 = Math.min(domain.length, range.length) - 1;
      if (domain[k2] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
      }
      while (++j <= k2) {
        u2.push(uninterpolate(domain[j - 1], domain[j]));
        i.push(interpolate(range[j - 1], range[j]));
      }
      return function(x2) {
        var j2 = d32.bisect(domain, x2, 1, k2) - 1;
        return i[j2](u2[j2](x2));
      };
    }
    d32.scale.linear = function() {
      return d3_scale_linear([0, 1], [0, 1], d3_interpolate, false);
    };
    function d3_scale_linear(domain, range, interpolate, clamp) {
      var output, input;
      function rescale() {
        var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
        output = linear(domain, range, uninterpolate, interpolate);
        input = linear(range, domain, uninterpolate, d3_interpolate);
        return scale;
      }
      function scale(x2) {
        return output(x2);
      }
      scale.invert = function(y2) {
        return input(y2);
      };
      scale.domain = function(x2) {
        if (!arguments.length)
          return domain;
        domain = x2.map(Number);
        return rescale();
      };
      scale.range = function(x2) {
        if (!arguments.length)
          return range;
        range = x2;
        return rescale();
      };
      scale.rangeRound = function(x2) {
        return scale.range(x2).interpolate(d3_interpolateRound);
      };
      scale.clamp = function(x2) {
        if (!arguments.length)
          return clamp;
        clamp = x2;
        return rescale();
      };
      scale.interpolate = function(x2) {
        if (!arguments.length)
          return interpolate;
        interpolate = x2;
        return rescale();
      };
      scale.ticks = function(m2) {
        return d3_scale_linearTicks(domain, m2);
      };
      scale.tickFormat = function(m2, format) {
        return d3_scale_linearTickFormat(domain, m2, format);
      };
      scale.nice = function(m2) {
        d3_scale_linearNice(domain, m2);
        return rescale();
      };
      scale.copy = function() {
        return d3_scale_linear(domain, range, interpolate, clamp);
      };
      return rescale();
    }
    function d3_scale_linearRebind(scale, linear) {
      return d32.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
    }
    function d3_scale_linearNice(domain, m2) {
      return d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m2)[2]));
    }
    function d3_scale_linearTickRange(domain, m2) {
      if (m2 == null)
        m2 = 10;
      var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m2) / Math.LN10)), err = m2 / span * step;
      if (err <= 0.15)
        step *= 10;
      else if (err <= 0.35)
        step *= 5;
      else if (err <= 0.75)
        step *= 2;
      extent[0] = Math.ceil(extent[0] / step) * step;
      extent[1] = Math.floor(extent[1] / step) * step + step * 0.5;
      extent[2] = step;
      return extent;
    }
    function d3_scale_linearTicks(domain, m2) {
      return d32.range.apply(d32, d3_scale_linearTickRange(domain, m2));
    }
    function d3_scale_linearTickFormat(domain, m2, format) {
      var range = d3_scale_linearTickRange(domain, m2);
      if (format) {
        var match = d3_format_re.exec(format);
        match.shift();
        if (match[8] === "s") {
          var prefix = d32.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
          if (!match[7])
            match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
          match[8] = "f";
          format = d32.format(match.join(""));
          return function(d) {
            return format(prefix.scale(d)) + prefix.symbol;
          };
        }
        if (!match[7])
          match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
        format = match.join("");
      } else {
        format = ",." + d3_scale_linearPrecision(range[2]) + "f";
      }
      return d32.format(format);
    }
    var d3_scale_linearFormatSignificant = {
      s: 1,
      g: 1,
      p: 1,
      r: 1,
      e: 1
    };
    function d3_scale_linearPrecision(value) {
      return -Math.floor(Math.log(value) / Math.LN10 + 0.01);
    }
    function d3_scale_linearFormatPrecision(type, range) {
      var p2 = d3_scale_linearPrecision(range[2]);
      return type in d3_scale_linearFormatSignificant ? Math.abs(p2 - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p2 - (type === "%") * 2;
    }
    d32.scale.log = function() {
      return d3_scale_log(d32.scale.linear().domain([0, 1]), 10, true, [1, 10]);
    };
    function d3_scale_log(linear, base, positive, domain) {
      function log(x2) {
        return (positive ? Math.log(x2 < 0 ? 0 : x2) : -Math.log(x2 > 0 ? 0 : -x2)) / Math.log(base);
      }
      function pow(x2) {
        return positive ? Math.pow(base, x2) : -Math.pow(base, -x2);
      }
      function scale(x2) {
        return linear(log(x2));
      }
      scale.invert = function(x2) {
        return pow(linear.invert(x2));
      };
      scale.domain = function(x2) {
        if (!arguments.length)
          return domain;
        positive = x2[0] >= 0;
        linear.domain((domain = x2.map(Number)).map(log));
        return scale;
      };
      scale.base = function(_) {
        if (!arguments.length)
          return base;
        base = +_;
        linear.domain(domain.map(log));
        return scale;
      };
      scale.nice = function() {
        var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
        linear.domain(niced);
        domain = niced.map(pow);
        return scale;
      };
      scale.ticks = function() {
        var extent = d3_scaleExtent(domain), ticks = [], u2 = extent[0], v2 = extent[1], i = Math.floor(log(u2)), j = Math.ceil(log(v2)), n2 = base % 1 ? 2 : base;
        if (isFinite(j - i)) {
          if (positive) {
            for (; i < j; i++)
              for (var k2 = 1; k2 < n2; k2++)
                ticks.push(pow(i) * k2);
            ticks.push(pow(i));
          } else {
            ticks.push(pow(i));
            for (; i++ < j; )
              for (var k2 = n2 - 1; k2 > 0; k2--)
                ticks.push(pow(i) * k2);
          }
          for (i = 0; ticks[i] < u2; i++) {
          }
          for (j = ticks.length; ticks[j - 1] > v2; j--) {
          }
          ticks = ticks.slice(i, j);
        }
        return ticks;
      };
      scale.tickFormat = function(n2, format) {
        if (!arguments.length)
          return d3_scale_logFormat;
        if (arguments.length < 2)
          format = d3_scale_logFormat;
        else if (typeof format !== "function")
          format = d32.format(format);
        var k2 = Math.max(0.1, n2 / scale.ticks().length), f2 = positive ? (e = 1e-12, Math.ceil) : (e = -1e-12, Math.floor), e;
        return function(d) {
          return d / pow(f2(log(d) + e)) <= k2 ? format(d) : "";
        };
      };
      scale.copy = function() {
        return d3_scale_log(linear.copy(), base, positive, domain);
      };
      return d3_scale_linearRebind(scale, linear);
    }
    var d3_scale_logFormat = d32.format(".0e"), d3_scale_logNiceNegative = {
      floor: function(x2) {
        return -Math.ceil(-x2);
      },
      ceil: function(x2) {
        return -Math.floor(-x2);
      }
    };
    d32.scale.pow = function() {
      return d3_scale_pow(d32.scale.linear(), 1, [0, 1]);
    };
    function d3_scale_pow(linear, exponent, domain) {
      var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
      function scale(x2) {
        return linear(powp(x2));
      }
      scale.invert = function(x2) {
        return powb(linear.invert(x2));
      };
      scale.domain = function(x2) {
        if (!arguments.length)
          return domain;
        linear.domain((domain = x2.map(Number)).map(powp));
        return scale;
      };
      scale.ticks = function(m2) {
        return d3_scale_linearTicks(domain, m2);
      };
      scale.tickFormat = function(m2, format) {
        return d3_scale_linearTickFormat(domain, m2, format);
      };
      scale.nice = function(m2) {
        return scale.domain(d3_scale_linearNice(domain, m2));
      };
      scale.exponent = function(x2) {
        if (!arguments.length)
          return exponent;
        powp = d3_scale_powPow(exponent = x2);
        powb = d3_scale_powPow(1 / exponent);
        linear.domain(domain.map(powp));
        return scale;
      };
      scale.copy = function() {
        return d3_scale_pow(linear.copy(), exponent, domain);
      };
      return d3_scale_linearRebind(scale, linear);
    }
    function d3_scale_powPow(e) {
      return function(x2) {
        return x2 < 0 ? -Math.pow(-x2, e) : Math.pow(x2, e);
      };
    }
    d32.scale.sqrt = function() {
      return d32.scale.pow().exponent(0.5);
    };
    d32.scale.ordinal = function() {
      return d3_scale_ordinal([], {
        t: "range",
        a: [[]]
      });
    };
    function d3_scale_ordinal(domain, ranger) {
      var index, range, rangeBand;
      function scale(x2) {
        return range[((index.get(x2) || (ranger.t === "range" ? index.set(x2, domain.push(x2)) : NaN)) - 1) % range.length];
      }
      function steps(start, step) {
        return d32.range(domain.length).map(function(i) {
          return start + step * i;
        });
      }
      scale.domain = function(x2) {
        if (!arguments.length)
          return domain;
        domain = [];
        index = new d3_Map();
        var i = -1, n2 = x2.length, xi2;
        while (++i < n2)
          if (!index.has(xi2 = x2[i]))
            index.set(xi2, domain.push(xi2));
        return scale[ranger.t].apply(scale, ranger.a);
      };
      scale.range = function(x2) {
        if (!arguments.length)
          return range;
        range = x2;
        rangeBand = 0;
        ranger = {
          t: "range",
          a: arguments
        };
        return scale;
      };
      scale.rangePoints = function(x2, padding) {
        if (arguments.length < 2)
          padding = 0;
        var start = x2[0], stop = x2[1], step = domain.length < 2 ? (start = (start + stop) / 2, 0) : (stop - start) / (domain.length - 1 + padding);
        range = steps(start + step * padding / 2, step);
        rangeBand = 0;
        ranger = {
          t: "rangePoints",
          a: arguments
        };
        return scale;
      };
      scale.rangeRoundPoints = function(x2, padding) {
        if (arguments.length < 2)
          padding = 0;
        var start = x2[0], stop = x2[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 0) : (stop - start) / (domain.length - 1 + padding) | 0;
        range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
        rangeBand = 0;
        ranger = {
          t: "rangeRoundPoints",
          a: arguments
        };
        return scale;
      };
      scale.rangeBands = function(x2, padding, outerPadding) {
        if (arguments.length < 2)
          padding = 0;
        if (arguments.length < 3)
          outerPadding = padding;
        var reverse = x2[1] < x2[0], start = x2[reverse - 0], stop = x2[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
        range = steps(start + step * outerPadding, step);
        if (reverse)
          range.reverse();
        rangeBand = step * (1 - padding);
        ranger = {
          t: "rangeBands",
          a: arguments
        };
        return scale;
      };
      scale.rangeRoundBands = function(x2, padding, outerPadding) {
        if (arguments.length < 2)
          padding = 0;
        if (arguments.length < 3)
          outerPadding = padding;
        var reverse = x2[1] < x2[0], start = x2[reverse - 0], stop = x2[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
        range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
        if (reverse)
          range.reverse();
        rangeBand = Math.round(step * (1 - padding));
        ranger = {
          t: "rangeRoundBands",
          a: arguments
        };
        return scale;
      };
      scale.rangeBand = function() {
        return rangeBand;
      };
      scale.rangeExtent = function() {
        return d3_scaleExtent(ranger.a[0]);
      };
      scale.copy = function() {
        return d3_scale_ordinal(domain, ranger);
      };
      return scale.domain(domain);
    }
    d32.scale.category10 = function() {
      return d32.scale.ordinal().range(d3_category10);
    };
    d32.scale.category20 = function() {
      return d32.scale.ordinal().range(d3_category20);
    };
    d32.scale.category20b = function() {
      return d32.scale.ordinal().range(d3_category20b);
    };
    d32.scale.category20c = function() {
      return d32.scale.ordinal().range(d3_category20c);
    };
    var d3_category10 = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(d3_rgbString);
    var d3_category20 = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(d3_rgbString);
    var d3_category20b = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(d3_rgbString);
    var d3_category20c = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(d3_rgbString);
    d32.scale.quantile = function() {
      return d3_scale_quantile([], []);
    };
    function d3_scale_quantile(domain, range) {
      var thresholds;
      function rescale() {
        var k2 = 0, q2 = range.length;
        thresholds = [];
        while (++k2 < q2)
          thresholds[k2 - 1] = d32.quantile(domain, k2 / q2);
        return scale;
      }
      function scale(x2) {
        if (!isNaN(x2 = +x2))
          return range[d32.bisect(thresholds, x2)];
      }
      scale.domain = function(x2) {
        if (!arguments.length)
          return domain;
        domain = x2.map(d3_number).filter(d3_numeric).sort(d3_ascending);
        return rescale();
      };
      scale.range = function(x2) {
        if (!arguments.length)
          return range;
        range = x2;
        return rescale();
      };
      scale.quantiles = function() {
        return thresholds;
      };
      scale.invertExtent = function(y2) {
        y2 = range.indexOf(y2);
        return y2 < 0 ? [NaN, NaN] : [y2 > 0 ? thresholds[y2 - 1] : domain[0], y2 < thresholds.length ? thresholds[y2] : domain[domain.length - 1]];
      };
      scale.copy = function() {
        return d3_scale_quantile(domain, range);
      };
      return rescale();
    }
    d32.scale.quantize = function() {
      return d3_scale_quantize(0, 1, [0, 1]);
    };
    function d3_scale_quantize(x0, x1, range) {
      var kx, i;
      function scale(x2) {
        return range[Math.max(0, Math.min(i, Math.floor(kx * (x2 - x0))))];
      }
      function rescale() {
        kx = range.length / (x1 - x0);
        i = range.length - 1;
        return scale;
      }
      scale.domain = function(x2) {
        if (!arguments.length)
          return [x0, x1];
        x0 = +x2[0];
        x1 = +x2[x2.length - 1];
        return rescale();
      };
      scale.range = function(x2) {
        if (!arguments.length)
          return range;
        range = x2;
        return rescale();
      };
      scale.invertExtent = function(y2) {
        y2 = range.indexOf(y2);
        y2 = y2 < 0 ? NaN : y2 / kx + x0;
        return [y2, y2 + 1 / kx];
      };
      scale.copy = function() {
        return d3_scale_quantize(x0, x1, range);
      };
      return rescale();
    }
    d32.scale.threshold = function() {
      return d3_scale_threshold([0.5], [0, 1]);
    };
    function d3_scale_threshold(domain, range) {
      function scale(x2) {
        if (x2 <= x2)
          return range[d32.bisect(domain, x2)];
      }
      scale.domain = function(_) {
        if (!arguments.length)
          return domain;
        domain = _;
        return scale;
      };
      scale.range = function(_) {
        if (!arguments.length)
          return range;
        range = _;
        return scale;
      };
      scale.invertExtent = function(y2) {
        y2 = range.indexOf(y2);
        return [domain[y2 - 1], domain[y2]];
      };
      scale.copy = function() {
        return d3_scale_threshold(domain, range);
      };
      return scale;
    }
    d32.scale.identity = function() {
      return d3_scale_identity([0, 1]);
    };
    function d3_scale_identity(domain) {
      function identity2(x2) {
        return +x2;
      }
      identity2.invert = identity2;
      identity2.domain = identity2.range = function(x2) {
        if (!arguments.length)
          return domain;
        domain = x2.map(identity2);
        return identity2;
      };
      identity2.ticks = function(m2) {
        return d3_scale_linearTicks(domain, m2);
      };
      identity2.tickFormat = function(m2, format) {
        return d3_scale_linearTickFormat(domain, m2, format);
      };
      identity2.copy = function() {
        return d3_scale_identity(domain);
      };
      return identity2;
    }
    d32.svg = {};
    function d3_zero() {
      return 0;
    }
    d32.svg.arc = function() {
      var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
      function arc() {
        var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da2 = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
        if (r1 < r0)
          rc2 = r1, r1 = r0, r0 = rc2;
        if (da2 >= τε)
          return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
        var rc2, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
        if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
          rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
          if (!cw)
            p1 *= -1;
          if (r1)
            p1 = d3_asin(rp / r1 * Math.sin(ap));
          if (r0)
            p0 = d3_asin(rp / r0 * Math.sin(ap));
        }
        if (r1) {
          x0 = r1 * Math.cos(a0 + p1);
          y0 = r1 * Math.sin(a0 + p1);
          x1 = r1 * Math.cos(a1 - p1);
          y1 = r1 * Math.sin(a1 - p1);
          var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
          if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
            var h1 = (a0 + a1) / 2;
            x0 = r1 * Math.cos(h1);
            y0 = r1 * Math.sin(h1);
            x1 = y1 = null;
          }
        } else {
          x0 = y0 = 0;
        }
        if (r0) {
          x2 = r0 * Math.cos(a1 - p0);
          y2 = r0 * Math.sin(a1 - p0);
          x3 = r0 * Math.cos(a0 + p0);
          y3 = r0 * Math.sin(a0 + p0);
          var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
          if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
            var h0 = (a0 + a1) / 2;
            x2 = r0 * Math.cos(h0);
            y2 = r0 * Math.sin(h0);
            x3 = y3 = null;
          }
        } else {
          x2 = y2 = 0;
        }
        if ((rc2 = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > 1e-3) {
          cr = r0 < r1 ^ cw ? 0 : 1;
          var oc2 = x3 == null ? [x2, y2] : x1 == null ? [x0, y0] : d3_geom_polygonIntersect([x0, y0], [x3, y3], [x1, y1], [x2, y2]), ax = x0 - oc2[0], ay = y0 - oc2[1], bx = x1 - oc2[0], by = y1 - oc2[1], kc2 = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc2 = Math.sqrt(oc2[0] * oc2[0] + oc2[1] * oc2[1]);
          if (x1 != null) {
            var rc1 = Math.min(rc2, (r1 - lc2) / (kc2 + 1)), t30 = d3_svg_arcCornerTangents(x3 == null ? [x2, y2] : [x3, y3], [x0, y0], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([x1, y1], [x2, y2], r1, rc1, cw);
            if (rc2 === rc1) {
              path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
            } else {
              path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
            }
          } else {
            path.push("M", x0, ",", y0);
          }
          if (x3 != null) {
            var rc0 = Math.min(rc2, (r0 - lc2) / (kc2 - 1)), t03 = d3_svg_arcCornerTangents([x0, y0], [x3, y3], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([x2, y2], x1 == null ? [x0, y0] : [x1, y1], r0, -rc0, cw);
            if (rc2 === rc0) {
              path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
            } else {
              path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
            }
          } else {
            path.push("L", x2, ",", y2);
          }
        } else {
          path.push("M", x0, ",", y0);
          if (x1 != null)
            path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
          path.push("L", x2, ",", y2);
          if (x3 != null)
            path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
        }
        path.push("Z");
        return path.join("");
      }
      function circleSegment(r1, cw) {
        return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
      }
      arc.innerRadius = function(v2) {
        if (!arguments.length)
          return innerRadius;
        innerRadius = d3_functor(v2);
        return arc;
      };
      arc.outerRadius = function(v2) {
        if (!arguments.length)
          return outerRadius;
        outerRadius = d3_functor(v2);
        return arc;
      };
      arc.cornerRadius = function(v2) {
        if (!arguments.length)
          return cornerRadius;
        cornerRadius = d3_functor(v2);
        return arc;
      };
      arc.padRadius = function(v2) {
        if (!arguments.length)
          return padRadius;
        padRadius = v2 == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v2);
        return arc;
      };
      arc.startAngle = function(v2) {
        if (!arguments.length)
          return startAngle;
        startAngle = d3_functor(v2);
        return arc;
      };
      arc.endAngle = function(v2) {
        if (!arguments.length)
          return endAngle;
        endAngle = d3_functor(v2);
        return arc;
      };
      arc.padAngle = function(v2) {
        if (!arguments.length)
          return padAngle;
        padAngle = d3_functor(v2);
        return arc;
      };
      arc.centroid = function() {
        var r2 = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
        return [Math.cos(a) * r2, Math.sin(a) * r2];
      };
      return arc;
    };
    var d3_svg_arcAuto = "auto";
    function d3_svg_arcInnerRadius(d) {
      return d.innerRadius;
    }
    function d3_svg_arcOuterRadius(d) {
      return d.outerRadius;
    }
    function d3_svg_arcStartAngle(d) {
      return d.startAngle;
    }
    function d3_svg_arcEndAngle(d) {
      return d.endAngle;
    }
    function d3_svg_arcPadAngle(d) {
      return d && d.padAngle;
    }
    function d3_svg_arcSweep(x0, y0, x1, y1) {
      return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
    }
    function d3_svg_arcCornerTangents(p0, p1, r1, rc2, cw) {
      var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc2 : -rc2) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r2 = r1 - rc2, D2 = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(r2 * r2 * d2 - D2 * D2), cx0 = (D2 * dy - dx * d) / d2, cy0 = (-D2 * dx - dy * d) / d2, cx1 = (D2 * dy + dx * d) / d2, cy1 = (-D2 * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
      if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1)
        cx0 = cx1, cy0 = cy1;
      return [[cx0 - ox, cy0 - oy], [cx0 * r1 / r2, cy0 * r1 / r2]];
    }
    function d3_svg_line(projection) {
      var x2 = d3_geom_pointX, y2 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = 0.7;
      function line(data) {
        var segments = [], points = [], i = -1, n2 = data.length, d, fx = d3_functor(x2), fy = d3_functor(y2);
        function segment() {
          segments.push("M", interpolate(projection(points), tension));
        }
        while (++i < n2) {
          if (defined.call(this, d = data[i], i)) {
            points.push([+fx.call(this, d, i), +fy.call(this, d, i)]);
          } else if (points.length) {
            segment();
            points = [];
          }
        }
        if (points.length)
          segment();
        return segments.length ? segments.join("") : null;
      }
      line.x = function(_) {
        if (!arguments.length)
          return x2;
        x2 = _;
        return line;
      };
      line.y = function(_) {
        if (!arguments.length)
          return y2;
        y2 = _;
        return line;
      };
      line.defined = function(_) {
        if (!arguments.length)
          return defined;
        defined = _;
        return line;
      };
      line.interpolate = function(_) {
        if (!arguments.length)
          return interpolateKey;
        if (typeof _ === "function")
          interpolateKey = interpolate = _;
        else
          interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
        return line;
      };
      line.tension = function(_) {
        if (!arguments.length)
          return tension;
        tension = _;
        return line;
      };
      return line;
    }
    d32.svg.line = function() {
      return d3_svg_line(d3_identity);
    };
    var d3_svg_lineInterpolators = d32.map({
      linear: d3_svg_lineLinear,
      "linear-closed": d3_svg_lineLinearClosed,
      step: d3_svg_lineStep,
      "step-before": d3_svg_lineStepBefore,
      "step-after": d3_svg_lineStepAfter,
      basis: d3_svg_lineBasis,
      "basis-open": d3_svg_lineBasisOpen,
      "basis-closed": d3_svg_lineBasisClosed,
      bundle: d3_svg_lineBundle,
      cardinal: d3_svg_lineCardinal,
      "cardinal-open": d3_svg_lineCardinalOpen,
      "cardinal-closed": d3_svg_lineCardinalClosed,
      monotone: d3_svg_lineMonotone
    });
    d3_svg_lineInterpolators.forEach(function(key, value) {
      value.key = key;
      value.closed = /-closed$/.test(key);
    });
    function d3_svg_lineLinear(points) {
      return points.join("L");
    }
    function d3_svg_lineLinearClosed(points) {
      return d3_svg_lineLinear(points) + "Z";
    }
    function d3_svg_lineStep(points) {
      var i = 0, n2 = points.length, p2 = points[0], path = [p2[0], ",", p2[1]];
      while (++i < n2)
        path.push("H", (p2[0] + (p2 = points[i])[0]) / 2, "V", p2[1]);
      if (n2 > 1)
        path.push("H", p2[0]);
      return path.join("");
    }
    function d3_svg_lineStepBefore(points) {
      var i = 0, n2 = points.length, p2 = points[0], path = [p2[0], ",", p2[1]];
      while (++i < n2)
        path.push("V", (p2 = points[i])[1], "H", p2[0]);
      return path.join("");
    }
    function d3_svg_lineStepAfter(points) {
      var i = 0, n2 = points.length, p2 = points[0], path = [p2[0], ",", p2[1]];
      while (++i < n2)
        path.push("H", (p2 = points[i])[0], "V", p2[1]);
      return path.join("");
    }
    function d3_svg_lineCardinalOpen(points, tension) {
      return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
    }
    function d3_svg_lineCardinalClosed(points, tension) {
      return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), points), d3_svg_lineCardinalTangents([points[points.length - 2]].concat(points, [points[1]]), tension));
    }
    function d3_svg_lineCardinal(points, tension) {
      return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
    }
    function d3_svg_lineHermite(points, tangents) {
      if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
        return d3_svg_lineLinear(points);
      }
      var quad = points.length != tangents.length, path = "", p0 = points[0], p2 = points[1], t0 = tangents[0], t2 = t0, pi2 = 1;
      if (quad) {
        path += "Q" + (p2[0] - t0[0] * 2 / 3) + "," + (p2[1] - t0[1] * 2 / 3) + "," + p2[0] + "," + p2[1];
        p0 = points[1];
        pi2 = 2;
      }
      if (tangents.length > 1) {
        t2 = tangents[1];
        p2 = points[pi2];
        pi2++;
        path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p2[0] - t2[0]) + "," + (p2[1] - t2[1]) + "," + p2[0] + "," + p2[1];
        for (var i = 2; i < tangents.length; i++, pi2++) {
          p2 = points[pi2];
          t2 = tangents[i];
          path += "S" + (p2[0] - t2[0]) + "," + (p2[1] - t2[1]) + "," + p2[0] + "," + p2[1];
        }
      }
      if (quad) {
        var lp = points[pi2];
        path += "Q" + (p2[0] + t2[0] * 2 / 3) + "," + (p2[1] + t2[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
      }
      return path;
    }
    function d3_svg_lineCardinalTangents(points, tension) {
      var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n2 = points.length;
      while (++i < n2) {
        p0 = p1;
        p1 = p2;
        p2 = points[i];
        tangents.push([a * (p2[0] - p0[0]), a * (p2[1] - p0[1])]);
      }
      return tangents;
    }
    function d3_svg_lineBasis(points) {
      if (points.length < 3)
        return d3_svg_lineLinear(points);
      var i = 1, n2 = points.length, pi2 = points[0], x0 = pi2[0], y0 = pi2[1], px = [x0, x0, x0, (pi2 = points[1])[0]], py = [y0, y0, y0, pi2[1]], path = [x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)];
      points.push(points[n2 - 1]);
      while (++i <= n2) {
        pi2 = points[i];
        px.shift();
        px.push(pi2[0]);
        py.shift();
        py.push(pi2[1]);
        d3_svg_lineBasisBezier(path, px, py);
      }
      points.pop();
      path.push("L", pi2);
      return path.join("");
    }
    function d3_svg_lineBasisOpen(points) {
      if (points.length < 4)
        return d3_svg_lineLinear(points);
      var path = [], i = -1, n2 = points.length, pi2, px = [0], py = [0];
      while (++i < 3) {
        pi2 = points[i];
        px.push(pi2[0]);
        py.push(pi2[1]);
      }
      path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
      --i;
      while (++i < n2) {
        pi2 = points[i];
        px.shift();
        px.push(pi2[0]);
        py.shift();
        py.push(pi2[1]);
        d3_svg_lineBasisBezier(path, px, py);
      }
      return path.join("");
    }
    function d3_svg_lineBasisClosed(points) {
      var path, i = -1, n2 = points.length, m2 = n2 + 4, pi2, px = [], py = [];
      while (++i < 4) {
        pi2 = points[i % n2];
        px.push(pi2[0]);
        py.push(pi2[1]);
      }
      path = [d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)];
      --i;
      while (++i < m2) {
        pi2 = points[i % n2];
        px.shift();
        px.push(pi2[0]);
        py.shift();
        py.push(pi2[1]);
        d3_svg_lineBasisBezier(path, px, py);
      }
      return path.join("");
    }
    function d3_svg_lineBundle(points, tension) {
      var n2 = points.length - 1;
      if (n2) {
        var x0 = points[0][0], y0 = points[0][1], dx = points[n2][0] - x0, dy = points[n2][1] - y0, i = -1, p2, t2;
        while (++i <= n2) {
          p2 = points[i];
          t2 = i / n2;
          p2[0] = tension * p2[0] + (1 - tension) * (x0 + t2 * dx);
          p2[1] = tension * p2[1] + (1 - tension) * (y0 + t2 * dy);
        }
      }
      return d3_svg_lineBasis(points);
    }
    function d3_svg_lineDot4(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }
    var d3_svg_lineBasisBezier1 = [0, 2 / 3, 1 / 3, 0], d3_svg_lineBasisBezier2 = [0, 1 / 3, 2 / 3, 0], d3_svg_lineBasisBezier3 = [0, 1 / 6, 2 / 3, 1 / 6];
    function d3_svg_lineBasisBezier(path, x2, y2) {
      path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x2), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y2), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x2), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y2), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x2), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y2));
    }
    function d3_svg_lineSlope(p0, p1) {
      return (p1[1] - p0[1]) / (p1[0] - p0[0]);
    }
    function d3_svg_lineFiniteDifferences(points) {
      var i = 0, j = points.length - 1, m2 = [], p0 = points[0], p1 = points[1], d = m2[0] = d3_svg_lineSlope(p0, p1);
      while (++i < j) {
        m2[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
      }
      m2[i] = d;
      return m2;
    }
    function d3_svg_lineMonotoneTangents(points) {
      var tangents = [], d, a, b, s, m2 = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
      while (++i < j) {
        d = d3_svg_lineSlope(points[i], points[i + 1]);
        if (abs(d) < ε) {
          m2[i] = m2[i + 1] = 0;
        } else {
          a = m2[i] / d;
          b = m2[i + 1] / d;
          s = a * a + b * b;
          if (s > 9) {
            s = d * 3 / Math.sqrt(s);
            m2[i] = s * a;
            m2[i + 1] = s * b;
          }
        }
      }
      i = -1;
      while (++i <= j) {
        s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m2[i] * m2[i]));
        tangents.push([s || 0, m2[i] * s || 0]);
      }
      return tangents;
    }
    function d3_svg_lineMonotone(points) {
      return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
    }
    d32.svg.line.radial = function() {
      var line = d3_svg_line(d3_svg_lineRadial);
      line.radius = line.x, delete line.x;
      line.angle = line.y, delete line.y;
      return line;
    };
    function d3_svg_lineRadial(points) {
      var point, i = -1, n2 = points.length, r2, a;
      while (++i < n2) {
        point = points[i];
        r2 = point[0];
        a = point[1] - halfπ;
        point[0] = r2 * Math.cos(a);
        point[1] = r2 * Math.sin(a);
      }
      return points;
    }
    function d3_svg_area(projection) {
      var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L2 = "L", tension = 0.7;
      function area(data) {
        var segments = [], points0 = [], points1 = [], i = -1, n2 = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
          return x2;
        } : d3_functor(x1), fy1 = y0 === y1 ? function() {
          return y2;
        } : d3_functor(y1), x2, y2;
        function segment() {
          segments.push("M", interpolate(projection(points1), tension), L2, interpolateReverse(projection(points0.reverse()), tension), "Z");
        }
        while (++i < n2) {
          if (defined.call(this, d = data[i], i)) {
            points0.push([x2 = +fx0.call(this, d, i), y2 = +fy0.call(this, d, i)]);
            points1.push([+fx1.call(this, d, i), +fy1.call(this, d, i)]);
          } else if (points0.length) {
            segment();
            points0 = [];
            points1 = [];
          }
        }
        if (points0.length)
          segment();
        return segments.length ? segments.join("") : null;
      }
      area.x = function(_) {
        if (!arguments.length)
          return x1;
        x0 = x1 = _;
        return area;
      };
      area.x0 = function(_) {
        if (!arguments.length)
          return x0;
        x0 = _;
        return area;
      };
      area.x1 = function(_) {
        if (!arguments.length)
          return x1;
        x1 = _;
        return area;
      };
      area.y = function(_) {
        if (!arguments.length)
          return y1;
        y0 = y1 = _;
        return area;
      };
      area.y0 = function(_) {
        if (!arguments.length)
          return y0;
        y0 = _;
        return area;
      };
      area.y1 = function(_) {
        if (!arguments.length)
          return y1;
        y1 = _;
        return area;
      };
      area.defined = function(_) {
        if (!arguments.length)
          return defined;
        defined = _;
        return area;
      };
      area.interpolate = function(_) {
        if (!arguments.length)
          return interpolateKey;
        if (typeof _ === "function")
          interpolateKey = interpolate = _;
        else
          interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
        interpolateReverse = interpolate.reverse || interpolate;
        L2 = interpolate.closed ? "M" : "L";
        return area;
      };
      area.tension = function(_) {
        if (!arguments.length)
          return tension;
        tension = _;
        return area;
      };
      return area;
    }
    d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
    d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
    d32.svg.area = function() {
      return d3_svg_area(d3_identity);
    };
    d32.svg.area.radial = function() {
      var area = d3_svg_area(d3_svg_lineRadial);
      area.radius = area.x, delete area.x;
      area.innerRadius = area.x0, delete area.x0;
      area.outerRadius = area.x1, delete area.x1;
      area.angle = area.y, delete area.y;
      area.startAngle = area.y0, delete area.y0;
      area.endAngle = area.y1, delete area.y1;
      return area;
    };
    d32.svg.chord = function() {
      var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
      function chord(d, i) {
        var s = subgroup(this, source, d, i), t2 = subgroup(this, target, d, i);
        return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t2) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t2.r, t2.p0) + arc(t2.r, t2.p1, t2.a1 - t2.a0) + curve(t2.r, t2.p1, s.r, s.p0)) + "Z";
      }
      function subgroup(self2, f2, d, i) {
        var subgroup2 = f2.call(self2, d, i), r2 = radius.call(self2, subgroup2, i), a0 = startAngle.call(self2, subgroup2, i) - halfπ, a1 = endAngle.call(self2, subgroup2, i) - halfπ;
        return {
          r: r2,
          a0,
          a1,
          p0: [r2 * Math.cos(a0), r2 * Math.sin(a0)],
          p1: [r2 * Math.cos(a1), r2 * Math.sin(a1)]
        };
      }
      function equals(a, b) {
        return a.a0 == b.a0 && a.a1 == b.a1;
      }
      function arc(r2, p2, a) {
        return "A" + r2 + "," + r2 + " 0 " + +(a > π) + ",1 " + p2;
      }
      function curve(r0, p0, r1, p1) {
        return "Q 0,0 " + p1;
      }
      chord.radius = function(v2) {
        if (!arguments.length)
          return radius;
        radius = d3_functor(v2);
        return chord;
      };
      chord.source = function(v2) {
        if (!arguments.length)
          return source;
        source = d3_functor(v2);
        return chord;
      };
      chord.target = function(v2) {
        if (!arguments.length)
          return target;
        target = d3_functor(v2);
        return chord;
      };
      chord.startAngle = function(v2) {
        if (!arguments.length)
          return startAngle;
        startAngle = d3_functor(v2);
        return chord;
      };
      chord.endAngle = function(v2) {
        if (!arguments.length)
          return endAngle;
        endAngle = d3_functor(v2);
        return chord;
      };
      return chord;
    };
    function d3_svg_chordRadius(d) {
      return d.radius;
    }
    d32.svg.diagonal = function() {
      var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
      function diagonal(d, i) {
        var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m2 = (p0.y + p3.y) / 2, p2 = [p0, {
          x: p0.x,
          y: m2
        }, {
          x: p3.x,
          y: m2
        }, p3];
        p2 = p2.map(projection);
        return "M" + p2[0] + "C" + p2[1] + " " + p2[2] + " " + p2[3];
      }
      diagonal.source = function(x2) {
        if (!arguments.length)
          return source;
        source = d3_functor(x2);
        return diagonal;
      };
      diagonal.target = function(x2) {
        if (!arguments.length)
          return target;
        target = d3_functor(x2);
        return diagonal;
      };
      diagonal.projection = function(x2) {
        if (!arguments.length)
          return projection;
        projection = x2;
        return diagonal;
      };
      return diagonal;
    };
    function d3_svg_diagonalProjection(d) {
      return [d.x, d.y];
    }
    d32.svg.diagonal.radial = function() {
      var diagonal = d32.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
      diagonal.projection = function(x2) {
        return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x2)) : projection;
      };
      return diagonal;
    };
    function d3_svg_diagonalRadialProjection(projection) {
      return function() {
        var d = projection.apply(this, arguments), r2 = d[0], a = d[1] - halfπ;
        return [r2 * Math.cos(a), r2 * Math.sin(a)];
      };
    }
    d32.svg.symbol = function() {
      var type = d3_svg_symbolType, size = d3_svg_symbolSize;
      function symbol(d, i) {
        return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
      }
      symbol.type = function(x2) {
        if (!arguments.length)
          return type;
        type = d3_functor(x2);
        return symbol;
      };
      symbol.size = function(x2) {
        if (!arguments.length)
          return size;
        size = d3_functor(x2);
        return symbol;
      };
      return symbol;
    };
    function d3_svg_symbolSize() {
      return 64;
    }
    function d3_svg_symbolType() {
      return "circle";
    }
    function d3_svg_symbolCircle(size) {
      var r2 = Math.sqrt(size / π);
      return "M0," + r2 + "A" + r2 + "," + r2 + " 0 1,1 0," + -r2 + "A" + r2 + "," + r2 + " 0 1,1 0," + r2 + "Z";
    }
    var d3_svg_symbols = d32.map({
      circle: d3_svg_symbolCircle,
      cross: function(size) {
        var r2 = Math.sqrt(size / 5) / 2;
        return "M" + -3 * r2 + "," + -r2 + "H" + -r2 + "V" + -3 * r2 + "H" + r2 + "V" + -r2 + "H" + 3 * r2 + "V" + r2 + "H" + r2 + "V" + 3 * r2 + "H" + -r2 + "V" + r2 + "H" + -3 * r2 + "Z";
      },
      diamond: function(size) {
        var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
        return "M0," + -ry + "L" + rx + ",0 0," + ry + " " + -rx + ",0Z";
      },
      square: function(size) {
        var r2 = Math.sqrt(size) / 2;
        return "M" + -r2 + "," + -r2 + "L" + r2 + "," + -r2 + " " + r2 + "," + r2 + " " + -r2 + "," + r2 + "Z";
      },
      "triangle-down": function(size) {
        var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
        return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
      },
      "triangle-up": function(size) {
        var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
        return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
      }
    });
    d32.svg.symbolTypes = d3_svg_symbols.keys();
    var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
    d3_selectionPrototype.transition = function(name) {
      var id2 = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
        time: Date.now(),
        ease: d3_ease_cubicInOut,
        delay: 0,
        duration: 250
      };
      for (var j = -1, m2 = this.length; ++j < m2; ) {
        subgroups.push(subgroup = []);
        for (var group = this[j], i = -1, n2 = group.length; ++i < n2; ) {
          if (node = group[i])
            d3_transitionNode(node, i, ns, id2, transition);
          subgroup.push(node);
        }
      }
      return d3_transition(subgroups, ns, id2);
    };
    d3_selectionPrototype.interrupt = function(name) {
      return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
    };
    var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
    function d3_selection_interruptNS(ns) {
      return function() {
        var lock, active;
        if ((lock = this[ns]) && (active = lock[lock.active])) {
          if (--lock.count)
            delete lock[lock.active];
          else
            delete this[ns];
          lock.active += 0.5;
          active.event && active.event.interrupt.call(this, this.__data__, active.index);
        }
      };
    }
    function d3_transition(groups, ns, id2) {
      d3_subclass(groups, d3_transitionPrototype);
      groups.namespace = ns;
      groups.id = id2;
      return groups;
    }
    var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
    d3_transitionPrototype.call = d3_selectionPrototype.call;
    d3_transitionPrototype.empty = d3_selectionPrototype.empty;
    d3_transitionPrototype.node = d3_selectionPrototype.node;
    d3_transitionPrototype.size = d3_selectionPrototype.size;
    d32.transition = function(selection, name) {
      return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d32.selection().transition(selection);
    };
    d32.transition.prototype = d3_transitionPrototype;
    d3_transitionPrototype.select = function(selector) {
      var id2 = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
      selector = d3_selection_selector(selector);
      for (var j = -1, m2 = this.length; ++j < m2; ) {
        subgroups.push(subgroup = []);
        for (var group = this[j], i = -1, n2 = group.length; ++i < n2; ) {
          if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
            if ("__data__" in node)
              subnode.__data__ = node.__data__;
            d3_transitionNode(subnode, i, ns, id2, node[ns][id2]);
            subgroup.push(subnode);
          } else {
            subgroup.push(null);
          }
        }
      }
      return d3_transition(subgroups, ns, id2);
    };
    d3_transitionPrototype.selectAll = function(selector) {
      var id2 = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
      selector = d3_selection_selectorAll(selector);
      for (var j = -1, m2 = this.length; ++j < m2; ) {
        for (var group = this[j], i = -1, n2 = group.length; ++i < n2; ) {
          if (node = group[i]) {
            transition = node[ns][id2];
            subnodes = selector.call(node, node.__data__, i, j);
            subgroups.push(subgroup = []);
            for (var k2 = -1, o = subnodes.length; ++k2 < o; ) {
              if (subnode = subnodes[k2])
                d3_transitionNode(subnode, k2, ns, id2, transition);
              subgroup.push(subnode);
            }
          }
        }
      }
      return d3_transition(subgroups, ns, id2);
    };
    d3_transitionPrototype.filter = function(filter) {
      var subgroups = [], subgroup, group, node;
      if (typeof filter !== "function")
        filter = d3_selection_filter(filter);
      for (var j = 0, m2 = this.length; j < m2; j++) {
        subgroups.push(subgroup = []);
        for (var group = this[j], i = 0, n2 = group.length; i < n2; i++) {
          if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
            subgroup.push(node);
          }
        }
      }
      return d3_transition(subgroups, this.namespace, this.id);
    };
    d3_transitionPrototype.tween = function(name, tween) {
      var id2 = this.id, ns = this.namespace;
      if (arguments.length < 2)
        return this.node()[ns][id2].tween.get(name);
      return d3_selection_each(this, tween == null ? function(node) {
        node[ns][id2].tween.remove(name);
      } : function(node) {
        node[ns][id2].tween.set(name, tween);
      });
    };
    function d3_transition_tween(groups, name, value, tween) {
      var id2 = groups.id, ns = groups.namespace;
      return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
        node[ns][id2].tween.set(name, tween(value.call(node, node.__data__, i, j)));
      } : (value = tween(value), function(node) {
        node[ns][id2].tween.set(name, value);
      }));
    }
    d3_transitionPrototype.attr = function(nameNS, value) {
      if (arguments.length < 2) {
        for (value in nameNS)
          this.attr(value, nameNS[value]);
        return this;
      }
      var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d32.ns.qualify(nameNS);
      function attrNull() {
        this.removeAttribute(name);
      }
      function attrNullNS() {
        this.removeAttributeNS(name.space, name.local);
      }
      function attrTween(b) {
        return b == null ? attrNull : (b += "", function() {
          var a = this.getAttribute(name), i;
          return a !== b && (i = interpolate(a, b), function(t2) {
            this.setAttribute(name, i(t2));
          });
        });
      }
      function attrTweenNS(b) {
        return b == null ? attrNullNS : (b += "", function() {
          var a = this.getAttributeNS(name.space, name.local), i;
          return a !== b && (i = interpolate(a, b), function(t2) {
            this.setAttributeNS(name.space, name.local, i(t2));
          });
        });
      }
      return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
    };
    d3_transitionPrototype.attrTween = function(nameNS, tween) {
      var name = d32.ns.qualify(nameNS);
      function attrTween(d, i) {
        var f2 = tween.call(this, d, i, this.getAttribute(name));
        return f2 && function(t2) {
          this.setAttribute(name, f2(t2));
        };
      }
      function attrTweenNS(d, i) {
        var f2 = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
        return f2 && function(t2) {
          this.setAttributeNS(name.space, name.local, f2(t2));
        };
      }
      return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
    };
    d3_transitionPrototype.style = function(name, value, priority) {
      var n2 = arguments.length;
      if (n2 < 3) {
        if (typeof name !== "string") {
          if (n2 < 2)
            value = "";
          for (priority in name)
            this.style(priority, name[priority], value);
          return this;
        }
        priority = "";
      }
      function styleNull() {
        this.style.removeProperty(name);
      }
      function styleString(b) {
        return b == null ? styleNull : (b += "", function() {
          var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name), i;
          return a !== b && (i = d3_interpolate(a, b), function(t2) {
            this.style.setProperty(name, i(t2), priority);
          });
        });
      }
      return d3_transition_tween(this, "style." + name, value, styleString);
    };
    d3_transitionPrototype.styleTween = function(name, tween, priority) {
      if (arguments.length < 3)
        priority = "";
      function styleTween(d, i) {
        var f2 = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
        return f2 && function(t2) {
          this.style.setProperty(name, f2(t2), priority);
        };
      }
      return this.tween("style." + name, styleTween);
    };
    d3_transitionPrototype.text = function(value) {
      return d3_transition_tween(this, "text", value, d3_transition_text);
    };
    function d3_transition_text(b) {
      if (b == null)
        b = "";
      return function() {
        this.textContent = b;
      };
    }
    d3_transitionPrototype.remove = function() {
      var ns = this.namespace;
      return this.each("end.transition", function() {
        var p2;
        if (this[ns].count < 2 && (p2 = this.parentNode))
          p2.removeChild(this);
      });
    };
    d3_transitionPrototype.ease = function(value) {
      var id2 = this.id, ns = this.namespace;
      if (arguments.length < 1)
        return this.node()[ns][id2].ease;
      if (typeof value !== "function")
        value = d32.ease.apply(d32, arguments);
      return d3_selection_each(this, function(node) {
        node[ns][id2].ease = value;
      });
    };
    d3_transitionPrototype.delay = function(value) {
      var id2 = this.id, ns = this.namespace;
      if (arguments.length < 1)
        return this.node()[ns][id2].delay;
      return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
        node[ns][id2].delay = +value.call(node, node.__data__, i, j);
      } : (value = +value, function(node) {
        node[ns][id2].delay = value;
      }));
    };
    d3_transitionPrototype.duration = function(value) {
      var id2 = this.id, ns = this.namespace;
      if (arguments.length < 1)
        return this.node()[ns][id2].duration;
      return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
        node[ns][id2].duration = Math.max(1, value.call(node, node.__data__, i, j));
      } : (value = Math.max(1, value), function(node) {
        node[ns][id2].duration = value;
      }));
    };
    d3_transitionPrototype.each = function(type, listener) {
      var id2 = this.id, ns = this.namespace;
      if (arguments.length < 2) {
        var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
        try {
          d3_transitionInheritId = id2;
          d3_selection_each(this, function(node, i, j) {
            d3_transitionInherit = node[ns][id2];
            type.call(node, node.__data__, i, j);
          });
        } finally {
          d3_transitionInherit = inherit;
          d3_transitionInheritId = inheritId;
        }
      } else {
        d3_selection_each(this, function(node) {
          var transition = node[ns][id2];
          (transition.event || (transition.event = d32.dispatch("start", "end", "interrupt"))).on(type, listener);
        });
      }
      return this;
    };
    d3_transitionPrototype.transition = function() {
      var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
      for (var j = 0, m2 = this.length; j < m2; j++) {
        subgroups.push(subgroup = []);
        for (var group = this[j], i = 0, n2 = group.length; i < n2; i++) {
          if (node = group[i]) {
            transition = node[ns][id0];
            d3_transitionNode(node, i, ns, id1, {
              time: transition.time,
              ease: transition.ease,
              delay: transition.delay + transition.duration,
              duration: transition.duration
            });
          }
          subgroup.push(node);
        }
      }
      return d3_transition(subgroups, ns, id1);
    };
    function d3_transitionNamespace(name) {
      return name == null ? "__transition__" : "__transition_" + name + "__";
    }
    function d3_transitionNode(node, i, ns, id2, inherit) {
      var lock = node[ns] || (node[ns] = {
        active: 0,
        count: 0
      }), transition = lock[id2];
      if (!transition) {
        var time = inherit.time;
        transition = lock[id2] = {
          tween: new d3_Map(),
          time,
          delay: inherit.delay,
          duration: inherit.duration,
          ease: inherit.ease,
          index: i
        };
        inherit = null;
        ++lock.count;
        d32.timer(function(elapsed) {
          var delay = transition.delay, duration, ease, timer2 = d3_timer_active, tweened = [];
          timer2.t = delay + time;
          if (delay <= elapsed)
            return start(elapsed - delay);
          timer2.c = start;
          function start(elapsed2) {
            if (lock.active > id2)
              return stop();
            var active = lock[lock.active];
            if (active) {
              --lock.count;
              delete lock[lock.active];
              active.event && active.event.interrupt.call(node, node.__data__, active.index);
            }
            lock.active = id2;
            transition.event && transition.event.start.call(node, node.__data__, i);
            transition.tween.forEach(function(key, value) {
              if (value = value.call(node, node.__data__, i)) {
                tweened.push(value);
              }
            });
            ease = transition.ease;
            duration = transition.duration;
            d32.timer(function() {
              timer2.c = tick(elapsed2 || 1) ? d3_true : tick;
              return 1;
            }, 0, time);
          }
          function tick(elapsed2) {
            if (lock.active !== id2)
              return 1;
            var t2 = elapsed2 / duration, e = ease(t2), n2 = tweened.length;
            while (n2 > 0) {
              tweened[--n2].call(node, e);
            }
            if (t2 >= 1) {
              transition.event && transition.event.end.call(node, node.__data__, i);
              return stop();
            }
          }
          function stop() {
            if (--lock.count)
              delete lock[id2];
            else
              delete node[ns];
            return 1;
          }
        }, 0, time);
      }
    }
    d32.svg.axis = function() {
      var scale = d32.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [10], tickValues = null, tickFormat_;
      function axis(g2) {
        g2.each(function() {
          var g3 = d32.select(this);
          var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
          var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g3.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d32.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d32.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
          var range = d3_scaleRange(scale1), path = g3.selectAll(".domain").data([0]), pathUpdate = (path.enter().append("path").attr("class", "domain"), d32.transition(path));
          tickEnter.append("line");
          tickEnter.append("text");
          var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
          if (orient === "bottom" || orient === "top") {
            tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
            text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
            pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
          } else {
            tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
            text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
            pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
          }
          lineEnter.attr(y2, sign * innerTickSize);
          textEnter.attr(y1, sign * tickSpacing);
          lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
          textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
          if (scale1.rangeBand) {
            var x3 = scale1, dx = x3.rangeBand() / 2;
            scale0 = scale1 = function(d) {
              return x3(d) + dx;
            };
          } else if (scale0.rangeBand) {
            scale0 = scale1;
          } else {
            tickExit.call(tickTransform, scale1, scale0);
          }
          tickEnter.call(tickTransform, scale0, scale1);
          tickUpdate.call(tickTransform, scale1, scale1);
        });
      }
      axis.scale = function(x2) {
        if (!arguments.length)
          return scale;
        scale = x2;
        return axis;
      };
      axis.orient = function(x2) {
        if (!arguments.length)
          return orient;
        orient = x2 in d3_svg_axisOrients ? x2 + "" : d3_svg_axisDefaultOrient;
        return axis;
      };
      axis.ticks = function() {
        if (!arguments.length)
          return tickArguments_;
        tickArguments_ = arguments;
        return axis;
      };
      axis.tickValues = function(x2) {
        if (!arguments.length)
          return tickValues;
        tickValues = x2;
        return axis;
      };
      axis.tickFormat = function(x2) {
        if (!arguments.length)
          return tickFormat_;
        tickFormat_ = x2;
        return axis;
      };
      axis.tickSize = function(x2) {
        var n2 = arguments.length;
        if (!n2)
          return innerTickSize;
        innerTickSize = +x2;
        outerTickSize = +arguments[n2 - 1];
        return axis;
      };
      axis.innerTickSize = function(x2) {
        if (!arguments.length)
          return innerTickSize;
        innerTickSize = +x2;
        return axis;
      };
      axis.outerTickSize = function(x2) {
        if (!arguments.length)
          return outerTickSize;
        outerTickSize = +x2;
        return axis;
      };
      axis.tickPadding = function(x2) {
        if (!arguments.length)
          return tickPadding;
        tickPadding = +x2;
        return axis;
      };
      axis.tickSubdivide = function() {
        return arguments.length && axis;
      };
      return axis;
    };
    var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
      top: 1,
      right: 1,
      bottom: 1,
      left: 1
    };
    function d3_svg_axisX(selection, x0, x1) {
      selection.attr("transform", function(d) {
        var v0 = x0(d);
        return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
      });
    }
    function d3_svg_axisY(selection, y0, y1) {
      selection.attr("transform", function(d) {
        var v0 = y0(d);
        return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
      });
    }
    d32.svg.brush = function() {
      var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x2 = null, y2 = null, xExtent = [0, 0], yExtent = [0, 0], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
      function brush(g2) {
        g2.each(function() {
          var g3 = d32.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
          var background = g3.selectAll(".background").data([0]);
          background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
          g3.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
          var resize = g3.selectAll(".resize").data(resizes, d3_identity);
          resize.exit().remove();
          resize.enter().append("g").attr("class", function(d) {
            return "resize " + d;
          }).style("cursor", function(d) {
            return d3_svg_brushCursor[d];
          }).append("rect").attr("x", function(d) {
            return /[ew]$/.test(d) ? -3 : null;
          }).attr("y", function(d) {
            return /^[ns]/.test(d) ? -3 : null;
          }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
          resize.style("display", brush.empty() ? "none" : null);
          var gUpdate = d32.transition(g3), backgroundUpdate = d32.transition(background), range;
          if (x2) {
            range = d3_scaleRange(x2);
            backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
            redrawX(gUpdate);
          }
          if (y2) {
            range = d3_scaleRange(y2);
            backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
            redrawY(gUpdate);
          }
          redraw(gUpdate);
        });
      }
      brush.event = function(g2) {
        g2.each(function() {
          var event_ = event.of(this, arguments), extent1 = {
            x: xExtent,
            y: yExtent,
            i: xExtentDomain,
            j: yExtentDomain
          }, extent0 = this.__chart__ || extent1;
          this.__chart__ = extent1;
          if (d3_transitionInheritId) {
            d32.select(this).transition().each("start.brush", function() {
              xExtentDomain = extent0.i;
              yExtentDomain = extent0.j;
              xExtent = extent0.x;
              yExtent = extent0.y;
              event_({
                type: "brushstart"
              });
            }).tween("brush:brush", function() {
              var xi2 = d3_interpolateArray(xExtent, extent1.x), yi2 = d3_interpolateArray(yExtent, extent1.y);
              xExtentDomain = yExtentDomain = null;
              return function(t2) {
                xExtent = extent1.x = xi2(t2);
                yExtent = extent1.y = yi2(t2);
                event_({
                  type: "brush",
                  mode: "resize"
                });
              };
            }).each("end.brush", function() {
              xExtentDomain = extent1.i;
              yExtentDomain = extent1.j;
              event_({
                type: "brush",
                mode: "resize"
              });
              event_({
                type: "brushend"
              });
            });
          } else {
            event_({
              type: "brushstart"
            });
            event_({
              type: "brush",
              mode: "resize"
            });
            event_({
              type: "brushend"
            });
          }
        });
      };
      function redraw(g2) {
        g2.selectAll(".resize").attr("transform", function(d) {
          return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
        });
      }
      function redrawX(g2) {
        g2.select(".extent").attr("x", xExtent[0]);
        g2.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
      }
      function redrawY(g2) {
        g2.select(".extent").attr("y", yExtent[0]);
        g2.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
      }
      function brushstart() {
        var target = this, eventTarget = d32.select(d32.event.target), event_ = event.of(target, arguments), g2 = d32.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x2, resizingY = !/^(e|w)$/.test(resizing) && y2, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(target), center, origin = d32.mouse(target), offset;
        var w2 = d32.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
        if (d32.event.changedTouches) {
          w2.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
        } else {
          w2.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
        }
        g2.interrupt().selectAll("*").interrupt();
        if (dragging) {
          origin[0] = xExtent[0] - origin[0];
          origin[1] = yExtent[0] - origin[1];
        } else if (resizing) {
          var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
          offset = [xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1]];
          origin[0] = xExtent[ex];
          origin[1] = yExtent[ey];
        } else if (d32.event.altKey)
          center = origin.slice();
        g2.style("pointer-events", "none").selectAll(".resize").style("display", null);
        d32.select("body").style("cursor", eventTarget.style("cursor"));
        event_({
          type: "brushstart"
        });
        brushmove();
        function keydown() {
          if (d32.event.keyCode == 32) {
            if (!dragging) {
              center = null;
              origin[0] -= xExtent[1];
              origin[1] -= yExtent[1];
              dragging = 2;
            }
            d3_eventPreventDefault();
          }
        }
        function keyup() {
          if (d32.event.keyCode == 32 && dragging == 2) {
            origin[0] += xExtent[1];
            origin[1] += yExtent[1];
            dragging = 0;
            d3_eventPreventDefault();
          }
        }
        function brushmove() {
          var point = d32.mouse(target), moved = false;
          if (offset) {
            point[0] += offset[0];
            point[1] += offset[1];
          }
          if (!dragging) {
            if (d32.event.altKey) {
              if (!center)
                center = [(xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2];
              origin[0] = xExtent[+(point[0] < center[0])];
              origin[1] = yExtent[+(point[1] < center[1])];
            } else
              center = null;
          }
          if (resizingX && move1(point, x2, 0)) {
            redrawX(g2);
            moved = true;
          }
          if (resizingY && move1(point, y2, 1)) {
            redrawY(g2);
            moved = true;
          }
          if (moved) {
            redraw(g2);
            event_({
              type: "brush",
              mode: dragging ? "move" : "resize"
            });
          }
        }
        function move1(point, scale, i) {
          var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
          if (dragging) {
            r0 -= position;
            r1 -= size + position;
          }
          min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
          if (dragging) {
            max = (min += position) + size;
          } else {
            if (center)
              position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
            if (position < min) {
              max = min;
              min = position;
            } else {
              max = position;
            }
          }
          if (extent[0] != min || extent[1] != max) {
            if (i)
              yExtentDomain = null;
            else
              xExtentDomain = null;
            extent[0] = min;
            extent[1] = max;
            return true;
          }
        }
        function brushend() {
          brushmove();
          g2.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
          d32.select("body").style("cursor", null);
          w2.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
          dragRestore();
          event_({
            type: "brushend"
          });
        }
      }
      brush.x = function(z2) {
        if (!arguments.length)
          return x2;
        x2 = z2;
        resizes = d3_svg_brushResizes[!x2 << 1 | !y2];
        return brush;
      };
      brush.y = function(z2) {
        if (!arguments.length)
          return y2;
        y2 = z2;
        resizes = d3_svg_brushResizes[!x2 << 1 | !y2];
        return brush;
      };
      brush.clamp = function(z2) {
        if (!arguments.length)
          return x2 && y2 ? [xClamp, yClamp] : x2 ? xClamp : y2 ? yClamp : null;
        if (x2 && y2)
          xClamp = !!z2[0], yClamp = !!z2[1];
        else if (x2)
          xClamp = !!z2;
        else if (y2)
          yClamp = !!z2;
        return brush;
      };
      brush.extent = function(z2) {
        var x0, x1, y0, y1, t2;
        if (!arguments.length) {
          if (x2) {
            if (xExtentDomain) {
              x0 = xExtentDomain[0], x1 = xExtentDomain[1];
            } else {
              x0 = xExtent[0], x1 = xExtent[1];
              if (x2.invert)
                x0 = x2.invert(x0), x1 = x2.invert(x1);
              if (x1 < x0)
                t2 = x0, x0 = x1, x1 = t2;
            }
          }
          if (y2) {
            if (yExtentDomain) {
              y0 = yExtentDomain[0], y1 = yExtentDomain[1];
            } else {
              y0 = yExtent[0], y1 = yExtent[1];
              if (y2.invert)
                y0 = y2.invert(y0), y1 = y2.invert(y1);
              if (y1 < y0)
                t2 = y0, y0 = y1, y1 = t2;
            }
          }
          return x2 && y2 ? [[x0, y0], [x1, y1]] : x2 ? [x0, x1] : y2 && [y0, y1];
        }
        if (x2) {
          x0 = z2[0], x1 = z2[1];
          if (y2)
            x0 = x0[0], x1 = x1[0];
          xExtentDomain = [x0, x1];
          if (x2.invert)
            x0 = x2(x0), x1 = x2(x1);
          if (x1 < x0)
            t2 = x0, x0 = x1, x1 = t2;
          if (x0 != xExtent[0] || x1 != xExtent[1])
            xExtent = [x0, x1];
        }
        if (y2) {
          y0 = z2[0], y1 = z2[1];
          if (x2)
            y0 = y0[1], y1 = y1[1];
          yExtentDomain = [y0, y1];
          if (y2.invert)
            y0 = y2(y0), y1 = y2(y1);
          if (y1 < y0)
            t2 = y0, y0 = y1, y1 = t2;
          if (y0 != yExtent[0] || y1 != yExtent[1])
            yExtent = [y0, y1];
        }
        return brush;
      };
      brush.clear = function() {
        if (!brush.empty()) {
          xExtent = [0, 0], yExtent = [0, 0];
          xExtentDomain = yExtentDomain = null;
        }
        return brush;
      };
      brush.empty = function() {
        return !!x2 && xExtent[0] == xExtent[1] || !!y2 && yExtent[0] == yExtent[1];
      };
      return d32.rebind(brush, event, "on");
    };
    var d3_svg_brushCursor = {
      n: "ns-resize",
      e: "ew-resize",
      s: "ns-resize",
      w: "ew-resize",
      nw: "nwse-resize",
      ne: "nesw-resize",
      se: "nwse-resize",
      sw: "nesw-resize"
    };
    var d3_svg_brushResizes = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
    var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
    var d3_time_formatUtc = d3_time_format.utc;
    var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
    d3_time_format.iso = Date.prototype.toISOString && +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
    function d3_time_formatIsoNative(date) {
      return date.toISOString();
    }
    d3_time_formatIsoNative.parse = function(string) {
      var date = new Date(string);
      return isNaN(date) ? null : date;
    };
    d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
    d3_time.second = d3_time_interval(function(date) {
      return new d3_date(Math.floor(date / 1e3) * 1e3);
    }, function(date, offset) {
      date.setTime(date.getTime() + Math.floor(offset) * 1e3);
    }, function(date) {
      return date.getSeconds();
    });
    d3_time.seconds = d3_time.second.range;
    d3_time.seconds.utc = d3_time.second.utc.range;
    d3_time.minute = d3_time_interval(function(date) {
      return new d3_date(Math.floor(date / 6e4) * 6e4);
    }, function(date, offset) {
      date.setTime(date.getTime() + Math.floor(offset) * 6e4);
    }, function(date) {
      return date.getMinutes();
    });
    d3_time.minutes = d3_time.minute.range;
    d3_time.minutes.utc = d3_time.minute.utc.range;
    d3_time.hour = d3_time_interval(function(date) {
      var timezone = date.getTimezoneOffset() / 60;
      return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
    }, function(date, offset) {
      date.setTime(date.getTime() + Math.floor(offset) * 36e5);
    }, function(date) {
      return date.getHours();
    });
    d3_time.hours = d3_time.hour.range;
    d3_time.hours.utc = d3_time.hour.utc.range;
    d3_time.month = d3_time_interval(function(date) {
      date = d3_time.day(date);
      date.setDate(1);
      return date;
    }, function(date, offset) {
      date.setMonth(date.getMonth() + offset);
    }, function(date) {
      return date.getMonth();
    });
    d3_time.months = d3_time.month.range;
    d3_time.months.utc = d3_time.month.utc.range;
    function d3_time_scale(linear, methods, format) {
      function scale(x2) {
        return linear(x2);
      }
      scale.invert = function(x2) {
        return d3_time_scaleDate(linear.invert(x2));
      };
      scale.domain = function(x2) {
        if (!arguments.length)
          return linear.domain().map(d3_time_scaleDate);
        linear.domain(x2);
        return scale;
      };
      function tickMethod(extent, count) {
        var span = extent[1] - extent[0], target = span / count, i = d32.bisect(d3_time_scaleSteps, target);
        return i == d3_time_scaleSteps.length ? [methods.year, d3_scale_linearTickRange(extent.map(function(d) {
          return d / 31536e6;
        }), count)[2]] : !i ? [d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2]] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
      }
      scale.nice = function(interval, skip) {
        var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
        if (method)
          interval = method[0], skip = method[1];
        function skipped(date) {
          return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
        }
        return scale.domain(d3_scale_nice(domain, skip > 1 ? {
          floor: function(date) {
            while (skipped(date = interval.floor(date)))
              date = d3_time_scaleDate(date - 1);
            return date;
          },
          ceil: function(date) {
            while (skipped(date = interval.ceil(date)))
              date = d3_time_scaleDate(+date + 1);
            return date;
          }
        } : interval));
      };
      scale.ticks = function(interval, skip) {
        var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [{
          range: interval
        }, skip];
        if (method)
          interval = method[0], skip = method[1];
        return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
      };
      scale.tickFormat = function() {
        return format;
      };
      scale.copy = function() {
        return d3_time_scale(linear.copy(), methods, format);
      };
      return d3_scale_linearRebind(scale, linear);
    }
    function d3_time_scaleDate(t2) {
      return new Date(t2);
    }
    var d3_time_scaleSteps = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6];
    var d3_time_scaleLocalMethods = [[d3_time.second, 1], [d3_time.second, 5], [d3_time.second, 15], [d3_time.second, 30], [d3_time.minute, 1], [d3_time.minute, 5], [d3_time.minute, 15], [d3_time.minute, 30], [d3_time.hour, 1], [d3_time.hour, 3], [d3_time.hour, 6], [d3_time.hour, 12], [d3_time.day, 1], [d3_time.day, 2], [d3_time.week, 1], [d3_time.month, 1], [d3_time.month, 3], [d3_time.year, 1]];
    var d3_time_scaleLocalFormat = d3_time_format.multi([[".%L", function(d) {
      return d.getMilliseconds();
    }], [":%S", function(d) {
      return d.getSeconds();
    }], ["%I:%M", function(d) {
      return d.getMinutes();
    }], ["%I %p", function(d) {
      return d.getHours();
    }], ["%a %d", function(d) {
      return d.getDay() && d.getDate() != 1;
    }], ["%b %d", function(d) {
      return d.getDate() != 1;
    }], ["%B", function(d) {
      return d.getMonth();
    }], ["%Y", d3_true]]);
    var d3_time_scaleMilliseconds = {
      range: function(start, stop, step) {
        return d32.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
      },
      floor: d3_identity,
      ceil: d3_identity
    };
    d3_time_scaleLocalMethods.year = d3_time.year;
    d3_time.scale = function() {
      return d3_time_scale(d32.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
    };
    var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m2) {
      return [m2[0].utc, m2[1]];
    });
    var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([[".%L", function(d) {
      return d.getUTCMilliseconds();
    }], [":%S", function(d) {
      return d.getUTCSeconds();
    }], ["%I:%M", function(d) {
      return d.getUTCMinutes();
    }], ["%I %p", function(d) {
      return d.getUTCHours();
    }], ["%a %d", function(d) {
      return d.getUTCDay() && d.getUTCDate() != 1;
    }], ["%b %d", function(d) {
      return d.getUTCDate() != 1;
    }], ["%B", function(d) {
      return d.getUTCMonth();
    }], ["%Y", d3_true]]);
    d3_time_scaleUtcMethods.year = d3_time.year.utc;
    d3_time.scale.utc = function() {
      return d3_time_scale(d32.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
    };
    d32.text = d3_xhrType(function(request) {
      return request.responseText;
    });
    d32.json = function(url, callback) {
      return d3_xhr(url, "application/json", d3_json, callback);
    };
    function d3_json(request) {
      return JSON.parse(request.responseText);
    }
    d32.html = function(url, callback) {
      return d3_xhr(url, "text/html", d3_html, callback);
    };
    function d3_html(request) {
      var range = d3_document.createRange();
      range.selectNode(d3_document.body);
      return range.createContextualFragment(request.responseText);
    }
    d32.xml = d3_xhrType(function(request) {
      return request.responseXML;
    });
    if (module.exports)
      module.exports = d32;
    this.d3 = d32;
  }).call(window);
})(d3$1);
var d3Exports = d3$1.exports;
var define_global_default = {};
var globals = {};
if ("d3" in define_global_default)
  globals.d3 = define_global_default.d3;
var d3 = d3Exports;
if ("d3" in globals)
  define_global_default.d3 = globals.d3;
else
  delete define_global_default.d3;
function d3custom() {
  var dataQueue = [], arr = [], count = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0, stop = false, data = d3.range(243).map(function() {
    return 0;
  }), data2 = d3.range(243).map(function() {
    return 0;
  }), data3 = d3.range(243).map(function() {
    return 0;
  }), data4 = d3.range(243).map(function() {
    return 0;
  }), data5 = d3.range(243).map(function() {
    return 0;
  }), data6 = d3.range(243).map(function() {
    return 0;
  });
  var chart = function(selection) {
    console.log("chart function called");
    var n2 = 243, duration = 750, now = new Date(Date.now() - duration);
    var margin = { top: 6, right: 0, bottom: 20, left: 0 }, width = 550 - margin.right, height = 160 - margin.top - margin.bottom;
    var x2 = d3.time.scale().domain([+now - (n2 - 2) * duration, +now - duration]).range([0, width]);
    var y2 = d3.scale.linear().range([height, 0]);
    var line = d3.svg.line().interpolate("basis").x(function(d, i) {
      return x2(+now - (n2 - 1 - i) * duration);
    }).y(function(d, i) {
      return y2(d);
    });
    var svg = d3.select(selection).append("svg").attr("class", "animal").attr("width", "550px").attr("height", "160px").style("margin-left", "10px").append("g").attr("transform", "translate(0,6)");
    console.log(svg, "svg created?");
    svg.append("defs").append("clipPath").attr("id", "clip").append("rect").attr("width", width).attr("height", height);
    var axis = svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(x2.axis = d3.svg.axis().scale(x2).orient("bottom"));
    var path = svg.append("g").append("path").datum(data).style("stroke", "black").attr("class", "line");
    var path2 = svg.append("g").append("path").datum(data2).style("stroke", "black").attr("class", "line");
    var path3 = svg.append("g").append("path").datum(data3).style("stroke", "black").attr("class", "line");
    var path4 = svg.append("g").append("path").datum(data4).style("stroke", "black").attr("class", "line");
    var path5 = svg.append("g").append("path").datum(data5).style("stroke", "black").attr("class", "line");
    var path6 = svg.append("g").append("path").datum(data6).style("stroke", "black").attr("class", "line");
    var transition = d3.select({}).transition().duration(750).ease("linear");
    function tick() {
      console.log("tick function - now empty after commenting out transition");
      stop = false;
      transition = transition.each(function(d, i) {
        var max = d3.max(data);
        var max2 = d3.max(data2);
        var max3 = d3.max(data3);
        var max4 = d3.max(data4);
        var max5 = d3.max(data5);
        var max6 = d3.max(data6);
        var maxarr = [max, max2, max3, max4, max5, max6];
        var maxvalue = d3.max(maxarr);
        now = /* @__PURE__ */ new Date();
        x2.domain([+now - (n2 - 2) * duration, +now - duration]);
        y2.domain([0, maxvalue]);
        if (dataQueue.length > 1) {
          arr = dataQueue.pop();
        }
        if (arr[0] !== void 0) {
          count = arr[0].count;
        }
        if (arr[1] !== void 0) {
          count2 = arr[1].count;
        }
        if (arr[2] !== void 0) {
          count3 = arr[2].count;
        }
        if (arr[3] !== void 0) {
          count4 = arr[3].count;
        }
        if (arr[4] !== void 0) {
          count5 = arr[4].count;
        }
        if (arr[5] !== void 0) {
          count6 = arr[5].count;
        }
        data.push(Math.max(0, count));
        data2.push(Math.max(0, count2));
        data3.push(Math.max(0, count3));
        data4.push(Math.max(0, count4));
        data5.push(Math.max(0, count5));
        data6.push(Math.max(0, count6));
        count = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0;
        count5 = 0;
        count6 = 0;
        svg.selectAll(".line").attr("d", line).attr("fill", "none").attr("transform", null);
        axis.call(x2.axis);
        var line_colors = [
          // '#009688',
          "#009688",
          "#ff5722",
          // '#009688',
          "#673ab7",
          "#795548",
          "#e91e63",
          "#03a9f4"
        ];
        if (arr.length !== 0) {
          console.log("this.colors", this.colors);
          path.transition().attr("transform", "translate(" + x2(+now - (n2 - 1) * duration) + ")").style("stroke", line_colors[0]).style("stroke-width", "6");
          path2.transition().attr("transform", "translate(" + x2(+now - (n2 - 1) * duration) + ")").style("stroke", line_colors[1]).style("stroke-width", "5");
          path3.transition().attr("transform", "translate(" + x2(+now - (n2 - 1) * duration) + ")").style("stroke", line_colors[2]).style("stroke-width", "4");
          path4.transition().attr("transform", "translate(" + x2(+now - (n2 - 1) * duration) + ")").style("stroke", line_colors[3]).style("stroke-width", "3");
          path5.transition().attr("transform", "translate(" + x2(+now - (n2 - 1) * duration) + ")").style("stroke", line_colors[4]).style("stroke-width", "2");
          path6.transition().attr("transform", "translate(" + x2(+now - (n2 - 1) * duration) + ")").style("stroke", line_colors[5]).style("stroke-width", "1");
        }
        data.shift();
        data2.shift();
        data3.shift();
        data4.shift();
        data5.shift();
        data6.shift();
      }).transition().each("start", function() {
        if (stop === true) {
          console.log("");
        } else {
          tick();
        }
      });
    }
    return tick;
  };
  chart.addToChart = function(value) {
    if (!arguments.length) {
      return;
    }
    console.log(value, "value added to dataQueue");
    dataQueue.push(value);
    return;
  };
  chart.stop = function() {
    stop = true;
    data = d3.range(243).map(function() {
      return 0;
    });
    data2 = d3.range(243).map(function() {
      return 0;
    });
    data3 = d3.range(243).map(function() {
      return 0;
    });
    data4 = d3.range(243).map(function() {
      return 0;
    });
    data5 = d3.range(243).map(function() {
      return 0;
    });
    data6 = d3.range(243).map(function() {
      return 0;
    });
    dataQueue = [];
    return;
  };
  return chart;
}
class HeaderDomManager {
  constructor(store2) {
    __publicField(this, "store");
    // library any ok
    __publicField(this, "logo");
    // HeaderState   header: boolean;
    __publicField(this, "running");
    __publicField(this, "chart");
    // library any
    __publicField(this, "logoBars");
    __publicField(this, "timer");
    // library any ok
    __publicField(this, "subscription");
    // library any ok
    __publicField(this, "colors");
    __publicField(this, "onInit", () => {
      this.store.getState();
      this.running = false;
    });
    __publicField(this, "listener", () => {
      let state = this.store.getState();
      if (state.controller.lineGraph.instructions === true) {
        if (this.running === true) {
          let header = document.getElementById("header");
          header.innerHTML = "";
          this.chart.stop();
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
          this.running = false;
        }
      } else if (state.controller.lineGraph.instructions === false) {
        if (this.running === false) {
          let header = document.getElementById("header");
          header.innerHTML = "";
          this.chart = d3custom();
          var a = this.chart("#header");
          a();
          this.running = true;
        }
      }
      var expvar_array = state.controller.lineGraph.expvars;
      let f2 = d3.format(",");
      function formatBytes(a2, b = 2) {
        if (!+a2)
          return "0 Bytes";
        const c = 0 > b ? 0 : b, d = Math.floor(Math.log(a2) / Math.log(1024));
        return `${parseFloat((a2 / Math.pow(1024, d)).toFixed(c))} ${["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"][d]}`;
      }
      if (expvar_array.length > 0) {
        let labels = document.getElementById("labels");
        labels.innerHTML = "";
        this.chart.addToChart(expvar_array, expvar_array.length);
        var colors = [
          // '#009688',
          "#009688",
          "#ff5722",
          // '#009688',
          "#673ab7",
          "#795548",
          "#e91e63",
          "#03a9f4"
        ];
        var colorarr = [colors[0], colors[1], colors[2], colors[3], colors[4], colors[5]];
        if (this.running === true) {
          var svg = d3.select("#labels").append("svg").attr("width", "500px").attr("height", "100px");
          svg.append("defs").append("style").attr("font-family", "Roboto").attr("type", "text/css").text("@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800');");
          let circle;
          let circleEnter;
          let text;
          let textEnter;
          circle = svg.selectAll("circle").data([1, 2, 3, 4]);
          circleEnter = circle.enter().append("circle");
          circleEnter.attr("cx", 120);
          circleEnter.attr("cy", function(d) {
            return d * 20;
          });
          circleEnter.attr("r", "6");
          circleEnter.attr("fill", function(d, i) {
            return colorarr[i];
          });
          text = svg.selectAll("text").data([expvar_array[0].name, expvar_array[1].name, expvar_array[2].name, expvar_array[3].name]);
          textEnter = text.enter().append("text");
          textEnter.attr("x", 130);
          textEnter.attr("font-size", 20);
          textEnter.attr("font-family", "Roboto");
          textEnter.attr("font-weight", "medium");
          textEnter.attr("type", "text/css");
          textEnter.text("@import url('https://fonts.googleapis.com/css2?family=Roboto:400,300,600,700,800');");
          textEnter.attr("y", function(d, i) {
            return i === 0 ? 25 : i * 20 + 25;
          });
          textEnter.text(function(d, i) {
            return f2(expvar_array[i].count) + " : " + d + "(" + formatBytes(expvar_array[i].count) + " )";
          });
        }
      }
    });
    this.store = store2;
    this.store.subscribe(this.listener);
    this.onInit();
  }
  // listener close 
}
function addInstructions(reduxStore) {
  return new HeaderDomManager(reduxStore);
}
addInstructions(store);
client$1.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React$1.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Provider_default, { store, children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
);
