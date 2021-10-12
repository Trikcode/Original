const CustomAPIError = require('../errors/custom')
const { StatusCodes } = require('http-status-codes')
class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCodes = StatusCodes.BAD_REQUEST
  }
}
module.exports = BadRequestError
