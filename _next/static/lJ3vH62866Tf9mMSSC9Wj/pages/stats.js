(window.webpackJsonp = window.webpackJsonp || []).push([
	["5e62"], {
		"0/CJ": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("q1tI");
			t.default = function(e, t) {
				r.useEffect(function() {
					return e && e(),
						function() {
							t && t()
						}
				}, [])
			}
		},
		"1CCG": function(e, t, n) {
			var r = n("CXhC"),
				a = 6e4,
				o = 864e5;
			e.exports = function(e, t) {
				var n = r(e),
					i = r(t),
					u = n.getTime() - n.getTimezoneOffset() * a,
					s = i.getTime() - i.getTimezoneOffset() * a;
				return Math.round((u - s) / o)
			}
		},
		"1DqA": function(e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/stats", function() {
				var e = n("v0O0");
				return {
					page: e.default || e
				}
			}])
		},
		"2SVd": function(e, t, n) {
			"use strict";
			e.exports = function(e) {
				return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
			}
		},
		"2ZQM": function(e, t, n) {
			"use strict";
			var r = n("ln6h"),
				a = n.n(r),
				o = n("O40h"),
				i = n("doui"),
				u = n("q1tI");
			t.a = function(e) {
				var t = e.initialState,
					n = e.fetchFunc,
					r = e.delay,
					s = e.onError,
					c = e.updateTrigger,
					l = Object(u.useRef)(),
					f = Object(u.useState)(t),
					d = Object(i.default)(f, 2),
					p = d[0],
					m = d[1],
					h = (v = Object(o.default)(a.a.mark(function e() {
						var r;
						return a.a.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.prev = 0, e.next = 3, n();
								case 3:
									r = e.sent, m(r), e.next = 11;
									break;
								case 7:
									e.prev = 7, e.t0 = e.catch(0), s ? s(e.t0, m) : m(t);
								case 11:
								case "end":
									return e.stop()
							}
						}, e, null, [
							[0, 7]
						])
					})), function() {
						return v.apply(this, arguments)
					}),
					g = function() {
						clearInterval(l.current)
					};
				var v;
				return Object(u.useEffect)(function() {
					return h(),
						function e() {
							l.current = window.setTimeout(Object(o.default)(a.a.mark(function t() {
								return a.a.wrap(function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.next = 2, h();
										case 2:
											e();
										case 3:
										case "end":
											return t.stop()
									}
								}, t)
							})), r)
						}(), g
				}, c ? [c] : []), p
			}
		},
		"3Aod": function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return h
			});
			var r = n("eVuF"),
				a = n.n(r),
				o = n("doui"),
				i = n("ln6h"),
				u = n.n(i),
				s = n("O40h"),
				c = n("vDqi"),
				l = n.n(c);

			function f() {
				return d.apply(this, arguments)
			}

			function d() {
				return (d = Object(s.default)(u.a.mark(function e() {
					var t, n;
					return u.a.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.next = 2, l.a.get("https://eth.ezil.me/api/stats");
							case 2:
								return t = e.sent, n = t.data, e.abrupt("return", {
									height: n.nodes[0].height,
									hashrate: n.nodes[0].difficulty / 13.2,
									difficulty: n.nodes[0].difficulty,
									roundVariance: n.stats.roundShares / n.nodes[0].difficulty
								});
							case 5:
							case "end":
								return e.stop()
						}
					}, e)
				}))).apply(this, arguments)
			}

			function p() {
				return m.apply(this, arguments)
			}

			function m() {
				return (m = Object(s.default)(u.a.mark(function e() {
					var t, n;
					return u.a.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.next = 2, l.a.get("https://xxx.ezil.me/blockchain_stats");
							case 2:
								return t = e.sent, n = t.data, e.abrupt("return", {
									shardDifficulty: n.difficulty[0],
									dsDifficulty: n.difficulty[1],
									height: n.tx_block_num,
									powDate: new Date(n.next_pow_time)
								});
							case 5:
							case "end":
								return e.stop()
						}
					}, e)
				}))).apply(this, arguments)
			}

			function h() {
				return g.apply(this, arguments)
			}

			function g() {
				return (g = Object(s.default)(u.a.mark(function e() {
					var t, n, r, i;
					return u.a.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.next = 2, a.a.all([f(), p()]);
							case 2:
								return t = e.sent, n = Object(o.default)(t, 2), r = n[0], i = n[1], e.abrupt("return", {
									eth: r,
									zil: i
								});
							case 7:
							case "end":
								return e.stop()
						}
					}, e)
				}))).apply(this, arguments)
			}
		},
		"5oMp": function(e, t, n) {
			"use strict";
			e.exports = function(e, t) {
				return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
			}
		},
		"64/e": function(e, t, n) {
			var r = n("q1tI");
			e.exports = r.createContext()
		},
		"6DAA": function(e, t, n) {
			var r = n("kOWh");
			e.exports = function() {
				var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					n = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
					a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					o = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
					i = ["AM", "PM"],
					u = ["am", "pm"],
					s = ["a.m.", "p.m."],
					c = {
						MMM: function(t) {
							return e[t.getMonth()]
						},
						MMMM: function(e) {
							return t[e.getMonth()]
						},
						dd: function(e) {
							return n[e.getDay()]
						},
						ddd: function(e) {
							return a[e.getDay()]
						},
						dddd: function(e) {
							return o[e.getDay()]
						},
						A: function(e) {
							return e.getHours() / 12 >= 1 ? i[1] : i[0]
						},
						a: function(e) {
							return e.getHours() / 12 >= 1 ? u[1] : u[0]
						},
						aa: function(e) {
							return e.getHours() / 12 >= 1 ? s[1] : s[0]
						}
					};
				return ["M", "D", "DDD", "d", "Q", "W"].forEach(function(e) {
					c[e + "o"] = function(t, n) {
						return function(e) {
							var t = e % 100;
							if (t > 20 || t < 10) switch (t % 10) {
								case 1:
									return e + "st";
								case 2:
									return e + "nd";
								case 3:
									return e + "rd"
							}
							return e + "th"
						}(n[e](t))
					}
				}), {
					formatters: c,
					formattingTokensRegExp: r(c)
				}
			}
		},
		"7raJ": function(e, t, n) {
			var r = n("q1tI"),
				a = n("64/e"),
				o = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect;
			e.exports = function() {
				var e = [].slice.call(arguments),
					t = r.useContext(a),
					n = r.useState({});
				return o(function() {
					return t.on("@changed", function(t, r) {
						e.some(function(e) {
							return e in r
						}) && n[1]({})
					})
				}, []), r.useMemo(function() {
					var n = t.get(),
						r = {};
					return e.forEach(function(e) {
						r[e] = n[e]
					}), r.dispatch = t.dispatch, r
				}, [n[0]])
			}
		},
		"8oxB": function(e, t) {
			var n, r, a = e.exports = {};

			function o() {
				throw new Error("setTimeout has not been defined")
			}

			function i() {
				throw new Error("clearTimeout has not been defined")
			}

			function u(e) {
				if (n === setTimeout) return setTimeout(e, 0);
				if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
				try {
					return n(e, 0)
				} catch (t) {
					try {
						return n.call(null, e, 0)
					} catch (t) {
						return n.call(this, e, 0)
					}
				}
			}! function() {
				try {
					n = "function" == typeof setTimeout ? setTimeout : o
				} catch (e) {
					n = o
				}
				try {
					r = "function" == typeof clearTimeout ? clearTimeout : i
				} catch (e) {
					r = i
				}
			}();
			var s, c = [],
				l = !1,
				f = -1;

			function d() {
				l && s && (l = !1, s.length ? c = s.concat(c) : f = -1, c.length && p())
			}

			function p() {
				if (!l) {
					var e = u(d);
					l = !0;
					for (var t = c.length; t;) {
						for (s = c, c = []; ++f < t;) s && s[f].run();
						f = -1, t = c.length
					}
					s = null, l = !1,
						function(e) {
							if (r === clearTimeout) return clearTimeout(e);
							if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
							try {
								r(e)
							} catch (t) {
								try {
									return r.call(null, e)
								} catch (t) {
									return r.call(this, e)
								}
							}
						}(e)
				}
			}

			function m(e, t) {
				this.fun = e, this.array = t
			}

			function h() {}
			a.nextTick = function(e) {
				var t = new Array(arguments.length - 1);
				if (arguments.length > 1)
					for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				c.push(new m(e, t)), 1 !== c.length || l || u(p)
			}, m.prototype.run = function() {
				this.fun.apply(null, this.array)
			}, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = h, a.addListener = h, a.once = h, a.off = h, a.removeListener = h, a.removeAllListeners = h, a.emit = h, a.prependListener = h, a.prependOnceListener = h, a.listeners = function(e) {
				return []
			}, a.binding = function(e) {
				throw new Error("process.binding is not supported")
			}, a.cwd = function() {
				return "/"
			}, a.chdir = function(e) {
				throw new Error("process.chdir is not supported")
			}, a.umask = function() {
				return 0
			}
		},
		"9rSQ": function(e, t, n) {
			"use strict";
			var r = n("xTJ+");

			function a() {
				this.handlers = []
			}
			a.prototype.use = function(e, t) {
				return this.handlers.push({
					fulfilled: e,
					rejected: t
				}), this.handlers.length - 1
			}, a.prototype.eject = function(e) {
				this.handlers[e] && (this.handlers[e] = null)
			}, a.prototype.forEach = function(e) {
				r.forEach(this.handlers, function(t) {
					null !== t && e(t)
				})
			}, e.exports = a
		},
		"C/p6": function(e, t, n) {
			"use strict";
			var r = n("doui"),
				a = n("wTIg"),
				o = n("q1tI"),
				i = n.n(o),
				u = n("nbAo"),
				s = Object(a.a)("div", {
					target: "e11vdqmm0"
				})(""),
				c = Object(a.a)("span", {
					target: "e11vdqmm1"
				})({
					name: "17t4a4g",
					styles: "font-size:18px;color:#323232;"
				}),
				l = Object(a.a)("span", {
					target: "e11vdqmm2"
				})({
					name: "168fbdr",
					styles: "margin-left:5px;font-size:14px;color:#848282;"
				});
			t.a = i.a.memo(function(e) {
				var t = Object(u.a)(e.value, e.withoutPerSecond ? ["H", "KH", "MH", "GH", "TH", "PH"] : void 0),
					n = Object(r.default)(t, 2),
					a = n[0],
					o = n[1],
					f = e.unitComponent || l,
					d = e.amountComponent || c;
				return i.a.createElement(s, null, i.a.createElement(d, null, a), i.a.createElement(f, null, o))
			})
		},
		CXhC: function(e, t, n) {
			var r = n("yNUO");
			e.exports = function(e) {
				var t = r(e);
				return t.setHours(0, 0, 0, 0), t
			}
		},
		CgaS: function(e, t, n) {
			"use strict";
			var r = n("JEQr"),
				a = n("xTJ+"),
				o = n("9rSQ"),
				i = n("UnBK");

			function u(e) {
				this.defaults = e, this.interceptors = {
					request: new o,
					response: new o
				}
			}
			u.prototype.request = function(e) {
				"string" == typeof e && (e = a.merge({
					url: arguments[0]
				}, arguments[1])), (e = a.merge(r, {
					method: "get"
				}, this.defaults, e)).method = e.method.toLowerCase();
				var t = [i, void 0],
					n = Promise.resolve(e);
				for (this.interceptors.request.forEach(function(e) {
						t.unshift(e.fulfilled, e.rejected)
					}), this.interceptors.response.forEach(function(e) {
						t.push(e.fulfilled, e.rejected)
					}); t.length;) n = n.then(t.shift(), t.shift());
				return n
			}, a.forEach(["delete", "get", "head", "options"], function(e) {
				u.prototype[e] = function(t, n) {
					return this.request(a.merge(n || {}, {
						method: e,
						url: t
					}))
				}
			}), a.forEach(["post", "put", "patch"], function(e) {
				u.prototype[e] = function(t, n, r) {
					return this.request(a.merge(r || {}, {
						method: e,
						url: t,
						data: n
					}))
				}
			}), e.exports = u
		},
		DfZB: function(e, t, n) {
			"use strict";
			e.exports = function(e) {
				return function(t) {
					return e.apply(null, t)
				}
			}
		},
		EVmF: function(e, t, n) {
			"use strict";
			var r = n("doui"),
				a = n("q1tI"),
				o = n("HQSE"),
				i = n.n(o),
				u = n("kC4I");
			t.a = function(e) {
				var t = i()(300),
					n = Object(r.default)(t, 3),
					o = n[0],
					s = (n[1], n[2]);
				return Object(a.useEffect)(function() {
					s()
				}, []), o ? o <= u.a ? e.mobile : e.desktop : null
			}
		},
		HQSE: function(e, t, n) {
			e.exports = function(e) {
				var t = {};

				function n(r) {
					if (t[r]) return t[r].exports;
					var a = t[r] = {
						i: r,
						l: !1,
						exports: {}
					};
					return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
				}
				return n.m = e, n.c = t, n.d = function(e, t, r) {
					n.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: r
					})
				}, n.r = function(e) {
					"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}), Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}, n.t = function(e, t) {
					if (1 & t && (e = n(e)), 8 & t) return e;
					if (4 & t && "object" == typeof e && e && e.__esModule) return e;
					var r = Object.create(null);
					if (n.r(r), Object.defineProperty(r, "default", {
							enumerable: !0,
							value: e
						}), 2 & t && "string" != typeof e)
						for (var a in e) n.d(r, a, function(t) {
							return e[t]
						}.bind(null, a));
					return r
				}, n.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e.default
					} : function() {
						return e
					};
					return n.d(t, "a", t), t
				}, n.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}, n.p = "", n(n.s = 1)
			}([function(e, t) {
				e.exports = n("q1tI")
			}, function(e, t, n) {
				"use strict";
				n.r(t);
				var r = n(0);

				function a() {
					return "undefined" != typeof window ? Math.max(window.document.documentElement.clientWidth, window.innerWidth || 0) : 0
				}

				function o() {
					return "undefined" != typeof window ? Math.max(window.document.documentElement.clientHeight, window.innerHeight || 0) : 0
				}
				var i = new Set,
					u = a(),
					s = o();

				function c() {
					u = a(), s = o(), i.forEach(function(e) {
						e({
							vpWidth: u,
							vpHeight: s
						})
					})
				}
				t.default = function(e) {
					var t = function(e, t) {
							return function(e) {
								if (Array.isArray(e)) return e
							}(e) || function(e, t) {
								var n = [],
									r = !0,
									a = !1,
									o = void 0;
								try {
									for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
								} catch (e) {
									a = !0, o = e
								} finally {
									try {
										r || null == u.return || u.return()
									} finally {
										if (a) throw o
									}
								}
								return n
							}(e, t) || function() {
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							}()
						}(Object(r.useState)(function() {
							return {
								vpWidth: u,
								vpHeight: s
							}
						}), 2),
						n = t[0],
						a = n.vpWidth,
						o = n.vpHeight,
						l = t[1],
						f = Object(r.useRef)(void 0),
						d = Object(r.useMemo)(function() {
							return e ? function(t) {
								f.current && clearTimeout(f.current), f.current = setTimeout(function() {
									return l(t)
								}, e)
							} : function(e) {
								return l(e)
							}
						}, [e, l]);
					return Object(r.useLayoutEffect)(function() {
						return i.add(d), window && 1 == i.size && (window.addEventListener("resize", c), c()),
							function() {
								i.delete(d), 0 == i.size && window.removeEventListener("resize", c)
							}
					}, []), [a, o, c]
				}
			}])
		},
		HSsa: function(e, t, n) {
			"use strict";
			e.exports = function(e, t) {
				return function() {
					for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
					return e.apply(t, n)
				}
			}
		},
		JEQr: function(e, t, n) {
			"use strict";
			(function(t) {
				var r = n("xTJ+"),
					a = n("yK9s"),
					o = {
						"Content-Type": "application/x-www-form-urlencoded"
					};

				function i(e, t) {
					!r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
				}
				var u, s = {
					adapter: ("undefined" != typeof XMLHttpRequest ? u = n("tQ2B") : void 0 !== t && (u = n("tQ2B")), u),
					transformRequest: [function(e, t) {
						return a(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
					}],
					transformResponse: [function(e) {
						if ("string" == typeof e) try {
							e = JSON.parse(e)
						} catch (t) {}
						return e
					}],
					timeout: 0,
					xsrfCookieName: "XSRF-TOKEN",
					xsrfHeaderName: "X-XSRF-TOKEN",
					maxContentLength: -1,
					validateStatus: function(e) {
						return e >= 200 && e < 300
					}
				};
				s.headers = {
					common: {
						Accept: "application/json, text/plain, */*"
					}
				}, r.forEach(["delete", "get", "head"], function(e) {
					s.headers[e] = {}
				}), r.forEach(["post", "put", "patch"], function(e) {
					s.headers[e] = r.merge(o)
				}), e.exports = s
			}).call(this, n("8oxB"))
		},
		LYNF: function(e, t, n) {
			"use strict";
			var r = n("OH9c");
			e.exports = function(e, t, n, a, o) {
				var i = new Error(e);
				return r(i, t, n, a, o)
			}
		},
		LZbM: function(e, t) {
			e.exports = function() {
				var e = {
					lessThanXSeconds: {
						one: "less than a second",
						other: "less than {{count}} seconds"
					},
					xSeconds: {
						one: "1 second",
						other: "{{count}} seconds"
					},
					halfAMinute: "half a minute",
					lessThanXMinutes: {
						one: "less than a minute",
						other: "less than {{count}} minutes"
					},
					xMinutes: {
						one: "1 minute",
						other: "{{count}} minutes"
					},
					aboutXHours: {
						one: "about 1 hour",
						other: "about {{count}} hours"
					},
					xHours: {
						one: "1 hour",
						other: "{{count}} hours"
					},
					xDays: {
						one: "1 day",
						other: "{{count}} days"
					},
					aboutXMonths: {
						one: "about 1 month",
						other: "about {{count}} months"
					},
					xMonths: {
						one: "1 month",
						other: "{{count}} months"
					},
					aboutXYears: {
						one: "about 1 year",
						other: "about {{count}} years"
					},
					xYears: {
						one: "1 year",
						other: "{{count}} years"
					},
					overXYears: {
						one: "over 1 year",
						other: "over {{count}} years"
					},
					almostXYears: {
						one: "almost 1 year",
						other: "almost {{count}} years"
					}
				};
				return {
					localize: function(t, n, r) {
						var a;
						return r = r || {}, a = "string" == typeof e[t] ? e[t] : 1 === n ? e[t].one : e[t].other.replace("{{count}}", n), r.addSuffix ? r.comparison > 0 ? "in " + a : a + " ago" : a
					}
				}
			}
		},
		Lmem: function(e, t, n) {
			"use strict";
			e.exports = function(e) {
				return !(!e || !e.__CANCEL__)
			}
		},
		MLWZ: function(e, t, n) {
			"use strict";
			var r = n("xTJ+");

			function a(e) {
				return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
			}
			e.exports = function(e, t, n) {
				if (!t) return e;
				var o;
				if (n) o = n(t);
				else if (r.isURLSearchParams(t)) o = t.toString();
				else {
					var i = [];
					r.forEach(t, function(e, t) {
						null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function(e) {
							r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), i.push(a(t) + "=" + a(e))
						}))
					}), o = i.join("&")
				}
				return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e
			}
		},
		OH9c: function(e, t, n) {
			"use strict";
			e.exports = function(e, t, n, r, a) {
				return e.config = t, n && (e.code = n), e.request = r, e.response = a, e
			}
		},
		OTTw: function(e, t, n) {
			"use strict";
			var r = n("xTJ+");
			e.exports = r.isStandardBrowserEnv() ? function() {
				var e, t = /(msie|trident)/i.test(navigator.userAgent),
					n = document.createElement("a");

				function a(e) {
					var r = e;
					return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
						href: n.href,
						protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
						host: n.host,
						search: n.search ? n.search.replace(/^\?/, "") : "",
						hash: n.hash ? n.hash.replace(/^#/, "") : "",
						hostname: n.hostname,
						port: n.port,
						pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
					}
				}
				return e = a(window.location.href),
					function(t) {
						var n = r.isString(t) ? a(t) : t;
						return n.protocol === e.protocol && n.host === e.host
					}
			}() : function() {
				return !0
			}
		},
		RJeW: function(e, t, n) {
			var r = n("iWRJ"),
				a = n("tMf1");
			e.exports = function(e) {
				var t = r(e),
					n = new Date(0);
				return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), a(n)
			}
		},
		"Rn+g": function(e, t, n) {
			"use strict";
			var r = n("LYNF");
			e.exports = function(e, t, n) {
				var a = n.config.validateStatus;
				n.status && a && !a(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
			}
		},
		UnBK: function(e, t, n) {
			"use strict";
			var r = n("xTJ+"),
				a = n("xAGQ"),
				o = n("Lmem"),
				i = n("JEQr"),
				u = n("2SVd"),
				s = n("5oMp");

			function c(e) {
				e.cancelToken && e.cancelToken.throwIfRequested()
			}
			e.exports = function(e) {
				return c(e), e.baseURL && !u(e.url) && (e.url = s(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = a(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
					delete e.headers[t]
				}), (e.adapter || i.adapter)(e).then(function(t) {
					return c(e), t.data = a(t.data, t.headers, e.transformResponse), t
				}, function(t) {
					return o(t) || (c(e), t && t.response && (t.response.data = a(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
				})
			}
		},
		"Us+F": function(e, t, n) {
			var r = n("LZbM"),
				a = n("6DAA");
			e.exports = {
				distanceInWords: r(),
				format: a()
			}
		},
		VGX7: function(e, t) {
			e.exports = function(e) {
				var t = new Date(e.getTime()),
					n = t.getTimezoneOffset();
				return t.setSeconds(0, 0), 6e4 * n + t.getTime() % 6e4
			}
		},
		WA8B: function(e, t, n) {
			var r = n("yNUO"),
				a = n("pLeS"),
				o = n("1CCG");
			e.exports = function(e) {
				var t = r(e);
				return o(t, a(t)) + 1
			}
		},
		cPJV: function(e, t, n) {
			var r = n("WA8B"),
				a = n("gfz1"),
				o = n("iWRJ"),
				i = n("yNUO"),
				u = n("fupu"),
				s = n("Us+F");
			var c = {
				M: function(e) {
					return e.getMonth() + 1
				},
				MM: function(e) {
					return f(e.getMonth() + 1, 2)
				},
				Q: function(e) {
					return Math.ceil((e.getMonth() + 1) / 3)
				},
				D: function(e) {
					return e.getDate()
				},
				DD: function(e) {
					return f(e.getDate(), 2)
				},
				DDD: function(e) {
					return r(e)
				},
				DDDD: function(e) {
					return f(r(e), 3)
				},
				d: function(e) {
					return e.getDay()
				},
				E: function(e) {
					return e.getDay() || 7
				},
				W: function(e) {
					return a(e)
				},
				WW: function(e) {
					return f(a(e), 2)
				},
				YY: function(e) {
					return f(e.getFullYear(), 4).substr(2)
				},
				YYYY: function(e) {
					return f(e.getFullYear(), 4)
				},
				GG: function(e) {
					return String(o(e)).substr(2)
				},
				GGGG: function(e) {
					return o(e)
				},
				H: function(e) {
					return e.getHours()
				},
				HH: function(e) {
					return f(e.getHours(), 2)
				},
				h: function(e) {
					var t = e.getHours();
					return 0 === t ? 12 : t > 12 ? t % 12 : t
				},
				hh: function(e) {
					return f(c.h(e), 2)
				},
				m: function(e) {
					return e.getMinutes()
				},
				mm: function(e) {
					return f(e.getMinutes(), 2)
				},
				s: function(e) {
					return e.getSeconds()
				},
				ss: function(e) {
					return f(e.getSeconds(), 2)
				},
				S: function(e) {
					return Math.floor(e.getMilliseconds() / 100)
				},
				SS: function(e) {
					return f(Math.floor(e.getMilliseconds() / 10), 2)
				},
				SSS: function(e) {
					return f(e.getMilliseconds(), 3)
				},
				Z: function(e) {
					return l(e.getTimezoneOffset(), ":")
				},
				ZZ: function(e) {
					return l(e.getTimezoneOffset())
				},
				X: function(e) {
					return Math.floor(e.getTime() / 1e3)
				},
				x: function(e) {
					return e.getTime()
				}
			};

			function l(e, t) {
				t = t || "";
				var n = e > 0 ? "-" : "+",
					r = Math.abs(e),
					a = r % 60;
				return n + f(Math.floor(r / 60), 2) + t + f(a, 2)
			}

			function f(e, t) {
				for (var n = Math.abs(e).toString(); n.length < t;) n = "0" + n;
				return n
			}
			e.exports = function(e, t, n) {
				var r = t ? String(t) : "YYYY-MM-DDTHH:mm:ss.SSSZ",
					a = (n || {}).locale,
					o = s.format.formatters,
					l = s.format.formattingTokensRegExp;
				a && a.format && a.format.formatters && (o = a.format.formatters, a.format.formattingTokensRegExp && (l = a.format.formattingTokensRegExp));
				var f = i(e);
				return u(f) ? function(e, t, n) {
					var r, a, o, i = e.match(n),
						u = i.length;
					for (r = 0; r < u; r++) a = t[i[r]] || c[i[r]], i[r] = a || ((o = i[r]).match(/\[[\s\S]/) ? o.replace(/^\[|]$/g, "") : o.replace(/\\/g, ""));
					return function(e) {
						for (var t = "", n = 0; n < u; n++) i[n] instanceof Function ? t += i[n](e, c) : t += i[n];
						return t
					}
				}(r, o, l)(f) : "Invalid Date"
			}
		},
		endd: function(e, t, n) {
			"use strict";

			function r(e) {
				this.message = e
			}
			r.prototype.toString = function() {
				return "Cancel" + (this.message ? ": " + this.message : "")
			}, r.prototype.__CANCEL__ = !0, e.exports = r
		},
		eqyj: function(e, t, n) {
			"use strict";
			var r = n("xTJ+");
			e.exports = r.isStandardBrowserEnv() ? {
				write: function(e, t, n, a, o, i) {
					var u = [];
					u.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()), r.isString(a) && u.push("path=" + a), r.isString(o) && u.push("domain=" + o), !0 === i && u.push("secure"), document.cookie = u.join("; ")
				},
				read: function(e) {
					var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
					return t ? decodeURIComponent(t[3]) : null
				},
				remove: function(e) {
					this.write(e, "", Date.now() - 864e5)
				}
			} : {
				write: function() {},
				read: function() {
					return null
				},
				remove: function() {}
			}
		},
		fupu: function(e, t, n) {
			var r = n("pzWd");
			e.exports = function(e) {
				if (r(e)) return !isNaN(e);
				throw new TypeError(toString.call(e) + " is not an instance of Date")
			}
		},
		gfz1: function(e, t, n) {
			var r = n("yNUO"),
				a = n("tMf1"),
				o = n("RJeW"),
				i = 6048e5;
			e.exports = function(e) {
				var t = r(e),
					n = a(t).getTime() - o(t).getTime();
				return Math.round(n / i) + 1
			}
		},
		iWRJ: function(e, t, n) {
			var r = n("yNUO"),
				a = n("tMf1");
			e.exports = function(e) {
				var t = r(e),
					n = t.getFullYear(),
					o = new Date(0);
				o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
				var i = a(o),
					u = new Date(0);
				u.setFullYear(n, 0, 4), u.setHours(0, 0, 0, 0);
				var s = a(u);
				return t.getTime() >= i.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1
			}
		},
		"jfS+": function(e, t, n) {
			"use strict";
			var r = n("endd");

			function a(e) {
				if ("function" != typeof e) throw new TypeError("executor must be a function.");
				var t;
				this.promise = new Promise(function(e) {
					t = e
				});
				var n = this;
				e(function(e) {
					n.reason || (n.reason = new r(e), t(n.reason))
				})
			}
			a.prototype.throwIfRequested = function() {
				if (this.reason) throw this.reason
			}, a.source = function() {
				var e;
				return {
					token: new a(function(t) {
						e = t
					}),
					cancel: e
				}
			}, e.exports = a
		},
		kOWh: function(e, t) {
			var n = ["M", "MM", "Q", "D", "DD", "DDD", "DDDD", "d", "E", "W", "WW", "YY", "YYYY", "GG", "GGGG", "H", "HH", "h", "hh", "m", "mm", "s", "ss", "S", "SS", "SSS", "Z", "ZZ", "X", "x"];
			e.exports = function(e) {
				var t = [];
				for (var r in e) e.hasOwnProperty(r) && t.push(r);
				var a = n.concat(t).sort().reverse();
				return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + a.join("|") + "|.)", "g")
			}
		},
		kOwS: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return o
			});
			var r = n("UXZV"),
				a = n.n(r);

			function o() {
				return (o = a.a || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
		},
		nbAo: function(e, t, n) {
			"use strict";

			function r(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["H/s", "KH/s", "MH/s", "GH/s", "TH/s", "PH/s"],
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
				if (0 === e) return [(0).toFixed(n), t[0]];
				var r = Math.floor(Math.log(e) / Math.log(1e3));
				return [(e / Math.pow(1e3, r)).toFixed(n), t[r]]
			}
			n.d(t, "a", function() {
				return r
			})
		},
		pLeS: function(e, t, n) {
			var r = n("yNUO");
			e.exports = function(e) {
				var t = r(e),
					n = new Date(0);
				return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
			}
		},
		pYwt: function(e, t, n) {
			"use strict";
			t.a = "ezil.me"
		},
		pzWd: function(e, t) {
			e.exports = function(e) {
				return e instanceof Date
			}
		},
		tMf1: function(e, t, n) {
			var r = n("x84W");
			e.exports = function(e) {
				return r(e, {
					weekStartsOn: 1
				})
			}
		},
		tQ2B: function(e, t, n) {
			"use strict";
			var r = n("xTJ+"),
				a = n("Rn+g"),
				o = n("MLWZ"),
				i = n("w0Vi"),
				u = n("OTTw"),
				s = n("LYNF");
			e.exports = function(e) {
				return new Promise(function(t, c) {
					var l = e.data,
						f = e.headers;
					r.isFormData(l) && delete f["Content-Type"];
					var d = new XMLHttpRequest;
					if (e.auth) {
						var p = e.auth.username || "",
							m = e.auth.password || "";
						f.Authorization = "Basic " + btoa(p + ":" + m)
					}
					if (d.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d.onreadystatechange = function() {
							if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
								var n = "getAllResponseHeaders" in d ? i(d.getAllResponseHeaders()) : null,
									r = {
										data: e.responseType && "text" !== e.responseType ? d.response : d.responseText,
										status: d.status,
										statusText: d.statusText,
										headers: n,
										config: e,
										request: d
									};
								a(t, c, r), d = null
							}
						}, d.onerror = function() {
							c(s("Network Error", e, null, d)), d = null
						}, d.ontimeout = function() {
							c(s("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)), d = null
						}, r.isStandardBrowserEnv()) {
						var h = n("eqyj"),
							g = (e.withCredentials || u(e.url)) && e.xsrfCookieName ? h.read(e.xsrfCookieName) : void 0;
						g && (f[e.xsrfHeaderName] = g)
					}
					if ("setRequestHeader" in d && r.forEach(f, function(e, t) {
							void 0 === l && "content-type" === t.toLowerCase() ? delete f[t] : d.setRequestHeader(t, e)
						}), e.withCredentials && (d.withCredentials = !0), e.responseType) try {
						d.responseType = e.responseType
					} catch (v) {
						if ("json" !== e.responseType) throw v
					}
					"function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
						d && (d.abort(), c(e), d = null)
					}), void 0 === l && (l = null), d.send(l)
				})
			}
		},
		v0O0: function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("q1tI"),
				a = n.n(r),
				o = n("7raJ"),
				i = n.n(o),
				u = n("0/CJ"),
				s = n.n(u),
				c = n("wTIg"),
				l = n("JRPe"),
				f = n("yWC8"),
				d = n("C/p6");

			function p(e) {
				return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
			}
			var m = n("p4bK"),
				h = n("6Uso"),
				g = n("2ZQM"),
				v = n("3Aod"),
				y = {
					eth: {
						height: 0,
						hashrate: 0,
						difficulty: 0,
						roundVariance: 0
					},
					zil: {
						shardDifficulty: 0,
						dsDifficulty: 0,
						height: 0,
						powDate: new Date
					}
				},
				x = Object(c.a)("div", {
					target: "e1ibwq6d0"
				})("display:flex;justify-content:space-between;", h.a.phone, "{flex-wrap:wrap;display:inline-flex;}"),
				b = Object(c.a)(f.a, {
					target: "e1ibwq6d1"
				})(h.a.phone, "{", m.a, ";border-radius:0;&:not(:first-of-type){margin-top:30px;}}&:nth-of-type(1){width:371px;", h.a.phone, "{", m.a, ";}}&:nth-of-type(2){flex-grow:1;}&:nth-of-type(3){width:310px;", h.a.phone, "{", m.a, ";}}&:not(:last-of-type){margin-right:30px;", h.a.phone, "{margin-right:0;}}"),
				w = Object(c.a)(f.b, {
					target: "e1ibwq6d2"
				})({
					name: "i1xwie",
					styles: "background:rgb(136,254,180);margin-top:-8px;padding-top:8px;padding-bottom:5px;margin-bottom:0;"
				}),
				E = (Object(c.a)("div", {
					target: "e1ibwq6d3"
				})({
					name: "df2sz3",
					styles: "display:flex;> *{&:first-of-type{margin-right:5px;}}"
				}), function() {
					var e = i()("poolStats").poolStats,
						t = Object(g.a)({
							fetchFunc: v.a,
							initialState: y,
							delay: 1e4
						});
					return a.a.createElement(x, null, a.a.createElement(b, null, a.a.createElement(f.b, {
						type: "small"
					}, "ETH"), a.a.createElement(f.d, {
						field: a.a.createElement(l.a, {
							id: "pages.poolStats.labels.paymentScheme"
						}),
						value: "PPS+"
					}), a.a.createElement(f.d, {
						field: a.a.createElement(l.a, {
							id: "pages.poolStats.labels.netHashrate"
						}),
						value: a.a.createElement(d.a, {
							value: t.eth.hashrate
						})
					}), a.a.createElement(f.d, {
						field: a.a.createElement(l.a, {
							id: "pages.poolStats.labels.chainHeight"
						}),
						value: p(t.eth.height)
					}), a.a.createElement(f.d, {
						field: a.a.createElement(l.a, {
							id: "pages.poolStats.labels.netDifficulty"
						}),
						value: a.a.createElement(d.a, {
							withoutPerSecond: !0,
							value: t.eth.difficulty
						})
					}), a.a.createElement(f.d, {
						field: a.a.createElement(l.a, {
							id: "pages.poolStats.labels.roundVariance"
						}),
						value: (100 * t.eth.roundVariance).toFixed(0) + " %"
					}), a.a.createElement(f.d, {
						field: a.a.createElement(l.a, {
							id: "pages.poolStats.labels.minPayout"
						}),
						value: "0.05 ETH"
					}))/*, a.a.createElement(b, null, a.a.createElement(w, {
						type: "small"
					}, "ZIL"), a.a.createElement(f.d, {
						field: a.a.createElement(l.a, {
							id: "pages.poolStats.labels.paymentScheme"
						}),
						value: "PPLNS"
					}), a.a.createElement(f.d, {
						field: a.a.createElement(l.a, {
							id: "pages.poolStats.labels.shardDifficulty"
						}),
						value: a.a.createElement(d.a, {
							withoutPerSecond: !0,
							value: t.zil.shardDifficulty
						})
					}), a.a.createElement(f.d, {
						field: a.a.createElement(l.a, {
							id: "pages.poolStats.labels.dsDifficulty"
						}),
						value: a.a.createElement(d.a, {
							withoutPerSecond: !0,
							value: t.zil.dsDifficulty
						})
					}), a.a.createElement(f.d, {
						field: a.a.createElement(l.a, {
							id: "pages.poolStats.labels.chainHeight"
						}),
						value: p(t.zil.height)
					}), a.a.createElement(f.d, {
						field: a.a.createElement(l.a, {
							id: "pages.poolStats.labels.nextPowTime"
						}),
						value: a.a.createElement(l.b, {
							style: "numeric",
							units: "minute-short",
							value: t.zil.powDate
						})
					}), a.a.createElement(f.d, {
						field: a.a.createElement(l.a, {
							id: "pages.poolStats.labels.minPayout"
						}),
						value: "30 ZIL"
					}))*/, a.a.createElement(b, null, a.a.createElement(f.b, {
						type: "small"
					}, a.a.createElement(l.a, {
						id: "shared.pool"
					})), a.a.createElement(f.d, {
						field: a.a.createElement(l.a, {
							id: "pages.poolStats.labels.minersOnline"
						}),
						value: e.eth.totalMiners
					}), a.a.createElement(f.d, {
						field: a.a.createElement(l.a, {
							id: "pages.poolStats.labels.workersOnline"
						}),
						value: e.eth.totalWorkers
					}), a.a.createElement(f.d, {
						field: a.a.createElement(l.a, {
							id: "pages.poolStats.labels.poolHashrate"
						}),
						value: a.a.createElement(d.a, {
							value: e.eth.currentHashrate
						})
					}), a.a.createElement(f.d, {
						field: "Pool fee",
						value: "1%"
					})))
				}),
				S = n("kOwS"),
				T = n("cPJV"),
				O = n.n(T);

			function D(e) {
				return e.uncle ? "https://etherscan.io/uncle/".concat(e.number) : "https://etherscan.io/block/".concat(e.number)
			}
			var j = n("AuK3"),
				M = Object(c.a)("div", {
					target: "e1g4raos0"
				})(m.a, ";margin-top:30px;"),
				H = Object(c.a)("div", {
					target: "e1g4raos1"
				})(m.b, ";background:#ffffff;padding-top:15px;padding-bottom:15px;&:nth-of-type(even){background:#f8f8f8;}"),
				C = Object(c.a)("div", {
					target: "e1g4raos2"
				})({
					name: "1fyvb2z",
					styles: "display:flex;justify-content:space-between;align-items:center;font-weight:bold;"
				}),
				k = Object(c.a)("a", {
					target: "e1g4raos3"
				})({
					name: "15jfyz9",
					styles: "font-size:24px;color:inherit;text-decoration:none;display:flex;text-align:right;align-items:center;"
				}),
				F = Object(c.a)("div", {
					target: "e1g4raos4"
				})({
					name: "1flyc9m",
					styles: "font-size:18px;"
				}),
				A = Object(c.a)("div", {
					target: "e1g4raos5"
				})({
					name: "wvigdu",
					styles: "display:flex;align-items:center;margin-top:15px;"
				}),
				z = Object(c.a)("div", {
					target: "e1g4raos6"
				})("padding-right:10px;padding-left:10px;text-align:right;flex-grow:1;&:not(:last-of-type){border-right:1px solid #9d9d9d;}&:first-of-type{padding-left:0;border-top-left-radius:10px;border-bottom-left-radius:10px;background:", function(e) {
					return e.isConfirmed ? j.a.colors.green : j.a.colors.yellow
				}, ";}&:last-of-type{padding-right:0;}"),
				L = Object(c.a)("div", {
					target: "e1g4raos7"
				})({
					name: "17vuvug",
					styles: "font-weight:500;font-size:14px;"
				}),
				R = Object(c.a)("div", {
					target: "e1g4raos8"
				})({
					name: "dgmhlt",
					styles: "font-weight:bold;font-size:18px;"
				}),
				P = Object(c.a)("div", {
					target: "e1g4raos9"
				})("padding:4px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:13px;letter-spacing:1px;color:", j.a.colors.black, ";background:#c4c4c4;border-radius:5px;margin-right:5px;"),
				Y = a.a.memo(function(e) {
					var t = O()(e.date, "HH:mm:ss YYYY-MM-DD"),
						n = 0 === e.confirmationsLeft;
					return a.a.createElement(H, null, a.a.createElement(C, null, a.a.createElement(k, {
						href: D(e),
						target: "_blank",
						rel: "noopener noreferrer"
					}, e.uncle ? a.a.createElement(P, null, a.a.createElement(l.a, {
						id: "pages.poolStats.labels.uncle"
					})) : a.a.createElement("div", {
						style: {
							width: "49px"
						}
					}), a.a.createElement("div", null, e.number)), a.a.createElement(F, null, t)), a.a.createElement(A, null, a.a.createElement(z, {
						isConfirmed: n
					}, a.a.createElement(L, null, "maturity"), a.a.createElement(R, null, n ? "confirmed" : "".concat(e.confirmationsLeft, " left"))), a.a.createElement(z, null, a.a.createElement(L, null, "amount"), a.a.createElement(R, null, e.reward.toFixed(5))), a.a.createElement(z, null, a.a.createElement(L, null, "percentage"), a.a.createElement(R, null, e.variance.toFixed(0), " %"))))
				}),
				U = function(e) {
					return a.a.createElement(M, null, e.data.map(function(e, t) {
						return a.a.createElement(Y, Object(S.a)({
							key: t
						}, e))
					}))
				},
				q = n("znPy"),
				I = Object(c.a)(f.a, {
					target: "e1jgdysp0"
				})({
					name: "1ifdr7f",
					styles: "margin-top:40px;width:100%;"
				}),
				J = Object(c.a)("div", {
					target: "e1jgdysp1"
				})("background:", function(e) {
					return e.isConfirmed ? "#88FEB4" : "#fff500"
				}, ";border-radius:10px;display:flex;align-items:center;justify-content:center;height:35px;font-size:18px;width:160px;margin-left:auto;"),
				N = Object(c.a)("a", {
					target: "e1jgdysp2"
				})({
					name: "1a791z",
					styles: "color:inherit;text-decoration:none;cursor:pointer;&:hover{text-decoration:underline;}"
				}),
				B = Object(c.a)("div", {
					target: "e1jgdysp3"
				})("padding:8px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:13px;letter-spacing:1px;color:", j.a.colors.black, ";background:#c4c4c4;border-radius:5px;"),
				W = Object(c.a)("span", {
					target: "e1jgdysp4"
				})({
					name: "vwcvfa",
					styles: "color:#7c7c7c;display:contents;"
				}),
				_ = a.a.memo(function(e) {
					var t = O()(e.date, "YYYY-MM-DD"),
						n = O()(e.date, "HH:mm:ss "),
						r = 0 === e.confirmationsLeft;
					return a.a.createElement(q.c, null, a.a.createElement("td", null, e.uncle ? a.a.createElement(B, null, a.a.createElement(l.a, {
						id: "pages.poolStats.labels.uncle"
					})) : null), a.a.createElement("td", null, a.a.createElement(N, {
						href: D(e),
						target: "_blank",
						rel: "noopener noreferrer"
					}, e.number)), a.a.createElement("td", null, r ? a.a.createElement(J, {
						isConfirmed: !0
					}, a.a.createElement(l.a, {
						id: "pages.poolStats.labels.confirmed",
						values: {
							coin: "ETH"
						}
					})) : a.a.createElement(J, {
						isConfirmed: !1
					}, a.a.createElement(l.a, {
						id: "pages.poolStats.labels.confirmationsLeft",
						values: {
							amount: e.confirmationsLeft
						}
					}))), a.a.createElement("td", null, n, a.a.createElement(W, null, t)), a.a.createElement("td", null, e.reward.toFixed(6)), a.a.createElement("td", null, e.variance.toFixed(0), " %"))
				}),
				X = function(e) {
					return a.a.createElement("div", null, a.a.createElement(I, null, a.a.createElement(f.b, {
						type: "big"
					}, a.a.createElement(l.a, {
						id: "pages.poolStats.labels.lastBlocksFound",
						values: {
							coin: "ETH"
						}
					})), a.a.createElement(q.d, null, a.a.createElement(q.b, null, a.a.createElement("tr", null, a.a.createElement("th", {
						style: {
							width: "99px"
						}
					}), a.a.createElement("th", null, a.a.createElement(l.a, {
						id: "pages.poolStats.labels.block"
					})), a.a.createElement("th", {
						style: {
							textAlign: "right",
							width: "20%",
							paddingLeft: "20px"
						}
					}, a.a.createElement(l.a, {
						id: "pages.poolStats.labels.confirmations"
					})), a.a.createElement("th", {
						style: {
							width: "35%"
						}
					}, a.a.createElement(l.a, {
						id: "pages.poolStats.labels.time"
					})), a.a.createElement("th", null, a.a.createElement(l.a, {
						id: "pages.poolStats.labels.amount",
						values: {
							coin: "ETH"
						}
					})), a.a.createElement("th", null, a.a.createElement(l.a, {
						id: "pages.poolStats.labels.variance",
						values: {
							coin: "ETH"
						}
					})))), a.a.createElement(q.a, null, e.data.map(function(e, t) {
						return a.a.createElement(_, Object(S.a)({
							key: t
						}, e))
					})))))
				},
				G = n("ln6h"),
				$ = n.n(G),
				V = n("O40h"),
				Z = n("vDqi"),
				Q = n.n(Z),
				K = n("pYwt");

			function ee(e) {
				return e.map(function(e, t) {
					return {
						number: e.number,
						hash: e.hash,
						reward: Number(e.reward),
						date: new Date(1e3 * e.timestamp),
						status: e.status,
						confirmationsLeft: e.confirmations_left,
						variance: e.variance || 0,
						uncle: Boolean(e.uncle)
					}
				})
			}

			function te() {
				return ne.apply(this, arguments)
			}

			function ne() {
				return (ne = Object(V.default)($.a.mark(function e() {
					var t, n;
					return $.a.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.next = 2, Q.a.get("https://billing.".concat(K.a, "/blocks"));
							case 2:
								return t = e.sent, n = t.data, e.abrupt("return", ee(n));
							case 5:
							case "end":
								return e.stop()
						}
					}, e)
				}))).apply(this, arguments)
			}
			var re = n("EVmF"),
				ae = function() {
					var e = Object(g.a)({
						fetchFunc: te,
						initialState: [],
						delay: 6e4
					});
					return a.a.createElement(re.a, {
						desktop: a.a.createElement(X, {
							data: e
						}),
						mobile: a.a.createElement(U, {
							data: e
						})
					})
				};
			t.default = function() {
				var e = i()("poolStats").dispatch;
				return s()(function() {
					e("poolStats/startPolling")
				}, function() {
					e("poolStats/stopPolling")
				}), a.a.createElement("div", null, a.a.createElement(E, null), a.a.createElement(ae, null))
			}
		},
		vDqi: function(e, t, n) {
			e.exports = n("zuR4")
		},
		w0Vi: function(e, t, n) {
			"use strict";
			var r = n("xTJ+"),
				a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
			e.exports = function(e) {
				var t, n, o, i = {};
				return e ? (r.forEach(e.split("\n"), function(e) {
					if (o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t) {
						if (i[t] && a.indexOf(t) >= 0) return;
						i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n
					}
				}), i) : i
			}
		},
		x84W: function(e, t, n) {
			var r = n("yNUO");
			e.exports = function(e, t) {
				var n = t && Number(t.weekStartsOn) || 0,
					a = r(e),
					o = a.getDay(),
					i = (o < n ? 7 : 0) + o - n;
				return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a
			}
		},
		x86X: function(e, t) {
			e.exports = function(e) {
				return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
			}
		},
		xAGQ: function(e, t, n) {
			"use strict";
			var r = n("xTJ+");
			e.exports = function(e, t, n) {
				return r.forEach(n, function(n) {
					e = n(e, t)
				}), e
			}
		},
		"xTJ+": function(e, t, n) {
			"use strict";
			var r = n("HSsa"),
				a = n("x86X"),
				o = Object.prototype.toString;

			function i(e) {
				return "[object Array]" === o.call(e)
			}

			function u(e) {
				return null !== e && "object" == typeof e
			}

			function s(e) {
				return "[object Function]" === o.call(e)
			}

			function c(e, t) {
				if (null != e)
					if ("object" != typeof e && (e = [e]), i(e))
						for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
					else
						for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
			}
			e.exports = {
				isArray: i,
				isArrayBuffer: function(e) {
					return "[object ArrayBuffer]" === o.call(e)
				},
				isBuffer: a,
				isFormData: function(e) {
					return "undefined" != typeof FormData && e instanceof FormData
				},
				isArrayBufferView: function(e) {
					return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
				},
				isString: function(e) {
					return "string" == typeof e
				},
				isNumber: function(e) {
					return "number" == typeof e
				},
				isObject: u,
				isUndefined: function(e) {
					return void 0 === e
				},
				isDate: function(e) {
					return "[object Date]" === o.call(e)
				},
				isFile: function(e) {
					return "[object File]" === o.call(e)
				},
				isBlob: function(e) {
					return "[object Blob]" === o.call(e)
				},
				isFunction: s,
				isStream: function(e) {
					return u(e) && s(e.pipe)
				},
				isURLSearchParams: function(e) {
					return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
				},
				isStandardBrowserEnv: function() {
					return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
				},
				forEach: c,
				merge: function e() {
					var t = {};

					function n(n, r) {
						"object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
					}
					for (var r = 0, a = arguments.length; r < a; r++) c(arguments[r], n);
					return t
				},
				extend: function(e, t, n) {
					return c(t, function(t, a) {
						e[a] = n && "function" == typeof t ? r(t, n) : t
					}), e
				},
				trim: function(e) {
					return e.replace(/^\s*/, "").replace(/\s*$/, "")
				}
			}
		},
		yK9s: function(e, t, n) {
			"use strict";
			var r = n("xTJ+");
			e.exports = function(e, t) {
				r.forEach(e, function(n, r) {
					r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
				})
			}
		},
		yNUO: function(e, t, n) {
			var r = n("VGX7"),
				a = n("pzWd"),
				o = 36e5,
				i = 6e4,
				u = 2,
				s = /[T ]/,
				c = /:/,
				l = /^(\d{2})$/,
				f = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
				d = /^(\d{4})/,
				p = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
				m = /^-(\d{2})$/,
				h = /^-?(\d{3})$/,
				g = /^-?(\d{2})-?(\d{2})$/,
				v = /^-?W(\d{2})$/,
				y = /^-?W(\d{2})-?(\d{1})$/,
				x = /^(\d{2}([.,]\d*)?)$/,
				b = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
				w = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
				E = /([Z+-].*)$/,
				S = /^(Z)$/,
				T = /^([+-])(\d{2})$/,
				O = /^([+-])(\d{2}):?(\d{2})$/;

			function D(e, t, n) {
				t = t || 0, n = n || 0;
				var r = new Date(0);
				r.setUTCFullYear(e, 0, 4);
				var a = 7 * t + n + 1 - (r.getUTCDay() || 7);
				return r.setUTCDate(r.getUTCDate() + a), r
			}
			e.exports = function(e, t) {
				if (a(e)) return new Date(e.getTime());
				if ("string" != typeof e) return new Date(e);
				var n = (t || {}).additionalDigits;
				n = null == n ? u : Number(n);
				var j = function(e) {
						var t, n = {},
							r = e.split(s);
						if (c.test(r[0]) ? (n.date = null, t = r[0]) : (n.date = r[0], t = r[1]), t) {
							var a = E.exec(t);
							a ? (n.time = t.replace(a[1], ""), n.timezone = a[1]) : n.time = t
						}
						return n
					}(e),
					M = function(e, t) {
						var n, r = f[t],
							a = p[t];
						if (n = d.exec(e) || a.exec(e)) {
							var o = n[1];
							return {
								year: parseInt(o, 10),
								restDateString: e.slice(o.length)
							}
						}
						if (n = l.exec(e) || r.exec(e)) {
							var i = n[1];
							return {
								year: 100 * parseInt(i, 10),
								restDateString: e.slice(i.length)
							}
						}
						return {
							year: null
						}
					}(j.date, n),
					H = M.year,
					C = function(e, t) {
						if (null === t) return null;
						var n, r, a, o;
						if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r;
						if (n = m.exec(e)) return r = new Date(0), a = parseInt(n[1], 10) - 1, r.setUTCFullYear(t, a), r;
						if (n = h.exec(e)) {
							r = new Date(0);
							var i = parseInt(n[1], 10);
							return r.setUTCFullYear(t, 0, i), r
						}
						if (n = g.exec(e)) {
							r = new Date(0), a = parseInt(n[1], 10) - 1;
							var u = parseInt(n[2], 10);
							return r.setUTCFullYear(t, a, u), r
						}
						if (n = v.exec(e)) return o = parseInt(n[1], 10) - 1, D(t, o);
						if (n = y.exec(e)) {
							o = parseInt(n[1], 10) - 1;
							var s = parseInt(n[2], 10) - 1;
							return D(t, o, s)
						}
						return null
					}(M.restDateString, H);
				if (C) {
					var k, F = C.getTime(),
						A = 0;
					if (j.time && (A = function(e) {
							var t, n, r;
							if (t = x.exec(e)) return (n = parseFloat(t[1].replace(",", "."))) % 24 * o;
							if (t = b.exec(e)) return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), n % 24 * o + r * i;
							if (t = w.exec(e)) {
								n = parseInt(t[1], 10), r = parseInt(t[2], 10);
								var a = parseFloat(t[3].replace(",", "."));
								return n % 24 * o + r * i + 1e3 * a
							}
							return null
						}(j.time)), j.timezone) Y = j.timezone, k = ((U = S.exec(Y)) ? 0 : (U = T.exec(Y)) ? (q = 60 * parseInt(U[2], 10), "+" === U[1] ? -q : q) : (U = O.exec(Y)) ? (q = 60 * parseInt(U[2], 10) + parseInt(U[3], 10), "+" === U[1] ? -q : q) : 0) * i;
					else {
						var z = F + A,
							L = new Date(z);
						k = r(L);
						var R = new Date(z);
						R.setDate(L.getDate() + 1);
						var P = r(R) - r(L);
						P > 0 && (k += P)
					}
					return new Date(F + A + k)
				}
				var Y, U, q;
				return new Date(e)
			}
		},
		znPy: function(e, t, n) {
			"use strict";
			n.d(t, "d", function() {
				return i
			}), n.d(t, "b", function() {
				return u
			}), n.d(t, "a", function() {
				return c
			}), n.d(t, "c", function() {
				return l
			});
			var r = n("wTIg"),
				a = n("q1tI"),
				o = n.n(a),
				i = Object(r.a)("table", {
					target: "e13llc70"
				})({
					name: "5ot6ln",
					styles: 'width:100%;border-collapse:collapse;position:relative;table-layout:auto;&:after{content:"";display:block;height:1px;width:calc(100% - 40px);left:20px;background:#c9c9c9;top:40px;position:absolute;}'
				}),
				u = Object(r.a)("thead", {
					target: "e13llc71"
				})({
					name: "v79c59",
					styles: "tr > *{text-align:right;padding-bottom:20px;font-weight:normal;font-size:22px;letter-spacing:0.3px;color:#615f5f;&:first-of-type{text-align:left;padding-left:46px;}&:last-of-type{padding-right:30px;}}"
				}),
				s = Object(r.a)("tbody", {
					target: "e13llc72"
				})({
					name: "10gmt40",
					styles: "tr > *{text-align:right;&:first-of-type{text-align:left;padding-left:46px;}&:last-of-type{padding-right:30px;}}"
				}),
				c = function(e) {
					return o.a.createElement(s, null, o.a.createElement("tr", {
						style: {
							height: "20px"
						}
					}), e.children)
				},
				l = Object(r.a)("tr", {
					target: "e13llc73"
				})({
					name: "1rcm7y4",
					styles: "font-weight:bold;font-size:24px;height:64px;&:nth-of-type(even){background:#fff;}&:nth-of-type(odd){background:#f8f8f8;}"
				})
		},
		zuR4: function(e, t, n) {
			"use strict";
			var r = n("xTJ+"),
				a = n("HSsa"),
				o = n("CgaS"),
				i = n("JEQr");

			function u(e) {
				var t = new o(e),
					n = a(o.prototype.request, t);
				return r.extend(n, o.prototype, t), r.extend(n, t), n
			}
			var s = u(i);
			s.Axios = o, s.create = function(e) {
				return u(r.merge(i, e))
			}, s.Cancel = n("endd"), s.CancelToken = n("jfS+"), s.isCancel = n("Lmem"), s.all = function(e) {
				return Promise.all(e)
			}, s.spread = n("DfZB"), e.exports = s, e.exports.default = s
		}
	},
	[
		["1DqA", "5d41", "9da1"]
	]
]);