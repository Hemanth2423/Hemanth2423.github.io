(function () {
  var button = document.querySelector('.theme-toggle');
  if (!button) return;

  function isDark() {
    var selected = document.documentElement.dataset.theme;
    return selected === 'dark' || (selected !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  function update() {
    var dark = isDark();
    button.setAttribute('aria-label', 'Switch to ' + (dark ? 'light' : 'dark') + ' theme');
    button.setAttribute('aria-pressed', String(dark));
    button.querySelector('.theme-label').textContent = dark ? 'Light' : 'Dark';
  }

  button.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { /* storage may be unavailable */ }
    update();
  });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', update);
  update();
}());