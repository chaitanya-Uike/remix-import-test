import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";

import globalStyle from "./styles/global.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Welcome to Remix!" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: globalStyle }]
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="error-boundary-container">
          <div className="error-boundary">
            <h1 style={{ fontSize: 50 }}>
              Oops!
            </h1>
            {isRouteErrorResponse(error) ? (
              <p>{error.status === 404 ? "Sorry, we couldn't find what your were looking for." : "Something went wrong, try reloading the page."}</p>
            ) : (
              <div className="error-message-container">
                <p style={{ fontSize: 30 }}>Something unexpected happened</p>
                <p>{error.message || "unknown error"}</p>
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}