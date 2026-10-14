// La guirnalda y los pinos de las esquinas, para no repetirlos en cada vista.
window.GUIRNALDA = '<svg class="guirnalda" viewBox="0 0 440 64" preserveAspectRatio="none" aria-hidden="true">\
<path d="M0 10 Q110 40 220 22 T440 10" stroke="#1b4332" stroke-width="3" fill="none"/>\
<g fill="#2d6a4f"><path d="M46 16 l11 19 h-22 z"/><path d="M46 7 l8 14 h-16 z"/>\
<path d="M150 26 l12 21 h-24 z"/><path d="M150 16 l9 15 h-18 z"/>\
<path d="M290 25 l12 21 h-24 z"/><path d="M290 15 l9 15 h-18 z"/>\
<path d="M394 15 l11 19 h-22 z"/><path d="M394 6 l8 14 h-16 z"/></g>\
<g stroke="#1b4332" stroke-width="1.6"><line x1="95" y1="24" x2="95" y2="33"/>\
<line x1="220" y1="23" x2="220" y2="34"/><line x1="345" y1="24" x2="345" y2="33"/>\
<line x1="18" y1="13" x2="18" y2="22"/><line x1="425" y1="13" x2="425" y2="22"/></g>\
<g><circle cx="95" cy="40" r="7.5" fill="#c0392b"/><circle cx="93" cy="38" r="2" fill="#fff" opacity=".55"/>\
<circle cx="220" cy="41" r="8.5" fill="#c9a227"/><circle cx="218" cy="39" r="2.2" fill="#fff" opacity=".55"/>\
<circle cx="345" cy="40" r="7.5" fill="#c0392b"/><circle cx="343" cy="38" r="2" fill="#fff" opacity=".55"/>\
<circle cx="18" cy="29" r="6.5" fill="#c9a227"/><circle cx="425" cy="29" r="6.5" fill="#c0392b"/></g></svg>';

function pinos(volteado, c1, c2) {
  return '<svg class="esq ' + (volteado ? 'id' : 'il') + '" viewBox="0 0 88 88" aria-hidden="true">\
<g fill="#2d6a4f" opacity=".85"><path d="M30 27 l10 17 h-20 z"/><path d="M30 37 l13 21 h-26 z"/>\
<path d="M30 48 l16 26 h-32 z"/></g><rect x="27" y="74" width="6" height="8" fill="#6b4226" opacity=".85"/>\
<g fill="#2d6a4f" opacity=".6"><path d="M62 58 l9 14 h-18 z"/><path d="M62 64 l11 14 h-22 z"/></g>\
<rect x="59.5" y="78" width="5" height="6" fill="#6b4226" opacity=".6"/>\
<circle cx="48" cy="56" r="3.5" fill="' + c1 + '" opacity=".75"/>\
<circle cx="20" cy="66" r="3" fill="' + c2 + '" opacity=".75"/></svg>';
}
window.PINOS = pinos(false, "#c0392b", "#c9a227") + pinos(true, "#c9a227", "#c0392b");

window.ESTRELLA = '<div class="sep"><i></i><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">\
<path d="M12 2 l2.5 6.5 L21 11 l-6.5 2.5 L12 20 l-2.5 -6.5 L3 11 l6.5 -2.5 z" fill="#c9a227"/></svg><i></i></div>';

window.nevar = function (el, n) {
  for (var i = 0; i < n; i++) {
    var s = document.createElement("span");
    s.textContent = Math.random() < .5 ? "❅" : "❆";
    s.style.left = Math.random() * 100 + "%";
    s.style.fontSize = (8 + Math.random() * 14) + "px";
    s.style.animationDuration = (8 + Math.random() * 13) + "s";
    s.style.animationDelay = (-Math.random() * 20) + "s";
    el.appendChild(s);
  }
};
