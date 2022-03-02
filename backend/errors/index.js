class ErrorHandler {
    constructor(status, message, stack) {
      this.status = status;
      this.message = message;
      this.stack = stack;
    }
  
    // no need to make object for static method
    static notFoundError(message = "Not found!", stack = null) {
      return new ErrorHandler(404, message, stack);
    }
  
    static forbidden(message = "User not allowed!", stack = null) {
      return new ErrorHandler(403, message, stack);
    }
  
    static validationError(message = "All fields are required!", stack = null) {
      return new ErrorHandler(422, message, stack);
    }
  
    static serverError(message = "Internal error", stack = null) {
      return new ErrorHandler(500, message, stack);
    }
  
    //* --------------------- Authantication ------------------------
    static invalidRequestError(message = "Bad Request", stack = null) {
      return new ErrorHandler(400, message, stack);
    }
    static UnauthorizedError(message = "Invalid Credantials", stack = null) {
      return new ErrorHandler(401, message, stack);
    }
  
    //* Path Not found
    static pathNotFoundError(message = `URL path Not Found`, stack = null) {
      return new ErrorHandler(404, message, stack);
    }
  }
  [];
  
  module.exports = ErrorHandler;
  