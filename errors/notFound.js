const CustomAPIError = require('../errors/custom')
const { StatusCodes } = require('http-status-codes')
class notFoundError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCodes = StatusCodes.NOT_FOUND
  }
}
module.exports = notFoundError
