const accountSid = 'ACf1c5e9546424fcba4f3573d8d0025774'
const authToken = '****************************'
const client = require('twilio')(accountSid, authToken)

class Twilio {
  static twilioSMS (name, lastName, cohortName) {
    client.messages
      .create({
        body: `${name} ${lastName} has been added to ${cohortName}`,
        from: '+personal phone number',
        to: '+twilio number'
      })
  }
}

module.exports = Twilio
