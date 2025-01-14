const fs = require('fs');
const glob = require('glob');

module.exports = {
  additionalPaths: async () => {
    try {
      const files = glob.sync('./posts/**/*.mdx');

      return files.map((file) => {
        const filePath = file.split('posts/')[1];
        return {
          url: filePath.replace('.mdx', ''),
          priority: 0.8,
          lastmodISO: fs.statSync(file).mtime.toISOString(),
        };
      });
    } catch (error) {
      console.error(error);
    }
  },
};
