// src/art.ts
var e = {
	paper: "#FFF7EA",
	ink: "#291F1B",
	coral: "#E64B35",
	line: "#DACFC5",
	peach: "#F2CDBA",
	drop: "#BFDDF0"
}, t = [
	{
		x: 150,
		y: 212,
		w: 74,
		bx: 156,
		bw: 22,
		bh: 22,
		color: e.peach
	},
	{
		x: 150,
		y: 226,
		w: 58,
		bx: 188,
		bw: 22,
		bh: 34,
		color: e.peach
	},
	{
		x: 150,
		y: 240,
		w: 84,
		bx: 220,
		bw: 22,
		bh: 46,
		color: e.coral
	}
];
function n() {
	let e = "";
	for (let t = 270; t > 130; t -= 20) e += ` L${t - 10} 298 L${t - 20} 290`;
	return e;
}
var r = (t) => `
  <g data-k="${t}" stroke="${e.ink}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <polyline/><circle r="5.5" fill="${e.ink}" stroke="none"/>
  </g>`, i = (t) => `<g data-k="${t}"><ellipse rx="9" ry="12" fill="${e.ink}"/><circle cx="3" cy="-4.5" r="3" fill="#fff"/></g>`, a = `
  <g data-k="ticket" opacity="0">
    <rect x="-20" y="0" width="40" height="50" rx="3" fill="#fff" stroke="${e.ink}" stroke-width="3.5"/>
    <circle cx="0" cy="7" r="2.6" fill="${e.ink}"/>
    <rect x="-13" y="14" width="26" height="5" rx="2.5" fill="${e.coral}"/>
    <rect x="-13" y="24" width="20" height="3.5" rx="1.75" fill="${e.line}"/>
    <rect x="-13" y="31" width="24" height="3.5" rx="1.75" fill="${e.line}"/>
    <rect x="-13" y="38" width="16" height="3.5" rx="1.75" fill="${e.line}"/>
  </g>`, o = `
  <g data-k="bubble" opacity="0">
    <rect x="250" y="24" width="120" height="46" rx="16" fill="#fff" stroke="${e.ink}" stroke-width="3.5"/>
    <g data-k="tailSlip" stroke="${e.ink}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round">
      <path d="M262 64 L246 86 L284 64 Z" fill="#fff" stroke="none"/><path d="M265 70 L246 86 L280 70" fill="none"/>
    </g>
    <g data-k="tailKitchen" stroke="${e.ink}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round">
      <path d="M366 38 L392 50 L366 60 Z" fill="#fff" stroke="none"/><path d="M370 41 L392 50 L370 57" fill="none"/>
    </g>
    <g text-anchor="middle" fill="${e.ink}">
      <text data-k="t0" x="310" y="54" font-family="Manrope, system-ui, sans-serif" font-weight="800" font-size="24">Hello!</text>
      <text data-k="t1" x="310" y="54" font-family="'Noto Sans Sinhala', sans-serif" font-weight="700" font-size="14">ආයුබෝවන්!</text>
      <text data-k="t2" x="310" y="54" font-family="'Noto Sans Tamil', sans-serif" font-weight="700" font-size="15">வணக்கம்!</text>
      <text data-k="t3" x="310" y="54" font-family="Manrope, system-ui, sans-serif" font-weight="800" font-size="24">On it!</text>
      <text data-k="t4" x="310" y="55" font-family="'Noto Sans Arabic', 'Geeza Pro', sans-serif" font-weight="700" font-size="21" direction="rtl">مرحبا!</text>
    </g>
  </g>`, s = `
<svg viewBox="25 -2 350 350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Slip, the Kade receipt" overflow="hidden">
  <ellipse data-k="shadow" cx="200" cy="335" rx="50" ry="6" fill="${e.ink}" opacity=".12"/>
  <g data-k="root">
    <g data-k="legs" stroke="${e.ink}" stroke-width="6" stroke-linecap="round" fill="${e.ink}">
      <g data-k="legL"><line x1="184" y1="292" x2="184" y2="326"/><ellipse cx="180" cy="329" rx="10" ry="5.5" stroke="none"/></g>
      <g data-k="legR"><line x1="216" y1="292" x2="216" y2="326"/><ellipse cx="220" cy="329" rx="10" ry="5.5" stroke="none"/></g>
    </g>
    <g data-k="body">
      <path data-k="curl" d="M198 97 C196 72 216 58 234 66 C248 72 246 90 232 90 C222 90 220 80 228 77"
        fill="none" stroke="${e.ink}" stroke-width="5" stroke-linecap="round"/>
      <path d="M130 110 Q130 96 144 96 L256 96 Q270 96 270 110 L270 290${n()} Z"
        fill="${e.paper}" stroke="${e.ink}" stroke-width="5" stroke-linejoin="round"/>
      ${t.map((e, t) => `<rect data-k="line${t}" rx="2.5"/>`).join("")}
      <g data-k="prices" fill="${e.line}">
        <rect x="236" y="212" width="14" height="5" rx="2.5"/><rect x="236" y="226" width="14" height="5" rx="2.5"/>
        <rect x="240" y="240" width="10" height="5" rx="2.5"/>
      </g>
      <line x1="150" y1="256" x2="250" y2="256" stroke="${e.line}" stroke-width="3" stroke-dasharray="4 5" stroke-linecap="round"/>
      <rect x="150" y="266" width="32" height="7" rx="3.5" fill="${e.coral}"/>
      <rect x="220" y="266" width="30" height="7" rx="3.5" fill="${e.ink}"/>
      <g data-k="face">
        <g data-k="cheeks" fill="${e.coral}" opacity=".35">
          <ellipse cx="158" cy="182" rx="10" ry="6"/><ellipse cx="242" cy="182" rx="10" ry="6"/>
        </g>
        ${i("eyeL")}${i("eyeR")}
        <path data-k="mouth" fill="${e.ink}" stroke="${e.ink}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
        <path data-k="sweat" d="M0 -8 Q6 1 0 6 Q-6 1 0 -8 Z" fill="${e.drop}" stroke="${e.ink}" stroke-width="2.2" opacity="0"/>
      </g>
      <g data-k="stamp" opacity="0">
        <g transform="rotate(-12 200 238)">
          <rect data-k="stampBox" y="218" height="40" rx="8" fill="${e.paper}" fill-opacity=".85" stroke="${e.coral}" stroke-width="4"/>
          <text data-k="stampText" x="200" y="247" text-anchor="middle" font-family="Manrope, system-ui, sans-serif" font-weight="800"
            font-size="24" letter-spacing="2" fill="${e.coral}">PAID</text>
        </g>
      </g>
      ${a}
      ${r("armL")}${r("armR")}
    </g>
    <g data-k="zz" fill="${e.ink}" font-family="Manrope, system-ui, sans-serif" font-weight="800" opacity="0">
      <text font-size="14">z</text><text font-size="18">z</text><text font-size="22">Z</text>
    </g>
  </g>
  ${o}
</svg>`;
// src/motion.ts
function c(e, t, n, r) {
	let i = 3 * e, a = 3 * (n - e) - i, o = 1 - i - a, s = 3 * t, c = 3 * (r - t) - s, l = 1 - s - c, u = (e) => ((o * e + a) * e + i) * e, d = (e) => ((l * e + c) * e + s) * e;
	return (e) => {
		if (e <= 0) return 0;
		if (e >= 1) return 1;
		let t = 0, n = 1, r = e;
		for (let i = 0; i < 24; i++) r = (t + n) / 2, u(r) < e ? t = r : n = r;
		return d(r);
	};
}
var l = c(.77, 0, .175, 1), u = c(.23, 1, .32, 1);
function d(e, t) {
	if (e <= t[0][0]) return t[0][1];
	for (let n = 1; n < t.length; n++) {
		let r = t[n];
		if (e <= r[0]) {
			let i = t[n - 1], a = r[0] - i[0], o = a > 0 ? (e - i[0]) / a : 1, s = r[2] === "out" ? u(o) : l(o);
			return i[1] + (r[1] - i[1]) * s;
		}
	}
	return t[t.length - 1][1];
}
function f(e, t) {
	let n = t.length;
	if (e <= t[0][0]) return t[0][1];
	if (e >= t[n - 1][0]) return t[n - 1][1];
	let r = 0;
	for (; t[r + 1][0] < e;) r++;
	let i = (e) => (t[e + 1][1] - t[e][1]) / (t[e + 1][0] - t[e][0]), a = (e) => {
		if (e === 0 || e === n - 1) return 0;
		let r = i(e - 1), a = i(e);
		if (r * a <= 0) return 0;
		let o = t[e][0] - t[e - 1][0], s = t[e + 1][0] - t[e][0], c = 2 * s + o, l = s + 2 * o;
		return (c + l) / (c / r + l / a);
	}, o = t[r + 1][0] - t[r][0], s = (e - t[r][0]) / o, c = s * s, l = c * s;
	return (2 * l - 3 * c + 1) * t[r][1] + (l - 2 * c + s) * o * a(r) + (-2 * l + 3 * c) * t[r + 1][1] + (l - c) * o * a(r + 1);
}
function p(e, t, n, r = "out") {
	if (e <= t) return 0;
	if (e >= n) return 1;
	let i = (e - t) / (n - t);
	return r === "out" ? u(i) : l(i);
}
var m = (e, t, n = 0) => Math.sin((e / t + n) * Math.PI * 2), h = (e) => Math.sin(Math.PI * Math.min(1, Math.max(0, e)));
function g(e, t, n = 0) {
	let r = (e / t + n) % 1;
	return r < 0 ? r + 1 : r;
}
// src/pose.ts
var _ = 8e3;
function v(e) {
	let t = [[0, 0]];
	for (let n of e) t.push([n, 0], [n + 110, 1], [n + 150, 1], [
		n + 340,
		0,
		"out"
	]);
	return t.push([_, 0]), t;
}
var y = {
	yaw: [
		[0, 0],
		[2400, 0],
		[2900, 1],
		[4200, 1],
		[4700, 0],
		[5700, 0],
		[6200, -.7],
		[7100, -.7],
		[7600, 0],
		[_, 0]
	],
	lookY: [
		[0, 0],
		[5700, 0],
		[6200, 2.5],
		[7100, 2.5],
		[7600, 0],
		[_, 0]
	],
	lid: v([
		1200,
		2760,
		5e3,
		5300,
		6080
	])
}, b = {
	lookX: [
		[0, 0],
		[900, 0],
		[1300, -3],
		[2300, -3],
		[2700, 3],
		[3800, 3],
		[4200, 0],
		[5600, 0],
		[6e3, -3],
		[6900, -3],
		[7300, 0],
		[_, 0]
	],
	lid: v([
		1250,
		2650,
		4900,
		5950
	])
}, x = () => ({
	stamp: {
		op: 0,
		scale: 1,
		text: "PAID"
	},
	ticket: {
		op: 0,
		x: 200,
		y: 236,
		rot: -6,
		scale: .8
	},
	bars: [
		0,
		0,
		0
	],
	bubble: {
		op: 0,
		scale: 1,
		from: "slip",
		texts: [
			0,
			0,
			0,
			0,
			0
		]
	}
});
function S(e) {
	let t = 1 + .012 * m(e, 4e3), n = (e) => 1.5 * m(e, _), r = d(e, y.yaw);
	return {
		...x(),
		lift: 0,
		sy: t,
		sx: 1 / t ** .6,
		lean: n(e),
		shift: 2 * m(e, _, .25),
		yaw: r,
		lookX: 2 * r,
		lookY: d(e, y.lookY),
		lid: d(e, y.lid),
		cheek: 0,
		mouth: 0,
		smile: 1,
		curl: 5 * m(e, 4e3, -.15) - .6 * n(e - 120),
		armL: {
			a: 24 + 4 * m(e, 4e3, .1) + 2 * m(e, 1600, .3),
			e: -12 + 5 * m(e, 2e3, .6)
		},
		armR: {
			a: 21 + 4 * m(e, 4e3, .55) + 2 * m(e, 8e3 / 3, .2),
			e: -8 + 5 * m(e, 1600, .1)
		},
		legSway: 3 * m(e, 4e3, .4),
		zz: 0,
		sweat: 0
	};
}
function C(e) {
	let t = m(e, 4e3), n = 1 + .022 * t;
	return {
		...S(e),
		sy: n,
		sx: 1 / n ** .6,
		lean: 2.5 + .8 * m(e, _),
		yaw: 0,
		lookX: 0,
		lookY: 3,
		lid: .86 + .06 * m(e, _, .3),
		mouth: .22 + .12 * (t + 1) / 2,
		smile: .2,
		curl: 3 * m(e, 4e3, -.15),
		armL: {
			a: 10 + 2 * m(e, 4e3, .2),
			e: -4
		},
		armR: {
			a: 9 + 2 * m(e, 4e3, .7),
			e: -2
		},
		legSway: m(e, 4e3, .4),
		zz: 1
	};
}
function w(e) {
	let t = 1 + .01 * m(e, 2e3);
	return {
		...S(e),
		sy: t,
		sx: 1 / t ** .6,
		lean: -1 + 1.2 * m(e, 4e3),
		shift: 1.2 * m(e, 2e3, .3),
		yaw: d(e, b.lookX) / 6,
		lookX: d(e, b.lookX),
		lookY: -1,
		lid: Math.max(.12, d(e, b.lid)),
		smile: -.7,
		mouth: .08,
		armL: {
			a: 12 + 3 * m(e, 1600, .1),
			e: -62 + 6 * m(e, 2e3, .5)
		},
		armR: {
			a: 14 + 3 * m(e, 1600, .6),
			e: -58 + 6 * m(e, 2e3)
		},
		sweat: 1
	};
}
var T = {
	happy: S,
	dozing: C,
	worried: w
};
function E(e, t) {
	return T[t](e);
}
var D = (e, t, n) => e + (t - e) * n;
function O(e, t, n) {
	if (n <= 0) return e;
	if (n >= 1) return t;
	let r = (e, t) => ({
		a: D(e.a, t.a, n),
		e: D(e.e, t.e, n)
	}), i = [
		"lift",
		"sx",
		"sy",
		"lean",
		"shift",
		"yaw",
		"lookX",
		"lookY",
		"lid",
		"cheek",
		"mouth",
		"smile",
		"curl",
		"legSway",
		"zz",
		"sweat"
	], a = {
		...t,
		armL: r(e.armL, t.armL),
		armR: r(e.armR, t.armR)
	};
	for (let r of i) a[r] = D(e[r], t[r], n);
	return a;
}
// src/reactions.ts
var k = (e) => 1 / e ** .6, A = (e, t, n) => ({
	a: e.a + t,
	e: e.e + n
}), j = (e, t) => .45 * (f(e - 90, t) - f(e, t)), M = (e, t, n, r, i) => p(e, t, n) * (1 - p(e, r, i, "inOut"));
function N(e, t, n, r) {
	let i = Math.min(Math.max((e - t) / (n - t), 0), 1);
	return r * 4 * i * (1 - i);
}
function P(e, t) {
	let n = e.sy * t;
	return {
		...e,
		sy: n,
		sx: k(n)
	};
}
var F = {
	sy: [
		[0, 1],
		[170, .9],
		[300, 1.08],
		[520, 1.03],
		[660, 1],
		[720, .83],
		[840, 1.04],
		[980, .99],
		[1120, 1],
		[4e3, 1]
	],
	lean: [
		[0, 0],
		[170, -3],
		[420, 2],
		[900, -2],
		[1400, 0],
		[4e3, 0]
	],
	aL: [
		[0, 0],
		[170, -6],
		[420, 112],
		[720, 92],
		[900, 40],
		[1250, 8],
		[1700, 0],
		[4e3, 0]
	],
	eL: [
		[0, 0],
		[420, 18],
		[720, 30],
		[1250, 0],
		[4e3, 0]
	],
	aR: [
		[0, 0],
		[170, -6],
		[420, 120],
		[720, 100],
		[950, 58],
		[1150, 48],
		[2100, 48],
		[2550, 0],
		[4e3, 0]
	],
	eR: [
		[0, 0],
		[420, 10],
		[950, 70],
		[1150, 100],
		[2100, 100],
		[2550, 0],
		[4e3, 0]
	],
	cheek: [
		[0, 0],
		[700, 0],
		[
			860,
			1,
			"out"
		],
		[2e3, 1],
		[2400, 0],
		[4e3, 0]
	],
	mouth: [
		[0, 0],
		[
			200,
			.7,
			"out"
		],
		[700, .95],
		[900, .6],
		[2e3, .5],
		[2400, 0],
		[4e3, 0]
	],
	curl: [
		[0, 0],
		[170, 8],
		[420, -16],
		[760, 14],
		[1e3, -6],
		[1300, 2],
		[1600, 0],
		[4e3, 0]
	]
}, ee = {
	ms: 4e3,
	apply(e, t) {
		let n = P(e, f(t, F.sy));
		return {
			...n,
			lift: N(t, 260, 700, 46),
			lean: n.lean + f(t, F.lean),
			curl: n.curl + f(t, F.curl) - .6 * f(t - 120, F.lean),
			cheek: Math.max(n.cheek, d(t, F.cheek)),
			mouth: Math.max(n.mouth, d(t, F.mouth)),
			armL: A(n.armL, f(t, F.aL), f(t, F.eL) + j(t, F.aL)),
			armR: A(n.armR, f(t, F.aR), f(t, F.eR) + j(t, F.aR) + 14 * m(t, 700) * M(t, 1100, 1300, 1900, 2300)),
			legSway: n.legSway + (t > 260 && t < 700 ? 6 * Math.sin((t - 260) / 140) : 0),
			stamp: {
				text: "PAID",
				op: p(t, 760, 900) * (1 - p(t, 3600, 3900, "inOut")),
				scale: 1.14 - .14 * p(t, 760, 980)
			}
		};
	}
}, I = {
	aR: [
		[0, 0],
		[350, 120],
		[600, 100],
		[800, 48],
		[1900, 48],
		[2400, 0],
		[2600, 0]
	],
	eR: [
		[0, 0],
		[350, 40],
		[800, 100],
		[1900, 100],
		[2400, 0],
		[2600, 0]
	],
	lean: [
		[0, 0],
		[300, -2],
		[900, 1],
		[1600, 0],
		[2600, 0]
	],
	cheek: [
		[0, 0],
		[
			300,
			1,
			"out"
		],
		[1900, 1],
		[2400, 0],
		[2600, 0]
	],
	mouth: [
		[0, 0],
		[
			250,
			.5,
			"out"
		],
		[1800, .4],
		[2300, 0],
		[2600, 0]
	]
};
function L(e, t, n) {
	let r = t / (n / 2600);
	return {
		...e,
		lean: e.lean + f(r, I.lean),
		cheek: Math.max(e.cheek, d(r, I.cheek)),
		mouth: Math.max(e.mouth, d(r, I.mouth)),
		armR: A(e.armR, f(r, I.aR), f(r, I.eR) + j(r, I.aR) + 14 * m(t, 700) * M(r, 700, 900, 1700, 2100))
	};
}
var R = {
	ms: 2600,
	apply: (e, t) => L(e, t, 2600)
}, z = {
	land: 650,
	sy: [
		[0, 1],
		[640, 1],
		[720, .9],
		[860, 1.03],
		[1e3, 1],
		[3800, 1]
	],
	curl: [
		[0, 0],
		[650, 0],
		[720, -14],
		[900, 8],
		[1100, -3],
		[1300, 0],
		[3800, 0]
	],
	lookY: [
		[0, 0],
		[250, -4],
		[1500, -4],
		[1800, 0],
		[3800, 0]
	],
	lid: [
		[0, 0],
		[680, 0],
		[790, 1],
		[830, 1],
		[
			1020,
			0,
			"out"
		],
		[3800, 0]
	],
	cheek: [
		[0, 0],
		[1e3, 0],
		[
			1200,
			1,
			"out"
		],
		[2800, 1],
		[3200, 0],
		[3800, 0]
	],
	mouth: [
		[0, 0],
		[
			300,
			.4,
			"out"
		],
		[700, .6],
		[1e3, .3],
		[2600, .3],
		[3e3, 0],
		[3800, 0]
	],
	fling: [
		[0, 0],
		[650, 0],
		[750, 40],
		[1100, 10],
		[1500, 0],
		[3800, 0]
	]
}, te = {
	ms: 3800,
	apply(e, t) {
		let n = P(e, f(t, z.sy)), r = t < z.land, i = Math.min(t / z.land, 1), a = t - z.land, o = r ? 10 * (1 - i) : 16 * Math.exp(-a / 520) * Math.sin(a / 165);
		return {
			...n,
			curl: n.curl + f(t, z.curl),
			lookY: n.lookY + d(t, z.lookY),
			lookX: n.lookX + 1.5 * (d(t, z.lookY) / -4),
			lid: Math.max(n.lid, d(t, z.lid)),
			cheek: Math.max(n.cheek, d(t, z.cheek)),
			mouth: Math.max(n.mouth, d(t, z.mouth)),
			armL: A(n.armL, f(t, z.fling), j(t, z.fling)),
			armR: A(n.armR, .9 * f(t - 30, z.fling), j(t - 30, z.fling)),
			ticket: {
				op: 1 - p(t, 3300, 3700, "inOut"),
				x: 222 + (r ? 10 * (1 - i) : 0),
				y: r ? -130 + 190 * i * i : 60,
				rot: o,
				scale: 1
			}
		};
	}
}, B = {
	aR: [
		[0, 0],
		[600, 0],
		[900, 70],
		[1200, 95],
		[1500, 80],
		[1900, 0],
		[3600, 0]
	],
	eR: [
		[0, 0],
		[600, 0],
		[900, -30],
		[1200, -5],
		[1900, 0],
		[3600, 0]
	],
	lean: [
		[0, 0],
		[700, 0],
		[1100, 4],
		[1600, 3],
		[2200, 0],
		[3600, 0]
	],
	yaw: [
		[0, 0],
		[500, .9],
		[2600, .9],
		[3100, 0],
		[3600, 0]
	],
	cheek: [
		[0, 0],
		[1900, 0],
		[
			2100,
			1,
			"out"
		],
		[3e3, 1],
		[3400, 0],
		[3600, 0]
	],
	mouth: [
		[0, 0],
		[2e3, 0],
		[
			2200,
			.4,
			"out"
		],
		[3e3, .3],
		[3400, 0],
		[3600, 0]
	]
}, ne = {
	ms: 3600,
	apply(e, t) {
		let n = e.yaw + d(t, B.yaw), r = p(t, 700, 1050, "inOut"), i = Math.min(Math.max((t - 1050) / 450, 0), 1) ** 2;
		return {
			...e,
			yaw: n,
			lookX: e.lookX + 2.5 * d(t, B.yaw),
			lean: e.lean + f(t, B.lean),
			cheek: Math.max(e.cheek, d(t, B.cheek)),
			mouth: Math.max(e.mouth, d(t, B.mouth)),
			armR: A(e.armR, f(t, B.aR), f(t, B.eR) + j(t, B.aR)),
			ticket: {
				op: p(t, 0, 250) * +(t < 1500),
				x: 200 + 96 * r + 220 * i,
				y: 214 - 40 * r - 30 * i,
				rot: -6 + 10 * r + 30 * i,
				scale: .8 + .1 * r
			},
			bubble: {
				from: "kitchen",
				op: p(t, 1700, 1900) * (1 - p(t, 3e3, 3300, "inOut")),
				scale: .92 + .08 * p(t, 1700, 1950),
				texts: [
					0,
					0,
					0,
					1,
					0
				]
			}
		};
	}
}, V = {
	lookY: [
		[0, 0],
		[350, 4],
		[1300, 4],
		[1600, 0],
		[3800, 0]
	],
	cheek: [
		[0, 0],
		[1400, 0],
		[
			1600,
			1,
			"out"
		],
		[3e3, 1],
		[3400, 0],
		[3800, 0]
	],
	mouth: [
		[0, 0],
		[1500, 0],
		[
			1700,
			.35,
			"out"
		],
		[3e3, .3],
		[3400, 0],
		[3800, 0]
	],
	lean: [
		[0, 0],
		[1400, 0],
		[1800, -2.5],
		[3e3, -2.5],
		[3500, 0],
		[3800, 0]
	],
	hipA: [
		[0, 0],
		[1300, 0],
		[1700, 6],
		[3100, 6],
		[3500, 0],
		[3800, 0]
	],
	hipE: [
		[0, 0],
		[1300, 0],
		[1700, -83],
		[3100, -83],
		[3500, 0],
		[3800, 0]
	],
	showA: [
		[0, 0],
		[300, 30],
		[1300, 30],
		[1700, 0],
		[3800, 0]
	],
	showE: [
		[0, 0],
		[300, 40],
		[1300, 40],
		[1700, 0],
		[3800, 0]
	]
}, H = {
	ms: 3800,
	apply(e, t) {
		let n = (e) => p(t, 450 + e * 80, 1150 + e * 80) * (1 - p(t, 3100 + e * 60, 3600 + e * 60, "inOut")), r = P(e, 1 + .02 * p(t, 1400, 1800) * (1 - p(t, 3e3, 3500)));
		return {
			...r,
			lookY: r.lookY + d(t, V.lookY),
			cheek: Math.max(r.cheek, d(t, V.cheek)),
			mouth: Math.max(r.mouth, d(t, V.mouth)),
			lean: r.lean + f(t, V.lean),
			armL: A(r.armL, f(t, V.hipA), f(t, V.hipE)),
			armR: A(r.armR, f(t, V.showA), f(t, V.showE) + j(t, V.showA)),
			bars: [
				n(0),
				n(1),
				n(2)
			]
		};
	}
}, U = {
	sy: [
		[0, 1],
		[290, 1],
		[340, .94],
		[480, 1.01],
		[600, 1],
		[900, 1],
		[1500, 1.07],
		[2200, 1.07],
		[2700, .98],
		[3e3, 1],
		[4600, 1]
	],
	aL: [
		[0, 0],
		[900, 0],
		[1500, 120],
		[2200, 125],
		[2800, 0],
		[4600, 0]
	],
	eL: [
		[0, 0],
		[1500, -10],
		[2200, -12],
		[2800, 0],
		[4600, 0]
	],
	aR: [
		[0, 0],
		[950, 0],
		[1550, 124],
		[2250, 120],
		[2850, 0],
		[4600, 0]
	],
	yawn: [
		[0, 0],
		[1e3, 0],
		[
			1500,
			1,
			"out"
		],
		[2200, 1],
		[2600, .1],
		[3e3, 0],
		[4600, 0]
	],
	lid: [
		[0, 0],
		[1e3, 0],
		[1500, .75],
		[2200, .75],
		[2700, .35],
		[4200, .35],
		[4600, 0]
	],
	cheek: [
		[0, 0],
		[2600, 0],
		[
			2900,
			.6,
			"out"
		],
		[4100, .6],
		[4500, 0],
		[4600, 0]
	]
}, re = {
	ms: 4600,
	apply(e, t) {
		let n = P(e, f(t, U.sy)), r = d(t, U.yawn);
		return {
			...n,
			lid: Math.max(n.lid, d(t, U.lid)),
			cheek: Math.max(n.cheek, d(t, U.cheek)),
			mouth: Math.max(n.mouth, r),
			smile: n.smile * (1 - r),
			armL: A(n.armL, f(t, U.aL), f(t, U.eL) + j(t, U.aL)),
			armR: A(n.armR, f(t - 50, U.aR), j(t - 50, U.aR)),
			curl: n.curl - .3 * (f(t - 120, U.sy) - 1) * 100,
			stamp: {
				text: "CLOSED",
				op: p(t, 300, 440) * (1 - p(t, 4200, 4600, "inOut")),
				scale: 1.14 - .14 * u(Math.min(Math.max((t - 300) / 220, 0), 1))
			}
		};
	}
}, W = 1550, G = {
	paid: ee,
	hello: R,
	order: te,
	kitchen: ne,
	chart: H,
	close: re,
	languages: {
		ms: 7e3,
		apply(e, t) {
			let n = L(e, t, 7e3), r = (e) => {
				let n = 300 + e * W;
				return (e === 0 ? 1 : p(t, n, n + 150)) * (1 - (e === 3 ? 0 : p(t, n + W - 150, n + W)));
			};
			return {
				...n,
				yaw: n.yaw + .4 * p(t, 0, 400, "inOut") * (1 - p(t, 6400, 6800, "inOut")),
				bubble: {
					from: "slip",
					op: p(t, 250, 450) * (1 - p(t, 6400, 6800, "inOut")),
					scale: .92 + .08 * p(t, 250, 500),
					texts: [
						r(0),
						r(1),
						r(2),
						0,
						r(3)
					]
				}
			};
		}
	}
}, K = {
	x: 200,
	y: 296
}, q = {
	l: {
		x: 134,
		y: 214
	},
	r: {
		x: 266,
		y: 214
	}
}, J = 24, Y = 22, X = 700, ie = {
	PAID: 96,
	CLOSED: 124
}, Z = (e) => e * Math.PI / 180, Q = (e) => e.toFixed(2), ae = (e, t, n) => {
	let r = [
		1,
		3,
		5
	].map((t) => parseInt(e.slice(t, t + 2), 16)), i = [
		1,
		3,
		5
	].map((e) => parseInt(t.slice(e, e + 2), 16));
	return `rgb(${r.map((e, t) => Math.round(e + (i[t] - e) * n)).join(",")})`;
};
function oe(e, t, n) {
	let r = t.x + e * J * Math.sin(Z(n.a)), i = t.y + J * Math.cos(Z(n.a)), a = r + e * Y * Math.sin(Z(n.a + n.e)), o = i + Y * Math.cos(Z(n.a + n.e));
	return [
		t.x,
		t.y,
		r,
		i,
		a,
		o
	];
}
function se(e, t) {
	let n = 184 + 9 * t;
	return `M188 184 Q200 ${Q(n - 4 * e)} 212 184 Q200 ${Q(n + 16 * e)} 188 184 Z`;
}
function ce(n, r = {}) {
	n.innerHTML = s;
	let i = (e) => n.querySelector(`[data-k="${e}"]`), a = Object.fromEntries((/* @__PURE__ */ "shadow.root.body.curl.face.cheeks.eyeL.eyeR.mouth.sweat.stamp.stampBox.stampText.ticket.legL.legR.armL.armR.zz.bubble.tailSlip.tailKitchen.prices.line0.line1.line2.t0.t1.t2.t3.t4".split(".")).map((e) => [e, i(e)])), o = (e, t) => {
		for (let [n, r] of Object.entries(t)) a[e].setAttribute(n, String(r));
	};
	function c(e, t, n) {
		let r = oe(t, t < 0 ? q.l : q.r, n);
		a[e].querySelector("polyline").setAttribute("points", r.map(Q).join(" "));
		let i = a[e].querySelector("circle");
		i.setAttribute("cx", Q(r[4])), i.setAttribute("cy", Q(r[5]));
	}
	function u(n, r) {
		o("shadow", { transform: `translate(200 335) scale(${Q(Math.max(.55, 1 - n.lift / 220))} 1) translate(-200 -335)` }), o("root", { transform: `translate(${Q(n.shift)} ${Q(-n.lift)})` }), o("body", { transform: `rotate(${Q(n.lean)} ${K.x} ${K.y}) translate(${K.x} ${K.y}) scale(${Q(n.sx)} ${Q(n.sy)}) translate(${-K.x} ${-K.y})` }), o("curl", { transform: `rotate(${Q(n.curl)} 198 97)` }), o("legL", { transform: `rotate(${Q(n.legSway)} 184 292)` }), o("legR", { transform: `rotate(${Q(-.7 * n.legSway)} 216 292)` }), o("face", { transform: `translate(${Q(n.yaw * 8)} 0)` });
		let i = 1 - .55 * n.cheek, s = Math.max(.1, (1 - n.lid) * i);
		for (let [e, t] of [["eyeL", 176], ["eyeR", 224]]) o(e, { transform: `translate(${Q(t + n.lookX)} ${Q(160 + n.lookY - 3 * n.cheek + 4 * (1 - s))}) scale(1 ${Q(s)})` });
		o("cheeks", { transform: `translate(0 ${Q(-3 * n.cheek)})` }), o("mouth", { d: se(n.mouth, n.smile) }), o("sweat", {
			opacity: Q(n.sweat * h(g(r, 2e3))),
			transform: `translate(266 ${Q(122 + 12 * g(r, 2e3))})`
		}), o("stamp", {
			opacity: Q(n.stamp.op),
			transform: `translate(200 238) scale(${Q(n.stamp.scale)}) translate(-200 -238)`
		});
		let l = ie[n.stamp.text];
		o("stampBox", {
			x: 200 - l / 2,
			width: l
		}), a.stampText.textContent !== n.stamp.text && (a.stampText.textContent = n.stamp.text);
		let u = n.ticket;
		o("ticket", {
			opacity: Q(u.op),
			transform: `translate(${Q(u.x)} ${Q(u.y)}) rotate(${Q(u.rot)}) scale(${Q(u.scale)})`
		}), t.forEach((t, r) => {
			let i = n.bars[r], a = 5 + (t.bh - 5) * i;
			o(`line${r}`, {
				x: Q(t.x + (t.bx - t.x) * i),
				y: Q(t.y + (252 - a - t.y) * i),
				width: Q(t.w + (t.bw - t.w) * i),
				height: Q(a),
				fill: ae(e.line, t.color, i),
				rx: Q(2.5 + 1.5 * i)
			});
		}), o("prices", { opacity: Q(1 - Math.max(...n.bars)) }), c("armL", -1, n.armL), c("armR", 1, n.armR), o("zz", { opacity: Q(n.zz) }), a.zz.querySelectorAll("text").forEach((e, t) => {
			let n = g(r, 3e3, t / 3);
			e.setAttribute("x", Q(248 + t * 12 + 6 * n)), e.setAttribute("y", Q(96 - 34 * n)), e.setAttribute("opacity", Q(h(n)));
		});
		let d = n.bubble;
		o("bubble", {
			opacity: Q(d.op),
			transform: `translate(310 47) scale(${Q(d.scale)}) translate(-310 -47)`
		}), o("tailSlip", { opacity: +(d.from === "slip") }), o("tailKitchen", { opacity: +(d.from === "kitchen") }), d.texts.forEach((e, t) => o(`t${t}`, { opacity: Q(e) }));
	}
	function d(e) {
		let t = (e.idleT % _ + _) % _, n = E(t, e.mood), r = e.from && e.from !== e.mood ? O(E(t, e.from), n, l(e.blend ?? 1)) : n;
		if (!e.reaction || e.a === void 0) return r;
		let i = G[e.reaction];
		return e.a < i.ms ? i.apply(r, Math.max(0, e.a)) : r;
	}
	let f = (e) => u(d(e), e.idleT), p = matchMedia("(prefers-reduced-motion: reduce)"), m = 0, v = 0, y = 0, b = !0, x = 0, S = r.mood ?? "happy", C = S, w = X, T, D = 0, k = () => ({
		idleT: m,
		mood: S,
		from: C,
		blend: Math.min(w / X, 1),
		reaction: T,
		a: D
	}), A = () => r.autoplay !== !1 && b && !document.hidden && !p.matches;
	function j(e) {
		let t = v ? Math.min(e - v, 100) : 0;
		v = e, m = (m + t) % _, w += t, T && (D += t, D >= G[T].ms && (T = void 0)), f(k()), y = A() ? requestAnimationFrame(j) : 0;
	}
	function M() {
		!y && A() && (v = 0, y = requestAnimationFrame(j));
	}
	let N = new IntersectionObserver(([e]) => {
		b = e.isIntersecting, M();
	});
	return N.observe(n), document.addEventListener("visibilitychange", M), f(k()), M(), {
		play(e) {
			p.matches ? (f({
				...k(),
				reaction: e,
				a: G[e].ms * .45
			}), clearTimeout(x), x = window.setTimeout(() => f(k()), 3e3)) : T || (T = e, D = 0, M());
		},
		setMood(e) {
			e !== S && (C = S, S = e, w = 0, p.matches && f({
				...k(),
				from: void 0
			}), M());
		},
		renderAt: f,
		destroy() {
			cancelAnimationFrame(y), N.disconnect(), document.removeEventListener("visibilitychange", M), clearTimeout(x), n.innerHTML = "";
		}
	};
}
// src/site.ts
var le = [
	"paid",
	"hello",
	"order",
	"kitchen",
	"chart",
	"close",
	"languages"
], $ = (e) => le.includes(e);
for (let e of document.querySelectorAll("[data-slip]")) {
	let t = e.dataset.slip;
	if (!$(t)) continue;
	let n = ce(e);
	e.addEventListener("click", () => n.play(t));
	let r = new IntersectionObserver(([i]) => {
		i.isIntersecting && (r.disconnect(), window.setTimeout(() => n.play(t), Number(e.dataset.slipDelay ?? 250)));
	}, { threshold: .6 });
	r.observe(e);
}
