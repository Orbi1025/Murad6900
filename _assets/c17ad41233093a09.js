(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [36455],
  {
    /***/ 894240: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(744054);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var gJ = __c.gJ;
        var X = __c.X;
        var K = __c.K;
        var PW = __c.PW;
        var V4;
        var Ia = __c.Ia;
        var lkc,
          nkc,
          mkc,
          pkc,
          skc,
          rkc,
          ukc,
          xkc,
          Akc,
          Ekc,
          Hkc,
          Kkc,
          Ckc,
          Nkc,
          Pkc,
          Rkc;
        __c.T4 = function (a) {
          return { type: 1, Component: a };
        };
        __c.U4 = function () {
          return (a) => a;
        };
        V4 = __c.V4 = function (a) {
          return { kind: 10, fields: a };
        };
        __c.W4 = function (...a) {
          return { kind: 11, tOa: { type: void 0 }, ag: a };
        };
        __c.X4 = function (a) {
          return () => ({ ...kkc, ...a });
        };
        lkc = function (a, b) {
          return { element: __c.T4(a), exports: b };
        };
        nkc = async function (a, b) {
          const c = b.requestId,
            d = b.path;
          b = b.payload;
          const e = a.dX.get(d);
          if (e) {
            a.D4.n_.send({ type: "ack", requestId: c });
            var f = setInterval(
              () => a.D4.n_.send({ type: "ack", requestId: c }),
              9e3
            );
            try {
              var g = await e(b);
              clearInterval(f);
              a.D4.n_.send({ type: "response", requestId: c, payload: g });
            } catch (k) {
              clearInterval(f);
              g = "internal_error";
              b =
                "Something went wrong on our end, if this issue persists please contact us.";
              if (k instanceof Y4) {
                var h = k;
                k.code === "internal_error"
                  ? a.K.Ib(k, {
                      He: "Internal error in comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : ((g = k.code), (b = k.Qub));
              } else
                a.Fvb
                  ? a.K.Ib(k, {
                      He: "Unexpected error type thrown from comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : a.bfb.error(k);
              g = mkc(a.D4, c, g, b);
              g.ok ||
                a.K.pN(g.error, {
                  He: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
            }
            if (h != null)
              for (const k of a.chb)
                try {
                  k(h);
                } catch (l) {
                  a.K.JD(l, { He: "Error executing errorObserver" });
                }
          } else
            (h = mkc(
              a.D4,
              c,
              "internal_error",
              `No request handler configured for path: "${d}".`
            )),
              h.ok ||
                a.K.pN(h.error, {
                  He: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
        };
        mkc = function (a, b, c, d) {
          return a.n_.send({
            type: "error",
            requestId: b,
            code: c,
            message: d,
          });
        };
        pkc = function ({ src: a, srcdoc: b, sandbox: c }) {
          if (b.length !== 0 || !c.contains("allow-same-origin")) return okc;
          a = new URL(a).origin;
          return a === "null" ? okc : { pGa: a, s1a: a };
        };
        skc = async function (
          a,
          b,
          c,
          { addEventListener: d, removeEventListener: e } = window
        ) {
          const f = new qkc(6e4),
            g = pkc(c),
            h = c.contentWindow;
          if (!h)
            throw new Y4({
              code: "internal_error",
              message: "contentWindow is missing from iFrame",
            });
          c = ({ data: k, source: l, origin: m }) => {
            var n;
            (k === null || k === void 0
              ? 0
              : (n = k.source) === null || n === void 0
              ? 0
              : n.startsWith("react-")) ||
              (m !== g.pGa
                ? rkc(m) ||
                  b.info("received message event from an unexpected origin", {
                    extra: new Map([
                      ["expected", g.pGa],
                      ["actual", m],
                    ]),
                  })
                : l !== h
                ? l !== window &&
                  b.info("source and content window do not match", {
                    extra: new Map([
                      [
                        "data.source",
                        k === null || k === void 0 ? void 0 : k.source,
                      ],
                    ]),
                  })
                : ((l = k
                    ? k.source
                      ? k.source !== "iframe"
                        ? Ia("invalid source")
                        : (0, __c.Ha)()
                      : Ia("'source' is missing in MessageEvent data object")
                    : Ia("missing 'data' field in MessageEvent")),
                  l.ok
                    ? (h.postMessage({ source: "parent" }, g.s1a, [a]),
                      f.resolve(void 0))
                    : b.yH(l.error, {
                        extra: new Map([
                          [
                            "data.source",
                            k === null || k === void 0 ? void 0 : k.source,
                          ],
                        ]),
                      })));
          };
          d("message", c);
          try {
            await f.promise();
          } finally {
            e("message", c);
          }
        };
        rkc = function (a) {
          return tkc.some((b) => a.endsWith(b));
        };
        ukc = function (a, b, c, d) {
          a.handle("SET_CONFIG", async (e) => {
            if (e === void 0)
              throw new Y4({
                code: "internal_error",
                message: "SET_CONFIG: request cannot be undefined.",
              });
            e = b.Ta(e);
            e = await c(e);
            if (d) return d.Xa(e);
          });
        };
        xkc = async function (a, b) {
          a = await a.raa.request("RENDER_EDIT_PANEL", vkc.Xa(b));
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${"RENDER_EDIT_PANEL"} request: ${
                a.error
              }`
            );
          if (a.value == null)
            throw Error("RENDER_EDIT_PANEL: Result cannot be empty");
          return wkc.Ta(a.value);
        };
        Akc = function (a, b) {
          ukc(a, ykc, (c) => b.Jta(c), zkc);
        };
        Ekc = async function (a, b) {
          a = await a.raa.request("RENDER_ELEMENT", Bkc.Xa(b));
          a = Ckc(a, "RENDER_ELEMENT");
          return Dkc.Ta(a);
        };
        Hkc = async function (a, b) {
          a = await a.raa.request("SET_CAPABILITY", Fkc.Xa(b));
          a = Ckc(a, "SET_CAPABILITY");
          return Gkc.Ta(a);
        };
        Kkc = function (a, b) {
          ukc(a, Ikc, (c) => b.Jta(c), Jkc);
        };
        Ckc = function (a, b) {
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${b} request: ${a.error}`
            );
          if (a.value == null) throw Error(`${b}: Result cannot be empty`);
          return a.value;
        };
        Nkc = async function (a, b, c) {
          const { port1: d, port2: e } = new MessageChannel(),
            f = new Lkc(d, b);
          await skc(e, b, a, window);
          a = new Mkc(f);
          c && Kkc(f, c);
          return a;
        };
        Pkc = async function (a, b, c) {
          const { port1: d, port2: e } = new MessageChannel(),
            f = new Lkc(d, b);
          await skc(e, b, a, window);
          a = new Okc(f);
          Akc(f, c);
          return a;
        };
        Rkc = async function (a, b, c, d) {
          if (a.LI)
            try {
              return (await a.LI.qLb(new Qkc({ id: b, mlb: !0, $i: c, XT: d })))
                .url;
            } catch (e) {
              a.K.Ib(e);
            }
        };
        __c.Ec.prototype.pN = __c.ia(3, function (a, b) {
          this.console.error(...__c.Dc(this, "critical", a, b));
        });
        __c.II.prototype.pN = __c.ia(2, function (a, b) {
          this.lu.pN(a, b);
          __c.GI(this, a, "critical", b);
        });
        var Skc = __webpack_require__(400770).reaction;
        var Tkc = __webpack_require__(31968).jsx;
        var Ukc = __webpack_require__(845212),
          Vkc = Ukc.useEffect,
          Wkc = Ukc.useState;
        var Xkc = __c.U4()(({ Ro: { poa: a } }) => ({
          element: {
            type: 0,
            AB: ({ element: b }) => {
              const c = a.Uhb(b.roa);
              if (!c) throw Error(`Blueprint ${b.roa} not found`);
              const d = c.variants.get(b.O6a);
              if (!d)
                throw Error(
                  `Variant ${b.O6a} not found for blueprint ${b.roa}`
                );
              return b.type === "source"
                ? { Oa: d.elements }
                : {
                    Oa: new __c.NW(() =>
                      d.elements.map((e) => {
                        e = __c.sH.ba(e);
                        return __c.JG.create({
                          ...e,
                          locked: !0,
                          Jh: !0,
                          oi: d.oi,
                        });
                      })
                    ),
                  };
            },
          },
          exports: {},
        }));
        var kkc = Object.freeze({
          document: Object.freeze({}),
          element: Object.freeze({}),
        });
        var Ykc = __c.W4(
            V4({
              type: PW("type", "anchoring"),
              value: (0, __c.RW)("value", 1, 2, 3),
            }),
            V4({ type: PW("type", "boolean"), value: (0, __c.UW)("value") }),
            V4({
              type: PW("type", "block_alignment"),
              value: (0, __c.VW)("value"),
            }),
            V4({
              type: PW("type", "non-negative-double"),
              value: (0, __c.VW)("value"),
            }),
            V4({ type: PW("type", "double"), value: (0, __c.VW)("value") }),
            V4({ type: PW("type", "string"), value: (0, __c.TW)("value") }),
            V4({
              type: PW("type", "richtext2"),
              value: (0, __c.XW)("value", "Richtext2"),
            }),
            V4({
              type: PW("type", "text_anchor"),
              value: (0, __c.RW)("value", 1, 2, 3),
            }),
            V4({
              type: PW("type", "text_effects"),
              value: (0, __c.TW)("value"),
            }),
            V4({ type: PW("type", "text_flow"), value: (0, __c.TW)("value") }),
            V4({
              type: PW("type", "image_fill"),
              value: (0, __c.XW)("value", "Fill"),
            }),
            V4({
              type: PW("type", "video_fill"),
              value: (0, __c.XW)("value", "Fill"),
            })
          ),
          Zkc = (0, __c.g_b)("overrides", Ykc);
        var $kc = __c.X4({
          element: __c.LW({
            roa: (0, __c.QW)("bid"),
            O6a: (0, __c.QW)("vid"),
            type: (0, __c.RW)("t", "source", "instance"),
            domain: (0, __c.RW)("d", "document", "brand"),
            version: (0, __c.d_b)("v", { min: 1 }),
            Ar: Zkc,
          }),
        });
        var alc = __c.X4({
          element: __c.LW({ $La: (0, __c.b_b)("i"), config: (0, __c.TW)("c") }),
        });
        var blc = class {};
        var Y4 = class extends Error {
          constructor(a) {
            a.code = a.code;
            const b = a.message.endsWith(".") ? "" : ".";
            super(`[${a.code}]:  ${a.message}${b}`.trim());
            this.code = a.code;
            this.name = "CanvaError";
            this.Qub = a.message;
            Object.setPrototypeOf(this, Y4.prototype);
          }
        };
        var clc = class {
          constructor(a, b, c) {
            this.handler = a;
            this.port = b;
            this.K = c;
            this.send = (d) => {
              try {
                return this.port.postMessage(d), (0, __c.Ha)();
              } catch (e) {
                return this.K.Ib(e), Ia(e);
              }
            };
            this.dsb = (d) => {
              this.K.Ib(d);
            };
            this.Hxa = ({ data: d }) => {
              if (d)
                try {
                  this.handler.Vub(d);
                } catch (e) {
                  this.K.Ib(e);
                }
              else
                this.K.error(
                  new Y4({
                    code: "internal_error",
                    message: "missing data in 'MessageEvent'",
                  })
                );
            };
            this.port.onmessage = this.Hxa;
            this.port.onmessageerror = this.dsb;
          }
        };
        var dlc = class extends Error {
            constructor() {
              super("[internal_error] Comms promise timed out.");
            }
          },
          qkc = class {
            reset(a) {
              a && (this.timeoutMs = a);
              this.setTimeout();
            }
            resolve(a) {
              clearTimeout(this.$d);
              this.Pvb(a);
            }
            reject(a) {
              clearTimeout(this.$d);
              this.T_a(a);
            }
            promise() {
              return this.p;
            }
            setTimeout() {
              clearTimeout(this.$d);
              this.$d = setTimeout(() => {
                this.T_a(new dlc());
              }, this.timeoutMs);
            }
            constructor(a) {
              this.timeoutMs = a;
              this.p = new Promise((b, c) => {
                this.Pvb = b;
                this.T_a = c;
              });
              this.setTimeout();
            }
          };
        var elc = class {
          request(a, b) {
            const c = this.wZa,
              d = new qkc(5e3),
              e = this.Hvb(),
              f = (async function () {
                c.set(e, d);
                try {
                  const g = await d.promise();
                  return (0, __c.Ha)(g);
                } catch (g) {
                  return g instanceof dlc
                    ? Ia(
                        new Y4({
                          code: "internal_error",
                          message: `Comms promise timed out (${a}).`,
                        })
                      )
                    : Ia(g);
                } finally {
                  c.delete(e);
                }
              })();
            b = this.send(e, a, b);
            b.ok ||
              (this.K.Ib(b.error, {
                He: "unable to send request",
                tags: new Map([
                  ["type", "request"],
                  ["path", a],
                ]),
              }),
              d.reject(b.error));
            return f;
          }
          constructor(a, b) {
            this.send = a;
            this.K = b;
            this.Hvb = __c.fo;
            this.wZa = new Map();
          }
        };
        var flc = class {
          handle(a, b) {
            if (this.dX.has(a))
              throw new Y4({
                code: "internal_error",
                message: `Handler for '${a}' is already defined.`,
              });
            this.dX.set(a, b);
          }
          constructor(a, b) {
            var c = console;
            this.D4 = a;
            this.K = b;
            this.Fvb = !0;
            this.bfb = c;
            this.dX = new Map();
            this.chb = new Set();
          }
        };
        var Lkc = class {
            constructor(a, b) {
              this.request = (c, d) => this.client.request(c, d);
              this.handle = (c, d) => this.dX.handle(c, d);
              a = new glc(
                (c) => {
                  switch (c.type) {
                    case "ack":
                    case "error":
                    case "response":
                      var d = this.client;
                      const e = c.requestId,
                        f = c.type,
                        g = d.wZa.get(e);
                      if (g)
                        switch (f) {
                          case "response":
                            g.resolve(c.payload);
                            break;
                          case "ack":
                            g.reset(2e4);
                            break;
                          case "error":
                            g.reject(
                              new Y4({ code: c.code, message: c.message })
                            );
                            break;
                          default:
                            throw new __c.E(c);
                        }
                      else
                        f !== "ack" &&
                          d.K.error(
                            "request has already been handled and resolved or was not sent from this client",
                            {
                              tags: new Map([
                                ["type", f],
                                ["requestId", `${e}`],
                              ]),
                            }
                          );
                      break;
                    case "request":
                      nkc(this.dX, c);
                      break;
                    default:
                      throw new __c.E(c);
                  }
                },
                a,
                b.bg("bus")
              );
              this.client = new elc(a.jA, b.bg("client"));
              this.dX = new flc(a, b.bg("requestHandler"));
            }
          },
          glc = class {
            constructor(a, b, c) {
              this.mda = a;
              this.jA = (d, e, f) =>
                this.n_.send({
                  type: "request",
                  requestId: d,
                  path: e,
                  payload: f,
                });
              this.osb = (d) => {
                switch (d.type) {
                  case "ack":
                    this.mda({ type: "ack", requestId: d.requestId });
                    break;
                  case "error":
                    this.mda({
                      type: "error",
                      requestId: d.requestId,
                      code: d.code,
                      message: d.message,
                    });
                    break;
                  case "response":
                    this.mda({
                      type: "response",
                      requestId: d.requestId,
                      payload: d.payload,
                    });
                    break;
                  case "request":
                    this.mda({
                      type: "request",
                      requestId: d.requestId,
                      path: d.path,
                      payload: d.payload,
                    });
                    break;
                  default:
                    throw new __c.E(d);
                }
              };
              this.n_ = new clc({ Vub: this.osb }, b, c);
            }
          };
        var okc = { pGa: "null", s1a: "*" };
        var tkc =
          "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(
            " "
          );
        var vkc = K(() => ({ config: __c.Y(1) }));
        var wkc = K(() => ({}));
        var ykc = K(() => ({ config: X(1) }));
        var zkc = K(() => ({}));
        var Okc = class {
          constructor(a) {
            this.raa = a;
          }
        };
        var Bkc = K(() => ({ config: __c.Y(1) }));
        var Z4 = K(() => ({
          type: __c.F("A?", 1, "RECOLORABLE"),
          id: X(1),
          value: X(2),
        }));
        var hlc = K(() => ({ borderRadius: gJ(1), borderWidth: gJ(2) }));
        var $4 = K(() => ({
          type: __c.F("A?", 2, "BORDERABLE"),
          id: X(1),
          value: __c.Sa(2, hlc),
        }));
        var Dkc = K(() => ({
          config: X(1),
          width: gJ(2),
          height: gJ(3),
          XW: __c.Ta(4, Z4),
          obb: __c.Ta(5, $4),
        }));
        var Fkc = __c.hb(
          () => ({ type: [1, Z4, 2, $4] }),
          () => ({})
        );
        var Gkc = K(() => ({ config: X(1), width: gJ(2), height: gJ(3) }));
        var Ikc = K(() => ({
          config: X(1),
          width: gJ(2),
          height: gJ(3),
          XW: __c.Ta(4, Z4),
          obb: __c.Ta(5, $4),
        }));
        var Jkc = K(() => ({}));
        var Mkc = class {
          constructor(a) {
            this.raa = a;
          }
        };
        var ilc = class {
          async xz(a, b) {
            const c = await Pkc(a, this.K, {
                Jta: (e) => {
                  var f;
                  (f = this.config.Aba) === null || f === void 0 || f.ZFa(e, b);
                  return new zkc();
                },
              }),
              d = Skc(
                () => b.config,
                async (e) => xkc(c, { config: e })
              );
            this.Fg.set(a, d);
            await xkc(c, { config: b.config });
          }
          FP(a) {
            var b;
            (b = this.Fg.get(a)) === null || b === void 0 || b();
            this.Fg.delete(a);
          }
          constructor(a, b) {
            this.config = a;
            this.K = b;
            this.Fg = new Map();
          }
        };
        var Qkc = K(() => ({
          id: X("id", 1),
          sMb: __c.pJ("includeEmbed", 2),
          tMb: __c.pJ("includeFavicon", 3),
          mlb: __c.pJ("includeFileUrls", 4),
          uMb: __c.pJ("includeFileEmbedHtml", 5),
          $i: __c.Y("documentId", 21),
          XT: __c.Y("documentExtension", 22),
        }));
        var jlc = class {
          async xz(a, b) {
            var c;
            const d = (g) => Hkc(f, new Z4(g)),
              e = this.config.Aba;
            e &&
              (c = {
                Jta: (g) => {
                  e.ZFa(g, b, d);
                  return new Jkc();
                },
              });
            const f = await Nkc(a, this.K, c);
            c = Skc(
              () => b.config,
              async (g) => {
                const h = await Ekc(f, { config: g });
                h.config &&
                  h.config !== g &&
                  (e === null || e === void 0 || e.ZFa(h, b, d));
              }
            );
            this.Fg.set(a, c);
            a = await Ekc(f, { config: b.config });
            e === null || e === void 0 || e.ZFa(a, b, d);
          }
          FP(a) {
            var b;
            (b = this.Fg.get(a)) === null || b === void 0 || b();
            this.Fg.delete(a);
          }
          constructor(a, b, c) {
            this.config = a;
            this.LI = b;
            this.K = c;
            this.Fg = new Map();
          }
        };
        var klc = __c.U4()(({ qaa: a, Ro: b }) => {
          a = a.K;
          const c = new blc(),
            d = new jlc(c, b.LI, a);
          return lkc(
            ({
              data: { element: e },
              Om: { T8a: f, j9a: g },
              Xh: { page: h },
            }) => {
              const [k, l] = Wkc(void 0),
                m = h.container.id,
                n = h.container.extension;
              Vkc(() => {
                Rkc(d, e.$La, m, n).then((p) => l(p));
              }, [e.$La, m, n]);
              return k
                ? Tkc(f, { url: k, xz: (p) => d.xz(p, e), FP: (p) => d.FP(p) })
                : Tkc(g, {});
            },
            { config: c, sIb: new ilc(c, a) }
          );
        });
        __c.TYa = {
          Xlb: function (a) {
            function b({ Ro: h, gA: k, $g: l, P7: m = "default" }) {
              const n = k.id;
              k = k.wt;
              h = d.Tlb(
                n,
                k,
                l({
                  qaa: { ...f, ab: e.Eu(`widgets.rendering.clients.${m}`) },
                  Ro: h,
                })
              );
              return { id: n, wt: k, LRb: h, P7: m };
            }
            const c = a.FBb,
              d = a.L8,
              e = a.xf,
              f = a.qaa,
              g = a.Ro;
            return {
              YKa: b({
                Ro: { poa: g.poa },
                gA: c.YKa,
                $g: Xkc,
                P7: "blueprint",
              }),
              Vqa: c.Vqa
                ? Promise.all([
                    c.Vqa,
                    __webpack_require__.me(270376).then(() => __c.llc),
                    __webpack_require__.me(309241).then(() => __c.mlc),
                    __webpack_require__.me(726606).then(() => __c.nlc),
                    __webpack_require__.me(555219).then(() => __c.olc),
                    __webpack_require__.me(756388).then(() => __c.plc),
                    __webpack_require__.me(516583).then(() => __c.qlc),
                    __webpack_require__.me(93698).then(() => __c.rlc),
                  ]).then(([h, k, l, m, n, p, q, r]) => ({
                    aOa: b({ Ro: void 0, gA: h.aOa, $g: k.$g }),
                    bOa: b({ Ro: void 0, gA: h.bOa, $g: l.$g }),
                    cOa: b({ Ro: void 0, gA: h.cOa, $g: m.$g }),
                    dOa: b({ Ro: void 0, gA: h.dOa, $g: n.$g }),
                    eOa: b({ Ro: void 0, gA: h.eOa, $g: p.$g }),
                    fOa: b({ Ro: void 0, gA: h.fOa, $g: q.$g }),
                    gOa: b({ Ro: void 0, gA: h.gOa, $g: r.$g }),
                  }))
                : void 0,
              ZLa: b({ Ro: { LI: g.LI }, gA: c.ZLa, $g: klc, P7: "codelet" }),
              form: c.form
                ? Promise.all([
                    c.form,
                    __webpack_require__.me(313335).then(() => __c.slc),
                  ]).then(([h, k]) =>
                    b({ Ro: { Msa: g.Msa }, gA: h, $g: k.$g, P7: "form" })
                  )
                : void 0,
              scene: c.scene
                ? Promise.all([
                    c.scene,
                    __webpack_require__.me(416029).then(() => __c.tlc),
                  ]).then(([h, k]) =>
                    b({ Ro: void 0, gA: h, $g: k.$g, P7: "scene" })
                  )
                : void 0,
            };
          },
          Ylb: function (a) {
            function b(e, f) {
              f = c.Ulb(e, f());
              return { id: e, wt: f };
            }
            const c = a.ZGa,
              d = __c.Gp("c79472f0", !1);
            return {
              YKa: b("w:wnJF5T87v", $kc),
              Vqa: a.mgb
                ? Promise.all([
                    __webpack_require__.me(270376).then(() => __c.llc),
                    __webpack_require__.me(309241).then(() => __c.mlc),
                    __webpack_require__.me(726606).then(() => __c.nlc),
                    __webpack_require__.me(555219).then(() => __c.olc),
                    __webpack_require__.me(756388).then(() => __c.plc),
                    __webpack_require__.me(516583).then(() => __c.qlc),
                    __webpack_require__.me(93698).then(() => __c.rlc),
                  ]).then(([e, f, g, h, k, l, m]) => ({
                    aOa: b("w:cm9wgGptP", e.fo),
                    bOa: b("w:yLMS4dWnl", f.fo),
                    cOa: b("w:2flp30CGQ", g.fo),
                    dOa: b("w:1Nv6K6Dtv", h.fo),
                    eOa: b("w:5Nv6K6Dtv", k.fo),
                    fOa: b("w:6Nv6K6Dtv", l.fo),
                    gOa: b("w:7Nv6K6Dtv", m.fo),
                  }))
                : void 0,
              ZLa: b("w:JR4G8hDDg", alc),
              form: d
                ? __webpack_require__
                    .me(313335)
                    .then(() => __c.slc)
                    .then((e) => b("widget:form", e.fo))
                : void 0,
              scene: a.Jgb
                ? __webpack_require__
                    .me(416029)
                    .then(() => __c.tlc)
                    .then((e) => b("w:2pbXJMtm1", e.fo))
                : void 0,
            };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/c17ad41233093a09.js.map
