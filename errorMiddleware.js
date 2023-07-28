// errorMiddleware.js

export const errorHandler = (err, req, res, next) => {
    console.error("Error occurred:", err);
  
    // Default status and error message
    let status = 500;
    let message = "Internal Server Error";
  
    // Customize error status and message based on error type
    if (err instanceof Error) {
      status = err.status || 500;
      message = err.message || "Internal Server Error";
    }
  
    res.status(status).json({ error: message });
  };
  