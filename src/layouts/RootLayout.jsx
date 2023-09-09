import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import "./RootLayout.css";

export default function RootLayout() {
  return (
    <div className="rootLayout">
      <Navbar />
      <main className="main-screen">
        <Outlet />
      </main>
    </div>
  );
}
