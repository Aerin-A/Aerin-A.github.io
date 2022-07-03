(this["webpackJsonpgazi-jarin"] = this["webpackJsonpgazi-jarin"] || []).push([
	[0], {
		164: function(e, t, a) {
			e.exports = a(308)
		},
		169: function(e, t, a) {},
		170: function(e, t, a) {},
		296: function(e, t, a) {},
		298: function(e, t, a) {},
		299: function(e, t, a) {},
		300: function(e, t, a) {},
		302: function(e, t, a) {},
		303: function(e, t, a) {},
		304: function(e, t, a) {},
		308: function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a(0),
				i = a.n(n),
				r = a(21),
				c = a.n(r),
				l = (a(169), a(2)),
				o = a(6),
				s = a(14),
				d = a(4),
				m = a(5),
				u = a(332),
				h = a(70),
				p = a.n(h),
				g = a(151),
				b = a.n(g),
				v = a(48),
				f = a.n(v),
				E = (a(170), a(108), a(37));

			function y(e) {
				var t = i.a.useState(!1),
					a = Object(E.a)(t, 2),
					n = a[0],
					r = a[1],
					c = i.a.useRef();
				return i.a.useEffect((function() {
					var e = new IntersectionObserver((function(e) {
						e.forEach((function(e) {
							e.isIntersecting && r(e.isIntersecting)
						}))
					}));
					return e.observe(c.current),
						function() {
							return e.unobserve(c.current)
						}
				}), []), i.a.createElement("div", {
					className: "fade-in-section ".concat(n ? "is-visible" : ""),
					style: {
						transitionDelay: "".concat(e.delay)
					},
					ref: c
				}, e.children)
			}
			var j = window.innerWidth < 600,
				k = function(e) {
					Object(d.a)(a, e);
					var t = Object(m.a)(a);

					function a() {
						var e;
						return Object(l.a)(this, a), (e = t.call(this)).state = {
							expanded: !0,
							activeKey: "1"
						}, e.handleSelect = e.handleSelect.bind(Object(s.a)(e)), e
					}
					return Object(o.a)(a, [{
						key: "handleSelect",
						value: function(e) {
							this.setState({
								activeKey: e
							})
						}
					}, {
						key: "render",
						value: function() {
							var e = this.state.expanded,
								t = [i.a.createElement("a", {
									href: "#intro"
								}, "/home"), i.a.createElement("a", {
									href: "#about"
								}, "/about"), i.a.createElement("a", {
									href: "#experience"
								}, "/experience")];
							return i.a.createElement("div", {
								className: "sidebar-nav"
							}, !j && i.a.createElement(u.a, {
								expanded: e,
								defaultOpenKeys: ["3", "4"],
								activeKey: this.state.activeKey,
								onSelect: this.handleSelect,
								appearance: "subtle"
							}, i.a.createElement(u.a.Body, null, i.a.createElement("div", {
								className: "sidebar-links"
							}, t.map((function(e, t) {
								return i.a.createElement(y, {
									delay: "".concat(t + 1, "00ms")
								}, i.a.createElement("div", null, e))
							}))))), i.a.createElement("div", {
								className: "sidebar-logos",
								href: ""
							}, i.a.createElement("a", {
								href: ""
							}, i.a.createElement(p.a, {
								style: {
									fontSize: 20
								}
							})), i.a.createElement("a", {
								href: ""
							}, i.a.createElement(f.a, {
								style: {
									fontSize: 19
								}
							})), i.a.createElement("a", {
								href: ""
							}, i.a.createElement(b.a, {
								style: {
									fontSize: 21
								}
							}))))
						}
					}]), a
				}(i.a.Component),
				S = (a(296), a(152)),
				w = a.n(S),
				O = a(7),
				N = a(153),
				A = (n.Component, function(e) {
					Object(d.a)(a, e);
					var t = Object(m.a)(a);

					function a() {
						var e;
						return Object(l.a)(this, a), (e = t.call(this)).state = {
							expanded: !0,
							activeKey: "1",
							visible: !0
						}, e.handleSelect = e.handleSelect.bind(Object(s.a)(e)), e
					}
					return Object(o.a)(a, [{
						key: "handleSelect",
						value: function(e) {
							this.setState({
								activeKey: e
							})
						}
					}, {
						key: "render",
						value: function() {
							return i.a.createElement("div", {
								id: "intro"
							}, i.a.createElement(w.a, {
								avgTypingDelay: 120
							}, i.a.createElement("span", {
								className: "intro-title"
							}, "Hello, ", i.a.createElement("span", {
								className: "intro-name"
							}, "Eren"), " here.")), i.a.createElement(y, null, i.a.createElement("div", {
								className: "intro-subtitle"
							}, "Nice to meet you."), i.a.createElement("div", {
								className: "intro-desc"
							}, "I'm a high school student based in southern Alberta. I have an interest in finance and programming, specifically in the areas of automation."), i.a.createElement("a", {
								className: ""
							}, i.a.createElement(p.a, null), "")))
						}
					}]), a
				}(i.a.Component)),
				z = a(157),
				T = a(330),
				x = a(334),
				I = a(331),
				C = a(329),
				D = a(333),
				L = window.innerWidth < 600;

			function M(e) {
				var t = e.children,
					a = e.value,
					n = e.index,
					r = Object(z.a)(e, ["children", "value", "index"]);
				return L ? i.a.createElement("div", Object.assign({
					role: "tabpanel",
					hidden: a !== n,
					id: "full-width-tabpanel-".concat(n),
					"aria-labelledby": "full-width-tab-".concat(n)
				}, r), a === n && i.a.createElement(D.a, {
					p: 3
				}, i.a.createElement(C.a, null, t))) : i.a.createElement("div", Object.assign({
					role: "tabpanel",
					hidden: a !== n,
					id: "vertical-tabpanel"
				}, r), a === n && i.a.createElement(D.a, {
					p: 3
				}, i.a.createElement(C.a, null, t)))
			}
			var P = Object(T.a)((function(e) {
					return {
						root: {
							flexGrow: 1,
							backgroundColor: "theme.palette.background.paper",
							display: "flex",
							height: 300
						},
						tabs: {
							borderRight: "1px solid ".concat(e.palette.divider)
						}
					}
				})),
				K = function() {
					var e = P(),
						t = i.a.useState(0),
						a = Object(E.a)(t, 2),
						n = a[0],
						r = a[1],
						c = {
							"Financial Management": {
								jobTitle: "Advance Financial Management Student",
								duration: "JAN 2022 - JUN 2022",
								desc: ["Used specialised accounting procedures in preparing processes for starting up businesses, such as buying and selling goods in a retail system and service businesses with a level of familiarity with GAAP principles.", "Capable of preparing financial statements, recording transactions and analysis, adjusting journal entries through a fiscal cycle, as well as closing entries of respective fiscal cycle.", "Used an accounting software package for personal or business use. Aware and understanding of Canadian legislated tax laws and having examined the Canadian income tax system, therefore being capable of the preparation of income tax returns."]
							},
							"Management & Marketing": {
								jobTitle: "Advance Management & Marketing Student",
								duration: "SEPT 2021 - DEC 2021",
								desc: ["Identify different types of visual merchandising and understand the psychological aspect of how to construct attention-getting displays and evaluate visual merchandising.", "Understanding of how communication channels, delivery strategies, and advertising media can be used to inform potential customers about products and services available in the marketplace.", "Achieved an understanding of e-commerce as a marketing strategy and developed an e-commerce dropshipping website and additional content to attract customers and increase customer satisfaction. Along with understanding how to be connected with suppliers and middlemen, and ensuring quality results through managerial skills by assuming roles and responsibilities of management in order to coordinate available resources."]
							},
							"Bookkeeper": {
								jobTitle: "Part-Time Bookkeeper",
								duration: "JUL 2021 - AUG 2021",
								desc: ["Overseeing data entry, establishing different accounts, maintaining records of financial transactions by posting and verifying, maintaining subsidiary accounts by posting, verifying and allocating transactions and bank reconciliation.", "Creation and handling of invoices and financial statements: balance sheets, income statements, etc.", "Following federal, provincial, and local legal requirements by studying requirements, implementing adherence to requirements, filing reports, and advising management on needed actions."]
							}
						};
					return i.a.createElement("div", {
						className: e.root
					}, i.a.createElement(x.a, {
						orientation: L ? null : "vertical",
						variant: L ? "fullWidth" : "scrollable",
						value: n,
						onChange: function(e, t) {
							r(t)
						},
						className: e.tabs
					}, Object.keys(c).map((function(e, t) {
						return i.a.createElement(I.a, Object.assign({
							label: L ? "0".concat(t, ".") : e
						}, (a = t, L ? {
							id: "full-width-tab-".concat(a),
							"aria-controls": "full-width-tabpanel-".concat(a)
						} : {
							id: "vertical-tab-".concat(a)
						})));
						var a
					}))), Object.keys(c).map((function(e, t) {
						return i.a.createElement(M, {
							value: n,
							index: t
						}, i.a.createElement("span", {
							className: "joblist-job-title"
						}, c[e].jobTitle + " "), i.a.createElement("span", {
							className: "joblist-job-company"
						}, e), i.a.createElement("div", {
							className: "joblist-duration"
						}, c[e].duration), i.a.createElement("ul", {
							className: "job-description"
						}, c[e].desc.map((function(e, t) {
							return i.a.createElement(y, {
								delay: "".concat(t + 1, "00ms")
							}, i.a.createElement("li", {
								key: t
							}, e))
						}))))
					})))
				},
				J = (a(298), function(e) {
					Object(d.a)(a, e);
					var t = Object(m.a)(a);

					function a() {
						var e;
						return Object(l.a)(this, a), (e = t.call(this)).state = {
							expanded: !0,
							activeKey: "1"
						}, e.handleSelect = e.handleSelect.bind(Object(s.a)(e)), e
					}
					return Object(o.a)(a, [{
						key: "handleSelect",
						value: function(e) {
							this.setState({
								activeKey: e
							})
						}
					}, {
						key: "render",
						value: function() {
							return i.a.createElement("div", {
								id: "experience"
							}, i.a.createElement(y, null, i.a.createElement("div", {
								className: "section-header "
							}, i.a.createElement("span", {
								className: "section-title"
							}, "/ experience")), i.a.createElement(K, null)))
						}
					}]), a
				}(i.a.Component)),
				R = (a(299), function(e) {
					Object(d.a)(a, e);
					var t = Object(m.a)(a);

					function a() {
						var e;
						return Object(l.a)(this, a), (e = t.call(this)).state = {
							expanded: !0,
							activeKey: "1"
						}, e.handleSelect = e.handleSelect.bind(Object(s.a)(e)), e
					}
					return Object(o.a)(a, [{
						key: "handleSelect",
						value: function(e) {
							this.setState({
								activeKey: e
							})
						}
					}, {
						key: "render",
						value: function() {
							var e = i.a.createElement("p", null, "As a student, I am currently in my final year of high school. After graduation, I plan to pursue a business degree, most likely an accounting degree, at the ", i.a.createElement("a", {
									href: "https://ucalgary.ca/about"
								}, " ", "University of Calgary"), " while maintaining and expanding my freelancing services as a bookkeeper.", " ", i.a.createElement("a", {
						},""), ""),
								t = i.a.createElement("p", null, "Aside from all of that, I'm interested in the progress of science, the state of economics, and political science. I also play video games, although usually with friends."),
								a = ["SQL", "Python", "Quickbooks", "Javascript & Java", "Sage 50", "HTML & CSS"];
							a.map((function(e) {
								return i.a.createElement("li", null, e)
							}));
							return i.a.createElement("div", {
								id: "about"
							}, i.a.createElement(y, null, i.a.createElement("div", {
								className: "section-header "
							}, i.a.createElement("span", {
								className: "section-title"
							}, "/ about me")), i.a.createElement("div", {
								className: "about-content"
							}, i.a.createElement("div", {
								className: "about-description"
							}, [e], "Here are some technologies I have been working with:", i.a.createElement("ul", {
								className: "tech-stack"
							}, a.map((function(e, t) {
								return i.a.createElement(y, {
									delay: "".concat(t + 1, "00ms")
								}, i.a.createElement("li", null, e))
							}))), [t]), i.a.createElement("div", {
								className: "about-image"
							}, i.a.createElement("img", {
								src: ""
							})))))
						}
					}]), a
				}(i.a.Component)),
				B = (a(300), a(154)),
				G = a.n(B),
				H = (a(301), a(76)),
				U = a(100),
				W = a.n(U),
				V = function(e) {
					Object(d.a)(a, e);
					var t = Object(m.a)(a);

					function a() {
						var e;
						return Object(l.a)(this, a), (e = t.call(this)).state = {
							expanded: !0,
							activeKey: "1"
						}, e.handleSelect = e.handleSelect.bind(Object(s.a)(e)), e
					}
					return Object(o.a)(a, [{
						key: "handleSelect",
						value: function(e) {
							this.setState({
								activeKey: e
							})
						}
					}, {
						key: "render",
						value: function() {
							return i.a.createElement("span", {
								className: "external-links"
							}, i.a.createElement("a", {
								className: "github-icon",
								href: this.props.githubLink
							}, i.a.createElement(f.a, {
								style: {
									fontSize: 20,
									color: "var(--lightest-slate)"
								}
							})), this.props.openLink && i.a.createElement("a", {
								className: "open-icon",
								href: this.props.openLink
							}, i.a.createElement(W.a, {
								style: {
									fontSize: 25,
									color: "var(--lightest-slate)"
								}
							})))
						}
					}]), a
				}(i.a.Component),
				q = function(e) {
					Object(d.a)(a, e);
					var t = Object(m.a)(a);

					function a() {
						var e;
						return Object(l.a)(this, a), (e = t.call(this)).state = {
							expanded: !0,
							activeKey: "1"
						}, e.handleSelect = e.handleSelect.bind(Object(s.a)(e)), e
					}
					return Object(o.a)(a, [{
						key: "handleSelect",
						value: function(e) {
							this.setState({
								activeKey: e
							})
						}
					}
, {
						key: "render",
						value: function() {
							var e = {};
							return i.a.createElement("div", {
								id: "projects"
							}, i.a.createElement("div", {
								className: ""
							}, i.a.createElement("span")), i.a.createElement(H.a, null, Object.keys(e).map((function(t, a) {
								return i.a.createElement(H.a.Item, null, i.a.createElement("img", {
									className: "d-block w-100",
									src: e[t].image,
									alt: t
								}), i.a.createElement("div", {
									className: "caption-bg"
								}, i.a.createElement(H.a.Caption, null, i.a.createElement("h3", null, e[t].title), i.a.createElement("p", null, e[t].desc, i.a.createElement("p", {
									className: "techStack"
								}, e[t].techStack)), i.a.createElement(V, {
									githubLink: e[t].link,
									openLink: e[t].open
								}))))
							}))), i.a.createElement("div", {
								className: "project-container"
							}, i.a.createElement("ul", {
								className: "projects-grid"
							}, Object.keys(t).map((function(e, a) {
								return i.a.createElement(y, {
									delay: "".concat(a + 1, "00ms")
								}, i.a.createElement("li", {
									className: "projects-card"
								}, i.a.createElement("div", {
									className: "card-header"
								}, i.a.createElement("div", {
									className: "folder-icon"
								}, i.a.createElement(G.a, {
									style: {
										fontSize: 35
									}
								})), i.a.createElement(V, {
									githubLink: t[e].link,
									openLink: t[e].open
								})), i.a.createElement("div", {
									className: "card-title"
								}, e), i.a.createElement("div", {
									className: "card-desc"
								}, t[e].desc), i.a.createElement("div", {
									className: "card-tech"
								}, t[e].techStack)))
							})))))
						}
					}]), a
				}(i.a.Component),
				F = (a(302), function(e) {
					Object(d.a)(a, e);
					var t = Object(m.a)(a);

					function a() {
						var e;
						return Object(l.a)(this, a), (e = t.call(this)).state = {
							expanded: !0,
							activeKey: "1"
						}, e.handleSelect = e.handleSelect.bind(Object(s.a)(e)), e
					}
					return Object(o.a)(a, [{
						key: "handleSelect",
						value: function(e) {
							this.setState({
								activeKey: e
							})
						}
					}, {
						key: "render",
						value: function() {
							return i.a.createElement(y, null, i.a.createElement("div", {
								id: "credits"
							}, i.a.createElement("div", {
								className: "ending-credits"
							}, i.a.createElement("div", null, "Modified by Eren Wise & Designed by Gazi Jarin. "), i.a.createElement("div", null, "All rights reserved. \xa9"))))
						}
					}]), a
				}(i.a.Component));
			a(303), a(304), a(305);
			var Y = function() {
				return i.a.createElement("div", {
					className: "App"
				}, i.a.createElement("div", {
					id: "content"
				}, i.a.createElement(A, null), i.a.createElement(R, null), i.a.createElement(J, null), i.a.createElement(q, null), i.a.createElement(F, null)), i.a.createElement(k, null))
			};
			Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
			a(306);
			var Q = a(156);
			c.a.render(i.a.createElement(Q.a, null, i.a.createElement(Y, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
				e.unregister()
			})).catch((function(e) {
				console.error(e.message)
			}))
		}
	},
	[
		[164, 1, 2]
	]
]);
