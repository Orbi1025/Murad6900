(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [5936],
  {
    /***/ 623741: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var rC = __c.rC;
        var ec = __c.ec;
        var O = __c.O;
        var mq = __c.mq;
        var Ws = __c.Ws;
        var N = __c.N;
        var Np = __c.Np;
        var B = __c.B;
        var E = __c.E;
        var Z3 = function (a, b) {
            switch (b.reference.type) {
              case 0:
                const c = a.oT(b.reference.xi);
                a = a.hX(b.reference.Ji);
                return c != null && a != null;
              case 1:
                return a.oT(b.reference.xi) != null;
              case 2:
                return a.hX(b.reference.Ji) != null;
              case 3:
                return !1;
              default:
                throw new E(b.reference);
            }
          },
          Ehc = function (a, b, c) {
            switch (c.type) {
              case "invalid":
                return !1;
              case "canonical":
                if (c.aa.length > 0) return !1;
                a = a.qG(c.u_.slice(1).trim());
                return a.result !== "success"
                  ? !1
                  : __c.Px(new __c.Sx(), a.yI).filter((d) => {
                      switch (d.type) {
                        case 0:
                          return Z3(b, d);
                        case 1:
                          return Z3(b, d.start) && Z3(b, d.end);
                        default:
                          throw new E(d);
                      }
                    }).length > 0;
              default:
                throw new E(c);
            }
          },
          Fhc = function (a, b, c, d) {
            const e = [];
            for (const k of c)
              for (const l of d) {
                c = k.pa;
                var f = l.column,
                  g = a.layout.cells.get(c, f);
                if (
                  !g ||
                  (k.boundary === "start" ? g.span.dc === c : g.span.hd === c)
                )
                  if (
                    ((c = b.get(`${f.id}:${c.id}`)),
                    (c =
                      k.boundary === "start"
                        ? c === null || c === void 0
                          ? void 0
                          : c.qa
                        : c === null || c === void 0
                        ? void 0
                        : c.Da))
                  ) {
                    g = e[e.length - 1];
                    f = (f = a.layout.cols.next(f))
                      ? { column: f, boundary: "start" }
                      : { column: B(a.layout.cols.last()), boundary: "end" };
                    var h;
                    if ((h = g))
                      (h = g.Zra),
                        (h =
                          h.column === l.column && h.boundary === l.boundary);
                    h &&
                      ((h = g.I0a),
                      (h = h.pa === k.pa && h.boundary === k.boundary));
                    h &&
                    g.color === c.color &&
                    g.weight === c.weight &&
                    g.Vc === c.Vc &&
                    g.Vc === 0
                      ? (g.Zra = f)
                      : e.push({
                          I0a: k,
                          pyb: l,
                          Zra: f,
                          color: c.color,
                          weight: c.weight,
                          Vc: c.Vc,
                        });
                  }
              }
            return e;
          },
          Ghc = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of c) {
                var g = m.pa,
                  h = l.column;
                d = a.layout.cells.get(g, h);
                if (
                  !d ||
                  (l.boundary === "start" ? d.span.$b === h : d.span.Qc === h)
                )
                  if (
                    ((d = b.get(`${h.id}:${g.id}`)),
                    (d =
                      l.boundary === "start"
                        ? d === null || d === void 0
                          ? void 0
                          : d.ra
                        : d === null || d === void 0
                        ? void 0
                        : d.Ja) &&
                      (l.boundary !== "start" || e(g, h) !== 1))
                  ) {
                    h = f[f.length - 1];
                    g = (g = a.layout.rows.next(g))
                      ? { pa: g, boundary: "start" }
                      : { pa: B(a.layout.rows.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.cMa),
                        (k =
                          k.column === l.column && k.boundary === l.boundary);
                    k &&
                      ((k = h.csa),
                      (k = k.pa === m.pa && k.boundary === m.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.Vc === d.Vc &&
                    h.Vc === 0
                      ? (h.csa = g)
                      : f.push({
                          cMa: l,
                          Byb: m,
                          csa: g,
                          color: d.color,
                          weight: d.weight,
                          Vc: d.Vc,
                        });
                  }
              }
            return f;
          },
          Hhc = function (a, b, c, d, e) {
            const f = a.y2a.Fdb(c, b.layout.rows.last(), b.layout.cols.last());
            a = (q, r) => {
              const t = f.get(q) || 0,
                u = f.get(r) || 0;
              return t <= u ? q : r;
            };
            const g = new Map();
            if (d.length === 0 || e.length === 0) return g;
            var h = [],
              k = b.layout.cols.Qb(e[0].column);
            k && h.push({ column: k, boundary: "start" });
            h.push(...e);
            (e = b.layout.cols.next(e[e.length - 1].column)) &&
              h.push({ column: e, boundary: "start" });
            e = [];
            (k = b.layout.rows.Qb(d[0].pa)) &&
              e.push({ pa: k, boundary: "start" });
            e.push(...d);
            (d = b.layout.rows.next(d[d.length - 1].pa)) &&
              e.push({ pa: d, boundary: "start" });
            for (const q of h) {
              h = (d = q.boundary === "start" ? q.column : void 0)
                ? b.layout.cols.Qb(d)
                : b.layout.cols.last();
              for (const r of e) {
                var l = r.boundary === "start" ? r.pa : void 0;
                k = l ? b.layout.rows.Qb(l) : b.layout.rows.last();
                var m = d && l && c.get(`${d.id}:${l.id}`),
                  n = d && k && c.get(`${d.id}:${k.id}`);
                l = h && l && c.get(`${h.id}:${l.id}`);
                var p = h && k && c.get(`${h.id}:${k.id}`);
                k =
                  q.boundary === "end"
                    ? l === null || l === void 0
                      ? void 0
                      : l.Ja
                    : m === null || m === void 0
                    ? void 0
                    : m.ra;
                m =
                  r.boundary === "end"
                    ? n === null || n === void 0
                      ? void 0
                      : n.Da
                    : m === null || m === void 0
                    ? void 0
                    : m.qa;
                n =
                  q.boundary === "end"
                    ? p === null || p === void 0
                      ? void 0
                      : p.Ja
                    : n === null || n === void 0
                    ? void 0
                    : n.ra;
                l =
                  r.boundary === "end"
                    ? p === null || p === void 0
                      ? void 0
                      : p.Da
                    : l === null || l === void 0
                    ? void 0
                    : l.qa;
                p = __c.Zxa({ qa: n, Da: k, ra: l, Ja: m }, a);
                let t;
                switch (p) {
                  case "blockStart":
                    t = n;
                    break;
                  case "blockEnd":
                    t = k;
                    break;
                  case "inlineStart":
                    t = l;
                    break;
                  case "inlineEnd":
                    t = m;
                    break;
                  default:
                    t = void 0;
                }
                const { height: u, width: v } =
                  (t === null || t === void 0 ? void 0 : t.Vc) === 1
                    ? { height: t.weight, width: t.weight }
                    : {
                        height: Math.max(
                          (l === null || l === void 0 ? void 0 : l.weight) || 0,
                          (m === null || m === void 0 ? void 0 : m.weight) || 0
                        ),
                        width: Math.max(
                          (n === null || n === void 0 ? void 0 : n.weight) || 0,
                          (k === null || k === void 0 ? void 0 : k.weight) || 0
                        ),
                      };
                g.set($3(q, r), __c.cv(p, u / 2, v / 2));
              }
            }
            return g;
          },
          Ihc = function (a, b, c, d, e, f) {
            if (d.length === 0 || e.length === 0) return [];
            const g = Fhc(b, c, d, e);
            f = Ghc(b, c, d, e, f);
            const h = Hhc(a, b, c, d, e),
              k = a.Ujb(b),
              l = a.ljb(b),
              m = b.direction === "rtl";
            a = g
              .map((n) => {
                var p,
                  q,
                  r = n.pyb,
                  t = n.Zra,
                  u = n.I0a;
                const v = n.color,
                  x = n.weight;
                n = n.Vc;
                const y = m ? -1 : 1,
                  A =
                    (p = h.get($3(r, u))) === null || p === void 0
                      ? void 0
                      : p.Ja;
                p =
                  (q = h.get($3(t, u))) === null || q === void 0
                    ? void 0
                    : q.ra;
                if (A != null && p != null) {
                  q = B(k.get(u.pa));
                  var C = B(l.get(r.column));
                  r = B(l.get(t.column));
                  u = u.boundary === "start" ? q.start : q.end;
                  q = C.start;
                  t = t.boundary === "start" ? r.start : r.end;
                  return {
                    color: v,
                    weight: x,
                    Vc: n,
                    p1: new Np(q + A * y, u),
                    p2: new Np(t + p * y, u),
                    ...__c.hv((t - q) * y, n * x, A),
                  };
                }
              })
              .filter(__c.wb);
            return [
              ...f
                .map((n) => {
                  var p,
                    q,
                    r = n.cMa,
                    t = n.Byb,
                    u = n.csa;
                  const v = n.color,
                    x = n.weight;
                  n = n.Vc;
                  const y =
                    (p = h.get($3(r, t))) === null || p === void 0
                      ? void 0
                      : p.Da;
                  p =
                    (q = h.get($3(r, u))) === null || q === void 0
                      ? void 0
                      : q.qa;
                  if (y != null && p != null) {
                    q = B(l.get(r.column));
                    var A = B(k.get(t.pa));
                    t = B(k.get(u.pa));
                    r = r.boundary === "start" ? q.start : q.end;
                    q = A.start;
                    u = u.boundary === "start" ? t.start : t.end;
                    return {
                      color: v,
                      weight: x,
                      Vc: n,
                      p1: new Np(r, q + y),
                      p2: new Np(r, u + p),
                      ...__c.hv(u - q, n * x, y),
                    };
                  }
                })
                .filter(__c.wb),
              ...a,
            ];
          },
          Jhc = function (a) {
            const b = [];
            a = a.filter((c) => c.weight !== 0 && c.color != null);
            a = __c.Rn(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.Rn(d, (e) => `${e.Jk}_${e.Kk}`);
              for (const [, e] of a) {
                const { Kk: f, Jk: g } = e[0];
                a = __c.Rn(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, Jk: g, Kk: f });
              }
            }
            return b;
          },
          Khc = function (a, b, c, d) {
            var e = __c.SLb;
            const f = b.get().flatMap((k) =>
                a.layout.rows.last() === k
                  ? [
                      { pa: k, boundary: "start" },
                      { pa: k, boundary: "end" },
                    ]
                  : [{ pa: k, boundary: "start" }]
              ),
              g = c.get().flatMap((k) =>
                a.layout.cols.last() === k
                  ? [
                      { column: k, boundary: "start" },
                      { column: k, boundary: "end" },
                    ]
                  : [{ column: k, boundary: "start" }]
              ),
              h = new Map();
            for (const k of b.get())
              for (const l of c.get())
                (b = l && k ? e.y2a.Ovb(a, l, k) : void 0),
                  b && h.set(`${l.id}:${k.id}`, b);
            c = Ihc(e, a, h, f, g, d);
            return Jhc(c);
          },
          Lhc = function (a) {
            switch (a) {
              case 2:
                return N("ibdecg");
              case 7:
                return N("446quA");
              case 5:
                return N("j1fbqg");
              case 1:
                return N("O5i4AQ");
              case 6:
                return N("C0VHsg");
              case 4:
                return N("9ND0kg");
              case -1:
                return N("RWqnLA");
              case 9:
                return N("nQR/7w");
              case -2:
                return N("P23rtA");
              case 3:
                return N("+IXmVg");
              default:
                throw new E(a);
            }
          },
          a4 = function () {
            const [a] = (0, __c.qb)(() => Ws());
            return a;
          },
          Mhc = function (a, b, c) {
            const d = [a];
            for (; a != null && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          },
          Nhc = function (a) {
            const b =
                a.direction === "rtl"
                  ? -(0, __c.VLb)(a) / 2
                  : -(0, __c.TLb)(a) / 2,
              c = -(0, __c.ULb)(a) / 2,
              d = a.width + (0, __c.TLb)(a) / 2 + (0, __c.VLb)(a) / 2;
            a = a.height + (0, __c.ULb)(a) / 2 + (0, __c.WLb)(a) / 2;
            return mq({
              top: 0,
              left: 0,
              width: d,
              height: a,
              rotation: 0,
            }).translate(b, c);
          },
          Ohc = function (a) {
            return (b) => ({ type: "react", node: (0, __c.M)(a, { ...b }) });
          },
          Qhc = function (a) {
            var b;
            const c = a.kA;
            var d = a.content;
            const e = a.context;
            a = a.Up;
            __c.z(
              (d === null || d === void 0
                ? void 0
                : (b = d.Eg) === null || b === void 0
                ? void 0
                : b.type) === "formula"
            );
            b = d.Pk;
            const f = { type: "dom", render: (h) => (h.innerText = "") };
            switch (b.type) {
              case 9:
                d = f;
                break;
              case 6:
                var g;
                d =
                  (g = c.tma) === null || g === void 0
                    ? void 0
                    : g.call(c, {
                        content: __c.Zeb.GT({ ...__c.Itb, value: b.value }),
                        context: e,
                        Up: a,
                      });
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 7:
              case 8:
                d = Phc(c, e, d.$A, d.Pk.type);
                break;
              case 0:
                d = {
                  type: "react",
                  node: b4(__c.hR, {
                    label: Lhc(b.error),
                    children: b4(__c.yu, {
                      width: "full",
                      display: "flex",
                      justifyContent: "center",
                      children: b4(__c.SWb, { tone: "critical" }),
                    }),
                  }),
                };
                break;
              default:
                throw new E(b);
            }
            return d !== null && d !== void 0 ? d : f;
          },
          Phc = function (a, b, c, d) {
            var e;
            return (e = a.wma) === null || e === void 0
              ? void 0
              : e.call(a, { context: b, value: c, valueType: d });
          },
          Thc = function (a) {
            const b = a.kA,
              c = a.zf,
              d = a.lzb,
              e = a.$a;
            b.wma = (f) => __c.IOa({ ...f, $a: e });
            b.KIa = (f) => Qhc({ ...f, kA: b });
            b.tma = Ohc(Rhc({ zf: c, $R: void 0 }));
            b.MIa = Shc(d, e);
            b.NIa = Ohc((f) => b4(c4, { ...f, $a: e }));
          },
          Uhc = function ({
            label: a,
            Ya: b,
            width: c,
            height: d,
            scale: e,
            lMa: f,
          }) {
            return b4("div", {
              style: { width: c, height: d, transform: `scale(${e})` },
              className: "bx74uQ",
              children: d4(__c.vu, {
                className: e4("ivlMMQ", f4(f)),
                size: "small",
                alignment: "center",
                children: [b && b4(b, { size: "small" }), a],
              }),
            });
          },
          f4 = function (a) {
            return {
              _2BX0vg: a === "primary-default",
              JfW_Cg: a === "primary-low",
              isMgNg: a === "primary-active",
              xwWDeQ: a === "secondary-default",
              w0EyUQ: a === "secondary-low",
              _8p5AIA: a === "secondary-active",
            };
          },
          Whc = function ({ Nd: a, $Ra: b, scale: c, Gp: d, Hp: e, n7a: f }) {
            const g = g4(() => {
                const m = d === null || d === void 0 ? void 0 : d.get();
                if (m != null && m.length !== 0) return new __c.ly(m);
              }, [d]),
              h = e(1),
              k = e(c),
              l = { ssE9Tg: !a, OkifGQ: a };
            return b4(__c.wu, {
              Jq: "light",
              light: "light",
              gu: "light",
              dark: "light",
              children: (m) =>
                b4("div", {
                  className: e4("ze9QCQ", l, m.className),
                  style: { width: k, height: k },
                  children: b4("div", {
                    style: { width: h, height: h, transform: `scale(${c})` },
                    className: e4("N7J3UA", l),
                    ref: g === null || g === void 0 ? void 0 : g.Em,
                    children: b4(__c.lR, {
                      className: e4("m8CFdg", l, { G6wL4w: f, W_E0wA: b }),
                      ariaLabel: N("ruWN9A"),
                      children: b4(Vhc, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          Yhc = function () {
            const a = new Xhc(),
              b = new __c.OQ(),
              c = h4((f) => {
                const {
                    scale: g = 1,
                    WRa: h,
                    size: k = "small",
                    n7a: l = !0,
                  } = f,
                  m = i4((n) => a.Hp({ scale: n, size: k, Bwa: h }), [k, h]);
                return b4(Whc, {
                  ...f,
                  scale: h ? Math.max(g, h) : g,
                  Nd: f.sheet.direction === "rtl",
                  $Ra: f.selection != null && a.mnb(f.sheet, f.selection),
                  Hp: m,
                  n7a: l,
                });
              }),
              d = h4((f) => {
                const {
                    scale: g = 1,
                    WRa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    uwb: n,
                  } = f,
                  p = i4((v) => a.Hp({ scale: v, size: k, Bwa: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = i4((v) => m != null && a.IAa(m).has(v), [m]),
                  t = i4((v) => m != null && a.Qkb(l, m).has(v), [l, m]),
                  u = i4(
                    (v) => {
                      const x =
                        n != null &&
                        l.layout.cols.ue(v, n.$b) >= 0 &&
                        l.layout.cols.ue(v, n.Qc) <= 0;
                      return r(v)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(v)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return b4(j4, { ...f, qd: g, Dd: q, Hp: p, nF: u, cG: b });
              }),
              e = h4((f) => {
                const {
                    scale: g = 1,
                    WRa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    uwb: n,
                  } = f,
                  p = i4((v) => a.Hp({ scale: v, size: k, Bwa: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = i4((v) => m != null && a.KAa(m).has(v), [m]),
                  t = i4((v) => m != null && a.Rkb(l, m).has(v), [l, m]),
                  u = i4(
                    (v) => {
                      const x =
                        n != null &&
                        l.layout.rows.ue(v, n.dc) >= 0 &&
                        l.layout.rows.ue(v, n.hd) <= 0;
                      return r(v)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(v)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return b4(k4, { ...f, qd: q, Dd: g, Hp: p, nF: u, cG: b });
              });
            return { R7a: c, Q7a: d, S7a: e };
          },
          Zhc = function (a) {
            const b = a.tq,
              c = () => null;
            return __c.jt((d) => b4(l4, { ...d, tq: b, Th: c }));
          },
          $hc = function ({ sheet: a, da: b, range: c, sd: d }) {
            m4(
              () =>
                n4(() => {
                  if (d.current != null) {
                    var e,
                      f =
                        (e = b === null || b === void 0 ? void 0 : b.get()) !==
                          null && e !== void 0
                          ? e
                          : 1;
                    e = a.direction === "rtl";
                    e = c ? a.ra(c.$b) * f * (e ? 1 : -1) : 0;
                    var g = c ? -a.qa(c.dc) * f : 0;
                    d.current.style.transform = `translate(${e}px, ${g}px)`;
                    d.current.style.width = `${a.width * f}px`;
                    d.current.style.height = `${a.height * f}px`;
                  }
                }),
              [a, c, d, b]
            );
          },
          cic = function ({ onScroll: a }) {
            const b = new aic(a);
            return {
              hD: b,
              ema: h4((c) =>
                b4(bic, { sheet: c.sheet, hD: b, children: c.children })
              ),
            };
          },
          fic = function (a) {
            const b = a.tq,
              c = a.Ce,
              d = a.A2a,
              e = ({ children: k }) => k,
              { hD: f, ema: g } = cic({ onScroll: a.onScroll });
            class h extends dic {
              get nM() {
                const k = this.props.ia.Fy;
                switch (k) {
                  case "screen":
                    return g;
                  case "print":
                    return e;
                  default:
                    throw new E(k);
                }
              }
              componentDidMount() {
                d.k2a(this.props.item, {
                  Xb: this.props.Xb,
                  ia: this.props.ia,
                });
              }
              componentWillUnmount() {
                d.rcb(this.props.item, {
                  Xb: this.props.Xb,
                  ia: this.props.ia,
                });
              }
              render() {
                d.k2a(this.props.item, {
                  Xb: this.props.Xb,
                  ia: this.props.ia,
                });
                return b4(eic, {
                  ...this.props,
                  da: this.da,
                  tq: b,
                  nM: this.nM,
                  Th: this.Th,
                  A2a: d,
                  hD: f,
                });
              }
              constructor(...k) {
                super(...k);
                this.da = o4(() => {
                  const l = this.props.item;
                  var m = this.props.ia,
                    n = m.Fy;
                  m = m.zoom;
                  switch (n) {
                    case "screen":
                      return m;
                    case "print":
                      n = d.Zjb(l);
                      if (!n) return 1;
                      ({ width: n } = new __c.yv(l, n.Xb, { zoom: m }));
                      return n / l.config.width;
                    default:
                      throw new E(n);
                  }
                });
                this.Th = h4((l) =>
                  b4("div", {
                    className: "wKvivQ",
                    children: b4(__c.QOa, { ...this.props, ...l, Ce: c }),
                  })
                );
              }
            }
            return { S9a: h, hD: f };
          },
          gic = function (a, b) {
            if (
              b != null &&
              b.$b != null &&
              b.dc != null &&
              b.Qc != null &&
              b.hd != null
            ) {
              var c = a.ra(b.$b),
                d = a.qa(b.dc),
                e = a.ra(b.Qc) + b.Qc.width - c;
              a = a.qa(b.hd) + b.hd.height - d;
              return mq({ top: d, left: c, width: e, height: a });
            }
          },
          iic = function (a) {
            const b = a.tq,
              c = () => null;
            return (d) => b4(hic, { ...d, tq: b, Th: c });
          },
          mic = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { xLa: b, iw: b, Ma: {}, mB: {} },
              d = p4(
                () => a.uA.style || c,
                (h) => {
                  var k;
                  Object.assign(a.O$.style, h.xLa);
                  Object.assign(a.NM.style, h.iw);
                  Object.assign(a.zE.style, h.Ma);
                  Object.assign(a.EE.style, h.mB);
                  h =
                    h === null || h === void 0
                      ? void 0
                      : (k = h.Ma) === null || k === void 0
                      ? void 0
                      : k.textDecoration;
                  a.zE.classList.toggle("OQx3PQ", h === "underline");
                  a.zE.classList.toggle("_99ezUA", h === "line-through");
                  a.zE.classList.toggle(
                    "kppAqQ",
                    h === "underline line-through"
                  );
                },
                { fireImmediately: !0, equals: jic }
              ),
              e = p4(
                () => a.mva,
                (h) => {
                  a.zE.classList.toggle("_84KvRA", !h);
                  a.O$.classList.toggle("_84KvRA", !h);
                  a.NM.classList.toggle("TL_RLA", !h);
                },
                { fireImmediately: !0 }
              ),
              f = p4(
                () => a.renderer,
                (h) => {
                  a.Baa &&
                  (h === null || h === void 0 ? void 0 : h.type) !== "react"
                    ? ((a.Baa = void 0), a.H5.remove())
                    : (a.EE.innerHTML = "");
                  switch (h === null || h === void 0 ? void 0 : h.type) {
                    case "react":
                      a.Baa = kic(h.node, a.H5);
                      a.EE.appendChild(a.H5);
                      break;
                    case "dom":
                      h.render(a.EE);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new E(h);
                  }
                  a.vxa();
                },
                { fireImmediately: !0 }
              ),
              g = lic
                ? p4(
                    () => a.Pta,
                    (h) => {
                      a.zE.classList.toggle("qxD1GA", h);
                    },
                    { fireImmediately: !0 }
                  )
                : void 0;
            return () => {
              d();
              e();
              f();
              g === null || g === void 0 || g();
            };
          },
          jic = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          oic = function (a) {
            const b = a.mA,
              c = a.sD,
              d = a.RD,
              e = a.F6a,
              f = a.Yy,
              g = new nic(c),
              h = (k, l) => (f ? Ehc(f, k, l) : !1);
            return (k) =>
              b4(q4, {
                ...k,
                NO: h,
                RD: d,
                sD: c,
                mA: b,
                Lua: g,
                F6a: e === null || e === void 0 ? void 0 : e.get(),
              });
          },
          $3 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.pa.id}-${b.boundary}`,
          Rhc =
            ({ zf: a, $R: b }) =>
            (c) =>
              (0, __c.M)(__c.YLb, { ...c, zf: a, $R: b }),
          r4 = __webpack_require__(31968),
          pic = r4.Fragment,
          b4 = r4.jsx,
          d4 = r4.jsxs;
        var qic = __webpack_require__,
          ric = qic(208463),
          e4 = qic.n_x(ric)();
        var h4 = __webpack_require__(813494).observer;
        var s4 = __webpack_require__(845212),
          t4 = s4.Component,
          dic = s4.PureComponent,
          i4 = s4.useCallback,
          m4 = s4.useEffect,
          sic = s4.useLayoutEffect,
          g4 = s4.useMemo,
          u4 = s4.useRef;
        var v4 = __webpack_require__(400770),
          w4 = v4.action,
          n4 = v4.autorun,
          x4 = v4.comparer,
          o4 = v4.computed,
          tic = v4.createAtom,
          y4 = v4.observable,
          p4 = v4.reaction,
          uic = v4.untracked;
        var z4 = __webpack_require__(206928),
          A4 = z4.iB,
          vic = z4.Aj,
          wic = z4.uP;
        var B4 = __webpack_require__(277049)._;
        var C4 = __webpack_require__(269018)._;
        var xic = __webpack_require__(13851).A;
        var kic = __webpack_require__(950873).createPortal;
        var yic = class {
            static D(a) {
              O(a, { viewBox: y4.ref });
            }
            constructor() {
              this.viewBox =
                (yic.D(this), mq({ top: 0, left: 0, height: 0, width: 0 }));
              this.vxb = (a) => {
                this.viewBox.equals(a) || (this.viewBox = a);
              };
            }
          },
          zic = h4((a) => {
            var b,
              c,
              d = a.sheet.direction === "rtl";
            d = { H2wykw: !d, UweldA: d };
            const e = u4(new yic()),
              f = w4(() => {
                if (a.Yka) {
                  var h = a.Yka.current;
                  h &&
                    e.current.vxb(
                      mq({
                        top: h.scrollTop,
                        left: h.scrollLeft,
                        height: h.clientHeight,
                        width: h.clientWidth,
                      })
                    );
                }
              });
            m4(() => {
              var h, k;
              f();
              (h = a.Yka.current) === null ||
                h === void 0 ||
                h.addEventListener("scroll", f);
              (k = window) === null ||
                k === void 0 ||
                k.addEventListener("resize", f);
              return () => {
                var l, m;
                (l = a.Yka.current) === null ||
                  l === void 0 ||
                  l.removeEventListener("scroll", f);
                (m = window) === null ||
                  m === void 0 ||
                  m.removeEventListener("resize", f);
              };
            }, [a.Yka, f]);
            const g = g4(() => ({ get: () => e.current.viewBox }), []);
            return d4("div", {
              className: e4("nMvVqA", d),
              children: [
                d4("div", {
                  ref: a.sd,
                  className: "_0YOFPg",
                  children: [
                    b4(a.tq, { ...a, viewport: g }),
                    b4("div", {
                      className: e4("Gdl7fQ", d),
                      children:
                        (c = a.eIa) === null || c === void 0
                          ? void 0
                          : (b = c.get()) === null || b === void 0
                          ? void 0
                          : b.map((h, k) => b4(h, {}, k)),
                    }),
                  ],
                }),
                a.ZLb === "visible" &&
                  d4(pic, {
                    children: [
                      b4("div", {
                        className: e4("_32sKQw", d),
                        children: b4(a.P9a, { ...a }),
                      }),
                      b4("div", {
                        className: e4("xdIsTQ", d),
                        children: b4(a.T9a, { ...a }),
                      }),
                      b4("div", {
                        className: e4("rsTRSA", d),
                        children: b4(a.R9a, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          Aic = h4((a) => {
            a = a.content;
            __c.w(a.type === "text2" || a.type === "text3");
            switch (a.type) {
              case "text2":
                return a.value.W;
              case "text3":
                return __c.kw.ba(a.value).cells.W();
              default:
                throw new E(a);
            }
          });
        var Shc = (a, b) =>
            __c.uOa((c, d) => {
              const e = c.content;
              c = c.context;
              if (e.value.isEmpty) for (; d.lastChild; ) d.lastChild.remove();
              else
                ({ Yg: c } = __c.hf(__c.Gf, c.attrs)),
                  c === "wrap" &&
                    ((d = d.appendChild(document.createElement("div"))),
                    (d.className = "dt4Dlg")),
                  a.render({
                    container: d,
                    text: e.value,
                    La: void 0,
                    writingMode: 1,
                    yd: "start",
                    Ae: Bic(e, c),
                    $a: b,
                  });
            }),
          Bic = A4(
            (a, b) => {
              if (b === "wrap") return [];
              a = a.value.W.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: x4.structural }
          );
        var Cic, Dic, Eic, c4;
        new ((Cic = class extends B4 {
          constructor() {
            super(c4);
            Dic();
          }
        }),
        (() => {
          class a extends (Eic = t4) {
            static D(b) {
              O(b, { Yg: o4 });
            }
            get Yg() {
              return __c.hf(__c.Gf, this.props.context.attrs).Yg;
            }
            render() {
              var b = this.props.content;
              const c = this.props.context;
              if (b.value.isEmpty) return null;
              b = b4(this.props.Th, {
                content: b,
                pa: c.container.pa,
                col: c.container.column,
                Yg: this.Yg,
              });
              return this.Yg === "wrap"
                ? b4("div", { className: "dt4Dlg", children: b })
                : b;
            }
            constructor(...b) {
              super(...b);
              a.D(this);
            }
          }
          ({
            c: [c4, Dic],
          } = C4(a, [], [ec], Eic));
        })(),
        Cic)();
        var Xhc = class {
          Hp({ size: a, scale: b, Bwa: c }) {
            b = c ? Math.max(c, b) : b;
            return a === "large" ? __c.PU * b : __c.KVb * b;
          }
          constructor() {
            this.mnb = A4((a, b) => {
              var c, d;
              b = b.get();
              return (
                b != null &&
                a.layout.rows.count() ===
                  (((c = b.rows) === null || c === void 0 ? void 0 : c.size) ||
                    0) &&
                a.layout.cols.count() ===
                  (((d = b.columns) === null || d === void 0
                    ? void 0
                    : d.size) || 0)
              );
            });
            this.IAa = vic(
              (a) => {
                var b;
                return new Set(
                  ((b = a.get()) === null || b === void 0
                    ? void 0
                    : b.columns) || []
                );
              },
              { equals: __c.In }
            );
            this.KAa = vic(
              (a) => {
                var b;
                return new Set(
                  ((b = a.get()) === null || b === void 0 ? void 0 : b.rows) ||
                    []
                );
              },
              { equals: __c.In }
            );
            this.Qkb = A4(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.KAa(b).size > 0) return new Set(a.layout.cols);
                b = this.IAa(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.pa, e.column);
                  for (const f of Mhc(
                    c ? c.span.$b : e.column,
                    c ? c.span.Qc : e.column,
                    a.layout.cols
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.In }
            );
            this.Rkb = A4(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.IAa(b).size > 0) return new Set(a.layout.rows);
                b = this.KAa(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.pa, e.column);
                  for (const f of Mhc(
                    c ? c.span.dc : e.pa,
                    c ? c.span.hd : e.pa,
                    a.layout.rows
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.In }
            );
          }
        };
        var Fic,
          Gic,
          Hic,
          Iic,
          Jic,
          Kic,
          Lic = parseInt("4px", 10) || 4,
          Mic = parseInt("0.5px", 10) || 0.5,
          Nic = parseInt("1px", 10) || 1,
          Oic = parseInt("0.5px", 10) || 0.5,
          Pic = parseInt("0.5px", 10) || 0.5,
          Qic = parseInt("1px", 10) || 1,
          Ric = parseInt("0.5px", 10) || 0.5,
          j4;
        new ((Fic = class extends B4 {
          constructor() {
            super(j4);
            Hic();
          }
        }),
        (() => {
          class a extends (Iic = t4) {
            static D(b) {
              O(b, { Nd: o4, Zq: o4, b7: o4 });
            }
            get Nd() {
              return this.props.sheet.direction === "rtl";
            }
            get Zq() {
              var b;
              const c =
                (b = this.props.Gp) === null || b === void 0 ? void 0 : b.get();
              if (c != null && c.length !== 0) return new __c.ly(c);
            }
            get b7() {
              var b, c, d;
              return (c = (d = this.props).hta) === null || c === void 0
                ? void 0
                : (b = c.call(d)) === null || b === void 0
                ? void 0
                : b.get();
            }
            render() {
              return b4(__c.wu, {
                Jq: "light",
                light: "light",
                gu: "light",
                dark: "light",
                children: this.Jcb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (j4.D(this),
                w4((c) => {
                  const { onMouseMove: d, sheet: e, qd: f = 1 } = this.props;
                  d === null || d === void 0 || d(c, e, "column", f);
                }));
              this.onMouseLeave = w4((c) => {
                var d, e;
                (d = (e = this.props).onMouseLeave) === null ||
                  d === void 0 ||
                  d.call(e, c);
              });
              this.$_a = (c, d, e) => {
                const {
                    sheet: f,
                    Hp: g,
                    nF: h,
                    iMb: k,
                    qd: l = 1,
                    Dd: m = 1,
                  } = this.props,
                  n = { jNbTIg: !this.Nd, gtA7Dw: this.Nd },
                  p = (e === null || e === void 0 ? 0 : e.sticky)
                    ? this.Nd
                      ? { right: 0 }
                      : { left: 0 }
                    : void 0;
                var q;
                const r = (e === null || e === void 0 ? 0 : e.sticky)
                  ? (q = this.b7) !== null && q !== void 0
                    ? q
                    : p
                  : void 0;
                let t = -1;
                return d4("div", {
                  style: r,
                  className: e4("Vt2_4w", n, {
                    Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky,
                  }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    f.layout.cols.map((u) => {
                      var v;
                      t++;
                      if (
                        !(
                          (c && f.layout.cols.ue(u, c) < 0) ||
                          (d && f.layout.cols.ue(u, d) > 0)
                        )
                      )
                        return b4(
                          Sic,
                          {
                            col: u,
                            label: __c.Bs(t),
                            Ya:
                              k === null || k === void 0
                                ? void 0
                                : (v = k.get()) === null || v === void 0
                                ? void 0
                                : v.get(u),
                            Hp: g,
                            nF: h,
                            qd: l,
                            Dd: m,
                          },
                          u.id
                        );
                    }),
                    (e === null || e === void 0 ? void 0 : e.sticky) &&
                      b4("div", {
                        style: { width: Lic * l },
                        className: e4("HBvlug", "ru3tFQ", n),
                      }),
                  ],
                });
              };
              this.Jcb = (c) => {
                var d;
                const e = this.props.sheet,
                  f = e.view.freeze.lI
                    ? e.layout.Qd.get(e.view.freeze.lI)
                    : void 0,
                  g = { jNbTIg: !this.Nd, gtA7Dw: this.Nd };
                return d4("div", {
                  ref: (d = this.Zq) === null || d === void 0 ? void 0 : d.Em,
                  className: e4("xhBZaw", g, c.className),
                  children: [
                    f && this.$_a(void 0, f, { sticky: !0 }),
                    this.$_a(f ? e.cols.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [j4, Hic],
          } = C4(a, [], [ec], Iic));
        })(),
        Fic)();
        var k4;
        new ((Gic = class extends B4 {
          constructor() {
            super(k4);
            Jic();
          }
        }),
        (() => {
          class a extends (Kic = t4) {
            static D(b) {
              O(b, { Nd: o4, Zq: o4, b7: o4 });
            }
            get Nd() {
              return this.props.sheet.direction === "rtl";
            }
            get Zq() {
              var b;
              const c =
                (b = this.props.Gp) === null || b === void 0 ? void 0 : b.get();
              if (c != null && c.length !== 0) return new __c.ly(c);
            }
            get b7() {
              var b, c, d;
              return (c = (d = this.props).hta) === null || c === void 0
                ? void 0
                : (b = c.call(d)) === null || b === void 0
                ? void 0
                : b.get();
            }
            render() {
              return b4(__c.wu, {
                Jq: "light",
                light: "light",
                gu: "light",
                dark: "light",
                children: this.dwb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (k4.D(this),
                w4((c) => {
                  const { onMouseMove: d, sheet: e, Dd: f = 1 } = this.props;
                  d === null || d === void 0 || d(c, e, "row", f);
                }));
              this.onMouseLeave = w4((c) => {
                var d, e;
                (d = (e = this.props).onMouseLeave) === null ||
                  d === void 0 ||
                  d.call(e, c);
              });
              this.f0a = (c, d, e) => {
                const {
                    sheet: f,
                    Hp: g,
                    nF: h,
                    qd: k = 1,
                    Dd: l = 1,
                  } = this.props,
                  m = { jNbTIg: !this.Nd, gtA7Dw: this.Nd };
                var n = (e === null || e === void 0 ? 0 : e.sticky)
                    ? { top: 0 }
                    : void 0,
                  p;
                const q = (e === null || e === void 0 ? 0 : e.sticky)
                  ? (p = this.b7) !== null && p !== void 0
                    ? p
                    : n
                  : void 0;
                let r = -1,
                  t = 0;
                n = f.rows.map((u) => {
                  r++;
                  if (
                    !((c && f.rows.ue(u, c) < 0) || (d && f.rows.ue(u, d) > 0))
                  )
                    return (
                      (t += u.height),
                      b4(
                        Tic,
                        {
                          pa: u,
                          label: `${r + 1}`,
                          nF: h,
                          Hp: g,
                          qd: k,
                          Dd: l,
                          start: f.qa(u),
                        },
                        u.id
                      )
                    );
                });
                return d4("div", {
                  style: { height: t * l, width: g(k), ...q },
                  className: e4("_93roJg", m, {
                    Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky,
                  }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    n,
                    (e === null || e === void 0 ? void 0 : e.sticky) &&
                      b4("div", {
                        style: { height: Lic * l },
                        className: e4("HBvlug", "koz2Hg"),
                      }),
                  ],
                });
              };
              this.dwb = (c) => {
                var d;
                const e = this.props.sheet,
                  f = e.view.freeze.iX
                    ? e.layout.Yd.get(e.view.freeze.iX)
                    : void 0,
                  g = { jNbTIg: !this.Nd, gtA7Dw: this.Nd };
                return d4("div", {
                  ref: (d = this.Zq) === null || d === void 0 ? void 0 : d.Em,
                  className: e4("An9VeA", g, c.className),
                  children: [
                    f && this.f0a(void 0, f, { sticky: !0 }),
                    this.f0a(f ? e.rows.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [k4, Jic],
          } = C4(a, [], [ec], Kic));
        })(),
        Gic)();
        var Sic = h4((a) => {
            const b = a.label,
              c = a.Ya,
              d = a.col,
              e = a.nF,
              f = a.Hp,
              g = a.qd;
            a = a.Dd;
            const h = f(a),
              k = wic(() => e(d));
            return b4("div", {
              className: e4("_83Rssw", "d2uLIA", f4(k)),
              style: {
                width: d.width * g,
                height: h,
                borderInlineWidth: `${Mic * g}px`,
                borderBlockStartWidth: `${Nic * g}px`,
                borderBlockEndWidth: `${Oic * g}px`,
              },
              children: b4(Uhc, {
                label: b,
                Ya: c,
                width: d.width,
                height: f(1),
                scale: a,
                lMa: k,
              }),
            });
          }),
          Tic = h4((a) => {
            const b = a.label,
              c = a.pa,
              d = a.Hp,
              e = a.nF,
              f = a.qd,
              g = a.Dd,
              h = d(f),
              k = wic(() => e(c));
            return b4("div", {
              className: e4("_83Rssw", "JhBzyw", f4(k)),
              style: {
                width: h,
                height: c.height * g,
                borderBlockWidth: `${Pic * g}px`,
                borderInlineStartWidth: `${Qic * g}px`,
                borderInlineEndWidth: `${Ric * g}px`,
                transform: `translateY(${a.start * g}px)`,
              },
              children: b4(Uhc, {
                label: b,
                width: d(1),
                height: c.height,
                scale: f,
                lMa: k,
              }),
            });
          });
        var Uic =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var Vic =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var Vhc = __c.bR({ Wo: Uic, medium: Vic });
        var Wic, Xic, Yic, l4;
        new ((Wic = class extends B4 {
          constructor() {
            super(l4);
            Xic();
          }
        }),
        (() => {
          class a extends (Yic = t4) {
            static D(b) {
              O(b, { Ee: o4.struct });
            }
            render() {
              const b = this.props.element;
              return b4(this.props.tq, {
                sheet: b.G.config,
                container: b,
                s$: "visible",
                Gp: this.props.Gp,
                Bu: this.props.Bu,
                Du: this.props.Du,
                da: this.props.da,
                Ee: this.Ee,
                Th: this.props.Th,
                JH: void 0,
              });
            }
            get Ee() {
              return __c.Js(this.props.element.G.Na, this.props.Ze);
            }
            constructor(...b) {
              super(...b);
              a.D(this);
            }
          }
          ({
            c: [l4, Xic],
          } = C4(a, [], [ec], Yic));
        })(),
        Wic)();
        var Zic = class {
          constructor() {
            this.Ria = new WeakMap();
            this.Zjb = (a) => this.Ria.get(a);
            this.k2a = (a, b) => {
              this.Ria.set(a, b);
            };
            this.rcb = (a, b) => {
              const c = this.Ria.get(a);
              c && c.ia === b.ia && c.Xb === b.Xb && this.Ria.delete(a);
            };
          }
        };
        var D4 = parseInt("4px", 10) || 4,
          $ic = h4(({ sheet: a, da: b, range: c, xw: d, yw: e }) => {
            if (c != null && (d || e)) {
              var f;
              b =
                (f = b === null || b === void 0 ? void 0 : b.get()) !== null &&
                f !== void 0
                  ? f
                  : 1;
              f = a.direction === "rtl";
              var g = { ZJ0G6w: !f, dOI_jA: f };
              if (d && e)
                return (
                  (d = a.qa(c.hd) + c.hd.height),
                  (a = a.ra(c.Qc) + c.Qc.width),
                  b4("div", {
                    style: { top: d * b, width: a * b, height: D4 * b },
                    className: e4("aX8dhQ", "VGcLng"),
                  })
                );
              if (d)
                return (
                  (c = a.ra(c.Qc) + c.Qc.width),
                  b4("div", {
                    style: {
                      width: D4 * b,
                      height: a.height * b,
                      ...(f ? { right: c * b } : { left: c * b }),
                    },
                    className: e4("aX8dhQ", "gl1RPg", g),
                  })
                );
              if (e)
                return (
                  (c = a.qa(c.hd) + c.hd.height),
                  b4("div", {
                    style: { top: c * b, width: a.width * b, height: D4 * b },
                    className: e4("aX8dhQ", "VGcLng"),
                  })
                );
            }
          });
        var E4 = ({ sheet: a, range: b, da: c, children: d }) => {
            const e = a4();
            $hc({ sheet: a, da: c, range: b, sd: e });
            return b4("div", {
              ref: e,
              className: e4(
                "nstn2A",
                a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"
              ),
              children: d,
            });
          },
          ajc = ({ sheet: a, range: b, da: c, children: d }) => {
            const e = a4();
            $hc({ sheet: a, da: c, range: b, sd: e });
            a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
            return b4("div", {
              className: e4("nstn2A", a, "_9sodyg"),
              children: b4("div", {
                ref: e,
                className: e4("nstn2A", a),
                children: d,
              }),
            });
          };
        var bic = h4(({ sheet: a, children: b, hD: c }) => {
            const d = i4(
                (f) => {
                  c.rBa(a, f);
                },
                [c, a]
              ),
              e = i4(
                (f) => {
                  f != null ? c.kD.set(a, f) : c.kD.delete(a);
                },
                [c, a]
              );
            return b4(__c.AQb, {
              direction: a.config.direction === "rtl" ? "rtl" : "ltr",
              onScroll: d,
              ov: e,
              children: b,
            });
          }),
          aic = class {
            rBa(a, b) {
              this.onScroll && this.onScroll(a);
              this.n6.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.kD = new WeakMap();
              this.n6 = y4.map(new Map(), { deep: !1 });
              this.scrollTo = w4((b, c) => {
                b = this.kD.get(b);
                b === null ||
                  b === void 0 ||
                  b.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var eic = h4((a) => {
          const b = a.item,
            c = a.Gp,
            d = a.sg,
            e = a.measureRef,
            f = a.da,
            g = a.aTa,
            h = a.Xb,
            k = a.Bu,
            l = a.Du,
            m = a.tq,
            n = a.nM,
            p = a.Th,
            q = a.Ze,
            r = a.hD;
          a = g4(() => __c.Js(b.Na, q), [b, q]);
          const t = g4(
              () =>
                h4(({ sheet: y, range: A, xw: C, yw: D }) =>
                  b4(E4, {
                    sheet: y,
                    range: A,
                    da: f,
                    children: b4($ic, {
                      sheet: y,
                      da: f,
                      range: A,
                      xw: C,
                      yw: D,
                    }),
                  })
                ),
              [f]
            ),
            u = Nhc(b.config),
            v = f.get(),
            x = Math.min(u.width * v, h.width);
          m4(
            () =>
              n4(() => {
                var y = b.config.view.freeze.lI
                  ? b.config.layout.Qd.get(b.config.view.freeze.lI)
                  : void 0;
                if (y != null)
                  if (b.config.ra(y) + y.width > x) {
                    if ((y = r.kD.get(b))) y.style.overflowX = "hidden";
                  } else if ((y = r.kD.get(b))) y.style.overflowX = "scroll";
              }),
            [b, h.width, r, v, x]
          );
          return b4("div", {
            ref: e,
            className: "E8r86A",
            style: { width: x },
            children: b4(n, {
              sheet: b,
              children: b4("div", {
                ref: g,
                className: "cXTiJA",
                style: { width: u.width * v, height: u.height * v },
                children: b4("div", {
                  className: "W1ir5A",
                  children: b4(m, {
                    container: d.Jj(b),
                    sheet: b.config,
                    s$: "visible",
                    Gp: c,
                    da: f,
                    Bu: k,
                    Du: l,
                    Ee: a,
                    Th: p,
                    JH: t,
                  }),
                }),
              }),
            }),
          });
        });
        var bjc = h4(({ page: a, range: b, bD: c }) => {
          const d = gic(a.sheet, b);
          return b4("div", {
            className: "Gi9pfA",
            children: a.elements.map((e, f) =>
              d == null ? c(e, f) : __c.jq(mq(e)).Mp(d) && c(e, f)
            ),
          });
        });
        var cjc = new __c.OQ(),
          F4 = (a) => __c.PU * a,
          djc = () => "primary-default",
          hic = h4(
            ({
              container: a,
              Gp: b,
              Bu: c,
              Du: d,
              f2: e,
              da: f,
              viewport: g,
              Qxb: h,
              tq: k,
              Th: l,
              bD: m,
              Yha: n,
              iEb: p,
              TCb: q,
              SCb: r,
            }) => {
              const t = a.page,
                u = g4(
                  () =>
                    h4(({ sheet: v, range: x, xw: y, yw: A }) =>
                      d4(pic, {
                        children: [
                          b4(E4, {
                            sheet: t.sheet,
                            range: x,
                            da: f,
                            children: b4($ic, {
                              sheet: v,
                              da: f,
                              range: x,
                              xw: y,
                              yw: A,
                            }),
                          }),
                          d4(ajc, {
                            sheet: t.sheet,
                            range: x,
                            da: f,
                            children: [
                              p && b4(p, {}),
                              m && b4(bjc, { page: t, bD: m, range: x }),
                              r && b4(r, {}),
                              n && n(),
                            ],
                          }),
                          q &&
                            x &&
                            b4(E4, {
                              sheet: t.sheet,
                              range: x,
                              da: f,
                              children: b4(q, { range: x }),
                            }),
                        ],
                      })
                    ),
                  [t, f, p, m, r, n, q]
                );
              return h
                ? b4(ejc, {
                    container: a,
                    viewport: g,
                    da: f,
                    Gp: b,
                    Bu: c,
                    Du: d,
                    tq: k,
                    Th: l,
                    JH: u,
                  })
                : b4(k, {
                    sheet: t.sheet,
                    container: a,
                    s$: "hidden",
                    Gp: b,
                    Bu: c,
                    Du: d,
                    f2: e,
                    da: f,
                    viewport: g,
                    Th: l,
                    JH: u,
                  });
            }
          ),
          ejc = h4((a) => {
            const b = a.container,
              c = a.da,
              d = a.viewport,
              e = a.Gp,
              f = a.Bu,
              g = a.Du,
              h = a.tq,
              k = a.Th;
            a = a.JH;
            const l = b.page,
              m = l.sheet.direction === "rtl",
              n = u4(null),
              p = u4(null),
              q = u4(null);
            m4(() => {
              const y = G4({
                sheet: l.sheet,
                wja: !0,
                xja: !0,
                da: c,
                viewport: d,
              });
              return p4(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (A) => {
                  const C = n.current;
                  if (A && C) {
                    var D = l.sheet.direction === "rtl",
                      H;
                    C.style.position =
                      (H = A.position) !== null && H !== void 0 ? H : "sticky";
                    var J;
                    C.style.top =
                      (J = A.top) !== null && J !== void 0 ? J : "0px";
                    var I, L;
                    D
                      ? (C.style.right =
                          (I = A.right) !== null && I !== void 0 ? I : "0px")
                      : (C.style.left =
                          (L = A.left) !== null && L !== void 0 ? L : "0px");
                    var P;
                    C.style.transform =
                      (P = A.transform) !== null && P !== void 0 ? P : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            m4(() => {
              const y = G4({
                sheet: l.sheet,
                wja: !1,
                xja: !0,
                da: c,
                viewport: d,
              });
              return p4(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (A) => {
                  const C = q.current;
                  if (A && C) {
                    var D;
                    C.style.position =
                      (D = A.position) !== null && D !== void 0 ? D : "sticky";
                    var H;
                    C.style.top =
                      (H = A.top) !== null && H !== void 0 ? H : "0px";
                    var J;
                    C.style.transform =
                      (J = A.transform) !== null && J !== void 0 ? J : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            m4(() => {
              const y = G4({
                sheet: l.sheet,
                wja: !0,
                xja: !1,
                da: c,
                viewport: d,
              });
              return p4(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (A) => {
                  const C = p.current;
                  if (A && C) {
                    var D = l.sheet.direction === "rtl",
                      H;
                    C.style.position =
                      (H = A.position) !== null && H !== void 0 ? H : "sticky";
                    var J, I;
                    D
                      ? (C.style.right =
                          (J = A.right) !== null && J !== void 0 ? J : "0px")
                      : (C.style.left =
                          (I = A.left) !== null && I !== void 0 ? I : "0px");
                    var L;
                    C.style.transform =
                      (L = A.transform) !== null && L !== void 0 ? L : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            const r = i4(
                (y, A, C) =>
                  G4({ sheet: y, wja: A, xja: C, da: c, viewport: d }),
                [c, d]
              ),
              t = g4(
                () => (r ? () => r(l.sheet, !0, !1) : void 0),
                [r, l.sheet]
              ),
              u = g4(
                () => (r ? () => r(l.sheet, !1, !0) : void 0),
                [r, l.sheet]
              );
            var v;
            const x =
              (v = c === null || c === void 0 ? void 0 : c.get()) !== null &&
              v !== void 0
                ? v
                : 1;
            return d4("div", {
              className: e4("OsKKIQ", "cbOp6Q"),
              children: [
                b4("div", {
                  className: "VDFv_A",
                  children: b4(h, {
                    sheet: l.sheet,
                    container: b,
                    s$: "hidden",
                    Gp: e,
                    Bu: f,
                    Du: g,
                    f2: r,
                    da: c,
                    viewport: d,
                    Th: k,
                    JH: a,
                  }),
                }),
                b4("div", {
                  ref: n,
                  className: "_688KWg",
                  children: b4(Whc, { Nd: m, $Ra: !1, Hp: F4, scale: x }),
                }),
                b4("div", {
                  ref: q,
                  className: "m0cT1w",
                  children: b4(j4, {
                    sheet: l.sheet,
                    qd: x,
                    Dd: x,
                    Hp: F4,
                    nF: djc,
                    cG: cjc,
                    hta: t,
                  }),
                }),
                b4("div", {
                  ref: p,
                  className: "zm537g",
                  children: b4(k4, {
                    sheet: l.sheet,
                    qd: x,
                    Dd: x,
                    Hp: F4,
                    nF: djc,
                    cG: cjc,
                    hta: u,
                  }),
                }),
              ],
            });
          }),
          G4 = ({ sheet: a, wja: b, xja: c, da: d, viewport: e }) =>
            o4(() => {
              var f = e === null || e === void 0 ? void 0 : __c.uq(e.get()),
                g;
              const h =
                (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                g !== void 0
                  ? g
                  : 1;
              if (!f) return {};
              g = {};
              f = new Np(f.left, f.top);
              const k = a.direction === "rtl";
              g.position = "relative";
              c && (g.top = "0px");
              b && (k ? (g.right = "0px") : (g.left = "0px"));
              g.transform = `translate(${b ? f.x * h : 0}px, ${
                c ? f.y * h : 0
              }px)`;
              return g;
            });
        var nic = class {
          constructor(a) {
            this.sD = a;
            this.dcb = __c.$S;
            this.Djb = A4((b, c, d, e) => {
              d = d.get();
              const f = new WeakMap();
              for (let t = 0; t < d.length; t++) {
                var g = d[t],
                  h = this.vjb(b, c, g);
                if (h) {
                  switch (h) {
                    case "start":
                    case "justify":
                      var k = d[t + 1];
                      if (k == null || !rC(b, c, k)) continue;
                      break;
                    case "center":
                      k = d[t + 1];
                      if (k == null || !rC(b, c, k)) continue;
                      k = d[t - 1];
                      if (k == null || !rC(b, c, k)) continue;
                      break;
                    case "end":
                      k = d[t - 1];
                      if (k == null || !rC(b, c, k)) continue;
                      break;
                    default:
                      throw new E(h);
                  }
                  if ((k = e(c, g))) {
                    var l = k.width + (h === "center" ? 0 : this.dcb);
                    if (!(g.width > l)) {
                      switch (h) {
                        case "start":
                        case "justify":
                          h = b.ra(g);
                          k = h + l;
                          break;
                        case "center":
                          k = b.ra(g) + g.width / 2;
                          h = k - l / 2;
                          k += l / 2;
                          break;
                        case "end":
                          k = b.ra(g) + g.width;
                          h = k - l;
                          break;
                        default:
                          throw new E(h);
                      }
                      for (l = d.indexOf(g); l >= 0; l--) {
                        var m = d[l],
                          n = l - 1 < 0 || rC(b, c, d[l - 1]),
                          p;
                        if ((p = m === g || rC(b, c, m))) {
                          p = h;
                          var q = k,
                            r = b.ra(m);
                          p = p < r && r < q;
                        }
                        if (p && n) f.set(m, 1);
                        else break;
                      }
                      for (g = d.indexOf(g) + 1; g < d.length; g++) {
                        l = d[g];
                        if ((m = rC(b, c, l)))
                          (m = h), (n = k), (p = b.ra(l)), (m = m < p && p < n);
                        if (m) f.set(l, 1);
                        else break;
                      }
                    }
                  }
                }
              }
              return f;
            });
            this.vjb = (b, c, d) => {
              var e, f;
              const g = b.layout.cells.get(c, d);
              if (
                g &&
                (g.ref.content.ref || g.ref.Ea.ref) &&
                g.span.dc === g.span.hd &&
                g.span.$b === g.span.Qc
              ) {
                var h = this.sD.an(b, c, d);
                b = this.sD.ata(
                  b,
                  c,
                  d,
                  __c.Hf({ Yg: void 0, textAlign: void 0 })
                );
                var { Yg: k, textAlign: l } = __c.hf(__c.Gf, b);
                if (k === "overflow")
                  return __c.vOa(
                    l,
                    (e = g.ref.content.ref) === null || e === void 0
                      ? void 0
                      : e.type,
                    (f = g.ref.Ea.ref) === null || f === void 0
                      ? void 0
                      : f.type,
                    h ? () => h.Pk.type : void 0
                  );
              }
            };
          }
        };
        var fjc = h4(function (a) {
          const b = a.sheet;
          var c = a.yh;
          const d = a.oBb,
            e = a.da,
            f = a.Lua,
            g = a.jjb;
          a = a.overflow;
          const h = a4();
          sic(
            () =>
              n4(() => {
                const p = B(h.current);
                var q;
                const r =
                  (q = e === null || e === void 0 ? void 0 : e.get()) !==
                    null && q !== void 0
                    ? q
                    : 1;
                q = b.height;
                p.style.width = `${b.width * r}px`;
                p.style.height = `${q * r}px`;
              }),
            [h, e, b]
          );
          const k = i4((p) => f.Djb(b, p, d, g), [f, b, d, g]);
          var l = i4(
            (p, q) => {
              var r, t;
              return (t =
                (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !==
                null && t !== void 0
                ? t
                : 0;
            },
            [k]
          );
          c = Khc(b, c, d, l);
          l = b.width;
          const m = b.height,
            n = b.direction === "rtl";
          return b4("svg", {
            ref: h,
            role: "presentation",
            className: e4("c6a1eQ", {
              H_CtIQ: !n,
              _8_56PQ: n,
              _3NnFzw: a === "visible",
              JMH1ng: a === "hidden",
            }),
            viewBox: `0 0 ${l} ${m}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: c.map(({ lines: p, color: q, weight: r, Jk: t, Kk: u }) =>
              b4(
                "path",
                {
                  stroke: q,
                  strokeDasharray: t,
                  strokeDashoffset: u,
                  strokeWidth: r,
                  d: p
                    .map(
                      ({ p1: v, p2: x }) => `M ${v.x} ${v.y} L ${x.x} ${x.y}`
                    )
                    .join(" "),
                },
                `${q}-${r}-${t}-${u}`
              )
            ),
          });
        });
        var gjc;
        gjc = Symbol.iterator;
        var hjc = class {
          get size() {
            return this.gja;
          }
          get([a, b]) {
            return (a = this.NF.get(a)) ? a.get(b) : void 0;
          }
          has([a, b]) {
            a = this.NF.get(a);
            return a == null ? !1 : a.has(b);
          }
          set([a, b], c) {
            let d = this.NF.get(a);
            d == null && ((d = new Map()), this.NF.set(a, d));
            d.set(b, c);
            this.gja++;
            return this;
          }
          clear() {
            this.NF.clear();
            this.gja = 0;
          }
          delete([a, b]) {
            const c = this.NF.get(a);
            if (c == null || !c.delete(b)) return !1;
            this.gja--;
            c.size === 0 && this.NF.delete(a);
            return !0;
          }
          forEach(a) {
            for (const [b, c] of this.NF) for (const [d, e] of c) a([b, d], e);
          }
          *[gjc]() {
            for (const [a, b] of this.NF)
              for (const [c, d] of b) yield [[a, c], d];
          }
          constructor() {
            this.gja = 0;
            this.NF = new Map();
          }
        };
        var ijc,
          jjc,
          kjc,
          ljc,
          mjc,
          njc,
          ojc,
          lic = __c.Gp("285688d5", !1),
          pjc,
          qjc = class extends t4 {
            render() {
              const { Mca: a, ...b } = this.props,
                c = this.props.sheet;
              return d4("div", {
                ref: this.D2a,
                className: e4(
                  "ZTz_iA",
                  c.direction === "ltr" ? "TA4X7w" : "WvuqMw"
                ),
                children: [
                  (a === null || a === void 0 ? void 0 : a.MKa) &&
                    b4(H4, {
                      ...b,
                      sheet: c,
                      range: a.MKa.range,
                      xw: !0,
                      yw: !0,
                      className: "_0C8M3w",
                    }),
                  (a === null || a === void 0 ? void 0 : a.Q6a) &&
                    b4(H4, {
                      ...b,
                      sheet: c,
                      range: a.Q6a.range,
                      xw: !1,
                      yw: !0,
                      className: "_7n44yg",
                    }),
                  (a === null || a === void 0 ? void 0 : a.cSa) &&
                    b4(H4, {
                      ...b,
                      sheet: c,
                      range: a.cSa.range,
                      xw: !0,
                      yw: !1,
                      className: "fF5r6w",
                    }),
                  (a === null || a === void 0 ? void 0 : a.H5a) &&
                    b4(H4, {
                      ...b,
                      sheet: c,
                      range: a.H5a.range,
                      xw: !1,
                      yw: !1,
                      className: "llILYw",
                    }),
                ],
              });
            }
            componentDidMount() {
              const a = n4(() => {
                var b = this.props,
                  c = b.da;
                b = b.sheet;
                const d = this.D2a.current;
                d &&
                  ((c = c ? c.get() : 1),
                  (d.style.width = `${b.width * c}px`),
                  (d.style.height = `${b.height * c}px`));
              });
              __c.Wb(this, [a]);
            }
            constructor(...a) {
              super(...a);
              this.D2a = Ws();
            }
          };
        ({
          c: [pjc, kjc],
        } = C4(qjc, [], [ec], t4));
        kjc();
        var H4;
        new ((ijc = class extends B4 {
          constructor() {
            super(H4);
            ljc();
          }
        }),
        (() => {
          class a extends (mjc = t4) {
            static D(b) {
              O(b, { KBa: o4, bounds: o4 });
            }
            get KBa() {
              const b = this.props.viewport,
                c = this.props.xw,
                d = this.props.yw;
              return b == null || (!c && !d)
                ? b
                : o4(() => {
                    const e = __c.uq(b.get());
                    return mq({
                      top: d ? 0 : e.top,
                      left: c ? 0 : e.left,
                      width: e.width,
                      height: e.height,
                    });
                  });
            }
            render() {
              const b = this.props.NO,
                c = this.props.sheet,
                d = this.props.container,
                e = this.props.range,
                f = this.props.JH,
                g = this.props.xw,
                h = this.props.yw;
              return d4("div", {
                ref: this.Fya,
                className: e4("i0YQww", this.props.className),
                children: [
                  b4("div", {
                    ref: this.eZa,
                    className: "vUKoKg",
                    children: b4("div", {
                      ref: this.fZa,
                      children: b4(I4, {
                        NO: b,
                        sheet: c,
                        container: d,
                        bounds: e,
                        Gp: this.props.Gp,
                        RD: this.props.RD,
                        Th: this.props.Th,
                        Y_: this.props.Y_,
                        da: this.props.da,
                        yh: this.yh,
                        G8: this.G8,
                        AT: this.AT,
                      }),
                    }),
                  }),
                  b4(this.fma, {}),
                  f && b4(f, { sheet: c, range: e, xw: g, yw: h }),
                ],
              });
            }
            componentDidMount() {
              const b = n4(() => {
                  var h = this.props,
                    k = h.da,
                    l = h.sheet;
                  const m = h.range;
                  var n = this.Fya.current;
                  const p = this.eZa.current;
                  h = this.fZa.current;
                  k = k ? k.get() : 1;
                  const q = m ? l.ra(m.Qc) + m.Qc.width - l.ra(m.$b) : l.width,
                    r = m ? l.qa(m.hd) + m.hd.height - l.qa(m.dc) : l.height;
                  n &&
                    ((n.style.width = `${q * k}px`),
                    (n.style.height = `${r * k}px`));
                  p &&
                    ((p.style.width = `${q * k}px`),
                    (p.style.height = `${r * k}px`));
                  n = l.direction === "rtl";
                  n = m ? l.ra(m.$b) * k * (n ? 1 : -1) : 0;
                  l = m ? -l.qa(m.dc) * k : 0;
                  h && (h.style.transform = `translate(${n}px, ${l}px)`);
                }),
                c = this.props.sheet;
              var d = this.props.f2;
              const e = this.props.xw,
                f = this.props.yw,
                g =
                  e || f
                    ? d === null || d === void 0
                      ? void 0
                      : d(c, e, f)
                    : void 0;
              d = n4(() => {
                const h = this.Fya.current;
                if (h != null) {
                  var k = e || f ? "sticky" : "relative",
                    l = f ? "0px" : "unset",
                    m = e ? "0px" : "unset",
                    n = e ? "0px" : "unset",
                    p = c.direction === "rtl";
                  if (g == null)
                    (h.style.position = k),
                      (h.style.top = l),
                      (h.style.left = p ? "unset" : m),
                      (h.style.right = p ? n : "unset");
                  else {
                    const x = g.get();
                    var q;
                    h.style.position =
                      (q = x.position) !== null && q !== void 0 ? q : k;
                    var r;
                    h.style.top = (r = x.top) !== null && r !== void 0 ? r : l;
                    var t;
                    h.style.left = p
                      ? "unset"
                      : (t = x.left) !== null && t !== void 0
                      ? t
                      : m;
                    var u;
                    h.style.right = p
                      ? (u = x.right) !== null && u !== void 0
                        ? u
                        : n
                      : "unset";
                    var v;
                    h.style.transform =
                      (v = x.transform) !== null && v !== void 0 ? v : "unset";
                  }
                }
              });
              __c.Wb(this, [b, d]);
            }
            get bounds() {
              const b = this.props.sheet,
                c = this.props.range;
              if (b.layout.cols.empty || b.layout.rows.empty)
                return { $b: void 0, Qc: void 0, dc: void 0, hd: void 0 };
              var d, e, f, g;
              return {
                $b:
                  (d = c === null || c === void 0 ? void 0 : c.$b) !== null &&
                  d !== void 0
                    ? d
                    : b.layout.cols.first(),
                Qc:
                  (e = c === null || c === void 0 ? void 0 : c.Qc) !== null &&
                  e !== void 0
                    ? e
                    : b.layout.cols.last(),
                dc:
                  (f = c === null || c === void 0 ? void 0 : c.dc) !== null &&
                  f !== void 0
                    ? f
                    : b.layout.rows.first(),
                hd:
                  (g = c === null || c === void 0 ? void 0 : c.hd) !== null &&
                  g !== void 0
                    ? g
                    : b.layout.rows.last(),
              };
            }
            constructor(...b) {
              super(...b);
              this.Fya = (H4.D(this), Ws());
              this.eZa = Ws();
              this.fZa = Ws();
              this.AT = new rjc();
              this.pBb = o4(
                () =>
                  [...this.yh.get().keys()].sort((c, d) =>
                    this.props.sheet.layout.rows.ue(c, d)
                  ),
                { equals: __c.Jn() }
              );
              this.nBb = o4(
                () =>
                  [...this.G8.get().keys()].sort((c, d) =>
                    this.props.sheet.layout.cols.ue(c, d)
                  ),
                { equals: __c.Jn() }
              );
              this.fma = h4(() =>
                b4(this.props.O9a, {
                  yh: this.pBb,
                  oBb: this.nBb,
                  jjb: this.AT.sjb,
                  range: this.props.range,
                })
              );
              this.yh = o4(
                () => {
                  var c;
                  const d = this.props.sheet;
                  var e = this.props.da,
                    f =
                      (c = this.KBa) === null || c === void 0
                        ? void 0
                        : c.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  c = this.bounds;
                  e = e.get();
                  var g = 50 * e;
                  const h = f ? f.ma.y - g : c.dc ? d.qa(c.dc) : 0;
                  f = f ? f.br.y + g : c.hd ? d.qa(c.hd) + c.hd.height : 0;
                  g = new Map();
                  for (
                    let k = c.dc;
                    k != null && c.hd != null && d.layout.rows.ue(k, c.hd) <= 0;
                    k = d.layout.rows.next(k)
                  ) {
                    const l = d.qa(k);
                    if (!(l + k.height < h)) {
                      if (l > f) break;
                      g.set(k, l * e);
                    }
                  }
                  return g;
                },
                { equals: x4.shallow }
              );
              this.G8 = o4(
                () => {
                  var c;
                  const d = this.props.sheet;
                  var e = this.props.da,
                    f =
                      (c = this.KBa) === null || c === void 0
                        ? void 0
                        : c.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  c = this.bounds;
                  e = e.get();
                  var g = 50 * e;
                  const h = f ? f.ma.x - g : c.$b ? d.ra(c.$b) : 0;
                  f = f ? f.br.x + g : c.Qc ? d.ra(c.Qc) + c.Qc.width : 0;
                  g = new Map();
                  for (
                    let k = c.$b;
                    k != null && c.Qc != null && d.layout.cols.ue(k, c.Qc) <= 0;
                    k = d.layout.cols.next(k)
                  ) {
                    const l = d.ra(k);
                    if (!(l + k.width < h)) {
                      if (l > f) break;
                      g.set(k, l * e);
                    }
                  }
                  return g;
                },
                { equals: x4.shallow }
              );
            }
          }
          ({
            c: [H4, ljc],
          } = C4(a, [], [ec], mjc));
        })(),
        ijc)();
        var rjc = class {
            constructor() {
              this.cells = new hjc();
              this.Oza = (a, b, c) => {
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = y4.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.sjb = (a, b) => {
                var c;
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = y4.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                return (c = d.get()) === null || c === void 0 ? void 0 : c.MMa;
              };
            }
          },
          I4;
        new ((jjc = class extends B4 {
          constructor() {
            super(I4);
            njc();
          }
        }),
        (() => {
          class a extends (ojc = t4) {
            static D(b) {
              O(b, { ZL: y4.shallow, Zq: o4, pKa: w4, Kaa: w4.bound });
            }
            get Zq() {
              var b;
              const c =
                (b = this.props.Gp) === null || b === void 0 ? void 0 : b.get();
              if (c != null && c.length !== 0) return new __c.ly(c);
            }
            render() {
              var b;
              return d4("div", {
                ref: xic(
                  this.sd,
                  (b = this.Zq) === null || b === void 0 ? void 0 : b.Em
                ),
                children: [
                  b4("div", { ref: this.fpa, className: "_5YlOqQ" }),
                  b4("div", { ref: this.hpa, className: "_XCmKw" }),
                  this.ZL.map((c) => c.iub),
                ],
              });
            }
            componentDidMount() {
              const b = p4(
                  () => [
                    this.props.sheet,
                    this.props.G8.get(),
                    this.props.yh.get(),
                  ],
                  ([e, f, g], h) => {
                    [h] = h || [];
                    e !== h && this.scb();
                    this.pKa(f, g);
                  },
                  { fireImmediately: !0 }
                ),
                c = n4(() => {
                  var e = this.props,
                    f = e.da;
                  e = e.sheet;
                  const g = this.sd.current;
                  g &&
                    ((f = f ? f.get() : 1),
                    (g.style.width = `${e.width * f}px`),
                    (g.style.height = `${e.height * f}px`));
                }),
                d = this.ZL.map((e) => mic(e));
              __c.Wb(this, [c, b, ...d]);
            }
            scb() {
              const b = B(this.fpa.current),
                c = B(this.hpa.current);
              b.innerHTML = "";
              c.innerHTML = "";
              this.EGa.length = 0;
              this.ZL.length = 0;
            }
            pKa(b, c) {
              const d = B(this.fpa.current),
                e = B(this.hpa.current),
                f = [],
                g = new Map();
              for (const h of this.EGa)
                c.has(h.pa) ? g.set(h.pa, h) : f.push(h);
              for (const [h, k] of c)
                (c = g.get(h) || f.pop()),
                  c ||
                    ((c = new sjc(this.Kaa, h)),
                    d.appendChild(c.P$),
                    e.appendChild(c.R$),
                    this.EGa.push(c)),
                  c.update(k, h, b);
              for (const h of f) h.hide();
            }
            Kaa(b, c) {
              const d = this.props.Y_,
                e = this.props.sheet,
                f = this.props.container,
                g = this.props.AT;
              b = new tjc(
                this.props.NO,
                this.props.RD,
                this.props.Th,
                d(b, c),
                e,
                b,
                c,
                f,
                g.Oza,
                this.eda,
                this.dda
              );
              __c.Wb(this, mic(b));
              this.ZL.push(b);
              return b;
            }
            constructor(...b) {
              super(...b);
              this.sd = (I4.D(this), Ws());
              this.fpa = Ws();
              this.hpa = Ws();
              this.EGa = [];
              this.ZL = [];
              this.eda = A4((c) => {
                const d = this.props.yh.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
              this.dda = A4((c) => {
                const d = this.props.G8.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
            }
          }
          ({
            c: [I4, njc],
          } = C4(a, [], [ec], ojc));
        })(),
        jjc)();
        var sjc = class {
            static D(a) {
              O(a, { update: w4 });
            }
            update(a, b, c) {
              [this.P$, this.R$].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.pa = b;
              for (const [d] of c)
                (c = this.ZL.get(d)),
                  c ||
                    ((c = this.Kaa(d, b)),
                    this.ZL.set(d, c),
                    this.P$.appendChild(c.O$),
                    this.R$.appendChild(c.NM)),
                  c.update(b);
            }
            hide() {
              [this.P$, this.R$].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              this.Kaa = a;
              this.pa = b;
              this.P$ = (sjc.D(this), document.createElement("div"));
              this.R$ = document.createElement("div");
              this.ZL = new Map();
            }
          },
          tjc = class {
            static D(a) {
              O(a, {
                Baa: y4.ref,
                pa: y4.ref,
                Pta: o4,
                update: w4,
                eu: o4,
                attrs: o4.struct,
                mva: o4,
                iw: o4,
                renderer: o4,
                MMa: o4.struct,
              });
            }
            get Pta() {
              if (!lic) return !1;
              const a = this.eu;
              return a == null ||
                a.content.ref == null ||
                a.content.ref.type !== "formula"
                ? !1
                : this.NO(this.sheet, a.content.ref.value);
            }
            update(a) {
              a !== this.pa &&
                ((this.pa = a),
                (this.uA.pa = a),
                this.jra && this.jra(),
                (this.jra = this.Oza(this.pa, this.col, this)));
            }
            get iub() {
              return this.Baa;
            }
            get eu() {
              const a = this.sheet.layout.cells.get(this.pa, this.col);
              return a ? a.ref : void 0;
            }
            get attrs() {
              const a = this.uA.attrs;
              return {
                Yg: a === null || a === void 0 ? void 0 : a.Yg,
                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                direction: a === null || a === void 0 ? void 0 : a.direction,
                link: a === null || a === void 0 ? void 0 : a.link,
              };
            }
            get mva() {
              var a = this.uA.span;
              if (!a) return !1;
              if (a.dc === a.hd && a.$b === a.Qc) return !0;
              var b = this.eda("first");
              const c = this.eda("last"),
                d = this.dda("first"),
                e = this.dda("last");
              if (!(b && c && d && e)) return !1;
              b =
                this.sheet.layout.rows.ue(a.dc, b) >= 0 &&
                this.sheet.layout.rows.ue(a.dc, c) <= 0
                  ? a.dc
                  : b;
              a =
                this.sheet.layout.cols.ue(a.$b, d) >= 0 &&
                this.sheet.layout.cols.ue(a.$b, e) <= 0
                  ? a.$b
                  : d;
              return b === this.pa && a === this.col;
            }
            get iw() {
              const a = this.sheet,
                b = this.pa,
                c = this.col;
              if (!this.container)
                return { type: void 0, sheet: a, pa: b, column: c };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.stb.jd(c, b);
                case "sheet-item":
                  return this.container.JBa.jd(c, b);
                case "sheet-element":
                  return this.container.Dxb.jd(c, b);
                default:
                  throw new E(this.container);
              }
            }
            get renderer() {
              const a = this.eu;
              if (a && this.mva && (a.content.ref || a.Ea.ref))
                return this.RD({
                  context: { container: this.iw, attrs: this.attrs },
                  Up: this.vxa,
                  Th: this.Th,
                });
            }
            get MMa() {
              this.NMa.reportObserved();
              var a = uic(() => this.renderer);
              if (
                a &&
                ((a = a.type === "react" ? this.H5 : this.EE),
                a.childNodes.length !== 0 &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            constructor(a, b, c, d, e, f, g, h, k, l, m) {
              var n, p, q, r, t, u;
              this.NO = a;
              this.RD = b;
              this.uA = d;
              this.sheet = e;
              this.col = f;
              this.container = h;
              this.Oza = k;
              this.eda = l;
              this.dda = m;
              this.O$ = (tjc.D(this), document.createElement("div"));
              this.NM = document.createElement("div");
              this.zE = document.createElement("div");
              this.EE = document.createElement("div");
              this.H5 = document.createElement("div");
              this.NMa = tic("content size atom");
              this.vxa = w4(() => this.NMa.reportChanged());
              this.pa = g;
              this.O$.className = "_2JFriw";
              this.NM.className = "imy9ug";
              this.zE.className = e4("pDMp7w", {
                _0yZ6Qg:
                  ((p = this.eu) === null || p === void 0
                    ? void 0
                    : (n = p.content.ref) === null || n === void 0
                    ? void 0
                    : n.type) !== "text3",
                qhF5uA:
                  ((r = this.eu) === null || r === void 0
                    ? void 0
                    : (q = r.content.ref) === null || q === void 0
                    ? void 0
                    : q.type) !== "text3" &&
                  ((u = this.eu) === null || u === void 0
                    ? void 0
                    : (t = u.content.ref) === null || t === void 0
                    ? void 0
                    : t.type) !== "text2",
                qxD1GA: this.Pta,
              });
              this.EE.className = "_30B9pw";
              this.zE.appendChild(this.EE);
              this.NM.appendChild(this.zE);
              this.H5.className = "G7zH2w";
              this.jra = k(this.pa, this.col, this);
              this.Th = (v) => b4(c, { ...v, Up: this.vxa });
            }
          };
        var ujc, vjc, wjc, q4;
        new ((ujc = class extends B4 {
          constructor() {
            super(q4);
            vjc();
          }
        }),
        (() => {
          class a extends (wjc = t4) {
            static D(b) {
              O(b, { Mca: o4 });
            }
            render() {
              const {
                NO: b,
                sheet: c,
                container: d,
                Gp: e,
                f2: f,
                RD: g,
                Ee: h,
                Th: k,
                viewport: l,
                JH: m,
                F6a: n = !1,
              } = this.props;
              if (!c.layout.cols.empty && !c.layout.rows.empty)
                return b4("div", {
                  className: e4(
                    "SNkrHw",
                    c.direction === "ltr" ? "TA4X7w" : "WvuqMw",
                    { RaA0Nw: n }
                  ),
                  ...h,
                  children: b4(pjc, {
                    NO: b,
                    RD: g,
                    Th: k,
                    O9a: this.fma,
                    Y_: this.Y_,
                    sheet: c,
                    container: d,
                    Gp: e,
                    f2: f,
                    da: this.da,
                    viewport: l,
                    JH: m,
                    Mca: this.Mca,
                  }),
                });
            }
            get Mca() {
              var b = this.props.sheet;
              const c = {},
                d = b.view.freeze.iX
                  ? b.layout.Yd.get(b.view.freeze.iX)
                  : void 0,
                e = b.view.freeze.lI
                  ? b.layout.Qd.get(b.view.freeze.lI)
                  : void 0,
                f = b.layout.rows.first(),
                g = b.layout.rows.last(),
                h = b.layout.cols.first(),
                k = b.layout.cols.last();
              if (f != null && g != null && h != null && k != null) {
                var l = e ? b.layout.cols.next(e) : h;
                b = d ? b.layout.rows.next(d) : f;
                d && e && (c.MKa = { range: { $b: h, dc: f, Qc: e, hd: d } });
                d && l && (c.Q6a = { range: { $b: l, dc: f, Qc: k, hd: d } });
                e && b && (c.cSa = { range: { $b: h, dc: b, Qc: e, hd: g } });
                b && l && (c.H5a = { range: { $b: l, dc: b, Qc: k, hd: g } });
                return c;
              }
            }
            get da() {
              return this.props.da ? this.props.da : o4(() => 1);
            }
            constructor(...b) {
              super(...b);
              this.fma =
                (q4.D(this),
                h4((c) => {
                  const {
                    sheet: d,
                    Lua: e,
                    da: f,
                    s$: g = "hidden",
                  } = this.props;
                  return b4(E4, {
                    sheet: d,
                    range: c.range,
                    da: f,
                    children: b4(fjc, {
                      ...c,
                      sheet: d,
                      da: this.da,
                      Lua: e,
                      overflow: g,
                    }),
                  });
                }));
              this.Y_ = (c, d) =>
                new __c.OOa(
                  this.props.sD,
                  this.props.mA,
                  this.props.sheet,
                  c,
                  d,
                  this.da,
                  this.Bu,
                  this.Du
                );
              this.Bu = (c, d) => {
                var e, f;
                return (e = (f = this.props).Bu) === null || e === void 0
                  ? void 0
                  : e.call(f, this.props.sheet, c, d);
              };
              this.Du = (c, d) => {
                var e, f;
                return (e = (f = this.props).Du) === null || e === void 0
                  ? void 0
                  : e.call(f, this.props.sheet, c, d);
              };
            }
          }
          ({
            c: [q4, vjc],
          } = C4(a, [], [ec], wjc));
        })(),
        ujc)();
        __c.VOa = {
          Vlb: function (a) {
            const b = a.zu,
              c = a.Id,
              d = a.Cd,
              e = a.Cm,
              f = a.sD,
              g = a.mA,
              h = a.gZ;
            Thc({ kA: a.kA, zf: a.zf, lzb: a.qQ, $a: a.$a });
            const k = oic({ RD: h, sD: f, mA: g, Yy: void 0 });
            b.Ama = iic({ tq: k });
            c.gma = Zhc({ tq: k });
            ({ S9a: a } = fic({ tq: k, Ce: e(), A2a: new Zic() }));
            d.lp.zma = a;
            const { R7a: l, S7a: m, Q7a: n } = Yhc();
            return {
              xIa: h4((p) =>
                b4(zic, {
                  ...p,
                  container: void 0,
                  tq: k,
                  R9a: l,
                  T9a: m,
                  P9a: n,
                  Th: Aic,
                })
              ),
            };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/eb7a3ca12da5bdc3.js.map
