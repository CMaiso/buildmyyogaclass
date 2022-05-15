import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import HomePage from "./pages/homepage";
import RegisterPage from "./pages/register";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
