const {StatusCodes} = require('http-status-codes');
class AppErrors extends Error {
  constructor(name = 'Apperror',message = 'Something went wrong',explanation = 'Something went wrong',statuscode = StatusCodes.INTERNAL_SERVER_ERROR){
    super();
    this.message = message,
    this.explanation = explanation,
    this.name = name,
    this.statuscode = statuscode
  }

}
module.exports = AppErrors