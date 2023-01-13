import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
export default App;
