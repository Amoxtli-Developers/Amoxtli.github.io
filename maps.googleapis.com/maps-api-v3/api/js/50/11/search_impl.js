google.maps.__gjsload__('search_impl', function(_) {
    var jab = function(a) {
            _.F.call(this, a)
        },
        lab = function(a) {
            var b = _.Vi.Va;
            a = a.toArray();
            kab || (kab = {
                K: "sssM",
                T: ["ss"]
            });
            return b.call(_.Vi, a, kab)
        },
        mab = function(a, b) {
            _.D(a.m, 3, b)
        },
        X$ = function(a) {
            _.F.call(this, a)
        },
        nab = function() {
            var a = _.Uj,
                b = _.ij;
            this.h = _.kg;
            this.g = _.Kk(_.ts, a, _.Us + "/maps/api/js/LayersService.GetFeature", b)
        },
        qab = function(a, b, c) {
            var d = _.OC(new nab);
            c.Gr = (0, _.La)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.NCa(c, _.wJ(b));
            var e = [];
            e.push(_.M(c, "click", (0, _.La)(oab, null, a)));
            _.hb(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.M(c, f, (0, _.La)(pab, null, a, f)))
            });
            e.push(_.M(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        oab = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.S(e.m, 2) ? new _.Pe(_.Zm(e.getLocation().m, 1), _.Zm(e.getLocation().m, 2)) : null;
                f.fields = {};
                for (var g = _.E(e.m, 3), h = 0; h < g; ++h) {
                    var k = _.Rk(e.m, 3, _.CJ, h);
                    f.fields[k.getKey()] = k.Ka()
                }
            }
            _.N(a, "click", b, c, d, f)
        },
        pab = function(a, b, c, d, e, f, g) {
            var h =
                null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.N(a, b, c, d, e, h, g)
        },
        rab = function() {};
    _.B(jab, _.F);
    jab.prototype.Yb = function() {
        return _.L(this.m, 2)
    };
    var kab;
    _.B(X$, _.F);
    X$.prototype.getStatus = function() {
        return _.K(this.m, 1, -1)
    };
    X$.prototype.getLocation = function() {
        return _.I(this.m, 2, _.mn)
    };
    nab.prototype.load = function(a, b) {
        function c(g) {
            g = new X$(g);
            b(g)
        }
        var d = new jab;
        _.D(d.m, 1, a.layerId.split("|")[0]);
        _.D(d.m, 2, a.featureId);
        mab(d, _.Od(_.Vd(this.h)));
        for (var e in a.parameters) {
            var f = _.Ld(d.m, 4, _.CJ);
            _.D(f.m, 1, e);
            _.D(f.m, 2, a.parameters[e])
        }
        a = lab(d);
        this.g(a, c, c);
        return a
    };
    nab.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    rab.prototype.dv = function(a) {
        if (_.Di[15]) {
            var b = a.Od,
                c = a.Od = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.h, b.set(b.get().Ef(a.g))) : a.g && _.iDa(a.g, b) && (_.hb(a.h || [], _.wf), a.h = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("travelMapRequest"),
                    p = a.get("searchPipeMetadata"),
                    q = a.get("overlayLayer"),
                    r = a.get("caseExperimentIds");
                b = new _.im;
                d = d.split("|");
                b.layerId = d[0];
                for (var t =
                        1; t < d.length; ++t) {
                    var u = _.A(d[t].split(":")),
                        w = u.next().value;
                    u = _.ja(u);
                    b.parameters[w] = u.join(":")
                }
                e && (b.spotlightDescription = new _.mp(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.om(g));
                m && (b.travelMapRequest = new _.os(m));
                h && (b.mapsApiLayer = new _.Uk(h));
                l && (b.mapFeatures = l);
                p && (b.searchPipeMetadata = new _.eq(p));
                q && (b.overlayLayer = new _.vn(q));
                r && (b.caseExperimentIds = r.slice(0));
                b.darkLaunch = !!k;
                a.g = b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = c.__gm.h, a.set(a.get().Xd(b))) : qab(a, c, b);
                _.vg(c,
                    "Lg");
                _.tg(c, 148282)
            }
        }
    };
    _.lf("search_impl", new rab);
});