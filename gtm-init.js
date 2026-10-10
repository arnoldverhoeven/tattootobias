/* Google Tag Manager + cookie consent (Consent Mode v2) — Tattoo Tobias.
   Loaded as the first script in <head> of every page (external file, so the Content-Security-Policy can stay free of 'unsafe-inline').
   • Until the visitor says yes, analytics_storage stays "denied": GTM/GA4 then send no cookies and no identifiers.
   • The choice is remembered in this browser (localStorage 'tt-consent'). "Cookie settings" in the footer reopens it.
   • The GTM container ID is the only thing to change if the container ever changes. */
(function (w, d) {
  var GTM_ID = 'GTM-WGS6XVCV', KEY = 'tt-consent';
  w.dataLayer = w.dataLayer || [];
  function gtag() { w.dataLayer.push(arguments); }
  var saved = ''; try { saved = localStorage.getItem(KEY) || ''; } catch (e) {}
  function state(on) { return { analytics_storage: on ? 'granted' : 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' }; }
  var def = state(saved === 'granted'); def.wait_for_update = 500;
  gtag('consent', 'default', def);

  /* ---- Google Tag Manager (standard snippet) ---- */
  w.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName('script')[0], j = d.createElement('script');
  j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
  f.parentNode.insertBefore(j, f);

  /* ---- consent banner ---- */
  var T = {
    en: { t: 'Cookies', p: 'I’d like to count visits (anonymous statistics) to improve this website. No advertising, no tracking across other sites.', y: 'Accept', n: 'Decline', m: 'Privacy policy', s: 'Cookie settings' },
    nl: { t: 'Cookies', p: 'Ik tel graag bezoeken (anonieme statistieken) om deze website te verbeteren. Geen reclame, geen tracking op andere sites.', y: 'Accepteren', n: 'Weigeren', m: 'Privacybeleid', s: 'Cookie-instellingen' },
    fr: { t: 'Cookies', p: 'J’aimerais compter les visites (statistiques anonymes) pour améliorer ce site. Pas de publicité, pas de suivi sur d’autres sites.', y: 'Accepter', n: 'Refuser', m: 'Politique de confidentialité', s: 'Paramètres des cookies' },
    de: { t: 'Cookies', p: 'Ich zähle gern Besuche (anonyme Statistik), um diese Website zu verbessern. Keine Werbung, kein Tracking auf anderen Seiten.', y: 'Akzeptieren', n: 'Ablehnen', m: 'Datenschutzerklärung', s: 'Cookie-Einstellungen' }
  };
  function lang() { var l = ''; try { l = localStorage.getItem('tt-lang') || ''; } catch (e) {} if (!/^(en|nl|fr|de)$/.test(l)) { l = (navigator.language || 'en').slice(0, 2).toLowerCase(); } return T[l] ? l : 'en'; }
  function choose(v) { try { localStorage.setItem(KEY, v); } catch (e) {} gtag('consent', 'update', state(v === 'granted')); var b = d.getElementById('tt-consent'); if (b) b.remove(); }
  function css() {
    if (d.getElementById('tt-consent-css')) return;
    var s = d.createElement('style'); s.id = 'tt-consent-css';
    s.textContent = '#tt-consent{position:fixed;z-index:99999;left:16px;bottom:16px;max-width:420px;background:#1c1a16;color:#f4efe2;border-radius:3px;padding:18px 20px;box-shadow:0 18px 50px rgba(0,0,0,.45);font:14px/1.5 "DM Sans",system-ui,sans-serif}'
      + '#tt-consent strong{display:block;font:400 20px/1.1 Anton,Impact,sans-serif;letter-spacing:.04em;text-transform:uppercase;margin-bottom:6px}'
      + '#tt-consent p{margin:0 0 12px;color:#d9d2c0}#tt-consent a{color:#f4efe2;text-underline-offset:2px}'
      + '#tt-consent .r{display:flex;gap:8px;flex-wrap:wrap;align-items:center}'
      + '#tt-consent button{min-height:44px;padding:0 20px;border-radius:3px;border:2px solid #BB3431;font:700 12px "DM Sans",system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;flex:1 1 auto}'
      + '#tt-consent .y{background:#BB3431;color:#fff}#tt-consent .n{background:transparent;color:#f4efe2;border-color:#f4efe2}'
      + '#tt-consent .y:hover{background:#962A28;border-color:#962A28}#tt-consent .n:hover{background:#f4efe2;color:#1c1a16}'
      + '@media (max-width:520px){#tt-consent{left:8px;right:8px;bottom:8px;max-width:none}}';
    d.head.appendChild(s);
  }
  function show() {
    var old = d.getElementById('tt-consent'); if (old) old.remove();
    css(); var x = T[lang()], b = d.createElement('div');
    b.id = 'tt-consent'; b.setAttribute('role', 'dialog'); b.setAttribute('aria-live', 'polite'); b.setAttribute('aria-label', x.t);
    b.innerHTML = '<strong>' + x.t + '</strong><p>' + x.p + ' <a href="privacy.html">' + x.m + '</a></p><div class="r"><button type="button" class="n">' + x.n + '</button><button type="button" class="y">' + x.y + '</button></div>';
    b.querySelector('.y').onclick = function () { choose('granted'); };
    b.querySelector('.n').onclick = function () { choose('denied'); };
    d.body.appendChild(b);
  }
  w.ttConsentSettings = show;
  function ready() {
    if (!saved) show();
    d.addEventListener('click', function (e) { var a = e.target.closest && e.target.closest('[data-cookie-settings]'); if (a) { e.preventDefault(); show(); } });
    function label() { var l = d.querySelectorAll('[data-cookie-settings]'); for (var i = 0; i < l.length; i++) l[i].textContent = T[lang()].s; }
    label();
    try { new MutationObserver(function () { label(); if (d.getElementById('tt-consent')) show(); }).observe(d.documentElement, { attributes: true, attributeFilter: ['lang'] }); } catch (e) {}
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', ready); else ready();
})(window, document);
