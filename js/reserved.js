/* reserved.html: show the visitor's email and play a short confetti burst. */
(function () {
  var email = sessionStorage.getItem("indchat_email");
  var slot = document.getElementById("email");
  if (email && slot) slot.textContent = email;
  else if (slot) slot.textContent = "your inbox";

  var share = document.getElementById("share");
  if (share) share.addEventListener("click", function () {
    var url = location.origin + "/";
    (navigator.share ? navigator.share({ title: "indchat", url: url }) : navigator.clipboard.writeText(url).then(function () { share.textContent = "Link copied"; })).catch(function () {});
  });

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var c = document.getElementById("confetti"), ctx = c.getContext("2d");
  var colors = ["#0F5E57", "#E8A33D", "#1E9E73", "#46B8A8", "#0C2A2B"], bits = [], t0 = performance.now();
  function size() { c.width = innerWidth * devicePixelRatio; c.height = innerHeight * devicePixelRatio; }
  size();
  for (var i = 0; i < 90; i++) bits.push({
    x: c.width / 2, y: c.height * 0.35, vx: (Math.random() - 0.5) * 16 * devicePixelRatio, vy: (-Math.random() * 14 - 4) * devicePixelRatio,
    w: (6 + Math.random() * 6) * devicePixelRatio, h: (3 + Math.random() * 4) * devicePixelRatio, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4,
    col: colors[i % colors.length]
  });
  (function frame(now) {
    ctx.clearRect(0, 0, c.width, c.height);
    bits.forEach(function (b) {
      b.vy += 0.35 * devicePixelRatio; b.x += b.vx; b.y += b.vy; b.r += b.vr;
      ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.r); ctx.fillStyle = b.col; ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h); ctx.restore();
    });
    if (now - t0 < 3200) requestAnimationFrame(frame); else ctx.clearRect(0, 0, c.width, c.height);
  })(t0);
})();
