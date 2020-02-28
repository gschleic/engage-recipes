const Configstore = require("configstore");
const conf = new Configstore("engage");

module.exports = async toolbox => {
  toolbox.recipes = async () => {
    toolsbox.print.info("this is a recipe");
  };
};
