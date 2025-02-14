/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.robothinkcil.com',
    generateRobotsTxt: true, // Automatically generates a robots.txt file
    // Exclude any paths that you don't want to appear in your sitemap
    exclude: ['/admin/*'],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*', // Applies to all crawlers
          allow: '/',     // Allow crawling of all pages by default
          disallow: ['/admin'], // Block crawlers from admin pages
        },
      ],
      // If you have additional custom sitemaps, list them here.
      additionalSitemaps: [
        'https://www.robothinkcil.com/sitemap.xml'
      ],
    },
  };