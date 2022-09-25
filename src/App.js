import BaseLayout from "components/layout/BaseLayout";
import Home from "./components/routes/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Report from "components/routes/Report";
import { UserContext } from "context";

function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider value="Tony">
        <BaseLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path={"/report"} element={<Report />} />
            <Route path={"/settings"} element={<>Settings</>} />
          </Routes>
        </BaseLayout>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
