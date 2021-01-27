require("dotenv").config();
const sgMail = require("@sendgrid/mail");

exports.handler = async (event, context, callback) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const data = JSON.parse(event.body).data;
  const { name, email, message } = data;
  const msg = {
    to: "dev@dillonestrada.com",
    from: "dillon@dillonestrada.com",
    subject: "Message from dillonestrada.com",
    html: `<div>Name: ${name}</div> <div>Email: ${email}</div> <div>Message: ${message}</div>`
  };

  (async () => {
    try {
      await sgMail.send(msg);
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
      };
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }

      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, error: error })
      };
    }
  })();
  //   sgMail
  //     .send(msg)
  //     .then(() => {
  //       return {
  //         statusCode: 200,
  //         body: JSON.stringify({ success: true })
  //       };
  //     })
  //     .catch(error => {
  //       return {
  //         statusCode: 500,
  //         body: JSON.stringify({ success: false, error: error })
  //       };
  //     });
};
