

// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'ACc873779e4171f0510617a24107fe845b';
const authToken = '57691bd1c9c057db6a17fff54b9b9c77';
const client = require('twilio')(accountSid, authToken);

const sendMessage = (message) => {
    client.messages
    //Twilio phone number +16067555533
    .create({
     body: body,
     from: '+16067555533',
     to: '+447964199083'
   })
  .then((message) => console.log(message.sid));
}

// sendMessage('Welcome to Boolean', '+16067555533', '+447964199083')

module.exports = sendMessage;