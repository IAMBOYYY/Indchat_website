/* Uses assets/logo.png if it exists. Otherwise the built-in SVG mark stays. */
(function () {
  var img = new Image();
  img.onload = function () {
    document.querySelectorAll(".brand svg").forEach(function (svg) {
      var logo = img.cloneNode();
      logo.alt = "";
      logo.className = "brand-logo";
      svg.replaceWith(logo);
    });
  };
  img.src = "assets/logo.png";
})();
