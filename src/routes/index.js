import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/homepage";
import RingPage from "../pages/RingPage/RingPage";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/nhan-bac" element={<RingPage />} />
    </Routes>
  );
}
