import BaseLayout from "components/layout/BaseLayout";
import Home from "./components/routes/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Report from "components/routes/Report";
import Settings from "components/routes/Settings";
import { SettingsProvider } from "./context/SettingsContext";

function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path={"/report"} element={<Report />} />
            <Route path={"/settings"} element={<Settings />} />
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </SettingsProvider>
  );
}

export default App;
