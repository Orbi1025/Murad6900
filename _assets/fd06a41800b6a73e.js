(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [8241],
  {
    /***/ 744054: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var KW;
        var MW;
        var w = __c.w;
        var GW, JW, WZb;
        GW = function () {
          throw Error("ref not found");
        };
        __c.HW = function (a) {
          return { kind: 0, WK: a };
        };
        __c.IW = function (a) {
          return { kind: 3, range: a };
        };
        JW = function (...a) {
          return { kind: 4, values: new Set(a) };
        };
        WZb = function (a) {
          return { kind: 5, itemType: a };
        };
        KW = __c.KW = function (a, b, c) {
          return (d, ...e) => ({ key: d, CBa: a, MK: b, type: c(...e) });
        };
        __c.LW = function (a) {
          const b = new Set();
          for (const d of Object.values(a)) {
            w(!b.has(d.key), 'duplicate key: "{}"', d.key);
            var c;
            if ((c = d.CBa === 1))
              a: switch (((c = d.type), c.kind)) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                  c = !1;
                  break a;
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                  c = !0;
                  break a;
                default:
                  throw new __c.E(c);
              }
            w(!c, 'settable mutable: "{}"', d.key);
            b.add(d.key);
          }
          return a;
        };
        MW = __c.MW = __webpack_require__(400770).computed;
        __c.XZb = Object.freeze({
          empty: !0,
          count() {
            return 0;
          },
          toArray() {
            return [];
          },
          xk() {
            return new Map();
          },
          first() {},
          last() {},
          next() {
            GW();
          },
          Qb() {
            GW();
          },
          ue() {
            GW();
          },
          Ku() {
            GW();
          },
          has() {
            return !1;
          },
          Wq() {
            return this;
          },
          map() {
            return [];
          },
          flatMap() {
            return [];
          },
          filter() {
            return [];
          },
          forEach() {},
          reduce(a, b) {
            return b;
          },
          some() {
            return !1;
          },
          every() {
            return !0;
          },
          [Symbol.iterator]() {
            return [][Symbol.iterator]();
          },
        });
        var YZb;
        YZb = Symbol.iterator;
        __c.NW = class {
          static D(a) {
            __c.O(a, { Al: MW, Lp: MW });
          }
          get Al() {
            return this.wab().map((a) => {
              let b = this.kSa.get(a);
              b == null && ((b = `${this.$kb++}`), this.kSa.set(a, b));
              return { id: b, ref: a };
            });
          }
          get Lp() {
            const a = new Map();
            this.Al.forEach((b, c) => b && a.set(b.ref, c));
            return a;
          }
          Nj(a) {
            return __c.B(this.Lp.get(a), "ref not found");
          }
          get empty() {
            return !this.Al.length;
          }
          count() {
            return this.Al.length;
          }
          toArray() {
            return this.Al.map((a) => a.ref);
          }
          xk() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get UN() {
            const a = this.Al[0];
            return a && a.ref;
          }
          get XO() {
            const a = this.Al[this.Al.length - 1];
            return a && a.ref;
          }
          first(a) {
            if (!a) return this.UN;
            const b = this.Al.find((c) => a(c.ref));
            return b && b.ref;
          }
          last(a) {
            if (!a) return this.XO;
            const b = this.Al;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.ref)) return d.ref;
            }
          }
          next(a, b) {
            const c = this.Al;
            for (a = this.Nj(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          Qb(a, b) {
            const c = this.Al;
            for (a = this.Nj(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          ue(a, b) {
            a = this.Lp.get(a);
            b = this.Lp.get(b);
            w(a != null);
            w(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          Ku(a) {
            return this.Al[this.Nj(a)].id;
          }
          has(a) {
            return this.Lp.has(a);
          }
          Wq(a) {
            return new __c.yK(this, a);
          }
          map(a) {
            return this.Al.map(({ ref: b, id: c }) => a(b, c));
          }
          flatMap(a) {
            return this.Al.flatMap(({ ref: b, id: c }) => a(b, c));
          }
          filter(a) {
            return this.Al.filter((b) => a(b.ref, b.id)).map((b) => b.ref);
          }
          forEach(a) {
            this.Al.forEach((b, c) => a(b.ref, b.id, c));
          }
          reduce(a, b) {
            return this.Al.reduce((c, d) => a(c, d.ref, d.id), b);
          }
          some(a) {
            return this.Al.some((b) => a(b.ref, b.id));
          }
          every(a) {
            return this.Al.every((b) => a(b.ref, b.id));
          }
          [YZb]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.wab = a;
            this.$kb = (__c.NW.D(this), 0);
            this.kSa = new WeakMap();
          }
        };
        __c.ZZb = Symbol.iterator;
        var $Zb,
          a_b = class {
            get value() {
              return this.box.get();
            }
            constructor(a, b) {
              this.id = a;
              this.box = b;
            }
          };
        $Zb = Symbol.iterator;
        __c.OW = class {
          static D(a) {
            __c.O(a, { Lp: MW, UN: MW, XO: MW });
          }
          get Lp() {
            const a = new Map();
            this.cells.forEach((b, c) => a.set(b.value, c));
            return a;
          }
          Nj(a) {
            return __c.B(this.Lp.get(a), "ref not found");
          }
          get empty() {
            return !this.cells.length;
          }
          count() {
            return this.cells.length;
          }
          toArray() {
            return this.cells.map((a) => a.value);
          }
          xk() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get UN() {
            const a = this.cells[0];
            return a && a.value;
          }
          get XO() {
            const a = this.cells[this.cells.length - 1];
            return a && a.value;
          }
          first(a) {
            if (!a) return this.UN;
            const b = this.cells.find((c) => a(c.value));
            return b && b.value;
          }
          last(a) {
            if (!a) return this.XO;
            const b = this.cells;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.value)) return d.value;
            }
          }
          next(a, b) {
            const c = this.cells;
            for (a = this.Nj(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          Qb(a, b) {
            const c = this.cells;
            for (a = this.Nj(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          ue(a, b) {
            a = this.Lp.get(a);
            b = this.Lp.get(b);
            w(a != null);
            w(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          Ku(a) {
            return this.cells[this.Nj(a)].id;
          }
          has(a) {
            return this.Lp.has(a);
          }
          Wq(a) {
            return new __c.yK(this, a);
          }
          map(a) {
            return this.cells.map((b) => a(b.value, b.id));
          }
          flatMap(a) {
            return this.cells.flatMap((b) => a(b.value, b.id));
          }
          filter(a) {
            return this.cells
              .filter((b) => a(b.value, b.id))
              .map((b) => b.value);
          }
          forEach(a) {
            this.cells.forEach((b) => a(b.value, b.id));
          }
          reduce(a, b) {
            return this.cells.reduce((c, d) => a(c, d.value, d.id), b);
          }
          some(a) {
            return this.cells.some((b) => a(b.value, b.id));
          }
          every(a) {
            return this.cells.every((b) => a(b.value, b.id));
          }
          [$Zb]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.cells = (__c.OW.D(this), void 0);
            this.cells = a.map((b, c) => new a_b(String(c), b));
          }
        };
        __c.b_b = KW(0, 0, __c.HW);
        __c.PW = KW(0, 0, JW);
        __c.QW = KW(1, 0, __c.HW);
        __c.RW = KW(1, 0, JW);
        __c.SW = KW(1, 0, __c.IW);
        __c.c_b = KW(1, 0, WZb);
        __c.TW = KW(1, 1, __c.HW);
        __c.UW = KW(1, 1, function () {
          return { kind: 1 };
        });
        __c.VW = KW(1, 1, function (a) {
          return { kind: 2, range: a };
        });
        __c.d_b = KW(1, 1, __c.IW);
        __c.WW = KW(1, 1, JW);
        __c.e_b = KW(1, 1, WZb);
        __c.XW = KW(0, 0, function (a) {
          return { kind: 7, name: a };
        });
        __c.f_b = KW(0, 0, function (a) {
          return { kind: 8, itemType: a };
        });
        __c.g_b = KW(0, 1, function (a) {
          return { kind: 9, itemType: a };
        });
        __c.h_b = __c.LW({});
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/fd06a41800b6a73e.js.map
