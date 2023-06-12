const CustomAPIError = require("./custom-error")

class unauthorized extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode = 401
    }
  }
  
  module.exports = unauthorized
  