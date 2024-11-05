// src/pages/ErrorPage.tsx
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <h1>404: Page Not Found</h1>;
    }

    if (error.status === 500) {
      return <h1>500: Internal Server Error</h1>;
    }
  }

  // Handle non-HTTP errors or unexpected errors
  if (error instanceof Error) {
    return (
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
