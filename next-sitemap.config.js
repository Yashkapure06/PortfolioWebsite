module.exports = {
  siteUrl: 'https://yashkapure.netlify.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      // GEO: Allow AI crawlers for generative engine visibility (ChatGPT, Perplexity, Claude, etc.)
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'Anthropic-AI', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: ['https://yashkapure.netlify.app/sitemap.xml'],
  },
  // Additional paths for better indexing
  additionalPaths: async () => {
    const result = [];
    // Add any additional paths you want to include
    return result;
  },
  // Exclude paths that shouldn't be indexed
  exclude: ['/404', '/api/*'],
  // Change frequency and priority for better SEO
  changefreq: 'weekly',
  priority: 0.7,
  // Add lastmod to help search engines understand content freshness
  autoLastmod: true,
};
