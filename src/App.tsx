import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Button } from "./components/ui/button";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/Theme_Provider";
import DashBoard from "./pages/DashBoard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
          <Layout>
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/city/:cityName" element={<DashBoard />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
