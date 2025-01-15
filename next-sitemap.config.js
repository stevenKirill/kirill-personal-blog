const { additionalPaths } = require('./additionalPaths');
const { transfrom } = require('./transform');

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  generateRobotsTxt: true,
  exclude: ['/server-error', '/404'],
  transform: transfrom,
  additionalPaths: additionalPaths,
};
