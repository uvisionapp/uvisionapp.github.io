(() => {
  const root = document.documentElement;
  const languageButton = document.querySelector('[data-language-toggle]');
  const themeButton = document.querySelector('[data-theme-toggle]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('.main-nav');
  let language = 'en';
  let theme = 'system';

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    root.lang = language;
    document.querySelectorAll('[data-en][data-ru]').forEach((element) => {
      element.textContent = element.dataset[language];
    });
    document.querySelectorAll('.policy-document').forEach((section) => {
      section.hidden = section.dataset.language !== language;
    });
    document.querySelectorAll('title[data-en][data-ru]').forEach((element) => {
      element.textContent = element.dataset[language];
    });
    if (nav) nav.setAttribute('aria-label', language === 'en' ? nav.dataset.labelEn : nav.dataset.labelRu);
    if (languageButton) {
      languageButton.textContent = language === 'en' ? 'RU' : 'EN';
      languageButton.setAttribute('aria-label', language === 'en' ? 'Switch language to Russian' : 'Переключить язык на английский');
    }
    setTheme(theme);
    if (menuButton) {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      const label = language === 'en' ? (open ? 'Close menu' : 'Open menu') : (open ? 'Закрыть меню' : 'Открыть меню');
      const sr = menuButton.querySelector('.sr-only');
      if (sr) sr.textContent = label;
    }
  }

  function setTheme(nextTheme) {
    theme = nextTheme;
    if (theme === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.dataset.theme = theme;
    }
    if (themeButton) {
      const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      themeButton.setAttribute('aria-label', language === 'en' ? (isDark ? 'Use light theme' : 'Use dark theme') : (isDark ? 'Включить светлую тему' : 'Включить тёмную тему'));
    }
  }

  if (languageButton) languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'ru' : 'en'));
  if (themeButton) themeButton.addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark'));
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      const sr = menuButton.querySelector('.sr-only');
      if (sr) sr.textContent = language === 'en' ? (open ? 'Close menu' : 'Open menu') : (open ? 'Закрыть меню' : 'Открыть меню');
    });
  }
  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
  setLanguage('en');
  setTheme('system');
})();
