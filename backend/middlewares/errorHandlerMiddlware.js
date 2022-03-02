const ErrorHandler = require("../errors/index");

const notFound = (req, res, next) => {
  next(ErrorHandler.pathNotFoundError(`Not Found - ${req.originalUrl}`));
};

const errorHandler = (err, req, res, next) => {
  console.error(err);
  // next(ErrorHandler.validationError("Name and Price filds are required"));

  if (err instanceof ErrorHandler) {
    //? error is object of ErrorHandler class
    res.status(err.status).json({
      error: {
        status: err.status,
        message: err.message,
        stack: process.env.NODE_ENV === "prod" ? null : err.stack,
      },
    });
  } else {
    res.status(500).json({
      error: {
        status: 500,
        message: err.message,
        stack: process.env.NODE_ENV === "prod" ? null : err.stack,
      },
    });
  }
};

module.exports = { errorHandler, notFound };
