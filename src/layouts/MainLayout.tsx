import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
}