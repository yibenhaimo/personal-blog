import { ui } from '../i18n/ui';

export const locales = ['zh', 'en', 'ja', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { label: string; htmlLang: string; giscusLang: string; dateLocale: string }> = {
  zh: { label: '中文', htmlLang: 'zh-CN', giscusLang: 'zh-CN', dateLocale: 'zh-CN' },
  en: { label: 'English', htmlLang: 'en', giscusLang: 'en', dateLocale: 'en-US' },
  ja: { label: '日本語', htmlLang: 'ja', giscusLang: 'ja', dateLocale: 'ja-JP' },
  fr: { label: 'Français', htmlLang: 'fr', giscusLang: 'fr', dateLocale: 'fr-FR' },
};

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function getUi(locale: Locale) {
  return ui[locale];
}

export function localizedPath(locale: Locale, path = '') {
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  return cleanPath ? `/${locale}/${cleanPath}/` : `/${locale}/`;
}

export function formatDate(value: Date, locale: Locale) {
  return new Intl.DateTimeFormat(localeMeta[locale].dateLocale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(value);
}

export function formatYear(value: Date, locale: Locale) {
  return new Intl.DateTimeFormat(localeMeta[locale].dateLocale, { year: 'numeric' }).format(value);
}

