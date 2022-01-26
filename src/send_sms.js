
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'ACc873779e4171f0510617a24107fe845b'
const authToken = '5b3ca822bee364e794b68067c850c5fd'
const client = require('twilio')(accountSid, authToken)

const sendMessage = (message) => {
    client.messages
    // Twilio phone number +16067555533
    .create({
     body: message,
     from: '+16067555533',
     to: '+447963196783'
   })
  .then((message) => console.log(message.sid))
}

//sendMessage('Welcome to Boolean')

module.exports = sendMessage
