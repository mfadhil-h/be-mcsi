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
  async afterCreate(e) {
    const { result } = e;
    try {
      await strapi.plugins["email"].services.email.send({
        to: "noreply@mcs-internasional.com",
        subject: "Incoming Contact",
        text: "Incoming Contact",
        html: `
          <p>
            <strong>Nama</strong><br/>
            ${result.name}
          </p><br/>
          <p>
            <strong>Email</strong><br/>
            ${result.email}
          </p><br/>
          <p>
            <strong>No Telepon</strong><br/>
            ${result.phone}
          </p><br/>
          <p>
            <strong>Kategori</strong><br/>
            ${result.category}
          </p><br/>
          <p>
            <strong>Subjek</strong><br/>
            ${result.subject}
          </p><br/>
          <p>
            <strong>Pesan</strong><br/>
            ${result.message}
          </p><br/>
          <p>
            <strong>Dikirim pada</strong><br/>
            ${result.publishedAt}
          </p><br/>
        `,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
