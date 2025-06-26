import {
  Link,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "react-router-dom";

const ErrorBoundary = () => {
  const routeError = useRouteError() as unknown;

  const navigate = useNavigate();

  let status: number | undefined;
  let statusText: string | undefined;
  let message: string | undefined;

  if (isRouteErrorResponse(routeError)) {
    status = routeError.status;
    statusText = routeError.statusText;
    message = routeError.data;
  } else if (routeError instanceof Error) {
    message = routeError.message;
  }

  return (
    <div className="text-center py-8 container">
      <h1 className="text-red-500">Oops! Something went wrong.</h1>
      <h3 className="text-foreground">
        {status} {statusText}
      </h3>
      <p className="w-full text-left whitespace-break-spaces break-words text-primary-foreground py-8 px-12 my-8">
        {message}
      </p>
      <p>
        Please contact the maintainers of the website
        <Link className="text-accent-5 hover:underline" to="/contact">
          here
        </Link>
      </p>
      <p
        onClick={() => navigate(-1)}
        className="text-accent-6 hover:underline hover:text-accent-8 cursor-pointer"
      >
        Go back
      </p>
    </div>
  );
};

export default ErrorBoundary;
