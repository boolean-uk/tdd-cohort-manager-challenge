require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = require('twilio')(accountSid, authToken)

function smsNotification(message) {
  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE,
      to: process.env.MY_PHONE_NUMBER
    })
    .then((message) => console.log(message.sid))
}

module.exports = { smsNotification }
