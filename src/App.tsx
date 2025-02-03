import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/Theme_Provider";
import DashBoard from "./pages/DashBoard";
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
            <Route path="/" element={<DashBoard/>}/>
            <Route path="/city/:cityName" element={<DashBoard/>}/>
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
