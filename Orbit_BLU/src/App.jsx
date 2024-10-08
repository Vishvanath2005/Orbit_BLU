import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Insitution from "./pages/institution/Institution";
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/insitution" element={<Insitution/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
