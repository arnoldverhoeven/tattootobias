/* privacy.html / terms.html: fills legal data, theme and language */
(function(){
  var L=window.LEGAL||{};
  /* fill every [data-legal] from legal.js; hide lines whose value is empty */
  document.querySelectorAll('[data-legal]').forEach(function(el){var k=el.getAttribute('data-legal'),v=L[k];if(v===undefined||v===''||v===null){var row=el.closest('[data-legal-row]')||el;row.classList.add('hide')}else{el.textContent=String(v);if(el.getAttribute('data-legal-href')==='mailto')el.href='mailto:'+v}});
  /* theme follows the website's choice */
  try{var t=localStorage.getItem('tt-theme');if(t===null)t=(matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'';if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}
  /* language: nl when the website was used in Dutch, otherwise English */
  var lang='en';try{var l=localStorage.getItem('tt-lang');if(l==='nl')lang='nl'}catch(e){}
  if(location.hash==='#nl')lang='nl';if(location.hash==='#en')lang='en';
  function set(l){lang=l;document.documentElement.lang=l;document.querySelectorAll('[data-lang]').forEach(function(d){d.classList.toggle('on',d.getAttribute('data-lang')===l)});document.querySelectorAll('[data-set]').forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-set')===l))})}
  document.querySelectorAll('[data-set]').forEach(function(b){b.onclick=function(){set(b.getAttribute('data-set'))}});
  set(lang);
})();
