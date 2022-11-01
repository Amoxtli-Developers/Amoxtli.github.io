google.maps.__gjsload__('overlay', function(_) {
    var Iu = function(a) {
            this.g = a
        },
        Gla = function() {},
        Ju = function(a) {
            a.Ro = a.Ro || new Gla;
            return a.Ro
        },
        Hla = function(a) {
            this.Ea = new _.qi(function() {
                var b = a.Ro;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Jn && a.onAdd) a.onAdd();
                        b.Jn = !0;
                        a.draw()
                    }
                } else {
                    if (b.Jn)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Jn = !1
                }
            }, 0)
        },
        Ila = function(a, b) {
            function c() {
                return _.ri(e.Ea)
            }
            var d = Ju(a),
                e = d.tm;
            e || (e = d.tm = new Hla(a));
            _.hb(d.Oa || [], _.wf);
            var f = d.Na = d.Na || new _.Ps,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center",
                g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.Ms = d.Ms || new Iu(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Oa = [_.M(a, "panes_changed", c), _.M(g, "zoom_changed", c), _.M(g, "offset_changed", c), _.M(b, "projection_changed", c), _.M(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.Mf && (_.vg(b, "Ox"), _.tg(b, 148440))
        },
        Mla = function(a) {
            if (a) {
                var b = a.getMap();
                if (Jla(a) !== b && b && b instanceof _.Mf) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Kla(b, a, c.overlayLayer) : c.g.then(function(d) {
                        d = d.Fa;
                        var e = new Ku(b, d);
                        d.Wa(e);
                        c.overlayLayer = e;
                        Lla(a);
                        Mla(a)
                    })
                }
            }
        },
        Lla = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.Df(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        Jla = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Kla = function(a, b, c) {
            this.map = a;
            this.g = b;
            this.j = c;
            this.h = !1;
            _.vg(this.map, "Ox");
            _.tg(this.map, 148440);
            c.Ue(this)
        },
        Nla = function(a, b) {
            a.g.get("projection") != b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        },
        Ku = function(a, b) {
            this.V = a;
            this.Ba = b;
            this.g = null;
            this.h = []
        };
    _.Oa(Iu, _.P);
    Iu.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.pe(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var Lu = {};
    _.Oa(Hla, _.P);
    Lu.Ue = function(a) {
        if (a) {
            var b = a.getMap();
            (Ju(a).rs || null) !== b && (b && Ila(a, b), Ju(a).rs = b)
        }
    };
    Lu.Df = function(a) {
        var b = Ju(a),
            c = b.Na;
        c && c.unbindAll();
        (c = b.Ms) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Oa && _.hb(b.Oa, _.wf);
        b.Oa = null;
        b.tm && (b.tm.Ea.dd(), b.tm = null);
        delete Ju(a).rs
    };
    var Mu = {};
    Kla.prototype.draw = function() {
        this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
        this.g.draw && this.g.draw()
    };
    Ku.prototype.dispose = function() {};
    Ku.prototype.lc = function(a, b, c, d, e, f, g, h) {
        var k = this.g = this.g || new _.xq(this.V, this.Ba, function() {});
        k.lc(a, b, c, d, e, f, g, h);
        a = _.A(this.h);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Nla(b, k), b.draw()
    };
    Ku.prototype.Ue = function(a) {
        this.h.push(a);
        this.g && Nla(a, this.g);
        this.Ba.refresh()
    };
    Ku.prototype.Df = function(a) {
        _.ob(this.h, a)
    };
    Mu.Ue = Mla;
    Mu.Df = Lla;
    _.lf("overlay", {
        kq: function(a) {
            if (a) {
                (0, Lu.Df)(a);
                (0, Mu.Df)(a);
                var b = a.getMap();
                b && (b instanceof _.Mf ? (0, Mu.Ue)(a) : (0, Lu.Ue)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.$q(a, {
                onClick: function(b) {
                    _.Tl(b.event.Ja)
                },
                Pc: function(b) {
                    return _.Eq(b)
                },
                vh: function(b) {
                    return _.Fq(b)
                },
                xd: function(b) {
                    return _.Fq(b)
                },
                Xc: function(b) {
                    return _.Gq(b)
                }
            }).Ei(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.pf);
            a.addEventListener("contextmenu", _.pf);
            a.addEventListener("dblclick", _.pf);
            a.addEventListener("mousedown",
                _.pf);
            a.addEventListener("mousemove", _.pf);
            a.addEventListener("MSPointerDown", _.pf);
            a.addEventListener("pointerdown", _.pf);
            a.addEventListener("touchstart", _.pf);
            a.addEventListener("wheel", _.pf)
        }
    });
});