/* Early-access forms. On success, sends the visitor to reserved.html. */
(function () {
  var cfg = window.INDCHAT || {};
  document.querySelectorAll("[data-join]").forEach(function (form) {
    var note = form.parentElement.querySelector(".note");
    var input = form.querySelector("input[type=email]");
    var btn = form.querySelector("button");
    var label = btn.textContent;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = input.value.trim();
      if (form.website && form.website.value) return; /* honeypot: bots fill this hidden field */
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        note.textContent = "Please enter a valid email address.";
        input.focus();
        return;
      }
      btn.disabled = true;
      btn.textContent = "Reserving your seat…";
      var send = cfg.endpoint
        ? fetch(cfg.endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: email }) })
            .then(function (r) { if (!r.ok) throw new Error("bad response"); })
        : Promise.resolve(); /* no backend yet: design preview only */
      send.then(function () {
        sessionStorage.setItem("indchat_email", email);
        location.href = "reserved.html";
      }).catch(function () {
        note.textContent = "Something went wrong. Please try again in a moment.";
        btn.disabled = false;
        btn.textContent = label;
      });
    });
  });
})();
