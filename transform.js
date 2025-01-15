module.exports = {
  transfrom: async (config, path) => {
    if (path.includes('.mdx')) {
      console.log(`${config.siteUrl}/blog${path.replace('/blog/', '').replace('.mdx', '')}`)
      return {
        loc: `${config.siteUrl}/blog${path.replace('/blog/', '').replace('.mdx', '')}`,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    return {
      loc: `${config.siteUrl}${path}`,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  }
};
