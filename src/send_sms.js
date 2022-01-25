const accountSid = "AC56639bf8033e6409dd75e1515ef10754";
const authToken = "b16504d8f8d7aa2a60e14291dcb203fc";
const client = require("twilio")(accountSid, authToken);

const sendMessage = (message) => {
  client.messages
    // Twilio phone number +16066128682
    .create({
      body: message,
      from: "+16066128682",
      to: "+447479198857",
    })
    .then((message) => console.log(message.sid));
};

// sendMessage('Welcome to Boolean', '+16066128682', '+447479198857')

module.exports = sendMessage;
