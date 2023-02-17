import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FlightsListPage from "./pages/FlightsListPage";
import FlightPage from "./pages/FlightPage";
import ConfirmPage from "./pages/ConfirmPage";
import CongratulationsPage from "./pages/CongratulationsPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="" element={<MainPage />} />
        <Route path="/flights" element={<FlightsListPage />} />
        <Route path="/flights/:id" element={<FlightPage />} />
        <Route path="/flights/:id/confirm" element={<ConfirmPage />} />
        <Route path="/congratulations" element={<CongratulationsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
