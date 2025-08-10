(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [41990],
  {
    /***/ 796909: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(131662);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var E = __c.E;
        var z = __c.z;
        var Cjc = function (a, b, c, d) {
            c = new Bjc(c, d);
            z(a.count() === 1, "Only single widget root element is supported");
            a = a.first();
            z(
              a != null && a.type === "layout",
              `Unexpected widget root found: ${
                a === null || a === void 0 ? void 0 : a.type
              }`
            );
            c.cla(a, b);
          },
          Ejc = function (a) {
            return {
              ...__c.GP,
              ...J4,
              top: 0,
              left: 0,
              width: a.width,
              height: a.height,
              viewBox: {
                top: 0,
                left: 0,
                width: a.Xka.width,
                height: a.Xka.height,
              },
              lb: a.lb.map(Djc),
            };
          },
          Fjc = function (a) {
            switch (a.CD) {
              case 0:
                var b = __c.Ki.Db().attrs({
                  "font-size": a.fontSize,
                  leading: a.lineHeight ? a.lineHeight * 1e3 : void 0,
                  "text-align": a.textAlign || "start",
                  "font-weight": a.fontWeight,
                  "font-family": a.fontFamily,
                  "font-kerning": "normal",
                  "font-feature-liga": "on",
                  "font-feature-clig": "on",
                  "font-feature-calt": "on",
                  direction: a.direction,
                });
                a.color && b.Fe("color", a.color);
                b = b
                  .ub(a.text.endsWith("\n") ? a.text : `${a.text}\n`)
                  .build();
                var c;
                return {
                  ...__c.xH,
                  ...K4,
                  ...J4,
                  Aa: (c = a.Aa) !== null && c !== void 0 ? c : 0,
                  text: b,
                  Cg: 2,
                };
              case 1:
                return (
                  (b = a.text), { ...__c.xH, ...K4, ...J4, text: b, Cg: 2 }
                );
              default:
                throw new E(a);
            }
          },
          O4 = function ({ content: a, fill: b, border: c, U: d }) {
            b = { ...__c.Gtb, fill: L4(b), border: M4(c), U: N4(d) };
            switch (a.type) {
              case "shape":
                return { ...b, element: Ejc(a) };
              case "text":
                return { ...b, element: Fjc(a) };
              case "layout":
                return { ...b, element: Gjc(a) };
              default:
                throw new E(a);
            }
          },
          Gjc = function ({
            cells: a,
            border: b,
            fill: c,
            U: d,
            gridTemplateColumns: e,
            gridTemplateRows: f,
            columnGap: g,
            rowGap: h,
          }) {
            return {
              ...__c.Htb,
              ...K4,
              ...J4,
              N: K4.width,
              Z: K4.height,
              fill: L4(c),
              border: M4(b),
              direction: 1,
              U: N4(d),
              cells: new Map(a.map((k) => [k.id, O4(k)])),
              behavior: {
                rules: [
                  {
                    Vg: void 0,
                    grid: {
                      gridTemplateColumns: e,
                      gridTemplateRows: f,
                      columnGap: g !== null && g !== void 0 ? g : 0,
                      rowGap: h !== null && h !== void 0 ? h : 0,
                      oh: Hjc(a),
                    },
                  },
                ],
              },
              rd: void 0,
            };
          },
          Hjc = function (a) {
            return new Map(a.map((b) => [b.id, Ijc(b)]));
          },
          Ijc = function (a) {
            const b = a.placement.padding;
            return {
              ...__c.ZDa,
              ...a.placement,
              alignSelf: "center",
              padding: {
                ...__c.EP,
                ...(b != null ? (typeof b === "number" ? { all: b } : b) : {}),
              },
            };
          },
          M4 = function (a) {
            var b;
            const c =
              (b = a === null || a === void 0 ? void 0 : a.color) !== null &&
              b !== void 0
                ? b
                : "#000000";
            var d;
            return {
              ...__c.$x,
              all: a
                ? {
                    ...__c.tP,
                    weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                    color: c,
                    Je: !0,
                  }
                : void 0,
            };
          },
          N4 = function (a) {
            return {
              ...__c.DP,
              ...(a != null ? (typeof a === "number" ? { all: a } : a) : {}),
            };
          },
          Djc = function (a) {
            return {
              ...__c.Vtb,
              ...a,
              fill: L4(a.fill),
              stroke: Jjc(a.stroke),
            };
          },
          Jjc = function (a) {
            return a ? { ...__c.tP, color: a.color, weight: a.weight } : void 0;
          },
          L4 = function (a) {
            var b;
            const c = {
              ...__c.pE,
              Aa:
                (b = a === null || a === void 0 ? void 0 : a.Aa) !== null &&
                b !== void 0
                  ? b
                  : 0,
            };
            switch (a === null || a === void 0 ? void 0 : a.type) {
              case "color":
                return { ...c, color: a.color };
              case "gradient":
                return { ...c, Wa: a.Wa };
              case void 0:
                return c;
              default:
                throw new E(a);
            }
          },
          Pjc = function (a, b) {
            const c = new Map(b.cells.map((e) => [e.id, e]));
            Kjc(
              a.cells,
              c,
              (e, f) => {
                let g = !1;
                Ljc(e.element, f.content, () => {
                  a.cells.delete(f.id);
                  a.cells.set(f.id, O4(f));
                  g = !0;
                });
                g ||
                  (P4(e.fill, f.fill), Mjc(e.border, f.border), Njc(e.U, f.U));
              },
              (e) => O4(e)
            );
            Ojc(a.behavior, b, c);
            P4(a.fill, b.fill);
            Njc(a.U, b.U);
            Mjc(a.border, b.border);
            var d;
            a.Aa = (d = b.Aa) !== null && d !== void 0 ? d : 0;
          },
          Ojc = function (a, b, c) {
            Q4(
              a.rules,
              [b],
              (d) => {
                Qjc(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                  (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                Qjc(d.grid.gridTemplateRows, b.gridTemplateRows) ||
                  (d.grid.gridTemplateRows = b.gridTemplateRows);
                var e;
                d.grid.columnGap =
                  (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                var f;
                d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                Kjc(
                  d.grid.oh,
                  c,
                  (g, h) => {
                    const k = h.placement.padding,
                      l = h.placement.gridColumnEnd,
                      m = h.placement.gridRowStart,
                      n = h.placement.gridRowEnd,
                      p = h.placement.alignSelf;
                    g.gridColumnStart = h.placement.gridColumnStart;
                    g.gridColumnEnd = l;
                    g.gridRowStart = m;
                    g.gridRowEnd = n;
                    typeof k === "number" && g.padding.all !== k
                      ? (g.padding.all = k)
                      : typeof k !== "number" &&
                        ((g.padding.qa =
                          k === null || k === void 0 ? void 0 : k.qa),
                        (g.padding.Da =
                          k === null || k === void 0 ? void 0 : k.Da),
                        (g.padding.ra =
                          k === null || k === void 0 ? void 0 : k.ra),
                        (g.padding.Ja =
                          k === null || k === void 0 ? void 0 : k.Ja));
                    g.alignSelf = p;
                  },
                  (g) => Ijc(g)
                );
              },
              (d) => {
                var e, f;
                return {
                  Vg: void 0,
                  grid: {
                    gridTemplateColumns: b.gridTemplateColumns,
                    gridTemplateRows: b.gridTemplateRows,
                    columnGap:
                      (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                    oh: Hjc(d.cells),
                  },
                };
              }
            );
          },
          Rjc = function (a, b) {
            Q4(
              a.lb,
              b.lb,
              (e, f) => {
                e.d = f.d;
                P4(e.fill, f.fill);
                e.stroke.ref && f.stroke
                  ? ((e = e.stroke.ref),
                    (f = f.stroke),
                    (e.color = f.color),
                    (e.weight = f.weight))
                  : e.stroke.set(Jjc(f.stroke));
              },
              (e) => Djc(e)
            );
            const { viewBox: c, width: d } = Ejc(b);
            a.width = d;
            __c.mq(a.viewBox).equals(__c.mq(c)) || (a.viewBox = c);
          },
          Ljc = function (a, b, c) {
            switch (b.type) {
              case "shape":
                a.type === "shape" ? Rjc(a, b) : c();
                break;
              case "text":
                (a.type === "text" &&
                  __c.Ki.domain.Ub(__c.Ki.ba(a.text), Fjc(b).text)) ||
                  c();
                break;
              case "layout":
                a.type === "layout" ? Pjc(a, b) : c();
                break;
              default:
                throw new E(b);
            }
          },
          Kjc = function (a, b, c, d) {
            const e = new Set(a.keys());
            for (const [f, g] of b)
              (b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
            e.forEach((f) => a.delete(f));
          },
          Q4 = function (a, b, c, d) {
            const e = a.toArray();
            for (let f = 0; f < Math.max(e.length, b.length); f++)
              if (f < e.length && f < b.length) c(e[f], b[f]);
              else if (f < e.length && f >= b.length) a.delete(e[f]);
              else if (f >= e.length && f < b.length) {
                const g = d(b[f]);
                a.append(g);
              }
          },
          P4 = function (a, b) {
            switch (b === null || b === void 0 ? void 0 : b.type) {
              case "color":
                a.color = b.color;
                a.Wa.set(void 0);
                var c;
                a.Aa = (c = b.Aa) !== null && c !== void 0 ? c : 0;
                break;
              case "gradient":
                if (a.Wa.ref && __c.Ldb.domain.Ub(a.Wa.ref, b.Wa)) break;
                a.color = void 0;
                a.Wa.set(b.Wa);
                var d;
                a.Aa = (d = b.Aa) !== null && d !== void 0 ? d : 0;
                break;
              default:
                (a.color = void 0), a.Wa.set(void 0);
            }
          },
          Njc = function (a, b) {
            b = N4(b);
            a.all = b.all;
            a.lB = b.lB;
            a.jB = b.jB;
            a.kB = b.kB;
            a.hB = b.hB;
          },
          Mjc = function (a, b) {
            b = M4(b).all;
            var c;
            if ((c = b))
              (c = a.all.ref),
                (c = !(c && b ? __c.ay.domain.Ub(__c.ay.ba(c), b) : !c && !b));
            c && a.all.set(b);
          },
          Qjc = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          Tjc = function (a, b, c, d) {
            let e = a.b0a.get(b);
            if (e) return e;
            e = {
              zy: new Sjc(c.wt, b, d, c.tua),
              gKa: void 0,
              MUa: void 0,
              LWa: __c.EU.mode,
            };
            a.b0a.set(b, e);
            return e;
          },
          Vjc = function (a, b, c, d, e) {
            var f, g;
            e = Tjc(a, c, b, e);
            const h = e.zy,
              k = e.MUa,
              l = e.gKa,
              m = e.LWa;
            c = __c.NO.ba(c);
            const n =
              ((f = (g = a.LA).Ata) === null || f === void 0
                ? void 0
                : f.call(g, d)) || __c.EU;
            (h.ik === k && Ujc.structural(c, l) && n.mode === m) ||
              ((e.gKa = c),
              (e.MUa = h.ik),
              (e.LWa = n.mode),
              (b = b.render(h, n)),
              a.jqb.update(d, b),
              Cjc(
                d,
                b,
                (p, q) => a.CR.Iua.set(p, q),
                (p, q, r) => a.CR.refs.set(p, { ref: q, key: r })
              ));
          },
          Yjc = function (a, b) {
            const c = [],
              d = () => c.forEach((e) => e());
            c.push(a.crb());
            c.push(
              Wjc(
                () => {
                  a: {
                    var e = new Xjc();
                    for (const f of b)
                      if ((e.FR(f), e.wsa)) {
                        e = e.wsa;
                        break a;
                      }
                    e = void 0;
                  }
                  return e && (a.Yb.isLoaded(e) || a.Eva.has(e));
                },
                (e) => {
                  if (e) {
                    for (const f of b) z(f.type === "layout"), a.$k.Mha(f);
                    d();
                  }
                }
              )
            );
            return d;
          },
          Zjc = function (a, b) {
            return {
              AB: ({ Re: c }) => {
                var d;
                const { zy: e } = Tjc(a.renderer, c, b, a.g4),
                  f = __c.cqb.create([]),
                  g = [];
                g.push(Yjc(a.qib, f));
                g.push(
                  Wjc(
                    () => {
                      var k, l;
                      return [
                        (k = (l = a.LA).Ata) === null || k === void 0
                          ? void 0
                          : k.call(l, f),
                        __c.NO.ba(c),
                        e.ik,
                      ];
                    },
                    () => {
                      Vjc(a.renderer, b, c, f, a.g4);
                    },
                    { fireImmediately: !0, equals: Ujc.structural }
                  )
                );
                const h =
                  (d = b.nxa) === null || d === void 0
                    ? void 0
                    : d.call(b, { zy: e });
                h && g.push(h);
                return {
                  Oa: f,
                  Vp: () => {
                    g.forEach((k) => k());
                  },
                };
              },
            };
          },
          R4 = __webpack_require__(400770),
          Ujc = R4.comparer,
          $jc = R4.computed,
          S4 = R4.observable,
          Wjc = R4.reaction,
          akc = R4.runInAction;
        var bkc = class {
          static D(a) {
            __c.O(a, { Psb: S4.ref, Jjb: S4.ref });
          }
          constructor() {
            this.Ata = (bkc.D(this), void 0);
          }
        };
        var ckc = class {
            constructor() {
              this.sources = new WeakMap();
            }
          },
          Sjc = class {
            static D(a) {
              __c.O(a, { $e: $jc });
            }
            get NUa() {
              var a = this.g4,
                b = this.Re,
                c = this.tua;
              let d = a.sources.get(b);
              d || ((d = S4.box(c)), a.sources.set(b, d));
              return d;
            }
            get ik() {
              return this.NUa.get();
            }
            get $e() {
              return this.wt.It({ type: "dict", value: this.Re });
            }
            Dm(a) {
              this.NUa.set(
                a instanceof Function
                  ? { ...this.ik, ...a() }
                  : { ...this.ik, ...a }
              );
            }
            constructor(a, b, c, d) {
              this.wt = a;
              this.Re = b;
              this.g4 = c;
              this.tua = d;
              Sjc.D(this);
            }
          };
        var Bjc = class {
          K8(a, b) {
            this.Q_a(a, b);
            b.ref && this.Pza(a, b.ref, b.key);
          }
          MY(a, b) {
            b.ref && this.Pza(a.text, b.ref, b.key);
          }
          RGa(a, b) {
            switch (b.content.type) {
              case "shape":
                z(a.element.type === "shape");
                this.K8(a.element, b.content);
                break;
              case "text":
                z(a.element.type === "text");
                this.MY(a.element, b.content);
                break;
              case "layout":
                z(a.element.type === "layout");
                this.cla(a.element, b.content);
                break;
              default:
                throw new E(b.content);
            }
          }
          cla(a, b) {
            this.Q_a(a, b);
            b.ref && this.Pza(a, b.ref, b.key);
            for (const [c, d] of a.cells)
              (a = b.cells.find((e) => e.id === c)),
                z(!!d && !!a),
                this.RGa(d, a);
          }
          constructor(a, b) {
            this.Q_a = a;
            this.Pza = b;
          }
        };
        var J4 = { locked: !0, oi: __c.bga, Jh: !0 },
          K4 = { top: 0, left: 0, width: 1, height: 1 };
        var dkc = class {
          constructor(a) {
            this.$k = a;
            this.update = (b, c) => {
              Q4(
                b,
                [c],
                (d, e) => {
                  switch (d.type) {
                    case "layout":
                      Pjc(d, e);
                      break;
                    default:
                      throw Error(`Not supported element type: ${d.type}`);
                  }
                },
                (d) => {
                  a: switch (d.type) {
                    case "layout":
                      d = {
                        ...Gjc(d),
                        ...J4,
                        width: d.minWidth,
                        height: d.minHeight,
                        N: d.minWidth,
                        Z: d.minHeight,
                      };
                      break a;
                    default:
                      throw new E(d.type);
                  }
                  return d;
                }
              );
              for (const d of b)
                z(d.type === "layout"),
                  (d.width = c.minWidth),
                  (d.height = c.minHeight),
                  (d.N = c.minWidth),
                  (d.Z = c.minHeight),
                  c.direction && (d.direction = c.direction),
                  this.$k.Mha(d);
            };
          }
        };
        var ekc = class {
          constructor(a, b, c) {
            this.jqb = a;
            this.CR = b;
            this.LA = c;
            this.b0a = new WeakMap();
          }
        };
        var fkc = class {
            static D(a) {
              __c.O(a, { Eva: S4.shallow });
            }
            constructor(a, b) {
              this.Yb = a;
              this.$k = b;
              this.Eva = (fkc.D(this), new Set());
              this.Fsa = new Set();
              this.crb = () => {
                this.Aca ||
                  (this.Aca = __c.boa(this.Yb).subscribe((d) => {
                    akc(() => {
                      this.Eva.add(d.id);
                    });
                  }));
                const c = Symbol();
                this.Fsa.add(c);
                return () => {
                  this.Fsa.delete(c);
                  this.Fsa.size <= 0 &&
                    this.Aca &&
                    (this.Aca.unsubscribe(), (this.Aca = void 0));
                };
              };
            }
          },
          Xjc = class extends __c.np {
            FR(a, b) {
              this.wsa || super.FR(a, b);
            }
            MY(a) {
              this.wsa =
                (a = a.text
                  .sh("font-family")
                  ["font-family"].values()
                  .next().value) && __c.io(a).id;
            }
          };
        var gkc = !1,
          hkc = class {
            register(a, b) {
              this.DE.has(a) ||
                (this.DE.set(a, b),
                this.gfb || gkc || (__c.OO.set(a, Zjc(this, b)), (gkc = !0)));
            }
            get(a) {
              return this.DE.get(a);
            }
            constructor(a, b, c, d, e) {
              this.renderer = a;
              this.g4 = b;
              this.LA = c;
              this.Yb = d;
              this.$k = e;
              this.DE = new Map();
              this.gfb = __c.Gp("f576b13d", !1);
              this.qib = new fkc(this.Yb, this.$k);
            }
          };
        var ikc = class {
            constructor() {
              this.Iua = new __c.Uz();
              this.refs = new __c.Uz();
            }
          },
          jkc = class {
            getContext(a) {
              return this.CR.refs.get(a);
            }
            dO(a) {
              return this.CR.Iua.get(a);
            }
            constructor(a, b, c) {
              this.CR = a;
              this.g4 = b;
              this.renderer = c;
            }
          };
        __c.xRa = {
          bmb: function (a) {
            const b = new bkc(),
              c = new ikc(),
              d = new ekc(new dkc(a.$k), c, b),
              e = new ckc();
            a = new hkc(d, e, b, a.Yb, a.$k);
            return { LA: b, qVb: new jkc(c, e, d), L8: a, CR: c };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/dbaf8b618c5aa9da.js.map
