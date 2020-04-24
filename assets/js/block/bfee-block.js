function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */

/*! For license information please see editor.js.LICENSE */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.EditorJS = e() : t.EditorJS = e();
}(window, function () {
  return function (t) {
    var e = {};

    function n(o) {
      if (e[o]) return e[o].exports;
      var i = e[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: o
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var i in t) {
        n.d(o, i, function (e) {
          return t[e];
        }.bind(null, i));
      }
      return o;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 171);
  }([function (t, e, n) {
    var o = n(8),
        i = n(17),
        r = n(24),
        a = n(21),
        s = n(29),
        l = function l(t, e, n) {
      var c,
          u,
          f,
          d,
          p = t & l.F,
          h = t & l.G,
          v = t & l.S,
          g = t & l.P,
          y = t & l.B,
          b = h ? o : v ? o[e] || (o[e] = {}) : (o[e] || {}).prototype,
          m = h ? i : i[e] || (i[e] = {}),
          k = m.prototype || (m.prototype = {});

      for (c in h && (n = e), n) {
        f = ((u = !p && b && void 0 !== b[c]) ? b : n)[c], d = y && u ? s(f, o) : g && "function" == typeof f ? s(Function.call, f) : f, b && a(b, c, f, t & l.U), m[c] != f && r(m, c, d), g && k[c] != f && (k[c] = f);
      }
    };

    o.core = i, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l;
  }, function (t, e) {
    t.exports = function (t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    };
  }, function (t, e) {
    function n(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    t.exports = function (t, e, o) {
      return e && n(t.prototype, e), o && n(t, o), t;
    };
  }, function (t, e, n) {
    var o = n(51),
        i = n(357);

    t.exports = function (t, e) {
      return !e || "object" !== o(e) && "function" != typeof e ? i(t) : e;
    };
  }, function (t, e) {
    function n(e) {
      return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, n(e);
    }

    t.exports = n;
  }, function (t, e, n) {
    var o = n(358);

    t.exports = function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && o(t, e);
    };
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3)], void 0 === (r = "function" == typeof (o = function o(_o, i, r) {
      "use strict";

      var a = n(1);
      Object.defineProperty(_o, "__esModule", {
        value: !0
      }), _o.default = void 0, i = a(i), r = a(r);

      var s = function () {
        function t(e) {
          var n = e.config;
          if ((0, i.default)(this, t), (this instanceof t ? this.constructor : void 0) === t) throw new TypeError("Constructors for abstract class Module are not allowed.");
          this.config = n;
        }

        return (0, r.default)(t, [{
          key: "state",
          set: function set(t) {
            this.Editor = t;
          }
        }]), t;
      }();

      _o.default = s, s.displayName = "Module", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n);
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  }, function (t, e, n) {
    var o = n(11);

    t.exports = function (t) {
      if (!o(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  }, function (t, e) {
    t.exports = function (t) {
      return "object" == _typeof(t) ? null !== t : "function" == typeof t;
    };
  }, function (t, e, n) {
    var o = n(64)("wks"),
        i = n(41),
        r = n(8).Symbol,
        a = "function" == typeof r;
    (t.exports = function (t) {
      return o[t] || (o[t] = a && r[t] || (a ? r : i)("Symbol." + t));
    }).store = o;
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(51), n(103), n(2), n(3)], void 0 === (r = "function" == typeof (o = function o(_o2, i, r, a, s) {
      "use strict";

      var l = n(1);
      Object.defineProperty(_o2, "__esModule", {
        value: !0
      }), _o2.default = void 0, i = l(i), r = l(r), a = l(a), s = l(s);

      var c = function () {
        function t() {
          (0, a.default)(this, t);
        }

        return (0, s.default)(t, null, [{
          key: "isSingleTag",
          value: function value(t) {
            return t.tagName && ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"].includes(t.tagName);
          }
        }, {
          key: "isLineBreakTag",
          value: function value(t) {
            return t && t.tagName && ["BR", "WBR"].includes(t.tagName);
          }
        }, {
          key: "make",
          value: function value(t) {
            var e,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = document.createElement(t);

            for (var a in Array.isArray(n) ? (e = i.classList).add.apply(e, (0, r.default)(n)) : n && i.classList.add(n), o) {
              o.hasOwnProperty(a) && (i[a] = o[a]);
            }

            return i;
          }
        }, {
          key: "text",
          value: function value(t) {
            return document.createTextNode(t);
          }
        }, {
          key: "svg",
          value: function value(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 14,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 14,
                o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            return o.classList.add("icon", "icon--" + t), o.setAttribute("width", e + "px"), o.setAttribute("height", n + "px"), o.innerHTML = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t, '"></use>'), o;
          }
        }, {
          key: "append",
          value: function value(t, e) {
            Array.isArray(e) ? e.forEach(function (e) {
              return t.appendChild(e);
            }) : t.appendChild(e);
          }
        }, {
          key: "prepend",
          value: function value(t, e) {
            Array.isArray(e) ? (e = e.reverse()).forEach(function (e) {
              return t.prepend(e);
            }) : t.prepend(e);
          }
        }, {
          key: "swap",
          value: function value(t, e) {
            var n = document.createElement("div"),
                o = t.parentNode;
            o.insertBefore(n, t), o.insertBefore(t, e), o.insertBefore(e, n), o.removeChild(n);
          }
        }, {
          key: "find",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                e = arguments.length > 1 ? arguments[1] : void 0;
            return t.querySelector(e);
          }
        }, {
          key: "get",
          value: function value(t) {
            return document.getElementById(t);
          }
        }, {
          key: "findAll",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                e = arguments.length > 1 ? arguments[1] : void 0;
            return t.querySelectorAll(e);
          }
        }, {
          key: "getDeepestNode",
          value: function value(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                o = n ? "lastChild" : "firstChild",
                i = n ? "previousSibling" : "nextSibling";

            if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
              var r = e[o];
              if (t.isSingleTag(r) && !t.isNativeInput(r) && !t.isLineBreakTag(r)) if (r[i]) r = r[i];else {
                if (!r.parentNode[i]) return r.parentNode;
                r = r.parentNode[i];
              }
              return this.getDeepestNode(r, n);
            }

            return e;
          }
        }, {
          key: "isElement",
          value: function value(t) {
            return t && "object" === (0, i.default)(t) && t.nodeType && t.nodeType === Node.ELEMENT_NODE;
          }
        }, {
          key: "isFragment",
          value: function value(t) {
            return t && "object" === (0, i.default)(t) && t.nodeType && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
          }
        }, {
          key: "isContentEditable",
          value: function value(t) {
            return "true" === t.contentEditable;
          }
        }, {
          key: "isNativeInput",
          value: function value(t) {
            return !(!t || !t.tagName) && ["INPUT", "TEXTAREA"].includes(t.tagName);
          }
        }, {
          key: "canSetCaret",
          value: function value(e) {
            var n = !0;
            if (t.isNativeInput(e)) switch (e.type) {
              case "file":
              case "checkbox":
              case "radio":
              case "hidden":
              case "submit":
              case "button":
              case "image":
              case "reset":
                n = !1;
            } else n = t.isContentEditable(e);
            return n;
          }
        }, {
          key: "isNodeEmpty",
          value: function value(t) {
            return !(this.isSingleTag(t) && !this.isLineBreakTag(t)) && 0 === (this.isElement(t) && this.isNativeInput(t) ? t.value : t.textContent.replace("​", "")).trim().length;
          }
        }, {
          key: "isLeaf",
          value: function value(t) {
            return !!t && 0 === t.childNodes.length;
          }
        }, {
          key: "isEmpty",
          value: function value(t) {
            var e = this,
                n = [],
                o = [];
            if (!t) return !0;
            if (!t.childNodes.length) return this.isNodeEmpty(t);

            for (t.normalize(), n.push(t.firstChild); n.length > 0;) {
              if (t = n.shift()) {
                for (this.isLeaf(t) ? o.push(t) : n.push(t.firstChild); t && t.nextSibling;) {
                  (t = t.nextSibling) && n.push(t);
                }

                if (t && !this.isNodeEmpty(t)) return !1;
              }
            }

            return o.every(function (t) {
              return e.isNodeEmpty(t);
            });
          }
        }, {
          key: "isHTMLString",
          value: function value(e) {
            var n = t.make("div");
            return n.innerHTML = e, n.childElementCount > 0;
          }
        }, {
          key: "getContentLength",
          value: function value(e) {
            return t.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
          }
        }, {
          key: "containsOnlyInlineElements",
          value: function value(e) {
            var n;
            return "string" == typeof e ? (n = document.createElement("div")).innerHTML = e : n = e, Array.from(n.children).every(function e(n) {
              return !t.blockElements.includes(n.tagName.toLowerCase()) && Array.from(n.children).every(e);
            });
          }
        }, {
          key: "getDeepestBlockElements",
          value: function value(e) {
            return t.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce(function (e, n) {
              return [].concat((0, r.default)(e), (0, r.default)(t.getDeepestBlockElements(n)));
            }, []);
          }
        }, {
          key: "getHolder",
          value: function value(t) {
            return "string" == typeof t ? document.getElementById(t) : t;
          }
        }, {
          key: "isExtensionNode",
          value: function value(t) {
            return t && ["GRAMMARLY-EXTENSION"].includes(t.nodeName);
          }
        }, {
          key: "blockElements",
          get: function get() {
            return ["address", "article", "aside", "blockquote", "canvas", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "ruby", "section", "table", "tr", "tfoot", "ul", "video"];
          }
        }]), t;
      }();

      _o2.default = c, c.displayName = "Dom", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(355), n(27), n(13)], void 0 === (r = "function" == typeof (o = function o(t, e, _o3, i) {
      "use strict";

      var r,
          a = n(1);

      function s(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "log",
            o = arguments.length > 3 ? arguments[3] : void 0,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "color: inherit";

        if ("console" in window && window.console[n]) {
          var a = ["info", "log", "warn", "error"].includes(n),
              l = [];

          switch (s.logLevel) {
            case r.ERROR:
              if ("error" !== n) return;
              break;

            case r.WARN:
              if (!["error", "warn"].includes(n)) return;
              break;

            case r.INFO:
              if (!a || t) return;
          }

          o && l.push(o);
          var c = "Editor.js ".concat("2.16.1");
          t && (a ? (l.unshift("line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;", i), e = "%c".concat(c, "%c ").concat(e)) : e = "( ".concat(c, " )").concat(e));

          try {
            if (a) {
              if (o) {
                var u;
                (u = console)[n].apply(u, ["".concat(e, " %o")].concat(l));
              } else {
                var f;
                (f = console)[n].apply(f, [e].concat(l));
              }
            } else console[n](e);
          } catch (t) {}
        }
      }

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.setLogLevel = function (t) {
        s.logLevel = t;
      }, t.isPrintableKey = function (t) {
        return t > 47 && t < 58 || 32 === t || 13 === t || t > 64 && t < 91 || t > 95 && t < 112 || t > 185 && t < 193 || t > 218 && t < 223;
      }, t.sequence = function (t) {
        var e,
            n,
            i,
            r = arguments;
        return _o3.default.async(function (a) {
          for (;;) {
            switch (a.prev = a.next) {
              case 0:
                return i = function i(t, e, n) {
                  return _o3.default.async(function (i) {
                    for (;;) {
                      switch (i.prev = i.next) {
                        case 0:
                          return i.prev = 0, i.next = 3, _o3.default.awrap(t.function(t.data));

                        case 3:
                          return i.next = 5, _o3.default.awrap(e(void 0 !== t.data ? t.data : {}));

                        case 5:
                          i.next = 10;
                          break;

                        case 7:
                          i.prev = 7, i.t0 = i.catch(0), n(void 0 !== t.data ? t.data : {});

                        case 10:
                        case "end":
                          return i.stop();
                      }
                    }
                  }, null, null, [[0, 7]]);
                }, e = r.length > 1 && void 0 !== r[1] ? r[1] : function () {}, n = r.length > 2 && void 0 !== r[2] ? r[2] : function () {}, a.next = 5, _o3.default.awrap(t.reduce(function (t, r) {
                  return _o3.default.async(function (a) {
                    for (;;) {
                      switch (a.prev = a.next) {
                        case 0:
                          return a.next = 2, _o3.default.awrap(t);

                        case 2:
                          return a.abrupt("return", i(r, e, n));

                        case 3:
                        case "end":
                          return a.stop();
                      }
                    }
                  });
                }, Promise.resolve()));

              case 5:
                return a.abrupt("return", a.sent);

              case 6:
              case "end":
                return a.stop();
            }
          }
        });
      }, t.array = function (t) {
        return Array.prototype.slice.call(t);
      }, t.isFunction = function (t) {
        return "function" == typeof t;
      }, t.isClass = function (t) {
        return "function" == typeof t && /^\s*class\s+/.test(t.toString());
      }, t.isEmpty = function (t) {
        return !t || 0 === Object.keys(t).length && t.constructor === Object;
      }, t.isPromise = function (t) {
        return Promise.resolve(t) === t;
      }, t.delay = function (t, e) {
        return function () {
          var n = this,
              o = arguments;
          window.setTimeout(function () {
            return t.apply(n, o);
          }, e);
        };
      }, t.getFileExtension = function (t) {
        return t.name.split(".").pop();
      }, t.isValidMimeType = function (t) {
        return /^[-\w]+\/([-+\w]+|\*)$/.test(t);
      }, t.debounce = function (t, e, n) {
        var o,
            i = arguments,
            r = this;
        return function () {
          var a = r,
              s = i,
              l = n && !o;
          window.clearTimeout(o), o = window.setTimeout(function () {
            o = null, n || t.apply(a, s);
          }, e), l && t.apply(a, s);
        };
      }, t.copyTextToClipboard = function (t) {
        var e = i.default.make("div", "codex-editor-clipboard", {
          innerHTML: t
        });
        document.body.appendChild(e);
        var n = window.getSelection(),
            o = document.createRange();
        o.selectNode(e), window.getSelection().removeAllRanges(), n.addRange(o), document.execCommand("copy"), document.body.removeChild(e);
      }, t.getUserOS = u, t.capitalize = function (t) {
        return t[0].toUpperCase() + t.slice(1);
      }, t.deepMerge = function t(n) {
        for (var o = function o(t) {
          return t && "object" === d(t);
        }, i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) {
          r[a - 1] = arguments[a];
        }

        if (!r.length) return n;
        var s = r.shift();
        if (o(n) && o(s)) for (var l in s) {
          o(s[l]) ? (n[l] || Object.assign(n, (0, e.default)({}, l, {})), t(n[l], s[l])) : Object.assign(n, (0, e.default)({}, l, s[l]));
        }
        return t.apply(void 0, [n].concat(r));
      }, t.typeOf = d, t.beautifyShortcut = function (t) {
        var e = u();
        return t = t.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), t = e.mac ? t.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : t.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN");
      }, t.isTouchSupported = t.logLabeled = t.log = t.mouseButtons = t.keyCodes = t.LogLevels = void 0, e = a(e), _o3 = a(_o3), i = a(i), t.LogLevels = r, function (t) {
        t.VERBOSE = "VERBOSE", t.INFO = "INFO", t.WARN = "WARN", t.ERROR = "ERROR";
      }(r || (t.LogLevels = r = {})), t.keyCodes = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        DOWN: 40,
        RIGHT: 39,
        DELETE: 46,
        META: 91
      }, t.mouseButtons = {
        LEFT: 0,
        WHEEL: 1,
        RIGHT: 2,
        BACKWARD: 3,
        FORWARD: 4
      }, s.logLevel = r.VERBOSE;
      var l = s.bind(window, !1);
      t.log = l;
      var c = s.bind(window, !0);

      function u() {
        var t = {
          win: !1,
          mac: !1,
          x11: !1,
          linux: !1
        },
            e = Object.keys(t).find(function (t) {
          return -1 !== navigator.appVersion.toLowerCase().indexOf(t);
        });
        return e ? (t[e] = !0, t) : t;
      }

      t.logLabeled = c;
      var f = ("ontouchstart" in document.documentElement);

      function d(t) {
        return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      }

      t.isTouchSupported = f;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o = n(51);

    function i() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap();
      return i = function i() {
        return t;
      }, t;
    }

    t.exports = function (t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" !== o(t) && "function" != typeof t) return {
        default: t
      };
      var e = i();
      if (e && e.has(t)) return e.get(t);
      var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var a in t) {
        if (Object.prototype.hasOwnProperty.call(t, a)) {
          var s = r ? Object.getOwnPropertyDescriptor(t, a) : null;
          s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a];
        }
      }

      return n.default = t, e && e.set(t, n), n;
    };
  }, function (t, e, n) {
    var o = n(31),
        i = Math.min;

    t.exports = function (t) {
      return t > 0 ? i(o(t), 9007199254740991) : 0;
    };
  }, function (t, e) {
    var n = t.exports = {
      version: "2.6.10"
    };
    "number" == typeof __e && (__e = n);
  }, function (t, e, n) {
    t.exports = !n(9)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (t, e, n) {
    var o = n(10),
        i = n(104),
        r = n(38),
        a = Object.defineProperty;
    e.f = n(18) ? Object.defineProperty : function (t, e, n) {
      if (o(t), e = r(e, !0), o(n), i) try {
        return a(t, e, n);
      } catch (t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (t[e] = n.value), t;
    };
  }, function (t, e, n) {
    var o = n(36);

    t.exports = function (t) {
      return Object(o(t));
    };
  }, function (t, e, n) {
    var o = n(8),
        i = n(24),
        r = n(23),
        a = n(41)("src"),
        s = n(176),
        l = ("" + s).split("toString");
    n(17).inspectSource = function (t) {
      return s.call(t);
    }, (t.exports = function (t, e, n, s) {
      var c = "function" == typeof n;
      c && (r(n, "name") || i(n, "name", e)), t[e] !== n && (c && (r(n, a) || i(n, a, t[e] ? "" + t[e] : l.join(String(e)))), t === o ? t[e] = n : s ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)));
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && this[a] || s.call(this);
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(9),
        r = n(36),
        a = /"/g,
        s = function s(t, e, n, o) {
      var i = String(r(t)),
          s = "<" + e;
      return "" !== n && (s += " " + n + '="' + String(o).replace(a, "&quot;") + '"'), s + ">" + i + "</" + e + ">";
    };

    t.exports = function (t, e) {
      var n = {};
      n[t] = e(s), o(o.P + o.F * i(function () {
        var e = ""[t]('"');
        return e !== e.toLowerCase() || e.split('"').length > 3;
      }), "String", n);
    };
  }, function (t, e) {
    var n = {}.hasOwnProperty;

    t.exports = function (t, e) {
      return n.call(t, e);
    };
  }, function (t, e, n) {
    var o = n(19),
        i = n(40);
    t.exports = n(18) ? function (t, e, n) {
      return o.f(t, e, i(1, n));
    } : function (t, e, n) {
      return t[e] = n, t;
    };
  }, function (t, e, n) {
    var o = n(60),
        i = n(36);

    t.exports = function (t) {
      return o(i(t));
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(9);

    t.exports = function (t, e) {
      return !!t && o(function () {
        e ? t.call(null, function () {}, 1) : t.call(null);
      });
    };
  }, function (t, e, n) {
    t.exports = n(135);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(14), n(13)], void 0 === (r = "function" == typeof (o = function o(_o4, i, r, a, s) {
      "use strict";

      var l = n(15),
          c = n(1);
      Object.defineProperty(_o4, "__esModule", {
        value: !0
      }), _o4.default = void 0, i = c(i), r = c(r), a = l(a), s = c(s);

      var u = function () {
        function t() {
          (0, i.default)(this, t), this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
        }

        return (0, r.default)(t, [{
          key: "removeFakeBackground",
          value: function value() {
            this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
          }
        }, {
          key: "setFakeBackground",
          value: function value() {
            document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
          }
        }, {
          key: "save",
          value: function value() {
            this.savedSelectionRange = t.range;
          }
        }, {
          key: "restore",
          value: function value() {
            if (this.savedSelectionRange) {
              var t = window.getSelection();
              t.removeAllRanges(), t.addRange(this.savedSelectionRange);
            }
          }
        }, {
          key: "clearSaved",
          value: function value() {
            this.savedSelectionRange = null;
          }
        }, {
          key: "collapseToEnd",
          value: function value() {
            var t = window.getSelection(),
                e = document.createRange();
            e.selectNodeContents(t.focusNode), e.collapse(!1), t.removeAllRanges(), t.addRange(e);
          }
        }, {
          key: "findParentTag",
          value: function value(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                o = window.getSelection(),
                i = null;
            if (!o || !o.anchorNode || !o.focusNode) return null;
            var r = [o.anchorNode, o.focusNode];
            return r.forEach(function (o) {
              for (var r = n; r > 0 && o.parentNode && (o.tagName !== t || (i = o, e && o.classList && !o.classList.contains(e) && (i = null), !i));) {
                o = o.parentNode, r--;
              }
            }), i;
          }
        }, {
          key: "expandToTag",
          value: function value(t) {
            var e = window.getSelection();
            e.removeAllRanges();
            var n = document.createRange();
            n.selectNodeContents(t), e.addRange(n);
          }
        }], [{
          key: "get",
          value: function value() {
            return window.getSelection();
          }
        }, {
          key: "CSS",
          get: function get() {
            return {
              editorWrapper: "codex-editor",
              editorZone: "codex-editor__redactor"
            };
          }
        }, {
          key: "anchorNode",
          get: function get() {
            var t = window.getSelection();
            return t ? t.anchorNode : null;
          }
        }, {
          key: "anchorElement",
          get: function get() {
            var t = window.getSelection();
            if (!t) return null;
            var e = t.anchorNode;
            return e ? s.default.isElement(e) ? e : e.parentElement : null;
          }
        }, {
          key: "anchorOffset",
          get: function get() {
            var t = window.getSelection();
            return t ? t.anchorOffset : null;
          }
        }, {
          key: "isCollapsed",
          get: function get() {
            var t = window.getSelection();
            return t ? t.isCollapsed : null;
          }
        }, {
          key: "isAtEditor",
          get: function get() {
            var e = t.get(),
                n = e.anchorNode || e.focusNode;
            n && n.nodeType === Node.TEXT_NODE && (n = n.parentNode);
            var o = null;
            return n && (o = n.closest(".".concat(t.CSS.editorZone))), o && o.nodeType === Node.ELEMENT_NODE;
          }
        }, {
          key: "range",
          get: function get() {
            var t = window.getSelection();
            return t && t.rangeCount ? t.getRangeAt(0) : null;
          }
        }, {
          key: "rect",
          get: function get() {
            var t,
                e = document.selection,
                n = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
            if (e && "Control" !== e.type) return t = (e = e).createRange(), n.x = t.boundingLeft, n.y = t.boundingTop, n.width = t.boundingWidth, n.height = t.boundingHeight, n;
            if (!window.getSelection) return a.log("Method window.getSelection is not supported", "warn"), n;
            if (null === (e = window.getSelection()).rangeCount || isNaN(e.rangeCount)) return a.log("Method SelectionUtils.rangeCount is not supported", "warn"), n;
            if (0 === e.rangeCount) return n;

            if ((t = e.getRangeAt(0).cloneRange()).getBoundingClientRect && (n = t.getBoundingClientRect()), 0 === n.x && 0 === n.y) {
              var o = document.createElement("span");

              if (o.getBoundingClientRect) {
                o.appendChild(document.createTextNode("​")), t.insertNode(o), n = o.getBoundingClientRect();
                var i = o.parentNode;
                i.removeChild(o), i.normalize();
              }
            }

            return n;
          }
        }, {
          key: "text",
          get: function get() {
            return window.getSelection ? window.getSelection().toString() : "";
          }
        }]), t;
      }();

      _o4.default = u, u.displayName = "SelectionUtils", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o = n(30);

    t.exports = function (t, e, n) {
      if (o(t), void 0 === e) return t;

      switch (n) {
        case 1:
          return function (n) {
            return t.call(e, n);
          };

        case 2:
          return function (n, o) {
            return t.call(e, n, o);
          };

        case 3:
          return function (n, o, i) {
            return t.call(e, n, o, i);
          };
      }

      return function () {
        return t.apply(e, arguments);
      };
    };
  }, function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  }, function (t, e) {
    var n = Math.ceil,
        o = Math.floor;

    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t);
    };
  }, function (t, e, n) {
    var o = n(61),
        i = n(40),
        r = n(25),
        a = n(38),
        s = n(23),
        l = n(104),
        c = Object.getOwnPropertyDescriptor;
    e.f = n(18) ? c : function (t, e) {
      if (t = r(t), e = a(e, !0), l) try {
        return c(t, e);
      } catch (t) {}
      if (s(t, e)) return i(!o.f.call(t, e), t[e]);
    };
  }, function (t, e, n) {
    var o = n(0),
        i = n(17),
        r = n(9);

    t.exports = function (t, e) {
      var n = (i.Object || {})[t] || Object[t],
          a = {};
      a[t] = e(n), o(o.S + o.F * r(function () {
        n(1);
      }), "Object", a);
    };
  }, function (t, e, n) {
    var o = n(29),
        i = n(60),
        r = n(20),
        a = n(16),
        s = n(120);

    t.exports = function (t, e) {
      var n = 1 == t,
          l = 2 == t,
          c = 3 == t,
          u = 4 == t,
          f = 6 == t,
          d = 5 == t || f,
          p = e || s;
      return function (e, s, h) {
        for (var v, g, y = r(e), b = i(y), m = o(s, h, 3), k = a(b.length), x = 0, w = n ? p(e, k) : l ? p(e, 0) : void 0; k > x; x++) {
          if ((d || x in b) && (g = m(v = b[x], x, y), t)) if (n) w[x] = g;else if (g) switch (t) {
            case 3:
              return !0;

            case 5:
              return v;

            case 6:
              return x;

            case 2:
              w.push(v);
          } else if (u) return !1;
        }

        return f ? -1 : c || u ? u : w;
      };
    };
  }, function (t, e) {
    var n = {}.toString;

    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  }, function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  }, function (t, e, n) {
    "use strict";

    if (n(18)) {
      var o = n(42),
          i = n(8),
          r = n(9),
          a = n(0),
          s = n(75),
          l = n(102),
          c = n(29),
          u = n(56),
          f = n(40),
          d = n(24),
          p = n(57),
          h = n(31),
          v = n(16),
          g = n(131),
          y = n(44),
          b = n(38),
          m = n(23),
          k = n(62),
          x = n(11),
          w = n(20),
          S = n(94),
          E = n(45),
          T = n(47),
          C = n(46).f,
          B = n(96),
          _ = n(41),
          I = n(12),
          O = n(34),
          N = n(65),
          L = n(63),
          M = n(98),
          A = n(54),
          P = n(68),
          R = n(55),
          j = n(97),
          F = n(122),
          D = n(19),
          U = n(32),
          H = D.f,
          z = U.f,
          G = i.RangeError,
          W = i.TypeError,
          X = i.Uint8Array,
          V = Array.prototype,
          Y = l.ArrayBuffer,
          K = l.DataView,
          Z = O(0),
          q = O(2),
          $ = O(3),
          J = O(4),
          Q = O(5),
          tt = O(6),
          et = N(!0),
          nt = N(!1),
          ot = M.values,
          it = M.keys,
          rt = M.entries,
          at = V.lastIndexOf,
          st = V.reduce,
          lt = V.reduceRight,
          ct = V.join,
          ut = V.sort,
          ft = V.slice,
          dt = V.toString,
          pt = V.toLocaleString,
          ht = I("iterator"),
          vt = I("toStringTag"),
          gt = _("typed_constructor"),
          yt = _("def_constructor"),
          bt = s.CONSTR,
          mt = s.TYPED,
          kt = s.VIEW,
          xt = O(1, function (t, e) {
        return Ct(L(t, t[yt]), e);
      }),
          wt = r(function () {
        return 1 === new X(new Uint16Array([1]).buffer)[0];
      }),
          St = !!X && !!X.prototype.set && r(function () {
        new X(1).set({});
      }),
          Et = function Et(t, e) {
        var n = h(t);
        if (n < 0 || n % e) throw G("Wrong offset!");
        return n;
      },
          Tt = function Tt(t) {
        if (x(t) && mt in t) return t;
        throw W(t + " is not a typed array!");
      },
          Ct = function Ct(t, e) {
        if (!(x(t) && gt in t)) throw W("It is not a typed array constructor!");
        return new t(e);
      },
          Bt = function Bt(t, e) {
        return _t(L(t, t[yt]), e);
      },
          _t = function _t(t, e) {
        for (var n = 0, o = e.length, i = Ct(t, o); o > n;) {
          i[n] = e[n++];
        }

        return i;
      },
          It = function It(t, e, n) {
        H(t, e, {
          get: function get() {
            return this._d[n];
          }
        });
      },
          Ot = function Ot(t) {
        var e,
            n,
            o,
            i,
            r,
            a,
            s = w(t),
            l = arguments.length,
            u = l > 1 ? arguments[1] : void 0,
            f = void 0 !== u,
            d = B(s);

        if (null != d && !S(d)) {
          for (a = d.call(s), o = [], e = 0; !(r = a.next()).done; e++) {
            o.push(r.value);
          }

          s = o;
        }

        for (f && l > 2 && (u = c(u, arguments[2], 2)), e = 0, n = v(s.length), i = Ct(this, n); n > e; e++) {
          i[e] = f ? u(s[e], e) : s[e];
        }

        return i;
      },
          Nt = function Nt() {
        for (var t = 0, e = arguments.length, n = Ct(this, e); e > t;) {
          n[t] = arguments[t++];
        }

        return n;
      },
          Lt = !!X && r(function () {
        pt.call(new X(1));
      }),
          Mt = function Mt() {
        return pt.apply(Lt ? ft.call(Tt(this)) : Tt(this), arguments);
      },
          At = {
        copyWithin: function copyWithin(t, e) {
          return F.call(Tt(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
        },
        every: function every(t) {
          return J(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        fill: function fill(t) {
          return j.apply(Tt(this), arguments);
        },
        filter: function filter(t) {
          return Bt(this, q(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0));
        },
        find: function find(t) {
          return Q(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        findIndex: function findIndex(t) {
          return tt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        forEach: function forEach(t) {
          Z(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        indexOf: function indexOf(t) {
          return nt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        includes: function includes(t) {
          return et(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        join: function join(t) {
          return ct.apply(Tt(this), arguments);
        },
        lastIndexOf: function lastIndexOf(t) {
          return at.apply(Tt(this), arguments);
        },
        map: function map(t) {
          return xt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        reduce: function reduce(t) {
          return st.apply(Tt(this), arguments);
        },
        reduceRight: function reduceRight(t) {
          return lt.apply(Tt(this), arguments);
        },
        reverse: function reverse() {
          for (var t, e = Tt(this).length, n = Math.floor(e / 2), o = 0; o < n;) {
            t = this[o], this[o++] = this[--e], this[e] = t;
          }

          return this;
        },
        some: function some(t) {
          return $(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        sort: function sort(t) {
          return ut.call(Tt(this), t);
        },
        subarray: function subarray(t, e) {
          var n = Tt(this),
              o = n.length,
              i = y(t, o);
          return new (L(n, n[yt]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, v((void 0 === e ? o : y(e, o)) - i));
        }
      },
          Pt = function Pt(t, e) {
        return Bt(this, ft.call(Tt(this), t, e));
      },
          Rt = function Rt(t) {
        Tt(this);
        var e = Et(arguments[1], 1),
            n = this.length,
            o = w(t),
            i = v(o.length),
            r = 0;
        if (i + e > n) throw G("Wrong length!");

        for (; r < i;) {
          this[e + r] = o[r++];
        }
      },
          jt = {
        entries: function entries() {
          return rt.call(Tt(this));
        },
        keys: function keys() {
          return it.call(Tt(this));
        },
        values: function values() {
          return ot.call(Tt(this));
        }
      },
          Ft = function Ft(t, e) {
        return x(t) && t[mt] && "symbol" != _typeof(e) && e in t && String(+e) == String(e);
      },
          Dt = function Dt(t, e) {
        return Ft(t, e = b(e, !0)) ? f(2, t[e]) : z(t, e);
      },
          Ut = function Ut(t, e, n) {
        return !(Ft(t, e = b(e, !0)) && x(n) && m(n, "value")) || m(n, "get") || m(n, "set") || n.configurable || m(n, "writable") && !n.writable || m(n, "enumerable") && !n.enumerable ? H(t, e, n) : (t[e] = n.value, t);
      };

      bt || (U.f = Dt, D.f = Ut), a(a.S + a.F * !bt, "Object", {
        getOwnPropertyDescriptor: Dt,
        defineProperty: Ut
      }), r(function () {
        dt.call({});
      }) && (dt = pt = function pt() {
        return ct.call(this);
      });
      var Ht = p({}, At);
      p(Ht, jt), d(Ht, ht, jt.values), p(Ht, {
        slice: Pt,
        set: Rt,
        constructor: function constructor() {},
        toString: dt,
        toLocaleString: Mt
      }), It(Ht, "buffer", "b"), It(Ht, "byteOffset", "o"), It(Ht, "byteLength", "l"), It(Ht, "length", "e"), H(Ht, vt, {
        get: function get() {
          return this[mt];
        }
      }), t.exports = function (t, e, n, l) {
        var c = t + ((l = !!l) ? "Clamped" : "") + "Array",
            f = "get" + t,
            p = "set" + t,
            h = i[c],
            y = h || {},
            b = h && T(h),
            m = !h || !s.ABV,
            w = {},
            S = h && h.prototype,
            B = function B(t, n) {
          H(t, n, {
            get: function get() {
              return function (t, n) {
                var o = t._d;
                return o.v[f](n * e + o.o, wt);
              }(this, n);
            },
            set: function set(t) {
              return function (t, n, o) {
                var i = t._d;
                l && (o = (o = Math.round(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o), i.v[p](n * e + i.o, o, wt);
              }(this, n, t);
            },
            enumerable: !0
          });
        };

        m ? (h = n(function (t, n, o, i) {
          u(t, h, c, "_d");
          var r,
              a,
              s,
              l,
              f = 0,
              p = 0;

          if (x(n)) {
            if (!(n instanceof Y || "ArrayBuffer" == (l = k(n)) || "SharedArrayBuffer" == l)) return mt in n ? _t(h, n) : Ot.call(h, n);
            r = n, p = Et(o, e);
            var y = n.byteLength;

            if (void 0 === i) {
              if (y % e) throw G("Wrong length!");
              if ((a = y - p) < 0) throw G("Wrong length!");
            } else if ((a = v(i) * e) + p > y) throw G("Wrong length!");

            s = a / e;
          } else s = g(n), r = new Y(a = s * e);

          for (d(t, "_d", {
            b: r,
            o: p,
            l: a,
            e: s,
            v: new K(r)
          }); f < s;) {
            B(t, f++);
          }
        }), S = h.prototype = E(Ht), d(S, "constructor", h)) : r(function () {
          h(1);
        }) && r(function () {
          new h(-1);
        }) && P(function (t) {
          new h(), new h(null), new h(1.5), new h(t);
        }, !0) || (h = n(function (t, n, o, i) {
          var r;
          return u(t, h, c), x(n) ? n instanceof Y || "ArrayBuffer" == (r = k(n)) || "SharedArrayBuffer" == r ? void 0 !== i ? new y(n, Et(o, e), i) : void 0 !== o ? new y(n, Et(o, e)) : new y(n) : mt in n ? _t(h, n) : Ot.call(h, n) : new y(g(n));
        }), Z(b !== Function.prototype ? C(y).concat(C(b)) : C(y), function (t) {
          t in h || d(h, t, y[t]);
        }), h.prototype = S, o || (S.constructor = h));
        var _ = S[ht],
            I = !!_ && ("values" == _.name || null == _.name),
            O = jt.values;
        d(h, gt, !0), d(S, mt, c), d(S, kt, !0), d(S, yt, h), (l ? new h(1)[vt] == c : vt in S) || H(S, vt, {
          get: function get() {
            return c;
          }
        }), w[c] = h, a(a.G + a.W + a.F * (h != y), w), a(a.S, c, {
          BYTES_PER_ELEMENT: e
        }), a(a.S + a.F * r(function () {
          y.of.call(h, 1);
        }), c, {
          from: Ot,
          of: Nt
        }), "BYTES_PER_ELEMENT" in S || d(S, "BYTES_PER_ELEMENT", e), a(a.P, c, At), R(c), a(a.P + a.F * St, c, {
          set: Rt
        }), a(a.P + a.F * !I, c, jt), o || S.toString == dt || (S.toString = dt), a(a.P + a.F * r(function () {
          new h(1).slice();
        }), c, {
          slice: Pt
        }), a(a.P + a.F * (r(function () {
          return [1, 2].toLocaleString() != new h([1, 2]).toLocaleString();
        }) || !r(function () {
          S.toLocaleString.call([1, 2]);
        })), c, {
          toLocaleString: Mt
        }), A[c] = I ? _ : O, o || I || d(S, ht, O);
      };
    } else t.exports = function () {};
  }, function (t, e, n) {
    var o = n(11);

    t.exports = function (t, e) {
      if (!o(t)) return t;
      var n, i;
      if (e && "function" == typeof (n = t.toString) && !o(i = n.call(t))) return i;
      if ("function" == typeof (n = t.valueOf) && !o(i = n.call(t))) return i;
      if (!e && "function" == typeof (n = t.toString) && !o(i = n.call(t))) return i;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function (t, e, n) {
    var o = n(41)("meta"),
        i = n(11),
        r = n(23),
        a = n(19).f,
        s = 0,
        l = Object.isExtensible || function () {
      return !0;
    },
        c = !n(9)(function () {
      return l(Object.preventExtensions({}));
    }),
        u = function u(t) {
      a(t, o, {
        value: {
          i: "O" + ++s,
          w: {}
        }
      });
    },
        f = t.exports = {
      KEY: o,
      NEED: !1,
      fastKey: function fastKey(t, e) {
        if (!i(t)) return "symbol" == _typeof(t) ? t : ("string" == typeof t ? "S" : "P") + t;

        if (!r(t, o)) {
          if (!l(t)) return "F";
          if (!e) return "E";
          u(t);
        }

        return t[o].i;
      },
      getWeak: function getWeak(t, e) {
        if (!r(t, o)) {
          if (!l(t)) return !0;
          if (!e) return !1;
          u(t);
        }

        return t[o].w;
      },
      onFreeze: function onFreeze(t) {
        return c && f.NEED && l(t) && !r(t, o) && u(t), t;
      }
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    };
  }, function (t, e) {
    var n = 0,
        o = Math.random();

    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + o).toString(36));
    };
  }, function (t, e) {
    t.exports = !1;
  }, function (t, e, n) {
    var o = n(106),
        i = n(81);

    t.exports = Object.keys || function (t) {
      return o(t, i);
    };
  }, function (t, e, n) {
    var o = n(31),
        i = Math.max,
        r = Math.min;

    t.exports = function (t, e) {
      return (t = o(t)) < 0 ? i(t + e, 0) : r(t, e);
    };
  }, function (t, e, n) {
    var o = n(10),
        i = n(107),
        r = n(81),
        a = n(80)("IE_PROTO"),
        s = function s() {},
        _l = function l() {
      var t,
          e = n(78)("iframe"),
          o = r.length;

      for (e.style.display = "none", n(82).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _l = t.F; o--;) {
        delete _l.prototype[r[o]];
      }

      return _l();
    };

    t.exports = Object.create || function (t, e) {
      var n;
      return null !== t ? (s.prototype = o(t), n = new s(), s.prototype = null, n[a] = t) : n = _l(), void 0 === e ? n : i(n, e);
    };
  }, function (t, e, n) {
    var o = n(106),
        i = n(81).concat("length", "prototype");

    e.f = Object.getOwnPropertyNames || function (t) {
      return o(t, i);
    };
  }, function (t, e, n) {
    var o = n(23),
        i = n(20),
        r = n(80)("IE_PROTO"),
        a = Object.prototype;

    t.exports = Object.getPrototypeOf || function (t) {
      return t = i(t), o(t, r) ? t[r] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
    };
  }, function (t, e, n) {
    var o = n(12)("unscopables"),
        i = Array.prototype;
    null == i[o] && n(24)(i, o, {}), t.exports = function (t) {
      i[o][t] = !0;
    };
  }, function (t, e, n) {
    var o = n(11);

    t.exports = function (t, e) {
      if (!o(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
      return t;
    };
  }, function (t, e, n) {
    var o = n(345),
        i = n(346),
        r = n(347);

    t.exports = function (t, e) {
      return o(t) || i(t, e) || r();
    };
  }, function (t, e) {
    function n(e) {
      return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? t.exports = n = function n(t) {
        return _typeof(t);
      } : t.exports = n = function n(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      }, n(e);
    }

    t.exports = n;
  }, function (t, e, n) {
    var o = n(19).f,
        i = n(23),
        r = n(12)("toStringTag");

    t.exports = function (t, e, n) {
      t && !i(t = n ? t : t.prototype, r) && o(t, r, {
        configurable: !0,
        value: e
      });
    };
  }, function (t, e, n) {
    var o = n(0),
        i = n(36),
        r = n(9),
        a = n(84),
        s = "[" + a + "]",
        l = RegExp("^" + s + s + "*"),
        c = RegExp(s + s + "*$"),
        u = function u(t, e, n) {
      var i = {},
          s = r(function () {
        return !!a[t]() || "​" != "​"[t]();
      }),
          l = i[t] = s ? e(f) : a[t];
      n && (i[n] = l), o(o.P + o.F * s, "String", i);
    },
        f = u.trim = function (t, e) {
      return t = String(i(t)), 1 & e && (t = t.replace(l, "")), 2 & e && (t = t.replace(c, "")), t;
    };

    t.exports = u;
  }, function (t, e) {
    t.exports = {};
  }, function (t, e, n) {
    "use strict";

    var o = n(8),
        i = n(19),
        r = n(18),
        a = n(12)("species");

    t.exports = function (t) {
      var e = o[t];
      r && e && !e[a] && i.f(e, a, {
        configurable: !0,
        get: function get() {
          return this;
        }
      });
    };
  }, function (t, e) {
    t.exports = function (t, e, n, o) {
      if (!(t instanceof e) || void 0 !== o && o in t) throw TypeError(n + ": incorrect invocation!");
      return t;
    };
  }, function (t, e, n) {
    var o = n(21);

    t.exports = function (t, e, n) {
      for (var i in e) {
        o(t, i, e[i], n);
      }

      return t;
    };
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(359), n(14)], void 0 === (r = "function" == typeof (o = function o(_o5, i, r, a, s) {
      "use strict";

      var l = n(15),
          c = n(1);
      Object.defineProperty(_o5, "__esModule", {
        value: !0
      }), _o5.default = void 0, i = c(i), r = c(r), a = c(a), s = l(s);

      var u = function () {
        function t(e) {
          var n = this;
          (0, i.default)(this, t), this.iterator = null, this.activated = !1, this.allowArrows = !0, this.allowArrows = "boolean" != typeof e.allowArrows || e.allowArrows, this.iterator = new a.default(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, document.addEventListener("keydown", function (e) {
            if (n.isEventReadyForHandling(e)) switch (t.usedKeys.includes(e.keyCode) && e.preventDefault(), e.keyCode) {
              case s.keyCodes.TAB:
                n.handleTabPress(e);
                break;

              case s.keyCodes.LEFT:
              case s.keyCodes.UP:
                n.flipLeft();
                break;

              case s.keyCodes.RIGHT:
              case s.keyCodes.DOWN:
                n.flipRight();
                break;

              case s.keyCodes.ENTER:
                n.handleEnterPress(e);
            }
          }, !1);
        }

        return (0, r.default)(t, [{
          key: "activate",
          value: function value(t) {
            this.activated = !0, t && this.iterator.setItems(t);
          }
        }, {
          key: "deactivate",
          value: function value() {
            this.activated = !1, this.dropCursor();
          }
        }, {
          key: "focusFirst",
          value: function value() {
            this.dropCursor(), this.flipRight();
          }
        }, {
          key: "dropCursor",
          value: function value() {
            this.iterator.dropCursor();
          }
        }, {
          key: "isEventReadyForHandling",
          value: function value(t) {
            var e = [s.keyCodes.TAB, s.keyCodes.ENTER];
            return this.allowArrows && e.push(s.keyCodes.LEFT, s.keyCodes.RIGHT, s.keyCodes.UP, s.keyCodes.DOWN), !(!this.activated || -1 === e.indexOf(t.keyCode));
          }
        }, {
          key: "handleTabPress",
          value: function value(t) {
            switch (t.shiftKey ? a.default.directions.LEFT : a.default.directions.RIGHT) {
              case a.default.directions.RIGHT:
                this.flipRight();
                break;

              case a.default.directions.LEFT:
                this.flipLeft();
            }
          }
        }, {
          key: "flipLeft",
          value: function value() {
            this.iterator.previous();
          }
        }, {
          key: "flipRight",
          value: function value() {
            this.iterator.next();
          }
        }, {
          key: "handleEnterPress",
          value: function value(t) {
            this.activated && (this.iterator.currentItem && this.iterator.currentItem.click(), "function" == typeof this.activateCallback && this.activateCallback(), t.preventDefault(), t.stopPropagation());
          }
        }, {
          key: "currentItem",
          get: function get() {
            return this.iterator.currentItem;
          }
        }], [{
          key: "usedKeys",
          get: function get() {
            return [s.keyCodes.TAB, s.keyCodes.LEFT, s.keyCodes.RIGHT, s.keyCodes.ENTER, s.keyCodes.UP, s.keyCodes.DOWN];
          }
        }]), t;
      }();

      _o5.default = u, u.displayName = "Flipper", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(103), n(27), n(2), n(3), n(13), n(14), n(360), n(361), n(362), n(28)], void 0 === (r = "function" == typeof (o = function o(t, e, _o6, i, r, a, s, l, c, u, f) {
      "use strict";

      var d,
          p = n(15),
          h = n(1);
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = t.BlockToolAPI = void 0, e = h(e), _o6 = h(_o6), i = h(i), r = h(r), a = h(a), s = p(s), l = h(l), c = h(c), u = h(u), f = h(f), t.BlockToolAPI = d, function (t) {
        t.APPEND_CALLBACK = "appendCallback", t.RENDERED = "rendered", t.UPDATED = "updated", t.REMOVED = "removed", t.ON_PASTE = "onPaste";
      }(d || (t.BlockToolAPI = d = {}));

      var v = function () {
        function t(e, n, o, r, a) {
          var l = this;
          (0, i.default)(this, t), this.cachedInputs = [], this.inputIndex = 0, this.modificationDebounceTimer = 450, this.didMutated = s.debounce(function () {
            l.cachedInputs = [], l.updateCurrentInput(), l.call(d.UPDATED);
          }, this.modificationDebounceTimer), this.name = e, this.tool = n, this.class = o, this.settings = r, this.api = a, this.holder = this.compose(), this.mutationObserver = new MutationObserver(this.didMutated), this.tunes = this.makeTunes();
        }

        return (0, r.default)(t, [{
          key: "call",
          value: function value(t, e) {
            if (this.tool[t] && this.tool[t] instanceof Function) try {
              this.tool[t].call(this.tool, e);
            } catch (e) {
              s.log("Error during '".concat(t, "' call: ").concat(e.message), "error");
            }
          }
        }, {
          key: "mergeWith",
          value: function value(t) {
            return _o6.default.async(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, _o6.default.awrap(this.tool.merge(t));

                  case 2:
                  case "end":
                    return e.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "save",
          value: function value() {
            var t,
                e,
                n,
                i = this;
            return _o6.default.async(function (r) {
              for (;;) {
                switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, _o6.default.awrap(this.tool.save(this.pluginsContent));

                  case 2:
                    return t = r.sent, e = window.performance.now(), r.abrupt("return", Promise.resolve(t).then(function (t) {
                      return n = window.performance.now(), {
                        tool: i.name,
                        data: t,
                        time: n - e
                      };
                    }).catch(function (t) {
                      s.log("Saving proccess for ".concat(i.name, " tool failed due to the ").concat(t), "log", "red");
                    }));

                  case 5:
                  case "end":
                    return r.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "validate",
          value: function value(t) {
            var e;
            return _o6.default.async(function (n) {
              for (;;) {
                switch (n.prev = n.next) {
                  case 0:
                    if (e = !0, !(this.tool.validate instanceof Function)) {
                      n.next = 5;
                      break;
                    }

                    return n.next = 4, _o6.default.awrap(this.tool.validate(t));

                  case 4:
                    e = n.sent;

                  case 5:
                    return n.abrupt("return", e);

                  case 6:
                  case "end":
                    return n.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "makeTunes",
          value: function value() {
            var t = this;
            return [l.default, c.default, u.default].map(function (e) {
              return new e({
                api: t.api,
                settings: t.settings
              });
            });
          }
        }, {
          key: "renderTunes",
          value: function value() {
            var t = document.createDocumentFragment();
            return this.tunes.forEach(function (e) {
              a.default.append(t, e.render());
            }), t;
          }
        }, {
          key: "updateCurrentInput",
          value: function value() {
            this.currentInput = f.default.anchorNode;
          }
        }, {
          key: "willSelect",
          value: function value() {
            this.mutationObserver.observe(this.holder.firstElementChild, {
              childList: !0,
              subtree: !0,
              characterData: !0,
              attributes: !0
            });
          }
        }, {
          key: "willUnselect",
          value: function value() {
            this.mutationObserver.disconnect();
          }
        }, {
          key: "compose",
          value: function value() {
            var e = a.default.make("div", t.CSS.wrapper),
                n = a.default.make("div", t.CSS.content),
                o = this.tool.render();
            return n.appendChild(o), e.appendChild(n), e;
          }
        }, {
          key: "inputs",
          get: function get() {
            if (0 !== this.cachedInputs.length) return this.cachedInputs;
            var t = this.holder,
                n = "[contenteditable], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map(function (t) {
              return 'input[type="'.concat(t, '"]');
            }).join(", "),
                o = s.array(t.querySelectorAll(n));
            return o = o.reduce(function (t, n) {
              return a.default.isNativeInput(n) || a.default.containsOnlyInlineElements(n) ? [].concat((0, e.default)(t), [n]) : [].concat((0, e.default)(t), (0, e.default)(a.default.getDeepestBlockElements(n)));
            }, []), this.inputIndex > o.length - 1 && (this.inputIndex = o.length - 1), this.cachedInputs = o, o;
          }
        }, {
          key: "currentInput",
          get: function get() {
            return this.inputs[this.inputIndex];
          },
          set: function set(t) {
            var e = this.inputs.findIndex(function (e) {
              return e === t || e.contains(t);
            });
            -1 !== e && (this.inputIndex = e);
          }
        }, {
          key: "firstInput",
          get: function get() {
            return this.inputs[0];
          }
        }, {
          key: "lastInput",
          get: function get() {
            var t = this.inputs;
            return t[t.length - 1];
          }
        }, {
          key: "nextInput",
          get: function get() {
            return this.inputs[this.inputIndex + 1];
          }
        }, {
          key: "previousInput",
          get: function get() {
            return this.inputs[this.inputIndex - 1];
          }
        }, {
          key: "pluginsContent",
          get: function get() {
            var e = this.holder.querySelector(".".concat(t.CSS.content));
            if (e && e.childNodes.length) for (var n = e.childNodes.length - 1; n >= 0; n--) {
              var o = e.childNodes[n];
              if (!a.default.isExtensionNode(o)) return o;
            }
            return null;
          }
        }, {
          key: "data",
          get: function get() {
            return this.save().then(function (t) {
              return t && !s.isEmpty(t.data) ? t.data : {};
            });
          }
        }, {
          key: "sanitize",
          get: function get() {
            return this.tool.sanitize;
          }
        }, {
          key: "mergeable",
          get: function get() {
            return "function" == typeof this.tool.merge;
          }
        }, {
          key: "isEmpty",
          get: function get() {
            var t = a.default.isEmpty(this.pluginsContent),
                e = !this.hasMedia;
            return t && e;
          }
        }, {
          key: "hasMedia",
          get: function get() {
            return !!this.holder.querySelector(["img", "iframe", "video", "audio", "source", "input", "textarea", "twitterwidget"].join(","));
          }
        }, {
          key: "focused",
          set: function set(e) {
            this.holder.classList.toggle(t.CSS.focused, e);
          }
        }, {
          key: "selected",
          set: function set(e) {
            e ? this.holder.classList.add(t.CSS.selected) : this.holder.classList.remove(t.CSS.selected);
          },
          get: function get() {
            return this.holder.classList.contains(t.CSS.selected);
          }
        }, {
          key: "stretched",
          set: function set(e) {
            this.holder.classList.toggle(t.CSS.wrapperStretched, e);
          }
        }, {
          key: "dropTarget",
          set: function set(e) {
            this.holder.classList.toggle(t.CSS.dropTarget, e);
          }
        }], [{
          key: "CSS",
          get: function get() {
            return {
              wrapper: "ce-block",
              wrapperStretched: "ce-block--stretched",
              content: "ce-block__content",
              focused: "ce-block--focused",
              selected: "ce-block--selected",
              dropTarget: "ce-block--drop-target"
            };
          }
        }]), t;
      }();

      t.default = v, v.displayName = "Block";
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o = n(35);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == o(t) ? t.split("") : Object(t);
    };
  }, function (t, e) {
    e.f = {}.propertyIsEnumerable;
  }, function (t, e, n) {
    var o = n(35),
        i = n(12)("toStringTag"),
        r = "Arguments" == o(function () {
      return arguments;
    }());

    t.exports = function (t) {
      var e, n, a;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
        try {
          return t[e];
        } catch (t) {}
      }(e = Object(t), i)) ? n : r ? o(e) : "Object" == (a = o(e)) && "function" == typeof e.callee ? "Arguments" : a;
    };
  }, function (t, e, n) {
    var o = n(10),
        i = n(30),
        r = n(12)("species");

    t.exports = function (t, e) {
      var n,
          a = o(t).constructor;
      return void 0 === a || null == (n = o(a)[r]) ? e : i(n);
    };
  }, function (t, e, n) {
    var o = n(17),
        i = n(8),
        r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
      return r[t] || (r[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: o.version,
      mode: n(42) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  }, function (t, e, n) {
    var o = n(25),
        i = n(16),
        r = n(44);

    t.exports = function (t) {
      return function (e, n, a) {
        var s,
            l = o(e),
            c = i(l.length),
            u = r(a, c);

        if (t && n != n) {
          for (; c > u;) {
            if ((s = l[u++]) != s) return !0;
          }
        } else for (; c > u; u++) {
          if ((t || u in l) && l[u] === n) return t || u || 0;
        }

        return !t && -1;
      };
    };
  }, function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  }, function (t, e, n) {
    var o = n(35);

    t.exports = Array.isArray || function (t) {
      return "Array" == o(t);
    };
  }, function (t, e, n) {
    var o = n(12)("iterator"),
        i = !1;

    try {
      var r = [7][o]();
      r.return = function () {
        i = !0;
      }, Array.from(r, function () {
        throw 2;
      });
    } catch (t) {}

    t.exports = function (t, e) {
      if (!e && !i) return !1;
      var n = !1;

      try {
        var r = [7],
            a = r[o]();
        a.next = function () {
          return {
            done: n = !0
          };
        }, r[o] = function () {
          return a;
        }, t(r);
      } catch (t) {}

      return n;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(10);

    t.exports = function () {
      var t = o(this),
          e = "";
      return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(62),
        i = RegExp.prototype.exec;

    t.exports = function (t, e) {
      var n = t.exec;

      if ("function" == typeof n) {
        var r = n.call(t, e);
        if ("object" != _typeof(r)) throw new TypeError("RegExp exec method returned something other than an Object or null");
        return r;
      }

      if ("RegExp" !== o(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
      return i.call(t, e);
    };
  }, function (t, e, n) {
    "use strict";

    n(124);

    var o = n(21),
        i = n(24),
        r = n(9),
        a = n(36),
        s = n(12),
        l = n(99),
        c = s("species"),
        u = !r(function () {
      var t = /./;
      return t.exec = function () {
        var t = [];
        return t.groups = {
          a: "7"
        }, t;
      }, "7" !== "".replace(t, "$<a>");
    }),
        f = function () {
      var t = /(?:)/,
          e = t.exec;

      t.exec = function () {
        return e.apply(this, arguments);
      };

      var n = "ab".split(t);
      return 2 === n.length && "a" === n[0] && "b" === n[1];
    }();

    t.exports = function (t, e, n) {
      var d = s(t),
          p = !r(function () {
        var e = {};
        return e[d] = function () {
          return 7;
        }, 7 != ""[t](e);
      }),
          h = p ? !r(function () {
        var e = !1,
            n = /a/;
        return n.exec = function () {
          return e = !0, null;
        }, "split" === t && (n.constructor = {}, n.constructor[c] = function () {
          return n;
        }), n[d](""), !e;
      }) : void 0;

      if (!p || !h || "replace" === t && !u || "split" === t && !f) {
        var v = /./[d],
            g = n(a, d, ""[t], function (t, e, n, o, i) {
          return e.exec === l ? p && !i ? {
            done: !0,
            value: v.call(e, n, o)
          } : {
            done: !0,
            value: t.call(n, e, o)
          } : {
            done: !1
          };
        }),
            y = g[0],
            b = g[1];
        o(String.prototype, t, y), i(RegExp.prototype, d, 2 == e ? function (t, e) {
          return b.call(t, this, e);
        } : function (t) {
          return b.call(t, this);
        });
      }
    };
  }, function (t, e, n) {
    var o = n(29),
        i = n(119),
        r = n(94),
        a = n(10),
        s = n(16),
        l = n(96),
        c = {},
        u = {};
    (e = t.exports = function (t, e, n, f, d) {
      var p,
          h,
          v,
          g,
          y = d ? function () {
        return t;
      } : l(t),
          b = o(n, f, e ? 2 : 1),
          m = 0;
      if ("function" != typeof y) throw TypeError(t + " is not iterable!");

      if (r(y)) {
        for (p = s(t.length); p > m; m++) {
          if ((g = e ? b(a(h = t[m])[0], h[1]) : b(t[m])) === c || g === u) return g;
        }
      } else for (v = y.call(t); !(h = v.next()).done;) {
        if ((g = i(v, b, h.value, e)) === c || g === u) return g;
      }
    }).BREAK = c, e.RETURN = u;
  }, function (t, e, n) {
    var o = n(8).navigator;
    t.exports = o && o.userAgent || "";
  }, function (t, e, n) {
    "use strict";

    var o = n(8),
        i = n(0),
        r = n(21),
        a = n(57),
        s = n(39),
        l = n(72),
        c = n(56),
        u = n(11),
        f = n(9),
        d = n(68),
        p = n(52),
        h = n(85);

    t.exports = function (t, e, n, v, g, y) {
      var b = o[t],
          m = b,
          k = g ? "set" : "add",
          x = m && m.prototype,
          w = {},
          S = function S(t) {
        var e = x[t];
        r(x, t, "delete" == t ? function (t) {
          return !(y && !u(t)) && e.call(this, 0 === t ? 0 : t);
        } : "has" == t ? function (t) {
          return !(y && !u(t)) && e.call(this, 0 === t ? 0 : t);
        } : "get" == t ? function (t) {
          return y && !u(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
        } : "add" == t ? function (t) {
          return e.call(this, 0 === t ? 0 : t), this;
        } : function (t, n) {
          return e.call(this, 0 === t ? 0 : t, n), this;
        });
      };

      if ("function" == typeof m && (y || x.forEach && !f(function () {
        new m().entries().next();
      }))) {
        var E = new m(),
            T = E[k](y ? {} : -0, 1) != E,
            C = f(function () {
          E.has(1);
        }),
            B = d(function (t) {
          new m(t);
        }),
            _ = !y && f(function () {
          for (var t = new m(), e = 5; e--;) {
            t[k](e, e);
          }

          return !t.has(-0);
        });

        B || ((m = e(function (e, n) {
          c(e, m, t);
          var o = h(new b(), e, m);
          return null != n && l(n, g, o[k], o), o;
        })).prototype = x, x.constructor = m), (C || _) && (S("delete"), S("has"), g && S("get")), (_ || T) && S(k), y && x.clear && delete x.clear;
      } else m = v.getConstructor(e, t, g, k), a(m.prototype, n), s.NEED = !0;

      return p(m, t), w[t] = m, i(i.G + i.W + i.F * (m != b), w), y || v.setStrong(m, t, g), m;
    };
  }, function (t, e, n) {
    for (var o, i = n(8), r = n(24), a = n(41), s = a("typed_array"), l = a("view"), c = !(!i.ArrayBuffer || !i.DataView), u = c, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;) {
      (o = i[d[f++]]) ? (r(o.prototype, s, !0), r(o.prototype, l, !0)) : u = !1;
    }

    t.exports = {
      ABV: c,
      CONSTR: u,
      TYPED: s,
      VIEW: l
    };
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function o(_o7, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(_o7, "__esModule", {
        value: !0
      }), _o7.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "methods",
          get: function get() {
            return {
              blocks: this.Editor.BlocksAPI.methods,
              caret: this.Editor.CaretAPI.methods,
              events: this.Editor.EventsAPI.methods,
              listeners: this.Editor.ListenersAPI.methods,
              notifier: this.Editor.NotifierAPI.methods,
              sanitizer: this.Editor.SanitizerAPI.methods,
              saver: this.Editor.SaverAPI.methods,
              selection: this.Editor.SelectionAPI.methods,
              styles: this.Editor.StylesAPI.classes,
              toolbar: this.Editor.ToolbarAPI.methods,
              inlineToolbar: this.Editor.InlineToolbarAPI.methods,
              tooltip: this.Editor.TooltipAPI.methods
            };
          }
        }]), e;
      }((c = u(c)).default);

      _o7.default = f, f.displayName = "API", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(13), n(14)], void 0 === (r = "function" == typeof (o = function o(_o8, i, r, a, s, l, c, u, f) {
      "use strict";

      var d = n(15),
          p = n(1);
      Object.defineProperty(_o8, "__esModule", {
        value: !0
      }), _o8.default = void 0, i = p(i), r = p(r), a = p(a), s = p(s), l = p(l), c = p(c), u = p(u), f = d(f);

      var h = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).nodes = {
            wrapper: null,
            content: null,
            actions: null,
            plusButton: null,
            blockActionsButtons: null,
            settingsToggler: null
          }, t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "make",
          value: function value() {
            var t = this;
            this.nodes.wrapper = u.default.make("div", this.CSS.toolbar), ["content", "actions"].forEach(function (e) {
              t.nodes[e] = u.default.make("div", t.CSS[e]), u.default.append(t.nodes.wrapper, t.nodes[e]);
            }), this.nodes.plusButton = u.default.make("div", this.CSS.plusButton), u.default.append(this.nodes.plusButton, u.default.svg("plus", 14, 14)), u.default.append(this.nodes.content, this.nodes.plusButton), this.Editor.Listeners.on(this.nodes.plusButton, "click", function () {
              return t.plusButtonClicked();
            }, !1);
            var e = u.default.make("div");
            e.appendChild(document.createTextNode("Add")), e.appendChild(u.default.make("div", this.CSS.plusButtonShortcut, {
              textContent: "⇥ Tab"
            })), this.Editor.Tooltip.onHover(this.nodes.plusButton, e), this.Editor.Toolbox.make(), this.nodes.blockActionsButtons = u.default.make("div", this.CSS.blockActionsButtons), this.nodes.settingsToggler = u.default.make("span", this.CSS.settingsToggler);
            var n = u.default.svg("dots", 18, 4);
            u.default.append(this.nodes.settingsToggler, n), u.default.append(this.nodes.blockActionsButtons, this.nodes.settingsToggler), u.default.append(this.nodes.actions, this.nodes.blockActionsButtons), this.Editor.Tooltip.onHover(this.nodes.settingsToggler, "Click to tune", {
              placement: "top"
            }), this.Editor.BlockSettings.make(), u.default.append(this.nodes.actions, this.Editor.BlockSettings.nodes.wrapper), u.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.bindEvents();
          }
        }, {
          key: "move",
          value: function value() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            t && (this.Editor.Toolbox.close(), this.Editor.BlockSettings.close());
            var e = this.Editor.BlockManager.currentBlock.holder;

            if (e) {
              var n = this.Editor.UI.isMobile,
                  o = e.offsetHeight,
                  i = e.offsetTop;
              if (n) i += o;else {
                var r = Math.floor(o / 2);
                this.nodes.plusButton.style.transform = "translate3d(0, calc(".concat(r, "px - 50%), 0)"), this.Editor.Toolbox.nodes.toolbox.style.transform = "translate3d(0, calc(".concat(r, "px - 50%), 0)");
              }
              this.nodes.wrapper.style.transform = "translate3D(0, ".concat(Math.floor(i), "px, 0)");
            }
          }
        }, {
          key: "open",
          value: function value() {
            var t = this,
                e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            f.delay(function () {
              t.move(n), t.nodes.wrapper.classList.add(t.CSS.toolbarOpened), e ? t.blockActions.show() : t.blockActions.hide();
            }, 50)();
          }
        }, {
          key: "close",
          value: function value() {
            this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), this.Editor.Toolbox.close(), this.Editor.BlockSettings.close();
          }
        }, {
          key: "plusButtonClicked",
          value: function value() {
            this.Editor.Toolbox.toggle();
          }
        }, {
          key: "bindEvents",
          value: function value() {
            var t = this;
            this.Editor.Listeners.on(this.nodes.settingsToggler, "click", function () {
              return t.settingsTogglerClicked();
            });
          }
        }, {
          key: "settingsTogglerClicked",
          value: function value() {
            this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open();
          }
        }, {
          key: "CSS",
          get: function get() {
            return {
              toolbar: "ce-toolbar",
              content: "ce-toolbar__content",
              actions: "ce-toolbar__actions",
              actionsOpened: "ce-toolbar__actions--opened",
              toolbarOpened: "ce-toolbar--opened",
              plusButton: "ce-toolbar__plus",
              plusButtonShortcut: "ce-toolbar__plus-shortcut",
              plusButtonHidden: "ce-toolbar__plus--hidden",
              blockActionsButtons: "ce-toolbar__actions-buttons",
              settingsToggler: "ce-toolbar__settings-btn"
            };
          }
        }, {
          key: "opened",
          get: function get() {
            return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
          }
        }, {
          key: "plusButton",
          get: function get() {
            var t = this;
            return {
              hide: function hide() {
                return t.nodes.plusButton.classList.add(t.CSS.plusButtonHidden);
              },
              show: function show() {
                t.Editor.Toolbox.isEmpty || t.nodes.plusButton.classList.remove(t.CSS.plusButtonHidden);
              }
            };
          }
        }, {
          key: "blockActions",
          get: function get() {
            var t = this;
            return {
              hide: function hide() {
                t.nodes.actions.classList.remove(t.CSS.actionsOpened);
              },
              show: function show() {
                t.nodes.actions.classList.add(t.CSS.actionsOpened);
              }
            };
          }
        }]), e;
      }(c.default);

      _o8.default = h, h.displayName = "Toolbar", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o = n(11),
        i = n(8).document,
        r = o(i) && o(i.createElement);

    t.exports = function (t) {
      return r ? i.createElement(t) : {};
    };
  }, function (t, e, n) {
    e.f = n(12);
  }, function (t, e, n) {
    var o = n(64)("keys"),
        i = n(41);

    t.exports = function (t) {
      return o[t] || (o[t] = i(t));
    };
  }, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function (t, e, n) {
    var o = n(8).document;
    t.exports = o && o.documentElement;
  }, function (t, e, n) {
    var o = n(11),
        i = n(10),
        r = function r(t, e) {
      if (i(t), !o(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
    };

    t.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, o) {
        try {
          (o = n(29)(Function.call, n(32).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array);
        } catch (t) {
          e = !0;
        }

        return function (t, n) {
          return r(t, n), e ? t.__proto__ = n : o(t, n), t;
        };
      }({}, !1) : void 0),
      check: r
    };
  }, function (t, e) {
    t.exports = "\t\n\x0B\f\r  \u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  }, function (t, e, n) {
    var o = n(11),
        i = n(83).set;

    t.exports = function (t, e, n) {
      var r,
          a = e.constructor;
      return a !== n && "function" == typeof a && (r = a.prototype) !== n.prototype && o(r) && i && i(t, r), t;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(31),
        i = n(36);

    t.exports = function (t) {
      var e = String(i(this)),
          n = "",
          r = o(t);
      if (r < 0 || r == 1 / 0) throw RangeError("Count can't be negative");

      for (; r > 0; (r >>>= 1) && (e += e)) {
        1 & r && (n += e);
      }

      return n;
    };
  }, function (t, e) {
    t.exports = Math.sign || function (t) {
      return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
    };
  }, function (t, e) {
    var n = Math.expm1;
    t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function (t) {
      return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1;
    } : n;
  }, function (t, e, n) {
    var o = n(31),
        i = n(36);

    t.exports = function (t) {
      return function (e, n) {
        var r,
            a,
            s = String(i(e)),
            l = o(n),
            c = s.length;
        return l < 0 || l >= c ? t ? "" : void 0 : (r = s.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? s.charAt(l) : r : t ? s.slice(l, l + 2) : a - 56320 + (r - 55296 << 10) + 65536;
      };
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(42),
        i = n(0),
        r = n(21),
        a = n(24),
        s = n(54),
        l = n(118),
        c = n(52),
        u = n(47),
        f = n(12)("iterator"),
        d = !([].keys && "next" in [].keys()),
        p = function p() {
      return this;
    };

    t.exports = function (t, e, n, h, v, g, y) {
      l(n, e, h);

      var b,
          m,
          k,
          x = function x(t) {
        if (!d && t in T) return T[t];

        switch (t) {
          case "keys":
          case "values":
            return function () {
              return new n(this, t);
            };
        }

        return function () {
          return new n(this, t);
        };
      },
          w = e + " Iterator",
          S = "values" == v,
          E = !1,
          T = t.prototype,
          C = T[f] || T["@@iterator"] || v && T[v],
          B = C || x(v),
          _ = v ? S ? x("entries") : B : void 0,
          I = "Array" == e && T.entries || C;

      if (I && (k = u(I.call(new t()))) !== Object.prototype && k.next && (c(k, w, !0), o || "function" == typeof k[f] || a(k, f, p)), S && C && "values" !== C.name && (E = !0, B = function B() {
        return C.call(this);
      }), o && !y || !d && !E && T[f] || a(T, f, B), s[e] = B, s[w] = p, v) if (b = {
        values: S ? B : x("values"),
        keys: g ? B : x("keys"),
        entries: _
      }, y) for (m in b) {
        m in T || r(T, m, b[m]);
      } else i(i.P + i.F * (d || E), e, b);
      return b;
    };
  }, function (t, e, n) {
    var o = n(92),
        i = n(36);

    t.exports = function (t, e, n) {
      if (o(e)) throw TypeError("String#" + n + " doesn't accept regex!");
      return String(i(t));
    };
  }, function (t, e, n) {
    var o = n(11),
        i = n(35),
        r = n(12)("match");

    t.exports = function (t) {
      var e;
      return o(t) && (void 0 !== (e = t[r]) ? !!e : "RegExp" == i(t));
    };
  }, function (t, e, n) {
    var o = n(12)("match");

    t.exports = function (t) {
      var e = /./;

      try {
        "/./"[t](e);
      } catch (n) {
        try {
          return e[o] = !1, !"/./"[t](e);
        } catch (t) {}
      }

      return !0;
    };
  }, function (t, e, n) {
    var o = n(54),
        i = n(12)("iterator"),
        r = Array.prototype;

    t.exports = function (t) {
      return void 0 !== t && (o.Array === t || r[i] === t);
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(19),
        i = n(40);

    t.exports = function (t, e, n) {
      e in t ? o.f(t, e, i(0, n)) : t[e] = n;
    };
  }, function (t, e, n) {
    var o = n(62),
        i = n(12)("iterator"),
        r = n(54);

    t.exports = n(17).getIteratorMethod = function (t) {
      if (null != t) return t[i] || t["@@iterator"] || r[o(t)];
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(20),
        i = n(44),
        r = n(16);

    t.exports = function (t) {
      for (var e = o(this), n = r(e.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, n), l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? n : i(l, n); c > s;) {
        e[s++] = t;
      }

      return e;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(48),
        i = n(123),
        r = n(54),
        a = n(25);
    t.exports = n(90)(Array, "Array", function (t, e) {
      this._t = a(t), this._i = 0, this._k = e;
    }, function () {
      var t = this._t,
          e = this._k,
          n = this._i++;
      return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
    }, "values"), r.Arguments = r.Array, o("keys"), o("values"), o("entries");
  }, function (t, e, n) {
    "use strict";

    var o,
        i,
        r = n(69),
        a = RegExp.prototype.exec,
        s = String.prototype.replace,
        l = a,
        c = (o = /a/, i = /b*/g, a.call(o, "a"), a.call(i, "a"), 0 !== o.lastIndex || 0 !== i.lastIndex),
        u = void 0 !== /()??/.exec("")[1];
    (c || u) && (l = function l(t) {
      var e,
          n,
          o,
          i,
          l = this;
      return u && (n = new RegExp("^" + l.source + "$(?!\\s)", r.call(l))), c && (e = l.lastIndex), o = a.call(l, t), c && o && (l.lastIndex = l.global ? o.index + o[0].length : e), u && o && o.length > 1 && s.call(o[0], n, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          void 0 === arguments[i] && (o[i] = void 0);
        }
      }), o;
    }), t.exports = l;
  }, function (t, e, n) {
    "use strict";

    var o = n(89)(!0);

    t.exports = function (t, e, n) {
      return e + (n ? o(t, e).length : 1);
    };
  }, function (t, e, n) {
    var o,
        i,
        r,
        a = n(29),
        s = n(112),
        l = n(82),
        c = n(78),
        u = n(8),
        f = u.process,
        d = u.setImmediate,
        p = u.clearImmediate,
        h = u.MessageChannel,
        v = u.Dispatch,
        g = 0,
        y = {},
        b = function b() {
      var t = +this;

      if (y.hasOwnProperty(t)) {
        var e = y[t];
        delete y[t], e();
      }
    },
        m = function m(t) {
      b.call(t.data);
    };

    d && p || (d = function d(t) {
      for (var e = [], n = 1; arguments.length > n;) {
        e.push(arguments[n++]);
      }

      return y[++g] = function () {
        s("function" == typeof t ? t : Function(t), e);
      }, o(g), g;
    }, p = function p(t) {
      delete y[t];
    }, "process" == n(35)(f) ? o = function o(t) {
      f.nextTick(a(b, t, 1));
    } : v && v.now ? o = function o(t) {
      v.now(a(b, t, 1));
    } : h ? (r = (i = new h()).port2, i.port1.onmessage = m, o = a(r.postMessage, r, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function o(t) {
      u.postMessage(t + "", "*");
    }, u.addEventListener("message", m, !1)) : o = "onreadystatechange" in c("script") ? function (t) {
      l.appendChild(c("script")).onreadystatechange = function () {
        l.removeChild(this), b.call(t);
      };
    } : function (t) {
      setTimeout(a(b, t, 1), 0);
    }), t.exports = {
      set: d,
      clear: p
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(8),
        i = n(18),
        r = n(42),
        a = n(75),
        s = n(24),
        l = n(57),
        c = n(9),
        u = n(56),
        f = n(31),
        d = n(16),
        p = n(131),
        h = n(46).f,
        v = n(19).f,
        g = n(97),
        y = n(52),
        b = "prototype",
        m = "Wrong index!",
        _k2 = o.ArrayBuffer,
        _x = o.DataView,
        w = o.Math,
        S = o.RangeError,
        E = o.Infinity,
        T = _k2,
        C = w.abs,
        B = w.pow,
        _ = w.floor,
        I = w.log,
        O = w.LN2,
        N = i ? "_b" : "buffer",
        L = i ? "_l" : "byteLength",
        M = i ? "_o" : "byteOffset";

    function A(t, e, n) {
      var o,
          i,
          r,
          a = new Array(n),
          s = 8 * n - e - 1,
          l = (1 << s) - 1,
          c = l >> 1,
          u = 23 === e ? B(2, -24) - B(2, -77) : 0,
          f = 0,
          d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

      for ((t = C(t)) != t || t === E ? (i = t != t ? 1 : 0, o = l) : (o = _(I(t) / O), t * (r = B(2, -o)) < 1 && (o--, r *= 2), (t += o + c >= 1 ? u / r : u * B(2, 1 - c)) * r >= 2 && (o++, r /= 2), o + c >= l ? (i = 0, o = l) : o + c >= 1 ? (i = (t * r - 1) * B(2, e), o += c) : (i = t * B(2, c - 1) * B(2, e), o = 0)); e >= 8; a[f++] = 255 & i, i /= 256, e -= 8) {
        ;
      }

      for (o = o << e | i, s += e; s > 0; a[f++] = 255 & o, o /= 256, s -= 8) {
        ;
      }

      return a[--f] |= 128 * d, a;
    }

    function P(t, e, n) {
      var o,
          i = 8 * n - e - 1,
          r = (1 << i) - 1,
          a = r >> 1,
          s = i - 7,
          l = n - 1,
          c = t[l--],
          u = 127 & c;

      for (c >>= 7; s > 0; u = 256 * u + t[l], l--, s -= 8) {
        ;
      }

      for (o = u & (1 << -s) - 1, u >>= -s, s += e; s > 0; o = 256 * o + t[l], l--, s -= 8) {
        ;
      }

      if (0 === u) u = 1 - a;else {
        if (u === r) return o ? NaN : c ? -E : E;
        o += B(2, e), u -= a;
      }
      return (c ? -1 : 1) * o * B(2, u - e);
    }

    function R(t) {
      return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
    }

    function j(t) {
      return [255 & t];
    }

    function F(t) {
      return [255 & t, t >> 8 & 255];
    }

    function D(t) {
      return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255];
    }

    function U(t) {
      return A(t, 52, 8);
    }

    function H(t) {
      return A(t, 23, 4);
    }

    function z(t, e, n) {
      v(t[b], e, {
        get: function get() {
          return this[n];
        }
      });
    }

    function G(t, e, n, o) {
      var i = p(+n);
      if (i + e > t[L]) throw S(m);
      var r = t[N]._b,
          a = i + t[M],
          s = r.slice(a, a + e);
      return o ? s : s.reverse();
    }

    function W(t, e, n, o, i, r) {
      var a = p(+n);
      if (a + e > t[L]) throw S(m);

      for (var s = t[N]._b, l = a + t[M], c = o(+i), u = 0; u < e; u++) {
        s[l + u] = c[r ? u : e - u - 1];
      }
    }

    if (a.ABV) {
      if (!c(function () {
        _k2(1);
      }) || !c(function () {
        new _k2(-1);
      }) || c(function () {
        return new _k2(), new _k2(1.5), new _k2(NaN), "ArrayBuffer" != _k2.name;
      })) {
        for (var X, V = (_k2 = function k(t) {
          return u(this, _k2), new T(p(t));
        })[b] = T[b], Y = h(T), K = 0; Y.length > K;) {
          (X = Y[K++]) in _k2 || s(_k2, X, T[X]);
        }

        r || (V.constructor = _k2);
      }

      var Z = new _x(new _k2(2)),
          q = _x[b].setInt8;
      Z.setInt8(0, 2147483648), Z.setInt8(1, 2147483649), !Z.getInt8(0) && Z.getInt8(1) || l(_x[b], {
        setInt8: function setInt8(t, e) {
          q.call(this, t, e << 24 >> 24);
        },
        setUint8: function setUint8(t, e) {
          q.call(this, t, e << 24 >> 24);
        }
      }, !0);
    } else _k2 = function _k(t) {
      u(this, _k2, "ArrayBuffer");
      var e = p(t);
      this._b = g.call(new Array(e), 0), this[L] = e;
    }, _x = function x(t, e, n) {
      u(this, _x, "DataView"), u(t, _k2, "DataView");
      var o = t[L],
          i = f(e);
      if (i < 0 || i > o) throw S("Wrong offset!");
      if (i + (n = void 0 === n ? o - i : d(n)) > o) throw S("Wrong length!");
      this[N] = t, this[M] = i, this[L] = n;
    }, i && (z(_k2, "byteLength", "_l"), z(_x, "buffer", "_b"), z(_x, "byteLength", "_l"), z(_x, "byteOffset", "_o")), l(_x[b], {
      getInt8: function getInt8(t) {
        return G(this, 1, t)[0] << 24 >> 24;
      },
      getUint8: function getUint8(t) {
        return G(this, 1, t)[0];
      },
      getInt16: function getInt16(t) {
        var e = G(this, 2, t, arguments[1]);
        return (e[1] << 8 | e[0]) << 16 >> 16;
      },
      getUint16: function getUint16(t) {
        var e = G(this, 2, t, arguments[1]);
        return e[1] << 8 | e[0];
      },
      getInt32: function getInt32(t) {
        return R(G(this, 4, t, arguments[1]));
      },
      getUint32: function getUint32(t) {
        return R(G(this, 4, t, arguments[1])) >>> 0;
      },
      getFloat32: function getFloat32(t) {
        return P(G(this, 4, t, arguments[1]), 23, 4);
      },
      getFloat64: function getFloat64(t) {
        return P(G(this, 8, t, arguments[1]), 52, 8);
      },
      setInt8: function setInt8(t, e) {
        W(this, 1, t, j, e);
      },
      setUint8: function setUint8(t, e) {
        W(this, 1, t, j, e);
      },
      setInt16: function setInt16(t, e) {
        W(this, 2, t, F, e, arguments[2]);
      },
      setUint16: function setUint16(t, e) {
        W(this, 2, t, F, e, arguments[2]);
      },
      setInt32: function setInt32(t, e) {
        W(this, 4, t, D, e, arguments[2]);
      },
      setUint32: function setUint32(t, e) {
        W(this, 4, t, D, e, arguments[2]);
      },
      setFloat32: function setFloat32(t, e) {
        W(this, 4, t, H, e, arguments[2]);
      },
      setFloat64: function setFloat64(t, e) {
        W(this, 8, t, U, e, arguments[2]);
      }
    });

    y(_k2, "ArrayBuffer"), y(_x, "DataView"), s(_x[b], a.VIEW, !0), e.ArrayBuffer = _k2, e.DataView = _x;
  }, function (t, e, n) {
    var o = n(352),
        i = n(353),
        r = n(354);

    t.exports = function (t) {
      return o(t) || i(t) || r();
    };
  }, function (t, e, n) {
    t.exports = !n(18) && !n(9)(function () {
      return 7 != Object.defineProperty(n(78)("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (t, e, n) {
    var o = n(8),
        i = n(17),
        r = n(42),
        a = n(79),
        s = n(19).f;

    t.exports = function (t) {
      var e = i.Symbol || (i.Symbol = r ? {} : o.Symbol || {});
      "_" == t.charAt(0) || t in e || s(e, t, {
        value: a.f(t)
      });
    };
  }, function (t, e, n) {
    var o = n(23),
        i = n(25),
        r = n(65)(!1),
        a = n(80)("IE_PROTO");

    t.exports = function (t, e) {
      var n,
          s = i(t),
          l = 0,
          c = [];

      for (n in s) {
        n != a && o(s, n) && c.push(n);
      }

      for (; e.length > l;) {
        o(s, n = e[l++]) && (~r(c, n) || c.push(n));
      }

      return c;
    };
  }, function (t, e, n) {
    var o = n(19),
        i = n(10),
        r = n(43);
    t.exports = n(18) ? Object.defineProperties : function (t, e) {
      i(t);

      for (var n, a = r(e), s = a.length, l = 0; s > l;) {
        o.f(t, n = a[l++], e[n]);
      }

      return t;
    };
  }, function (t, e, n) {
    var o = n(25),
        i = n(46).f,
        r = {}.toString,
        a = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

    t.exports.f = function (t) {
      return a && "[object Window]" == r.call(t) ? function (t) {
        try {
          return i(t);
        } catch (t) {
          return a.slice();
        }
      }(t) : i(o(t));
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(18),
        i = n(43),
        r = n(66),
        a = n(61),
        s = n(20),
        l = n(60),
        c = Object.assign;
    t.exports = !c || n(9)(function () {
      var t = {},
          e = {},
          n = Symbol(),
          o = "abcdefghijklmnopqrst";
      return t[n] = 7, o.split("").forEach(function (t) {
        e[t] = t;
      }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != o;
    }) ? function (t, e) {
      for (var n = s(t), c = arguments.length, u = 1, f = r.f, d = a.f; c > u;) {
        for (var p, h = l(arguments[u++]), v = f ? i(h).concat(f(h)) : i(h), g = v.length, y = 0; g > y;) {
          p = v[y++], o && !d.call(h, p) || (n[p] = h[p]);
        }
      }

      return n;
    } : c;
  }, function (t, e) {
    t.exports = Object.is || function (t, e) {
      return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(30),
        i = n(11),
        r = n(112),
        a = [].slice,
        s = {},
        l = function l(t, e, n) {
      if (!(e in s)) {
        for (var o = [], i = 0; i < e; i++) {
          o[i] = "a[" + i + "]";
        }

        s[e] = Function("F,a", "return new F(" + o.join(",") + ")");
      }

      return s[e](t, n);
    };

    t.exports = Function.bind || function (t) {
      var e = o(this),
          n = a.call(arguments, 1),
          s = function s() {
        var o = n.concat(a.call(arguments));
        return this instanceof s ? l(e, o.length, o) : r(e, o, t);
      };

      return i(e.prototype) && (s.prototype = e.prototype), s;
    };
  }, function (t, e) {
    t.exports = function (t, e, n) {
      var o = void 0 === n;

      switch (e.length) {
        case 0:
          return o ? t() : t.call(n);

        case 1:
          return o ? t(e[0]) : t.call(n, e[0]);

        case 2:
          return o ? t(e[0], e[1]) : t.call(n, e[0], e[1]);

        case 3:
          return o ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);

        case 4:
          return o ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
      }

      return t.apply(n, e);
    };
  }, function (t, e, n) {
    var o = n(8).parseInt,
        i = n(53).trim,
        r = n(84),
        a = /^[-+]?0[xX]/;
    t.exports = 8 !== o(r + "08") || 22 !== o(r + "0x16") ? function (t, e) {
      var n = i(String(t), 3);
      return o(n, e >>> 0 || (a.test(n) ? 16 : 10));
    } : o;
  }, function (t, e, n) {
    var o = n(8).parseFloat,
        i = n(53).trim;
    t.exports = 1 / o(n(84) + "-0") != -1 / 0 ? function (t) {
      var e = i(String(t), 3),
          n = o(e);
      return 0 === n && "-" == e.charAt(0) ? -0 : n;
    } : o;
  }, function (t, e, n) {
    var o = n(35);

    t.exports = function (t, e) {
      if ("number" != typeof t && "Number" != o(t)) throw TypeError(e);
      return +t;
    };
  }, function (t, e, n) {
    var o = n(11),
        i = Math.floor;

    t.exports = function (t) {
      return !o(t) && isFinite(t) && i(t) === t;
    };
  }, function (t, e) {
    t.exports = Math.log1p || function (t) {
      return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t);
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(45),
        i = n(40),
        r = n(52),
        a = {};
    n(24)(a, n(12)("iterator"), function () {
      return this;
    }), t.exports = function (t, e, n) {
      t.prototype = o(a, {
        next: i(1, n)
      }), r(t, e + " Iterator");
    };
  }, function (t, e, n) {
    var o = n(10);

    t.exports = function (t, e, n, i) {
      try {
        return i ? e(o(n)[0], n[1]) : e(n);
      } catch (e) {
        var r = t.return;
        throw void 0 !== r && o(r.call(t)), e;
      }
    };
  }, function (t, e, n) {
    var o = n(266);

    t.exports = function (t, e) {
      return new (o(t))(e);
    };
  }, function (t, e, n) {
    var o = n(30),
        i = n(20),
        r = n(60),
        a = n(16);

    t.exports = function (t, e, n, s, l) {
      o(e);
      var c = i(t),
          u = r(c),
          f = a(c.length),
          d = l ? f - 1 : 0,
          p = l ? -1 : 1;
      if (n < 2) for (;;) {
        if (d in u) {
          s = u[d], d += p;
          break;
        }

        if (d += p, l ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value");
      }

      for (; l ? d >= 0 : f > d; d += p) {
        d in u && (s = e(s, u[d], d, c));
      }

      return s;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(20),
        i = n(44),
        r = n(16);

    t.exports = [].copyWithin || function (t, e) {
      var n = o(this),
          a = r(n.length),
          s = i(t, a),
          l = i(e, a),
          c = arguments.length > 2 ? arguments[2] : void 0,
          u = Math.min((void 0 === c ? a : i(c, a)) - l, a - s),
          f = 1;

      for (l < s && s < l + u && (f = -1, l += u - 1, s += u - 1); u-- > 0;) {
        l in n ? n[s] = n[l] : delete n[s], s += f, l += f;
      }

      return n;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        value: e,
        done: !!t
      };
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(99);
    n(0)({
      target: "RegExp",
      proto: !0,
      forced: o !== /./.exec
    }, {
      exec: o
    });
  }, function (t, e, n) {
    n(18) && "g" != /./g.flags && n(19).f(RegExp.prototype, "flags", {
      configurable: !0,
      get: n(69)
    });
  }, function (t, e, n) {
    "use strict";

    var o,
        i,
        r,
        a,
        s = n(42),
        l = n(8),
        c = n(29),
        u = n(62),
        f = n(0),
        d = n(11),
        p = n(30),
        h = n(56),
        v = n(72),
        g = n(63),
        y = n(101).set,
        b = n(286)(),
        m = n(127),
        k = n(287),
        x = n(73),
        w = n(128),
        S = l.TypeError,
        E = l.process,
        T = E && E.versions,
        C = T && T.v8 || "",
        _B = l.Promise,
        _ = "process" == u(E),
        I = function I() {},
        O = i = m.f,
        N = !!function () {
      try {
        var t = _B.resolve(1),
            e = (t.constructor = {})[n(12)("species")] = function (t) {
          t(I, I);
        };

        return (_ || "function" == typeof PromiseRejectionEvent) && t.then(I) instanceof e && 0 !== C.indexOf("6.6") && -1 === x.indexOf("Chrome/66");
      } catch (t) {}
    }(),
        L = function L(t) {
      var e;
      return !(!d(t) || "function" != typeof (e = t.then)) && e;
    },
        M = function M(t, e) {
      if (!t._n) {
        t._n = !0;
        var n = t._c;
        b(function () {
          for (var o = t._v, i = 1 == t._s, r = 0, a = function a(e) {
            var n,
                r,
                a,
                s = i ? e.ok : e.fail,
                l = e.resolve,
                c = e.reject,
                u = e.domain;

            try {
              s ? (i || (2 == t._h && R(t), t._h = 1), !0 === s ? n = o : (u && u.enter(), n = s(o), u && (u.exit(), a = !0)), n === e.promise ? c(S("Promise-chain cycle")) : (r = L(n)) ? r.call(n, l, c) : l(n)) : c(o);
            } catch (t) {
              u && !a && u.exit(), c(t);
            }
          }; n.length > r;) {
            a(n[r++]);
          }

          t._c = [], t._n = !1, e && !t._h && A(t);
        });
      }
    },
        A = function A(t) {
      y.call(l, function () {
        var e,
            n,
            o,
            i = t._v,
            r = P(t);
        if (r && (e = k(function () {
          _ ? E.emit("unhandledRejection", i, t) : (n = l.onunhandledrejection) ? n({
            promise: t,
            reason: i
          }) : (o = l.console) && o.error && o.error("Unhandled promise rejection", i);
        }), t._h = _ || P(t) ? 2 : 1), t._a = void 0, r && e.e) throw e.v;
      });
    },
        P = function P(t) {
      return 1 !== t._h && 0 === (t._a || t._c).length;
    },
        R = function R(t) {
      y.call(l, function () {
        var e;
        _ ? E.emit("rejectionHandled", t) : (e = l.onrejectionhandled) && e({
          promise: t,
          reason: t._v
        });
      });
    },
        j = function j(t) {
      var e = this;
      e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), M(e, !0));
    },
        F = function F(t) {
      var e,
          n = this;

      if (!n._d) {
        n._d = !0, n = n._w || n;

        try {
          if (n === t) throw S("Promise can't be resolved itself");
          (e = L(t)) ? b(function () {
            var o = {
              _w: n,
              _d: !1
            };

            try {
              e.call(t, c(F, o, 1), c(j, o, 1));
            } catch (t) {
              j.call(o, t);
            }
          }) : (n._v = t, n._s = 1, M(n, !1));
        } catch (t) {
          j.call({
            _w: n,
            _d: !1
          }, t);
        }
      }
    };

    N || (_B = function B(t) {
      h(this, _B, "Promise", "_h"), p(t), o.call(this);

      try {
        t(c(F, this, 1), c(j, this, 1));
      } catch (t) {
        j.call(this, t);
      }
    }, (o = function o(t) {
      this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
    }).prototype = n(57)(_B.prototype, {
      then: function then(t, e) {
        var n = O(g(this, _B));
        return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = _ ? E.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && M(this, !1), n.promise;
      },
      catch: function _catch(t) {
        return this.then(void 0, t);
      }
    }), r = function r() {
      var t = new o();
      this.promise = t, this.resolve = c(F, t, 1), this.reject = c(j, t, 1);
    }, m.f = O = function O(t) {
      return t === _B || t === a ? new r(t) : i(t);
    }), f(f.G + f.W + f.F * !N, {
      Promise: _B
    }), n(52)(_B, "Promise"), n(55)("Promise"), a = n(17).Promise, f(f.S + f.F * !N, "Promise", {
      reject: function reject(t) {
        var e = O(this);
        return (0, e.reject)(t), e.promise;
      }
    }), f(f.S + f.F * (s || !N), "Promise", {
      resolve: function resolve(t) {
        return w(s && this === a ? _B : this, t);
      }
    }), f(f.S + f.F * !(N && n(68)(function (t) {
      _B.all(t).catch(I);
    })), "Promise", {
      all: function all(t) {
        var e = this,
            n = O(e),
            o = n.resolve,
            i = n.reject,
            r = k(function () {
          var n = [],
              r = 0,
              a = 1;
          v(t, !1, function (t) {
            var s = r++,
                l = !1;
            n.push(void 0), a++, e.resolve(t).then(function (t) {
              l || (l = !0, n[s] = t, --a || o(n));
            }, i);
          }), --a || o(n);
        });
        return r.e && i(r.v), n.promise;
      },
      race: function race(t) {
        var e = this,
            n = O(e),
            o = n.reject,
            i = k(function () {
          v(t, !1, function (t) {
            e.resolve(t).then(n.resolve, o);
          });
        });
        return i.e && o(i.v), n.promise;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(30);

    function i(t) {
      var e, n;
      this.promise = new t(function (t, o) {
        if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
        e = t, n = o;
      }), this.resolve = o(e), this.reject = o(n);
    }

    t.exports.f = function (t) {
      return new i(t);
    };
  }, function (t, e, n) {
    var o = n(10),
        i = n(11),
        r = n(127);

    t.exports = function (t, e) {
      if (o(t), i(e) && e.constructor === t) return e;
      var n = r.f(t);
      return (0, n.resolve)(e), n.promise;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(19).f,
        i = n(45),
        r = n(57),
        a = n(29),
        s = n(56),
        l = n(72),
        c = n(90),
        u = n(123),
        f = n(55),
        d = n(18),
        p = n(39).fastKey,
        h = n(49),
        v = d ? "_s" : "size",
        g = function g(t, e) {
      var n,
          o = p(e);
      if ("F" !== o) return t._i[o];

      for (n = t._f; n; n = n.n) {
        if (n.k == e) return n;
      }
    };

    t.exports = {
      getConstructor: function getConstructor(t, e, n, c) {
        var u = t(function (t, o) {
          s(t, u, e, "_i"), t._t = e, t._i = i(null), t._f = void 0, t._l = void 0, t[v] = 0, null != o && l(o, n, t[c], t);
        });
        return r(u.prototype, {
          clear: function clear() {
            for (var t = h(this, e), n = t._i, o = t._f; o; o = o.n) {
              o.r = !0, o.p && (o.p = o.p.n = void 0), delete n[o.i];
            }

            t._f = t._l = void 0, t[v] = 0;
          },
          delete: function _delete(t) {
            var n = h(this, e),
                o = g(n, t);

            if (o) {
              var i = o.n,
                  r = o.p;
              delete n._i[o.i], o.r = !0, r && (r.n = i), i && (i.p = r), n._f == o && (n._f = i), n._l == o && (n._l = r), n[v]--;
            }

            return !!o;
          },
          forEach: function forEach(t) {
            h(this, e);

            for (var n, o = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;) {
              for (o(n.v, n.k, this); n && n.r;) {
                n = n.p;
              }
            }
          },
          has: function has(t) {
            return !!g(h(this, e), t);
          }
        }), d && o(u.prototype, "size", {
          get: function get() {
            return h(this, e)[v];
          }
        }), u;
      },
      def: function def(t, e, n) {
        var o,
            i,
            r = g(t, e);
        return r ? r.v = n : (t._l = r = {
          i: i = p(e, !0),
          k: e,
          v: n,
          p: o = t._l,
          n: void 0,
          r: !1
        }, t._f || (t._f = r), o && (o.n = r), t[v]++, "F" !== i && (t._i[i] = r)), t;
      },
      getEntry: g,
      setStrong: function setStrong(t, e, n) {
        c(t, e, function (t, n) {
          this._t = h(t, e), this._k = n, this._l = void 0;
        }, function () {
          for (var t = this._k, e = this._l; e && e.r;) {
            e = e.p;
          }

          return this._t && (this._l = e = e ? e.n : this._t._f) ? u(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, u(1));
        }, n ? "entries" : "values", !n, !0), f(e);
      }
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(57),
        i = n(39).getWeak,
        r = n(10),
        a = n(11),
        s = n(56),
        l = n(72),
        c = n(34),
        u = n(23),
        f = n(49),
        d = c(5),
        p = c(6),
        h = 0,
        v = function v(t) {
      return t._l || (t._l = new g());
    },
        g = function g() {
      this.a = [];
    },
        y = function y(t, e) {
      return d(t.a, function (t) {
        return t[0] === e;
      });
    };

    g.prototype = {
      get: function get(t) {
        var e = y(this, t);
        if (e) return e[1];
      },
      has: function has(t) {
        return !!y(this, t);
      },
      set: function set(t, e) {
        var n = y(this, t);
        n ? n[1] = e : this.a.push([t, e]);
      },
      delete: function _delete(t) {
        var e = p(this.a, function (e) {
          return e[0] === t;
        });
        return ~e && this.a.splice(e, 1), !!~e;
      }
    }, t.exports = {
      getConstructor: function getConstructor(t, e, n, r) {
        var c = t(function (t, o) {
          s(t, c, e, "_i"), t._t = e, t._i = h++, t._l = void 0, null != o && l(o, n, t[r], t);
        });
        return o(c.prototype, {
          delete: function _delete(t) {
            if (!a(t)) return !1;
            var n = i(t);
            return !0 === n ? v(f(this, e)).delete(t) : n && u(n, this._i) && delete n[this._i];
          },
          has: function has(t) {
            if (!a(t)) return !1;
            var n = i(t);
            return !0 === n ? v(f(this, e)).has(t) : n && u(n, this._i);
          }
        }), c;
      },
      def: function def(t, e, n) {
        var o = i(r(e), !0);
        return !0 === o ? v(t).set(e, n) : o[t._i] = n, t;
      },
      ufstore: v
    };
  }, function (t, e, n) {
    var o = n(31),
        i = n(16);

    t.exports = function (t) {
      if (void 0 === t) return 0;
      var e = o(t),
          n = i(e);
      if (e !== n) throw RangeError("Wrong length!");
      return n;
    };
  }, function (t, e, n) {
    var o = n(46),
        i = n(66),
        r = n(10),
        a = n(8).Reflect;

    t.exports = a && a.ownKeys || function (t) {
      var e = o.f(r(t)),
          n = i.f;
      return n ? e.concat(n(t)) : e;
    };
  }, function (t, e, n) {
    var o = n(16),
        i = n(86),
        r = n(36);

    t.exports = function (t, e, n, a) {
      var s = String(r(t)),
          l = s.length,
          c = void 0 === n ? " " : String(n),
          u = o(e);
      if (u <= l || "" == c) return s;
      var f = u - l,
          d = i.call(c, Math.ceil(f / c.length));
      return d.length > f && (d = d.slice(0, f)), a ? d + s : s + d;
    };
  }, function (t, e, n) {
    var o = n(18),
        i = n(43),
        r = n(25),
        a = n(61).f;

    t.exports = function (t) {
      return function (e) {
        for (var n, s = r(e), l = i(s), c = l.length, u = 0, f = []; c > u;) {
          n = l[u++], o && !a.call(s, n) || f.push(t ? [n, s[n]] : s[n]);
        }

        return f;
      };
    };
  }, function (t, e, n) {
    var o = function (t) {
      "use strict";

      var e,
          n = Object.prototype,
          o = n.hasOwnProperty,
          i = "function" == typeof Symbol ? Symbol : {},
          r = i.iterator || "@@iterator",
          a = i.asyncIterator || "@@asyncIterator",
          s = i.toStringTag || "@@toStringTag";

      function l(t, e, n, o) {
        var i = e && e.prototype instanceof v ? e : v,
            r = Object.create(i.prototype),
            a = new B(o || []);
        return r._invoke = function (t, e, n) {
          var o = u;
          return function (i, r) {
            if (o === d) throw new Error("Generator is already running");

            if (o === p) {
              if ("throw" === i) throw r;
              return I();
            }

            for (n.method = i, n.arg = r;;) {
              var a = n.delegate;

              if (a) {
                var s = E(a, n);

                if (s) {
                  if (s === h) continue;
                  return s;
                }
              }

              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if (o === u) throw o = p, n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = d;
              var l = c(t, e, n);

              if ("normal" === l.type) {
                if (o = n.done ? p : f, l.arg === h) continue;
                return {
                  value: l.arg,
                  done: n.done
                };
              }

              "throw" === l.type && (o = p, n.method = "throw", n.arg = l.arg);
            }
          };
        }(t, n, a), r;
      }

      function c(t, e, n) {
        try {
          return {
            type: "normal",
            arg: t.call(e, n)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }

      t.wrap = l;
      var u = "suspendedStart",
          f = "suspendedYield",
          d = "executing",
          p = "completed",
          h = {};

      function v() {}

      function g() {}

      function y() {}

      var b = {};

      b[r] = function () {
        return this;
      };

      var m = Object.getPrototypeOf,
          k = m && m(m(_([])));
      k && k !== n && o.call(k, r) && (b = k);
      var x = y.prototype = v.prototype = Object.create(b);

      function w(t) {
        ["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t);
          };
        });
      }

      function S(t) {
        var e;

        this._invoke = function (n, i) {
          function r() {
            return new Promise(function (e, r) {
              !function e(n, i, r, a) {
                var s = c(t[n], t, i);

                if ("throw" !== s.type) {
                  var l = s.arg,
                      u = l.value;
                  return u && "object" == _typeof(u) && o.call(u, "__await") ? Promise.resolve(u.__await).then(function (t) {
                    e("next", t, r, a);
                  }, function (t) {
                    e("throw", t, r, a);
                  }) : Promise.resolve(u).then(function (t) {
                    l.value = t, r(l);
                  }, function (t) {
                    return e("throw", t, r, a);
                  });
                }

                a(s.arg);
              }(n, i, e, r);
            });
          }

          return e = e ? e.then(r, r) : r();
        };
      }

      function E(t, n) {
        var o = t.iterator[n.method];

        if (o === e) {
          if (n.delegate = null, "throw" === n.method) {
            if (t.iterator.return && (n.method = "return", n.arg = e, E(t, n), "throw" === n.method)) return h;
            n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return h;
        }

        var i = c(o, t.iterator, n.arg);
        if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, h;
        var r = i.arg;
        return r ? r.done ? (n[t.resultName] = r.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, h) : r : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, h);
      }

      function T(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }

      function C(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }

      function B(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(T, this), this.reset(!0);
      }

      function _(t) {
        if (t) {
          var n = t[r];
          if (n) return n.call(t);
          if ("function" == typeof t.next) return t;

          if (!isNaN(t.length)) {
            var i = -1,
                a = function n() {
              for (; ++i < t.length;) {
                if (o.call(t, i)) return n.value = t[i], n.done = !1, n;
              }

              return n.value = e, n.done = !0, n;
            };

            return a.next = a;
          }
        }

        return {
          next: I
        };
      }

      function I() {
        return {
          value: e,
          done: !0
        };
      }

      return g.prototype = x.constructor = y, y.constructor = g, y[s] = g.displayName = "GeneratorFunction", t.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name));
      }, t.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, s in t || (t[s] = "GeneratorFunction")), t.prototype = Object.create(x), t;
      }, t.awrap = function (t) {
        return {
          __await: t
        };
      }, w(S.prototype), S.prototype[a] = function () {
        return this;
      }, t.AsyncIterator = S, t.async = function (e, n, o, i) {
        var r = new S(l(e, n, o, i));
        return t.isGeneratorFunction(n) ? r : r.next().then(function (t) {
          return t.done ? t.value : r.next();
        });
      }, w(x), x[s] = "Generator", x[r] = function () {
        return this;
      }, x.toString = function () {
        return "[object Generator]";
      }, t.keys = function (t) {
        var e = [];

        for (var n in t) {
          e.push(n);
        }

        return e.reverse(), function n() {
          for (; e.length;) {
            var o = e.pop();
            if (o in t) return n.value = o, n.done = !1, n;
          }

          return n.done = !0, n;
        };
      }, t.values = _, B.prototype = {
        constructor: B,
        reset: function reset(t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(C), !t) for (var n in this) {
            "t" === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
          }
        },
        stop: function stop() {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(t) {
          if (this.done) throw t;
          var n = this;

          function i(o, i) {
            return s.type = "throw", s.arg = t, n.next = o, i && (n.method = "next", n.arg = e), !!i;
          }

          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var a = this.tryEntries[r],
                s = a.completion;
            if ("root" === a.tryLoc) return i("end");

            if (a.tryLoc <= this.prev) {
              var l = o.call(a, "catchLoc"),
                  c = o.call(a, "finallyLoc");

              if (l && c) {
                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return i(a.finallyLoc);
              } else if (l) {
                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
              } else {
                if (!c) throw new Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return i(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t, e) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var i = this.tryEntries[n];

            if (i.tryLoc <= this.prev && o.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
              var r = i;
              break;
            }
          }

          r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
          var a = r ? r.completion : {};
          return a.type = t, a.arg = e, r ? (this.method = "next", this.next = r.finallyLoc, h) : this.complete(a);
        },
        complete: function complete(t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h;
        },
        finish: function finish(t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), C(n), h;
          }
        },
        catch: function _catch(t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];

            if (n.tryLoc === t) {
              var o = n.completion;

              if ("throw" === o.type) {
                var i = o.arg;
                C(n);
              }

              return i;
            }
          }

          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(t, n, o) {
          return this.delegate = {
            iterator: _(t),
            resultName: n,
            nextLoc: o
          }, "next" === this.method && (this.arg = e), h;
        }
      }, t;
    }(t.exports);

    try {
      regeneratorRuntime = o;
    } catch (t) {
      Function("r", "regeneratorRuntime = r")(o);
    }
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(14)], void 0 === (r = "function" == typeof (o = function o(_o9, i, r, a, s, l, c, u) {
      "use strict";

      var f = n(15),
          d = n(1);
      Object.defineProperty(_o9, "__esModule", {
        value: !0
      }), _o9.default = void 0, i = d(i), r = d(r), a = d(a), s = d(s), l = d(l), c = d(c), u = f(u);

      var p = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).insert = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.config.initialBlock,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = arguments.length > 3 ? arguments[3] : void 0,
                r = arguments.length > 4 ? arguments[4] : void 0;
            t.Editor.BlockManager.insert(e, n, o, i, r);
          }, t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "getBlocksCount",
          value: function value() {
            return this.Editor.BlockManager.blocks.length;
          }
        }, {
          key: "getCurrentBlockIndex",
          value: function value() {
            return this.Editor.BlockManager.currentBlockIndex;
          }
        }, {
          key: "getBlockByIndex",
          value: function value(t) {
            return this.Editor.BlockManager.getBlockByIndex(t).holder;
          }
        }, {
          key: "swap",
          value: function value(t, e) {
            this.Editor.BlockManager.swap(t, e), this.Editor.Toolbar.move(!1);
          }
        }, {
          key: "delete",
          value: function value(t) {
            this.Editor.BlockManager.removeBlock(t), 0 === this.Editor.BlockManager.blocks.length && this.Editor.BlockManager.insert(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
          }
        }, {
          key: "clear",
          value: function value() {
            this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
          }
        }, {
          key: "render",
          value: function value(t) {
            return this.Editor.BlockManager.clear(), this.Editor.Renderer.render(t.blocks);
          }
        }, {
          key: "renderFromHTML",
          value: function value(t) {
            return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(t, !0);
          }
        }, {
          key: "stretchBlock",
          value: function value(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                n = this.Editor.BlockManager.getBlockByIndex(t);
            n && (n.stretched = e);
          }
        }, {
          key: "insertNewBlock",
          value: function value() {
            u.log("Method blocks.insertNewBlock() is deprecated and it will be removed in next major release. Use blocks.insert() instead.", "warn"), this.insert();
          }
        }, {
          key: "methods",
          get: function get() {
            var t = this;
            return {
              clear: function clear() {
                return t.clear();
              },
              render: function render(e) {
                return t.render(e);
              },
              renderFromHTML: function renderFromHTML(e) {
                return t.renderFromHTML(e);
              },
              delete: function _delete() {
                return t.delete();
              },
              swap: function swap(e, n) {
                return t.swap(e, n);
              },
              getBlockByIndex: function getBlockByIndex(e) {
                return t.getBlockByIndex(e);
              },
              getCurrentBlockIndex: function getCurrentBlockIndex() {
                return t.getCurrentBlockIndex();
              },
              getBlocksCount: function getBlocksCount() {
                return t.getBlocksCount();
              },
              stretchBlock: function stretchBlock(e) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return t.stretchBlock(e, n);
              },
              insertNewBlock: function insertNewBlock() {
                return t.insertNewBlock();
              },
              insert: this.insert
            };
          }
        }]), e;
      }(c.default);

      _o9.default = p, p.displayName = "BlocksAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function o(_o10, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(_o10, "__esModule", {
        value: !0
      }), _o10.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).setToFirstBlock = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return !!t.Editor.BlockManager.firstBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.firstBlock, e, n), !0);
          }, t.setToLastBlock = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return !!t.Editor.BlockManager.lastBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.lastBlock, e, n), !0);
          }, t.setToPreviousBlock = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return !!t.Editor.BlockManager.previousBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.previousBlock, e, n), !0);
          }, t.setToNextBlock = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return !!t.Editor.BlockManager.nextBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.nextBlock, e, n), !0);
          }, t.setToBlock = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.Editor.Caret.positions.DEFAULT,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return !!t.Editor.BlockManager.blocks[e] && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.blocks[e], n, o), !0);
          }, t.focus = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return e ? t.setToLastBlock(t.Editor.Caret.positions.END) : t.setToFirstBlock(t.Editor.Caret.positions.START);
          }, t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "methods",
          get: function get() {
            return {
              setToFirstBlock: this.setToFirstBlock,
              setToLastBlock: this.setToLastBlock,
              setToPreviousBlock: this.setToPreviousBlock,
              setToNextBlock: this.setToNextBlock,
              setToBlock: this.setToBlock,
              focus: this.focus
            };
          }
        }]), e;
      }((c = u(c)).default);

      _o10.default = f, f.displayName = "CaretAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function o(_o11, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(_o11, "__esModule", {
        value: !0
      }), _o11.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "on",
          value: function value(t, e) {
            this.Editor.Events.on(t, e);
          }
        }, {
          key: "emit",
          value: function value(t, e) {
            this.Editor.Events.emit(t, e);
          }
        }, {
          key: "off",
          value: function value(t, e) {
            this.Editor.Events.off(t, e);
          }
        }, {
          key: "methods",
          get: function get() {
            var t = this;
            return {
              emit: function emit(e, n) {
                return t.emit(e, n);
              },
              off: function off(e, n) {
                return t.off(e, n);
              },
              on: function on(e, n) {
                return t.on(e, n);
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      _o11.default = f, f.displayName = "EventsAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function o(_o12, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(_o12, "__esModule", {
        value: !0
      }), _o12.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "open",
          value: function value() {
            this.Editor.InlineToolbar.tryToShow();
          }
        }, {
          key: "close",
          value: function value() {
            this.Editor.InlineToolbar.close();
          }
        }, {
          key: "methods",
          get: function get() {
            var t = this;
            return {
              close: function close() {
                return t.close();
              },
              open: function open() {
                return t.open();
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      _o12.default = f, f.displayName = "InlineToolbarAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function o(_o13, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(_o13, "__esModule", {
        value: !0
      }), _o13.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "on",
          value: function value(t, e, n, o) {
            this.Editor.Listeners.on(t, e, n, o);
          }
        }, {
          key: "off",
          value: function value(t, e, n) {
            this.Editor.Listeners.off(t, e, n);
          }
        }, {
          key: "methods",
          get: function get() {
            var t = this;
            return {
              on: function on(e, n, o, i) {
                return t.on(e, n, o, i);
              },
              off: function off(e, n, o) {
                return t.off(e, n, o);
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      _o13.default = f, f.displayName = "ListenersAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function o(_o14, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(_o14, "__esModule", {
        value: !0
      }), _o14.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "show",
          value: function value(t) {
            return this.Editor.Notifier.show(t);
          }
        }, {
          key: "methods",
          get: function get() {
            var t = this;
            return {
              show: function show(e) {
                return t.show(e);
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      _o14.default = f, f.displayName = "NotifierAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function o(_o15, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(_o15, "__esModule", {
        value: !0
      }), _o15.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "clean",
          value: function value(t, e) {
            return this.Editor.Sanitizer.clean(t, e);
          }
        }, {
          key: "methods",
          get: function get() {
            var t = this;
            return {
              clean: function clean(e, n) {
                return t.clean(e, n);
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      _o15.default = f, f.displayName = "SanitizerAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function o(_o16, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(_o16, "__esModule", {
        value: !0
      }), _o16.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "save",
          value: function value() {
            return this.Editor.Saver.save();
          }
        }, {
          key: "methods",
          get: function get() {
            var t = this;
            return {
              save: function save() {
                return t.save();
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      _o16.default = f, f.displayName = "SaverAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(28)], void 0 === (r = "function" == typeof (o = function o(_o17, i, r, a, s, l, c, u) {
      "use strict";

      var f = n(1);
      Object.defineProperty(_o17, "__esModule", {
        value: !0
      }), _o17.default = void 0, i = f(i), r = f(r), a = f(a), s = f(s), l = f(l), c = f(c), u = f(u);

      var d = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "findParentTag",
          value: function value(t, e) {
            return new u.default().findParentTag(t, e);
          }
        }, {
          key: "expandToTag",
          value: function value(t) {
            new u.default().expandToTag(t);
          }
        }, {
          key: "methods",
          get: function get() {
            var t = this;
            return {
              findParentTag: function findParentTag(e, n) {
                return t.findParentTag(e, n);
              },
              expandToTag: function expandToTag(e) {
                return t.expandToTag(e);
              }
            };
          }
        }]), e;
      }(c.default);

      _o17.default = d, d.displayName = "SelectionAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function o(_o18, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(_o18, "__esModule", {
        value: !0
      }), _o18.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "classes",
          get: function get() {
            return {
              block: "cdx-block",
              inlineToolButton: "ce-inline-tool",
              inlineToolButtonActive: "ce-inline-tool--active",
              input: "cdx-input",
              loader: "cdx-loader",
              button: "cdx-button",
              settingsButton: "cdx-settings-button",
              settingsButtonActive: "cdx-settings-button--active"
            };
          }
        }]), e;
      }((c = u(c)).default);

      _o18.default = f, f.displayName = "StylesAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function o(_o19, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(_o19, "__esModule", {
        value: !0
      }), _o19.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "open",
          value: function value() {
            this.Editor.Toolbar.open();
          }
        }, {
          key: "close",
          value: function value() {
            this.Editor.Toolbar.close();
          }
        }, {
          key: "methods",
          get: function get() {
            var t = this;
            return {
              close: function close() {
                return t.close();
              },
              open: function open() {
                return t.open();
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      _o19.default = f, f.displayName = "ToolbarAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function o(_o20, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(_o20, "__esModule", {
        value: !0
      }), _o20.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "show",
          value: function value(t, e, n) {
            this.Editor.Tooltip.show(t, e, n);
          }
        }, {
          key: "hide",
          value: function value() {
            this.Editor.Tooltip.hide();
          }
        }, {
          key: "onHover",
          value: function value(t, e, n) {
            this.Editor.Tooltip.onHover(t, e, n);
          }
        }, {
          key: "methods",
          get: function get() {
            var t = this;
            return {
              show: function show(e, n, o) {
                return t.show(e, n, o);
              },
              hide: function hide() {
                return t.hide();
              },
              onHover: function onHover(e, n, o) {
                return t.onHover(e, n, o);
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      _o20.default = f, f.displayName = "TooltipAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(14), n(28), n(58)], void 0 === (r = "function" == typeof (o = function o(_o21, i, r, a, s, l, c, u, f, d) {
      "use strict";

      var p = n(15),
          h = n(1);
      Object.defineProperty(_o21, "__esModule", {
        value: !0
      }), _o21.default = void 0, i = h(i), r = h(r), a = h(a), s = h(s), l = h(l), c = h(c), u = p(u), f = h(f), d = h(d);

      var v = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "keydown",
          value: function value(t) {
            switch (this.beforeKeydownProcessing(t), t.keyCode) {
              case u.keyCodes.BACKSPACE:
                this.backspace(t);
                break;

              case u.keyCodes.ENTER:
                this.enter(t);
                break;

              case u.keyCodes.DOWN:
              case u.keyCodes.RIGHT:
                this.arrowRightAndDown(t);
                break;

              case u.keyCodes.UP:
              case u.keyCodes.LEFT:
                this.arrowLeftAndUp(t);
                break;

              case u.keyCodes.TAB:
                this.tabPressed(t);
                break;

              case u.keyCodes.ESC:
                this.escapePressed(t);
                break;

              default:
                this.defaultHandler();
            }
          }
        }, {
          key: "beforeKeydownProcessing",
          value: function value(t) {
            this.needToolbarClosing(t) && u.isPrintableKey(t.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(t)));
          }
        }, {
          key: "keyup",
          value: function value(t) {
            t.shiftKey || this.Editor.UI.checkEmptiness();
          }
        }, {
          key: "mouseUp",
          value: function value() {}
        }, {
          key: "mouseDown",
          value: function value(t) {
            f.default.isCollapsed || this.Editor.BlockSelection.clearSelection(t), this.Editor.CrossBlockSelection.watchSelection(t);
          }
        }, {
          key: "tabPressed",
          value: function value(t) {
            this.Editor.BlockSelection.clearSelection(t);
            var e = this.Editor,
                n = e.BlockManager,
                o = e.Tools,
                i = e.InlineToolbar,
                r = e.ConversionToolbar,
                a = n.currentBlock;

            if (a) {
              var s = o.isInitial(a.tool) && a.isEmpty,
                  l = !a.isEmpty && r.opened,
                  c = !a.isEmpty && !f.default.isCollapsed && i.opened;
              s ? this.activateToolbox() : l || c || this.activateBlockSettings();
            }
          }
        }, {
          key: "escapePressed",
          value: function value(t) {
            this.Editor.BlockSelection.clearSelection(t), this.Editor.Toolbox.opened ? this.Editor.Toolbox.close() : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
          }
        }, {
          key: "dragOver",
          value: function value(t) {
            this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget = !0;
          }
        }, {
          key: "dragLeave",
          value: function value(t) {
            this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget = !1;
          }
        }, {
          key: "handleCommandC",
          value: function value(t) {
            var e = this.Editor.BlockSelection;
            e.anyBlockSelected && (t.preventDefault(), e.copySelectedBlocks());
          }
        }, {
          key: "handleCommandX",
          value: function value(t) {
            var e = this.Editor,
                n = e.BlockSelection,
                o = e.BlockManager,
                i = e.Caret;

            if (n.anyBlockSelected) {
              t.preventDefault(), n.copySelectedBlocks();
              var r = o.removeSelectedBlocks();
              i.setToBlock(o.insertInitialBlockAtIndex(r, !0), i.positions.START), n.clearSelection(t);
            }
          }
        }, {
          key: "enter",
          value: function value(t) {
            var e = this.Editor,
                n = e.BlockManager,
                o = e.Tools,
                i = e.UI,
                r = n.currentBlock,
                a = o.available[r.name];

            if (!(a && a[o.INTERNAL_SETTINGS.IS_ENABLED_LINE_BREAKS] || i.someToolbarOpened && i.someFlipperButtonFocused || t.shiftKey)) {
              var s = this.Editor.BlockManager.currentBlock;
              this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertInitialBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : s = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(s), this.Editor.Tools.isInitial(s.tool) && s.isEmpty && (this.Editor.Toolbar.open(!1), this.Editor.Toolbar.plusButton.show()), t.preventDefault();
            }
          }
        }, {
          key: "backspace",
          value: function value(t) {
            var e = this.Editor,
                n = e.BlockManager,
                o = e.BlockSelection,
                i = e.Caret,
                r = n.currentBlock,
                a = this.Editor.Tools.available[r.name];

            if (r.selected || r.isEmpty && r.currentInput === r.firstInput) {
              t.preventDefault();
              var s = n.currentBlockIndex;
              return n.previousBlock && 0 === n.previousBlock.inputs.length ? n.removeBlock(s - 1) : n.removeBlock(), i.setToBlock(n.currentBlock, s ? i.positions.END : i.positions.START), this.Editor.Toolbar.close(), void o.clearSelection(t);
            }

            if (!a || !a[this.Editor.Tools.INTERNAL_SETTINGS.IS_ENABLED_LINE_BREAKS] || i.isAtStart) {
              var l = 0 === n.currentBlockIndex;
              i.isAtStart && f.default.isCollapsed && r.currentInput === r.firstInput && !l && (t.preventDefault(), this.mergeBlocks());
            }
          }
        }, {
          key: "mergeBlocks",
          value: function value() {
            var t = this.Editor,
                e = t.BlockManager,
                n = t.Caret,
                o = t.Toolbar,
                i = e.previousBlock,
                r = e.currentBlock;
            if (r.name !== i.name || !i.mergeable) return 0 === i.inputs.length || i.isEmpty ? (e.removeBlock(e.currentBlockIndex - 1), n.setToBlock(e.currentBlock), void o.close()) : void (n.navigatePrevious() && o.close());
            n.createShadow(i.pluginsContent), e.mergeBlocks(i, r).then(function () {
              n.restoreCaret(i.pluginsContent), i.pluginsContent.normalize(), o.close();
            });
          }
        }, {
          key: "arrowRightAndDown",
          value: function value(t) {
            var e = this,
                n = d.default.usedKeys.includes(t.keyCode) && (!t.shiftKey || t.keyCode === u.keyCodes.TAB);

            if (!this.Editor.UI.someToolbarOpened || !n) {
              this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
              var o = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
              t.shiftKey && t.keyCode === u.keyCodes.DOWN && o ? this.Editor.CrossBlockSelection.toggleBlockSelectedState() : (this.Editor.Caret.navigateNext() ? t.preventDefault() : u.delay(function () {
                e.Editor.BlockManager.currentBlock && e.Editor.BlockManager.currentBlock.updateCurrentInput();
              }, 20)(), this.Editor.BlockSelection.clearSelection(t));
            }
          }
        }, {
          key: "arrowLeftAndUp",
          value: function value(t) {
            var e = this;

            if (this.Editor.UI.someToolbarOpened) {
              if (d.default.usedKeys.includes(t.keyCode) && (!t.shiftKey || t.keyCode === u.keyCodes.TAB)) return;
              this.Editor.UI.closeAllToolbars();
            }

            this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
            var n = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
            t.shiftKey && t.keyCode === u.keyCodes.UP && n ? this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1) : (this.Editor.Caret.navigatePrevious() ? t.preventDefault() : u.delay(function () {
              e.Editor.BlockManager.currentBlock && e.Editor.BlockManager.currentBlock.updateCurrentInput();
            }, 20)(), this.Editor.BlockSelection.clearSelection(t));
          }
        }, {
          key: "defaultHandler",
          value: function value() {}
        }, {
          key: "needToolbarClosing",
          value: function value(t) {
            var e = t.keyCode === u.keyCodes.ENTER && this.Editor.Toolbox.opened,
                n = t.keyCode === u.keyCodes.ENTER && this.Editor.BlockSettings.opened,
                o = t.keyCode === u.keyCodes.ENTER && this.Editor.InlineToolbar.opened,
                i = t.keyCode === u.keyCodes.ENTER && this.Editor.ConversionToolbar.opened,
                r = t.keyCode === u.keyCodes.TAB;
            return !(t.shiftKey || r || e || n || o || i);
          }
        }, {
          key: "activateToolbox",
          value: function value() {
            this.Editor.Toolbar.opened || (this.Editor.Toolbar.open(!1, !1), this.Editor.Toolbar.plusButton.show()), this.Editor.Toolbox.open();
          }
        }, {
          key: "activateBlockSettings",
          value: function value() {
            this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = !0, this.Editor.Toolbar.open(!0, !1), this.Editor.Toolbar.plusButton.hide()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
          }
        }]), e;
      }(c.default);

      _o21.default = v, v.displayName = "BlockEvents", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(27), n(2), n(3), n(4), n(5), n(6), n(59), n(7), n(13), n(14), n(363)], void 0 === (r = "function" == typeof (o = function o(_o22, i, r, a, s, l, c, u, f, d, p, h) {
      "use strict";

      var v = n(15),
          g = n(1);
      Object.defineProperty(_o22, "__esModule", {
        value: !0
      }), _o22.default = void 0, i = g(i), r = g(r), a = g(a), s = g(s), l = g(l), c = g(c), u = v(u), f = g(f), d = g(d), p = v(p), h = g(h);

      var y = function (t) {
        function e() {
          var t;
          return (0, r.default)(this, e), (t = (0, s.default)(this, (0, l.default)(e).apply(this, arguments)))._currentBlockIndex = -1, t._blocks = null, t;
        }

        return (0, c.default)(e, t), (0, a.default)(e, [{
          key: "prepare",
          value: function value() {
            var t, e, n, o;
            return i.default.async(function (i) {
              for (;;) {
                switch (i.prev = i.next) {
                  case 0:
                    t = new h.default(this.Editor.UI.nodes.redactor), e = this.Editor, n = e.BlockEvents, o = e.Shortcuts, this._blocks = new Proxy(t, {
                      set: h.default.set,
                      get: h.default.get
                    }), o.add({
                      name: "CMD+C",
                      handler: function handler(t) {
                        n.handleCommandC(t);
                      }
                    }), o.add({
                      name: "CMD+X",
                      handler: function handler(t) {
                        n.handleCommandX(t);
                      }
                    });

                  case 5:
                  case "end":
                    return i.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "composeBlock",
          value: function value(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = this.Editor.Tools.construct(t, e),
                i = this.Editor.Tools.available[t],
                r = new u.default(t, o, i, n, this.Editor.API.methods);
            return this.bindEvents(r), r;
          }
        }, {
          key: "insert",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config.initialBlock,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.currentBlockIndex + 1,
                i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                r = this.composeBlock(t, e, n);
            return this._blocks[o] = r, i && (this.currentBlockIndex = o), r;
          }
        }, {
          key: "paste",
          value: function value(t, e) {
            var n,
                o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            n = o ? this.replace(t) : this.insert(t);

            try {
              n.call(u.BlockToolAPI.ON_PASTE, e);
            } catch (e) {
              p.log("".concat(t, ": onPaste callback call is failed"), "error", e);
            }

            return n;
          }
        }, {
          key: "insertInitialBlockAtIndex",
          value: function value(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = this.composeBlock(this.config.initialBlock, {}, {});
            return this._blocks[t] = n, e ? this.currentBlockIndex = t : t <= this.currentBlockIndex && this.currentBlockIndex++, n;
          }
        }, {
          key: "insertAtEnd",
          value: function value() {
            return this.currentBlockIndex = this.blocks.length - 1, this.insert();
          }
        }, {
          key: "mergeBlocks",
          value: function value(t, e) {
            var n, o;
            return i.default.async(function (r) {
              for (;;) {
                switch (r.prev = r.next) {
                  case 0:
                    if (n = this._blocks.indexOf(e), !e.isEmpty) {
                      r.next = 3;
                      break;
                    }

                    return r.abrupt("return");

                  case 3:
                    return r.next = 5, i.default.awrap(e.data);

                  case 5:
                    if (o = r.sent, p.isEmpty(o)) {
                      r.next = 9;
                      break;
                    }

                    return r.next = 9, i.default.awrap(t.mergeWith(o));

                  case 9:
                    this.removeBlock(n), this.currentBlockIndex = this._blocks.indexOf(t);

                  case 11:
                  case "end":
                    return r.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "removeBlock",
          value: function value(t) {
            if (void 0 === t && (t = this.currentBlockIndex), this._blocks.remove(t), this.currentBlockIndex >= t && this.currentBlockIndex--, !this.blocks.length) return this.currentBlockIndex = -1, void this.insert();
            0 === t && (this.currentBlockIndex = 0);
          }
        }, {
          key: "removeSelectedBlocks",
          value: function value() {
            for (var t, e = this.blocks.length - 1; e >= 0; e--) {
              this.blocks[e].selected && (this.removeBlock(e), t = e);
            }

            return t;
          }
        }, {
          key: "removeAllBlocks",
          value: function value() {
            for (var t = this.blocks.length - 1; t >= 0; t--) {
              this._blocks.remove(t);
            }

            this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
          }
        }, {
          key: "split",
          value: function value() {
            var t = this.Editor.Caret.extractFragmentFromCaretPosition(),
                e = d.default.make("div");
            e.appendChild(t);
            var n = {
              text: d.default.isEmpty(e) ? "" : e.innerHTML
            };
            return this.insert(this.config.initialBlock, n);
          }
        }, {
          key: "replace",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config.initialBlock,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = this.composeBlock(t, e);
            return this._blocks.insert(this.currentBlockIndex, n, !0), n;
          }
        }, {
          key: "getBlockByIndex",
          value: function value(t) {
            return this._blocks[t];
          }
        }, {
          key: "getBlock",
          value: function value(t) {
            d.default.isElement(t) || (t = t.parentNode);
            var e = this._blocks.nodes,
                n = t.closest(".".concat(u.default.CSS.wrapper)),
                o = e.indexOf(n);
            if (o >= 0) return this._blocks[o];
          }
        }, {
          key: "highlightCurrentNode",
          value: function value() {
            this.clearFocused(), this.currentBlock.focused = !0;
          }
        }, {
          key: "clearFocused",
          value: function value() {
            this.blocks.forEach(function (t) {
              return t.focused = !1;
            });
          }
        }, {
          key: "setCurrentBlockByChildNode",
          value: function value(t) {
            d.default.isElement(t) || (t = t.parentNode);
            var e = t.closest(".".concat(u.default.CSS.wrapper));
            if (e) return this.currentBlockIndex = this._blocks.nodes.indexOf(e), this.currentBlock;
            throw new Error("Can not find a Block from this child Node");
          }
        }, {
          key: "getBlockByChildNode",
          value: function value(t) {
            d.default.isElement(t) || (t = t.parentNode);
            var e = t.closest(".".concat(u.default.CSS.wrapper));
            return this.blocks.find(function (t) {
              return t.holder === e;
            });
          }
        }, {
          key: "swap",
          value: function value(t, e) {
            this._blocks.swap(t, e), this.currentBlockIndex = e;
          }
        }, {
          key: "dropPointer",
          value: function value() {
            this.currentBlockIndex = -1, this.clearFocused();
          }
        }, {
          key: "clear",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._blocks.removeAll(), this.dropPointer(), t && this.insert(this.config.initialBlock), this.Editor.UI.checkEmptiness();
          }
        }, {
          key: "bindEvents",
          value: function value(t) {
            var e = this.Editor,
                n = e.BlockEvents,
                o = e.Listeners;
            o.on(t.holder, "keydown", function (t) {
              return n.keydown(t);
            }, !0), o.on(t.holder, "mouseup", function (t) {
              return n.mouseUp();
            }), o.on(t.holder, "mousedown", function (t) {
              return n.mouseDown(t);
            }), o.on(t.holder, "keyup", function (t) {
              return n.keyup(t);
            }), o.on(t.holder, "dragover", function (t) {
              return n.dragOver(t);
            }), o.on(t.holder, "dragleave", function (t) {
              return n.dragLeave(t);
            });
          }
        }, {
          key: "currentBlockIndex",
          get: function get() {
            return this._currentBlockIndex;
          },
          set: function set(t) {
            this._blocks[this._currentBlockIndex] && this._blocks[this._currentBlockIndex].willUnselect(), this._blocks[t] && this._blocks[t].willSelect(), this._currentBlockIndex = t;
          }
        }, {
          key: "firstBlock",
          get: function get() {
            return this._blocks[0];
          }
        }, {
          key: "lastBlock",
          get: function get() {
            return this._blocks[this._blocks.length - 1];
          }
        }, {
          key: "currentBlock",
          get: function get() {
            return this._blocks[this.currentBlockIndex];
          }
        }, {
          key: "nextBlock",
          get: function get() {
            return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
          }
        }, {
          key: "nextContentfulBlock",
          get: function get() {
            return this.blocks.slice(this.currentBlockIndex + 1).find(function (t) {
              return !!t.inputs.length;
            });
          }
        }, {
          key: "previousContentfulBlock",
          get: function get() {
            return this.blocks.slice(0, this.currentBlockIndex).reverse().find(function (t) {
              return !!t.inputs.length;
            });
          }
        }, {
          key: "previousBlock",
          get: function get() {
            return 0 === this.currentBlockIndex ? null : this._blocks[this.currentBlockIndex - 1];
          }
        }, {
          key: "blocks",
          get: function get() {
            return this._blocks.array;
          }
        }, {
          key: "isEditorEmpty",
          get: function get() {
            return this.blocks.every(function (t) {
              return t.isEmpty;
            });
          }
        }]), e;
      }(f.default);

      _o22.default = y, y.displayName = "BlockManager", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(14), n(13), n(28)], void 0 === (r = "function" == typeof (o = function o(_o23, i, r, a, s, l, c, u, f, d) {
      "use strict";

      var p = n(15),
          h = n(1);
      Object.defineProperty(_o23, "__esModule", {
        value: !0
      }), _o23.default = void 0, i = h(i), r = h(r), a = h(a), s = h(s), l = h(l), c = h(c), u = p(u), f = h(f), d = h(d);

      var v = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).needToSelectAll = !1, t.nativeInputSelected = !1, t.readyToBlockSelection = !1, t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "prepare",
          value: function value() {
            var t = this;
            this.Editor.Shortcuts.add({
              name: "CMD+A",
              handler: function handler(e) {
                t.Editor.BlockManager.currentBlock && t.handleCommandA(e);
              }
            }), this.selection = new d.default();
          }
        }, {
          key: "unSelectBlockByIndex",
          value: function value(t) {
            var e = this.Editor.BlockManager;
            (isNaN(t) ? e.currentBlock : e.getBlockByIndex(t)).selected = !1;
          }
        }, {
          key: "clearSelection",
          value: function value(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = this.Editor,
                o = n.BlockManager,
                i = n.Caret,
                r = n.RectangleSelection;

            if (this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1, this.anyBlockSelected && t && t instanceof KeyboardEvent && u.isPrintableKey(t.keyCode)) {
              var a = o.removeSelectedBlocks();
              o.insertInitialBlockAtIndex(a, !0), i.setToBlock(o.currentBlock), u.delay(function () {
                i.insertContentAtCaretPosition(t.key);
              }, 20)();
            }

            this.Editor.CrossBlockSelection.clear(t), this.anyBlockSelected && !r.isRectActivated() ? (e && this.selection.restore(), this.allBlocksSelected = !1) : this.Editor.RectangleSelection.clearSelection();
          }
        }, {
          key: "copySelectedBlocks",
          value: function value() {
            var t = this,
                e = f.default.make("div");
            this.selectedBlocks.forEach(function (n) {
              var o = t.Editor.Sanitizer.clean(n.holder.innerHTML, t.sanitizerConfig),
                  i = f.default.make("p");
              i.innerHTML = o, e.appendChild(i);
            }), u.copyTextToClipboard(e.innerHTML);
          }
        }, {
          key: "selectBlockByIndex",
          value: function value(t) {
            var e,
                n = this.Editor.BlockManager;
            n.clearFocused(), e = isNaN(t) ? n.currentBlock : n.getBlockByIndex(t), this.selection.save(), d.default.get().removeAllRanges(), e.selected = !0, this.Editor.InlineToolbar.close();
          }
        }, {
          key: "handleCommandA",
          value: function value(t) {
            if (this.Editor.RectangleSelection.clearSelection(), !f.default.isNativeInput(t.target) || this.readyToBlockSelection) {
              var e = this.Editor.BlockManager.getBlock(t.target).inputs;
              e.length > 1 && !this.readyToBlockSelection ? this.readyToBlockSelection = !0 : 1 !== e.length || this.needToSelectAll ? this.needToSelectAll ? (t.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (t.preventDefault(), this.selectBlockByIndex(), this.needToSelectAll = !0) : this.needToSelectAll = !0;
            } else this.readyToBlockSelection = !0;
          }
        }, {
          key: "selectAllBlocks",
          value: function value() {
            this.selection.save(), d.default.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
          }
        }, {
          key: "sanitizerConfig",
          get: function get() {
            return {
              p: {},
              h1: {},
              h2: {},
              h3: {},
              h4: {},
              h5: {},
              h6: {},
              ol: {},
              ul: {},
              li: {},
              br: !0,
              img: {
                src: !0,
                width: !0,
                height: !0
              },
              a: {
                href: !0
              },
              b: {},
              i: {},
              u: {}
            };
          }
        }, {
          key: "allBlocksSelected",
          get: function get() {
            return this.Editor.BlockManager.blocks.every(function (t) {
              return !0 === t.selected;
            });
          },
          set: function set(t) {
            this.Editor.BlockManager.blocks.forEach(function (e) {
              return e.selected = t;
            });
          }
        }, {
          key: "anyBlockSelected",
          get: function get() {
            return this.Editor.BlockManager.blocks.some(function (t) {
              return !0 === t.selected;
            });
          }
        }, {
          key: "selectedBlocks",
          get: function get() {
            return this.Editor.BlockManager.blocks.filter(function (t) {
              return t.selected;
            });
          }
        }]), e;
      }(c.default);

      _o23.default = v, v.displayName = "BlockSelection", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(28), n(7), n(13), n(14)], void 0 === (r = "function" == typeof (o = function o(_o24, i, r, a, s, l, c, u, f, d) {
      "use strict";

      var p = n(15),
          h = n(1);
      Object.defineProperty(_o24, "__esModule", {
        value: !0
      }), _o24.default = void 0, i = h(i), r = h(r), a = h(a), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f), d = p(d);

      var v = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "setToBlock",
          value: function value(t) {
            var e,
                n = this,
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                r = this.Editor.BlockManager;

            switch (o) {
              case this.positions.START:
                e = t.firstInput;
                break;

              case this.positions.END:
                e = t.lastInput;
                break;

              default:
                e = t.currentInput;
            }

            if (e) {
              var a = f.default.getDeepestNode(e, o === this.positions.END),
                  s = f.default.getContentLength(a);

              switch (!0) {
                case o === this.positions.START:
                  i = 0;
                  break;

                case o === this.positions.END:
                case i > s:
                  i = s;
              }

              d.delay(function () {
                n.set(a, i);
              }, 20)(), r.setCurrentBlockByChildNode(t.holder), r.currentBlock.currentInput = e;
            }
          }
        }, {
          key: "setToInput",
          value: function value(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                o = this.Editor.BlockManager.currentBlock,
                i = f.default.getDeepestNode(t);

            switch (e) {
              case this.positions.START:
                this.set(i, 0);
                break;

              case this.positions.END:
                var r = f.default.getContentLength(i);
                this.set(i, r);
                break;

              default:
                n && this.set(i, n);
            }

            o.currentInput = t;
          }
        }, {
          key: "set",
          value: function value(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = document.createRange(),
                o = c.default.get();

            if (f.default.isNativeInput(t)) {
              if (!f.default.canSetCaret(t)) return;
              return t.focus(), void (t.selectionStart = t.selectionEnd = e);
            }

            n.setStart(t, e), n.setEnd(t, e), o.removeAllRanges(), o.addRange(n);
            var i = t.nodeType === Node.ELEMENT_NODE ? t.getBoundingClientRect() : n.getBoundingClientRect(),
                r = i.top,
                a = i.bottom,
                s = window,
                l = s.innerHeight;
            r < 0 && window.scrollBy(0, r), a > l && window.scrollBy(0, a - l);
          }
        }, {
          key: "setToTheLastBlock",
          value: function value() {
            var t = this.Editor.BlockManager.lastBlock;
            if (t) if (this.Editor.Tools.isInitial(t.tool) && t.isEmpty) this.setToBlock(t);else {
              var e = this.Editor.BlockManager.insertAtEnd();
              this.setToBlock(e);
            }
          }
        }, {
          key: "extractFragmentFromCaretPosition",
          value: function value() {
            var t = c.default.get();

            if (t.rangeCount) {
              var e = t.getRangeAt(0),
                  n = this.Editor.BlockManager.currentBlock.currentInput;

              if (e.deleteContents(), n) {
                var o = e.cloneRange();
                return o.selectNodeContents(n), o.setStart(e.endContainer, e.endOffset), o.extractContents();
              }
            }
          }
        }, {
          key: "navigateNext",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e = this.Editor.BlockManager,
                n = e.currentBlock,
                o = e.nextContentfulBlock,
                i = n.nextInput;
            return !(!o && !i || !t && !this.isAtEnd || (i ? this.setToInput(i, this.positions.START) : this.setToBlock(o, this.positions.START), 0));
          }
        }, {
          key: "navigatePrevious",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e = this.Editor.BlockManager,
                n = e.currentBlock,
                o = e.previousContentfulBlock;
            if (!n) return !1;
            var i = n.previousInput;
            return !(!o && !i || !t && !this.isAtStart || (i ? this.setToInput(i, this.positions.END) : this.setToBlock(o, this.positions.END), 0));
          }
        }, {
          key: "createShadow",
          value: function value(t) {
            var n = document.createElement("span");
            n.classList.add(e.CSS.shadowCaret), t.insertAdjacentElement("beforeEnd", n);
          }
        }, {
          key: "restoreCaret",
          value: function value(t) {
            var n = t.querySelector(".".concat(e.CSS.shadowCaret));
            n && (new c.default().expandToTag(n), setTimeout(function () {
              var t = document.createRange();
              t.selectNode(n), t.extractContents();
            }, 50));
          }
        }, {
          key: "insertContentAtCaretPosition",
          value: function value(t) {
            var e = document.createDocumentFragment(),
                n = document.createElement("div"),
                o = c.default.get(),
                i = c.default.range;
            n.innerHTML = t, Array.from(n.childNodes).forEach(function (t) {
              return e.appendChild(t);
            });
            var r = e.lastChild;
            i.deleteContents(), i.insertNode(e);
            var a = document.createRange();
            a.setStart(r, r.textContent.length), o.removeAllRanges(), o.addRange(a);
          }
        }, {
          key: "getHigherLevelSiblings",
          value: function value(t, e) {
            for (var n = t, o = []; n.parentNode && "true" !== n.parentNode.contentEditable;) {
              n = n.parentNode;
            }

            for (var i = "left" === e ? "previousSibling" : "nextSibling"; n[i];) {
              n = n[i], o.push(n);
            }

            return o;
          }
        }, {
          key: "positions",
          get: function get() {
            return {
              START: "start",
              END: "end",
              DEFAULT: "default"
            };
          }
        }, {
          key: "isAtStart",
          get: function get() {
            var t = c.default.get(),
                e = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput),
                n = t.focusNode;
            if (f.default.isNativeInput(e)) return 0 === e.selectionEnd;
            if (!t.anchorNode) return !1;
            var o = n.textContent.search(/\S/);
            -1 === o && (o = 0);
            var i = t.focusOffset;
            return n.nodeType !== Node.TEXT_NODE && n.childNodes.length && (n.childNodes[i] ? (n = n.childNodes[i], i = 0) : i = (n = n.childNodes[i - 1]).textContent.length), !(!f.default.isLineBreakTag(e) && !f.default.isEmpty(e) || !this.getHigherLevelSiblings(n, "left").every(function (t) {
              var e = f.default.isLineBreakTag(t),
                  n = 1 === t.children.length && f.default.isLineBreakTag(t.children[0]),
                  o = e || n;
              return f.default.isEmpty(t) && !o;
            }) || i !== o) || null === e || n === e && i <= o;
          }
        }, {
          key: "isAtEnd",
          get: function get() {
            var t = c.default.get(),
                e = t.focusNode,
                n = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, !0);
            if (f.default.isNativeInput(n)) return n.selectionEnd === n.value.length;
            if (!t.focusNode) return !1;
            var o = t.focusOffset;

            if (e.nodeType !== Node.TEXT_NODE && e.childNodes.length && (e.childNodes[o - 1] ? o = (e = e.childNodes[o - 1]).textContent.length : (e = e.childNodes[0], o = 0)), f.default.isLineBreakTag(n) || f.default.isEmpty(n)) {
              var i = this.getHigherLevelSiblings(e, "right");
              if (i.every(function (t, e) {
                return e === i.length - 1 && f.default.isLineBreakTag(t) || f.default.isEmpty(t) && !f.default.isLineBreakTag(t);
              }) && o === e.textContent.length) return !0;
            }

            var r = n.textContent.replace(/\s+$/, "");
            return e === n && o >= r.length;
          }
        }], [{
          key: "CSS",
          get: function get() {
            return {
              shadowCaret: "cdx-shadow-caret"
            };
          }
        }]), e;
      }(u.default);

      _o24.default = v, v.displayName = "Caret", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(28), n(14)], void 0 === (r = "function" == typeof (o = function o(_o25, i, r, a, s, l, c, u, f) {
      "use strict";

      var d = n(15),
          p = n(1);
      Object.defineProperty(_o25, "__esModule", {
        value: !0
      }), _o25.default = void 0, i = p(i), r = p(r), a = p(a), s = p(s), l = p(l), c = p(c), u = p(u), f = d(f);

      var h = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).onMouseUp = function () {
            var e = t.Editor.Listeners;
            e.off(document, "mouseover", t.onMouseOver), e.off(document, "mouseup", t.onMouseUp);
          }, t.onMouseOver = function (e) {
            var n = t.Editor.BlockManager,
                o = n.getBlockByChildNode(e.relatedTarget) || t.lastSelectedBlock,
                i = n.getBlockByChildNode(e.target);

            if (o && i && i !== o) {
              if (o === t.firstSelectedBlock) return u.default.get().removeAllRanges(), o.selected = !0, void (i.selected = !0);
              if (i === t.firstSelectedBlock) return o.selected = !1, void (i.selected = !1);
              t.Editor.InlineToolbar.close(), t.toggleBlocksSelectedState(o, i), t.lastSelectedBlock = i;
            }
          }, t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "watchSelection",
          value: function value(t) {
            if (t.button === f.mouseButtons.LEFT) {
              var e = this.Editor,
                  n = e.BlockManager,
                  o = (e.UI, e.Listeners);
              this.firstSelectedBlock = n.getBlock(t.target), this.lastSelectedBlock = this.firstSelectedBlock, o.on(document, "mouseover", this.onMouseOver), o.on(document, "mouseup", this.onMouseUp);
            }
          }
        }, {
          key: "toggleBlockSelectedState",
          value: function value() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                e = this.Editor.BlockManager;
            this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = e.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, u.default.get().removeAllRanges());
            var n = e.blocks.indexOf(this.lastSelectedBlock) + (t ? 1 : -1),
                o = e.blocks[n];
            o && (this.lastSelectedBlock.selected !== o.selected ? o.selected = !0 : this.lastSelectedBlock.selected = !1, this.lastSelectedBlock = o, this.Editor.InlineToolbar.close());
          }
        }, {
          key: "clear",
          value: function value(t) {
            var e = this.Editor,
                n = e.BlockManager,
                o = e.BlockSelection,
                i = e.Caret,
                r = n.blocks.indexOf(this.firstSelectedBlock),
                a = n.blocks.indexOf(this.lastSelectedBlock);
            if (o.anyBlockSelected && r > -1 && a > -1) if (t && t instanceof KeyboardEvent) switch (t.keyCode) {
              case f.keyCodes.DOWN:
              case f.keyCodes.RIGHT:
                i.setToBlock(n.blocks[Math.max(r, a)], i.positions.END);
                break;

              case f.keyCodes.UP:
              case f.keyCodes.LEFT:
                i.setToBlock(n.blocks[Math.min(r, a)], i.positions.START);
                break;

              default:
                i.setToBlock(n.blocks[Math.max(r, a)], i.positions.END);
            } else i.setToBlock(n.blocks[Math.max(r, a)], i.positions.END);
            this.firstSelectedBlock = this.lastSelectedBlock = null;
          }
        }, {
          key: "toggleBlocksSelectedState",
          value: function value(t, e) {
            for (var n = this.Editor.BlockManager, o = n.blocks.indexOf(t), i = n.blocks.indexOf(e), r = t.selected !== e.selected, a = Math.min(o, i); a <= Math.max(o, i); a++) {
              var s = n.blocks[a];
              s !== this.firstSelectedBlock && s !== (r ? t : e) && (n.blocks[a].selected = !n.blocks[a].selected);
            }
          }
        }, {
          key: "isCrossBlockSelectionStarted",
          get: function get() {
            return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
          }
        }]), e;
      }(c.default);

      _o25.default = h, h.displayName = "CrossBlockSelection", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(27), n(2), n(3), n(4), n(5), n(6), n(28), n(7)], void 0 === (r = "function" == typeof (o = function o(_o26, i, r, a, s, l, c, u, f) {
      "use strict";

      var d = n(1);
      Object.defineProperty(_o26, "__esModule", {
        value: !0
      }), _o26.default = void 0, i = d(i), r = d(r), a = d(a), s = d(s), l = d(l), c = d(c), u = d(u);

      var p = function (t) {
        function e() {
          var t;
          return (0, r.default)(this, e), (t = (0, s.default)(this, (0, l.default)(e).apply(this, arguments))).isStartedAtEditor = !1, t.processDrop = function (e) {
            var n, o, r, a, s, l;
            return i.default.async(function (i) {
              for (;;) {
                switch (i.prev = i.next) {
                  case 0:
                    n = t.Editor, o = n.BlockManager, r = n.Caret, a = n.Paste, e.preventDefault(), o.blocks.forEach(function (t) {
                      return t.dropTarget = !1;
                    }), u.default.isAtEditor && !u.default.isCollapsed && t.isStartedAtEditor && document.execCommand("delete"), t.isStartedAtEditor = !1;

                    try {
                      s = o.setCurrentBlockByChildNode(e.target), t.Editor.Caret.setToBlock(s, r.positions.END);
                    } catch (e) {
                      l = o.setCurrentBlockByChildNode(o.lastBlock.holder), t.Editor.Caret.setToBlock(l, r.positions.END);
                    }

                    a.processDataTransfer(e.dataTransfer, !0);

                  case 7:
                  case "end":
                    return i.stop();
                }
              }
            });
          }, t;
        }

        return (0, c.default)(e, t), (0, a.default)(e, [{
          key: "prepare",
          value: function value() {
            this.bindEvents();
          }
        }, {
          key: "bindEvents",
          value: function value() {
            var t = this;
            this.Editor.Listeners.on(this.Editor.UI.nodes.holder, "drop", this.processDrop, !0), this.Editor.Listeners.on(this.Editor.UI.nodes.holder, "dragstart", function (e) {
              u.default.isAtEditor && !u.default.isCollapsed && (t.isStartedAtEditor = !0), t.Editor.InlineToolbar.close();
            }), this.Editor.Listeners.on(this.Editor.UI.nodes.holder, "dragover", function (t) {
              return t.preventDefault();
            }, !0);
          }
        }]), e;
      }((f = d(f)).default);

      _o26.default = p, p.displayName = "DragNDrop", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function o(_o27, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(_o27, "__esModule", {
        value: !0
      }), _o27.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).subscribers = {}, t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "on",
          value: function value(t, e) {
            t in this.subscribers || (this.subscribers[t] = []), this.subscribers[t].push(e);
          }
        }, {
          key: "once",
          value: function value(t, e) {
            var n = this;
            t in this.subscribers || (this.subscribers[t] = []), this.subscribers[t].push(function o(i) {
              var r = e(i),
                  a = n.subscribers[t].indexOf(o);
              return -1 !== a && n.subscribers[t].splice(a, 1), r;
            });
          }
        }, {
          key: "emit",
          value: function value(t, e) {
            this.subscribers[t] && this.subscribers[t].reduce(function (t, e) {
              var n = e(t);
              return n || t;
            }, e);
          }
        }, {
          key: "off",
          value: function value(t, e) {
            for (var n = 0; n < this.subscribers[t].length; n++) {
              if (this.subscribers[t][n] === e) {
                delete this.subscribers[t][n];
                break;
              }
            }
          }
        }, {
          key: "destroy",
          value: function value() {
            this.subscribers = null;
          }
        }]), e;
      }((c = u(c)).default);

      _o27.default = f, f.displayName = "Events", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function o(_o28, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(_o28, "__esModule", {
        value: !0
      }), _o28.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).allListeners = [], t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "on",
          value: function value(t, e, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                i = {
              element: t,
              eventType: e,
              handler: n,
              options: o
            },
                r = this.findOne(t, e, n);
            r || (this.allListeners.push(i), t.addEventListener(e, n, o));
          }
        }, {
          key: "off",
          value: function value(t, e, n, o) {
            var i = this,
                r = this.findAll(t, e, n);
            r.forEach(function (t, e) {
              var n = i.allListeners.indexOf(r[e]);
              n > 0 && (i.allListeners.splice(n, 1), t.element.removeEventListener(t.eventType, t.handler, t.options));
            });
          }
        }, {
          key: "findOne",
          value: function value(t, e, n) {
            var o = this.findAll(t, e, n);
            return o.length > 0 ? o[0] : null;
          }
        }, {
          key: "findAll",
          value: function value(t, e, n) {
            var o = t ? this.findByEventTarget(t) : [];
            return t && e && n ? o.filter(function (t) {
              return t.eventType === e && t.handler === n;
            }) : t && e ? o.filter(function (t) {
              return t.eventType === e;
            }) : o;
          }
        }, {
          key: "removeAll",
          value: function value() {
            this.allListeners.map(function (t) {
              t.element.removeEventListener(t.eventType, t.handler, t.options);
            }), this.allListeners = [];
          }
        }, {
          key: "findByEventTarget",
          value: function value(t) {
            return this.allListeners.filter(function (e) {
              if (e.element === t) return e;
            });
          }
        }, {
          key: "findByType",
          value: function value(t) {
            return this.allListeners.filter(function (e) {
              if (e.eventType === t) return e;
            });
          }
        }, {
          key: "findByHandler",
          value: function value(t) {
            return this.allListeners.filter(function (e) {
              if (e.handler === t) return e;
            });
          }
        }]), e;
      }((c = u(c)).default);

      _o28.default = f, f.displayName = "Listeners", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(27), n(2), n(3), n(4), n(5), n(6), n(7), n(14), n(59)], void 0 === (r = "function" == typeof (o = function o(_o29, i, r, a, s, l, c, u, f, d) {
      "use strict";

      var p = n(15),
          h = n(1);
      Object.defineProperty(_o29, "__esModule", {
        value: !0
      }), _o29.default = void 0, i = h(i), r = h(r), a = h(a), s = h(s), l = h(l), c = h(c), u = h(u), f = p(f), d = h(d);

      var v = function (t) {
        function e() {
          var t;
          return (0, r.default)(this, e), (t = (0, s.default)(this, (0, l.default)(e).apply(this, arguments))).mutationDebouncer = f.debounce(function () {
            t.updateNativeInputs(), t.config.onChange();
          }, e.DebounceTimer), t.nativeInputs = [], t;
        }

        return (0, c.default)(e, t), (0, a.default)(e, [{
          key: "destroy",
          value: function value() {
            var t = this;
            this.mutationDebouncer = null, this.observer && this.observer.disconnect(), this.observer = null, this.nativeInputs.forEach(function (e) {
              return t.Editor.Listeners.off(e, "input", t.mutationDebouncer);
            });
          }
        }, {
          key: "prepare",
          value: function value() {
            var t = this;
            return i.default.async(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    window.setTimeout(function () {
                      t.setObserver();
                    }, 1e3);

                  case 1:
                  case "end":
                    return e.stop();
                }
              }
            });
          }
        }, {
          key: "disable",
          value: function value() {
            this.disabled = !0;
          }
        }, {
          key: "enable",
          value: function value() {
            this.disabled = !1;
          }
        }, {
          key: "setObserver",
          value: function value() {
            var t = this,
                e = this.Editor.UI;
            this.observer = new MutationObserver(function (e, n) {
              t.mutationHandler(e, n);
            }), this.observer.observe(e.nodes.redactor, {
              childList: !0,
              attributes: !0,
              subtree: !0,
              characterData: !0,
              characterDataOldValue: !0
            });
          }
        }, {
          key: "mutationHandler",
          value: function value(t, e) {
            if (!this.disabled) {
              var n = !1;
              t.forEach(function (t) {
                switch (t.type) {
                  case "childList":
                  case "subtree":
                  case "characterData":
                  case "characterDataOldValue":
                    n = !0;
                    break;

                  case "attributes":
                    if (!t.target.classList.contains(d.default.CSS.wrapper)) return void (n = !0);
                }
              }), n && this.mutationDebouncer();
            }
          }
        }, {
          key: "updateNativeInputs",
          value: function value() {
            var t = this;
            this.nativeInputs && this.nativeInputs.forEach(function (e) {
              t.Editor.Listeners.off(e, "input");
            }), this.nativeInputs = Array.from(this.Editor.UI.nodes.redactor.querySelectorAll("textarea, input, select")), this.nativeInputs.forEach(function (e) {
              return t.Editor.Listeners.on(e, "input", t.mutationDebouncer);
            });
          }
        }]), e;
      }(u.default);

      _o29.default = v, v.displayName = "ModificationsObserver", v.DebounceTimer = 450, t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(364)], void 0 === (r = "function" == typeof (o = function o(_o30, i, r, a, s, l, c, u) {
      "use strict";

      var f = n(1);
      Object.defineProperty(_o30, "__esModule", {
        value: !0
      }), _o30.default = void 0, i = f(i), r = f(r), a = f(a), s = f(s), l = f(l), c = f(c), u = f(u);

      var d = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "show",
          value: function value(t) {
            u.default.show(t);
          }
        }]), e;
      }(c.default);

      _o30.default = d, d.displayName = "Notifier", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(103), n(27), n(50), n(2), n(3), n(4), n(5), n(6), n(7), n(13), n(14)], void 0 === (r = "function" == typeof (o = function o(_o31, i, r, a, s, l, c, u, f, d, p, h) {
      "use strict";

      var v = n(15),
          g = n(1);
      Object.defineProperty(_o31, "__esModule", {
        value: !0
      }), _o31.default = void 0, i = g(i), r = g(r), a = g(a), s = g(s), l = g(l), c = g(c), u = g(u), f = g(f), d = g(d), p = g(p), h = v(h);

      var y = function (t) {
        function e() {
          var t;
          return (0, s.default)(this, e), (t = (0, c.default)(this, (0, u.default)(e).apply(this, arguments))).toolsTags = {}, t.tagsByTool = {}, t.toolsPatterns = [], t.toolsFiles = {}, t.exceptionList = [], t.processTool = function (e) {
            var n = (0, a.default)(e, 2),
                o = n[0],
                i = n[1];

            try {
              var r = new t.Editor.Tools.blockTools[o]({
                api: t.Editor.API.methods,
                config: {},
                data: {}
              });
              if (!1 === i.pasteConfig) return void t.exceptionList.push(o);
              if ("function" != typeof r.onPaste) return;
              var s = i.pasteConfig || {};
              t.getTagsConfig(o, s), t.getFilesConfig(o, s), t.getPatternsConfig(o, s);
            } catch (t) {
              h.log("Paste handling for «".concat(o, "» Tool hasn't been set up because of the error"), "warn", t);
            }
          }, t.handlePasteEvent = function (e) {
            var n, o, i;
            return r.default.async(function (r) {
              for (;;) {
                switch (r.prev = r.next) {
                  case 0:
                    if (n = t.Editor, o = n.BlockManager, i = n.Toolbar, o.currentBlock && (!t.isNativeBehaviour(e.target) || e.clipboardData.types.includes("Files"))) {
                      r.next = 3;
                      break;
                    }

                    return r.abrupt("return");

                  case 3:
                    if (!o.currentBlock || !t.exceptionList.includes(o.currentBlock.name)) {
                      r.next = 5;
                      break;
                    }

                    return r.abrupt("return");

                  case 5:
                    e.preventDefault(), t.processDataTransfer(e.clipboardData), o.clearFocused(), i.close();

                  case 9:
                  case "end":
                    return r.stop();
                }
              }
            });
          }, t;
        }

        return (0, f.default)(e, t), (0, l.default)(e, [{
          key: "prepare",
          value: function value() {
            return r.default.async(function (t) {
              for (;;) {
                switch (t.prev = t.next) {
                  case 0:
                    this.setCallback(), this.processTools();

                  case 2:
                  case "end":
                    return t.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "processDataTransfer",
          value: function value(t) {
            var e,
                n,
                o,
                i,
                a,
                s,
                l,
                c,
                u = arguments;
            return r.default.async(function (f) {
              for (;;) {
                switch (f.prev = f.next) {
                  case 0:
                    if (e = u.length > 1 && void 0 !== u[1] && u[1], n = this.Editor.Sanitizer, !((o = t.types).includes ? o.includes("Files") : o.contains("Files"))) {
                      f.next = 8;
                      break;
                    }

                    return f.next = 7, r.default.awrap(this.processFiles(t.files));

                  case 7:
                    return f.abrupt("return");

                  case 8:
                    if (i = t.getData("text/plain"), a = t.getData("text/html"), e && i.trim() && a.trim() && (a = "<p>" + (a.trim() ? a : i) + "</p>"), s = Object.keys(this.toolsTags).reduce(function (t, e) {
                      return t[e.toLowerCase()] = !0, t;
                    }, {}), l = Object.assign({}, s, n.getAllInlineToolsConfig(), {
                      br: {}
                    }), (c = n.clean(a, l)).trim() && c.trim() !== i && p.default.isHTMLString(c)) {
                      f.next = 19;
                      break;
                    }

                    return f.next = 17, r.default.awrap(this.processText(i));

                  case 17:
                    f.next = 21;
                    break;

                  case 19:
                    return f.next = 21, r.default.awrap(this.processText(c, !0));

                  case 21:
                  case "end":
                    return f.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "processText",
          value: function value(t) {
            var e,
                n,
                o,
                i,
                a,
                s,
                l,
                c,
                u = this,
                f = arguments;
            return r.default.async(function (d) {
              for (;;) {
                switch (d.prev = d.next) {
                  case 0:
                    if (e = f.length > 1 && void 0 !== f[1] && f[1], n = this.Editor, o = n.Caret, i = n.BlockManager, a = n.Tools, (s = e ? this.processHTML(t) : this.processPlain(t)).length) {
                      d.next = 5;
                      break;
                    }

                    return d.abrupt("return");

                  case 5:
                    if (1 !== s.length) {
                      d.next = 8;
                      break;
                    }

                    return s[0].isBlock ? this.processSingleBlock(s.pop()) : this.processInlinePaste(s.pop()), d.abrupt("return");

                  case 8:
                    return l = i.currentBlock && a.isInitial(i.currentBlock.tool), c = l && i.currentBlock.isEmpty, d.next = 12, r.default.awrap(Promise.all(s.map(function (t, e) {
                      return r.default.async(function (n) {
                        for (;;) {
                          switch (n.prev = n.next) {
                            case 0:
                              return n.next = 2, r.default.awrap(u.insertBlock(t, 0 === e && c));

                            case 2:
                              return n.abrupt("return", n.sent);

                            case 3:
                            case "end":
                              return n.stop();
                          }
                        }
                      });
                    })));

                  case 12:
                    i.currentBlock && o.setToBlock(i.currentBlock, o.positions.END);

                  case 13:
                  case "end":
                    return d.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "setCallback",
          value: function value() {
            this.Editor.Listeners.on(document, "paste", this.handlePasteEvent);
          }
        }, {
          key: "processTools",
          value: function value() {
            var t = this.Editor.Tools.blockTools;
            Object.entries(t).forEach(this.processTool);
          }
        }, {
          key: "getTagsConfig",
          value: function value(t, e) {
            var n = this,
                o = e.tags || [];
            o.forEach(function (e) {
              n.toolsTags.hasOwnProperty(e) ? h.log("Paste handler for «".concat(t, "» Tool on «").concat(e, "» tag is skipped ") + "because it is already used by «".concat(n.toolsTags[e].tool, "» Tool."), "warn") : n.toolsTags[e.toUpperCase()] = {
                tool: t
              };
            }), this.tagsByTool[t] = o.map(function (t) {
              return t.toUpperCase();
            });
          }
        }, {
          key: "getFilesConfig",
          value: function value(t, e) {
            var n = e.files,
                o = void 0 === n ? {} : n,
                i = o.extensions,
                r = o.mimeTypes;
            (i || r) && (i && !Array.isArray(i) && (h.log("«extensions» property of the onDrop config for «".concat(t, "» Tool should be an array")), i = []), r && !Array.isArray(r) && (h.log("«mimeTypes» property of the onDrop config for «".concat(t, "» Tool should be an array")), r = []), r && (r = r.filter(function (e) {
              return !!h.isValidMimeType(e) || (h.log("MIME type value «".concat(e, "» for the «").concat(t, "» Tool is not a valid MIME type"), "warn"), !1);
            })), this.toolsFiles[t] = {
              extensions: i || [],
              mimeTypes: r || []
            });
          }
        }, {
          key: "getPatternsConfig",
          value: function value(t, e) {
            var n = this;
            e.patterns && !h.isEmpty(e.patterns) && Object.entries(e.patterns).forEach(function (e) {
              var o = (0, a.default)(e, 2),
                  i = o[0],
                  r = o[1];
              r instanceof RegExp || h.log("Pattern ".concat(r, " for «").concat(t, "» Tool is skipped because it should be a Regexp instance."), "warn"), n.toolsPatterns.push({
                key: i,
                pattern: r,
                tool: t
              });
            });
          }
        }, {
          key: "isNativeBehaviour",
          value: function value(t) {
            return p.default.isNativeInput(t);
          }
        }, {
          key: "processFiles",
          value: function value(t) {
            var e,
                n,
                o,
                i,
                a,
                s,
                l = this;
            return r.default.async(function (c) {
              for (;;) {
                switch (c.prev = c.next) {
                  case 0:
                    return e = this.Editor, n = e.BlockManager, o = e.Tools, c.next = 3, r.default.awrap(Promise.all(Array.from(t).map(function (t) {
                      return l.processFile(t);
                    })));

                  case 3:
                    i = (i = c.sent).filter(function (t) {
                      return !!t;
                    }), a = o.isInitial(n.currentBlock.tool), s = a && n.currentBlock.isEmpty, i.forEach(function (t, e) {
                      n.paste(t.type, t.event, 0 === e && s);
                    });

                  case 8:
                  case "end":
                    return c.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "processFile",
          value: function value(t) {
            var e, n, o, i, s;
            return r.default.async(function (r) {
              for (;;) {
                switch (r.prev = r.next) {
                  case 0:
                    if (e = h.getFileExtension(t), n = Object.entries(this.toolsFiles).find(function (n) {
                      var o = (0, a.default)(n, 2),
                          i = (o[0], o[1]),
                          r = i.mimeTypes,
                          s = i.extensions,
                          l = t.type.split("/"),
                          c = (0, a.default)(l, 2),
                          u = c[0],
                          f = c[1],
                          d = s.find(function (t) {
                        return t.toLowerCase() === e.toLowerCase();
                      }),
                          p = r.find(function (t) {
                        var e = t.split("/"),
                            n = (0, a.default)(e, 2),
                            o = n[0],
                            i = n[1];
                        return o === u && (i === f || "*" === i);
                      });
                      return !!d || !!p;
                    })) {
                      r.next = 4;
                      break;
                    }

                    return r.abrupt("return");

                  case 4:
                    return o = (0, a.default)(n, 1), i = o[0], s = this.composePasteEvent("file", {
                      file: t
                    }), r.abrupt("return", {
                      event: s,
                      type: i
                    });

                  case 7:
                  case "end":
                    return r.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "processHTML",
          value: function value(t) {
            var e = this,
                n = this.Editor,
                o = n.Tools,
                i = n.Sanitizer,
                r = this.config.initialBlock,
                a = p.default.make("DIV");
            return a.innerHTML = t, this.getNodes(a).map(function (t) {
              var n,
                  a = r,
                  s = !1;

              switch (t.nodeType) {
                case Node.DOCUMENT_FRAGMENT_NODE:
                  (n = p.default.make("div")).appendChild(t);
                  break;

                case Node.ELEMENT_NODE:
                  n = t, s = !0, e.toolsTags[n.tagName] && (a = e.toolsTags[n.tagName].tool);
              }

              var l = o.blockTools[a].pasteConfig.tags.reduce(function (t, e) {
                return t[e.toLowerCase()] = {}, t;
              }, {}),
                  c = Object.assign({}, l, i.getInlineToolsConfig(a));
              return n.innerHTML = i.clean(n.innerHTML, c), {
                content: n,
                isBlock: s,
                tool: a,
                event: e.composePasteEvent("tag", {
                  data: n
                })
              };
            }).filter(function (t) {
              return !p.default.isNodeEmpty(t.content) || p.default.isSingleTag(t.content);
            });
          }
        }, {
          key: "processPlain",
          value: function value(t) {
            var e = this,
                n = this.config.initialBlock;
            if (this.Editor.Tools, !t) return [];
            var o = n;
            return t.split(/\r?\n/).filter(function (t) {
              return t.trim();
            }).map(function (t) {
              var n = p.default.make("div");
              n.innerHTML = t;
              var i = e.composePasteEvent("tag", {
                data: n
              });
              return {
                content: n,
                tool: o,
                isBlock: !1,
                event: i
              };
            });
          }
        }, {
          key: "processSingleBlock",
          value: function value(t) {
            var e, n, o, i, a;
            return r.default.async(function (r) {
              for (;;) {
                switch (r.prev = r.next) {
                  case 0:
                    if (e = this.Editor, n = e.Caret, o = e.BlockManager, i = e.Tools, (a = o.currentBlock) && t.tool === a.name && p.default.containsOnlyInlineElements(t.content.innerHTML)) {
                      r.next = 5;
                      break;
                    }

                    return this.insertBlock(t, a && i.isInitial(a.tool) && a.isEmpty), r.abrupt("return");

                  case 5:
                    n.insertContentAtCaretPosition(t.content.innerHTML);

                  case 6:
                  case "end":
                    return r.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "processInlinePaste",
          value: function value(t) {
            var n, o, i, a, s, l, c, u, f, d;
            return r.default.async(function (p) {
              for (;;) {
                switch (p.prev = p.next) {
                  case 0:
                    if (n = this.Editor, o = n.BlockManager, i = n.Caret, a = n.Sanitizer, s = n.Tools, l = t.content, t.tool, !(o.currentBlock && s.isInitial(o.currentBlock.tool) && l.textContent.length < e.PATTERN_PROCESSING_MAX_LENGTH)) {
                      p.next = 12;
                      break;
                    }

                    return p.next = 6, r.default.awrap(this.processPattern(l.textContent));

                  case 6:
                    if (!(c = p.sent)) {
                      p.next = 12;
                      break;
                    }

                    return f = o.currentBlock && s.isInitial(o.currentBlock.tool) && o.currentBlock.isEmpty, u = o.paste(c.tool, c.event, f), i.setToBlock(u, i.positions.END), p.abrupt("return");

                  case 12:
                    o.currentBlock && o.currentBlock.currentInput ? (d = a.getInlineToolsConfig(o.currentBlock.name), document.execCommand("insertHTML", !1, a.clean(l.innerHTML, d))) : this.insertBlock(t);

                  case 13:
                  case "end":
                    return p.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "processPattern",
          value: function value(t) {
            var e, n;
            return r.default.async(function (o) {
              for (;;) {
                switch (o.prev = o.next) {
                  case 0:
                    if (e = this.toolsPatterns.find(function (e) {
                      var n = e.pattern.exec(t);
                      return !!n && t === n.shift();
                    })) {
                      o.next = 3;
                      break;
                    }

                    return o.abrupt("return");

                  case 3:
                    return n = this.composePasteEvent("pattern", {
                      key: e.key,
                      data: t
                    }), o.abrupt("return", {
                      event: n,
                      tool: e.tool
                    });

                  case 5:
                  case "end":
                    return o.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "insertBlock",
          value: function value(t) {
            var e,
                n,
                o,
                i,
                a,
                s,
                l = arguments;
            return r.default.async(function (r) {
              for (;;) {
                switch (r.prev = r.next) {
                  case 0:
                    if (e = l.length > 1 && void 0 !== l[1] && l[1], n = this.Editor, o = n.BlockManager, i = n.Caret, a = o.currentBlock, !(e && a && a.isEmpty)) {
                      r.next = 7;
                      break;
                    }

                    return s = o.paste(t.tool, t.event, !0), i.setToBlock(s, i.positions.END), r.abrupt("return");

                  case 7:
                    s = o.paste(t.tool, t.event), i.setToBlock(s, i.positions.END);

                  case 9:
                  case "end":
                    return r.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "getNodes",
          value: function value(t) {
            var e = this,
                n = Array.from(t.childNodes),
                o = Object.keys(this.toolsTags);
            return n.reduce(function t(n, r) {
              if (p.default.isEmpty(r) && !p.default.isSingleTag(r)) return n;
              var a = n[n.length - 1],
                  s = new DocumentFragment();

              switch (a && p.default.isFragment(a) && (s = n.pop()), r.nodeType) {
                case Node.ELEMENT_NODE:
                  var l = r;
                  if ("BR" === l.tagName) return [].concat((0, i.default)(n), [s, new DocumentFragment()]);
                  var c = (e.toolsTags[l.tagName] || {}).tool,
                      u = void 0 === c ? "" : c,
                      f = e.tagsByTool[u] || [],
                      d = o.includes(l.tagName),
                      h = p.default.blockElements.includes(l.tagName.toLowerCase()),
                      v = Array.from(l.children).some(function (t) {
                    var e = t.tagName;
                    return o.includes(e) && !f.includes(e);
                  }),
                      g = Array.from(l.children).some(function (t) {
                    var e = t.tagName;
                    return p.default.blockElements.includes(e.toLowerCase());
                  });
                  if (!h && !d && !v) return s.appendChild(l), [].concat((0, i.default)(n), [s]);
                  if (d && !v || h && !g && !v) return [].concat((0, i.default)(n), [s, l]);
                  break;

                case Node.TEXT_NODE:
                  return s.appendChild(r), [].concat((0, i.default)(n), [s]);

                default:
                  return [].concat((0, i.default)(n), [s]);
              }

              return [].concat((0, i.default)(n), (0, i.default)(Array.from(r.childNodes).reduce(t, [])));
            }, []);
          }
        }, {
          key: "composePasteEvent",
          value: function value(t, e) {
            return new CustomEvent(t, {
              detail: e
            });
          }
        }]), e;
      }(d.default);

      _o31.default = y, y.displayName = "Paste", y.PATTERN_PROCESSING_MAX_LENGTH = 450, t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(13), n(28), n(59)], void 0 === (r = "function" == typeof (o = function o(_o32, i, r, a, s, l, c, u, f, d) {
      "use strict";

      var p = n(1);
      Object.defineProperty(_o32, "__esModule", {
        value: !0
      }), _o32.default = void 0, i = p(i), r = p(r), a = p(a), s = p(s), l = p(l), c = p(c), u = p(u), f = p(f), d = p(d);

      var h = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).isRectSelectionActivated = !1, t.SCROLL_SPEED = 3, t.HEIGHT_OF_SCROLL_ZONE = 40, t.BOTTOM_SCROLL_ZONE = 1, t.TOP_SCROLL_ZONE = 2, t.MAIN_MOUSE_BUTTON = 0, t.mousedown = !1, t.isScrolling = !1, t.inScrollZone = null, t.startX = 0, t.startY = 0, t.mouseX = 0, t.mouseY = 0, t.stackOfSelected = [], t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "prepare",
          value: function value() {
            var t = this,
                e = this.Editor.Listeners,
                n = this.genHTML().container;
            e.on(n, "mousedown", function (e) {
              e.button === t.MAIN_MOUSE_BUTTON && t.startSelection(e.pageX, e.pageY);
            }, !1), e.on(document.body, "mousemove", function (e) {
              t.changingRectangle(e), t.scrollByZones(e.clientY);
            }, !1), e.on(document.body, "mouseleave", function () {
              t.clearSelection(), t.endSelection();
            }), e.on(window, "scroll", function (e) {
              t.changingRectangle(e);
            }, !1), e.on(document.body, "mouseup", function () {
              t.endSelection();
            }, !1);
          }
        }, {
          key: "startSelection",
          value: function value(t, e) {
            this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = [];
            var n = document.elementFromPoint(t - window.pageXOffset, e - window.pageYOffset),
                o = [".".concat(d.default.CSS.content), ".".concat(this.Editor.Toolbar.CSS.toolbar), ".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)],
                i = n.closest("." + this.Editor.UI.CSS.editorWrapper),
                r = o.some(function (t) {
              return !!n.closest(t);
            });
            i && !r && (this.mousedown = !0, this.startX = t, this.startY = e);
          }
        }, {
          key: "endSelection",
          value: function value() {
            this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
          }
        }, {
          key: "isRectActivated",
          value: function value() {
            return this.isRectSelectionActivated;
          }
        }, {
          key: "clearSelection",
          value: function value() {
            this.isRectSelectionActivated = !1;
          }
        }, {
          key: "scrollByZones",
          value: function value(t) {
            this.inScrollZone = null, t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), this.inScrollZone ? this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0) : this.isScrolling = !1;
          }
        }, {
          key: "genHTML",
          value: function value() {
            var t = this.Editor.UI,
                n = t.nodes.holder.querySelector("." + t.CSS.editorWrapper),
                o = u.default.make("div", e.CSS.overlay, {}),
                i = u.default.make("div", e.CSS.overlayContainer, {}),
                r = u.default.make("div", e.CSS.rect, {});
            return i.appendChild(r), o.appendChild(i), n.appendChild(o), this.overlayRectangle = r, {
              container: n,
              overlay: o
            };
          }
        }, {
          key: "scrollVertical",
          value: function value(t) {
            var e = this;

            if (this.inScrollZone && this.mousedown) {
              var n = window.pageYOffset;
              window.scrollBy(0, t), this.mouseY += window.pageYOffset - n, setTimeout(function () {
                e.scrollVertical(t);
              }, 0);
            }
          }
        }, {
          key: "changingRectangle",
          value: function value(t) {
            if (this.mousedown) {
              void 0 !== t.pageY && (this.mouseX = t.pageX, this.mouseY = t.pageY);
              var e = this.genInfoForMouseSelection(),
                  n = e.rightPos,
                  o = e.leftPos,
                  i = e.index,
                  r = this.startX > n && this.mouseX > n,
                  a = this.startX < o && this.mouseX < o;
              this.rectCrossesBlocks = !(r || a), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), void 0 !== i && (this.trySelectNextBlock(i), this.inverseSelection(), f.default.get().removeAllRanges(), t.preventDefault());
            }
          }
        }, {
          key: "shrinkRectangleToPoint",
          value: function value() {
            this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px");
          }
        }, {
          key: "inverseSelection",
          value: function value() {
            var t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;

            if (this.rectCrossesBlocks && !t) {
              var e = !0,
                  n = !1,
                  o = void 0;

              try {
                for (var i, r = this.stackOfSelected[Symbol.iterator](); !(e = (i = r.next()).done); e = !0) {
                  var a = i.value;
                  this.Editor.BlockSelection.selectBlockByIndex(a);
                }
              } catch (t) {
                n = !0, o = t;
              } finally {
                try {
                  e || null == r.return || r.return();
                } finally {
                  if (n) throw o;
                }
              }
            }

            if (!this.rectCrossesBlocks && t) {
              var s = !0,
                  l = !1,
                  c = void 0;

              try {
                for (var u, f = this.stackOfSelected[Symbol.iterator](); !(s = (u = f.next()).done); s = !0) {
                  var d = u.value;
                  this.Editor.BlockSelection.unSelectBlockByIndex(d);
                }
              } catch (t) {
                l = !0, c = t;
              } finally {
                try {
                  s || null == f.return || f.return();
                } finally {
                  if (l) throw c;
                }
              }
            }
          }
        }, {
          key: "updateRectangleSize",
          value: function value() {
            this.mouseY >= this.startY ? (this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.mouseY - window.pageYOffset, "px")) : (this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.top = "".concat(this.mouseY - window.pageYOffset, "px")), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.mouseX - window.pageXOffset, "px")) : (this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.left = "".concat(this.mouseX - window.pageXOffset, "px"));
          }
        }, {
          key: "genInfoForMouseSelection",
          value: function value() {
            var t,
                e = document.body.offsetWidth / 2,
                n = this.mouseY - window.pageYOffset,
                o = document.elementFromPoint(e, n),
                i = this.Editor.BlockManager.getBlockByChildNode(o);
            void 0 !== i && (t = this.Editor.BlockManager.blocks.findIndex(function (t) {
              return t.holder === i.holder;
            }));
            var r = this.Editor.BlockManager.lastBlock.holder.querySelector("." + d.default.CSS.content),
                a = Number.parseInt(window.getComputedStyle(r).width, 10) / 2;
            return {
              index: t,
              leftPos: e - a,
              rightPos: e + a
            };
          }
        }, {
          key: "addBlockInSelection",
          value: function value(t) {
            this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(t), this.stackOfSelected.push(t);
          }
        }, {
          key: "trySelectNextBlock",
          value: function value(t) {
            var e = this,
                n = this.stackOfSelected[this.stackOfSelected.length - 1] === t,
                o = this.stackOfSelected.length;

            if (!n) {
              var i = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0,
                  r = o <= 1 ? 0 : i ? 1 : -1,
                  a = t > this.stackOfSelected[o - 1] && 1 === r,
                  s = t < this.stackOfSelected[o - 1] && -1 === r,
                  l = !(a || s || 0 === r);

              if (l || !(t > this.stackOfSelected[o - 1] || void 0 === this.stackOfSelected[o - 1])) {
                if (!l && t < this.stackOfSelected[o - 1]) for (var c = this.stackOfSelected[o - 1] - 1; c >= t; c--) {
                  this.addBlockInSelection(c);
                } else if (l) {
                  var u,
                      f = o - 1;

                  for (u = t > this.stackOfSelected[o - 1] ? function () {
                    return t > e.stackOfSelected[f];
                  } : function () {
                    return t < e.stackOfSelected[f];
                  }; u();) {
                    this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f]), this.stackOfSelected.pop(), f--;
                  }
                }
              } else for (var d = this.stackOfSelected[o - 1] + 1 || t; d <= t; d++) {
                this.addBlockInSelection(d);
              }
            }
          }
        }], [{
          key: "CSS",
          get: function get() {
            return {
              overlay: "codex-editor-overlay",
              overlayContainer: "codex-editor-overlay__container",
              rect: "codex-editor-overlay__rectangle",
              topScrollZone: "codex-editor-overlay__scroll-zone--top",
              bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
            };
          }
        }]), e;
      }(c.default);

      _o32.default = h, h.displayName = "RectangleSelection", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(27), n(2), n(3), n(4), n(5), n(6), n(7), n(14)], void 0 === (r = "function" == typeof (o = function o(_o33, i, r, a, s, l, c, u, f) {
      "use strict";

      var d = n(15),
          p = n(1);
      Object.defineProperty(_o33, "__esModule", {
        value: !0
      }), _o33.default = void 0, i = p(i), r = p(r), a = p(a), s = p(s), l = p(l), c = p(c), u = p(u), f = d(f);

      var h = function (t) {
        function e() {
          return (0, r.default)(this, e), (0, s.default)(this, (0, l.default)(e).apply(this, arguments));
        }

        return (0, c.default)(e, t), (0, a.default)(e, [{
          key: "render",
          value: function value(t) {
            var e,
                n,
                o = this;
            return i.default.async(function (r) {
              for (;;) {
                switch (r.prev = r.next) {
                  case 0:
                    return e = t.map(function (t) {
                      return {
                        function: function _function() {
                          return o.insertBlock(t);
                        }
                      };
                    }), r.next = 3, i.default.awrap(f.sequence(e));

                  case 3:
                    return n = r.sent, this.Editor.UI.checkEmptiness(), r.abrupt("return", n);

                  case 6:
                  case "end":
                    return r.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "insertBlock",
          value: function value(t) {
            var e, n, o, r, a, s, l, c, u;
            return i.default.async(function (i) {
              for (;;) {
                switch (i.prev = i.next) {
                  case 0:
                    if (e = this.Editor, n = e.Tools, o = e.BlockManager, r = t.type, a = t.data, s = t.settings, !(r in n.available)) {
                      i.next = 15;
                      break;
                    }

                    i.prev = 5, o.insert(r, a, s), i.next = 13;
                    break;

                  case 9:
                    throw i.prev = 9, i.t0 = i.catch(5), f.log("Block «".concat(r, "» skipped because of plugins error"), "warn", a), Error(i.t0);

                  case 13:
                    i.next = 20;
                    break;

                  case 15:
                    l = {
                      savedData: {
                        type: r,
                        data: a
                      },
                      title: r
                    }, r in n.unavailable && (c = n.unavailable[r].toolbox, u = n.getToolSettings(r).toolbox, l.title = c.title || u.title || l.title), o.insert(n.stubTool, l, s).stretched = !0, f.log("Tool «".concat(r, "» is not found. Check 'tools' property at your initial Editor.js config."), "warn");

                  case 20:
                  case "end":
                    return i.stop();
                }
              }
            }, null, this, [[5, 9]]);
          }
        }]), e;
      }(u.default);

      _o33.default = h, h.displayName = "Renderer", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(50), n(51), n(2), n(3), n(4), n(5), n(6), n(7), n(14), n(365)], void 0 === (r = "function" == typeof (o = function o(_o34, i, r, a, s, l, c, u, f, d, p) {
      "use strict";

      var h = n(15),
          v = n(1);
      Object.defineProperty(_o34, "__esModule", {
        value: !0
      }), _o34.default = void 0, i = v(i), r = v(r), a = v(a), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = h(d), p = v(p);

      var g = function (t) {
        function e() {
          var t;
          return (0, a.default)(this, e), (t = (0, l.default)(this, (0, c.default)(e).apply(this, arguments))).configCache = {}, t.inlineToolsConfigCache = null, t;
        }

        return (0, u.default)(e, t), (0, s.default)(e, [{
          key: "sanitizeBlocks",
          value: function value(t) {
            var e = this;
            return t.map(function (t) {
              var n = e.composeToolConfig(t.tool);
              return d.isEmpty(n) ? t : (t.data = e.deepSanitize(t.data, n), t);
            });
          }
        }, {
          key: "deepSanitize",
          value: function value(t, e) {
            return Array.isArray(t) ? this.cleanArray(t, e) : "object" === (0, r.default)(t) ? this.cleanObject(t, e) : "string" == typeof t ? this.cleanOneItem(t, e) : t;
          }
        }, {
          key: "clean",
          value: function value(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = {
              tags: e
            },
                o = this.createHTMLJanitorInstance(n);
            return o.clean(t);
          }
        }, {
          key: "composeToolConfig",
          value: function value(t) {
            if (this.configCache[t]) return this.configCache[t];
            var e = this.Editor.Tools.INTERNAL_SETTINGS.SANITIZE_CONFIG,
                n = this.Editor.Tools.available[t],
                o = this.getInlineToolsConfig(t);
            if (!n.sanitize || n[e] && d.isEmpty(n[e])) return o;
            var i = n.sanitize,
                a = {};

            for (var s in i) {
              if (i.hasOwnProperty(s)) {
                var l = i[s];
                "object" === (0, r.default)(l) ? a[s] = Object.assign({}, o, l) : a[s] = l;
              }
            }

            return this.configCache[t] = a, a;
          }
        }, {
          key: "getInlineToolsConfig",
          value: function value(t) {
            var e = this.Editor.Tools,
                n = e.getToolSettings(t).inlineToolbar || [],
                o = {};
            return "boolean" == typeof n && n ? o = this.getAllInlineToolsConfig() : n.map(function (t) {
              o = Object.assign(o, e.inline[t][e.INTERNAL_SETTINGS.SANITIZE_CONFIG]);
            }), o;
          }
        }, {
          key: "getAllInlineToolsConfig",
          value: function value() {
            var t = this.Editor.Tools;
            if (this.inlineToolsConfigCache) return this.inlineToolsConfigCache;
            var e = {};
            return Object.entries(t.inline).forEach(function (n) {
              var o = (0, i.default)(n, 2),
                  r = (o[0], o[1]);
              Object.assign(e, r[t.INTERNAL_SETTINGS.SANITIZE_CONFIG]);
            }), this.inlineToolsConfigCache = e, this.inlineToolsConfigCache;
          }
        }, {
          key: "cleanArray",
          value: function value(t, e) {
            var n = this;
            return t.map(function (t) {
              return n.deepSanitize(t, e);
            });
          }
        }, {
          key: "cleanObject",
          value: function value(t, e) {
            var n = {};

            for (var o in t) {
              if (t.hasOwnProperty(o)) {
                var i = t[o],
                    r = this.isRule(e[o]) ? e[o] : e;
                n[o] = this.deepSanitize(i, r);
              }
            }

            return n;
          }
        }, {
          key: "cleanOneItem",
          value: function value(t, e) {
            return "object" === (0, r.default)(e) ? this.clean(t, e) : !1 === e ? this.clean(t, {}) : t;
          }
        }, {
          key: "isRule",
          value: function value(t) {
            return "object" === (0, r.default)(t) || "boolean" == typeof t || "function" == typeof t;
          }
        }, {
          key: "createHTMLJanitorInstance",
          value: function value(t) {
            return t ? new p.default(t) : null;
          }
        }]), e;
      }(f.default);

      _o34.default = g, g.displayName = "Sanitizer", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(27), n(2), n(3), n(4), n(5), n(6), n(7), n(14)], void 0 === (r = "function" == typeof (o = function o(_o35, i, r, a, s, l, c, u, f) {
      "use strict";

      var d = n(15),
          p = n(1);
      Object.defineProperty(_o35, "__esModule", {
        value: !0
      }), _o35.default = void 0, i = p(i), r = p(r), a = p(a), s = p(s), l = p(l), c = p(c), u = p(u), f = d(f);

      var h = function (t) {
        function e() {
          return (0, r.default)(this, e), (0, s.default)(this, (0, l.default)(e).apply(this, arguments));
        }

        return (0, c.default)(e, t), (0, a.default)(e, [{
          key: "save",
          value: function value() {
            var t,
                e,
                n,
                o,
                r,
                a,
                s,
                l,
                c = this;
            return i.default.async(function (u) {
              for (;;) {
                switch (u.prev = u.next) {
                  case 0:
                    return t = this.Editor, e = t.BlockManager, n = t.Sanitizer, o = t.ModificationsObserver, r = e.blocks, a = [], o.disable(), r.forEach(function (t) {
                      a.push(c.getSavedData(t));
                    }), u.next = 6, i.default.awrap(Promise.all(a));

                  case 6:
                    return s = u.sent, u.next = 9, i.default.awrap(n.sanitizeBlocks(s));

                  case 9:
                    return l = u.sent, o.enable(), u.abrupt("return", this.makeOutput(l));

                  case 12:
                  case "end":
                    return u.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "getSavedData",
          value: function value(t) {
            var e, n;
            return i.default.async(function (o) {
              for (;;) {
                switch (o.prev = o.next) {
                  case 0:
                    return o.next = 2, i.default.awrap(t.save());

                  case 2:
                    if (e = o.sent, o.t0 = e, !o.t0) {
                      o.next = 8;
                      break;
                    }

                    return o.next = 7, i.default.awrap(t.validate(e.data));

                  case 7:
                    o.t0 = o.sent;

                  case 8:
                    return n = o.t0, o.abrupt("return", Object.assign(Object.assign({}, e), {
                      isValid: n
                    }));

                  case 10:
                  case "end":
                    return o.stop();
                }
              }
            });
          }
        }, {
          key: "makeOutput",
          value: function value(t) {
            var e = this,
                n = 0,
                o = [];
            return f.log("[Editor.js saving]:", "groupCollapsed"), t.forEach(function (t) {
              var i = t.tool,
                  r = t.data,
                  a = t.time,
                  s = t.isValid;
              if (n += a, f.log("".concat(i.charAt(0).toUpperCase() + i.slice(1)), "group"), !s) return f.log("Block «".concat(i, "» skipped because saved data is invalid")), void f.log(void 0, "groupEnd");
              f.log(r), f.log(void 0, "groupEnd"), i !== e.Editor.Tools.stubTool ? o.push({
                type: i,
                data: r
              }) : o.push(r);
            }), f.log("Total", "log", n), f.log(void 0, "groupEnd"), {
              time: +new Date(),
              blocks: o,
              version: "2.16.1"
            };
          }
        }]), e;
      }(u.default);

      _o35.default = h, h.displayName = "Saver", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(366), n(7)], void 0 === (r = "function" == typeof (o = function o(_o36, i, r, a, s, l, c, u) {
      "use strict";

      var f = n(1);
      Object.defineProperty(_o36, "__esModule", {
        value: !0
      }), _o36.default = void 0, i = f(i), r = f(r), a = f(a), s = f(s), l = f(l), c = f(c);

      var d = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).registeredShortcuts = [], t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "add",
          value: function value(t) {
            var e = new c.default({
              name: t.name,
              on: document,
              callback: t.handler
            });
            this.registeredShortcuts.push(e);
          }
        }, {
          key: "remove",
          value: function value(t) {
            var e = this.registeredShortcuts.findIndex(function (e) {
              return e.name === t;
            });
            this.registeredShortcuts[e].remove(), this.registeredShortcuts.splice(e, 1);
          }
        }]), e;
      }((u = f(u)).default);

      _o36.default = d, d.displayName = "Shortcuts", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(13), n(58), n(14)], void 0 === (r = "function" == typeof (o = function o(_o37, i, r, a, s, l, c, u, f, d) {
      "use strict";

      var p = n(15),
          h = n(1);
      Object.defineProperty(_o37, "__esModule", {
        value: !0
      }), _o37.default = void 0, i = h(i), r = h(r), a = h(a), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f), d = p(d);

      var v = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).nodes = {
            wrapper: null,
            toolSettings: null,
            defaultSettings: null
          }, t.buttons = [], t.flipper = null, t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "make",
          value: function value() {
            this.nodes.wrapper = u.default.make("div", this.CSS.wrapper), this.nodes.toolSettings = u.default.make("div", this.CSS.toolSettings), this.nodes.defaultSettings = u.default.make("div", this.CSS.defaultSettings), u.default.append(this.nodes.wrapper, [this.nodes.toolSettings, this.nodes.defaultSettings]), this.enableFlipper();
          }
        }, {
          key: "open",
          value: function value() {
            this.nodes.wrapper.classList.add(this.CSS.wrapperOpened), this.addToolSettings(), this.addDefaultSettings(), this.Editor.Events.emit(this.events.opened), this.flipper.activate(this.blockTunesButtons);
          }
        }, {
          key: "close",
          value: function value() {
            this.nodes.wrapper.classList.remove(this.CSS.wrapperOpened), this.nodes.toolSettings.innerHTML = "", this.nodes.defaultSettings.innerHTML = "", this.Editor.Events.emit(this.events.closed), this.buttons = [], this.flipper.deactivate();
          }
        }, {
          key: "addToolSettings",
          value: function value() {
            "function" == typeof this.Editor.BlockManager.currentBlock.tool.renderSettings && u.default.append(this.nodes.toolSettings, this.Editor.BlockManager.currentBlock.tool.renderSettings());
          }
        }, {
          key: "addDefaultSettings",
          value: function value() {
            u.default.append(this.nodes.defaultSettings, this.Editor.BlockManager.currentBlock.renderTunes());
          }
        }, {
          key: "enableFlipper",
          value: function value() {
            var t = this;
            this.flipper = new f.default({
              focusedItemClass: this.CSS.focusedButton,
              activateCallback: function activateCallback() {
                d.delay(function () {
                  t.Editor.Caret.setToBlock(t.Editor.BlockManager.currentBlock);
                }, 10)();
              }
            });
          }
        }, {
          key: "events",
          get: function get() {
            return {
              opened: "block-settings-opened",
              closed: "block-settings-closed"
            };
          }
        }, {
          key: "CSS",
          get: function get() {
            return {
              wrapper: "ce-settings",
              wrapperOpened: "ce-settings--opened",
              toolSettings: "ce-settings__plugin-zone",
              defaultSettings: "ce-settings__default-zone",
              button: "ce-settings__button",
              focusedButton: "ce-settings__button--focused",
              focusedButtonAnimated: "ce-settings__button--focused-animated"
            };
          }
        }, {
          key: "opened",
          get: function get() {
            return this.nodes.wrapper.classList.contains(this.CSS.wrapperOpened);
          }
        }, {
          key: "blockTunesButtons",
          get: function get() {
            var t = this;
            if (0 !== this.buttons.length) return this.buttons;
            var e = this.nodes.toolSettings.querySelectorAll(".".concat(this.Editor.StylesAPI.classes.settingsButton)),
                n = this.nodes.defaultSettings.querySelectorAll(".".concat(this.CSS.button));
            return e.forEach(function (e) {
              t.buttons.push(e);
            }), n.forEach(function (e) {
              t.buttons.push(e);
            }), this.buttons;
          }
        }]), e;
      }(c.default);

      _o37.default = v, v.displayName = "BlockSettings", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(50), n(27), n(2), n(3), n(4), n(5), n(6), n(7), n(13), n(14), n(58)], void 0 === (r = "function" == typeof (o = function o(_o38, i, r, a, s, l, c, u, f, d, p, h) {
      "use strict";

      var v = n(15),
          g = n(1);
      Object.defineProperty(_o38, "__esModule", {
        value: !0
      }), _o38.default = void 0, i = g(i), r = g(r), a = g(a), s = g(s), l = g(l), c = g(c), u = g(u), f = g(f), d = g(d), p = v(p), h = g(h);

      var y = function (t) {
        function e() {
          var t;
          return (0, a.default)(this, e), (t = (0, l.default)(this, (0, c.default)(e).apply(this, arguments))).nodes = {
            wrapper: null,
            tools: null
          }, t.opened = !1, t.tools = {}, t.flipper = null, t.togglingCallback = null, t;
        }

        return (0, u.default)(e, t), (0, s.default)(e, [{
          key: "make",
          value: function value() {
            this.nodes.wrapper = d.default.make("div", e.CSS.conversionToolbarWrapper), this.nodes.tools = d.default.make("div", e.CSS.conversionToolbarTools);
            var t = d.default.make("div", e.CSS.conversionToolbarLabel, {
              textContent: "Convert to"
            });
            return this.addTools(), this.enableFlipper(), d.default.append(this.nodes.wrapper, t), d.default.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
          }
        }, {
          key: "toggle",
          value: function value(t) {
            this.opened ? this.close() : this.open(), "function" == typeof t && (this.togglingCallback = t, this.togglingCallback(this.opened));
          }
        }, {
          key: "open",
          value: function value() {
            var t = this;
            this.filterTools(), this.opened = !0, this.nodes.wrapper.classList.add(e.CSS.conversionToolbarShowed), setTimeout(function () {
              t.flipper.activate(Object.values(t.tools).filter(function (t) {
                return !t.classList.contains(e.CSS.conversionToolHidden);
              })), t.flipper.focusFirst(), "function" == typeof t.togglingCallback && t.togglingCallback(!0);
            }, 50);
          }
        }, {
          key: "close",
          value: function value() {
            this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(e.CSS.conversionToolbarShowed), "function" == typeof this.togglingCallback && this.togglingCallback(!1);
          }
        }, {
          key: "hasTools",
          value: function value() {
            var t = Object.keys(this.tools);
            return !(1 === t.length && t.shift() === this.config.initialBlock);
          }
        }, {
          key: "replaceWithBlock",
          value: function value(t) {
            var e,
                n,
                o,
                i,
                a,
                s,
                l,
                c,
                u,
                f,
                d,
                h = this;
            return r.default.async(function (v) {
              for (;;) {
                switch (v.prev = v.next) {
                  case 0:
                    return e = this.Editor.BlockManager.currentBlock.class, n = this.Editor.BlockManager.currentBlock.name, v.next = 4, r.default.awrap(this.Editor.BlockManager.currentBlock.save());

                  case 4:
                    if (o = v.sent, i = this.Editor.Tools.INTERNAL_SETTINGS, a = o.data, n === t && (t = this.config.initialBlock), s = this.Editor.Tools.toolsClasses[t], l = "", "function" != typeof (c = e[i.CONVERSION_CONFIG].export)) {
                      v.next = 15;
                      break;
                    }

                    l = c(a), v.next = 21;
                    break;

                  case 15:
                    if ("string" != typeof c) {
                      v.next = 19;
                      break;
                    }

                    l = a[c], v.next = 21;
                    break;

                  case 19:
                    return p.log("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), v.abrupt("return");

                  case 21:
                    if (u = this.Editor.Sanitizer.clean(l, s.sanitize), f = {}, "function" != typeof (d = s[i.CONVERSION_CONFIG].import)) {
                      v.next = 28;
                      break;
                    }

                    f = d(u), v.next = 34;
                    break;

                  case 28:
                    if ("string" != typeof d) {
                      v.next = 32;
                      break;
                    }

                    f[d] = u, v.next = 34;
                    break;

                  case 32:
                    return p.log("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), v.abrupt("return");

                  case 34:
                    this.Editor.BlockManager.replace(t, f), this.Editor.BlockSelection.clearSelection(), this.close(), this.Editor.InlineToolbar.close(), p.delay(function () {
                      h.Editor.Caret.setToBlock(h.Editor.BlockManager.currentBlock);
                    }, 10)();

                  case 39:
                  case "end":
                    return v.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "addTools",
          value: function value() {
            var t = this.Editor.Tools.blockTools;

            for (var e in t) {
              if (t.hasOwnProperty(e)) {
                var n = this.Editor.Tools.INTERNAL_SETTINGS,
                    o = t[e],
                    i = o[n.TOOLBOX],
                    r = o[n.CONVERSION_CONFIG];
                !p.isEmpty(i) && i.icon && r && r.import && this.addTool(e, i.icon, i.title);
              }
            }
          }
        }, {
          key: "addTool",
          value: function value(t, n, o) {
            var i = this,
                a = d.default.make("div", [e.CSS.conversionTool]),
                s = d.default.make("div", [e.CSS.conversionToolIcon]);
            a.dataset.tool = t, s.innerHTML = n, d.default.append(a, s), d.default.append(a, d.default.text(o || p.capitalize(t))), d.default.append(this.nodes.tools, a), this.tools[t] = a, this.Editor.Listeners.on(a, "click", function () {
              return r.default.async(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, r.default.awrap(i.replaceWithBlock(t));

                    case 2:
                    case "end":
                      return e.stop();
                  }
                }
              });
            });
          }
        }, {
          key: "filterTools",
          value: function value() {
            var t = this.Editor.BlockManager.currentBlock;
            Object.entries(this.tools).forEach(function (n) {
              var o = (0, i.default)(n, 2),
                  r = o[0],
                  a = o[1];
              a.hidden = !1, a.classList.toggle(e.CSS.conversionToolHidden, r === t.name);
            });
          }
        }, {
          key: "enableFlipper",
          value: function value() {
            this.flipper = new h.default({
              focusedItemClass: e.CSS.conversionToolFocused
            });
          }
        }], [{
          key: "CSS",
          get: function get() {
            return {
              conversionToolbarWrapper: "ce-conversion-toolbar",
              conversionToolbarShowed: "ce-conversion-toolbar--showed",
              conversionToolbarTools: "ce-conversion-toolbar__tools",
              conversionToolbarLabel: "ce-conversion-toolbar__label",
              conversionTool: "ce-conversion-tool",
              conversionToolHidden: "ce-conversion-tool--hidden",
              conversionToolIcon: "ce-conversion-tool__icon",
              conversionToolFocused: "ce-conversion-tool--focused",
              conversionToolActive: "ce-conversion-tool--active"
            };
          }
        }]), e;
      }(f.default);

      _o38.default = y, y.displayName = "ConversionToolbar", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(50), n(2), n(3), n(4), n(5), n(6), n(7), n(13), n(28), n(14), n(58)], void 0 === (r = "function" == typeof (o = function o(_o39, i, r, a, s, l, c, u, f, d, p, h) {
      "use strict";

      var v = n(15),
          g = n(1);
      Object.defineProperty(_o39, "__esModule", {
        value: !0
      }), _o39.default = void 0, i = g(i), r = g(r), a = g(a), s = g(s), l = g(l), c = g(c), u = g(u), f = g(f), d = g(d), p = v(p), h = g(h);

      var y = function (t) {
        function e() {
          var t;
          return (0, r.default)(this, e), (t = (0, s.default)(this, (0, l.default)(e).apply(this, arguments))).CSS = {
            inlineToolbar: "ce-inline-toolbar",
            inlineToolbarShowed: "ce-inline-toolbar--showed",
            inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented",
            inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented",
            inlineToolbarShortcut: "ce-inline-toolbar__shortcut",
            buttonsWrapper: "ce-inline-toolbar__buttons",
            actionsWrapper: "ce-inline-toolbar__actions",
            inlineToolButton: "ce-inline-tool",
            inlineToolButtonLast: "ce-inline-tool--last",
            inputField: "cdx-input",
            focusedButton: "ce-inline-tool--focused",
            conversionToggler: "ce-inline-toolbar__dropdown",
            conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden",
            conversionTogglerContent: "ce-inline-toolbar__dropdown-content"
          }, t.opened = !1, t.nodes = {
            wrapper: null,
            buttons: null,
            conversionToggler: null,
            conversionTogglerContent: null,
            actions: null
          }, t.toolbarVerticalMargin = 5, t.buttonsList = null, t.width = 0, t.flipper = null, t;
        }

        return (0, c.default)(e, t), (0, a.default)(e, [{
          key: "make",
          value: function value() {
            var t = this;
            this.nodes.wrapper = f.default.make("div", this.CSS.inlineToolbar), this.nodes.buttons = f.default.make("div", this.CSS.buttonsWrapper), this.nodes.actions = f.default.make("div", this.CSS.actionsWrapper), this.Editor.Listeners.on(this.nodes.wrapper, "mousedown", function (e) {
              e.target.closest(".".concat(t.CSS.actionsWrapper)) || e.preventDefault();
            }), f.default.append(this.nodes.wrapper, [this.nodes.buttons, this.nodes.actions]), f.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), this.addTools(), this.prepareConversionToolbar(), this.recalculateWidth(), this.enableFlipper();
          }
        }, {
          key: "tryToShow",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.allowedToShow() ? (this.move(), this.open(), this.Editor.Toolbar.close(), this.checkToolsState()) : t && this.close();
          }
        }, {
          key: "move",
          value: function value() {
            var t = d.default.rect,
                e = this.Editor.UI.nodes.wrapper.getBoundingClientRect(),
                n = {
              x: t.x - e.left,
              y: t.y + t.height - e.top + this.toolbarVerticalMargin
            };
            t.width && (n.x += Math.floor(t.width / 2));
            var o = n.x - this.width / 2,
                i = n.x + this.width / 2;
            this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented, o < this.Editor.UI.contentRect.left), this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented, i > this.Editor.UI.contentRect.right), this.nodes.wrapper.style.left = Math.floor(n.x) + "px", this.nodes.wrapper.style.top = Math.floor(n.y) + "px";
          }
        }, {
          key: "close",
          value: function value() {
            this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), this.tools.forEach(function (t) {
              "function" == typeof t.clear && t.clear();
            }), this.opened = !1, this.flipper.deactivate(), this.Editor.ConversionToolbar.close();
          }
        }, {
          key: "open",
          value: function value() {
            this.filterTools(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.tools.forEach(function (t) {
              "function" == typeof t.clear && t.clear();
            }), this.buttonsList = this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)), this.opened = !0, this.Editor.ConversionToolbar.hasTools() ? this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = !0;
            var t = Array.from(this.buttonsList);
            t.unshift(this.nodes.conversionToggler), t = t.filter(function (t) {
              return !t.hidden;
            }), this.flipper.activate(t);
          }
        }, {
          key: "containsNode",
          value: function value(t) {
            return this.nodes.wrapper.contains(t);
          }
        }, {
          key: "allowedToShow",
          value: function value() {
            var t = d.default.get(),
                e = d.default.text;
            if (!t || !t.anchorNode) return !1;
            if (t.isCollapsed || e.length < 1) return !1;
            var n = f.default.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
            if (t && ["IMG", "INPUT"].includes(n.tagName)) return !1;
            if (null === n.closest('[contenteditable="true"]')) return !1;
            var o = this.Editor.BlockManager.getBlock(t.anchorNode);
            if (!o) return !1;
            var i = this.Editor.Tools.getToolSettings(o.name);
            return i && i[this.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS];
          }
        }, {
          key: "filterTools",
          value: function value() {
            var t = this,
                e = d.default.get(),
                n = this.Editor.BlockManager.getBlock(e.anchorNode),
                o = this.Editor.Tools.getToolSettings(n.name),
                i = o && o[this.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS],
                r = Array.from(this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)));
            r.forEach(function (e) {
              e.hidden = !1, e.classList.remove(t.CSS.inlineToolButtonLast);
            }), Array.isArray(i) && r.forEach(function (t) {
              t.hidden = !i.includes(t.dataset.tool);
            });
            var a = r.filter(function (t) {
              return !t.hidden;
            }).pop();
            a && a.classList.add(this.CSS.inlineToolButtonLast), this.recalculateWidth();
          }
        }, {
          key: "recalculateWidth",
          value: function value() {
            this.width = this.nodes.wrapper.offsetWidth;
          }
        }, {
          key: "addConversionToggler",
          value: function value() {
            var t = this;
            this.nodes.conversionToggler = f.default.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = f.default.make("div", this.CSS.conversionTogglerContent);
            var e = f.default.svg("toggler-down", 13, 13);
            this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e), this.nodes.buttons.appendChild(this.nodes.conversionToggler), this.Editor.Listeners.on(this.nodes.conversionToggler, "click", function () {
              t.Editor.ConversionToolbar.toggle(function (e) {
                e ? t.flipper.deactivate() : t.flipper.activate();
              });
            }), this.Editor.Tooltip.onHover(this.nodes.conversionToggler, "Convert to", {
              placement: "top",
              hidingDelay: 100
            });
          }
        }, {
          key: "setConversionTogglerContent",
          value: function value() {
            var t = this.Editor,
                e = t.BlockManager,
                n = t.Tools,
                o = e.currentBlock.name,
                i = n.available[o][n.INTERNAL_SETTINGS.CONVERSION_CONFIG] || {},
                r = i && i.export;
            this.nodes.conversionToggler.hidden = !r, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !r);
            var a = n.getToolSettings(o),
                s = n.available[o][n.INTERNAL_SETTINGS.TOOLBOX] || {},
                l = a.toolbox || {};
            this.nodes.conversionTogglerContent.innerHTML = l.icon || s.icon || l.title || s.title || p.capitalize(o);
          }
        }, {
          key: "prepareConversionToolbar",
          value: function value() {
            var t = this.Editor.ConversionToolbar.make();
            f.default.append(this.nodes.wrapper, t);
          }
        }, {
          key: "addTools",
          value: function value() {
            var t = this;
            this.tools.forEach(function (e, n) {
              t.addTool(n, e);
            });
          }
        }, {
          key: "addTool",
          value: function value(t, e) {
            var n = this,
                o = this.Editor,
                r = o.Listeners,
                a = o.Tools,
                s = o.Tooltip,
                l = e.render();

            if (l) {
              if (l.dataset.tool = t, this.nodes.buttons.appendChild(l), "function" == typeof e.renderActions) {
                var c = e.renderActions();
                this.nodes.actions.appendChild(c);
              }

              r.on(l, "click", function (t) {
                n.toolClicked(e), t.preventDefault();
              });
              var u = a.getToolSettings(t),
                  d = null;
              Object.entries(a.internalTools).filter(function (t) {
                var e = (0, i.default)(t, 2),
                    n = (e[0], e[1]);
                return p.isFunction(n) ? n[a.INTERNAL_SETTINGS.IS_INLINE] : n.class[a.INTERNAL_SETTINGS.IS_INLINE];
              }).map(function (t) {
                return (0, i.default)(t, 1)[0];
              }).includes(t) ? d = this.inlineTools[t][a.INTERNAL_SETTINGS.SHORTCUT] : u && u[a.USER_SETTINGS.SHORTCUT] && (d = u[a.USER_SETTINGS.SHORTCUT]), d && this.enableShortcuts(e, d);
              var h = f.default.make("div"),
                  v = a.toolsClasses[t][a.INTERNAL_SETTINGS.TITLE] || p.capitalize(t);
              h.appendChild(f.default.text(v)), d && h.appendChild(f.default.make("div", this.CSS.inlineToolbarShortcut, {
                textContent: p.beautifyShortcut(d)
              })), s.onHover(l, h, {
                placement: "top",
                hidingDelay: 100
              });
            } else p.log("Render method must return an instance of Node", "warn", t);
          }
        }, {
          key: "enableShortcuts",
          value: function value(t, e) {
            var n = this;
            this.Editor.Shortcuts.add({
              name: e,
              handler: function handler(e) {
                var o = n.Editor.BlockManager.currentBlock;

                if (o) {
                  var i = n.Editor.Tools.getToolSettings(o.name);
                  i && i[n.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS] && (e.preventDefault(), n.toolClicked(t));
                }
              }
            });
          }
        }, {
          key: "toolClicked",
          value: function value(t) {
            var e = d.default.range;
            t.surround(e), this.checkToolsState();
          }
        }, {
          key: "checkToolsState",
          value: function value() {
            this.tools.forEach(function (t) {
              t.checkState(d.default.get());
            });
          }
        }, {
          key: "enableFlipper",
          value: function value() {
            this.flipper = new h.default({
              focusedItemClass: this.CSS.focusedButton,
              allowArrows: !1
            });
          }
        }, {
          key: "tools",
          get: function get() {
            if (!this.toolsInstances || 0 === this.toolsInstances.size) {
              var t = this.inlineTools;

              for (var e in this.toolsInstances = new Map(), t) {
                t.hasOwnProperty(e) && this.toolsInstances.set(e, t[e]);
              }
            }

            return this.toolsInstances;
          }
        }, {
          key: "inlineTools",
          get: function get() {
            var t = {};

            for (var e in this.Editor.Tools.inline) {
              if (this.Editor.Tools.inline.hasOwnProperty(e)) {
                var n = this.Editor.Tools.getToolSettings(e);
                t[e] = this.Editor.Tools.constructInline(this.Editor.Tools.inline[e], n);
              }
            }

            return t;
          }
        }]), e;
      }(u.default);

      _o39.default = y, y.displayName = "InlineToolbar", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(13), n(14), n(58), n(59)], void 0 === (r = "function" == typeof (o = function o(_o40, i, r, a, s, l, c, u, f, d, p) {
      "use strict";

      var h = n(15),
          v = n(1);
      Object.defineProperty(_o40, "__esModule", {
        value: !0
      }), _o40.default = void 0, i = v(i), r = v(r), a = v(a), s = v(s), l = v(l), c = v(c), u = v(u), f = h(f), d = v(d);

      var g = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).opened = !1, t.nodes = {
            toolbox: null,
            buttons: []
          }, t.displayedToolsCount = 0, t.flipper = null, t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "make",
          value: function value() {
            this.nodes.toolbox = u.default.make("div", this.CSS.toolbox), u.default.append(this.Editor.Toolbar.nodes.content, this.nodes.toolbox), this.addTools(), this.enableFlipper();
          }
        }, {
          key: "toolButtonActivate",
          value: function value(t, e) {
            var n = this.Editor.Tools.toolsClasses[e];
            this.insertNewBlock(n, e);
          }
        }, {
          key: "open",
          value: function value() {
            this.isEmpty || (this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolbarHolderModifier), this.nodes.toolbox.classList.add(this.CSS.toolboxOpened), this.opened = !0, this.flipper.activate());
          }
        }, {
          key: "close",
          value: function value() {
            this.nodes.toolbox.classList.remove(this.CSS.toolboxOpened), this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolbarHolderModifier), this.opened = !1, this.flipper.deactivate();
          }
        }, {
          key: "toggle",
          value: function value() {
            this.opened ? this.close() : this.open();
          }
        }, {
          key: "addTools",
          value: function value() {
            var t = this.Editor.Tools.available;

            for (var e in t) {
              t.hasOwnProperty(e) && this.addTool(e, t[e]);
            }
          }
        }, {
          key: "addTool",
          value: function value(t, e) {
            var n = this,
                o = this.Editor.Tools.INTERNAL_SETTINGS,
                i = this.Editor.Tools.USER_SETTINGS,
                r = e[o.TOOLBOX];
            if (!f.isEmpty(r)) if (!r || r.icon) {
              var a = this.Editor.Tools.getToolSettings(t)[i.TOOLBOX] || {},
                  s = u.default.make("li", [this.CSS.toolboxButton]);
              s.dataset.tool = t, s.innerHTML = a.icon || r.icon, u.default.append(this.nodes.toolbox, s), this.nodes.toolbox.appendChild(s), this.nodes.buttons.push(s), this.Editor.Listeners.on(s, "click", function (e) {
                n.toolButtonActivate(e, t);
              });
              var l = this.drawTooltip(t);
              this.Editor.Tooltip.onHover(s, l, {
                placement: "bottom",
                hidingDelay: 200
              });
              var c = this.Editor.Tools.getToolSettings(t);
              c && c[this.Editor.Tools.USER_SETTINGS.SHORTCUT] && this.enableShortcut(e, t, c[this.Editor.Tools.USER_SETTINGS.SHORTCUT]), this.displayedToolsCount++;
            } else f.log("Toolbar icon is missed. Tool %o skipped", "warn", t);
          }
        }, {
          key: "drawTooltip",
          value: function value(t) {
            var e = this.Editor.Tools.getToolSettings(t),
                n = this.Editor.Tools.available[t][this.Editor.Tools.INTERNAL_SETTINGS.TOOLBOX] || {},
                o = (e.toolbox || {}).title || n.title || t,
                i = e[this.Editor.Tools.USER_SETTINGS.SHORTCUT],
                r = u.default.make("div", this.CSS.buttonTooltip),
                a = document.createTextNode(f.capitalize(o));
            return r.appendChild(a), i && (i = f.beautifyShortcut(i), r.appendChild(u.default.make("div", this.CSS.buttonShortcut, {
              textContent: i
            }))), r;
          }
        }, {
          key: "enableShortcut",
          value: function value(t, e, n) {
            var o = this;
            this.Editor.Shortcuts.add({
              name: n,
              handler: function handler(n) {
                n.preventDefault(), o.insertNewBlock(t, e);
              }
            });
          }
        }, {
          key: "enableFlipper",
          value: function value() {
            var t = Array.from(this.nodes.toolbox.childNodes);
            this.flipper = new d.default({
              items: t,
              focusedItemClass: this.CSS.toolboxButtonActive
            });
          }
        }, {
          key: "insertNewBlock",
          value: function value(t, e) {
            var n,
                o = this.Editor,
                i = o.BlockManager,
                r = o.Caret;
            (n = i.currentBlock.isEmpty ? i.replace(e) : i.insert(e)).call(p.BlockToolAPI.APPEND_CALLBACK), this.Editor.Caret.setToBlock(n), 0 === n.inputs.length && (n === i.lastBlock ? (i.insertAtEnd(), r.setToBlock(i.lastBlock)) : r.setToBlock(i.nextBlock)), this.Editor.Toolbar.close();
          }
        }, {
          key: "CSS",
          get: function get() {
            return {
              toolbox: "ce-toolbox",
              toolboxButton: "ce-toolbox__button",
              toolboxButtonActive: "ce-toolbox__button--active",
              toolboxOpened: "ce-toolbox--opened",
              openedToolbarHolderModifier: "codex-editor--toolbox-opened",
              buttonTooltip: "ce-toolbox-button-tooltip",
              buttonShortcut: "ce-toolbox-button-tooltip__shortcut"
            };
          }
        }, {
          key: "isEmpty",
          get: function get() {
            return 0 === this.displayedToolsCount;
          }
        }]), e;
      }(c.default);

      _o40.default = g, g.displayName = "Toolbox", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(50), n(51), n(2), n(3), n(4), n(5), n(6), n(367), n(7), n(14), n(368), n(369), n(370), n(371)], void 0 === (r = "function" == typeof (o = function o(_o41, i, r, a, s, l, c, u, f, d, p, h, v, g, y) {
      "use strict";

      var b = n(15),
          m = n(1);
      Object.defineProperty(_o41, "__esModule", {
        value: !0
      }), _o41.default = void 0, i = m(i), r = m(r), a = m(a), s = m(s), l = m(l), c = m(c), u = m(u), f = m(f), d = m(d), p = b(p), h = m(h), v = m(v), g = m(g), y = m(y);

      var k = function (t) {
        function e(t) {
          var n,
              o = t.config;
          return (0, a.default)(this, e), (n = (0, l.default)(this, (0, c.default)(e).call(this, {
            config: o
          }))).stubTool = "stub", n.toolsClasses = {}, n.toolsAvailable = {}, n.toolsUnavailable = {}, n.toolsSettings = {}, n._inlineTools = {}, n.toolsClasses = {}, n.toolsSettings = {}, n.toolsAvailable = {}, n.toolsUnavailable = {}, n._inlineTools = null, n;
        }

        return (0, u.default)(e, t), (0, s.default)(e, [{
          key: "prepare",
          value: function value() {
            var t = this;
            if (this.validateTools(), this.config.tools = p.deepMerge({}, this.internalTools, this.config.tools), !this.config.hasOwnProperty("tools") || 0 === Object.keys(this.config.tools).length) throw Error("Can't start without tools");

            for (var e in this.config.tools) {
              "object" === (0, r.default)(this.config.tools[e]) ? (this.toolsClasses[e] = this.config.tools[e].class, this.toolsSettings[e] = this.config.tools[e], delete this.toolsSettings[e].class) : (this.toolsClasses[e] = this.config.tools[e], this.toolsSettings[e] = {
                class: this.config.tools[e]
              });
            }

            var n = this.getListOfPrepareFunctions();
            return 0 === n.length ? Promise.resolve() : p.sequence(n, function (e) {
              t.success(e);
            }, function (e) {
              t.fallback(e);
            });
          }
        }, {
          key: "success",
          value: function value(t) {
            this.toolsAvailable[t.toolName] = this.toolsClasses[t.toolName];
          }
        }, {
          key: "fallback",
          value: function value(t) {
            this.toolsUnavailable[t.toolName] = this.toolsClasses[t.toolName];
          }
        }, {
          key: "construct",
          value: function value(t, e) {
            var n = this.toolsClasses[t],
                o = this.toolsSettings[t][this.USER_SETTINGS.CONFIG] || {};
            return t !== this.config.initialBlock || o.placeholder || (o.placeholder = this.config.placeholder), new n({
              api: this.Editor.API.methods,
              config: o,
              data: e
            });
          }
        }, {
          key: "constructInline",
          value: function value(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = {
              api: this.Editor.API.methods,
              config: e[this.USER_SETTINGS.CONFIG] || {}
            };
            return new t(n);
          }
        }, {
          key: "isInitial",
          value: function value(t) {
            return t instanceof this.available[this.config.initialBlock];
          }
        }, {
          key: "getToolSettings",
          value: function value(t) {
            return this.toolsSettings[t];
          }
        }, {
          key: "getListOfPrepareFunctions",
          value: function value() {
            var t = [];

            for (var e in this.toolsClasses) {
              if (this.toolsClasses.hasOwnProperty(e)) {
                var n = this.toolsClasses[e];
                "function" == typeof n.prepare ? t.push({
                  function: n.prepare,
                  data: {
                    toolName: e,
                    config: this.toolsSettings[e][this.USER_SETTINGS.CONFIG]
                  }
                }) : this.toolsAvailable[e] = n;
              }
            }

            return t;
          }
        }, {
          key: "validateTools",
          value: function value() {
            for (var t in this.config.tools) {
              if (this.config.tools.hasOwnProperty(t)) {
                if (t in this.internalTools) return;
                var e = this.config.tools[t];
                if (!p.isFunction(e) && !p.isFunction(e.class)) throw Error("Tool «".concat(t, "» must be a constructor function or an object with function in the «class» property"));
              }
            }
          }
        }, {
          key: "available",
          get: function get() {
            return this.toolsAvailable;
          }
        }, {
          key: "unavailable",
          get: function get() {
            return this.toolsUnavailable;
          }
        }, {
          key: "inline",
          get: function get() {
            var t = this;
            if (this._inlineTools) return this._inlineTools;
            var e = Object.entries(this.available).filter(function (e) {
              var n = (0, i.default)(e, 2),
                  o = (n[0], n[1]);
              if (!o[t.INTERNAL_SETTINGS.IS_INLINE]) return !1;
              var r = ["render", "surround", "checkState"].filter(function (e) {
                return !t.constructInline(o)[e];
              });
              return !r.length || (p.log("Incorrect Inline Tool: ".concat(o.name, ". Some of required methods is not implemented %o"), "warn", r), !1);
            }),
                n = {};
            return e.forEach(function (t) {
              var e = (0, i.default)(t, 2),
                  o = e[0],
                  r = e[1];
              return n[o] = r;
            }), this._inlineTools = n, this._inlineTools;
          }
        }, {
          key: "blockTools",
          get: function get() {
            var t = this,
                e = Object.entries(this.available).filter(function (e) {
              var n = (0, i.default)(e, 2);
              return n[0], !n[1][t.INTERNAL_SETTINGS.IS_INLINE];
            }),
                n = {};
            return e.forEach(function (t) {
              var e = (0, i.default)(t, 2),
                  o = e[0],
                  r = e[1];
              return n[o] = r;
            }), n;
          }
        }, {
          key: "INTERNAL_SETTINGS",
          get: function get() {
            return {
              IS_ENABLED_LINE_BREAKS: "enableLineBreaks",
              IS_INLINE: "isInline",
              TITLE: "title",
              SHORTCUT: "shortcut",
              TOOLBOX: "toolbox",
              SANITIZE_CONFIG: "sanitize",
              CONVERSION_CONFIG: "conversionConfig"
            };
          }
        }, {
          key: "USER_SETTINGS",
          get: function get() {
            return {
              SHORTCUT: "shortcut",
              TOOLBOX: "toolbox",
              ENABLED_INLINE_TOOLS: "inlineToolbar",
              CONFIG: "config"
            };
          }
        }, {
          key: "internalTools",
          get: function get() {
            return {
              bold: {
                class: h.default
              },
              italic: {
                class: v.default
              },
              link: {
                class: g.default
              },
              paragraph: {
                class: f.default,
                inlineToolbar: !0
              },
              stub: {
                class: y.default
              }
            };
          }
        }]), e;
      }(d.default);

      _o41.default = k, k.displayName = "Tools", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(372)], void 0 === (r = "function" == typeof (o = function o(_o42, i, r, a, s, l, c, u) {
      "use strict";

      var f = n(1);
      Object.defineProperty(_o42, "__esModule", {
        value: !0
      }), _o42.default = void 0, i = f(i), r = f(r), a = f(a), s = f(s), l = f(l), c = f(c), u = f(u);

      var d = function (t) {
        function e(t) {
          var n,
              o = t.config;
          return (0, i.default)(this, e), (n = (0, a.default)(this, (0, s.default)(e).call(this, {
            config: o
          }))).lib = new u.default(), n;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "show",
          value: function value(t, e, n) {
            this.lib.show(t, e, n);
          }
        }, {
          key: "hide",
          value: function value() {
            this.lib.hide();
          }
        }, {
          key: "onHover",
          value: function value(t, e, n) {
            this.lib.onHover(t, e, n);
          }
        }]), e;
      }(c.default);

      _o42.default = d, d.displayName = "Tooltip", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(50), n(27), n(2), n(3), n(4), n(5), n(6), n(373), n(7), n(13), n(14), n(28), n(59), n(58)], void 0 === (r = "function" == typeof (o = function o(_o43, i, r, a, s, l, c, u, f, d, p, h, v, g, y) {
      "use strict";

      var b = n(15),
          m = n(1);
      Object.defineProperty(_o43, "__esModule", {
        value: !0
      }), _o43.default = void 0, i = m(i), r = m(r), a = m(a), s = m(s), l = m(l), c = m(c), u = m(u), f = m(f), d = m(d), p = m(p), h = b(h), v = m(v), g = m(g), y = m(y);

      var k = function (t) {
        function e() {
          var t;
          return (0, a.default)(this, e), (t = (0, l.default)(this, (0, c.default)(e).apply(this, arguments))).isMobile = !1, t.nodes = {
            holder: null,
            wrapper: null,
            redactor: null
          }, t.contentRectCache = void 0, t.resizeDebouncer = h.debounce(function () {
            t.windowResize();
          }, 200), t;
        }

        return (0, u.default)(e, t), (0, s.default)(e, [{
          key: "addLoader",
          value: function value() {
            this.nodes.loader = p.default.make("div", this.CSS.editorLoader), this.nodes.wrapper.prepend(this.nodes.loader), this.nodes.redactor.classList.add(this.CSS.editorZoneHidden);
          }
        }, {
          key: "removeLoader",
          value: function value() {
            this.nodes.loader.remove(), this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden);
          }
        }, {
          key: "prepare",
          value: function value() {
            return r.default.async(function (t) {
              for (;;) {
                switch (t.prev = t.next) {
                  case 0:
                    return this.checkIsMobile(), t.next = 3, r.default.awrap(this.make());

                  case 3:
                    return this.addLoader(), t.next = 6, r.default.awrap(this.appendSVGSprite());

                  case 6:
                    return t.next = 8, r.default.awrap(this.Editor.Toolbar.make());

                  case 8:
                    return t.next = 10, r.default.awrap(this.Editor.InlineToolbar.make());

                  case 10:
                    return t.next = 12, r.default.awrap(this.loadStyles());

                  case 12:
                    return t.next = 14, r.default.awrap(this.bindEvents());

                  case 14:
                  case "end":
                    return t.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "checkEmptiness",
          value: function value() {
            var t = this.Editor.BlockManager;
            this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, t.isEditorEmpty);
          }
        }, {
          key: "destroy",
          value: function value() {
            this.nodes.holder.innerHTML = "";
          }
        }, {
          key: "closeAllToolbars",
          value: function value() {
            var t = this.Editor,
                e = t.Toolbox,
                n = t.BlockSettings,
                o = t.InlineToolbar,
                i = t.ConversionToolbar;
            n.close(), o.close(), i.close(), e.close();
          }
        }, {
          key: "checkIsMobile",
          value: function value() {
            this.isMobile = window.innerWidth < 650;
          }
        }, {
          key: "make",
          value: function value() {
            return r.default.async(function (t) {
              for (;;) {
                switch (t.prev = t.next) {
                  case 0:
                    this.nodes.holder = p.default.getHolder(this.config.holder), this.nodes.wrapper = p.default.make("div", this.CSS.editorWrapper), this.nodes.redactor = p.default.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);

                  case 7:
                  case "end":
                    return t.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "loadStyles",
          value: function value() {
            var t = n(374),
                e = p.default.make("style", null, {
              textContent: t.toString()
            });
            p.default.prepend(document.head, e);
          }
        }, {
          key: "bindEvents",
          value: function value() {
            var t = this;
            this.Editor.Listeners.on(this.nodes.redactor, "click", function (e) {
              return t.redactorClicked(e);
            }, !1), this.Editor.Listeners.on(this.nodes.redactor, "mousedown", function (e) {
              return t.documentTouched(e);
            }, !0), this.Editor.Listeners.on(this.nodes.redactor, "touchstart", function (e) {
              return t.documentTouched(e);
            }, !0), this.Editor.Listeners.on(document, "keydown", function (e) {
              return t.documentKeydown(e);
            }, !0), this.Editor.Listeners.on(document, "click", function (e) {
              return t.documentClicked(e);
            }, !0), this.Editor.Listeners.on(document, "selectionchange", function (e) {
              t.selectionChanged(e);
            }, !0), this.Editor.Listeners.on(window, "resize", function () {
              t.resizeDebouncer();
            }, {
              passive: !0
            });
          }
        }, {
          key: "windowResize",
          value: function value() {
            this.contentRectCache = null, this.checkIsMobile();
          }
        }, {
          key: "documentKeydown",
          value: function value(t) {
            switch (t.keyCode) {
              case h.keyCodes.ENTER:
                this.enterPressed(t);
                break;

              case h.keyCodes.BACKSPACE:
                this.backspacePressed(t);
                break;

              default:
                this.defaultBehaviour(t);
            }
          }
        }, {
          key: "defaultBehaviour",
          value: function value(t) {
            var e = t.target.closest(".".concat(this.CSS.editorWrapper)),
                n = this.Editor.BlockManager.currentBlock,
                o = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
            e || n && o || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
          }
        }, {
          key: "backspacePressed",
          value: function value(t) {
            var e = this.Editor,
                n = e.BlockManager,
                o = e.BlockSelection,
                i = e.Caret;

            if (o.anyBlockSelected) {
              var r = n.removeSelectedBlocks();
              i.setToBlock(n.insertInitialBlockAtIndex(r, !0), i.positions.START), o.clearSelection(t), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation();
            }
          }
        }, {
          key: "enterPressed",
          value: function value(t) {
            var e = this.Editor,
                n = e.BlockManager,
                o = e.BlockSelection,
                i = e.Caret,
                r = n.currentBlockIndex >= 0;

            if (o.anyBlockSelected) {
              var a = n.removeSelectedBlocks();
              return i.setToBlock(n.insertInitialBlockAtIndex(a, !0), i.positions.START), o.clearSelection(t), t.preventDefault(), t.stopImmediatePropagation(), void t.stopPropagation();
            }

            if (!this.someToolbarOpened && r && "BODY" === t.target.tagName) {
              var s = this.Editor.BlockManager.insert();
              this.Editor.Caret.setToBlock(s), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.move(), this.Editor.Toolbar.plusButton.show();
            }

            this.Editor.BlockSelection.clearSelection(t);
          }
        }, {
          key: "documentClicked",
          value: function value(t) {
            if (t.isTrusted) {
              var e = t.target;
              this.nodes.holder.contains(e) || v.default.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.InlineToolbar.close(), this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close()), this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted || this.Editor.BlockSelection.clearSelection(t), this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted || this.Editor.BlockSelection.clearSelection(t);
            }
          }
        }, {
          key: "documentTouched",
          value: function value(t) {
            var e = t.target;

            if (e === this.nodes.redactor) {
              var n = t instanceof MouseEvent ? t.clientX : t.touches[0].clientX,
                  o = t instanceof MouseEvent ? t.clientY : t.touches[0].clientY;
              e = document.elementFromPoint(n, o);
            }

            try {
              this.Editor.BlockManager.setCurrentBlockByChildNode(e), this.Editor.BlockManager.highlightCurrentNode();
            } catch (t) {
              this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
            }

            this.Editor.Toolbar.open(), this.Editor.Toolbar.plusButton.hide();
          }
        }, {
          key: "redactorClicked",
          value: function value(t) {
            v.default.isCollapsed && (t.stopImmediatePropagation(), t.stopPropagation(), this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.insert(), this.Editor.Tools.isInitial(this.Editor.BlockManager.currentBlock.tool) && this.Editor.BlockManager.currentBlock.isEmpty && this.Editor.Toolbar.plusButton.show());
          }
        }, {
          key: "selectionChanged",
          value: function value(t) {
            var e = v.default.anchorElement;
            e && e.closest(".".concat(g.default.CSS.content)) ? this.Editor.InlineToolbar.tryToShow(!0) : this.Editor.InlineToolbar.containsNode(e) || this.Editor.InlineToolbar.close();
          }
        }, {
          key: "appendSVGSprite",
          value: function value() {
            var t = p.default.make("div");
            t.hidden = !0, t.style.display = "none", t.innerHTML = f.default, p.default.append(this.nodes.wrapper, t);
          }
        }, {
          key: "CSS",
          get: function get() {
            return {
              editorWrapper: "codex-editor",
              editorWrapperNarrow: "codex-editor--narrow",
              editorZone: "codex-editor__redactor",
              editorZoneHidden: "codex-editor__redactor--hidden",
              editorLoader: "codex-editor__loader",
              editorEmpty: "codex-editor--empty"
            };
          }
        }, {
          key: "contentRect",
          get: function get() {
            if (this.contentRectCache) return this.contentRectCache;
            var t = this.nodes.wrapper.querySelector(".".concat(g.default.CSS.content));
            return t ? (this.contentRectCache = t.getBoundingClientRect(), this.contentRectCache) : {
              width: 650,
              left: 0,
              right: 0
            };
          }
        }, {
          key: "someToolbarOpened",
          get: function get() {
            var t = this.Editor,
                e = t.Toolbox,
                n = t.BlockSettings,
                o = t.InlineToolbar,
                i = t.ConversionToolbar;
            return n.opened || o.opened || i.opened || e.opened;
          }
        }, {
          key: "someFlipperButtonFocused",
          get: function get() {
            return Object.entries(this.Editor).filter(function (t) {
              var e = (0, i.default)(t, 2);
              return e[0], e[1].flipper instanceof y.default;
            }).some(function (t) {
              var e = (0, i.default)(t, 2);
              return e[0], e[1].flipper.currentItem;
            });
          }
        }]), e;
      }(d.default);

      _o43.default = k, k.displayName = "UI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    n(172), t.exports = n(344);
  }, function (t, e, n) {
    n(173);
  }, function (t, e, n) {
    "use strict";

    n(174), n(317), n(319), n(322), n(324), n(326), n(328), n(330), n(332), n(334), n(336), n(338), n(340), n(135);
  }, function (t, e, n) {
    n(175), n(178), n(179), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(256), n(257), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(267), n(268), n(269), n(270), n(271), n(272), n(273), n(274), n(275), n(276), n(277), n(278), n(279), n(98), n(280), n(124), n(281), n(125), n(282), n(283), n(284), n(285), n(126), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(296), n(297), n(298), n(299), n(300), n(301), n(302), n(303), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), t.exports = n(17);
  }, function (t, e, n) {
    "use strict";

    var o = n(8),
        i = n(23),
        r = n(18),
        a = n(0),
        s = n(21),
        l = n(39).KEY,
        c = n(9),
        u = n(64),
        f = n(52),
        d = n(41),
        p = n(12),
        h = n(79),
        v = n(105),
        g = n(177),
        y = n(67),
        b = n(10),
        m = n(11),
        k = n(20),
        x = n(25),
        w = n(38),
        S = n(40),
        E = n(45),
        T = n(108),
        C = n(32),
        B = n(66),
        _ = n(19),
        I = n(43),
        O = C.f,
        N = _.f,
        L = T.f,
        _M = o.Symbol,
        A = o.JSON,
        P = A && A.stringify,
        R = p("_hidden"),
        j = p("toPrimitive"),
        F = {}.propertyIsEnumerable,
        D = u("symbol-registry"),
        U = u("symbols"),
        H = u("op-symbols"),
        z = Object.prototype,
        G = "function" == typeof _M && !!B.f,
        W = o.QObject,
        X = !W || !W.prototype || !W.prototype.findChild,
        V = r && c(function () {
      return 7 != E(N({}, "a", {
        get: function get() {
          return N(this, "a", {
            value: 7
          }).a;
        }
      })).a;
    }) ? function (t, e, n) {
      var o = O(z, e);
      o && delete z[e], N(t, e, n), o && t !== z && N(z, e, o);
    } : N,
        Y = function Y(t) {
      var e = U[t] = E(_M.prototype);
      return e._k = t, e;
    },
        K = G && "symbol" == _typeof(_M.iterator) ? function (t) {
      return "symbol" == _typeof(t);
    } : function (t) {
      return t instanceof _M;
    },
        Z = function Z(t, e, n) {
      return t === z && Z(H, e, n), b(t), e = w(e, !0), b(n), i(U, e) ? (n.enumerable ? (i(t, R) && t[R][e] && (t[R][e] = !1), n = E(n, {
        enumerable: S(0, !1)
      })) : (i(t, R) || N(t, R, S(1, {})), t[R][e] = !0), V(t, e, n)) : N(t, e, n);
    },
        q = function q(t, e) {
      b(t);

      for (var n, o = g(e = x(e)), i = 0, r = o.length; r > i;) {
        Z(t, n = o[i++], e[n]);
      }

      return t;
    },
        $ = function $(t) {
      var e = F.call(this, t = w(t, !0));
      return !(this === z && i(U, t) && !i(H, t)) && (!(e || !i(this, t) || !i(U, t) || i(this, R) && this[R][t]) || e);
    },
        J = function J(t, e) {
      if (t = x(t), e = w(e, !0), t !== z || !i(U, e) || i(H, e)) {
        var n = O(t, e);
        return !n || !i(U, e) || i(t, R) && t[R][e] || (n.enumerable = !0), n;
      }
    },
        Q = function Q(t) {
      for (var e, n = L(x(t)), o = [], r = 0; n.length > r;) {
        i(U, e = n[r++]) || e == R || e == l || o.push(e);
      }

      return o;
    },
        tt = function tt(t) {
      for (var e, n = t === z, o = L(n ? H : x(t)), r = [], a = 0; o.length > a;) {
        !i(U, e = o[a++]) || n && !i(z, e) || r.push(U[e]);
      }

      return r;
    };

    G || (s((_M = function M() {
      if (this instanceof _M) throw TypeError("Symbol is not a constructor!");

      var t = d(arguments.length > 0 ? arguments[0] : void 0),
          e = function e(n) {
        this === z && e.call(H, n), i(this, R) && i(this[R], t) && (this[R][t] = !1), V(this, t, S(1, n));
      };

      return r && X && V(z, t, {
        configurable: !0,
        set: e
      }), Y(t);
    }).prototype, "toString", function () {
      return this._k;
    }), C.f = J, _.f = Z, n(46).f = T.f = Q, n(61).f = $, B.f = tt, r && !n(42) && s(z, "propertyIsEnumerable", $, !0), h.f = function (t) {
      return Y(p(t));
    }), a(a.G + a.W + a.F * !G, {
      Symbol: _M
    });

    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) {
      p(et[nt++]);
    }

    for (var ot = I(p.store), it = 0; ot.length > it;) {
      v(ot[it++]);
    }

    a(a.S + a.F * !G, "Symbol", {
      for: function _for(t) {
        return i(D, t += "") ? D[t] : D[t] = _M(t);
      },
      keyFor: function keyFor(t) {
        if (!K(t)) throw TypeError(t + " is not a symbol!");

        for (var e in D) {
          if (D[e] === t) return e;
        }
      },
      useSetter: function useSetter() {
        X = !0;
      },
      useSimple: function useSimple() {
        X = !1;
      }
    }), a(a.S + a.F * !G, "Object", {
      create: function create(t, e) {
        return void 0 === e ? E(t) : q(E(t), e);
      },
      defineProperty: Z,
      defineProperties: q,
      getOwnPropertyDescriptor: J,
      getOwnPropertyNames: Q,
      getOwnPropertySymbols: tt
    });
    var rt = c(function () {
      B.f(1);
    });
    a(a.S + a.F * rt, "Object", {
      getOwnPropertySymbols: function getOwnPropertySymbols(t) {
        return B.f(k(t));
      }
    }), A && a(a.S + a.F * (!G || c(function () {
      var t = _M();

      return "[null]" != P([t]) || "{}" != P({
        a: t
      }) || "{}" != P(Object(t));
    })), "JSON", {
      stringify: function stringify(t) {
        for (var e, n, o = [t], i = 1; arguments.length > i;) {
          o.push(arguments[i++]);
        }

        if (n = e = o[1], (m(e) || void 0 !== t) && !K(t)) return y(e) || (e = function e(t, _e) {
          if ("function" == typeof n && (_e = n.call(this, t, _e)), !K(_e)) return _e;
        }), o[1] = e, P.apply(A, o);
      }
    }), _M.prototype[j] || n(24)(_M.prototype, j, _M.prototype.valueOf), f(_M, "Symbol"), f(Math, "Math", !0), f(o.JSON, "JSON", !0);
  }, function (t, e, n) {
    t.exports = n(64)("native-function-to-string", Function.toString);
  }, function (t, e, n) {
    var o = n(43),
        i = n(66),
        r = n(61);

    t.exports = function (t) {
      var e = o(t),
          n = i.f;
      if (n) for (var a, s = n(t), l = r.f, c = 0; s.length > c;) {
        l.call(t, a = s[c++]) && e.push(a);
      }
      return e;
    };
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Object", {
      create: n(45)
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S + o.F * !n(18), "Object", {
      defineProperty: n(19).f
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S + o.F * !n(18), "Object", {
      defineProperties: n(107)
    });
  }, function (t, e, n) {
    var o = n(25),
        i = n(32).f;
    n(33)("getOwnPropertyDescriptor", function () {
      return function (t, e) {
        return i(o(t), e);
      };
    });
  }, function (t, e, n) {
    var o = n(20),
        i = n(47);
    n(33)("getPrototypeOf", function () {
      return function (t) {
        return i(o(t));
      };
    });
  }, function (t, e, n) {
    var o = n(20),
        i = n(43);
    n(33)("keys", function () {
      return function (t) {
        return i(o(t));
      };
    });
  }, function (t, e, n) {
    n(33)("getOwnPropertyNames", function () {
      return n(108).f;
    });
  }, function (t, e, n) {
    var o = n(11),
        i = n(39).onFreeze;
    n(33)("freeze", function (t) {
      return function (e) {
        return t && o(e) ? t(i(e)) : e;
      };
    });
  }, function (t, e, n) {
    var o = n(11),
        i = n(39).onFreeze;
    n(33)("seal", function (t) {
      return function (e) {
        return t && o(e) ? t(i(e)) : e;
      };
    });
  }, function (t, e, n) {
    var o = n(11),
        i = n(39).onFreeze;
    n(33)("preventExtensions", function (t) {
      return function (e) {
        return t && o(e) ? t(i(e)) : e;
      };
    });
  }, function (t, e, n) {
    var o = n(11);
    n(33)("isFrozen", function (t) {
      return function (e) {
        return !o(e) || !!t && t(e);
      };
    });
  }, function (t, e, n) {
    var o = n(11);
    n(33)("isSealed", function (t) {
      return function (e) {
        return !o(e) || !!t && t(e);
      };
    });
  }, function (t, e, n) {
    var o = n(11);
    n(33)("isExtensible", function (t) {
      return function (e) {
        return !!o(e) && (!t || t(e));
      };
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S + o.F, "Object", {
      assign: n(109)
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Object", {
      is: n(110)
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Object", {
      setPrototypeOf: n(83).set
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(62),
        i = {};
    i[n(12)("toStringTag")] = "z", i + "" != "[object z]" && n(21)(Object.prototype, "toString", function () {
      return "[object " + o(this) + "]";
    }, !0);
  }, function (t, e, n) {
    var o = n(0);
    o(o.P, "Function", {
      bind: n(111)
    });
  }, function (t, e, n) {
    var o = n(19).f,
        i = Function.prototype,
        r = /^\s*function ([^ (]*)/;
    "name" in i || n(18) && o(i, "name", {
      configurable: !0,
      get: function get() {
        try {
          return ("" + this).match(r)[1];
        } catch (t) {
          return "";
        }
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(11),
        i = n(47),
        r = n(12)("hasInstance"),
        a = Function.prototype;
    r in a || n(19).f(a, r, {
      value: function value(t) {
        if ("function" != typeof this || !o(t)) return !1;
        if (!o(this.prototype)) return t instanceof this;

        for (; t = i(t);) {
          if (this.prototype === t) return !0;
        }

        return !1;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(113);
    o(o.G + o.F * (parseInt != i), {
      parseInt: i
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(114);
    o(o.G + o.F * (parseFloat != i), {
      parseFloat: i
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(8),
        i = n(23),
        r = n(35),
        a = n(85),
        s = n(38),
        l = n(9),
        c = n(46).f,
        u = n(32).f,
        f = n(19).f,
        d = n(53).trim,
        _p = o.Number,
        h = _p,
        v = _p.prototype,
        g = "Number" == r(n(45)(v)),
        y = ("trim" in String.prototype),
        b = function b(t) {
      var e = s(t, !1);

      if ("string" == typeof e && e.length > 2) {
        var n,
            o,
            i,
            r = (e = y ? e.trim() : d(e, 3)).charCodeAt(0);

        if (43 === r || 45 === r) {
          if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN;
        } else if (48 === r) {
          switch (e.charCodeAt(1)) {
            case 66:
            case 98:
              o = 2, i = 49;
              break;

            case 79:
            case 111:
              o = 8, i = 55;
              break;

            default:
              return +e;
          }

          for (var a, l = e.slice(2), c = 0, u = l.length; c < u; c++) {
            if ((a = l.charCodeAt(c)) < 48 || a > i) return NaN;
          }

          return parseInt(l, o);
        }
      }

      return +e;
    };

    if (!_p(" 0o1") || !_p("0b1") || _p("+0x1")) {
      _p = function p(t) {
        var e = arguments.length < 1 ? 0 : t,
            n = this;
        return n instanceof _p && (g ? l(function () {
          v.valueOf.call(n);
        }) : "Number" != r(n)) ? a(new h(b(e)), n, _p) : b(e);
      };

      for (var m, k = n(18) ? c(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; k.length > x; x++) {
        i(h, m = k[x]) && !i(_p, m) && f(_p, m, u(h, m));
      }

      _p.prototype = v, v.constructor = _p, n(21)(o, "Number", _p);
    }
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(31),
        r = n(115),
        a = n(86),
        s = 1..toFixed,
        l = Math.floor,
        c = [0, 0, 0, 0, 0, 0],
        u = "Number.toFixed: incorrect invocation!",
        f = function f(t, e) {
      for (var n = -1, o = e; ++n < 6;) {
        o += t * c[n], c[n] = o % 1e7, o = l(o / 1e7);
      }
    },
        d = function d(t) {
      for (var e = 6, n = 0; --e >= 0;) {
        n += c[e], c[e] = l(n / t), n = n % t * 1e7;
      }
    },
        p = function p() {
      for (var t = 6, e = ""; --t >= 0;) {
        if ("" !== e || 0 === t || 0 !== c[t]) {
          var n = String(c[t]);
          e = "" === e ? n : e + a.call("0", 7 - n.length) + n;
        }
      }

      return e;
    },
        h = function h(t, e, n) {
      return 0 === e ? n : e % 2 == 1 ? h(t, e - 1, n * t) : h(t * t, e / 2, n);
    };

    o(o.P + o.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !n(9)(function () {
      s.call({});
    })), "Number", {
      toFixed: function toFixed(t) {
        var e,
            n,
            o,
            s,
            l = r(this, u),
            c = i(t),
            v = "",
            g = "0";
        if (c < 0 || c > 20) throw RangeError(u);
        if (l != l) return "NaN";
        if (l <= -1e21 || l >= 1e21) return String(l);
        if (l < 0 && (v = "-", l = -l), l > 1e-21) if (n = (e = function (t) {
          for (var e = 0, n = t; n >= 4096;) {
            e += 12, n /= 4096;
          }

          for (; n >= 2;) {
            e += 1, n /= 2;
          }

          return e;
        }(l * h(2, 69, 1)) - 69) < 0 ? l * h(2, -e, 1) : l / h(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
          for (f(0, n), o = c; o >= 7;) {
            f(1e7, 0), o -= 7;
          }

          for (f(h(10, o, 1), 0), o = e - 1; o >= 23;) {
            d(1 << 23), o -= 23;
          }

          d(1 << o), f(1, 1), d(2), g = p();
        } else f(0, n), f(1 << -e, 0), g = p() + a.call("0", c);
        return g = c > 0 ? v + ((s = g.length) <= c ? "0." + a.call("0", c - s) + g : g.slice(0, s - c) + "." + g.slice(s - c)) : v + g;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(9),
        r = n(115),
        a = 1..toPrecision;
    o(o.P + o.F * (i(function () {
      return "1" !== a.call(1, void 0);
    }) || !i(function () {
      a.call({});
    })), "Number", {
      toPrecision: function toPrecision(t) {
        var e = r(this, "Number#toPrecision: incorrect invocation!");
        return void 0 === t ? a.call(e) : a.call(e, t);
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Number", {
      EPSILON: Math.pow(2, -52)
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(8).isFinite;
    o(o.S, "Number", {
      isFinite: function isFinite(t) {
        return "number" == typeof t && i(t);
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Number", {
      isInteger: n(116)
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Number", {
      isNaN: function isNaN(t) {
        return t != t;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(116),
        r = Math.abs;
    o(o.S, "Number", {
      isSafeInteger: function isSafeInteger(t) {
        return i(t) && r(t) <= 9007199254740991;
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Number", {
      MAX_SAFE_INTEGER: 9007199254740991
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Number", {
      MIN_SAFE_INTEGER: -9007199254740991
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(114);
    o(o.S + o.F * (Number.parseFloat != i), "Number", {
      parseFloat: i
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(113);
    o(o.S + o.F * (Number.parseInt != i), "Number", {
      parseInt: i
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(117),
        r = Math.sqrt,
        a = Math.acosh;
    o(o.S + o.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
      acosh: function acosh(t) {
        return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + r(t - 1) * r(t + 1));
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = Math.asinh;
    o(o.S + o.F * !(i && 1 / i(0) > 0), "Math", {
      asinh: function t(e) {
        return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = Math.atanh;
    o(o.S + o.F * !(i && 1 / i(-0) < 0), "Math", {
      atanh: function atanh(t) {
        return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(87);
    o(o.S, "Math", {
      cbrt: function cbrt(t) {
        return i(t = +t) * Math.pow(Math.abs(t), 1 / 3);
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Math", {
      clz32: function clz32(t) {
        return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = Math.exp;
    o(o.S, "Math", {
      cosh: function cosh(t) {
        return (i(t = +t) + i(-t)) / 2;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(88);
    o(o.S + o.F * (i != Math.expm1), "Math", {
      expm1: i
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Math", {
      fround: n(220)
    });
  }, function (t, e, n) {
    var o = n(87),
        i = Math.pow,
        r = i(2, -52),
        a = i(2, -23),
        s = i(2, 127) * (2 - a),
        l = i(2, -126);

    t.exports = Math.fround || function (t) {
      var e,
          n,
          i = Math.abs(t),
          c = o(t);
      return i < l ? c * (i / l / a + 1 / r - 1 / r) * l * a : (n = (e = (1 + a / r) * i) - (e - i)) > s || n != n ? c * (1 / 0) : c * n;
    };
  }, function (t, e, n) {
    var o = n(0),
        i = Math.abs;
    o(o.S, "Math", {
      hypot: function hypot(t, e) {
        for (var n, o, r = 0, a = 0, s = arguments.length, l = 0; a < s;) {
          l < (n = i(arguments[a++])) ? (r = r * (o = l / n) * o + 1, l = n) : r += n > 0 ? (o = n / l) * o : n;
        }

        return l === 1 / 0 ? 1 / 0 : l * Math.sqrt(r);
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = Math.imul;
    o(o.S + o.F * n(9)(function () {
      return -5 != i(4294967295, 5) || 2 != i.length;
    }), "Math", {
      imul: function imul(t, e) {
        var n = +t,
            o = +e,
            i = 65535 & n,
            r = 65535 & o;
        return 0 | i * r + ((65535 & n >>> 16) * r + i * (65535 & o >>> 16) << 16 >>> 0);
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Math", {
      log10: function log10(t) {
        return Math.log(t) * Math.LOG10E;
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Math", {
      log1p: n(117)
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Math", {
      log2: function log2(t) {
        return Math.log(t) / Math.LN2;
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Math", {
      sign: n(87)
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(88),
        r = Math.exp;
    o(o.S + o.F * n(9)(function () {
      return -2e-17 != !Math.sinh(-2e-17);
    }), "Math", {
      sinh: function sinh(t) {
        return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (r(t - 1) - r(-t - 1)) * (Math.E / 2);
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(88),
        r = Math.exp;
    o(o.S, "Math", {
      tanh: function tanh(t) {
        var e = i(t = +t),
            n = i(-t);
        return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (r(t) + r(-t));
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Math", {
      trunc: function trunc(t) {
        return (t > 0 ? Math.floor : Math.ceil)(t);
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(44),
        r = String.fromCharCode,
        a = String.fromCodePoint;
    o(o.S + o.F * (!!a && 1 != a.length), "String", {
      fromCodePoint: function fromCodePoint(t) {
        for (var e, n = [], o = arguments.length, a = 0; o > a;) {
          if (e = +arguments[a++], i(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
          n.push(e < 65536 ? r(e) : r(55296 + ((e -= 65536) >> 10), e % 1024 + 56320));
        }

        return n.join("");
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(25),
        r = n(16);
    o(o.S, "String", {
      raw: function raw(t) {
        for (var e = i(t.raw), n = r(e.length), o = arguments.length, a = [], s = 0; n > s;) {
          a.push(String(e[s++])), s < o && a.push(String(arguments[s]));
        }

        return a.join("");
      }
    });
  }, function (t, e, n) {
    "use strict";

    n(53)("trim", function (t) {
      return function () {
        return t(this, 3);
      };
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(89)(!0);
    n(90)(String, "String", function (t) {
      this._t = String(t), this._i = 0;
    }, function () {
      var t,
          e = this._t,
          n = this._i;
      return n >= e.length ? {
        value: void 0,
        done: !0
      } : (t = o(e, n), this._i += t.length, {
        value: t,
        done: !1
      });
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(89)(!1);
    o(o.P, "String", {
      codePointAt: function codePointAt(t) {
        return i(this, t);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(16),
        r = n(91),
        a = "".endsWith;
    o(o.P + o.F * n(93)("endsWith"), "String", {
      endsWith: function endsWith(t) {
        var e = r(this, t, "endsWith"),
            n = arguments.length > 1 ? arguments[1] : void 0,
            o = i(e.length),
            s = void 0 === n ? o : Math.min(i(n), o),
            l = String(t);
        return a ? a.call(e, l, s) : e.slice(s - l.length, s) === l;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(91);
    o(o.P + o.F * n(93)("includes"), "String", {
      includes: function includes(t) {
        return !!~i(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.P, "String", {
      repeat: n(86)
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(16),
        r = n(91),
        a = "".startsWith;
    o(o.P + o.F * n(93)("startsWith"), "String", {
      startsWith: function startsWith(t) {
        var e = r(this, t, "startsWith"),
            n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
            o = String(t);
        return a ? a.call(e, o, n) : e.slice(n, n + o.length) === o;
      }
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("anchor", function (t) {
      return function (e) {
        return t(this, "a", "name", e);
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("big", function (t) {
      return function () {
        return t(this, "big", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("blink", function (t) {
      return function () {
        return t(this, "blink", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("bold", function (t) {
      return function () {
        return t(this, "b", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("fixed", function (t) {
      return function () {
        return t(this, "tt", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("fontcolor", function (t) {
      return function (e) {
        return t(this, "font", "color", e);
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("fontsize", function (t) {
      return function (e) {
        return t(this, "font", "size", e);
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("italics", function (t) {
      return function () {
        return t(this, "i", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("link", function (t) {
      return function (e) {
        return t(this, "a", "href", e);
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("small", function (t) {
      return function () {
        return t(this, "small", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("strike", function (t) {
      return function () {
        return t(this, "strike", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("sub", function (t) {
      return function () {
        return t(this, "sub", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("sup", function (t) {
      return function () {
        return t(this, "sup", "", "");
      };
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Date", {
      now: function now() {
        return new Date().getTime();
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(20),
        r = n(38);
    o(o.P + o.F * n(9)(function () {
      return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
        toISOString: function toISOString() {
          return 1;
        }
      });
    }), "Date", {
      toJSON: function toJSON(t) {
        var e = i(this),
            n = r(e);
        return "number" != typeof n || isFinite(n) ? e.toISOString() : null;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(255);
    o(o.P + o.F * (Date.prototype.toISOString !== i), "Date", {
      toISOString: i
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(9),
        i = Date.prototype.getTime,
        r = Date.prototype.toISOString,
        a = function a(t) {
      return t > 9 ? t : "0" + t;
    };

    t.exports = o(function () {
      return "0385-07-25T07:06:39.999Z" != r.call(new Date(-5e13 - 1));
    }) || !o(function () {
      r.call(new Date(NaN));
    }) ? function () {
      if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
      var t = this,
          e = t.getUTCFullYear(),
          n = t.getUTCMilliseconds(),
          o = e < 0 ? "-" : e > 9999 ? "+" : "";
      return o + ("00000" + Math.abs(e)).slice(o ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z";
    } : r;
  }, function (t, e, n) {
    var o = Date.prototype,
        i = o.toString,
        r = o.getTime;
    new Date(NaN) + "" != "Invalid Date" && n(21)(o, "toString", function () {
      var t = r.call(this);
      return t == t ? i.call(this) : "Invalid Date";
    });
  }, function (t, e, n) {
    var o = n(12)("toPrimitive"),
        i = Date.prototype;
    o in i || n(24)(i, o, n(258));
  }, function (t, e, n) {
    "use strict";

    var o = n(10),
        i = n(38);

    t.exports = function (t) {
      if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
      return i(o(this), "number" != t);
    };
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Array", {
      isArray: n(67)
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(29),
        i = n(0),
        r = n(20),
        a = n(119),
        s = n(94),
        l = n(16),
        c = n(95),
        u = n(96);
    i(i.S + i.F * !n(68)(function (t) {
      Array.from(t);
    }), "Array", {
      from: function from(t) {
        var e,
            n,
            i,
            f,
            d = r(t),
            p = "function" == typeof this ? this : Array,
            h = arguments.length,
            v = h > 1 ? arguments[1] : void 0,
            g = void 0 !== v,
            y = 0,
            b = u(d);
        if (g && (v = o(v, h > 2 ? arguments[2] : void 0, 2)), null == b || p == Array && s(b)) for (n = new p(e = l(d.length)); e > y; y++) {
          c(n, y, g ? v(d[y], y) : d[y]);
        } else for (f = b.call(d), n = new p(); !(i = f.next()).done; y++) {
          c(n, y, g ? a(f, v, [i.value, y], !0) : i.value);
        }
        return n.length = y, n;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(95);
    o(o.S + o.F * n(9)(function () {
      function t() {}

      return !(Array.of.call(t) instanceof t);
    }), "Array", {
      of: function of() {
        for (var t = 0, e = arguments.length, n = new ("function" == typeof this ? this : Array)(e); e > t;) {
          i(n, t, arguments[t++]);
        }

        return n.length = e, n;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(25),
        r = [].join;
    o(o.P + o.F * (n(60) != Object || !n(26)(r)), "Array", {
      join: function join(t) {
        return r.call(i(this), void 0 === t ? "," : t);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(82),
        r = n(35),
        a = n(44),
        s = n(16),
        l = [].slice;
    o(o.P + o.F * n(9)(function () {
      i && l.call(i);
    }), "Array", {
      slice: function slice(t, e) {
        var n = s(this.length),
            o = r(this);
        if (e = void 0 === e ? n : e, "Array" == o) return l.call(this, t, e);

        for (var i = a(t, n), c = a(e, n), u = s(c - i), f = new Array(u), d = 0; d < u; d++) {
          f[d] = "String" == o ? this.charAt(i + d) : this[i + d];
        }

        return f;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(30),
        r = n(20),
        a = n(9),
        s = [].sort,
        l = [1, 2, 3];
    o(o.P + o.F * (a(function () {
      l.sort(void 0);
    }) || !a(function () {
      l.sort(null);
    }) || !n(26)(s)), "Array", {
      sort: function sort(t) {
        return void 0 === t ? s.call(r(this)) : s.call(r(this), i(t));
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(34)(0),
        r = n(26)([].forEach, !0);
    o(o.P + o.F * !r, "Array", {
      forEach: function forEach(t) {
        return i(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    var o = n(11),
        i = n(67),
        r = n(12)("species");

    t.exports = function (t) {
      var e;
      return i(t) && ("function" != typeof (e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0), o(e) && null === (e = e[r]) && (e = void 0)), void 0 === e ? Array : e;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(34)(1);
    o(o.P + o.F * !n(26)([].map, !0), "Array", {
      map: function map(t) {
        return i(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(34)(2);
    o(o.P + o.F * !n(26)([].filter, !0), "Array", {
      filter: function filter(t) {
        return i(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(34)(3);
    o(o.P + o.F * !n(26)([].some, !0), "Array", {
      some: function some(t) {
        return i(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(34)(4);
    o(o.P + o.F * !n(26)([].every, !0), "Array", {
      every: function every(t) {
        return i(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(121);
    o(o.P + o.F * !n(26)([].reduce, !0), "Array", {
      reduce: function reduce(t) {
        return i(this, t, arguments.length, arguments[1], !1);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(121);
    o(o.P + o.F * !n(26)([].reduceRight, !0), "Array", {
      reduceRight: function reduceRight(t) {
        return i(this, t, arguments.length, arguments[1], !0);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(65)(!1),
        r = [].indexOf,
        a = !!r && 1 / [1].indexOf(1, -0) < 0;
    o(o.P + o.F * (a || !n(26)(r)), "Array", {
      indexOf: function indexOf(t) {
        return a ? r.apply(this, arguments) || 0 : i(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(25),
        r = n(31),
        a = n(16),
        s = [].lastIndexOf,
        l = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
    o(o.P + o.F * (l || !n(26)(s)), "Array", {
      lastIndexOf: function lastIndexOf(t) {
        if (l) return s.apply(this, arguments) || 0;
        var e = i(this),
            n = a(e.length),
            o = n - 1;

        for (arguments.length > 1 && (o = Math.min(o, r(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--) {
          if (o in e && e[o] === t) return o || 0;
        }

        return -1;
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.P, "Array", {
      copyWithin: n(122)
    }), n(48)("copyWithin");
  }, function (t, e, n) {
    var o = n(0);
    o(o.P, "Array", {
      fill: n(97)
    }), n(48)("fill");
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(34)(5),
        r = !0;
    "find" in [] && Array(1).find(function () {
      r = !1;
    }), o(o.P + o.F * r, "Array", {
      find: function find(t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), n(48)("find");
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(34)(6),
        r = "findIndex",
        a = !0;
    r in [] && Array(1)[r](function () {
      a = !1;
    }), o(o.P + o.F * a, "Array", {
      findIndex: function findIndex(t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), n(48)(r);
  }, function (t, e, n) {
    n(55)("Array");
  }, function (t, e, n) {
    var o = n(8),
        i = n(85),
        r = n(19).f,
        a = n(46).f,
        s = n(92),
        l = n(69),
        _c = o.RegExp,
        u = _c,
        f = _c.prototype,
        d = /a/g,
        p = /a/g,
        h = new _c(d) !== d;

    if (n(18) && (!h || n(9)(function () {
      return p[n(12)("match")] = !1, _c(d) != d || _c(p) == p || "/a/i" != _c(d, "i");
    }))) {
      _c = function c(t, e) {
        var n = this instanceof _c,
            o = s(t),
            r = void 0 === e;
        return !n && o && t.constructor === _c && r ? t : i(h ? new u(o && !r ? t.source : t, e) : u((o = t instanceof _c) ? t.source : t, o && r ? l.call(t) : e), n ? this : f, _c);
      };

      for (var v = function v(t) {
        (t in _c) || r(_c, t, {
          configurable: !0,
          get: function get() {
            return u[t];
          },
          set: function set(e) {
            u[t] = e;
          }
        });
      }, g = a(u), y = 0; g.length > y;) {
        v(g[y++]);
      }

      f.constructor = _c, _c.prototype = f, n(21)(o, "RegExp", _c);
    }

    n(55)("RegExp");
  }, function (t, e, n) {
    "use strict";

    n(125);

    var o = n(10),
        i = n(69),
        r = n(18),
        a = /./.toString,
        s = function s(t) {
      n(21)(RegExp.prototype, "toString", t, !0);
    };

    n(9)(function () {
      return "/a/b" != a.call({
        source: "a",
        flags: "b"
      });
    }) ? s(function () {
      var t = o(this);
      return "/".concat(t.source, "/", "flags" in t ? t.flags : !r && t instanceof RegExp ? i.call(t) : void 0);
    }) : "toString" != a.name && s(function () {
      return a.call(this);
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(10),
        i = n(16),
        r = n(100),
        a = n(70);
    n(71)("match", 1, function (t, e, n, s) {
      return [function (n) {
        var o = t(this),
            i = null == n ? void 0 : n[e];
        return void 0 !== i ? i.call(n, o) : new RegExp(n)[e](String(o));
      }, function (t) {
        var e = s(n, t, this);
        if (e.done) return e.value;
        var l = o(t),
            c = String(this);
        if (!l.global) return a(l, c);
        var u = l.unicode;
        l.lastIndex = 0;

        for (var f, d = [], p = 0; null !== (f = a(l, c));) {
          var h = String(f[0]);
          d[p] = h, "" === h && (l.lastIndex = r(c, i(l.lastIndex), u)), p++;
        }

        return 0 === p ? null : d;
      }];
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(10),
        i = n(20),
        r = n(16),
        a = n(31),
        s = n(100),
        l = n(70),
        c = Math.max,
        u = Math.min,
        f = Math.floor,
        d = /\$([$&`']|\d\d?|<[^>]*>)/g,
        p = /\$([$&`']|\d\d?)/g;
    n(71)("replace", 2, function (t, e, n, h) {
      return [function (o, i) {
        var r = t(this),
            a = null == o ? void 0 : o[e];
        return void 0 !== a ? a.call(o, r, i) : n.call(String(r), o, i);
      }, function (t, e) {
        var i = h(n, t, this, e);
        if (i.done) return i.value;
        var f = o(t),
            d = String(this),
            p = "function" == typeof e;
        p || (e = String(e));
        var g = f.global;

        if (g) {
          var y = f.unicode;
          f.lastIndex = 0;
        }

        for (var b = [];;) {
          var m = l(f, d);
          if (null === m) break;
          if (b.push(m), !g) break;
          "" === String(m[0]) && (f.lastIndex = s(d, r(f.lastIndex), y));
        }

        for (var k, x = "", w = 0, S = 0; S < b.length; S++) {
          m = b[S];

          for (var E = String(m[0]), T = c(u(a(m.index), d.length), 0), C = [], B = 1; B < m.length; B++) {
            C.push(void 0 === (k = m[B]) ? k : String(k));
          }

          var _ = m.groups;

          if (p) {
            var I = [E].concat(C, T, d);
            void 0 !== _ && I.push(_);
            var O = String(e.apply(void 0, I));
          } else O = v(E, d, T, C, _, e);

          T >= w && (x += d.slice(w, T) + O, w = T + E.length);
        }

        return x + d.slice(w);
      }];

      function v(t, e, o, r, a, s) {
        var l = o + t.length,
            c = r.length,
            u = p;
        return void 0 !== a && (a = i(a), u = d), n.call(s, u, function (n, i) {
          var s;

          switch (i.charAt(0)) {
            case "$":
              return "$";

            case "&":
              return t;

            case "`":
              return e.slice(0, o);

            case "'":
              return e.slice(l);

            case "<":
              s = a[i.slice(1, -1)];
              break;

            default:
              var u = +i;
              if (0 === u) return n;

              if (u > c) {
                var d = f(u / 10);
                return 0 === d ? n : d <= c ? void 0 === r[d - 1] ? i.charAt(1) : r[d - 1] + i.charAt(1) : n;
              }

              s = r[u - 1];
          }

          return void 0 === s ? "" : s;
        });
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(10),
        i = n(110),
        r = n(70);
    n(71)("search", 1, function (t, e, n, a) {
      return [function (n) {
        var o = t(this),
            i = null == n ? void 0 : n[e];
        return void 0 !== i ? i.call(n, o) : new RegExp(n)[e](String(o));
      }, function (t) {
        var e = a(n, t, this);
        if (e.done) return e.value;
        var s = o(t),
            l = String(this),
            c = s.lastIndex;
        i(c, 0) || (s.lastIndex = 0);
        var u = r(s, l);
        return i(s.lastIndex, c) || (s.lastIndex = c), null === u ? -1 : u.index;
      }];
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(92),
        i = n(10),
        r = n(63),
        a = n(100),
        s = n(16),
        l = n(70),
        c = n(99),
        u = n(9),
        f = Math.min,
        d = [].push,
        p = !u(function () {
      RegExp(4294967295, "y");
    });
    n(71)("split", 2, function (t, e, n, u) {
      var h;
      return h = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, e) {
        var i = String(this);
        if (void 0 === t && 0 === e) return [];
        if (!o(t)) return n.call(i, t, e);

        for (var r, a, s, l = [], u = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, p = void 0 === e ? 4294967295 : e >>> 0, h = new RegExp(t.source, u + "g"); (r = c.call(h, i)) && !((a = h.lastIndex) > f && (l.push(i.slice(f, r.index)), r.length > 1 && r.index < i.length && d.apply(l, r.slice(1)), s = r[0].length, f = a, l.length >= p));) {
          h.lastIndex === r.index && h.lastIndex++;
        }

        return f === i.length ? !s && h.test("") || l.push("") : l.push(i.slice(f)), l.length > p ? l.slice(0, p) : l;
      } : "0".split(void 0, 0).length ? function (t, e) {
        return void 0 === t && 0 === e ? [] : n.call(this, t, e);
      } : n, [function (n, o) {
        var i = t(this),
            r = null == n ? void 0 : n[e];
        return void 0 !== r ? r.call(n, i, o) : h.call(String(i), n, o);
      }, function (t, e) {
        var o = u(h, t, this, e, h !== n);
        if (o.done) return o.value;
        var c = i(t),
            d = String(this),
            v = r(c, RegExp),
            g = c.unicode,
            y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (p ? "y" : "g"),
            b = new v(p ? c : "^(?:" + c.source + ")", y),
            m = void 0 === e ? 4294967295 : e >>> 0;
        if (0 === m) return [];
        if (0 === d.length) return null === l(b, d) ? [d] : [];

        for (var k = 0, x = 0, w = []; x < d.length;) {
          b.lastIndex = p ? x : 0;
          var S,
              E = l(b, p ? d : d.slice(x));
          if (null === E || (S = f(s(b.lastIndex + (p ? 0 : x)), d.length)) === k) x = a(d, x, g);else {
            if (w.push(d.slice(k, x)), w.length === m) return w;

            for (var T = 1; T <= E.length - 1; T++) {
              if (w.push(E[T]), w.length === m) return w;
            }

            x = k = S;
          }
        }

        return w.push(d.slice(k)), w;
      }];
    });
  }, function (t, e, n) {
    var o = n(8),
        i = n(101).set,
        r = o.MutationObserver || o.WebKitMutationObserver,
        a = o.process,
        s = o.Promise,
        l = "process" == n(35)(a);

    t.exports = function () {
      var t,
          e,
          n,
          c = function c() {
        var o, i;

        for (l && (o = a.domain) && o.exit(); t;) {
          i = t.fn, t = t.next;

          try {
            i();
          } catch (o) {
            throw t ? n() : e = void 0, o;
          }
        }

        e = void 0, o && o.enter();
      };

      if (l) n = function n() {
        a.nextTick(c);
      };else if (!r || o.navigator && o.navigator.standalone) {
        if (s && s.resolve) {
          var u = s.resolve(void 0);

          n = function n() {
            u.then(c);
          };
        } else n = function n() {
          i.call(o, c);
        };
      } else {
        var f = !0,
            d = document.createTextNode("");
        new r(c).observe(d, {
          characterData: !0
        }), n = function n() {
          d.data = f = !f;
        };
      }
      return function (o) {
        var i = {
          fn: o,
          next: void 0
        };
        e && (e.next = i), t || (t = i, n()), e = i;
      };
    };
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return {
          e: !1,
          v: t()
        };
      } catch (t) {
        return {
          e: !0,
          v: t
        };
      }
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(129),
        i = n(49);
    t.exports = n(74)("Map", function (t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    }, {
      get: function get(t) {
        var e = o.getEntry(i(this, "Map"), t);
        return e && e.v;
      },
      set: function set(t, e) {
        return o.def(i(this, "Map"), 0 === t ? 0 : t, e);
      }
    }, o, !0);
  }, function (t, e, n) {
    "use strict";

    var o = n(129),
        i = n(49);
    t.exports = n(74)("Set", function (t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    }, {
      add: function add(t) {
        return o.def(i(this, "Set"), t = 0 === t ? 0 : t, t);
      }
    }, o);
  }, function (t, e, n) {
    "use strict";

    var o,
        i = n(8),
        r = n(34)(0),
        a = n(21),
        s = n(39),
        l = n(109),
        c = n(130),
        u = n(11),
        f = n(49),
        d = n(49),
        p = !i.ActiveXObject && "ActiveXObject" in i,
        h = s.getWeak,
        v = Object.isExtensible,
        g = c.ufstore,
        y = function y(t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    },
        b = {
      get: function get(t) {
        if (u(t)) {
          var e = h(t);
          return !0 === e ? g(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0;
        }
      },
      set: function set(t, e) {
        return c.def(f(this, "WeakMap"), t, e);
      }
    },
        m = t.exports = n(74)("WeakMap", y, b, c, !0, !0);

    d && p && (l((o = c.getConstructor(y, "WeakMap")).prototype, b), s.NEED = !0, r(["delete", "has", "get", "set"], function (t) {
      var e = m.prototype,
          n = e[t];
      a(e, t, function (e, i) {
        if (u(e) && !v(e)) {
          this._f || (this._f = new o());

          var r = this._f[t](e, i);

          return "set" == t ? this : r;
        }

        return n.call(this, e, i);
      });
    }));
  }, function (t, e, n) {
    "use strict";

    var o = n(130),
        i = n(49);
    n(74)("WeakSet", function (t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    }, {
      add: function add(t) {
        return o.def(i(this, "WeakSet"), t, !0);
      }
    }, o, !1, !0);
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(75),
        r = n(102),
        a = n(10),
        s = n(44),
        l = n(16),
        c = n(11),
        u = n(8).ArrayBuffer,
        f = n(63),
        d = r.ArrayBuffer,
        p = r.DataView,
        h = i.ABV && u.isView,
        v = d.prototype.slice,
        g = i.VIEW;
    o(o.G + o.W + o.F * (u !== d), {
      ArrayBuffer: d
    }), o(o.S + o.F * !i.CONSTR, "ArrayBuffer", {
      isView: function isView(t) {
        return h && h(t) || c(t) && g in t;
      }
    }), o(o.P + o.U + o.F * n(9)(function () {
      return !new d(2).slice(1, void 0).byteLength;
    }), "ArrayBuffer", {
      slice: function slice(t, e) {
        if (void 0 !== v && void 0 === e) return v.call(a(this), t);

        for (var n = a(this).byteLength, o = s(t, n), i = s(void 0 === e ? n : e, n), r = new (f(this, d))(l(i - o)), c = new p(this), u = new p(r), h = 0; o < i;) {
          u.setUint8(h++, c.getUint8(o++));
        }

        return r;
      }
    }), n(55)("ArrayBuffer");
  }, function (t, e, n) {
    var o = n(0);
    o(o.G + o.W + o.F * !n(75).ABV, {
      DataView: n(102).DataView
    });
  }, function (t, e, n) {
    n(37)("Int8", 1, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    n(37)("Uint8", 1, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    n(37)("Uint8", 1, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    }, !0);
  }, function (t, e, n) {
    n(37)("Int16", 2, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    n(37)("Uint16", 2, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    n(37)("Int32", 4, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    n(37)("Uint32", 4, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    n(37)("Float32", 4, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    n(37)("Float64", 8, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(30),
        r = n(10),
        a = (n(8).Reflect || {}).apply,
        s = Function.apply;
    o(o.S + o.F * !n(9)(function () {
      a(function () {});
    }), "Reflect", {
      apply: function apply(t, e, n) {
        var o = i(t),
            l = r(n);
        return a ? a(o, e, l) : s.call(o, e, l);
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(45),
        r = n(30),
        a = n(10),
        s = n(11),
        l = n(9),
        c = n(111),
        u = (n(8).Reflect || {}).construct,
        f = l(function () {
      function t() {}

      return !(u(function () {}, [], t) instanceof t);
    }),
        d = !l(function () {
      u(function () {});
    });
    o(o.S + o.F * (f || d), "Reflect", {
      construct: function construct(t, e) {
        r(t), a(e);
        var n = arguments.length < 3 ? t : r(arguments[2]);
        if (d && !f) return u(t, e, n);

        if (t == n) {
          switch (e.length) {
            case 0:
              return new t();

            case 1:
              return new t(e[0]);

            case 2:
              return new t(e[0], e[1]);

            case 3:
              return new t(e[0], e[1], e[2]);

            case 4:
              return new t(e[0], e[1], e[2], e[3]);
          }

          var o = [null];
          return o.push.apply(o, e), new (c.apply(t, o))();
        }

        var l = n.prototype,
            p = i(s(l) ? l : Object.prototype),
            h = Function.apply.call(t, p, e);
        return s(h) ? h : p;
      }
    });
  }, function (t, e, n) {
    var o = n(19),
        i = n(0),
        r = n(10),
        a = n(38);
    i(i.S + i.F * n(9)(function () {
      Reflect.defineProperty(o.f({}, 1, {
        value: 1
      }), 1, {
        value: 2
      });
    }), "Reflect", {
      defineProperty: function defineProperty(t, e, n) {
        r(t), e = a(e, !0), r(n);

        try {
          return o.f(t, e, n), !0;
        } catch (t) {
          return !1;
        }
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(32).f,
        r = n(10);
    o(o.S, "Reflect", {
      deleteProperty: function deleteProperty(t, e) {
        var n = i(r(t), e);
        return !(n && !n.configurable) && delete t[e];
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(10),
        r = function r(t) {
      this._t = i(t), this._i = 0;
      var e,
          n = this._k = [];

      for (e in t) {
        n.push(e);
      }
    };

    n(118)(r, "Object", function () {
      var t,
          e = this._k;

      do {
        if (this._i >= e.length) return {
          value: void 0,
          done: !0
        };
      } while (!((t = e[this._i++]) in this._t));

      return {
        value: t,
        done: !1
      };
    }), o(o.S, "Reflect", {
      enumerate: function enumerate(t) {
        return new r(t);
      }
    });
  }, function (t, e, n) {
    var o = n(32),
        i = n(47),
        r = n(23),
        a = n(0),
        s = n(11),
        l = n(10);
    a(a.S, "Reflect", {
      get: function t(e, n) {
        var a,
            c,
            u = arguments.length < 3 ? e : arguments[2];
        return l(e) === u ? e[n] : (a = o.f(e, n)) ? r(a, "value") ? a.value : void 0 !== a.get ? a.get.call(u) : void 0 : s(c = i(e)) ? t(c, n, u) : void 0;
      }
    });
  }, function (t, e, n) {
    var o = n(32),
        i = n(0),
        r = n(10);
    i(i.S, "Reflect", {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
        return o.f(r(t), e);
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(47),
        r = n(10);
    o(o.S, "Reflect", {
      getPrototypeOf: function getPrototypeOf(t) {
        return i(r(t));
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Reflect", {
      has: function has(t, e) {
        return e in t;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(10),
        r = Object.isExtensible;
    o(o.S, "Reflect", {
      isExtensible: function isExtensible(t) {
        return i(t), !r || r(t);
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Reflect", {
      ownKeys: n(132)
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(10),
        r = Object.preventExtensions;
    o(o.S, "Reflect", {
      preventExtensions: function preventExtensions(t) {
        i(t);

        try {
          return r && r(t), !0;
        } catch (t) {
          return !1;
        }
      }
    });
  }, function (t, e, n) {
    var o = n(19),
        i = n(32),
        r = n(47),
        a = n(23),
        s = n(0),
        l = n(40),
        c = n(10),
        u = n(11);
    s(s.S, "Reflect", {
      set: function t(e, n, s) {
        var f,
            d,
            p = arguments.length < 4 ? e : arguments[3],
            h = i.f(c(e), n);

        if (!h) {
          if (u(d = r(e))) return t(d, n, s, p);
          h = l(0);
        }

        if (a(h, "value")) {
          if (!1 === h.writable || !u(p)) return !1;

          if (f = i.f(p, n)) {
            if (f.get || f.set || !1 === f.writable) return !1;
            f.value = s, o.f(p, n, f);
          } else o.f(p, n, l(0, s));

          return !0;
        }

        return void 0 !== h.set && (h.set.call(p, s), !0);
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(83);
    i && o(o.S, "Reflect", {
      setPrototypeOf: function setPrototypeOf(t, e) {
        i.check(t, e);

        try {
          return i.set(t, e), !0;
        } catch (t) {
          return !1;
        }
      }
    });
  }, function (t, e, n) {
    n(318), t.exports = n(17).Array.includes;
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(65)(!0);
    o(o.P, "Array", {
      includes: function includes(t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), n(48)("includes");
  }, function (t, e, n) {
    n(320), t.exports = n(17).Array.flatMap;
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(321),
        r = n(20),
        a = n(16),
        s = n(30),
        l = n(120);
    o(o.P, "Array", {
      flatMap: function flatMap(t) {
        var e,
            n,
            o = r(this);
        return s(t), e = a(o.length), n = l(o, 0), i(n, o, o, e, 0, 1, t, arguments[1]), n;
      }
    }), n(48)("flatMap");
  }, function (t, e, n) {
    "use strict";

    var o = n(67),
        i = n(11),
        r = n(16),
        a = n(29),
        s = n(12)("isConcatSpreadable");

    t.exports = function t(e, n, l, c, u, f, d, p) {
      for (var h, v, g = u, y = 0, b = !!d && a(d, p, 3); y < c;) {
        if (y in l) {
          if (h = b ? b(l[y], y, n) : l[y], v = !1, i(h) && (v = void 0 !== (v = h[s]) ? !!v : o(h)), v && f > 0) g = t(e, n, h, r(h.length), g, f - 1) - 1;else {
            if (g >= 9007199254740991) throw TypeError();
            e[g] = h;
          }
          g++;
        }

        y++;
      }

      return g;
    };
  }, function (t, e, n) {
    n(323), t.exports = n(17).String.padStart;
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(133),
        r = n(73),
        a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);
    o(o.P + o.F * a, "String", {
      padStart: function padStart(t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0);
      }
    });
  }, function (t, e, n) {
    n(325), t.exports = n(17).String.padEnd;
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(133),
        r = n(73),
        a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);
    o(o.P + o.F * a, "String", {
      padEnd: function padEnd(t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1);
      }
    });
  }, function (t, e, n) {
    n(327), t.exports = n(17).String.trimLeft;
  }, function (t, e, n) {
    "use strict";

    n(53)("trimLeft", function (t) {
      return function () {
        return t(this, 1);
      };
    }, "trimStart");
  }, function (t, e, n) {
    n(329), t.exports = n(17).String.trimRight;
  }, function (t, e, n) {
    "use strict";

    n(53)("trimRight", function (t) {
      return function () {
        return t(this, 2);
      };
    }, "trimEnd");
  }, function (t, e, n) {
    n(331), t.exports = n(79).f("asyncIterator");
  }, function (t, e, n) {
    n(105)("asyncIterator");
  }, function (t, e, n) {
    n(333), t.exports = n(17).Object.getOwnPropertyDescriptors;
  }, function (t, e, n) {
    var o = n(0),
        i = n(132),
        r = n(25),
        a = n(32),
        s = n(95);
    o(o.S, "Object", {
      getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
        for (var e, n, o = r(t), l = a.f, c = i(o), u = {}, f = 0; c.length > f;) {
          void 0 !== (n = l(o, e = c[f++])) && s(u, e, n);
        }

        return u;
      }
    });
  }, function (t, e, n) {
    n(335), t.exports = n(17).Object.values;
  }, function (t, e, n) {
    var o = n(0),
        i = n(134)(!1);
    o(o.S, "Object", {
      values: function values(t) {
        return i(t);
      }
    });
  }, function (t, e, n) {
    n(337), t.exports = n(17).Object.entries;
  }, function (t, e, n) {
    var o = n(0),
        i = n(134)(!0);
    o(o.S, "Object", {
      entries: function entries(t) {
        return i(t);
      }
    });
  }, function (t, e, n) {
    "use strict";

    n(126), n(339), t.exports = n(17).Promise.finally;
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(17),
        r = n(8),
        a = n(63),
        s = n(128);
    o(o.P + o.R, "Promise", {
      finally: function _finally(t) {
        var e = a(this, i.Promise || r.Promise),
            n = "function" == typeof t;
        return this.then(n ? function (n) {
          return s(e, t()).then(function () {
            return n;
          });
        } : t, n ? function (n) {
          return s(e, t()).then(function () {
            throw n;
          });
        } : t);
      }
    });
  }, function (t, e, n) {
    n(341), n(342), n(343), t.exports = n(17);
  }, function (t, e, n) {
    var o = n(8),
        i = n(0),
        r = n(73),
        a = [].slice,
        s = /MSIE .\./.test(r),
        l = function l(t) {
      return function (e, n) {
        var o = arguments.length > 2,
            i = !!o && a.call(arguments, 2);
        return t(o ? function () {
          ("function" == typeof e ? e : Function(e)).apply(this, i);
        } : e, n);
      };
    };

    i(i.G + i.B + i.F * s, {
      setTimeout: l(o.setTimeout),
      setInterval: l(o.setInterval)
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(101);
    o(o.G + o.B, {
      setImmediate: i.set,
      clearImmediate: i.clear
    });
  }, function (t, e, n) {
    for (var o = n(98), i = n(43), r = n(21), a = n(8), s = n(24), l = n(54), c = n(12), u = c("iterator"), f = c("toStringTag"), d = l.Array, p = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    }, h = i(p), v = 0; v < h.length; v++) {
      var g,
          y = h[v],
          b = p[y],
          m = a[y],
          k = m && m.prototype;
      if (k && (k[u] || s(k, u, d), k[f] || s(k, f, y), l[y] = d, b)) for (g in o) {
        k[g] || r(k, g, o[g], !0);
      }
    }
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(50), n(51), n(2), n(3), n(348), n(350), n(351)], void 0 === (r = "function" == typeof (o = function o(_o44, i, r, a, s, l, c, u) {
      "use strict";

      var f = n(1);
      Object.defineProperty(_o44, "__esModule", {
        value: !0
      }), _o44.default = void 0, i = f(i), r = f(r), a = f(a), s = f(s), u = f(u);

      var d = function () {
        function t(e) {
          var n = this;
          (0, a.default)(this, t);

          var o = function o() {};

          "object" === (0, r.default)(e) && "function" == typeof e.onReady && (o = e.onReady);
          var i = new u.default(e);
          this.isReady = i.isReady.then(function () {
            n.exportAPI(i), o();
          });
        }

        return (0, s.default)(t, [{
          key: "exportAPI",
          value: function value(t) {
            var e = this;
            ["configuration"].forEach(function (n) {
              e[n] = t[n];
            }), this.destroy = function () {
              for (var n in t.moduleInstances.Listeners.removeAll(), t.moduleInstances.UI.destroy(), t.moduleInstances.ModificationsObserver.destroy(), t = null, e) {
                e.hasOwnProperty(n) && delete e[n];
              }

              Object.setPrototypeOf(e, null);
            }, Object.setPrototypeOf(this, t.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
              blocks: {
                clear: "clear",
                render: "render"
              },
              caret: {
                focus: "focus"
              },
              events: {
                on: "on",
                off: "off",
                emit: "emit"
              },
              saver: {
                save: "save"
              }
            }).forEach(function (n) {
              var o = (0, i.default)(n, 2),
                  r = o[0],
                  a = o[1];
              Object.entries(a).forEach(function (n) {
                var o = (0, i.default)(n, 2),
                    a = o[0],
                    s = o[1];
                e[s] = t.moduleInstances.API.methods[r][a];
              });
            });
          }
        }], [{
          key: "version",
          get: function get() {
            return "2.16.1";
          }
        }]), t;
      }();

      _o44.default = d, d.displayName = "EditorJS", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) return t;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
        var n = [],
            o = !0,
            i = !1,
            r = void 0;

        try {
          for (var a, s = t[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); o = !0) {
            ;
          }
        } catch (t) {
          i = !0, r = t;
        } finally {
          try {
            o || null == s.return || s.return();
          } finally {
            if (i) throw r;
          }
        }

        return n;
      }
    };
  }, function (t, e) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }, function (t, e, n) {
    (e = t.exports = function () {
      return i.apply(void 0, arguments);
    }).__esModule = !0;
    var o = n(349),
        i = o.default;
    Object.assign(e, o);
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function () {}, e.revert = function () {};
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [], void 0 === (r = "function" == typeof (o = function o() {
      "use strict";

      Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (t) {
        for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;) {
          ;
        }

        return n > -1;
      }), Element.prototype.closest || (Element.prototype.closest = function (t) {
        var e = this;
        if (!document.documentElement.contains(e)) return null;

        do {
          if (e.matches(t)) return e;
          e = e.parentElement || e.parentNode;
        } while (null !== e);

        return null;
      }), Element.prototype.prepend || (Element.prototype.prepend = function (t) {
        var e = document.createDocumentFragment();
        Array.isArray(t) || (t = [t]), t.forEach(function (t) {
          var n = t instanceof Node;
          e.appendChild(n ? t : document.createTextNode(String(t)));
        }), this.insertBefore(e, this.firstChild);
      });
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(51), n(27), n(2), n(3), n(13), n(14)], void 0 === (r = "function" == typeof (o = function o(_o45, i, r, a, s, l, c) {
      "use strict";

      var u = n(15),
          f = n(1);
      Object.defineProperty(_o45, "__esModule", {
        value: !0
      }), _o45.default = void 0, i = f(i), r = f(r), a = f(a), s = f(s), l = f(l), c = u(c);
      var d = n(356),
          p = [];
      d.keys().forEach(function (t) {
        t.match(/^\.\/[^_][\w/]*\.([tj])s$/) && p.push(d(t));
      });

      var h = function () {
        function t(e) {
          var n,
              o,
              i = this;
          (0, a.default)(this, t), this.moduleInstances = {}, this.isReady = new Promise(function (t, e) {
            n = t, o = e;
          }), Promise.resolve().then(function () {
            return r.default.async(function (t) {
              for (;;) {
                switch (t.prev = t.next) {
                  case 0:
                    return i.configuration = e, t.next = 3, r.default.awrap(i.validate());

                  case 3:
                    return t.next = 5, r.default.awrap(i.init());

                  case 5:
                    return t.next = 7, r.default.awrap(i.start());

                  case 7:
                    c.logLabeled("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "log", "", "color: #E24A75"), setTimeout(function () {
                      var t, e, o;
                      return r.default.async(function (a) {
                        for (;;) {
                          switch (a.prev = a.next) {
                            case 0:
                              return a.next = 2, r.default.awrap(i.render());

                            case 2:
                              i.configuration.autofocus && (t = i.moduleInstances, e = t.BlockManager, (o = t.Caret).setToBlock(e.blocks[0], o.positions.START)), i.moduleInstances.UI.removeLoader(), n();

                            case 5:
                            case "end":
                              return a.stop();
                          }
                        }
                      });
                    }, 500);

                  case 9:
                  case "end":
                    return t.stop();
                }
              }
            });
          }).catch(function (t) {
            c.log("Editor.js is not ready because of ".concat(t), "error"), o(t);
          });
        }

        return (0, s.default)(t, [{
          key: "validate",
          value: function value() {
            var t, e, n;
            return r.default.async(function (o) {
              for (;;) {
                switch (o.prev = o.next) {
                  case 0:
                    if (t = this.config, e = t.holderId, n = t.holder, !e || !n) {
                      o.next = 3;
                      break;
                    }

                    throw Error("«holderId» and «holder» param can't assign at the same time.");

                  case 3:
                    if ("string" != typeof n || l.default.get(n)) {
                      o.next = 5;
                      break;
                    }

                    throw Error("element with ID «".concat(n, "» is missing. Pass correct holder's ID."));

                  case 5:
                    if (!n || "object" !== (0, i.default)(n) || l.default.isElement(n)) {
                      o.next = 7;
                      break;
                    }

                    throw Error("holder as HTMLElement if provided must be inherit from Element class.");

                  case 7:
                  case "end":
                    return o.stop();
                }
              }
            }, null, this);
          }
        }, {
          key: "init",
          value: function value() {
            this.constructModules(), this.configureModules();
          }
        }, {
          key: "start",
          value: function value() {
            var t,
                e = this;
            return r.default.async(function (n) {
              for (;;) {
                switch (n.prev = n.next) {
                  case 0:
                    return t = ["Tools", "UI", "BlockManager", "Paste", "DragNDrop", "ModificationsObserver", "BlockSelection", "RectangleSelection"], n.next = 3, r.default.awrap(t.reduce(function (t, n) {
                      return t.then(function () {
                        return r.default.async(function (t) {
                          for (;;) {
                            switch (t.prev = t.next) {
                              case 0:
                                return t.prev = 0, t.next = 3, r.default.awrap(e.moduleInstances[n].prepare());

                              case 3:
                                t.next = 8;
                                break;

                              case 5:
                                t.prev = 5, t.t0 = t.catch(0), c.log("Module ".concat(n, " was skipped because of %o"), "warn", t.t0);

                              case 8:
                              case "end":
                                return t.stop();
                            }
                          }
                        }, null, null, [[0, 5]]);
                      });
                    }, Promise.resolve()));

                  case 3:
                  case "end":
                    return n.stop();
                }
              }
            });
          }
        }, {
          key: "render",
          value: function value() {
            return this.moduleInstances.Renderer.render(this.config.data.blocks);
          }
        }, {
          key: "constructModules",
          value: function value() {
            var t = this;
            p.forEach(function (e) {
              var n = "function" == typeof e ? e : e.default;

              try {
                t.moduleInstances[n.displayName] = new n({
                  config: t.configuration
                });
              } catch (t) {
                c.log("Module ".concat(n.displayName, " skipped because"), "warn", t);
              }
            });
          }
        }, {
          key: "configureModules",
          value: function value() {
            for (var t in this.moduleInstances) {
              this.moduleInstances.hasOwnProperty(t) && (this.moduleInstances[t].state = this.getModulesDiff(t));
            }
          }
        }, {
          key: "getModulesDiff",
          value: function value(t) {
            var e = {};

            for (var n in this.moduleInstances) {
              n !== t && (e[n] = this.moduleInstances[n]);
            }

            return e;
          }
        }, {
          key: "configuration",
          set: function set(t) {
            "object" !== (0, i.default)(t) && (t = {
              holder: t
            }), t.holderId && !t.holder && (t.holder = t.holderId, t.holderId = null, c.log("holderId property will deprecated in next major release, use holder property instead.", "warn")), this.config = t, null == this.config.holder && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = c.LogLevels.VERBOSE), c.setLogLevel(this.config.logLevel), this.config.initialBlock = this.config.initialBlock || "paragraph", this.config.minHeight = void 0 !== this.config.minHeight ? this.config.minHeight : 300;
            var e = {
              type: this.config.initialBlock,
              data: {}
            };
            this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
              p: !0,
              b: !0,
              a: !0
            }, this.config.hideToolbar = !!this.config.hideToolbar && this.config.hideToolbar, this.config.tools = this.config.tools || {}, this.config.data = this.config.data || {}, this.config.onReady = this.config.onReady || function () {}, this.config.onChange = this.config.onChange || function () {}, c.isEmpty(this.config.data) ? (this.config.data = {}, this.config.data.blocks = [e]) : this.config.data.blocks && 0 !== this.config.data.blocks.length || (this.config.data.blocks = [e]);
          },
          get: function get() {
            return this.config;
          }
        }]), t;
      }();

      _o45.default = h, h.displayName = "Core", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) {
          n[e] = t[e];
        }

        return n;
      }
    };
  }, function (t, e) {
    t.exports = function (t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
    };
  }, function (t, e) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    };
  }, function (t, e) {
    t.exports = function (t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    };
  }, function (t, e, n) {
    var o = {
      "./api": 76,
      "./api/": 76,
      "./api/blocks": 136,
      "./api/blocks.ts": 136,
      "./api/caret": 137,
      "./api/caret.ts": 137,
      "./api/events": 138,
      "./api/events.ts": 138,
      "./api/index": 76,
      "./api/index.ts": 76,
      "./api/inlineToolbar": 139,
      "./api/inlineToolbar.ts": 139,
      "./api/listeners": 140,
      "./api/listeners.ts": 140,
      "./api/notifier": 141,
      "./api/notifier.ts": 141,
      "./api/sanitizer": 142,
      "./api/sanitizer.ts": 142,
      "./api/saver": 143,
      "./api/saver.ts": 143,
      "./api/selection": 144,
      "./api/selection.ts": 144,
      "./api/styles": 145,
      "./api/styles.ts": 145,
      "./api/toolbar": 146,
      "./api/toolbar.ts": 146,
      "./api/tooltip": 147,
      "./api/tooltip.ts": 147,
      "./blockEvents": 148,
      "./blockEvents.ts": 148,
      "./blockManager": 149,
      "./blockManager.ts": 149,
      "./blockSelection": 150,
      "./blockSelection.ts": 150,
      "./caret": 151,
      "./caret.ts": 151,
      "./crossBlockSelection": 152,
      "./crossBlockSelection.ts": 152,
      "./dragNDrop": 153,
      "./dragNDrop.ts": 153,
      "./events": 154,
      "./events.ts": 154,
      "./listeners": 155,
      "./listeners.ts": 155,
      "./modificationsObserver": 156,
      "./modificationsObserver.ts": 156,
      "./notifier": 157,
      "./notifier.ts": 157,
      "./paste": 158,
      "./paste.ts": 158,
      "./rectangleSelection": 159,
      "./rectangleSelection.ts": 159,
      "./renderer": 160,
      "./renderer.ts": 160,
      "./sanitizer": 161,
      "./sanitizer.ts": 161,
      "./saver": 162,
      "./saver.ts": 162,
      "./shortcuts": 163,
      "./shortcuts.ts": 163,
      "./toolbar": 77,
      "./toolbar/": 77,
      "./toolbar/blockSettings": 164,
      "./toolbar/blockSettings.ts": 164,
      "./toolbar/conversion": 165,
      "./toolbar/conversion.ts": 165,
      "./toolbar/index": 77,
      "./toolbar/index.ts": 77,
      "./toolbar/inline": 166,
      "./toolbar/inline.ts": 166,
      "./toolbar/toolbox": 167,
      "./toolbar/toolbox.ts": 167,
      "./tools": 168,
      "./tools.ts": 168,
      "./tooltip": 169,
      "./tooltip.ts": 169,
      "./ui": 170,
      "./ui.ts": 170
    };

    function i(t) {
      var e = r(t);
      return n(e);
    }

    function r(t) {
      if (!n.o(o, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw e.code = "MODULE_NOT_FOUND", e;
      }

      return o[t];
    }

    i.keys = function () {
      return Object.keys(o);
    }, i.resolve = r, t.exports = i, i.id = 356;
  }, function (t, e) {
    t.exports = function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    };
  }, function (t, e) {
    function n(e, o) {
      return t.exports = n = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      }, n(e, o);
    }

    t.exports = n;
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(13)], void 0 === (r = "function" == typeof (o = function o(_o46, i, r, a) {
      "use strict";

      var s = n(1);
      Object.defineProperty(_o46, "__esModule", {
        value: !0
      }), _o46.default = void 0, i = s(i), r = s(r), a = s(a);

      var l = function () {
        function t(e, n) {
          (0, i.default)(this, t), this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = n;
        }

        return (0, r.default)(t, [{
          key: "setItems",
          value: function value(t) {
            this.items = t;
          }
        }, {
          key: "next",
          value: function value() {
            this.cursor = this.leafNodesAndReturnIndex(t.directions.RIGHT);
          }
        }, {
          key: "previous",
          value: function value() {
            this.cursor = this.leafNodesAndReturnIndex(t.directions.LEFT);
          }
        }, {
          key: "dropCursor",
          value: function value() {
            -1 !== this.cursor && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
          }
        }, {
          key: "leafNodesAndReturnIndex",
          value: function value(e) {
            if (0 === this.items.length) return this.cursor;
            var n = this.cursor;
            return -1 === n ? n = e === t.directions.RIGHT ? -1 : 0 : this.items[n].classList.remove(this.focusedCssClass), n = e === t.directions.RIGHT ? (n + 1) % this.items.length : (this.items.length + n - 1) % this.items.length, a.default.isNativeInput(this.items[n]) && this.items[n].focus(), this.items[n].classList.add(this.focusedCssClass), n;
          }
        }, {
          key: "currentItem",
          get: function get() {
            return -1 === this.cursor ? null : this.items[this.cursor];
          }
        }]), t;
      }();

      _o46.default = l, l.displayName = "DomIterator", l.directions = {
        RIGHT: "right",
        LEFT: "left"
      }, t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(13)], void 0 === (r = "function" == typeof (o = function o(_o47, i, r, a) {
      "use strict";

      var s = n(1);
      Object.defineProperty(_o47, "__esModule", {
        value: !0
      }), _o47.default = void 0, i = s(i), r = s(r), a = s(a);

      var l = function () {
        function t(e) {
          var n = e.api;
          (0, i.default)(this, t), this.CSS = {
            button: "ce-settings__button",
            wrapper: "ce-tune-move-up",
            animation: "wobble"
          }, this.api = n;
        }

        return (0, r.default)(t, [{
          key: "render",
          value: function value() {
            var t = this,
                e = a.default.make("div", [this.CSS.button, this.CSS.wrapper], {});
            return e.appendChild(a.default.svg("arrow-up", 14, 14)), this.api.listeners.on(e, "click", function (n) {
              return t.handleClick(n, e);
            }, !1), this.api.tooltip.onHover(e, "Move up"), e;
          }
        }, {
          key: "handleClick",
          value: function value(t, e) {
            var n = this,
                o = this.api.blocks.getCurrentBlockIndex();
            if (0 === o) return e.classList.add(this.CSS.animation), void window.setTimeout(function () {
              e.classList.remove(n.CSS.animation);
            }, 500);
            var i,
                r = this.api.blocks.getBlockByIndex(o),
                a = this.api.blocks.getBlockByIndex(o - 1),
                s = r.getBoundingClientRect(),
                l = a.getBoundingClientRect();
            i = l.top > 0 ? Math.abs(s.top) - Math.abs(l.top) : window.innerHeight - Math.abs(s.top) + Math.abs(l.top), window.scrollBy(0, -1 * i), this.api.blocks.swap(o, o - 1), this.api.tooltip.hide();
          }
        }]), t;
      }();

      _o47.default = l, l.displayName = "MoveUpTune", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(13)], void 0 === (r = "function" == typeof (o = function o(_o48, i, r, a) {
      "use strict";

      var s = n(1);
      Object.defineProperty(_o48, "__esModule", {
        value: !0
      }), _o48.default = void 0, i = s(i), r = s(r), a = s(a);

      var l = function () {
        function t(e) {
          var n = this,
              o = e.api;
          (0, i.default)(this, t), this.CSS = {
            button: "ce-settings__button",
            buttonDelete: "ce-settings__button--delete",
            buttonConfirm: "ce-settings__button--confirm"
          }, this.nodes = {
            button: null
          }, this.api = o, this.resetConfirmation = function () {
            n.setConfirmation(!1);
          };
        }

        return (0, r.default)(t, [{
          key: "render",
          value: function value() {
            var t = this;
            return this.nodes.button = a.default.make("div", [this.CSS.button, this.CSS.buttonDelete], {}), this.nodes.button.appendChild(a.default.svg("cross", 12, 12)), this.api.listeners.on(this.nodes.button, "click", function (e) {
              return t.handleClick(e);
            }, !1), this.api.tooltip.onHover(this.nodes.button, "Delete"), this.nodes.button;
          }
        }, {
          key: "handleClick",
          value: function value(t) {
            this.needConfirmation ? (this.api.events.off("block-settings-closed", this.resetConfirmation), this.api.blocks.delete(), this.api.toolbar.close(), this.api.tooltip.hide(), t.stopPropagation()) : (this.setConfirmation(!0), this.api.events.on("block-settings-closed", this.resetConfirmation));
          }
        }, {
          key: "setConfirmation",
          value: function value(t) {
            this.needConfirmation = t, this.nodes.button.classList.add(this.CSS.buttonConfirm);
          }
        }]), t;
      }();

      _o48.default = l, l.displayName = "DeleteTune", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(13)], void 0 === (r = "function" == typeof (o = function o(_o49, i, r, a) {
      "use strict";

      var s = n(1);
      Object.defineProperty(_o49, "__esModule", {
        value: !0
      }), _o49.default = void 0, i = s(i), r = s(r), a = s(a);

      var l = function () {
        function t(e) {
          var n = e.api;
          (0, i.default)(this, t), this.CSS = {
            button: "ce-settings__button",
            wrapper: "ce-tune-move-down",
            animation: "wobble"
          }, this.api = n;
        }

        return (0, r.default)(t, [{
          key: "render",
          value: function value() {
            var t = this,
                e = a.default.make("div", [this.CSS.button, this.CSS.wrapper], {});
            return e.appendChild(a.default.svg("arrow-down", 14, 14)), this.api.listeners.on(e, "click", function (n) {
              return t.handleClick(n, e);
            }, !1), this.api.tooltip.onHover(e, "Move down"), e;
          }
        }, {
          key: "handleClick",
          value: function value(t, e) {
            var n = this,
                o = this.api.blocks.getCurrentBlockIndex();
            if (o === this.api.blocks.getBlocksCount() - 1) return e.classList.add(this.CSS.animation), void window.setTimeout(function () {
              e.classList.remove(n.CSS.animation);
            }, 500);
            var i = this.api.blocks.getBlockByIndex(o + 1),
                r = i.getBoundingClientRect(),
                a = Math.abs(window.innerHeight - i.offsetHeight);
            r.top < window.innerHeight && (a = window.scrollY + i.offsetHeight), window.scrollTo(0, a), this.api.blocks.swap(o, o + 1), this.api.tooltip.hide();
          }
        }]), t;
      }();

      _o49.default = l, l.displayName = "MoveDownTune", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(14), n(13), n(59)], void 0 === (r = "function" == typeof (o = function o(_o50, i, r, a, s, l) {
      "use strict";

      var c = n(15),
          u = n(1);
      Object.defineProperty(_o50, "__esModule", {
        value: !0
      }), _o50.default = void 0, i = u(i), r = u(r), a = c(a), s = u(s);

      var f = function () {
        function t(e) {
          (0, i.default)(this, t), this.blocks = [], this.workingArea = e;
        }

        return (0, r.default)(t, [{
          key: "push",
          value: function value(t) {
            this.blocks.push(t), this.insertToDOM(t);
          }
        }, {
          key: "swap",
          value: function value(t, e) {
            var n = this.blocks[e];
            s.default.swap(this.blocks[t].holder, n.holder), this.blocks[e] = this.blocks[t], this.blocks[t] = n;
          }
        }, {
          key: "insert",
          value: function value(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];

            if (this.length) {
              t > this.length && (t = this.length), n && (this.blocks[t].holder.remove(), this.blocks[t].call(l.BlockToolAPI.REMOVED));
              var o = n ? 1 : 0;

              if (this.blocks.splice(t, o, e), t > 0) {
                var i = this.blocks[t - 1];
                this.insertToDOM(e, "afterend", i);
              } else {
                var r = this.blocks[t + 1];
                r ? this.insertToDOM(e, "beforebegin", r) : this.insertToDOM(e);
              }
            } else this.push(e);
          }
        }, {
          key: "remove",
          value: function value(t) {
            isNaN(t) && (t = this.length - 1), this.blocks[t].holder.remove(), this.blocks[t].call(l.BlockToolAPI.REMOVED), this.blocks.splice(t, 1);
          }
        }, {
          key: "removeAll",
          value: function value() {
            this.workingArea.innerHTML = "", this.blocks.forEach(function (t) {
              return t.call(l.BlockToolAPI.REMOVED);
            }), this.blocks.length = 0;
          }
        }, {
          key: "insertAfter",
          value: function value(t, e) {
            var n = this.blocks.indexOf(t);
            this.insert(n + 1, e);
          }
        }, {
          key: "get",
          value: function value(t) {
            return this.blocks[t];
          }
        }, {
          key: "indexOf",
          value: function value(t) {
            return this.blocks.indexOf(t);
          }
        }, {
          key: "insertToDOM",
          value: function value(t, e, n) {
            e ? n.holder.insertAdjacentElement(e, t.holder) : this.workingArea.appendChild(t.holder), t.call(l.BlockToolAPI.RENDERED);
          }
        }, {
          key: "length",
          get: function get() {
            return this.blocks.length;
          }
        }, {
          key: "array",
          get: function get() {
            return this.blocks;
          }
        }, {
          key: "nodes",
          get: function get() {
            return a.array(this.workingArea.children);
          }
        }], [{
          key: "set",
          value: function value(t, e, n) {
            return isNaN(Number(e)) ? (Reflect.set(t, e, n), !0) : (t.insert(+e, n), !0);
          }
        }, {
          key: "get",
          value: function value(t, e) {
            return isNaN(Number(e)) ? Reflect.get(t, e) : t.get(+e);
          }
        }]), t;
      }();

      _o50.default = f, f.displayName = "Blocks", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    window, t.exports = function (t) {
      var e = {};

      function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
      }

      return n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: o
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var i in t) {
          n.d(o, i, function (e) {
            return t[e];
          }.bind(null, i));
        }
        return o;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "/", n(n.s = 0);
    }([function (t, e, n) {
      "use strict";

      n(1), t.exports = function () {
        var t = n(6),
            e = null;
        return {
          show: function show(n) {
            if (n.message) {
              !function () {
                if (e) return !0;
                e = t.getWrapper(), document.body.appendChild(e);
              }();
              var o = null,
                  i = n.time || 8e3;

              switch (n.type) {
                case "confirm":
                  o = t.confirm(n);
                  break;

                case "prompt":
                  o = t.prompt(n);
                  break;

                default:
                  o = t.alert(n), window.setTimeout(function () {
                    o.remove();
                  }, i);
              }

              e.appendChild(o), o.classList.add("cdx-notify--bounce-in");
            }
          }
        };
      }();
    }, function (t, e, n) {
      var o = n(2);
      "string" == typeof o && (o = [[t.i, o, ""]]), n(4)(o, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
      }), o.locals && (t.exports = o.locals);
    }, function (t, e, n) {
      (t.exports = n(3)(!1)).push([t.i, '.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}', ""]);
    }, function (t, e) {
      t.exports = function (t) {
        var e = [];
        return e.toString = function () {
          return this.map(function (e) {
            var n = function (t, e) {
              var n,
                  o = t[1] || "",
                  i = t[3];
              if (!i) return o;

              if (e && "function" == typeof btoa) {
                var r = (n = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                    a = i.sources.map(function (t) {
                  return "/*# sourceURL=" + i.sourceRoot + t + " */";
                });
                return [o].concat(a).concat([r]).join("\n");
              }

              return [o].join("\n");
            }(e, t);

            return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
          }).join("");
        }, e.i = function (t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);

          for (var o = {}, i = 0; i < this.length; i++) {
            var r = this[i][0];
            "number" == typeof r && (o[r] = !0);
          }

          for (i = 0; i < t.length; i++) {
            var a = t[i];
            "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
          }
        }, e;
      };
    }, function (t, e, n) {
      var o,
          i,
          r = {},
          a = (o = function o() {
        return window && document && document.all && !window.atob;
      }, function () {
        return void 0 === i && (i = o.apply(this, arguments)), i;
      }),
          s = function (t) {
        var e = {};
        return function (t) {
          if ("function" == typeof t) return t();

          if (void 0 === e[t]) {
            var n = function (t) {
              return document.querySelector(t);
            }.call(this, t);

            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
              n = n.contentDocument.head;
            } catch (t) {
              n = null;
            }
            e[t] = n;
          }

          return e[t];
        };
      }(),
          l = null,
          c = 0,
          u = [],
          f = n(5);

      function d(t, e) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n],
              i = r[o.id];

          if (i) {
            i.refs++;

            for (var a = 0; a < i.parts.length; a++) {
              i.parts[a](o.parts[a]);
            }

            for (; a < o.parts.length; a++) {
              i.parts.push(b(o.parts[a], e));
            }
          } else {
            var s = [];

            for (a = 0; a < o.parts.length; a++) {
              s.push(b(o.parts[a], e));
            }

            r[o.id] = {
              id: o.id,
              refs: 1,
              parts: s
            };
          }
        }
      }

      function p(t, e) {
        for (var n = [], o = {}, i = 0; i < t.length; i++) {
          var r = t[i],
              a = e.base ? r[0] + e.base : r[0],
              s = {
            css: r[1],
            media: r[2],
            sourceMap: r[3]
          };
          o[a] ? o[a].parts.push(s) : n.push(o[a] = {
            id: a,
            parts: [s]
          });
        }

        return n;
      }

      function h(t, e) {
        var n = s(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var o = u[u.length - 1];
        if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
          if ("object" != _typeof(t.insertAt) || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
          var i = s(t.insertInto + " " + t.insertAt.before);
          n.insertBefore(e, i);
        }
      }

      function v(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = u.indexOf(t);
        e >= 0 && u.splice(e, 1);
      }

      function g(t) {
        var e = document.createElement("style");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), e;
      }

      function y(t, e) {
        Object.keys(e).forEach(function (n) {
          t.setAttribute(n, e[n]);
        });
      }

      function b(t, e) {
        var n, o, i, r;

        if (e.transform && t.css) {
          if (!(r = e.transform(t.css))) return function () {};
          t.css = r;
        }

        if (e.singleton) {
          var a = c++;
          n = l || (l = g(e)), o = x.bind(null, n, a, !1), i = x.bind(null, n, a, !0);
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
          var e = document.createElement("link");
          return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e;
        }(e), o = function (t, e, n) {
          var o = n.css,
              i = n.sourceMap,
              r = void 0 === e.convertToAbsoluteUrls && i;
          (e.convertToAbsoluteUrls || r) && (o = f(o)), i && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
          var a = new Blob([o], {
            type: "text/css"
          }),
              s = t.href;
          t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
        }.bind(null, n, e), i = function i() {
          v(n), n.href && URL.revokeObjectURL(n.href);
        }) : (n = g(e), o = function (t, e) {
          var n = e.css,
              o = e.media;
          if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;else {
            for (; t.firstChild;) {
              t.removeChild(t.firstChild);
            }

            t.appendChild(document.createTextNode(n));
          }
        }.bind(null, n), i = function i() {
          v(n);
        });

        return o(t), function (e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
            o(t = e);
          } else i();
        };
      }

      t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = p(t, e);
        return d(n, e), function (t) {
          for (var o = [], i = 0; i < n.length; i++) {
            var a = n[i];
            (s = r[a.id]).refs--, o.push(s);
          }

          for (t && d(p(t, e), e), i = 0; i < o.length; i++) {
            var s;

            if (0 === (s = o[i]).refs) {
              for (var l = 0; l < s.parts.length; l++) {
                s.parts[l]();
              }

              delete r[s.id];
            }
          }
        };
      };

      var m,
          k = (m = [], function (t, e) {
        return m[t] = e, m.filter(Boolean).join("\n");
      });

      function x(t, e, n, o) {
        var i = n ? "" : o.css;
        if (t.styleSheet) t.styleSheet.cssText = k(e, i);else {
          var r = document.createTextNode(i),
              a = t.childNodes;
          a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(r, a[e]) : t.appendChild(r);
        }
      }
    }, function (t, e) {
      t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host,
            o = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
          var i,
              r = e.trim().replace(/^"(.*)"$/, function (t, e) {
            return e;
          }).replace(/^'(.*)'$/, function (t, e) {
            return e;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")");
        });
      };
    }, function (t, e, n) {
      "use strict";

      var o, i, r, a, s, l;
      t.exports = (o = "cdx-notify", i = "cdx-notify__cross", r = "cdx-notify__button--confirm", a = "cdx-notify__button", s = "cdx-notify__btns-wrapper", {
        alert: l = function l(t) {
          var e = document.createElement("DIV"),
              n = document.createElement("DIV"),
              r = t.message,
              a = t.style;
          return e.classList.add(o), a && e.classList.add(o + "--" + a), e.innerHTML = r, n.classList.add(i), n.addEventListener("click", e.remove.bind(e)), e.appendChild(n), e;
        },
        confirm: function confirm(t) {
          var e = l(t),
              n = document.createElement("div"),
              o = document.createElement("button"),
              c = document.createElement("button"),
              u = e.querySelector("." + i),
              f = t.cancelHandler,
              d = t.okHandler;
          return n.classList.add(s), o.innerHTML = t.okText || "Confirm", c.innerHTML = t.cancelText || "Cancel", o.classList.add(a), c.classList.add(a), o.classList.add(r), c.classList.add("cdx-notify__button--cancel"), f && "function" == typeof f && (c.addEventListener("click", f), u.addEventListener("click", f)), d && "function" == typeof d && o.addEventListener("click", d), o.addEventListener("click", e.remove.bind(e)), c.addEventListener("click", e.remove.bind(e)), n.appendChild(o), n.appendChild(c), e.appendChild(n), e;
        },
        prompt: function prompt(t) {
          var e = l(t),
              n = document.createElement("div"),
              o = document.createElement("button"),
              c = document.createElement("input"),
              u = e.querySelector("." + i),
              f = t.cancelHandler,
              d = t.okHandler;
          return n.classList.add(s), o.innerHTML = t.okText || "Ok", o.classList.add(a), o.classList.add(r), c.classList.add("cdx-notify__input"), t.placeholder && c.setAttribute("placeholder", t.placeholder), t.default && (c.value = t.default), t.inputType && (c.type = t.inputType), f && "function" == typeof f && u.addEventListener("click", f), d && "function" == typeof d && o.addEventListener("click", function () {
            d(c.value);
          }), o.addEventListener("click", e.remove.bind(e)), n.appendChild(c), n.appendChild(o), e.appendChild(n), e;
        },
        getWrapper: function getWrapper() {
          var t = document.createElement("DIV");
          return t.classList.add("cdx-notifies"), t;
        }
      });
    }]);
  }, function (t, e, n) {
    var o, i;
    void 0 === (i = "function" == typeof (o = function o() {
      function t(t) {
        var e = t.tags;
        if (!Object.keys(e).map(function (t) {
          return _typeof(e[t]);
        }).every(function (t) {
          return "object" === t || "boolean" === t || "function" === t;
        })) throw new Error("The configuration was invalid");
        this.config = t;
      }

      var e = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];

      function n(t) {
        return -1 !== e.indexOf(t.nodeName);
      }

      var o = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];

      function i(t) {
        return -1 !== o.indexOf(t.nodeName);
      }

      function r(t, e, n) {
        return "function" == typeof t.tags[e] ? t.tags[e](n) : t.tags[e];
      }

      function a(t, e) {
        return void 0 === e || "boolean" == typeof e && !e;
      }

      function s(t, e, n) {
        var o = t.name.toLowerCase();
        return !0 !== e && ("function" == typeof e[o] ? !e[o](t.value, n) : void 0 === e[o] || !1 === e[o] || "string" == typeof e[o] && e[o] !== t.value);
      }

      return t.prototype.clean = function (t) {
        var e = document.implementation.createHTMLDocument(),
            n = e.createElement("div");
        return n.innerHTML = t, this._sanitize(e, n), n.innerHTML;
      }, t.prototype._sanitize = function (t, e) {
        var o = function (t, e) {
          return t.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, !1);
        }(t, e),
            l = o.firstChild();

        if (l) do {
          if (l.nodeType !== Node.TEXT_NODE) {
            if (l.nodeType === Node.COMMENT_NODE) {
              e.removeChild(l), this._sanitize(t, e);
              break;
            }

            var c,
                u = i(l);
            u && (c = Array.prototype.some.call(l.childNodes, n));
            var f = !!e.parentNode,
                d = n(e) && n(l) && f,
                p = l.nodeName.toLowerCase(),
                h = r(this.config, p, l);

            if (u && c || a(0, h) || !this.config.keepNestedBlockElements && d) {
              if ("SCRIPT" !== l.nodeName && "STYLE" !== l.nodeName) for (; l.childNodes.length > 0;) {
                e.insertBefore(l.childNodes[0], l);
              }
              e.removeChild(l), this._sanitize(t, e);
              break;
            }

            for (var v = 0; v < l.attributes.length; v += 1) {
              var g = l.attributes[v];
              s(g, h, l) && (l.removeAttribute(g.name), v -= 1);
            }

            this._sanitize(t, l);
          } else if ("" === l.data.trim() && (l.previousElementSibling && n(l.previousElementSibling) || l.nextElementSibling && n(l.nextElementSibling))) {
            e.removeChild(l), this._sanitize(t, e);
            break;
          }
        } while (l = o.nextSibling());
      }, t;
    }) ? o.call(e, n, e, t) : o) || (t.exports = i);
  }, function (t, e, n) {
    window, t.exports = function (t) {
      var e = {};

      function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
      }

      return n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: o
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var i in t) {
          n.d(o, i, function (e) {
            return t[e];
          }.bind(null, i));
        }
        return o;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "", n(n.s = 0);
    }([function (t, e, n) {
      "use strict";

      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      function i(t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t;
      }

      n.r(e);

      var r = function () {
        function t(e) {
          var n = this;
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.commands = {}, this.keys = {}, this.name = e.name, this.parseShortcutName(e.name), this.element = e.on, this.callback = e.callback, this.executeShortcut = function (t) {
            n.execute(t);
          }, this.element.addEventListener("keydown", this.executeShortcut, !1);
        }

        return i(t, null, [{
          key: "supportedCommands",
          get: function get() {
            return {
              SHIFT: ["SHIFT"],
              CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"],
              ALT: ["ALT", "OPTION"]
            };
          }
        }, {
          key: "keyCodes",
          get: function get() {
            return {
              0: 48,
              1: 49,
              2: 50,
              3: 51,
              4: 52,
              5: 53,
              6: 54,
              7: 55,
              8: 56,
              9: 57,
              A: 65,
              B: 66,
              C: 67,
              D: 68,
              E: 69,
              F: 70,
              G: 71,
              H: 72,
              I: 73,
              J: 74,
              K: 75,
              L: 76,
              M: 77,
              N: 78,
              O: 79,
              P: 80,
              Q: 81,
              R: 82,
              S: 83,
              T: 84,
              U: 85,
              V: 86,
              W: 87,
              X: 88,
              Y: 89,
              Z: 90,
              BACKSPACE: 8,
              ENTER: 13,
              ESCAPE: 27,
              LEFT: 37,
              UP: 38,
              RIGHT: 39,
              DOWN: 40,
              INSERT: 45,
              DELETE: 46
            };
          }
        }]), i(t, [{
          key: "parseShortcutName",
          value: function value(e) {
            e = e.split("+");

            for (var n = 0; n < e.length; n++) {
              e[n] = e[n].toUpperCase();
              var o = !1;

              for (var i in t.supportedCommands) {
                if (t.supportedCommands[i].includes(e[n])) {
                  o = this.commands[i] = !0;
                  break;
                }
              }

              o || (this.keys[e[n]] = !0);
            }

            for (var r in t.supportedCommands) {
              this.commands[r] || (this.commands[r] = !1);
            }
          }
        }, {
          key: "execute",
          value: function value(e) {
            var n,
                o = {
              CMD: e.ctrlKey || e.metaKey,
              SHIFT: e.shiftKey,
              ALT: e.altKey
            },
                i = !0;

            for (n in this.commands) {
              this.commands[n] !== o[n] && (i = !1);
            }

            var r,
                a = !0;

            for (r in this.keys) {
              a = a && e.keyCode === t.keyCodes[r];
            }

            i && a && this.callback(e);
          }
        }, {
          key: "remove",
          value: function value() {
            this.element.removeEventListener("keydown", this.executeShortcut);
          }
        }]), t;
      }();

      e.default = r;
    }]).default;
  }, function (t, e, n) {
    window, t.exports = function (t) {
      var e = {};

      function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
      }

      return n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: o
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var i in t) {
          n.d(o, i, function (e) {
            return t[e];
          }.bind(null, i));
        }
        return o;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "/", n(n.s = 0);
    }([function (t, e, n) {
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      function i(t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t;
      }

      n(1).toString();

      var r = function () {
        function t(e) {
          var n = e.data,
              o = e.config,
              i = e.api;
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.api = i, this._CSS = {
            block: this.api.styles.block,
            wrapper: "ce-paragraph"
          }, this.onKeyUp = this.onKeyUp.bind(this), this._placeholder = o.placeholder ? o.placeholder : t.DEFAULT_PLACEHOLDER, this._data = {}, this._element = this.drawView(), this.data = n;
        }

        return i(t, null, [{
          key: "DEFAULT_PLACEHOLDER",
          get: function get() {
            return "";
          }
        }]), i(t, [{
          key: "onKeyUp",
          value: function value(t) {
            "Backspace" !== t.code && "Delete" !== t.code || "" === this._element.textContent && (this._element.innerHTML = "");
          }
        }, {
          key: "drawView",
          value: function value() {
            var t = document.createElement("DIV");
            return t.classList.add(this._CSS.wrapper, this._CSS.block), t.contentEditable = !0, t.dataset.placeholder = this._placeholder, t.addEventListener("keyup", this.onKeyUp), t;
          }
        }, {
          key: "render",
          value: function value() {
            return this._element;
          }
        }, {
          key: "merge",
          value: function value(t) {
            var e = {
              text: this.data.text + t.text
            };
            this.data = e;
          }
        }, {
          key: "validate",
          value: function value(t) {
            return "" !== t.text.trim();
          }
        }, {
          key: "save",
          value: function value(t) {
            return {
              text: t.innerHTML
            };
          }
        }, {
          key: "onPaste",
          value: function value(t) {
            var e = {
              text: t.detail.data.innerHTML
            };
            this.data = e;
          }
        }, {
          key: "data",
          get: function get() {
            var t = this._element.innerHTML;
            return this._data.text = t, this._data;
          },
          set: function set(t) {
            this._data = t || {}, this._element.innerHTML = this._data.text || "";
          }
        }], [{
          key: "conversionConfig",
          get: function get() {
            return {
              export: "text",
              import: "text"
            };
          }
        }, {
          key: "sanitize",
          get: function get() {
            return {
              text: {
                br: !0
              }
            };
          }
        }, {
          key: "pasteConfig",
          get: function get() {
            return {
              tags: ["P"]
            };
          }
        }, {
          key: "toolbox",
          get: function get() {
            return {
              icon: n(6).default,
              title: "Text"
            };
          }
        }]), t;
      }();

      t.exports = r;
    }, function (t, e, n) {
      var o = n(2);
      "string" == typeof o && (o = [[t.i, o, ""]]), n(4)(o, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
      }), o.locals && (t.exports = o.locals);
    }, function (t, e, n) {
      (t.exports = n(3)(!1)).push([t.i, ".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n", ""]);
    }, function (t, e) {
      t.exports = function (t) {
        var e = [];
        return e.toString = function () {
          return this.map(function (e) {
            var n = function (t, e) {
              var n,
                  o = t[1] || "",
                  i = t[3];
              if (!i) return o;

              if (e && "function" == typeof btoa) {
                var r = (n = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                    a = i.sources.map(function (t) {
                  return "/*# sourceURL=" + i.sourceRoot + t + " */";
                });
                return [o].concat(a).concat([r]).join("\n");
              }

              return [o].join("\n");
            }(e, t);

            return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
          }).join("");
        }, e.i = function (t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);

          for (var o = {}, i = 0; i < this.length; i++) {
            var r = this[i][0];
            "number" == typeof r && (o[r] = !0);
          }

          for (i = 0; i < t.length; i++) {
            var a = t[i];
            "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
          }
        }, e;
      };
    }, function (t, e, n) {
      var o,
          i,
          r = {},
          a = (o = function o() {
        return window && document && document.all && !window.atob;
      }, function () {
        return void 0 === i && (i = o.apply(this, arguments)), i;
      }),
          s = function (t) {
        var e = {};
        return function (t) {
          if ("function" == typeof t) return t();

          if (void 0 === e[t]) {
            var n = function (t) {
              return document.querySelector(t);
            }.call(this, t);

            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
              n = n.contentDocument.head;
            } catch (t) {
              n = null;
            }
            e[t] = n;
          }

          return e[t];
        };
      }(),
          l = null,
          c = 0,
          u = [],
          f = n(5);

      function d(t, e) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n],
              i = r[o.id];

          if (i) {
            i.refs++;

            for (var a = 0; a < i.parts.length; a++) {
              i.parts[a](o.parts[a]);
            }

            for (; a < o.parts.length; a++) {
              i.parts.push(b(o.parts[a], e));
            }
          } else {
            var s = [];

            for (a = 0; a < o.parts.length; a++) {
              s.push(b(o.parts[a], e));
            }

            r[o.id] = {
              id: o.id,
              refs: 1,
              parts: s
            };
          }
        }
      }

      function p(t, e) {
        for (var n = [], o = {}, i = 0; i < t.length; i++) {
          var r = t[i],
              a = e.base ? r[0] + e.base : r[0],
              s = {
            css: r[1],
            media: r[2],
            sourceMap: r[3]
          };
          o[a] ? o[a].parts.push(s) : n.push(o[a] = {
            id: a,
            parts: [s]
          });
        }

        return n;
      }

      function h(t, e) {
        var n = s(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var o = u[u.length - 1];
        if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
          if ("object" != _typeof(t.insertAt) || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
          var i = s(t.insertInto + " " + t.insertAt.before);
          n.insertBefore(e, i);
        }
      }

      function v(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = u.indexOf(t);
        e >= 0 && u.splice(e, 1);
      }

      function g(t) {
        var e = document.createElement("style");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), e;
      }

      function y(t, e) {
        Object.keys(e).forEach(function (n) {
          t.setAttribute(n, e[n]);
        });
      }

      function b(t, e) {
        var n, o, i, r;

        if (e.transform && t.css) {
          if (!(r = e.transform(t.css))) return function () {};
          t.css = r;
        }

        if (e.singleton) {
          var a = c++;
          n = l || (l = g(e)), o = x.bind(null, n, a, !1), i = x.bind(null, n, a, !0);
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
          var e = document.createElement("link");
          return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e;
        }(e), o = function (t, e, n) {
          var o = n.css,
              i = n.sourceMap,
              r = void 0 === e.convertToAbsoluteUrls && i;
          (e.convertToAbsoluteUrls || r) && (o = f(o)), i && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
          var a = new Blob([o], {
            type: "text/css"
          }),
              s = t.href;
          t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
        }.bind(null, n, e), i = function i() {
          v(n), n.href && URL.revokeObjectURL(n.href);
        }) : (n = g(e), o = function (t, e) {
          var n = e.css,
              o = e.media;
          if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;else {
            for (; t.firstChild;) {
              t.removeChild(t.firstChild);
            }

            t.appendChild(document.createTextNode(n));
          }
        }.bind(null, n), i = function i() {
          v(n);
        });

        return o(t), function (e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
            o(t = e);
          } else i();
        };
      }

      t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = p(t, e);
        return d(n, e), function (t) {
          for (var o = [], i = 0; i < n.length; i++) {
            var a = n[i];
            (s = r[a.id]).refs--, o.push(s);
          }

          for (t && d(p(t, e), e), i = 0; i < o.length; i++) {
            var s;

            if (0 === (s = o[i]).refs) {
              for (var l = 0; l < s.parts.length; l++) {
                s.parts[l]();
              }

              delete r[s.id];
            }
          }
        };
      };

      var m,
          k = (m = [], function (t, e) {
        return m[t] = e, m.filter(Boolean).join("\n");
      });

      function x(t, e, n, o) {
        var i = n ? "" : o.css;
        if (t.styleSheet) t.styleSheet.cssText = k(e, i);else {
          var r = document.createTextNode(i),
              a = t.childNodes;
          a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(r, a[e]) : t.appendChild(r);
        }
      }
    }, function (t, e) {
      t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host,
            o = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
          var i,
              r = e.trim().replace(/^"(.*)"$/, function (t, e) {
            return e;
          }).replace(/^'(.*)'$/, function (t, e) {
            return e;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")");
        });
      };
    }, function (t, e, n) {
      "use strict";

      n.r(e), e.default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n';
    }]);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(13)], void 0 === (r = "function" == typeof (o = function o(_o51, i, r, a) {
      "use strict";

      var s = n(1);
      Object.defineProperty(_o51, "__esModule", {
        value: !0
      }), _o51.default = void 0, i = s(i), r = s(r), a = s(a);

      var l = function () {
        function t() {
          (0, i.default)(this, t), this.commandName = "bold", this.CSS = {
            button: "ce-inline-tool",
            buttonActive: "ce-inline-tool--active",
            buttonModifier: "ce-inline-tool--bold"
          }, this.nodes = {
            button: void 0
          };
        }

        return (0, r.default)(t, [{
          key: "render",
          value: function value() {
            return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("bold", 12, 14)), this.nodes.button;
          }
        }, {
          key: "surround",
          value: function value(t) {
            document.execCommand(this.commandName);
          }
        }, {
          key: "checkState",
          value: function value(t) {
            var e = document.queryCommandState(this.commandName);
            return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
          }
        }, {
          key: "shortcut",
          get: function get() {
            return "CMD+B";
          }
        }], [{
          key: "sanitize",
          get: function get() {
            return {
              b: {}
            };
          }
        }]), t;
      }();

      _o51.default = l, l.displayName = "BoldInlineTool", l.isInline = !0, l.title = "Bold", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(13)], void 0 === (r = "function" == typeof (o = function o(_o52, i, r, a) {
      "use strict";

      var s = n(1);
      Object.defineProperty(_o52, "__esModule", {
        value: !0
      }), _o52.default = void 0, i = s(i), r = s(r), a = s(a);

      var l = function () {
        function t() {
          (0, i.default)(this, t), this.commandName = "italic", this.CSS = {
            button: "ce-inline-tool",
            buttonActive: "ce-inline-tool--active",
            buttonModifier: "ce-inline-tool--italic"
          }, this.nodes = {
            button: null
          };
        }

        return (0, r.default)(t, [{
          key: "render",
          value: function value() {
            return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("italic", 4, 11)), this.nodes.button;
          }
        }, {
          key: "surround",
          value: function value(t) {
            document.execCommand(this.commandName);
          }
        }, {
          key: "checkState",
          value: function value(t) {
            var e = document.queryCommandState(this.commandName);
            return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
          }
        }, {
          key: "shortcut",
          get: function get() {
            return "CMD+I";
          }
        }], [{
          key: "sanitize",
          get: function get() {
            return {
              i: {}
            };
          }
        }]), t;
      }();

      _o52.default = l, l.displayName = "ItalicInlineTool", l.isInline = !0, l.title = "Italic", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(28), n(13), n(14)], void 0 === (r = "function" == typeof (o = function o(_o53, i, r, a, s, l) {
      "use strict";

      var c = n(15),
          u = n(1);
      Object.defineProperty(_o53, "__esModule", {
        value: !0
      }), _o53.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = c(l);

      var f = function () {
        function t(e) {
          var n = e.api;
          (0, i.default)(this, t), this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
            button: "ce-inline-tool",
            buttonActive: "ce-inline-tool--active",
            buttonModifier: "ce-inline-tool--link",
            buttonUnlink: "ce-inline-tool--unlink",
            input: "ce-inline-tool-input",
            inputShowed: "ce-inline-tool-input--showed"
          }, this.nodes = {
            button: null,
            input: null
          }, this.inputOpened = !1, this.toolbar = n.toolbar, this.inlineToolbar = n.inlineToolbar, this.notifier = n.notifier, this.selection = new a.default();
        }

        return (0, r.default)(t, [{
          key: "render",
          value: function value() {
            return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(s.default.svg("link", 14, 10)), this.nodes.button.appendChild(s.default.svg("unlink", 15, 11)), this.nodes.button;
          }
        }, {
          key: "renderActions",
          value: function value() {
            var t = this;
            return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = "Add a link", this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", function (e) {
              e.keyCode === t.ENTER_KEY && t.enterPressed(e);
            }), this.nodes.input;
          }
        }, {
          key: "surround",
          value: function value(t) {
            if (t) {
              this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
              var e = this.selection.findParentTag("A");
              if (e) return this.selection.expandToTag(e), this.unlink(), this.closeActions(), this.checkState(), void this.toolbar.close();
            }

            this.toggleActions();
          }
        }, {
          key: "checkState",
          value: function value(t) {
            var e = this.selection.findParentTag("A");

            if (e) {
              this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
              var n = e.getAttribute("href");
              this.nodes.input.value = "null" !== n ? n : "", this.selection.save();
            } else this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);

            return !!e;
          }
        }, {
          key: "clear",
          value: function value() {
            this.closeActions();
          }
        }, {
          key: "toggleActions",
          value: function value() {
            this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
          }
        }, {
          key: "openActions",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.nodes.input.classList.add(this.CSS.inputShowed), t && this.nodes.input.focus(), this.inputOpened = !0;
          }
        }, {
          key: "closeActions",
          value: function value() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];

            if (this.selection.isFakeBackgroundEnabled) {
              var e = new a.default();
              e.save(), this.selection.restore(), this.selection.removeFakeBackground(), e.restore();
            }

            this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", t && this.selection.clearSaved(), this.inputOpened = !1;
          }
        }, {
          key: "enterPressed",
          value: function value(t) {
            var e = this.nodes.input.value || "";
            if (e.trim() || (this.selection.restore(), this.unlink(), t.preventDefault(), this.closeActions()), !this.validateURL(e)) return this.notifier.show({
              message: "Pasted link is not valid.",
              style: "error"
            }), void l.log("Incorrect Link pasted", "warn", e);
            e = this.prepareLink(e), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(e), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
          }
        }, {
          key: "validateURL",
          value: function value(t) {
            return !/\s/.test(t);
          }
        }, {
          key: "prepareLink",
          value: function value(t) {
            return t = t.trim(), t = this.addProtocol(t);
          }
        }, {
          key: "addProtocol",
          value: function value(t) {
            if (/^(\w+):(\/\/)?/.test(t)) return t;
            var e = /^\/[^\/\s]/.test(t),
                n = "#" === t.substring(0, 1),
                o = /^\/\/[^\/\s]/.test(t);
            return e || n || o || (t = "http://" + t), t;
          }
        }, {
          key: "insertLink",
          value: function value(t) {
            var e = this.selection.findParentTag("A");
            e && this.selection.expandToTag(e), document.execCommand(this.commandLink, !1, t);
          }
        }, {
          key: "unlink",
          value: function value() {
            document.execCommand(this.commandUnlink);
          }
        }, {
          key: "shortcut",
          get: function get() {
            return "CMD+K";
          }
        }], [{
          key: "sanitize",
          get: function get() {
            return {
              a: {
                href: !0,
                target: "_blank",
                rel: "nofollow"
              }
            };
          }
        }]), t;
      }();

      _o53.default = f, f.displayName = "LinkInlineTool", f.isInline = !0, f.title = "Link", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(13)], void 0 === (r = "function" == typeof (o = function o(_o54, i, r, a) {
      "use strict";

      var s = n(1);
      Object.defineProperty(_o54, "__esModule", {
        value: !0
      }), _o54.default = void 0, i = s(i), r = s(r), a = s(a);

      var l = function () {
        function t(e) {
          var n = e.data;
          e.config, e.api, (0, i.default)(this, t), this.CSS = {
            wrapper: "ce-stub",
            info: "ce-stub__info",
            title: "ce-stub__title",
            subtitle: "ce-stub__subtitle"
          }, this.title = n.title || "Error", this.subtitle = "The block can not be displayed correctly.", this.savedData = n.savedData, this.wrapper = this.make();
        }

        return (0, r.default)(t, [{
          key: "render",
          value: function value() {
            return this.wrapper;
          }
        }, {
          key: "save",
          value: function value() {
            return this.savedData;
          }
        }, {
          key: "make",
          value: function value() {
            var t = a.default.make("div", this.CSS.wrapper),
                e = a.default.svg("sad-face", 52, 52),
                n = a.default.make("div", this.CSS.info),
                o = a.default.make("div", this.CSS.title, {
              textContent: this.title
            }),
                i = a.default.make("div", this.CSS.subtitle, {
              textContent: this.subtitle
            });
            return t.appendChild(e), n.appendChild(o), n.appendChild(i), t.appendChild(n), t;
          }
        }]), t;
      }();

      _o54.default = l, l.displayName = "Stub", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    window, t.exports = function (t) {
      var e = {};

      function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
      }

      return n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: o
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var i in t) {
          n.d(o, i, function (e) {
            return t[e];
          }.bind(null, i));
        }
        return o;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "", n(n.s = 0);
    }([function (t, e, n) {
      t.exports = n(1);
    }, function (t, e, n) {
      "use strict";

      n.r(e), n.d(e, "default", function () {
        return o;
      });

      var o = /*#__PURE__*/function () {
        function o() {
          var _this = this;

          _classCallCheck(this, o);

          this.nodes = {
            wrapper: null,
            content: null
          }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.loadStyles(), this.prepare(), window.addEventListener("scroll", function () {
            _this.showed && _this.hide(!0);
          }, {
            passive: !0
          });
        }

        _createClass(o, [{
          key: "show",
          value: function show(t, e, n) {
            var _this$nodes$wrapper$c,
                _this2 = this;

            this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
            var o = Object.assign({
              placement: "bottom",
              marginTop: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              delay: 70,
              hidingDelay: 0
            }, n);
            if (o.hidingDelay && (this.hidingDelay = o.hidingDelay), this.nodes.content.innerHTML = "", "string" == typeof e) this.nodes.content.appendChild(document.createTextNode(e));else {
              if (!(e instanceof Node)) throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + _typeof(e) + " given.");
              this.nodes.content.appendChild(e);
            }

            switch ((_this$nodes$wrapper$c = this.nodes.wrapper.classList).remove.apply(_this$nodes$wrapper$c, _toConsumableArray(Object.values(this.CSS.placement))), o.placement) {
              case "top":
                this.placeTop(t, o);
                break;

              case "left":
                this.placeLeft(t, o);
                break;

              case "right":
                this.placeRight(t, o);
                break;

              case "bottom":
              default:
                this.placeBottom(t, o);
            }

            o && o.delay ? this.showingTimeout = setTimeout(function () {
              _this2.nodes.wrapper.classList.add(_this2.CSS.tooltipShown), _this2.showed = !0;
            }, o.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
          }
        }, {
          key: "hide",
          value: function hide() {
            var _this3 = this;

            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            if (this.hidingDelay && !t) return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(function () {
              _this3.hide(!0);
            }, this.hidingDelay));
            this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
          }
        }, {
          key: "onHover",
          value: function onHover(t, e, n) {
            var _this4 = this;

            t.addEventListener("mouseenter", function () {
              _this4.show(t, e, n);
            }), t.addEventListener("mouseleave", function () {
              _this4.hide();
            });
          }
        }, {
          key: "prepare",
          value: function prepare() {
            this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
          }
        }, {
          key: "loadStyles",
          value: function loadStyles() {
            var t = "codex-tooltips-style";
            if (document.getElementById(t)) return;
            var e = n(2),
                o = this.make("style", null, {
              textContent: e.toString(),
              id: t
            });
            this.prepend(document.head, o);
          }
        }, {
          key: "placeBottom",
          value: function placeBottom(t, e) {
            var n = t.getBoundingClientRect(),
                o = n.left + t.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2,
                i = n.bottom + window.pageYOffset + this.offsetTop + e.marginTop;
            this.applyPlacement("bottom", o, i);
          }
        }, {
          key: "placeTop",
          value: function placeTop(t, e) {
            var n = t.getBoundingClientRect(),
                o = n.left + t.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2,
                i = n.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
            this.applyPlacement("top", o, i);
          }
        }, {
          key: "placeLeft",
          value: function placeLeft(t, e) {
            var n = t.getBoundingClientRect(),
                o = n.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - e.marginLeft,
                i = n.top + window.pageYOffset + t.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
            this.applyPlacement("left", o, i);
          }
        }, {
          key: "placeRight",
          value: function placeRight(t, e) {
            var n = t.getBoundingClientRect(),
                o = n.right + this.offsetRight + e.marginRight,
                i = n.top + window.pageYOffset + t.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
            this.applyPlacement("right", o, i);
          }
        }, {
          key: "applyPlacement",
          value: function applyPlacement(t, e, n) {
            this.nodes.wrapper.classList.add(this.CSS.placement[t]), this.nodes.wrapper.style.left = "".concat(e, "px"), this.nodes.wrapper.style.top = "".concat(n, "px");
          }
        }, {
          key: "make",
          value: function make(t) {
            var _o$classList;

            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var o = document.createElement(t);
            Array.isArray(e) ? (_o$classList = o.classList).add.apply(_o$classList, _toConsumableArray(e)) : e && o.classList.add(e);

            for (var _t2 in n) {
              n.hasOwnProperty(_t2) && (o[_t2] = n[_t2]);
            }

            return o;
          }
        }, {
          key: "append",
          value: function append(t, e) {
            Array.isArray(e) ? e.forEach(function (e) {
              return t.appendChild(e);
            }) : t.appendChild(e);
          }
        }, {
          key: "prepend",
          value: function prepend(t, e) {
            Array.isArray(e) ? (e = e.reverse()).forEach(function (e) {
              return t.prepend(e);
            }) : t.prepend(e);
          }
        }, {
          key: "CSS",
          get: function get() {
            return {
              tooltip: "ct",
              tooltipContent: "ct__content",
              tooltipShown: "ct--shown",
              placement: {
                left: "ct--left",
                bottom: "ct--bottom",
                right: "ct--right",
                top: "ct--top"
              }
            };
          }
        }]);

        return o;
      }();
    }, function (t, e) {
      t.exports = '.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%;z-index:-1}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}';
    }]).default;
  }, function (t, e, n) {
    "use strict";

    n.r(e), e.default = '<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 12 14"><path d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 18 4">\n  <g fill-rule="evenodd">\n    <circle cx="9" cy="2" r="2"/>\n    <circle cx="2" cy="2" r="2"/>\n    <circle cx="16" cy="2" r="2"/>\n  </g>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 4 11">\n    <path d="M3.289 4.17L2.164 9.713c-.078.384-.238.674-.48.87-.243.198-.52.296-.831.296-.312 0-.545-.1-.699-.302-.153-.202-.192-.49-.116-.864L1.15 4.225c.077-.38.232-.665.466-.857a1.25 1.25 0 01.818-.288c.312 0 .55.096.713.288.163.192.21.46.141.801zm-.667-2.09c-.295 0-.53-.09-.706-.273-.176-.181-.233-.439-.173-.77.055-.302.207-.55.457-.745C2.45.097 2.716 0 3 0c.273 0 .5.088.68.265.179.176.238.434.177.771-.06.327-.21.583-.45.767-.24.185-.502.277-.785.277z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 14 10">\n  <path d="M6 0v2H5a3 3 0 000 6h1v2H5A5 5 0 115 0h1zm2 0h1a5 5 0 110 10H8V8h1a3 3 0 000-6H8V0zM5 4h4a1 1 0 110 2H5a1 1 0 110-2z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 14 14">\n    <path d="M8.05 5.8h4.625a1.125 1.125 0 0 1 0 2.25H8.05v4.625a1.125 1.125 0 0 1-2.25 0V8.05H1.125a1.125 1.125 0 0 1 0-2.25H5.8V1.125a1.125 1.125 0 0 1 2.25 0V5.8z"/>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="toggler-down">\n  <path d="M6.5 9.294a.792.792 0 01-.562-.232L2.233 5.356a.794.794 0 011.123-1.123L6.5 7.377l3.144-3.144a.794.794 0 011.123 1.123L7.062 9.062a.792.792 0 01-.562.232z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 15 11">\n  <path d="M13.073 2.099l-1.448 1.448A3 3 0 009 2H8V0h1c1.68 0 3.166.828 4.073 2.099zM6.929 4l-.879.879L7.172 6H5a1 1 0 110-2h1.929zM6 0v2H5a3 3 0 100 6h1v2H5A5 5 0 115 0h1zm6.414 7l2.122 2.121-1.415 1.415L11 8.414l-2.121 2.122L7.464 9.12 9.586 7 7.464 4.879 8.88 3.464 11 5.586l2.121-2.122 1.415 1.415L12.414 7z"/>\n\n</symbol></svg>';
  }, function (t, e) {
    t.exports = '.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,transform;display:none}@media (max-width:650px){.ce-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}@media (max-width:650px){.ce-toolbar{padding:3px;margin-top:5px}.ce-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar--opened{display:block}@media (max-width:650px){.ce-toolbar--opened{display:-webkit-box;display:-ms-flexbox;display:flex}}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}@media (max-width:650px){.ce-toolbar__content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0;max-width:calc(100% - 40px)}}.ce-toolbar__plus{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;left:-34px;-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus--active,.ce-toolbar__plus:hover{color:#388ae5}.ce-toolbar__plus--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}.ce-toolbar__plus--hidden{display:none}@media (max-width:650px){.ce-toolbar__plus{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important;position:static;-webkit-transform:none!important;transform:none!important}}.ce-toolbar .ce-toolbox,.ce-toolbar__plus{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ce-toolbar__actions{position:absolute;right:0;top:10px;padding-right:16px;opacity:0}@media (max-width:650px){.ce-toolbar__actions{position:static;margin-left:auto;padding-right:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.ce-toolbar__actions--opened{opacity:1}.ce-toolbar__actions-buttons{text-align:right}.ce-toolbar__settings-btn{display:inline-block;width:24px;height:24px;color:#707684;cursor:pointer}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{position:absolute;visibility:hidden;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}@media (max-width:650px){.ce-toolbox{position:static;-webkit-transform:none!important;transform:none!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-x:auto}}.ce-toolbox--opened{opacity:1;visibility:visible}.ce-toolbox__button{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0}.ce-toolbox__button--active,.ce-toolbox__button:hover{color:#388ae5}.ce-toolbox__button--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbox-button-tooltip__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{background:#fff;z-index:2}}.ce-inline-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-inline-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.9);transform:translateX(-50%) translateY(8px) scale(.9);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.9);transform:translateX(-23px) translateY(8px) scale(.9)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.9);transform:translateX(-100%) translateY(8px) scale(.9);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 6px}.ce-inline-toolbar__dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:34px;padding:0 9px 0 10px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48)}.ce-inline-toolbar__dropdown:hover{background:#eff2f5}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500;font-size:14px}.ce-inline-toolbar__dropdown-content svg{height:12px}.ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:4px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{border-radius:0;line-height:normal;width:auto;padding:0 5px!important;min-width:24px}.ce-inline-tool .icon,.ce-inline-tool>svg{margin:auto}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool:not(:last-of-type){margin-right:2px}.ce-inline-tool .icon{height:12px}.ce-inline-tool--last{margin-right:0!important}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48)}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-conversion-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:20px;height:20px;border:1px solid rgba(201,201,204,.48);border-radius:3px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px;background:#fff}.ce-conversion-tool__icon svg{width:11px;height:11px}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-settings{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-settings{right:5px;top:35px;min-width:114px}.ce-settings--left-oriented:before{left:15px;margin-left:0}.ce-settings--right-oriented:before{left:auto;right:15px;margin-left:0}@media (max-width:650px){.ce-settings{bottom:50px;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-name:panelShowing;animation-name:panelShowing}.ce-settings__plugin-zone:not(:empty){padding:3px 3px 0}.ce-settings__default-zone:not(:empty){padding:3px}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button .icon,.ce-settings__button>svg{margin:auto}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a!important;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-block:first-of-type{margin-top:0}.ce-block--focused{background-image:linear-gradient(17deg,rgba(243,248,255,.03) 63.45%,rgba(207,214,229,.27) 98%);border-radius:3px}@media (max-width:650px){.ce-block--focused{background-image:none;background-color:rgba(200,199,219,.17);margin:0 -10px;padding:0 10px}}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button .icon,.cdx-settings-button>svg{margin:auto}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:3px}.cdx-settings-button:nth-child(n+4){margin-top:3px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}';
  }]);
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Delimiter = t() : e.Delimiter = t();
}(window, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) {
        n.d(r, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/", n(n.s = 0);
  }([function (e, t, n) {
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function o(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    }

    n(1).toString();
    /**
     * Delimiter Block for the Editor.js.
     *
     * @author CodeX (team@ifmo.su)
     * @copyright CodeX 2018
     * @license The MIT License (MIT)
     * @version 2.0.0
     */

    var i = function () {
      function e(t) {
        var n = t.data,
            r = (t.config, t.api);
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.api = r, this._CSS = {
          block: this.api.styles.block,
          wrapper: "ce-delimiter"
        }, this._data = {}, this._element = this.drawView(), this.data = n;
      }

      return o(e, null, [{
        key: "contentless",
        get: function get() {
          return !0;
        }
      }]), o(e, [{
        key: "drawView",
        value: function value() {
          var e = document.createElement("DIV");
          return e.classList.add(this._CSS.wrapper, this._CSS.block), e;
        }
      }, {
        key: "render",
        value: function value() {
          return this._element;
        }
      }, {
        key: "save",
        value: function value(e) {
          return {};
        }
      }], [{
        key: "toolbox",
        get: function get() {
          return {
            icon: '<svg width="19" height="4" viewBox="0 0 19 4" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 0H7a1.25 1.25 0 1 1 0 2.5H1.25a1.25 1.25 0 1 1 0-2.5zM11 0h5.75a1.25 1.25 0 0 1 0 2.5H11A1.25 1.25 0 0 1 11 0z"/></svg>',
            title: "Delimiter"
          };
        }
      }]), e;
    }();

    e.exports = i;
  }, function (e, t, n) {
    var r = n(2);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n(4)(r, o);
    r.locals && (e.exports = r.locals);
  }, function (e, t, n) {
    (e.exports = n(3)(!1)).push([e.i, '.ce-delimiter {\n    line-height: 1.6em;\n    width: 100%;\n    text-align: center;\n}\n\n.ce-delimiter:before {\n    display: inline-block;\n    content: "***";\n    font-size: 30px;\n    line-height: 65px;\n    height: 30px;\n    letter-spacing: 0.2em;\n}', ""]);
  }, function (e, t) {
    e.exports = function (e) {
      var t = [];
      return t.toString = function () {
        return this.map(function (t) {
          var n = function (e, t) {
            var n = e[1] || "",
                r = e[3];
            if (!r) return n;

            if (t && "function" == typeof btoa) {
              var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                  i = r.sources.map(function (e) {
                return "/*# sourceURL=" + r.sourceRoot + e + " */";
              });
              return [n].concat(i).concat([o]).join("\n");
            }

            var a;
            return [n].join("\n");
          }(t, e);

          return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
        }).join("");
      }, t.i = function (e, n) {
        "string" == typeof e && (e = [[null, e, ""]]);

        for (var r = {}, o = 0; o < this.length; o++) {
          var i = this[o][0];
          "number" == typeof i && (r[i] = !0);
        }

        for (o = 0; o < e.length; o++) {
          var a = e[o];
          "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
        }
      }, t;
    };
  }, function (e, t, n) {
    var r,
        o,
        i = {},
        a = (r = function r() {
      return window && document && document.all && !window.atob;
    }, function () {
      return void 0 === o && (o = r.apply(this, arguments)), o;
    }),
        s = function (e) {
      var t = {};
      return function (e) {
        if ("function" == typeof e) return e();

        if (void 0 === t[e]) {
          var n = function (e) {
            return document.querySelector(e);
          }.call(this, e);

          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head;
          } catch (e) {
            n = null;
          }
          t[e] = n;
        }

        return t[e];
      };
    }(),
        u = null,
        c = 0,
        f = [],
        l = n(5);

    function p(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = i[r.id];

        if (o) {
          o.refs++;

          for (var a = 0; a < o.parts.length; a++) {
            o.parts[a](r.parts[a]);
          }

          for (; a < r.parts.length; a++) {
            o.parts.push(y(r.parts[a], t));
          }
        } else {
          var s = [];

          for (a = 0; a < r.parts.length; a++) {
            s.push(y(r.parts[a], t));
          }

          i[r.id] = {
            id: r.id,
            refs: 1,
            parts: s
          };
        }
      }
    }

    function d(e, t) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o],
            a = t.base ? i[0] + t.base : i[0],
            s = {
          css: i[1],
          media: i[2],
          sourceMap: i[3]
        };
        r[a] ? r[a].parts.push(s) : n.push(r[a] = {
          id: a,
          parts: [s]
        });
      }

      return n;
    }

    function h(e, t) {
      var n = s(e.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = f[f.length - 1];
      if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), f.push(t);else if ("bottom" === e.insertAt) n.appendChild(t);else {
        if ("object" != _typeof(e.insertAt) || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var o = s(e.insertInto + " " + e.insertAt.before);
        n.insertBefore(t, o);
      }
    }

    function v(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = f.indexOf(e);
      t >= 0 && f.splice(t, 1);
    }

    function b(e) {
      var t = document.createElement("style");
      return void 0 === e.attrs.type && (e.attrs.type = "text/css"), m(t, e.attrs), h(e, t), t;
    }

    function m(e, t) {
      Object.keys(t).forEach(function (n) {
        e.setAttribute(n, t[n]);
      });
    }

    function y(e, t) {
      var n, r, o, i;

      if (t.transform && e.css) {
        if (!(i = t.transform(e.css))) return function () {};
        e.css = i;
      }

      if (t.singleton) {
        var a = c++;
        n = u || (u = b(t)), r = x.bind(null, n, a, !1), o = x.bind(null, n, a, !0);
      } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
        var t = document.createElement("link");
        return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", m(t, e.attrs), h(e, t), t;
      }(t), r = function (e, t, n) {
        var r = n.css,
            o = n.sourceMap,
            i = void 0 === t.convertToAbsoluteUrls && o;
        (t.convertToAbsoluteUrls || i) && (r = l(r));
        o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var a = new Blob([r], {
          type: "text/css"
        }),
            s = e.href;
        e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
      }.bind(null, n, t), o = function o() {
        v(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = b(t), r = function (e, t) {
        var n = t.css,
            r = t.media;
        r && e.setAttribute("media", r);
        if (e.styleSheet) e.styleSheet.cssText = n;else {
          for (; e.firstChild;) {
            e.removeChild(e.firstChild);
          }

          e.appendChild(document.createTextNode(n));
        }
      }.bind(null, n), o = function o() {
        v(n);
      });

      return r(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          r(e = t);
        } else o();
      };
    }

    e.exports = function (e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
      (t = t || {}).attrs = "object" == _typeof(t.attrs) ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
      var n = d(e, t);
      return p(n, t), function (e) {
        for (var r = [], o = 0; o < n.length; o++) {
          var a = n[o];
          (s = i[a.id]).refs--, r.push(s);
        }

        e && p(d(e, t), t);

        for (o = 0; o < r.length; o++) {
          var s;

          if (0 === (s = r[o]).refs) {
            for (var u = 0; u < s.parts.length; u++) {
              s.parts[u]();
            }

            delete i[s.id];
          }
        }
      };
    };

    var g,
        w = (g = [], function (e, t) {
      return g[e] = t, g.filter(Boolean).join("\n");
    });

    function x(e, t, n, r) {
      var o = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = w(t, o);else {
        var i = document.createTextNode(o),
            a = e.childNodes;
        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
  }, function (e, t) {
    e.exports = function (e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host,
          r = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
        var o,
            i = t.trim().replace(/^"(.*)"$/, function (e, t) {
          return t;
        }).replace(/^'(.*)'$/, function (e, t) {
          return t;
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
      });
    };
  }]);
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Header = t() : e.Header = t();
}(window, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var i = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) {
        n.d(r, i, function (t) {
          return e[t];
        }.bind(null, i));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/", n(n.s = 0);
  }([function (e, t, n) {
    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    n(1).toString();
    /**
     * Header block for the Editor.js.
     *
     * @author CodeX (team@ifmo.su)
     * @copyright CodeX 2018
     * @license The MIT License (MIT)
     * @version 2.0.0
     */

    var a = function () {
      function e(t) {
        var n = t.data,
            r = t.config,
            i = t.api;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.api = i, this._CSS = {
          block: this.api.styles.block,
          settingsButton: this.api.styles.settingsButton,
          settingsButtonActive: this.api.styles.settingsButtonActive,
          wrapper: "ce-header"
        }, this._settings = r, this._data = this.normalizeData(n), this.settingsButtons = [], this._element = this.getTag();
      }

      var t, a, o;
      return t = e, o = [{
        key: "conversionConfig",
        get: function get() {
          return {
            export: "text",
            import: "text"
          };
        }
      }, {
        key: "sanitize",
        get: function get() {
          return {
            level: {}
          };
        }
      }, {
        key: "pasteConfig",
        get: function get() {
          return {
            tags: ["H1", "H2", "H3", "H4", "H5", "H6"]
          };
        }
      }, {
        key: "toolbox",
        get: function get() {
          return {
            icon: n(6).default,
            title: "Heading"
          };
        }
      }], (a = [{
        key: "normalizeData",
        value: function value(e) {
          var t = {};
          return "object" !== r(e) && (e = {}), t.text = e.text || "", t.level = parseInt(e.level) || this.defaultLevel.number, t;
        }
      }, {
        key: "render",
        value: function value() {
          return this._element;
        }
      }, {
        key: "renderSettings",
        value: function value() {
          var e = this,
              t = document.createElement("DIV");
          return this.levels.forEach(function (n) {
            var r = document.createElement("SPAN");
            r.classList.add(e._CSS.settingsButton), e.currentLevel.number === n.number && r.classList.add(e._CSS.settingsButtonActive), r.innerHTML = n.svg, r.dataset.level = n.number, r.addEventListener("click", function () {
              e.setLevel(n.number);
            }), t.appendChild(r), e.settingsButtons.push(r);
          }), t;
        }
      }, {
        key: "setLevel",
        value: function value(e) {
          var t = this;
          this.data = {
            level: e,
            text: this.data.text
          }, this.settingsButtons.forEach(function (n) {
            n.classList.toggle(t._CSS.settingsButtonActive, parseInt(n.dataset.level) === e);
          });
        }
      }, {
        key: "merge",
        value: function value(e) {
          var t = {
            text: this.data.text + e.text,
            level: this.data.level
          };
          this.data = t;
        }
      }, {
        key: "validate",
        value: function value(e) {
          return "" !== e.text.trim();
        }
      }, {
        key: "save",
        value: function value(e) {
          return {
            text: e.innerHTML,
            level: this.currentLevel.number
          };
        }
      }, {
        key: "getTag",
        value: function value() {
          var e = document.createElement(this.currentLevel.tag);
          return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = "true", e.dataset.placeholder = this._settings.placeholder || "", e;
        }
      }, {
        key: "onPaste",
        value: function value(e) {
          var t = e.detail.data,
              n = this.defaultLevel.number;

          switch (t.tagName) {
            case "H1":
              n = 1;
              break;

            case "H2":
              n = 2;
              break;

            case "H3":
              n = 3;
              break;

            case "H4":
              n = 4;
              break;

            case "H5":
              n = 5;
              break;

            case "H6":
              n = 6;
          }

          this._settings.levels && (n = this._settings.levels.reduce(function (e, t) {
            return Math.abs(t - n) < Math.abs(e - n) ? t : e;
          })), this.data = {
            level: n,
            text: t.innerHTML
          };
        }
      }, {
        key: "data",
        get: function get() {
          return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
        },
        set: function set(e) {
          if (this._data = this.normalizeData(e), void 0 !== e.level && this._element.parentNode) {
            var t = this.getTag();
            t.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t, this._element), this._element = t;
          }

          void 0 !== e.text && (this._element.innerHTML = this._data.text || "");
        }
      }, {
        key: "currentLevel",
        get: function get() {
          var e = this,
              t = this.levels.find(function (t) {
            return t.number === e._data.level;
          });
          return t || (t = this.defaultLevel), t;
        }
      }, {
        key: "defaultLevel",
        get: function get() {
          var e = this;

          if (this._settings.defaultLevel) {
            var t = this.levels.find(function (t) {
              return t.number === e._settings.defaultLevel;
            });
            if (t) return t;
            console.warn("(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels");
          }

          return this.levels[1];
        }
      }, {
        key: "levels",
        get: function get() {
          var e = this,
              t = [{
            number: 1,
            tag: "H1",
            svg: '<svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.14 1.494V4.98h4.62V1.494c0-.498.098-.871.293-1.12A.927.927 0 0 1 7.82 0c.322 0 .583.123.782.37.2.246.3.62.3 1.124v9.588c0 .503-.101.88-.303 1.128a.957.957 0 0 1-.779.374.921.921 0 0 1-.77-.378c-.193-.251-.29-.626-.29-1.124V6.989H2.14v4.093c0 .503-.1.88-.302 1.128a.957.957 0 0 1-.778.374.921.921 0 0 1-.772-.378C.096 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.285.374A.922.922 0 0 1 1.06 0c.321 0 .582.123.782.37.199.246.299.62.299 1.124zm11.653 9.985V5.27c-1.279.887-2.14 1.33-2.583 1.33a.802.802 0 0 1-.563-.228.703.703 0 0 1-.245-.529c0-.232.08-.402.241-.511.161-.11.446-.25.854-.424.61-.259 1.096-.532 1.462-.818a5.84 5.84 0 0 0 .97-.962c.282-.355.466-.573.552-.655.085-.082.246-.123.483-.123.267 0 .481.093.642.28.161.186.242.443.242.77v7.813c0 .914-.345 1.371-1.035 1.371-.307 0-.554-.093-.74-.28-.187-.186-.28-.461-.28-.825z"/></svg>'
          }, {
            number: 2,
            tag: "H2",
            svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm10.99 9.288h3.527c.351 0 .62.072.804.216.185.144.277.34.277.588 0 .22-.073.408-.22.56-.146.154-.368.23-.665.23h-4.972c-.338 0-.601-.093-.79-.28a.896.896 0 0 1-.284-.659c0-.162.06-.377.182-.645s.255-.478.399-.631a38.617 38.617 0 0 1 1.621-1.598c.482-.444.827-.735 1.034-.875.369-.261.676-.523.922-.787.245-.263.432-.534.56-.81.129-.278.193-.549.193-.815 0-.288-.069-.546-.206-.773a1.428 1.428 0 0 0-.56-.53 1.618 1.618 0 0 0-.774-.19c-.59 0-1.054.26-1.392.777-.045.068-.12.252-.226.554-.106.302-.225.534-.358.696-.133.162-.328.243-.585.243a.76.76 0 0 1-.56-.223c-.149-.148-.223-.351-.223-.608 0-.31.07-.635.21-.972.139-.338.347-.645.624-.92a3.093 3.093 0 0 1 1.054-.665c.426-.169.924-.253 1.496-.253.69 0 1.277.108 1.764.324.315.144.592.343.83.595.24.252.425.544.558.875.133.33.2.674.2 1.03 0 .558-.14 1.066-.416 1.523-.277.457-.56.815-.848 1.074-.288.26-.771.666-1.45 1.22-.677.554-1.142.984-1.394 1.29a3.836 3.836 0 0 0-.331.44z"/></svg>'
          }, {
            number: 3,
            tag: "H3",
            svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm11.61 4.919c.418 0 .778-.123 1.08-.368.301-.245.452-.597.452-1.055 0-.35-.12-.65-.36-.902-.241-.252-.566-.378-.974-.378-.277 0-.505.038-.684.116a1.1 1.1 0 0 0-.426.306 2.31 2.31 0 0 0-.296.49c-.093.2-.178.388-.255.565a.479.479 0 0 1-.245.225.965.965 0 0 1-.409.081.706.706 0 0 1-.5-.22c-.152-.148-.228-.345-.228-.59 0-.236.071-.484.214-.745a2.72 2.72 0 0 1 .627-.746 3.149 3.149 0 0 1 1.024-.568 4.122 4.122 0 0 1 1.368-.214c.44 0 .842.06 1.205.18.364.12.679.294.947.52.267.228.47.49.606.79.136.3.204.622.204.967 0 .454-.099.843-.296 1.168-.198.324-.48.64-.848.95.354.19.653.408.895.653.243.245.426.516.548.813.123.298.184.619.184.964 0 .413-.083.812-.248 1.198-.166.386-.41.73-.732 1.031a3.49 3.49 0 0 1-1.147.708c-.443.17-.932.256-1.467.256a3.512 3.512 0 0 1-1.464-.293 3.332 3.332 0 0 1-1.699-1.64c-.142-.314-.214-.573-.214-.777 0-.263.085-.475.255-.636a.89.89 0 0 1 .637-.242c.127 0 .25.037.367.112a.53.53 0 0 1 .232.27c.236.63.489 1.099.759 1.405.27.306.65.46 1.14.46a1.714 1.714 0 0 0 1.46-.824c.17-.273.256-.588.256-.947 0-.53-.145-.947-.436-1.249-.29-.302-.694-.453-1.212-.453-.09 0-.231.01-.422.028-.19.018-.313.027-.367.027-.25 0-.443-.062-.579-.187-.136-.125-.204-.299-.204-.521 0-.218.081-.394.245-.528.163-.134.406-.2.728-.2h.28z"/></svg>'
          }, {
            number: 4,
            tag: "H4",
            svg: '<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm13.003 10.09v-1.252h-3.38c-.427 0-.746-.097-.96-.29-.213-.193-.32-.456-.32-.788 0-.085.016-.171.048-.259.031-.088.078-.18.141-.276.063-.097.128-.19.195-.28.068-.09.15-.2.25-.33l3.568-4.774a5.44 5.44 0 0 1 .576-.683.763.763 0 0 1 .542-.212c.682 0 1.023.39 1.023 1.171v5.212h.29c.346 0 .623.047.832.142.208.094.313.3.313.62 0 .26-.086.45-.256.568-.17.12-.427.179-.768.179h-.41v1.252c0 .346-.077.603-.23.771-.152.168-.356.253-.612.253a.78.78 0 0 1-.61-.26c-.154-.173-.232-.427-.232-.764zm-2.895-2.76h2.895V4.91L12.26 8.823z"/></svg>'
          }, {
            number: 5,
            tag: "H5",
            svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm14.16 2.645h-3.234l-.388 2.205c.644-.344 1.239-.517 1.783-.517.436 0 .843.082 1.222.245.38.164.712.39.998.677.286.289.51.63.674 1.025.163.395.245.82.245 1.273 0 .658-.148 1.257-.443 1.797-.295.54-.72.97-1.276 1.287-.556.318-1.197.477-1.923.477-.813 0-1.472-.15-1.978-.45-.506-.3-.865-.643-1.076-1.031-.21-.388-.316-.727-.316-1.018 0-.177.073-.345.22-.504a.725.725 0 0 1 .556-.238c.381 0 .665.22.85.66.182.404.427.719.736.943.309.225.654.337 1.035.337.35 0 .656-.09.919-.272.263-.182.466-.431.61-.749.142-.318.214-.678.214-1.082 0-.436-.078-.808-.232-1.117a1.607 1.607 0 0 0-.62-.69 1.674 1.674 0 0 0-.864-.229c-.39 0-.67.048-.837.143-.168.095-.41.262-.725.5-.316.239-.576.358-.78.358a.843.843 0 0 1-.592-.242c-.173-.16-.259-.344-.259-.548 0-.022.025-.177.075-.463l.572-3.26c.063-.39.181-.675.354-.852.172-.177.454-.265.844-.265h3.595c.708 0 1.062.27 1.062.81a.711.711 0 0 1-.26.572c-.172.145-.426.218-.762.218z"/></svg>'
          }, {
            number: 6,
            tag: "H6",
            svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zM12.53 7.058a3.093 3.093 0 0 1 1.004-.814 2.734 2.734 0 0 1 1.214-.264c.43 0 .827.08 1.19.24.365.161.684.39.957.686.274.296.485.645.635 1.048a3.6 3.6 0 0 1 .223 1.262c0 .637-.145 1.216-.437 1.736-.292.52-.699.926-1.221 1.218-.522.292-1.114.438-1.774.438-.76 0-1.416-.186-1.967-.557-.552-.37-.974-.919-1.265-1.645-.292-.726-.438-1.613-.438-2.662 0-.855.088-1.62.265-2.293.176-.674.43-1.233.76-1.676.33-.443.73-.778 1.2-1.004.47-.226 1.006-.339 1.608-.339.579 0 1.089.113 1.53.34.44.225.773.506.997.84.224.335.335.656.335.964 0 .185-.07.354-.21.505a.698.698 0 0 1-.536.227.874.874 0 0 1-.529-.18 1.039 1.039 0 0 1-.36-.498 1.42 1.42 0 0 0-.495-.655 1.3 1.3 0 0 0-.786-.247c-.24 0-.479.069-.716.207a1.863 1.863 0 0 0-.6.56c-.33.479-.525 1.333-.584 2.563zm1.832 4.213c.456 0 .834-.186 1.133-.56.298-.373.447-.862.447-1.468 0-.412-.07-.766-.21-1.062a1.584 1.584 0 0 0-.577-.678 1.47 1.47 0 0 0-.807-.234c-.28 0-.548.074-.804.224-.255.149-.461.365-.617.647a2.024 2.024 0 0 0-.234.994c0 .61.158 1.12.475 1.527.316.407.714.61 1.194.61z"/></svg>'
          }];
          return this._settings.levels ? t.filter(function (t) {
            return e._settings.levels.includes(t.number);
          }) : t;
        }
      }]) && i(t.prototype, a), o && i(t, o), e;
    }();

    e.exports = a;
  }, function (e, t, n) {
    var r = n(2);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var i = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n(4)(r, i);
    r.locals && (e.exports = r.locals);
  }, function (e, t, n) {
    (e.exports = n(3)(!1)).push([e.i, "/**\n * Plugin styles\n */\n.ce-header {\n  padding: 1em 0;\n  margin: 0;\n  margin-bottom: -0.9em;\n  line-height: 1.5em;\n  outline: none;\n}\n\n.ce-header p,\n.ce-header div{\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/**\n * Styles for Plugin icon in Toolbar\n */\n.ce-header__icon {}\n\n.ce-header[contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  display: none;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty::before {\n  display: block;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty:focus::before {\n  display: none;\n}\n", ""]);
  }, function (e, t) {
    e.exports = function (e) {
      var t = [];
      return t.toString = function () {
        return this.map(function (t) {
          var n = function (e, t) {
            var n = e[1] || "",
                r = e[3];
            if (!r) return n;

            if (t && "function" == typeof btoa) {
              var i = (o = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
                  a = r.sources.map(function (e) {
                return "/*# sourceURL=" + r.sourceRoot + e + " */";
              });
              return [n].concat(a).concat([i]).join("\n");
            }

            var o;
            return [n].join("\n");
          }(t, e);

          return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
        }).join("");
      }, t.i = function (e, n) {
        "string" == typeof e && (e = [[null, e, ""]]);

        for (var r = {}, i = 0; i < this.length; i++) {
          var a = this[i][0];
          "number" == typeof a && (r[a] = !0);
        }

        for (i = 0; i < e.length; i++) {
          var o = e[i];
          "number" == typeof o[0] && r[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), t.push(o));
        }
      }, t;
    };
  }, function (e, t, n) {
    var r,
        i,
        a = {},
        o = (r = function r() {
      return window && document && document.all && !window.atob;
    }, function () {
      return void 0 === i && (i = r.apply(this, arguments)), i;
    }),
        s = function (e) {
      var t = {};
      return function (e) {
        if ("function" == typeof e) return e();

        if (void 0 === t[e]) {
          var n = function (e) {
            return document.querySelector(e);
          }.call(this, e);

          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head;
          } catch (e) {
            n = null;
          }
          t[e] = n;
        }

        return t[e];
      };
    }(),
        c = null,
        l = 0,
        u = [],
        f = n(5);

    function d(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = a[r.id];

        if (i) {
          i.refs++;

          for (var o = 0; o < i.parts.length; o++) {
            i.parts[o](r.parts[o]);
          }

          for (; o < r.parts.length; o++) {
            i.parts.push(b(r.parts[o], t));
          }
        } else {
          var s = [];

          for (o = 0; o < r.parts.length; o++) {
            s.push(b(r.parts[o], t));
          }

          a[r.id] = {
            id: r.id,
            refs: 1,
            parts: s
          };
        }
      }
    }

    function h(e, t) {
      for (var n = [], r = {}, i = 0; i < e.length; i++) {
        var a = e[i],
            o = t.base ? a[0] + t.base : a[0],
            s = {
          css: a[1],
          media: a[2],
          sourceMap: a[3]
        };
        r[o] ? r[o].parts.push(s) : n.push(r[o] = {
          id: o,
          parts: [s]
        });
      }

      return n;
    }

    function v(e, t) {
      var n = s(e.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = u[u.length - 1];
      if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), u.push(t);else if ("bottom" === e.insertAt) n.appendChild(t);else {
        if ("object" != _typeof(e.insertAt) || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var i = s(e.insertInto + " " + e.insertAt.before);
        n.insertBefore(t, i);
      }
    }

    function p(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = u.indexOf(e);
      t >= 0 && u.splice(t, 1);
    }

    function g(e) {
      var t = document.createElement("style");
      return void 0 === e.attrs.type && (e.attrs.type = "text/css"), m(t, e.attrs), v(e, t), t;
    }

    function m(e, t) {
      Object.keys(t).forEach(function (n) {
        e.setAttribute(n, t[n]);
      });
    }

    function b(e, t) {
      var n, r, i, a;

      if (t.transform && e.css) {
        if (!(a = t.transform(e.css))) return function () {};
        e.css = a;
      }

      if (t.singleton) {
        var o = l++;
        n = c || (c = g(t)), r = x.bind(null, n, o, !1), i = x.bind(null, n, o, !0);
      } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
        var t = document.createElement("link");
        return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", m(t, e.attrs), v(e, t), t;
      }(t), r = function (e, t, n) {
        var r = n.css,
            i = n.sourceMap,
            a = void 0 === t.convertToAbsoluteUrls && i;
        (t.convertToAbsoluteUrls || a) && (r = f(r));
        i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var o = new Blob([r], {
          type: "text/css"
        }),
            s = e.href;
        e.href = URL.createObjectURL(o), s && URL.revokeObjectURL(s);
      }.bind(null, n, t), i = function i() {
        p(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = g(t), r = function (e, t) {
        var n = t.css,
            r = t.media;
        r && e.setAttribute("media", r);
        if (e.styleSheet) e.styleSheet.cssText = n;else {
          for (; e.firstChild;) {
            e.removeChild(e.firstChild);
          }

          e.appendChild(document.createTextNode(n));
        }
      }.bind(null, n), i = function i() {
        p(n);
      });

      return r(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          r(e = t);
        } else i();
      };
    }

    e.exports = function (e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
      (t = t || {}).attrs = "object" == _typeof(t.attrs) ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = o()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
      var n = h(e, t);
      return d(n, t), function (e) {
        for (var r = [], i = 0; i < n.length; i++) {
          var o = n[i];
          (s = a[o.id]).refs--, r.push(s);
        }

        e && d(h(e, t), t);

        for (i = 0; i < r.length; i++) {
          var s;

          if (0 === (s = r[i]).refs) {
            for (var c = 0; c < s.parts.length; c++) {
              s.parts[c]();
            }

            delete a[s.id];
          }
        }
      };
    };

    var y,
        w = (y = [], function (e, t) {
      return y[e] = t, y.filter(Boolean).join("\n");
    });

    function x(e, t, n, r) {
      var i = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = w(t, i);else {
        var a = document.createTextNode(i),
            o = e.childNodes;
        o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(a, o[t]) : e.appendChild(a);
      }
    }
  }, function (e, t) {
    e.exports = function (e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host,
          r = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
        var i,
            a = t.trim().replace(/^"(.*)"$/, function (e, t) {
          return t;
        }).replace(/^'(.*)'$/, function (e, t) {
          return t;
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e : (i = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? n + a : r + a.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")");
      });
    };
  }, function (e, t, n) {
    "use strict";

    n.r(t), t.default = '<svg width="10" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14">\n  <path d="M7.6 8.15H2.25v4.525a1.125 1.125 0 0 1-2.25 0V1.125a1.125 1.125 0 1 1 2.25 0V5.9H7.6V1.125a1.125 1.125 0 0 1 2.25 0v11.55a1.125 1.125 0 0 1-2.25 0V8.15z"/>\n</svg>\n';
  }]);
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.List = t() : e.List = t();
}(window, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var i = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) {
        n.d(r, i, function (t) {
          return e[t];
        }.bind(null, i));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/", n(n.s = 0);
  }([function (e, t, n) {
    function r(e) {
      return function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) {
            n[t] = e[t];
          }

          return n;
        }
      }(e) || function (e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }();
    }

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function o(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }

    n(1).toString();

    var a = function () {
      function e(t) {
        var n = t.data,
            r = (t.config, t.api);
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this._elements = {
          wrapper: null
        }, this.settings = [{
          name: "unordered",
          title: "Unordered",
          icon: '<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',
          default: !1
        }, {
          name: "ordered",
          title: "Ordered",
          icon: '<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M5.819 4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0-4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0 9.357h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 0 1 0-2.137zM1.468 4.155V1.33c-.554.404-.926.606-1.118.606a.338.338 0 0 1-.244-.104A.327.327 0 0 1 0 1.59c0-.107.035-.184.105-.234.07-.05.192-.114.369-.192.264-.118.475-.243.633-.373.158-.13.298-.276.42-.438a3.94 3.94 0 0 1 .238-.298C1.802.019 1.872 0 1.975 0c.115 0 .208.042.277.127.07.085.105.202.105.351v3.556c0 .416-.15.624-.448.624a.421.421 0 0 1-.32-.127c-.08-.085-.121-.21-.121-.376zm-.283 6.664h1.572c.156 0 .275.03.358.091a.294.294 0 0 1 .123.25.323.323 0 0 1-.098.238c-.065.065-.164.097-.296.097H.629a.494.494 0 0 1-.353-.119.372.372 0 0 1-.126-.28c0-.068.027-.16.081-.273a.977.977 0 0 1 .178-.268c.267-.264.507-.49.722-.678.215-.188.368-.312.46-.371.165-.11.302-.222.412-.334.109-.112.192-.226.25-.344a.786.786 0 0 0 .085-.345.6.6 0 0 0-.341-.553.75.75 0 0 0-.345-.08c-.263 0-.47.11-.62.329-.02.029-.054.107-.101.235a.966.966 0 0 1-.16.295c-.059.069-.145.103-.26.103a.348.348 0 0 1-.25-.094.34.34 0 0 1-.099-.258c0-.132.031-.27.093-.413.063-.143.155-.273.279-.39.123-.116.28-.21.47-.282.189-.072.411-.107.666-.107.307 0 .569.045.786.137a1.182 1.182 0 0 1 .618.623 1.18 1.18 0 0 1-.096 1.083 2.03 2.03 0 0 1-.378.457c-.128.11-.344.282-.646.517-.302.235-.509.417-.621.547a1.637 1.637 0 0 0-.148.187z"/></svg>',
          default: !0
        }], this._data = {
          style: this.settings.find(function (e) {
            return !0 === e.default;
          }).name,
          items: []
        }, this.api = r, this.data = n;
      }

      return o(e, null, [{
        key: "enableLineBreaks",
        get: function get() {
          return !0;
        }
      }, {
        key: "toolbox",
        get: function get() {
          return {
            icon: '<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',
            title: "List"
          };
        }
      }]), o(e, [{
        key: "render",
        value: function value() {
          var e = this,
              t = "ordered" === this._data.style ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered;
          return this._elements.wrapper = this._make("ul", [this.CSS.baseBlock, this.CSS.wrapper, t], {
            contentEditable: !0
          }), this._data.items.length ? this._data.items.forEach(function (t) {
            e._elements.wrapper.appendChild(e._make("li", e.CSS.item, {
              innerHTML: t
            }));
          }) : this._elements.wrapper.appendChild(this._make("li", this.CSS.item)), this._elements.wrapper.addEventListener("keydown", function (t) {
            switch (t.keyCode) {
              case 13:
                e.getOutofList(t);
                break;

              case 8:
                e.backspace(t);
            }
          }, !1), this._elements.wrapper;
        }
      }, {
        key: "save",
        value: function value() {
          return this.data;
        }
      }, {
        key: "renderSettings",
        value: function value() {
          var e = this,
              t = this._make("div", [this.CSS.settingsWrapper], {});

          return this.settings.forEach(function (n) {
            var r = e._make("div", e.CSS.settingsButton, {
              innerHTML: n.icon
            });

            r.addEventListener("click", function () {
              e.toggleTune(n.name);
              var t = r.parentNode.querySelectorAll("." + e.CSS.settingsButton);
              Array.from(t).forEach(function (t) {
                return t.classList.remove(e.CSS.settingsButtonActive);
              }), r.classList.toggle(e.CSS.settingsButtonActive);
            }), e._data.style === n.name && r.classList.add(e.CSS.settingsButtonActive), t.appendChild(r);
          }), t;
        }
      }, {
        key: "onPaste",
        value: function value(e) {
          var t = e.detail.data;
          this.data = this.pasteHandler(t);
        }
      }, {
        key: "toggleTune",
        value: function value(e) {
          this._elements.wrapper.classList.toggle(this.CSS.wrapperOrdered, "ordered" === e), this._elements.wrapper.classList.toggle(this.CSS.wrapperUnordered, "unordered" === e), this._data.style = e;
        }
      }, {
        key: "_make",
        value: function value(e) {
          var t,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              o = document.createElement(e);
          Array.isArray(n) ? (t = o.classList).add.apply(t, r(n)) : n && o.classList.add(n);

          for (var a in i) {
            o[a] = i[a];
          }

          return o;
        }
      }, {
        key: "getOutofList",
        value: function value(e) {
          var t = this._elements.wrapper.querySelectorAll("." + this.CSS.item);

          if (!(t.length < 2)) {
            var n = t[t.length - 1],
                r = this.currentItem;
            r !== n || n.textContent.trim().length || (r.parentElement.removeChild(r), this.api.blocks.insertNewBlock(), e.preventDefault(), e.stopPropagation());
          }
        }
      }, {
        key: "backspace",
        value: function value(e) {
          var t = this._elements.wrapper.querySelectorAll("." + this.CSS.item),
              n = t[0];

          n && t.length < 2 && !n.innerHTML.replace("<br>", " ").trim() && e.preventDefault();
        }
      }, {
        key: "selectItem",
        value: function value(e) {
          e.preventDefault();
          var t = window.getSelection(),
              n = t.anchorNode.parentNode.closest("." + this.CSS.item),
              r = new Range();
          r.selectNodeContents(n), t.removeAllRanges(), t.addRange(r);
        }
      }, {
        key: "pasteHandler",
        value: function value(e) {
          var t,
              n = e.tagName;

          switch (n) {
            case "OL":
              t = "ordered";
              break;

            case "UL":
            case "LI":
              t = "unordered";
          }

          var r = {
            type: t,
            items: []
          };
          if ("LI" === n) r.items = [e.innerHTML];else {
            var i = Array.from(e.querySelectorAll("LI"));
            r.items = i.map(function (e) {
              return e.innerHTML;
            }).filter(function (e) {
              return !!e.trim();
            });
          }
          return r;
        }
      }, {
        key: "CSS",
        get: function get() {
          return {
            baseBlock: this.api.styles.block,
            wrapper: "cdx-list",
            wrapperOrdered: "cdx-list--ordered",
            wrapperUnordered: "cdx-list--unordered",
            item: "cdx-list__item",
            settingsWrapper: "cdx-list-settings",
            settingsButton: this.api.styles.settingsButton,
            settingsButtonActive: this.api.styles.settingsButtonActive
          };
        }
      }, {
        key: "data",
        set: function set(e) {
          e || (e = {}), this._data.style = e.style || this.settings.find(function (e) {
            return !0 === e.default;
          }).name, this._data.items = e.items || [];
          var t = this._elements.wrapper;
          t && t.parentNode.replaceChild(this.render(), t);
        },
        get: function get() {
          this._data.items = [];

          for (var e = this._elements.wrapper.querySelectorAll(".".concat(this.CSS.item)), t = 0; t < e.length; t++) {
            e[t].innerHTML.replace("<br>", " ").trim() && this._data.items.push(e[t].innerHTML);
          }

          return this._data;
        }
      }, {
        key: "currentItem",
        get: function get() {
          var e = window.getSelection().anchorNode;
          return e.nodeType !== Node.ELEMENT_NODE && (e = e.parentNode), e.closest(".".concat(this.CSS.item));
        }
      }], [{
        key: "conversionConfig",
        get: function get() {
          return {
            export: function _export(e) {
              return e.items.join(". ");
            },
            import: function _import(e) {
              return {
                items: [e],
                style: "unordered"
              };
            }
          };
        }
      }, {
        key: "sanitize",
        get: function get() {
          return {
            style: {},
            items: {
              br: !0
            }
          };
        }
      }, {
        key: "pasteConfig",
        get: function get() {
          return {
            tags: ["OL", "UL", "LI"]
          };
        }
      }]), e;
    }();

    e.exports = a;
  }, function (e, t, n) {
    var r = n(2);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var i = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n(4)(r, i);
    r.locals && (e.exports = r.locals);
  }, function (e, t, n) {
    (e.exports = n(3)(!1)).push([e.i, ".cdx-list {\n    margin: 0;\n    padding-left: 40px;\n    outline: none;\n}\n\n    .cdx-list__item {\n        padding: 5.5px 0 5.5px 3px;\n        line-height: 1.6em;\n    }\n\n    .cdx-list--unordered {\n        list-style: disc;\n    }\n\n    .cdx-list--ordered {\n        list-style: decimal;\n    }\n\n    .cdx-list-settings {\n        display: flex;\n    }\n\n    .cdx-list-settings .cdx-settings-button {\n            width: 50%;\n        }\n", ""]);
  }, function (e, t) {
    e.exports = function (e) {
      var t = [];
      return t.toString = function () {
        return this.map(function (t) {
          var n = function (e, t) {
            var n = e[1] || "",
                r = e[3];
            if (!r) return n;

            if (t && "function" == typeof btoa) {
              var i = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                  o = r.sources.map(function (e) {
                return "/*# sourceURL=" + r.sourceRoot + e + " */";
              });
              return [n].concat(o).concat([i]).join("\n");
            }

            var a;
            return [n].join("\n");
          }(t, e);

          return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
        }).join("");
      }, t.i = function (e, n) {
        "string" == typeof e && (e = [[null, e, ""]]);

        for (var r = {}, i = 0; i < this.length; i++) {
          var o = this[i][0];
          "number" == typeof o && (r[o] = !0);
        }

        for (i = 0; i < e.length; i++) {
          var a = e[i];
          "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
        }
      }, t;
    };
  }, function (e, t, n) {
    var r,
        i,
        o = {},
        a = (r = function r() {
      return window && document && document.all && !window.atob;
    }, function () {
      return void 0 === i && (i = r.apply(this, arguments)), i;
    }),
        s = function (e) {
      var t = {};
      return function (e) {
        if ("function" == typeof e) return e();

        if (void 0 === t[e]) {
          var n = function (e) {
            return document.querySelector(e);
          }.call(this, e);

          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head;
          } catch (e) {
            n = null;
          }
          t[e] = n;
        }

        return t[e];
      };
    }(),
        c = null,
        l = 0,
        u = [],
        f = n(5);

    function d(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = o[r.id];

        if (i) {
          i.refs++;

          for (var a = 0; a < i.parts.length; a++) {
            i.parts[a](r.parts[a]);
          }

          for (; a < r.parts.length; a++) {
            i.parts.push(y(r.parts[a], t));
          }
        } else {
          var s = [];

          for (a = 0; a < r.parts.length; a++) {
            s.push(y(r.parts[a], t));
          }

          o[r.id] = {
            id: r.id,
            refs: 1,
            parts: s
          };
        }
      }
    }

    function p(e, t) {
      for (var n = [], r = {}, i = 0; i < e.length; i++) {
        var o = e[i],
            a = t.base ? o[0] + t.base : o[0],
            s = {
          css: o[1],
          media: o[2],
          sourceMap: o[3]
        };
        r[a] ? r[a].parts.push(s) : n.push(r[a] = {
          id: a,
          parts: [s]
        });
      }

      return n;
    }

    function h(e, t) {
      var n = s(e.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = u[u.length - 1];
      if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), u.push(t);else if ("bottom" === e.insertAt) n.appendChild(t);else {
        if ("object" != _typeof(e.insertAt) || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var i = s(e.insertInto + " " + e.insertAt.before);
        n.insertBefore(t, i);
      }
    }

    function m(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = u.indexOf(e);
      t >= 0 && u.splice(t, 1);
    }

    function v(e) {
      var t = document.createElement("style");
      return void 0 === e.attrs.type && (e.attrs.type = "text/css"), g(t, e.attrs), h(e, t), t;
    }

    function g(e, t) {
      Object.keys(t).forEach(function (n) {
        e.setAttribute(n, t[n]);
      });
    }

    function y(e, t) {
      var n, r, i, o;

      if (t.transform && e.css) {
        if (!(o = t.transform(e.css))) return function () {};
        e.css = o;
      }

      if (t.singleton) {
        var a = l++;
        n = c || (c = v(t)), r = S.bind(null, n, a, !1), i = S.bind(null, n, a, !0);
      } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
        var t = document.createElement("link");
        return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", g(t, e.attrs), h(e, t), t;
      }(t), r = function (e, t, n) {
        var r = n.css,
            i = n.sourceMap,
            o = void 0 === t.convertToAbsoluteUrls && i;
        (t.convertToAbsoluteUrls || o) && (r = f(r));
        i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var a = new Blob([r], {
          type: "text/css"
        }),
            s = e.href;
        e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
      }.bind(null, n, t), i = function i() {
        m(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = v(t), r = function (e, t) {
        var n = t.css,
            r = t.media;
        r && e.setAttribute("media", r);
        if (e.styleSheet) e.styleSheet.cssText = n;else {
          for (; e.firstChild;) {
            e.removeChild(e.firstChild);
          }

          e.appendChild(document.createTextNode(n));
        }
      }.bind(null, n), i = function i() {
        m(n);
      });

      return r(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          r(e = t);
        } else i();
      };
    }

    e.exports = function (e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
      (t = t || {}).attrs = "object" == _typeof(t.attrs) ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
      var n = p(e, t);
      return d(n, t), function (e) {
        for (var r = [], i = 0; i < n.length; i++) {
          var a = n[i];
          (s = o[a.id]).refs--, r.push(s);
        }

        e && d(p(e, t), t);

        for (i = 0; i < r.length; i++) {
          var s;

          if (0 === (s = r[i]).refs) {
            for (var c = 0; c < s.parts.length; c++) {
              s.parts[c]();
            }

            delete o[s.id];
          }
        }
      };
    };

    var b,
        w = (b = [], function (e, t) {
      return b[e] = t, b.filter(Boolean).join("\n");
    });

    function S(e, t, n, r) {
      var i = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = w(t, i);else {
        var o = document.createTextNode(i),
            a = e.childNodes;
        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
      }
    }
  }, function (e, t) {
    e.exports = function (e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host,
          r = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
        var i,
            o = t.trim().replace(/^"(.*)"$/, function (e, t) {
          return t;
        }).replace(/^'(.*)'$/, function (e, t) {
          return t;
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")");
      });
    };
  }]);
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Checklist = t() : e.Checklist = t();
}(window, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var i = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) {
        n.d(r, i, function (t) {
          return e[t];
        }.bind(null, i));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/", n(n.s = 0);
  }([function (e, t, n) {
    function r(e) {
      return function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) {
            n[t] = e[t];
          }

          return n;
        }
      }(e) || function (e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }();
    }

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function o(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }

    n(1).toString(), n(6);

    var s = function () {
      function e(t) {
        var n = t.data,
            r = (t.config, t.api);
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this._elements = {
          wrapper: null,
          items: []
        }, this._data = {
          items: []
        }, this.api = r, this.data = n;
      }

      return o(e, null, [{
        key: "enableLineBreaks",
        get: function get() {
          return !0;
        }
      }, {
        key: "toolbox",
        get: function get() {
          return {
            icon: '<svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm0-2.394a5.106 5.106 0 1 0 0-10.212 5.106 5.106 0 0 0 0 10.212zm-.675-4.665l2.708-2.708 1.392 1.392-2.708 2.708-1.392 1.391-2.971-2.971L5.245 6.36l1.58 1.58z"/></svg>',
            title: "Checklist"
          };
        }
      }]), o(e, [{
        key: "render",
        value: function value() {
          var e = this;
          if (this._elements.wrapper = this._make("div", [this.CSS.baseBlock, this.CSS.wrapper]), this._data.items.length) this._data.items.forEach(function (t) {
            var n = e.createChecklistItem(t);
            e._elements.items.push(n), e._elements.wrapper.appendChild(n);
          });else {
            var t = this.createChecklistItem();
            this._elements.items.push(t), this._elements.wrapper.appendChild(t);
          }
          return this._elements.wrapper.addEventListener("keydown", function (t) {
            switch (t.keyCode) {
              case 13:
                e.appendNewElement(t);
                break;

              case 8:
                e.backspace(t);
            }
          }, !1), this._elements.wrapper.addEventListener("click", function (t) {
            e.toggleCheckbox(t);
          }), this._elements.wrapper;
        }
      }, {
        key: "validate",
        value: function value(e) {
          return !!e.items.length;
        }
      }, {
        key: "toggleCheckbox",
        value: function value(e) {
          var t = e.target.closest(".".concat(this.CSS.item));
          t.querySelector(".".concat(this.CSS.checkbox)).contains(e.target) && t.classList.toggle(this.CSS.itemChecked);
        }
      }, {
        key: "createChecklistItem",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = this._make("div", this.CSS.item),
              n = this._make("span", this.CSS.checkbox),
              r = this._make("div", this.CSS.textField, {
            innerHTML: e.text ? e.text : "",
            contentEditable: !0
          });

          return e.checked && t.classList.add(this.CSS.itemChecked), t.appendChild(n), t.appendChild(r), t;
        }
      }, {
        key: "appendNewElement",
        value: function value(e) {
          e.preventDefault();

          var t = window.getSelection().anchorNode,
              n = this._elements.items[this._elements.items.length - 1].querySelector(".".concat(this.CSS.textField)),
              r = n.innerHTML.replace("<br>", " ").trim();

          if (t === n && !r) return this.api.blocks.insertNewBlock(), void e.stopPropagation();
          var i = this.createChecklistItem(),
              o = t.parentNode.closest(".".concat(this.CSS.item));

          this._elements.wrapper.insertBefore(i, o.nextSibling);

          var s = this._elements.items.indexOf(o) + 1;
          this._elements.items.splice(s, 0, i), this.moveCaretToEnd(i.querySelector(".".concat(this.CSS.textField)));
        }
      }, {
        key: "backspace",
        value: function value(e) {
          var t = e.target.closest(".".concat(this.CSS.item)),
              n = this._elements.items.indexOf(t),
              r = t.querySelector(".".concat(this.CSS.textField)).innerHTML.replace("<br>", " ").trim();

          this._elements.items[0].querySelector(".".concat(this.CSS.textField)).innerHTML.replace("<br>", " ").trim() && n && !r && (e.preventDefault(), t.remove(), this._elements.items.splice(n, 1), "undefined" !== this._elements.items[n - 1] && this.moveCaretToEnd(this._elements.items[n - 1].querySelector(".".concat(this.CSS.textField))));
        }
      }, {
        key: "save",
        value: function value() {
          return this.data;
        }
      }, {
        key: "_make",
        value: function value(e) {
          var t,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              o = document.createElement(e);
          Array.isArray(n) ? (t = o.classList).add.apply(t, r(n)) : n && o.classList.add(n);

          for (var s in i) {
            o[s] = i[s];
          }

          return o;
        }
      }, {
        key: "moveCaretToEnd",
        value: function value(e) {
          var t = document.createRange(),
              n = window.getSelection();
          t.selectNodeContents(e), t.collapse(!1), n.removeAllRanges(), n.addRange(t);
        }
      }, {
        key: "CSS",
        get: function get() {
          return {
            baseBlock: this.api.styles.block,
            wrapper: "cdx-checklist",
            item: "cdx-checklist__item",
            itemChecked: "cdx-checklist__item--checked",
            checkbox: "cdx-checklist__item-checkbox",
            textField: "cdx-checklist__item-text"
          };
        }
      }, {
        key: "data",
        set: function set(e) {
          this._data.items = e.items || [];
          var t = this._elements.wrapper;
          t && t.parentNode.replaceChild(this.render(), t);
        },
        get: function get() {
          this._data.items = [];

          for (var e = 0; e < this._elements.items.length; e++) {
            var t = this._elements.items[e].querySelector(".".concat(this.CSS.textField)).innerHTML.replace("<br>", " ").trim();

            t && this._data.items.push({
              text: t,
              checked: this._elements.items[e].classList.contains(this.CSS.itemChecked)
            });
          }

          return this._data;
        }
      }]), e;
    }();

    e.exports = s;
  }, function (e, t, n) {
    var r = n(2);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var i = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n(4)(r, i);
    r.locals && (e.exports = r.locals);
  }, function (e, t, n) {
    (e.exports = n(3)(!1)).push([e.i, ".cdx-checklist__item {\n        display: flex;\n        padding: 0 10px;\n        box-sizing: content-box;\n    }\n\n        .cdx-checklist__item-text {\n            outline: none;\n            flex-grow: 1;\n            padding: 10px 0;\n        }\n\n        .cdx-checklist__item-checkbox {\n            display: inline-block;\n            flex-shrink: 0;\n            position: relative;\n            width: 20px;\n            height: 20px;\n            margin: 10px 10px 10px 0;\n            border-radius: 50%;\n            border: 1px solid #d0d0d0;\n            background: #fff;\n            cursor: pointer;\n            user-select: none;\n        }\n\n        .cdx-checklist__item-checkbox:hover {\n                border-color: #b5b5b5;\n            }\n\n        .cdx-checklist__item-checkbox::after {\n                position: absolute;\n                top: 5px;\n                left: 5px;\n                width: 8px;\n                height: 5px;\n                border: 2px solid #fcfff4;\n                border-top: none;\n                border-right: none;\n                background: transparent;\n                content: '';\n                opacity: 0;\n                transform: rotate(-45deg);\n            }\n\n        .cdx-checklist__item--checked .cdx-checklist__item-checkbox {\n                background: #388ae5;\n                border-color: #388ae5;\n            }\n\n        .cdx-checklist__item--checked .cdx-checklist__item-checkbox:hover {\n                    background: #307cd1;\n                }\n\n        .cdx-checklist__item--checked .cdx-checklist__item-checkbox::after {\n                    opacity: 1;\n                }\n", ""]);
  }, function (e, t) {
    e.exports = function (e) {
      var t = [];
      return t.toString = function () {
        return this.map(function (t) {
          var n = function (e, t) {
            var n = e[1] || "",
                r = e[3];
            if (!r) return n;

            if (t && "function" == typeof btoa) {
              var i = (s = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
                  o = r.sources.map(function (e) {
                return "/*# sourceURL=" + r.sourceRoot + e + " */";
              });
              return [n].concat(o).concat([i]).join("\n");
            }

            var s;
            return [n].join("\n");
          }(t, e);

          return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
        }).join("");
      }, t.i = function (e, n) {
        "string" == typeof e && (e = [[null, e, ""]]);

        for (var r = {}, i = 0; i < this.length; i++) {
          var o = this[i][0];
          "number" == typeof o && (r[o] = !0);
        }

        for (i = 0; i < e.length; i++) {
          var s = e[i];
          "number" == typeof s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s));
        }
      }, t;
    };
  }, function (e, t, n) {
    var r,
        i,
        o = {},
        s = (r = function r() {
      return window && document && document.all && !window.atob;
    }, function () {
      return void 0 === i && (i = r.apply(this, arguments)), i;
    }),
        c = function (e) {
      var t = {};
      return function (e) {
        if ("function" == typeof e) return e();

        if (void 0 === t[e]) {
          var n = function (e) {
            return document.querySelector(e);
          }.call(this, e);

          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head;
          } catch (e) {
            n = null;
          }
          t[e] = n;
        }

        return t[e];
      };
    }(),
        a = null,
        l = 0,
        u = [],
        d = n(5);

    function f(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = o[r.id];

        if (i) {
          i.refs++;

          for (var s = 0; s < i.parts.length; s++) {
            i.parts[s](r.parts[s]);
          }

          for (; s < r.parts.length; s++) {
            i.parts.push(y(r.parts[s], t));
          }
        } else {
          var c = [];

          for (s = 0; s < r.parts.length; s++) {
            c.push(y(r.parts[s], t));
          }

          o[r.id] = {
            id: r.id,
            refs: 1,
            parts: c
          };
        }
      }
    }

    function p(e, t) {
      for (var n = [], r = {}, i = 0; i < e.length; i++) {
        var o = e[i],
            s = t.base ? o[0] + t.base : o[0],
            c = {
          css: o[1],
          media: o[2],
          sourceMap: o[3]
        };
        r[s] ? r[s].parts.push(c) : n.push(r[s] = {
          id: s,
          parts: [c]
        });
      }

      return n;
    }

    function h(e, t) {
      var n = c(e.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = u[u.length - 1];
      if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), u.push(t);else if ("bottom" === e.insertAt) n.appendChild(t);else {
        if ("object" != _typeof(e.insertAt) || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var i = c(e.insertInto + " " + e.insertAt.before);
        n.insertBefore(t, i);
      }
    }

    function m(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = u.indexOf(e);
      t >= 0 && u.splice(t, 1);
    }

    function v(e) {
      var t = document.createElement("style");
      return void 0 === e.attrs.type && (e.attrs.type = "text/css"), b(t, e.attrs), h(e, t), t;
    }

    function b(e, t) {
      Object.keys(t).forEach(function (n) {
        e.setAttribute(n, t[n]);
      });
    }

    function y(e, t) {
      var n, r, i, o;

      if (t.transform && e.css) {
        if (!(o = t.transform(e.css))) return function () {};
        e.css = o;
      }

      if (t.singleton) {
        var s = l++;
        n = a || (a = v(t)), r = k.bind(null, n, s, !1), i = k.bind(null, n, s, !0);
      } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
        var t = document.createElement("link");
        return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", b(t, e.attrs), h(e, t), t;
      }(t), r = function (e, t, n) {
        var r = n.css,
            i = n.sourceMap,
            o = void 0 === t.convertToAbsoluteUrls && i;
        (t.convertToAbsoluteUrls || o) && (r = d(r));
        i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var s = new Blob([r], {
          type: "text/css"
        }),
            c = e.href;
        e.href = URL.createObjectURL(s), c && URL.revokeObjectURL(c);
      }.bind(null, n, t), i = function i() {
        m(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = v(t), r = function (e, t) {
        var n = t.css,
            r = t.media;
        r && e.setAttribute("media", r);
        if (e.styleSheet) e.styleSheet.cssText = n;else {
          for (; e.firstChild;) {
            e.removeChild(e.firstChild);
          }

          e.appendChild(document.createTextNode(n));
        }
      }.bind(null, n), i = function i() {
        m(n);
      });

      return r(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          r(e = t);
        } else i();
      };
    }

    e.exports = function (e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
      (t = t || {}).attrs = "object" == _typeof(t.attrs) ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = s()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
      var n = p(e, t);
      return f(n, t), function (e) {
        for (var r = [], i = 0; i < n.length; i++) {
          var s = n[i];
          (c = o[s.id]).refs--, r.push(c);
        }

        e && f(p(e, t), t);

        for (i = 0; i < r.length; i++) {
          var c;

          if (0 === (c = r[i]).refs) {
            for (var a = 0; a < c.parts.length; a++) {
              c.parts[a]();
            }

            delete o[c.id];
          }
        }
      };
    };

    var x,
        g = (x = [], function (e, t) {
      return x[e] = t, x.filter(Boolean).join("\n");
    });

    function k(e, t, n, r) {
      var i = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = g(t, i);else {
        var o = document.createTextNode(i),
            s = e.childNodes;
        s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(o, s[t]) : e.appendChild(o);
      }
    }
  }, function (e, t) {
    e.exports = function (e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host,
          r = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
        var i,
            o = t.trim().replace(/^"(.*)"$/, function (e, t) {
          return t;
        }).replace(/^'(.*)'$/, function (e, t) {
          return t;
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")");
      });
    };
  }, function (e, t, n) {
    "use strict";

    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (e) {
      var t = this;
      if (!document.documentElement.contains(t)) return null;

      do {
        if (t.matches(e)) return t;
        t = t.parentElement || t.parentNode;
      } while (null !== t && 1 === t.nodeType);

      return null;
    });
  }]);
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.CodeTool = t() : e.CodeTool = t();
}(window, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) {
        n.d(r, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/", n(n.s = 0);
  }([function (e, t, n) {
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function o(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    }

    n(1).toString();
    /**
     * CodeTool for Editor.js
     *
     * @author CodeX (team@ifmo.su)
     * @copyright CodeX 2018
     * @license The MIT License (MIT)
     * @version 2.0.0
     */

    var i = function () {
      function e(t) {
        var n = t.data,
            r = t.config,
            o = t.api;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.api = o, this.placeholder = r.placeholder || e.DEFAULT_PLACEHOLDER, this.CSS = {
          baseClass: this.api.styles.block,
          input: this.api.styles.input,
          wrapper: "ce-code",
          textarea: "ce-code__textarea"
        }, this.nodes = {
          holder: null,
          textarea: null
        }, this.data = {
          code: n.code || ""
        }, this.nodes.holder = this.drawView();
      }

      return o(e, null, [{
        key: "enableLineBreaks",
        get: function get() {
          return !0;
        }
      }]), o(e, [{
        key: "drawView",
        value: function value() {
          var e = document.createElement("div"),
              t = document.createElement("textarea");
          return e.classList.add(this.CSS.baseClass, this.CSS.wrapper), t.classList.add(this.CSS.textarea, this.CSS.input), t.textContent = this.data.code, t.placeholder = this.placeholder, e.appendChild(t), this.nodes.textarea = t, e;
        }
      }, {
        key: "render",
        value: function value() {
          return this.nodes.holder;
        }
      }, {
        key: "save",
        value: function value(e) {
          return {
            code: e.querySelector("textarea").value
          };
        }
      }, {
        key: "onPaste",
        value: function value(e) {
          var t = e.detail.data;
          this.data = {
            code: t.textContent
          };
        }
      }, {
        key: "data",
        get: function get() {
          return this._data;
        },
        set: function set(e) {
          this._data = e, this.nodes.textarea && (this.nodes.textarea.textContent = e.code);
        }
      }], [{
        key: "toolbox",
        get: function get() {
          return {
            icon: '<svg width="14" height="14" viewBox="0 -1 14 14" xmlns="http://www.w3.org/2000/svg" > <path d="M3.177 6.852c.205.253.347.572.427.954.078.372.117.844.117 1.417 0 .418.01.725.03.92.02.18.057.314.107.396.046.075.093.117.14.134.075.027.218.056.42.083a.855.855 0 0 1 .56.297c.145.167.215.38.215.636 0 .612-.432.934-1.216.934-.457 0-.87-.087-1.233-.262a1.995 1.995 0 0 1-.853-.751 2.09 2.09 0 0 1-.305-1.097c-.014-.648-.029-1.168-.043-1.56-.013-.383-.034-.631-.06-.733-.064-.263-.158-.455-.276-.578a2.163 2.163 0 0 0-.505-.376c-.238-.134-.41-.256-.519-.371C.058 6.76 0 6.567 0 6.315c0-.37.166-.657.493-.846.329-.186.56-.342.693-.466a.942.942 0 0 0 .26-.447c.056-.2.088-.42.097-.658.01-.25.024-.85.043-1.802.015-.629.239-1.14.672-1.522C2.691.19 3.268 0 3.977 0c.783 0 1.216.317 1.216.921 0 .264-.069.48-.211.643a.858.858 0 0 1-.563.29c-.249.03-.417.076-.498.126-.062.04-.112.134-.139.291-.031.187-.052.562-.061 1.119a8.828 8.828 0 0 1-.112 1.378 2.24 2.24 0 0 1-.404.963c-.159.212-.373.406-.64.583.25.163.454.342.612.538zm7.34 0c.157-.196.362-.375.612-.538a2.544 2.544 0 0 1-.641-.583 2.24 2.24 0 0 1-.404-.963 8.828 8.828 0 0 1-.112-1.378c-.009-.557-.03-.932-.061-1.119-.027-.157-.077-.251-.14-.29-.08-.051-.248-.096-.496-.127a.858.858 0 0 1-.564-.29C8.57 1.401 8.5 1.185 8.5.921 8.5.317 8.933 0 9.716 0c.71 0 1.286.19 1.72.574.432.382.656.893.671 1.522.02.952.033 1.553.043 1.802.009.238.041.458.097.658a.942.942 0 0 0 .26.447c.133.124.364.28.693.466a.926.926 0 0 1 .493.846c0 .252-.058.446-.183.58-.109.115-.281.237-.52.371-.21.118-.377.244-.504.376-.118.123-.212.315-.277.578-.025.102-.045.35-.06.733-.013.392-.027.912-.042 1.56a2.09 2.09 0 0 1-.305 1.097c-.2.323-.486.574-.853.75a2.811 2.811 0 0 1-1.233.263c-.784 0-1.216-.322-1.216-.934 0-.256.07-.47.214-.636a.855.855 0 0 1 .562-.297c.201-.027.344-.056.418-.083.048-.017.096-.06.14-.134a.996.996 0 0 0 .107-.396c.02-.195.031-.502.031-.92 0-.573.039-1.045.117-1.417.08-.382.222-.701.427-.954z" /> </svg>',
            title: "Code"
          };
        }
      }, {
        key: "DEFAULT_PLACEHOLDER",
        get: function get() {
          return "Enter code";
        }
      }, {
        key: "pasteConfig",
        get: function get() {
          return {
            tags: ["pre"]
          };
        }
      }]), e;
    }();

    e.exports = i;
  }, function (e, t, n) {
    var r = n(2);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n(4)(r, o);
    r.locals && (e.exports = r.locals);
  }, function (e, t, n) {
    (e.exports = n(3)(!1)).push([e.i, ".ce-code__textarea {\n    min-height: 200px;\n    font-family: Menlo, Monaco, Consolas, Courier New, monospace;\n    color: #41314e;\n    line-height: 1.6em;\n    font-size: 12px;\n    background: #f8f7fa;\n    border: 1px solid #f1f1f4;\n    box-shadow: none;\n    white-space: pre;\n    word-wrap: normal;\n    overflow-x: auto;\n    resize: vertical;\n}\n", ""]);
  }, function (e, t) {
    e.exports = function (e) {
      var t = [];
      return t.toString = function () {
        return this.map(function (t) {
          var n = function (e, t) {
            var n = e[1] || "",
                r = e[3];
            if (!r) return n;

            if (t && "function" == typeof btoa) {
              var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                  i = r.sources.map(function (e) {
                return "/*# sourceURL=" + r.sourceRoot + e + " */";
              });
              return [n].concat(i).concat([o]).join("\n");
            }

            var a;
            return [n].join("\n");
          }(t, e);

          return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
        }).join("");
      }, t.i = function (e, n) {
        "string" == typeof e && (e = [[null, e, ""]]);

        for (var r = {}, o = 0; o < this.length; o++) {
          var i = this[o][0];
          "number" == typeof i && (r[i] = !0);
        }

        for (o = 0; o < e.length; o++) {
          var a = e[o];
          "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
        }
      }, t;
    };
  }, function (e, t, n) {
    var r,
        o,
        i = {},
        a = (r = function r() {
      return window && document && document.all && !window.atob;
    }, function () {
      return void 0 === o && (o = r.apply(this, arguments)), o;
    }),
        s = function (e) {
      var t = {};
      return function (e) {
        if ("function" == typeof e) return e();

        if (void 0 === t[e]) {
          var n = function (e) {
            return document.querySelector(e);
          }.call(this, e);

          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head;
          } catch (e) {
            n = null;
          }
          t[e] = n;
        }

        return t[e];
      };
    }(),
        c = null,
        u = 0,
        f = [],
        l = n(5);

    function d(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = i[r.id];

        if (o) {
          o.refs++;

          for (var a = 0; a < o.parts.length; a++) {
            o.parts[a](r.parts[a]);
          }

          for (; a < r.parts.length; a++) {
            o.parts.push(m(r.parts[a], t));
          }
        } else {
          var s = [];

          for (a = 0; a < r.parts.length; a++) {
            s.push(m(r.parts[a], t));
          }

          i[r.id] = {
            id: r.id,
            refs: 1,
            parts: s
          };
        }
      }
    }

    function p(e, t) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o],
            a = t.base ? i[0] + t.base : i[0],
            s = {
          css: i[1],
          media: i[2],
          sourceMap: i[3]
        };
        r[a] ? r[a].parts.push(s) : n.push(r[a] = {
          id: a,
          parts: [s]
        });
      }

      return n;
    }

    function h(e, t) {
      var n = s(e.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = f[f.length - 1];
      if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), f.push(t);else if ("bottom" === e.insertAt) n.appendChild(t);else {
        if ("object" != _typeof(e.insertAt) || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var o = s(e.insertInto + " " + e.insertAt.before);
        n.insertBefore(t, o);
      }
    }

    function v(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = f.indexOf(e);
      t >= 0 && f.splice(t, 1);
    }

    function b(e) {
      var t = document.createElement("style");
      return void 0 === e.attrs.type && (e.attrs.type = "text/css"), y(t, e.attrs), h(e, t), t;
    }

    function y(e, t) {
      Object.keys(t).forEach(function (n) {
        e.setAttribute(n, t[n]);
      });
    }

    function m(e, t) {
      var n, r, o, i;

      if (t.transform && e.css) {
        if (!(i = t.transform(e.css))) return function () {};
        e.css = i;
      }

      if (t.singleton) {
        var a = u++;
        n = c || (c = b(t)), r = x.bind(null, n, a, !1), o = x.bind(null, n, a, !0);
      } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
        var t = document.createElement("link");
        return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", y(t, e.attrs), h(e, t), t;
      }(t), r = function (e, t, n) {
        var r = n.css,
            o = n.sourceMap,
            i = void 0 === t.convertToAbsoluteUrls && o;
        (t.convertToAbsoluteUrls || i) && (r = l(r));
        o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var a = new Blob([r], {
          type: "text/css"
        }),
            s = e.href;
        e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
      }.bind(null, n, t), o = function o() {
        v(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = b(t), r = function (e, t) {
        var n = t.css,
            r = t.media;
        r && e.setAttribute("media", r);
        if (e.styleSheet) e.styleSheet.cssText = n;else {
          for (; e.firstChild;) {
            e.removeChild(e.firstChild);
          }

          e.appendChild(document.createTextNode(n));
        }
      }.bind(null, n), o = function o() {
        v(n);
      });

      return r(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          r(e = t);
        } else o();
      };
    }

    e.exports = function (e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
      (t = t || {}).attrs = "object" == _typeof(t.attrs) ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
      var n = p(e, t);
      return d(n, t), function (e) {
        for (var r = [], o = 0; o < n.length; o++) {
          var a = n[o];
          (s = i[a.id]).refs--, r.push(s);
        }

        e && d(p(e, t), t);

        for (o = 0; o < r.length; o++) {
          var s;

          if (0 === (s = r[o]).refs) {
            for (var c = 0; c < s.parts.length; c++) {
              s.parts[c]();
            }

            delete i[s.id];
          }
        }
      };
    };

    var g,
        w = (g = [], function (e, t) {
      return g[e] = t, g.filter(Boolean).join("\n");
    });

    function x(e, t, n, r) {
      var o = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = w(t, o);else {
        var i = document.createTextNode(o),
            a = e.childNodes;
        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
  }, function (e, t) {
    e.exports = function (e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host,
          r = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
        var o,
            i = t.trim().replace(/^"(.*)"$/, function (e, t) {
          return t;
        }).replace(/^'(.*)'$/, function (e, t) {
          return t;
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
      });
    };
  }]);
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Embed = t() : e.Embed = t();
}(window, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var i = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) {
        n.d(r, i, function (t) {
          return e[t];
        }.bind(null, i));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/", n(n.s = 13);
  }([function (e, t, n) {
    var r = n(5),
        i = n(6),
        o = n(7);

    e.exports = function (e, t) {
      return r(e) || i(e, t) || o();
    };
  }, function (e, t) {
    function n(e) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function r(t) {
      return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? e.exports = r = function r(e) {
        return n(e);
      } : e.exports = r = function r(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e);
      }, r(t);
    }

    e.exports = r;
  }, function (e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    };
  }, function (e, t) {
    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    e.exports = function (e, t, r) {
      return t && n(e.prototype, t), r && n(e, r), e;
    };
  }, function (e, t) {
    function n(e, t, n) {
      var r, i, o, a, s;

      function l() {
        var c = Date.now() - a;
        c < t && c >= 0 ? r = setTimeout(l, t - c) : (r = null, n || (s = e.apply(o, i), o = i = null));
      }

      null == t && (t = 100);

      var c = function c() {
        o = this, i = arguments, a = Date.now();
        var c = n && !r;
        return r || (r = setTimeout(l, t)), c && (s = e.apply(o, i), o = i = null), s;
      };

      return c.clear = function () {
        r && (clearTimeout(r), r = null);
      }, c.flush = function () {
        r && (s = e.apply(o, i), o = i = null, clearTimeout(r), r = null);
      }, c;
    }

    n.debounce = n, e.exports = n;
  }, function (e, t) {
    e.exports = function (e) {
      if (Array.isArray(e)) return e;
    };
  }, function (e, t) {
    e.exports = function (e, t) {
      var n = [],
          r = !0,
          i = !1,
          o = void 0;

      try {
        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
          ;
        }
      } catch (e) {
        i = !0, o = e;
      } finally {
        try {
          r || null == s.return || s.return();
        } finally {
          if (i) throw o;
        }
      }

      return n;
    };
  }, function (e, t) {
    e.exports = function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }, function (e, t, n) {
    var r = n(9);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var i = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n(11)(r, i);
    r.locals && (e.exports = r.locals);
  }, function (e, t, n) {
    (e.exports = n(10)(!1)).push([e.i, ".embed-tool--loading .embed-tool__caption {\n      display: none;\n    }\n\n    .embed-tool--loading .embed-tool__preloader {\n      display: block;\n    }\n\n    .embed-tool--loading .embed-tool__content {\n      display: none;\n    }\n  .embed-tool__preloader {\n    display: none;\n    position: relative;\n    height: 200px;\n    box-sizing: border-box;\n    border-radius: 5px;\n    border: 1px solid #e6e9eb;\n  }\n  .embed-tool__preloader::before {\n      content: '';\n      position: absolute;\n      z-index: 3;\n      left: 50%;\n      top: 50%;\n      width: 30px;\n      height: 30px;\n      margin-top: -25px;\n      margin-left: -15px;\n      border-radius: 50%;\n      border: 2px solid #cdd1e0;\n      border-top-color: #388ae5;\n      box-sizing: border-box;\n      animation: embed-preloader-spin 2s infinite linear;\n    }\n  .embed-tool__url {\n    position: absolute;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    max-width: 250px;\n    color: #7b7e89;\n    font-size: 11px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .embed-tool__caption {\n    margin-top: 7px;\n  }\n  .embed-tool__caption[contentEditable=true][data-placeholder]::before{\n      position: absolute;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      opacity: 0;\n    }\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty::before {\n         opacity: 1;\n      }\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus::before {\n        opacity: 0;\n      }\n\n@keyframes embed-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", ""]);
  }, function (e, t) {
    e.exports = function (e) {
      var t = [];
      return t.toString = function () {
        return this.map(function (t) {
          var n = function (e, t) {
            var n = e[1] || "",
                r = e[3];
            if (!r) return n;

            if (t && "function" == typeof btoa) {
              var i = function (e) {
                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */";
              }(r),
                  o = r.sources.map(function (e) {
                return "/*# sourceURL=" + r.sourceRoot + e + " */";
              });

              return [n].concat(o).concat([i]).join("\n");
            }

            return [n].join("\n");
          }(t, e);

          return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
        }).join("");
      }, t.i = function (e, n) {
        "string" == typeof e && (e = [[null, e, ""]]);

        for (var r = {}, i = 0; i < this.length; i++) {
          var o = this[i][0];
          "number" == typeof o && (r[o] = !0);
        }

        for (i = 0; i < e.length; i++) {
          var a = e[i];
          "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
        }
      }, t;
    };
  }, function (e, t, n) {
    var r = {},
        i = function (e) {
      var t;
      return function () {
        return void 0 === t && (t = e.apply(this, arguments)), t;
      };
    }(function () {
      return window && document && document.all && !window.atob;
    }),
        o = function (e) {
      var t = {};
      return function (e) {
        if ("function" == typeof e) return e();

        if (void 0 === t[e]) {
          var n = function (e) {
            return document.querySelector(e);
          }.call(this, e);

          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head;
          } catch (e) {
            n = null;
          }
          t[e] = n;
        }

        return t[e];
      };
    }(),
        a = null,
        s = 0,
        l = [],
        c = n(12);

    function u(e, t) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n],
            o = r[i.id];

        if (o) {
          o.refs++;

          for (var a = 0; a < o.parts.length; a++) {
            o.parts[a](i.parts[a]);
          }

          for (; a < i.parts.length; a++) {
            o.parts.push(b(i.parts[a], t));
          }
        } else {
          var s = [];

          for (a = 0; a < i.parts.length; a++) {
            s.push(b(i.parts[a], t));
          }

          r[i.id] = {
            id: i.id,
            refs: 1,
            parts: s
          };
        }
      }
    }

    function d(e, t) {
      for (var n = [], r = {}, i = 0; i < e.length; i++) {
        var o = e[i],
            a = t.base ? o[0] + t.base : o[0],
            s = {
          css: o[1],
          media: o[2],
          sourceMap: o[3]
        };
        r[a] ? r[a].parts.push(s) : n.push(r[a] = {
          id: a,
          parts: [s]
        });
      }

      return n;
    }

    function f(e, t) {
      var n = o(e.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = l[l.length - 1];
      if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), l.push(t);else if ("bottom" === e.insertAt) n.appendChild(t);else {
        if ("object" != _typeof(e.insertAt) || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var i = o(e.insertInto + " " + e.insertAt.before);
        n.insertBefore(t, i);
      }
    }

    function h(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = l.indexOf(e);
      t >= 0 && l.splice(t, 1);
    }

    function p(e) {
      var t = document.createElement("style");
      return void 0 === e.attrs.type && (e.attrs.type = "text/css"), m(t, e.attrs), f(e, t), t;
    }

    function m(e, t) {
      Object.keys(t).forEach(function (n) {
        e.setAttribute(n, t[n]);
      });
    }

    function b(e, t) {
      var n, r, i, o;

      if (t.transform && e.css) {
        if (!(o = t.transform(e.css))) return function () {};
        e.css = o;
      }

      if (t.singleton) {
        var l = s++;
        n = a || (a = p(t)), r = y.bind(null, n, l, !1), i = y.bind(null, n, l, !0);
      } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
        var t = document.createElement("link");
        return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", m(t, e.attrs), f(e, t), t;
      }(t), r = function (e, t, n) {
        var r = n.css,
            i = n.sourceMap,
            o = void 0 === t.convertToAbsoluteUrls && i;
        (t.convertToAbsoluteUrls || o) && (r = c(r));
        i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var a = new Blob([r], {
          type: "text/css"
        }),
            s = e.href;
        e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
      }.bind(null, n, t), i = function i() {
        h(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = p(t), r = function (e, t) {
        var n = t.css,
            r = t.media;
        r && e.setAttribute("media", r);
        if (e.styleSheet) e.styleSheet.cssText = n;else {
          for (; e.firstChild;) {
            e.removeChild(e.firstChild);
          }

          e.appendChild(document.createTextNode(n));
        }
      }.bind(null, n), i = function i() {
        h(n);
      });

      return r(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          r(e = t);
        } else i();
      };
    }

    e.exports = function (e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
      (t = t || {}).attrs = "object" == _typeof(t.attrs) ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = i()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
      var n = d(e, t);
      return u(n, t), function (e) {
        for (var i = [], o = 0; o < n.length; o++) {
          var a = n[o];
          (s = r[a.id]).refs--, i.push(s);
        }

        e && u(d(e, t), t);

        for (o = 0; o < i.length; o++) {
          var s;

          if (0 === (s = i[o]).refs) {
            for (var l = 0; l < s.parts.length; l++) {
              s.parts[l]();
            }

            delete r[s.id];
          }
        }
      };
    };

    var v = function () {
      var e = [];
      return function (t, n) {
        return e[t] = n, e.filter(Boolean).join("\n");
      };
    }();

    function y(e, t, n, r) {
      var i = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = v(t, i);else {
        var o = document.createTextNode(i),
            a = e.childNodes;
        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
      }
    }
  }, function (e, t) {
    e.exports = function (e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host,
          r = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
        var i,
            o = t.trim().replace(/^"(.*)"$/, function (e, t) {
          return t;
        }).replace(/^'(.*)'$/, function (e, t) {
          return t;
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")");
      });
    };
  }, function (e, t, n) {
    "use strict";

    n.r(t);
    var r = n(1),
        i = n.n(r),
        o = n(0),
        a = n.n(o),
        s = n(2),
        l = n.n(s),
        c = n(3),
        u = n.n(c),
        d = {
      vimeo: {
        regex: /(?:http[s]?:\/\/)?(?:www.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,
        embedUrl: "https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",
        html: '<iframe style="width:100%;" height="320" frameborder="0"></iframe>',
        height: 320,
        width: 580
      },
      youtube: {
        regex: /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,
        embedUrl: "https://www.youtube.com/embed/<%= remote_id %>",
        html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
        height: 320,
        width: 580,
        id: function id(e) {
          var t = a()(e, 2),
              n = t[0],
              r = t[1];
          if (!r && n) return n;
          var i = {
            start: "start",
            end: "end",
            t: "start",
            time_continue: "start",
            list: "list"
          };
          return r = r.slice(1).split("&").map(function (e) {
            var t = e.split("="),
                r = a()(t, 2),
                o = r[0],
                s = r[1];

            if (n || "v" !== o) {
              if (i[o]) return "".concat(i[o], "=").concat(s);
            } else n = s;
          }).filter(function (e) {
            return !!e;
          }), n + "?" + r.join("&");
        }
      },
      coub: {
        regex: /https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,
        embedUrl: "https://coub.com/embed/<%= remote_id %>",
        html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
        height: 320,
        width: 580
      },
      vine: {
        regex: /https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,
        embedUrl: "https://vine.co/v/<%= remote_id %>/embed/simple/",
        html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
        height: 320,
        width: 580
      },
      imgur: {
        regex: /https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,
        embedUrl: "http://imgur.com/<%= remote_id %>/embed",
        html: '<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',
        height: 500,
        width: 540
      },
      gfycat: {
        regex: /https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,
        embedUrl: "https://gfycat.com/ifr/<%= remote_id %>",
        html: "<iframe frameborder='0' scrolling='no' style=\"width:100%;\" height='436' allowfullscreen ></iframe>",
        height: 436,
        width: 580
      },
      "twitch-channel": {
        regex: /https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,
        embedUrl: "https://player.twitch.tv/?channel=<%= remote_id %>",
        html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
        height: 366,
        width: 600
      },
      "twitch-video": {
        regex: /https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,
        embedUrl: "https://player.twitch.tv/?video=v<%= remote_id %>",
        html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
        height: 366,
        width: 600
      },
      "yandex-music-album": {
        regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,
        embedUrl: "https://music.yandex.ru/iframe/#album/<%= remote_id %>/",
        html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',
        height: 400,
        width: 540
      },
      "yandex-music-track": {
        regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,
        embedUrl: "https://music.yandex.ru/iframe/#track/<%= remote_id %>/",
        html: '<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',
        height: 100,
        width: 540,
        id: function id(e) {
          return e.join("/");
        }
      },
      "yandex-music-playlist": {
        regex: /https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,
        embedUrl: "https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",
        html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',
        height: 400,
        width: 540,
        id: function id(e) {
          return e.join("/");
        }
      },
      codepen: {
        regex: /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
        embedUrl: "https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
        html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
        height: 300,
        width: 600,
        id: function id(e) {
          return e.join("/embed/");
        }
      }
    },
        f = (n(8), n(4));
    n.d(t, "default", function () {
      return h;
    });

    var h = function () {
      function e(t) {
        var n = t.data,
            r = t.api;
        l()(this, e), this.api = r, this._data = {}, this.element = null, this.data = n;
      }

      return u()(e, [{
        key: "render",
        value: function value() {
          var t = this;

          if (!this.data.service) {
            var n = document.createElement("div");
            return this.element = n, n;
          }

          var r = e.services[this.data.service].html,
              i = document.createElement("div"),
              o = document.createElement("div"),
              a = document.createElement("template"),
              s = this.createPreloader();
          i.classList.add(this.CSS.baseClass, this.CSS.container, this.CSS.containerLoading), o.classList.add(this.CSS.input, this.CSS.caption), i.appendChild(s), o.contentEditable = !0, o.dataset.placeholder = "Enter a caption", o.innerHTML = this.data.caption || "", a.innerHTML = r, a.content.firstChild.setAttribute("src", this.data.embed), a.content.firstChild.classList.add(this.CSS.content);
          var l = this.embedIsReady(i);
          return i.appendChild(a.content.firstChild), i.appendChild(o), l.then(function () {
            i.classList.remove(t.CSS.containerLoading);
          }), this.element = i, i;
        }
      }, {
        key: "createPreloader",
        value: function value() {
          var e = document.createElement("preloader"),
              t = document.createElement("div");
          return t.textContent = this.data.source, e.classList.add(this.CSS.preloader), t.classList.add(this.CSS.url), e.appendChild(t), e;
        }
      }, {
        key: "save",
        value: function value() {
          return this.data;
        }
      }, {
        key: "onPaste",
        value: function value(t) {
          var n = t.detail,
              r = n.key,
              i = n.data,
              o = e.services[r],
              a = o.regex,
              s = o.embedUrl,
              l = o.width,
              c = o.height,
              u = o.id,
              d = void 0 === u ? function (e) {
            return e.shift();
          } : u,
              f = a.exec(i).slice(1),
              h = s.replace(/<\%\= remote\_id \%\>/g, d(f));
          this.data = {
            service: r,
            source: i,
            embed: h,
            width: l,
            height: c
          };
        }
      }, {
        key: "embedIsReady",
        value: function value(e) {
          var t = null;
          return new Promise(function (n, r) {
            (t = new MutationObserver(Object(f.debounce)(n, 450))).observe(e, {
              childList: !0,
              subtree: !0
            });
          }).then(function () {
            t.disconnect();
          });
        }
      }, {
        key: "data",
        set: function set(e) {
          if (!(e instanceof Object)) throw Error("Embed Tool data should be object");
          var t = e.service,
              n = e.source,
              r = e.embed,
              i = e.width,
              o = e.height,
              a = e.caption,
              s = void 0 === a ? "" : a;
          this._data = {
            service: t || this.data.service,
            source: n || this.data.source,
            embed: r || this.data.embed,
            width: i || this.data.width,
            height: o || this.data.height,
            caption: s || this.data.caption || ""
          };
          var l = this.element;
          l && l.parentNode.replaceChild(this.render(), l);
        },
        get: function get() {
          if (this.element) {
            var e = this.element.querySelector(".".concat(this.api.styles.input));
            this._data.caption = e ? e.innerHTML : "";
          }

          return this._data;
        }
      }, {
        key: "CSS",
        get: function get() {
          return {
            baseClass: this.api.styles.block,
            input: this.api.styles.input,
            container: "embed-tool",
            containerLoading: "embed-tool--loading",
            preloader: "embed-tool__preloader",
            caption: "embed-tool__caption",
            url: "embed-tool__url",
            content: "embed-tool__content"
          };
        }
      }], [{
        key: "prepare",
        value: function value(t) {
          var n = t.config,
              r = (void 0 === n ? {} : n).services,
              o = void 0 === r ? {} : r,
              s = Object.entries(d),
              l = Object.entries(o).filter(function (e) {
            var t = a()(e, 2),
                n = (t[0], t[1]);
            return "boolean" == typeof n && !0 === n;
          }).map(function (e) {
            return a()(e, 1)[0];
          }),
              c = Object.entries(o).filter(function (e) {
            var t = a()(e, 2),
                n = (t[0], t[1]);
            return "object" === i()(n);
          }).filter(function (t) {
            var n = a()(t, 2),
                r = (n[0], n[1]);
            return e.checkServiceConfig(r);
          }).map(function (e) {
            var t = a()(e, 2),
                n = t[0],
                r = t[1];
            return [n, {
              regex: r.regex,
              embedUrl: r.embedUrl,
              html: r.html,
              height: r.height,
              width: r.width,
              id: r.id
            }];
          });
          l.length && (s = s.filter(function (e) {
            var t = a()(e, 1)[0];
            return l.includes(t);
          })), s = s.concat(c), e.services = s.reduce(function (e, t) {
            var n = a()(t, 2),
                r = n[0],
                i = n[1];
            return r in e ? (e[r] = Object.assign({}, e[r], i), e) : (e[r] = i, e);
          }, {}), e.patterns = s.reduce(function (e, t) {
            var n = a()(t, 2),
                r = n[0],
                i = n[1];
            return e[r] = i.regex, e;
          }, {});
        }
      }, {
        key: "checkServiceConfig",
        value: function value(e) {
          var t = e.regex,
              n = e.embedUrl,
              r = e.html,
              i = e.height,
              o = e.width,
              a = e.id,
              s = t && t instanceof RegExp && n && "string" == typeof n && r && "string" == typeof r;
          return s = (s = (s = s && (void 0 === a || a instanceof Function)) && (void 0 === i || Number.isFinite(i))) && (void 0 === o || Number.isFinite(o));
        }
      }, {
        key: "pasteConfig",
        get: function get() {
          return {
            patterns: e.patterns
          };
        }
      }]), e;
    }();
  }]).default;
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.ImageTool = e() : t.ImageTool = e();
}(window, function () {
  return function (t) {
    var e = {};

    function n(r) {
      if (e[r]) return e[r].exports;
      var o = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var o in t) {
        n.d(r, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
      return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "/", n(n.s = 25);
  }([function (t, e) {
    function n(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    t.exports = function (t, e, r) {
      return e && n(t.prototype, e), r && n(t, r), t;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    };
  }, function (t, e, n) {
    window, t.exports = function (t) {
      var e = {};

      function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
      }

      return n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: r
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var o in t) {
          n.d(r, o, function (e) {
            return t[e];
          }.bind(null, o));
        }
        return r;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "", n(n.s = 3);
    }([function (t, e) {
      var n;

      n = function () {
        return this;
      }();

      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
      }

      t.exports = n;
    }, function (t, e, n) {
      "use strict";

      (function (t) {
        var r = n(2),
            o = setTimeout;

        function i() {}

        function a(t) {
          if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof t) throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(t, this);
        }

        function s(t, e) {
          for (; 3 === t._state;) {
            t = t._value;
          }

          0 !== t._state ? (t._handled = !0, a._immediateFn(function () {
            var n = 1 === t._state ? e.onFulfilled : e.onRejected;

            if (null !== n) {
              var r;

              try {
                r = n(t._value);
              } catch (t) {
                return void c(e.promise, t);
              }

              u(e.promise, r);
            } else (1 === t._state ? u : c)(e.promise, t._value);
          })) : t._deferreds.push(e);
        }

        function u(t, e) {
          try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");

            if (e && ("object" == _typeof(e) || "function" == typeof e)) {
              var n = e.then;
              if (e instanceof a) return t._state = 3, t._value = e, void l(t);
              if ("function" == typeof n) return void d((r = n, o = e, function () {
                r.apply(o, arguments);
              }), t);
            }

            t._state = 1, t._value = e, l(t);
          } catch (e) {
            c(t, e);
          }

          var r, o;
        }

        function c(t, e) {
          t._state = 2, t._value = e, l(t);
        }

        function l(t) {
          2 === t._state && 0 === t._deferreds.length && a._immediateFn(function () {
            t._handled || a._unhandledRejectionFn(t._value);
          });

          for (var e = 0, n = t._deferreds.length; e < n; e++) {
            s(t, t._deferreds[e]);
          }

          t._deferreds = null;
        }

        function f(t, e, n) {
          this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
        }

        function d(t, e) {
          var n = !1;

          try {
            t(function (t) {
              n || (n = !0, u(e, t));
            }, function (t) {
              n || (n = !0, c(e, t));
            });
          } catch (t) {
            if (n) return;
            n = !0, c(e, t);
          }
        }

        a.prototype.catch = function (t) {
          return this.then(null, t);
        }, a.prototype.then = function (t, e) {
          var n = new this.constructor(i);
          return s(this, new f(t, e, n)), n;
        }, a.prototype.finally = r.a, a.all = function (t) {
          return new a(function (e, n) {
            if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
            var r = Array.prototype.slice.call(t);
            if (0 === r.length) return e([]);
            var o = r.length;

            function i(t, a) {
              try {
                if (a && ("object" == _typeof(a) || "function" == typeof a)) {
                  var s = a.then;
                  if ("function" == typeof s) return void s.call(a, function (e) {
                    i(t, e);
                  }, n);
                }

                r[t] = a, 0 == --o && e(r);
              } catch (t) {
                n(t);
              }
            }

            for (var a = 0; a < r.length; a++) {
              i(a, r[a]);
            }
          });
        }, a.resolve = function (t) {
          return t && "object" == _typeof(t) && t.constructor === a ? t : new a(function (e) {
            e(t);
          });
        }, a.reject = function (t) {
          return new a(function (e, n) {
            n(t);
          });
        }, a.race = function (t) {
          return new a(function (e, n) {
            for (var r = 0, o = t.length; r < o; r++) {
              t[r].then(e, n);
            }
          });
        }, a._immediateFn = "function" == typeof t && function (e) {
          t(e);
        } || function (t) {
          o(t, 0);
        }, a._unhandledRejectionFn = function (t) {
          "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
        }, e.a = a;
      }).call(this, n(5).setImmediate);
    }, function (t, e, n) {
      "use strict";

      e.a = function (t) {
        var e = this.constructor;
        return this.then(function (n) {
          return e.resolve(t()).then(function () {
            return n;
          });
        }, function (n) {
          return e.resolve(t()).then(function () {
            return e.reject(n);
          });
        });
      };
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      n(4);
      var o,
          i,
          a,
          s,
          u,
          c,
          l = n(8),
          f = (i = function i(t) {
        return new Promise(function (e, n) {
          t = s(t), t = u(t);
          var r = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          r.open(t.method, t.url), r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function (e) {
            var n = t.headers[e];
            r.setRequestHeader(e, n);
          });
          var o = t.ratio;
          r.upload.addEventListener("progress", function (e) {
            var n = Math.round(e.loaded / e.total * 100),
                r = Math.ceil(n * o / 100);
            t.progress(r);
          }, !1), r.addEventListener("progress", function (e) {
            var n = Math.round(e.loaded / e.total * 100),
                r = Math.ceil(n * (100 - o) / 100) + o;
            t.progress(r);
          }, !1), r.onreadystatechange = function () {
            if (4 === r.readyState) {
              var t = r.response;

              try {
                t = JSON.parse(t);
              } catch (t) {}

              var o = l.parseHeaders(r.getAllResponseHeaders()),
                  i = {
                body: t,
                code: r.status,
                headers: o
              };
              200 === r.status ? e(i) : n(i);
            }
          }, r.send(t.data);
        });
      }, a = function a(t) {
        return t.method = "POST", i(t);
      }, s = function s() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (t.url && "string" != typeof t.url) throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && "string" != typeof t.method) throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && "object" !== r(t.headers)) throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && ("string" != typeof t.type || !Object.values(o).includes(t.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && "function" != typeof t.progress) throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function (t) {}, t.beforeSend = t.beforeSend || function (t) {}, t.ratio && "number" != typeof t.ratio) throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && "string" != typeof t.accept) throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && "boolean" != typeof t.multiple) throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && "string" != typeof t.fieldName) throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, u = function u(t) {
        switch (t.method) {
          case "GET":
            var e = c(t.data, o.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + e : t.url + "?" + e;
            break;

          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var n = function () {
              return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).type || o.JSON;
            }(t);

            (l.isFormData(t.data) || l.isFormElement(t.data)) && (n = o.FORM), t.data = c(t.data, n), n !== f.contentType.FORM && (t.headers["content-type"] = n);
        }

        return t;
      }, c = function c() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case o.URLENCODED:
            return l.urlEncode(t);

          case o.JSON:
            return l.jsonEncode(t);

          case o.FORM:
            return l.formEncode(t);

          default:
            return t;
        }
      }, {
        contentType: o = {
          URLENCODED: "application/x-www-form-urlencoded; charset=utf-8",
          FORM: "multipart/form-data",
          JSON: "application/json; charset=utf-8"
        },
        request: i,
        get: function get(t) {
          return t.method = "GET", i(t);
        },
        post: a,
        transport: function transport(t) {
          return t = s(t), l.selectFiles(t).then(function (e) {
            for (var n = new FormData(), r = 0; r < e.length; r++) {
              n.append(t.fieldName, e[r], e[r].name);
            }

            return l.isObject(t.data) && Object.keys(t.data).forEach(function (e) {
              var r = t.data[e];
              n.append(e, r);
            }), t.beforeSend && t.beforeSend(e), t.data = n, a(t);
          });
        },
        selectFiles: function selectFiles(t) {
          return delete (t = s(t)).beforeSend, l.selectFiles(t);
        }
      });
      t.exports = f;
    }, function (t, e, n) {
      "use strict";

      n.r(e);
      var r = n(1);
      window.Promise = window.Promise || r.a;
    }, function (t, e, n) {
      (function (t) {
        var r = void 0 !== t && t || "undefined" != typeof self && self || window,
            o = Function.prototype.apply;

        function i(t, e) {
          this._id = t, this._clearFn = e;
        }

        e.setTimeout = function () {
          return new i(o.call(setTimeout, r, arguments), clearTimeout);
        }, e.setInterval = function () {
          return new i(o.call(setInterval, r, arguments), clearInterval);
        }, e.clearTimeout = e.clearInterval = function (t) {
          t && t.close();
        }, i.prototype.unref = i.prototype.ref = function () {}, i.prototype.close = function () {
          this._clearFn.call(r, this._id);
        }, e.enroll = function (t, e) {
          clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
        }, e.unenroll = function (t) {
          clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
        }, e._unrefActive = e.active = function (t) {
          clearTimeout(t._idleTimeoutId);
          var e = t._idleTimeout;
          e >= 0 && (t._idleTimeoutId = setTimeout(function () {
            t._onTimeout && t._onTimeout();
          }, e));
        }, n(6), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate;
      }).call(this, n(0));
    }, function (t, e, n) {
      (function (t, e) {
        !function (t, n) {
          "use strict";

          if (!t.setImmediate) {
            var r,
                o,
                i,
                a,
                s,
                u = 1,
                c = {},
                l = !1,
                f = t.document,
                d = Object.getPrototypeOf && Object.getPrototypeOf(t);
            d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? r = function r(t) {
              e.nextTick(function () {
                h(t);
              });
            } : function () {
              if (t.postMessage && !t.importScripts) {
                var e = !0,
                    n = t.onmessage;
                return t.onmessage = function () {
                  e = !1;
                }, t.postMessage("", "*"), t.onmessage = n, e;
              }
            }() ? (a = "setImmediate$" + Math.random() + "$", s = function s(e) {
              e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(a) && h(+e.data.slice(a.length));
            }, t.addEventListener ? t.addEventListener("message", s, !1) : t.attachEvent("onmessage", s), r = function r(e) {
              t.postMessage(a + e, "*");
            }) : t.MessageChannel ? ((i = new MessageChannel()).port1.onmessage = function (t) {
              h(t.data);
            }, r = function r(t) {
              i.port2.postMessage(t);
            }) : f && "onreadystatechange" in f.createElement("script") ? (o = f.documentElement, r = function r(t) {
              var e = f.createElement("script");
              e.onreadystatechange = function () {
                h(t), e.onreadystatechange = null, o.removeChild(e), e = null;
              }, o.appendChild(e);
            }) : r = function r(t) {
              setTimeout(h, 0, t);
            }, d.setImmediate = function (t) {
              "function" != typeof t && (t = new Function("" + t));

              for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) {
                e[n] = arguments[n + 1];
              }

              var o = {
                callback: t,
                args: e
              };
              return c[u] = o, r(u), u++;
            }, d.clearImmediate = p;
          }

          function p(t) {
            delete c[t];
          }

          function h(t) {
            if (l) setTimeout(h, 0, t);else {
              var e = c[t];

              if (e) {
                l = !0;

                try {
                  !function (t) {
                    var e = t.callback,
                        r = t.args;

                    switch (r.length) {
                      case 0:
                        e();
                        break;

                      case 1:
                        e(r[0]);
                        break;

                      case 2:
                        e(r[0], r[1]);
                        break;

                      case 3:
                        e(r[0], r[1], r[2]);
                        break;

                      default:
                        e.apply(n, r);
                    }
                  }(e);
                } finally {
                  p(t), l = !1;
                }
              }
            }
          }
        }("undefined" == typeof self ? void 0 === t ? this : t : self);
      }).call(this, n(0), n(7));
    }, function (t, e) {
      var n,
          r,
          o = t.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined");
      }

      function a() {
        throw new Error("clearTimeout has not been defined");
      }

      function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);

        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }

      !function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : i;
        } catch (t) {
          n = i;
        }

        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (t) {
          r = a;
        }
      }();
      var u,
          c = [],
          l = !1,
          f = -1;

      function d() {
        l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && p());
      }

      function p() {
        if (!l) {
          var t = s(d);
          l = !0;

          for (var e = c.length; e;) {
            for (u = c, c = []; ++f < e;) {
              u && u[f].run();
            }

            f = -1, e = c.length;
          }

          u = null, l = !1, function (t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);

            try {
              r(t);
            } catch (e) {
              try {
                return r.call(null, t);
              } catch (e) {
                return r.call(this, t);
              }
            }
          }(t);
        }
      }

      function h(t, e) {
        this.fun = t, this.array = e;
      }

      function m() {}

      o.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }
        c.push(new h(t, e)), 1 !== c.length || l || s(p);
      }, h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function (t) {
        return [];
      }, o.binding = function (t) {
        throw new Error("process.binding is not supported");
      }, o.cwd = function () {
        return "/";
      }, o.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }, o.umask = function () {
        return 0;
      };
    }, function (t, e, n) {
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      var o = n(9);

      t.exports = function () {
        function t() {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
        }

        var e, n;
        return e = t, (n = [{
          key: "urlEncode",
          value: function value(t) {
            return o(t);
          }
        }, {
          key: "jsonEncode",
          value: function value(t) {
            return JSON.stringify(t);
          }
        }, {
          key: "formEncode",
          value: function value(t) {
            if (this.isFormData(t)) return t;
            if (this.isFormElement(t)) return new FormData(t);

            if (this.isObject(t)) {
              var e = new FormData();
              return Object.keys(t).forEach(function (n) {
                var r = t[n];
                e.append(n, r);
              }), e;
            }

            throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
          }
        }, {
          key: "isObject",
          value: function value(t) {
            return "[object Object]" === Object.prototype.toString.call(t);
          }
        }, {
          key: "isFormData",
          value: function value(t) {
            return t instanceof FormData;
          }
        }, {
          key: "isFormElement",
          value: function value(t) {
            return t instanceof HTMLFormElement;
          }
        }, {
          key: "selectFiles",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new Promise(function (e, n) {
              var r = document.createElement("INPUT");
              r.type = "file", t.multiple && r.setAttribute("multiple", "multiple"), t.accept && r.setAttribute("accept", t.accept), r.style.display = "none", document.body.appendChild(r), r.addEventListener("change", function (t) {
                var n = t.target.files;
                e(n), document.body.removeChild(r);
              }, !1), r.click();
            });
          }
        }, {
          key: "parseHeaders",
          value: function value(t) {
            var e = t.trim().split(/[\r\n]+/),
                n = {};
            return e.forEach(function (t) {
              var e = t.split(": "),
                  r = e.shift(),
                  o = e.join(": ");
              r && (n[r] = o);
            }), n;
          }
        }]) && r(e, n), t;
      }();
    }, function (t, e) {
      var n = function n(t) {
        return encodeURIComponent(t).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      },
          r = function r(t, e, o, i) {
        return e = e || null, o = o || "&", i = i || null, t ? function (t) {
          for (var e = new Array(), n = 0; n < t.length; n++) {
            t[n] && e.push(t[n]);
          }

          return e;
        }(Object.keys(t).map(function (a) {
          var s,
              u,
              c = a;
          if (i && (c = i + "[" + c + "]"), "object" == _typeof(t[a]) && null !== t[a]) s = r(t[a], null, o, c);else {
            e && (u = c, c = !isNaN(parseFloat(u)) && isFinite(u) ? e + Number(c) : c);
            var l = t[a];
            l = (l = 0 === (l = !1 === (l = !0 === l ? "1" : l) ? "0" : l) ? "0" : l) || "", s = n(c) + "=" + n(l);
          }
          return s;
        })).join(o).replace(/[!'()*]/g, "") : "";
      };

      t.exports = r;
    }]);
  }, function (t, e, n) {
    t.exports = n(12);
  }, function (t, e) {
    function n(t, e, n, r, o, i, a) {
      try {
        var s = t[i](a),
            u = s.value;
      } catch (t) {
        return void n(t);
      }

      s.done ? e(u) : Promise.resolve(u).then(r, o);
    }

    t.exports = function (t) {
      return function () {
        var e = this,
            r = arguments;
        return new Promise(function (o, i) {
          var a = t.apply(e, r);

          function s(t) {
            n(a, o, i, s, u, "next", t);
          }

          function u(t) {
            n(a, o, i, s, u, "throw", t);
          }

          s(void 0);
        });
      };
    };
  }, function (t, e, n) {
    var r = n(19),
        o = n(20),
        i = n(21);

    t.exports = function (t) {
      return r(t) || o(t) || i();
    };
  }, function (t, e) {
    t.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>';
  }, function (t, e) {
    t.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"></path></svg>';
  }, function (t, e) {
    t.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"></path></svg>';
  }, function (t, e) {
    t.exports = '<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"></path></svg>';
  }, function (t, e) {
    t.exports = '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"></path></svg>';
  }, function (t, e, n) {
    var r = n(22),
        o = n(23),
        i = n(24);

    t.exports = function (t, e) {
      return r(t) || o(t, e) || i();
    };
  }, function (t, e, n) {
    var r = function () {
      return this || "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self;
    }() || Function("return this")(),
        o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
        i = o && r.regeneratorRuntime;

    if (r.regeneratorRuntime = void 0, t.exports = n(13), o) r.regeneratorRuntime = i;else try {
      delete r.regeneratorRuntime;
    } catch (t) {
      r.regeneratorRuntime = void 0;
    }
  }, function (t, e) {
    !function (e) {
      "use strict";

      var n,
          r = Object.prototype,
          o = r.hasOwnProperty,
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag",
          c = "object" == _typeof(t),
          l = e.regeneratorRuntime;

      if (l) c && (t.exports = l);else {
        (l = e.regeneratorRuntime = c ? t.exports : {}).wrap = w;
        var f = "suspendedStart",
            d = "suspendedYield",
            p = "executing",
            h = "completed",
            m = {},
            g = {};

        g[a] = function () {
          return this;
        };

        var v = Object.getPrototypeOf,
            y = v && v(v(F([])));
        y && y !== r && o.call(y, a) && (g = y);
        var b = S.prototype = E.prototype = Object.create(g);
        _.prototype = b.constructor = S, S.constructor = _, S[u] = _.displayName = "GeneratorFunction", l.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === _ || "GeneratorFunction" === (e.displayName || e.name));
        }, l.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, S) : (t.__proto__ = S, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(b), t;
        }, l.awrap = function (t) {
          return {
            __await: t
          };
        }, k(T.prototype), T.prototype[s] = function () {
          return this;
        }, l.AsyncIterator = T, l.async = function (t, e, n, r) {
          var o = new T(w(t, e, n, r));
          return l.isGeneratorFunction(e) ? o : o.next().then(function (t) {
            return t.done ? t.value : o.next();
          });
        }, k(b), b[u] = "Generator", b[a] = function () {
          return this;
        }, b.toString = function () {
          return "[object Generator]";
        }, l.keys = function (t) {
          var e = [];

          for (var n in t) {
            e.push(n);
          }

          return e.reverse(), function n() {
            for (; e.length;) {
              var r = e.pop();
              if (r in t) return n.value = r, n.done = !1, n;
            }

            return n.done = !0, n;
          };
        }, l.values = F, C.prototype = {
          constructor: C,
          reset: function reset(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(O), !t) for (var e in this) {
              "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n);
            }
          },
          stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(t) {
            if (this.done) throw t;
            var e = this;

            function r(r, o) {
              return s.type = "throw", s.arg = t, e.next = r, o && (e.method = "next", e.arg = n), !!o;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                  s = a.completion;
              if ("root" === a.tryLoc) return r("end");

              if (a.tryLoc <= this.prev) {
                var u = o.call(a, "catchLoc"),
                    c = o.call(a, "finallyLoc");

                if (u && c) {
                  if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                } else if (u) {
                  if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                } else {
                  if (!c) throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function abrupt(t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n];

              if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                var i = r;
                break;
              }
            }

            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, m) : this.complete(a);
          },
          complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), m;
          },
          finish: function finish(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), m;
            }
          },
          catch: function _catch(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];

              if (n.tryLoc === t) {
                var r = n.completion;

                if ("throw" === r.type) {
                  var o = r.arg;
                  O(n);
                }

                return o;
              }
            }

            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(t, e, r) {
            return this.delegate = {
              iterator: F(t),
              resultName: e,
              nextLoc: r
            }, "next" === this.method && (this.arg = n), m;
          }
        };
      }

      function w(t, e, n, r) {
        var o = e && e.prototype instanceof E ? e : E,
            i = Object.create(o.prototype),
            a = new C(r || []);
        return i._invoke = function (t, e, n) {
          var r = f;
          return function (o, i) {
            if (r === p) throw new Error("Generator is already running");

            if (r === h) {
              if ("throw" === o) throw i;
              return P();
            }

            for (n.method = o, n.arg = i;;) {
              var a = n.delegate;

              if (a) {
                var s = L(a, n);

                if (s) {
                  if (s === m) continue;
                  return s;
                }
              }

              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if (r === f) throw r = h, n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = p;
              var u = x(t, e, n);

              if ("normal" === u.type) {
                if (r = n.done ? h : d, u.arg === m) continue;
                return {
                  value: u.arg,
                  done: n.done
                };
              }

              "throw" === u.type && (r = h, n.method = "throw", n.arg = u.arg);
            }
          };
        }(t, n, a), i;
      }

      function x(t, e, n) {
        try {
          return {
            type: "normal",
            arg: t.call(e, n)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }

      function E() {}

      function _() {}

      function S() {}

      function k(t) {
        ["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t);
          };
        });
      }

      function T(t) {
        var e;

        this._invoke = function (n, r) {
          function i() {
            return new Promise(function (e, i) {
              !function e(n, r, i, a) {
                var s = x(t[n], t, r);

                if ("throw" !== s.type) {
                  var u = s.arg,
                      c = u.value;
                  return c && "object" == _typeof(c) && o.call(c, "__await") ? Promise.resolve(c.__await).then(function (t) {
                    e("next", t, i, a);
                  }, function (t) {
                    e("throw", t, i, a);
                  }) : Promise.resolve(c).then(function (t) {
                    u.value = t, i(u);
                  }, function (t) {
                    return e("throw", t, i, a);
                  });
                }

                a(s.arg);
              }(n, r, e, i);
            });
          }

          return e = e ? e.then(i, i) : i();
        };
      }

      function L(t, e) {
        var r = t.iterator[e.method];

        if (r === n) {
          if (e.delegate = null, "throw" === e.method) {
            if (t.iterator.return && (e.method = "return", e.arg = n, L(t, e), "throw" === e.method)) return m;
            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return m;
        }

        var o = x(r, t.iterator, e.arg);
        if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, m;
        var i = o.arg;
        return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n), e.delegate = null, m) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, m);
      }

      function j(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }

      function O(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }

      function C(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(j, this), this.reset(!0);
      }

      function F(t) {
        if (t) {
          var e = t[a];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;

          if (!isNaN(t.length)) {
            var r = -1,
                i = function e() {
              for (; ++r < t.length;) {
                if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
              }

              return e.value = n, e.done = !0, e;
            };

            return i.next = i;
          }
        }

        return {
          next: P
        };
      }

      function P() {
        return {
          value: n,
          done: !0
        };
      }
    }(function () {
      return this || "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self;
    }() || Function("return this")());
  }, function (t, e, n) {
    var r = n(15);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var o = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n(17)(r, o);
    r.locals && (t.exports = r.locals);
  }, function (t, e, n) {
    (t.exports = n(16)(!1)).push([t.i, ".image-tool {\n  --bg-color: #CDD1E0;\n  --front-color: #388AE5;\n  --border-color: #E8E8EB;\n}\n\n  .image-tool__image {\n    border-radius: 3px;\n    overflow: hidden;\n    margin-bottom: 10px;\n  }\n\n  .image-tool__image-picture {\n      max-width: 100%;\n      vertical-align: bottom;\n      display: block;\n    }\n\n  .image-tool__image-preloader {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-size: cover;\n      margin: auto;\n      position: relative;\n      background-color: var(--bg-color);\n      background-position: center center;\n    }\n\n  .image-tool__image-preloader::after {\n        content: '';\n        position: absolute;\n        z-index: 3;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        border: 2px solid var(--bg-color);\n        border-top-color: var(--front-color);\n        left: 50%;\n        top: 50%;\n        margin-top: -30px;\n        margin-left: -30px;\n        animation: image-preloader-spin 2s infinite linear;\n        box-sizing: border-box;\n      }\n\n  .image-tool--empty .image-tool__image {\n      display: none;\n    }\n\n  .image-tool--empty .image-tool__caption, .image-tool--loading .image-tool__caption {\n      display: none;\n    }\n\n  .image-tool--filled .cdx-button {\n      display: none;\n    }\n\n  .image-tool--filled .image-tool__image-preloader {\n        display: none;\n      }\n\n  .image-tool--loading .image-tool__image {\n      min-height: 200px;\n      display: flex;\n      border: 1px solid var(--border-color);\n      background-color: #fff;\n    }\n\n  .image-tool--loading .image-tool__image-picture {\n        display: none;\n      }\n\n  .image-tool--loading .cdx-button {\n      display: none;\n    }\n\n  /**\n   * Tunes\n   * ----------------\n   */\n\n  .image-tool--withBorder .image-tool__image {\n      border: 1px solid var(--border-color);\n    }\n\n  .image-tool--withBackground .image-tool__image {\n      padding: 15px;\n      background: var(--bg-color);\n    }\n\n  .image-tool--withBackground .image-tool__image-picture {\n        max-width: 60%;\n        margin: 0 auto;\n      }\n\n  .image-tool--stretched .image-tool__image-picture {\n        width: 100%;\n      }\n\n@keyframes image-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}", ""]);
  }, function (t, e) {
    t.exports = function (t) {
      var e = [];
      return e.toString = function () {
        return this.map(function (e) {
          var n = function (t, e) {
            var n = t[1] || "",
                r = t[3];
            if (!r) return n;

            if (e && "function" == typeof btoa) {
              var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                  i = r.sources.map(function (t) {
                return "/*# sourceURL=" + r.sourceRoot + t + " */";
              });
              return [n].concat(i).concat([o]).join("\n");
            }

            var a;
            return [n].join("\n");
          }(e, t);

          return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
        }).join("");
      }, e.i = function (t, n) {
        "string" == typeof t && (t = [[null, t, ""]]);

        for (var r = {}, o = 0; o < this.length; o++) {
          var i = this[o][0];
          "number" == typeof i && (r[i] = !0);
        }

        for (o = 0; o < t.length; o++) {
          var a = t[o];
          "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
        }
      }, e;
    };
  }, function (t, e, n) {
    var r,
        o,
        i = {},
        a = (r = function r() {
      return window && document && document.all && !window.atob;
    }, function () {
      return void 0 === o && (o = r.apply(this, arguments)), o;
    }),
        s = function (t) {
      var e = {};
      return function (t) {
        if ("function" == typeof t) return t();

        if (void 0 === e[t]) {
          var n = function (t) {
            return document.querySelector(t);
          }.call(this, t);

          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head;
          } catch (t) {
            n = null;
          }
          e[t] = n;
        }

        return e[t];
      };
    }(),
        u = null,
        c = 0,
        l = [],
        f = n(18);

    function d(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
            o = i[r.id];

        if (o) {
          o.refs++;

          for (var a = 0; a < o.parts.length; a++) {
            o.parts[a](r.parts[a]);
          }

          for (; a < r.parts.length; a++) {
            o.parts.push(y(r.parts[a], e));
          }
        } else {
          var s = [];

          for (a = 0; a < r.parts.length; a++) {
            s.push(y(r.parts[a], e));
          }

          i[r.id] = {
            id: r.id,
            refs: 1,
            parts: s
          };
        }
      }
    }

    function p(t, e) {
      for (var n = [], r = {}, o = 0; o < t.length; o++) {
        var i = t[o],
            a = e.base ? i[0] + e.base : i[0],
            s = {
          css: i[1],
          media: i[2],
          sourceMap: i[3]
        };
        r[a] ? r[a].parts.push(s) : n.push(r[a] = {
          id: a,
          parts: [s]
        });
      }

      return n;
    }

    function h(t, e) {
      var n = s(t.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = l[l.length - 1];
      if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), l.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
        if ("object" != _typeof(t.insertAt) || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var o = s(t.insertInto + " " + t.insertAt.before);
        n.insertBefore(e, o);
      }
    }

    function m(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = l.indexOf(t);
      e >= 0 && l.splice(e, 1);
    }

    function g(t) {
      var e = document.createElement("style");
      return void 0 === t.attrs.type && (t.attrs.type = "text/css"), v(e, t.attrs), h(t, e), e;
    }

    function v(t, e) {
      Object.keys(e).forEach(function (n) {
        t.setAttribute(n, e[n]);
      });
    }

    function y(t, e) {
      var n, r, o, i;

      if (e.transform && t.css) {
        if (!(i = e.transform(t.css))) return function () {};
        t.css = i;
      }

      if (e.singleton) {
        var a = c++;
        n = u || (u = g(e)), r = x.bind(null, n, a, !1), o = x.bind(null, n, a, !0);
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
        var e = document.createElement("link");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", v(e, t.attrs), h(t, e), e;
      }(e), r = function (t, e, n) {
        var r = n.css,
            o = n.sourceMap,
            i = void 0 === e.convertToAbsoluteUrls && o;
        (e.convertToAbsoluteUrls || i) && (r = f(r));
        o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var a = new Blob([r], {
          type: "text/css"
        }),
            s = t.href;
        t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
      }.bind(null, n, e), o = function o() {
        m(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = g(e), r = function (t, e) {
        var n = e.css,
            r = e.media;
        r && t.setAttribute("media", r);
        if (t.styleSheet) t.styleSheet.cssText = n;else {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(document.createTextNode(n));
        }
      }.bind(null, n), o = function o() {
        m(n);
      });

      return r(t), function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
          r(t = e);
        } else o();
      };
    }

    t.exports = function (t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
      (e = e || {}).attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
      var n = p(t, e);
      return d(n, e), function (t) {
        for (var r = [], o = 0; o < n.length; o++) {
          var a = n[o];
          (s = i[a.id]).refs--, r.push(s);
        }

        t && d(p(t, e), e);

        for (o = 0; o < r.length; o++) {
          var s;

          if (0 === (s = r[o]).refs) {
            for (var u = 0; u < s.parts.length; u++) {
              s.parts[u]();
            }

            delete i[s.id];
          }
        }
      };
    };

    var b,
        w = (b = [], function (t, e) {
      return b[t] = e, b.filter(Boolean).join("\n");
    });

    function x(t, e, n, r) {
      var o = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = w(e, o);else {
        var i = document.createTextNode(o),
            a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
      }
    }
  }, function (t, e) {
    t.exports = function (t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var n = e.protocol + "//" + e.host,
          r = n + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
        var o,
            i = e.trim().replace(/^"(.*)"$/, function (t, e) {
          return e;
        }).replace(/^'(.*)'$/, function (t, e) {
          return e;
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
      });
    };
  }, function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) {
          n[e] = t[e];
        }

        return n;
      }
    };
  }, function (t, e) {
    t.exports = function (t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
    };
  }, function (t, e) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    };
  }, function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) return t;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
          ;
        }
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == s.return || s.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    };
  }, function (t, e) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }, function (t, e, n) {
    "use strict";

    n.r(e);

    var r = n(3),
        o = n.n(r),
        i = n(4),
        a = n.n(i),
        s = n(1),
        u = n.n(s),
        c = n(0),
        l = n.n(c),
        f = (n(14), n(5)),
        d = n.n(f),
        p = n(6),
        h = n.n(p),
        m = function () {
      function t(e) {
        var n = e.api,
            r = e.config,
            o = e.onSelectFile;
        u()(this, t), this.api = n, this.config = r, this.onSelectFile = o, this.nodes = {
          wrapper: g("div", [this.CSS.baseClass, this.CSS.wrapper]),
          imageContainer: g("div", [this.CSS.imageContainer]),
          fileButton: this.createFileButton(),
          imageEl: void 0,
          imagePreloader: g("div", this.CSS.imagePreloader),
          caption: g("div", [this.CSS.input, this.CSS.caption], {
            contentEditable: !0
          })
        }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
      }

      return l()(t, [{
        key: "render",
        value: function value(e) {
          return e.file && 0 !== Object.keys(e.file).length ? this.toggleStatus(t.status.UPLOADING) : this.toggleStatus(t.status.EMPTY), this.nodes.wrapper;
        }
      }, {
        key: "createFileButton",
        value: function value() {
          var t = this,
              e = g("div", [this.CSS.button]);
          return e.innerHTML = this.config.buttonContent || "".concat(h.a, " Select an Image"), e.addEventListener("click", function () {
            t.onSelectFile();
          }), e;
        }
      }, {
        key: "showPreloader",
        value: function value(e) {
          this.nodes.imagePreloader.style.backgroundImage = "url(".concat(e, ")"), this.toggleStatus(t.status.UPLOADING);
        }
      }, {
        key: "hidePreloader",
        value: function value() {
          this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(t.status.EMPTY);
        }
      }, {
        key: "fillImage",
        value: function value(e) {
          var n = this,
              r = /\.mp4$/.test(e) ? "VIDEO" : "IMG",
              o = {
            src: e
          },
              i = "load";
          "VIDEO" === r && (o.autoplay = !0, o.loop = !0, o.muted = !0, o.playsinline = !0, i = "loadeddata"), this.nodes.imageEl = g(r, this.CSS.imageEl, o), this.nodes.imageEl.addEventListener(i, function () {
            n.toggleStatus(t.status.FILLED), n.nodes.imagePreloader && (n.nodes.imagePreloader.style.backgroundImage = "");
          }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
        }
      }, {
        key: "fillCaption",
        value: function value(t) {
          this.nodes.caption && (this.nodes.caption.innerHTML = t);
        }
      }, {
        key: "toggleStatus",
        value: function value(e) {
          for (var n in t.status) {
            t.status.hasOwnProperty(n) && this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper, "--").concat(t.status[n]), e === t.status[n]);
          }
        }
      }, {
        key: "applyTune",
        value: function value(t, e) {
          this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper, "--").concat(t), e);
        }
      }, {
        key: "CSS",
        get: function get() {
          return {
            baseClass: this.api.styles.block,
            loading: this.api.styles.loader,
            input: this.api.styles.input,
            button: this.api.styles.button,
            wrapper: "image-tool",
            imageContainer: "image-tool__image",
            imagePreloader: "image-tool__image-preloader",
            imageEl: "image-tool__image-picture",
            caption: "image-tool__caption"
          };
        }
      }], [{
        key: "status",
        get: function get() {
          return {
            EMPTY: "empty",
            UPLOADING: "loading",
            FILLED: "filled"
          };
        }
      }]), t;
    }(),
        g = function g(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = document.createElement(t);
      Array.isArray(n) ? (e = o.classList).add.apply(e, d()(n)) : n && o.classList.add(n);

      for (var i in r) {
        o[i] = r[i];
      }

      return o;
    },
        v = n(7),
        y = n.n(v),
        b = n(8),
        w = n.n(b),
        x = n(9),
        E = n.n(x),
        _ = function () {
      function t(e) {
        var n = e.api,
            r = e.onChange;
        u()(this, t), this.api = n, this.onChange = r, this.buttons = [];
      }

      return l()(t, [{
        key: "render",
        value: function value(e) {
          var n = this,
              r = g("div", this.CSS.wrapper);
          return this.buttons = [], t.tunes.forEach(function (t) {
            var o = g("div", [n.CSS.buttonBase, n.CSS.button], {
              innerHTML: t.icon,
              title: t.title
            });
            o.addEventListener("click", function () {
              n.tuneClicked(t.name);
            }), o.dataset.tune = t.name, o.classList.toggle(n.CSS.buttonActive, e[t.name]), n.buttons.push(o), r.appendChild(o);
          }), r;
        }
      }, {
        key: "tuneClicked",
        value: function value(t) {
          var e = this.buttons.find(function (e) {
            return e.dataset.tune === t;
          });
          e.classList.toggle(this.CSS.buttonActive, !e.classList.contains(this.CSS.buttonActive)), this.onChange(t);
        }
      }, {
        key: "CSS",
        get: function get() {
          return {
            wrapper: "",
            buttonBase: this.api.styles.settingsButton,
            button: "image-tool__tune",
            buttonActive: this.api.styles.settingsButtonActive
          };
        }
      }], [{
        key: "tunes",
        get: function get() {
          return [{
            name: "withBorder",
            icon: w.a,
            title: "With border"
          }, {
            name: "stretched",
            icon: E.a,
            title: "Stretch image"
          }, {
            name: "withBackground",
            icon: y.a,
            title: "With background"
          }];
        }
      }]), t;
    }(),
        S = n(10),
        k = n.n(S),
        T = n(11),
        L = n.n(T),
        j = n(2),
        O = n.n(j),
        C = function () {
      function t(e) {
        var n = e.config,
            r = e.onUpload,
            o = e.onError;
        u()(this, t), this.config = n, this.onUpload = r, this.onError = o;
      }

      return l()(t, [{
        key: "uploadSelectedFile",
        value: function value(t) {
          var e = this,
              n = t.onPreview,
              r = function r(t) {
            var e = new FileReader();
            e.readAsDataURL(t), e.onload = function (t) {
              n(t.target.result);
            };
          };

          (this.config.uploader && "function" == typeof this.config.uploader.uploadByFile ? O.a.selectFiles().then(function (t) {
            r(t[0]);
            var n = e.config.uploader.uploadByFile(t[0]);
            return F(n) || console.warn("Custom uploader method uploadByFile should return a Promise"), n;
          }) : O.a.transport({
            url: this.config.endpoints.byFile,
            data: this.config.additionalRequestData,
            accept: this.config.types,
            headers: this.config.additionalRequestHeaders,
            beforeSend: function beforeSend(t) {
              r(t[0]);
            },
            fieldName: this.config.field
          }).then(function (t) {
            return t.body;
          })).then(function (t) {
            e.onUpload(t);
          }).catch(function (t) {
            e.onError(t);
          });
        }
      }, {
        key: "uploadByUrl",
        value: function value(t) {
          var e,
              n = this;
          this.config.uploader && "function" == typeof this.config.uploader.uploadByUrl ? F(e = this.config.uploader.uploadByUrl(t)) || console.warn("Custom uploader method uploadByUrl should return a Promise") : e = O.a.post({
            url: this.config.endpoints.byUrl,
            data: Object.assign({
              url: t
            }, this.config.additionalRequestData),
            type: O.a.contentType.JSON,
            headers: this.config.additionalRequestHeaders
          }).then(function (t) {
            return t.body;
          }), e.then(function (t) {
            n.onUpload(t);
          }).catch(function (t) {
            n.onError(t);
          });
        }
      }, {
        key: "uploadByFile",
        value: function value(t, e) {
          var n,
              r = this,
              o = e.onPreview,
              i = new FileReader();
          if (i.readAsDataURL(t), i.onload = function (t) {
            o(t.target.result);
          }, this.config.uploader && "function" == typeof this.config.uploader.uploadByFile) F(n = this.config.uploader.uploadByFile(t)) || console.warn("Custom uploader method uploadByFile should return a Promise");else {
            var a = new FormData();
            a.append(this.config.field, t), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(function (t) {
              var e = L()(t, 2),
                  n = e[0],
                  r = e[1];
              a.append(n, r);
            }), n = O.a.post({
              url: this.config.endpoints.byFile,
              data: a,
              type: O.a.contentType.JSON,
              headers: this.config.additionalRequestHeaders
            }).then(function (t) {
              return t.body;
            });
          }
          n.then(function (t) {
            r.onUpload(t);
          }).catch(function (t) {
            r.onError(t);
          });
        }
      }]), t;
    }();

    function F(t) {
      return Promise.resolve(t) === t;
    }

    n.d(e, "default", function () {
      return P;
    });
    /**
     * Image Tool for the Editor.js
     * @author CodeX <team@ifmo.su>
     * @license MIT
     * @see {@link https://github.com/editor-js/image}
     *
     * To developers.
     * To simplify Tool structure, we split it to 4 parts:
     *  1) index.js — main Tool's interface, public API and methods for working with data
     *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
     *  3) ui.js — module for UI manipulations: render, showing preloader, etc
     *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
     *
     * For debug purposes there is a testing server
     * that can save uploaded files and return a Response {@link UploadResponseFormat}
     *
     *       $ node dev/server.js
     *
     * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
     *
     * image: {
     *   class: ImageTool,
     *   config: {
     *     endpoints: {
     *       byFile: 'http://localhost:8008/uploadFile',
     *       byUrl: 'http://localhost:8008/fetchUrl',
     *     }
     *   },
     * },
     */

    var P = function () {
      function t(e) {
        var n = this,
            r = e.data,
            o = e.config,
            i = e.api;
        u()(this, t), this.api = i, this.config = {
          endpoints: o.endpoints || "",
          additionalRequestData: o.additionalRequestData || {},
          additionalRequestHeaders: o.additionalRequestHeaders || {},
          field: o.field || "image",
          types: o.types || "image/*",
          captionPlaceholder: o.captionPlaceholder || "Caption",
          buttonContent: o.buttonContent || "",
          uploader: o.uploader || void 0
        }, this.uploader = new C({
          config: this.config,
          onUpload: function onUpload(t) {
            return n.onUpload(t);
          },
          onError: function onError(t) {
            return n.uploadingFailed(t);
          }
        }), this.ui = new m({
          api: i,
          config: this.config,
          onSelectFile: function onSelectFile() {
            n.uploader.uploadSelectedFile({
              onPreview: function onPreview(t) {
                n.ui.showPreloader(t);
              }
            });
          }
        }), this.tunes = new _({
          api: i,
          onChange: function onChange(t) {
            return n.tuneToggled(t);
          }
        }), this._data = {}, this.data = r;
      }

      return l()(t, null, [{
        key: "toolbox",
        get: function get() {
          return {
            icon: k.a,
            title: "Image"
          };
        }
      }]), l()(t, [{
        key: "render",
        value: function value() {
          return this.ui.render(this.data);
        }
      }, {
        key: "save",
        value: function value() {
          var t = this.ui.nodes.caption;
          return this._data.caption = t.innerHTML, this.data;
        }
      }, {
        key: "renderSettings",
        value: function value() {
          return this.tunes.render(this.data);
        }
      }, {
        key: "appendCallback",
        value: function value() {
          this.ui.nodes.fileButton.click();
        }
      }, {
        key: "onPaste",
        value: function () {
          var t = a()(o.a.mark(function t(e) {
            var n, r, i, a, s;
            return o.a.wrap(function (t) {
              for (;;) {
                switch (t.prev = t.next) {
                  case 0:
                    t.t0 = e.type, t.next = "tag" === t.t0 ? 3 : "pattern" === t.t0 ? 15 : "file" === t.t0 ? 18 : 21;
                    break;

                  case 3:
                    if (n = e.detail.data, !/^blob:/.test(n.src)) {
                      t.next = 13;
                      break;
                    }

                    return t.next = 7, fetch(n.src);

                  case 7:
                    return r = t.sent, t.next = 10, r.blob();

                  case 10:
                    return i = t.sent, this.uploadFile(i), t.abrupt("break", 21);

                  case 13:
                    return this.uploadUrl(n.src), t.abrupt("break", 21);

                  case 15:
                    return a = e.detail.data, this.uploadUrl(a), t.abrupt("break", 21);

                  case 18:
                    return s = e.detail.file, this.uploadFile(s), t.abrupt("break", 21);

                  case 21:
                  case "end":
                    return t.stop();
                }
              }
            }, t, this);
          }));
          return function (e) {
            return t.apply(this, arguments);
          };
        }()
      }, {
        key: "onUpload",
        value: function value(t) {
          t.success && t.file ? this.image = t.file : this.uploadingFailed("incorrect response: " + JSON.stringify(t));
        }
      }, {
        key: "uploadingFailed",
        value: function value(t) {
          console.log("Image Tool: uploading failed because of", t), this.api.notifier.show({
            message: "Can not upload an image, try another",
            style: "error"
          }), this.ui.hidePreloader();
        }
      }, {
        key: "tuneToggled",
        value: function value(t) {
          this.setTune(t, !this._data[t]);
        }
      }, {
        key: "setTune",
        value: function value(t, e) {
          var n = this;

          if (this._data[t] = e, this.ui.applyTune(t, e), "stretched" === t) {
            var r = this.api.blocks.getCurrentBlockIndex();
            setTimeout(function () {
              n.api.blocks.stretchBlock(r, e);
            }, 0);
          }
        }
      }, {
        key: "uploadFile",
        value: function value(t) {
          var e = this;
          this.uploader.uploadByFile(t, {
            onPreview: function onPreview(t) {
              e.ui.showPreloader(t);
            }
          });
        }
      }, {
        key: "uploadUrl",
        value: function value(t) {
          this.ui.showPreloader(t), this.uploader.uploadByUrl(t);
        }
      }, {
        key: "data",
        set: function set(t) {
          var e = this;
          this.image = t.file, this._data.caption = t.caption || "", this.ui.fillCaption(this._data.caption), _.tunes.forEach(function (n) {
            var r = n.name,
                o = void 0 !== t[r] && t[r];
            e.setTune(r, o);
          });
        },
        get: function get() {
          return this._data;
        }
      }, {
        key: "image",
        set: function set(t) {
          this._data.file = t || {}, t && t.url && this.ui.fillImage(t.url);
        }
      }], [{
        key: "pasteConfig",
        get: function get() {
          return {
            tags: ["img"],
            patterns: {
              image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i
            },
            files: {
              mimeTypes: ["image/*"]
            }
          };
        }
      }]), t;
    }();
  }]).default;
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.InlineCode = e() : t.InlineCode = e();
}(window, function () {
  return function (t) {
    var e = {};

    function n(r) {
      if (e[r]) return e[r].exports;
      var o = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var o in t) {
        n.d(r, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
      return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "/", n(n.s = 0);
  }([function (t, e, n) {
    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    function o(t, e, n) {
      return e && r(t.prototype, e), n && r(t, n), t;
    }

    n(1).toString();

    var i = function () {
      function t(e) {
        var n = e.api;
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.api = n, this.button = null, this.tag = "CODE", this.iconClasses = {
          base: this.api.styles.inlineToolButton,
          active: this.api.styles.inlineToolButtonActive
        };
      }

      return o(t, null, [{
        key: "CSS",
        get: function get() {
          return "inline-code";
        }
      }]), o(t, [{
        key: "render",
        value: function value() {
          return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button;
        }
      }, {
        key: "surround",
        value: function value(e) {
          if (e) {
            var n = this.api.selection.findParentTag(this.tag, t.CSS);
            n ? this.unwrap(n) : this.wrap(e);
          }
        }
      }, {
        key: "wrap",
        value: function value(e) {
          var n = document.createElement(this.tag);
          n.classList.add(t.CSS), n.appendChild(e.extractContents()), e.insertNode(n), this.api.selection.expandToTag(n);
        }
      }, {
        key: "unwrap",
        value: function value(t) {
          this.api.selection.expandToTag(t);
          var e = window.getSelection(),
              n = e.getRangeAt(0),
              r = n.extractContents();
          t.parentNode.removeChild(t), n.insertNode(r), e.removeAllRanges(), e.addRange(n);
        }
      }, {
        key: "checkState",
        value: function value() {
          var e = this.api.selection.findParentTag(this.tag, t.CSS);
          this.button.classList.toggle(this.iconClasses.active, !!e);
        }
      }, {
        key: "toolboxIcon",
        get: function get() {
          return n(6).default;
        }
      }], [{
        key: "isInline",
        get: function get() {
          return !0;
        }
      }, {
        key: "sanitize",
        get: function get() {
          return {
            code: {
              class: t.CSS
            }
          };
        }
      }]), t;
    }();

    t.exports = i;
  }, function (t, e, n) {
    var r = n(2);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var o = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n(4)(r, o);
    r.locals && (t.exports = r.locals);
  }, function (t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, ".inline-code {\n  background: rgba(250, 239, 240, 0.78);\n  color: #b44437;\n  padding: 3px 4px;\n  border-radius: 5px;\n  margin: 0 1px;\n  font-family: inherit;\n  font-size: 0.86em;\n  font-weight: 500;\n  letter-spacing: 0.3px;\n}\n", ""]);
  }, function (t, e) {
    t.exports = function (t) {
      var e = [];
      return e.toString = function () {
        return this.map(function (e) {
          var n = function (t, e) {
            var n = t[1] || "",
                r = t[3];
            if (!r) return n;

            if (e && "function" == typeof btoa) {
              var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                  i = r.sources.map(function (t) {
                return "/*# sourceURL=" + r.sourceRoot + t + " */";
              });
              return [n].concat(i).concat([o]).join("\n");
            }

            var a;
            return [n].join("\n");
          }(e, t);

          return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
        }).join("");
      }, e.i = function (t, n) {
        "string" == typeof t && (t = [[null, t, ""]]);

        for (var r = {}, o = 0; o < this.length; o++) {
          var i = this[o][0];
          "number" == typeof i && (r[i] = !0);
        }

        for (o = 0; o < t.length; o++) {
          var a = t[o];
          "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
        }
      }, e;
    };
  }, function (t, e, n) {
    var r,
        o,
        i = {},
        a = (r = function r() {
      return window && document && document.all && !window.atob;
    }, function () {
      return void 0 === o && (o = r.apply(this, arguments)), o;
    }),
        s = function (t) {
      var e = {};
      return function (t) {
        if ("function" == typeof t) return t();

        if (void 0 === e[t]) {
          var n = function (t) {
            return document.querySelector(t);
          }.call(this, t);

          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head;
          } catch (t) {
            n = null;
          }
          e[t] = n;
        }

        return e[t];
      };
    }(),
        u = null,
        c = 0,
        f = [],
        l = n(5);

    function p(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
            o = i[r.id];

        if (o) {
          o.refs++;

          for (var a = 0; a < o.parts.length; a++) {
            o.parts[a](r.parts[a]);
          }

          for (; a < r.parts.length; a++) {
            o.parts.push(g(r.parts[a], e));
          }
        } else {
          var s = [];

          for (a = 0; a < r.parts.length; a++) {
            s.push(g(r.parts[a], e));
          }

          i[r.id] = {
            id: r.id,
            refs: 1,
            parts: s
          };
        }
      }
    }

    function d(t, e) {
      for (var n = [], r = {}, o = 0; o < t.length; o++) {
        var i = t[o],
            a = e.base ? i[0] + e.base : i[0],
            s = {
          css: i[1],
          media: i[2],
          sourceMap: i[3]
        };
        r[a] ? r[a].parts.push(s) : n.push(r[a] = {
          id: a,
          parts: [s]
        });
      }

      return n;
    }

    function h(t, e) {
      var n = s(t.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = f[f.length - 1];
      if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), f.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
        if ("object" != _typeof(t.insertAt) || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var o = s(t.insertInto + " " + t.insertAt.before);
        n.insertBefore(e, o);
      }
    }

    function v(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = f.indexOf(t);
      e >= 0 && f.splice(e, 1);
    }

    function b(t) {
      var e = document.createElement("style");
      return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), e;
    }

    function y(t, e) {
      Object.keys(e).forEach(function (n) {
        t.setAttribute(n, e[n]);
      });
    }

    function g(t, e) {
      var n, r, o, i;

      if (e.transform && t.css) {
        if (!(i = e.transform(t.css))) return function () {};
        t.css = i;
      }

      if (e.singleton) {
        var a = c++;
        n = u || (u = b(e)), r = x.bind(null, n, a, !1), o = x.bind(null, n, a, !0);
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
        var e = document.createElement("link");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e;
      }(e), r = function (t, e, n) {
        var r = n.css,
            o = n.sourceMap,
            i = void 0 === e.convertToAbsoluteUrls && o;
        (e.convertToAbsoluteUrls || i) && (r = l(r));
        o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var a = new Blob([r], {
          type: "text/css"
        }),
            s = t.href;
        t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
      }.bind(null, n, e), o = function o() {
        v(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = b(e), r = function (t, e) {
        var n = e.css,
            r = e.media;
        r && t.setAttribute("media", r);
        if (t.styleSheet) t.styleSheet.cssText = n;else {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(document.createTextNode(n));
        }
      }.bind(null, n), o = function o() {
        v(n);
      });

      return r(t), function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
          r(t = e);
        } else o();
      };
    }

    t.exports = function (t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
      (e = e || {}).attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
      var n = d(t, e);
      return p(n, e), function (t) {
        for (var r = [], o = 0; o < n.length; o++) {
          var a = n[o];
          (s = i[a.id]).refs--, r.push(s);
        }

        t && p(d(t, e), e);

        for (o = 0; o < r.length; o++) {
          var s;

          if (0 === (s = r[o]).refs) {
            for (var u = 0; u < s.parts.length; u++) {
              s.parts[u]();
            }

            delete i[s.id];
          }
        }
      };
    };

    var m,
        w = (m = [], function (t, e) {
      return m[t] = e, m.filter(Boolean).join("\n");
    });

    function x(t, e, n, r) {
      var o = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = w(e, o);else {
        var i = document.createTextNode(o),
            a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
      }
    }
  }, function (t, e) {
    t.exports = function (t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var n = e.protocol + "//" + e.host,
          r = n + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
        var o,
            i = e.trim().replace(/^"(.*)"$/, function (t, e) {
          return e;
        }).replace(/^'(.*)'$/, function (t, e) {
          return e;
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
      });
    };
  }, function (t, e, n) {
    "use strict";

    n.r(e), e.default = '<svg width="17" height="12" viewBox="1 -1 16 15" xmlns="http://www.w3.org/2000/svg"><path d="M17.839 5.525a1.105 1.105 0 0 1-.015 1.547l-4.943 4.943a1.105 1.105 0 1 1-1.562-1.562l4.137-4.137-4.078-4.078A1.125 1.125 0 1 1 12.97.648l4.796 4.796c.026.026.05.053.074.08zm-14.952.791l4.137 4.137a1.105 1.105 0 1 1-1.562 1.562L.519 7.072a1.105 1.105 0 0 1-.015-1.547c.023-.028.048-.055.074-.081L5.374.647a1.125 1.125 0 0 1 1.591 1.591L2.887 6.316z" id="a"/></svg>\n';
  }]);
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.LinkTool = e() : t.LinkTool = e();
}(window, function () {
  return function (t) {
    var e = {};

    function n(r) {
      if (e[r]) return e[r].exports;
      var o = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var o in t) {
        n.d(r, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
      return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "/", n(n.s = 7);
  }([function (t, e, n) {
    t.exports = n(11);
  }, function (t, e) {
    function n(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    t.exports = function (t, e, r) {
      return e && n(t.prototype, e), r && n(t, r), t;
    };
  }, function (t, e, n) {
    var r = n(8),
        o = n(9),
        i = n(10);

    t.exports = function (t) {
      return r(t) || o(t) || i();
    };
  }, function (t, e) {
    function n(t, e, n, r, o, i, a) {
      try {
        var s = t[i](a),
            c = s.value;
      } catch (t) {
        return void n(t);
      }

      s.done ? e(c) : Promise.resolve(c).then(r, o);
    }

    t.exports = function (t) {
      return function () {
        var e = this,
            r = arguments;
        return new Promise(function (o, i) {
          var a = t.apply(e, r);

          function s(t) {
            n(a, o, i, s, c, "next", t);
          }

          function c(t) {
            n(a, o, i, s, c, "throw", t);
          }

          s(void 0);
        });
      };
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    };
  }, function (t, e) {
    t.exports = '<svg width="13" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M8.567 13.629c.728.464 1.581.65 2.41.558l-.873.873A3.722 3.722 0 1 1 4.84 9.794L6.694 7.94a3.722 3.722 0 0 1 5.256-.008L10.484 9.4a5.209 5.209 0 0 1-.017.016 1.625 1.625 0 0 0-2.29.009l-1.854 1.854a1.626 1.626 0 0 0 2.244 2.35zm2.766-7.358a3.722 3.722 0 0 0-2.41-.558l.873-.873a3.722 3.722 0 1 1 5.264 5.266l-1.854 1.854a3.722 3.722 0 0 1-5.256.008L9.416 10.5a5.2 5.2 0 0 1 .017-.016 1.625 1.625 0 0 0 2.29-.009l1.854-1.854a1.626 1.626 0 0 0-2.244-2.35z" transform="translate(-3.667 -2.7)"></path></svg>';
  }, function (t, e, n) {
    window, t.exports = function (t) {
      var e = {};

      function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
      }

      return n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: r
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var o in t) {
          n.d(r, o, function (e) {
            return t[e];
          }.bind(null, o));
        }
        return r;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "", n(n.s = 3);
    }([function (t, e) {
      var n;

      n = function () {
        return this;
      }();

      try {
        n = n || Function("return this")() || (0, eval)("this");
      } catch (t) {
        "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
      }

      t.exports = n;
    }, function (t, e, n) {
      "use strict";

      (function (t) {
        var r = n(2),
            o = setTimeout;

        function i() {}

        function a(t) {
          if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof t) throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this);
        }

        function s(t, e) {
          for (; 3 === t._state;) {
            t = t._value;
          }

          0 !== t._state ? (t._handled = !0, a._immediateFn(function () {
            var n = 1 === t._state ? e.onFulfilled : e.onRejected;

            if (null !== n) {
              var r;

              try {
                r = n(t._value);
              } catch (t) {
                return void u(e.promise, t);
              }

              c(e.promise, r);
            } else (1 === t._state ? c : u)(e.promise, t._value);
          })) : t._deferreds.push(e);
        }

        function c(t, e) {
          try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");

            if (e && ("object" == _typeof(e) || "function" == typeof e)) {
              var n = e.then;
              if (e instanceof a) return t._state = 3, t._value = e, void l(t);
              if ("function" == typeof n) return void f(function (t, e) {
                return function () {
                  t.apply(e, arguments);
                };
              }(n, e), t);
            }

            t._state = 1, t._value = e, l(t);
          } catch (e) {
            u(t, e);
          }
        }

        function u(t, e) {
          t._state = 2, t._value = e, l(t);
        }

        function l(t) {
          2 === t._state && 0 === t._deferreds.length && a._immediateFn(function () {
            t._handled || a._unhandledRejectionFn(t._value);
          });

          for (var e = 0, n = t._deferreds.length; e < n; e++) {
            s(t, t._deferreds[e]);
          }

          t._deferreds = null;
        }

        function f(t, e) {
          var n = !1;

          try {
            t(function (t) {
              n || (n = !0, c(e, t));
            }, function (t) {
              n || (n = !0, u(e, t));
            });
          } catch (t) {
            if (n) return;
            n = !0, u(e, t);
          }
        }

        a.prototype.catch = function (t) {
          return this.then(null, t);
        }, a.prototype.then = function (t, e) {
          var n = new this.constructor(i);
          return s(this, new function (t, e, n) {
            this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
          }(t, e, n)), n;
        }, a.prototype.finally = r.a, a.all = function (t) {
          return new a(function (e, n) {
            if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
            var r = Array.prototype.slice.call(t);
            if (0 === r.length) return e([]);
            var o = r.length;

            function i(t, a) {
              try {
                if (a && ("object" == _typeof(a) || "function" == typeof a)) {
                  var s = a.then;
                  if ("function" == typeof s) return void s.call(a, function (e) {
                    i(t, e);
                  }, n);
                }

                r[t] = a, 0 == --o && e(r);
              } catch (t) {
                n(t);
              }
            }

            for (var a = 0; a < r.length; a++) {
              i(a, r[a]);
            }
          });
        }, a.resolve = function (t) {
          return t && "object" == _typeof(t) && t.constructor === a ? t : new a(function (e) {
            e(t);
          });
        }, a.reject = function (t) {
          return new a(function (e, n) {
            n(t);
          });
        }, a.race = function (t) {
          return new a(function (e, n) {
            for (var r = 0, o = t.length; r < o; r++) {
              t[r].then(e, n);
            }
          });
        }, a._immediateFn = "function" == typeof t && function (e) {
          t(e);
        } || function (t) {
          o(t, 0);
        }, a._unhandledRejectionFn = function (t) {
          "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
        }, e.a = a;
      }).call(this, n(5).setImmediate);
    }, function (t, e, n) {
      "use strict";

      e.a = function (t) {
        var e = this.constructor;
        return this.then(function (n) {
          return e.resolve(t()).then(function () {
            return n;
          });
        }, function (n) {
          return e.resolve(t()).then(function () {
            return e.reject(n);
          });
        });
      };
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      n(4);

      var o = n(8),
          i = function () {
        var t = {
          URLENCODED: "application/x-www-form-urlencoded; charset=utf-8",
          FORM: "multipart/form-data",
          JSON: "application/json; charset=utf-8"
        },
            e = function e(t) {
          return new Promise(function (e, n) {
            t = a(t), t = s(t);
            var r = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
            r.open(t.method, t.url), r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function (e) {
              var n = t.headers[e];
              r.setRequestHeader(e, n);
            });
            var o = t.ratio;
            r.upload.addEventListener("progress", function (e) {
              var n = Math.round(e.loaded / e.total * 100),
                  r = Math.ceil(n * o / 100);
              t.progress(r);
            }, !1), r.addEventListener("progress", function (e) {
              var n = Math.round(e.loaded / e.total * 100),
                  r = Math.ceil(n * (100 - o) / 100) + o;
              t.progress(r);
            }, !1), r.onreadystatechange = function () {
              if (4 === r.readyState) {
                var t = r.response;

                try {
                  t = JSON.parse(t);
                } catch (t) {}

                200 === r.status ? e(t) : n(t);
              }
            }, r.send(t.data);
          });
        },
            n = function n(t) {
          return t.method = "POST", e(t);
        },
            a = function a(e) {
          if (!e.url || "string" != typeof e.url) throw new Error("Url must be a non-empty string");
          if (e.method && "string" != typeof e.method) throw new Error("`method` must be a string or null");
          if (e.method = e.method ? e.method.toUpperCase() : "GET", e.headers && "object" !== r(e.headers)) throw new Error("`headers` must be an object or null");
          if (e.headers = e.headers || {}, e.type && ("string" != typeof e.type || !Object.values(t).includes(e.type))) throw new Error("`type` must be taken from module's «contentType» library");
          if (e.progress && "function" != typeof e.progress) throw new Error("`progress` must be a function or null");
          if (e.progress = e.progress || function (t) {}, e.beforeSend = e.beforeSend || function (t) {}, e.ratio && "number" != typeof e.ratio) throw new Error("`ratio` must be a number");
          if (e.ratio < 0 || e.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
          if (e.ratio = e.ratio || 90, e.accept && "string" != typeof e.accept) throw new Error("`accept` must be a string with a list of allowed mime-types");
          if (e.accept = e.accept || "*/*", e.multiple && "boolean" != typeof e.multiple) throw new Error("`multiple` must be a true or false");
          if (e.multiple = e.multiple || !1, e.fieldName && "string" != typeof e.fieldName) throw new Error("`fieldName` must be a string");
          return e.fieldName = e.fieldName || "files", e;
        },
            s = function s(e) {
          switch (e.method) {
            case "GET":
              var n = c(e.data, t.URLENCODED);
              delete e.data, e.url = /\?/.test(e.url) ? e.url + "&" + n : e.url + "?" + n;
              break;

            case "POST":
            case "PUT":
            case "DELETE":
            case "UPDATE":
              var r = function () {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).type || t.JSON;
              }(e);

              (o.isFormData(e.data) || o.isFormElement(e.data)) && (r = t.FORM), e.data = c(e.data, r), r !== i.contentType.FORM && (e.headers["content-type"] = r);
          }

          return e;
        },
            c = function c() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          switch (arguments.length > 1 ? arguments[1] : void 0) {
            case t.URLENCODED:
              return o.urlEncode(e);

            case t.JSON:
              return o.jsonEncode(e);

            case t.FORM:
              return o.formEncode(e);

            default:
              return e;
          }
        };

        return {
          contentType: t,
          request: e,
          get: function get(t) {
            return t.method = "GET", e(t);
          },
          post: n,
          transport: function transport(t) {
            return t = a(t), o.transport(t).then(function (e) {
              return o.isObject(t.data) && Object.keys(t.data).forEach(function (n) {
                var r = t.data[n];
                e.append(n, r);
              }), t.data = e, n(t);
            });
          }
        };
      }();

      t.exports = i;
    }, function (t, e, n) {
      "use strict";

      n.r(e);
      var r = n(1);
      window.Promise = window.Promise || r.a;
    }, function (t, e, n) {
      (function (t) {
        var r = void 0 !== t && t || "undefined" != typeof self && self || window,
            o = Function.prototype.apply;

        function i(t, e) {
          this._id = t, this._clearFn = e;
        }

        e.setTimeout = function () {
          return new i(o.call(setTimeout, r, arguments), clearTimeout);
        }, e.setInterval = function () {
          return new i(o.call(setInterval, r, arguments), clearInterval);
        }, e.clearTimeout = e.clearInterval = function (t) {
          t && t.close();
        }, i.prototype.unref = i.prototype.ref = function () {}, i.prototype.close = function () {
          this._clearFn.call(r, this._id);
        }, e.enroll = function (t, e) {
          clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
        }, e.unenroll = function (t) {
          clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
        }, e._unrefActive = e.active = function (t) {
          clearTimeout(t._idleTimeoutId);
          var e = t._idleTimeout;
          e >= 0 && (t._idleTimeoutId = setTimeout(function () {
            t._onTimeout && t._onTimeout();
          }, e));
        }, n(6), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate;
      }).call(this, n(0));
    }, function (t, e, n) {
      (function (t, e) {
        !function (t, n) {
          "use strict";

          if (!t.setImmediate) {
            var r,
                o = 1,
                i = {},
                a = !1,
                s = t.document,
                c = Object.getPrototypeOf && Object.getPrototypeOf(t);
            c = c && c.setTimeout ? c : t, "[object process]" === {}.toString.call(t.process) ? r = function r(t) {
              e.nextTick(function () {
                l(t);
              });
            } : function () {
              if (t.postMessage && !t.importScripts) {
                var e = !0,
                    n = t.onmessage;
                return t.onmessage = function () {
                  e = !1;
                }, t.postMessage("", "*"), t.onmessage = n, e;
              }
            }() ? function () {
              var e = "setImmediate$" + Math.random() + "$",
                  n = function n(_n) {
                _n.source === t && "string" == typeof _n.data && 0 === _n.data.indexOf(e) && l(+_n.data.slice(e.length));
              };

              t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), r = function r(n) {
                t.postMessage(e + n, "*");
              };
            }() : t.MessageChannel ? function () {
              var t = new MessageChannel();
              t.port1.onmessage = function (t) {
                l(t.data);
              }, r = function r(e) {
                t.port2.postMessage(e);
              };
            }() : s && "onreadystatechange" in s.createElement("script") ? function () {
              var t = s.documentElement;

              r = function r(e) {
                var n = s.createElement("script");
                n.onreadystatechange = function () {
                  l(e), n.onreadystatechange = null, t.removeChild(n), n = null;
                }, t.appendChild(n);
              };
            }() : r = function r(t) {
              setTimeout(l, 0, t);
            }, c.setImmediate = function (t) {
              "function" != typeof t && (t = new Function("" + t));

              for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) {
                e[n] = arguments[n + 1];
              }

              var a = {
                callback: t,
                args: e
              };
              return i[o] = a, r(o), o++;
            }, c.clearImmediate = u;
          }

          function u(t) {
            delete i[t];
          }

          function l(t) {
            if (a) setTimeout(l, 0, t);else {
              var e = i[t];

              if (e) {
                a = !0;

                try {
                  !function (t) {
                    var e = t.callback,
                        r = t.args;

                    switch (r.length) {
                      case 0:
                        e();
                        break;

                      case 1:
                        e(r[0]);
                        break;

                      case 2:
                        e(r[0], r[1]);
                        break;

                      case 3:
                        e(r[0], r[1], r[2]);
                        break;

                      default:
                        e.apply(n, r);
                    }
                  }(e);
                } finally {
                  u(t), a = !1;
                }
              }
            }
          }
        }("undefined" == typeof self ? void 0 === t ? this : t : self);
      }).call(this, n(0), n(7));
    }, function (t, e) {
      var n,
          r,
          o = t.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined");
      }

      function a() {
        throw new Error("clearTimeout has not been defined");
      }

      function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);

        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }

      !function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : i;
        } catch (t) {
          n = i;
        }

        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (t) {
          r = a;
        }
      }();
      var c,
          u = [],
          l = !1,
          f = -1;

      function h() {
        l && c && (l = !1, c.length ? u = c.concat(u) : f = -1, u.length && p());
      }

      function p() {
        if (!l) {
          var t = s(h);
          l = !0;

          for (var e = u.length; e;) {
            for (c = u, u = []; ++f < e;) {
              c && c[f].run();
            }

            f = -1, e = u.length;
          }

          c = null, l = !1, function (t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);

            try {
              r(t);
            } catch (e) {
              try {
                return r.call(null, t);
              } catch (e) {
                return r.call(this, t);
              }
            }
          }(t);
        }
      }

      function d(t, e) {
        this.fun = t, this.array = e;
      }

      function m() {}

      o.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }
        u.push(new d(t, e)), 1 !== u.length || l || s(p);
      }, d.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function (t) {
        return [];
      }, o.binding = function (t) {
        throw new Error("process.binding is not supported");
      }, o.cwd = function () {
        return "/";
      }, o.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }, o.umask = function () {
        return 0;
      };
    }, function (t, e, n) {
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      var o = n(9);

      t.exports = function () {
        function t() {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
        }

        return function (t, e, n) {
          n && r(t, n);
        }(t, 0, [{
          key: "urlEncode",
          value: function value(t) {
            return o(t);
          }
        }, {
          key: "jsonEncode",
          value: function value(t) {
            return JSON.stringify(t);
          }
        }, {
          key: "formEncode",
          value: function value(t) {
            if (this.isFormData(t)) return t;
            if (this.isFormElement(t)) return new FormData(t);

            if (this.isObject(t)) {
              var e = new FormData();
              return Object.keys(t).forEach(function (n) {
                var r = t[n];
                e.append(n, r);
              }), e;
            }

            throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
          }
        }, {
          key: "isObject",
          value: function value(t) {
            return "[object Object]" === Object.prototype.toString.call(t);
          }
        }, {
          key: "isFormData",
          value: function value(t) {
            return t instanceof FormData;
          }
        }, {
          key: "isFormElement",
          value: function value(t) {
            return t instanceof HTMLFormElement;
          }
        }, {
          key: "transport",
          value: function value(t) {
            return new Promise(function (e, n) {
              var r = document.createElement("INPUT");
              r.type = "file", t.multiple && r.setAttribute("multiple", "multiple"), t.accept && r.setAttribute("accept", t.accept), r.addEventListener("change", function (n) {
                for (var r = n.target.files, o = new FormData(), i = 0; i < r.length; i++) {
                  o.append(t.fieldName, r[i], r[i].name);
                }

                t.beforeSend(r), e(o);
              }, !1), r.click();
            });
          }
        }]), t;
      }();
    }, function (t, e) {
      var n = function n(t) {
        return encodeURIComponent(t).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      },
          r = function r(t, e, o, i) {
        return e = e || null, o = o || "&", i = i || null, t ? function (t) {
          for (var e = new Array(), n = 0; n < t.length; n++) {
            t[n] && e.push(t[n]);
          }

          return e;
        }(Object.keys(t).map(function (a) {
          var s,
              c = a;
          if (i && (c = i + "[" + c + "]"), "object" == _typeof(t[a]) && null !== t[a]) s = r(t[a], null, o, c);else {
            e && (c = function (t) {
              return !isNaN(parseFloat(t)) && isFinite(t);
            }(c) ? e + Number(c) : c);
            var u = t[a];
            u = (u = 0 === (u = !1 === (u = !0 === u ? "1" : u) ? "0" : u) ? "0" : u) || "", s = n(c) + "=" + n(u);
          }
          return s;
        })).join(o).replace(/[!'()*]/g, "") : "";
      };

      t.exports = r;
    }]);
  }, function (t, e, n) {
    "use strict";

    n.r(e), n.d(e, "default", function () {
      return y;
    });
    var r = n(2),
        o = n.n(r),
        i = n(0),
        a = n.n(i),
        s = n(3),
        c = n.n(s),
        u = n(4),
        l = n.n(u),
        f = n(1),
        h = n.n(f),
        p = (n(13), n(5)),
        d = n.n(p),
        m = n(6),
        v = n.n(m),
        y = (n(18), function () {
      function t(e) {
        var n = e.data,
            r = e.config,
            o = e.api;
        l()(this, t), this.api = o, this.config = {
          endpoint: r.endpoint || ""
        }, this.nodes = {
          wrapper: null,
          container: null,
          progress: null,
          input: null,
          inputHolder: null,
          linkContent: null,
          linkImage: null,
          linkTitle: null,
          linkDescription: null,
          linkText: null
        }, this._data = {
          link: "",
          meta: {}
        }, this.data = n;
      }

      return h()(t, null, [{
        key: "toolbox",
        get: function get() {
          return {
            icon: d.a,
            title: "Link"
          };
        }
      }, {
        key: "enableLineBreaks",
        get: function get() {
          return !0;
        }
      }]), h()(t, [{
        key: "render",
        value: function value() {
          return this.nodes.wrapper = this.make("div", this.CSS.baseClass), this.nodes.container = this.make("div", this.CSS.container), this.nodes.inputHolder = this.makeInputHolder(), this.nodes.linkContent = this.prepareLinkPreview(), Object.keys(this.data.meta).length ? (this.nodes.container.appendChild(this.nodes.linkContent), this.showLinkPreview(this.data.meta)) : this.nodes.container.appendChild(this.nodes.inputHolder), this.nodes.wrapper.appendChild(this.nodes.container), this.nodes.wrapper;
        }
      }, {
        key: "save",
        value: function value() {
          return this.data;
        }
      }, {
        key: "makeInputHolder",
        value: function value() {
          var t = this,
              e = this.make("div", this.CSS.inputHolder);
          return this.nodes.progress = this.make("label", this.CSS.progress), this.nodes.input = this.make("div", [this.CSS.input, this.CSS.inputEl], {
            contentEditable: !0
          }), this.nodes.input.dataset.placeholder = "Link", this.nodes.input.addEventListener("paste", function (e) {
            t.startFetching(e);
          }), this.nodes.input.addEventListener("keydown", function (e) {
            var n = e.ctrlKey || e.metaKey;

            switch (e.keyCode) {
              case 13:
                e.preventDefault(), e.stopPropagation(), t.startFetching(e);
                break;

              case 65:
                n && t.selectLinkUrl(e);
            }
          }), e.appendChild(this.nodes.progress), e.appendChild(this.nodes.input), e;
        }
      }, {
        key: "startFetching",
        value: function value(t) {
          var e = this.nodes.input.textContent;
          "paste" === t.type && (e = (t.clipboardData || window.clipboardData).getData("text")), this.removeErrorStyle(), this.fetchLinkData(e);
        }
      }, {
        key: "removeErrorStyle",
        value: function value() {
          this.nodes.inputHolder.classList.remove(this.CSS.inputError), this.nodes.inputHolder.insertBefore(this.nodes.progress, this.nodes.input);
        }
      }, {
        key: "selectLinkUrl",
        value: function value(t) {
          t.preventDefault(), t.stopPropagation();
          var e = window.getSelection(),
              n = new Range(),
              r = e.anchorNode.parentNode.closest(".".concat(this.CSS.inputHolder)).querySelector(".".concat(this.CSS.inputEl));
          n.selectNodeContents(r), e.removeAllRanges(), e.addRange(n);
        }
      }, {
        key: "prepareLinkPreview",
        value: function value() {
          var t = this.make("a", this.CSS.linkContent, {
            target: "_blank",
            rel: "nofollow noindex noreferrer"
          });
          return this.nodes.linkImage = this.make("div", this.CSS.linkImage), this.nodes.linkTitle = this.make("div", this.CSS.linkTitle), this.nodes.linkDescription = this.make("p", this.CSS.linkDescription), this.nodes.linkText = this.make("span", this.CSS.linkText), t;
        }
      }, {
        key: "showLinkPreview",
        value: function value(t) {
          var e = t.image,
              n = t.title,
              r = t.description;
          this.nodes.container.appendChild(this.nodes.linkContent), e && e.url && (this.nodes.linkImage.style.backgroundImage = "url(" + e.url + ")", this.nodes.linkContent.appendChild(this.nodes.linkImage)), n && (this.nodes.linkTitle.textContent = n, this.nodes.linkContent.appendChild(this.nodes.linkTitle)), r && (this.nodes.linkDescription.textContent = r, this.nodes.linkContent.appendChild(this.nodes.linkDescription)), this.nodes.linkContent.classList.add(this.CSS.linkContentRendered), this.nodes.linkContent.setAttribute("href", this.data.link), this.nodes.linkContent.appendChild(this.nodes.linkText);

          try {
            this.nodes.linkText.textContent = new URL(this.data.link).hostname;
          } catch (t) {
            this.nodes.linkText.textContent = this.data.link;
          }
        }
      }, {
        key: "showProgress",
        value: function value() {
          this.nodes.progress.classList.add(this.CSS.progressLoading);
        }
      }, {
        key: "hideProgress",
        value: function value() {
          var t = this;
          return new Promise(function (e) {
            t.nodes.progress.classList.remove(t.CSS.progressLoading), t.nodes.progress.classList.add(t.CSS.progressLoaded), setTimeout(e, 500);
          });
        }
      }, {
        key: "applyErrorStyle",
        value: function value() {
          this.nodes.inputHolder.classList.add(this.CSS.inputError), this.nodes.progress.remove();
        }
      }, {
        key: "fetchLinkData",
        value: function () {
          var t = c()(a.a.mark(function t(e) {
            var n;
            return a.a.wrap(function (t) {
              for (;;) {
                switch (t.prev = t.next) {
                  case 0:
                    return this.showProgress(), this.data = {
                      link: e
                    }, t.prev = 2, t.next = 5, v.a.get({
                      url: this.config.endpoint,
                      data: {
                        url: e
                      }
                    });

                  case 5:
                    n = t.sent, this.onFetch(n), t.next = 12;
                    break;

                  case 9:
                    t.prev = 9, t.t0 = t.catch(2), this.fetchingFailed("Haven't received data from server");

                  case 12:
                  case "end":
                    return t.stop();
                }
              }
            }, t, this, [[2, 9]]);
          }));
          return function (e) {
            return t.apply(this, arguments);
          };
        }()
      }, {
        key: "onFetch",
        value: function value(t) {
          var e = this;

          if (t && t.success) {
            var n = t.meta;
            this.data = {
              meta: n
            }, n ? this.hideProgress().then(function () {
              e.nodes.inputHolder.remove(), e.showLinkPreview(n);
            }) : this.fetchingFailed("Wrong response format from server");
          } else this.fetchingFailed("Can not get this link data, try another");
        }
      }, {
        key: "fetchingFailed",
        value: function value(t) {
          this.api.notifier.show({
            message: t,
            style: "error"
          }), this.applyErrorStyle();
        }
      }, {
        key: "make",
        value: function value(t) {
          var e,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              i = document.createElement(t);
          Array.isArray(n) ? (e = i.classList).add.apply(e, o()(n)) : n && i.classList.add(n);

          for (var a in r) {
            i[a] = r[a];
          }

          return i;
        }
      }, {
        key: "data",
        set: function set(t) {
          this._data = Object.assign({}, {
            link: t.link || this._data.link,
            meta: t.meta || this._data.meta
          });
        },
        get: function get() {
          return this._data;
        }
      }, {
        key: "CSS",
        get: function get() {
          return {
            baseClass: this.api.styles.block,
            input: this.api.styles.input,
            container: "link-tool",
            inputEl: "link-tool__input",
            inputHolder: "link-tool__input-holder",
            inputError: "link-tool__input-holder--error",
            linkContent: "link-tool__content",
            linkContentRendered: "link-tool__content--rendered",
            linkImage: "link-tool__image",
            linkTitle: "link-tool__title",
            linkDescription: "link-tool__description",
            linkText: "link-tool__anchor",
            progress: "link-tool__progress",
            progressLoading: "link-tool__progress--loading",
            progressLoaded: "link-tool__progress--loaded"
          };
        }
      }]), t;
    }());
  }, function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) {
          n[e] = t[e];
        }

        return n;
      }
    };
  }, function (t, e) {
    t.exports = function (t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
    };
  }, function (t, e) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    };
  }, function (t, e, n) {
    var r = function () {
      return this || "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self;
    }() || Function("return this")(),
        o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
        i = o && r.regeneratorRuntime;

    if (r.regeneratorRuntime = void 0, t.exports = n(12), o) r.regeneratorRuntime = i;else try {
      delete r.regeneratorRuntime;
    } catch (t) {
      r.regeneratorRuntime = void 0;
    }
  }, function (t, e) {
    !function (e) {
      "use strict";

      var n,
          r = Object.prototype,
          o = r.hasOwnProperty,
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag",
          u = "object" == _typeof(t),
          l = e.regeneratorRuntime;

      if (l) u && (t.exports = l);else {
        (l = e.regeneratorRuntime = u ? t.exports : {}).wrap = w;
        var f = "suspendedStart",
            h = "suspendedYield",
            p = "executing",
            d = "completed",
            m = {},
            v = {};

        v[a] = function () {
          return this;
        };

        var y = Object.getPrototypeOf,
            g = y && y(y(P([])));
        g && g !== r && o.call(g, a) && (v = g);
        var b = x.prototype = _.prototype = Object.create(v);
        E.prototype = b.constructor = x, x.constructor = E, x[c] = E.displayName = "GeneratorFunction", l.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === E || "GeneratorFunction" === (e.displayName || e.name));
        }, l.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, c in t || (t[c] = "GeneratorFunction")), t.prototype = Object.create(b), t;
        }, l.awrap = function (t) {
          return {
            __await: t
          };
        }, S(L.prototype), L.prototype[s] = function () {
          return this;
        }, l.AsyncIterator = L, l.async = function (t, e, n, r) {
          var o = new L(w(t, e, n, r));
          return l.isGeneratorFunction(e) ? o : o.next().then(function (t) {
            return t.done ? t.value : o.next();
          });
        }, S(b), b[c] = "Generator", b[a] = function () {
          return this;
        }, b.toString = function () {
          return "[object Generator]";
        }, l.keys = function (t) {
          var e = [];

          for (var n in t) {
            e.push(n);
          }

          return e.reverse(), function n() {
            for (; e.length;) {
              var r = e.pop();
              if (r in t) return n.value = r, n.done = !1, n;
            }

            return n.done = !0, n;
          };
        }, l.values = P, C.prototype = {
          constructor: C,
          reset: function reset(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(O), !t) for (var e in this) {
              "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n);
            }
          },
          stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(t) {
            if (this.done) throw t;
            var e = this;

            function r(r, o) {
              return s.type = "throw", s.arg = t, e.next = r, o && (e.method = "next", e.arg = n), !!o;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                  s = a.completion;
              if ("root" === a.tryLoc) return r("end");

              if (a.tryLoc <= this.prev) {
                var c = o.call(a, "catchLoc"),
                    u = o.call(a, "finallyLoc");

                if (c && u) {
                  if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                } else if (c) {
                  if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                } else {
                  if (!u) throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function abrupt(t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n];

              if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                var i = r;
                break;
              }
            }

            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, m) : this.complete(a);
          },
          complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), m;
          },
          finish: function finish(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), m;
            }
          },
          catch: function _catch(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];

              if (n.tryLoc === t) {
                var r = n.completion;

                if ("throw" === r.type) {
                  var o = r.arg;
                  O(n);
                }

                return o;
              }
            }

            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(t, e, r) {
            return this.delegate = {
              iterator: P(t),
              resultName: e,
              nextLoc: r
            }, "next" === this.method && (this.arg = n), m;
          }
        };
      }

      function w(t, e, n, r) {
        var o = e && e.prototype instanceof _ ? e : _,
            i = Object.create(o.prototype),
            a = new C(r || []);
        return i._invoke = function (t, e, n) {
          var r = f;
          return function (o, i) {
            if (r === p) throw new Error("Generator is already running");

            if (r === d) {
              if ("throw" === o) throw i;
              return R();
            }

            for (n.method = o, n.arg = i;;) {
              var a = n.delegate;

              if (a) {
                var s = j(a, n);

                if (s) {
                  if (s === m) continue;
                  return s;
                }
              }

              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if (r === f) throw r = d, n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = p;
              var c = k(t, e, n);

              if ("normal" === c.type) {
                if (r = n.done ? d : h, c.arg === m) continue;
                return {
                  value: c.arg,
                  done: n.done
                };
              }

              "throw" === c.type && (r = d, n.method = "throw", n.arg = c.arg);
            }
          };
        }(t, n, a), i;
      }

      function k(t, e, n) {
        try {
          return {
            type: "normal",
            arg: t.call(e, n)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }

      function _() {}

      function E() {}

      function x() {}

      function S(t) {
        ["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t);
          };
        });
      }

      function L(t) {
        var e;

        this._invoke = function (n, r) {
          function i() {
            return new Promise(function (e, i) {
              !function e(n, r, i, a) {
                var s = k(t[n], t, r);

                if ("throw" !== s.type) {
                  var c = s.arg,
                      u = c.value;
                  return u && "object" == _typeof(u) && o.call(u, "__await") ? Promise.resolve(u.__await).then(function (t) {
                    e("next", t, i, a);
                  }, function (t) {
                    e("throw", t, i, a);
                  }) : Promise.resolve(u).then(function (t) {
                    c.value = t, i(c);
                  }, function (t) {
                    return e("throw", t, i, a);
                  });
                }

                a(s.arg);
              }(n, r, e, i);
            });
          }

          return e = e ? e.then(i, i) : i();
        };
      }

      function j(t, e) {
        var r = t.iterator[e.method];

        if (r === n) {
          if (e.delegate = null, "throw" === e.method) {
            if (t.iterator.return && (e.method = "return", e.arg = n, j(t, e), "throw" === e.method)) return m;
            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return m;
        }

        var o = k(r, t.iterator, e.arg);
        if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, m;
        var i = o.arg;
        return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n), e.delegate = null, m) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, m);
      }

      function T(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }

      function O(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }

      function C(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(T, this), this.reset(!0);
      }

      function P(t) {
        if (t) {
          var e = t[a];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;

          if (!isNaN(t.length)) {
            var r = -1,
                i = function e() {
              for (; ++r < t.length;) {
                if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
              }

              return e.value = n, e.done = !0, e;
            };

            return i.next = i;
          }
        }

        return {
          next: R
        };
      }

      function R() {
        return {
          value: n,
          done: !0
        };
      }
    }(function () {
      return this || "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self;
    }() || Function("return this")());
  }, function (t, e, n) {
    var r = n(14);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var o = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n(16)(r, o);
    r.locals && (t.exports = r.locals);
  }, function (t, e, n) {
    (t.exports = n(15)(!1)).push([t.i, ".link-tool {\n  position: relative;\n}\n\n  .link-tool__input {\n    padding-left: 38px;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='13' height='14' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.567 13.629c.728.464 1.581.65 2.41.558l-.873.873A3.722 3.722 0 1 1 4.84 9.794L6.694 7.94a3.722 3.722 0 0 1 5.256-.008L10.484 9.4a5.209 5.209 0 0 1-.017.016 1.625 1.625 0 0 0-2.29.009l-1.854 1.854a1.626 1.626 0 0 0 2.244 2.35zm2.766-7.358a3.722 3.722 0 0 0-2.41-.558l.873-.873a3.722 3.722 0 1 1 5.264 5.266l-1.854 1.854a3.722 3.722 0 0 1-5.256.008L9.416 10.5a5.2 5.2 0 0 1 .017-.016 1.625 1.625 0 0 0 2.29-.009l1.854-1.854a1.626 1.626 0 0 0-2.244-2.35z' fill='rgba(0, 0, 0, 0.6)' transform='translate(-3.667 -2.7)'/%3E%3C/svg%3E%0A\");\n    background-repeat: no-repeat;\n    background-position: 15px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n\n  .link-tool__input-holder {\n      position: relative;\n    }\n\n  .link-tool__input-holder--error .link-tool__input {\n          background-image: url(\"data:image/svg+xml,%3Csvg width='13' height='14' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.567 13.629c.728.464 1.581.65 2.41.558l-.873.873A3.722 3.722 0 1 1 4.84 9.794L6.694 7.94a3.722 3.722 0 0 1 5.256-.008L10.484 9.4a5.209 5.209 0 0 1-.017.016 1.625 1.625 0 0 0-2.29.009l-1.854 1.854a1.626 1.626 0 0 0 2.244 2.35zm2.766-7.358a3.722 3.722 0 0 0-2.41-.558l.873-.873a3.722 3.722 0 1 1 5.264 5.266l-1.854 1.854a3.722 3.722 0 0 1-5.256.008L9.416 10.5a5.2 5.2 0 0 1 .017-.016 1.625 1.625 0 0 0 2.29-.009l1.854-1.854a1.626 1.626 0 0 0-2.244-2.35z' fill='rgb(224, 147, 147)' transform='translate(-3.667 -2.7)'/%3E%3C/svg%3E%0A\");\n          background-color: #fff3f6;\n          border-color: #f3e0e0;\n          color: #a95a5a;\n          box-shadow: inset 0 1px 3px 0 rgba(146, 62, 62, .05);\n        }\n\n  .link-tool__input[contentEditable=true][data-placeholder]::before{\n      position: absolute;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      opacity: 0;\n    }\n\n  .link-tool__input[contentEditable=true][data-placeholder]:empty::before {\n        opacity: 1;\n      }\n\n  .link-tool__input[contentEditable=true][data-placeholder]:empty:focus::before {\n         opacity: 0;\n       }\n\n  .link-tool__progress {\n    position: absolute;\n    box-shadow: inset 0 1px 3px 0 rgba(102, 85, 107, 0.04);\n    height: 100%;\n    width: 0;\n    background-color: #f4f5f7;\n    z-index: -1;\n  }\n\n  .link-tool__progress--loading {\n      -webkit-animation: progress 500ms ease-in;\n      -webkit-animation-fill-mode: forwards;\n    }\n\n  .link-tool__progress--loaded {\n      width: 100%;\n    }\n\n  .link-tool__content {\n    display: block;\n    padding: 25px;\n    border-radius: 2px;\n    box-shadow: 0 0 0 2px #fff;\n    color: initial !important;\n    text-decoration: none !important;\n  }\n\n  .link-tool__content::after {\n      content: \"\";\n      clear: both;\n      display: table;\n    }\n\n  .link-tool__content--rendered {\n      background: #fff;\n      border: 1px solid rgba(201, 201, 204, 0.48);\n      box-shadow: 0 1px 3px rgba(0,0,0, .1);\n      border-radius: 6px;\n      will-change: filter;\n      animation: link-in 450ms 1 cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n\n  .link-tool__content--rendered:hover {\n        box-shadow: 0 0 3px rgba(0,0,0, .16);\n      }\n\n  .link-tool__image {\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin: 0 0 0 30px;\n    width: 65px;\n    height: 65px;\n    border-radius: 3px;\n    float: right;\n  }\n\n  .link-tool__title {\n    font-size: 17px;\n    font-weight: 600;\n    line-height: 1.5em;\n    margin: 0 0 10px 0;\n  }\n\n  .link-tool__title + .link-tool__anchor {\n      margin-top: 25px;\n    }\n\n  .link-tool__description {\n    margin: 0 0 20px 0;\n    font-size: 15px;\n    line-height: 1.55em;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n\n  .link-tool__anchor {\n    display: block;\n    font-size: 15px;\n    line-height: 1em;\n    color: #888 !important;\n    border: 0 !important;\n    padding: 0 !important;\n  }\n\n@keyframes link-in {\n  from {\n    filter: blur(5px);\n  }\n\n  to {\n    filter: none;\n  }\n}\n\n.codex-editor--narrow .link-tool__image {\n  display: none;\n}\n\n@-webkit-keyframes progress {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 85%;\n  }\n}\n", ""]);
  }, function (t, e) {
    t.exports = function (t) {
      var e = [];
      return e.toString = function () {
        return this.map(function (e) {
          var n = function (t, e) {
            var n = t[1] || "",
                r = t[3];
            if (!r) return n;

            if (e && "function" == typeof btoa) {
              var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                  i = r.sources.map(function (t) {
                return "/*# sourceURL=" + r.sourceRoot + t + " */";
              });
              return [n].concat(i).concat([o]).join("\n");
            }

            var a;
            return [n].join("\n");
          }(e, t);

          return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
        }).join("");
      }, e.i = function (t, n) {
        "string" == typeof t && (t = [[null, t, ""]]);

        for (var r = {}, o = 0; o < this.length; o++) {
          var i = this[o][0];
          "number" == typeof i && (r[i] = !0);
        }

        for (o = 0; o < t.length; o++) {
          var a = t[o];
          "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
        }
      }, e;
    };
  }, function (t, e, n) {
    var r,
        o,
        i = {},
        a = (r = function r() {
      return window && document && document.all && !window.atob;
    }, function () {
      return void 0 === o && (o = r.apply(this, arguments)), o;
    }),
        s = function (t) {
      var e = {};
      return function (t) {
        if ("function" == typeof t) return t();

        if (void 0 === e[t]) {
          var n = function (t) {
            return document.querySelector(t);
          }.call(this, t);

          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head;
          } catch (t) {
            n = null;
          }
          e[t] = n;
        }

        return e[t];
      };
    }(),
        c = null,
        u = 0,
        l = [],
        f = n(17);

    function h(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
            o = i[r.id];

        if (o) {
          o.refs++;

          for (var a = 0; a < o.parts.length; a++) {
            o.parts[a](r.parts[a]);
          }

          for (; a < r.parts.length; a++) {
            o.parts.push(g(r.parts[a], e));
          }
        } else {
          var s = [];

          for (a = 0; a < r.parts.length; a++) {
            s.push(g(r.parts[a], e));
          }

          i[r.id] = {
            id: r.id,
            refs: 1,
            parts: s
          };
        }
      }
    }

    function p(t, e) {
      for (var n = [], r = {}, o = 0; o < t.length; o++) {
        var i = t[o],
            a = e.base ? i[0] + e.base : i[0],
            s = {
          css: i[1],
          media: i[2],
          sourceMap: i[3]
        };
        r[a] ? r[a].parts.push(s) : n.push(r[a] = {
          id: a,
          parts: [s]
        });
      }

      return n;
    }

    function d(t, e) {
      var n = s(t.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = l[l.length - 1];
      if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), l.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
        if ("object" != _typeof(t.insertAt) || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var o = s(t.insertInto + " " + t.insertAt.before);
        n.insertBefore(e, o);
      }
    }

    function m(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = l.indexOf(t);
      e >= 0 && l.splice(e, 1);
    }

    function v(t) {
      var e = document.createElement("style");
      return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), d(t, e), e;
    }

    function y(t, e) {
      Object.keys(e).forEach(function (n) {
        t.setAttribute(n, e[n]);
      });
    }

    function g(t, e) {
      var n, r, o, i;

      if (e.transform && t.css) {
        if (!(i = e.transform(t.css))) return function () {};
        t.css = i;
      }

      if (e.singleton) {
        var a = u++;
        n = c || (c = v(e)), r = k.bind(null, n, a, !1), o = k.bind(null, n, a, !0);
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
        var e = document.createElement("link");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), d(t, e), e;
      }(e), r = function (t, e, n) {
        var r = n.css,
            o = n.sourceMap,
            i = void 0 === e.convertToAbsoluteUrls && o;
        (e.convertToAbsoluteUrls || i) && (r = f(r));
        o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var a = new Blob([r], {
          type: "text/css"
        }),
            s = t.href;
        t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
      }.bind(null, n, e), o = function o() {
        m(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = v(e), r = function (t, e) {
        var n = e.css,
            r = e.media;
        r && t.setAttribute("media", r);
        if (t.styleSheet) t.styleSheet.cssText = n;else {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(document.createTextNode(n));
        }
      }.bind(null, n), o = function o() {
        m(n);
      });

      return r(t), function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
          r(t = e);
        } else o();
      };
    }

    t.exports = function (t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
      (e = e || {}).attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
      var n = p(t, e);
      return h(n, e), function (t) {
        for (var r = [], o = 0; o < n.length; o++) {
          var a = n[o];
          (s = i[a.id]).refs--, r.push(s);
        }

        t && h(p(t, e), e);

        for (o = 0; o < r.length; o++) {
          var s;

          if (0 === (s = r[o]).refs) {
            for (var c = 0; c < s.parts.length; c++) {
              s.parts[c]();
            }

            delete i[s.id];
          }
        }
      };
    };

    var b,
        w = (b = [], function (t, e) {
      return b[t] = e, b.filter(Boolean).join("\n");
    });

    function k(t, e, n, r) {
      var o = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = w(e, o);else {
        var i = document.createTextNode(o),
            a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
      }
    }
  }, function (t, e) {
    t.exports = function (t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var n = e.protocol + "//" + e.host,
          r = n + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
        var o,
            i = e.trim().replace(/^"(.*)"$/, function (t, e) {
          return e;
        }).replace(/^'(.*)'$/, function (t, e) {
          return e;
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
      });
    };
  }, function (t, e, n) {
    (function (t) {
      !function (t) {
        var e = function () {
          try {
            return !!Symbol.iterator;
          } catch (t) {
            return !1;
          }
        }(),
            n = function n(t) {
          var n = {
            next: function next() {
              var e = t.shift();
              return {
                done: void 0 === e,
                value: e
              };
            }
          };
          return e && (n[Symbol.iterator] = function () {
            return n;
          }), n;
        },
            r = function r(t) {
          return encodeURIComponent(t).replace(/%20/g, "+");
        },
            o = function o(t) {
          return decodeURIComponent(t).replace(/\+/g, " ");
        };

        "URLSearchParams" in t && "a=1" === new URLSearchParams("?a=1").toString() || function () {
          var o = function o(t) {
            Object.defineProperty(this, "_entries", {
              writable: !0,
              value: {}
            });

            var e = _typeof(t);

            if ("undefined" === e) ;else if ("string" === e) "" !== t && this._fromString(t);else if (t instanceof o) {
              var n = this;
              t.forEach(function (t, e) {
                n.append(e, t);
              });
            } else {
              if (null === t || "object" !== e) throw new TypeError("Unsupported input's type for URLSearchParams");
              if ("[object Array]" === Object.prototype.toString.call(t)) for (var r = 0; r < t.length; r++) {
                var i = t[r];
                if ("[object Array]" !== Object.prototype.toString.call(i) && 2 === i.length) throw new TypeError("Expected [string, any] as entry at index " + r + " of URLSearchParams's input");
                this.append(i[0], i[1]);
              } else for (var a in t) {
                t.hasOwnProperty(a) && this.append(a, t[a]);
              }
            }
          },
              i = o.prototype;

          i.append = function (t, e) {
            t in this._entries ? this._entries[t].push(String(e)) : this._entries[t] = [String(e)];
          }, i.delete = function (t) {
            delete this._entries[t];
          }, i.get = function (t) {
            return t in this._entries ? this._entries[t][0] : null;
          }, i.getAll = function (t) {
            return t in this._entries ? this._entries[t].slice(0) : [];
          }, i.has = function (t) {
            return t in this._entries;
          }, i.set = function (t, e) {
            this._entries[t] = [String(e)];
          }, i.forEach = function (t, e) {
            var n;

            for (var r in this._entries) {
              if (this._entries.hasOwnProperty(r)) {
                n = this._entries[r];

                for (var o = 0; o < n.length; o++) {
                  t.call(e, n[o], r, this);
                }
              }
            }
          }, i.keys = function () {
            var t = [];
            return this.forEach(function (e, n) {
              t.push(n);
            }), n(t);
          }, i.values = function () {
            var t = [];
            return this.forEach(function (e) {
              t.push(e);
            }), n(t);
          }, i.entries = function () {
            var t = [];
            return this.forEach(function (e, n) {
              t.push([n, e]);
            }), n(t);
          }, e && (i[Symbol.iterator] = i.entries), i.toString = function () {
            var t = [];
            return this.forEach(function (e, n) {
              t.push(r(n) + "=" + r(e));
            }), t.join("&");
          }, t.URLSearchParams = o;
        }();
        var i = URLSearchParams.prototype;
        "function" != typeof i.sort && (i.sort = function () {
          var t = this,
              e = [];
          this.forEach(function (n, r) {
            e.push([r, n]), t._entries || t.delete(r);
          }), e.sort(function (t, e) {
            return t[0] < e[0] ? -1 : t[0] > e[0] ? 1 : 0;
          }), t._entries && (t._entries = {});

          for (var n = 0; n < e.length; n++) {
            this.append(e[n][0], e[n][1]);
          }
        }), "function" != typeof i._fromString && Object.defineProperty(i, "_fromString", {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: function value(t) {
            if (this._entries) this._entries = {};else {
              var e = [];
              this.forEach(function (t, n) {
                e.push(n);
              });

              for (var n = 0; n < e.length; n++) {
                this.delete(e[n]);
              }
            }
            var r,
                i = (t = t.replace(/^\?/, "")).split("&");

            for (n = 0; n < i.length; n++) {
              r = i[n].split("="), this.append(o(r[0]), r.length > 1 ? o(r[1]) : "");
            }
          }
        });
      }(void 0 !== t ? t : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this), function (t) {
        if (function () {
          try {
            var t = new URL("b", "http://a");
            return t.pathname = "c%20d", "http://a/c%20d" === t.href && t.searchParams;
          } catch (t) {
            return !1;
          }
        }() || function () {
          var e = t.URL,
              n = function n(e, _n2) {
            "string" != typeof e && (e = String(e));
            var r,
                o = document;

            if (_n2 && (void 0 === t.location || _n2 !== t.location.href)) {
              (r = (o = document.implementation.createHTMLDocument("")).createElement("base")).href = _n2, o.head.appendChild(r);

              try {
                if (0 !== r.href.indexOf(_n2)) throw new Error(r.href);
              } catch (t) {
                throw new Error("URL unable to set base " + _n2 + " due to " + t);
              }
            }

            var i = o.createElement("a");
            if (i.href = e, r && (o.body.appendChild(i), i.href = i.href), ":" === i.protocol || !/:/.test(i.href)) throw new TypeError("Invalid URL");
            Object.defineProperty(this, "_anchorElement", {
              value: i
            });
            var a = new URLSearchParams(this.search),
                s = !0,
                c = !0,
                u = this;
            ["append", "delete", "set"].forEach(function (t) {
              var e = a[t];

              a[t] = function () {
                e.apply(a, arguments), s && (c = !1, u.search = a.toString(), c = !0);
              };
            }), Object.defineProperty(this, "searchParams", {
              value: a,
              enumerable: !0
            });
            var l = void 0;
            Object.defineProperty(this, "_updateSearchParams", {
              enumerable: !1,
              configurable: !1,
              writable: !1,
              value: function value() {
                this.search !== l && (l = this.search, c && (s = !1, this.searchParams._fromString(this.search), s = !0));
              }
            });
          },
              r = n.prototype;

          ["hash", "host", "hostname", "port", "protocol"].forEach(function (t) {
            !function (t) {
              Object.defineProperty(r, t, {
                get: function get() {
                  return this._anchorElement[t];
                },
                set: function set(e) {
                  this._anchorElement[t] = e;
                },
                enumerable: !0
              });
            }(t);
          }), Object.defineProperty(r, "search", {
            get: function get() {
              return this._anchorElement.search;
            },
            set: function set(t) {
              this._anchorElement.search = t, this._updateSearchParams();
            },
            enumerable: !0
          }), Object.defineProperties(r, {
            toString: {
              get: function get() {
                var t = this;
                return function () {
                  return t.href;
                };
              }
            },
            href: {
              get: function get() {
                return this._anchorElement.href.replace(/\?$/, "");
              },
              set: function set(t) {
                this._anchorElement.href = t, this._updateSearchParams();
              },
              enumerable: !0
            },
            pathname: {
              get: function get() {
                return this._anchorElement.pathname.replace(/(^\/?)/, "/");
              },
              set: function set(t) {
                this._anchorElement.pathname = t;
              },
              enumerable: !0
            },
            origin: {
              get: function get() {
                var t = {
                  "http:": 80,
                  "https:": 443,
                  "ftp:": 21
                }[this._anchorElement.protocol],
                    e = this._anchorElement.port != t && "" !== this._anchorElement.port;
                return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (e ? ":" + this._anchorElement.port : "");
              },
              enumerable: !0
            },
            password: {
              get: function get() {
                return "";
              },
              set: function set(t) {},
              enumerable: !0
            },
            username: {
              get: function get() {
                return "";
              },
              set: function set(t) {},
              enumerable: !0
            }
          }), n.createObjectURL = function (t) {
            return e.createObjectURL.apply(e, arguments);
          }, n.revokeObjectURL = function (t) {
            return e.revokeObjectURL.apply(e, arguments);
          }, t.URL = n;
        }(), void 0 !== t.location && !("origin" in t.location)) {
          var e = function e() {
            return t.location.protocol + "//" + t.location.hostname + (t.location.port ? ":" + t.location.port : "");
          };

          try {
            Object.defineProperty(t.location, "origin", {
              get: e,
              enumerable: !0
            });
          } catch (n) {
            setInterval(function () {
              t.location.origin = e();
            }, 100);
          }
        }
      }(void 0 !== t ? t : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this);
    }).call(this, n(19));
  }, function (t, e) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
    }

    t.exports = n;
  }]).default;
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Marker = e() : t.Marker = e();
}(window, function () {
  return function (t) {
    var e = {};

    function n(r) {
      if (e[r]) return e[r].exports;
      var o = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var o in t) {
        n.d(r, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
      return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "/", n(n.s = 0);
  }([function (t, e, n) {
    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    function o(t, e, n) {
      return e && r(t.prototype, e), n && r(t, n), t;
    }

    n(1).toString();

    var i = function () {
      function t(e) {
        var n = e.api;
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.api = n, this.button = null, this.tag = "MARK", this.iconClasses = {
          base: this.api.styles.inlineToolButton,
          active: this.api.styles.inlineToolButtonActive
        };
      }

      return o(t, null, [{
        key: "CSS",
        get: function get() {
          return "cdx-marker";
        }
      }]), o(t, [{
        key: "render",
        value: function value() {
          return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button;
        }
      }, {
        key: "surround",
        value: function value(e) {
          if (e) {
            var n = this.api.selection.findParentTag(this.tag, t.CSS);
            n ? this.unwrap(n) : this.wrap(e);
          }
        }
      }, {
        key: "wrap",
        value: function value(e) {
          var n = document.createElement(this.tag);
          n.classList.add(t.CSS), n.appendChild(e.extractContents()), e.insertNode(n), this.api.selection.expandToTag(n);
        }
      }, {
        key: "unwrap",
        value: function value(t) {
          this.api.selection.expandToTag(t);
          var e = window.getSelection(),
              n = e.getRangeAt(0),
              r = n.extractContents();
          t.parentNode.removeChild(t), n.insertNode(r), e.removeAllRanges(), e.addRange(n);
        }
      }, {
        key: "checkState",
        value: function value() {
          var e = this.api.selection.findParentTag(this.tag, t.CSS);
          this.button.classList.toggle(this.iconClasses.active, !!e);
        }
      }, {
        key: "toolboxIcon",
        get: function get() {
          return n(6).default;
        }
      }], [{
        key: "isInline",
        get: function get() {
          return !0;
        }
      }, {
        key: "sanitize",
        get: function get() {
          return {
            mark: {
              class: t.CSS
            }
          };
        }
      }]), t;
    }();

    t.exports = i;
  }, function (t, e, n) {
    var r = n(2);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var o = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n(4)(r, o);
    r.locals && (t.exports = r.locals);
  }, function (t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, ".cdx-marker {\n  background: rgba(245,235,111,0.29);\n  padding: 3px 0;\n}", ""]);
  }, function (t, e) {
    t.exports = function (t) {
      var e = [];
      return e.toString = function () {
        return this.map(function (e) {
          var n = function (t, e) {
            var n = t[1] || "",
                r = t[3];
            if (!r) return n;

            if (e && "function" == typeof btoa) {
              var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                  i = r.sources.map(function (t) {
                return "/*# sourceURL=" + r.sourceRoot + t + " */";
              });
              return [n].concat(i).concat([o]).join("\n");
            }

            var a;
            return [n].join("\n");
          }(e, t);

          return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
        }).join("");
      }, e.i = function (t, n) {
        "string" == typeof t && (t = [[null, t, ""]]);

        for (var r = {}, o = 0; o < this.length; o++) {
          var i = this[o][0];
          "number" == typeof i && (r[i] = !0);
        }

        for (o = 0; o < t.length; o++) {
          var a = t[o];
          "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
        }
      }, e;
    };
  }, function (t, e, n) {
    var r,
        o,
        i = {},
        a = (r = function r() {
      return window && document && document.all && !window.atob;
    }, function () {
      return void 0 === o && (o = r.apply(this, arguments)), o;
    }),
        s = function (t) {
      var e = {};
      return function (t) {
        if ("function" == typeof t) return t();

        if (void 0 === e[t]) {
          var n = function (t) {
            return document.querySelector(t);
          }.call(this, t);

          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head;
          } catch (t) {
            n = null;
          }
          e[t] = n;
        }

        return e[t];
      };
    }(),
        u = null,
        c = 0,
        f = [],
        l = n(5);

    function p(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
            o = i[r.id];

        if (o) {
          o.refs++;

          for (var a = 0; a < o.parts.length; a++) {
            o.parts[a](r.parts[a]);
          }

          for (; a < r.parts.length; a++) {
            o.parts.push(g(r.parts[a], e));
          }
        } else {
          var s = [];

          for (a = 0; a < r.parts.length; a++) {
            s.push(g(r.parts[a], e));
          }

          i[r.id] = {
            id: r.id,
            refs: 1,
            parts: s
          };
        }
      }
    }

    function d(t, e) {
      for (var n = [], r = {}, o = 0; o < t.length; o++) {
        var i = t[o],
            a = e.base ? i[0] + e.base : i[0],
            s = {
          css: i[1],
          media: i[2],
          sourceMap: i[3]
        };
        r[a] ? r[a].parts.push(s) : n.push(r[a] = {
          id: a,
          parts: [s]
        });
      }

      return n;
    }

    function h(t, e) {
      var n = s(t.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = f[f.length - 1];
      if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), f.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
        if ("object" != _typeof(t.insertAt) || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var o = s(t.insertInto + " " + t.insertAt.before);
        n.insertBefore(e, o);
      }
    }

    function v(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = f.indexOf(t);
      e >= 0 && f.splice(e, 1);
    }

    function b(t) {
      var e = document.createElement("style");
      return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), e;
    }

    function y(t, e) {
      Object.keys(e).forEach(function (n) {
        t.setAttribute(n, e[n]);
      });
    }

    function g(t, e) {
      var n, r, o, i;

      if (e.transform && t.css) {
        if (!(i = e.transform(t.css))) return function () {};
        t.css = i;
      }

      if (e.singleton) {
        var a = c++;
        n = u || (u = b(e)), r = x.bind(null, n, a, !1), o = x.bind(null, n, a, !0);
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
        var e = document.createElement("link");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e;
      }(e), r = function (t, e, n) {
        var r = n.css,
            o = n.sourceMap,
            i = void 0 === e.convertToAbsoluteUrls && o;
        (e.convertToAbsoluteUrls || i) && (r = l(r));
        o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var a = new Blob([r], {
          type: "text/css"
        }),
            s = t.href;
        t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
      }.bind(null, n, e), o = function o() {
        v(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = b(e), r = function (t, e) {
        var n = e.css,
            r = e.media;
        r && t.setAttribute("media", r);
        if (t.styleSheet) t.styleSheet.cssText = n;else {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(document.createTextNode(n));
        }
      }.bind(null, n), o = function o() {
        v(n);
      });

      return r(t), function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
          r(t = e);
        } else o();
      };
    }

    t.exports = function (t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
      (e = e || {}).attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
      var n = d(t, e);
      return p(n, e), function (t) {
        for (var r = [], o = 0; o < n.length; o++) {
          var a = n[o];
          (s = i[a.id]).refs--, r.push(s);
        }

        t && p(d(t, e), e);

        for (o = 0; o < r.length; o++) {
          var s;

          if (0 === (s = r[o]).refs) {
            for (var u = 0; u < s.parts.length; u++) {
              s.parts[u]();
            }

            delete i[s.id];
          }
        }
      };
    };

    var m,
        w = (m = [], function (t, e) {
      return m[t] = e, m.filter(Boolean).join("\n");
    });

    function x(t, e, n, r) {
      var o = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = w(e, o);else {
        var i = document.createTextNode(o),
            a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
      }
    }
  }, function (t, e) {
    t.exports = function (t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var n = e.protocol + "//" + e.host,
          r = n + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
        var o,
            i = e.trim().replace(/^"(.*)"$/, function (t, e) {
          return e;
        }).replace(/^'(.*)'$/, function (t, e) {
          return e;
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
      });
    };
  }, function (t, e, n) {
    "use strict";

    n.r(e), e.default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="1 2 13 12" width="13" height="12"><path d="M8.367 9.633L10.7 10.98l-.624 1.135-.787-.025-.78 1.35H6.94l1.193-2.066-.407-.62.642-1.121zm.436-.763l2.899-5.061a1.278 1.278 0 011.746-.472c.617.355.835 1.138.492 1.76l-2.815 5.114-2.322-1.34zM2.62 11.644H5.39a.899.899 0 110 1.798H2.619a.899.899 0 010-1.798z"/></svg>\n';
  }]);
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Quote = e() : t.Quote = e();
}(window, function () {
  return function (t) {
    var e = {};

    function n(r) {
      if (e[r]) return e[r].exports;
      var o = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var o in t) {
        n.d(r, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
      return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "/", n(n.s = 0);
  }([function (t, e, n) {
    function r(t) {
      return function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) {
            n[e] = t[e];
          }

          return n;
        }
      }(t) || function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }();
    }

    function o(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    function i(t, e, n) {
      return e && o(t.prototype, e), n && o(t, n), t;
    }

    n(1).toString();

    var a = function () {
      function t(e) {
        var n = e.data,
            r = e.config,
            o = e.api;
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t);
        var i = t.ALIGNMENTS,
            a = t.DEFAULT_ALIGNMENT;
        this.api = o, this.quotePlaceholder = r.quotePlaceholder || t.DEFAULT_QUOTE_PLACEHOLDER, this.captionPlaceholder = r.captionPlaceholder || t.DEFAULT_CAPTION_PLACEHOLDER, this.data = {
          text: n.text || "",
          caption: n.caption || "",
          alignment: Object.values(i).includes(n.alignment) && n.alignment || r.defaultAlignment || a
        };
      }

      return i(t, [{
        key: "CSS",
        get: function get() {
          return {
            baseClass: this.api.styles.block,
            wrapper: "cdx-quote",
            text: "cdx-quote__text",
            input: this.api.styles.input,
            caption: "cdx-quote__caption",
            settingsWrapper: "cdx-quote-settings",
            settingsButton: this.api.styles.settingsButton,
            settingsButtonActive: this.api.styles.settingsButtonActive
          };
        }
      }, {
        key: "settings",
        get: function get() {
          return [{
            name: "left",
            icon: '<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg" ><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm0 4.275H9.03a1.069 1.069 0 1 1 0 2.137H1.07a1.069 1.069 0 1 1 0-2.137zm0 4.275h9.812a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z" /></svg>'
          }, {
            name: "center",
            icon: '<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg" ><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm3.15 4.275h5.962a1.069 1.069 0 0 1 0 2.137H4.22a1.069 1.069 0 1 1 0-2.137zM1.069 8.55H13.33a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z"/></svg>'
          }];
        }
      }], [{
        key: "toolbox",
        get: function get() {
          return {
            icon: '<svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg"><path d="M13.53 6.185l.027.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.569-1.568l4.838-4.837L6.396 2.23A1.125 1.125 0 1 1 7.986.64l5.52 5.518.025.027zm-5.815 0l.026.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.568-1.568l4.837-4.837L.58 2.23A1.125 1.125 0 0 1 2.171.64L7.69 6.158l.025.027z" /></svg>',
            title: "Quote"
          };
        }
      }, {
        key: "contentless",
        get: function get() {
          return !0;
        }
      }, {
        key: "enableLineBreaks",
        get: function get() {
          return !0;
        }
      }, {
        key: "DEFAULT_QUOTE_PLACEHOLDER",
        get: function get() {
          return "Enter a quote";
        }
      }, {
        key: "DEFAULT_CAPTION_PLACEHOLDER",
        get: function get() {
          return "Enter a caption";
        }
      }, {
        key: "ALIGNMENTS",
        get: function get() {
          return {
            left: "left",
            center: "center"
          };
        }
      }, {
        key: "DEFAULT_ALIGNMENT",
        get: function get() {
          return t.ALIGNMENTS.left;
        }
      }, {
        key: "conversionConfig",
        get: function get() {
          return {
            import: "text",
            export: function _export(t) {
              return t.caption ? "".concat(t.text, " — ").concat(t.caption) : t.text;
            }
          };
        }
      }]), i(t, [{
        key: "render",
        value: function value() {
          var t = this._make("blockquote", [this.CSS.baseClass, this.CSS.wrapper]),
              e = this._make("div", [this.CSS.input, this.CSS.text], {
            contentEditable: !0,
            innerHTML: this.data.text
          }),
              n = this._make("div", [this.CSS.input, this.CSS.caption], {
            contentEditable: !0,
            innerHTML: this.data.caption
          });

          return e.dataset.placeholder = this.quotePlaceholder, n.dataset.placeholder = this.captionPlaceholder, t.appendChild(e), t.appendChild(n), t;
        }
      }, {
        key: "save",
        value: function value(t) {
          var e = t.querySelector(".".concat(this.CSS.text)),
              n = t.querySelector(".".concat(this.CSS.caption));
          return Object.assign(this.data, {
            text: e.innerHTML,
            caption: n.innerHTML
          });
        }
      }, {
        key: "renderSettings",
        value: function value() {
          var t = this,
              e = this._make("div", [this.CSS.settingsWrapper], {});

          return this.settings.map(function (n) {
            var r,
                o = t._make("div", t.CSS.settingsButton, {
              innerHTML: n.icon,
              title: "".concat((r = n.name, r[0].toUpperCase() + r.substr(1)), " alignment")
            });

            return o.classList.toggle(t.CSS.settingsButtonActive, n.name === t.data.alignment), e.appendChild(o), o;
          }).forEach(function (e, n, r) {
            e.addEventListener("click", function () {
              t._toggleTune(t.settings[n].name), r.forEach(function (e, n) {
                var r = t.settings[n].name;
                e.classList.toggle(t.CSS.settingsButtonActive, r === t.data.alignment);
              });
            });
          }), e;
        }
      }, {
        key: "_toggleTune",
        value: function value(t) {
          this.data.alignment = t;
        }
      }, {
        key: "_make",
        value: function value(t) {
          var e,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              i = document.createElement(t);
          Array.isArray(n) ? (e = i.classList).add.apply(e, r(n)) : n && i.classList.add(n);

          for (var a in o) {
            i[a] = o[a];
          }

          return i;
        }
      }], [{
        key: "sanitize",
        get: function get() {
          return {
            text: {
              br: !0
            },
            caption: {
              br: !0
            },
            alignment: {}
          };
        }
      }]), t;
    }();

    t.exports = a;
  }, function (t, e, n) {
    var r = n(2);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var o = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n(4)(r, o);
    r.locals && (t.exports = r.locals);
  }, function (t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, ".cdx-quote-icon svg {\n  transform: rotate(180deg);\n}\n\n.cdx-quote {\n  margin: 0;\n}\n\n.cdx-quote__text {\n  min-height: 158px;\n  margin-bottom: 10px;\n}\n\n.cdx-quote__caption {}\n\n.cdx-quote [contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n\n.cdx-quote-settings {\n  display: flex;\n}\n\n.cdx-quote-settings .cdx-settings-button {\n  width: 50%;\n}\n", ""]);
  }, function (t, e) {
    t.exports = function (t) {
      var e = [];
      return e.toString = function () {
        return this.map(function (e) {
          var n = function (t, e) {
            var n = t[1] || "",
                r = t[3];
            if (!r) return n;

            if (e && "function" == typeof btoa) {
              var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                  i = r.sources.map(function (t) {
                return "/*# sourceURL=" + r.sourceRoot + t + " */";
              });
              return [n].concat(i).concat([o]).join("\n");
            }

            var a;
            return [n].join("\n");
          }(e, t);

          return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
        }).join("");
      }, e.i = function (t, n) {
        "string" == typeof t && (t = [[null, t, ""]]);

        for (var r = {}, o = 0; o < this.length; o++) {
          var i = this[o][0];
          "number" == typeof i && (r[i] = !0);
        }

        for (o = 0; o < t.length; o++) {
          var a = t[o];
          "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
        }
      }, e;
    };
  }, function (t, e, n) {
    var r,
        o,
        i = {},
        a = (r = function r() {
      return window && document && document.all && !window.atob;
    }, function () {
      return void 0 === o && (o = r.apply(this, arguments)), o;
    }),
        s = function (t) {
      var e = {};
      return function (t) {
        if ("function" == typeof t) return t();

        if (void 0 === e[t]) {
          var n = function (t) {
            return document.querySelector(t);
          }.call(this, t);

          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head;
          } catch (t) {
            n = null;
          }
          e[t] = n;
        }

        return e[t];
      };
    }(),
        c = null,
        u = 0,
        l = [],
        f = n(5);

    function p(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
            o = i[r.id];

        if (o) {
          o.refs++;

          for (var a = 0; a < o.parts.length; a++) {
            o.parts[a](r.parts[a]);
          }

          for (; a < r.parts.length; a++) {
            o.parts.push(y(r.parts[a], e));
          }
        } else {
          var s = [];

          for (a = 0; a < r.parts.length; a++) {
            s.push(y(r.parts[a], e));
          }

          i[r.id] = {
            id: r.id,
            refs: 1,
            parts: s
          };
        }
      }
    }

    function d(t, e) {
      for (var n = [], r = {}, o = 0; o < t.length; o++) {
        var i = t[o],
            a = e.base ? i[0] + e.base : i[0],
            s = {
          css: i[1],
          media: i[2],
          sourceMap: i[3]
        };
        r[a] ? r[a].parts.push(s) : n.push(r[a] = {
          id: a,
          parts: [s]
        });
      }

      return n;
    }

    function h(t, e) {
      var n = s(t.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = l[l.length - 1];
      if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), l.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
        if ("object" != _typeof(t.insertAt) || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var o = s(t.insertInto + " " + t.insertAt.before);
        n.insertBefore(e, o);
      }
    }

    function v(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = l.indexOf(t);
      e >= 0 && l.splice(e, 1);
    }

    function g(t) {
      var e = document.createElement("style");
      return void 0 === t.attrs.type && (t.attrs.type = "text/css"), m(e, t.attrs), h(t, e), e;
    }

    function m(t, e) {
      Object.keys(e).forEach(function (n) {
        t.setAttribute(n, e[n]);
      });
    }

    function y(t, e) {
      var n, r, o, i;

      if (e.transform && t.css) {
        if (!(i = e.transform(t.css))) return function () {};
        t.css = i;
      }

      if (e.singleton) {
        var a = u++;
        n = c || (c = g(e)), r = w.bind(null, n, a, !1), o = w.bind(null, n, a, !0);
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
        var e = document.createElement("link");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", m(e, t.attrs), h(t, e), e;
      }(e), r = function (t, e, n) {
        var r = n.css,
            o = n.sourceMap,
            i = void 0 === e.convertToAbsoluteUrls && o;
        (e.convertToAbsoluteUrls || i) && (r = f(r));
        o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var a = new Blob([r], {
          type: "text/css"
        }),
            s = t.href;
        t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
      }.bind(null, n, e), o = function o() {
        v(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = g(e), r = function (t, e) {
        var n = e.css,
            r = e.media;
        r && t.setAttribute("media", r);
        if (t.styleSheet) t.styleSheet.cssText = n;else {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(document.createTextNode(n));
        }
      }.bind(null, n), o = function o() {
        v(n);
      });

      return r(t), function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
          r(t = e);
        } else o();
      };
    }

    t.exports = function (t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
      (e = e || {}).attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
      var n = d(t, e);
      return p(n, e), function (t) {
        for (var r = [], o = 0; o < n.length; o++) {
          var a = n[o];
          (s = i[a.id]).refs--, r.push(s);
        }

        t && p(d(t, e), e);

        for (o = 0; o < r.length; o++) {
          var s;

          if (0 === (s = r[o]).refs) {
            for (var c = 0; c < s.parts.length; c++) {
              s.parts[c]();
            }

            delete i[s.id];
          }
        }
      };
    };

    var b,
        x = (b = [], function (t, e) {
      return b[t] = e, b.filter(Boolean).join("\n");
    });

    function w(t, e, n, r) {
      var o = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = x(e, o);else {
        var i = document.createTextNode(o),
            a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
      }
    }
  }, function (t, e) {
    t.exports = function (t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var n = e.protocol + "//" + e.host,
          r = n + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
        var o,
            i = e.trim().replace(/^"(.*)"$/, function (t, e) {
          return e;
        }).replace(/^'(.*)'$/, function (t, e) {
          return e;
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
      });
    };
  }]);
});
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Table = e() : t.Table = e();
}(window, function () {
  return function (t) {
    var e = {};

    function o(n) {
      if (e[n]) return e[n].exports;
      var i = e[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return t[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports;
    }

    return o.m = t, o.c = e, o.d = function (t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: n
      });
    }, o.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, o.t = function (t, e) {
      if (1 & e && (t = o(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var n = Object.create(null);
      if (o.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var i in t) {
        o.d(n, i, function (e) {
          return t[e];
        }.bind(null, i));
      }
      return n;
    }, o.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return o.d(e, "a", e), e;
    }, o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, o.p = "", o(o.s = 3);
  }([function (t, e) {
    t.exports = function (t) {
      var e = [];
      return e.toString = function () {
        return this.map(function (e) {
          var o = function (t, e) {
            var o = t[1] || "",
                n = t[3];
            if (!n) return o;

            if (e && "function" == typeof btoa) {
              var i = (l = n, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(l)))) + " */"),
                  r = n.sources.map(function (t) {
                return "/*# sourceURL=" + n.sourceRoot + t + " */";
              });
              return [o].concat(r).concat([i]).join("\n");
            }

            var l;
            return [o].join("\n");
          }(e, t);

          return e[2] ? "@media " + e[2] + "{" + o + "}" : o;
        }).join("");
      }, e.i = function (t, o) {
        "string" == typeof t && (t = [[null, t, ""]]);

        for (var n = {}, i = 0; i < this.length; i++) {
          var r = this[i][0];
          "number" == typeof r && (n[r] = !0);
        }

        for (i = 0; i < t.length; i++) {
          var l = t[i];
          "number" == typeof l[0] && n[l[0]] || (o && !l[2] ? l[2] = o : o && (l[2] = "(" + l[2] + ") and (" + o + ")"), e.push(l));
        }
      }, e;
    };
  }, function (t, e, o) {
    var n,
        i,
        r = {},
        l = (n = function n() {
      return window && document && document.all && !window.atob;
    }, function () {
      return void 0 === i && (i = n.apply(this, arguments)), i;
    }),
        s = function (t) {
      var e = {};
      return function (t, o) {
        if ("function" == typeof t) return t();

        if (void 0 === e[t]) {
          var n = function (t, e) {
            return e ? e.querySelector(t) : document.querySelector(t);
          }.call(this, t, o);

          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head;
          } catch (t) {
            n = null;
          }
          e[t] = n;
        }

        return e[t];
      };
    }(),
        a = null,
        c = 0,
        h = [],
        d = o(6);

    function u(t, e) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o],
            i = r[n.id];

        if (i) {
          i.refs++;

          for (var l = 0; l < i.parts.length; l++) {
            i.parts[l](n.parts[l]);
          }

          for (; l < n.parts.length; l++) {
            i.parts.push(g(n.parts[l], e));
          }
        } else {
          var s = [];

          for (l = 0; l < n.parts.length; l++) {
            s.push(g(n.parts[l], e));
          }

          r[n.id] = {
            id: n.id,
            refs: 1,
            parts: s
          };
        }
      }
    }

    function f(t, e) {
      for (var o = [], n = {}, i = 0; i < t.length; i++) {
        var r = t[i],
            l = e.base ? r[0] + e.base : r[0],
            s = {
          css: r[1],
          media: r[2],
          sourceMap: r[3]
        };
        n[l] ? n[l].parts.push(s) : o.push(n[l] = {
          id: l,
          parts: [s]
        });
      }

      return o;
    }

    function p(t, e) {
      var o = s(t.insertInto);
      if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var n = h[h.length - 1];
      if ("top" === t.insertAt) n ? n.nextSibling ? o.insertBefore(e, n.nextSibling) : o.appendChild(e) : o.insertBefore(e, o.firstChild), h.push(e);else if ("bottom" === t.insertAt) o.appendChild(e);else {
        if ("object" != _typeof(t.insertAt) || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var i = s(t.insertAt.before, o);
        o.insertBefore(e, i);
      }
    }

    function _(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = h.indexOf(t);
      e >= 0 && h.splice(e, 1);
    }

    function b(t) {
      var e = document.createElement("style");

      if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
        var n = function () {
          0;
          return o.nc;
        }();

        n && (t.attrs.nonce = n);
      }

      return v(e, t.attrs), p(t, e), e;
    }

    function v(t, e) {
      Object.keys(e).forEach(function (o) {
        t.setAttribute(o, e[o]);
      });
    }

    function g(t, e) {
      var o, n, i, r;

      if (e.transform && t.css) {
        if (!(r = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {};
        t.css = r;
      }

      if (e.singleton) {
        var l = c++;
        o = a || (a = b(e)), n = w.bind(null, o, l, !1), i = w.bind(null, o, l, !0);
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (o = function (t) {
        var e = document.createElement("link");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", v(e, t.attrs), p(t, e), e;
      }(e), n = function (t, e, o) {
        var n = o.css,
            i = o.sourceMap,
            r = void 0 === e.convertToAbsoluteUrls && i;
        (e.convertToAbsoluteUrls || r) && (n = d(n));
        i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var l = new Blob([n], {
          type: "text/css"
        }),
            s = t.href;
        t.href = URL.createObjectURL(l), s && URL.revokeObjectURL(s);
      }.bind(null, o, e), i = function i() {
        _(o), o.href && URL.revokeObjectURL(o.href);
      }) : (o = b(e), n = function (t, e) {
        var o = e.css,
            n = e.media;
        n && t.setAttribute("media", n);
        if (t.styleSheet) t.styleSheet.cssText = o;else {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(document.createTextNode(o));
        }
      }.bind(null, o), i = function i() {
        _(o);
      });

      return n(t), function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
          n(t = e);
        } else i();
      };
    }

    t.exports = function (t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
      (e = e || {}).attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = l()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
      var o = f(t, e);
      return u(o, e), function (t) {
        for (var n = [], i = 0; i < o.length; i++) {
          var l = o[i];
          (s = r[l.id]).refs--, n.push(s);
        }

        t && u(f(t, e), e);

        for (i = 0; i < n.length; i++) {
          var s;

          if (0 === (s = n[i]).refs) {
            for (var a = 0; a < s.parts.length; a++) {
              s.parts[a]();
            }

            delete r[s.id];
          }
        }
      };
    };

    var m,
        y = (m = [], function (t, e) {
      return m[t] = e, m.filter(Boolean).join("\n");
    });

    function w(t, e, o, n) {
      var i = o ? "" : n.css;
      if (t.styleSheet) t.styleSheet.cssText = y(e, i);else {
        var r = document.createTextNode(i),
            l = t.childNodes;
        l[e] && t.removeChild(l[e]), l.length ? t.insertBefore(r, l[e]) : t.appendChild(r);
      }
    }
  }, function (t, e) {
    t.exports = '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#388AE5"></circle><path fill="#FFF" d="M10.9 9.1h3.7a.9.9 0 1 1 0 1.8h-3.7v3.7a.9.9 0 1 1-1.8 0v-3.7H5.4a.9.9 0 0 1 0-1.8h3.7V5.4a.9.9 0 0 1 1.8 0v3.7z"></path></svg>';
  }, function (t, e, o) {
    var n = o(12).TableConstructor,
        i = o(11),
        r = {
      input: "tc-table__inp"
    };

    t.exports = /*#__PURE__*/function () {
      "use strict";

      _createClass(_class, null, [{
        key: "enableLineBreaks",
        get: function get() {
          return !0;
        }
      }, {
        key: "toolbox",
        get: function get() {
          return {
            icon: i,
            title: "Table"
          };
        }
      }]);

      function _class(_ref) {
        var t = _ref.data,
            e = _ref.config,
            o = _ref.api;

        _classCallCheck(this, _class);

        this.api = o, this._tableConstructor = new n(t, e, o);
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          return this._tableConstructor.htmlElement;
        }
      }, {
        key: "save",
        value: function save(t) {
          var e = [],
              o = t.querySelector("table").rows;

          for (var _t = 0; _t < o.length; _t++) {
            var _n = o[_t],
                _i = Array.from(_n.cells).map(function (t) {
              return t.querySelector("." + r.input);
            });

            _i.every(this._isEmpty) || e.push(_i.map(function (t) {
              return t.innerHTML;
            }));
          }

          return {
            content: e
          };
        }
      }, {
        key: "_isEmpty",
        value: function _isEmpty(t) {
          return !t.textContent.trim();
        }
      }]);

      return _class;
    }();
  }, function (t, e, o) {
    var n = o(5);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var i = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    o(1)(n, i);
    n.locals && (t.exports = n.locals);
  }, function (t, e, o) {
    (t.exports = o(0)(!1)).push([t.i, ".tc-editor{padding:10px;position:relative;box-sizing:content-box;width:100%;left:-10px}", ""]);
  }, function (t, e) {
    t.exports = function (t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var o = e.protocol + "//" + e.host,
          n = o + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
        var i,
            r = e.trim().replace(/^"(.*)"$/, function (t, e) {
          return e;
        }).replace(/^'(.*)'$/, function (t, e) {
          return e;
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? o + r : n + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")");
      });
    };
  }, function (t, e, o) {
    var n = o(8);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var i = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    o(1)(n, i);
    n.locals && (t.exports = n.locals);
  }, function (t, e, o) {
    (t.exports = o(0)(!1)).push([t.i, ".tc-toolbar{background:#368be6;}.tc-toolbar--hidden{visibility:hidden}.tc-toolbar--hor{width:100%;height:21px;flex-direction:row;left:0;top:1px}.tc-toolbar--hor,.tc-toolbar--ver{display:flex;align-items:center;position:absolute;z-index:100}.tc-toolbar--ver{height:100%;width:21px;flex-direction:column;top:0;left:-1px}.tc-toolbar__plus{height:21px;width:21px;margin-top:0;}.tc-toolbar__plus--hor{margin-left:-10px}.tc-toolbar__plus--ver{margin-top:-10px}.tc-toolbar__shine-line--hor{min-height:1px;width:100%}.tc-toolbar__shine-line--ver{min-width:1px;height:100%}", ""]);
  }, function (t, e, o) {
    var n = o(10);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var i = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    o(1)(n, i);
    n.locals && (t.exports = n.locals);
  }, function (t, e, o) {
    (t.exports = o(0)(!1)).push([t.i, ".tc-table{width:100%;height:100%;border-collapse:collapse;table-layout:fixed;}.tc-table__wrap{border:1px solid #dbdbe2;border-radius:3px;position:relative;height:100%;width:100%;box-sizing:border-box}.tc-table__cell{border:1px solid #dbdbe2;padding:0;vertical-align:top}.tc-table__area{padding:10px;height:100%}.tc-table__inp{outline:none;flex-grow:100;min-height:1.5em;height:100%;overflow:hidden}.tc-table tbody tr:first-child td{border-top:none}.tc-table tbody tr:last-child td{border-bottom:none}.tc-table tbody tr td:last-child{border-right:none}.tc-table tbody tr td:first-child{border-left:none}", ""]);
  }, function (t, e) {
    t.exports = '<svg width="18" height="14"><path d="M2.833 8v1.95a1.7 1.7 0 0 0 1.7 1.7h3.45V8h-5.15zm0-2h5.15V2.35h-3.45a1.7 1.7 0 0 0-1.7 1.7V6zm12.3 2h-5.15v3.65h3.45a1.7 1.7 0 0 0 1.7-1.7V8zm0-2V4.05a1.7 1.7 0 0 0-1.7-1.7h-3.45V6h5.15zM4.533.1h8.9a3.95 3.95 0 0 1 3.95 3.95v5.9a3.95 3.95 0 0 1-3.95 3.95h-8.9a3.95 3.95 0 0 1-3.95-3.95v-5.9A3.95 3.95 0 0 1 4.533.1z"></path></svg>';
  }, function (t, e, o) {
    "use strict";

    o.r(e);
    o(4);

    function n(t) {
      return !(null == t);
    }

    function i(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var r = document.createElement(t);
      if (n(e)) for (var _t2 = 0; _t2 < e.length; _t2++) {
        n(e[_t2]) && r.classList.add(e[_t2]);
      }
      if (n(o)) for (var _t3 in o) {
        r.setAttribute(_t3, o[_t3]);
      }
      if (n(i)) for (var _t4 = 0; _t4 < i.length; _t4++) {
        n(i[_t4]) && r.appendChild(i[_t4]);
      }
      return r;
    }

    function r(t) {
      var e = t.getBoundingClientRect();
      return {
        y1: Math.floor(e.top + window.pageYOffset),
        x1: Math.floor(e.left + window.pageXOffset),
        x2: Math.floor(e.right + window.pageXOffset),
        y2: Math.floor(e.bottom + window.pageYOffset)
      };
    }

    function l(t, e, o) {
      var n;
      return e - t.x1 >= -1 && e - t.x1 <= 11 && (n = "left"), t.x2 - e >= -1 && t.x2 - e <= 11 && (n = "right"), o - t.y1 >= -1 && o - t.y1 <= 11 && (n = "top"), t.y2 - o >= -1 && t.y2 - o <= 11 && (n = "bottom"), n;
    }

    o(7);
    var s = o(2),
        a = o.n(s);
    var c = {
      highlightingLine: "tc-toolbar",
      hidden: "tc-toolbar--hidden",
      horizontalToolBar: "tc-toolbar--hor",
      horizontalHighlightingLine: "tc-toolbar__shine-line--hor",
      verticalToolBar: "tc-toolbar--ver",
      verticalHighlightingLine: "tc-toolbar__shine-line--ver",
      plusButton: "tc-toolbar__plus",
      horizontalPlusButton: "tc-toolbar__plus--hor",
      verticalPlusButton: "tc-toolbar__plus--ver",
      area: "tc-table__area"
    };

    var h = /*#__PURE__*/function () {
      function h() {
        _classCallCheck(this, h);

        this._plusButton = this._generatePlusButton(), this._highlightingLine = this._generateHighlightingLine(), this._toolbar = this._generateToolBar([this._plusButton, this._highlightingLine]);
      }

      _createClass(h, [{
        key: "hide",
        value: function hide() {
          this._toolbar.classList.add(c.hidden);
        }
      }, {
        key: "show",
        value: function show() {
          this._toolbar.classList.remove(c.hidden), this._highlightingLine.classList.remove(c.hidden);
        }
      }, {
        key: "hideLine",
        value: function hideLine() {
          this._highlightingLine.classList.add(c.hidden);
        }
      }, {
        key: "_generatePlusButton",
        value: function _generatePlusButton() {
          var _this = this;

          var t = i("div", [c.plusButton]);
          return t.innerHTML = a.a, t.addEventListener("click", function (t) {
            t.stopPropagation();
            var e = new CustomEvent("click", {
              detail: {
                x: t.pageX,
                y: t.pageY
              },
              bubbles: !0
            });

            _this._toolbar.dispatchEvent(e);
          }), t;
        }
      }, {
        key: "_generateHighlightingLine",
        value: function _generateHighlightingLine() {
          var _this2 = this;

          var t = i("div", [c.highlightingLine]);
          return t.addEventListener("click", function (t) {
            t.stopPropagation();
            var e = new CustomEvent("click", {
              bubbles: !0
            });

            _this2._toolbar.dispatchEvent(e);
          }), t;
        }
      }, {
        key: "_generateToolBar",
        value: function _generateToolBar(t) {
          var _this3 = this;

          var e = i("div", [c.hidden], null, t);
          return e.addEventListener("mouseleave", function (t) {
            _this3._recalcMousePos(t);
          }), e;
        }
      }, {
        key: "_recalcMousePos",
        value: function _recalcMousePos(t) {
          this.hide();
          var e = document.elementFromPoint(t.pageX, t.pageY);

          if (null !== e && e.classList.contains(c.area)) {
            var _o = new MouseEvent("mouseover", {
              clientX: t.pageX,
              clientY: t.pageY
            });

            e.dispatchEvent(_o);
          }
        }
      }, {
        key: "htmlElement",
        get: function get() {
          return this._toolbar;
        }
      }]);

      return h;
    }();

    var d = /*#__PURE__*/function (_h) {
      _inherits(d, _h);

      var _super = _createSuper(d);

      function d() {
        var _this4;

        _classCallCheck(this, d);

        _this4 = _super.call(this), _this4._toolbar.classList.add(c.horizontalToolBar), _this4._plusButton.classList.add(c.horizontalPlusButton), _this4._highlightingLine.classList.add(c.horizontalHighlightingLine);
        return _this4;
      }

      _createClass(d, [{
        key: "showIn",
        value: function showIn(t) {
          var e = Math.floor(Number.parseInt(window.getComputedStyle(this._toolbar).height) / 2);
          this._toolbar.style.top = t - e + "px", this.show();
        }
      }]);

      return d;
    }(h);

    var u = /*#__PURE__*/function (_h2) {
      _inherits(u, _h2);

      var _super2 = _createSuper(u);

      function u() {
        var _this5;

        _classCallCheck(this, u);

        _this5 = _super2.call(this), _this5._toolbar.classList.add(c.verticalToolBar), _this5._plusButton.classList.add(c.verticalPlusButton), _this5._highlightingLine.classList.add(c.verticalHighlightingLine);
        return _this5;
      }

      _createClass(u, [{
        key: "showIn",
        value: function showIn(t) {
          var e = Math.floor(Number.parseInt(window.getComputedStyle(this._toolbar).width) / 2);
          this._toolbar.style.left = t - e + "px", this.show();
        }
      }]);

      return u;
    }(h);

    o(9);
    var f = {
      table: "tc-table",
      inputField: "tc-table__inp",
      cell: "tc-table__cell",
      wrapper: "tc-table__wrap",
      area: "tc-table__area"
    };

    var p = /*#__PURE__*/function () {
      function p() {
        _classCallCheck(this, p);

        this._numberOfColumns = 0, this._numberOfRows = 0, this._element = this._createTableWrapper(), this._table = this._element.querySelector("table"), this._hangEvents();
      }

      _createClass(p, [{
        key: "addColumn",
        value: function addColumn() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
          this._numberOfColumns++;
          var e = this._table.rows;

          for (var _o2 = 0; _o2 < e.length; _o2++) {
            var _n2 = e[_o2].insertCell(t);

            this._fillCell(_n2);
          }
        }
      }, {
        key: "addRow",
        value: function addRow() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
          this._numberOfRows++;

          var e = this._table.insertRow(t);

          return this._fillRow(e), e;
        }
      }, {
        key: "_createTableWrapper",
        value: function _createTableWrapper() {
          return i("div", [f.wrapper], null, [i("table", [f.table])]);
        }
      }, {
        key: "_createContenteditableArea",
        value: function _createContenteditableArea() {
          return i("div", [f.inputField], {
            contenteditable: "true"
          });
        }
      }, {
        key: "_fillCell",
        value: function _fillCell(t) {
          t.classList.add(f.cell);

          var e = this._createContenteditableArea();

          t.appendChild(i("div", [f.area], null, [e]));
        }
      }, {
        key: "_fillRow",
        value: function _fillRow(t) {
          for (var _e = 0; _e < this._numberOfColumns; _e++) {
            var _e2 = t.insertCell();

            this._fillCell(_e2);
          }
        }
      }, {
        key: "_hangEvents",
        value: function _hangEvents() {
          var _this6 = this;

          this._table.addEventListener("focus", function (t) {
            _this6._focusEditField(t);
          }, !0), this._table.addEventListener("blur", function (t) {
            _this6._blurEditField(t);
          }, !0), this._table.addEventListener("keydown", function (t) {
            _this6._pressedEnterInEditField(t);
          }), this._table.addEventListener("click", function (t) {
            _this6._clickedOnCell(t);
          }), this._table.addEventListener("mouseover", function (t) {
            _this6._mouseEnterInDetectArea(t), t.stopPropagation();
          }, !0);
        }
      }, {
        key: "_focusEditField",
        value: function _focusEditField(t) {
          t.target.classList.contains(f.inputField) && (this._selectedCell = t.target.closest("." + f.cell));
        }
      }, {
        key: "_blurEditField",
        value: function _blurEditField(t) {
          t.target.classList.contains(f.inputField) && (this._selectedCell = null);
        }
      }, {
        key: "_pressedEnterInEditField",
        value: function _pressedEnterInEditField(t) {
          t.target.classList.contains(f.inputField) && (13 !== t.keyCode || t.shiftKey || t.preventDefault());
        }
      }, {
        key: "_clickedOnCell",
        value: function _clickedOnCell(t) {
          if (!t.target.classList.contains(f.cell)) return;
          t.target.querySelector("." + f.inputField).focus();
        }
      }, {
        key: "_mouseEnterInDetectArea",
        value: function _mouseEnterInDetectArea(t) {
          if (!t.target.classList.contains(f.area)) return;
          var e = l(r(t.target.closest("TD")), t.pageX, t.pageY);
          t.target.dispatchEvent(new CustomEvent("mouseInActivatingArea", {
            detail: {
              side: e
            },
            bubbles: !0
          }));
        }
      }, {
        key: "htmlElement",
        get: function get() {
          return this._element;
        }
      }, {
        key: "body",
        get: function get() {
          return this._table;
        }
      }, {
        key: "selectedCell",
        get: function get() {
          return this._selectedCell;
        }
      }]);

      return p;
    }();

    o.d(e, "TableConstructor", function () {
      return b;
    });
    var _ = {
      editor: "tc-editor",
      toolBarHor: "tc-toolbar--hor",
      toolBarVer: "tc-toolbar--ver",
      inputField: "tc-table__inp"
    };

    var b = /*#__PURE__*/function () {
      function b(t, e, o) {
        _classCallCheck(this, b);

        this._table = new p();

        var n = this._resizeTable(t, e);

        this._fillTable(t, n), this._container = i("div", [_.editor, o.styles.block], null, [this._table.htmlElement]), this._verticalToolBar = new u(), this._horizontalToolBar = new d(), this._table.htmlElement.appendChild(this._horizontalToolBar.htmlElement), this._table.htmlElement.appendChild(this._verticalToolBar.htmlElement), this._hoveredCell = null, this._activatedToolBar = null, this._hoveredCellSide = null, this._plusButDelay = null, this._toolbarShowDelay = null, this._hangEvents();
      }

      _createClass(b, [{
        key: "_fillTable",
        value: function _fillTable(t, e) {
          if (void 0 !== t.content) for (var _o3 = 0; _o3 < e.rows && _o3 < t.content.length; _o3++) {
            for (var _n3 = 0; _n3 < e.cols && _n3 < t.content[_o3].length; _n3++) {
              this._table.body.rows[_o3].cells[_n3].querySelector("." + _.inputField).innerHTML = t.content[_o3][_n3];
            }
          }
        }
      }, {
        key: "_resizeTable",
        value: function _resizeTable(t, e) {
          var o = Array.isArray(t.content),
              n = !!o && t.content.length,
              i = o ? t.content.length : void 0,
              r = n ? t.content[0].length : void 0,
              l = Number.parseInt(e.rows),
              s = Number.parseInt(e.cols),
              a = !isNaN(l) && l > 0 ? l : void 0,
              c = !isNaN(s) && s > 0 ? s : void 0,
              h = i || a || 2,
              d = r || c || 2;

          for (var _t5 = 0; _t5 < h; _t5++) {
            this._table.addRow();
          }

          for (var _t6 = 0; _t6 < d; _t6++) {
            this._table.addColumn();
          }

          return {
            rows: h,
            cols: d
          };
        }
      }, {
        key: "_showToolBar",
        value: function _showToolBar(t, e) {
          this._hideToolBar(), this._activatedToolBar = t, t.showIn(e);
        }
      }, {
        key: "_hideToolBar",
        value: function _hideToolBar() {
          null !== this._activatedToolBar && this._activatedToolBar.hide();
        }
      }, {
        key: "_hangEvents",
        value: function _hangEvents() {
          var _this7 = this;

          this._container.addEventListener("mouseInActivatingArea", function (t) {
            _this7._toolbarCalling(t);
          }), this._container.addEventListener("click", function (t) {
            _this7._clickToolbar(t);
          }), this._container.addEventListener("input", function () {
            _this7._hideToolBar();
          }), this._container.addEventListener("keydown", function (t) {
            _this7._containerKeydown(t);
          }), this._container.addEventListener("mouseout", function (t) {
            _this7._leaveDetectArea(t);
          }), this._container.addEventListener("mouseover", function (t) {
            _this7._mouseEnterInDetectArea(t);
          });
        }
      }, {
        key: "_mouseInActivatingAreaListener",
        value: function _mouseInActivatingAreaListener(t) {
          this._hoveredCellSide = t.detail.side;
          var e = r(t.target),
              o = r(this._table.htmlElement);

          if (this._hoveredCell = t.target.closest("TD"), null === this._hoveredCell) {
            var _t7 = 11;
            this._hoveredCell = this._container, e.x1 += _t7, e.y1 += _t7, e.x2 -= _t7, e.y2 -= _t7;
          }

          "top" === this._hoveredCellSide && this._showToolBar(this._horizontalToolBar, e.y1 - o.y1 - 2), "bottom" === this._hoveredCellSide && this._showToolBar(this._horizontalToolBar, e.y2 - o.y1 - 1), "left" === this._hoveredCellSide && this._showToolBar(this._verticalToolBar, e.x1 - o.x1 - 2), "right" === this._hoveredCellSide && this._showToolBar(this._verticalToolBar, e.x2 - o.x1 - 1);
        }
      }, {
        key: "_isToolbar",
        value: function _isToolbar(t) {
          return !(!t.closest("." + _.toolBarHor) && !t.closest("." + _.toolBarVer));
        }
      }, {
        key: "_leaveDetectArea",
        value: function _leaveDetectArea(t) {
          this._isToolbar(t.relatedTarget) || (clearTimeout(this._toolbarShowDelay), this._hideToolBar());
        }
      }, {
        key: "_toolbarCalling",
        value: function _toolbarCalling(t) {
          var _this8 = this;

          this._isToolbar(t.target) || (clearTimeout(this._toolbarShowDelay), this._toolbarShowDelay = setTimeout(function () {
            _this8._mouseInActivatingAreaListener(t);
          }, 125));
        }
      }, {
        key: "_clickToolbar",
        value: function _clickToolbar(t) {
          if (!this._isToolbar(t.target)) return;
          var e;

          if (this._activatedToolBar === this._horizontalToolBar ? (this._addRow(), e = "y") : (this._addColumn(), e = "x"), isNaN(t.detail) && null !== t.detail) {
            var _o4 = r(this._table.htmlElement);

            var _n4;

            _n4 = "x" === e ? t.detail.x - _o4.x1 : t.detail.y - _o4.y1, this._delayAddButtonForMultiClickingNearMouse(_n4);
          } else this._hideToolBar();
        }
      }, {
        key: "_containerKeydown",
        value: function _containerKeydown(t) {
          13 === t.keyCode && this._containerEnterPressed(t);
        }
      }, {
        key: "_delayAddButtonForMultiClickingNearMouse",
        value: function _delayAddButtonForMultiClickingNearMouse(t) {
          var _this9 = this;

          this._showToolBar(this._activatedToolBar, t), this._activatedToolBar.hideLine(), clearTimeout(this._plusButDelay), this._plusButDelay = setTimeout(function () {
            _this9._hideToolBar();
          }, 500);
        }
      }, {
        key: "_getHoveredSideOfContainer",
        value: function _getHoveredSideOfContainer() {
          return this._hoveredCell === this._container ? this._isBottomOrRight() ? 0 : -1 : 1;
        }
      }, {
        key: "_isBottomOrRight",
        value: function _isBottomOrRight() {
          return "bottom" === this._hoveredCellSide || "right" === this._hoveredCellSide;
        }
      }, {
        key: "_addRow",
        value: function _addRow() {
          var t = this._hoveredCell.closest("TR");

          var e = this._getHoveredSideOfContainer();

          1 === e && (e = t.sectionRowIndex, e += this._isBottomOrRight()), this._table.addRow(e);
        }
      }, {
        key: "_addColumn",
        value: function _addColumn() {
          var t = this._getHoveredSideOfContainer();

          1 === t && (t = this._hoveredCell.cellIndex, t += this._isBottomOrRight()), this._table.addColumn(t);
        }
      }, {
        key: "_containerEnterPressed",
        value: function _containerEnterPressed(t) {
          if (null === this._table.selectedCell || t.shiftKey) return;

          var e = this._table.selectedCell.closest("TR");

          var o = this._getHoveredSideOfContainer();

          1 === o && (o = e.sectionRowIndex + 1), this._table.addRow(o).cells[0].click();
        }
      }, {
        key: "_mouseEnterInDetectArea",
        value: function _mouseEnterInDetectArea(t) {
          var e = l(r(this._container), t.pageX, t.pageY);
          t.target.dispatchEvent(new CustomEvent("mouseInActivatingArea", {
            detail: {
              side: e
            },
            bubbles: !0
          }));
        }
      }, {
        key: "htmlElement",
        get: function get() {
          return this._container;
        }
      }]);

      return b;
    }();
  }]);
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Warning = e() : t.Warning = e();
}(window, function () {
  return function (t) {
    var e = {};

    function n(r) {
      if (e[r]) return e[r].exports;
      var o = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var o in t) {
        n.d(r, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
      return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "/", n(n.s = 1);
  }([function (t, e) {
    t.exports = '<svg width="16" height="17" viewBox="0 0 320 294" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M160.5 97c12.426 0 22.5 10.074 22.5 22.5v28c0 12.426-10.074 22.5-22.5 22.5S138 159.926 138 147.5v-28c0-12.426 10.074-22.5 22.5-22.5zm0 83c14.636 0 26.5 11.864 26.5 26.5S175.136 233 160.5 233 134 221.136 134 206.5s11.864-26.5 26.5-26.5zm-.02-135c-6.102 0-14.05 8.427-23.842 25.28l-74.73 127.605c-12.713 21.444-17.806 35.025-15.28 40.742 2.527 5.717 8.519 9.175 17.974 10.373h197.255c5.932-1.214 10.051-4.671 12.357-10.373 2.307-5.702-1.812-16.903-12.357-33.603L184.555 70.281C174.608 53.427 166.583 45 160.48 45zm154.61 165.418c2.216 6.027 3.735 11.967 4.393 18.103.963 8.977.067 18.035-3.552 26.98-7.933 19.612-24.283 33.336-45.054 37.586l-4.464.913H61.763l-2.817-.357c-10.267-1.3-19.764-4.163-28.422-9.16-11.051-6.377-19.82-15.823-25.055-27.664-4.432-10.03-5.235-19.952-3.914-29.887.821-6.175 2.486-12.239 4.864-18.58 3.616-9.64 9.159-20.55 16.718-33.309L97.77 47.603c6.469-11.125 12.743-20.061 19.436-27.158 4.62-4.899 9.562-9.07 15.206-12.456C140.712 3.01 150.091 0 160.481 0c10.358 0 19.703 2.99 27.989 7.933 5.625 3.356 10.563 7.492 15.193 12.354 6.735 7.072 13.08 15.997 19.645 27.12l.142.24 76.986 134.194c6.553 10.46 11.425 19.799 14.654 28.577z"></path></svg>';
  }, function (t, e, n) {
    "use strict";

    n.r(e), n.d(e, "default", function () {
      return c;
    });
    var r = n(0),
        o = n.n(r);

    function i(t) {
      return function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) {
            n[e] = t[e];
          }

          return n;
        }
      }(t) || function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }();
    }

    function a(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    function s(t, e, n) {
      return e && a(t.prototype, e), n && a(t, n), t;
    }

    n(2).toString();

    var c = function () {
      function t(e) {
        var n = e.data,
            r = e.config,
            o = e.api;
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.api = o, this.titlePlaceholder = r.titlePlaceholder || t.DEFAULT_TITLE_PLACEHOLDER, this.messagePlaceholder = r.messagePlaceholder || t.DEFAULT_MESSAGE_PLACEHOLDER, this.data = {
          title: n.title || "",
          message: n.message || ""
        };
      }

      return s(t, [{
        key: "CSS",
        get: function get() {
          return {
            baseClass: this.api.styles.block,
            wrapper: "cdx-warning",
            title: "cdx-warning__title",
            input: this.api.styles.input,
            message: "cdx-warning__message"
          };
        }
      }], [{
        key: "toolbox",
        get: function get() {
          return {
            icon: o.a,
            title: "Warning"
          };
        }
      }, {
        key: "enableLineBreaks",
        get: function get() {
          return !0;
        }
      }, {
        key: "DEFAULT_TITLE_PLACEHOLDER",
        get: function get() {
          return "Title";
        }
      }, {
        key: "DEFAULT_MESSAGE_PLACEHOLDER",
        get: function get() {
          return "Message";
        }
      }]), s(t, [{
        key: "render",
        value: function value() {
          var t = this._make("div", [this.CSS.baseClass, this.CSS.wrapper]),
              e = this._make("div", [this.CSS.input, this.CSS.title], {
            contentEditable: !0,
            innerHTML: this.data.title
          }),
              n = this._make("div", [this.CSS.input, this.CSS.message], {
            contentEditable: !0,
            innerHTML: this.data.message
          });

          return e.dataset.placeholder = this.titlePlaceholder, n.dataset.placeholder = this.messagePlaceholder, t.appendChild(e), t.appendChild(n), t;
        }
      }, {
        key: "save",
        value: function value(t) {
          var e = t.querySelector(".".concat(this.CSS.title)),
              n = t.querySelector(".".concat(this.CSS.message));
          return Object.assign(this.data, {
            title: e.innerHTML,
            message: n.innerHTML
          });
        }
      }, {
        key: "_make",
        value: function value(t) {
          var e,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              o = document.createElement(t);
          Array.isArray(n) ? (e = o.classList).add.apply(e, i(n)) : n && o.classList.add(n);

          for (var a in r) {
            o[a] = r[a];
          }

          return o;
        }
      }], [{
        key: "sanitize",
        get: function get() {
          return {
            title: {},
            message: {}
          };
        }
      }]), t;
    }();
  }, function (t, e, n) {
    var r = n(3);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var o = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n(5)(r, o);
    r.locals && (t.exports = r.locals);
  }, function (t, e, n) {
    (t.exports = n(4)(!1)).push([t.i, ".cdx-warning {\n  position: relative;\n}\n\n.cdx-warning [contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n.cdx-warning [contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-warning [contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n\n.cdx-warning::before {\n  content: '';\n  background-image: url(\"data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 320 294' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath fill='%237B7E89' d='M160.5 97c12.426 0 22.5 10.074 22.5 22.5v28c0 12.426-10.074 22.5-22.5 22.5S138 159.926 138 147.5v-28c0-12.426 10.074-22.5 22.5-22.5zm0 83c14.636 0 26.5 11.864 26.5 26.5S175.136 233 160.5 233 134 221.136 134 206.5s11.864-26.5 26.5-26.5zm-.02-135c-6.102 0-14.05 8.427-23.842 25.28l-74.73 127.605c-12.713 21.444-17.806 35.025-15.28 40.742 2.527 5.717 8.519 9.175 17.974 10.373h197.255c5.932-1.214 10.051-4.671 12.357-10.373 2.307-5.702-1.812-16.903-12.357-33.603L184.555 70.281C174.608 53.427 166.583 45 160.48 45zm154.61 165.418c2.216 6.027 3.735 11.967 4.393 18.103.963 8.977.067 18.035-3.552 26.98-7.933 19.612-24.283 33.336-45.054 37.586l-4.464.913H61.763l-2.817-.357c-10.267-1.3-19.764-4.163-28.422-9.16-11.051-6.377-19.82-15.823-25.055-27.664-4.432-10.03-5.235-19.952-3.914-29.887.821-6.175 2.486-12.239 4.864-18.58 3.616-9.64 9.159-20.55 16.718-33.309L97.77 47.603c6.469-11.125 12.743-20.061 19.436-27.158 4.62-4.899 9.562-9.07 15.206-12.456C140.712 3.01 150.091 0 160.481 0c10.358 0 19.703 2.99 27.989 7.933 5.625 3.356 10.563 7.492 15.193 12.354 6.735 7.072 13.08 15.997 19.645 27.12l.142.24 76.986 134.194c6.553 10.46 11.425 19.799 14.654 28.577z'/%3E%3C/svg%3E\");\n  width: 18px;\n  height: 18px;\n  background-size: 18px 18px;\n  position: absolute;\n  margin-top: 12px;\n  left: -30px;\n}\n\n@media all and (max-width: 735px) {\n  .cdx-warning::before {\n    display: none;\n  }\n}\n\n.cdx-warning__message {\n  min-height: 85px;\n}\n\n.cdx-warning__title {\n  margin-bottom: 6px;\n}\n", ""]);
  }, function (t, e, n) {
    "use strict";

    t.exports = function (t) {
      var e = [];
      return e.toString = function () {
        return this.map(function (e) {
          var n = function (t, e) {
            var n = t[1] || "",
                r = t[3];
            if (!r) return n;

            if (e && "function" == typeof btoa) {
              var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                  i = r.sources.map(function (t) {
                return "/*# sourceURL=" + r.sourceRoot + t + " */";
              });
              return [n].concat(i).concat([o]).join("\n");
            }

            var a;
            return [n].join("\n");
          }(e, t);

          return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
        }).join("");
      }, e.i = function (t, n) {
        "string" == typeof t && (t = [[null, t, ""]]);

        for (var r = {}, o = 0; o < this.length; o++) {
          var i = this[o][0];
          null != i && (r[i] = !0);
        }

        for (o = 0; o < t.length; o++) {
          var a = t[o];
          null != a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
        }
      }, e;
    };
  }, function (t, e, n) {
    var r,
        o,
        i = {},
        a = (r = function r() {
      return window && document && document.all && !window.atob;
    }, function () {
      return void 0 === o && (o = r.apply(this, arguments)), o;
    }),
        s = function (t) {
      var e = {};
      return function (t, n) {
        if ("function" == typeof t) return t();

        if (void 0 === e[t]) {
          var r = function (t, e) {
            return e ? e.querySelector(t) : document.querySelector(t);
          }.call(this, t, n);

          if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
            r = r.contentDocument.head;
          } catch (t) {
            r = null;
          }
          e[t] = r;
        }

        return e[t];
      };
    }(),
        c = null,
        l = 0,
        u = [],
        f = n(6);

    function d(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
            o = i[r.id];

        if (o) {
          o.refs++;

          for (var a = 0; a < o.parts.length; a++) {
            o.parts[a](r.parts[a]);
          }

          for (; a < r.parts.length; a++) {
            o.parts.push(b(r.parts[a], e));
          }
        } else {
          var s = [];

          for (a = 0; a < r.parts.length; a++) {
            s.push(b(r.parts[a], e));
          }

          i[r.id] = {
            id: r.id,
            refs: 1,
            parts: s
          };
        }
      }
    }

    function p(t, e) {
      for (var n = [], r = {}, o = 0; o < t.length; o++) {
        var i = t[o],
            a = e.base ? i[0] + e.base : i[0],
            s = {
          css: i[1],
          media: i[2],
          sourceMap: i[3]
        };
        r[a] ? r[a].parts.push(s) : n.push(r[a] = {
          id: a,
          parts: [s]
        });
      }

      return n;
    }

    function h(t, e) {
      var n = s(t.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = u[u.length - 1];
      if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
        if ("object" != _typeof(t.insertAt) || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var o = s(t.insertAt.before, n);
        n.insertBefore(e, o);
      }
    }

    function v(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = u.indexOf(t);
      e >= 0 && u.splice(e, 1);
    }

    function g(t) {
      var e = document.createElement("style");

      if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
        var r = function () {
          0;
          return n.nc;
        }();

        r && (t.attrs.nonce = r);
      }

      return m(e, t.attrs), h(t, e), e;
    }

    function m(t, e) {
      Object.keys(e).forEach(function (n) {
        t.setAttribute(n, e[n]);
      });
    }

    function b(t, e) {
      var n, r, o, i;

      if (e.transform && t.css) {
        if (!(i = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {};
        t.css = i;
      }

      if (e.singleton) {
        var a = l++;
        n = c || (c = g(e)), r = x.bind(null, n, a, !1), o = x.bind(null, n, a, !0);
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
        var e = document.createElement("link");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", m(e, t.attrs), h(t, e), e;
      }(e), r = function (t, e, n) {
        var r = n.css,
            o = n.sourceMap,
            i = void 0 === e.convertToAbsoluteUrls && o;
        (e.convertToAbsoluteUrls || i) && (r = f(r));
        o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var a = new Blob([r], {
          type: "text/css"
        }),
            s = t.href;
        t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
      }.bind(null, n, e), o = function o() {
        v(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = g(e), r = function (t, e) {
        var n = e.css,
            r = e.media;
        r && t.setAttribute("media", r);
        if (t.styleSheet) t.styleSheet.cssText = n;else {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(document.createTextNode(n));
        }
      }.bind(null, n), o = function o() {
        v(n);
      });

      return r(t), function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
          r(t = e);
        } else o();
      };
    }

    t.exports = function (t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
      (e = e || {}).attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
      var n = p(t, e);
      return d(n, e), function (t) {
        for (var r = [], o = 0; o < n.length; o++) {
          var a = n[o];
          (s = i[a.id]).refs--, r.push(s);
        }

        t && d(p(t, e), e);

        for (o = 0; o < r.length; o++) {
          var s;

          if (0 === (s = r[o]).refs) {
            for (var c = 0; c < s.parts.length; c++) {
              s.parts[c]();
            }

            delete i[s.id];
          }
        }
      };
    };

    var y,
        w = (y = [], function (t, e) {
      return y[t] = e, y.filter(Boolean).join("\n");
    });

    function x(t, e, n, r) {
      var o = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = w(e, o);else {
        var i = document.createTextNode(o),
            a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
      }
    }
  }, function (t, e) {
    t.exports = function (t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var n = e.protocol + "//" + e.host,
          r = n + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
        var o,
            i = e.trim().replace(/^"(.*)"$/, function (t, e) {
          return e;
        }).replace(/^'(.*)'$/, function (t, e) {
          return e;
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
      });
    };
  }]).default;
});
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BfeEditor = /*#__PURE__*/function () {
  function BfeEditor(bfee_editor, data) {
    _classCallCheck(this, BfeEditor);

    this.bfee_editor = new EditorJS(this.editorSettings);

    try {
      this.data = JSON.parse(editor_data);
    } catch (e) {
      this.data = editor_data;
    }
  }

  _createClass(BfeEditor, [{
    key: "save_data",

    /**
     * Save data from admin block
     * @param {*} data 
     */
    value: function save_data(data) {
      var save_button_messages = this.bfee_data.translations.save_button,
          save_button = document.querySelector('#save-editor-block'),
          post_id = document.querySelector('#bfe-editor-block').getAttribute('post_id');
      var data = {
        action: 'bfe_update_post',
        post_id: post_id,
        editor_data: data
      };
      jQuery.ajax({
        type: 'post',
        url: this.bfee_data.ajax_url,
        data: data,
        beforeSend: function beforeSend(response) {
          save_button.innerHTML = save_button_messages.updating;
          console.log('Updating');
        },
        success: function success(response) {
          if (response.error) {
            console.log(response.data);
          } else {
            save_button.innerHTML = save_button_messages.update;
            console.log(response);
          }
        }
      });
    }
    /**
     * Save on change data
     */

  }, {
    key: "onChangeSaveData",
    value: function onChangeSaveData() {
      var _this = this;

      this.bfee_editor.save().then(function (data) {
        _this.save_data(data);
      });
    }
    /**
     * uploading image
     */

  }, {
    key: "bfee_data",
    get: function get() {
      var data;

      try {
        data = JSON.parse(editor_data);
      } catch (e) {
        data = editor_data;
      }

      return data;
    }
  }, {
    key: "editorSettings",

    /**
     * Setting is set here
     */
    get: function get() {
      return {
        holder: 'bfe-editor-block',
        // autofocus: true,
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
            config: {
              placeholder: 'Enter a header',
              defaultLevel: 2
            },
            shortcut: 'CMD+SHIFT+H'
          },
          image: {
            class: ImageTool,
            inlineToolbar: true,
            config: {
              uploader: {
                uploadByFile: function uploadByFile(file) {
                  return BfeEditor.uploadImage(file).then(function (data) {
                    return {
                      "success": 1,
                      "file": {
                        "url": data.data.url
                      }
                    };
                  });
                },
                uploadByUrl: function uploadByUrl(url) {
                  return BfeEditor.uploadImage(null, url).then(function (data) {
                    return {
                      "success": 1,
                      "file": {
                        "url": data.data.url
                      }
                    };
                  });
                }
              }
            }
          },
          list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L'
          },
          checklist: {
            class: Checklist,
            inlineToolbar: true
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: 'Quote\'s author'
            },
            shortcut: 'CMD+SHIFT+O'
          },
          warning: Warning,
          marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M'
          },
          code: {
            class: CodeTool,
            shortcut: 'CMD+SHIFT+C'
          },
          delimiter: Delimiter,
          inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+C'
          },
          linkTool: LinkTool,
          embed: Embed,
          table: {
            class: Table,
            inlineToolbar: true,
            shortcut: 'CMD+ALT+T'
          }
        },
        initialBlock: 'paragraph',
        data: {
          blocks: this.bfee_data.data
        },
        onReady: function onReady() {//saveButton.click();
        },
        onChange: function onChange() {//this.onChangeSaveData()
        }
      };
    }
  }], [{
    key: "uploadImage",
    value: function uploadImage() {
      var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return new Promise(function (resolve, reject) {
        var formData = new FormData();
        formData.append('action', 'bfe_uploading_image');

        if (file !== null) {
          formData.append('image', file);
        }

        if (url !== null) {
          formData.append('image_url', url);
        }

        formData.append('post_id', BfeEditor.get_bfee_data.post_id);
        fetch(BfeEditor.get_bfee_data.ajax_url, {
          method: 'POST',
          body: formData
        }).then(function (response) {
          if (response.ok) {
            var response_json = response.json();
            resolve(response_json);
          }
        });
      });
    }
  }, {
    key: "get_bfee_data",
    get: function get() {
      var data;

      try {
        data = JSON.parse(editor_data);
      } catch (e) {
        data = editor_data;
      }

      return data;
    }
  }]);

  return BfeEditor;
}();
(function (blocks, i18n, element, EditorJS, bfee_data, $, BfeEditor) {
  var el = element.createElement,
      __ = i18n.__,
      bfee_data = JSON.parse(bfee_data),
      ajax_url = bfee_data.ajax_url,
      new_editor = true,
      bfee_editor;
  blocks.registerBlockType('bfe/bfe-block', {
    title: __('Editor Block', 'BFE'),
    icon: 'edit',
    category: 'common',
    attributes: {
      selectedDepartment: {
        type: 'string'
      }
    },
    example: {},
    edit: function edit(props) {
      var initEditor = function initEditor() {
        if (new_editor) {
          new_editor = false;
          bfee_editor = new BfeEditor();
        }
      };

      return el("div", {
        id: 'bfe-editor-block',
        ref: initEditor
      }, null);
    },
    save: function save(props) {
      return null;
    }
  });
})(window.wp.blocks, window.wp.i18n, window.wp.element, EditorJS, editor_data, jQuery, BfeEditor);
//# sourceMappingURL=bfee-block.js.map
