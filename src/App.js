import BaseLayout from "components/BaseLayout";
import Home from "./components/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Report from "components/Report";
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
