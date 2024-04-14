import Navbar from "../src/components/Navbar";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <>
      <Navbar />
      <div className="divider divider-secondary"></div>
      <Outlet />
    </>
  );
}
