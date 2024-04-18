/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer");

const nextConfig = {
  compiler:{
    removeConsole: false,
    styledComponents: true,
  },
};

module.exports = withContentlayer({ ...nextConfig });
