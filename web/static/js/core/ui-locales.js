/** Supported UI locales — must match files in /static/locales/{code}.json */
export const UI_LOCALES = [
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'ru', flag: '🇷🇺', name: 'Русский' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'es', flag: '🇪🇸', name: 'Español' },
  { code: 'it', flag: '🇮🇹', name: 'Italiano' },
  { code: 'pt', flag: '🇧🇷', name: 'Português' },
  { code: 'pl', flag: '🇵🇱', name: 'Polski' },
  { code: 'uk', flag: '🇺🇦', name: 'Українська' },
  { code: 'zh', flag: '🇨🇳', name: '中文' },
  { code: 'ar', flag: '🇸🇦', name: 'العربية' },
  { code: 'tr', flag: '🇹🇷', name: 'Türkçe' },
  { code: 'vi', flag: '🇻🇳', name: 'Tiếng Việt' },
  { code: 'hi', flag: '🇮🇳', name: 'हिन्दी' },
  { code: 'nl', flag: '🇳🇱', name: 'Nederlands' },
  { code: 'sv', flag: '🇸🇪', name: 'Svenska' },
  { code: 'cs', flag: '🇨🇿', name: 'Čeština' },
  { code: 'da', flag: '🇩🇰', name: 'Dansk' },
  { code: 'fi', flag: '🇫🇮', name: 'Suomi' },
];

export const UI_LOCALE_CODES = new Set(UI_LOCALES.map((l) => l.code));

export function normalizeUiLocale(code) {
  if (!code) return 'en';
  const base = code.split('-')[0].toLowerCase();
  return UI_LOCALE_CODES.has(base) ? base : 'en';
}
