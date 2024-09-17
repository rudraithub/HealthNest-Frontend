import React from 'react';
import { useRouteError, isRouteErrorResponse  } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  
  let title = "An error occurred!"
  let message = "Something went wrong!"

  if (isRouteErrorResponse(error)) {
    if (error.status === 500) {
      title = "Internal Server Error";
      message = error.data?.message || "An unexpected error occurred.";
    }
    if (error.status === 404) {
      title = "Oops! Page Not Found";
      message = "Sorry, the page you're looking for doesn't exist.";
    }
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;
