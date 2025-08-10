(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [66905],
  {
    /***/ 975058: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var dqc = function (a) {
            return E6(function (b) {
              return F6("div", {
                className: "gcYy_A",
                children: F6(__c.PC, {
                  e1: "both",
                  children: ({ width: c, height: d }) =>
                    F6(a.ui, {
                      fill: b.fill,
                      Jb: c,
                      tc: d,
                      We: void 0,
                      animation: void 0,
                      tD: !1,
                      da: void 0,
                      ia: void 0,
                    }),
                }),
              });
            });
          },
          eqc = function (a) {
            a.qM && (a.qM(), (a.qM = null));
            const b = a.props.Efb;
            b.forEach((c) => {
              window.addEventListener(c, a.$Ia);
            });
            a.qM = () => {
              b.forEach((c) => {
                window.removeEventListener(c, a.$Ia);
              });
            };
          },
          lqc = function (a) {
            const b = fqc((c) => {
              const d = gqc(() => {
                a.Cs.AZ(c.url);
              }, [c.url]);
              var e;
              return F6(__c.rw, {
                url: c.url,
                store: a.tw,
                No: a.Cs,
                Ry: a.Ry,
                hQ: a.dk > 10,
                Sm: (e = c.Sm) !== null && e !== void 0 ? e : !1,
                ug: d,
                xz: c.xz,
                FP: c.FP,
              });
            });
            return a.Ibb
              ? fqc(function (c) {
                  const [{ store: d, za: e }] = hqc(() => {
                    const f = new iqc(),
                      g = new jqc(f);
                    return { store: f, za: g };
                  });
                  return F6(kqc, {
                    Y4: e.reset,
                    children: F6(__c.IHb, {
                      dmb: e,
                      emb: d,
                      GTa: a.tw.contains(c.url),
                      children: ({ Sm: f }) => F6(b, { ...c, Sm: f }),
                    }),
                  });
                })
              : b;
          },
          nqc = function (a) {
            const b = new __c.pT({
              Ec: a.Ec,
              rg: void 0,
              Qa: a.Qa,
              Rt: !1,
              Qy: !1,
            });
            return E6(function (c) {
              const d = c.pib,
                e = c.Ic,
                f = c.oKa,
                g = c.ariaInvalid,
                h = c.className,
                k = c.disabled,
                l = c.id,
                m = c.name,
                n = c.onBlur,
                p = c.onFocus,
                q = c.onChange,
                r = c.placeholder,
                t = c.HZa,
                u = c.type,
                v = c.value;
              c = {
                color: c.bj,
                borderRadius: c.borderRadius,
                border: c.border,
              };
              d && (c.fontFamily = b.mQ(d));
              return F6("div", {
                className: "BHOPhg",
                children: F6("input", {
                  "aria-describedby": e,
                  "aria-errormessage": f,
                  "aria-invalid": g,
                  className: mqc(h, r && t && "sR0SUA"),
                  disabled: k,
                  id: l,
                  name: m,
                  onBlur: n,
                  onFocus: p,
                  onChange: q,
                  placeholder: r,
                  type: u,
                  value: v,
                  style: { ...c, "--srRiKA": t },
                }),
              });
            });
          },
          oqc = function () {
            return () => F6(__c.zR, { mediaType: "embed", failed: !1 });
          },
          pqc = function (a) {
            return E6(function (b) {
              return F6("div", {
                className: "oUJNhQ",
                children: F6(a.Ce, {
                  text: b.text,
                  animation: void 0,
                  yd: "middle",
                  La: void 0,
                  $a: void 0,
                  Ae: [],
                  writingMode: 1,
                }),
              });
            });
          },
          qqc = function (a) {
            const b = new __c.pT({
              Ec: a.Ec,
              rg: void 0,
              Qa: a.Qa,
              Rt: !1,
              Qy: !1,
            });
            return E6(function (c) {
              const d = c.pib,
                e = c.Ic,
                f = c.oKa,
                g = c.ariaInvalid,
                h = c.className,
                k = c.disabled,
                l = c.id,
                m = c.name,
                n = c.onBlur,
                p = c.onFocus,
                q = c.onChange,
                r = c.placeholder,
                t = c.HZa,
                u = c.rows,
                v = c.value;
              c = {
                color: c.bj,
                borderRadius: c.borderRadius,
                border: c.border,
              };
              d && (c.fontFamily = b.mQ(d));
              return F6("div", {
                className: "BHOPhg",
                children: F6("textarea", {
                  "aria-describedby": e,
                  "aria-errormessage": f,
                  "aria-invalid": g,
                  className: mqc(h, t && "sR0SUA"),
                  disabled: k,
                  id: l,
                  name: m,
                  onBlur: n,
                  onFocus: p,
                  onChange: q,
                  placeholder: r,
                  rows: u,
                  style: { ...c, "--srRiKA": t },
                  value: v,
                }),
              });
            });
          },
          F6 = __webpack_require__(31968).jsx;
        var G6 = __webpack_require__(845212),
          rqc = G6.Component,
          E6 = G6.memo,
          gqc = G6.useCallback,
          hqc = G6.useState;
        var sqc = __webpack_require__(400770),
          H6 = sqc.action,
          tqc = sqc.observable;
        var fqc = __webpack_require__(813494).observer;
        var uqc = __webpack_require__,
          vqc = uqc(208463),
          mqc = uqc.n_x(vqc)();
        var wqc = class extends rqc {
          render() {
            const {
              children: a,
              component: b = "div",
              Rub: c,
              lga: d,
            } = this.props;
            let e = {};
            d &&
              (e = c.reduce((f, g) => {
                f[g] = this.v$a;
                return f;
              }, {}));
            return F6(b, { className: "_kI3Pw", ...e, children: a });
          }
          componentDidMount() {
            this.props.lga && eqc(this);
          }
          componentDidUpdate() {
            this.props.lga && eqc(this);
          }
          componentWillUnmount() {
            this.qM && (this.qM(), (this.qM = null));
          }
          constructor(...a) {
            super(...a);
            this.Qma = this.qM = null;
            this.v$a = (b) => {
              this.Qma = b.nativeEvent;
            };
            this.$Ia = (b) => {
              const c = this.props.lga,
                d = this.Qma === b;
              c && !d && c(b);
              this.Qma = null;
            };
          }
        };
        var kqc = (a) =>
          F6(wqc, {
            Rub: ["onMouseDown", "onTouchStart"],
            Efb: ["mousedown", "touchstart"],
            lga: a.Y4,
            children: a.children,
          });
        var iqc = class {
            static D(a) {
              __c.O(a, { Sm: tqc.ref });
            }
            constructor() {
              this.Sm = (iqc.D(this), !0);
            }
          },
          jqc = class {
            static D(a) {
              __c.O(a, {
                onDoubleClick: H6.bound,
                onTouchEnd: H6.bound,
                reset: H6.bound,
              });
            }
            onDoubleClick() {
              this.store.Sm = !1;
            }
            onTouchEnd(a) {
              a.touches.length > 0 ||
                (this.cR
                  ? (window.clearTimeout(this.cR),
                    (this.cR = void 0),
                    (this.store.Sm = !1))
                  : (this.cR = window.setTimeout(
                      () => (this.cR = void 0),
                      300
                    )));
            }
            reset() {
              this.store.Sm = !0;
            }
            jT() {
              this.cR && window.clearTimeout(this.cR);
            }
            constructor(a) {
              this.store = a;
              this.cR = (jqc.D(this), void 0);
            }
          };
        __c.cG = {};
        __c.cG.RGb = lqc;
        __c.cG.TGb = oqc;
        __c.cG.Zlb = function (a) {
          const b = lqc({
              dk: a.dk,
              Ry: (h, k) =>
                a.K.error(h, {
                  He: "widget: ",
                  extra: new Map(Object.entries(k)),
                }),
              tw: a.tw,
              Cs: a.Cs,
              Ibb: !0,
            }),
            c = oqc(),
            d = pqc({ Ce: a.Ce }),
            e = dqc({ ui: a.zf }),
            f = nqc({ Qa: a.Qa, Ec: a.Ec }),
            g = qqc({ Qa: a.Qa, Ec: a.Ec });
          return { T8a: b, j9a: c, wj: d, Ux: e, bZ: f, iZ: g };
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/23cba6832b768f99.js.map
