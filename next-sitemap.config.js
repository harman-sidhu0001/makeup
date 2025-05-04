/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://kamnamakeup.com",
  generateRobotsTxt: true, // ✅ also generate robots.txt file
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  trailingSlash: true,
};
