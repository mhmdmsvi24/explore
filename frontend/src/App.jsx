import Country from "./pages/Country";
import Home from "./pages/Home";
import MainLayout from "./pages/MainLayout";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "/node_modules/qweather-icons/font/qweather-icons.css";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/country/:country" element={<Country />} />
      </Route>
    </Routes>
  )
}
