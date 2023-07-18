import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./layout/Layout";
import Loader from "../components/Loader/Loader";
import ErrorBoundary from "../error/ErrorBoundary";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        {isLoading ? (
          <Loader />
        ) : (
          <Layout>
            <AppRoutes />
          </Layout>
        )}
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
