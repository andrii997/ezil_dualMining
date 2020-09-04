(window.webpackJsonp = window.webpackJsonp || []).push([
	["04c6"], {
		"+QRC": function(e, t, n) {
			"use strict";
			var r = n("E9nw"),
				a = "Copy to clipboard: #{key}, Enter";
			e.exports = function(e, t) {
				var n, o, l, i, c, s, u = !1;
				t || (t = {}), n = t.debug || !1;
				try {
					if (l = r(), i = document.createRange(), c = document.getSelection(), (s = document.createElement("span")).textContent = e, s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(n) {
							n.stopPropagation(), t.format && (n.preventDefault(), n.clipboardData.clearData(), n.clipboardData.setData(t.format, e))
						}), document.body.appendChild(s), i.selectNodeContents(s), c.addRange(i), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
					u = !0
				} catch (p) {
					n && console.error("unable to copy using execCommand: ", p), n && console.warn("trying IE specific stuff");
					try {
						window.clipboardData.setData(t.format || "text", e), u = !0
					} catch (p) {
						n && console.error("unable to copy using clipboardData: ", p), n && console.error("falling back to prompt"), o = function(e) {
							var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
							return e.replace(/#{\s*key\s*}/g, t)
						}("message" in t ? t.message : a), window.prompt(o, e)
					}
				} finally {
					c && ("function" == typeof c.removeRange ? c.removeRange(i) : c.removeAllRanges()), s && document.body.removeChild(s), l()
				}
				return u
			}
		},
		E9nw: function(e, t) {
			e.exports = function() {
				var e = document.getSelection();
				if (!e.rangeCount) return function() {};
				for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
				switch (t.tagName.toUpperCase()) {
					case "INPUT":
					case "TEXTAREA":
						t.blur();
						break;
					default:
						t = null
				}
				return e.removeAllRanges(),
					function() {
						"Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach(function(t) {
							e.addRange(t)
						}), t && t.focus()
					}
			}
		},
		J7UJ: function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("q1tI"),
				a = n.n(r),
				o = n("JRPe"),
				l = n("P5Jw"),
				i = n("oeZM"),
				c = function(e) {
					var t = e.eth,
						n = e.zil,
						r = e.wrk,
						o = e.address;
					return a.a.createElement(i.Command, null, "EthDcrMiner64.exe -epool stratum+tcp://", o, " -esm 0 -ewal", " ", a.a.createElement(i.Blue, null, t), /*".", a.a.createElement(i.Green, null, n),*/ " -eworker ", a.a.createElement(i.Purple, null, r), " ", "-allcoins 1")
				},
				s = function(e) {
					var t = e.eth,
						n = e.zil,
						r = e.wrk,
						o = e.address;
					return a.a.createElement(i.Command, null, "PhoenixMiner.exe -pool stratum1+tcp://", o, " -proto 2 -wal", " ", a.a.createElement(i.Blue, null, t), /*".", a.a.createElement(i.Green, null, n),*/ " -worker ", a.a.createElement(i.Purple, null, r))
				},
				u = function(e) {
					var t = e.eth,
						n = e.zil,
						r = e.wrk,
						o = e.address;
					return a.a.createElement(i.Command, null, "ethminer.exe --report-hashrate -R -U -P stratum1+tcp://", a.a.createElement(i.Blue, null, t), /*".", a.a.createElement(i.Green, null, n),*/ ".", a.a.createElement(i.Purple, null, r), " @", o)
				};
			t.default = function(e) {
				var t = e.ethWallet,
					n = e.zilWallet,
					r = e.workerName,
					p = e.isEtc,
					m = p ? "eu.etc.ezil.me:4444" : "eu.ezil.me:5555",
					f = t || (p ? "ETC_WALLET" : "ETH_WALLET"),
					d = n || "ZIL_WALLET",
					g = r || "WORKER",
					h = "\n    EthDcrMiner64.exe -epool stratum+tcp://".concat(m, " -esm 0 -ewal\n    ").concat(f, ".")/*.concat(d, " -eworker ", " ", " ")*/.concat(g, " -allcoins 1\n  "),
					b = "\n    PhoenixMiner.exe -pool stratum1+tcp://".concat(m, " -proto 2 -wal\n    ").concat(f, ".")/*.concat(d, " -worker ")*/.concat(g, "\n  "),
					y = "\n    ethminer.exe --report-hashrate -R -U -P stratum1+tcp://\n    ".concat(f, ".")./*concat(d, ".").*/concat(g, " @").concat(m, "\n  ");
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(i.Card, null, a.a.createElement(i.CardHeader, {
					type: "big"
				}, "Claymore"), a.a.createElement(i.CardRow, {
					big: !0
				}, a.a.createElement(o.a, {
					id: "pages.start.instruction",
					values: {
						filename: a.a.createElement(i.Filename, null, "ezil.bat")
					}
				}), a.a.createElement(l.CopyToClipboard, {
					text: h.replace(/\s+/g, " ")
				}, a.a.createElement(i.CopyWrapper, null, a.a.createElement(i.CopyImage, {
					src: "static/copyImage.png"
				}), a.a.createElement(i.CopyText, null, "Copy"))), a.a.createElement(i.Snippet, null, a.a.createElement("b", null, "ezil.bat"), a.a.createElement(c, {
					eth: f,
					zil: d,
					wrk: g,
					address: m
				})))), a.a.createElement(i.Card, null, a.a.createElement(i.CardHeader, {
					type: "big"
				}, "Phoenix"), a.a.createElement(i.CardRow, {
					big: !0
				}, a.a.createElement(o.a, {
					id: "pages.start.instruction",
					values: {
						filename: a.a.createElement(i.Filename, null, "ezil.bat")
					}
				}), a.a.createElement(l.CopyToClipboard, {
					text: b.replace(/\s+/g, " ")
				}, a.a.createElement(i.CopyWrapper, null, a.a.createElement(i.CopyImage, {
					src: "static/copyImage.png"
				}), a.a.createElement(i.CopyText, null, "Copy"))), a.a.createElement(i.Snippet, null, a.a.createElement("b", null, "ezil.bat"), a.a.createElement(s, {
					eth: f,
					zil: d,
					wrk: g,
					address: m
				})))), a.a.createElement(i.Card, null, a.a.createElement(i.CardHeader, {
					type: "big"
				}, "Ethminer (nvidia)"), a.a.createElement(i.CardRow, {
					big: !0
				}, a.a.createElement(o.a, {
					id: "pages.start.instruction",
					values: {
						filename: a.a.createElement(i.Filename, null, "ezil.bat")
					}
				}), a.a.createElement(l.CopyToClipboard, {
					text: y.replace(/\s+/g, " ")
				}, a.a.createElement(i.CopyWrapper, null, a.a.createElement(i.CopyImage, {
					src: "static/copyImage.png"
				}), a.a.createElement(i.CopyText, null, "Copy"))), a.a.createElement(i.Snippet, null, a.a.createElement("b", null, "ezil.bat"), a.a.createElement(u, {
					eth: f,
					zil: d,
					wrk: g,
					address: m
				})))))
			}
		},
		P5Jw: function(e, t, n) {
			"use strict";
			var r = n("rHrb").CopyToClipboard;
			r.CopyToClipboard = r, e.exports = r
		},
		VMxI: function(e, t, n) {
			"use strict";
			var r = n("iVi/");

			function a(e, t) {
				void 0 === t && (t = {});
				var n = function(e) {
					if (e && "j" === e[0] && ":" === e[1]) return e.substr(2);
					return e
				}(e);
				if (function(e, t) {
						return void 0 === t && (t = !e || "{" !== e[0] && "[" !== e[0] && '"' !== e[0]), !t
					}(n, t.doNotParse)) try {
					return JSON.parse(n)
				} catch (r) {}
				return e
			}
			var o, l = n("MgzW"),
				i = function() {
					function e(e) {
						this.changeListeners = [], this.TESTING_ONETWO = 2, this.cookies = function(e) {
							return "string" == typeof e ? r.parse(e) : "object" == typeof e && null !== e ? e : {}
						}(e), this.HAS_DOCUMENT_COOKIE = "object" == typeof document && "string" == typeof document.cookie
					}
					return e.prototype._updateBrowserValues = function() {
						this.HAS_DOCUMENT_COOKIE && (this.cookies = r.parse(document.cookie))
					}, e.prototype._emitChange = function(e) {
						for (var t = 0; t < this.changeListeners.length; ++t) this.changeListeners[t](e)
					}, e.prototype.get = function(e, t) {
						return void 0 === t && (t = {}), this._updateBrowserValues(), a(this.cookies[e], t)
					}, e.prototype.getAll = function(e) {
						void 0 === e && (e = {}), this._updateBrowserValues();
						var t = {};
						for (var n in this.cookies) t[n] = a(this.cookies[n], e);
						return t
					}, e.prototype.set = function(e, t, n) {
						var a;
						"object" == typeof t && (t = JSON.stringify(t)), this.cookies = l({}, this.cookies, ((a = {})[e] = t, a)), this.HAS_DOCUMENT_COOKIE && (document.cookie = r.serialize(e, t, n)), this._emitChange({
							name: e,
							value: t,
							options: n
						})
					}, e.prototype.remove = function(e, t) {
						var n = t = l({}, t, {
							expires: new Date(1970, 1, 1, 0, 0, 1),
							maxAge: 0
						});
						this.cookies = l({}, this.cookies), delete this.cookies[e], this.HAS_DOCUMENT_COOKIE && (document.cookie = r.serialize(e, "", n)), this._emitChange({
							name: e,
							value: void 0,
							options: t
						})
					}, e.prototype.addChangeListener = function(e) {
						this.changeListeners.push(e)
					}, e.prototype.removeChangeListener = function(e) {
						var t = this.changeListeners.indexOf(e);
						t >= 0 && this.changeListeners.splice(t, 1)
					}, e
				}(),
				c = i,
				s = n("q1tI"),
				u = s.createContext(new c),
				p = u.Provider,
				m = (u.Consumer, u),
				f = (o = function(e, t) {
					return (o = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(e, t) {
							e.__proto__ = t
						} || function(e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(e, t)
				}, function(e, t) {
					function n() {
						this.constructor = e
					}
					o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
				}),
				d = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return t.cookies ? n.cookies = t.cookies : n.cookies = new i, n
					}
					return f(t, e), t.prototype.render = function() {
						return s.createElement(p, {
							value: this.cookies
						}, this.props.children)
					}, t
				}(s.Component);
			(function() {
				var e = function(t, n) {
					return (e = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(e, t) {
							e.__proto__ = t
						} || function(e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(t, n)
				}
			})(), n("2mql");

			function g(e) {
				var t = Object(s.useContext)(m);
				if (!t) throw new Error("Missing <CookiesProvider>");
				var n = t.getAll(),
					r = Object(s.useState)(n),
					a = r[0],
					o = r[1],
					l = Object(s.useRef)(a);
				return Object(s.useEffect)(function() {
					function n() {
						var n = t.getAll();
						(function(e, t, n) {
							if (!e) return !0;
							for (var r = 0, a = e; r < a.length; r++) {
								var o = a[r];
								if (t[o] !== n[o]) return !0
							}
							return !1
						})(e || null, n, l.current) && o(n), l.current = n
					}
					return t.addChangeListener(n),
						function() {
							t.removeChangeListener(n)
						}
				}, [t]), [a, t.set.bind(t), t.remove.bind(t)]
			}
			n.d(t, "a", function() {
				return c
			}), n.d(t, "b", function() {
				return d
			}), n.d(t, "c", function() {
				return g
			})
		},
		cqcI: function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("q1tI"),
				a = n.n(r),
				o = n("JRPe"),
				l = n("P5Jw"),
				i = n("oeZM"),
				c = function(e) {
					var t = e.eth,
						n = e.zil,
						r = e.wrk,
						o = e.address;
					return a.a.createElement(i.Command, null, "./EthDcrMiner64 -epool stratum+tcp://", o, " -esm 0 -ewal", " ", a.a.createElement(i.Blue, null, t), /*".", a.a.createElement(i.Green, null, n),*/ " -eworker ", a.a.createElement(i.Purple, null, r), " ", "-allcoins 1")
				},
				s = function(e) {
					var t = e.eth,
						n = e.zil,
						r = e.wrk,
						o = e.address;
					return a.a.createElement(i.Command, null, "./PhoenixMiner -pool stratum1+tcp://", o, " -proto 2 -wal", " ", a.a.createElement(i.Blue, null, t), /*".", a.a.createElement(i.Green, null, n),*/ " -worker ", a.a.createElement(i.Purple, null, r))
				},
				u = function(e) {
					var t = e.eth,
						n = e.zil,
						r = e.wrk,
						o = e.address;
					return a.a.createElement(i.Command, null, "./ethminer --report-hashrate -R -U -P stratum1+tcp://", a.a.createElement(i.Blue, null, t), /*".", a.a.createElement(i.Green, null, n),*/ ".", a.a.createElement(i.Purple, null, r), " @", o)
				};
			t.default = function(e) {
				var t = e.ethWallet,
					n = e.zilWallet,
					r = e.workerName,
					p = e.isEtc,
					m = p ? "eu.etc.ezil.me:4444" : "eu.ezil.me:5555",
					f = t || (p ? "ETC_WALLET" : "ETH_WALLET"),
					d = n || "ZIL_WALLET",
					g = r || "WORKER",
					h = "\n    ./EthDcrMiner64 -epool stratum+tcp://".concat(m, " -esm 0 -ewal\n    ").concat(f, ".")./*concat(d, " -eworker ", " ", " ").*/concat(g, " -allcoins 1\n  "),
					b = "\n    ./PhoenixMiner -pool stratum1+tcp://".concat(m, " -proto 2 -wal\n    ").concat(f, ".")./*concat(d, " -worker ").*/concat(g, "\n  "),
					y = "\n    ./ethminer --report-hashrate -R -U -P stratum1+tcp://\n    ".concat(f, ".")./*concat(d, ".").*/concat(g, " @").concat(m, "\n  ");
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(i.Card, null, a.a.createElement(i.CardHeader, {
					type: "big"
				}, "Claymore"), a.a.createElement(i.CardRow, {
					big: !0
				}, a.a.createElement(o.a, {
					id: "pages.start.instruction",
					values: {
						filename: a.a.createElement(i.Filename, null, "ezil.sh")
					}
				}), a.a.createElement(l.CopyToClipboard, {
					text: h.replace(/\s+/g, " ")
				}, a.a.createElement(i.CopyWrapper, null, a.a.createElement(i.CopyImage, {
					src: "static/copyImage.png"
				}), a.a.createElement(i.CopyText, null, "Copy"))), a.a.createElement(i.Snippet, null, a.a.createElement("b", null, "ezil.sh"), a.a.createElement(c, {
					eth: f,
					zil: d,
					wrk: g,
					address: m
				})))), a.a.createElement(i.Card, null, a.a.createElement(i.CardHeader, {
					type: "big"
				}, "Phoenix"), a.a.createElement(i.CardRow, {
					big: !0
				}, a.a.createElement(o.a, {
					id: "pages.start.instruction",
					values: {
						filename: a.a.createElement(i.Filename, null, "ezil.sh")
					}
				}), a.a.createElement(l.CopyToClipboard, {
					text: b.replace(/\s+/g, " ")
				}, a.a.createElement(i.CopyWrapper, null, a.a.createElement(i.CopyImage, {
					src: "static/copyImage.png"
				}), a.a.createElement(i.CopyText, null, "Copy"))), a.a.createElement(i.Snippet, null, a.a.createElement("b", null, "ezil.sh"), a.a.createElement(s, {
					eth: f,
					zil: d,
					wrk: g,
					address: m
				})))), a.a.createElement(i.Card, null, a.a.createElement(i.CardHeader, {
					type: "big"
				}, "Ethminer (nvidia)"), a.a.createElement(i.CardRow, {
					big: !0
				}, a.a.createElement(o.a, {
					id: "pages.start.instruction",
					values: {
						filename: a.a.createElement(i.Filename, null, "ezil.sh")
					}
				}), a.a.createElement(l.CopyToClipboard, {
					text: y.replace(/\s+/g, " ")
				}, a.a.createElement(i.CopyWrapper, null, a.a.createElement(i.CopyImage, {
					src: "static/copyImage.png"
				}), a.a.createElement(i.CopyText, null, "Copy"))), a.a.createElement(i.Snippet, null, a.a.createElement("b", null, "ezil.sh"), a.a.createElement(u, {
					eth: f,
					zil: d,
					wrk: g,
					address: m
				})))))
			}
		},
		dYEc: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return u
			});
			var r = n("wTIg"),
				a = n("q1tI"),
				o = n.n(a),
				l = Object(r.a)("div", {
					target: "e1lcaa9z0"
				})({
					name: "1obf64m",
					styles: "display:contents;"
				}),
				i = Object(r.a)("svg", {
					target: "e1lcaa9z1"
				})({
					name: "52im51",
					styles: "margin:5px 10px;&:hover{cursor:pointer;}"
				}),
				c = Object(r.a)("svg", {
					target: "e1lcaa9z2"
				})({
					name: "14mm5vp",
					styles: "margin:13px 10px;&:hover{cursor:pointer;}"
				}),
				s = (Object(r.a)("svg", {
					target: "e1lcaa9z3"
				})({
					name: "17p0938",
					styles: "left:123px;top:5px;position:absolute;"
				}), function() {
					return o.a.createElement("path", {
						d: "M12.6465 0.481354C12.0046 -0.160451 10.9679 -0.160451 10.3261 0.481354L8.05788 2.74543L5.78969 5.00951L1.2533 9.53767C1.22039 9.57059 1.20393 9.58704 1.18748 9.61996C1.18748 9.61996 1.18748 9.63641 1.17102 9.63641C1.15456 9.66933 1.13811 9.68578 1.13811 9.7187V9.73515L0.578585 11.5618L0.019063 13.3885C-0.0303066 13.5695 0.019063 13.7505 0.134259 13.8822C0.232998 13.9809 0.348194 14.0303 0.479846 14.0303C0.529215 14.0303 0.578585 14.0303 0.627955 14.0139L2.4464 13.4543L4.26485 12.8948H4.2813C4.31422 12.8784 4.34713 12.8784 4.36359 12.8619C4.36359 12.8619 4.38004 12.8619 4.38004 12.8454C4.41296 12.829 4.44587 12.8125 4.46233 12.7796L8.99049 8.25145L13.5186 3.72329C14.1605 3.08149 14.1605 2.04472 13.5186 1.40292L12.6465 0.481354ZM1.13811 12.8948L1.8129 10.5621L3.38934 12.2174L1.13811 12.8948ZM4.1332 11.7099L3.21986 10.8048L2.30652 9.89972L9.32223 2.88401L10.2356 3.79735L11.1489 4.71068L4.1332 11.7099ZM12.8275 2.9992L11.8401 3.9866L10.0299 2.17638L11.0173 1.18898C11.2806 0.92568 11.692 0.92568 11.9553 1.18898L12.8439 2.07764C13.0908 2.32449 13.0908 2.75236 12.8275 2.9992Z",
						fill: "#A3A3A3"
					})
				}),
				u = function(e) {
					var t = e.onClick;
					return o.a.createElement(l, {
						onClick: t
					}, o.a.createElement(c, {
						width: "14",
						height: "15",
						viewBox: "0 0 14 15",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, s()))
				};
			t.b = function(e) {
				var t = e.onClick;
				return o.a.createElement(l, {
					onClick: t
				}, o.a.createElement(i, {
					width: "14",
					height: "15",
					viewBox: "0 0 14 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, s()))
			}
		},
		"iVi/": function(e, t, n) {
			"use strict";
			t.parse = function(e, t) {
				if ("string" != typeof e) throw new TypeError("argument str must be a string");
				for (var n = {}, a = t || {}, l = e.split(o), c = a.decode || r, s = 0; s < l.length; s++) {
					var u = l[s],
						p = u.indexOf("=");
					if (!(p < 0)) {
						var m = u.substr(0, p).trim(),
							f = u.substr(++p, u.length).trim();
						'"' == f[0] && (f = f.slice(1, -1)), null == n[m] && (n[m] = i(f, c))
					}
				}
				return n
			}, t.serialize = function(e, t, n) {
				var r = n || {},
					o = r.encode || a;
				if ("function" != typeof o) throw new TypeError("option encode is invalid");
				if (!l.test(e)) throw new TypeError("argument name is invalid");
				var i = o(t);
				if (i && !l.test(i)) throw new TypeError("argument val is invalid");
				var c = e + "=" + i;
				if (null != r.maxAge) {
					var s = r.maxAge - 0;
					if (isNaN(s)) throw new Error("maxAge should be a Number");
					c += "; Max-Age=" + Math.floor(s)
				}
				if (r.domain) {
					if (!l.test(r.domain)) throw new TypeError("option domain is invalid");
					c += "; Domain=" + r.domain
				}
				if (r.path) {
					if (!l.test(r.path)) throw new TypeError("option path is invalid");
					c += "; Path=" + r.path
				}
				if (r.expires) {
					if ("function" != typeof r.expires.toUTCString) throw new TypeError("option expires is invalid");
					c += "; Expires=" + r.expires.toUTCString()
				}
				r.httpOnly && (c += "; HttpOnly");
				r.secure && (c += "; Secure");
				if (r.sameSite) {
					var u = "string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite;
					switch (u) {
						case !0:
							c += "; SameSite=Strict";
							break;
						case "lax":
							c += "; SameSite=Lax";
							break;
						case "strict":
							c += "; SameSite=Strict";
							break;
						default:
							throw new TypeError("option sameSite is invalid")
					}
				}
				return c
			};
			var r = decodeURIComponent,
				a = encodeURIComponent,
				o = /; */,
				l = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

			function i(e, t) {
				try {
					return t(e)
				} catch (n) {
					return e
				}
			}
		},
		jggl: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return r
			});
			var r = {
				path: "/",
				maxAge: 31536e3
			}
		},
		"lm+X": function(e, t, n) {
			"use strict";
			n.d(t, "b", function() {
				return l
			}), n.d(t, "a", function() {
				return i
			});
			var r = n("wTIg"),
				a = n("6Uso"),
				o = n("AuK3"),
				l = Object(r.a)("div", {
					target: "e2b7irx0"
				})(a.a.phone, "{display:flex;justify-content:space-between;}"),
				i = Object(r.a)("div", {
					target: "e2b7irx1"
				})("position:relative;display:inline-block;font-weight:bold;font-size:36px;letter-spacing:0.3px;color:#323232;cursor:pointer;&:hover{color:", o.a.colors.blue, ";}&:not(:last-child){margin-right:50px;", a.a.phone, '{margin-right:0;}}&:after{position:absolute;bottom:-2px;content:"";display:', function(e) {
					return e.active ? "block" : "none"
				}, ";width:100%;height:4px;background:", o.a.colors.blue, ";}", a.a.phone, "{font-size:18px;&:after{width:100%;height:2px;}}")
		},
		oeZM: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "Card", function() {
				return l
			}), n.d(t, "CardRow", function() {
				return i
			}), n.d(t, "CardHeader", function() {
				return c
			}), n.d(t, "Filename", function() {
				return s
			}), n.d(t, "Snippet", function() {
				return u
			}), n.d(t, "Blue", function() {
				return p
			}), n.d(t, "Purple", function() {
				return m
			}), n.d(t, "Green", function() {
				return f
			}), n.d(t, "Command", function() {
				return d
			}), n.d(t, "CopyImage", function() {
				return g
			}), n.d(t, "CopyText", function() {
				return h
			}), n.d(t, "CopyWrapper", function() {
				return b
			});
			var r = n("wTIg"),
				a = n("yWC8"),
				o = n("6Uso"),
				l = Object(r.a)(a.a, {
					target: "e1xu568n0"
				})({
					name: "6abioj",
					styles: "margin-top:10px;padding-bottom:20px;&:nth-of-type(2){margin-top:20px;}"
				}),
				i = Object(r.a)(a.c, {
					target: "e1xu568n1"
				})({
					name: "45srg8",
					styles: "position:relative;padding:0 31px;"
				}),
				c = Object(r.a)(a.b, {
					target: "e1xu568n2"
				})({
					name: "se2t83",
					styles: "font-size:18px;color:#000000;padding:0 31px;"
				}),
				s = Object(r.a)("span", {
					target: "e1xu568n3"
				})({
					name: "4sz7zs",
					styles: "background:#f0f0f0;color:#ff0000;font-family:Inconsolata;font-weight:bold;padding:0 5px;border-radius:3px;overflow:hidden;"
				}),
				u = Object(r.a)("div", {
					target: "e1xu568n4"
				})({
					name: "79qk5p",
					styles: "padding:12px 22px 0;font-family:Inconsolata;font-size:18px;line-height:16px;color:#323232;background:#f7f7f7;overflow:hidden;border-radius:2px;margin-top:20px;"
				}),
				p = Object(r.a)("span", {
					target: "e1xu568n5"
				})({
					name: "11o3200",
					styles: "color:#0038ff;"
				}),
				m = Object(r.a)("span", {
					target: "e1xu568n6"
				})({
					name: "m5we5g",
					styles: "color:#b00074;"
				}),
				f = Object(r.a)("span", {
					target: "e1xu568n7"
				})({
					name: "b7429x",
					styles: "color:#29b805;"
				}),
				d = Object(r.a)("p", {
					target: "e1xu568n8"
				})("word-break:break-word;", o.a.phone, "{font-size:15px;}"),
				g = Object(r.a)("img", {
					target: "e1xu568n9"
				})({
					name: "z3g9rj",
					styles: "width:25.55%;height:25.55%;float:right;display:block;margin:0 auto;"
				}),
				h = Object(r.a)("p", {
					target: "e1xu568n10"
				})({
					name: "ls54w1",
					styles: "font-family:Roboto;font-style:normal;font-weight:bold;font-size:15px;color:#323232;display:flex;margin:7px 14px 2px 4px;padding:0px 9px 0px 0px;"
				}),
				b = Object(r.a)("div", {
					target: "e1xu568n11"
				})("vertical-align:top;display:flex;width:9.8%;text-align:right;background:#f7f7f7;border-radius:6px;float:right;cursor:pointer;", o.a.phone, "{bottom:auto;width:20%;position:absolute;margin-top:28px;cursor:pointer;right:40px;}")
		},
		q1d8: function(e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/start", function() {
				var e = n("zTOx");
				return {
					page: e.default || e
				}
			}])
		},
		rHrb: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.CopyToClipboard = void 0;
			var r = o(n("q1tI")),
				a = o(n("+QRC"));

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function l(e) {
				return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function i(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function c(e, t) {
				if (null == e) return {};
				var n, r, a = function(e, t) {
					if (null == e) return {};
					var n, r, a = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
				}
				return a
			}

			function s(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}

			function u(e) {
				return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function p(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function m(e, t) {
				return (m = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}

			function f(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var d = function(e) {
				function t() {
					var e, n, o, i;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var c = arguments.length, s = new Array(c), m = 0; m < c; m++) s[m] = arguments[m];
					return o = this, i = (e = u(t)).call.apply(e, [this].concat(s)), n = !i || "object" !== l(i) && "function" != typeof i ? p(o) : i, f(p(n), "onClick", function(e) {
						var t = n.props,
							o = t.text,
							l = t.onCopy,
							i = t.children,
							c = t.options,
							s = r.default.Children.only(i),
							u = (0, a.default)(o, c);
						l && l(o, u), s && s.props && "function" == typeof s.props.onClick && s.props.onClick(e)
					}), n
				}
				var n, o, d;
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && m(e, t)
				}(t, r["default"].PureComponent), n = t, (o = [{
					key: "render",
					value: function() {
						var e = this.props,
							t = (e.text, e.onCopy, e.options, e.children),
							n = c(e, ["text", "onCopy", "options", "children"]),
							a = r.default.Children.only(t);
						return r.default.cloneElement(a, function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {};
								t % 2 ? i(n, !0).forEach(function(t) {
									f(e, t, n[t])
								}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach(function(t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
								})
							}
							return e
						}({}, n, {
							onClick: this.onClick
						}))
					}
				}]) && s(n.prototype, o), d && s(n, d), t
			}();
			t.CopyToClipboard = d, f(d, "defaultProps", {
				onCopy: void 0,
				options: void 0
			})
		},
		zTOx: function(e, t, n) {
			"use strict";
			n.r(t);
			var r, a, o = n("doui"),
				l = n("wTIg"),
				i = n("q1tI"),
				c = n.n(i),
				s = n("VMxI"),
				u = n("6Uso"),
				p = n("JRPe"),
				m = n("jggl"),
				f = n("lm+X"),
				d = n("J7UJ"),
				g = n("cqcI"),
				h = Object(l.a)("svg", {
					target: "e3o0nms0"
				})({
					name: "118gfti",
					styles: "float:right;&:hover{cursor:pointer;}"
				}),
				b = function() {
					return c.a.createElement(h, {
						width: "12",
						height: "12",
						viewBox: "0 0 12 12",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, c.a.createElement("rect", {
						x: "0.0605469",
						y: "1.75977",
						width: "2.40199",
						height: "14.412",
						rx: "1.201",
						transform: "rotate(-45 0.0605469 1.75977)",
						fill: "black"
					}), c.a.createElement("rect", {
						x: "1.69922",
						y: "11.8896",
						width: "2.40199",
						height: "14.412",
						rx: "1.201",
						transform: "rotate(-135 1.69922 11.8896)",
						fill: "black"
					}))
				},
				y = n("dYEc");
			! function(e) {
				e[e.Windows = 0] = "Windows", e[e.Linux = 1] = "Linux"
			}(r || (r = {})),
			function(e) {
				e[e.ethZil = 0] = "ethZil", e[e.etcZil = 1] = "etcZil"
			}(a || (a = {}));
			var E = Object(l.a)("div", {
					target: "e16hwsh90"
				})({
					name: "19ic241",
					styles: "padding:1px 10px 10px 10px;background:#ffd6d6;border-radius:10px;margin:40px 0px 40px 0px;"
				}),
				x = Object(l.a)("p", {
					target: "e16hwsh91"
				})({
					name: "ggpns4",
					styles: "font-family:Roboto;padding:0px 0px 0px 10px;font-style:normal;font-weight:bold;font-size:24px;letter-spacing:0.3px;text-transform:uppercase;color:#000000;"
				}),
				w = Object(l.a)("p", {
					target: "e16hwsh92"
				})({
					name: "1hpg8ax",
					styles: "font-family:Roboto;padding:0px 0px 0px 10px;font-style:normal;font-size:14px;color:#000000;"
				}),
				v = Object(l.a)("a", {
					target: "e16hwsh93"
				})({
					name: "1xnfdvb",
					styles: "color:crimson;"
				}),
				C = Object(l.a)("div", {
					target: "e16hwsh94"
				})("text-align:center;display:flex;width:100%;margin-top:40px;", u.a.phone, "{display:block;}"),
				O = Object(l.a)("label", {
					target: "e16hwsh95"
				})("width:100%;padding:7px 0px 7px 0px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:15px;display:flex;color:#615f5f;", u.a.phone, "{display:block;}"),
				k = Object(l.a)("input", {
					target: "e16hwsh96"
				})("background:#ffffff;border:1px solid #c6c6c6;box-sizing:border-box;border-radius:5px;padding:6px 0px 6px 10px;width:100%;background:#ffffff;box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:6px;outline:none;margin:7px 0px 0px 10px;height:27px;", u.a.phone, "{width:100%;margin:0;}"),
				j = Object(l.a)("div", {
					target: "e16hwsh97"
				})({
					name: "ngl0zi",
					styles: "font-family:Roboto;font-style:normal;font-weight:bold;font-size:15px;letter-spacing:0.3px;text-decoration-line:underline;color:#323232;margin:14px 0px 0px 5px;"
				}),
				z = Object(l.a)("p", {
					target: "e16hwsh98"
				})({
					name: "1uyst6f",
					styles: "font-size:15px;font-family:Roboto;font-style:normal;"
				}),
				T = Object(l.a)("div", {
					target: "e16hwsh99"
				})({
					name: "fqwzfo",
					styles: "position:relative;display:contents;padding:10px;"
				}),
				L = Object(l.a)("div", {
					target: "e16hwsh910"
				})(u.a.phone, "{display:contents;}"),
				P = Object(l.a)("div", {
					target: "e16hwsh911"
				})({
					name: "k008qs",
					styles: "display:flex;"
				}),
				_ = Object(l.a)("button", {
					target: "e16hwsh912"
				})("background:", function(e) {
					return e.bgColor
				}, ";appearance:none;border:0;padding:7px;border-radius:5px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:15px;letter-spacing:0.3px;cursor:pointer;outline:none;color:", function(e) {
					return e.textColor
				}, ";&:not(:first-child){margin-left:15px;}"),
				S = Object(l.a)("img", {
					target: "e16hwsh913"
				})({
					name: "zicrpw",
					styles: "margin:0 5px;vertical-align:text-top;"
				}),
				I = Object(l.a)("span", {
					target: "e16hwsh914"
				})({
					name: "1baulvz",
					styles: "display:inline-block;"
				}),
				R = function(e) {
					var t = e.price,
						n = e.pen,
						r = e.onChangePen,
						a = e.onChangePrice,
						o = e.placeholder;
					return c.a.createElement(L, null, n ? c.a.createElement(j, null, t) : c.a.createElement(T, null, c.a.createElement(k, {
						type: "text",
						value: t,
						placeholder: o,
						onChange: function(e) {
							return a(e.target.value)
						},
						onKeyPress: function(e) {
							return function(e) {
								var t = e.target.value;
								"Enter" === e.key && (a(t), r(!n))
							}(e)
						},
						disabled: n
					})), n ? c.a.createElement(y.a, {
						onClick: function() {
							return r(!1)
						}
					}) : null)
				};
			t.default = c.a.memo(function() {
				var e = Object(i.useState)(r.Windows),
					t = Object(o.default)(e, 2),
					n = t[0],
					l = t[1],
					u = Object(i.useState)(a.ethZil),
					h = Object(o.default)(u, 2),
					y = h[0],
					k = h[1],
					j = Object(s.c)(["lang"]),
					T = Object(o.default)(j, 1)[0].lang,
					L = void 0 === T ? "en" : T,
					A = Object(s.c)(["warning"]),
					W = Object(o.default)(A, 2),
					Z = W[0].warning,
					F = /*void 0 === Z || Z*/0,
					M = W[1],
					D = Object(i.useState)(""),
					N = Object(o.default)(D, 2),
					U = N[0],
					H = N[1],
					q = Object(i.useState)(!1),
					B = Object(o.default)(q, 2),
					J = B[0],
					K = B[1],
					G = Object(i.useState)(""),
					V = Object(o.default)(G, 2),
					X = V[0],
					Q = V[1],
					Y = Object(i.useState)(!1),
					$ = Object(o.default)(Y, 2),
					ee = $[0],
					te = $[1],
					ne = Object(i.useState)(""),
					re = Object(o.default)(ne, 2),
					ae = re[0],
					oe = re[1],
					le = Object(i.useState)(!1),
					ie = Object(o.default)(le, 2),
					ce = ie[0],
					se = ie[1];
				return c.a.createElement("div", null, c.a.createElement(f.b, null, c.a.createElement(f.a, {
					active: n === r.Windows,
					onClick: function() {
						return l(r.Windows)
					}
				}, "windows"), c.a.createElement(f.a, {
					active: n === r.Linux,
					onClick: function() {
						return l(r.Linux)
					}
				}, "linux"), c.a.createElement(f.a, {
					active: !1,
					onClick: function() {
						window.open("https://ezil.timelapsehc.com/".concat("ru" == L ? "ru" : "en", "/a/nastroika-hiveos/"), "_blank")
					}
				}, "hiveos")), 1 == F ? c.a.createElement(E, null, c.a.createElement("p", {
					onClick: function() {
						return M("warning", !1, m.a)
					}
				}, c.a.createElement(b, null)), c.a.createElement(x, null, c.a.createElement(p.a, {
					id: "shared.warning"
				})), c.a.createElement(w, null, c.a.createElement(p.a, {
					id: "shared.warningZilFormat",
					values: {
						binance: c.a.createElement(v, {
							href: "https://binance.com"
						}, "binance.com"),
						moonlet: c.a.createElement(v, {
							href: "https://moonlet.xyz"
						}, "moonlet")
					}
				}))) : null, c.a.createElement(P, null, c.a.createElement(_, {
					bgColor: y === a.ethZil ? "#1564FB" : "#FFFFFF",
					textColor: y === a.ethZil ? "#F8F8F8" : "#323232",
					onClick: function() {
						return k(a.ethZil)
					}
				}, c.a.createElement(S, {
					src: y === a.ethZil ? "/static/icons/ethereum.svg" : "/static/icons/eth-blue.svg"
				}), "Ethereum" /*, c.a.createElement(I, null, c.a.createElement(S, {
					src: y === a.ethZil ? "/static/icons/zil-blue.svg" : "/static/icons/zil-full-green.svg"
				}), "ZIL")*/), c.a.createElement(_, {
					bgColor: y === a.etcZil ? "#01C853" : "#FFFFFF",
					textColor: y === a.etcZil ? "#F8F8F8" : "#323232",
					onClick: function() {
						return k(a.etcZil)
					}
				}, c.a.createElement(S, {
					src: y === a.etcZil ? "/static/icons/ethereum.svg" : "/static/icons/etc-green.svg"
				}), "Ethereum classic"/*, c.a.createElement(I, null, c.a.createElement(S, {
					src: y === a.etcZil ? "/static/icons/zil-green.svg" : "/static/icons/zil-full-green.svg"
				}), "ZIL")*/)), c.a.createElement(C, null, c.a.createElement(O, null, c.a.createElement(z, null, y === a.ethZil ? "ETH" : "ETC", "_WALLET:"), c.a.createElement(R, {
					price: U,
					pen: J,
					onChangePen: K,
					onChangePrice: H,
					placeholder: "Type your ".concat(y === a.ethZil ? "ETH" : "ETC", " wallet")
				})), /*c.a.createElement(O, null, c.a.createElement(z, null, "ZIL_WALLET:"), c.a.createElement(R, {
					price: X,
					pen: ee,
					onChangePen: te,
					onChangePrice: Q,
					placeholder: "Type your ZIL wallet"
				})),*/ c.a.createElement(O, null, c.a.createElement(z, null, "WORKER_NAME:"), c.a.createElement(R, {
					price: ae,
					pen: ce,
					onChangePen: se,
					onChangePrice: oe,
					placeholder: "Worker"
				}))), n === r.Windows ? c.a.createElement(d.default, {
					ethWallet: U,
					zilWallet: X,
					workerName: ae,
					isEtc: y === a.etcZil
				}) : null, n === r.Linux ? c.a.createElement(g.default, {
					ethWallet: U,
					zilWallet: X,
					workerName: ae,
					isEtc: y === a.etcZil
				}) : null)
			})
		}
	},
	[
		["q1d8", "5d41", "9da1"]
	]
]);