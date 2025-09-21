module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yashkapure.netlify.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
