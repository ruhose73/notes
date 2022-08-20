const request = require('request')

class ExternalMaterialService {

    async sendGreetingNotification(user, link) {
      const url = 'http://localhost:5200/mail/sendGreetingNotification'
      request({
      url : url,
      method :"POST",
      headers : {
        "content-type": "application/json",
      },
      body: {
        user: user, 
        link:link, 
      },
      json: true
    })
    }
}

module.exports = new ExternalMaterialService();
