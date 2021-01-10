module.exports = () => {
  return {
    eleventy: require("@11ty/eleventy/package.json").version,
    liquidjs: require("liquidjs/package.json").version,
    nunjucks: require("nunjucks/package.json").version,
  };
};
