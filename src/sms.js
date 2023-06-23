require('dotenv').config()
const accountSid = process.env.sid
const authToken = process.env.token
const client = require('twilio')(accountSid, authToken)

class Twilio {
  sendMessage(contactNumber, regTime, studentName, cohortName) {
    // console.log(client)
    client.messages
      .create({
        body: `\nCongratulations ${studentName}\nYou have been added to ${cohortName}\n You are Student in ${cohortName} from :${regTime}`,
        from: '+15154978934',
        to: `${contactNumber}`
      })
      .then((message) => console.log(message.status))
  }
}

module.exports = Twilio
