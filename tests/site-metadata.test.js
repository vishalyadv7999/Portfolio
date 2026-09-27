import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveSiteUrl, siteMetadata } from '../build/site-metadata.js';

test('production crawl files use the actual configured domain', () => {
  const assets = [];
  siteMetadata('https://portfolio.example').generateBundle.call({ emitFile: asset => assets.push(asset) });
  assert.match(assets.find(asset => asset.fileName === 'robots.txt').source, /Sitemap: https:\/\/portfolio\.example\/sitemap.xml/);
  assert.match(assets.find(asset => asset.fileName === 'sitemap.xml').source, /<loc>https:\/\/portfolio\.example\/<\/loc>/);
});

test('a local build does not invent a sitemap domain', () => {
  const assets = [];
  siteMetadata(null).generateBundle.call({ emitFile: asset => assets.push(asset) });
  assert.deepEqual(assets.map(asset => asset.fileName), ['robots.txt']);
  assert.doesNotMatch(assets[0].source, /Sitemap:/);
  assert.throws(() => resolveSiteUrl({ VITE_SITE_URL: 'https://portfolio.example/subdirectory/' }), /domain root/);
});

test('deployment metadata uses the configured domain and strips query data', () => {
  const url = resolveSiteUrl({ VITE_SITE_URL: 'https://portfolio.example/?preview=true#work' });
  assert.equal(url, 'https://portfolio.example');
  const result = siteMetadata(url).transformIndexHtml('<meta property="og:image" content="/og-preview.png" />');
  assert.match(result.html, /https:\/\/portfolio\.example\/og-preview\.png/);
  assert.equal(result.tags[0].attrs.href, 'https://portfolio.example/');
});

test('hosting defaults work without inventing a production domain', () => {
  assert.equal(resolveSiteUrl({ VERCEL_PROJECT_PRODUCTION_URL: 'portfolio.example' }), 'https://portfolio.example');
  assert.equal(resolveSiteUrl({ URL: 'https://portfolio.example/' }), 'https://portfolio.example');
  assert.equal(resolveSiteUrl({}), null);
  assert.equal(siteMetadata(null).transformIndexHtml('original'), 'original');
});

test('invalid schemes and credentials are rejected', () => {
  assert.throws(() => resolveSiteUrl({ VITE_SITE_URL: 'ftp://portfolio.example' }));
  assert.throws(() => resolveSiteUrl({ VITE_SITE_URL: 'https://user:secret@portfolio.example' }));
});
