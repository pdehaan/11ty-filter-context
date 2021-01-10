const {inspect } = require("util");

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("getContext", function () { return this.ctx; });
  eleventyConfig.addFilter("inspect", (obj) => inspect(obj));
  eleventyConfig.addFilter("getVariables", function () { return this.getVariables(); });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
