(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [75067],
  {
    /***/ 711112: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(635048);
      __web_req__(744054);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var B = __c.B;
        var O = __c.O;
        var Tc = __c.Tc;
        var E = __c.E;
        var w = __c.w;
        var Je = __c.Je;
        var Inc = function (a, b, c) {
            return new Hnc(a, b, c);
          },
          Jnc = function (a) {
            var b = { element: void 0 };
            const c = new Map();
            for (const d in b) a[d].cN.forEach((e, f) => c.set(f, e));
            return {
              cN: c,
              decode: (d) => {
                const e = new Map(),
                  f = {};
                for (const g in d) {
                  const h = a[g].decode(d[g]);
                  h.uAa.forEach((k, l) => e.set(l, k));
                  f[g] = h.data;
                }
                return { uAa: e, data: f };
              },
              encode: (d) => Je(b, (e, f) => a[f].encode(d[f])),
            };
          },
          Knc = function (a) {
            return () => a;
          },
          Lnc = function (a) {
            return a();
          },
          V5 = function (a, b, c) {
            return new U5([a], b, c);
          },
          W5 = function (a, b, c, d) {
            return new U5([a, b], c, d);
          },
          X5 = function (a, b, c, d) {
            return new Mnc(a, b, c, d);
          },
          Nnc = function (a, b) {
            return b(a);
          },
          Y5 = function (a, b) {
            return a === b || b.map((c) => a.Nua(Onc(c)));
          },
          Qnc = function (a, b) {
            return a.Owa(b).map((c) => new Pnc(c, (d) => d.props[b]));
          },
          Onc = function (a) {
            w(a instanceof Z5);
            return a;
          },
          $5 = function (a) {
            const b = new WeakMap();
            return function (c) {
              let d = b.get(c);
              d == null && ((d = a.call(this, c)), b.set(c, d));
              return d;
            };
          },
          b6 = function (a, b) {
            if (a === b) return !0;
            switch (typeof a) {
              case "string":
              case "number":
              case "boolean":
              case "undefined":
                return !1;
              case "object":
                if (typeof b !== "object" || a.kind !== b.kind) return !1;
                switch (a.kind) {
                  case "array":
                    return b.kind === "array" && a6(a.items, b.items);
                  case "set":
                    var c;
                    if ((c = b.kind === "set"))
                      (a = a.items),
                        (b = b.items),
                        (c =
                          a === b
                            ? !0
                            : a.size !== b.size
                            ? !1
                            : a6([...a], [...b]));
                    return c;
                  case "map":
                    if ((c = b.kind === "map"))
                      (a = a.items),
                        (b = b.items),
                        (c =
                          a === b
                            ? !0
                            : a.size !== b.size
                            ? !1
                            : a6(
                                [...a.keys(), ...a.values()],
                                [...b.keys(), ...b.values()]
                              ));
                    return c;
                  case "record":
                    return b.kind === "record" && Rnc(a.fields, b.fields);
                  case "instance":
                    return b.kind === "instance" && a.instance === b.instance;
                  default:
                    throw new E(a);
                }
              default:
                throw new E(a);
            }
          },
          a6 = function (a, b) {
            if (a === b) return !0;
            if (a.length !== b.length) return !1;
            for (let c = 0; c < a.length; c++) if (!b6(a[c], b[c])) return !1;
            return !0;
          },
          Rnc = function (a, b) {
            if (a === b) return !0;
            const c = Object.keys(a),
              d = Object.keys(b),
              e = new Set([...c, ...d]);
            if (c.length !== e.size || d.length !== e.size) return !1;
            for (const f of e) if (!b6(a[f], b[f])) return !1;
            return !0;
          },
          c6 = function (a) {
            return typeof a === "string" ? JSON.stringify(a) : String(a);
          },
          Tnc = function (a, b) {
            return a.map((c) => b.map((d) => Snc[0](c, d)));
          },
          Vnc = function (a, b, c) {
            return b.map((d) => Unc[a](d, c));
          },
          Wnc = function (a, b) {
            return new d6(new e6(new Map(b), a.vars), a.U1);
          },
          Ync = function (a, b, c) {
            for (const [e, f] of c.U1) {
              var d = f.sb.map(([g, h]) => [g, a.types.evaluate(h)]);
              d = Xnc(b, d, (g) => f6(a, g, f.body));
              b = new d6(b.vars, b.U1.define(e, d));
            }
            return f6(a, b, c.body);
          },
          f6 = function (a, b, c) {
            switch (c.kind) {
              case 1:
                return Znc(c.value);
              case 2:
                const f = c.args.map((q) => f6(a, b, q));
                c = c.name;
                return typeof c === "string"
                  ? b.U1.resolve(c).map((q) => $nc(q, f))
                  : aoc[c].map((q) => g6(q, f));
              case 3:
                const g = c.args.map((q) =>
                  q.kind !== 13
                    ? new boc(f6(a, b, q))
                    : new coc(f6(a, b, q.XMb))
                );
                c = c.name;
                switch (c) {
                  case 0:
                  case 1:
                    var d = g.map((q) =>
                      q.zsa(
                        (r) => r.type,
                        (r) => r.type.TO()
                      )
                    );
                    return h6
                      .union(...d)
                      .map(doc[c])
                      .map((q) => eoc(q, g));
                  default:
                    return foc[c].map((q) => eoc(q, g));
                }
              case 4:
                d = c.name;
                var e = c.param;
                const h = c.body,
                  k = f6(a, b, c.qT);
                c = k.type.TO();
                const l = Xnc(b, [[e, c]], (q) => f6(a, q, h));
                return Vnc(d, c, l.resultType).map((q) => goc(q, k, l));
              case 5:
                const m = c.entries.map(([q, r]) => [f6(a, b, q), f6(a, b, r)]);
                c = h6.union(...m.map(([q]) => q.type));
                d = h6.union(...m.map(([, q]) => q.type));
                if (!Y5(c, h6.primitive))
                  throw Error(`key type is not a primitive: ${c}`);
                return Tnc(c, d).map((q) => hoc(q, m));
              case 6:
                const n = Je(c.fields, (q) => f6(a, b, q));
                c = Je(n, (q) => q.type);
                return (0, ioc[0])(c).map((q) => joc(q, n));
              case 7:
                d = a.types.resolve(c.name);
                if (!d)
                  throw Error(`cannot instantiate unknown type: ${c.name}`);
                const p = f6(a, b, { kind: 6, fields: c.args });
                return d.Cqb.map((q) => g6(q, [p], { Sp: !0 }));
              case 8:
                return (d = f6(a, b, c.base)), koc(d, c.lRb);
              case 9:
                return loc(b, c.name);
              case 10:
                return (
                  (d = Tc(c.defs, (q) => f6(a, b, q))), moc(a, b, d, c.body)
                );
              case 11:
                return (
                  (d = f6(a, b, c.test).as(h6.Bh)),
                  (e = f6(a, b, c.yGb)),
                  (c = f6(a, b, c.alternate)),
                  noc(d, e, c)
                );
              case 12:
                return f6(a, b, c.body).computed();
              default:
                throw new E(c);
            }
          },
          Znc = function (a) {
            switch (typeof a) {
              case "string":
                return i6(h6.string, a);
              case "number":
                return i6(h6.number, a);
              case "boolean":
                return i6(h6.Bh, a);
              case "undefined":
                return i6(h6.undefined, a);
              default:
                throw new E(a);
            }
          },
          koc = function (a, b) {
            return a.map((c) =>
              Qnc(c, b).map(({ type: d, get: e }) => g6(new U5([c], d, e), [a]))
            );
          },
          loc = function (a, b) {
            return a.vars.resolve(b).map((c) => j6.of(c, (d) => d.resolve(b)));
          },
          moc = function (a, b, c, d) {
            const e = Tc(c, (g) => g.type),
              f = Tc(c, (g) => g.evaluate);
            return ooc(f6(a, Wnc(b, e), d), (g) => {
              const h = Tc(f, (k) => k(g));
              return new e6(new Map(h), g);
            });
          },
          noc = function (a, b, c) {
            return b.map((d, e) =>
              c.map((f, g) => {
                f = h6.union(d, f);
                return j6.of(f, (h) => {
                  const k = a(h),
                    l = e(h),
                    m = g(h);
                  return () => (k() ? l() : m());
                });
              })
            );
          },
          k6 = function (a) {
            return (b) => b(a);
          },
          $nc = function ({ Yga: a, resultType: b, evaluate: c }, d) {
            if (d.length !== a.length)
              throw Error(
                `expected ${a.length} arguments, but got ${d.length}`
              );
            const e = poc(a, (f, g) => d[g].as(f));
            return j6.of(b, (f) => {
              const g = e.map(k6(f));
              return c(f)(...g);
            });
          },
          g6 = function ({ Yga: a, resultType: b, apply: c }, d, e) {
            if (d.length !== a.length)
              throw Error(
                `expected ${a.length} arguments, but got ${d.length}`
              );
            const f = poc(a, (g, h) => d[h].as(g));
            return j6.of(b, (g) => {
              g = f.map(k6(g));
              return qoc(
                (e === null || e === void 0 ? 0 : e.Sp) ? roc(c) : c,
                g
              );
            });
          },
          eoc = function ({ Ntb: a, resultType: b, apply: c }, d) {
            let e;
            const f = d.map((g) =>
              g.loa(
                (h) => h.as(a),
                (h) => h.as(e !== null && e !== void 0 ? e : (e = h6.qT(a)))
              )
            );
            return new j6(b, (g) => {
              const h = k6(g),
                k = f.map((l) => l.loa(h, h));
              return () => {
                const l = [];
                k.forEach((m) => {
                  m.zsa(
                    (n) => l.push(n()),
                    (n) => l.push(...n())
                  );
                });
                return c(l);
              };
            });
          },
          goc = function (
            { itemType: a, Kab: b, resultType: c, reduce: d },
            e,
            f
          ) {
            const g = f.as([a], b),
              h = e.as(h6.qT(a));
            return new j6(c, (k) => {
              const l = h(k),
                m = g(k),
                n = roc((p) => {
                  p = p.map(Knc);
                  return [p, p.map(m)];
                });
              return () => {
                const [p, q] = n(l());
                return d(p, q);
              };
            });
          },
          hoc = function (
            { keyType: a, valueType: b, resultType: c, apply: d },
            e
          ) {
            const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
            return new j6(c, (g) => {
              const h = f.map(([k, l]) => [k(g), l(g)]);
              return () => d(h.map(([k, l]) => [k(), l()]));
            });
          },
          joc = function ({ rab: a, resultType: b, apply: c }, d) {
            const e = Object.keys(a).filter((g) => !d.hasOwnProperty(g));
            if (e.length) throw Error(`too few arguments (missing ${e})`);
            const f = soc(a, (g, h) => d[h].as(g));
            return new j6(b, (g) => {
              const h = Je(f, k6(g));
              return () => {
                var k = Je(h, Lnc);
                return c(k);
              };
            });
          },
          i6 = function (a, b) {
            const c = Knc(b);
            return new j6(a, () => c);
          },
          ooc = function (a, b) {
            const c = a.evaluate;
            return new j6(a.type, (d) => c(b(d)));
          },
          Xnc = function (a, b, c) {
            const d = b.map((f) => f[0]),
              e = b.map((f) => f[1]);
            return Nnc(e, (f) =>
              c(Wnc(a, new Map(b))).map(
                (g, h) =>
                  new toc(f, g, (k) => (...l) => {
                    const m = new Map(d.map((n, p) => [n, l[p]]));
                    return h(new e6(new Map(m), k));
                  })
              )
            );
          },
          qoc = function (a, b) {
            switch (b.length) {
              case 0:
                return a;
              case 1:
                const [c] = b;
                return () => a(c());
              case 2:
                const [d, e] = b;
                return () => a(d(), e());
              default:
                return () => {
                  var f = b.map(Lnc);
                  return a(...f);
                };
            }
          },
          roc = function (a) {
            let b;
            return (...c) => {
              if (
                b &&
                b.w6a.length === c.length &&
                b.w6a.every((e, f) => l6.Ug(e, c[f]))
              )
                return b.v;
              const d = a(...c);
              b = { w6a: c, v: d };
              return d;
            };
          },
          soc = function (a, b) {
            return Je(a, b);
          },
          poc = function (a, b) {
            return a.map(b);
          },
          voc = function (a, b, c) {
            return new uoc(a, b, c);
          },
          woc = function (a, b) {
            return [...a].map(b)[Symbol.iterator]();
          },
          m6 = function (a, b, c, d) {
            if (d == null) throw a.error(b.dJ(c), "not found");
            return d;
          },
          Joc = function (a) {
            function b(r) {
              return m[r.kind](r);
            }
            const c = a.types,
              d = a.values;
            class e {
              static of(r, t, u, v, x, y) {
                return new e(r, u, v, xoc(x, yoc(t)), zoc(y, yoc(t)));
              }
              map(r) {
                return r(this);
              }
              validate(r) {
                return r
                  ? new e(
                      this.dataType,
                      this.n8,
                      this.H7,
                      Aoc(this.decode, r),
                      xoc(this.encode, r)
                    )
                  : this;
              }
              constructor(r, t, u, v, x) {
                this.dataType = r;
                this.n8 = t;
                this.H7 = u;
                this.decode = v;
                this.encode = x;
              }
            }
            const f = e.of(
                { kind: 0 },
                "string",
                c.string,
                (r) => r,
                (r, t, u) => u.value,
                (r, t, u) => ({ type: "string", value: u })
              ),
              g = e.of(
                { kind: 1 },
                "boolean",
                c.Bh,
                (r) => r,
                (r, t, u) => u.value,
                (r, t, u) => ({ type: "boolean", value: u })
              ),
              h = e
                .of(
                  { kind: 2 },
                  "double",
                  c.number,
                  (r) => r,
                  (r, t, u) => u.value,
                  (r, t, u) => ({ type: "double", value: u })
                )
                .validate((r, t, u) => {
                  if (!Number.isFinite(u))
                    throw r.error(t, `number is not finite: ${u}`);
                }),
              k = e
                .of(
                  { kind: 3 },
                  "int32",
                  c.number,
                  (r) => r,
                  (r, t, u) => u.value,
                  (r, t, u) => ({ type: "int32", value: u })
                )
                .validate((r, t, u) => {
                  if (!Number.isInteger(u) || u < -2147483648 || u > 2147483647)
                    throw r.error(t, `number is not an int32: ${u}`);
                }),
              l = {
                Fill: e.of(
                  { kind: 7, name: "Fill" },
                  "fill",
                  c.instance("Fill"),
                  (r) => d.instance("Fill", r),
                  (r, t, u) => u.value,
                  (r, t, u) => ({ type: "fill", value: u })
                ),
                Stroke: e.of(
                  { kind: 7, name: "Stroke" },
                  "stroke",
                  c.instance("Stroke"),
                  (r) => d.instance("Stroke", r),
                  (r, t, u) => u.value,
                  (r, t, u) => ({ type: "stroke", value: u })
                ),
                Richtext2: e.of(
                  { kind: 7, name: "Richtext2" },
                  "text2",
                  c.instance("Richtext2"),
                  (r) => d.instance("Richtext2", r),
                  (r, t, u) => u.value,
                  (r, t, u) => ({ type: "text2", value: u })
                ),
              },
              m = {
                [0]: (r) => f.validate(Boc(r.WK)),
                [1]: () => g,
                [2]: (r) => h.validate(Coc(r.range)),
                [3]: (r) => k.validate(Coc(r.range)),
                [4]: (r) =>
                  e
                    .of(
                      { kind: 4, values: r.values },
                      Doc,
                      c.primitive,
                      (t) => t,
                      (t, u, v) => v.value,
                      (t, u, v) => {
                        a: switch (typeof v) {
                          case "string":
                            t = { type: "string", value: v };
                            break a;
                          case "boolean":
                            t = { type: "boolean", value: v };
                            break a;
                          case "number":
                            t = { type: "int32", value: v };
                            break a;
                          default:
                            throw new E(v);
                        }
                        return t;
                      }
                    )
                    .validate(Eoc(r.values)),
                [5]: (r) => {
                  const {
                    dataType: t,
                    n8: u,
                    H7: v,
                    decode: x,
                    encode: y,
                  } = b(r.itemType);
                  return e.of(
                    { kind: 5, itemType: t },
                    "list",
                    c.array(u),
                    (A) => d.array(A.map(v)),
                    (A, C, D) =>
                      D.value.toArray().map((H, J) => x(A, C.YN(J), H)),
                    (A, C, D) => ({
                      type: "list",
                      value: D.map((H, J) => y(A, C.YN(J), H)),
                    })
                  );
                },
                [6]: (r) => {
                  const {
                    dataType: t,
                    n8: u,
                    H7: v,
                    decode: x,
                    encode: y,
                  } = b(r.itemType);
                  return e.of(
                    { kind: 6, itemType: t },
                    "dict",
                    c.map(c.string, u),
                    (A) => d.map(Tc(A, v)),
                    (A, C, D) => Tc(D.value.xk(), (H, J) => x(A, C.J1(J), H)),
                    (A, C, D) => ({
                      type: "dict",
                      value: Tc(D, (H, J) => y(A, C.J1(J), H)),
                    })
                  );
                },
                [7]: (r) => l[r.name],
                [8]: (r) => {
                  const { dataType: t, decode: u, encode: v } = b(r.itemType);
                  return e.of(
                    { kind: 8, itemType: t },
                    "list",
                    c.undefined,
                    () => {},
                    (x, y, A) =>
                      Inc(
                        A.value,
                        (C) => v(x, y.YN("*"), C),
                        Foc(u, x, y.YN("*"))
                      ),
                    (x, y, A) => ({
                      type: "list",
                      value: A.map((C, D) => v(x, y.YN(D), C)),
                    })
                  );
                },
                [9]: (r) => {
                  const { dataType: t, decode: u, encode: v } = b(r.itemType);
                  return e.of(
                    { kind: 9, itemType: t },
                    "dict",
                    c.undefined,
                    () => {},
                    (x, y, A) =>
                      voc(
                        A.value,
                        (C) => v(x, y.J1("*"), C),
                        Foc(u, x, y.YN("*"))
                      ),
                    (x, y, A) => ({
                      type: "dict",
                      value: Tc(A, (C, D) => v(x, y.J1(D), C)),
                    })
                  );
                },
                [10]: (r) => {
                  const { decode: t, encode: u } = p.TUa(r.fields);
                  return e.of(
                    { kind: 10, fields: r.fields },
                    "dict",
                    c.undefined,
                    () => {},
                    t,
                    u
                  );
                },
                [11]: (r) => {
                  function t(H, J, I, L) {
                    I = I.get(L);
                    if (I == null)
                      throw H.error(
                        J,
                        `unknown case for discriminator value: ${L}`
                      );
                    return I;
                  }
                  const u = r.tOa;
                  r = r.ag;
                  var v = Object.keys(u);
                  w(v.length >= 1, "missing discriminator props");
                  w(v.length <= 1, "too many discriminator props: {}", v);
                  const x = v[0];
                  w(r.length >= 1, "discriminated union has no cases");
                  v = new Map();
                  for (const H of r) {
                    const J = H.fields[x].type.values,
                      I = b(H);
                    for (const L of J)
                      w(
                        !v.has(L),
                        "discriminator values are not unique across cases: {}",
                        L
                      ),
                        v.set(L, I);
                  }
                  const { decode: y, encode: A } = b({
                      kind: 4,
                      values: new Set(v.keys()),
                    }),
                    C = Tc(v, (H) => H.decode),
                    D = Tc(v, (H) => H.encode);
                  return e.of(
                    { kind: 11, tOa: u, ag: r },
                    "dict",
                    c.undefined,
                    () => {},
                    (H, J, I) => {
                      var L = m6(H, J, "k", I.value.get("k"));
                      I = m6(H, J, "v", I.value.get("v"));
                      Goc(H, J, "dict", I);
                      L = y(H, J, L);
                      return t(H, J, C, L)(H, J, I);
                    },
                    (H, J, I) => {
                      const L = I[x],
                        P = t(H, J, D, L);
                      return {
                        type: "dict",
                        value: new Map([
                          ["k", A(H, J, L)],
                          ["v", P(H, J, I)],
                        ]),
                      };
                    }
                  );
                },
              },
              n = Symbol("$impl");
            class p {
              static TUa(r) {
                r = Je(r, (v) => q.of(v));
                const t = Je(r, (v) => v.Fzb()),
                  u = Object.entries(r);
                return {
                  cN: new Map(u.map(([, v]) => v.Azb())),
                  Gzb: (v) => {
                    const x = v[n];
                    return new Map(u.map(([, y]) => y.Hzb(x)));
                  },
                  decode: (v, x, y) => {
                    const A = Object.create(null, t);
                    Object.defineProperty(A, n, {
                      enumerable: !1,
                      writable: !1,
                      value: new p(v, x, y.value),
                    });
                    return A;
                  },
                  encode: (v, x, y) => {
                    const A = u.map(([C, D]) => D.encode(v, x, y[C]));
                    return { type: "dict", value: new Map(A.filter(__c.wb)) };
                  },
                };
              }
              nRa(r, t) {
                const u = m6(this.e, this.p, t, this.data.get(t));
                return n6(this.OPa, r.decode, this.e, this.p.dJ(t), u);
              }
              gRa(r, t) {
                const u = this.data.get(t);
                if (u != null)
                  return n6(this.OPa, r.decode, this.e, this.p.dJ(t), u);
              }
              qxb(r, t, u) {
                this.data.set(t, r.encode(this.e, this.p.dJ(t), u));
              }
              mxb(r, t, u) {
                u != null
                  ? this.data.set(t, r.encode(this.e, this.p.dJ(t), u))
                  : this.data.delete(t);
              }
              constructor(r, t, u) {
                this.e = r;
                this.p = t;
                this.data = u;
                this.OPa = new WeakMap();
              }
            }
            class q {
              static of(r) {
                return new q(r, b(r.type));
              }
              get key() {
                return this.zb.key;
              }
              Azb() {
                const r = this.zb,
                  t = this.type,
                  u = r.key;
                switch (r.MK) {
                  case 0:
                    return [u, t.n8];
                  case 1:
                    return [u, c.optional(t.n8)];
                  default:
                    throw new E(r.MK);
                }
              }
              Hzb(r) {
                const t = this.zb,
                  u = this.type,
                  v = t.key;
                switch (t.MK) {
                  case 0:
                    return [v, () => u.H7(r.nRa(u, v))];
                  case 1:
                    return [
                      v,
                      () => {
                        const x = r.gRa(u, v);
                        return x != null ? u.H7(x) : void 0;
                      },
                    ];
                  default:
                    throw new E(t.MK);
                }
              }
              Fzb() {
                const r = this.zb,
                  t = this.type,
                  u = r.key;
                let v;
                switch (r.MK) {
                  case 0:
                    v = {
                      enumerable: !0,
                      get() {
                        return this[n].nRa(t, u);
                      },
                      set(x) {
                        this[n].qxb(t, u, x);
                      },
                    };
                    break;
                  case 1:
                    v = {
                      enumerable: !0,
                      get() {
                        return this[n].gRa(t, u);
                      },
                      set(x) {
                        this[n].mxb(t, u, x);
                      },
                    };
                    break;
                  default:
                    throw new E(r.MK);
                }
                switch (r.CBa) {
                  case 0:
                    v.set = void 0;
                    break;
                  case 1:
                    break;
                  default:
                    throw new E(r.CBa);
                }
                return v;
              }
              encode(r, t, u) {
                const v = this.zb,
                  x = this.type,
                  y = v.key;
                switch (v.MK) {
                  case 0:
                    return [y, x.encode(r, t.dJ(y), m6(r, t, y, u))];
                  case 1:
                    return u != null ? [y, x.encode(r, t.dJ(y), u)] : void 0;
                  default:
                    throw new E(v.MK);
                }
              }
              constructor(r, t) {
                this.zb = r;
                this.type = t;
              }
            }
            return (r, t) => {
              const u = new Hoc(r),
                v = new Ioc(),
                { cN: x, Gzb: y, decode: A, encode: C } = p.TUa(t);
              return {
                cN: x,
                decode: (D) => {
                  D = A(u, v, { type: "dict", value: D });
                  return { uAa: y(D), data: D };
                },
                encode: (D) => C(u, v, D).value,
              };
            };
          },
          Foc = function (a, b, c) {
            const d = new WeakMap();
            return (e) => n6(d, a, b, c, e);
          },
          n6 = function (a, b, c, d, e) {
            let f = a.get(e);
            f == null && ((f = b(c, d, e)), a.set(e, f));
            return f;
          },
          xoc = function (a, b) {
            return (c, d, e) => {
              b(c, d, e);
              return a(c, d, e);
            };
          },
          Aoc = function (a, b) {
            return (c, d, e) => {
              e = a(c, d, e);
              b(c, d, e);
              return e;
            };
          },
          zoc = function (a, b) {
            var c = Koc();
            return (d, e, f) => {
              f = a(d, e, f);
              b(d, e, f);
              c(d, e, f);
              return f;
            };
          },
          Goc = function (a, b, c, d) {
            if (d.type !== c)
              throw a.error(b, `type error: expected ${c}, was ${d.type}`);
          },
          yoc = function (a) {
            return typeof a === "string"
              ? (b, c, d) => Goc(b, c, a, d)
              : (b, c, d) => {
                  if (!a.has(d.type))
                    throw b.error(
                      c,
                      `type error: expected one of ${[...a].join(
                        " or "
                      )}, was ${d.type}`
                    );
                };
          },
          Koc = function () {
            return (a, b, c) => {
              if (typeof c.value !== Loc[c.type])
                throw a.error(
                  b,
                  `type error: expected ${c.type}, was ${typeof c.value}`
                );
            };
          },
          Eoc = function (a) {
            return (b, c, d) => {
              if (!a.has(d))
                throw b.error(
                  c,
                  `expected one of ${[...a].join(" or ")}, was ${d}`
                );
            };
          },
          Coc = function (a) {
            if (a) {
              var b = a.min,
                c = a.max;
              w(b == null || c == null || b <= c);
              return (d, e, f) => {
                if (b != null && f < b)
                  throw d.error(e, `value below min ${b}: ${f}`);
                if (c != null && f > c)
                  throw d.error(e, `value above max ${b}: ${f}`);
              };
            }
          },
          Boc = function (a) {
            if (a)
              return (b, c, d) => {
                if (!a.test(d))
                  throw b.error(c, `value does not match regex ${a}: '${d}'`);
              };
          },
          Ooc = function () {
            return new Moc({})
              .add((a, b) => ({
                Fill: new a("Fill", { color: b.string }, (c) =>
                  __c.qM.create({ ...__c.pE, color: c.color })
                ),
              }))
              .add((a, b) => ({
                Stroke: new a(
                  "Stroke",
                  {
                    color: b.string,
                    weight: b.number,
                    Wc: b.array(b.number),
                    Je: b.Bh,
                  },
                  (c) =>
                    __c.ay.create({
                      ...__c.tP,
                      color: c.color,
                      weight: c.weight,
                      Wc: c.Wc.items,
                      Je: c.Je,
                    })
                ),
              }))
              .add((a, b) => ({
                Richtext2: new a(
                  "Richtext2",
                  {
                    Mib: b.array(
                      b.Pc({ ub: b.string, attrs: b.map(b.string, b.string) })
                    ),
                  },
                  (c) => {
                    c = c.Mib;
                    const d = __c.Ki.Db();
                    c.items.forEach((e) => {
                      const f = e.fields.ub;
                      d.attrs(__c.Df(e.fields.attrs.items));
                      d.ub(f);
                    });
                    return __c.Ki.create(d.build());
                  }
                ),
              }))
              .add((a, b) => ({
                Path: new a(
                  "Path",
                  {
                    d: b.string,
                    fill: b.instance("Fill"),
                    stroke: b.union(b.instance("Stroke"), b.undefined),
                  },
                  (c) => {
                    const d = c.stroke,
                      e = c.fill;
                    c = __c.YM.create({ ...__c.Vtb, d: c.d, fill: __c.pE });
                    Object.defineProperties(c, {
                      fill: { value: e.instance },
                      stroke: { value: Noc(d) },
                    });
                    return c;
                  }
                ),
              }))
              .add((a, b) => ({
                RectElement: new a(
                  "RectElement",
                  {
                    top: b.number,
                    left: b.number,
                    width: b.number,
                    height: b.number,
                    rotation: b.union(b.number, b.undefined),
                    fill: b.instance("Fill"),
                    U: b.union(b.array(b.number), b.undefined),
                    stroke: b.union(b.instance("Stroke"), b.undefined),
                  },
                  (c) => {
                    var d;
                    const e = c.stroke;
                    var f, g;
                    const h = __c.eA.create({
                      ...__c.oE,
                      top: c.top,
                      left: c.left,
                      width: c.width,
                      height: c.height,
                      rotation:
                        (f = c.rotation) !== null && f !== void 0
                          ? f
                          : __c.oE.rotation,
                      fill: __c.pE,
                      U:
                        (g =
                          (d = c.U) === null || d === void 0
                            ? void 0
                            : d.items) !== null && g !== void 0
                          ? g
                          : __c.oE.U,
                    });
                    Object.defineProperties(h, {
                      fill: { value: c.fill.instance },
                      stroke: { value: Noc(e) },
                    });
                    return h;
                  }
                ),
              }))
              .add((a, b) => ({
                ShapeElement: new a(
                  "ShapeElement",
                  {
                    top: b.number,
                    left: b.number,
                    width: b.number,
                    height: b.number,
                    rotation: b.union(b.number, b.undefined),
                    Aa: b.union(b.number, b.undefined),
                    viewBox: b.Pc({
                      top: b.number,
                      left: b.number,
                      width: b.number,
                      height: b.number,
                    }),
                    lb: b.array(b.instance("Path")),
                  },
                  (c) => {
                    var d, e;
                    const f = __c.fA.create({
                      ...__c.GP,
                      top: c.top,
                      left: c.left,
                      width: c.width,
                      height: c.height,
                      rotation:
                        (d = c.rotation) !== null && d !== void 0
                          ? d
                          : __c.GP.rotation,
                      Aa: (e = c.Aa) !== null && e !== void 0 ? e : __c.GP.Aa,
                      lb: [],
                      viewBox: c.viewBox.fields,
                    });
                    Object.defineProperties(f, {
                      lb: {
                        value: new __c.OW(
                          c.lb.items.map((g) => o6(() => g.instance))
                        ),
                      },
                    });
                    return f;
                  }
                ),
              }));
          },
          Noc = function (a) {
            return (
              a && {
                ref: a.instance,
                set() {
                  throw Error(
                    "Replacing of stroke on a model unit is not yet supported"
                  );
                },
              }
            );
          },
          Qoc = function (a, b) {
            return class extends Poc {
              componentDidCatch(c) {
                a.error(c);
                this.setState({ hasError: !0 });
              }
              render() {
                return this.state.hasError
                  ? p6(__c.yu, {
                      background: "criticalLow",
                      width: "full",
                      height: "full",
                      padding: "0.25u",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      role: "alert",
                      children: p6(__c.vu, {
                        size: "xsmall",
                        alignment: "center",
                        children: __c.N("Q6XSow"),
                      }),
                    })
                  : p6(b, { ...this.props });
              }
              constructor(...c) {
                super(...c);
                this.state = { hasError: !1 };
              }
            };
          },
          Voc = function (a, b, c) {
            const d = (f) => ({ element: f.G.Re });
            var e = (f) => {
              a: {
                var g = a.BBb;
                const h = __c.Ah(f);
                __c.z(
                  h.type === "fixed-page" ||
                    h.type === "concatenated-fixed-page",
                  "Expected fixed, or concatenated fixed page."
                );
                switch (h.type) {
                  case "fixed-page":
                    f = { page: g.Cl.WQa(h), P: new Roc(f.G), dk: g.dk };
                    break a;
                  case "concatenated-fixed-page":
                    f = { page: g.Cl.MQa(h), P: new Roc(f.G), dk: g.dk };
                    break a;
                  default:
                    throw new E(h);
                }
              }
              return f;
            };
            b = Jnc(b);
            switch (c.type) {
              case 0:
                return (
                  (c = c.AB),
                  typeof c === "object"
                    ? ((e = a.gY.types),
                      (e = e.qT(
                        e.union(
                          e.instance("RectElement"),
                          e.instance("ShapeElement")
                        )
                      )),
                      Soc(
                        a,
                        d,
                        b,
                        e,
                        c,
                        (f) => new __c.NW(() => f().map((g) => g.instance))
                      ))
                    : Toc(d, e, b, c)
                );
              case 1:
                return Uoc(a, d, e, b, c.Component);
              default:
                throw new E(c);
            }
          },
          Soc = function (a, b, c, d, e, f) {
            const g = a.hqa(a.gY, c, d).compile(e);
            return { type: 0, AB: (h) => ({ Oa: f(g.apply(b(h))) }) };
          },
          Toc = function (a, b, c, d) {
            return { type: 0, AB: (e) => d(c.decode(a(e)).data, b(e)) };
          },
          Uoc = function (a, b, c, d, e) {
            return {
              type: 1,
              Component: Qoc(
                a.K,
                Woc(({ model: f }) => {
                  const [g] = Xoc(() => d.decode(b(f)).data);
                  return p6(e, { data: g, Om: a.Om, Xh: c(f) });
                })
              ),
            };
          },
          Zoc = function (a) {
            return { cN: a.cN, decode: Yoc(a.decode), encode: a.encode };
          },
          Yoc = function (a) {
            const b = new WeakMap();
            return (c) => {
              let d = b.get(c);
              d || ((d = a(c)), b.set(c, d));
              return d;
            };
          },
          Hnc = class {
            static D(a) {
              O(a, { m4: __c.MW });
            }
            get m4() {
              const a = new Map();
              this.base.forEach((b) => a.set(this.Qf(b), b));
              return a;
            }
            Zs(a) {
              return B(this.m4.get(a));
            }
            $V(a) {
              return a != null ? this.Qf(a) : void 0;
            }
            get empty() {
              return this.base.empty;
            }
            count() {
              return this.base.count();
            }
            toArray() {
              return this.base.toArray().map(this.Qf);
            }
            xk() {
              return Tc(this.base.xk(), this.Qf);
            }
            [__c.ZZb]() {
              return this.toArray()[Symbol.iterator]();
            }
            first(a) {
              return this.$V(this.base.first(a && ((b) => a(this.Qf(b)))));
            }
            last(a) {
              return this.$V(this.base.last(a && ((b) => a(this.Qf(b)))));
            }
            next(a, b) {
              return this.$V(
                this.base.next(this.Zs(a), b && ((c) => b(this.Qf(c))))
              );
            }
            Qb(a, b) {
              return this.$V(
                this.base.Qb(this.Zs(a), b && ((c) => b(this.Qf(c))))
              );
            }
            ue(a, b) {
              return this.base.ue(this.Zs(a), this.Zs(b));
            }
            Ku(a) {
              return this.base.Ku(this.Zs(a));
            }
            has(a) {
              return this.base.has(this.Zs(a));
            }
            set(a, b) {
              return this.Qf(this.base.set(a, this.TF(b)));
            }
            replace(a, b) {
              return this.Qf(this.base.replace(this.Zs(a), this.TF(b)));
            }
            append(a) {
              return this.Qf(this.base.append(this.TF(a)));
            }
            prepend(a) {
              return this.Qf(this.base.prepend(this.TF(a)));
            }
            BF(a, b) {
              return this.Qf(this.base.BF(a && this.Zs(a), this.TF(b)));
            }
            insertBefore(a, b) {
              return this.Qf(
                this.base.insertBefore(a && this.Zs(a), this.TF(b))
              );
            }
            jC(a, b) {
              return this.base.jC(a && this.Zs(a), b.map(this.TF)).map(this.Qf);
            }
            delete(a) {
              this.base.delete(this.Zs(a));
            }
            Cy(a) {
              this.base.Cy(a && ((b) => a(this.Qf(b))));
            }
            Tp(a, b) {
              this.base.Tp(a && this.Zs(a), this.Zs(b));
            }
            Wq(a) {
              return new __c.yK(this, a);
            }
            map(a) {
              return this.base.map((b, c) => a(this.Qf(b), c));
            }
            flatMap(a) {
              return this.base.flatMap((b, c) => a(this.Qf(b), c));
            }
            filter(a) {
              return this.base.filter((b, c) => a(this.Qf(b), c)).map(this.Qf);
            }
            forEach(a) {
              this.base.forEach((b, c) => a(this.Qf(b), c));
            }
            reduce(a, b) {
              return this.base.reduce((c, d) => a(c, this.Qf(d)), b);
            }
            some(a) {
              return this.base.some((b) => a(this.Qf(b)));
            }
            every(a) {
              return this.base.every((b) => a(this.Qf(b)));
            }
            constructor(a, b, c) {
              this.base = a;
              this.TF = b;
              this.Qf = c;
              Hnc.D(this);
            }
          },
          q6 = __webpack_require__(400770),
          $oc = q6.comparer,
          o6 = q6.computed,
          apc = q6.observable;
        var r6 = __webpack_require__(206928).iB;
        var p6 = __webpack_require__(31968).jsx;
        var s6 = __webpack_require__(845212),
          Woc = s6.memo,
          Poc = s6.PureComponent,
          Xoc = s6.useState;
        var U5 = class {
            static of(a, b, c) {
              return new U5(a, b, c);
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Yga = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          cpc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b) {
              var c = bpc;
              this.rab = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          t6 = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Ntb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          epc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              var d = dpc;
              this.keyType = a;
              this.valueType = b;
              this.resultType = c;
              this.apply = d;
            }
          },
          Mnc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c, d) {
              this.itemType = a;
              this.Kab = b;
              this.resultType = c;
              this.reduce = d;
            }
          };
        var Pnc = class {
          map(a) {
            return a(this);
          }
          constructor(a, b) {
            this.type = a;
            this.get = b;
          }
        };
        var fpc = class {},
          boc = class extends fpc {
            loa(a) {
              return new boc(a(this.value));
            }
            zsa(a) {
              return a(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          },
          coc = class extends fpc {
            loa(a, b) {
              return new coc(b(this.value));
            }
            zsa(a, b) {
              return b(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          };
        var Z5 = class {
            map(a) {
              return a(this);
            }
          },
          u6 = class extends Z5 {
            Nua(a) {
              return this === a || a.YBa((b) => this.n3(b));
            }
            TO() {
              throw Error(`${this} is not iterable`);
            }
            Owa(a) {
              var b;
              const c =
                (b = this.propTypes) !== null && b !== void 0
                  ? b
                  : (this.propTypes = this.bfa());
              if (!c) throw Error(`${this} is not navigable"`);
              if (!c.hasOwnProperty(a))
                throw Error(`${this} has no navigable property "${a}"`);
              return c[a];
            }
            bfa() {
              throw Error(`${this} is not navigable`);
            }
            Gsa(a) {
              a(this);
            }
            YBa(a) {
              return a(this);
            }
            constructor() {
              super();
              this.kind = "simple";
              this.propTypes = void 0;
            }
          },
          v6 = class extends u6 {
            n3(a) {
              return a instanceof v6 && this.name === a.name;
            }
            toString() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          w6 = class extends u6 {
            n3(a) {
              return a instanceof w6 && this.JE === a.JE;
            }
            toString() {
              return this.JE.name;
            }
            constructor(a) {
              super();
              this.JE = a;
            }
          },
          x6 = class extends u6 {
            n3(a) {
              return a instanceof x6 && this.JE === a.JE && Y5(this.Zx, a.Zx);
            }
            toString() {
              return `${this.JE}<${this.Zx}>`;
            }
            constructor(a, b) {
              super();
              this.JE = a;
              this.Zx = b;
            }
          },
          gpc = class extends x6 {
            TO() {
              return this.Zx;
            }
            bfa() {
              const a = this.Zx;
              return {
                size: h6.number,
                empty: h6.Bh,
                get first() {
                  return h6.optional(a);
                },
              };
            }
            constructor(a) {
              super("array", a);
            }
          },
          hpc = class extends x6 {
            TO() {
              return this.Zx;
            }
            bfa() {
              const a = this.Zx;
              return {
                size: h6.number,
                empty: h6.Bh,
                get first() {
                  return h6.optional(a);
                },
              };
            }
            constructor(a) {
              super("set", a);
            }
          },
          ipc = class extends u6 {
            n3(a) {
              return (
                a instanceof ipc &&
                Y5(this.key, a.key) &&
                Y5(this.value, a.value)
              );
            }
            toString() {
              return `map<${this.key}, ${this.value}>`;
            }
            constructor(a, b) {
              super();
              this.key = a;
              this.value = b;
            }
          },
          jpc = class extends u6 {
            n3(a) {
              return a instanceof jpc
                ? Object.entries(a.fields).every(
                    ([b, c]) =>
                      this.fields.hasOwnProperty(b) && Y5(this.fields[b], c)
                  )
                : !1;
            }
            bfa() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${a.map(([b, c]) => `${b}: ${c}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
            }
          },
          y6 = class extends Z5 {
            Nua(a) {
              return this === a || this.ag.every((b) => b.Nua(a));
            }
            TO() {
              return h6.union(...this.ag.map((a) => a.TO()));
            }
            Owa(a) {
              return h6.union(...this.ag.map((b) => b.Owa(a)));
            }
            Gsa(a) {
              this.ag.forEach((b) => b.Gsa(a));
            }
            YBa(a) {
              return this.ag.some((b) => b.YBa(a));
            }
            toString() {
              return this.ag.length
                ? this.ag.map((a) => a.toString()).join(" | ")
                : "never";
            }
            constructor(a) {
              super();
              this.ag = a;
              this.kind = "disjunction";
              w(a.length !== 1);
            }
          },
          z6 = new y6([]),
          kpc = new v6("string"),
          lpc = new v6("number"),
          mpc = new v6("boolean"),
          npc = new v6("undefined"),
          opc = new y6([kpc, lpc, mpc]),
          ppc = class {
            get never() {
              return z6;
            }
            get string() {
              return kpc;
            }
            get number() {
              return lpc;
            }
            get Bh() {
              return mpc;
            }
            get undefined() {
              return npc;
            }
            get primitive() {
              return opc;
            }
            optional(a) {
              return h6.union(a, h6.undefined);
            }
            array(a) {
              return new gpc(a);
            }
            set(a) {
              return new hpc(a);
            }
            qT(a) {
              return new y6([new gpc(a), new hpc(a)]);
            }
            map(a, b) {
              return new ipc(a, b);
            }
            Pc(a) {
              return new jpc({ ...a });
            }
            union(...a) {
              if (a.length === 0) return z6;
              if (a.length === 1) return a[0];
              const b = new Set();
              for (const d of a) Onc(d).Gsa((e) => b.add(e));
              a = [...b];
              if (a.length === 0) return z6;
              if (a.length === 1) return a[0];
              if (a.length === 2) {
                const [d, e] = a;
                return Y5(d, e) ? e : Y5(e, d) ? d : new y6(a);
              }
              const c = new Set();
              for (const d of a)
                [...c].some((e) => Y5(d, e)) ||
                  (c.forEach((e) => Y5(e, d) && c.delete(e)), c.add(d));
              return c.size === 1 ? [...c][0] : new y6([...c]);
            }
            constructor() {
              this.optional = $5(this.optional);
              this.array = $5(this.array);
              this.set = $5(this.set);
              this.qT = $5(this.qT);
            }
          },
          qpc = class extends ppc {
            instance(a) {
              return new w6(a);
            }
          },
          h6 = new qpc(),
          rpc = class extends ppc {
            instance(a) {
              return new w6(B(this.classes[a]));
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var spc,
          tpc,
          A6 = Symbol("value"),
          B6 = class {
            get props() {
              var a;
              return (a = this.E$a) !== null && a !== void 0
                ? a
                : (this.E$a = this.Lna());
            }
          },
          upc = class {
            get size() {
              return this[A6].length;
            }
            get empty() {
              return this[A6].length === 0;
            }
            get first() {
              return this[A6][0];
            }
            constructor(a) {
              this[A6] = a;
            }
          };
        spc = Symbol.iterator;
        var vpc = class extends B6 {
            Lna() {
              return new upc(this.items);
            }
            map(a) {
              return this.items.map(a);
            }
            [spc]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.length
                ? `[${Array.from(this.items, c6).join(", ")}]`
                : "[]";
            }
            constructor(a) {
              super();
              this.kind = "array";
              this.items = [...a];
            }
          },
          wpc = class {
            get size() {
              return this[A6].size;
            }
            get empty() {
              return this[A6].size === 0;
            }
            get first() {
              return this[A6][Symbol.iterator]().next().value;
            }
            constructor(a) {
              this[A6] = a;
            }
          };
        tpc = Symbol.iterator;
        var xpc = class extends B6 {
            Lna() {
              return new wpc(this.items);
            }
            map(a) {
              return Array.from(this.items, a);
            }
            [tpc]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.size
                ? `Set [${Array.from(this.items, c6).join(", ")}]`
                : "Set []";
            }
            constructor(a) {
              super();
              this.kind = "set";
              this.items = new Set(a);
            }
          },
          ypc = class {
            toString() {
              return this.items.size
                ? `Map {${Array.from(
                    this.items,
                    ([a, b]) => `[${c6(a)}]: ${c6(b)}`
                  ).join(", ")}}`
                : "Map {}";
            }
            constructor(a) {
              this.items = a;
              this.kind = "map";
            }
          },
          zpc = class extends B6 {
            Lna() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${[...a].map(([b, c]) => `${b}: ${c6(c)}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
              this.kind = "record";
            }
          },
          Apc = class {
            toString() {
              return `[instance ${this.JE.name}]`;
            }
            constructor(a, b) {
              this.JE = a;
              this.instance = b;
              this.kind = "instance";
            }
          },
          Bpc = class {
            array(a) {
              return new vpc(a);
            }
            arrayOf(...a) {
              return new vpc(a);
            }
            set(a) {
              return new xpc(a);
            }
            map(a) {
              return new ypc(new Map(a));
            }
            Pc(a) {
              return new zpc({ ...a });
            }
          },
          Cpc = class extends Bpc {
            instance(a, b) {
              return new Apc(a, b);
            }
            stringify(a) {
              return c6(a);
            }
            constructor() {
              super();
              this.Ug = b6;
            }
          },
          l6 = new Cpc(),
          Dpc = class extends Bpc {
            instance(a, b) {
              a = B(this.classes[a]);
              return new Apc(a, b);
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var aoc = {
            [0]: V5(h6.number, h6.number, (a) => -a),
            [1]: V5(h6.string, h6.number, (a) => a.length),
            [2]: V5(h6.Bh, h6.Bh, (a) => !a),
            [3]: W5(h6.number, h6.number, h6.number, (a, b) => a + b),
            [4]: W5(h6.number, h6.number, h6.number, (a, b) => a - b),
            [5]: W5(h6.number, h6.number, h6.number, (a, b) => a * b),
            [6]: W5(h6.number, h6.number, h6.number, (a, b) => a / b),
            [7]: W5(h6.number, h6.number, h6.number, (a, b) => a % b),
            [8]: W5(h6.string, h6.string, h6.string, (a, b) => a + b),
            [9]: W5(h6.number, h6.number, h6.Bh, (a, b) => a === b),
            [10]: W5(h6.number, h6.number, h6.Bh, (a, b) => a !== b),
            [11]: W5(h6.number, h6.number, h6.Bh, (a, b) => a < b),
            [12]: W5(h6.number, h6.number, h6.Bh, (a, b) => a <= b),
            [13]: W5(h6.number, h6.number, h6.Bh, (a, b) => a > b),
            [14]: W5(h6.number, h6.number, h6.Bh, (a, b) => a >= b),
            [15]: W5(h6.Bh, h6.Bh, h6.Bh, (a, b) => a && b),
            [16]: W5(h6.Bh, h6.Bh, h6.Bh, (a, b) => a || b),
          },
          foc = {
            [2]: new t6(h6.number, h6.number, (a) =>
              a.reduce((b, c) => b + c, 0)
            ),
            [3]: new t6(h6.number, h6.number, (a) =>
              a.reduce((b, c) => b * c, 1)
            ),
            [4]: new t6(h6.number, h6.number, (a) => Math.max(...a)),
            [5]: new t6(h6.number, h6.number, (a) => Math.min(...a)),
            [6]: new t6(h6.string, h6.string, (a) => a.join("")),
          },
          Epc = (a) => l6.array(a),
          Fpc = (a) => l6.set(a),
          doc = {
            [0]: (a) => new t6(a, h6.array(a), Epc),
            [1]: (a) => new t6(a, h6.set(a), Fpc),
          },
          dpc = (a) => l6.map(a),
          Snc = { [0]: (a, b) => new epc(a, b, h6.map(a, b)) },
          bpc = (a) => l6.Pc(a),
          ioc = { [0]: (a) => new cpc(a, h6.Pc(a)) },
          Gpc = (a, b) => l6.array(b.map((c) => c())),
          Hpc = (a, b) => l6.array(b.flatMap((c) => c().items)),
          Ipc = (a, b) => l6.array(a.filter((c, d) => b[d]()).map((c) => c())),
          Jpc = (a, b) => b.some((c) => c()),
          Kpc = (a, b) => b.every((c) => c()),
          Lpc = (a, b) => {
            var c;
            return (c = a.find((d, e) => b[e]())) === null || c === void 0
              ? void 0
              : c();
          },
          Unc = {
            [0]: (a, b) => b.map((c) => X5(a, c, h6.array(c), Gpc)),
            [1]: (a, b) =>
              b.TO().map((c) => X5(a, h6.array(c), h6.array(c), Hpc)),
            [2]: (a) => X5(a, h6.Bh, h6.array(a), Ipc),
            [3]: (a) => X5(a, h6.Bh, h6.Bh, Jpc),
            [4]: (a) => X5(a, h6.Bh, h6.Bh, Kpc),
            [5]: (a) => X5(a, h6.Bh, h6.optional(a), Lpc),
          };
        var e6 = class {
          define(a, b) {
            return new e6(new Map([[a, b]]), this);
          }
          resolve(a) {
            const b = this.defs.get(a);
            if (b) return b;
            if (this.parent) return this.parent.resolve(a);
            throw Error(`undefined symbol: "${a}"`);
          }
          constructor(a, b) {
            this.defs = a;
            this.parent = b;
          }
        };
        var Npc = (a, b, c) => {
            const d = d6.create(b.cN),
              e = new Mpc(a);
            return {
              compile: (f) => {
                const g = Ync(e, d, f).as(c);
                return {
                  apply: (h) => {
                    h = new e6(new Map(b.decode(h).uAa));
                    return g(h);
                  },
                };
              },
            };
          },
          d6 = class {
            static create(a) {
              return new d6(new e6(new Map(a)), new e6(new Map()));
            }
            constructor(a = new e6(new Map()), b = new e6(new Map())) {
              this.vars = a;
              this.U1 = b;
            }
          },
          Mpc = class {
            constructor(a) {
              this.types = a;
            }
          },
          j6 = class {
            static of(a, b) {
              return new j6(a, b);
            }
            as(a) {
              if (!Y5(this.type, a))
                throw Error(
                  `type ${this.type} does not match expected type: ${a}`
                );
              return this.evaluate;
            }
            computed() {
              const a = this.evaluate;
              return new j6(this.type, (b) => {
                const c = o6(a(b), { equals: l6.Ug });
                return () => c.get();
              });
            }
            map(a) {
              return a(this.type, this.evaluate);
            }
            constructor(a, b) {
              this.type = a;
              this.evaluate = b;
            }
          },
          toc = class {
            as(a, b) {
              const c = this.Yga,
                d = this.resultType;
              if (a.length < c.length)
                throw Error(
                  `Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`
                );
              for (let e = 0; e < c.length; e++)
                if (!Y5(a[e], c[e]))
                  throw Error(
                    `Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`
                  );
              if (!Y5(d, b))
                throw Error(
                  `return type ${d} is not assignable to expected type: ${b}`
                );
              return this.evaluate;
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Yga = a;
              this.resultType = b;
              this.evaluate = c;
            }
          };
        var Moc = class {
            add(a) {
              a = a(Opc, this.types);
              return new Moc({ ...this.classes, ...a });
            }
            resolve(a) {
              return this.classes[a];
            }
            evaluate(a) {
              const b = this.types;
              switch (a.kind) {
                case 0:
                  switch (a.name) {
                    case "string":
                      return b.string;
                    case "number":
                      return b.number;
                    case "boolean":
                      return b.Bh;
                    case "undefined":
                      return b.undefined;
                    default:
                      throw new E(a);
                  }
                case 1:
                  return b.instance(a.name);
                case 4:
                  switch (a.name) {
                    case "array":
                      return b.array(this.evaluate(a.nKa));
                    case "set":
                      return b.set(this.evaluate(a.nKa));
                    default:
                      throw new E(a);
                  }
                case 5:
                  switch (a.name) {
                    case "map":
                      const c = this.evaluate(a.nKa);
                      a = this.evaluate(a.bFb);
                      if (!Y5(c, b.primitive))
                        throw Error(`key type is not a primitive: ${c}`);
                      return b.map(c, a);
                    default:
                      throw new E(a);
                  }
                case 3:
                  return b.union(...a.args.map((c) => this.evaluate(c)));
                case 2:
                  return b.Pc(Je(a.args, (c) => this.evaluate(c)));
                default:
                  throw new E(a);
              }
            }
            constructor(a) {
              this.classes = a;
              this.types = new rpc(this.classes);
              this.values = new Dpc(this.classes);
            }
          },
          Opc = class {
            constructor(a, b, c) {
              this.name = a;
              this.create = c;
              this.Cqb = new U5([h6.Pc(b)], h6.instance(this), (d) =>
                l6.instance(this, c(d.fields))
              );
            }
          };
        var Ppc;
        Ppc = Symbol.iterator;
        var uoc = class {
          static D(a) {
            O(a, { m4: o6 });
          }
          get m4() {
            const a = new Map();
            this.base.forEach((b) => a.set(this.Qf(b), b));
            return a;
          }
          Zs(a) {
            return B(this.m4.get(a));
          }
          $V(a) {
            return a != null ? this.Qf(a) : void 0;
          }
          get size() {
            return this.base.size;
          }
          get(a) {
            a = this.base.get(a);
            return this.$V(a);
          }
          has(a) {
            return this.base.has(a);
          }
          forEach(a) {
            this.base.forEach((b, c) => a(this.Qf(b), c));
          }
          map(a) {
            return this.base.map((b, c) => a(this.Qf(b), c));
          }
          set(a, b) {
            return this.Qf(this.base.set(a, this.TF(b)));
          }
          every(a) {
            return this.base.every((b, c) => a(this.Qf(b), c));
          }
          delete(a) {
            this.base.delete(a);
          }
          entries() {
            return woc(this.base.entries(), ([a, b]) => [a, this.Qf(b)]);
          }
          keys() {
            return this.base.keys();
          }
          values() {
            return woc(this.base.values(), this.Qf);
          }
          [Ppc]() {
            return this.xk()[Symbol.iterator]();
          }
          xk() {
            return Tc(this.base.xk(), this.Qf);
          }
          constructor(a, b, c) {
            this.base = a;
            this.TF = b;
            this.Qf = c;
            uoc.D(this);
          }
        };
        var C6 = class {
            dJ(a) {
              return new Qpc(this, a);
            }
            J1(a) {
              return new Rpc(this, a);
            }
            YN(a) {
              return new Spc(this, a);
            }
            toString() {
              var a;
              return (a = this.s) !== null && a !== void 0
                ? a
                : (this.s = this.n4());
            }
          },
          Ioc = class extends C6 {
            dJ(a) {
              return new Tpc(a);
            }
            J1() {
              throw Error();
            }
            YN() {
              throw Error();
            }
            n4() {
              return "(global)";
            }
          },
          Tpc = class extends C6 {
            n4() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          Qpc = class extends C6 {
            n4() {
              return `${this.parent}.${this.name}`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.name = b;
            }
          },
          Rpc = class extends C6 {
            n4() {
              return `${this.parent}["${this.key}"]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.key = b;
            }
          },
          Spc = class extends C6 {
            n4() {
              return `${this.parent}[${this.index}]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.index = b;
            }
          },
          Hoc = class {
            error(a, b) {
              return Error(
                `widget '${this.DBb}': schema error on key '${a}': ${b}`
              );
            }
            constructor(a) {
              this.DBb = a;
            }
          },
          Loc = {
            string: "string",
            boolean: "boolean",
            double: "number",
            int32: "number",
            list: "object",
            dict: "object",
            text2: "object",
            fill: "object",
            stroke: "object",
          },
          Doc = new Set(["string", "boolean", "int32"]);
        var Vpc = class {
            constructor(a, b, c) {
              this.hia = a;
              this.dk = c;
              w(
                b.xe === "fixed",
                "Responsive documents are not supported in widget rendering."
              );
              this.pb = __c.Fh(b);
              this.Cl = new Upc(this.hia, this.pb);
            }
          },
          Roc = class {
            get width() {
              return this.G.N;
            }
            get height() {
              return this.G.Z;
            }
            constructor(a) {
              this.G = a;
            }
          },
          D6 = class {
            getIndex() {
              return this.lJ(this.page);
            }
            get id() {
              return this.page.G.id;
            }
            get title() {
              return this.page.G.title;
            }
            get anchor() {
              return this.page.G.anchor;
            }
            get Cmb() {
              return this.page.G.Bf;
            }
            constructor(a, b) {
              this.page = a;
              this.lJ = b;
            }
          },
          Wpc = class extends D6 {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "fixed";
            }
          },
          Xpc = class extends D6 {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "concatenated-fixed";
            }
          },
          Ypc = class extends D6 {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "responsive";
            }
          },
          Zpc = class {
            get id() {
              var a;
              return (a = this.hia) === null || a === void 0 ? void 0 : a.id;
            }
            get extension() {
              var a;
              return (a = this.hia) === null || a === void 0
                ? void 0
                : a.extension;
            }
            get language() {
              return this.pb.G.language;
            }
            constructor(a, b) {
              this.hia = a;
              this.pb = b;
            }
          },
          Upc = class extends Zpc {
            static D(a) {
              O(a, {
                Y: o6({ equals: $oc.shallow }),
                MWa: o6({ equals: $oc.shallow }),
              });
            }
            get Y() {
              return this.pb.G.Y.map((a) => this.Njb(this.pb.ee(a)));
            }
            get MWa() {
              return this.pb.G.Y.toArray();
            }
            constructor(a, b) {
              super(a, b);
              this.Rq = a;
              this.pb = b;
              this.type = (Upc.D(this), "fixed");
              this.WQa = r6((c) => new Wpc(c, this.lJ, this));
              this.MQa = r6((c) => new Xpc(c, this.lJ, this));
              this.Njb = r6((c) => {
                switch (c.type) {
                  case "fixed-page":
                    return this.WQa(c);
                  case "concatenated-fixed-page":
                    return this.MQa(c);
                  case "responsive-page":
                    return new Ypc(c, this.lJ, this);
                  default:
                    throw new E(c);
                }
              });
              this.lJ = r6((c) => {
                c = this.pb.G.Y.has(c.G) ? c.G : void 0;
                return c != null ? this.MWa.indexOf(c) : -1;
              });
            }
          };
        var $pc = new Set(),
          aqc = { AB: () => ({ Oa: __c.XZb }) },
          bqc = class {
            static D(a) {
              O(a, { $ha: apc.shallow });
            }
            Tlb(a, b, { element: c, exports: d }) {
              const e = B(this.kwb.qia.get(a));
              w(e.element === b.element);
              w(!this.$ha.has(a));
              b = { element: Voc(this, b, c), exports: d };
              this.$ha.set(a, b);
              $pc.has(a) || (__c.OO.set(a, aqc), $pc.add(a));
              return b;
            }
            ZPa(a) {
              var b;
              return (b = this.$ha.get(a)) === null || b === void 0
                ? void 0
                : b.element;
            }
            constructor(a, b, c, d, e, f) {
              this.kwb = a;
              this.gY = b;
              this.hqa = c;
              this.K = d;
              this.BBb = e;
              this.Om = f;
              this.$ha = (bqc.D(this), new Map());
            }
          };
        var cqc = class {
          static D(a) {
            O(a, { qia: apc.shallow });
          }
          Ulb(a, b) {
            w(!this.qia.has(a));
            b = {
              document: Zoc(this.jNa(a, b.document)),
              element: Zoc(this.jNa(a, b.element)),
            };
            this.qia.set(a, b);
            return b;
          }
          constructor(a) {
            this.jNa = a;
            this.qia = (cqc.D(this), new Map());
          }
        };
        __c.SYa = {
          $lb: function (a) {
            var b = a.YGa;
            const c = a.EBb,
              d = a.uqa,
              e = a.gY,
              f = a.K;
            a = new Vpc(a.Rq, a.pb, a.dk);
            b = new bqc(b, e, d, f, a, c);
            return { L8: b, zH: b };
          },
          amb: function () {
            var a = { No: Ooc(), hqa: Npc };
            const { No: b, hqa: c } = a;
            a = new cqc(Joc(b));
            return { ZGa: a, YGa: a, uqa: c, gY: b };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/035b34c7785e0899.js.map
