import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';

export type BlogEntry = CollectionEntry<'blog'>;

export async function getBlogEntries() {
  return getCollection('blog');
}

export function isPublished(entry: BlogEntry) {
  return !entry.data.draft;
}

export function getSlug(entry: BlogEntry) {
  return entry.id.split('/').slice(1).join('/');
}

export function getLocaleFromEntry(entry: BlogEntry) {
  return entry.data.locale as Locale;
}

export function getEntryPath(entry: BlogEntry) {
  return `/${getLocaleFromEntry(entry)}/blog/${getSlug(entry)}/`;
}

export function sortByDate(entries: BlogEntry[]) {
  return [...entries].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function postsForLocale(entries: BlogEntry[], locale: Locale) {
  return sortByDate(entries.filter((entry) => isPublished(entry) && getLocaleFromEntry(entry) === locale));
}

export function entriesForTranslation(entries: BlogEntry[], translationId: string) {
  return entries.filter((entry) => isPublished(entry) && entry.data.translationId === translationId);
}

export function relatedPosts(entries: BlogEntry[], current: BlogEntry, locale: Locale) {
  const currentTags = new Set(current.data.tags);
  return postsForLocale(entries, locale)
    .filter((entry) => entry.data.translationId !== current.data.translationId)
    .map((entry) => ({ entry, score: entry.data.tags.filter((tag) => currentTags.has(tag)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ entry }) => entry);
}

