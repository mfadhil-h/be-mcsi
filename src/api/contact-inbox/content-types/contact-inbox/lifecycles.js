const axios = require("axios");
const utils = require("@strapi/utils");
const { ApplicationError } = utils.errors;

module.exports = {
  async beforeCreate(e) {
    try {
      const { data } = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        undefined,
        {
          params: {
            secret: "6LeOhLMjAAAAAJt46FMdfFKM0tp3he6hQt-r9CWU",
            response: e.params.data.token,
          },
        }
      );
      if (!data.success) {
        throw new ApplicationError("Recaptcha Error A");
      }
    } catch (err) {
      throw err;
    }
  },
};
