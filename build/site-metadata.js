export function resolveSiteUrl(env) {
  const configured = env.VITE_SITE_URL || env.VERCEL_PROJECT_PRODUCTION_URL || env.URL;
  if (!configured) return null;
  const url = new URL(configured.includes('://') ? configured : `https://${configured}`);
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) {
    throw new Error('Site URL must be an HTTP(S) URL without credentials.');
  }
  url.search = '';
  if (url.pathname !== '/') throw new Error('This portfolio must be hosted at the domain root. Set VITE_SITE_URL to the origin only.');
  url.hash = '';
  return url.href.replace(/\/$/, '');
}

export function siteMetadata(siteUrl) {
  return {
    name: 'portfolio-site-metadata',
    generateBundle() {
      const sitemapLine = siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : '';
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n${sitemapLine}` });
      if (siteUrl) {
        const escapedUrl = `${siteUrl}/`.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escapedUrl}</loc></url></urlset>\n` });
      }
    },
    transformIndexHtml(html) {
      if (!siteUrl) return html;
      return {
        html: html.replaceAll('content="/og-preview.png"', `content="${siteUrl.replaceAll('&', '&amp;').replaceAll('"', '&quot;')}/og-preview.png"`),
        tags: [
          { tag: 'link', attrs: { rel: 'canonical', href: `${siteUrl}/` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: `${siteUrl}/` }, injectTo: 'head' },
        ],
      };
    },
  };
}
