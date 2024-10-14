import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/common/Layout";
import AppRoutes from "./routes/Routes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const nickname = "John";

  return (
    <AuthProvider>
      <Router>
        <Layout nickname={nickname}>
          <AppRoutes />
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
