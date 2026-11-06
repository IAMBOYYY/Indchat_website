/* Contact form: opens the visitor's email app with the message filled in. */
(function () {
  var form = document.querySelector("[data-contact]");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var body = d.get("message") + "\n\n— " + d.get("name") + " (" + d.get("email") + ")";
    location.href = "mailto:hello@indchat.com?subject=" + encodeURIComponent("indchat: " + d.get("topic")) + "&body=" + encodeURIComponent(body);
  });
})();
