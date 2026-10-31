/* ============================================================================
 *  script.js  —  render engine + interactions
 *  Reads everything from SITE / I18N (data.js). You shouldn't need to edit this
 *  to change content; edit data.js instead.
 * ========================================================================== */

(function () {
  "use strict";

  const S = window.SITE;
  const I18N = window.I18N;
  const THEMES = ["dark", "light", "neon", "grey"];
  const DEFAULT_FONT = 16;
  const store = {
    get: (k, d) => { try { return localStorage.getItem(k) ?? d; } catch { return d; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
  };

  let lang = "en";

  /* ---------- tiny DOM helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.en[key] || "";

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    renderStatic();
    initControls();
    initNav();
    initTyping();
    initProjectReveals();
    initSkillsReveal();
    initTerminal();
    initMatrix();
    const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  }

  /* ========================================================================
   *  RENDER (content → DOM)
   * ====================================================================== */
  function renderStatic() {
    $("#hero-name").textContent = S.profile.name;

    // hero stats
    const stats = $("#hero-stats");
    S.profile.stats.forEach((s) => {
      const c = el("div", "stat-card");
      c.append(el("p", "k", esc(s.label)), el("p", "v", esc(s.value)));
      stats.append(c);
    });

    // about badges
    const bw = $("#badge-wrap");
    S.badges.forEach((b) => bw.append(el("span", "badge", esc(b))));

    // now chips
    const nc = $("#now-chips");
    S.nowChips.forEach((c) => nc.append(el("span", "chip", esc(c))));

    // timeline
    const troot = $("#timeline-root");
    Object.values(S.timeline).forEach((group) => {
      const g = el("div", "tl-group");
      const head = el("div", "tl-group-head");
      head.append(el("p", "k", esc(group.label)), el("h3", null, esc(group.heading)));
      g.append(head);
      const list = el("div", "tl-list");
      group.items.forEach((it) => {
        const item = el("div", "tl-item");
        item.append(el("p", "tl-date", esc(it.date)));
        item.append(el("p", "tl-title", `${esc(it.title)} <span class="org">· ${esc(it.org)}</span>`));
        item.append(el("p", "tl-desc", esc(it.desc)));
        if (it.chips && it.chips.length) item.append(chipRow(it.chips));
        list.append(item);
      });
      g.append(list);
      troot.append(g);
    });

    // skills
    const sroot = $("#skills-root");
    S.skills.forEach((sk) => {
      const row = el("div", "skill");
      row.append(el("div", "skill-top",
        `<span>${esc(sk.label)}</span><span class="pct">${sk.level}%</span>`));
      const bar = el("div", "bar");
      const span = el("span");
      span.dataset.width = sk.level;
      bar.append(span);
      row.append(bar);
      sroot.append(row);
    });

    // projects
    const proot = $("#projects-root");
    S.projects.forEach((p) => {
      const card = el("article", "project");
      card.append(el("p", "k", "project"));
      card.append(el("h3", null, esc(p.title)));
      card.append(el("p", "blurb", esc(p.blurb)));
      if (p.chips) card.append(chipRow(p.chips));
      const actions = el("div", "project-actions");
      if (p.details && p.details.length) {
        const btn = el("button", "reveal");
        btn.type = "button";
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "show details";
        const content = el("div", "reveal-content");
        content.hidden = true;
        const ul = el("ul");
        p.details.forEach((d) => ul.append(el("li", null, esc(d))));
        content.append(ul);
        btn.addEventListener("click", () => toggleReveal(btn, content));
        actions.append(btn);
        card.append(actions, content);
      }
      if (p.link) {
        const a = el("a", "ext-link", "↗ source");
        a.href = p.link; a.target = "_blank"; a.rel = "noopener noreferrer";
        actions.append(a);
        if (!actions.parentElement) card.append(actions);
      }
      proot.append(card);
    });

    // certs
    const croot = $("#certs-root");
    S.certifications.forEach((c) => {
      const card = el("div", "mini-card");
      card.append(el("p", "k", esc(c.name)));
      if (c.date) card.append(el("p", "when", esc(c.date)));
      card.append(el("p", null, esc(c.desc)));
      if (c.link) {
        const a = el("a", "verify", "view badge ↗");
        a.href = c.link; a.target = "_blank"; a.rel = "noopener noreferrer";
        card.append(a);
      }
      croot.append(card);
    });

    // volunteering
    const vroot = $("#volunteering-root");
    S.volunteering.forEach((v) => {
      const card = el("div", "mini-card");
      card.append(el("p", "k", esc(v.name)));
      card.append(el("p", null, esc(v.desc)));
      if (v.link) {
        const a = el("a", "verify", "verify credential ↗");
        a.href = v.link; a.target = "_blank"; a.rel = "noopener noreferrer";
        card.append(a);
      }
      vroot.append(card);
    });

    // contact
    const contact = $("#contact-root");
    const links = [
      { ico: "✉️", k: "email", v: S.profile.email, href: "mailto:" + S.profile.email },
      { ico: "🔗", k: "linkedin", v: pretty(S.profile.links.linkedin), href: S.profile.links.linkedin },
      { ico: "💻", k: "github", v: pretty(S.profile.links.github), href: S.profile.links.github },
      { ico: "✍️", k: "medium", v: pretty(S.profile.links.medium), href: S.profile.links.medium },
      { ico: "📍", k: "location", v: S.profile.location, href: null },
    ];
    links.forEach((l) => {
      const node = l.href ? el("a", "contact-card") : el("div", "contact-card");
      if (l.href) {
        node.href = l.href;
        if (l.href.startsWith("http")) { node.target = "_blank"; node.rel = "noopener noreferrer"; }
      }
      node.append(el("span", "ico", l.ico));
      const d = el("div");
      d.append(el("p", "k", l.k), el("p", "v", esc(l.v)));
      node.append(d);
      contact.append(node);
    });
  }

  function chipRow(arr) {
    const row = el("div", "chip-row");
    arr.forEach((c) => row.append(el("span", "chip", esc(c))));
    return row;
  }
  function pretty(url) { return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""); }

  function toggleReveal(btn, content) {
    const open = content.hidden;
    content.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "hide details" : "show details";
  }

  /* ========================================================================
   *  i18n + controls
   * ====================================================================== */
  function applyLang(l) {
    lang = I18N[l] ? l : "en";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const txt = t(node.getAttribute("data-i18n"));
      if (txt) node.textContent = txt;
    });
    // now-CTA mailto
    const cta = $("#now-cta-link");
    if (cta) cta.href = mailto(S.profile.email, t("now_email_subject"), t("now_email_body"));
    const sel = $("#language-select");
    if (sel) sel.value = lang;
    store.set("lang", lang);
  }

  function mailto(email, subject, body) {
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function applyTheme(theme) {
    const target = THEMES.includes(theme) ? theme : "dark";
    document.documentElement.setAttribute("data-theme", target);
    const sel = $("#theme-select");
    if (sel) sel.value = target;
    store.set("theme", target);
  }

  function initControls() {
    const root = document.documentElement;

    // font size
    let size = parseInt(store.get("font", DEFAULT_FONT), 10) || DEFAULT_FONT;
    const setFont = (n) => { size = Math.min(22, Math.max(13, n)); root.style.setProperty("--font-size", size + "px"); store.set("font", size); };
    document.querySelectorAll("[data-font]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const a = btn.dataset.font;
        if (a === "increase") setFont(size + 1);
        else if (a === "decrease") setFont(size - 1);
        else setFont(DEFAULT_FONT);
      });
    });
    setFont(size);

    // contrast
    const contrast = $("#contrast-toggle");
    const setContrast = (on) => { root.classList.toggle("high-contrast", on); contrast.setAttribute("aria-pressed", String(on)); store.set("contrast", on ? "1" : "0"); };
    contrast.addEventListener("click", () => setContrast(!root.classList.contains("high-contrast")));
    setContrast(store.get("contrast", "0") === "1");

    // theme
    $("#theme-select").addEventListener("change", (e) => applyTheme(e.target.value));
    applyTheme(store.get("theme", "dark"));

    // language
    $("#language-select").addEventListener("change", (e) => applyLang(e.target.value));
    applyLang(store.get("lang", "en"));
  }

  function initNav() {
    const toggle = $("#nav-toggle");
    const nav = $("#nav");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }));
  }

  /* ========================================================================
   *  hero typing
   * ====================================================================== */
  function initTyping() {
    const phrases = S.profile.taglines;
    const node = $("#typing");
    let i = 0, c = 0, del = false;
    const tick = () => {
      const cur = phrases[i];
      c += del ? -1 : 1;
      node.textContent = cur.slice(0, c);
      if (!del && c === cur.length) { del = true; return setTimeout(tick, 1400); }
      if (del && c === 0) { del = false; i = (i + 1) % phrases.length; }
      setTimeout(tick, (del ? 28 : 70) + Math.random() * 40);
    };
    tick();
  }

  /* ========================================================================
   *  project reveals already wired during render; skills bar animation
   * ====================================================================== */
  function initProjectReveals() { /* wired in renderStatic */ }

  function initSkillsReveal() {
    const bars = document.querySelectorAll(".bar > span");
    const fill = () => bars.forEach((b) => { b.style.width = (b.dataset.width || 0) + "%"; });
    if (!("IntersectionObserver" in window)) return fill();
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.style.width = (e.target.dataset.width || 0) + "%"; obs.unobserve(e.target); }
      });
    }, { threshold: 0.3 });
    bars.forEach((b) => io.observe(b));
  }

  /* ========================================================================
   *  interactive terminal
   * ====================================================================== */
  function initTerminal() {
    const body = $("#log-list");
    const form = $("#log-form");
    const input = $("#log-entry");

    const print = (text, cls) => {
      const line = el("div", "line" + (cls ? " " + cls : ""));
      line.textContent = text;
      body.append(line);
      body.scrollTop = body.scrollHeight;
    };

    S.terminalBoot.forEach((l) => print(l));

    const commands = {
      help: () => print("commands: whoami · skills · projects · experience · certs · resume · email · social · hint · flag · clear"),
      whoami: () => print(`${S.profile.name}, ${S.profile.role}, ${S.profile.location}. ${S.profile.taglines[0]}.`),
      skills: () => S.skills.forEach((s) => print(`  ${s.label}  [${s.level}%]`)),
      projects: () => S.projects.forEach((p) => print(`  ${p.title}: ${p.blurb}`)),
      experience: () => Object.values(S.timeline).forEach((g) =>
        g.items.forEach((it) => print(`  ${it.date}  ${it.title} @ ${it.org}`))),
      certs: () => S.certifications.forEach((c) => print(`  ${c.name} (${c.date})`)),
      resume: () => { print("[open] loading resume.html ..."); setTimeout(() => (window.location.href = "resume.html"), 400); },
      email: () => { print("[cmd] opening email client ..."); window.location.href = "mailto:" + S.profile.email; },
      social: () => Object.entries(S.profile.links).forEach(([k, v]) => print(`  ${k}: ${v}`)),
      hint: () => print("[hint] the flag is one command away. try typing: flag"),
      flag: () => { print(S.flag, "cmd"); print("[ctf] flag captured. that line is also the footer motto."); },
      clear: () => { body.innerHTML = ""; },
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const raw = input.value.trim();
      if (!raw) return;
      print("$ " + raw, "cmd");
      const cmd = raw.split(/\s+/)[0].toLowerCase();
      if (commands[cmd]) commands[cmd]();
      else print(`command not found: ${cmd}. type 'help'`, "err");
      input.value = "";
    });
  }

  /* ========================================================================
   *  matrix background
   * ====================================================================== */
  function initMatrix() {
    const canvas = $("#matrix");
    if (!canvas) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    const chars = "01▉▊▋░▒▓>_/:".split("");
    let w, h, cols, drops;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cols = Math.floor(w / 16);
      drops = Array(cols).fill(1);
    };
    const accent = () => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#5eead4";
    const draw = () => {
      ctx.fillStyle = "rgba(7, 9, 14, 0.09)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = accent();
      ctx.font = "14px JetBrains Mono, monospace";
      drops.forEach((y, i) => {
        ctx.fillText(chars[(Math.random() * chars.length) | 0], i * 16, y * 16);
        if (y * 16 > h && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
      requestAnimationFrame(draw);
    };
    resize();
    draw();
    window.addEventListener("resize", resize);
  }
})();
