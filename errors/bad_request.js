const CustomAPIError = require("./custom-error")

class bad_request extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode = 400
    }
  }
  
  module.exports = bad_request
  