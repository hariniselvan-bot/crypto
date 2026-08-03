/* ============================================================
   STACKLY CRYPTO — Global Scripts (Pure Vanilla JS only)
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Logo SVG (shared) ---------- */
  const LOGO_SVG = `
    <svg class="logo-mark" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lgA" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0" stop-color="#4f46e5"/><stop offset="1" stop-color="#a855f7"/>
        </linearGradient>
        <linearGradient id="lgB" x1="48" y1="0" x2="0" y2="48">
          <stop offset="0" stop-color="#38bdf8"/><stop offset="1" stop-color="#4f46e5"/>
        </linearGradient>
      </defs>
      <path d="M24 2 42 12.5v23L24 46 6 35.5v-23L24 2Z" fill="url(#lgA)"/>
      <path d="M15 18.5h13.5a4.7 4.7 0 0 1 0 9.4H19a4.7 4.7 0 0 0 0 9.4H33" stroke="#fff" stroke-width="4.4" stroke-linecap="round" fill="none"/>
      <path d="M24 2 42 12.5 24 23 6 12.5 24 2Z" fill="url(#lgB)" opacity=".85"/>
    </svg>`;

  /* ---------- Header ---------- */
  const NAV = [
    { label: "Home", href: "index.html", key: "home" },
    { label: "About", href: "about.html", key: "about" },
    { label: "Services", href: "services.html", key: "services" },
    { label: "Blog", href: "blog.html", key: "blog" },
    { label: "Trade", href: "trade.html", key: "trade" },
    { label: "Contact", href: "contact.html", key: "contact" },
  ];

  function renderHeader() {
    const host = document.getElementById("site-header");
    if (!host) return;
    const active = host.dataset.active || "";
    const links = NAV.map(n =>
      `<a href="${n.href}" class="${n.key === active ? "active" : ""}">${n.label}</a>`).join("");
    const mobileLinks = NAV.map((n, i) =>
      `<a href="${n.href}" style="transition-delay:${0.06 * i + 0.1}s">${n.label}</a>`).join("");
    host.className = "site-header";
    host.innerHTML = `
      <div class="container header-inner">
        <a href="index.html" class="logo">${LOGO_SVG}
          <span class="logo-text"><b>STACKLY</b><span>CRYPTO</span></span>
        </a>
        <nav class="main-nav">${links}</nav>
        <div class="header-actions">
          <div class="lang-select"><i class="fa-solid fa-globe"></i> EN <i class="fa-solid fa-chevron-down" style="font-size:10px"></i>
            <div class="lang-menu">
              <a href="404.html">English</a><a href="404.html">Français</a><a href="404.html">Español</a>
            </div>
          </div>
          <a href="login.html" class="btn btn-outline" style="padding:12px 26px">Log In</a>
          <a href="register.html" class="btn btn-primary" style="padding:12px 26px">Get Started <i class="fa-solid fa-arrow-right"></i></a>
          <button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
        </div>
      </div>
      <div class="mobile-menu" id="mobileMenu">
        ${mobileLinks}
        <a href="login.html" class="btn btn-outline">Log In</a>
        <a href="register.html" class="btn btn-primary">Get Started <i class="fa-solid fa-arrow-right"></i></a>
      </div>`;
    const ham = document.getElementById("hamburger");
    const menu = document.getElementById("mobileMenu");
    ham.addEventListener("click", () => {
      ham.classList.toggle("open");
      menu.classList.toggle("open");
      document.body.style.overflow = menu.classList.contains("open") ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      ham.classList.remove("open"); menu.classList.remove("open"); document.body.style.overflow = "";
    }));
    const onScroll = () => host.classList.toggle("scrolled", window.scrollY > 40);
    window.addEventListener("scroll", onScroll); onScroll();
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    const host = document.getElementById("site-footer");
    if (!host) return;
    host.className = "site-footer";
    host.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="logo">${LOGO_SVG}
              <span class="logo-text"><b>STACKLY</b><span>CRYPTO</span></span></a>
            <p>The most trusted cryptocurrency platform. Trade, stake and grow your digital assets with bank-grade security and lightning-fast execution.</p>
            <div class="socials">
              <a href="404.html" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="404.html" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="404.html" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
              <a href="404.html" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="404.html" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          <div class="footer-col"><h4>Company</h4><ul>
            <li><a href="index.html"><i class="fa-solid fa-arrow-right"></i>Home</a></li>
            <li><a href="about.html"><i class="fa-solid fa-arrow-right"></i>About Us</a></li>
            <li><a href="services.html"><i class="fa-solid fa-arrow-right"></i>Services</a></li>
            <li><a href="blog.html"><i class="fa-solid fa-arrow-right"></i>Blog</a></li>
            <li><a href="trade.html"><i class="fa-solid fa-arrow-right"></i>Trade</a></li>
            <li><a href="contact.html"><i class="fa-solid fa-arrow-right"></i>Contact</a></li>
          </ul></div>
          <div class="footer-col"><h4>Services</h4><ul>
            <li><a href="services.html"><i class="fa-solid fa-arrow-right"></i>Buy &amp; Sell</a></li>
            <li><a href="404.html"><i class="fa-solid fa-arrow-right"></i>Exchange</a></li>
            <li><a href="404.html"><i class="fa-solid fa-arrow-right"></i>Wallet</a></li>
            <li><a href="404.html"><i class="fa-solid fa-arrow-right"></i>Staking</a></li>
          </ul></div>
          <div class="footer-col"><h4>Support</h4><ul>
            <li><a href="404.html"><i class="fa-solid fa-arrow-right"></i>Help Center</a></li>
            <li><a href="index.html#faq"><i class="fa-solid fa-arrow-right"></i>FAQs</a></li>
            <li><a href="contact.html"><i class="fa-solid fa-arrow-right"></i>Contact Us</a></li>
            <li><a href="404.html"><i class="fa-solid fa-arrow-right"></i>Privacy Policy</a></li>
            <li><a href="404.html"><i class="fa-solid fa-arrow-right"></i>Terms of Use</a></li>
          </ul></div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Stackly Crypto. All rights reserved.</span>
          <div class="fb-links">
            <a href="404.html">Privacy</a><a href="404.html">Terms</a><a href="404.html">Cookies</a>
          </div>
        </div>
      </div>`;
  }

  /* ---------- Toast ---------- */
  window.showToast = function (msg) {
    let t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
    t.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${msg}`;
    t.classList.add("show");
    clearTimeout(t._tm);
    t._tm = setTimeout(() => t.classList.remove("show"), 3200);
  };

  /* ---------- Scroll reveal (AOS-style) ---------- */
  function initReveal() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target;
          const delay = el.dataset.delay || 0;
          setTimeout(() => el.classList.add("revealed"), delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));
  }

  /* ---------- Animated counters ---------- */
  function initCounters() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target; io.unobserve(el);
        const target = parseFloat(el.dataset.count);
        const decimals = (el.dataset.count.split(".")[1] || "").length;
        const suffix = el.dataset.suffix || "";
        const dur = 1800, t0 = performance.now();
        (function tick(now) {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          el.textContent = (target * eased).toFixed(decimals) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll("[data-count]").forEach(el => io.observe(el));
  }

  /* ---------- Hero letter animation ---------- */
  function initHeroTitle() {
    const h = document.querySelector(".hero-title");
    if (!h) return;
    const word = h.textContent.trim();
    h.innerHTML = word.split("").map((c, i) =>
      `<span class="ltr" style="animation-delay:${0.08 * i + 0.15}s">${c}</span>`).join("");
  }

  /* ---------- Typing effect ---------- */
  function initTyping() {
    const el = document.querySelector("[data-typing]");
    if (!el) return;
    const words = JSON.parse(el.dataset.typing);
    let wi = 0, ci = 0, del = false;
    (function type() {
      const w = words[wi];
      el.textContent = w.slice(0, ci);
      if (!del && ci < w.length) { ci++; setTimeout(type, 90); }
      else if (!del) { del = true; setTimeout(type, 1600); }
      else if (ci > 0) { ci--; setTimeout(type, 45); }
      else { del = false; wi = (wi + 1) % words.length; setTimeout(type, 350); }
    })();
  }

  /* ---------- Sparklines ---------- */
  function initSparks() {
    document.querySelectorAll("svg.spark").forEach(svg => {
      const pts = [];
      let v = 15 + Math.random() * 8;
      for (let i = 0; i < 12; i++) {
        v = Math.max(4, Math.min(26, v + (Math.random() - 0.42) * 6));
        pts.push(`${i * 7},${30 - v}`);
      }
      svg.innerHTML = `<polyline points="${pts.join(" ")}"/>`;
    });
  }

  /* ---------- Live price ticker ---------- */
  function initLivePrices() {
    const nodes = document.querySelectorAll("[data-price]");
    if (!nodes.length) return;
    setInterval(() => {
      nodes.forEach(n => {
        let p = parseFloat(n.dataset.price);
        p = p * (1 + (Math.random() - 0.48) * 0.004);
        n.dataset.price = p;
        const dec = p < 10 ? 2 : p < 1000 ? 2 : 2;
        n.textContent = "$" + p.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
      });
    }, 2500);
  }

  /* ---------- FAQ accordion ---------- */
  function initFaq() {
    document.querySelectorAll(".faq-item").forEach(item => {
      const q = item.querySelector(".faq-q");
      const a = item.querySelector(".faq-a");
      q.addEventListener("click", () => {
        const open = item.classList.contains("active");
        document.querySelectorAll(".faq-item.active").forEach(o => {
          o.classList.remove("active"); o.querySelector(".faq-a").style.maxHeight = null;
        });
        if (!open) { item.classList.add("active"); a.style.maxHeight = a.scrollHeight + "px"; }
      });
    });
  }

  /* ---------- Newsletter ---------- */
  function initNewsletter() {
    const f = document.getElementById("newsletterForm");
    if (!f) return;
    f.addEventListener("submit", e => {
      e.preventDefault();
      const input = f.querySelector("input");
      const msg = document.getElementById("nlMsg");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
        msg.textContent = "Please enter a valid email address."; msg.style.color = "#ffd2dc";
        input.focus(); return;
      }
      msg.textContent = "Subscribed successfully! Welcome to Stackly."; msg.style.color = "#5cf2c8";
      showToast("Newsletter subscription successful!");
      input.value = "";
    });
  }

  /* ---------- Back to top ---------- */
  function initBackTop() {
    const b = document.createElement("button");
    b.className = "back-top"; b.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    b.setAttribute("aria-label", "Back to top");
    document.body.appendChild(b);
    window.addEventListener("scroll", () => b.classList.toggle("show", window.scrollY > 600));
    b.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------- Auth: role select ---------- */
  function initRoleSelect() {
    const wrap = document.getElementById("roleSelect");
    if (!wrap) return;
    wrap.querySelectorAll(".role-option").forEach(opt => {
      opt.addEventListener("click", () => {
        wrap.querySelectorAll(".role-option").forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");
        document.getElementById("roleInput").value = opt.dataset.role;
      });
    });
  }

  /* ---------- Password toggle ---------- */
  function initPwdToggle() {
    document.querySelectorAll(".pwd-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const inp = btn.parentElement.querySelector("input");
        inp.type = inp.type === "password" ? "text" : "password";
        btn.innerHTML = inp.type === "password" ? '<i class="fa-solid fa-eye"></i>' : '<i class="fa-solid fa-eye-slash"></i>';
      });
    });
  }

  /* ---------- Form helpers ---------- */
  function setErr(id, msg) {
    const g = document.getElementById(id).closest(".form-group");
    g.classList.add("error");
    g.querySelector(".err-msg").textContent = msg;
  }
  function clearErrs(form) {
    form.querySelectorAll(".form-group.error").forEach(g => g.classList.remove("error"));
  }
  function getStoredSession() {
    try { return JSON.parse(localStorage.getItem("stackly_session") || "null"); }
    catch (e) { return null; }
  }
  function saveStoredSession(session) {
    localStorage.setItem("stackly_session", JSON.stringify(session));
  }
  function clearStoredSession() {
    localStorage.removeItem("stackly_session");
  }
  function renderDashboardProfile(session) {
    if (!session || !session.email) return;
    const avatar = document.getElementById("dashUserAvatar");
    const emailEl = document.getElementById("dashUserEmail");
    if (avatar) avatar.textContent = session.email.charAt(0).toUpperCase();
    if (emailEl) emailEl.textContent = session.email;
  }
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /* ---------- Login ---------- */
  function initLogin() {
    const f = document.getElementById("loginForm");
    if (!f) return;
    const flash = sessionStorage.getItem("stackly_flash");
    if (flash) {
      const m = document.getElementById("authMsg");
      m.className = "auth-msg success"; m.textContent = flash;
      sessionStorage.removeItem("stackly_flash");
    }
    f.addEventListener("submit", e => {
      e.preventDefault(); clearErrs(f);
      const email = document.getElementById("loginEmail").value.trim();
      const pwd = document.getElementById("loginPwd").value;
      const role = document.getElementById("roleInput").value;
      let ok = true;
      if (!role) { showToast("Please select a role: User or Admin"); ok = false; }
      if (!EMAIL_RE.test(email)) { setErr("loginEmail", "Enter a valid email address."); ok = false; }
      if (pwd.length < 6) { setErr("loginPwd", "Password must be at least 6 characters."); ok = false; }
      if (!ok) return;
      saveStoredSession({ email, role, ts: Date.now() });
      const m = document.getElementById("authMsg");
      m.className = "auth-msg success";
      m.textContent = `Welcome back! Logging in as ${role === "admin" ? "Admin" : "User"}…`;
      setTimeout(() => {
        window.location.href = role === "admin" ? "seller-dashboard.html" : "dashboard.html";
      }, 900);
    });
  }

  /* ---------- Register ---------- */
  function initRegister() {
    const f = document.getElementById("registerForm");
    if (!f) return;
    f.addEventListener("submit", e => {
      e.preventDefault(); clearErrs(f);
      const name = document.getElementById("regName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const pwd = document.getElementById("regPwd").value;
      const pwd2 = document.getElementById("regPwd2").value;
      const agree = document.getElementById("regAgree").checked;
      let ok = true;
      if (name.length < 3) { setErr("regName", "Name must be at least 3 characters."); ok = false; }
      if (!EMAIL_RE.test(email)) { setErr("regEmail", "Enter a valid email address."); ok = false; }
      if (pwd.length < 6) { setErr("regPwd", "Password must be at least 6 characters."); ok = false; }
      if (pwd2 !== pwd) { setErr("regPwd2", "Passwords do not match."); ok = false; }
      if (!agree) { setErr("regAgree", "You must accept the terms."); ok = false; }
      if (!ok) return;
      const m = document.getElementById("authMsg");
      m.className = "auth-msg success";
      m.textContent = "Account created! Redirecting to login…";
      sessionStorage.setItem("stackly_flash", "Registration successful — please log in.");
      setTimeout(() => { window.location.href = "login.html"; }, 1100);
    });
  }

  /* ---------- Contact (validated, then routes to 404) ---------- */
  function initContact() {
    const f = document.getElementById("contactForm");
    if (!f) return;
    f.addEventListener("submit", e => {
      e.preventDefault(); clearErrs(f);
      const name = document.getElementById("cName").value.trim();
      const email = document.getElementById("cEmail").value.trim();
      const subj = document.getElementById("cSubject").value.trim();
      const msg = document.getElementById("cMsg").value.trim();
      let ok = true;
      if (name.length < 3) { setErr("cName", "Name must be at least 3 characters."); ok = false; }
      if (!EMAIL_RE.test(email)) { setErr("cEmail", "Enter a valid email address."); ok = false; }
      if (subj.length < 3) { setErr("cSubject", "Please add a subject."); ok = false; }
      if (msg.length < 10) { setErr("cMsg", "Message must be at least 10 characters."); ok = false; }
      if (!ok) return;
      showToast("Message sent! Redirecting…");
      setTimeout(() => { window.location.href = "404.html"; }, 900);
    });
  }

  /* ---------- Dashboard guards + charts ---------- */
  function initDashboard() {
    const body = document.querySelector(".dash-body");
    if (!body) return;
    const session = getStoredSession();
    const need = body.dataset.role; // "user" | "admin"
    if (!session) { window.location.href = "login.html"; return; }
    const who = document.getElementById("dashUser");
    if (who) who.textContent = session.email.split("@")[0];
    renderDashboardProfile(session);

    // Sidebar (mobile)
    const sb = document.querySelector(".sidebar");
    const ov = document.querySelector(".sidebar-overlay");
    const tgl = document.querySelector(".menu-toggle-dash");
    if (tgl) tgl.addEventListener("click", () => { sb.classList.add("show"); ov.classList.add("show"); document.body.classList.add("no-scroll"); });
    if (ov) ov.addEventListener("click", () => { sb.classList.remove("show"); ov.classList.remove("show"); document.body.classList.remove("no-scroll"); });

    // Logout
    document.querySelectorAll("[data-logout]").forEach(a => a.addEventListener("click", e => {
      e.preventDefault();
      clearStoredSession();
      window.location.href = "login.html";
    }));

    // Sidebar view switching — every sidebar item shows its own data view
    const sideLinks = document.querySelectorAll(".side-link[data-view]");
    const views = document.querySelectorAll(".dash-view");
    const titleEl = document.getElementById("dashTitle");
    const subEl = document.getElementById("dashSub");
    sideLinks.forEach(link => link.addEventListener("click", e => {
      e.preventDefault();
      sideLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      views.forEach(v => v.classList.remove("active"));
      const view = document.getElementById("view-" + link.dataset.view);
      if (view) view.classList.add("active");
      if (titleEl && link.dataset.title) titleEl.textContent = link.dataset.title;
      if (subEl && link.dataset.sub) subEl.textContent = link.dataset.sub;
      if (sb) sb.classList.remove("show");
      if (ov) ov.classList.remove("show");
      document.body.classList.remove("no-scroll");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }));

    // Dashboard forms — demo save with toast
    document.querySelectorAll(".dash-form").forEach(f => f.addEventListener("submit", e => {
      e.preventDefault();
      showToast(f.dataset.msg || "Saved successfully!");
    }));
    // Dashboard action buttons — demo toast
    document.querySelectorAll("[data-toast]").forEach(b => b.addEventListener("click", e => {
      e.preventDefault();
      showToast(b.dataset.toast);
    }));

    // Progress bars
    const pio = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { en.target.style.width = en.target.dataset.w + "%"; pio.unobserve(en.target); }
    }), { threshold: 0.4 });
    document.querySelectorAll(".progress span").forEach(s => pio.observe(s));

    // Line chart
    const canvas = document.getElementById("lineChart");
    if (canvas) {
      const sets = {
        "1W": [42, 45, 43, 48, 52, 49, 55, 58, 54, 60, 63, 66],
        "1M": [30, 38, 34, 42, 47, 44, 52, 49, 56, 60, 58, 66],
        "1Y": [18, 24, 22, 30, 28, 36, 40, 38, 48, 52, 58, 66],
      };
      const draw = key => {
        const d = sets[key];
        const ctx = canvas.getContext("2d");
        const W = canvas.width = canvas.offsetWidth * 2;
        const H = canvas.height = canvas.offsetHeight * 2;
        ctx.clearRect(0, 0, W, H);
        const pad = 30, max = 75, min = 10;
        const X = i => pad + i * (W - pad * 2) / (d.length - 1);
        const Y = v => H - pad - (v - min) * (H - pad * 2) / (max - min);
        ctx.strokeStyle = "rgba(120,110,200,.15)"; ctx.lineWidth = 1.4;
        for (let g = 0; g <= 4; g++) {
          const y = pad + g * (H - pad * 2) / 4;
          ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(W - pad, y); ctx.stroke();
        }
        // gradient fill
        const grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, "rgba(124,58,237,.30)"); grad.addColorStop(1, "rgba(124,58,237,0)");
        ctx.beginPath(); ctx.moveTo(X(0), Y(d[0]));
        d.forEach((v, i) => { if (i) ctx.lineTo(X(i), Y(v)); });
        ctx.lineTo(X(d.length - 1), H - pad); ctx.lineTo(X(0), H - pad); ctx.closePath();
        ctx.fillStyle = grad; ctx.fill();
        // line
        const lg = ctx.createLinearGradient(0, 0, W, 0);
        lg.addColorStop(0, "#4f46e5"); lg.addColorStop(1, "#a855f7");
        ctx.beginPath(); ctx.moveTo(X(0), Y(d[0]));
        d.forEach((v, i) => { if (i) ctx.lineTo(X(i), Y(v)); });
        ctx.strokeStyle = lg; ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.lineCap = "round"; ctx.stroke();
        // points
        d.forEach((v, i) => {
          ctx.beginPath(); ctx.arc(X(i), Y(v), 6, 0, 7);
          ctx.fillStyle = "#fff"; ctx.fill(); ctx.strokeStyle = "#7c3aed"; ctx.lineWidth = 3.5; ctx.stroke();
        });
      };
      draw("1W");
      document.querySelectorAll(".chart-tabs button").forEach(b => b.addEventListener("click", () => {
        document.querySelectorAll(".chart-tabs button").forEach(x => x.classList.remove("active"));
        b.classList.add("active"); draw(b.dataset.range);
      }));
      window.addEventListener("resize", () => draw(document.querySelector(".chart-tabs button.active").dataset.range));
    }

    // Donut chart
    const donut = document.getElementById("donutChart");
    if (donut) {
      const parts = [
        { v: 42, c: "#4f46e5" }, { v: 26, c: "#8b5cf6" },
        { v: 18, c: "#12d6a0" }, { v: 14, c: "#f7b955" },
      ];
      const ctx = donut.getContext("2d");
      const S = donut.width = donut.height = 440;
      const cx = S / 2, cy = S / 2, r = 165, lw = 52;
      let a0 = -Math.PI / 2;
      const total = parts.reduce((s, p) => s + p.v, 0);
      parts.forEach(p => {
        const a1 = a0 + (p.v / total) * Math.PI * 2;
        ctx.beginPath(); ctx.arc(cx, cy, r, a0 + 0.03, a1 - 0.03);
        ctx.strokeStyle = p.c; ctx.lineWidth = lw; ctx.lineCap = "round"; ctx.stroke();
        a0 = a1;
      });
    }
  }

  /* ---------- Remember last real page (for 404 "Go Back") ---------- */
  (function trackLastPage() {
    const file = location.pathname.split("/").pop() || "index.html";
    if (file === "404.html") return;
    // Store as {url, hash} so the 404 page can return to the exact section
    sessionStorage.setItem("stackly_last", JSON.stringify({
      url: location.href.split("#")[0],
      hash: location.hash || ""
    }));
  })();

  // Before leaving for the 404 page, remember the exact section the visitor
  // was in — footer links return to the footer, section links to that section.
  document.addEventListener("click", function (e) {
    const trigger = e.target.closest('a[href*="404.html"], [onclick*="404.html"]');
    if (!trigger) return;
    let hash = "";
    const footerHit = trigger.closest("footer");
    if (footerHit) {
      hash = "#site-footer";
    } else {
      const sec = trigger.closest("section[id], [id]");
      if (sec && sec.id) hash = "#" + sec.id;
    }
    sessionStorage.setItem("stackly_last", JSON.stringify({
      url: location.href.split("#")[0],
      hash: hash
    }));
  }, true);

  // Landing back with a section hash: jump straight to it (no scroll from the
  // hero), re-pinning once images/layout settle so the position is exact.
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) {
      const jump = () => target.scrollIntoView({ behavior: "instant", block: "start" });
      jump();
      setTimeout(jump, 120);
      setTimeout(jump, 450);
    }
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
    initReveal();
    initCounters();
    initHeroTitle();
    initTyping();
    initSparks();
    initLivePrices();
    initFaq();
    initNewsletter();
    initBackTop();
    initRoleSelect();
    initPwdToggle();
    initLogin();
    initRegister();
    initContact();
    initDashboard();
  });
})();
