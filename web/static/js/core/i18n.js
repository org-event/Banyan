import { normalizeUiLocale, UI_LOCALE_CODES } from './ui-locales.js';

let catalog = {};
let locale = 'en';

export function t(key, params = {}) {
  const parts = key.split('.');
  let v = catalog;
  for (const p of parts) {
    v = v?.[p];
  }
  if (typeof v !== 'string') return key;
  return v.replace(/\{(\w+)\}/g, (_, k) => (params[k] != null ? String(params[k]) : `{${k}}`));
}

export function getLocale() {
  return locale;
}

export async function loadCatalog(loc) {
  const code = normalizeUiLocale(loc);
  let r = await fetch(`/static/locales/${code}.json`);
  if (!r.ok && code !== 'en') {
    r = await fetch('/static/locales/en.json');
  }
  if (!r.ok) throw new Error('locale catalog missing');
  catalog = await r.json();
  locale = r.url.endsWith(`/${code}.json`) ? code : 'en';
  document.documentElement.lang = locale;
}

export function applyDocumentI18n() {
  document.title = t('app.title');
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.hasAttribute('data-i18n-placeholder')) el.placeholder = val;
    else el.textContent = val;
  });
}

/** @param {string} effective from settings (_effective_ui_locale) */
export async function initI18n(effective) {
  await loadCatalog(effective || 'en');
  applyDocumentI18n();
}

export async function switchLocale(code, systemLocale) {
  const loc = code || systemLocale || 'en';
  await loadCatalog(normalizeUiLocale(loc));
  applyDocumentI18n();
}

export { UI_LOCALE_CODES };
