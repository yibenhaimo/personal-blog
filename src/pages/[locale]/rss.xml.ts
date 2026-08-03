import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getEntryPath, postsForLocale } from '../../lib/content';
import { getUi, isLocale, locales, localizedPath } from '../../lib/i18n';

export async function getStaticPaths() {
  return locales.map((locale) => ({ params: { locale } }));
}

export const GET: APIRoute = async ({ params, site }) => {
  const rawLocale = params.locale;
  if (!isLocale(rawLocale)) return new Response('Not found', { status: 404 });
  const locale = rawLocale;
  const copy = getUi(locale);
  const entries = await getCollection('blog');
  const posts = postsForLocale(entries, locale);
  const base = site || new URL('https://kunkun-blog.pages.dev');

  return rss({
    title: `坤坤的博客 · ${copy.nav.blog}`,
    description: copy.blog.intro,
    site: new URL(localizedPath(locale), base).toString(),
    items: posts.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: new URL(getEntryPath(entry), base).toString(),
      categories: entry.data.tags,
    })),
  });
};
