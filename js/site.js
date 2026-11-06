/* Shared behaviour: header, mobile menu, scroll progress, reveal-on-scroll, panel spotlight. */
(function () {
  var header = document.querySelector("header");
  var bar = document.querySelector(".progress");
  function onScroll() {
    var y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
    if (header) header.classList.toggle("scrolled", y > 8);
    if (bar && max > 0) bar.style.transform = "scaleX(" + Math.min(y / max, 1) + ")";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var burger = document.querySelector(".burger"), menu = document.getElementById("menu");
  if (burger && menu) {
    function setMenu(open) { burger.setAttribute("aria-expanded", open); menu.classList.toggle("open", open); }
    burger.addEventListener("click", function () { setMenu(burger.getAttribute("aria-expanded") !== "true"); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  }

  var targets = document.querySelectorAll(".hero h1,.hero .lead,.hero form,.rows>div,.steps li,.ws,.ws .ev,.founder blockquote,.founder p,section h2,.band .lead,.band form,.page h1,.page .meta,.page .cards,.center .wrap>*");
  targets.forEach(function (el, i) {
    el.classList.add("reveal");
    var sibling = Array.prototype.indexOf.call(el.parentNode.children, el);
    el.style.setProperty("--d", Math.min(sibling, 5) * 0.09 + "s");
  });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    targets.forEach(function (el) { io.observe(el); });
  } else { targets.forEach(function (el) { el.classList.add("in"); }); }

  var ws = document.querySelector(".ws");
  if (ws) ws.addEventListener("pointermove", function (e) {
    var r = ws.getBoundingClientRect();
    ws.style.setProperty("--mx", e.clientX - r.left + "px");
    ws.style.setProperty("--my", e.clientY - r.top + "px");
  });
})();
