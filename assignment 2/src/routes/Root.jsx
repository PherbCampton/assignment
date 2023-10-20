import { Link } from "react-router-dom";
import ErrorTest from "../ErrorTest";
import { ErrorBoundary } from "react-error-boundary";

export default function Root() {
  return (
    <>
      <ErrorBoundary fallback={<h4>There is an error in a component</h4>}>
        <h1>Welcome to our website...</h1>
        <p>
          Please check our <Link to="/counter">counter app</Link>
        </p>
        <ErrorTest />
        <p>
          You can also check out our 404 page by clicking on this link that
          directs you to an invalid path 404 Page
        </p>

        <Link to="djklsnkldnklsjnkljd"> Try out the 404 Page</Link>
      </ErrorBoundary>
    </>
  );
}
